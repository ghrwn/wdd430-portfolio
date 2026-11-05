import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-2xl bg-blue-50 px-8 py-16 sm:px-12">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
          Welcome to my portfolio
        </p>

        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Hello, I'm a Software Development Student.
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          Welcome to my personal portfolio! I am currently learning software
          development and building my skills in web development, programming,
          and modern technologies. This website showcases my projects and
          learning journey.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Explore My Projects
        </a>
      </section>

      <div id="projects" className="pt-12">
        <ProjectList />
      </div>
    </div>
  );
}