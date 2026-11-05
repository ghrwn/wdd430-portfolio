import SkillsCard from "../../components/SkillsCard";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-2xl bg-blue-50 px-8 py-12 sm:px-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
          Get to know me
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          About Me
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          I am a software development student with an interest in building
          useful and user-friendly applications. I enjoy learning new
          technologies, improving my programming skills, and applying what I
          learn through practical projects.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          My Learning Journey
        </h2>

        <p className="max-w-3xl leading-8 text-slate-600">
          My goal is to continue developing my knowledge of software
          development, explore different tools and technologies, and grow
          as a developer through continuous learning and hands-on experience.
        </p>
      </section>

      <section className="mt-10">
        <SkillsCard
          title="Technologies I'm Learning"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
          ]}
        />
      </section>
    </div>
  );
}