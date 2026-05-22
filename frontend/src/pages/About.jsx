import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaHeart, FaShieldAlt, FaBible, FaSmile, FaUsers, FaUserTie, FaClipboardList, FaChalkboardTeacher } from 'react-icons/fa';

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      {/* TITLE */}
      <h1 className="text-3xl flex justify-center items-center gap-3 font-bold tracking-tight text-primary sm:text-4xl">
        
        About Us
      </h1>

      {/* QUOTE */}
      <div className="mt-10 rounded-md border border-secondary/10 bg-gray-200 p-10 shadow-soft">
        <blockquote className="text-xl font-semibold text-primary flex items-start gap-3">
          <FaQuoteLeft className="text-accent mt-1 shrink-0" size={24} />
          "Train up a child in the way he should go, and when he is old he will not depart from it." - Proverbs 22:6
        </blockquote>
      </div>

      <div className="mt-14 space-y-24 text-secondary/80">

        {/* OUR STORY */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Children learning together"
              className="rounded-sm shadow-soft w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
              
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
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Children holding hands in unity"
              className="rounded-sm shadow-soft w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
              
              Our Values
            </h2>
            <div className="mt-6 space-y-4">
              <p className="flex items-center gap-2">
                <FaBible className="text-accent shrink-0" size={18} />
                Faith First - Rooted in scripture and Christ's love
              </p>
              <p className="flex items-center gap-2">
                <FaSmile className="text-accent shrink-0" size={18} />
                Whole Child - Emotional, mental, spiritual growth
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt className="text-accent shrink-0" size={18} />
                Safe & Loving - Every child deserves protection
              </p>
            </div>
          </div>
        </div>

        {/* OUR TEAM */}
        <div className="flex flex-col items-center gap-10">
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-primary flex items-center justify-center gap-2">
        
              Our Team
            </h2>
          </div>

          <div className="w-full mt-6 grid gap-8 md:grid-cols-3">
            {/* CARD 1 - Founder */}
            <div className="rounded-md border border-secondary/10 bg-white p-8 shadow-soft text-center hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Lei Hwang - Founder"
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-primary">
                Lei Hwang
              </h3>
              <p className="text-secondary/70 flex items-center justify-center gap-1">
                <FaUserTie size={14} />
                Founder & Director
              </p>
            </div>

            {/* CARD 2 - Program Coordinator */}
            <div className="rounded-md border border-secondary/10 bg-white p-8 shadow-soft text-center hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="John Zhou - Program Coordinator"
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-primary">
                John Zhou
              </h3>
              <p className="text-secondary/70 flex items-center justify-center gap-1">
                <FaClipboardList size={14} />
                Program Coordinator
              </p>
            </div>

            {/* CARD 3 - Mentorship Lead */}
            <div className="rounded-md border border-secondary/10 bg-white p-8 shadow-soft text-center hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Devin Avery - Mentorship Lead"
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-primary">
                Devin Avery
              </h3>
              <p className="text-secondary/70 flex items-center justify-center gap-1">
                <FaChalkboardTeacher size={14} />
                Mentorship Lead
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;