import Link from "next/link";
import { Fragment } from "react";
import Logo from "../../public/logo.svg";

const Rocniky = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

function HeaderLink({ url, text }) {
  return (
    <Link href={url}>
      <a className="text-xl">{text}</a>
    </Link>
  );
}

export default function Header() {
  return (
    <>
      <header className="block mx-auto text-center">
        <Link href="/">
          <a>
            <Logo className="mx-auto h-[246px]" />
          </a>
        </Link>
        <nav className="space-x-5 pt-4 pb-0 bg-white">
          <HeaderLink url="/o-tour" text="Čo je Tour de Orava" />
          <span className="text-slate-300">•</span>
          <HeaderLink url="/jazdci" text="Jazdci" />
          <span className="text-slate-300">•</span>
          <HeaderLink url="/galeria" text="Galéria" />
        </nav>
        <nav className="space-x-5 pt-4 pb-0 bg-white flex flex-wrap justify-center">
          {Rocniky.map((rocnik, i) => (
            <Fragment key={rocnik}>
              <HeaderLink url="/galeria" text={rocnik} />
              {i < Rocniky.length - 1 ? (
                <span className="text-slate-300">•</span>
              ) : null}
            </Fragment>
          ))}
        </nav>
      </header>
    </>
  );
}
