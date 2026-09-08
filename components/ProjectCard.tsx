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
    <article className="rounded-lg border p-6 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>

      <p className="mb-4 text-gray-600">{description}</p>

      <p className="mb-4">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Project
        </a>
      )}
    </article>
  );
}