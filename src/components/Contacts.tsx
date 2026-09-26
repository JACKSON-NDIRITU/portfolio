import { motion } from "framer-motion";
import {
  SiGithub,
  SiMedium,
  SiSubstack,
  SiX,
} from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-20 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-120px] h-72 w-72 rounded-full bg-gray-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Contact
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Let's build something meaningful together.
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-gray-400">
              Whether you need a business website, an online store, or a custom
              web application, I'd love to hear about your project.
            </p>

            {/* Contact Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:jacknndiritu@gmail.com"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Email Me
              </a>

              <a
                href="https://wa.me/254719868477"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-orange-500 hover:text-orange-400"
              >
                WhatsApp Me
              </a>
            </div>

            {/* Contact Details */}
            <div className="mt-8 space-y-3 text-sm text-gray-400">
              <p>
                <span className="font-medium text-gray-200">Email</span>
                <br />
                jacknndiritu@gmail.com
              </p>

              <p>
                <span className="font-medium text-gray-200">WhatsApp</span>
                <br />
                +254 719 868 477
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                Find me online
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Connect on my platforms
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Follow my work, articles, and projects across different
                platforms.
              </p>

              {/* Social Links */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {/* X */}
                <a
                  href="https://x.com/jacknndiritu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-800 bg-gray-900 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800"
                >
                  <SiX className="text-xl text-white" />

                  <span className="text-sm font-medium text-gray-200">
                    X
                  </span>

                  <span className="ml-auto text-gray-500 transition group-hover:translate-x-1 group-hover:text-orange-400">
                    →
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/JACKSON-NDIRITU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-800 bg-gray-900 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800"
                >
                  <SiGithub className="text-xl text-white" />

                  <span className="text-sm font-medium text-gray-200">
                    GitHub
                  </span>

                  <span className="ml-auto text-gray-500 transition group-hover:translate-x-1 group-hover:text-orange-400">
                    →
                  </span>
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@jacknndiritu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-800 bg-gray-900 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800"
                >
                  <SiMedium className="text-xl text-white" />

                  <span className="text-sm font-medium text-gray-200">
                    Medium
                  </span>

                  <span className="ml-auto text-gray-500 transition group-hover:translate-x-1 group-hover:text-orange-400">
                    →
                  </span>
                </a>

                {/* Substack */}
                <a
                  href="https://substack.com/@jacknndiritu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-800 bg-gray-900 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800"
                >
                  <SiSubstack className="text-xl text-white" />

                  <span className="text-sm font-medium text-gray-200">
                    Substack
                  </span>

                  <span className="ml-auto text-gray-500 transition group-hover:translate-x-1 group-hover:text-orange-400">
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}