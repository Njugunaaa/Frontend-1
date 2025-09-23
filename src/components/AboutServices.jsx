import React from 'react';
import { Church, Heart, Users, Video, Calendar, Baby } from 'lucide-react';
import Ch_1 from '/images/church-about-img-two.webp'

export default function AboutServices() {
  const services = [
    {
      icon: Video,
      title: "Live Worship Services",
      description: "Experience our vibrant worship services streamed live online. Join us for powerful praise, worship, and inspiring sermons from our pastors every week."
    },
    {
      icon: Calendar,
      title: "Special Conferences & Events",
      description: "Participate in our Nairobi Metropolitan Conference and other special events that strengthen our faith community and deepen our spiritual growth."
    },
    {
      icon: Baby,
      title: "Children's Programs",
      description: "Our Vacation Bible School and children-focused programs provide a nurturing environment for young ones to learn about God's love and grow in faith."
    },
    {
      icon: Users,
      title: "Church Fellowship",
      description: "Build meaningful relationships through our regular fellowship gatherings, holy communion services, and community activities that unite our church family."
    },
    {
      icon: Heart,
      title: "Holy Spirit Ministry",
      description: "Experience the baptism with the Holy Spirit as we believe in Jesus Christ as our Healer and the transformative power of God's Spirit in our lives."
    },
    {
      icon: Church,
      title: "Worship Nights",
      description: "Join our special worship nights filled with praise, prayer, and spiritual renewal as we prepare for Christ's soon return as our Coming King."
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content - Illustration */}
          <div className="order-2 lg:order-1">
            <img 
              src={Ch_1} 
              alt='Elim Pentecostal Church Community Activities' 
              className="w-full h-auto rounded-lg "
            />
            
            {/* Church Stats Card */}
            <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Since 1990</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Over 30 years of faithful service to the Tena community, 
                believing in Jesus Christ as our Savior, Healer, Baptiser with 
                the Holy Spirit, and Soon Coming King.
              </p>
            </div>
          </div>

          {/* Right Content - Services List */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Experience our<br />
              church services<br />
              & programs
            </h2>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-amber-600 rounded-lg text-white">
              <h4 className="text-lg font-semibold mb-2">Join Us Online!</h4>
              <p className="text-amber-100 mb-4">
                Follow us on social media for live updates and service announcements.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Facebook: 1,542+ followers</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded">Instagram: @elim.p.church_tena</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}