import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2013.jpg";
import ImgDen1 from "../../../public/rocnik/2013/1.den.jpg";
import ImgDen1Vyska from "../../../public/rocnik/2013/1.den-vyska.jpg";
import ImgDen2 from "../../../public/rocnik/2013/2.den.jpg";
import ImgDen2Vyska from "../../../public/rocnik/2013/2.den-vyska.png";
import ImgDen3 from "../../../public/rocnik/2013/3.den.jpg";
import ImgDen3Vyska from "../../../public/rocnik/2013/3.den-vyska.jpg";
import ImgDen3_1 from "../../../public/rocnik/2013/3den2013_1_small.jpg";
import ImgDen3_2 from "../../../public/rocnik/2013/3den2013_2_small.jpg";
import ImgDen3_3 from "../../../public/rocnik/2013/3den2013_3.jpg";
import ImgDen5 from "../../../public/rocnik/2013/5den2013_small.jpg";
import CelkovePoradie, {
  CelkovePoradieProps,
} from "../../components/Rocnik/CelkovePoradie";
import Nadpis from "../../components/Nadpis";
import BodovanieEtapy, {
  BodovanieEtapyProps,
} from "../../components/Rocnik/BodovanieEtapy";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

const CelkovePoradieData: CelkovePoradieProps = {
  rocnik: 2013,
  tabulka: [
    {
      meno: "Pavol L.",
      bodyHorske: [4, 4, 4],
      bodySprint: [4, 5],
      bodyCelkovo: 21,
      umiestnenie: 1,
    },
    {
      meno: "Michal S.",
      bodyHorske: [5, 2, 2],
      bodySprint: [5, 4, 3],
      bodyCelkovo: 21,
      umiestnenie: 2,
    },
    {
      meno: "Peter Č.",
      bodyHorske: [3, 5, 5],
      bodySprint: [3, 2, 2],
      bodyCelkovo: 20,
      umiestnenie: 3,
    },
    {
      meno: "Ľuboš B.",
      bodyHorske: [2, 2, 3],
      bodySprint: [2, 2, 1],
      bodyCelkovo: 13,
      umiestnenie: 4,
    },
    {
      meno: "Ľuboš K.	",
      bodyHorske: [1, 1, 1],
      bodySprint: [1, 1],
      bodyCelkovo: 5,
      umiestnenie: 5,
    },
    {
      meno: "Juraj B.",
      bodyHorske: [1],
      bodySprint: [],
      bodyCelkovo: 1,
      umiestnenie: 6,
    },
  ],
  vitazi: {
    zltyDres: "Pavol L. - Celkový víťaz",
    zelenyDres: "Michal S. - Najlepší špurtér",
    bodkovanyDres: "Peter Č. - Najlepší vrchár",
    bielyDres: "Juraj B. - Najlepší nováčik",
  },
};

const BodovanieEtapyDen1Data: BodovanieEtapyProps = {
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
          meno: "Ľuboš B.",
          body: 2,
        },
        {
          meno: "Ľuboš K.",
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
          meno: "Pavol L.",
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
          meno: "Ľuboš K.",
          body: 1,
        },
      ],
    },
    {
      nazov: "Horská prémia",
      jazdci: [
        {
          meno: "Peter Č.",
          body: 5,
        },
        {
          meno: "Pavol L.",
          body: 4,
        },
        {
          meno: "Ľuboš B.",
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
          meno: "Ľuboš K.",
          body: 1,
        },
      ],
    },
    {
      nazov: "3. špurtérska prémia",
      jazdci: [
        {
          meno: "Michal S.",
          body: 3,
        },
        {
          meno: "Peter Č.",
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

const BodovanieEtapyDen3Data: BodovanieEtapyProps = {
  bodovanie: [
    {
      nazov: "Horská prémia",
      jazdci: [
        {
          meno: "Peter Č.",
          body: 5,
        },
        {
          meno: "Pavol L.",
          body: 4,
        },
        {
          meno: "Ľuboš B.",
          body: 3,
        },
        {
          meno: "Michal S.",
          body: 2,
        },
        {
          meno: "Juraj B.",
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
        <title>2013 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie {...ImgHeader} alt="Ročník 2013" className="w-full" />
      </Galeria>
      <Article>
        <CelkovePoradie {...CelkovePoradieData} />
        <Nadpis>Výsledky tímov:</Nadpis>
        <p>
          1. miesto - Team Koniferum Cannondale (Pavol L., Michal S., Ľuboš K.):
          47 bodov
        </p>
        <p>
          2. miesto - Ľudovítová Pro Team (Peter Č., Ľuboš B., Juraj B.): 34
          bodov
        </p>
        <Nadpis>1. deň - Prológ</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen1}
            alt="1. deň - Prológ - mapa"
            className="mt-3 w-full"
          />
          <ObrazokGalerie
            {...ImgDen1Vyska}
            alt="1. deň - Prológ - výškový profil"
            className="mb-8 w-full"
          />
        </Galeria>
        <Odsek>
          Od úvodu prvej etapy bol na čele Juraj B. ktorý potiahol svoj tým pod
          kopec, kde sa však na neho jeho tímový kolegovia vykašlali a Ľuboš B.
          s Petrom Č. sa pustili do sólo uniku. Ten sa im však nevyplatil a
          jasne prehrali. Hneď nastali rozpory v tíme Ľudovitová Pro Team, kde
          sa zdalo, že taktika na troch lídrov nie je najšťastnejšia.
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
            className="mt-2 mb-8 w-full"
          />
        </Galeria>
        <Odsek>
          Pár kilometrov pred cieľom sa jazdcovi Pavlovi L. prihodil defekt a
          bol nútený pretek nedokončiť. Ostal s ním len Juraj B. a zvyšní jazdci
          sa pobili o poslednú špurtérsku prémiu. Ako prvý zaútočil Ľuboš B.
          avšak predbehli ho Peter Č. aj Michal S. Na ďalší útok sa už nezmohol.
          Údajne stretol stryka a musel sa pri ňom zastaviť. Táto prémia sa
          napokon po tesnom finiši opäť stala korisťou Michala S.
        </Odsek>
        <Odsek>
          Pár kilometrov pred cieľom sa jazdcovi Pavlovi L. prihodil defekt a
          bol nútený pretek nedokončiť. Ostal s ním len Juraj B. a zvyšní jazdci
          sa pobili o poslednú špurtérsku prémiu. Ako prvý zaútočil Ľuboš B.
          avšak predbehli ho Peter Č. aj Michal S. Na ďalší útok sa už nezmohol.
          Údajne stretol stryka a musel sa pri ňom zastaviť. Táto prémia sa
          napokon po tesnom finiši opäť stala korisťou Michala S.
        </Odsek>
        <BodovanieEtapy {...BodovanieEtapyDen2Data} />
        <Nadpis>3. deň - Nečakaná kráľovská etapa</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen3}
            alt="3. deň - Nečakaná kráľovská etapa"
            className="mt-3 w-full"
          />
          <ObrazokGalerie
            {...ImgDen3Vyska}
            alt="3. deň - Nečakaná kráľovská etapa - výškový profil"
            className="mt-2 mb-8 w-full"
          />
        </Galeria>
        <Odsek>
          Na tento deň bola naplánovaná najťažšia horská premia s cieľom pri
          partizánskej nemocnici vo výške 1153 m.n.m.. Postupne z balíka odpadli
          Juraj B., Ľuboš K. a Michal S. Ľubošovi B. údajne spadla reťaz a preto
          nevyhral. V závere sa zrodilo tesné víťazstvo Petra Č. pred Pavlom L.
          Táto etapa sa však ešte ani zdaleka neskončila. Po príchode do Novej
          Bystrice dostal Ľuboš K. výborný nápad vrátiť sa do Oravskej Lesnej
          „skratkou“ ktorá mala nakoniec 30km. Uprostred cesty na 53km sa strhla
          búrka a bolo z toho poriadne dobrodrúžstvo.
        </Odsek>
        <BodovanieEtapy {...BodovanieEtapyDen3Data} />
        <Galeria>
          <ObrazokGalerie
            {...ImgDen3_1}
            alt="3. deň, fotka 1"
            className="mt-5 w-full"
          />
          <ObrazokGalerie
            {...ImgDen3_2}
            alt="3. deň, fotka 2"
            className="mt-5 w-full"
          />
          <ObrazokGalerie
            {...ImgDen3_3}
            alt="3. deň, fotka 3"
            className="mt-5 max-w-xs"
          />
        </Galeria>
        <Nadpis>4. deň - Sanitárny deň</Nadpis>
        <Odsek>
          Po náročnom programe si jazdci TdO doprali deň bez bicykla. Najskôr sa
          boli pozrieť na Jánošíkové diery v Terchovej a neskôr zrelaxovali aj
          anus vo wellness hoteli Rozsutec.
        </Odsek>
        <Nadpis>5. deň - Záverečná etapa</Nadpis>
        <Odsek>
          Po sanitárnom dni Juraj B. a Pavol L. opustili dejisko pretekov hneď
          ráno. Vyskytli sa nepodložené klebety, že Pavol L. sa chcel proste
          vyhnúť prípadnej antidopingovej kontrole. Tieto reči sa samozrejme
          nezakladajú na pravde a Pavol L. zostáva symbolom novej, čistej
          cyklistiky. Ľuboš K. zostal strážiť chatu a Michal S., Ľuboš B. a
          Peter Č. sa pripojili k už tradičnej lesnianskej cyklotúre
          organizovanej akýmsi cyklistickým spolkom. Trasa, ktorá mala byť
          určená pre rodiny s deťmi, viedla napr. takým náročným stúpaním, ako
          je stúpanie na Paráč. Naši pretekári si z nepochopiteľných dôvodov
          nevychutnávali jazdu v pelotóne, ale držali sa značne pred ním. Aj
          preto došli do cieľa so značným náskokom aj pred občerstvením, ktorého
          sa im teda nedostalo.
        </Odsek>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen5}
            alt="5. deň - Záverečná etapa"
            className="mt-3 w-full"
          />
        </Galeria>
      </Article>
    </>
  );
}
