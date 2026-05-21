import { FaCompass, FaSeedling, FaUsers, FaCrown, FaWhatsapp, FaArrowRight, FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Our Programs
            </h2>
            <p className="text-secondary text-lg flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-accent" size={16} />
              Every Saturday | Ages 6-14 | Nairobi
              <FaMapMarkerAlt className="text-accent ml-2" size={16} />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className={`bg-white rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden border border-gray-100 ${colors.hover}`}>
                  <div className={`h-2 ${colors.text.replace('text', 'bg')}`}></div>
                  <div className="p-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl mb-4 flex items-center justify-center mx-auto`}>
                      <Icon className={colors.text} size={32} />
                    </div>
                    <h3 className={`text-xl font-bold text-center mb-3 ${colors.text}`}>
                      {program.title}
                    </h3>
                    <p className="text-secondary text-center text-sm mb-4">
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
                      className={`inline-flex items-center justify-center gap-2 w-full ${colors.text} font-medium hover:opacity-80 transition-colors mt-2`}
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
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-medium p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Start the Journey?
            </h3>
            <p className="text-secondary mb-6 flex items-center justify-center gap-3">
              <FaCalendarAlt className="text-accent" size={16} />
              Saturdays, 9am - 12pm | Nairobi CBD
            </p>
            <a
              href="https://wa.me/254700000000?text=I'd like to register for the Saturday program"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-soft hover:shadow-medium"
            >
              <FaWhatsapp size={18} />
              Register via WhatsApp
              <FaArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;