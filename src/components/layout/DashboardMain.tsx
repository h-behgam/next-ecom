type DashboardMainProps = {
  children: React.ReactNode;
}
export default function DashboardMain({children}:DashboardMainProps) {
  return (
    <main className="bg-slate-50/25 w-full px-2 pt-10">{children}</main>
  )
}
