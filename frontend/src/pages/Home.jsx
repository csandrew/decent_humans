// frontend/src/pages/Home.jsx
import { FaHandsHelping, FaHeart, FaChild, FaChurch, FaSmile, FaSeedling, FaArrowRight, FaUsers, FaStar } from 'react-icons/fa';

function Home({ scrollToSection }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1920&q=80')`,
      }}
    >
      {/* Color overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>

      {/* Content - Centered */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12">
        {/* Main Hero Section */}
        <div className="w-full max-w-4xl rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-12 text-center shadow-2xl sm:px-10 md:px-12 lg:px-16">
          

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Raising Spiritually Grounded &amp; Mentally Healthy Children
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
      
            Decent Humans helps children grow mentally, spiritually, emotionally, and socially in a healthy Christian environment across Kenya.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => scrollToSection && scrollToSection('contact')}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent/80 hover:shadow-medium"
            >
              
              Join Our Program
              <FaArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollToSection && scrollToSection('get-involved')}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-7 py-3 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-primary"
            >
              <FaSeedling size={18} />
              Partner With Us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-5xl mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Stat 1 */}
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaUsers className="text-accent" size={20} />
                <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
              </div>
              <h3 className="font-semibold text-white">Children Served</h3>
              <p className="text-white/70 text-sm">Growing community of young learners</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaStar className="text-yellow-400" size={20} />
                <div className="text-3xl md:text-4xl font-bold text-white">95%</div>
              </div>
              <h3 className="font-semibold text-white">Parent Satisfaction</h3>
              <p className="text-white/70 text-sm">Families seeing positive change</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaHeart className="text-accent" size={20} />
                <div className="text-3xl md:text-4xl font-bold text-white">4</div>
              </div>
              <h3 className="font-semibold text-white">Core Programs</h3>
              <p className="text-white/70 text-sm">Discover, Grow, Connect, Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;