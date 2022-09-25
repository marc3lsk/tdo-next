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
    animation: imageAnimation 54s linear infinite 0s;
  }
  & li:nth-child(1) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg1.src});
  }
  & li:nth-child(2) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg2.src});
    animation-delay: 6s;
  }
  & li:nth-child(3) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg3.src});
    animation-delay: 12s;
  }
  & li:nth-child(4) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg4.src});
    animation-delay: 18s;
  }
  & li:nth-child(5) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg5.src});
    animation-delay: 24s;
  }
  & li:nth-child(6) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg6.src});
    animation-delay: 30s;
  }
  & li:nth-child(7) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg7.src});
    animation-delay: 36s;
  }
  & li:nth-child(8) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg8.src});
    animation-delay: 42s;
  }
  & li:nth-child(9) span {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg9.src});
    animation-delay: 48s;
  }
  @keyframes imageAnimation {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 1;
    }
    11% {
      opacity: 1;
    }
    12% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Div = styled.div`
  & img {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    -o-object-fit: contain;
    object-fit: contain;
  }
`;

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    startImageTransition();

    function startImageTransition() {
      var images = document.getElementsByClassName("test") as any as any[];

      for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
      }

      var top = 1;

      var cur = images.length - 1;

      setInterval(changeImage, 3000);

      async function changeImage() {
        var nextImage = (1 + cur) % images.length;

        images[cur].style.zIndex = top + 1;
        //images[nextImage].src = images[nextImage].src || bgArray[nextImage];
        images[nextImage].style.zIndex = top;

        await transition();

        images[cur].style.zIndex = top;

        images[nextImage].style.zIndex = top + 1;

        top = top + 1;

        images[cur].style.opacity = 1;

        cur = nextImage;
      }

      function transition() {
        return new Promise<void>(function (resolve, reject) {
          var del = 0.01;

          var id = setInterval(changeOpacity, 10);

          function changeOpacity() {
            images[cur].style.opacity -= del;
            if (images[cur].style.opacity <= 0) {
              clearInterval(id);
              resolve();
            }
          }
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Div id="scroll-image" className="hidden">
        <img src={bg1.src} className="test" />
        <img className="test" />
        <img className="test" />
        <img className="test" />
        <img className="test" />
        <img className="test" />
      </Div>
      {router.asPath == "/" ? (
        <>
          <UL>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
            <li>
              <span />
            </li>
          </UL>
        </>
      ) : null}
      <Header />
      <main className=" pt-5">{children}</main>
    </>
  );
}
