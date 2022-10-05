import Head from "next/head";
import Img2022_1_small from "../../public/galeria/2022/1small.jpg";
import Img2022_1 from "../../public/galeria/2022/1.jpg";
import Img2022_2_small from "../../public/galeria/2022/2small.jpg";
import Img2022_2 from "../../public/galeria/2022/2.jpg";
import Img2021_1_small from "../../public/galeria/2021/1small.jpg";
import Img2021_1 from "../../public/galeria/2021/1.jpg";
import Img2021_2_small from "../../public/galeria/2021/2small.jpg";
import Img2021_2 from "../../public/galeria/2021/2.jpg";
import Img2020_1_small from "../../public/galeria/2020/1small.jpg";
import Img2020_1 from "../../public/galeria/2020/1.jpg";
import Img2020_2_small from "../../public/galeria/2020/2small.jpg";
import Img2020_2 from "../../public/galeria/2020/2.jpg";
import Img2019_1_small from "../../public/galeria/2019/1small.jpg";
import Img2019_1 from "../../public/galeria/2019/1.jpg";
import Img2018_1_small from "../../public/galeria/2018/1small.jpg";
import Img2018_1 from "../../public/galeria/2018/1.jpg";
import Img2018_2_small from "../../public/galeria/2018/2small.jpg";
import Img2018_2 from "../../public/galeria/2018/2.jpg";
import Img2017_1_small from "../../public/galeria/2017/1small.jpg";
import Img2017_1 from "../../public/galeria/2017/1.jpg";
import Img2017_2_small from "../../public/galeria/2017/2small.jpg";
import Img2017_2 from "../../public/galeria/2017/2.jpg";
import Img2016_1_small from "../../public/galeria/2016/1small.jpg";
import Img2016_1 from "../../public/galeria/2016/1.jpg";
import Img2016_2_small from "../../public/galeria/2016/2small.jpg";
import Img2016_2 from "../../public/galeria/2016/2.jpg";
import Img2015_1 from "../../public/galeria/2015/1.jpg";
import Img2015_1_small from "../../public/galeria/2015/1small.jpg";
import Img2015_2 from "../../public/galeria/2015/2.jpg";
import Img2015_2_small from "../../public/galeria/2015/2small.jpg";
import Img2014_1 from "../../public/galeria/2014/1.jpg";
import Img2014_1_small from "../../public/galeria/2014/1small.jpg";
import Img2014_2 from "../../public/galeria/2014/2.jpg";
import Img2014_2_small from "../../public/galeria/2014/2small.jpg";
import Img2013_1 from "../../public/galeria/2013/1.jpg";
import Img2013_1_small from "../../public/galeria/2013/1small.jpg";
import Img2013_2 from "../../public/galeria/2013/2.jpg";
import Img2013_2_small from "../../public/galeria/2013/2small.jpg";
import Img2012_1 from "../../public/galeria/2012/1.jpg";
import Img2012_1_small from "../../public/galeria/2012/1small.jpg";
import Img2012_2 from "../../public/galeria/2012/2.jpg";
import Img2012_2_small from "../../public/galeria/2012/2small.jpg";
import Galeria from "../components/Galeria";
import ObrazokGalerie from "../components/ObrazokGalerie";
import { StaticImageData } from "next/image";

const NadpisRocnik = ({ children }) => (
  <h1 className="my-8 text-center text-4xl text-white sm:my-16">{children}</h1>
);

const Obrazok = ({
  img,
  thumb,
  alt,
}: {
  img: StaticImageData;
  thumb: StaticImageData;
  alt: string;
}) => (
  <ObrazokGalerie
    img={img}
    thumb={thumb}
    alt={alt}
    className="inline-block !w-auto object-contain p-2 sm:h-96"
  />
);

export default function Page() {
  return (
    <>
      <Head>
        <title>Galéria - Tour de Orava</title>
      </Head>
      <div className="mb-16 text-center">
        <NadpisRocnik>2022</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2022_1} thumb={Img2022_1_small} alt="2022 - 1" />
          <Obrazok img={Img2022_2} thumb={Img2022_2_small} alt="2022 - 2" />
        </Galeria>
        <NadpisRocnik>2021</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2021_1} thumb={Img2021_1_small} alt="2021 - 1" />
          <Obrazok img={Img2021_2} thumb={Img2021_2_small} alt="2021 - 2" />
        </Galeria>
        <NadpisRocnik>2020</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2020_1} thumb={Img2020_1_small} alt="2020 - 1" />
          <Obrazok img={Img2020_2} thumb={Img2020_2_small} alt="2020 - 2" />
        </Galeria>
        <NadpisRocnik>2019</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2019_1} thumb={Img2019_1_small} alt="2019 - 1" />
        </Galeria>
        <NadpisRocnik>2018</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2018_1} thumb={Img2018_1_small} alt="2018 - 1" />
          <Obrazok img={Img2018_2} thumb={Img2018_2_small} alt="2018 - 2" />
        </Galeria>
        <NadpisRocnik>2017</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2017_1} thumb={Img2017_1_small} alt="2017 - 1" />
          <Obrazok img={Img2017_2} thumb={Img2017_2_small} alt="2017 - 2" />
        </Galeria>
        <NadpisRocnik>2016</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2016_1} thumb={Img2016_1_small} alt="2016 - 1" />
          <Obrazok img={Img2016_2} thumb={Img2016_2_small} alt="2016 - 2" />
        </Galeria>
        <NadpisRocnik>2015</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2015_1} thumb={Img2015_1_small} alt="2015 - 1" />
          <Obrazok img={Img2015_2} thumb={Img2015_2_small} alt="2015 -2" />
        </Galeria>
        <NadpisRocnik>2014</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2014_1} thumb={Img2014_1_small} alt="2014 - 1" />
          <Obrazok img={Img2014_2} thumb={Img2014_2_small} alt="2014 -2" />
        </Galeria>
        <NadpisRocnik>2013</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2013_1} thumb={Img2013_1_small} alt="2013 - 1" />
          <Obrazok img={Img2013_2} thumb={Img2013_2_small} alt="2013 -2" />
        </Galeria>
        <NadpisRocnik>2012</NadpisRocnik>
        <Galeria>
          <Obrazok img={Img2012_1} thumb={Img2012_1_small} alt="2012 - 1" />
          <Obrazok img={Img2012_2} thumb={Img2012_2_small} alt="2012 -2" />
        </Galeria>
      </div>
    </>
  );
}
