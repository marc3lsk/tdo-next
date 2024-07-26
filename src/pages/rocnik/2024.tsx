import Head from "next/head";
import Clanok from "../../components/Clanok";
import ImgHeader from "../../../public/rocnik/header2024.jpg";
import ImgEpilog from "../../../public/rocnik/2024/epilog.jpg";
import Img2Etapa from "../../../public/rocnik/2024/2etapa.jpg";
import Img1Etapa from "../../../public/rocnik/2024/1etapa.jpg";
import ImgProlog from "../../../public/rocnik/2024/prolog.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2024 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2024" className="w-full" />
      </Galeria>
      <Clanok>
        <Nadpis prvy>0-tá etapa – 105 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={ImgProlog} alt="0-tá etapa – 105 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Odsek>
          0-tú etapu už 13-tého ročníka TdO odštartovali z Nitry ako inak Marcel a Ľuboš B.. V Ivanke pri Nitre sa k ním pridali Mišo a Paľo. Mišo nastúpil na 0-tú etapu po 3 rokoch, Paľo dokonca po
          4. Paľova účasť sa môže javiť ako prekvapujúca, ale treba podotknúť, že túto sezónu jazdi na cestnom bicykli. Bolo to aj vidieť. Vždy, keď sa do toho aspoň trochu oprel, dostával Ľuboša a
          Miša jazdiacich na krosových bicykloch do červených čísel. V zjazdoch ešte Paľo nie je so svojim novým bicyklom úplne vžitý a tak v jednej zákrute skončil v žihľave. Našťastie sa mu okrem
          popŕhlenia nič iné nestalo. Po obede v Rybníku sa pelotón dostal až do Štiavnických vrchov. Tu sa chalani rozdelili, Mišo s Paľom sa rozhodli pošetriť sily na ďalšie etapy a v kopci mierne
          spomalili, Ľuboš s Marcelom ich počkali pri Veľkom Richňavskom tajchu, presnejšie s nohami v ňom. V zjazde do Banskej Štiavnice zabudol Mišo odbočiť, Ľuboš s Marcelom išli za ním aby ho
          ohlásili a tak na chatu prišiel prvý Paľo, ktorý kvôli svojmu konzervatívnemu zjazdu nevidel, že ostatní išli zle. Na chate sa k chalanom pridal Ľuboš K. a všetci spolu išli na spoločnú
          večeru do známeho miestneho pivovaru. 2 pečené bravčové kolená boli nad ich sily a tak zostalo koleno aj pre Jura, ktorý sa k pelotónu pripojil na druhý deň.
        </Odsek>
        <Nadpis>1 - etapa – 75 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={Img1Etapa} alt="1 - etapa – 75 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Odsek>
          Ráno pred etapou doplnil pelotón Juro, ale podľa očakávania si náročná 0-tá etapa vyžiadala svoju daň a Paľo pre únavu na etapu nenastúpil. Na začiatku etapy potrebovali chalani vyšliapať
          von z Banskej Štiavnice a Ľuboš K. začal naozaj z ostra. Vydržal však len 100 m a potom sa trápil. Na križovatke 2 km pred vrcholom to vyzeralo, že bude grcať a tak sa rozhodol, že nepôjde
          úplne hore ale spustí sa do Sklených Teplíc, kde počká na chalanov. Napodobnil však Ľuboša B. z roku 2014 a hneď na prvej križovatke zle odbočil. Spustil sa tak až do Banskej Belej. Zvyšná
          štvorica si po vyšliapaní kopčeka vychutnala na vrchole pivo, resp. kofolu, pretože pred dlhým zjazdom potrebovali uschnúť. Po dlhom zjazde nasledoval približne 5 km rovinatý úsek do
          reštaurácie v Lehôtke pod Brehmi. Ľuboš K. dorazil, keď už boli všetci najedení. Nečudo, musel ísť až cez Hronskú Breznicu. V tomto momente mal zo všetkých v nohách najviac kilometrov a to
          si nemal s kým prestriedať. Z obedu už pokračoval späť do Štiavnice s chalanmi. Bolo to však do dlhého tiahleho kopca a obával sa, že na to už nebude mať dostatok síl a preto zavolal Paľovi,
          aby po neho prišiel na aute. Za Sklenými Teplicami zistil, že by to dal, ale Paľo už bol na ceste, tak sa nechal odviesť. Aspoň mal pelotón so sebou na kúsku etapy aj sprievodné vozidlo.
          Marcel s Ľubošom B. sa rozhodli, že si dajú ešte bonus –vrch Sitno, Juro s Mišom išli na chatu. V stúpaní na Sitno Marcel jasne dokázal, že prišiel v životnej forme. V druhej polovici kopca
          Ľuboš nestíhal jeho tempu. A nebolo to len preto, že mu nešiel vpredu zaradiť najľahší prevodový stupeň a preto musel isť takmer celý kopec silovo. V zjazde zo Sitna pred nimi skočila cez
          cestu srnka, zaregistrovali ju však už predtým a preto sa z ďaleka nejednalo o kolíznu situáciu. Po návrate na chatu nasledovala regenerácia vo vírivke a grilovačka.
        </Odsek>
        <Nadpis>2 – etapa – 63 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={Img2Etapa} alt="2 – etapa – 63 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Odsek>
          Na 2. etapu nastúpil kompletný 6-členný pelotón, teda aj oddýchnutý Paľo. Prvých 12 km až do Prenčova bolo z kopca. Teda okrem malého kopčeka k loveckému zámku vo Svätom Antone, ktorý Ľuboš
          K. zobral útokom. Jediný jeho nástup neignoroval Ľuboš B., ktorý išiel tesne pred vrcholom cez neho. Z Prenčova to bolo až k Počúvadlianskemu jazeru hore-dole, ale najmä hore. Marcel si
          vymenil bicykel s Ľubošom K. a kvôli chýbajúcim prevodom do pomala musel isť svižne. Paľo sa obetoval a išiel až k Počúvadlianskemu jazeru s Marcelom v jeho tempe. Obdivuhodný výkon v podaní
          Paľa, najmä ak zoberieme k úvahe jeho šprintérsku postavu. Ľubošovi K. čiastočne pomohol Marcelov bicykel, ale aj tak sa trápil, únavu zo sólovej jazdy z 1. etapy bolo cítiť. Juro, Mišo a
          Ľuboš B. neporušili hlavný pilier Tour de Orava – jednotu a zostali s Ľubošom K. až po Počúvadlianske jazero, resp. do posledného kilometra. Tu sa všetci 6 spoločne naobedovali a potom to
          mali na vrchol stúpania ešte 3 km do kopca. Kilometer pred vrcholom predviedol Ľuboš B. nástup v štýle Pogačara a s prehľadom prišiel na vrchol prvý. Tu sa chalani rozdelili, Paľo, Juro,
          Mišo a Ľuboš K. sa spustili doprava, na chatu cez Štiavnické Bane. Marcel s Ľubošom B. išli doľava a spustili sa k bonusovej horskej prémii, vyšliapali si to do Banskej Štiavnice z
          Hodruše-Hámrov. Ani jeden z dvojice netlačil úplne na pílu a tak prišli na vrchol spolu. Treba ale podotknúť, že keby Marcel Ľubošovi neopravil prehadzovačku, tak Ľuboš by mal problémy kopec
          vôbec vyšliapať. Chalani, ktorí si nevyšliapali bonusový kopec, vypotili tie tekutiny v saune na chate. V saune bol aj Ľuboš B., ale iba 2 krát, lebo po prémii mu toho už nezostalo veľa, čo
          by mohol vypotiť.
        </Odsek>
        <Nadpis>Epilóg – 100 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={ImgEpilog} alt="Epilóg – 100 km" className="mb-5 mt-3 w-full" />
        </Galeria>
        <Odsek>
          Mišo s Paľom sa ponáhľali za rodinami a preto využili ponuku od Ľuboša K. a nechali sa späť z Tour de Orava odviesť. Na bicykloch išla teda domov len stará známa dvojica, Ľuboš B. a Marcel.
          Najprv si to vyšliapali k Počúvadlianskemu jazeru, odkiaľ to potom mali hore-dole, tento krát však najmä dole. Nakoľko bola nedeľa, prvá zástavka bola až na čerpacej stanici v Tlmačoch po
          vyše 50 km. Od Kozároviec išli po totožnej trase ako v epilógu 2021. Zaujímavosťou tohto ročníka je, že bola prerušená dlhoročná kontinuita ilegálneho pokrového turnaja. Takisto sa
          neuskutočnil typický sanitárny deň, nakoľko boli borci ubytovaný vo Wellness dome u námorníka. Po celú dobu pobytu sa teda mohli potiť v saune a najmä priebežne regenerovať anus vo vírivke.
        </Odsek>
      </Clanok>
    </>
  );
}
