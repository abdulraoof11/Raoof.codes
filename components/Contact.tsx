'use client';

export default function Contact() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Let's discuss your project and make something awesome together!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#1B1B1B] p-8 sm:p-10 rounded-2xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              className="bg-[#0f0f0f] p-4 rounded-lg text-sm text-white 
                         placeholder-gray-500 
                         border border-transparent
                         focus:border-[#FF7A00]
                         focus:outline-none 
                         transition"
              placeholder="Your Name"
            />

            <input
              className="bg-[#0f0f0f] p-4 rounded-lg text-sm text-white 
                         placeholder-gray-500 
                         border border-transparent
                         focus:border-[#FF7A00]
                         focus:outline-none 
                         transition"
              placeholder="Your Email"
            />

            <input
              className="bg-[#0f0f0f] p-4 rounded-lg text-sm text-white 
                         placeholder-gray-500 
                         border border-transparent
                         focus:border-[#FF7A00]
                         focus:outline-none 
                         transition"
              placeholder="Phone Number"
            />

            <input
              className="bg-[#0f0f0f] p-4 rounded-lg text-sm text-white 
                         placeholder-gray-500 
                         border border-transparent
                         focus:border-[#FF7A00]
                         focus:outline-none 
                         transition"
              placeholder="Service of Interest"
            />

            <textarea
              className="bg-[#0f0f0f] p-4 rounded-lg text-sm text-white 
                         placeholder-gray-500 
                         border border-transparent
                         focus:border-[#FF7A00]
                         focus:outline-none 
                         transition md:col-span-2"
              placeholder="Project Details"
              rows={5}
            ></textarea>
          </div>

          {/* Button */}
          <button
            className="mt-8 w-full md:w-auto 
                       bg-[#FF7A00] text-white 
                       px-8 py-3 rounded-lg text-sm font-medium 
                       hover:opacity-90 
                       transition-all duration-300"
          >
            Send Message
          </button>

        </div>
      </div>
    </section>
  );
}