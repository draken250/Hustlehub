import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PopularActivitiesSection = (): JSX.Element => {
  // Data for the search categories
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
    <div className="w-full max-w-[699px] mx-auto my-8">
      <Card className="w-full rounded-[40px] border border-solid border-[#00000040]">
        <CardContent className="p-3 flex items-center justify-between">
          {searchCategories.map((category, index) => (
            <React.Fragment key={category.label}>
              <div className="flex flex-col gap-1">
                <span className="font-extrabold text-sm">{category.label}</span>
                <span className="text-xs">{category.value}</span>
              </div>

              {index < searchCategories.length - 1 && (
                <Separator orientation="vertical" className="h-[42px] mx-4" />
              )}
            </React.Fragment>
          ))}

          <Button className="bg-[#1c09ed] rounded-[38px] h-[42px] px-4 flex items-center gap-2">
            <span className="font-medium text-sm text-white">SearchIcon</span>
            <div className="w-[21px] h-[21px] bg-white rounded-[40px] flex items-center justify-center">
              <SearchIcon className="w-[17px] h-[17px]" />
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
