import Link from "next/link";
import Logo from "../public/logo.svg";

const Header = () => (
  <>
    <Link href="/">
      <a>
        <Logo alt="logo" />
      </a>
    </Link>
    <Link href="2012">
      <a>2012</a>
    </Link>
  </>
);

export default Header;
