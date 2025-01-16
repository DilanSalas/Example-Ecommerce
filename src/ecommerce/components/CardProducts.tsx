
import { FaShoppingCart, FaChevronRight, FaStar, FaHeart } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Producto 1",
    category: "CATEGORÍA",
    price: 599.0,
    image: "/default-placeholder.png",
  },
  {
    id: 2,
    name: "Producto 2",
    category: "CATEGORÍA",
    price: 599.0,
    image: "/default-placeholder.png",
  },
  {
    id: 3,
    name: "Producto 3",
    category: "CATEGORÍA",
    price: 599.0,
    image: "/default-placeholder.png",
  },
  {
    id: 4,
    name: "Producto 4",
    category: "CATEGORÍA",
    price: 599.0,
    image: "/default-placeholder.png",
  },
];

export const CardProducts = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Colección Destacada</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col group">
            <div className="relative aspect-square w-full bg-gray-200 mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaHeart className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">{product.category}</p>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
              <button className="w-full bg-black text-white hover:bg-black/90 flex items-center justify-center gap-2 py-2 px-4 rounded">
                <FaShoppingCart className="w-4 h-4" />
                AÑADIR AL CARRITO
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border border-black text-black hover:bg-black hover:text-white flex items-center gap-2 py-2 px-4 rounded">
          VER MÁS
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
