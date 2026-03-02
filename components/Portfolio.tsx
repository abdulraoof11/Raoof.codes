'use client';

export default function Portfolio() {
  const projects = [
    { title: "Vox Edu", url: "https://vox-edu-client.vercel.app/", img: "/vox.png" },
    { title: "Show Coach", url: "https://www.showcoach.app/", img: "/show.png" },
    { title: "PodifyGPT", url: "https://podifygpt.com", img: "/podifygpt.png" },
    { title: "Codainer AI", url: "https://codainer.ai", img: "/codainer.png" },
  ];

  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Portfolio
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Some of my recent projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden 
                         bg-[#1B1B1B] 
                         hover:-translate-y-2 
                         transition-all duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] 
                             object-cover 
                             group-hover:scale-110 
                             transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 
                              group-hover:opacity-100 
                              transition duration-300 
                              flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#FF7A00] text-lg font-semibold">
                    {project.title}
                  </p>
                  <span className="text-white text-sm mt-2 block">
                    View Project →
                  </span>
                </div>
              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  );
}