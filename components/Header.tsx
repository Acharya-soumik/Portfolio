import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Header() {
  const socialIcons = [
    "https://www.linkedin.com/in/soumik-a-4942b9a3/",
    "https://www.instagram.com/soumik_acharjee/?hl=en",
    "https://www.facebook.com/soumik.acharya.7",
    "https://github.com/Acharya-soumik",
  ];
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-row items-center"
      >
        {/* React social icons */}
        {socialIcons.map((social) => (
          <SocialIcon
            key={social}
            url={social}
            fgColor="white"
            bgColor="gray"
            className="mx-2"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0.5,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          url="https://drive.google.com/file/d/1IM7FT4Fms1ptkiH44rJBpAPEyXX_CUAB/view?usp=sharing"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-black border p-3 rounded-xl bg-gray-200 hover:bg-white ">
          Download My Resume
        </p>
      </motion.div>
    </header>
  );
}