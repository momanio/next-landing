"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="py-16 bg-gray-50 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div style={{ opacity, x }} className="relative">
            <motion.h2
              className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              من نحن
            </motion.h2>
            <motion.p
              className="mt-3 text-lg text-gray-500"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              نحن فريق متخصص في تطوير المواقع العربية المتجاوبة. نهتم بأدق
              التفاصيل لنقدم لكم أفضل تجربة مستخدم.
            </motion.p>

            <dl className="mt-10 space-y-10">
              {[
                { stat: "١٠٠+", label: "مشروع منجز" },
                { stat: "٩٥٪", label: "رضا العملاء" },
                { stat: "٢٤/٧", label: "دعم فني" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <dt>
                    <motion.p
                      className="text-2xl font-bold text-indigo-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    >
                      {item.stat}
                    </motion.p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{item.label}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
              src="/images/about/about-image.jpg"
              alt="About Us"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
