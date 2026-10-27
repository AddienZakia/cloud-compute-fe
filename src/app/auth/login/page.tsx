import LoginCard from './(container)/LoginCard';
import PageFooterSection from './(container)/PageFooterSection';
import StatusBarSection from './(container)/StatusBarSection';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FFF7F5] px-4 py-10">
      <div className="flex w-full max-w-[920px] flex-col gap-4">
        <StatusBarSection />
        <LoginCard />
        <PageFooterSection />
      </div>
    </main>
  );
}
