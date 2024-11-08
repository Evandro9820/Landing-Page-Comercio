import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (menuOpen && !e.target.closest("nav")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, [menuOpen]);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-lg font-bold flex items-center space-x-2">
            <span>DARK SERVICES</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {["Inicio", "Planos", "Depoimentos", "Sobre Mim"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button Only */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://ggmax.com.br/"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Comece Agora
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-4 text-center transition duration-300 ease-in-out transform">
          {["Inicio", "Planos", "Depoimentos", "Sobre Mim"].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="text-white hover:text-gray-300 block py-2"
                onClick={() => setMenuOpen(false)} // Close on item click
              >
                {item}
              </a>
            </li>
          ))}
          <div className="flex justify-center mt-2">
            <a
              href="#"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Comece Agora
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
