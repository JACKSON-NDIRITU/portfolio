import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "Git & GitHub",
  "WordPress",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-20">
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
            Tech Stack
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500">
            I use a focused set of modern technologies to build fast,
            responsive, and maintainable websites and web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg"
            >
              <div className="flex flex-col items-center gap-3 text-center">

                {/* Icon Placeholder */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-base font-bold text-gray-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {skill.charAt(0)}
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-semibold text-gray-900">
                  {skill}
                </h3>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}