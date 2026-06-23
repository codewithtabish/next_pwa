import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />

          <Skeleton className="h-5 w-48" />
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Title */}
          <Skeleton className="h-12 w-3/4" />

          {/* Story Paragraphs */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-[95%]" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-[85%]" />
          </div>

          <div className="space-y-3 pt-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-[90%]" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-[80%]" />
          </div>

          <div className="space-y-3 pt-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-[92%]" />
            <Skeleton className="h-5 w-[75%]" />
          </div>
        </div>
      </main>
    </div>
  );
}