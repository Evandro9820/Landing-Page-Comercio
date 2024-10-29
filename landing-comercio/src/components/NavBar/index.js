import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900  p-4  shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-lg font-bold flex items-center space-x-2">
            <span>DARK SERVICES</span>
          </div>
        </div>

        {/* Menu para desktop */}
        <ul className="hidden md:flex space-x-4">
          {["Inicio", "Planos","Depoimentos","Sobre Mim"].map(
            (item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* CTA e ícone do carrinho */}
        <div className="hidden md:flex items-center space-x-4">
          <ShoppingCartIcon className="h-6 w-6 text-white hover:text-gray-300" />
          <a
            href="#"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Comece Agora
          </a>
        </div>

        {/* Menu hambúrguer para mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-4 text-center">
          {["Inicio", "Serviços", "Sobre Mim", "Depoimentos"].map(
            (item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 block py-2"
                >
                  {item}
                </a>
              </li>
            )
          )}
          <div className="flex justify-center mt-2">
            <ShoppingCartIcon className="h-6 w-6 text-white" />
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
