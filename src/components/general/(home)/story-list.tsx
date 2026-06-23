"use client";

import { stories } from "@/data/stories";
import { StoryCard } from "./story-card";

export function StoriesList() {
 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">
        📖 Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
          />
        ))}
      </div>
    </div>
  );
}