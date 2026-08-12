import { prisma } from "../../../lib/prisma";
import { createTask } from "../actions";
import Link from "next/link";

export default async function CreateTaskPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      id: "asc",
    },
  });

  const priorities = await prisma.priority.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-50/50 py-10">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Thêm công việc
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Điền thông tin bên dưới để khởi tạo một công việc mới.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            ← Quay lại
          </Link>
        </div>

        {/* Form Section */}
        <form
          action={createTask}
          className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm"
        >
          {/* Tiêu đề */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Tiêu đề <span className="text-rose-500">*</span>
            </label>

            <input
              type="text"
              name="title"
              required
              className="w-full rounded-xl border border-slate-300 bg-slate-50/30 p-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 placeholder:text-slate-400"
              placeholder="Nhập tiêu đề công việc"
            />
          </div>

          {/* Mô tả */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Mô tả
            </label>

            <textarea
              name="description"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/30 p-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 placeholder:text-slate-400"
              placeholder="Nhập mô tả"
              rows={4}
            />
          </div>

          {/* Grid cho Danh mục & Mức ưu tiên */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Danh mục
              </label>

              <select
                name="categoryId"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/30 p-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-800">
                Mức ưu tiên
              </label>

              <select
                name="priorityId"
                className="w-full rounded-xl border border-slate-300 bg-slate-50/30 p-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                {priorities.map((priority) => (
                  <option key={priority.id} value={priority.id}>
                    {priority.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Hạn hoàn thành */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Hạn hoàn thành <span className="text-rose-500">*</span>
            </label>

            <input
              type="date"
              name="dueDate"
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-xl border border-slate-300 bg-slate-50/30 p-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
            <Link
              href="/"
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            >
              Hủy
            </Link>

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 active:bg-slate-950"
            >
              Thêm công việc
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}