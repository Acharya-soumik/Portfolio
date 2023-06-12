import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import SkillCard from "../components/SkillCard";
import Footer from "../components/Footer";

const Home = () => {
  const skills = [
    {
      type: "Programming Languages",
      data: [
        {
          title: "JavaScript",
        },
        {
          title: "TypeScript",
        },
      ],
    },
    {
      type: "Frontend",
      data: [
        {
          title: "HTML5",
        },
        {
          title: "CSS3",
        },
        {
          title: "React",
        },
        {
          title: "Next JS",
        },
        {
          title: "React Native",
        },
      ],
    },
    {
      type: "Modern Css",
      data: [
        {
          title: "Tailwind Css",
        },
        {
          title: "Styled Components",
        },
        {
          title: "SCSS",
        },
        {
          title: "Material Ui",
        },
      ],
    },
    {
      type: "State Management",
      data: [
        {
          title: "Redux",
        },
        {
          title: "Zustand",
        },
      ],
    },
    {
      type: "Testing",
      data: [
        {
          title: "Jest/RTL",
        },
      ],
    },
    {
      type: "Tracking",
      data: [
        {
          title: "Sentry",
        },
      ],
    },
    {
      type: "Tools And Libs",
      data: [
        {
          title: "ESLint",
        },
        {
          title: "Framer Motion",
        },
        {
          title: "React Query",
        },
        {
          title: "Figma",
        },
      ],
    },
  ];

  return (
    <div
      className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{"Soumik's Portfolio"}</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <Experience />
      </section>
      <section id="skills" className="snap-start bg-darkBlack ">
        <div className="h-screen relative flex flex-col items-center justify-center min-h-screen py-6">
          <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-100 text-xl md:text-2xl text-center shadow-md  shadow-fuchsia-300 px-2 py-4">
            My Frontend Skills
          </h3>
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 relative top-32 max-h-[70vh] overflow-y-auto py-20 px-10 snap-y shadow-inner shadow-white rounded">
            {skills.map((skill: any, index: number) => (
              <SkillCard key={index} type={skill.type} data={skill.data} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="snap-start">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
