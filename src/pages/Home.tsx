import { Footer } from "@/components/footer/Footer";
import Hero from "@/components/home/Hero";
import PopularCategory from "@/components/home/PopularCategory";
import PopularCourses from "@/components/home/PopularCourses";
import Navbar from "@/components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCourses />
      <PopularCategory />
      <Footer />
    </div>
  );
};

export default Home;
