import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const PromotionalBannerSection = (): JSX.Element => {
  const steps = [{ number: "1" }, { number: "2" }, { number: "3" }];

  return (
    <section className="w-full max-w-[1248px] mx-auto my-8">
      <Card className="w-full bg-[#aad2ff] border-none rounded-2xl overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="flex flex-row gap-6 p-6">
            <div className="flex flex-col gap-4 mt-8">
              {steps.map((step, index) => (
                <Badge
                  key={`step-${index}`}
                  className="w-[30px] h-[30px] rounded-full bg-white hover:bg-white p-0 flex items-center justify-center"
                >
                  <span className="font-bold text-black text-xs [font-family:'Inter',Helvetica]">
                    {step.number}
                  </span>
                </Badge>
              ))}
            </div>

            <div className="flex flex-col flex-1 gap-5">
              <h2 className="text-[32px] [font-family:'Inter',Helvetica] font-black text-black leading-normal mt-4">
                Where&nbsp;&nbsp;clients do this and that&nbsp;&nbsp;
                <br />
                and everything and more words
              </h2>

              <p className="max-w-[434px] [font-family:'Inter',Helvetica] font-medium text-black text-sm leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                id elementum mauris. Vivamus rutrum turpis id nibh ullamcorper
                varius. Suspendisse dolor justo, sagittis a justo id, hendrerit
                rutrum velit.
              </p>
            </div>

            <div className="w-[420px] h-[276px] bg-[#d9d9d9] rounded-xl" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
