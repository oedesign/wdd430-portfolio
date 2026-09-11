import StudentInfo from "../../components/StudentInfo";

export default function About() {
  return (
    <section>
      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="mt-4">
        I am a web development student learning how to build modern
        applications with Next.js.
      </p>

      <StudentInfo
        name="Oluwaseyi Elujoba"
        program="Web Development"
      />
    </section>
  );
}