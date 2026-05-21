import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaAt, FaGraduationCap, FaRegCommentDots, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

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
          <h1 className="text-4xl md:text-5xl font-bold text-deep-brown mb-4 flex items-center justify-center gap-3">
        
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
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <FaPhone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-deep-brown mb-1">Call Us</h3>
                <a href="tel:+254724436800" className="text-brown/70 hover:text-blue-600 transition-colors">
                  +254 724 436800
                </a>
              </div>
            </div>
            

            {/* Email */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <FaEnvelope className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-deep-brown mb-1">Email</h3>
                <a href="mailto:tribe@kinetiq-fit.com" className="text-brown/70 hover:text-purple-600 transition-colors">
                  tribe@kinetiq-fit.com
                </a>
              </div>
            </div>


            {/* Location */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-deep-brown mb-1">Location</h3>
                <p className="text-brown/70">
                  View Park Towers, 17TH Floor,<br />
                  Monrovia Street Nairobi, Kenya.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-deep-brown mb-2">
                  <FaUser className="inline mr-2 text-gold" size={14} />
                  Your name <span className="font-normal text-brown/60">(optional)</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Or leave anonymous"
                  className="w-full rounded-md border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-deep-brown mb-2">
                  <FaAt className="inline mr-2 text-gold" size={14} />
                  Email address <span className="font-normal text-brown/60">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="We'll only use this to follow up"
                  className="w-full rounded-md border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </div>

              <div>
                <label htmlFor="programme" className="block text-sm font-semibold text-deep-brown mb-2">
                  <FaGraduationCap className="inline mr-2 text-gold" size={14} />
                  Interested Programme
                </label>
                <select
                  id="programme"
                  name="programme"
                  value={formData.programme}
                  onChange={handleChange}
                  className="w-full rounded-md border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
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
                  <FaRegCommentDots className="inline mr-2 text-gold" size={14} />
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
                  className="min-h-[140px] w-full rounded-md border border-brown/20 bg-white/90 px-4 py-3 text-sm text-deep-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gold px-8 py-3 text-base font-semibold text-deep-brown rounded-md shadow-soft transition hover:bg-[#b8922e] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {status === "success" && (
              <div className="mt-6 rounded-sm border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-900 shadow-soft flex items-center gap-2">
                <FaCheckCircle className="text-green-600" size={18} />
                ✓ Thank you! We've received your message and will get back to you within 48 hours.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;