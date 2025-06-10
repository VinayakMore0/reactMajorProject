import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#1F1E24] text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6556CD]">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#49494C] ri-arrow-left-line"
          ></i>{" "}
          Contact Us
        </h1>
        <p className="text-lg mb-8">
          Have questions, suggestions, or feedback? We'd love to hear from you!
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {submitStatus === "success" && (
          <div className="bg-green-800 text-white p-4 rounded-md mb-6 animate-pulse">
            Thank you for your message! We'll respond shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6556CD] text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6556CD] text-white"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6556CD] text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6556CD] text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#6556CD] hover:bg-[#5447a6] text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>

        <div className="border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#6556CD]">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-3">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              vinayakmore4042@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> (91+) 920907****
            </p>
            <p>
              <span className="font-semibold">Address:</span> Pune, Maharashtra,
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
