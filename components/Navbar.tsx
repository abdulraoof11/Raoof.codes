'use client'
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">
          <span className="text-[#FF7A00]">&lt;/&gt;</span> Raoof
          <span className="text-[#FF7A00]">.codes</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[14px] text-gray-300">
          <li className="hover:text-[#FF7A00] transition cursor-pointer">Home</li>
          <li className="hover:text-[#FF7A00] transition cursor-pointer">Services</li>
          <li className="hover:text-[#FF7A00] transition cursor-pointer">About Me</li>
          <li className="hover:text-[#FF7A00] transition cursor-pointer">Portfolio</li>
          <li className="hover:text-[#FF7A00] transition cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#FF7A00] text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Smooth Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-6">
          <ul className="flex flex-col gap-5 text-gray-300 text-sm">
            <li className="hover:text-[#FF7A00] transition">Home</li>
            <li className="hover:text-[#FF7A00] transition">Services</li>
            <li className="hover:text-[#FF7A00] transition">About Me</li>
            <li className="hover:text-[#FF7A00] transition">Portfolio</li>
            <li className="hover:text-[#FF7A00] transition">Contact</li>
          </ul>

          <button className="mt-6 w-full bg-[#FF7A00] text-white py-2 rounded-md text-sm hover:opacity-90 transition">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}