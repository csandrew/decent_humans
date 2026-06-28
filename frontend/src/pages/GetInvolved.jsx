import { useState } from 'react';
import { 
  FaQuoteLeft, FaBookOpen, FaArrowRight, FaNewspaper, FaWhatsapp, 
  FaPenFancy, FaStar, FaHeart, FaChild, FaGraduationCap, FaUsers,
  FaHandsHelping, FaChurch, FaDonate, FaMoneyBillWave,
  FaSmile, FaShieldAlt, FaBible, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';

function GetInvolved() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      content: "My daughter used to struggle with anxiety before school. After three months in the Saturday program, she prays every morning and walks into class with confidence. God is working through Decent Humans.",
      name: "Mary",
      childName: "9-year-old daughter",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
    },
    {
      content: "As a volunteer mentor, I've seen children who couldn't look you in the eye now lead prayer sessions. The Growth Journey works because it's rooted in scripture AND practical care.",
      name: "James",
      childName: "Mentor for 2 years",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      content: "I learned that being angry doesn't make me bad. I just need to pause, pray, and then talk. Now I help my little sister when she's upset.",
      name: "Esther",
      childName: "Age 11",
      rating: 5,
      image: "https://images.unsplash.com/photo-1518481852451-9410d1a4b5e6?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl font-bold text-primary sm:text-5xl underline decoration-accent underline-offset-8">
            Get Involved
          </h1>
          <p className="mt-4 max-w-2xl text-secondary mx-auto text-lg">
            Join us as a mentor, partner, or supporter. Help children grow spiritually, emotionally, and socially through the Decent Humans journey.
          </p>
        </div>

        {/* Testimonials Section */}
        <section className="py-12">
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-secondary/20 font-serif">"</div>
                  <p className="text-gray-700 text-lg md:text-xl text-center italic mb-8 px-4">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-6xl text-secondary/20 font-serif rotate-180">"</div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-secondary to-primary p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target;
                          target.src = 'https://placehold.co/200x200/2f3e46/white?text=Parent';
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Parent of {testimonials[currentTestimonial].childName}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-accent w-8' : 'bg-gray-300 w-2 hover:bg-accent/50'
                      }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 1: Ways to Get Involved */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-2">
            
            Ways to Get Involved
          </h2>
          
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

      </div>
    </section>
  );
}

export default GetInvolved;