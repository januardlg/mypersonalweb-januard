import React from "react";
import clsx from "clsx";

import { IoCloseSharp } from "react-icons/io5";

const openClassNames: any = {
  top: "translate-y-0",
};

const closeClassNames: any = {
  top: "-translate-y-full",
};

const classNames: any = {
  top: "inset-x-0 top-0",
};

export const DrawerMenu = ({
  open,
  handleOpenDrawerMenu,
  side = "top",
  navbarMenu,
}: {
  open: any;
  handleOpenDrawerMenu: any;
  side?: any;
  navbarMenu: any;
}) => {
  return (
    <div
      id={`drawer-${side}`}
      className="relative z-50"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <div
        className={clsx(
          "pointer-events-none fixed max-w-full",
          classNames[side]
        )}
      >
        <div
          className={clsx(
            "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
            { [closeClassNames[side]]: !open },
            { [openClassNames[side]]: open }
          )}
        >
          <div className={clsx("flex flex-col h-[100vh] bg-[#1F242C]")}>
            <div className="h-[calc(100vh-48px)]">
              <div className="flex justify-end text-white px-4 h-12 items-center">
                <IoCloseSharp size={24} onClick={handleOpenDrawerMenu} />
              </div>

              <div className="flex justify-center items-center h-full">
                <div className="space-y-4">
                  {navbarMenu.map((menu, id) => (
                    <div
                      key={id}
                      className="font-medium text-white text-base cursor-pointer text-center"
                      onClick={menu.action}
                    >
                      {menu.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
