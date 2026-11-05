import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Pack & Go",
    description:
      "A travel packing planner that helps users plan trips by entering their destination, travel dates, and planned activities, then create and save personalized packing lists.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ghrwn/pack-and-go",
  },
  {
    title: "CSE 341 Project 1",
    description:
      "A backend web services project built with Node.js and Express, using MongoDB for data storage and Passport for authentication, with Swagger documentation for API endpoints.",
    technologies: ["Node.js", "Express", "MongoDB", "Passport", "Swagger"],
    link: "https://github.com/ghrwn/cse341-project1",
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
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}