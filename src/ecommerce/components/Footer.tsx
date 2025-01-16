
import { FaInstagram, FaLinkedin, FaYoutube, FaMusic } from 'react-icons/fa';

const Footer = () => {
  const navigationLinks = [
    {
      title: "Navegación",
      links: ["Enlace 1", "Enlace 2", "Enlace 3", "Enlace 4"]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-lg">Navegación</h3>
              <ul className="space-y-2">
                {navigationLinks[0].links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright © 2024 Marca. Derechos reservados.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaMusic className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
