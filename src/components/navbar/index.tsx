import { useContext } from "react";
import { AppContext } from "@/pages/_app";
import { AppContextType } from "@/pages/app";

export const Navbar = () => {

  const {greetingRef, introductionRef, experienceRef, portofolioRef} = useContext(AppContext) as AppContextType

  const handleScrollNavigation = (ref: any) => {
    const element = ref.current;
    const navbarHeight = 72
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: 'smooth',
    });
  }

  const NAVBAR_MENUS = [
    {
      label: "Home",
      action: () => handleScrollNavigation(greetingRef),
    },
    {
      label: "About",
      action: () => handleScrollNavigation(introductionRef),
    },
    {
      label: "Experience",
      action: () => handleScrollNavigation(experienceRef),
    },
    {
      label: "Portofolio",
      action: () => handleScrollNavigation(portofolioRef),
    },
  ];

  return (
    <div className="h-[72px] bg-[#F4F6F7] flex items-center px-40 justify-end sticky top-0 z-20">
      <div className="flex items-center space-x-8">
        {NAVBAR_MENUS.map((menu, id) => (
          <div key={id} className="font-medium text-[#18191F] text-base cursor-pointer" onClick={menu.action}>
            {menu.label}
          </div>
        ))}
      </div>
    </div>
  );
};
