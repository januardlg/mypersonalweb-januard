export const Navbar = () => {
  const NAVBAR_MENUS = [
    {
      label: "Home",
      action: undefined,
    },
    {
      label: "About",
      action: undefined,
    },
    {
      label: "Experience",
      action: undefined,
    },
    {
      label: "Projects",
      action: undefined,
    },
  ];

  return (
    <div className="h-[72px] bg-[#F4F6F7] flex items-center px-40 justify-end sticky top-0">
      <div className="flex items-center">
        {NAVBAR_MENUS.map((menu, id) => (
          <div key={id} className="px-8 font-medium text-[#18191F] text-base cursor-pointer">
            {menu.label}
          </div>
        ))}
      </div>
    </div>
  );
};
