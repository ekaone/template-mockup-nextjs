import Logo from "../../assets/svgs/logo4.svg";
import Link from "next/link";

export const Nav: React.FC = () => (
  <nav className="flex justify-between items-center my-4 container">
    <Link href="/">
      <a>
        <Logo className="w-10 h-10" />
      </a>
    </Link>
    <ul className="flex">
      {/* <li>
        <Link href="/blog">
          <a className="text-blue-600 mr-2 px-2 py-1 rounded-md">Blog</a>
        </Link>
      </li> */}
      <li>
        <Link href="/work">
          <a className="text-blue-700 mr-2 px-2 py-1 rounded-md">Work</a>
        </Link>
      </li>
    </ul>
  </nav>
);
