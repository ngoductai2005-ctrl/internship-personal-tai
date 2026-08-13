import Link from "next/link";
import { login } from "../actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Brand / Logo / Title Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Chào mừng trở lại
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Đăng nhập để quản lý công việc của bạn
          </p>
        </div>

        {/* Login Card Form */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-100">
          <form action={login} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all hover:border-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:bg-slate-950"
            >
              Đăng nhập
            </button>

            <div className="pt-2 text-center text-sm text-slate-600">
              Chưa có tài khoản?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-slate-900 underline underline-offset-4 transition-colors hover:text-blue-600"
              >
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}