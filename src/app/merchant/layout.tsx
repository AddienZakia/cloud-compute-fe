import MerchantFooter from './(component)/MerchantFooter';
import MerchantSidebar from './(container)/MerchantSidebar';
import MerchantTopbar from './(container)/MerchantTopbar';

export default function MerchantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-neutral-20">
      <MerchantSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <MerchantTopbar />
        <main className="flex-1 overflow-auto flex flex-col justify-between">
          <div className="flex-1">{children}</div>
          <MerchantFooter />
        </main>
      </div>
    </div>
  );
}
