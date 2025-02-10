import DesktopMenu from "./desktop-navbar";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="flex justify-between">
        <DesktopMenu />
        <ul>
          <li>
            <Link className="p-4 block" href={"/"}>
              ورود
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
