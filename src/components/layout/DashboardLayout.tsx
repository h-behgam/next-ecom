import DashboardMain from './DashboardMain';
import DashboardSidebar from './DashboardSidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='container-home mx-auto flex gap-x-3'>
      <DashboardSidebar />
      <DashboardMain>{children}</DashboardMain>
    </div>
  );
}
