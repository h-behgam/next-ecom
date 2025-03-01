import DashboardMain from './DashboardMain';
import DashboardSidebar from './DashboardSidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      DashboardLayout
      <DashboardSidebar />
      <DashboardMain />
    </div>
  );
}
