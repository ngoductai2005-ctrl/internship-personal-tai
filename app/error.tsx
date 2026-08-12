"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-5xl p-8">
        <div className="rounded-lg border bg-white p-8 text-center">
          <h2 className="mb-2 text-xl font-bold">
            Đã xảy ra lỗi
          </h2>

          <p className="mb-4 text-gray-600">
            Không thể tải dữ liệu. Vui lòng thử lại.
          </p>

          <button
            onClick={() => reset()}
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Thử lại
          </button>
        </div>
      </div>
    </main>
  );
}