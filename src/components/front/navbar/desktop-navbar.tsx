import Link from "next/link";

export default function DesktopMenu() {
  return (
    <ul className="flex gap-x-3">
      <li>
        <Link href={"/"} className="p-4 block">
          خانه
        </Link>
      </li>
      <li>
        <Link href={"/products"} className="p-4 block">
          محصولات
        </Link>
      </li>
      <li>
        <Link href={"/"} className="p-4 block">
          تماس باما
        </Link>
      </li>
    </ul>
  );
}
