'use client'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Map menu items to section IDs
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Me", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          className="text-white font-bold text-xl cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <a href="#home">
            <span className="text-[#FF7A00]">&lt;/&gt;</span> Raoof
            <span className="text-[#FF7A00]">.codes</span>
          </a>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[14px] text-gray-300">
          {menuItems.map((item, i) => (
            <motion.li
              key={i}
              className="hover:text-[#FF7A00] transition cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -2, scale: 1.05 }}
            >
              <a href={`#${item.id}`}>{item.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <motion.a
          href="#contact"
          className="hidden md:block bg-[#FF7A00] text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-[#0f0f0f] overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6">
              <ul className="flex flex-col gap-5 text-gray-300 text-sm">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="hover:text-[#FF7A00] transition cursor-pointer"
                  >
                    <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className="mt-6 w-full bg-[#FF7A00] text-white py-2 rounded-md text-sm hover:opacity-90 transition block text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: menuItems.length * 0.1, duration: 0.4 }}
                onClick={() => setOpen(false)}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}