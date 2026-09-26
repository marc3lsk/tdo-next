import Head from "next/head";
import Clanok from "../../components/Clanok";
import ImgHeader from "../../../public/rocnik/header2026.jpg";
import ImgProlog from "../../../public/rocnik/2026/prolog.jpg";
import Img1Etapa from "../../../public/rocnik/2026/1etapa.jpg";
import Img2Etapa from "../../../public/rocnik/2026/2etapa.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2026 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2026" className="w-full" />
      </Galeria>
      <Clanok>
        <Nadpis prvy>Prológ – 33 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={ImgProlog} alt="Prológ – 33 km" className="mt-3 mb-5 w-full" />
        </Galeria>
        <Odsek>
          Pelotón TdO sa po 10-tich rokoch vrátil na Horehronie, tento krát však na jeho východnú časť, priamo pod Kráľovú Hoľu. To už je z Nitry relatívne ďaleko a preto sa tento rok prvý krát po 11
          ročníkoch neuskutočnila nultá etapa. Jubilejný 15-ty ročník TdO teda začal spoločným prológom, ale bohužiaľ bez Paľa, ktorý týždeň pred podujatím nešťastné spadol z čerešne a zranil si
          rameno. Pre Paľa je to vôbec prvá neúčasť na TdO. Zo Šumiaca do Telgártu cez cyklotrasu okolo rómskej osady teda vyrazila pätica Marcel, Mišo, Juro, Ľuboš K. a Ľuboš B. Za Telgártom si
          chlapci pozreli prameň Hrona a Chmarošský viadukt. Do Šumiaca sa už vrátili po hlavnej ceste. Ľuboš K. sa rozhodol šetriť sily na kráľovskú etapu, ostatní sa vybrali spraviť si ešte malí
          okruh cez Valkovňu. Juro s Mišom si to ale strihli krížom cez lúku, takže sa do Valkovne ani nedostali. Marcel dostal v náročnom teréne defekt a preto musel do Valkovne bicykel zniesť v
          rukách. Tu s Ľubošom B. počkali na Ľuboša K., ktorý prišiel na aute po Marcela. Späť do Šumiaca už teda Ľuboš B. pokračoval sám.
        </Odsek>
        <Nadpis>1 – kráľovská etapa – 110 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={Img1Etapa} alt="1 – kráľovská etapa – 110 km" className="mt-3 mb-5 w-full" />
        </Galeria>
        <Odsek>
          Kráľovská etapa začala zľahka, vyše 40 km dole kopcom až do Brezna. Celý čas išiel balík spolu a na čele pelotónu sa chalani poctivo striedali. To bolo niečo nevídané. Po kávičke v Brezne sa
          pokračovalo poctivou prácou v balíku takmer až po sedlo Zbojská. Ľuboš K. však pár kilometrov pred sedlom začal mať silnú krízu a začal strácať. Ľuboš B. zobral pre neho tyčinku od Miša a
          zacúval si k Ľubošovi K., aby mu ju mohol podať. Obed v sedle pomohol, Ľuboš K. mohol pokračovať. Po obede sa Ľuboš B. išiel ešte pozrieť k rozhľadni na kopčeku oproti cez cestu, nikto iný
          už nemal záujem. Z rozhľadne videl chalanov, ako sa už stavajú na ceste na zjazd do Tisovca. Nakoľko sa jednalo o dlhý 12 km zjazd, bola tu šanca, že stratu dobehne. Na Marcela a Miša určite
          nie, ale Ľuboš K. a najmä Juro majú povesť konzervatívnych zjazdárov. To sa aj potvrdilo, ku koncu zjazdu dobehol najprv Jura a následne aj Ľuboša. Z Tisovca nasledoval kopček a zjazd do
          Muráňa a tam ďalšia kávička. Po kávičke bola na rade horská prémia cez Muránsku planinu. Juro, Marcel a Ľuboš K. sa na ňu vybrali priamo, Mišo a Ľuboš B. si odbehli ešte pozrieť Syslovisko.
          Bolo zrejme, že pod horskú prémiu prídu z výraznou stratou a chalanov by v stúpaní nemali dobehnúť. Ľuboša K. dobehli až v stúpaní pred chatou, s Marcelom a Jurom sa stretli až na chate.
        </Odsek>
        <Nadpis>2 – etapa – 50 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={Img2Etapa} alt="2 – etapa – 50 km" className="mt-3 mb-5 w-full" />
        </Galeria>
        <Odsek>
          Na 2. etapu bola v pláne rozhľadňa nad Telgártom. Chalani sa najprv vybrali cez les po nespevnenej ceste, ale po asi 2 km sa museli vrátiť na hlavnú cestu, nakoľko niektorí boli na cestných
          bicykloch a pre tie to nebolo prejazdné. Na kávičke v Telgárte, kde sa k chalanom pridal Paľo s manželkou a deťmi, sa zhodli, že na rozhľadňu nemá zmysel pokračovať, pretože by to bolo
          rovnako neprejazdné. Paľo potvrdil, že ako pre emeritného predsedu je pre neho jednota TdO veľmi dôležitá a preto sa rozhodol zúčastniť tohto ročníka aspoň takto symbolicky. Spravil teda
          rodine pekný sobotný výlet. Rodina sa domov vrátila bez neho a on zostal aspoň na poslednú noc, však keď už mal za chatu zaplatené. Nakoľko ale neodjazdil aspoň 1 km, účasť na TdO 2026 sa mu
          nemohla započítať. Na cestu späť do Šumiaca sa chalani rozdelili, Ľuboš B. s Marcelom išli po cyklotrase okolo rómskej osady, ostatní po hlavnej ceste. Spolu sa stretli v reštaurácii pred
          začiatkom stúpania na Kráľovú hoľu. Ľuboš B. s Marcelom si dali len nealko radler a spolu sa vybrali na Chatu pod Kráľovou hoľou, 6,5 km dlhé stúpanie s prevýšením 550 m. Na vrchol Kráľovej
          hole je to až 12 km, prevýšenie 1030 m, ale kvôli uzávere vrchnej polovice stúpania z dôvodu rekonštrukcie si dali za cieľ len Chatu. Ostatní si zatiaľ dali ľahší obed, čoho sa však prvá
          dvojica pred náročným stúpaním obávala. Pri rovnakých bicykloch by bol asi miernym favoritom v stúpaní Marcel. Ten však je na TdO už na štvrtom bicykli, tento krát si vyskladal naozaj rýchli
          cesťák. Naopak Ľuboš investuje len do údržby a na rovnakom bicykli prišiel už po 15-ty krát. Takže od začiatku stúpania sa potvrdilo, že Marcel nebude len mierny favorit, ale Ľubošovi nedal
          najmenšiu šancu a na chatu prišiel s výrazným náskokom. Uvidíme, či sa Ľuboš poučil a na budúci rok ho uvidíme na novom bicykli. Po obede sa vybrali šliapať na chatu aj Juro a Mišo, ktorý si
          s Ľubošom K. vymenil bicykel, išiel teda na Marcelovom starom bicykli. Ľuboš K. s Paľom zostali v reštaurácii čakať na ostatných. Juro sa v 2/3 stúpania otočil a Mišo ďalej pokračoval sám.
          Ľuboš s Marcelom na neho počkali na chate. Tu sa Mišo rozhodol, že napriek zákazu pôjde až na vrchol, Ľuboš s Marcelom sa rozhodli rešpektovať zákaz a začali zjazdovať. Brali to tak, že
          aspoň budú mať dôvod sa sem vrátiť a užiť si celý výstup po novom asfalte. Mišovi sa podarilo dostať až na vrchol, čím ako prvý cyklista v histórii na TdO zdolal kopec s prevýšením viac ako
          1000 m.
        </Odsek>
        <Nadpis>Marcelová časovka – 32 km + sanitárny deň</Nadpis>
        <Odsek>
          Podvečer sa ešte borci vybrali okúpať na Palcmanskú mašu. Marcel sa rozhodol dať si poriadne do tela a vybral sa tam na bicykli. Zbalené plavky a ďalšie veci na kúpanie dal na starosti
          Ľubošovi K., ktorý na ne samozrejme zabudol. Ostatní išli na aute. Našťastie Juro a Ľuboš K. sú veľké fajnovky a do priehrady ani nevošli, takže nakoniec mal Marcel plavky aj na výber.
          Marcel, Mišo, Ľuboš B. a Paľo sa najprv okúpali v priehrade a potom sa po nej povozili na pelikánovi. Spať z maše už išli na aute všetci.
          V aute Ľuboš B. postriekal vodou Miša, ktorý relaxoval na podlahe a dosť ho to nahnevalo. Bola to najväčšia kauza tohto ročníka. Na ďalší deň ale išli autom spolu domov
          a tak im nezostalo nič iné len sa pomeriť, a skončili spolu na nitrianskom kúpalisku.
        </Odsek>
        <Nadpis>Detská Tour de Orava 2026 – 27 km</Nadpis>
        <Odsek>
          Necelé 2 mesiace po TdO sa uskutočnil prvý ročník Detskej TdO pre ratolesti našich borcov. Trať bola jednoduchá, rovinatá z parku na Sihoti do čokoládovne Lýra v Ivanke pri Nitre a späť.
          Zúčastnili sa Paľo s Maťkom a Filipkom, Mišo s Adamkom, Ľuboš K. so Samkom a Maťkom (ten tento ročník ešte v detskej sedačke) a Ľuboš B., ten zatiaľ bez potomka. V strede trasy pri mlyne v
          Krškanoch sa chalani občerstvili nealko nápojmi v bufete, v Lýre si potom dopriali zmrzlinu a kávičku. Pre Maťka K. prišla na aute mamina, aby náhodou cestou späť nezaspal. Občerstvovačka
          bola aj na spiatočnej ceste, tento krát vo Finiši. Túto občerstvovačku vynechal Paľo, ktorý si išiel dať prémiu na Liečebák. Paľo sa dostáva do formy po zranení, ktoré sa mu prihodili
          čerstvo pred TdO. Liečebák bol preto jeho tohtoročnou najťažšou horskou skúškou. S ostatnými sa opätovne stretol v parku. Prvý ročník musíme hodnotiť jednoznačne úspešne a sme radi, že
          môžeme konštatovať, že nám rastu kvalitní borci do pelotónu TdO.
        </Odsek>
      </Clanok>
    </>
  );
}
