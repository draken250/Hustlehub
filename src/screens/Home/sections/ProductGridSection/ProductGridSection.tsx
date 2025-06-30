import { GlobeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const ProductGridSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", isActive: true },
    { label: "Explore", isActive: false },
    { label: "Experience", isActive: false },
  ];

  return (
    <header className="w-full h-[82px] bg-white relative flex items-center justify-between px-11 border-b">
      {/* Brand logo */}
      <div className="font-extrabold text-[#1c09ed] text-lg font-['Inter',Helvetica]">
        Hustlehub
      </div>

      {/* Navigation menu */}
      <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenuList className="flex gap-5">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`font-['Inter',Helvetica] font-medium text-sm ${
                  item.isActive ? "text-[#1c09ed]" : "text-black"
                }`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side controls */}
      <div className="flex items-center gap-6">
        {/* Language selector */}
        <div className="flex items-center gap-1">
          <span className="font-['Inter',Helvetica] font-medium text-black text-sm">
            En
          </span>
          <GlobeIcon className="w-[27px] h-[27px]" />
        </div>

        {/* Login button */}
        <Button
          variant="outline"
          className="w-[101px] h-[37px] rounded-[40px] border border-solid border-black bg-white font-['Inter',Helvetica] font-medium text-sm relative"
        >
          <span className="absolute left-[18px]">Login</span>
          <div className="absolute w-[26px] h-[26px] top-1 left-[62px] bg-white rounded-[50px] border border-solid border-black" />
        </Button>
      </div>

      {/* Hero banner */}
      <div className="absolute w-full h-[243px] top-[82px] left-0 bg-[#d9d9d9]" />
    </header>
  );
};
