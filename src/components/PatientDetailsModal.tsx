import React from "react";
import { X } from "lucide-react";

interface PatientFormDetails {
  id: string;
  patient_name: string;
  email: string;
  phone: string;
  age: number;
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
  medical_history: string | null;
  family_medical_history: string | null;
  lifestyle_habits: string | null;
  sleep_pattern: string | null;
  appetite: string | null;
  food_preferences: string | null;
  mental_emotional_state: string | null;
  created_at: string;
  status: string;
}

interface Props {
  patient: PatientFormDetails;
  onClose: () => void;
}

export default function PatientDetailsModal({ patient, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Patient Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Personal Information */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Full Name</p>
                <p className="text-base text-gray-900">
                  {patient.patient_name}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-base text-gray-900">{patient.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-base text-gray-900">{patient.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Age</p>
                <p className="text-base text-gray-900">{patient.age}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Gender</p>
                <p className="text-base text-gray-900">{patient.gender}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Marital Status
                </p>
                <p className="text-base text-gray-900">
                  {patient.marital_status || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Occupation</p>
                <p className="text-base text-gray-900">
                  {patient.occupation || "Not specified"}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-base text-gray-900">
                  {patient.address}, {patient.city}, {patient.state} -{" "}
                  {patient.pincode}
                </p>
              </div>
            </div>
          </section>

          {/* Medical Information */}
          <section className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Medical Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Chief Complaints
                </p>
                <p className="text-base text-gray-900">
                  {patient.chief_complaints}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Duration of Complaints
                </p>
                <p className="text-base text-gray-900">
                  {patient.duration_of_complaints}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Previous Treatments
                </p>
                <p className="text-base text-gray-900">
                  {patient.previous_treatments || "None"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Current Medications
                </p>
                <p className="text-base text-gray-900">
                  {patient.current_medications || "None"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Medical History
                </p>
                <p className="text-base text-gray-900">
                  {patient.medical_history || "None"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Family Medical History
                </p>
                <p className="text-base text-gray-900">
                  {patient.family_medical_history || "None"}
                </p>
              </div>
            </div>
          </section>

          {/* Lifestyle Information */}
          <section className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Lifestyle Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Lifestyle Habits
                </p>
                <p className="text-base text-gray-900">
                  {patient.lifestyle_habits || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Sleep Pattern
                </p>
                <p className="text-base text-gray-900">
                  {patient.sleep_pattern || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Appetite</p>
                <p className="text-base text-gray-900">
                  {patient.appetite || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Food Preferences
                </p>
                <p className="text-base text-gray-900">
                  {patient.food_preferences || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Mental and Emotional State
                </p>
                <p className="text-base text-gray-900">
                  {patient.mental_emotional_state || "Not specified"}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
