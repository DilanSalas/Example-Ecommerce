import { FaFacebook, FaTwitter, FaUserAlt } from 'react-icons/fa'

interface Testimonial {
  id: number
  content: string
  name: string
  description: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque gravida nibh. Cras facilisis urna sed urna venenatis pellentesque. Integer et magna vitae ipsum tincidunt mattis. Phasellus sed ipsum in turpis convallis facilisis.",
    name: "Nombres",
    description: "Descripción",
    avatar: "user" 
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque gravida nibh. Cras facilisis urna sed urna venenatis pellentesque. Integer et magna vitae ipsum tincidunt mattis. Phasellus sed ipsum in turpis convallis facilisis.",
    name: "Nombres",
    description: "Descripción",
    avatar: "user" 
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque gravida nibh. Cras facilisis urna sed urna venenatis pellentesque. Integer et magna vitae ipsum tincidunt mattis. Phasellus sed ipsum in turpis convallis facilisis.",
    name: "Nombres",
    description: "Descripción",
    avatar: "user" 
  }
]

export const Testimonies = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg space-y-6"
            >
              <p className="text-gray-700 leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    {/* Usamos react-icon para los avatares */}
                    <FaUserAlt className="w-12 h-12 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Compartir en Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </button>
                  <button 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Compartir en Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
