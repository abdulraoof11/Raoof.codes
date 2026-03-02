export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24 bg-[#0f0f0f]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32 py-12 text-center">

        {/* Logo */}
       <h1 className="text-white font-bold text-xl mb-8">
          <span className="text-[#FF7A00]">&lt;/&gt;</span> Raoof
          <span className="text-[#FF7A00]">.codes</span>
        </h1>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-gray-400 text-sm mb-8">
          <span className="hover:text-[#FF7A00] transition cursor-pointer">Home</span>
          <span className="hover:text-[#FF7A00] transition cursor-pointer">Services</span>
          <span className="hover:text-[#FF7A00] transition cursor-pointer">About Me</span>
          <span className="hover:text-[#FF7A00] transition cursor-pointer">Portfolio</span>
          <span className="hover:text-[#FF7A00] transition cursor-pointer">Contact Me</span>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-xs sm:text-sm">
          Designed by <span className="text-white font-medium">Mahmood Fazile</span> | UI/UX Designer
        </p>

      </div>
    </footer>
  );
}