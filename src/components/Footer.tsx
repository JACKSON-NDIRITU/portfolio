import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-6 text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} Jackson Ndiritu. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <p className="hidden sm:block">
            Built with React & Tailwind CSS
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-orange-500 hover:text-orange-500"
            aria-label="Back to top"
          >
            ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}