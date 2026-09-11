import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
    <div id="header-title" className="text-2xl font-bold">Oluwaseyi Elujoba</div>
      <nav className="container mx-auto flex gap-6">

        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/about" className="hover:underline">
          About
        </Link>

        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        
      </nav>
    </header>
  );
}