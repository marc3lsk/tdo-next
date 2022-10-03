import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2019.jpg";
import ImgDen0 from "../../../public/rocnik/2019/0den.jpg";
import ImgDen2 from "../../../public/rocnik/2019/2den.jpg";
import ImgDen3 from "../../../public/rocnik/2019/3den.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2019 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2019" className="w-full" />
      </Galeria>
      <Article>
        <Nadpis prvy>0-tá etapa - 98 km</Nadpis>
        <Odsek>
          Aj tento rok začala Tour de Orava nultou etapou, ktorá sa už stala jej
          neodmysliteľnou súčasťou. Paľo s Mišom mali zraz v Slovenskom Grobe,
          odkiaľ vyrazili popri Malým Karpatom smerom na Piešťany. Ľuboš B.
          svoju nultú etapu začal v Nitre a vydal sa do Vrbového, kde sa mal
          stretnúť s borcami. Tí však kvôli protivetru nabrali výrazné meškanie
          a nakoľko si už Ľuboš netrúfal na ďalšie pivo, vybral sa radšej
          chalanom naproti. Na chate doplnili tohtoročný pelotón Juro s Marcelom
          a chlapci sa vydali na slávnostnú večeru. Tej sa zúčastnil aj Ľuboš K,
          ale keďže neodjazdil aspoň 1 km a nezaplatil za chatu, účasť na Tdo
          2019 mu nemohla byť započítania.
        </Odsek>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen0}
            alt="0-tá etapa - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Nadpis>1. etapa – 55 km</Nadpis>
        <Odsek>
          0-tá etapa stála Paľa mnoho síl a preto sa rozhodol radšej regenerovať
          a nabrať sily na kráľovskú etapu, 1. etapu teda vynechal. Pelotón
          čakal krátko po začiatku výšľap na Bezovec, ale nakoľko všetci brali
          tohtoročnú TdO najmä ako rekreáciu, chalani sa držali dlho spolu, keď
          si neskôr z balíka vystúpili Juro s Mišom. Z Bezovca nasledoval zjazd
          do seriálovej Hornej Dolnej, kde sa ukázalo, že je to naozaj hrozná
          diera. Po návrate na chatu cez horský prechod Havran nasledovali dve
          významné tradície TdO a to varenie kotlíkového gulášu a ilegálny
          pokrový turnaj.
        </Odsek>
        <Nadpis>2. etapa – 22 km + sanitárny deň</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen2}
            alt="2. etapa - mapa a výškový profil"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Do druhej etapy už nastúpili všetci jazdci a opäť začali stúpaním na
          Bezovec. Odtiaľ pokračovali na hrad Tematin. Išlo sa po turistickej
          trase určenej pre peších, resp. horské bicykle. Jednalo sa o
          najnáročnejší terén v histórii TdO, ktorý bol miestami nad limit
          bicyklov a preto sa aj dosť tlačilo. Z Tematínu sa borci rozhodli
          vrátiť na chatu rovnakou cestou a etapu skrátiť, pretože TdO 2019 bolo
          z organizačných dôvodov kratšie o jeden deň, ako je zvykom a bolo
          potrebné ešte stihnúť spraviť sanitárny deň. Ten sa uskutočnil
          prevažne v bazéne, kde chalani utužovali kolektív rôznymi športovými
          hrami.
        </Odsek>
        <Nadpis>Epilóg</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen3}
            alt="Epilóg - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Na tranzitnú etapu domov nastúpili Marcel, Mišo a Ľuboš, ktorý sa v
          Banke odpojil a pokračoval sám do Nitry. Miša podľa plánu v
          Smoleniciach vystriedal Paľo a Mišo prevzal čierneho Petra –
          doprovodné vozidlo.
        </Odsek>
      </Article>
    </>
  );
}
