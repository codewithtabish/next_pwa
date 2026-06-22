// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="h-10 w-72 bg-gray-200 rounded-2xl animate-pulse" />
          <div className="h-10 w-40 bg-gray-200 rounded-2xl animate-pulse" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-gray-100">
              <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="h-12 w-32 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          ))}
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
          <div className="h-16 bg-gray-100 border-b flex items-center px-8">
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
          
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="px-8 py-6 border-b flex items-center gap-6 last:border-none">
              <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
              </div>
              <div className="h-9 w-28 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}