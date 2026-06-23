import { stories } from "@/data/stories";
import { notFound } from "next/navigation";

interface StoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id } = await params;

  const story = stories.find((s) => s.id === Number(id));

  if (!story) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-6">
          {story.title}
        </h1>

        {/* Content */}
        <div className="text-base sm:text-lg leading-7 text-muted-foreground whitespace-pre-line">
          {story.content}
        </div>
      </div>
    </div>
  );
}