import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pt-20"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gray-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gray-100 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
                Web Developer · Digital Solutions Builder
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-bold leading-none tracking-[-0.035em] text-gray-900 sm:text-6xl md:text-7xl"
          >
            Jackson
            <span className="block text-gray-400">
              Ndiritu.
            </span>
          </motion.h1>

          {/* Main Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-gray-800 sm:text-3xl md:text-4xl"
          >
            Turning ideas into{" "}
            <span className="text-gray-400">
              digital experiences.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-5 max-w-2xl text-base leading-7 text-gray-500 md:text-lg"
          >
            I create thoughtful digital experiences with a focus on clean
            design, practical functionality, and technology that makes a
            difference.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              View My Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-orange-500"
            >
              Let's Talk

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-7 flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            <span className="text-xs font-medium text-gray-500 sm:text-sm">
              Available for freelance projects
            </span>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-[-60px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-gray-300"
          />
        </motion.div>
      </div>
    </section>
  );
}