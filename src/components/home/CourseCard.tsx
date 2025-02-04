
import { FaHeart } from "react-icons/fa"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

const CourseCard = ({ course }: { course: any }) => {
    return (
      <Card className="flex flex-col h-full overflow-hidden shadow-lg rounded-lg group transition-transform duration-200 ease-in-out transform hover:scale-105">
        {/* Course Image */}
        <div className="relative w-full pt-[56.25%]">
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Discount Badge */}
          {course.discount && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              {course.discount}% OFF
            </span>
          )}
          {/* Favorite Icon */}
          <button className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full transition-colors hover:bg-opacity-75">
            <FaHeart className="text-lg hover:text-red-500 transition-colors" />
          </button>
        </div>
  
        {/* Card Details */}
        <CardHeader className="flex-grow px-4 py-3 bg-white dark:bg-gray-800">
          {/* Bestseller Tag */}
          {course.isBestseller && (
            <Badge variant="outline" className="mb-2">
              Bestseller
            </Badge>
          )}
          <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
            {course.title}
          </CardTitle>
        </CardHeader>
  
        <CardContent className="px-4 pb-3 bg-white dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-300">Instructor: {course.instructor}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Level: {course.level}</p>
        </CardContent>
  
        {/* Price & Button */}
        <CardFooter className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="text-left">
            <p className="text-lg font-bold text-gray-800 dark:text-white">
              ${course.price.toFixed(2)}
              <span className="text-sm text-gray-500 ml-2 line-through">${course.originalPrice.toFixed(2)}</span>
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            বিস্তারিত দেখুন
          </Button>
        </CardFooter>
      </Card>
    )
  }
  export default CourseCard