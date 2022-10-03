import Head from "next/head";
import Clanok from "../../components/Clanok";
import ImgHeader from "../../../public/rocnik/header2017.jpg";
import ImgDen0_1 from "../../../public/rocnik/2017/0den-1.jpg";
import ImgDen0_2 from "../../../public/rocnik/2017/0den-2.jpg";
import ImgFutbal from "../../../public/rocnik/2017/futbal 2017.jpg";
import ImgDen2 from "../../../public/rocnik/2017/2den.jpg";
import ImgAnus from "../../../public/rocnik/2017/anus 2017.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2017 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2017" className="w-full" />
      </Galeria>
      <Clanok>
        <Nadpis prvy>0-tá etapa – 1. časť – 125 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen0_1}
            alt="0-tá etapa – 1. časť - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Tour de Orava už po tretí krát štartovala nultou etapou, borci však
          tento krát neštartovali tradične z Nitry, ale z Bratislavy. Peťo, Mišo
          a Ľuboš B. prešli cez Karpaty do Stupavy, kde už na nich čakal Paľo.
          Jazdci s vetrom v chrbte pokračovali popri Malým Karpatom a keď sa do
          toho poriadne opreli, Ľuboš zacítil 90 kilometrový presun z Nitry z
          predchádzajúceho dňa a musel bojovať, aby nestratil kontakt. Za
          Brezovou pod Bradlom chalani okúsili krásu kopaníc, ale najmä
          náročnosť tunajších kopcov.
        </Odsek>
        <Nadpis>0-tá etapa – 2. časť – 125 kmm</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen0_2}
            alt="0-tá etapa – 2. časť - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          V druhej časti 0-tej etapy sa Paľo obetoval a prenechal priestor v
          pelotóne Marcelovi, zobral teda Čierneho Petra a zasadol za volant.
          Obmenený pelotón si to zamieril do Trenčianskych Stankoviec pozrieť
          Jurčeka do jeho nového bytu, kde sa im ušla kávička a pol decko.
          Odtiaľ už chalani smerovali priamo na chatu do doliniek, kde to po
          prečkaní lejaku za Púchovom na tretí krát aj našli. Kilometer pred
          chatou čakala na borcov 300 metrová stena, kde Ľuboš po prvý krát v
          histórii TdO zosadol a tlačil bicykel. Bez zosadnutia zvládol túto
          stenu ako jediný Peťo.
        </Odsek>
        <Nadpis>Športový deň</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgFutbal}
            alt="Futbal"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Pre nepriaznivé počasie nenasledovala po 0-tej etape 1. etapa, ale
          športový deň. Paľo nenašiel premožiteľa ani v pingpongovom, ani
          biliardovom turnaji a oba turnaje vyhral. Nasledoval futbalový zápas a
          Paľo opäť ukázal svoju veľkosť, keď si ako kapitán do týmu nevybral
          bývalého vynikajúceho reprezentanta Výčap-Opatoviec Jurčeka, ani
          všestranne veľmi nadaného športovca Peťa, ale stavil na srdciarov
          Ľuboša a Marcela, čo sa ukázalo ako kľúčové. Mišov tím (Mišo, Jurček,
          Peťo) sa rýchlo ujal vedenia 4:0, ale Paľov tým (Paľo, Ľuboš, Marcel)
          sa nenechal rozhádzať a rýchlo vyrovnal. Mišovmu tímu sa podarilo ešte
          raz vypracovať 4-gólové vedenie, ale Paľov tím opäť vyrovnal a zápas
          napokon dospel do predĺženia. V ňom si Paľov tím rýchlo vypracoval
          rozhodujúci náskok a zápas vyhral.
        </Odsek>
        <Nadpis>1. etapa (kráľovská) – 87 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen2}
            alt="1. etapa (kráľovská) - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Peťo, Paľo a Ľubo mali v úvode etapy obrovské problémy v zjazde mokrou
          stenou, keď im to nebrzdilo tak, ako by očakávali, ale našťastie to
          ustáli a kráľovská etapa mohla pokračovať. V rámci etapy pelotón TdO
          po druhý krát opustil Slovenskú republiku, borci tento krát navštívili
          Českú republiku, kde si dali kolečko okolo Vodnej nádrže Šance. Cestou
          späť dostal Mišo defekt, a po jeho rýchlej oprave sa pokračovalo
          ďalej. Etapa mala značne zvlnený profil, obsahovala veľký počet
          strmých stúpaní a možno ju označiť za jednu z najnáročnejších etáp v
          histórii Tour de Orava, ak nie za vôbec najnáročnejšiu. Po etape Mišo
          grcal, či však grcal z kopcov a tým pádom Ľuboš konečne splnil sľub,
          že pripraví také kopce, z ktorých sa ostatní pogrcajú, alebo grcal z
          jedla, sa nedozvieme.
        </Odsek>
        <Nadpis>Sanitárny deň</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgAnus}
            alt="Anus"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Počas sanitárneho dňa jazdci TdO vystúpili na Rozhľadňu na kopci
          Zarúbaná Kýčera (884 m n. m.) neďaleko chaty a zregenerovali anus v
          Sudoparku v Klokočove.
        </Odsek>
        <Nadpis>Epilóg</Nadpis>
        <Odsek>
          Trojica Mišo, Peťo a Ľuboš sa z logistických dôvodov dopravila domov
          kombinovanou dopravou bicykel+vlak. Najskôr ich čakalo 30 km do
          Žiliny, potom Ľuboša takmer 50 km z Trnavy do Nitry a Peťa s Mišom cca
          6 km po Bratislave. Ľuboš teda v rámci TdO 2017 navštívil 5 krajských
          miest.
        </Odsek>
      </Clanok>
    </>
  );
}
