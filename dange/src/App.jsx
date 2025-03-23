import React from "react";
import { Landmark, Phone, Mail } from "lucide-react";
import "./index.css";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-10 bg-blue-50 rounded-3xl shadow-2xl">
      {/* Left: Contact Info */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="space-y-6 pt-6 pb-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-[#002D62]">Reach Us</h2>
            <p className="text-gray-700 font-medium">
              We’re just a message or call away. Reach out and let’s connect!
            </p>
          </div>

          <div className="relative pt-10">
            {/* Vertical Line aligned center of cards */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 transform -translate-x-1/2 w-0.5 bg-[#002D62]/30 z-0"></div>

            <div className="relative z-10 space-y-10 pl-12">
              <div className="bg-[#FFECD1] p-4 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-black">
                  <Landmark className="text-[#F58220]" /> Visit Us
                </h3>
                <a
                  href="https://www.google.com/maps?q=21.236272,78.907972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#002D62] hover:underline block mt-1"
                >
                  <button className="text-left hover:underline">
                    Dange Associates office, beside ICICI Bank, Kalmeshwar - 441501
                  </button>
                </a>
              </div>

              <div className="bg-[#FFECD1] p-4 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-black">
                  <Phone className="text-[#F58220]" /> Call Us
                </h3>
                <a
                  href="tel:+917774882844"
                  className="text-[#002D62] hover:underline"
                >
                  +91 7774882844
                </a>
              </div>

              <div className="bg-[#FFECD1] p-4 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-black">
                  <Mail className="text-[#F58220]" /> Email Us
                </h3>
                <a
                  href="mailto:vedantdange18@gmail.com"
                  className="text-[#002D62] hover:underline"
                >
                  vedantdange18@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="bg-[#F7FAFC] p-6 rounded-3xl shadow-xl md:w-1/2 border">
        <h2 className="text-2xl font-bold mb-4 text-[#002D62]">Enquire Us</h2>
        <p className="text-sm text-gray-700 mb-6 font-medium">
          Ready to start a conversation? Drop your details below and we’ll get back to you with the solutions you need.
        </p>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-3 border rounded-xl shadow-sm"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-3 border rounded-xl shadow-sm"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border rounded-xl shadow-sm"
            required
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-3 border rounded-xl shadow-sm"
          />

          <textarea
            placeholder="How can we help?"
            className="w-full p-3 border rounded-xl shadow-sm h-32 resize-none"
            maxLength={120}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#002D62] text-white py-3 rounded-xl font-semibold hover:bg-[#001f4d] transition shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
