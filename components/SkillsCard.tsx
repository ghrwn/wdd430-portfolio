interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-xl font-bold text-slate-900">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}