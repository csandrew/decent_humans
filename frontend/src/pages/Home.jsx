// frontend/src/pages/Home.jsx
import { FaHandsHelping, FaHeart, FaChild, FaChurch, FaSmile, FaSeedling, FaArrowRight } from 'react-icons/fa';

function Home({ scrollToSection }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Color overlay - matches your brand colors */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-24">
        {/* Decorative icons row */}
        <div className="mb-8 flex justify-center gap-3 sm:gap-4">
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

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
          <FaSmile className="inline mr-2" size={20} />
          Decent Humans helps children grow mentally, spiritually, emotionally, and socially in a healthy Christian environment across Kenya.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => scrollToSection && scrollToSection('contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent/80 hover:shadow-medium"
          >
            <FaHandsHelping size={18} />
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
    </section>
  );
}

export default Home;