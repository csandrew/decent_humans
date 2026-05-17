import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    programme: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        programme: "",
        message: "",
      });
      setStatus("success");

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-brown/80 max-w-2xl mx-auto">
            Reach out and we'll help you be part of the movement journey.
            Share your prayer request, testimony, or question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Call */}
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-deep-brown mb-1">Call Us</h3>
                <a href="tel:+254724436800" className="text-brown/70 hover:text-blue-600 transition-colors">
                  +254 724 436800
                </a>
              </div>
            </div>
            

            {/* Email */}

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-deep-brown mb-1">Email</h3>
                <a href="mailto:tribe@kinetiq-fit.com" className="text-brown/70 hover:text-purple-600 transition-colors">
                  tribe@kinetiq-fit.com
                </a>
              </div>
            </div>


            {/* Location */}

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-deep-brown mb-1">Location</h3>
                <p className="text-brown/70">
                  View Park Towers, 17TH Floor,<br />
                  Monrovia Street Nairobi, Kenya.
                </p>
              </div>
            </div>


            {/* Hours */}

            <h3 className="text-lg font-semibold mb-2">Movement Hours</h3>
            <p className="opacity-95">Monday - Saturday: 6am - 9pm</p>
            <p className="opacity-95">Sunday: 8am - 6pm</p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.165-11.692c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Contact Form - Only One Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-deep-brown mb-2">
                  Your name <span className="font-normal text-brown/60">(optional)</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Or leave anonymous"
                  className="w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-deep-brown mb-2">
                  Email address <span className="font-normal text-brown/60">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="We'll only use this to follow up"
                  className="w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-deep-brown mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </div>

              <div>
                <label htmlFor="programme" className="block text-sm font-semibold text-deep-brown mb-2">
                  Interested Programme
                </label>
                <select
                  id="programme"
                  name="programme"
                  value={formData.programme}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                >
                  <option value="">Select a programme</option>
                  <option value="discover">Discover - Identity & Self-awareness</option>
                  <option value="grow">Grow - Bible & Character</option>
                  <option value="connect">Connect - Friendships & Support</option>
                  <option value="lead">Lead - Leadership & Confidence</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-deep-brown mb-2">
                  Your message <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share your prayer request, testimony, question, or movement goals..."
                  rows="4"
                  className="min-h-[140px] w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-gold px-8 py-3 text-base font-semibold text-deep-brown rounded-sm shadow-soft transition hover:bg-[#b8922e] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send Message →"}
              </button>
            </form>

            {status === "success" && (
              <div className="mt-6 rounded-sm border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-900 shadow-soft">
                ✓ Thank you! We've received your message and will get back to you within 48 hours.
              </div>
            )}

            <div className="mt-6 rounded-sm border border-brown/20 bg-white/90 px-5 py-4 text-sm text-brown shadow-soft">
              Prefer WhatsApp?{" "}
              <a href="https://wa.me/254700000000" className="font-semibold text-deep-brown hover:text-gold transition-colors">
                Chat with us directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;