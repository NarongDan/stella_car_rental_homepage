import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <form>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2">Name</label>
            <input
              type="text"
              className="p-3 bg-gray-100 rounded border border-gray-300"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="p-3 bg-gray-100 rounded border border-gray-300"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-gray-600 mb-2">Message</label>
          <textarea
            className="p-3 bg-gray-100 rounded border border-gray-300 resize-none"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-secondary-color hover:bg-thirdly-color text-white rounded text-lg shadow-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
