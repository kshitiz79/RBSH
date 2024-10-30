import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Career2 = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_8tpkzl5', // Replace with your EmailJS service ID
        'template_xsqdxx8', // Replace with your EmailJS template ID
        form.current,
        'cOgeWE_ZecC61i1YX' // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Application submitted successfully!");
          setLoading(false);
        },
        (error) => {
          console.error("Failed to submit the application:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full lg:w-1/4 md:w-4/6 mx-auto mt-9 px-4">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 lg:mt-6">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="first_name" // Name attribute for EmailJS
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="First Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="last_name" // Name attribute for EmailJS
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Last Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email" // Name attribute for EmailJS
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="from_number" // Name attribute for EmailJS
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Phone"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location (City) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city" // Name attribute for EmailJS
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Location (City)"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default Career2;
