import { motion } from "framer-motion";

function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-gray-200/80 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl md:px-6">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white transition duration-300 group-hover:bg-orange-500">
            JN
          </div>

          <div className="hidden sm:block">
            <p className="font-bold leading-none text-gray-900">
              Jackson Ndiritu
            </p>

            <p className="mt-1 text-[11px] font-medium text-gray-400">
              Web Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-500 transition duration-300 hover:text-gray-900"
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hire Me */}
        <a
          href="#contact"
          className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg md:block"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-gray-400 hover:text-gray-900 md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-3 bg-current" />
          </div>
        </button>
      </nav>
    </motion.header>
  );
}

export default Navbar;