import { zip } from "lodash-es";
import { useCallback, useEffect, useMemo, useRef } from "react";
import useSWR from "swr";
import styled from "styled-components";
import _3den2013_1 from "../../public/pozadia/2013/3den2013_1.jpg";
import _3den2013_2 from "../../public/pozadia/2013/3den2013_2.jpg";
import _5den2013 from "../../public/pozadia/2013/5den2013.jpg";
import _1den2014 from "../../public/pozadia/2014/1den2014.jpg";
import _2den2014 from "../../public/pozadia/2014/2den2014.jpg";
import _4den2014 from "../../public/pozadia/2014/4den2014.jpg";
import _20160705_081154 from "../../public/pozadia/20160705_081154.jpg";
import _20160706_090754 from "../../public/pozadia/20160706_090754.jpg";
import _20160706_095521 from "../../public/pozadia/20160706_095521.jpg";
import _20160706_095542 from "../../public/pozadia/20160706_095542.jpg";
import _20160706_155230 from "../../public/pozadia/20160706_155230.jpg";
import _20160707_115335_1 from "../../public/pozadia/20160707_115335-1.jpg";
import _20160707_115619 from "../../public/pozadia/20160707_115619.jpg";
import _20160707_201624 from "../../public/pozadia/20160707_201624.jpg";
import _20170702_215435 from "../../public/pozadia/20170702_215435.jpg";
import _20170703_130626 from "../../public/pozadia/20170703_130626.jpg";
import _20170704_170849 from "../../public/pozadia/20170704_170849.jpg";
import _20180707_101853 from "../../public/pozadia/20180707_101853.jpg";
import _20190706_113530 from "../../public/pozadia/20190706_113530.jpg";
import _IMG_0268 from "../../public/pozadia/IMG_0268.jpg";
import _IMG_0271 from "../../public/pozadia/IMG_0271.jpg";
import _IMG_0280 from "../../public/pozadia/IMG_0280.jpg";
import _IMG_0370 from "../../public/pozadia/IMG_0370.jpg";
import _IMG_0374 from "../../public/pozadia/IMG_0374.jpg";
import _IMG_0785 from "../../public/pozadia/IMG_0785.jpg";
import _IMG_0797 from "../../public/pozadia/IMG_0797.jpg";
import _IMG_0824 from "../../public/pozadia/IMG_0824.jpg";
import _IMG_0845 from "../../public/pozadia/IMG_0845.jpg";
import _IMG_0856 from "../../public/pozadia/IMG_0856.jpg";
import _IMG_0925 from "../../public/pozadia/IMG_0925.jpg";
import _IMG_0970 from "../../public/pozadia/IMG_0970.jpg";
import _IMG_1153 from "../../public/pozadia/IMG_1153.jpg";
import _IMG_1386 from "../../public/pozadia/IMG_1386.jpg";
import _IMG_1397 from "../../public/pozadia/IMG_1397.jpg";
import _IMG_1405 from "../../public/pozadia/IMG_1405.jpg";
import _IMG_1472 from "../../public/pozadia/IMG_1472.jpg";
import _IMG_20180706_115204 from "../../public/pozadia/IMG_20180706_115204.jpg";
import _IMG_20180706_120404 from "../../public/pozadia/IMG_20180706_120404.jpg";
import _IMG_20190705_191232 from "../../public/pozadia/IMG_20190705_191232.jpg";
import _IMG_20190706_135802 from "../../public/pozadia/IMG_20190706_135802.jpg";
import _IMG_20200710_125610 from "../../public/pozadia/IMG_20200710_125610.jpg";
import _IMG_20200710_131105 from "../../public/pozadia/IMG_20200710_131105.jpg";
import _IMG_20200710_135433 from "../../public/pozadia/IMG_20200710_135433.jpg";
import _IMG_20210702_114530 from "../../public/pozadia/IMG_20210702_114530.jpg";
import _IMG_20210703_103033 from "../../public/pozadia/IMG_20210703_103033.jpg";
import _IMG_20210703_111010 from "../../public/pozadia/IMG_20210703_111010.jpg";
import _IMG_20210703_124737 from "../../public/pozadia/IMG_20210703_124737.jpg";
import _IMG_20210704_103717 from "../../public/pozadia/IMG_20210704_103717.jpg";
import _IMG_20210704_144401 from "../../public/pozadia/IMG_20210704_144401.jpg";
import _IMG_20210704_144459 from "../../public/pozadia/IMG_20210704_144459.jpg";
import _IMG_20210705_153714 from "../../public/pozadia/IMG_20210705_153714.jpg";
import _IMG_20210705_211023 from "../../public/pozadia/IMG_20210705_211023.jpg";
import _IMG_20220701_164052 from "../../public/pozadia/IMG_20220701_164052.jpg";
import _IMG_20220703_101307 from "../../public/pozadia/IMG_20220703_101307.jpg";
import _IMG_20220703_110621 from "../../public/pozadia/IMG_20220703_110621.jpg";
import _IMG_20220703_112541 from "../../public/pozadia/IMG_20220703_112541.jpg";
import _IMG_20220704_154434 from "../../public/pozadia/IMG_20220704_154434.jpg";
import _IMG_20220704_165500 from "../../public/pozadia/IMG_20220704_165500.jpg";
import _IMG_3287 from "../../public/pozadia/IMG_3287.jpg";
import _IMG_3394 from "../../public/pozadia/IMG_3394.jpg";
import _IMG_3397 from "../../public/pozadia/IMG_3397.jpg";
import _IMG_3405 from "../../public/pozadia/IMG_3405.jpg";
import _IMG_3436 from "../../public/pozadia/IMG_3436.jpg";
import _IMG_3438 from "../../public/pozadia/IMG_3438.jpg";
import _IMG_5622_2 from "../../public/pozadia/IMG_5622_2.jpg";
import _IMG20231 from "../../public/pozadia/2023/1.jpg";
import _IMG20232 from "../../public/pozadia/2023/2.jpg";
import _IMG20233 from "../../public/pozadia/2023/3.jpg";
import _IMG20234 from "../../public/pozadia/2023/4.jpg";
import _IMG20235 from "../../public/pozadia/2023/5.jpg";
import _IMG20236 from "../../public/pozadia/2023/6.jpg";
import _IMG20237 from "../../public/pozadia/2023/7.jpg";
import _IMG20238 from "../../public/pozadia/2023/8.jpg";
import _IMG20239 from "../../public/pozadia/2023/9.jpg";
import _IMG202310 from "../../public/pozadia/2023/10.jpg";

const arrayOfBackgrounds = [
  _3den2013_1.src,
  _3den2013_2.src,
  _5den2013.src,
  _1den2014.src,
  _2den2014.src,
  _4den2014.src,
  _20160705_081154.src,
  _20160706_090754.src,
  _20160706_095521.src,
  _20160706_095542.src,
  _20160706_155230.src,
  _20160707_115335_1.src,
  _20160707_115619.src,
  _20160707_201624.src,
  _20170702_215435.src,
  _20170703_130626.src,
  _20170704_170849.src,
  _20180707_101853.src,
  _20190706_113530.src,
  _IMG_0268.src,
  _IMG_0271.src,
  _IMG_0280.src,
  _IMG_0370.src,
  _IMG_0374.src,
  _IMG_0785.src,
  _IMG_0797.src,
  _IMG_0824.src,
  _IMG_0845.src,
  _IMG_0856.src,
  _IMG_0925.src,
  _IMG_0970.src,
  _IMG_1153.src,
  _IMG_1386.src,
  _IMG_1397.src,
  _IMG_1405.src,
  _IMG_1472.src,
  _IMG_20180706_115204.src,
  _IMG_20180706_120404.src,
  _IMG_20190705_191232.src,
  _IMG_20190706_135802.src,
  _IMG_20200710_125610.src,
  _IMG_20200710_131105.src,
  _IMG_20200710_135433.src,
  _IMG_20210702_114530.src,
  _IMG_20210703_103033.src,
  _IMG_20210703_111010.src,
  _IMG_20210703_124737.src,
  _IMG_20210704_103717.src,
  _IMG_20210704_144401.src,
  _IMG_20210704_144459.src,
  _IMG_20210705_153714.src,
  _IMG_20210705_211023.src,
  _IMG_20220701_164052.src,
  _IMG_20220703_101307.src,
  _IMG_20220703_110621.src,
  _IMG_20220703_112541.src,
  _IMG_20220704_154434.src,
  _IMG_20220704_165500.src,
  _IMG_3287.src,
  _IMG_3394.src,
  _IMG_3397.src,
  _IMG_3405.src,
  _IMG_3436.src,
  _IMG_3438.src,
  _IMG_5622_2.src,
  _IMG20231.src,
  _IMG20232.src,
  _IMG20233.src,
  _IMG20234.src,
  _IMG20235.src,
  _IMG20236.src,
  _IMG20237.src,
  _IMG20239.src,
  _IMG202310.src,
];

const url = `https://www.random.org/integers/?num=${arrayOfBackgrounds.length}&min=0&max=1000000000&col=1&base=10&format=plain&rnd=new`;

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
    animation: imageAnimation 60s linear infinite 0s;
  }
  & li:nth-child(2) span {
    animation-delay: 10s;
  }
  ${new Array(4).fill(0).map(
    (_, i) => `
& li:nth-child(${i + 3}) span {
animation-delay: ${(i + 2) * 10}s;
}
`,
  )}
  @keyframes imageAnimation {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    17% {
      opacity: 1;
    }
    18% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function PozadiaUvodnejStranky() {
  const ul = useRef(null);
  const timeout = useRef(undefined as any);
  const spanIndex = useRef(0);
  const bgIndex = useRef(0);
  const initDone = useRef(false);
  useSWR(url, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });
  const { data: linesOfRandomNumbers, error } = useSWR(url, () => fetch(url).then((res) => res.text()));

  const arrayOfRandomNumbers = useMemo(
    () =>
      linesOfRandomNumbers
        ? linesOfRandomNumbers
            .split(/\r?\n/)
            .map((x) => parseInt(x))
            .filter((x) => !isNaN(x))
        : null,
    [linesOfRandomNumbers],
  );

  const arrayOfRandomizedBackgrounds = useMemo(
    () =>
      arrayOfRandomNumbers
        ? zip(arrayOfBackgrounds, arrayOfRandomNumbers)
            .sort((a, b) => a[1]! - b[1]!)
            .map((x) => x[0])
        : null,
    [arrayOfRandomNumbers],
  );

  useEffect(
    () => () => {
      clearTimeout(timeout.current);
      initDone.current = false;
      spanIndex.current = 0;
      bgIndex.current = 0;
    },
    [],
  );

  const ulRef = useCallback(() => {
    if (!Array.isArray(arrayOfRandomizedBackgrounds)) return;
    if (initDone.current) return;
    initDone.current = true;

    const nastavitPozadie = (init) => {
      const pozadia = document.querySelectorAll(`.pozadia li span`) as any as any[];
      if (pozadia?.length != 6) return;
      pozadia[spanIndex.current++].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${arrayOfRandomizedBackgrounds[bgIndex.current++]})`;

      if (spanIndex.current == 6) spanIndex.current = 0;

      if (bgIndex.current == arrayOfBackgrounds.length) bgIndex.current = 0;

      if (init) return;

      timeout.current = setTimeout(nastavitPozadie, 10 * 1000);
    };

    nastavitPozadie(true);
    nastavitPozadie(false);
  }, [arrayOfRandomizedBackgrounds]);

  return (
    <>
      {Array.isArray(arrayOfRandomizedBackgrounds) ? (
        <UL ref={ulRef} className="pozadia">
          {new Array(6).fill(0).map((_, i) => (
            <li key={i}>
              <span />
            </li>
          ))}
        </UL>
      ) : null}
    </>
  );
}
