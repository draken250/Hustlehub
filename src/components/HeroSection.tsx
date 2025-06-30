import React from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

export const HeroSection = (): JSX.Element => {
  const searchCategories = [
    {
      label: "Category",
      value: "Food",
    },
    {
      label: "Store",
      value: "chez mama tresor",
    },
    {
      label: "Product",
      value: "hamburgers",
    },
  ];

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Hero content */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find What You Need
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Discover amazing products and services from local businesses in your area
          </p>
        </div>

        {/* Search component */}
        <div className="w-full max-w-[699px] mx-auto">
          <Card className="w-full rounded-[40px] border border-solid border-[#00000040] shadow-lg bg-white/95 backdrop-blur-sm">
            <CardContent className="p-3 flex items-center justify-between">
              {searchCategories.map((category, index) => (
                <React.Fragment key={category.label}>
                  <div className="flex flex-col gap-1 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <span className="font-extrabold text-sm text-gray-800">{category.label}</span>
                    <span className="text-xs text-gray-600">{category.value}</span>
                  </div>

                  {index < searchCategories.length - 1 && (
                    <Separator orientation="vertical" className="h-[42px] mx-4" />
                  )}
                </React.Fragment>
              ))}

              <Button className="bg-[#1c09ed] hover:bg-[#1c09ed]/90 rounded-[38px] h-[42px] px-4 flex items-center gap-2 transition-all hover:scale-105">
                <span className="font-medium text-sm text-white">Search</span>
                <div className="w-[21px] h-[21px] bg-white rounded-[40px] flex items-center justify-center">
                  <SearchIcon className="w-[17px] h-[17px] text-[#1c09ed]" />
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};