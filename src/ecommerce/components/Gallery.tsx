
export const Gallery = () => {
  // Sample image data - in real usage this could be passed as props
  const images = [1, 2, 3, 4]; // Placeholder for 4 images

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Galería</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((_, index) => (
          <div key={index} className="aspect-square bg-gray-200 w-full shadow-md">
            {/* In a real implementation, you would use a proper image here */}
            {/* <img src="/api/placeholder/400/400" alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
