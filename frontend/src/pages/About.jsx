function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-deep-brown sm:text-4xl">About Us</h1>

      <div className="mt-10 rounded-sm border border-brown/10 bg-gray-200 p-10 shadow-soft">
        <blockquote className="text-xl font-semibold text-deep-brown">
          "Train up a child in the way he should go, and when he is old he will not depart from it." — Proverbs 22:6
        </blockquote>
      </div>

      <div className="mt-14 space-y-6 text-brown/80">
        <div>
          <h2 className="text-2xl font-semibold text-deep-brown">Our Story</h2>
          <p className="mt-3 leading-8">
            Decent Humans began in 2022 when a group of parents, teachers, and church leaders saw a gap in how children were being supported in Nairobi. Children were struggling with anxiety, identity questions, and spiritual disconnection, but there was no safe, affordable place that addressed all of these needs together.
          </p>
          <p className="mt-3 leading-8">
            We started with 12 children in a church hall. Today, we have grown to serve children across multiple counties, helping them learn, pray, play, and grow together.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-deep-brown">Our Values</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] border border-brown/10 bg-white p-8 text-center shadow-soft">
              <div className="text-4xl">🙏</div>
              <h3 className="mt-4 text-xl font-semibold text-deep-brown">Faith First</h3>
              <p className="mt-3 text-brown/80">Everything we do is rooted in scripture and the love of Christ.</p>
            </div>
            <div className="rounded-[32px] border border-brown/10 bg-white p-8 text-center shadow-soft">
              <div className="text-4xl">❤️</div>
              <h3 className="mt-4 text-xl font-semibold text-deep-brown">Whole Child</h3>
              <p className="mt-3 text-brown/80">We care about mental, emotional, spiritual, and social growth — not just academics.</p>
            </div>
            <div className="rounded-[32px] border border-brown/10 bg-white p-8 text-center shadow-soft">
              <div className="text-4xl">🤝</div>
              <h3 className="mt-4 text-xl font-semibold text-deep-brown">Safe & Loving</h3>
              <p className="mt-3 text-brown/80">Every child deserves to feel seen, heard, and protected.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-deep-brown">Our Team</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] border border-brown/10 bg-white p-8 text-center shadow-soft">
              <div className="text-5xl">👩</div>
              <h3 className="mt-4 text-xl font-semibold text-deep-brown">Grace Mwangi</h3>
              <p className="mt-2 text-brown/80">Founder & Director</p>
              <p className="text-brown/80">15 years children's ministry</p>
            </div>
            <div className="rounded-[32px] border border-brown/10 bg-white p-8 text-center shadow-soft">
              <div className="text-5xl">👨</div>
              <h3 className="mt-4 text-xl font-semibold text-deep-brown">Peter Omondi</h3>
              <p className="mt-2 text-brown/80">Program Coordinator</p>
              <p className="text-brown/80">Child psychologist</p>
            </div>
            <div className="rounded-[32px] border border-brown/10 bg-white p-8 text-center shadow-soft">
              <div className="text-5xl">👩</div>
              <h3 className="mt-4 text-xl font-semibold text-deep-brown">Sarah Kipchoge</h3>
              <p className="mt-2 text-brown/80">Mentorship Lead</p>
              <p className="text-brown/80">20+ mentors trained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
