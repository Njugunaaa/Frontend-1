import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Users,
  Church,
  ArrowRight,
  Play,
  Droplets,
  Zap,
  Globe,
  Pause,
} from "lucide-react";
import BreadCrumb from "./BreadCrump";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// ── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl group">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Nav buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#A00000] text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#A00000] text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === current ? "bg-white w-5" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Video Player ─────────────────────────────────────────────────────────────
function VideoPlayer({ src, poster, title, subtitle }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onEnded={() => setPlaying(false)}
        playsInline
      />

      {/* Play/Pause overlay — hides when playing */}
      <div
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
          playing ? "opacity-0 hover:opacity-100" : "opacity-100"
        } bg-black/30`}
      >
        <div className="bg-[#A00000] hover:bg-[#8B0000] p-5 rounded-full shadow-2xl transition-all duration-200 hover:scale-110">
          {playing ? (
            <Pause className="w-10 h-10 text-white fill-white" />
          ) : (
            <Play className="w-10 h-10 text-white fill-white" />
          )}
        </div>
      </div>

      {/* Top label */}
      {!playing && (
        <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/60 to-transparent p-5 text-white">
          <p className="font-bold text-lg">{title}</p>
          {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function MissionsAndChurchPlantingPage() {
  const churchProjects = [
    {
      title: "Parnay Church Opening",
      date: "October 18, 2025",
      description:
        "After months of dedicated effort — from drilling wells to nurturing faith and hope — the Parnay Church finally stands as a beacon of transformation in Maasai land. This is more than a building; it's a testimony of God's faithfulness and the community's resilience.",
      location: "Parnay, Kenya",
      highlights: ["Water Access", "Local Leadership", "Community Empowerment"],
      sliderImages: [
        "/images/parnay.webp",
        "/images/parnay1.webp",
        "/images/parnay2.webp",
        "/images/parnay3.webp",
      ],
    },
    {
      title: "Malindi Church Establishment",
      date: "2025",
      description:
        "At the heart of Kenya's coast, the Malindi Church project reflects the beauty of unity, service, and sustainable ministry. Through partnerships and outreach, Elim Church has brought spiritual renewal, education, healthcare, and empowerment to families across this vibrant region.",
      location: "Malindi, Kenya",
      highlights: ["Coastal Ministry", "Education Focus", "Holistic Care"],
      sliderImages: [
        "/images/malindi.webp",
        "/images/malindi1.webp",
        "/images/malindi2.webp",
      ],
    },
  ];

  const impactStats = [
    { number: "100+", label: "Churches Across Kenya", icon: Church },
    { number: "1,000+", label: "Lives Transformed Through Outreach", icon: Heart },
    { number: "1 Vision", label: "Christ-Centered Community Development", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#A00000] to-[#8B0000] overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/parnay.webp')" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Globe className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Missions & Church Planting
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Spreading Hope. Planting Churches. Transforming Nations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          <BreadCrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Missions & Church Planting", href: "/missions" },
            ]}
          />

          <motion.div {...fadeInUp} className="text-center mb-16 mt-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Don't Just Preach It. We Live It.
            </h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Elim Pentecostal Church of Kenya brings transformation to both hearts and communities
              across Kenya through church planting, leadership training, and practical outreach —
              meeting people's spiritual and physical needs as one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center mb-16"
          >
            <div>
              <img
                src="/images/malindi2.webp"
                alt="Missions work"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every church we plant tells a story — of faith, of water, of leadership rising up,
                and a community coming together. From the arid plains of Maasai land to the shores
                of Kenya's coast, Elim is on the move.
              </p>
              <div className="bg-[#FDF0D5] p-6 rounded-xl border-l-4 border-[#A00000]">
                <p className="text-gray-800 font-semibold mb-2">Active in 47 Counties</p>
                <p className="text-gray-600">
                  Regional missions, church planting, and community development across Kenya.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            The Impact So Far
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="bg-[#A00000] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-black text-[#A00000] mb-3">{stat.number}</div>
                  <p className="text-gray-700 font-semibold text-lg">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Church Projects ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Recent Milestones & Ongoing Work
            </h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Every church we plant tells a story of faith, water, leadership, and a community rising
              together.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {churchProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Carousel */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <ImageCarousel images={project.sliderImages} title={project.title} />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-2 text-[#A00000] text-sm font-semibold mb-3">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mb-4">{project.date}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-[#FDF0D5] text-[#A00000] text-sm font-semibold rounded-full border border-[#A00000]/20"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      className="inline-flex items-center text-[#A00000] font-bold cursor-pointer hover:gap-3 transition-all duration-200"
                      whileHover={{ x: 4 }}
                    >
                      Learn Their Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Videos ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See the Work in Action</h2>
            <div className="w-20 h-1 bg-[#A00000] mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Watch as Elim Church brings clean water and the Gospel to remote communities across
              Kenya.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Water Drilling */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#A00000] w-10 h-10 rounded-full flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Water Drilling in Maasai Land</h3>
                  <p className="text-sm text-gray-500">Life-giving water for communities in need</p>
                </div>
              </div>
              <VideoPlayer
                src="/videos/drill.mp4"
                poster="/images/parnay4.webp"
                title="Water Drilling in Maasai Land"
                subtitle="Life-giving water for communities in need"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {["💧 Clean Water", "👥 Empowerment", "✨ Transformation"].map((tag) => (
                  <span key={tag} className="bg-[#FDF0D5] text-[#A00000] px-3 py-1 rounded-full text-xs font-bold border border-[#A00000]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Community Testimonies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#A00000] w-10 h-10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Community Stories</h3>
                  <p className="text-sm text-gray-500">Real people. Real transformation. Real impact.</p>
                </div>
              </div>
              <VideoPlayer
                src="/videos/review.mp4"
                poster="/images/parnay3.webp"
                title="Community Stories"
                subtitle="Real people. Real transformation."
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {["🙌 Faith in Action", "💒 Empowered Lives", "🌍 Kenya-wide"].map((tag) => (
                  <span key={tag} className="bg-[#FDF0D5] text-[#A00000] px-3 py-1 rounded-full text-xs font-bold border border-[#A00000]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 text-[#A00000] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Be Part of This Mission</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether through prayer, financial partnership, or volunteer service — your support
              directly impacts church planting and Gospel advancement across Kenya. Together,
              we're not just building churches;{" "}
              <span className="font-black text-[#A00000]">we're transforming nations</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#A00000] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8B0000] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Partner With Us
                <Heart className="w-5 h-5" />
              </a>
              <a
                href="/give"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#A00000] text-[#A00000] px-8 py-4 rounded-full font-semibold hover:bg-[#A00000] hover:text-white transition-all duration-300 hover:scale-105"
              >
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center border-t border-gray-200">
        <p className="text-gray-500 text-sm font-medium">
          Elim Pentecostal Church of Kenya | Advancing God's Kingdom Through Strategic Ministry &
          Community Transformation
        </p>
      </div>
    </div>
  );
}