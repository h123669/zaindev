'use client'
import Image from 'next/image';
import { MdDesignServices } from "react-icons/md";
import { motion } from 'framer-motion';

export default function Cards() {
  const services = [
    {
      id: 1,
      title: 'الصيانة العامة',
      description: 'إصلاح وترميم',
      image: '/images/1.webp',
      tag: '7 خدمات فرعية',
    },
    {
      id: 2,
      title: 'المقاولات',
      description: 'بناء وتجهيز',
      image: '/images/2.webp',
      tag: '5 خدمات فرعية',
    },
    {
      id: 3,
      title: "التصميم",
      description: 'تصاميم مبتكرة',
      image: '/images/3.webp',
      tag: '3 خدمات فرعية',
    },
    {
      id: 4,
      title: 'التنظيف',
      description: 'تنظيف شامل',
      image: '/images/4.webp',
      tag: '4 خدمات فرعية',
    },
  ];

  return (
    <>
      <div className="text-center my-2">
        <h2 className="text-3xl text-[#455161]">
          خدماتنا المتميزة
        </h2>
        <p className="text-[#455161] text-xl">
          نقدم مجموعة متكاملة من الخدمات المتخصصة لتلبية احتياجاتكم بأعلى معايير الجودة والاحترافية
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{  amount: 0.2 }}
            className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
              <MdDesignServices className="text-yellow-500 w-10 h-10" />
            </div>

            <div className="p-5">
              <span className="flex justify-between items-center">
                <span className="bg-amber-100 rounded-3xl p-2 text-gray-900">
                  {service.tag}
                </span>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.title}
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
