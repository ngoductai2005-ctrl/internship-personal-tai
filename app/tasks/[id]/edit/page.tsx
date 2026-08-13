import { prisma } from "../../../../lib/prisma";
import { updateTask } from "../../actions";
import { getSession } from "../../../../lib/session";
import { redirect } from "next/navigation";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (
    session.role === "USER" &&
    task?.userId !== session.userId
  ) {
    redirect("/");
  }

  const categories = await prisma.category.findMany();
  const priorities = await prisma.priority.findMany();

  if (!task) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl">
            ⚠️
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            Không tìm thấy công việc
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Công việc bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-gray-500">
            Quản lý công việc
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sửa công việc
          </h1>
          <a
            href="/"
            className="mb-6 inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-black"
          >
            ← Về trang chủ
          </a>
          <p className="mt-2 text-gray-500">
            Cập nhật thông tin và trạng thái của công việc.
          </p>
        </div>

        <form
          action={updateTask}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          {/* Form header */}
          <div className="border-b border-gray-100 bg-gray-50 px-6 py-5 sm:px-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Thông tin công việc
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Vui lòng kiểm tra thông tin trước khi lưu thay đổi.
            </p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <input type="hidden" name="id" value={task.id} />

            {/* Tiêu đề */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Tiêu đề
              </label>

              <input
                id="title"
                type="text"
                name="title"
                defaultValue={task.title}
                required
                placeholder="Nhập tiêu đề công việc..."
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-4 focus:ring-gray-100"
              />
            </div>

            {/* Mô tả */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Mô tả
              </label>

              <textarea
                id="description"
                name="description"
                defaultValue={task.description || ""}
                rows={5}
                placeholder="Nhập mô tả chi tiết cho công việc..."
                className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-4 focus:ring-gray-100"
              />
            </div>

            {/* Category + Priority */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Danh mục */}
              <div>
                <label
                  htmlFor="categoryId"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Danh mục
                </label>

                <select
                  id="categoryId"
                  name="categoryId"
                  defaultValue={task.categoryId}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-4 focus:ring-gray-100"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mức ưu tiên */}
              <div>
                <label
                  htmlFor="priorityId"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Mức ưu tiên
                </label>

                <select
                  id="priorityId"
                  name="priorityId"
                  defaultValue={task.priorityId}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-4 focus:ring-gray-100"
                >
                  {priorities.map((priority) => (
                    <option key={priority.id} value={priority.id}>
                      {priority.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Status + Date */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Trạng thái */}
              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Trạng thái
                </label>

                <select
                  id="status"
                  name="status"
                  defaultValue={task.status}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-4 focus:ring-gray-100"
                >
                  <option value="TODO">Chưa làm</option>
                  <option value="IN_PROGRESS">Đang làm</option>
                  <option value="DONE">Hoàn thành</option>
                </select>
              </div>

              {/* Hạn hoàn thành */}
              <div>
                <label
                  htmlFor="dueDate"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Hạn hoàn thành
                </label>

                <input
                  id="dueDate"
                  type="date"
                  name="dueDate"
                  defaultValue={task.dueDate.toISOString().split("T")[0]}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-4 focus:ring-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-xs text-gray-500">
              Kiểm tra lại thông tin trước khi lưu.
            </p>

            <button
              type="submit"
              className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-200 active:scale-[0.98]"
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}