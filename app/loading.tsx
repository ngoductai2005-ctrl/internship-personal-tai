export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50/50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header Skeleton */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-4 w-64 animate-pulse rounded-md bg-slate-200" />
          </div>
          <div className="h-10 w-36 animate-pulse rounded-xl bg-slate-200" />
        </div>

        {/* Search Bar Skeleton */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="h-10 w-full animate-pulse rounded-xl bg-slate-200" />
          <div className="h-10 w-36 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-10 w-28 animate-pulse rounded-xl bg-slate-200" />
        </div>

        {/* Loading Spinner & Status Card */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-12 shadow-sm">
          <div className="relative flex items-center justify-center">
            {/* Vòng xoay Spinner */}
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
          </div>
          
          <p className="mt-4 text-base font-semibold text-slate-700">
            Đang tải dữ liệu...
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Vui lòng chờ trong giây lát
          </p>
        </div>

        {/* Task Cards Skeleton */}
        <div className="mt-6 grid gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-16 animate-pulse rounded-md bg-slate-200" />
                  <div className="h-5 w-20 animate-pulse rounded-md bg-slate-200" />
                </div>
                <div className="h-6 w-3/4 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-4 w-1/2 animate-pulse rounded-md bg-slate-200" />
              </div>
              <div className="mt-4 flex gap-2 sm:mt-0">
                <div className="h-9 w-16 animate-pulse rounded-xl bg-slate-200" />
                <div className="h-9 w-16 animate-pulse rounded-xl bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}