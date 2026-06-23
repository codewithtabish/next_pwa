"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Story } from "@/types/common";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/story/${story.id}`}>
      <Card className="cursor-pointer hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-lg line-clamp-1">
            {story.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {story.content}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}