'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link'

export default function Aboutus() {
  return (
    <div className="flex flex-col lg:flex-row items-center my-10 px-4 lg:px-8 gap-6">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{  amount: 0.2 }}
      >
        <Image
          src="/images/about-as-service-contact-information-concept_53876-138509.avif"
          alt="عن الشركة"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{  amount: 0.2 }}
      >
        <span className="bg-amber-500 rounded-2xl py-1 px-4 inline-block mb-3 text-lg text-white">
          عن زين التنموية
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#455161] leading-snug mb-4">
          <span className="text-amber-500 block mb-2">
            عن زين التنموية
          </span>
          شركة رائدة في مجال المقاولات والتطوير
        </h2>

        <p className="text-base sm:text-lg text-[#455161] mb-6">
          بفضل فريقنا المتخصص وخبرتنا الواسعة، نلتزم بتطبيق أحدث التقنيات والمواد المستدامة
          لضمان تحقيق نتائج فعالة ومستدامة. كما نحرص على بناء شراكات قوية مع عملائنا وموردينا
          لضمان تنفيذ المشاريع بكفاءة عالية، مما يسهم في دعم رؤية المملكة 2030 وتعزيز التنمية
          العمرانية والاقتصادية.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/">
            <button className="bg-[#fe9a00] rounded-md px-6 py-2 text-white text-lg hover:bg-gray-800 transition">
              اقرأ قصتنا
            </button>
          </Link>
          <Link href="/">
            <button className="bg-gray-800 rounded-md px-6 py-2 text-[#fe9a00] text-lg hover:bg-[#fe9a00] hover:text-gray-800 transition">
              تواصل معنا
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
