import { Link } from 'react-router-dom';


function Programs() {
  return (
    <>
      {/* PROGRAMS GRID */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Every Saturday | Ages 6-14 | Nairobi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Discover */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="h-1 bg-blue-500"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                  Discover
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Children learn who God created them to be. Self-awareness, identity in Christ, and understanding their unique gifts.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What they learn:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center gap-2">✓ Identity in Christ</li>
                    <li className="flex items-center gap-2">✓ Self-awareness</li>
                    <li className="flex items-center gap-2">✓ Unique gifts & talents</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/254700000000?text=I'd like to join the Discover program"
                  className="inline-flex items-center justify-center gap-2 text-blue-600 font-medium hover:text-blue-700 mt-auto"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Card 2: Grow */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="h-1 bg-green-500"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                  Grow
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Bible-centered learning with practical application. Memory verses, character stories, and faith-based decision making.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What they learn:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center gap-2">✓ Bible memorization</li>
                    <li className="flex items-center gap-2">✓ Character stories</li>
                    <li className="flex items-center gap-2">✓ Faith-based decisions</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/254700000000?text=I'd like to join the Grow program"
                  className="inline-flex items-center justify-center gap-2 text-green-600 font-medium hover:text-green-700 mt-auto"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Card 3: Connect */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="h-1 bg-purple-500"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                  Connect
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Group activities, emotional support circles, and peer mentorship. Learning to share, listen, and build healthy friendships.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What they learn:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center gap-2">✓ Healthy friendships</li>
                    <li className="flex items-center gap-2">✓ Emotional support</li>
                    <li className="flex items-center gap-2">✓ Group activities</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/254700000000?text=I'd like to join the Connect program"
                  className="inline-flex items-center justify-center gap-2 text-purple-600 font-medium hover:text-purple-700 mt-auto"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Card 4: Lead */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="h-1 bg-amber-500"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-amber-100 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                  Lead
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Confidence building, public speaking, servant leadership, and purpose discovery. Preparing children to lead with kindness.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What they learn:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center gap-2">✓ Public speaking</li>
                    <li className="flex items-center gap-2">✓ Servant leadership</li>
                    <li className="flex items-center gap-2">✓ Confidence & purpose</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/254700000000?text=I'd like to join the Lead program"
                  className="inline-flex items-center justify-center gap-2 text-amber-600 font-medium hover:text-amber-700 mt-auto"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start the Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Saturdays, 9am - 12pm | Nairobi CBD (exact address via WhatsApp)
            </p>
            <a
              href="https://wa.me/254700000000?text=I'd like to register for the Saturday program"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Register via WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;