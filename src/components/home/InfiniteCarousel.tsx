
const images = [
  "/instructors/instructorImg1.jpg",
  "https://plus.unsplash.com/premium_photo-1667734613410-aebe970c3f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1667734613410-aebe970c3f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D",
  "/instructors/instructorImg2.png",
  // "/instructors/instructorImg1.jpg",
  // "/instructors/instructorImg2.png",
];

const InfiniteCarousel = () => {
  return (
    <div className="relative overflow-hidden h-[93vh] w-full max-w-xl">
      {/* Top & Bottom Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-100 dark:from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-100 dark:from-black to-transparent z-10"></div>

      {/* Scrolling Images */}
      <div className="h-full overflow-hidden">
        <div className="grid grid-cols-2 gap-2 animate-scroll">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              className="max-w-full h-auto object-contain rounded-md"
              alt={`Instructor ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
