import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="bg-gradient-to-b from-cream via-cream to-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-deep-brown sm:text-5xl lg:text-6xl">
          Raising Spiritually Grounded &amp; Mentally Healthy Children
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brown/80">
          Decent Humans helps children grow mentally, spiritually, emotionally, and socially in a healthy Christian environment across Kenya.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex rounded-sm bg-gold px-8 py-3 text-base font-semibold text-deep-brown shadow-soft transition hover:bg-[#b8922e]"
          >
            Join Our Program
          </Link>
          <Link
            to="/involve"
            className="inline-flex rounded-sm border border-gold bg-transparent px-8 py-3 text-base font-semibold text-brown transition hover:bg-gold hover:text-deep-brown"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
