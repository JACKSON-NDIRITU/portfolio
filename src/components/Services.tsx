import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Modern, responsive websites designed to give businesses and brands a professional online presence.",
    items: ["Business Websites", "Landing Pages", "Portfolio Websites"],
  },
  {
    number: "02",
    title: "E-Commerce Solutions",
    description:
      "Online stores designed to showcase products and make it easy for customers to browse, connect, and shop.",
    items: ["Online Stores", "Product Catalogs", "WhatsApp Integration"],
  },
  {
    number: "03",
    title: "Custom Web Applications",
    description:
      "Tailored web applications built to solve specific business needs and streamline everyday workflows.",
    items: ["Dashboards", "Management Systems", "Business Tools"],
  },
  {
    number: "04",
    title: "Business Automation",
    description:
      "Practical digital solutions that help businesses reduce repetitive work and improve the way they operate.",
    items: ["Automation", "Digital Tools", "API Integrations"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-10 h-72 w-72 rounded-full bg-gray-100 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Services
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Digital solutions built around{" "}
            <span className="text-gray-400">real needs.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500">
            From professional websites to custom web applications, I create
            practical digital solutions designed around the goals of each
            project.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.25em] text-gray-400">
                  {service.number}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                  →
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900 md:text-2xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-gray-500">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500 transition-colors group-hover:border-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-gray-500">
            Have a project in mind? Let's build it together.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-orange-500"
          >
            Start a conversation

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}