import CreateMenuBreadcrumb from './(component)/CreateMenuBreadcrumb';
import CreateMenuHeader from './(component)/CreateMenuHeader';
import CreateMenuContainer from './(container)/CreateMenuContainer';

export default function CreateMenuPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-12">
      <CreateMenuBreadcrumb />
      <CreateMenuHeader />
      <CreateMenuContainer />
    </div>
  );
}
