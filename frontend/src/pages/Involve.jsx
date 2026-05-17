function Involve() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-deep-brown sm:text-4xl">Partner With Us</h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-brown/80">
        Join us as a mentor, partner, or supporter to help children grow spiritually and emotionally.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold"> Volunteer as a Mentor</h3>
          <p className="mt-4 text-brown/80">Lead small groups, support emotional growth, and build healthy friendships with children ages 6–14.</p>
          <a
            href="https://wa.me/254700000000?text=I'd%20like%20to%20volunteer%20as%20a%20mentor"
            className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep-brown transition hover:bg-[#b8922e]"
          >
            Apply via WhatsApp →
          </a>
        </div>

        <div className="rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold"> Partner as a Church or School</h3>
          <p className="mt-4 text-brown/80">Bring Decent Humans to your community through venue support, referral partnerships, or shared events.</p>
          <a
            href="https://wa.me/254700000000?text=I'm%20interested%20in%20partnering%20with%20Decent%20Humans"
            className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep-brown transition hover:bg-[#b8922e]"
          >
            Partner via WhatsApp →
          </a>
        </div>

        <div className="rounded-[32px] border border-brown/10 bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold"> Support with Giving</h3>
          <p className="mt-4 text-brown/80">Help us reach more children with materials, snacks, and mentor training.</p>
          <div className="mt-6 rounded-3xl border border-brown/20 bg-slate-50 p-5 text-left text-sm text-brown shadow-sm">
            <p><strong>Paybill:</strong> 123456</p>
            <p><strong>Account:</strong> DECENT2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Involve;
