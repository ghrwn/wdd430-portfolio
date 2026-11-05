interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-3 text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
        {title}
      </h3>

      <p className="mb-6 leading-7 text-slate-600">{description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
          >
            {technology}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
        >
          View Project <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}