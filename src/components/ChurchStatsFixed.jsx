import React from 'react';

export default function ChurchStatsFixed() {
  const stats = [
    {
      label: "Facebook Likes",
      value: "1,542+"
    },
    {
      label: "Check-ins",
      value: "263"
    },
    {
      label: "Years",
      value: "34+"
    },
    {
      label: "Instagram Followers",
      value: "1.9K+"
    }
  ];

  return (
    <section className="bg-orange-500 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="mb-2">
                <span className="text-sm font-medium text-orange-100 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
