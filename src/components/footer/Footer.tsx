import { Phone } from "lucide-react";
import { FaBlog, FaFacebook, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-gray-950 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ShikkhaDikkha</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-400">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:01918523505" className="text-blue-400 hover:text-blue-300 transition">
                  01918523505
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:01978802704" className="text-blue-400 hover:text-blue-300 transition">
                  01978802704
                </a>
              </li>
              <li>
                <a href="mailto:shikkha.deekkha@gmail.com" className="hover:text-white transition">
                  shikkha.deekkha@gmail.com
                </a>
              </li>
              <li>
                <span>৮০১, ভাসানী সড়ক, আকুর টাকুর পাড়া, টাঙ্গাইল সদর, টাঙ্গাইল</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">লিঙ্ক</h3>
            <ul className="space-y-2">
              {["আমাদের সম্পর্কে", "যোগাযোগ", "শিক্ষক রেজিস্ট্রেশন", "ব্লগ"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 dark:text-gray-400 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">অ্যাপ ডাউনলোড করো!</h3>
            <p className="text-gray-400 dark:text-gray-400">
              অ্যাপ নিয়ে শীঘ্রই আসছি আপনাদের কাছে
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">আমাদের সাথে কানেক্টেড থাকুন</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/shikkhadeekkhacademyaedu"
                className="text-blue-500 hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%A6%E0%A7%80%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE"
                className="text-red-500 hover:text-red-400 transition"
                aria-label="YouTube"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
              <a
                href="https://sda-ae.blogspot.com/"
                className="text-back hover:text-gray-400 transition"
                aria-label="Blog"
              >
                <FaBlog className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Shikkhadeekkha
          </p>
          <div className="mt-2 space-x-4">
            {["Terms & Conditions", "Privacy Policy", "Cancellation Policy", "Refund Policy"].map(
              (policy, index) => (
                <a key={index} href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition">
                  {policy}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
