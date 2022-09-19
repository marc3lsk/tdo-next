import Link from "next/link";
import Logo from "../../public/logo.svg";

function MyLink({ url, text }) {
  return (
    <Link href={url}>
      <a className="text-xl">{text}</a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="block mx-auto text-center">
      <Link href="/">
        <a>
          <Logo className="mx-auto h-[246px]" />
        </a>
      </Link>
      <nav className="space-x-5 pt-4 pb-0 bg-white">
        <MyLink url="/o-tour" text="Tour de Orava" />
        <span>∕</span>
        <MyLink url="/jazdci" text="Jazdci" />
        <span>∕</span>
        <MyLink url="/galeria" text="Galéria" />
      </nav>
    </header>
  );
}
