import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Please connect to Supabase using the "Connect to Supabase" button.'
  );
}

// Create a single instance of the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Auth helper functions
export const getCurrentUser = async () => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) throw error;
    return session?.user ?? null;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

// Add these security helper functions
export const isAuthenticated = async () => {
  const user = await getCurrentUser();
  return !!user;
};

// Add rate limiting for form submissions
let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN = 60000; // 1 minute cooldown

export const submitPatientForm = async (formData: any) => {
  // Check for submission cooldown
  const now = Date.now();
  if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
    throw new Error("Please wait a minute before submitting another form");
  }

  try {
    // Sanitize input data
    const sanitizedData = Object.entries(formData).reduce(
      (acc, [key, value]) => {
        if (typeof value === "string") {
          // Basic XSS prevention
          acc[key] = value.replace(/[<>]/g, "");
        } else {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, any>
    );

    console.log("Attempting to submit form data:", sanitizedData);

    // Validate required fields
    const requiredFields = [
      "patient_name",
      "email",
      "phone",
      "age",
      "gender",
      "address",
      "city",
      "state",
      "pincode",
      "chief_complaints",
      "duration_of_complaints",
    ];

    for (const field of requiredFields) {
      if (!sanitizedData[field]) {
        throw new Error(`${field.replace("_", " ")} is required`);
      }
    }

    // Convert age to number and validate
    const age = parseInt(sanitizedData.age);
    if (isNaN(age) || age < 0 || age > 150) {
      throw new Error("Please enter a valid age");
    }

    // Create the data object explicitly
    const patientFormData = {
      patient_name: sanitizedData.patient_name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      age: age,
      gender: sanitizedData.gender,
      address: sanitizedData.address,
      city: sanitizedData.city,
      state: sanitizedData.state,
      pincode: sanitizedData.pincode,
      symptoms: sanitizedData.chief_complaints,
      marital_status: sanitizedData.marital_status || null,
      occupation: sanitizedData.occupation || null,
      chief_complaints: sanitizedData.chief_complaints,
      duration_of_complaints: sanitizedData.duration_of_complaints,
      previous_treatments: sanitizedData.previous_treatments || null,
      current_medications: sanitizedData.current_medications || null,
      medical_history: sanitizedData.medical_history || null,
      family_medical_history: sanitizedData.family_medical_history || null,
      lifestyle_habits: sanitizedData.lifestyle_habits || null,
      sleep_pattern: sanitizedData.sleep_pattern || null,
      appetite: sanitizedData.appetite || null,
      food_preferences: sanitizedData.food_preferences || null,
      mental_emotional_state: sanitizedData.mental_emotional_state || null,
    };

    console.log("Structured data to insert:", patientFormData);

    const { data, error } = await supabase
      .from("patient_forms")
      .insert([patientFormData])
      .select();

    if (error) {
      console.error("Detailed Supabase error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
        status: error.status,
        statusText: error.statusText,
      });
      throw new Error(`Database error: ${error.message}`);
    }

    console.log("Successfully inserted data:", data);
    lastSubmissionTime = now;
    return { data, error: null };
  } catch (error: any) {
    console.error("Full error object:", error);
    console.error("Error stack trace:", error.stack);
    return {
      data: null,
      error:
        error instanceof Error
          ? error
          : new Error(error?.message || "An unexpected error occurred"),
    };
  }
};

// Add this function to test the connection
export const testDatabaseConnection = async () => {
  try {
    const { data, error } = await supabase
      .from("patient_forms")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Database connection test error:", error);
      return false;
    }
    console.log("Database connection successful");
    return true;
  } catch (error) {
    console.error("Database connection test error:", error);
    return false;
  }
};

// Add this function to test the policies
export const testPatientFormPolicies = async () => {
  try {
    // Test insert (should work for public)
    const insertResult = await supabase
      .from("patient_forms")
      .insert([
        {
          patient_name: "Test Patient",
          email: "test@example.com",
          phone: "1234567890",
          age: 30,
          gender: "other",
          address: "Test Address",
          city: "Test City",
          state: "Test State",
          pincode: "123456",
          chief_complaints: "Test Complaint",
          duration_of_complaints: "1 day",
        },
      ])
      .select();

    console.log("Insert test result:", insertResult);

    return {
      success: !insertResult.error,
      error: insertResult.error,
    };
  } catch (error) {
    console.error("Policy test error:", error);
    return {
      success: false,
      error,
    };
  }
};
