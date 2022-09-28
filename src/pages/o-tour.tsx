import Head from "next/head";
import Article from "../components/Article";
import ZltyDres from "../../public/dresy/zlty.jpg";
import ZelenyDres from "../../public/dresy/zeleny.jpg";
import BodkovanyDres from "../../public/dresy/bodkovany.jpg";
import BielyDres from "../../public/dresy/biely.jpg";
import TechnickePoruchy from "../../public/index/technicke poruchy.jpg";
import ZltyDresSmall from "../../public/dresy/zlty_small.jpg";
import ZelenyDresSmall from "../../public/dresy/zeleny_small.jpg";
import BodkovanyDresSmall from "../../public/dresy/bodkovany_small.jpg";
import BielyDresSmall from "../../public/dresy/biely_small.jpg";

export default function Page() {
  return (
    <>
      <Head>
        <title>Čo je Tour de Orava</title>
      </Head>
      <Article>
        <p>
          <strong>Tour de Orava</strong> (doslova: Okružná jazda po Orave) sú
          etapové preteky nedopujúcich cyklistov, trvajúce asi päť dní v lete.
          História vzniku siaha do roku 2009, kedy koncom augusta štvorica
          neskorších zakladateľov TdO absolvovala po prvý krát jednodňovú
          cykloklasiku v okolí Nitry. Z klasiky sa stala tradícia, ktorú
          organizovali minimálne raz do roka, až sa napokon rozhodli usporiadať
          etapové preteky. A tak sa v roku 2012 po prvý krát uskutočnila Tour de
          Orava, ktorej základným pilierom je jednota. Myšlienka Tour de Orava
          sa rýchlo rozšírila a dodnes sa pelotón TdO stihol zdvojnásobiť. Dnes
          je toto podujatie jednou z najdôležitejších športových udalostí roka.
        </p>
        <strong className="mt-5 block">Tričká</strong>
        <p>
          Preteky sú spojené s niekoľkými súťažami, ku ktorým je obyčajne
          pridružené farebné tričko. Aktuálny držiteľ ocenenia je oprávnený
          nosiť počas jazdy príslušné tričko.
        </p>
        <div className="mt-5 flex space-x-5">
          <img src={ZltyDres.src} alt="Žltý dres" className="h-full w-28" />
          <p>
            <strong>Žlté tričko</strong> nosí vedúci jazdec celých pretekov a
            cení sa zo všetkých najviac. Po skončení pretekov je vedúci jazdec
            vyhlásený za celkového víťaza.
          </p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ZelenyDres.src} alt="Zelený dres" className="h-full w-28" />
          <p>
            <strong>Zelené tričko</strong> je udeľované za šprintérske body. Na
            konci každej etapy sa tieto body udelia jazdcom, ktorí skončia prví,
            druhí atď. V priebehu etapy možno získať nejaké body aj za
            najrýchlejší prejazd určitými kontrolnými miestami.
          </p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img
            src={BodkovanyDres.src}
            alt="Bodkovaný dres"
            className="h-full w-28"
          />
          <p>
            <strong>Bodkované tričko</strong> je určené pre kráľa hôr. Na
            vrchole každého výjazdu sú najrýchlejším jazdcom rozdeľované body.
          </p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={BielyDres.src} alt="Biely dres" className="h-full w-28" />
          <p>
            <strong>Biele tričko</strong> je obdobou žltého trička, je však
            určené jazdcom, ktorí na pretekoch štartujú po prvý krát.
          </p>
        </div>
        <strong className="mt-5 block">Bodovanie</strong>
        <p>
          Bodové ohodnotenie prémii závisí od počtu aktívnych pretekárov na
          danej prémii. Posledný na prémii je bez bodu a každý pred ním má o bod
          viac, pričom maximum možných získaných bodov je päť. Pri rovnosti
          bodov o víťazovi rozhodujú vyššie umiestnenia v danej kategórii. Každý
          jazdec môže získať len jeden dres. Ak by vyhral viac získava len ten
          cennejší a ostatné prechádzajú na ďalšieho jazdca v poradí. Po každej
          horskej prémii sa všetci jazdci čakajú, ako aj po každom zjazde. Každá
          etapa má maximálne dve prémie. Jednu horskú (spravidla vrch
          najvyššieho kopca) a jednu rýchlostnú (spravidla v domovskej dedine).
        </p>
        <strong className="mt-5 block">Súťaž družstiev</strong>
        <p>
          Mužstvo, ktoré skončí ako posledné musí v posledný večer zabezpečiť
          občerstvenie na afterparty a v posledný deň upratovať chatu.
        </p>
        <strong className="mt-5 block">História</strong>
        <p>Najviac celkových víťazstiev – 2x Pavol L. (2013, 2014) </p>
        <p>Najviac získaných prémii – Michal S. (8)</p>
        <strong className="mt-5 block">Škandály</strong>
        <p>
          Škandály na TdO Škandálov v ročníku 2013 bolo mnoho a boli výlučne v
          réžii Ľuboša B. ktorý často prehrával za záhadných okolností, keď sa
          mu zasekla kapsa do kolesa, padla mu retiazka, pošmykol sa mu pedál,
          neuhol sa mu strom, nedal mu prednosť kamión alebo pár metrov pred
          cieľom stretol strýka a musel zosadnúť.
        </p>
        <strong className="mt-5 block">Technické poruchy</strong>
        <p>
          V ročníku 2013 sa pár kilometrov pred koncom aktuálne vedúcemu
          jazdcovi Pavlovi L. prihodil defekt. Ostatní členovia jeho tímu sa
          rozhodli pokračovať ďalej bez neho. Ostal s ním len Juraj B. za čo by
          si určite zaslúžil cenu fair play keby sa taká udeľuje. Ani toto mu
          však nezabránilo v celkovom víťazstve.
        </p>
        <img
          src={TechnickePoruchy.src}
          alt="Technické poruchy"
          className="mt-3"
        />
        <strong className="mt-5 block">Zranenia</strong>
        <p>
          V ročníku 2015 spadol Peter Č. potom, čo mu chcel Paľo L. zablahoželať
          k víťazstvu na horskej prémii. Peťo však zabudol, že má obuté tretry a
          blahoželanie neustál. Z pádu si našťastie odniesol len ponaučenie.
        </p>
        <strong className="mt-5 block">Víťazi</strong>
        <strong className="mt-5 block">2016</strong>
        <div className="mt-5 flex space-x-5">
          <img src={ZltyDresSmall.src} alt="2016 Žltý dres Marcel B." />
          <p>Marcel B.</p>
        </div>
        <strong className="mt-5 block">2015</strong>
        <div className="mt-5 flex space-x-5">
          <img src={ZltyDresSmall.src} alt="2015 Žltý dres Peter Č." />
          <p>Peter Č.</p>
        </div>
        <strong className="mt-5 block">2014</strong>
        <div className="mt-5 flex space-x-5">
          <img src={ZltyDresSmall.src} alt="2014 Žltý dres Pavol L." />
          <p>Pavol L.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ZelenyDresSmall.src} alt="2014 Zelený dres Michal S." />
          <p>Michal S.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img
            src={BodkovanyDresSmall.src}
            alt="2014 Bodkovaný dres Peter Č."
          />
          <p>Peter Č.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={BielyDresSmall.src} alt="2014 Biely dres Marcel B." />
          <p>Marcel B.</p>
        </div>
        <strong className="mt-5 block">2013</strong>
        <div className="mt-5 flex space-x-5">
          <img src={ZltyDresSmall.src} alt="2013 Žltý dres Pavol L." />
          <p>Pavol L.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={ZelenyDresSmall.src} alt="2013 Zelený dres Michal S." />
          <p>Michal S.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img
            src={BodkovanyDresSmall.src}
            alt="2013 Bodkovaný dres Peter Č."
          />
          <p>Peter Č.</p>
        </div>
        <div className="mt-5 flex space-x-5">
          <img src={BielyDresSmall.src} alt="2013 Biely dres Juraj B." />
          <p>Juraj B.</p>
        </div>
        <strong className="mt-5 block">2012</strong>
        <div className="mt-5 flex space-x-5">
          <img src={ZltyDresSmall.src} alt="2012 Žltý dres Ľuboš B." />
          <p>Ľuboš B.</p>
        </div>
      </Article>
    </>
  );
}
