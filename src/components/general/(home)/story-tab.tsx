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
      <TabsList className="mb-6">
        <TabsTrigger value="all">All Stories</TabsTrigger>
        <TabsTrigger value="popular">Popular</TabsTrigger>
        <TabsTrigger value="recent">Recent</TabsTrigger>
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