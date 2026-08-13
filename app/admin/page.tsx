import { getSession } from "../../lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  if (session.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-slate-50/50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
              Admin Portal
            </span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Trang quản trị hệ thống
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Chọn lối tắt bên dưới để quản lý người dùng hoặc quay về giao diện công việc.
          </p>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Users */}
          <Link
            href="/admin/users"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>

              <h2 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-indigo-600">
                Danh sách người dùng
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Quản lý các tài khoản thành viên, phân quyền và kiểm tra vai trò trong hệ thống.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-indigo-600">
              Truy cập ngay
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* Card 2: Tasks */}
          <Link
            href="/"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 0H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.25 0V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V8.25M6 12h.008v.008H6V12zm0 3h.008v.008H6V15zm0 3h.008v.008H6V18z"
                  />
                </svg>
              </div>

              <h2 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-slate-900">
                Quản lý công việc
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Quay trở về bảng công việc chính để xem, chỉnh sửa và tạo mới các task.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-slate-700">
              Về trang chủ
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}