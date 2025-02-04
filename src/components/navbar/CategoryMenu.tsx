import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenubarItems = [
  {
    title: "Admission Preparatory",
    items: [{ name: "Cadet College Admission" }, { name: "School Admission" }],
  },
  {
    title: "Admission Coaching",
    items: [{ name: "Cadet College Admission" }, { name: "School Admission" }],
  },
  {
    title: "Digital Innovation Programs",
    items: [{ name: "CodeMaster" }],
  },
  {
    title: "Language Course",
    items: [{ name: "Korean" }, { name: "French" }],
  },
  {
    title: "STEAM Competency Programs",
    items: [{ name: "STEAMcraft" }],
  },
  {
    title: "Test",
    items: [{ name: "sub_test" }],
  },
  {
    title: "ক্যাডেট কলেজ ভর্তিপরীক্ষা  চূড়ান্ত সাজেশন",
    items: [
      { name: "ক্যাডেট কলেজ লিখিত পরীক্ষার সাজেশন" },
      { name: "ক্যাডেট কলেজ মৌখিক ও মেডিকেল পরীক্ষার সাজেশন" },
    ],
  },
];

const CategoryMenu = () => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointerf flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 hover:underline">
            সকল কোর্স <RiArrowDropDownLine size={25} />
          </MenubarTrigger>
          <MenubarContent>
            {/*  */}
            {/* <MenubarItem>Admission Preparatory</MenubarItem>
            <MenubarSeparator /> */}
            {MenubarItems.map((_, index) => (
              <div key={_.title}>
                <MenubarSub>
                  <MenubarSubTrigger>{_.title}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {_.items.map((item, index) => (
                      <div key={item.name}>
                        <MenubarItem>{item.name}</MenubarItem>
                        {_.items.length > index + 1 && <MenubarSeparator />}
                      </div>
                    ))}
                  </MenubarSubContent>
                </MenubarSub>
                {MenubarItems.length > index + 1 && <MenubarSeparator />}
              </div>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default CategoryMenu;
