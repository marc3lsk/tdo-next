import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2014.jpg";
import ImgDen1 from "../../../public/rocnik/2014/1den.jpg";
import ImgDen2 from "../../../public/rocnik/2014/2den.jpg";
import ImgDen2Vyska from "../../../public/rocnik/2014/2den-vyska.jpg";
import ImgDen4 from "../../../public/rocnik/2014/4den.jpg";
import ImgDen4Vyska from "../../../public/rocnik/2014/4den-vyska.jpg";
import ImgBriss from "../../../public/rocnik/2014/briss.jpg";
import ImgDen5 from "../../../public/rocnik/2014/5den.jpg";
import ImgDen5Vyska from "../../../public/rocnik/2014/5den-vyska.jpg";
import CelkovePoradie, {
  CelkovePoradieProps,
} from "../../components/Rocnik/CelkovePoradie";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Nadpis from "../../components/Nadpis";
import Odsek from "../../components/Odsek";
import BodovanieEtapy, {
  BodovanieEtapyProps,
} from "../../components/Rocnik/BodovanieEtapy";

const CelkovePoradieData: CelkovePoradieProps = {
  rocnik: 2014,
  tabulka: [
    {
      meno: "Pavol L.",
      bodyHorske: [5, 1, 4],
      bodySprint: [5, 5, 3, 4],
      bodyCelkovo: 27,
      umiestnenie: 1,
    },
    {
      meno: "Michal S.",
      bodyHorske: [4, 4, 5],
      bodySprint: [2, 1, 5, 5],
      bodyCelkovo: 26,
      umiestnenie: 2,
    },
    {
      meno: "Peter Č.",
      bodyHorske: [3, 2, 3],
      bodySprint: [4, 4, 1],
      bodyCelkovo: 17,
      umiestnenie: 3,
    },
    {
      meno: "Marcel B.",
      bodyHorske: [1, 5, 2],
      bodySprint: [3, 2, 3],
      bodyCelkovo: 16,
      umiestnenie: 4,
    },
    {
      meno: "Ľuboš B.",
      bodyHorske: [2, 3, 1],
      bodySprint: [4, 3, 1, 2],
      bodyCelkovo: 16,
      umiestnenie: 5,
    },
    {
      meno: "Ľuboš K.	",
      bodyHorske: [],
      bodySprint: [1, 2],
      bodyCelkovo: 3,
      umiestnenie: 6,
    },
    {
      meno: "Juraj B.",
      bodyHorske: [],
      bodySprint: [],
      bodyCelkovo: 0,
      umiestnenie: 7,
    },
  ],
  vitazi: {
    zltyDres: "Pavol L. - Celkový víťaz",
    zelenyDres: "Michal S. - Najlepší špurtér",
    bodkovanyDres: "Peter Č. - Najlepší vrchár",
    bielyDres: "Marcel B. - Najlepší nováčik",
  },
};

const BodovanieEtapyDen1Data: BodovanieEtapyProps = {
  bodovanie: [
    {
      nazov: "1. špurtérska prémia",
      jazdci: [
        {
          meno: "Pavol L.",
          body: 5,
        },
        {
          meno: "Ľuboš B.",
          body: 4,
        },
        {
          meno: "Marcel B.",
          body: 3,
        },
        {
          meno: "Michal S.",
          body: 2,
        },
        {
          meno: "Ľuboš K.",
          body: 1,
        },
      ],
    },
    {
      nazov: "2. špurtérska prémia",
      jazdci: [
        {
          meno: "Pavol L.",
          body: 5,
        },
        {
          meno: "Peter Č.",
          body: 4,
        },
        {
          meno: "Ľuboš B.",
          body: 3,
        },
        {
          meno: "Marcel B.",
          body: 2,
        },
        {
          meno: "Michal S.",
          body: 1,
        },
      ],
    },
  ],
};

const BodovanieEtapyDen2Data: BodovanieEtapyProps = {
  bodovanie: [
    {
      nazov: "1. špurtérska prémia",
      jazdci: [
        {
          meno: "Michal S.",
          body: 5,
        },
        {
          meno: "Peter Č.",
          body: 4,
        },
        {
          meno: "Pavol L.",
          body: 3,
        },
        {
          meno: "Ľuboš K.",
          body: 2,
        },
        {
          meno: "Ľuboš B.",
          body: 1,
        },
      ],
    },
    {
      nazov: "1. horská prémia",
      jazdci: [
        {
          meno: "Pavol L.",
          body: 5,
        },
        {
          meno: "Michal S.",
          body: 4,
        },
        {
          meno: "Peter Č.",
          body: 3,
        },
        {
          meno: "Ľuboš B.",
          body: 2,
        },
        {
          meno: "Marcel B.",
          body: 1,
        },
      ],
    },
    {
      nazov: "2. horská prémia",
      jazdci: [
        {
          meno: "Marcel B.",
          body: 5,
        },
        {
          meno: "Michal S.",
          body: 4,
        },
        {
          meno: "Ľuboš B.",
          body: 3,
        },
        {
          meno: "Peter Č.",
          body: 2,
        },
        {
          meno: "Pavol L.",
          body: 1,
        },
      ],
    },
    {
      nazov: "2. špurtérska prémia",
      jazdci: [
        {
          meno: "Michal S.",
          body: 5,
        },
        {
          meno: "Pavol L.",
          body: 4,
        },
        {
          meno: "Marcel B.",
          body: 3,
        },
        {
          meno: "Ľuboš B.",
          body: 2,
        },
        {
          meno: "Peter Č.",
          body: 1,
        },
      ],
    },
  ],
};

const BodovanieEtapyDen4Data: BodovanieEtapyProps = {
  bodovanie: [
    {
      nazov: "Horská prémia",
      jazdci: [
        {
          meno: "Michal S.",
          body: 5,
        },
        {
          meno: "Pavol L.",
          body: 4,
        },
        {
          meno: "Peter Č.",
          body: 3,
        },
        {
          meno: "Marcel B.",
          body: 2,
        },
        {
          meno: "Ľuboš B.",
          body: 1,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <Head>
        <title>2014 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie {...ImgHeader} alt="Ročník 2014" className="w-full" />
      </Galeria>
      <Article>
        <CelkovePoradie {...CelkovePoradieData} />
        <Nadpis>Výsledky tímov:</Nadpis>
        <p>
          1. miesto - Team Koniferum Cannondale (Pavol L., Ľuboš B., Ľuboš K.):
          46 bodov
        </p>
        <p>
          2. miesto - Chlastana Pro Team (Michal S., Peter Č., Juraj B.): 43
          bodov
        </p>
        <Nadpis>1. deň - Prológ - 39km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen1}
            alt="1. deň - Prológ"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Pelotón sa držal po kope po ôsmy kilometer. Potom sa mierne odpútal
          Marcel ku ktorému sa pridali Luboš B. a Pavol L. Skupinka si
          vybojovala náskok a stratila sa z dohľadu prenasledovateľov. Jednalo
          sa o historicky prvý únik v histórii Tdo. Michal S. a Juraj B. sa
          pokúsili zlikvidovať náskok ale po pár minútach to vzdali. Zo skupinky
          na 15km odpadol Marcel a do víťazného konca únik doviedol Pavol L.
          Marcel si prišiel po 3. miesto. V špurte o 4. miesto porazil Michal
          Ľuboša K. Na 27km v krátkom ale ostrom stúpaní sa snažil odpútať Peter
          Č., ktory nasadil vysoké tempo, ktorému nestíhali Michal S., Ľuboš K.
          a Juraj B. V predu vytvoril skupinku s Pavlom L., Ľubošom B. a
          Marcelom. Táto skupinka si to rozdala o víťazstvo v druhej špurtérskej
          prémii. Víťazstvo sa opäť podarilo ukoristitiť Pavlovi L. tesne pred
          Petrom Č.
        </Odsek>
        <BodovanieEtapy {...BodovanieEtapyDen1Data} />
        <Nadpis>2. deň - Kráľovská etapa</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen2}
            alt="2. deň - Kráľovská etapa"
            className="mt-3 w-full"
          />
          <ObrazokGalerie
            {...ImgDen2Vyska}
            alt="2. deň - Kráľovská etapa - výškový profil"
            className="mt-3 mb-8 w-full"
          />
        </Galeria>
        <Odsek>
          Po prvom dni sa mohlo zdať, že boj o celkové víťazstvo je rozhodnutý,
          avšak to nechceli jazdci tímu Chlastana Pro Team pripustiť. Kilometer
          pred prvou špurtérskou prémiou sa odpútali Michal S. a Peter Č. a
          jazdci tímu Koniferum Cannondale nestihli zareagovať. Po víťazstvo si
          prišiel Michal S. Na začiatku druhej horskej prémie za Zubercom začal
          pracovať v čele balíka super domestik Ľuboš B. s úmyslom roztrhať
          balík. To sa mu aj podarilo ale prekvapujuco začali strácat dvaja
          supervrchári Pavol L. a Peter Č. Nováčik Marcel B. sa bez problemov
          držal a aj Michal S. Táto trojica sa spolu držala takmer celé
          stúpanie. Asi pol kilometra pred vrcholom začal Michal strácať na
          Marcela. Pre Brišša Marcel nebol zaujimavý tak nereagoval. V čase keď
          mal Marcel už dostatocný náskok využil Michal svoje enormné zrýchlenie
          a nastúpil Briššovi. Brišš nemal svoje nohy a nezareagoval a Michal si
          prišiel po druhé miesto. Po prvé etapové víťazstvo si prišiel nováčik
          Marcel. Michal S. zavŕšil skvelý deň víťazstvom na poslednej
          špurtérskej prémii a poriadne zdramatizoval boj o celkové víťazstvo.
        </Odsek>
        <BodovanieEtapy {...BodovanieEtapyDen2Data} />
        <Nadpis>3. deň - Sanitárny deň</Nadpis>
        <Odsek>
          Po náročnom programe si jazdci TdO doprali deň bez bicykla. Najskôr sa
          boli pozrieť v Kvačianskej doline a potom zregenerovali aj anus v
          kúpeloch Lúčky.
        </Odsek>
        <Nadpis>4. deň - Horská prémia</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen4}
            alt="4. deň - Horská prémia - mapa"
            className="mt-3 w-full"
          />
          <ObrazokGalerie
            {...ImgDen4Vyska}
            alt="4. deň - Horská prémia - výškový profil"
            className="mt-3 mb-8 w-full"
          />
        </Galeria>
        <Odsek>
          Ľuboš B. avizoval pred pretekmi, že v kopcoch rozpúta peklo. Po tomto
          kopci bolo jasné, že jediné peklo tento rok rozpútal na chate na
          záchode.
        </Odsek>
        <BodovanieEtapy {...BodovanieEtapyDen4Data} />
        <Odsek>
          Po tejto etape Luboš B. uzavrel stávku, že pojde do Mýta pod
          Ďumbierom, tam si spraví selfie a vráti sa na chatu. Ako to dopadlo
          môžete vidieť vo fotodokumentácii. Trošku zle odbočil. Napriek tomu v
          tento deň najazdil úctihodných 130 km.
        </Odsek>
        <Galeria>
          <ObrazokGalerie
            {...ImgBriss}
            alt="Bušo v Mýte pod Ďumbierom"
            className="mt-3 max-w-xs"
          />
        </Galeria>
        <Nadpis>5. deň - rozlúčka</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen5}
            alt="5. deň - rozlúčka - mapa"
            className="mt-3 w-full"
          />
          <ObrazokGalerie
            {...ImgDen5Vyska}
            alt="5. deň - rozlúčka - výškový profil"
            className="mt-1 mb-8 w-full"
          />
        </Galeria>
        <Odsek>
          Posledný deň ročníka 2014 sa už tradične nesútažilo a jazdci sa lúčili
          s fanúšikmi. Juraj B. a Pavol L. kvôli zdravotným problémom
          nenastúpili.
        </Odsek>
      </Article>
    </>
  );
}
