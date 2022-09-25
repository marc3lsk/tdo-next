import Head from "next/head";
import { useEffect } from "react";
import Header from "./Header";
import bg1 from "../../public/bg/1.jpg";
import bg2 from "../../public/bg/2.jpg";
import bg3 from "../../public/bg/3.jpg";
import bg4 from "../../public/bg/4.jpg";
import bg5 from "../../public/bg/5.jpg";
import bg6 from "../../public/bg/6.jpg";
import bg7 from "../../public/bg/7.jpg";
import bg8 from "../../public/bg/8.jpg";
import bg9 from "../../public/bg/9.jpg";
import { useRouter } from "next/router";
import styled from "styled-components";
import shuffle from "lodash-es/shuffle";

const bgArray = [
  bg1.src,
  bg2.src,
  bg3.src,
  bg4.src,
  bg5.src,
  bg6.src,
  bg7.src,
  bg8.src,
  bg9.src,
];

const UL = styled.ul`
  &,
  &:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0;
  }

  & li span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: 0;
    backface-visibility: hidden;
    animation: imageAnimation ${bgArray.length * 6}s linear infinite 0s;
  }
  & li:nth-child(1) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgArray[0]});
  }
  & li:nth-child(2) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgArray[1]});
    animation-delay: 6s;
  }
  ${bgArray.slice(2).map(
    (src, i) => `
& li:nth-child(${i + 3}) span {
  animation-delay: ${(i + 2) * 6}s;
}
`
  )}
  @keyframes imageAnimation {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    ${Math.round(100 * (6 / (6 * bgArray.length)))}% {
      opacity: 1;
    }
    ${Math.round(100 * (6 / (6 * bgArray.length))) + 1}% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath != "/") return;
    let indexPozadia = 2;
    let timeout = null as any;

    timeout = setTimeout(nastavitPozadie, 6000);

    function nastavitPozadie() {
      const pozadia = document.querySelectorAll(
        ".pozadia li span"
      ) as any as any[];
      pozadia[
        indexPozadia
      ].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
        bgArray[indexPozadia++]
      })`;
      if (indexPozadia < bgArray.length) {
        timeout = setTimeout(nastavitPozadie, 6000);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [router.asPath]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {router.asPath == "/" ? (
        <>
          <UL className="pozadia">
            {bgArray.map((src, i) => (
              <li key={src}>
                <span />
              </li>
            ))}
          </UL>
        </>
      ) : null}
      <Header />
      <main className=" pt-5">{children}</main>
    </>
  );
}
