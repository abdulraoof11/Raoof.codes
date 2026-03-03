"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LettersPullUp } from "./LettersPullUp";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    if (inView) controls.start("visible");

    if (inView) {
      let exp = 0,
        proj = 0,
        cli = 0;
      const interval = setInterval(() => {
        if (exp < 2) setExperience((exp += 1));
        if (proj < 20) setProjects((proj += 1));
        if (cli < 10) setClients((cli += 2));
        if (exp >= 2 && proj >= 20 && cli >= 10)
          clearInterval(interval);
      }, 50);
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      id='home'
      className="relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">

        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[100px] z-0"></div>

        {/* Left Content */}
        <motion.div
          className="relative z-10 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            },
          }}
        >
          <p className="text-gray-400  text-center md:text-start text-sm">Hi I am</p>

          <h2 className="text-2xl  text-center md:text-start sm:text-3xl font-semibold mt-2 lg:mt-4">
            Abdul Raoof
          </h2>

          <h1 className="text-3xl sm:text-5xl lg:text-nowrap lg:text-6xl font-bold text-primary mt-4 lg:mt-10">
            <LettersPullUp text="Full Stack Developer" />
           
          </h1>

          <p className="mt-6 lg:mt-10 text-gray-300 max-w-xl mx-auto lg:mx-0">
            I build modern, scalable web applications with the MERN stack
            (MongoDB, Express, React, Node.js, Next.js). From dynamic frontend
            interfaces to robust backend systems, I deliver end-to-end
            solutions that help businesses grow online.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap  lg:justify-start gap-4 mt-8">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>

            <a
              href="/Abdul Raoof (resume).pdf"
              download
              className="border border-gray-600 px-7 py-2 rounded-md text-sm hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 py-6 px-6 sm:px-8 bg-[#1B1B1B]/60 backdrop-blur-md rounded-xl flex flex-wrap sm:flex-row justify-between items-center gap-8 sm:gap-6">

            <div className="flex flex-col items-center sm:items-start sm:border-r border-gray-700 sm:pr-6">
              <span className="text-primary text-2xl sm:text-3xl font-bold">
                {experience}+
              </span>
              <p className="text-gray-400 mt-1 text-sm">
                Years Experience
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start sm:border-r border-gray-700 sm:px-6">
              <span className="text-primary text-2xl sm:text-3xl font-bold">
                {projects}+
              </span>
              <p className="text-gray-400 mt-1 text-sm">
                Projects Done
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start sm:pl-6">
              <span className="text-primary text-2xl sm:text-3xl font-bold">
                {clients}+
              </span>
              <p className="text-gray-400 mt-1 text-sm">
                Happy Clients
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative flex justify-center lg:justify-end w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            },
          }}
        >
          <div className="relative w-full">

            <div className="absolute bottom-0 left-4 z-0">
              <Image
                src="/bg.webp"
                alt="Background Accent"
                width={350}
                height={450}
                className="object-cover rounded-lg w-full h-auto"
              />
            </div>

            <Image
              src="/men.webp"
              alt="Profile Photo"
              width={350}
              height={450}
              className="object-cover relative z-10 w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}