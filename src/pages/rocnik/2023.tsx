import Head from "next/head";
import Clanok from "../../components/Clanok";
import ImgHeader from "../../../public/rocnik/header2023.jpg";
import ImgEpilog from "../../../public/rocnik/2023/epilog.jpg";
import ImgKralovska from "../../../public/rocnik/2023/kralovska.jpg";
import Img1Etapa from "../../../public/rocnik/2023/1etapa.jpg";
import ImgProlog from "../../../public/rocnik/2023/prolog.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2023 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2023" className="w-full" />
      </Galeria>
      <Clanok>
        <Nadpis prvy>0-tá etapa – 139 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={ImgProlog} alt="0-tá etapa – 139 km" className="mt-3 mb-5 w-full" />
        </Galeria>
        <Odsek>
          Ľuboš B. a Marcel opäť neporušili tradíciu a TdO začali 0-tou etapou. Ľuboš vyrazil na bicykli už z Nitry, Marcel sa rozhodol trochu pošetriť chrbát a odviezol sa vlakom do Leopoldova,
          odkiaľ už pokračovali spolu. Prvé spoločné kilometre sa rozhodol ťahať Marcel a bolo vidieť, že svoj bicykel upgradol takmer na cesťák a taktiež že prišiel možno vo svojej životnej
          cyklistickej forme. Za Brezovou pod Bradlom si chalani užili niekoľko typických Záhoráckych kopcov a prekročením Baťovho kanála zároveň prekročili aj Česko-Slovenskú hranicu. To už nebolo
          ďaleko do vinárskej obce Mutěnice - historicky prvej dejiskovej obce TdO.
        </Odsek>
        <Nadpis>1 - etapa – 63 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={Img1Etapa} alt="1 - etapa – 63 km" className="mt-3 mb-5 w-full" />
        </Galeria>
        <Odsek>
          Etapu absolvoval kompletný pelotón TdO 2023, t.j. Ľuboša s Marcelom doplnili Paľo, Juro a Mišo. Športový riaditeľ Marcel zakomponoval do trasy niekoľko cyklotrás v rôznom teréne, miestami to
          pripomínalo náročné jarné klasiky. V romantickom prostredí viníc navštívili kaplnku na kopci Hradištěk a následne zámok Lednice. V kaviarničke, v ktorej sa nedalo platiť kartou, tŕpli, či im
          bude stačiť Ľubošových 500 KČ, alebo bude musieť niekto ísť umývať riad. Nakoniec im ešte zostalo 100 KČ. Takmer pred koncom etapy raz zle odbočili, čo vidieť na mape malou slučkou.
        </Odsek>
        <Nadpis>Športový a sanitárny deň</Nadpis>
        <Odsek>
          Borci sa vydali zregenerovať anus na kúpalisko do Hodonína. Samozrejmosťou bolo vyskúšanie všetkých miestnych atrakcii. Ľuboš prehral stávku s Paľom, nakoľko Juro nenašiel odvahu skočiť do
          vody z 3,5 m mostíka. Marcelovi, Ľubošovi a Paľovi skočiť nerobilo problém. Paľovi sa stal osudným priateľský zápas v plážovom volejbale, pri ktorom utrpel úraz palca na ruke. Podvečer sa
          ešte uskutočnila prechádzka k miestnej rozhľadni, kde bola zhodou okolností živá hudba.
        </Odsek>
        <Nadpis>2 – kráľovská etapa – 88 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={ImgKralovska} alt="2 – kráľovská etapa – 88 km" className="mt-3 mb-5 w-full" />
        </Galeria>
        <Odsek>
          Paľo ukázal, že je veľký bojovník a preto nastúpil na kráľovskú etapu aj napriek zraneniu. Po niečo vyše 20 km však usúdil, že nemá zmysel ísť cez bolesť a rozhodol sa nepokračovať v etape a
          vrátiť sa do Mutěnic. Nemohol tak absolvovať dvakrát cestu cez Ždánický les po dvoch rôznych cyklotrasách. Pred prvými horskými prémiami sa Juraj B. rozhodol takticky zhodiť váhu v toitoi
          wc-saune vo dvore miestneho pohostinstva. Pred druhými sa posilnili borci štrúdľou na ekofarme. Po návrate do Mutěnic si Marcel s Ľubošom dopriali ešte malý bonus – vyšliapali si k
          rozhľadni. Treba podotknúť, že Mišo absolvoval tento ročník TdO na horskom bicykli, čo zvyšuje jeho športové výkony. Večer pozval Mišo chalanov na pizzu a pohárik k príležitosti jeho
          narodenín. Po večeri nasledoval ilegálny pokrový turnaj s triumfom Miša.
        </Odsek>
        <Nadpis>Epilóg – 142 km</Nadpis>
        <Galeria>
          <ObrazokGalerie img={ImgEpilog} alt="Epilóg – 142 km" className="mt-3 mb-5 w-full" />
        </Galeria>
        <Odsek>
          Ľuboš a Marcel sa napriek ponukám na odvoz rozhodli vrátiť do Nitry na bicykli. Záhorácke stúpania absolvovali v miernom tempe. Teda okrem toho posledného. Marcel sa totiž rozhodol stúpanie
          za Prietržou ísť bomby. Podarilo sa mu dostať Ľuboša najprv do červených čísel a následne aj utrhnúť. Ďalším stúpaním bolo stúpanie na Dobrú Vodu, takmer kilometrová stena, ktoré bolo
          najťažším kopcom v itinerári TdO za posledné roky. Toto stúpanie absolvovali bok po boku a v Dobrej Vode sa osviežili na kúpalisku. Osviežení pokračovali do druhej polovice etapy. Mali za
          sebou síce už väčšinu stúpaní, ale zato ich čakala vysoká horúčava. Na železnom železničnom moste v Hlohovci si vychutnali výhľad na Váh a prejazd vlaku aj s poriadnym rámusom. Za mostom ich
          čakalo ešte pár relatívne kratších stúpaní a potom príjazd do Nitry cyklocestou popri rieke.
        </Odsek>
        <Nadpis>Historický rebríček – počet účastí na TdO:</Nadpis>
        <Odsek>
          <ul>
            <li>12 – Paľo, Ľuboš B.</li>
            <li>11 – Mišo, Juro</li>
            <li>10 – Marcel</li>
            <li>8 – Peťo, Ľuboš K.</li>
            <li>3 – Boris</li>
            <li>2 – Miro</li>
          </ul>
        </Odsek>
      </Clanok>
    </>
  );
}
