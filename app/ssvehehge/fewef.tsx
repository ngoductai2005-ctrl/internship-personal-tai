import Link from "next/link";
import { register } from "../auth/actions";
export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50/50 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Tạo tài khoản mới
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Bắt đầu quản lý công việc của bạn một cách hiệu quả
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-100">
          <form action={register} className="space-y-5">
            {/* Họ tên */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Họ tên
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Nguyễn Văn A"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Mật khẩu */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mật khẩu
              </label>

              <input
                type="password"
                name="password"
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:bg-slate-950"
            >
              Đăng ký
            </button>

            {/* Login Link */}
            <div className="pt-2 text-center text-sm text-slate-600">
              Đã có tài khoản?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-slate-900 underline underline-offset-4 transition-colors hover:text-blue-600"
              >
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}