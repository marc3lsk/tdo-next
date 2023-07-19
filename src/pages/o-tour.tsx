import Head from "next/head";
import Clanok from "../components/Clanok";
import ImgZltyDres from "../../public/dresy/zlty.jpg";
import ImgZelenyDres from "../../public/dresy/zeleny.jpg";
import ImgBodkovanyDres from "../../public/dresy/bodkovany.jpg";
import ImgBielyDres from "../../public/dresy/biely.jpg";
import ImgTechnickePoruchy from "../../public/index/technicke poruchy.jpg";
import ImgZltyDresSmall from "../../public/dresy/zlty_small.jpg";
import ImgZelenyDresSmall from "../../public/dresy/zeleny_small.jpg";
import ImgBodkovanyDresSmall from "../../public/dresy/bodkovany_small.jpg";
import ImgBielyDresSmall from "../../public/dresy/biely_small.jpg";
import Nadpis from "../components/Nadpis";
import Odsek from "../components/Odsek";
import Galeria from "../components/Galeria";
import ObrazokGalerie from "../components/ObrazokGalerie";

export default function Page() {
  return (
    <>
      <Head>
        <title>Čo je Tour de Orava</title>
      </Head>
      <Clanok>
        <Odsek>
          <strong>Tour de Orava</strong> (doslova: Okružná jazda po Orave) sú etapové preteky nedopujúcich cyklistov, trvajúce asi päť dní v lete. História vzniku siaha do roku 2009, kedy koncom
          augusta štvorica neskorších zakladateľov TdO absolvovala po prvý krát jednodňovú cykloklasiku v okolí Nitry. Z klasiky sa stala tradícia, ktorú organizovali minimálne raz do roka, až sa
          napokon rozhodli usporiadať etapové preteky. A tak sa v roku 2012 po prvý krát uskutočnila Tour de Orava, ktorej základným pilierom je jednota. Myšlienka Tour de Orava sa rýchlo rozšírila a
          dodnes sa pelotón TdO stihol zdvojnásobiť. Dnes je toto podujatie jednou z najdôležitejších športových udalostí roka.
        </Odsek>
        <Nadpis>Tričká</Nadpis>
        <Odsek>Preteky sú spojené s niekoľkými súťažami, ku ktorým je obyčajne pridružené farebné tričko. Aktuálny držiteľ ocenenia je oprávnený nosiť počas jazdy príslušné tričko.</Odsek>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZltyDres.src} alt="Žltý dres" className="h-full w-28" />
          <Odsek>
            <strong>Žlté tričko</strong> nosí vedúci jazdec celých pretekov a cení sa zo všetkých najviac. Po skončení pretekov je vedúci jazdec vyhlásený za celkového víťaza.
          </Odsek>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZelenyDres.src} alt="Zelený dres" className="h-full w-28" />
          <Odsek>
            <strong>Zelené tričko</strong> je udeľované za šprintérske body. Na konci každej etapy sa tieto body udelia jazdcom, ktorí skončia prví, druhí atď. V priebehu etapy možno získať nejaké
            body aj za najrýchlejší prejazd určitými kontrolnými miestami.
          </Odsek>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgBodkovanyDres.src} alt="Bodkovaný dres" className="h-full w-28" />
          <Odsek>
            <strong>Bodkované tričko</strong> je určené pre kráľa hôr. Na vrchole každého výjazdu sú najrýchlejším jazdcom rozdeľované body.
          </Odsek>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgBielyDres.src} alt="Biely dres" className="h-full w-28" />
          <Odsek>
            <strong>Biele tričko</strong> je obdobou žltého trička, je však určené jazdcom, ktorí na pretekoch štartujú po prvý krát.
          </Odsek>
        </div>
        <Nadpis>Bodovanie</Nadpis>
        <Odsek>
          Bodové ohodnotenie prémii závisí od počtu aktívnych pretekárov na danej prémii. Posledný na prémii je bez bodu a každý pred ním má o bod viac, pričom maximum možných získaných bodov je päť.
          Pri rovnosti bodov o víťazovi rozhodujú vyššie umiestnenia v danej kategórii. Každý jazdec môže získať len jeden dres. Ak by vyhral viac získava len ten cennejší a ostatné prechádzajú na
          ďalšieho jazdca v poradí. Po každej horskej prémii sa všetci jazdci čakajú, ako aj po každom zjazde. Každá etapa má maximálne dve prémie. Jednu horskú (spravidla vrch najvyššieho kopca) a
          jednu rýchlostnú (spravidla v domovskej dedine).
        </Odsek>
        <Nadpis>Súťaž družstiev</Nadpis>
        <Odsek>Mužstvo, ktoré skončí ako posledné musí v posledný večer zabezpečiť občerstvenie na afterparty a v posledný deň upratovať chatu.</Odsek>
        <Nadpis>História</Nadpis>
        <Odsek>
          Najviac celkových víťazstiev – 2x Pavol L. (2013, 2014)
          <br />
          Najviac získaných prémii – Michal S. (8)
        </Odsek>
        <Nadpis>Škandály</Nadpis>
        <Odsek>
          Škandály na TdO Škandálov v ročníku 2013 bolo mnoho a boli výlučne v réžii Ľuboša B. ktorý často prehrával za záhadných okolností, keď sa mu zasekla kapsa do kolesa, padla mu retiazka,
          pošmykol sa mu pedál, neuhol sa mu strom, nedal mu prednosť kamión alebo pár metrov pred cieľom stretol strýka a musel zosadnúť.
        </Odsek>
        <Nadpis>Technické poruchy</Nadpis>
        <Odsek>
          V ročníku 2013 sa pár kilometrov pred koncom aktuálne vedúcemu jazdcovi Pavlovi L. prihodil defekt. Ostatní členovia jeho tímu sa rozhodli pokračovať ďalej bez neho. Ostal s ním len Juraj B.
          za čo by si určite zaslúžil cenu fair play keby sa taká udeľuje. Ani toto mu však nezabránilo v celkovom víťazstve.
        </Odsek>
        <Galeria>
          <ObrazokGalerie img={ImgTechnickePoruchy} alt="Technické poruchy" className="mt-3" />
        </Galeria>
        <Nadpis>Zranenia</Nadpis>
        <Odsek>
          V ročníku 2015 spadol Peter Č. potom, čo mu chcel Paľo L. zablahoželať k víťazstvu na horskej prémii. Peťo však zabudol, že má obuté tretry a blahoželanie neustál. Z pádu si našťastie
          odniesol len ponaučenie.
        </Odsek>
        <Nadpis>Víťazi</Nadpis>
        <Nadpis>2016</Nadpis>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZltyDresSmall.src} alt="2016 Žltý dres Marcel B." />
          <p>Marcel B.</p>
        </div>
        <Nadpis>2015</Nadpis>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZltyDresSmall.src} alt="2015 Žltý dres Peter Č." />
          <p>Peter Č.</p>
        </div>
        <Nadpis>2014</Nadpis>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZltyDresSmall.src} alt="2014 Žltý dres Pavol L." />
          <p>Pavol L.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZelenyDresSmall.src} alt="2014 Zelený dres Michal S." />
          <p>Michal S.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgBodkovanyDresSmall.src} alt="2014 Bodkovaný dres Peter Č." />
          <p>Peter Č.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgBielyDresSmall.src} alt="2014 Biely dres Marcel B." />
          <p>Marcel B.</p>
        </div>
        <Nadpis>2013</Nadpis>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZltyDresSmall.src} alt="2013 Žltý dres Pavol L." />
          <p>Pavol L.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZelenyDresSmall.src} alt="2013 Zelený dres Michal S." />
          <p>Michal S.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgBodkovanyDresSmall.src} alt="2013 Bodkovaný dres Peter Č." />
          <p>Peter Č.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ImgBielyDresSmall.src} alt="2013 Biely dres Juraj B." />
          <p>Juraj B.</p>
        </div>
        <Nadpis>2012</Nadpis>
        <div className="mt-5 flex space-x-5">
          <img src={ImgZltyDresSmall.src} alt="2012 Žltý dres Ľuboš B." />
          <p>Ľuboš B.</p>
        </div>
      </Clanok>
    </>
  );
}
