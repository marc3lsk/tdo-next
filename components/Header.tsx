import Link from "next/link";

const Header = () => (
  <>
    <Link href="/">
      <a>
        <img src={require("../static/logo.png")} alt="logo" />
      </a>
    </Link>
    <Link href="2012">
      <a>2012</a>
    </Link>
  </>
);

export default Header;
