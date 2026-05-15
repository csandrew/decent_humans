import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-deep-brown sm:text-4xl">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-brown/80">
        Share your prayer request, testimony, or question. We pray over every message within 48 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-brown">
            Your name (optional)
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Or leave anonymous"
            className="w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-3 text-sm text-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-brown">
            Email address (optional)
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="We'll only use this to follow up"
            className="w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-3 text-sm text-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-brown">
            Your message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            placeholder="Share your prayer request, testimony, or question..."
            className="min-h-[180px] w-full rounded-sm border border-brown/20 bg-white/90 px-4 py-4 text-sm text-brown shadow-soft outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3 text-base font-semibold text-deep-brown shadow-soft transition hover:bg-[#b8922e]"
          type="submit"
        >
          Send Message →
        </button>
      </form>

      {status === 'success' && (
        <div className="mt-6 rounded-sm border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-900 shadow-soft">
          ✓ Thank you. We've received your message and will pray over it within 48 hours.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-6 rounded-sm border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-900 shadow-soft">
          ✗ Something went wrong. Please try again or WhatsApp us directly.
        </div>
      )}

      <div className="mt-6 rounded-sm border border-brown/20 bg-white/90 px-5 py-4 text-sm text-brown shadow-soft">
        Prefer WhatsApp?{' '}
        <a href="https://wa.me/254700000000" className="font-semibold text-deep-brown hover:text-gold">
          Chat with us directly
        </a>
      </div>
    </section>
  );
}

export default Contact;
