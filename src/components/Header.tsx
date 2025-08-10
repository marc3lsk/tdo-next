import MenuIcon from "@mui/icons-material/Menu";
import { Collapse, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Logo from "../../public/logo2.svg";
import useResponsiveBreakpoints from "../hooks/useResponsiveBreakpoints";

const Rocniky = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012].reverse();

function HeaderLink({ url, text }) {
  return (
    <div className="block lg:inline-block">
      <Link href={url}>
        <a className="whitespace-nowrap text-xl uppercase">{text}</a>
      </Link>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="">
      <nav className="flex-wrap justify-center space-y-3  px-5 pb-0 pt-4 lg:flex lg:space-x-8 lg:space-y-0 lg:px-0">
        <HeaderLink url="/o-tour" text="TDO" />
        <HeaderLink url="/jazdci" text="Jazdci" />
        <HeaderLink url="/galeria" text="Galéria" />
      </nav>
      <nav className="flex-wrap justify-center pb-0 pt-4 lg:flex lg:space-x-8">
        {Rocniky.map((rocnik, i) => (
          <Fragment key={rocnik}>
            <HeaderLink url={`/rocnik/${rocnik}`} text={rocnik} />
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
      <header className="relative mx-auto block text-center text-white">
        <div className="flex content-center">
          <Link href="/">
            <a className="mx-auto flex self-center">
              <Logo />
            </a>
          </Link>
        </div>
        {responsiveBreakPoints.isLg ? (
          <MenuItems />
        ) : (
          <>
            <IconButton onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)} size="large">
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
