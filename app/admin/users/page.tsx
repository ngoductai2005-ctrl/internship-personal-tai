import { prisma } from "../../../lib/prisma";
import { getSession } from "../../../lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminUsersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  if (session.role !== "ADMIN") {
    redirect("/");
  }

  const users = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-50/50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                Admin Area
              </span>
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Quản lý người dùng
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Danh sách tất cả các tài khoản người dùng và vai trò trong hệ thống.
            </p>
          </div>

          <Link
            href="/admin"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          >
            ← Trang quản trị
          </Link>
        </div>

        {/* Stats Summary Bar */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-xs font-medium text-slate-500">Tổng tài khoản</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{users.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-xs font-medium text-slate-500">Quản trị viên (ADMIN)</p>
            <p className="mt-2 text-2xl font-bold text-indigo-600">
              {users.filter((u) => u.role === "ADMIN").length}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-xs font-medium text-slate-500">Người dùng (USER)</p>
            <p className="mt-2 text-2xl font-bold text-slate-700">
              {users.filter((u) => u.role === "USER").length}
            </p>
          </div>
        </div>

        {/* Users Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-4">ID</th>
                  <th scope="col" className="px-6 py-4">Người dùng</th>
                  <th scope="col" className="px-6 py-4">Email</th>
                  <th scope="col" className="px-6 py-4">Vai trò</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {users.map((user) => {
                  const initial = user.name
                    ? user.name.charAt(0).toUpperCase()
                    : user.email.charAt(0).toUpperCase();

                  return (
                    <tr
                      key={user.id}
                      className="transition-colors hover:bg-slate-50/60"
                    >
                      {/* ID */}
                      <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-slate-400">
                        #{user.id}
                      </td>

                      {/* User Info with Avatar */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700 ring-2 ring-white">
                            {initial}
                          </div>
                          <span className="font-semibold text-slate-900">
                            {user.name || "Chưa cập nhật"}
                          </span>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="whitespace-nowrap px-6 py-4 text-slate-600">
                        {user.email}
                      </td>

                      {/* Role Badge */}
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.role === "ADMIN" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                            ADMIN
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                            USER
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-3 text-xs text-slate-500">
            Hiển thị toàn bộ {users.length} tài khoản trong hệ thống
          </div>
        </div>
      </div>
    </main>
  );
}