type DashboardMainProps = {
  children: React.ReactNode;
}
export default function DashboardMain({children}:DashboardMainProps) {
  return (
    <main className="bg-slate-100 w-full p-2">{children}</main>
  )
}
