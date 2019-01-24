import Link from "next/link";
import mainLogo from "../static/logo.svg";

const Header = () => (
  <>
    <Link href="/">
      <a>
        <img src={mainLogo} alt="logo" />
      </a>
    </Link>
    <Link href="2012">
      <a>2012</a>
    </Link>
  </>
);

export default Header;
