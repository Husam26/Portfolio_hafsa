import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Sem 1", "Sem 2", "Sem 3", "Sem 4"];

  // Variants for desktop menu items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  // Variants for mobile menu overlay
  const mobileMenuVariants = {
    hidden: {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "top",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom ease for a fluid effect
      },
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transformOrigin: "top",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Variants for individual mobile menu items
  const mobileItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3, // Stagger items
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-white/60 backdrop-blur-md border-b border-gray-100">
        <motion.h1
          className="text-2xl md:text-2xl font-extrabold text-indigo-900 tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/">HAFSA JABEEN</a>
        </motion.h1>

        {/* Desktop Menu Button/Trigger */}
        <div className="hidden md:flex items-center">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-indigo-900 transition-colors duration-300 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Desktop Menu"
          >
            <span>Menu</span>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M4 8h16M4 16h16" />
            </motion.svg>
          </motion.button>

          {/* Desktop Menu Items */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                className="flex space-x-8 ml-10 font-medium text-gray-600"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {menuItems.map((item, idx) => (
                  <motion.li key={idx} variants={itemVariants}>
                    <a
                      href={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="hover:text-indigo-700 transition-colors duration-300 relative group"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle Mobile Menu"
        >
          <motion.svg
            className="w-8 h-8 text-indigo-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </motion.svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-50 to-indigo-100 z-40 flex flex-col items-center justify-center p-8 overflow-hidden"
            style={{ paddingTop: 'calc(64px + 2rem)' }} // Offset for navbar height and some padding
          >
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 focus:outline-none shadow-md"
              aria-label="Close Mobile Menu"
            >
              <svg
                className="w-8 h-8 text-indigo-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.ul
              className="flex flex-col space-y-7 text-2xl font-bold text-indigo-800 text-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {menuItems.map((item, idx) => (
                <motion.li key={idx} variants={mobileItemVariants}>
                  <a
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="hover:text-purple-600 transition-colors duration-300 block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}