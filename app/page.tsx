import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "SleepOutside",
    description:
      "A responsive e-commerce website built as part of my WDD 330 coursework.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/jsbowen79/wdd330-sleepoutside-team1/tree/oluwaseyi-team-member",
  },
  {
    title: "LaptopTrack",
    description:
      "A laptop borrowing management application designed to help manage campus laptop lending.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://oedesign.github.io/laptop-borrowing-app/login.html",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold">My WDD 430 Portfolio</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to my portfolio. Here are some of the projects I have built.
        </p>
      </section>

      <ProjectList projects={projects} />
    </div>
  );
}