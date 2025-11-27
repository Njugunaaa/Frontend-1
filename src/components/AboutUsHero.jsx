import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import sig from "/images/sig-img.webp";
import BreadCrumb from "./BreadCrump";

export default function AboutUsHero() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <BreadCrumb
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <br />
              Elim Pentecostal Church of Kenya
            </h1>

            {/* Short History */}
            <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
              The <strong>Elim Pentecostal Movement</strong> began in 1915 in
              Monaghan, Ireland, birthed out of a hunger for revival and a deep
              desire to see the Gospel reach the nations through the power of
              the Holy Spirit. The movement has since grown into a global family
              of churches preaching Christ as <strong>Savior, Healer,
              Baptizer,</strong> and <strong>Soon Coming King.</strong>
            </p>

            {/* Transition to EPCK */}
            <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed">
              In Kenya, the <strong>Elim Pentecostal Church of Kenya (EPCK)</strong>
              was founded through the visionary leadership of{" "}
              <strong>Archbishop Dr. Simon Githigi</strong> and his wife{" "}
              <strong>Beatrice Githigi</strong> in the late 1980s. What began
              with humble gatherings of faith has grown into a powerful national
              movement — planting churches, empowering communities, and raising
              disciples across the nation.
            </p>

            {/* Faith Statement */}
            <p className="text-gray-700 text-base lg:text-lg mb-8 italic border-l-4 border-amber-500 pl-4 leading-relaxed">
              “We believe in the power of the Holy Spirit to transform lives,
              restore hope, and equip believers for the work of ministry — all
              for the glory of God and the advancement of His Kingdom.”
            </p>

            {/* Info Section */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Join us for worship!
                  </p>
                  <p className="text-amber-600 font-medium">
                    Sunday services & weekly fellowships.
                  </p>
                  <p className="text-gray-600 text-sm">Open until 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    In all branches around the country 
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">+254 726 496396</p>
                  <p className="text-gray-600 text-sm">
                    Call us for more information
                  </p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mb-8">
              <img src={sig} alt="Archbishop Simon Githigi Signature" />
              <p className="text-gray-700 mt-2 font-medium">
                Archbishop Dr. Simon Githigi <br />
                <span className="text-amber-700 text-sm">
                  Founder & Presiding Bishop
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT - Church Image (Google Maps) */}
          <div className="order-1 lg:order-2">
            <img
              src="/images/arch.jpg"
              alt="Elim Pentecostal Church Building"
              className="w-full h-auto rounded-xl shadow-xl object-cover"
            />
            <p className="text-center text-gray-500 text-sm mt-3 italic">
              Arch Bishop Simon and Beatrice Githigi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
