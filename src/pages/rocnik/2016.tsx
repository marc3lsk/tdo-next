import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2016.jpg";
import ImgDen0_1 from "../../../public/rocnik/2016/0den-1.jpg";
import ImgDen0_2 from "../../../public/rocnik/2016/0den-2.jpg";
import ImgDen4 from "../../../public/rocnik/2016/4den.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2016 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2016" className="w-full" />
      </Galeria>
      <Article>
        <Nadpis prvy>0-tá etapa – 1. časť – 110 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen0_1}
            alt="0-tá etapa – 1. časť - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Tour de Orava 2016 začala tak ako tá predchádzajúca nultou etapou, na
          ktorú ale okrem Peťa, Marcela a Ľuboša B. nastúpili aj Paľo a Mišo,
          ktorý chceli dokázať, že tiež nie sú bábovky. Cieľovou destináciou
          bolo Krpáčovo, čo je len približne o 15 km ďalej ako Nemecká, kde
          končila 0-tá etapa vlani. Borci však usúdili, že by chceli stíhať
          nasávať krásy Slovenska a preto trasu rozdelili na dva dni. Štvorica
          cyklistov vyrazila z Nitry o ôsmej ráno a disciplinovane striedala až
          do Veľkého Cetína, kde sa k balíku pridal Paľo a nakoľko jazdci TdO vo
          väčšom počte ako 4 už nevedie disciplinovane striedať, pokračovalo sa
          ďalej systémom hala-bala, ktorý ďalej využívali po zvyšok TdO. Na dva
          dni jazdi je Krpáčovo blízko, tak chalani zvolili obkluku cez Banskú
          Štiavnicu a aby preverili vrchársku formu, aj do Banskej Štiavnice
          išli obklukou – cez Počúvadlo. Tu prišlo obrovské zlyhanie Ľuboša B.,
          ktorý to nedomyslel s obedom a tak sa ho chalani dočkali takmer až po
          100 km, na Počúvadle. V kopci všetci borci okrem Ľuboša B. okúsili
          pravý cyklistický hlaďák. Nieže by bol Ľuboš B. nejaký lepší, či
          odolnejší jazdec, proste má na bruchu uložené obrovské energetické
          zásoby. Po zaslúženom, ale nie dobrom obede sa už len spustili do
          Banskej Štiavnice.
        </Odsek>
        <Nadpis>0-tá etapa – 2. časť – 100 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen0_2}
            alt="0-tá etapa – 2. časť - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Ľuboš B. s Paľom si porovnali pripravené trasy zo Štiavnice do
          Krpáčova. Paľova bola o 40 km dlhšia, Ľubošova zase viedla hlavným
          cestným ťahom zo Štiavnice na Zvolen. Chalani spravili kompromis a
          vybrali sa cez Močiar. Keďže sa jedná o obec, borci nezapadli, ale z
          jej názvu je jasné, že sa celú cestu obávali, v akom stave bude cesta
          (ak vôbec). Do Močiara sa dostali bez problémov cez zvlnené cesty v
          nádhernom prostredí Štiavnických vrchov. Za Močiarom sa spevnená cesta
          zmenila na šotolinu a po chvíli opäť na spevnenú, aby sa mohla opäť
          zmeniť na šotolinu, a to v rýchlom zjazde priamo v zákrute. Chalani
          toto prekvapenie našťastie ustáli a dostali sa do obce Trnavá Hora,
          odkiaľ pokračovali takmer rovnakou trasou ako vlani. V záverečnom
          stúpaní do Krpáčová usúdili, že chata je na poriadnom kopci.
        </Odsek>
        <Nadpis>1. etapa – 90 km</Nadpis>
        <Odsek>
          Na prvú etapu sa pridali aj Ľuboš K. a nováčik Boris, prekvapujúco
          však nenastúpil Paľo, ktorý si chcel dopriať deň pre seba. Borci
          najprv vystúpali na úplný vrchol Krpáčova, aby sa následne spustili
          cez Tále do Podbrezovej. Odtiaľ smer Osrblie, kde si v Národnom
          Biatlonovom Centre dali jeden okruh na bicykloch. Z Osrblia sa borci
          vrátili do Hronca, odkiaľ sa po obede vydali do Čierneho Balogu, kde
          navštívili miestne pozoruhodnosti – Lesnícky skanzen a Čiernohronskú
          železnicu.
        </Odsek>
        <Nadpis>Sanitárny deň</Nadpis>
        <Odsek>
          Jubilejná piata TdO pripravila zatiaľ najnáročnejší sanitárny deň –
          peší výstup na Chopok. Po túre nasledovala Michalidesová oslava
          narodením spojená s narodeninovým gulášom a tak sa po prvý krát stalo,
          že v rámci sanitárneho dňa neboli borci zregenerovať anus vo
          wellnesse.
        </Odsek>
        <Nadpis>2. etapa – 55 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            img={ImgDen4}
            alt="2. etapa - mapa"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Na druhú etapu nastúpil aj Jurček, ktorý sa kvôli pracovnej
          zaneprázdnenosti pridal k TdO až v priebehu sanitárneho dňa a do
          pelotónu sa vrátil Paľo. Celkovo bolo teda v balíku 8 jazdcov, rekord
          TdO. Etapa bola pojatá veľmi rekreačne, do Brezna a späť. Štvorica
          Marcel, Peťo, Ľuboš B. a Mišo si dala menšiu obkluku cez Tále a Mišov
          výkon dal jasne najavo, že pokiaľ je TdO nesúťažná, nedokáže sa
          prinútiť k poctivému tréningu ani sa dostatočne hecnúť. Zaujímavé veci
          sa diali na druhej strane kopca vo štvorici Paľo, Jurček, Ľuboš K. a
          Boris, kde síce Paľo v oklieštenej vrchárskej konkurencii nedopustil
          prekvapenie, ale po druhé miesto si prišiel prekvapujúco Jurček.
          Obdivuhodné vrchárske zlepšenie.
        </Odsek>
        <Nadpis>Epilóg – 75 km</Nadpis>
        <Odsek>
          Trojica Marcel, Peťo a Ľuboš B. sa z logistických dôvodov dopravila
          späť do Nitry kombinovanou dopravou bicykel+vlak. Celkovo teda
          odjazdili o 1 deň viac ako pred rokom, najazdili však o 50 km menej.
          Nebolo to však spôsobené klesajúcou formou borcov, ale celkovým
          poňatím jubilejnej piatej Tour de Orava, kde tento rok išlo najmä o
          rekreáciu. Na TdO 2017 však Ľuboš B. sľubuje, že konečne pripraví ten
          kopec, z ktorého sa niekto pogrcá.
        </Odsek>
      </Article>
    </>
  );
}
