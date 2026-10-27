'use client';

import { useLogin, useLoginDriver, useLoginMerchant } from '@/hooks/auth';
import { Lock, LogIn, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import IconInput from '../(components)/IconInput';
import RoleInfoStrip from '../(components)/RoleInfoStrip';
import RoleTabs from '../(components)/RoleTabs';
import { RoleId, getRoleById } from './data';

export default function LoginFormSection() {
  const router = useRouter();
  const [role, setRole] = useState<RoleId>('konsumen');
  const [email, setEmail] = useState('user@ets.com');
  const [password, setPassword] = useState('testing123');
  const [error, setError] = useState('');

  const { mutate: loginUser, isPending: isLoggingUser } = useLogin();
  const { mutate: loginDriver, isPending: isLoggingDriver } = useLoginDriver();
  const { mutate: loginMerchant, isPending: isLoggingMerchant } =
    useLoginMerchant();

  const loading = isLoggingUser || isLoggingDriver || isLoggingMerchant;
  const activeRole = getRoleById(role);

  const switchRole = (id: RoleId) => {
    setRole(id);
    const r = getRoleById(id);
    setEmail(r.demoEmail);
    setPassword(r.demoPassword);
    setError('');
  };

  const submitLogin = async () => {
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Email dan kata sandi tidak boleh kosong.');
      return;
    }

    const payload = { email: email.trim(), password: password.trim() };

    const handleSuccess = (res?: any) => {
      // Jika login user ternyata memiliki role ADMIN, arahkan ke admin dashboard jika ada atau ke catalog
      const userRole = res?.data?.role || res?.role;
      if (role === 'konsumen' && userRole === 'ADMIN') {
        router.push('/catalog/dashboard');
      } else {
        router.push(activeRole.redirect);
      }
    };

    const handleError = (err: any) => {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        'Email atau kata sandi salah.';
      setError(msg);
    };

    if (role === 'driver') {
      loginDriver(payload, {
        onSuccess: handleSuccess,
        onError: handleError,
      });
    } else if (role === 'merchant') {
      loginMerchant(payload, {
        onSuccess: handleSuccess,
        onError: handleError,
      });
    } else {
      loginUser(payload, {
        onSuccess: handleSuccess,
        onError: handleError,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold leading-snug text-slate-900">
            Masuk ke Akun
          </h1>
          <p className="mt-0.5 text-[12px] text-slate-500">
            Silakan pilih peran akun dan masukkan kredensial Anda
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[#FFF1EE] px-3 py-1 text-[11px] font-extrabold uppercase text-[#D91E18]">
          {activeRole.pill}
        </span>
      </div>

      <RoleTabs activeRole={role} onSelect={switchRole} />
      <RoleInfoStrip text={activeRole.infoStrip} />

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-[12px] font-bold text-slate-700"
        >
          Alamat Email
        </label>
        <IconInput
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="nama@email.com"
          icon={<Mail size={15} />}
          autoComplete="email"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-1.5 block text-[12px] font-bold text-slate-700"
        >
          Kata Sandi
        </label>
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

      {error && (
        <p className="rounded-xl bg-red-50 px-3 py-2 text-[12px] font-semibold text-[#D91E18]">
          {error}
        </p>
      )}

      <button
        type="button"
        disabled={loading}
        onClick={submitLogin}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D91E18] py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-red-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <LogIn size={16} />
        {loading ? 'Memproses...' : `Masuk sebagai ${activeRole.label}`}
      </button>
    </div>
  );
}
