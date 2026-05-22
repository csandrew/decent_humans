import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHeart, FaChild, FaChurch, FaSmile, FaSeedling, FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Color overlay - matches your brand colors */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
        {/* Decorative icons row */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <FaChild className="text-white" size={32} />
          </div>
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <FaHeart className="text-white" size={32} />
          </div>
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
            <FaChurch className="text-white" size={32} />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Raising Spiritually Grounded &amp; Mentally Healthy Children
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
      
          Decent Humans helps children grow mentally, spiritually, emotionally, and socially in a healthy Christian environment across Kenya.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white shadow-soft transition-all hover:bg-btn-primary-hover hover:shadow-medium"
          >
        
            Join Our Program
            
          </Link>
          <Link
            to="/involve"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-primary"
          >
          
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;