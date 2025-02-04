import { Button } from "@/components/ui/button";
import InfiniteCarousel from "@/components/home/InfiniteCarousel";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="h-[93vh] overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full py-12 md:py-24">
        {/* Left Side - Hero Text */}
        <div className="w-full md:w-1/2 px-6 md:px-10 space-y-6 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-start text-center md:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
            বিশ্বস্ত সেবা, উন্নত ভবিষ্যৎ - আমরা আপনার সাফল্যের নিশ্চয়তা
          </h1>

          <p className="text-lg md:text-start text-center text-gray-600 dark:text-gray-300">
            আমরা আপনার লক্ষ্য অর্জনে প্রতিটি পদক্ষেপে গুণগত মান এবং দক্ষতা
            প্রদান করি। আপনার ব্যবসার সাফল্য নিশ্চিত করার জন্য আমরা সর্বদা
            প্রস্তুত।
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 rounded-md text-white transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </Button>
            <Input
              type="email"
              className="w-full sm:w-2/3 mt-4 sm:mt-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
              placeholder="Search courses, instructors..."
            />
          </div>
        </div>

        {/* Right Side - Infinite Scrolling Images */}
        <div className="w-full md:w-1/2 flex justify-center">
          <InfiniteCarousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
