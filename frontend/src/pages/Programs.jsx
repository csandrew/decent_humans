import { 
  FaCompass, FaSeedling, FaUsers, FaCrown, FaWhatsapp, 
  FaArrowRight, FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt,
  FaShieldAlt, FaBible, FaSmile
} from 'react-icons/fa';

function Programs() {
  const programs = [
    {
      id: 'discover',
      title: 'Discover',
      color: 'discover',
      icon: FaCompass,
      description: 'Children learn who God created them to be. Self-awareness, identity in Christ, and understanding their unique gifts.',
      learnItems: ['Identity in Christ', 'Self-awareness', 'Unique gifts & talents']
    },
    {
      id: 'grow',
      title: 'Grow',
      color: 'grow',
      icon: FaSeedling,
      description: 'Bible-centered learning with practical application. Memory verses, character stories, and faith-based decision making.',
      learnItems: ['Bible memorization', 'Character stories', 'Faith-based decisions']
    },
    {
      id: 'connect',
      title: 'Connect',
      color: 'connect',
      icon: FaUsers,
      description: 'Group activities, emotional support circles, and peer mentorship. Learning to share, listen, and build healthy friendships.',
      learnItems: ['Healthy friendships', 'Emotional support', 'Group activities']
    },
    {
      id: 'lead',
      title: 'Lead',
      color: 'lead',
      icon: FaCrown,
      description: 'Confidence building, public speaking, servant leadership, and purpose discovery. Preparing children to lead with kindness.',
      learnItems: ['Public speaking', 'Servant leadership', 'Confidence & purpose']
    }
  ];

  return (
    <>
      {/* Programs Section */}
      <section className="bg-gray-200 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl flex items-center justify-center gap-3 underline decoration-accent underline-offset-8">
        
              Our Programs
            </h2>
            <p className="text-secondary text-lg flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-accent" size={16} />
              Every Saturday | Ages 6-14 | Nairobi
              <FaMapMarkerAlt className="text-accent ml-2" size={16} />
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => {
              const Icon = program.icon;
              const colorMap = {
                discover: { bg: 'bg-discover/10', text: 'text-discover', border: 'border-discover/20', hover: 'hover:border-discover/40' },
                grow: { bg: 'bg-grow/10', text: 'text-grow', border: 'border-grow/20', hover: 'hover:border-grow/40' },
                connect: { bg: 'bg-connect/10', text: 'text-connect', border: 'border-connect/20', hover: 'hover:border-connect/40' },
                lead: { bg: 'bg-lead/10', text: 'text-lead', border: 'border-lead/20', hover: 'hover:border-lead/40' }
              };
              const colors = colorMap[program.color];
              
              return (
                <div key={program.id} className={`overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${colors.hover}`}>
                  <div className={`h-2 ${colors.text.replace('text', 'bg')}`}></div>
                  <div className="p-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl mb-4 flex items-center justify-center mx-auto`}>
                      <Icon className={colors.text} size={32} />
                    </div>
                    <h3 className={`text-xl font-bold text-center mb-3 ${colors.text}`}>
                      {program.title}
                    </h3>
                    <p className="mb-4 text-center text-sm text-secondary">
                      {program.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-primary mb-2 text-sm">What they learn:</h4>
                      <ul className="space-y-2">
                        {program.learnItems.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-secondary text-sm">
                            <FaCheckCircle className={colors.text} size={12} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={`https://wa.me/254700000000?text=I'd like to join the ${program.title} program`}
                      className={`mt-2 inline-flex w-full items-center justify-center gap-2 font-medium transition-colors hover:opacity-80 ${colors.text}`}
                    >
                      Learn More
                      <FaArrowRight size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
     

      {/* Core Values Section */}
      
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary text-center mt-8 mb-4 flex items-center justify-center gap-3">
              
              Our Commitment
            </h2>
            <p className="text-center text-secondary mb-10 max-w-2xl mx-auto">
              At Decent Humans, we are committed to nurturing every child through these core values.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-soft transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBible className="text-accent text-3xl" />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-2">Faith First</h3>
                <p className="text-secondary/70 text-sm">Rooted in scripture and Christ's love</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-soft transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSmile className="text-accent text-3xl" />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-2">Whole Child</h3>
                <p className="text-secondary/70 text-sm">Emotional, mental, spiritual growth</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-soft transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-accent text-3xl" />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-2">Safe & Loving</h3>
                <p className="text-secondary/70 text-sm">Every child deserves protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;