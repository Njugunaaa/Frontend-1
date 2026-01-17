import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Globe, Sparkles, Church } from "lucide-react";

export default function StatementOfFaith() {
  const coreValues = [
    { icon: Sparkles, title: "Holiness & Integrity", description: "Living set apart for God with authenticity" },
    { icon: Heart, title: "Spirit-led Worship & Prayer", description: "Encountering God's presence through worship" },
    { icon: BookOpen, title: "Evangelism & Discipleship", description: "Making and multiplying disciples of Christ" },
    { icon: Users, title: "Community Transformation", description: "Being salt and light in society" },
    { icon: Church, title: "Love, Unity & Service", description: "Serving one another in Christ's love" },
    { icon: Globe, title: "Global Missions", description: "Reaching nations with the gospel" }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24 px-4 text-gray-800">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-primary leading-tight">
            Welcome to Elim Pentecostal <br className="hidden md:block" />Church Kenya
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-l md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-light">
            Born out of a powerful move of God in Ndunyu, Nyeri in the mid-80s, EPCK has grown into a vibrant, 
            Spirit-filled family committed to spreading the gospel, transforming communities, and raising a generation 
            grounded in truth, love, and kingdom purpose.
          </p>
        </motion.div>
      </div>

      {/* History Section with Enhanced Layout */}
      <div className="max-w-7xl mx-auto mb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Journey</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                What began in <strong>1986</strong> through intense prayer, fasting, and evangelism led by 
                <strong> Bishop Simon Githigi</strong> sparked a spiritual awakening that transformed entire communities. 
                As people encountered Godthrough healing, deliverance, conviction, and the baptism of the Holy Spirit,villages 
                changed, crime decreased, and revival spread like wildfire across the region.
              </p>
              
              <p>
                By <strong>1992</strong>, Elim Pentecostal Church Kenya was officially registered, opening doors for 
                mission work, church planting, and nationwide ministry expansion. This marked a new chapter in our journey, 
                enabling us to reach further and impact more lives with the transforming power of the gospel.
              </p>
              
              <p>
                Today, EPCK stands strong across Kenya and beyond, with a growing presence in <strong>Southern Sudan, 
                Ethiopia, Somalia</strong>, and other nations. We remain steadfast in our commitment to preaching Christ, 
                discipling believers, and transforming society holistically through the power of God's love.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/10.webp"
                alt="EPCK History"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Core Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values define who we are and guide everything we do as a church family
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Statement of Faith */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Statement of Faith
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The foundational biblical truths we stand on as a church
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-100"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            We believe in <strong className="text-primary">one God Father, Son, and Holy Spirit</strong> co-equally 
            and co-eternally existing in perfect unity. We affirm the{" "}
            <strong className="text-primary">Bible as the inspired, infallible Word of God</strong>, our ultimate 
            authority for faith and practice. We acknowledge{" "}
            <strong className="text-primary">humanity's fall into sin</strong> and the necessity of{" "}
            <strong className="text-primary">salvation by grace through faith in Jesus Christ</strong>, who died 
            for our sins and rose again for our justification. We believe in the{" "}
            <strong className="text-primary">baptism of the Holy Spirit</strong>, which empowers believers for 
            dynamic worship, effective mission, and faithful service. We uphold the{" "}
            <strong className="text-primary">unity and priesthood of all believers</strong>, recognizing that 
            every Christian has direct access to God and a vital role in His kingdom. We practice the{" "}
            <strong className="text-primary">ordinances of water baptism and the Lord's Table</strong> as sacred 
            acts of obedience and remembrance. We embrace a{" "}
            <strong className="text-primary">holistic gospel</strong> that ministers to the whole person—body, 
            soul, and spirit—bringing transformation to individuals and communities alike. Finally, we await the{" "}
            <strong className="text-primary">glorious return of Jesus Christ</strong>, the resurrection of the 
            dead, and the promise of eternal life with God for all who believe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}