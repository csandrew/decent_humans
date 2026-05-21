import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHeart, FaChild, FaChurch, FaSmile, FaSeedling, FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <section className="bg-background min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="flex justify-center gap-4 mb-8">
          <div className="p-3 bg-discover/10 rounded-full">
            <FaChild className="text-discover" size={32} />
          </div>
          <div className="p-3 bg-grow/10 rounded-full">
            <FaHeart className="text-grow" size={32} />
          </div>
          <div className="p-3 bg-connect/10 rounded-full">
            <FaChurch className="text-connect" size={32} />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Raising Spiritually Grounded &amp; Mentally Healthy Children
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-secondary">
          <FaSmile className="inline mr-2 text-accent" size={20} />
          Decent Humans helps children grow mentally, spiritually, emotionally, and socially in a healthy Christian environment across Kenya.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white shadow-soft transition-all hover:bg-btn-primary-hover hover:shadow-medium"
          >
            Join Our Program
            <FaArrowRight size={14} />
          </Link>
          <Link
            to="/involve"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-transparent px-8 py-3 text-base font-semibold text-secondary transition-all hover:bg-accent hover:text-white"
          >
            Partner With Us
            <FaSeedling size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;