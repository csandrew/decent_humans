
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      {/* TITLE */}
      <h1 className="text-3xl flex justify-center font-bold tracking-tight text-deep-brown sm:text-4xl">
        About Us
      </h1>

      {/* QUOTE */}
      <div className="mt-10 rounded-sm border border-brown/10 bg-gray-200 p-10 shadow-soft">
        <blockquote className="text-xl font-semibold text-deep-brown">
          "Train up a child in the way he should go, and when he is old he will not depart from it." - Proverbs 22:6
        </blockquote>
      </div>

      <div className="mt-14 space-y-24 text-brown/80">


        {/* OUR STORY */}

        <div className="flex flex-col md:flex-row items-center gap-10">

          <div className="md:w-1/2">
            <img
              src="/images/sasha-matveeva.jpg"
              alt="Our Story"
              className="rounded-sm shadow-soft w-full object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-deep-brown">
              Our Story
            </h2>

            <p className="mt-3 leading-8">
              Decent Humans began in 2022 when parents, teachers, and church
              leaders saw a gap in how children were being supported in Nairobi.
              Children were struggling with anxiety, identity questions, and
              spiritual disconnection.
            </p>

            <p className="mt-3 leading-8">
              We started with 12 children in a church hall and have now grown
              across multiple counties, helping children learn, pray, play,
              and grow together.
            </p>
          </div>
        </div>


        {/* OUR VALUES */}

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">

          <div className="md:w-1/2">
            <img
              src="/images/lei-hwang-2.jpg"
              alt="Our Values"
              className="rounded-sm shadow-soft w-full object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-deep-brown">
              Our Values
            </h2>

            <div className="mt-6 space-y-4">
              <p>Faith First - Rooted in scripture and Christ’s love</p>
              <p>Whole Child - Emotional, mental, spiritual growth</p>
              <p>Safe & Loving - Every child deserves protection</p>
            </div>
          </div>
        </div>


        {/* OUR TEAM */}

        <div className="flex flex-col items-center gap-10">

          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-deep-brown">
              Our Team
            </h2>
          </div>

          <div className="w-full mt-6 grid gap-8 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-sm border border-brown/10 bg-white p-8 shadow-soft text-center hover:shadow-lg transition">
              <img
                src="/images/lei-hwang.jpg"
                alt="Lei Hwang"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-deep-brown">
                Lei Hwang
              </h3>
              <p className="text-brown/70">Founder & Director</p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-sm border border-brown/10 bg-white p-8 shadow-soft text-center hover:shadow-lg transition">
              <img
                src="/images/john-zhou.jpg"
                alt="John Zhou"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-deep-brown">
                John Zhou
              </h3>
              <p className="text-brown/70">Program Coordinator</p>
            </div>

            {/* CARD 3 */}
            <div className="rounded-sm border border-brown/10 bg-white p-8 shadow-soft text-center hover:shadow-lg transition">
              <img
                src="/images/devin-avery.jpg"
                alt="Devin Avery"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-deep-brown">
                Devin Avery
              </h3>
              <p className="text-brown/70">Mentorship Lead</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;