"use client";

import React, { useState } from "react";
const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission, e.g., send to API
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="min-h-screen bg-background ">
      <div className="container mx-auto ">
        <div className="max-w-6xl mx-auto px-2 py-5">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Left Column: Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>

            {/* Right Column: Dealership Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Dealership Location
              </h2>
              <p>
                BMW Samarkand Dealership
                <br />
                123 Main Street
                <br />
                Samarkand, Uzbekistan
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-2">
                Business Hours
              </h2>
              <ul>
                <li>Mon - Fri: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 10:00 AM – 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-2">Phone Numbers</h2>
              <ul>
                <li>Sales: +998 90 123 45 67</li>
                <li>Service: +998 90 987 65 43</li>
              </ul>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Find Us on the Map</h2>
            <iframe
              title="BMW Dealership Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0244732918963!2d66.975013!3d39.654123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18b6a7d79b1d%3A0x9e7468cd58957b5f!2sBMW%20Dealer!5e0!3m2!1sen!2s!4v1719431817615!5m2!1sen!2s"
              width="100%"
              height="400"
              className="rounded border"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
