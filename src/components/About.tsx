import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Clean Design",
    description:
      "I believe good design should feel simple, intentional, and easy to understand.",
  },
  {
    number: "02",
    title: "Responsive",
    description:
      "Every interface I build is designed to work smoothly across phones, tablets, and desktops.",
  },
  {
    number: "03",
    title: "Purpose Driven",
    description:
      "I focus on creating digital experiences that solve real problems and provide genuine value.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-50 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-gray-300/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
            Creating meaningful digital experiences through thoughtful design and development.
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-gray-300/20 blur-3xl md:h-80 md:w-80" />

            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-gray-300 md:h-[360px] md:w-[360px]"
            />

            {/* Profile Photo */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-gray-200 bg-white shadow-xl md:h-80 md:w-80">
                 <img
                   src="/profile_pic.jpg"
                   alt="Jackson Ndiritu"
                   className="h-full w-full object-cover transition duration-500 hover:scale-105"
             />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-3 right-4 rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-lg"
            >
              <p className="text-[11px] uppercase tracking-wide text-gray-400">
                Currently
              </p>

              <p className="text-sm font-semibold text-gray-900">
                Building & Deploying
              </p>
            </motion.div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              My Story
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Hi, I'm Jackson Ndiritu.
            </h3>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600">
              <p>
                I'm a Web Developer and Digital Solutions Builder based in Kenya. I enjoy learning, experimenting with technology, and turning ideas into useful digital experiences.
              </p>

              <p>
                My journey in technology has allowed me to work across different areas, from web development and AI-related work to building practical solutions for real-world needs.
              </p>

              <p>
                I approach every project with curiosity and attention to detail. My goal is to create work that not only looks good, but is also practical, responsive, and enjoyable to use.
              </p>
            </div>

            {/* Highlight Quote */}
            <div className="mt-7 border-l-2 border-orange-500 pl-4">
              <p className="text-sm italic text-gray-700">
                “Always learning. Always building. Always improving.”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400">
                {value.number}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}