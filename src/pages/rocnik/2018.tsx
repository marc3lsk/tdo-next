import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2018.jpg";
import ImgDen1 from "../../../public/rocnik/2018/1den.jpg";
import ImgDen3 from "../../../public/rocnik/2018/3den.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2018 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie {...ImgHeader} alt="Ročník 2018" className="w-full" />
      </Galeria>
      <Article>
        <Nadpis prvy>0-tá etapa - 138 km</Nadpis>
        <Odsek>
          Tour de Orava už po štvrtý krát začala 0-tou etapou, ktorá tento krát
          pre deckú porciu kilometrov nebola rozdelená na dve časti. Na etapu
          nastúpili len Ľuboš B. a Marcel, nakoľko Peťo sa kvôli posunutiu
          termínu TdO ešte nestihol vrátiť zo sústredenia v Taliansku, Miša na
          TdO nepustila snúbenica a na Paľa vyšiel Čierny Peter, sprievodné
          vozidlo. Ako vieme, Juro o 0-tú etapu dlhodobo neprejavuje záujem a
          Ľuboš K. s Borisom sa pre slabú formu už po druhý krát nezúčastnili
          TdO vôbec.
        </Odsek>
        <Nadpis>1 etapa – 90 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen1}
            alt="1 etapa - mapa a výškový profil"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          V rámci kráľovskej etapy navštívil pelotón geografický stred Európy
          (ten Slovenský). V stúpaní na Kremnické Bane nasadil Marcel tempo,
          ktoré s ním dokázal udržať iba Ľuboš. Cestou späť sa borci zastavili
          na obed v Turčianskych Tepliciach, kde nešťastnou náhodou vybrali
          reštauráciu, kde sa nepodáva žiaden alkohol. Prvú etapu neabsolvoval
          Peťo, ktorý sa ten deň ešte len presúval do dejiska TdO.
        </Odsek>
        <Nadpis>Sanitárny deň</Nadpis>
        <Odsek>
          V rámci sanitárneho dňa jazdci absolvovali výstup na Znievsky hrad a
          následne sa vybrali zregenerovať anus do SPA & AQUAPARKu v
          Turčianskych Tepliciach. Pre nepriaznivé počasie boli ihneď po ich
          príchode uzavreté všetky vonkajšie bazény a atrakcie, takže borcom
          ostávalo už len čvachtanie sa v teplých bazénoch. Po návrate na chatu
          majstri uvarili kotlíkový guláš, pre nepriazeň počasia v hrnci.
        </Odsek>
        <Nadpis>2 etapa – 89 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen3}
            alt="2 etapa - mapa a výškový profil"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Druhá etapa zaviedla pelotón do Gaderskej doliny, kde ich najskôr
          dojala nádhera Slovenskej prírody a neskôr zarmútil pohľad na obrovské
          rúbaniská. Cestou späť sa Peťo, Marcel a Ľuboš rozhodli predĺžiť si
          etapu obklukou cez Martin.
        </Odsek>
        <Nadpis>Epilóg – 134 km</Nadpis>
        <Odsek>
          Marcel s Ľubošom absolvovali aj cestu z TdO na bicykli. Kúsok sa s
          nimi zviezol aj Peťo, ktorý sa po chvíľke odpojil a išiel na vlak do
          Vrútok.
        </Odsek>
      </Article>
    </>
  );
}
