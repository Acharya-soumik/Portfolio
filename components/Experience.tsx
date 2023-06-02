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
        "Utilized Next.js and Tailwind CSS to create responsive layouts with optimized loading times, enhancing the user experience. Employed performance optimization techniques to ensure fast and efficient rendering of web pages.",
        "Overseeing the recruitment of interns and evaluating their assignments to identify potential developers",
        "Optimized website load times by improving image loading performance and dynamically reducing image sizes.",
        "Utilized React Query on all projects with server state for efficient server state management and API caching within the application.",
        "Collaborated with the DevOps team to streamline project deployment using Docker, leveraging Next.js optimizations for rapid development, testing, and deployment.",
        "Migrated web project from CRA to Vite, enhancing development speed and resolving compatibility issues with older browsers.",
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
        "Developed a bulk upload feature enabling efficient onboarding of thousands of product items from Excel sheets, saving significant time and effort.Added functionality to bulk upload thousands of product item data using Excel sheets which heavily reduced the time and effort needed in product onboarding.",
        "Implemented integration with RazorPay X for seamless B2B payment processing, while also ensuring a user-friendly and intuitive UI/UX.",
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
        "Created website landing page",
        "Identified and fixed product voice to text recognition module on website",
        "Created Multiple Dashboards showing reports for sales calls with efficient loading time.",
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

      <div className="relative md:top-20 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-dark Green/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="min-w-full shadow shadow-white md:min-w-[60%] snap-start md:snap-center flex flex-col  mx-11 relative rounded-xl p-8"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="bg-darkBlack flex mr-auto rounded-2xl p-10  shadow-inner  shadow-white"
              viewport={{ once: true }}
            >
              <Image
                className="h-[40px] md:h-[50px] w-auto"
                src={project.image}
                alt=""
              />
            </motion.div>
            <br />
            <div className="rounded-xl">
              <h4
                style={{
                  color: project.color,
                }}
                className="text-lg md:text-2xl lg:text-4xl font-semibold p-3"
              >
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2"></div>
              <ul className="my-4 overflow-y-auto pb-8 max-h-[20vh] snap-y">
                {project.roles.map((item, idx) => (
                  <li
                    className=" my-1  uppercase text-white pb-2 flex items-start snap-mandatory snap-start"
                    key={idx}
                  >
                    <span className="mx-2 text-white">*</span>{" "}
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
