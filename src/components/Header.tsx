import MenuIcon from "@mui/icons-material/Menu";
import { Collapse, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Logo from "../../public/logo.svg";
import useResponsiveBreakpoints from "../hooks/useResponsiveBreakpoints";

const Rocniky = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

function HeaderLink({ url, text }) {
  return (
    <div className="block lg:inline-block">
      <Link href={url}>
        <a className="whitespace-nowrap text-xl">{text}</a>
      </Link>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="mb-5">
      <nav className="flex-wrap justify-center space-y-3 bg-white px-5 pt-4 pb-0 lg:flex lg:space-y-0 lg:space-x-5 lg:px-0">
        <HeaderLink url="/o-tour" text="Čo je Tour de Orava" />
        <span className="hidden text-slate-300 lg:block">•</span>
        <HeaderLink url="/jazdci" text="Jazdci" />
        <span className="hidden text-slate-300 lg:block">•</span>
        <HeaderLink url="/galeria" text="Galéria" />
      </nav>
      <nav className="flex-wrap justify-center bg-white pt-4 pb-0 lg:flex lg:space-x-5">
        {Rocniky.map((rocnik, i) => (
          <Fragment key={rocnik}>
            <HeaderLink url="/galeria" text={rocnik} />
            {i < Rocniky.length - 1 ? (
              <span className="hidden text-slate-300 lg:block">•</span>
            ) : null}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const responsiveBreakPoints = useResponsiveBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <>
      <header className="mx-auto block text-center">
        <Link href="/">
          <a>
            <Logo className="mx-auto h-[246px]" />
          </a>
        </Link>
        {responsiveBreakPoints.isLg ? (
          <MenuItems />
        ) : (
          <>
            <IconButton
              onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
              size="large"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Collapse in={isMenuOpen}>
              <MenuItems />
            </Collapse>
          </>
        )}
      </header>
    </>
  );
}
