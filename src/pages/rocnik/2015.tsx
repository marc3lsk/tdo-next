import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2015.jpg";
import ImgDen0 from "../../../public/rocnik/2015/0den.jpg";
import ImgDen1 from "../../../public/rocnik/2015/1den.jpg";
import ImgDen3 from "../../../public/rocnik/2015/3den.jpg";
import ImgDen3Vyska from "../../../public/rocnik/2015/3den-vyska.jpg";
import ImgDen4 from "../../../public/rocnik/2015/4den.jpg";
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
  rocnik: 2015,
  tabulka: [],
  vitazi: {
    zltyDres: "Peter Č. - Celkový víťaz",
  },
};

const BodovanieEtapyDen3Data: BodovanieEtapyProps = {
  bodovanie: [
    {
      nazov: "Kráľovská prémia - Štrbské pleso",
      jazdci: [
        {
          meno: "Peter Č.",
          body: 5,
        },
        {
          meno: "Michal S.",
          body: 4,
        },
        {
          meno: "Pavol L.",
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
        <title>2015 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2015" className="w-full" />
      </Galeria>
      <Article>
        <CelkovePoradie {...CelkovePoradieData} />
        <Nadpis>0. deň - 158km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen0}
            alt="0. deň - 158km - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Trojica cyklistov (Ľuboš B., Peťo a Marcel), ktorá nemá na benzín,
          vyrazila na TdO 2015 o deň skôr, z Nitry smer Nová Lesná. Prvý deň sa
          dostali až do Nemeckej, Peťo vytvoril nový rekord TdO, keď absolvoval
          v priebehu dňa 158 km. Podotýkame, že na horskom bicykli. Večer borci
          doplnili v bare vypotené mineráli.
        </Odsek>
        <Nadpis>1. deň - Prológ</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen1}
            alt="1. deň - Prológ - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          V stúpaní na Čertovicu, ktorá ich čakala na raňajky, Peťo jasne
          demonštroval, kto bude tento rok v kopcoch dominovať. Paľo, Juro a
          Ľuboš K. po dorazení do Novej Lesnej nezaháľali, rýchlo vyložili
          bicykle a vyrazili borcom naproti. K stretnutiu došlo v Tatranskej
          Štrbe, odkiaľ sa už takmer kompletný pelotón presunul do cieľa.
        </Odsek>
        <Nadpis>2. deň - Sanitárny deň</Nadpis>
        <Odsek>
          Borci absolvovali vrámci sanitárneho dňa peší výstup k Zamkovského
          chate a zregenerovali anus v Aquacity Poprad. Večer sa k nim pripojil
          aj Michalides.
        </Odsek>
        <Nadpis>3. deň</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen3}
            alt="3. deň - mapa"
            className="mt-3 w-full"
          />
          <ObrazokGalerie
            img={ImgDen3Vyska}
            alt="3. deň - výškový profil"
            className="mt-3 w-full"
          />
        </Galeria>
        <Odsek>
          Borci si zmerali sily v stúpaní do Štrbského Plesa. Od Podbanského
          pelotón nasadil priam vražedné tempo, keď muziku tvrdil najmä Peter
          Čopjan. Toto tempo dlho nedokázal udržať Juro a z vláčiku si vystúpil.
          Zvyšok pelotónu sa držal pokope až do posledného stúpania 5km od
          Štrbského plesa. Tu najskôr odpadol Ľuboš K. a potom Ľuboš B. Ako prvý
          zaútočil Michal S., avšak Peter Čopjan poľahky jeho útok zlikvidoval a
          prišiel si po víťazstvo. V tesnom závese prišli Michal, Palo a Marcel.
          Po výdatnom obede v reštaurácii Furkotka sa niektorí pobrali priamo na
          byt, ostatní si to ešte vystúpali k Popradskému plesu.
        </Odsek>
        <BodovanieEtapy {...BodovanieEtapyDen3Data} />
        <Nadpis>3. deň - Sanitárny deň</Nadpis>
        <Odsek>
          Po náročnom programe si jazdci TdO doprali deň bez bicykla. Najskôr sa
          boli pozrieť v Kvačianskej doline a potom zregenerovali aj anus v
          kúpeloch Lúčky.
        </Odsek>
        <Nadpis>4. deň</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen4}
            alt="4. deň - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Predchádzajúca etapa si vybrala svoju daň a na druhú kráľovskú etapu
          nenastúpil Paľo, Juro s Ľuboš K. kvôli vyčerpaniu. Juro s Ľuboš K. ako
          alternatívu zvolili jazdu k Belianskej jaskyni. Peťo, Marcel, Mišo a
          Ľuboš B. absolvovali druhú kráľovskú etapu. Pelotón TdO po prvý krát v
          histórii opustil územie Slovenskej republiky, keď borci navštívili
          hrad Niedzica v Poľsku. Cestou späť si to skrátili cez „živý skanzen“
          – obec Osturňa. Bolo to síce ďalej, ale o to horšia cesta. Celkovo
          chalani absolvovali v tejto etape 5 náročných stúpaní. V Tatrách sme
          moc rovín nenašli a preto bola šprintérska súťaž zrušená, vrchárska
          tým pádom splynula so súťažou o celkové víťazstvo.
        </Odsek>
      </Article>
    </>
  );
}
