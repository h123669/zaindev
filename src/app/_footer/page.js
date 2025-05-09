'use client'
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import Image from 'next/image'

export default function Footer() {
  return <>
  <div className="text-center my-2">
        <h2 className="text-3xl text-[#455161]">
          تواصل معانا 
        </h2>
      </div>
  <div className=" p-4 md:p-6">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/4 my-3">
      <Image src="/images/087b018f-f6ab-4366-a947-0f4a7d8fb720_logo.webp" alt="شعار زين التنموية" width={30} height={30} />
      <p className="text-lg font-normal leading-relaxed">
      شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية. نقدم التميز في خدمات المقاولات والصيانة والخدمات المتخصصة
</p>
        <div className="flex gap-3 mt-4">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-2  rounded-full transition"
            >
              <a href="#" className="text-xl">
                <Icon />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 my-3">
        <h3 className="text-3xl fs-5 mb-2 text-amber-700">خدماتنا</h3>
        <div className="flex flex-col gap-2 text-lg font-normal">
        <a href="#about" className="hover:text-amber-600">الصيانة العامة
        </a>
          <a href="#services" className="hover:text-amber-600">المقاولات</a>
          <a href="#contact" className="hover:text-amber-600">التصميم</a>
          <a href="#contact" className="hover:text-amber-600">التنظيف</a>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 my-3">
        <h3 className="text-3xl fs-5 mb-2 text-amber-700">لينكات</h3>
        <div className="flex flex-col gap-2 text-lg font-normal">
        <a href="#about" className="hover:text-amber-600">من نحن</a>
          <a href="#services" className="hover:text-amber-600">خدماتنا</a>
          <a href="#contact" className="hover:text-amber-600">تواصل معنا</a>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 my-3">
        <h3 className="text-3xl fs-5 mb-2 text-amber-700">اتصل بنا</h3>
        <div className="flex items-start gap-3 mb-2">
          <MdOutlineEmail className="text-xl mt-1" />
          <p className="text-lg hover:text-amber-600">info@zaindev.com.sa</p>
        </div>
        <div className="flex items-start gap-3">
          <MdPhoneInTalk className="text-xl mt-1" />
          <p className="text-lg hover:text-amber-600">920010535</p>
        </div>
      </div>
    </div>

    <hr className="my-4 border/50" />
    <div className="flex justify-center items-center gap-6 text-sm">
      <p>© 2025 زين التنموية. جميع الحقوق محفوظة</p>
    </div>
</div>
  </>
}
