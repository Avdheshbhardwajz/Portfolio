import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your form submission logic
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-transparent border-2 border-white rounded-lg shadow-lg">
      <h2 className="text-2xl  mb-4 font-poppins text-white font-bold">
        Contact Us
      </h2>
      {submitted && (
        <p className="text-green-500 mb-4">Thank you for your message!</p>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-bold text-white font-poppins"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-white rounded-md shadow-sm bg-transparent text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg text-center"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-bold text-white font-poppins"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-white rounded-md shadow-sm bg-transparent text-white focus:border-indigo-500 focus:ring-indigo-500 text-center sm:text-lg"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-bold text-white font-poppins"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border border-white rounded-md shadow-sm bg-transparent text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg text-center"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-white text-base font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
