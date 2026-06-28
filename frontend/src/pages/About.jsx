import { 
  FaQuoteLeft, FaHeart, FaShieldAlt, FaBible, FaSmile, FaUsers, 
  FaUserTie, FaClipboardList, FaChalkboardTeacher, FaBullseye, 
  FaEye, FaEnvelope, FaWhatsapp, FaArrowRight, FaHandsHelping
} from 'react-icons/fa';

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary inline-block pb-2 border-b-4 border-accent">
          About Us
        </h1>
        <p className="mt-4 text-secondary/70 max-w-2xl mx-auto">
          Learn more about our mission, values, and the story behind Decent Humans.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-10 bg-white rounded-2xl shadow-soft p-8 md:p-10">
        <p className="text-center text-secondary text-lg md:text-xl mb-12 leading-relaxed">
          Decent Humans serves children and families in Nairobi, Kenya, providing a nurturing environment where young learners flourish with access to holistic education that develops healthy, happy, confident children.
        </p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-accent/10 rounded-xl p-6 md:p-8 hover:shadow-soft transition-shadow">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <FaBullseye className="text-accent" size={24} />
              Our Mission
            </h2>
            <p className="text-secondary leading-relaxed">
              To provide a nurturing, safe, and stimulating environment where every child discovers their unique potential, grows spiritually, and develops a lifelong love for learning.
            </p>
          </div>
          <div className="bg-accent/10 rounded-xl p-6 md:p-8 hover:shadow-soft transition-shadow">
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

      {/* QUOTE */}
      <div className="mt-10 rounded-2xl border border-secondary/10 bg-gray-50 p-8 md:p-10 shadow-soft">
        <blockquote className="text-xl md:text-2xl font-semibold text-primary flex items-start gap-3">
          <FaQuoteLeft className="text-accent mt-1 shrink-0" size={28} />
          "Train up a child in the way he should go, and when he is old he will not depart from it." 
          <span className="block text-lg font-normal text-secondary/70 mt-2">— Proverbs 22:6</span>
        </blockquote>
      </div>

      <div className="mt-16 space-y-24 text-secondary/80">

        {/* OUR STORY */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Children learning together"
              className="rounded-2xl shadow-soft w-full h-80 md:h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary flex items-center gap-2">
              
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
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm bg-accent/10 px-4 py-2 rounded-full">
                <span className="font-bold text-primary">12</span>
                <span className="text-secondary/70">Children Started</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-accent/10 px-4 py-2 rounded-full">
                <span className="font-bold text-primary">200+</span>
                <span className="text-secondary/70">Children Now</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-accent/10 px-4 py-2 rounded-full">
                <span className="font-bold text-primary">2025</span>
                <span className="text-secondary/70">Founded</span>
              </div>
            </div>
          </div>
        </div>
      
        {/* Why Choose Decent Humans Section */}
        
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              
              Choose Decent Humans
            </h2>
          
            <p className="mt-4 text-secondary text-lg">
              We provide a holistic approach to children's development that nurtures their mind, body, and spirit.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <FaBible className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Faith-Based Foundation</h4>
                <p className="text-secondary/70 text-sm">Rooted in scripture and Christian values</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <FaSmile className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Holistic Development</h4>
                <p className="text-secondary/70 text-sm">Emotional, mental & spiritual growth</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <FaUsers className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Community of Support</h4>
                <p className="text-secondary/70 text-sm">Building healthy friendships and connections</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/5 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <FaShieldAlt className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Safe & Loving Environment</h4>
                <p className="text-secondary/70 text-sm">Every child feels valued and protected</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <a
              href="https://wa.me/254700000000?text=I'd like to register for the Saturday program"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-soft hover:shadow-medium"
            >
              <FaWhatsapp size={18} />
              Enroll Your Child Today
              <FaArrowRight size={14} />
            </a>
          </div>
        

      </div>
    </section>
  );
}

export default About;