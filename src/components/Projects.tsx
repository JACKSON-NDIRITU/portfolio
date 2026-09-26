import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Hekma Webs",
    category: "Business Website",
    description:
      "A professional business website built to showcase digital solutions and web development services. The site focuses on responsiveness, clean design, and user-friendly navigation.",
    image: "/projects/hekmawebs_scr.jpg",
    technologies: ["WordPress", "Elementor"],
    liveUrl: "https://hekmaai.com",
  },
  {
    id: 2,
    title: "SpeakFlow",
    category: "Text-to-Speech Web App",
    description:
      "A modern text-to-speech application that converts written text into natural speech with selectable voices, adjustable speed, and downloadable audio output.",
    image: "/projects/speakflow.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            A selection of projects I've built.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500">
            Every project reflects a practical solution built with modern web
            technologies. More projects will be added as my portfolio grows.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-2">

                {/* Screenshot */}
                <div className="flex h-72 items-center justify-center bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const placeholder =
                        e.currentTarget.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = "flex";
                    }}
                  />

                  <div className="hidden h-full w-full items-center justify-center text-sm font-medium text-gray-400">
                    Add screenshot here
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8">

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                      Project {String(project.id).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {project.category}
                    </p>

                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-8">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                      >
                        Visit Website →
                      </a>
                    ) : (
                      <button
                        disabled
                        className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-400"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}