type DashboardMainProps = {
  children: React.ReactNode;
};
export default function DashboardMain({ children }: DashboardMainProps) {
  return (
    <main className='w-full bg-slate-50/25 p-2 md:p-0'>
      <div className='h-16 border-b'></div>
      {children}
    </main>
  );
}
