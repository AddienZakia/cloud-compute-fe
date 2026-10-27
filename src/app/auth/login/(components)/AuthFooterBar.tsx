import Link from 'next/link';

export default function AuthFooterBar() {
  return (
    <div className="flex flex-col items-center justify-between gap-1.5 border-t border-slate-100 pt-4 sm:flex-row">
      <p className="text-[12px] text-slate-500">
        Belum punya akun?{' '}
        <Link
          href="/auth/register"
          className="font-bold text-[#D91E18] hover:underline"
        >
          Daftar Konsumen Baru
        </Link>
      </p>
      <button
        type="button"
        className="text-[12px] font-bold text-amber-800 hover:underline"
      >
        Daftar Kemitraan Resto/Driver →
      </button>
    </div>
  );
}
