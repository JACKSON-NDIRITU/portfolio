import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-base font-bold text-white">
              JN
            </div>

            <div>
              <h1 className="font-bold text-gray-900">Jackson Ndiritu</h1>
              <p className="text-xs text-gray-500">Web Developer</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-semibold text-gray-700 md:flex">
            <a href="#home" className="transition hover:text-orange-500">
              Home
            </a>

            <a href="#about" className="transition hover:text-orange-500">
              About
            </a>

            <a href="#skills" className="transition hover:text-orange-500">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-orange-500">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-orange-500">
              Contact
            </a>
          </div>

          {/* Desktop Hire Me */}
          <a
            href="#contact"
            className="hidden rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 md:block"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:border-orange-400 hover:text-orange-500 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-2xl leading-none">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-orange-500"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-orange-500"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-orange-500"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-orange-500"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-orange-500"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}