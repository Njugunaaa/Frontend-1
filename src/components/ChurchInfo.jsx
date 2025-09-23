import React from 'react';

export default function ChurchInfo() {
  return (
    <section className="bg-blue-50 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Elim Pentecostal Church Tena
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Church Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Founded:</strong> 1990</li>
                <li><strong>Location:</strong> Tena, Nairobi, Kenya</li>
                <li><strong>Full Name:</strong> Elim Pentecostal Church of Kenya – Headquarters (EPCK)</li>
                <li><strong>Phone:</strong> +254 726 496396</li>
                <li><strong>Instagram:</strong> @elim.p.church_tena (1.9K+ followers)</li>
                <li><strong>Facebook:</strong> 1,542+ likes, 263 check-ins</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Beliefs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Jesus Christ is our Savior</li>
                <li>• Jesus Christ is our Healer</li>
                <li>• Jesus Christ is the Baptiser with the Holy Spirit</li>
                <li>• Jesus Christ is the Soon Coming King</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
              <div>• Live worship services and sermons</div>
              <div>• Vacation Bible School for children</div>
              <div>• Church conferences and fellowships</div>
              <div>• Community outreach programs</div>
              <div>• Holy Communion services</div>
              <div>• Online streaming of services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
