// src/components/Navbar.tsx
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                MiTienda
              </Link>
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/productos"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Productos
              </Link>
              <Link
                to="/categorias"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Categorías
              </Link>
              <Link
                to="/ofertas"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Ofertas
              </Link>
            </div>
          </div>
          {/* Shopping Cart */}
          <div className="flex items-center">
            <button className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <BsCart3 size={24} />
              <span className="sr-only">Ver carrito</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

