import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="p-2 bg-slate-50/50 w-64 divide-y">
      <h2 className="text-xl text-center mb-4">مدیریت</h2>
    <nav>
      <ul>
        <li className="py-2"><Link className="font-semibold" href={'/dashboard/pruduct'}>محصولات</Link></li>
      </ul>
    </nav>
    </aside>
  )
}
