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
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-bold text-gray-900">
        {title}
      </h3>

      <p className="mb-5 text-sm leading-6 text-gray-700">
        {description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {technology}
          </span>
        ))}
      </div>

      {link && (
        <div className="mt-auto pt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            View Project →
          </a>
        </div>
      )}
    </div>
  );
}