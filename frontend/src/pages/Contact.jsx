import { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaAt, 
  FaGraduationCap, FaRegCommentDots, FaPaperPlane, FaCheckCircle,
  FaInstagram, FaTwitter, FaFacebookF, FaYoutube
} from 'react-icons/fa';

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

  const socialLinks = [
    { href: 'https://www.instagram.com/csandrew_ke', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://twitter.com/cs_andrew', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://www.facebook.com/csandrew.ke', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://www.youtube.com/channel/UC9Xo8s5n1Z5j3k2l4m5n6o7', icon: FaYoutube, label: 'YouTube' }
  ];

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
    <div className="min-h-screen bg-gray-200 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 flex items-center justify-center gap-3 text-4xl font-bold text-primary md:text-5xl">
            <FaPaperPlane className="text-accent" size={36} />
            Let's Connect
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary/80 sm:text-xl">
            Reach out and we'll help you be part of the movement journey.
            Share your prayer request, testimony, or question.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Call */}
            <div className="group flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-200">
                <FaPhone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Call Us</h3>
                <a href="tel:+254724436800" className="text-secondary/70 hover:text-blue-600 transition-colors">
                  +254 724 436800
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 transition-colors group-hover:bg-purple-200">
                <FaEnvelope className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                <a href="mailto:tribe@kinetiq-fit.com" className="text-secondary/70 hover:text-purple-600 transition-colors">
                  tribe@kinetiq-fit.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="group flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 transition-colors group-hover:bg-green-200">
                <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Location</h3>
                <p className="text-secondary/70">
                  View Park Towers, 17TH Floor,<br />
                  Monrovia Street Nairobi, Kenya.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-primary mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-secondary/50 hover:text-accent hover:bg-accent/10 transition-colors p-3 rounded-full bg-gray-100"
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-primary mb-2">
                  <FaUser className="inline mr-2 text-accent" size={14} />
                  Your name <span className="font-normal text-secondary/60">(optional)</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Or leave anonymous"
                  className="w-full rounded-md border border-secondary/20 bg-white/90 px-4 py-3 text-sm text-primary shadow-soft outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  <FaAt className="inline mr-2 text-accent" size={14} />
                  Email address <span className="font-normal text-secondary/60">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="We'll only use this to follow up"
                  className="w-full rounded-md border border-secondary/20 bg-white/90 px-4 py-3 text-sm text-primary shadow-soft outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                />
              </div>

              <div>
                <label htmlFor="programme" className="block text-sm font-semibold text-primary mb-2">
                  <FaGraduationCap className="inline mr-2 text-accent" size={14} />
                  Interested Programme
                </label>
                <select
                  id="programme"
                  name="programme"
                  value={formData.programme}
                  onChange={handleChange}
                  className="w-full rounded-md border border-secondary/20 bg-white/90 px-4 py-3 text-sm text-primary shadow-soft outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
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
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  <FaRegCommentDots className="inline mr-2 text-accent" size={14} />
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
                  className="min-h-[140px] w-full rounded-md border border-secondary/20 bg-white/90 px-4 py-3 text-sm text-primary shadow-soft outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-accent hover:bg-accent/80 text-white px-8 py-3 text-base font-semibold rounded-md shadow-soft transition disabled:opacity-50 disabled:cursor-not-allowed"
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