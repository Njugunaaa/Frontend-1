import React from "react";
import { Church, Heart, Users, Video, Calendar, Baby } from "lucide-react";

export default function AboutServices() {
  const services = [
    {
      icon: Video,
      title: "Live Worship Services",
      description:
        "Join our Spirit-filled worship gatherings both online and in person. Experience heartfelt praise, dynamic sermons, and a warm community devoted to God.",
    },
    {
      icon: Calendar,
      title: "Conferences & Leadership Trainings",
      description:
        "We host annual conferences and leadership seminars to equip pastors, leaders, and volunteers for impactful ministry across all EPCK churches in Kenya.",
    },
    {
      icon: Baby,
      title: "Children & Youth Ministries",
      description:
        "We nurture the next generation through Sunday School, Youth Revivals, and Vacation Bible Schools, raising young hearts to love God and serve others.",
    },
    {
      icon: Users,
      title: "Community Outreach & Church Planting",
      description:
        "EPCK reaches communities through church planting, humanitarian initiatives, and social support programs — from food drives to water projects in underserved areas.",
    },
    {
      icon: Heart,
      title: "Healing & Holy Spirit Ministry",
      description:
        "We believe in the healing power of Jesus and the transformative work of the Holy Spirit. Lives are restored through prayer, deliverance, and Spirit baptism.",
    },
    {
      icon: Church,
      title: "Worship & Revival Nights",
      description:
        "Experience monthly revival nights designed to draw hearts closer to God, ignite passion for worship, and pray for revival in our communities.",
    },
    {
      icon: Church,
      title: "Women & Family Empowerment",
      description:
        "Through the Women of Faith ministry, EPCK empowers women to grow spiritually, lead in their homes, and impact their communities with purpose and faith.",
    },
  ];

  return (
    <section className="relative bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight text-center">
          Our Ministries & Community Impact
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Image + paragraph */}
          <div className="lg:w-1/2">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNIZRYS9efDB31qgTJE_nT17ifoCThZrKyHK0Ey=w1080-h720-k-no"
              alt="Elim Pentecostal Church"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
            <p className="mt-4 text-gray-700 text-lg">
              This is Elim Pentecostal Church of Kenya, Tena National Headquarters located in Nairobi. 
              Serving as the central hub for administration, worship, and national ministries, it stands as a beacon of faith, community service, and spiritual growth across Kenya.
            </p>
          </div>

          {/* Right: Services */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
                >
                  <div className="text-amber-600 mb-4">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
