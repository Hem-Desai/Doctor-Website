import React from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react"; // Added Instagram import

export default function Footer() {
  return (
    <footer className="bg-rich-50 border-t border-rich-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rich-900">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-rich-600 hover-lift">
                <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span>A 102, Corus Ample, Ahmedabad, 380004</span>
              </div>
              <a
                href="tel:+919428071746"
                className="flex items-center space-x-2 text-rich-600 hover:text-emerald-600 transition-colors duration-150 hover-lift group"
              >
                <Phone className="h-5 w-5 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-150" />
                <span>+91 9428071746</span>
              </a>
              <a
                href="mailto:doctor@naturalhealing.com"
                className="flex items-center space-x-2 text-rich-600 hover:text-emerald-600 transition-colors duration-150 hover-lift group"
              >
                <Mail className="h-5 w-5 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-150" />
                <span>desaianupama21@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/thehomeopathicdoctor?igsh=MXN3cmlkdTY1bnRpeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-rich-600 hover:text-emerald-600 transition-colors duration-150 hover-lift group"
              >
                <Instagram className="h-5 w-5 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-150" />
                <span>Dr Anupama Desai</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rich-900">
              Clinic Hours
            </h3>
            <div className="space-y-2 text-rich-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rich-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/patient-form"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors duration-150 hover-lift inline-block"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors duration-150 hover-lift inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors duration-150 hover-lift inline-block"
                >
                  Doctor Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rich-200">
          <p className="text-center text-rich-500">
            © {new Date().getFullYear()} Dr. Anupama Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
