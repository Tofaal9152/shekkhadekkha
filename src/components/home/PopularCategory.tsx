import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const PopularCategory = () => {
  const categories = [
    {
      name: "Test",
      courses: 1,
      img: "/popularCategory/popularcategoryImg1.png",
    },
    {
      name: "Admission Coaching",
      courses: 2,
      img: "/popularCategory/popularcategoryImg2.png",
    },
    {
      name: "Admission Preparatory",
      courses: 0,
      img: "/popularCategory/popularcategoryImg3.png",
    },
    {
      name: "Language Course",
      courses: 0,
      img: "/popularCategory/popularcategoryImg4.png",
    },
    {
      name: "STEAM Competency Programs",
      courses: 0,
      img: "/popularCategory/popularcategoryImg4.png",
    },
    {
      name: "Digital Innovation Programs",
      courses: 0,
      img: "/popularCategory/popularcategoryImg4.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10 sm:mb-16 transition-colors duration-300">
          জনপ্রিয় ক্যাটেগরি
        </h1>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="p-1 sm:p-2">
                    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                      {/* Background Image */}
                      <img
                        src={category.img || "/placeholder.svg"}
                        alt={`Category ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 group-hover:bg-opacity-60 transition-opacity duration-300"></div>

                      {/* Content Above Image */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-6">
                        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2">
                          {category.name}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-200 dark:text-gray-300 mb-4">
                          {category.courses} courses
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                          এক্সপ্লোর করুন →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="hidden sm:block">
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
            </div>
          </Carousel>
          <div className="text-center mt-10">
            <Button
              variant={"destructive"}
              className="px-6 py-3  text-lg font-semibold   transition-transform  ease-in-out transform hover:scale-105"
            >
             সব ক্যাটেগরি দেখুন 
              <FaArrowRightLong />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
