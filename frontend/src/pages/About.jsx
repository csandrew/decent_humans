import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaHeart, FaShieldAlt, FaBible, FaSmile, FaUsers, FaUserTie, FaClipboardList, FaChalkboardTeacher, FaBullseye, FaEye, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      {/* TITLE */}
      <h1 className="text-3xl flex justify-center items-center gap-3 font-bold tracking-tight text-primary sm:text-4xl">
        <FaUsers className="text-accent" size={32} />
        About Us
      </h1>

      {/* Mission & Vision Section */}
      <div className="mt-10 bg-white rounded-2xl shadow-soft p-8">
        <p className="text-center text-secondary mb-12 text-lg">
          Decent Humans serves children and families in Nairobi, Kenya, providing a nurturing environment where young learners flourish with access to holistic education that develops healthy, happy, confident children.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-accent/10 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <FaBullseye className="text-accent" size={24} />
              Our Mission
            </h2>
            <p className="text-secondary leading-relaxed">
              To provide a nurturing, safe, and stimulating environment where every child discovers their unique potential, grows spiritually, and develops a lifelong love for learning.
            </p>
          </div>
          <div className="bg-accent/10 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <FaEye className="text-accent" size={24} />
              Our Vision
            </h2>
            <p className="text-secondary leading-relaxed">
              To be a leading organization in Kenya, setting the standard for excellence in children's spiritual and emotional development.
            </p>
          </div>
        </div>
      </div>

      {/* Principal's Message */}
      <div className="mt-10 bg-white rounded-2xl shadow-soft p-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-6 flex items-center justify-center gap-2">
          <FaEnvelope className="text-accent" size={24} />
          Founder's Message
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Founder" 
            className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
          />
          <div className="flex-1">
            <p className="text-secondary italic text-lg leading-relaxed mb-4">
              "At Decent Humans, we believe every child is unique and capable of amazing things. Our dedicated team works tirelessly to create an environment where faith is nurtured, kindness is practiced, and learning is joyful."
            </p>
            <p>
              <strong className="text-primary">- Lei Hwang</strong>
              <br />
              <span className="text-secondary/70">Founder & Director</span>
            </p>
          </div>
        </div>
      </div>

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
              <FaSmile className="text-accent" size={24} />
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
              <FaHeart className="text-accent" size={24} />
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

      </div>
    </section>
  );
}

export default About;