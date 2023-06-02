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
          I'm a passionate Frontend Engineer with more then 3 years of
          professional experience in the JavaScript and React realms. My
          mission? Creating killer user interfaces. I've got an eye for detail
          and a knack for problem-solving. I stay up-to-date with the latest
          trends because, you know, the web waits for no one!
          <br />
          <br /> I'm from Siliguri, west bengal. Siliguri is a city in the
          northeast Indian state of West Bengal. It sits in the foothills of the
          Himalayas, surrounded by tea gardens.
          <br />
          I'love to build products, and also trekking and hiking. I love music
          too, and have learned to play a guitar,ukulele, piano and little bit
          of drumming. <br />
          <br />
          You can reach out to me, I dig deep about all things FrontEnd
        </p>
      </div>
    </motion.div>
  );
}
