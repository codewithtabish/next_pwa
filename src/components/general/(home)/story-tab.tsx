"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { stories } from "@/data/stories";
import { StoryCard } from "./story-card";

export function StoryTabs() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList
        className="
          mb-6
          grid
          w-full
          grid-cols-3
          rounded-xl
          bg-muted/50
          p-1
        "
      >
        <TabsTrigger
          value="all"
          className="
            rounded-lg
            data-[state=active]:bg-background
            data-[state=active]:shadow-md
            data-[state=active]:text-primary
            data-[state=active]:font-semibold
            transition-all
            duration-300
          "
        >
          📚 All
        </TabsTrigger>

        <TabsTrigger
          value="popular"
          className="
            rounded-lg
            data-[state=active]:bg-background
            data-[state=active]:shadow-md
            data-[state=active]:text-primary
            data-[state=active]:font-semibold
            transition-all
            duration-300
          "
        >
          🔥 Popular
        </TabsTrigger>

        <TabsTrigger
          value="recent"
          className="
            rounded-lg
            data-[state=active]:bg-background
            data-[state=active]:shadow-md
            data-[state=active]:text-primary
            data-[state=active]:font-semibold
            transition-all
            duration-300
          "
        >
          ✨ Recent
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="popular">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.slice(0, 5).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="recent">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.slice(-5).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}