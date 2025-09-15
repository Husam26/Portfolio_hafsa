import { motion } from "framer-motion";

export default function HomePage() {
  const infoData = [
    ["Roll No:", "3311-23-701-053"],
    ["College:", "ST. MARY'S COLLEGE OF EDUCATION"],
    ["Method 1:", "BIOLOGICAL SCIENCE"],
    ["Method 2:", "ENGLISH"],
    ["Batch:", "2023-2025"],
  ];

  const skills = [
    "Teaching",
    "Communication",
    "Creative Writing",
    "Classroom Management",
    "Lesson Planning",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden mt-16 rounded-lg shadow-lg mx-4 md:mx-auto max-w-7xl">
        <motion.img
          src="/hero-image.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.85 }}
          animate={{ scale: 1.1, opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          style={{ filter: "brightness(1.1) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-blue-900 drop-shadow-md">
            Welcome to My Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto drop-shadow-sm">
            A Glimpse Into My Journey as a Future Educator
          </p>
        </motion.div>
      </section>

      {/* Profile & Details Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/image-1.jpg"
              alt="Profile"
              className="rounded-3xl shadow-lg w-72 h-72 object-cover border-4 border-blue-900"
              style={{ filter: "brightness(0.95)" }}
            />
          </motion.div>

          {/* Right - Details & Skills */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {infoData.map(([label, value], idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p>
                  <span className="font-semibold text-gray-600">{label}</span>{" "}
                  <span className="text-gray-900">{value}</span>
                </p>
              </div>
            ))}

            {/* Skills */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm cursor-default hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 mt-12 text-gray-600 text-center border-t border-gray-300 bg-white/80 backdrop-blur-sm">
        &copy; {new Date().getFullYear()} Hafsa Jabeen. All Rights Reserved.
      </footer>
    </div>
  );
}
