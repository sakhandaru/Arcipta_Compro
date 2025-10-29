export function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="font-semibold text-lg">Arcipta</h1>
      <ul className="flex gap-6 text-sm text-gray-700">
        <li><a href="#about">Tentang</a></li>
        <li><a href="#services">Layanan</a></li>
        <li><a href="#projects">Proyek</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
}
