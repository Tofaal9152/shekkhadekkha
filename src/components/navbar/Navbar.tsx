import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  FiGrid,
  FiHome,
  FiLogIn,
  FiLogOut,
  FiShoppingCart,
} from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

import CategoryMenu from "./CategoryMenu";

const Navbar = () => {
  const session = 1;
  return (
    <nav className="bg-gray-100 z-50 dark:bg-[#020817] bg-opacity-30 backdrop-blur sticky top-0 p-4">
      <div className="container mx-auto  lg:px-8  flex items-center justify-between">
        {/* logo */}
        <img className="" src="/logo.jpeg" alt="" />
        {/* navitems */}
        <ul className="md:flex space-x-6 hidden">
          <li className="flex items-center space-x-2 cursor-pointer hover:underline">
            <FiHome className="text-lg" />
            <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              হোম
            </span>
          </li>
          {session ? (
            <li className="flex items-center space-x-2 cursor-pointer hover:underline">
              <span className="text-black dark:text-white flex gap-2 hover:text-gray-600 dark:hover:text-gray-400">
                <MdDashboardCustomize className="text-lg" />
                ড্যাশবোর্ড
              </span>
            </li>
          ) : (
            ""
          )}
          <li className="flex items-center space-x-2 cursor-pointer ">
            <FiGrid className="text-lg" />
            <CategoryMenu />
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:underline">
            <FiShoppingCart className="text-lg" />
            <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              কার্ট (12)
            </span>
          </li>
        </ul>
        {/*darkMode & login & sessions */}
        <div className="space-x-3 hidden md:flex items-center">
          <ModeToggle />
          {session ? (
            <Button variant={"destructive"}>
              {" "}
              <FiLogOut className="text-lg" />
              লগআউট
            </Button>
          ) : (
            <Button variant={"destructive"}>
              {" "}
              <FiLogIn className="text-lg" />
              রেজিস্টার / লগইন
            </Button>
          )}
        </div>

        {/* For mobile devices */}
        <div className="md:hidden block">
          <MobileNav session={session} />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = ({ session }: { session: any }) => {
  return (
    <Sheet>
      <ModeToggle />
      {/* 3 menubar */}
      <SheetTrigger>
        <svg
          className="w-6 ml-2 h-6 text-black dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-gray-800">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center text-black dark:text-white">
            মেনু
          </SheetTitle>
          <SheetDescription className="text-center text-gray-500 dark:text-gray-400">
            নেভিগেশন মেনু থেকে আপনার প্রয়োজনীয় বিভাগ নির্বাচন করুন
          </SheetDescription>
        </SheetHeader>
        {/* navitems */}
        <ul className="space-y-4 mt-4">
          <li className="flex items-center space-x-2 cursor-pointer hover:underline">
            <FiHome className="text-lg" />
            <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              হোম
            </span>
          </li>

          <li className="flex items-center space-x-2 cursor-pointer ">
            <FiGrid className="text-lg" />
            <CategoryMenu />
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:underline">
            <FiShoppingCart className="text-lg" />
            <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              কার্ট (12)
            </span>
          </li>
          {session ? (
            <li className="flex items-center space-x-2 cursor-pointer hover:underline">
              <span className="text-black dark:text-white flex gap-2 hover:text-gray-600 dark:hover:text-gray-400">
                <MdDashboardCustomize className="text-lg" />
                ড্যাশবোর্ড
              </span>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className="absolute left-2 bottom-2">
          {session ? (
            <Button>
              {" "}
              <FiLogOut className="text-lg" />
              লগআউট
            </Button>
          ) : (
            <Button>
              {" "}
              <FiLogIn className="text-lg" />
              রেজিস্টার / লগইন
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
