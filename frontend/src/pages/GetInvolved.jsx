import {
  FaQuoteLeft, FaBookOpen, FaArrowRight, FaNewspaper, FaWhatsapp,
  FaPenFancy, FaStar, FaHeart, FaChild, FaGraduationCap, FaUsers,
  FaHandsHelping, FaChurch, FaDonate, FaMoneyBillWave,
  FaSmile, FaShieldAlt, FaBible
} from 'react-icons/fa';

function GetInvolved() {
  // Testimonies/Stories data
  const blogConnections = [
    {
      story: "My daughter used to struggle with anxiety before school. After three months in the Saturday program, she prays every morning and walks into class with confidence. God is working through Decent Humans.",
      author: "— Mary, mother of 9-year-old",
      icon: FaHeart,
      blogPost: {
        title: "Understanding Childhood Anxiety Through Faith",
        excerpt: "How prayer routines transformed one family's mornings",
        slug: "childhood-anxiety-faith",
        readTime: "5 min read"
      }
    },
    {
      story: "As a volunteer mentor, I've seen children who couldn't look you in the eye now lead prayer sessions. The Growth Journey works because it's rooted in scripture AND practical care.",
      author: "— James, Mentor for 2 years",
      icon: FaUsers,
      blogPost: {
        title: "The Power of Mentorship: A Volunteer's Perspective",
        excerpt: "Behind the scenes of our Saturday program",
        slug: "power-of-mentorship",
        readTime: "4 min read"
      }
    },
    {
      story: "I learned that being angry doesn't make me bad. I just need to pause, pray, and then talk. Now I help my little sister when she's upset.",
      author: "— Esther, age 11",
      icon: FaChild,
      blogPost: {
        title: "Teaching Emotional Regulation to Kids",
        excerpt: "Lessons from our Growth Journey curriculum",
        slug: "emotional-regulation-kids",
        readTime: "6 min read"
      }
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

        {/* Section 2: Stories/Testimonies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-2">
           
            Real Stories, Real Change
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {blogConnections.map((item, idx) => {
              const StoryIcon = item.icon;
              return (
                <div key={idx} className="group flex flex-col rounded-[32px] border border-secondary/10 bg-white p-8 shadow-soft transition hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <StoryIcon className="text-accent shrink-0 mt-1" size={20} />
                    <p className="text-secondary/80">"{item.story}"</p>
                  </div>
                  <p className="mt-6 font-semibold text-primary">{item.author}</p>

                  {/* Blog connection divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-secondary/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-white px-2 text-secondary/40 flex items-center gap-1">
                        <FaBookOpen size={10} />
                        read the full story
                      </span>
                    </div>
                  </div>

                  {/* Featured blog post */}
                  <div className="mt-2 block rounded-xl bg-secondary/5 p-4 transition hover:bg-secondary/10">
                    <h4 className="font-semibold text-primary">{item.blogPost.title}</h4>
                    <p className="mt-1 text-sm text-secondary/60">{item.blogPost.excerpt}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-accent">
                      <span>{item.blogPost.readTime}</span>
                      <span>•</span>
                      <span>Read more</span>
                      <FaArrowRight size={10} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Share Your Story CTA */}
        <div className="rounded-[32px] border border-secondary/10 bg-white p-10 text-center shadow-soft">
          <h3 className="text-xl font-semibold text-primary flex items-center justify-center gap-2">
            <FaPenFancy className="text-accent" size={22} />
            Want to share your story?
          </h3>
          <p className="mt-3 text-secondary/80">
            Your experience could inspire others and encourage more people to get involved.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/254700000000?text=I'd%20like%20to%20share%20my%20story"
              className="inline-flex items-center gap-2 rounded-md bg-accent hover:bg-accent/80 text-white px-6 py-3 text-sm font-semibold transition shadow-soft"
            >
              <FaWhatsapp size={16} />
              Share Your Story
              <FaArrowRight size={12} />
            </a>
          </div>

          <p className="mt-6 text-xs text-secondary/40 flex items-center justify-center gap-1">
            <FaStar size={10} />
            Selected stories are featured in our "Changed Lives" series
            <FaStar size={10} />
          </p>
        </div>

      </div>
    </section>
  );
}

export default GetInvolved;