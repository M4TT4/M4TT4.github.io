use client;
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <main className="flex flex-col items-center justify-center p-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm [Your Name]!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-center max-w-xl"
        >
          I'm a multidisciplinary creative blending code and design.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {[1, 2, 3, 4].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-2">Project {project}</h2>
              <p className="text-gray-600">A short description of what this project is about.</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
