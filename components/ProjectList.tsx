import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "A description of your first project.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description: "A description of your second project.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

export default function ProjectList() {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        My Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}