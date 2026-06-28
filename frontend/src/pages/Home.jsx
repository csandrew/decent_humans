// frontend/src/pages/Home.jsx
import { FaHandsHelping, FaHeart, FaChild, FaChurch, FaSmile, FaSeedling, FaArrowRight } from 'react-icons/fa';

function Home({ scrollToSection }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1920&q=80')`,
      }}
    >
      {/* Color overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/* Content - Centered */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center px-6 py-12">
        <div className="w-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-12 text-center shadow-2xl sm:px-10 md:px-12 lg:px-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
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
              
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;