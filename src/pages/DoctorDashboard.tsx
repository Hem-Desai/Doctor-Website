import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Mail, Phone, Search, Filter } from "lucide-react";
import { supabase, getCurrentUser } from "../lib/supabase";
import PatientDetailsModal from "../components/PatientDetailsModal";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
  status: string;
}

interface PatientForm {
  id: string;
  patient_name: string;
  email: string;
  phone: string;
  age: number;
  symptoms: string;
  medical_history: string;
  created_at: string;
  status: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  marital_status: string | null;
  occupation: string | null;
  chief_complaints: string;
  duration_of_complaints: string;
  previous_treatments: string | null;
  current_medications: string | null;
  family_medical_history: string | null;
  lifestyle_habits: string | null;
  sleep_pattern: string | null;
  appetite: string | null;
  food_preferences: string | null;
  mental_emotional_state: string | null;
}

export default function DoctorDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"contacts" | "patients">(
    "patients"
  );
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [patients, setPatients] = useState<PatientForm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedPatient, setSelectedPatient] = useState<PatientForm | null>(
    null
  );

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const user = await getCurrentUser();
    if (!user) {
      navigate("/login");
      return;
    }
    loadData();
  };

  const loadData = async () => {
    try {
      const [contactsResponse, patientsResponse] = await Promise.all([
        supabase
          .from("contact_submissions")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("patient_forms")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      if (contactsResponse.error) throw contactsResponse.error;
      if (patientsResponse.error) throw patientsResponse.error;

      setContacts(contactsResponse.data);
      setPatients(patientsResponse.data);
    } catch (error) {
      toast.error("Failed to load data");
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    }
  };

  const handleStatusUpdate = async (
    id: string,
    newStatus: string,
    type: "patients" | "contacts"
  ) => {
    try {
      const { error } = await supabase
        .from(type === "patients" ? "patient_forms" : "contact_submissions")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;

      toast.success("Status updated successfully");
      loadData();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const openWhatsApp = (phone: string) => {
    const formattedPhone = phone.replace(/\D/g, "");
    window.open(`https://wa.me/${formattedPhone}`, "_blank");
  };

  const sendEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Filters and Search */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400 h-5 w-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("patients")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "patients"
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Patient Forms ({filteredPatients.length})
              </button>
              <button
                onClick={() => setActiveTab("contacts")}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "contacts"
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Contact Messages ({filteredContacts.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "patients" ? (
              <div className="space-y-6">
                {filteredPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {patient.patient_name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Submitted on{" "}
                          {new Date(patient.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <select
                          value={patient.status}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleStatusUpdate(
                              patient.id,
                              e.target.value,
                              "patients"
                            );
                          }}
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1 text-sm rounded-full bg-white border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              sendEmail(patient.email);
                            }}
                            className="text-emerald-600 hover:text-emerald-700"
                          >
                            {patient.email}
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openWhatsApp(patient.phone);
                            }}
                            className="text-emerald-600 hover:text-emerald-700"
                          >
                            {patient.phone}
                          </button>
                        </div>
                        <p className="text-gray-600 mt-2">Age: {patient.age}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <strong>Symptoms:</strong>
                          <br />
                          {patient.symptoms}
                        </p>
                        {patient.medical_history && (
                          <p className="text-gray-600 mt-2">
                            <strong>Medical History:</strong>
                            <br />
                            {patient.medical_history}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredContacts.map((contact) => (
                  <div key={contact.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Sent on{" "}
                          {new Date(contact.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <select
                          value={contact.status}
                          onChange={(e) =>
                            handleStatusUpdate(
                              contact.id,
                              e.target.value,
                              "contacts"
                            )
                          }
                          className="px-3 py-1 text-sm rounded-full bg-white border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            sendEmail(contact.email);
                          }}
                          className="text-emerald-600 hover:text-emerald-700"
                        >
                          {contact.email}
                        </button>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openWhatsApp(contact.phone);
                            }}
                            className="text-emerald-600 hover:text-emerald-700"
                          >
                            {contact.phone}
                          </button>
                        </div>
                      )}
                      <p className="text-gray-600 mt-2">
                        <strong>Message:</strong>
                        <br />
                        {contact.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}
