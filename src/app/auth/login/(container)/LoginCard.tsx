import BrandPanelSection from './BrandPanelSection';
import LoginFormSection from './LoginFormSection';

export default function LoginCard() {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/80 ring-1 ring-slate-100">
      <div className="grid grid-cols-1 sm:grid-cols-[42%_58%]">
        <BrandPanelSection />
        <LoginFormSection />
      </div>
    </div>
  );
}
