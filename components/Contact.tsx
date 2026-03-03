'use client';

import { useState } from "react";
import { LettersPullUp } from "./LettersPullUp";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Clear error when typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    // Reset errors
    const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
    let hasError = false;

    if (!form.name) { newErrors.name = "Name is required"; hasError = true; }
    if (!form.email) { newErrors.email = "Email is required"; hasError = true; }
    else if (!validateEmail(form.email)) { newErrors.email = "Invalid email address"; hasError = true; }
    if (!form.phone) { newErrors.phone = "Phone number is required"; hasError = true; }
    if (!form.service) { newErrors.service = "Service is required"; hasError = true; }
    if (!form.message) { newErrors.message = "Message is required"; hasError = true; }

    setErrors(newErrors);
    if (hasError) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (err) {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // Function to determine border color
  const getBorderClass = (field: keyof typeof form) => {
    if (errors[field]) return "border-red-500";
    if (form[field] && (field !== "email" || validateEmail(form.email))) return "border-green-500";
    return "border-transparent";
  };

  // Function to show validation message
  const getMessage = (field: keyof typeof form) => {
    if (errors[field]) return <p className="text-red-500 text-sm mt-1">{errors[field]}</p>;
    if (form[field] && (field !== "email" || validateEmail(form.email))) return <p className="text-green-500 text-sm mt-1">Looks good!</p>;
    return null;
  };

  return (
    <section id='contact' className="py-20 bg-[#0f0f0f]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <LettersPullUp text="Get in Touch" />
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Let's discuss your project and make something awesome together!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#1B1B1B] p-5 sm:p-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`bg-[#0f0f0f] p-4 rounded-lg text-sm text-white placeholder-gray-500 border ${getBorderClass("name")} focus:outline-none focus:border-[#FF7A00] transition w-full`}
              />
              {getMessage("name")}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`bg-[#0f0f0f] p-4 rounded-lg text-sm text-white placeholder-gray-500 border ${getBorderClass("email")} focus:outline-none focus:border-[#FF7A00] transition w-full`}
              />
              {getMessage("email")}
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`bg-[#0f0f0f] p-4 rounded-lg text-sm text-white placeholder-gray-500 border ${getBorderClass("phone")} focus:outline-none focus:border-[#FF7A00] transition w-full`}
              />
              {getMessage("phone")}
            </div>

            {/* Service */}
            <div>
              <input
                name="service"
                value={form.service}
                onChange={handleChange}
                placeholder="Service of Interest"
                className={`bg-[#0f0f0f] p-4 rounded-lg text-sm text-white placeholder-gray-500 border ${getBorderClass("service")} focus:outline-none focus:border-[#FF7A00] transition w-full`}
              />
              {getMessage("service")}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Project Details"
                rows={5}
                className={`bg-[#0f0f0f] p-4 rounded-lg text-sm text-white placeholder-gray-500 border ${getBorderClass("message")} focus:outline-none focus:border-[#FF7A00] transition w-full`}
              />
              {getMessage("message")}
            </div>
          </div>

          {/* Success */}
          {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full md:w-auto bg-[#FF7A00] text-white px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}