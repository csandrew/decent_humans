import { Link } from 'react-router-dom';

function Programs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl flex justify-center font-bold tracking-tight text-deep-brown sm:text-4xl">Our Programs</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-brown/80">
        The Decent Humans Growth Journey helps children build spiritual confidence, emotional resilience, and healthy friendships every Saturday.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-deep-brown">🌱 Discover</h3>
          <p className="mt-3 text-brown/80">
            Children learn who God created them to be. Self-awareness, identity in Christ, and discovering their unique gifts.
          </p>
        </div>
        <div className="rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-deep-brown">📖 Grow</h3>
          <p className="mt-3 text-brown/80">
            Bible-centered teaching with practical application. Memory verses, character stories, and faith-based life skills.
          </p>
        </div>
        <div className="rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-deep-brown">🤝 Connect</h3>
          <p className="mt-3 text-brown/80">
            Group activities, emotional support, and peer mentorship that build healthy relationships and belonging.
          </p>
        </div>
        <div className="rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-deep-brown">✨ Lead</h3>
          <p className="mt-3 text-brown/80">
            Confidence building, servant leadership, and purpose discovery for children who want to make a positive difference.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-[32px] border border-brown/10 bg-white p-10 shadow-soft">
        <h2 className="text-2xl font-semibold text-deep-brown">Program Details</h2>
        <p className="mt-4 text-brown/80">
          Saturdays, 9:00am–12:00pm in Nairobi. We serve children ages 6–14 with lessons, mentorship, group prayer, and interactive activities.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep-brown transition hover:bg-[#b8922e]"
        >
          Register via Contact
        </Link>
      </div>
    </section>
  );
}

export default Programs;
