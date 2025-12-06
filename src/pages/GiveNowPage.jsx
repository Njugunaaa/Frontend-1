import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Heart, CreditCard, Smartphone, Building, Globe, CheckCircle, ArrowRight } from "lucide-react";

export default function GiveNow() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [givingType, setGivingType] = useState("one-time");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const quickAmounts = [25, 50, 100, 250, 500, 1000];

  const givingOptions = [
    {
      icon: Globe,
      title: "General Mission Fund",
      desc: "Support all our ministry work—church planting, outreach, and community development"
    },
    {
      icon: Heart,
      title: "Specific Project",
      desc: "Direct your gift to a particular ministry or mission project"
    },
    {
      icon: Building,
      title: "Building Fund",
      desc: "Help us construct new church buildings and ministry facilities"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-[#A00000] to-[#8B0000] overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/give-hero.jpg')" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Gift className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Give Now
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
              Make a difference today. Your generosity transforms lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Giving Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Giving Type Toggle */}
          <motion.div {...fadeInUp} className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-lg inline-flex gap-2">
              <button
                onClick={() => setGivingType("one-time")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  givingType === "one-time"
                    ? "bg-[#A00000] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                One-Time Gift
              </button>
              <button
                onClick={() => setGivingType("monthly")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  givingType === "monthly"
                    ? "bg-[#A00000] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly Giving
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Giving Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {givingType === "monthly" ? "Set Up Monthly Giving" : "Choose Your Gift Amount"}
              </h2>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`py-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedAmount === amount
                        ? "bg-[#A00000] text-white scale-105 shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-[#A00000] focus:outline-none text-lg"
                  />
                </div>
              </div>

              {/* Where to Give */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Where should your gift go?
                </label>
                <div className="space-y-3">
                  {givingOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <label
                        key={index}
                        className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#A00000] transition-all duration-300 hover:bg-[#FDF0D5]"
                      >
                        <input
                          type="radio"
                          name="giving-option"
                          className="mt-1 w-5 h-5 text-[#A00000]"
                          defaultChecked={index === 0}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <Icon className="w-5 h-5 text-[#A00000]" />
                            <h4 className="font-semibold text-gray-900">{option.title}</h4>
                          </div>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A00000] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A00000] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 700 000 000"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A00000] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#A00000] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#8B0000] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                {givingType === "monthly" ? "Set Up Monthly Gift" : "Complete Donation"}
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your donation is secure and encrypted. You'll receive a receipt via email.
              </p>
            </motion.div>

            {/* Payment Methods & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 space-y-6"
            >
              {/* Payment Methods */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">We Accept</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CreditCard className="w-6 h-6 text-[#A00000]" />
                    <span className="text-sm font-medium">Credit / Debit Card</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Smartphone className="w-6 h-6 text-[#A00000]" />
                    <span className="text-sm font-medium">M-Pesa</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Building className="w-6 h-6 text-[#A00000]" />
                    <span className="text-sm font-medium">Bank Transfer</span>
                  </div>
                </div>
              </div>

              {/* Why Give */}
              <div className="bg-gradient-to-br from-[#FDF0D5] to-white rounded-xl shadow-lg p-6 border-l-4 border-[#A00000]">
                <h3 className="font-bold text-gray-900 mb-4">Your Impact</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>100% of your donation goes directly to ministry work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tax-deductible receipt provided immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Regular updates on how your gift is making a difference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Secure, encrypted payment processing</span>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is ready to assist you with any questions about giving.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Email:</strong> giving@epck.org
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> +254 700 000 000
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-[#FDF0D5] to-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-[#A00000] text-center"
          >
            <Heart className="w-12 h-12 text-[#A00000] mx-auto mb-4" />
            <p className="text-xl text-gray-800 italic mb-4 leading-relaxed">
              "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, 
              will be poured into your lap. For with the measure you use, it will be measured to you."
            </p>
            <p className="text-gray-600 font-semibold">— Luke 6:38</p>
          </motion.div>
        </div>
      </section>

      {/* Alternative Giving Methods */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Other Ways to Give
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <Smartphone className="w-12 h-12 text-[#A00000] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">M-Pesa Paybill</h3>
              <p className="text-gray-700 mb-4">Send directly via M-Pesa to our paybill number</p>
              <div className="bg-[#FDF0D5] p-4 rounded-lg">
                <p className="font-bold text-[#A00000] text-2xl">123456</p>
                <p className="text-sm text-gray-600">Account: Your Name</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <Building className="w-12 h-12 text-[#A00000] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank Transfer</h3>
              <p className="text-gray-700 mb-4">Send funds directly to our bank account</p>
              <div className="bg-[#FDF0D5] p-4 rounded-lg text-left text-sm">
                <p><strong>Bank:</strong> Equity Bank</p>
                <p><strong>Account:</strong> 0123456789</p>
                <p><strong>Name:</strong> EPCK</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <Gift className="w-12 h-12 text-[#A00000] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">In-Person</h3>
              <p className="text-gray-700 mb-4">Give during any of our church services</p>
              <div className="bg-[#FDF0D5] p-4 rounded-lg">
                <p className="font-semibold text-gray-900">Sundays</p>
                <p className="text-sm text-gray-600">9:00 AM & 11:00 AM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}