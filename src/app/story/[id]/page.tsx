import { stories } from "@/data/stories";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/"
            className="
              flex items-center justify-center
              h-10 w-10 rounded-full
              hover:bg-muted
              transition-colors
            "
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <h1 className="font-semibold line-clamp-1">
            {story.title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">
            {story.title}
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="text-base sm:text-lg leading-8 whitespace-pre-line text-muted-foreground">
              {story.content}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}