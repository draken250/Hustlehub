import React from "react";
import { NotificationStrip } from "../../components/NotificationStrip";
import { Navigation } from "../../components/Navigation";
import { HeroSection } from "../../components/HeroSection";
import { GridSection } from "../../components/GridSection";
import { PopularActivitiesSection } from "./sections/PopularActivitiesSection";
import { UserActivitySection } from "./sections/UserActivitySection";
import { PromotionalBannerSection } from "./sections/PromotionalBannerSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen">
      <NotificationStrip />
      <Navigation />
      <HeroSection />
      <GridSection />
      <PopularActivitiesSection />
      <UserActivitySection />
      <PromotionalBannerSection />
      
      {/* Footer */}
      <footer className="w-full h-[200px] bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold mb-2">Hustlehub</h3>
          <p className="text-gray-400">Connecting you with local businesses</p>
        </div>
      </footer>
    </div>
  );
};