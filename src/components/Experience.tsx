import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    title: "Web Development Experience",
    organization: "Website Development & Maintenance",
    description:
      "Built, maintained, and optimized websites with a focus on responsive design, SEO improvements, performance, and user experience.",
  },
  {
    year: "2026",
    title: "AI Data Annotation",
    organization: "iMerit",
    description:
      "Worked on AI data annotation and quality assurance tasks involving image, audio, and speech datasets while following detailed annotation guidelines.",
  },
  {
    year: "2026",
    title: "IBM TechExchange Event",
    organization: "AI & Automation",
    description:
      "Participated in an IBM TechExchange event focused on Artificial Intelligence, automation, and emerging technologies.",
  },
  {
    year: "2026",
    title: "Microsoft Excel Certificate",
    organization: "Microsoft Excel",
    description:
      "Completed a Microsoft Excel course to strengthen spreadsheet, data organization, and productivity skills.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Experience & Certifications
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500">
            My experience combines web development, AI-related work, and
            continuous learning through practical projects and professional
            certifications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 pl-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[42px] top-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-gray-50 bg-orange-500" />

              {/* Card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg">
                <p className="text-sm font-semibold text-orange-500">
                  {item.year}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.organization}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}