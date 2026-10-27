'use client';

import { Lock, LogIn, Mail, Timer } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AuthFooterBar from '../(components)/AuthFooterBar';
import IconInput from '../(components)/IconInput';
import QuickSimButtons from '../(components)/QuickSimButtons';
import RoleInfoStrip from '../(components)/RoleInfoStrip';
import RoleTabs from '../(components)/RoleTabs';
import { RoleId, getRoleById } from './data';

export default function LoginFormSection() {
  const router = useRouter();
  const [role, setRole] = useState<RoleId>('konsumen');
  const [email, setEmail] = useState('user@bungkusin.id');
  const [password, setPassword] = useState('bungkusin123');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const activeRole = getRoleById(role);

  const switchRole = (id: RoleId) => {
    setRole(id);
    setEmail(getRoleById(id).demoEmail);
    setError('');
  };

  const fillDemo = () => {
    setEmail(activeRole.demoEmail);
    setPassword(activeRole.demoPassword);
  };

  const handleSimulate = (id: RoleId) => {
    const r = getRoleById(id);
    setRole(id);
    setEmail(r.demoEmail);
    setPassword(r.demoPassword);
    setError('');
    setTimeout(() => submitLogin(id, r.demoEmail, r.demoPassword), 50);
  };

  const submitLogin = async (
    roleId: RoleId = role,
    emailVal: string = email,
    passwordVal: string = password,
  ) => {
    setError('');
    if (!emailVal.trim() || !passwordVal.trim()) {
      setError('Email dan kata sandi tidak boleh kosong.');
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    const r = getRoleById(roleId);
    if (emailVal === r.demoEmail && passwordVal === r.demoPassword) {
      router.push(r.redirect);
    } else {
      setError('Email atau kata sandi salah untuk peran ini.');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold leading-snug text-slate-900">
            Portal Akses Ekosistem
          </h1>
          <p className="mt-0.5 text-[12px] text-slate-500">
            Pilih peran akun Anda untuk masuk ke lingkungan kerja
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[#FFF1EE] px-3 py-1 text-[11px] font-extrabold uppercase text-[#D91E18]">
          {activeRole.pill}
        </span>
      </div>

      <RoleTabs activeRole={role} onSelect={switchRole} />
      <RoleInfoStrip text={activeRole.infoStrip} />

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="email"
            className="text-[12px] font-bold text-slate-700"
          >
            Alamat Email / ID Akun
          </label>
          <button
            type="button"
            onClick={fillDemo}
            className="text-[11px] font-bold text-[#D91E18] hover:underline"
          >
            Gunakan Demo ID: {activeRole.demoEmail}
          </button>
        </div>
        <IconInput
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="email@domain.id"
          icon={<Mail size={15} />}
          autoComplete="email"
        />
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-[12px] font-bold text-slate-700"
          >
            Kata Sandi
          </label>
          <button
            type="button"
            className="text-[11px] text-slate-500 hover:underline"
          >
            Lupa Kata Sandi?
          </button>
        </div>
        <IconInput
          id="password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="••••••••••••"
          icon={<Lock size={15} />}
          showToggle
          autoComplete="current-password"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-3.5 w-3.5 accent-[#D91E18]"
          />
          <span className="text-[12px] text-slate-600">
            Ingat saya di perangkat ini
          </span>
        </label>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Timer size={12} />
          Sesi Aktif: 24 Jam
        </div>
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-3 py-2 text-[12px] font-semibold text-[#D91E18]">
          {error}
        </p>
      )}

      <button
        type="button"
        disabled={loading}
        onClick={() => submitLogin()}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D91E18] py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-red-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <LogIn size={16} />
        {loading ? 'Memproses...' : `Masuk sebagai ${activeRole.label}`}
      </button>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-100" />
        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
          Simulasi Cepat 1-Klik Prototipe
        </span>
        <div className="h-px flex-1 bg-slate-100" />
      </div>

      <QuickSimButtons onSimulate={handleSimulate} />
      <AuthFooterBar />
    </div>
  );
}
