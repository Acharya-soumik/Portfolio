import { motion } from "framer-motion";
import React from "react";
import CodingBro from "../pages/assets/images/CodingBro.svg";
import Image from "next/image";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About Me
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="min-w-[40%]"
      >
        <Image
          alt=""
          className="-mb-24 md:mb-0 flex-shrink-0 w-52 h-[300px] md:h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] text-center"
          src={CodingBro}
        />
      </motion.div>
      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-darkGreen/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-lg lg:text-lg text-justify">
          I am a Frontend Engineer with over three years of professional
          experience in the domains of JavaScript and React. My goal? Crafting
          exceptional user interfaces that leave a lasting impression. <br />{" "}
          With a keen eye for detail and a knack for troubleshooting, I strive
          to stay on top of the latest trends, for the web waits for no one!
          <br />
          <br /> Hailing from the charming city of Siliguri in West Bengal,
          India, nestled amidst the Himalayan foothills and surrounded by
          verdant tea gardens, I am passionate about building innovative
          products. <br /> When not coding away, you&apos;ll find me trekking
          and hiking, or strumming my guitar, ukulele, piano, and even dabbling
          in a bit of drumming. <br />
          Feel free to reach out to me, as I relish exploring all things
          FrontEnd.
        </p>
      </div>
    </motion.div>
  );
}
