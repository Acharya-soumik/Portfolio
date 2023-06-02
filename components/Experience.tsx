import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import FamApp from "../pages/assets/icons/FamApp.svg";
import Gnani from "../pages/assets/icons/Gnani.png";
import Supplynote from "../pages/assets/icons/Supplynote.svg";

export default function Experience() {
  const projects = [
    {
      _id: 1,
      title: "Fampay Solutions",
      role: "FrontEnd Engineer",
      tag: "Fintech for Teenagers",
      image: FamApp,
      summary: "string",
      color: "#ffb300",
      roles: [
        "Created web views for Android and iOS users of the FamApp, serving a user base of over 10 million.",
        "Developed a goal-based savings app empowering users to save money and achieve their ﬁnancial objectives.",
        "Managed and maintained a custom Visa card ordering website with personalized name and graphic/doodle options, providing enhanced user experience and convenience.",
      ],
    },
    {
      _id: 2,
      title: "SupplyNote",
      role: "FrontEnd Developer",
      tag: "Fintech for Teenagers",
      summary: "string",
      color: "#308bdc",
      image: Supplynote,
      roles: [
        "Created web views for Android and iOS users of the FamApp, serving a user base of over 10 million.",
        "Developed a goal-based savings app empowering users to save money and achieve their ﬁnancial objectives.",
        "Managed and maintained a custom Visa card ordering website with personalized name and graphic/doodle options, providing enhanced user experience and convenience.",
      ],
    },

    {
      _id: 3,
      title: "Gnani Innovations",
      role: "Fullstack Developer",
      tag: "Fintech for Teenagers",
      color: "#4057ead0",
      image: Gnani,
      summary: "string",
      roles: [
        "Created web views for Android and iOS users of the FamApp, serving a user base of over 10 million.",
        "Developed a goal-based savings app empowering users to save money and achieve their ﬁnancial objectives.",
        "Managed and maintained a custom Visa card ordering website with personalized name and graphic/doodle options, providing enhanced user experience and convenience.",
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 bg-red-400"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-white text-xl md:text-2xl">
        Experience
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-dark Green/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="min-w-full md:min-w-[70%] snap-center flex flex-col md:p-10  mx-11 relative top-36 md:top-0"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="bg-darkBlack flex mr-auto rounded-2xl p-10 sm:shadow-inner sm:shadow-white"
              viewport={{ once: true }}
            >
              <Image
                className={`h-[50px] md:h-[150px] w-auto ${
                  i === 2 ? "rounded-full" : null
                }`}
                src={project.image}
                alt=""
              />
            </motion.div>

            <div className="py-14 rounded-xl">
              <h4
                style={{
                  color: project.color,
                }}
                className="text-lg md:text-2xl lg:text-4xl font-semibold"
              >
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2"></div>
              <ul className="my-4 overflow-y-auto max-h-[70%] pb-8">
                {project.roles.map((item, idx) => (
                  <li
                    className="list-none my-1  uppercase text-white pb-2"
                    key={idx}
                  >
                    <p className="text-xs md:text-sm lg:text:md">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[20%] md:top-[30%] bg-darkBlack left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
