import React from 'react';

export default function ChurchStats() {
  const stats = [
    {
      label: "People",
      value: "90+"
    },
    {
      label: "Projects",
      value: "2548"
    },
    {
      label: "Years",
      value: "25+"
    },
    {
      label: "Countries",
      value: "6"
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
