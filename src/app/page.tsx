import { StoryTabs } from "@/components/general/(home)/story-tab";
import { ModeToggle } from "@/components/general/(themes)/mode-toggle";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background pb-28">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          <h1 className="text-lg font-semibold">
            📖 Stories
          </h1>

          <ModeToggle />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <StoryTabs/>
      </div>

    </div>
  );
};

export default HomePage;