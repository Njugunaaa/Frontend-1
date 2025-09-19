import React from 'react';

export default function StatementOfFaith() {
  const beliefs = [
    "One God — Father, Son, and Holy Spirit — co-equally and co-eternally.",
    "The Bible as the inspired, infallible Word of God.",
    "The sinfulness of humanity and salvation by grace through faith in Jesus Christ.",
    "The baptism of the Holy Spirit, empowering believers for worship, evangelism, and service.",
    "The unity and priesthood of all believers in Christ.",
    "The ordinances of water baptism and the Lord’s Supper.",
    "The holistic gospel that ministers to body, soul, and spirit.",
    "The return of Jesus Christ, resurrection of the dead, and eternal life."
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="w-full flex justify-center">
        <div className="w-[10rem] h-[0.4rem] bg-primary mb-[3rem]"/>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
            OUR FAITH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Statement of Faith
          </h2>
        </div>

        {/* Beliefs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beliefs.map((belief, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed">{belief}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
