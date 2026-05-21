import { FaHandsHelping, FaChurch, FaDonate, FaWhatsapp, FaHeart, FaUsers, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa';

function Involve() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-3 mb-4">
            <FaHeart className="text-accent" size={32} />
            <FaUsers className="text-accent" size={32} />
            <FaHandsHelping className="text-accent" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            Partner With Us
          </h1>
          <p className="mt-4 max-w-2xl text-secondary mx-auto">
            Join us as a mentor, partner, or supporter to help children grow spiritually and emotionally.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Volunteer Card */}
          <div className="bg-white rounded-xl shadow-soft hover:shadow-hover transition-all p-8 text-center border border-gray-100">
            <div className="w-20 h-20 bg-discover/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandsHelping className="text-discover" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Volunteer as a Mentor</h3>
            <p className="text-secondary mb-6">Lead small groups, support emotional growth, and build healthy friendships with children ages 6–14.</p>
            <a
              href="https://wa.me/254700000000?text=I'd like to volunteer as a mentor"
              className="inline-flex items-center justify-center gap-2 w-full bg-discover text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-discover/90 shadow-soft"
            >
              <FaWhatsapp size={16} />
              Apply via WhatsApp
            </a>
          </div>

          {/* Partner Card */}
          <div className="bg-white rounded-xl shadow-soft hover:shadow-hover transition-all p-8 text-center border border-gray-100">
            <div className="w-20 h-20 bg-connect/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChurch className="text-connect" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Partner as a Church or School</h3>
            <p className="text-secondary mb-6">Bring Decent Humans to your community through venue support, referral partnerships, or shared events.</p>
            <a
              href="https://wa.me/254700000000?text=I'm interested in partnering with Decent Humans"
              className="inline-flex items-center justify-center gap-2 w-full bg-connect text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-connect/90 shadow-soft"
            >
              <FaWhatsapp size={16} />
              Apply via WhatsApp
            </a>
          </div>

          {/* Donation Card */}
          <div className="bg-white rounded-xl shadow-soft hover:shadow-hover transition-all p-8 text-center border border-gray-100">
            <div className="w-20 h-20 bg-grow/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDonate className="text-grow" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Make a Donation</h3>
            <p className="text-secondary mb-6">Help us reach more children with materials, snacks, and mentor training.</p>
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <p className="flex items-center gap-2 text-secondary mb-2">
                <FaMoneyBillWave className="text-grow" size={16} />
                <strong>Paybill:</strong> 123456
              </p>
              <p className="flex items-center gap-2 text-secondary">
                <strong>Account:</strong> DECENT2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Involve;