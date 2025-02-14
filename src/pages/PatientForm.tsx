import React, { useState } from "react";
import { toast } from "sonner";
import { supabase, submitPatientForm } from "../lib/supabase";

export default function PatientForm() {
  const [formData, setFormData] = useState({
    patient_name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    marital_status: "",
    occupation: "",
    chief_complaints: "",
    duration_of_complaints: "",
    previous_treatments: "",
    current_medications: "",
    medical_history: "",
    family_medical_history: "",
    lifestyle_habits: "",
    sleep_pattern: "",
    appetite: "",
    food_preferences: "",
    mental_emotional_state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await submitPatientForm(formData);

      if (error) {
        console.error("Form submission error details:", error);
        throw error;
      }

      toast.success("Form submitted successfully!");
      // Reset form
      setFormData({
        patient_name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        marital_status: "",
        occupation: "",
        chief_complaints: "",
        duration_of_complaints: "",
        previous_treatments: "",
        current_medications: "",
        medical_history: "",
        family_medical_history: "",
        lifestyle_habits: "",
        sleep_pattern: "",
        appetite: "",
        food_preferences: "",
        mental_emotional_state: "",
      });
    } catch (error: any) {
      console.error("Form submission error:", {
        message: error.message,
        stack: error.stack,
        details: error,
      });
      toast.error(error.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Homeopathic Consultation Form
          </h1>
          <p className="text-xl text-gray-600">
            Please fill out this detailed form to help us provide you with the
            best possible homeopathic care.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="patient_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="patient_name"
                    required
                    value={formData.patient_name}
                    onChange={(e) =>
                      setFormData({ ...formData, patient_name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    required
                    min="0"
                    max="150"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gender *
                  </label>
                  <select
                    id="gender"
                    required
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="marital_status"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Marital Status
                  </label>
                  <select
                    id="marital_status"
                    value={formData.marital_status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        marital_status: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) =>
                      setFormData({ ...formData, occupation: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address *
                  </label>
                  <textarea
                    id="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      required
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      required
                      value={formData.pincode}
                      onChange={(e) =>
                        setFormData({ ...formData, pincode: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Information Section */}
            <div className="space-y-6 pt-6 border-t">
              <h2 className="text-2xl font-semibold text-gray-900">
                Medical Information
              </h2>

              <div>
                <label
                  htmlFor="chief_complaints"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Chief Complaints *
                </label>
                <textarea
                  id="chief_complaints"
                  required
                  rows={4}
                  value={formData.chief_complaints}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      chief_complaints: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Please describe your main health concerns"
                />
              </div>

              <div>
                <label
                  htmlFor="duration_of_complaints"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Duration of Complaints *
                </label>
                <input
                  type="text"
                  id="duration_of_complaints"
                  required
                  value={formData.duration_of_complaints}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      duration_of_complaints: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="How long have you been experiencing these symptoms?"
                />
              </div>

              <div>
                <label
                  htmlFor="previous_treatments"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Previous Treatments
                </label>
                <textarea
                  id="previous_treatments"
                  rows={3}
                  value={formData.previous_treatments}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      previous_treatments: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="List any previous treatments you've received for these complaints"
                />
              </div>

              <div>
                <label
                  htmlFor="current_medications"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current Medications
                </label>
                <textarea
                  id="current_medications"
                  rows={3}
                  value={formData.current_medications}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      current_medications: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="List any medications you are currently taking"
                />
              </div>

              <div>
                <label
                  htmlFor="medical_history"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Past Medical History
                </label>
                <textarea
                  id="medical_history"
                  rows={4}
                  value={formData.medical_history}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      medical_history: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="List any past illnesses, surgeries, or medical conditions"
                />
              </div>

              <div>
                <label
                  htmlFor="family_medical_history"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Family Medical History
                </label>
                <textarea
                  id="family_medical_history"
                  rows={3}
                  value={formData.family_medical_history}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      family_medical_history: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="List any significant medical conditions in your family"
                />
              </div>
            </div>

            {/* Lifestyle and Personal Habits Section */}
            <div className="space-y-6 pt-6 border-t">
              <h2 className="text-2xl font-semibold text-gray-900">
                Lifestyle and Personal Habits
              </h2>

              <div>
                <label
                  htmlFor="lifestyle_habits"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Lifestyle Habits
                </label>
                <textarea
                  id="lifestyle_habits"
                  rows={3}
                  value={formData.lifestyle_habits}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lifestyle_habits: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Describe your daily routine, exercise habits, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="sleep_pattern"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sleep Pattern
                </label>
                <textarea
                  id="sleep_pattern"
                  rows={2}
                  value={formData.sleep_pattern}
                  onChange={(e) =>
                    setFormData({ ...formData, sleep_pattern: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Describe your sleep habits and any sleep-related issues"
                />
              </div>

              <div>
                <label
                  htmlFor="appetite"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Appetite and Digestion
                </label>
                <textarea
                  id="appetite"
                  rows={2}
                  value={formData.appetite}
                  onChange={(e) =>
                    setFormData({ ...formData, appetite: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Describe your appetite and any digestive issues"
                />
              </div>

              <div>
                <label
                  htmlFor="food_preferences"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Food Preferences and Aversions
                </label>
                <textarea
                  id="food_preferences"
                  rows={2}
                  value={formData.food_preferences}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      food_preferences: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="List any specific food preferences or aversions"
                />
              </div>

              <div>
                <label
                  htmlFor="mental_emotional_state"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mental and Emotional State
                </label>
                <textarea
                  id="mental_emotional_state"
                  rows={3}
                  value={formData.mental_emotional_state}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mental_emotional_state: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Describe your current mental and emotional well-being"
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Form"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
