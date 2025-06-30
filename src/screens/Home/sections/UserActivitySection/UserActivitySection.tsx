import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const UserActivitySection = (): JSX.Element => {
  // Activity card data for mapping
  const activityCards = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl [font-family:'Inter',Helvetica]">
            Popular Activities
          </h2>

          <Button className="bg-[#007aff] hover:bg-[#007aff]/90 text-white rounded-xl h-10 px-5">
            show more
          </Button>
        </div>

        <div className="flex gap-4">
          {activityCards.map((card) => (
            <Card
              key={card.id}
              className="w-[166px] h-[307px] bg-[#d9d9d9] rounded-xl border-none"
            >
              <CardContent className="p-0 relative">
                <div className="p-2">
                  <div className="w-[63px] h-3.5 bg-[#a4a4a4] rounded-xl mb-2" />
                  <div className="w-[83px] h-3.5 bg-[#a4a4a4] rounded-xl" />
                </div>

                <div className="absolute top-[9px] right-[7px] w-5 h-5 bg-[#a4a4a4] rounded-xl flex items-center justify-center">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </div>

                <div className="absolute bottom-[42px] left-[11px]">
                  <div className="font-medium text-xs text-white [font-family:'Inter',Helvetica]">
                    Hiking
                  </div>
                  <div className="font-medium text-[10px] text-white [font-family:'Inter',Helvetica]">
                    Starting at 12am
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-2">
                <Button
                  variant="default"
                  className="w-full h-[21px] bg-white hover:bg-white/90 rounded-xl"
                >
                  <span className="font-medium text-[10px] text-black [font-family:'Inter',Helvetica]">
                    Join Activity
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
