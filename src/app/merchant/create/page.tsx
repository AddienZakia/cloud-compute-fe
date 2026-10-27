import CreateMenuBreadcrumb from './(component)/CreateMenuBreadcrumb';
import CreateMenuHeader from './(component)/CreateMenuHeader';
import CreateMenuContainer from './(container)/CreateMenuContainer';

export default function CreateMenuPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-12">
      <CreateMenuBreadcrumb />
      <CreateMenuHeader />
      <CreateMenuContainer />
    </div>
  );
}
