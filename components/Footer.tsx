export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t p-6 text-center text-gray-600">
      <p>© {year} My WDD 430 Portfolio</p>
    </footer>
  );
}