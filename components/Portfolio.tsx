'use client';

import { LettersPullUp } from "./LettersPullUp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    { title: "Vox Edu", url: "https://vox-edu-client.vercel.app/", img: "/vox.webp" },
    { title: "Show Coach", url: "https://www.showcoach.app/", img: "/show.webp" },
    { title: "PodifyGPT", url: "https://podifygpt.com", img: "/podifygpt.webp" },
    { title: "Codainer AI", url: "https://codainer.ai", img: "/codainer.webp" },
  ];

  return (
    <section id='portfolio' className="py-20 bg-[#0f0f0f]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <LettersPullUp text="Portfolio" />
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Some of my recent projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, i) => {
            // Intersection observer hook
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <motion.a
                key={i}
                ref={ref}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-[#1B1B1B]"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[#FF7A00] text-lg font-semibold">{project.title}</p>
                    <span className="text-white text-sm mt-2 block">View Project →</span>
                  </div>
                </div>

              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
}