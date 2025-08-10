import Head from "next/head";
import Clanok from "../../components/Clanok";
import ImgHeader from "../../../public/rocnik/header2025.jpg";
import Img1Etapa from "../../../public/rocnik/2025/1etapa.jpg";
import Img2Etapa from "../../../public/rocnik/2025/2etapa.jpg";
import Img3Etapa from "../../../public/rocnik/2025/3etapa.jpg";
import ImgProlog from "../../../public/rocnik/2025/prolog.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2025 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2025" className="w-full" />
      </Galeria>
      <Clanok>
        <Nadpis prvy>0-tá etapa – 169 km (prológ 27 km)</Nadpis>
        <Galeria>
          <ObrazokGalerie img={ImgProlog} alt="0-tá etapa – 169 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Galeria>
          <ObrazokGalerie img={Img1Etapa} alt="prológ 27 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Odsek>
          Tento krát sa na 0-tú etapu odhodlala len osvedčená dvojica Marcel – Ľuboš B.. Marcel pôvodne zvažoval kúsok sa odviesť vlakom a ušetriť nudné rovinaté kilometre, čo Ľuboš ihneď zavrhol,
          nakoľko nie sme v prvých ročníkoch Tour de France. Miesto stretnutia bolo pri moste pri Zelokvete, kde Ľuboš nezodpovedne riskoval život jeho prejazdom. O necelé dva týždne most zavreli pre
          jeho havarijný stav, čo iba dokazuje Ľubošovu nezodpovednosť. Odtiaľ približne 70 km po rovine a prvý kopček ich čakal až pred Trenčianskymi Teplicami, kde si dopriali kávičku a koláčik. Po
          kávičke ešte kúsok ku Váhu a následne až do Púchova po Vážskej cyklomagistrále. Stúpanie na Kohútku si dali v konverzačnom tempe a po technickom zjazde sa napojili na cyklotrasu, ktorá ich
          doviedla až ku chate vo Veľkých Karloviciach. 6 km pred chatou stretli Paľa, Jura a Miša, ktorí si spravili prológ k vodnej nádrži Karolinka. Marcelovi sa podarilo po 10 rokoch prekonať
          Peťov bradatý rekord v počte najazdených kilometrov v rámci jedného dňa na TdO a to o 11 km. Gratulujeme!
        </Odsek>
        <Nadpis>1 - etapa – 51 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={Img2Etapa} alt="1 - etapa – 51 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Odsek>
          Kvôli nepriazni počasia si chalani doobeda spravili sanitárny deň a boli zregenerovať anus vo Wellness hotely Horal vo Veľkých Karloviciach (Paľo pozeral cenník toho v Rožňove pod Radhošťem,
          preto nastali po príchode určité nezrovnalosti). Poobede sa počasie umúdrilo a Juro vymyslel etapu na Pustevny. Aby mohli začať šliapať do kopca na Pustevny, museli sa najprv dostať na druhú
          stranu Hostínsko-vsetínskej hornatiny. Na vrchol sa dostali po MTB trase, kde v tých najstrmších pasážach museli všetci tlačiť. Po dlhom zjazde si dali obed v Hornej Bečve, kde zvažovali ako
          ďalej. Bolo zrejmé, že MTB trasa je na cestu späť nezjazdná a preto sa treba cez kopec vrátiť inou, dlhšou trasou. Výstup na Pustevny sa teda pre časovú tieseň nekonal a borci šli hľadať
          cestu späť. Teda okrem Ľuboša, ktorý ešte pokračoval 10 km do Rožnova za sesternicou na pivo. Áno, Ľuboš má sesternicu aj tu. Pri hľadaní vhodnej trasy sa chalani rozdelili. Juraj to dal po
          lesnej ceste. Marcelovi, Mišovi a Paľovi sa cesta nepozdávala a nakoniec to dali cez Soláň. Podľa navigácie a dopravných značiek mala byť cesta uzavretá, ale našťastie pre cyklistov bola
          zjazdná. Hore kopcom bol asfalt odfrézovaný, ale hlavne v zjazde si to užili po novom asfalte. Ľuboš pri dopíjaní piva dostal informáciu od Marcela, že Soláň je prechodný a tak si ho mohol
          tiež vychutnať.
        </Odsek>
        <Nadpis>2 – kráľovská etapa – 100 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={Img3Etapa} alt="2 – kráľovská etapa – 100 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Odsek>
          Na štart kráľovskej etapy sa čakalo na príchod Ľuboša K., ktorý sa len večer predtým vrátil zo sústredenia v Slovinsku. Žiaľ, prekvapenie sa nekonalo a Paľo sa aj v tomto ročníku rozhodol
          vynechať jednu etapu. Prvých 55 km bolo mierne z kopca, po cyklotrase popri rieke Vsetínska Bečva. Prvé kilometre bola cyklotrasa vlastne chodník zo zámkovej dlažby popri hlavnej ceste, čo
          bolo relatívne nebezpečné, najmä pre Ľuboša K. idúcom na cestnom bicykli. Chalani preto išli miestami aj po ceste a odbočku na cyklotrasu preleteli. Juro idúci na konci balíka sa rozhodol
          chalanov nenasledovať a na cyklotrasu odbočil. Balík čakal Jura stále mimo cyklotrasy a ten mysliac si, že je za pelotónom sa dostal pred nich a tak si dal časovku. Chalani sa napojili na
          cyklotrasu a kým sa Jurovi dovolali, ten už bol takmer vo Vsetíne. Pred Vsetínom sa všetko opäť spojilo a pokračovalo sa do Jablůnky, kde pred reštauráciou dostal Juro šmyk na štrku. Z pádu
          si odniesol cestnú lišaj na kolene. Po obede to bol ešte kúsok do Valmezu a odtiaľ nastala zásadná zmena, už sa nešlo z kopca, ale do kopca. Našťastie len mierneho, stále po cyklotrase,
          tento krát popri rieke Rožňovská Bečva. V parku v Rožňove pod Radhoštem sa chlapci trošku posilnili, Juro radlerom, ostatní Aperol spritzom. Z Rožnova sa už išlo rovnakou trasou ako Ľuboš
          deň predtým. 3,5 km pred vrcholom kopca bola ešte pauzička na nealko občerstvenie a frgále. Do 5 km zjazdu išiel prvý Mišo a potvrdil, že je lepší zjazdár ako Ľuboš B., ktorý v technických
          pasážach strácal. Záver zjazdu Mišo vypustil a tak mali napokon rovnaký čas. Marcelovmu bicyklu zostal z minulého roka len rám, aj ten je prestriekaný. Všetky komponenty vymenil s cieľom k
          lepšiemu výkonu a keď sa do toho v zjazde poriadne oprel, znamenalo to o minútu lepší čistý čas v zjazde ako Mišo a Ľuboš B.. Juro je známy ako konzervatívny zjazdár a k tomu v etape utrpel
          zranenie a na Ľubošovi K. už bolo ku konci etapy vidno únavu, preto išli zjazd o niečo pomalšie. 2,5 km pred cieľom sa chalani ešte zastavili na večeru, kde sa k ním pridal Paľo, ktorý si
          spravil podvečernú prechádzku.
        </Odsek>
        <Odsek>Ľuboš B. s Marcelom využili ponuku od Ľuboša K. a domov sa odviezli. Znamenalo to, že prvý krát od roku 2015 nebol epilóg.</Odsek>
      </Clanok>
    </>
  );
}
