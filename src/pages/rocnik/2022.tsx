import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2022.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2022 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie img={ImgHeader} alt="Ročník 2022" className="w-full" />
      </Galeria>
      <Article>
        <Nadpis prvy>0-tá etapa – 89 km (24 km)</Nadpis>
        <Odsek>
          Ľuboš B. a Marcel zahájili TdO už tradične 0-tou etapou. Z Nitry sa
          odviezli vlakom do Žiliny a odtiaľ išli po cyklotrase popri Vodnom
          diele Žilina do Varína. Tam ich prekvapili stavbári a oplotené
          stavenisko na cyklotrase a tak im nezostávalo nič iné, ako prebrodiť
          rieku. Cestu k najlepšej zmrzline v kraji v Belej zvolili po novej
          cyklotrase. Bola to jednak krajšia, ale najmä bezpečnejšia trasa.
          Nakoľko však posledný most nebol ešte dokončený, museli po druhý krát
          prebrodiť rieku. Od križovatky na Lutiše sa chalani napojili na trasu
          kráľovskej etapy 1. ročníka. Nakoľko sa Marcel 1. ročníka nezúčastnil,
          bola to pre neho premiéra na Terchovskom aj Zázrivskom kopci. Ľuboš si
          ich raz zopakoval aj mimo TdO. Z Oravskej Lesnej po pauze na pivo to
          mali chalani k Oravskej priehrade viac-menej len dole kopcom. Paľo,
          Mišo, Juro a Boris sa dopravili k Oravskej priehrade na autách. V
          rámci rozbicyklovania sa pred Tour sa previezli do Klinu k soche
          Krista.
        </Odsek>
        <Nadpis>Športový a sanitárny deň</Nadpis>
        <Odsek>
          Pre nepriaznivé počasie bol športový a sanitárny deň presunutý pred 1.
          etapu. Ľuboš B. a Boris usúdili, že síce počasie nie je najvhodnejšie
          na kráľovskú etapu, ale bicyklovať sa predsa len dá. Išli preto aspoň
          na otočku do Trstenej na kávičku k Ľubošovej sesternici. Na penzióne
          sa zatiaľ uskutočnil športový deň. Turnaj v pingpongu vyhral
          Michalides. Regeneráciu si jazdci dopriali v najväčšom poľskom
          aquaparku Chochołowskie Termy. Večer sa uskutočnil ilegálny pokrový
          turnaj.
        </Odsek>
        <Nadpis>1 – kráľovská etapa – 96 km (93 km)</Nadpis>
        <Odsek>
          Na kráľovskú etapu nastúpil 7 členný pelotón. Od začiatku bolo cítiť,
          že Ľuboš K. sa nezúčastnil 0-tej etapy a preto nebol pred tour
          dostatočné rozjazdený a tak mu tempo balíka robilo problémy. Pelotón
          sa presunul cez priehradný múr do Trstenej. Odtiaľ pokračovali po
          cyklotrase Trstená – Nowy Targ. Pri odbočke na Zakopané nastalo
          rozdelenie pelotónu. Juro, Paľo a Ľuboš K. sa rozhodli pokračovať do
          Noweho Targu, nakoľko boli nadšený z cyklotrasy plnej drevených
          mostov, altánkov a krásnych výhľadov. Marcel, Mišo, Boris a Ľuboš B.
          sa rozhodli ísť do Zakopaného, cestou kam ich čakala jedna horská
          prémia. Po obede v Zakopanom sa vrátili po MTB cyklotrase. Čakalo ich
          tak o niečo menšie stúpanie ako cestou tam, ale aj kamenisté úseky,
          kde museli tlačiť bicykle. Z Trstenej išiel Marcel priamo na penzión,
          ostatní počkali pri radlery na chalanov vracajúcich sa z Noweho Targu.
          Opätovne spojený pelotón sa spoločne vrátil na penzión. Teda okrem
          Ľuboša B., ktorý sa ešte zastavil u sesternici na Segedín, aby upevnil
          svoje vedenie v súťaži o fekálnika roka.
        </Odsek>
        <Nadpis>2 – etapa – 52 km</Nadpis>
        <Odsek>
          Na 2. etapu nenastúpili Boris, ktorý musel odcestovať domov a Paľo,
          ktorého prišiel navštíviť svokor na motorke. Chalani absolvovali okruh
          cez Mútne. Približne polovica etapy bola po cestách, ktorými viedla
          prvá kráľovská etapa 2. ročníka, väčšinou sa ale išlo v opačnom smere
          ako vtedy. Po návrate z etapy sa borci previezli na jachte a zaskákali
          si z nej do priehrady. Navečer sa ešte uskutočnil kráľovský tenisový
          zápas medzi Michalidesom a Palom. Michalides vyhrával už 1:4 na gemy,
          Palovi sa však podaril historický obrat a set vyhral 6:4. Borci
          ukončili deň zápasom v nohejbale.
        </Odsek>
        <Nadpis>Epilóg – 8 km</Nadpis>
        <Odsek>
          Ľuboš B. a Marcel mali v pláne jazdu do Liptovského Mikuláša cez
          Kvačianskú dolinu, daždivé počasie však bolo proti. Paľo ich preto
          odviezol do Trstenej, odkiaľ sa Oravskou strelou presunuli do
          Kraľovian. Tam absolvovali jazdu do motorestu na obed a späť, pričom
          spiatočná jazda bola v daždi. Chalani nakoniec pricestovali vlakom až
          do Nitry, nakoľko počasie im neumožnilo pokračovať na bicykloch z
          Piešťan, resp. Leopoldova.
        </Odsek>
        <Nadpis>Historický rebríček – počet účasti na TdO:</Nadpis>
        <Odsek>
          <ul>
            <li>11 – Paľo, Ľuboš B.</li>
            <li>10 – Mišo, Juro</li>
            <li>9 – Marcel</li>
            <li>8 – Peťo, Ľuboš K.</li>
            <li>3 – Boris</li>
            <li>2 – Miro</li>
          </ul>
        </Odsek>
      </Article>
    </>
  );
}
