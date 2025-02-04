import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import CourseCard from "./CourseCard";

const PopularCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const courseCategories = [
    "All",
    "Admission Preparatory",
    "Admission Coaching",
    "Digital Innovation Programs",
    "Language Course",
    "STEAM Competency Programs",
    "Test",
    "ক্যাডেট কলেজ ভর্তিপরীক্ষা চূড়ান্ত সাজেশন",
  ];

  const courses = [
    {
      title: "Advanced JavaScript",
      instructor: "Md. Tofaal Ahmed",
      level: "Advanced",
      price: 19.99,
      originalPrice: 25.99,
      discount: 20,
      isBestseller: true,
      image: "/popularCategory/popularcategoryImg1.png",
      category: "Digital Innovation Programs",
    },
    {
      title: "React Mastery",
      instructor: "Md. Tofaal Ahmed",
      level: "Intermediate",
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
      isBestseller: false,
      image: "/popularCategory/popularcategoryImg2.png",
      category: "Admission Coaching",
    },
    // Add more courses here...
  ];

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="bg-gradient-to-b min-h-[50rem] from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10 sm:mb-16 transition-colors duration-300">
          সাধ্যের মধ্যে, সর্বোচ্চ মানের বাছাইকৃত কোর্সে, শিক্ষা হোক সবার জন্যে
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="All" className="w-full mb-8">
          {/* Tab List */}
          <TabsList className="flex flex-wrap justify-center gap-2 mb-6 bg-transparent">
            {courseCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <TabsContent value={activeCategory} className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
              {filteredCourses.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400 col-span-full transition-opacity duration-300">
                  এই ক্যাটাগরিতে কোনো কোর্স নেই।
                </p>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Courses Button */}
        <div className="text-center mt-10">
          <Button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
            সবগুলো কোর্স দেখুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
