import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Heart, Users, Sparkles, Wind, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-[600px] bg-gradient-to-br from-emerald-50 to-emerald-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float">
            <Sparkles className="w-12 h-12 text-emerald-200" />
          </div>
          <div
            className="absolute top-40 right-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <Wind className="w-16 h-16 text-emerald-200" />
          </div>
          <div
            className="absolute bottom-20 left-1/4 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <Sun className="w-20 h-20 text-emerald-200" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-pulse-slow">
            <Leaf className="w-24 h-24 text-emerald-200" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="py-20">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-rich-900">
              Natural Healing Through
              <br />
              Modern Homeopathy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-rich-600">
              Experience the power of homeopathic healing and wellbeing with us.
            </p>
            <Link
              to="/patient-form"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-md text-lg hover:bg-emerald-700 transition-colors duration-150 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-rich-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-rich-900 mb-4">
              Why Choose Homeopathy?
            </h2>
            <p className="text-xl text-rich-600 max-w-2xl mx-auto">
              Discover the benefits of natural healing through our personalized
              homeopathic treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group hover-lift">
              <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4 transition-transform duration-150 group-hover:scale-110">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Natural Treatment</h3>
              <p className="text-rich-600">
                Our remedies are made from natural substances, promoting gentle
                and effective healing.
              </p>
            </div>

            <div className="text-center group hover-lift">
              <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4 transition-transform duration-150 group-hover:scale-110">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Holistic Approach</h3>
              <p className="text-rich-600">
                We treat the whole person, not just the symptoms, addressing the
                root cause of illness.
              </p>
            </div>

            <div className="text-center group hover-lift">
              <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4 transition-transform duration-150 group-hover:scale-110">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Personalized Care</h3>
              <p className="text-rich-600">
                Each treatment plan is tailored to your unique health needs and
                conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Doctor Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-emerald-50 p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-100/50 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-3xl font-light text-rich-900 mb-6">
                  Meet Dr. Anupama Desai
                </h2>
                <p className="text-lg text-rich-600 mb-6">
                  With over 25 years of experience in homeopathic medicine, Dr.
                  Anupama Desai has helped thousands of patients achieve optimal
                  health through natural healing methods.
                </p>
                <p className="text-lg text-rich-600 mb-8">
                  Her approach combines traditional homeopathic principles with
                  modern medical knowledge, ensuring the best possible care for
                  her patients.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md text-lg hover:bg-emerald-700 transition-colors duration-150"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="animate-float" style={{ animationDelay: "0s" }}>
                  <div className="bg-emerald-100 w-40 h-40 rounded-full flex items-center justify-center">
                    <Heart className="w-20 h-20 text-emerald-600" />
                  </div>
                </div>
                <div
                  className="animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="bg-emerald-100 w-40 h-40 rounded-full flex items-center justify-center">
                    <Leaf className="w-20 h-20 text-emerald-600" />
                  </div>
                </div>
                <div className="animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-emerald-100 w-40 h-40 rounded-full flex items-center justify-center">
                    <Sparkles className="w-20 h-20 text-emerald-600" />
                  </div>
                </div>
                <div
                  className="animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="bg-emerald-100 w-40 h-40 rounded-full flex items-center justify-center">
                    <Sun className="w-20 h-20 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
