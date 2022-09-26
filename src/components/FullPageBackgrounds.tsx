import { zip } from "lodash-es";
import { useEffect, useMemo } from "react";
import styled from "styled-components";
import useSWR from "swr";
import bg1 from "../../public/bg/1.jpg";
import bg2 from "../../public/bg/2.jpg";
import bg3 from "../../public/bg/3.jpg";
import bg4 from "../../public/bg/4.jpg";
import bg5 from "../../public/bg/5.jpg";
import bg6 from "../../public/bg/6.jpg";
import bg7 from "../../public/bg/7.jpg";
import bg8 from "../../public/bg/8.jpg";
import bg9 from "../../public/bg/9.jpg";

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

const url = `https://www.randomnumberapi.com/api/v1.0/random?min=0&max=${
  bgArray.length - 1
}&count=${bgArray.length}`;

const UL = styled.ul`
  &,
  &:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
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
  & li:nth-child(2) span {
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

export default function FullPageBackgrounds() {
  const { data: randomArray, error } = useSWR(url, () =>
    fetch(url).then((res) => res.json())
  );

  const randomizedBgArray = useMemo(
    () =>
      Array.isArray(randomArray)
        ? zip(bgArray, randomArray)
            .sort((a, b) => a[1] - b[1])
            .map((x) => x[0])
        : null,
    [randomArray]
  );

  useEffect(() => {
    if (!Array.isArray(randomizedBgArray)) return;
    let indexPozadia = 0;
    let timeout = null as any;

    const nastavitPozadie = () => {
      const pozadia = document.querySelectorAll(
        ".pozadia li span"
      ) as any as any[];
      pozadia[
        indexPozadia
      ].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
        randomizedBgArray[indexPozadia++]
      })`;
      if (indexPozadia > 1 && indexPozadia < bgArray.length) {
        timeout = setTimeout(nastavitPozadie, 6000);
      }
    };

    nastavitPozadie();
    nastavitPozadie();

    return () => {
      clearTimeout(timeout);
    };
  }, [randomizedBgArray]);

  return (
    <>
      {Array.isArray(randomizedBgArray) ? (
        <UL className="pozadia">
          {bgArray.map((src, i) => (
            <li key={src}>
              <span />
            </li>
          ))}
        </UL>
      ) : null}
    </>
  );
}
