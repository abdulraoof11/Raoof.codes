"use client";

import Image from "next/image";
import { JSX, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react"
import { LettersPullUp } from "./LettersPullUp";
interface Skill {
  name: string;
  percent: number;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: "MongoDB", percent: 90, icon: <span className="text-green-500 text-3xl">🗄️</span> },
  { name: "Express.js", percent: 85, icon: <span className="text-yellow-500 text-3xl">⚡</span> },
  { name: "React", percent: 95, icon: <span className="text-blue-500 text-3xl">⚛️</span> },
  { name: "Node.js", percent: 90, icon: <span className="text-green-600 text-3xl">🟢</span> },
  { name: "Next.js", percent: 85, icon: <span className="text-white text-3xl">⚡</span> },
  { name: "MySQL", percent: 80, icon: <span className="text-blue-500 text-3xl">🗄️</span> },
];

export default function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section id='about' className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
             <LettersPullUp text="About Me" />
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base lg:text-lg">
            MERN Stack Developer | Next.js | MySQL 
          </p>
        </div>

        {/* Main Content */}
        <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {/* Left Image */}
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-sm">
          <div className="absolute bottom-0 left-4 z-0">
            <Image
              src="/bg.webp"
              alt="Background Accent"
              width={350}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <Image
            src="/men.webp"
            alt="Profile Photo"
            width={350}
            height={450}
            className="rounded-lg relative z-10 w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>
          I am a MERN Stack developer with 1.5 years of professional
          experience, building robust and scalable web applications.
          I specialize in MongoDB, Express.js, React, and Node.js.
        </p>

        <p>
          I create dynamic, responsive, and user-friendly interfaces
          while ensuring efficient back-end logic and API integrations.
          My workflow combines modern front-end technologies with
          solid back-end practices.
        </p>

        <p>
          Passionate about clean code and continuous learning,
          I enjoy solving complex problems and optimizing performance.
        </p>

        <motion.a
       
          href="/Abdul Raoof (resume).pdf"
           download
          className="group  mt-8 w-full md:w-auto 
                     bg-[#FF7A00] text-white 
                     px-8 py-3 rounded-lg text-sm font-medium 
                     flex items-center justify-center gap-2
                     shadow-lg shadow-[#FF7A00]/20
                     hover:shadow-[#FF7A00]/40
                     hover:-translate-y-1
                     transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Download
            size={18} 
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
          Download Resume
        </motion.a>
      </motion.div>
    </motion.div>

        {/* Skills Section */}
        <div className="mt-24" ref={ref}>
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-14">
            <LettersPullUp text="Skills" />
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">

            {skills.map((skill, index) => (
              <div key={skill.name} className="flex flex-col items-center">

                <div className="relative w-20 h-20 sm:w-24 sm:h-24">

                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="#1f1f1f"
                      strokeWidth="8"
                    />

                    <motion.circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="#FF7A00"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={276}
                      strokeDashoffset={276}
                      initial={{ strokeDashoffset: 276 }}
                      animate={controls}
                      custom={skill.percent}
                      variants={{
                        visible: (percent: number) => ({
                          strokeDashoffset:
                            276 - (276 * percent) / 100,
                          transition: {
                            duration: 1.5,
                            delay: index * 0.2,
                            ease: "easeOut",
                          },
                        }),
                      }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    {skill.icon}
                  </div>
                </div>

                <p className="mt-4 text-lg font-semibold text-primary">
                  {skill.percent}%
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {skill.name}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}