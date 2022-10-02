import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2020.jpg";
import ImgDen1 from "../../../public/rocnik/2020/1den.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2020 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie {...ImgHeader} alt="Ročník 2020" className="w-full" />
      </Galeria>
      <Article>
        <Nadpis prvy>0-tá etapa – 129 km</Nadpis>
        <Odsek>
          9-tý ročník TdO nemohol začať inak, ako 0-tou etapou. Z Nitry vyrazila
          dvojica Ľuboš B. a Marcel smerom na Piešťany a po vyšliapaní Havrana a
          jeho následnom zjazde sa stretli v Banke s Peťom. Nasledoval spoločný
          obed v Moravanoch nad Váhom, ktorý absolvoval aj vodič sprievodného
          vozidla – Paľo. Mišo si vychutnal obed od svokry v Piešťanoch, odkiaľ
          sa ponáhľal doplniť pelotón do Moravian. Štvorica borcov následne
          dorazila spolu k Jurčekovi, ktorý ich ponúkol kávičkou, zákuskom a
          ušlo sa aj poldecko. Po prestávke sa vymenili Paľo s Marcelom, ktorý
          teda prevzal sprievodne vozidlo a pripojil sa aj Jurček, pre ktorého
          to bola vôbec prvá účasť na 0-tej etape. Cestou na chatu bol pelotón
          obiehaný ďalším sprievodným vozidlom, za ktorého volantom sedel
          navrátilec do pelotónu – Ľuboš K. Posledný kilometer pred chatou bola
          náročná stena, kde sa viacerí borci rozhodli radšej šetriť sily a
          preto tlačili bicykel.
        </Odsek>
        <Nadpis>1 – etapa – 59 km</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen1}
            alt="1 – etapa - mapa a výškový profil"
            className="mt-3 mb-5 w-full"
          />
        </Galeria>
        <Odsek>
          Pred 1. etapou dorazil na chatu ďalší navrátilec do pelotónu – Boris a
          balík bol teda po dlhej dobe opäť 8-členný. Cieľom 1.etapy bola
          Manínska tiesňava. S výberom etapy mal problém Jurček, ktorý chcel ísť
          na kríž Butkov. Zlé jazyky tvrdia že preto lebo sa obával že sa v
          Manínskej tiesňave zašprajcne. V strmom terénnom stúpaní za Horným
          Lieskovom mala väčšina jazdcov problém s prešmykovaním kolies a bez
          zosadnutia sa toto stúpanie podarilo zdolať len Peťovi a Mišovi. Na
          konci stúpania sa chalani počkali a pokračovali spolu do Manínskej
          tiesňavy. V tiahlom stúpaní všetkých prekvapil Jurček svojim atakom.
          Udržali sa s ním len Mišo a Paľo, a nakoniec aj Ľuboš B., ktorý zle
          zareagoval na atak a vytvorila sa mu menšia medzera, ktorú sa mu dlho
          nedarilo „zalepiť“. Dlhý Jurov atak bol nakoniec moc na Paľa, ktorý
          postupne odpadol z vedúcej skupiny. Vynikajúcu formu okrem Jurčeka
          ukázal aj Marcel, ktorý síce absolútne nezachytil nástup, ale napokon
          sa mu podarilo dostať sa do vedúcej skupiny. Samotnú tiesňavu prešli
          chalani v pomalom tempe a vychutnávali si impozantné výhľady. V závere
          etapy sa z balíka odpútali Marcel s Ľubošom B., ktorí ešte počkali na
          Miša, aby to nemusel ťahať sám. Mišo spomalil ešte pred začiatkom
          záverečnej steny, pod ktorú sa spolu dostali Marcel s Ľubošom B.
          Marcel začal zdolávať stenu z ostra a Ľuboš sa ani nesnažil zachytiť
          jeho tempo. Postupne sa na chatu dostali všetci jazdci. Na večeru
          prišiel aj nováčik TdO, Miro, ktorý sa vlakom dopravil do Púchova a
          odtiaľ na chatu na bicykli.
        </Odsek>
        <Nadpis>Športový + sanitárny deň</Nadpis>
        <Odsek>
          V rámci športového dňa sme sa po 3 rokoch konečne dočkali futbalovej
          odvety. Mišov tím nastúpil bez zmeny, teda Mišo, Peťo a Juro. V
          Paľovom tíme sa opäť objavil Ľuboš B., ale Marcela vystriedal Boris.
          Jurček opäť potvrdzoval životnú formu a najmä jeho zásluhou Mišov tím
          rýchlo viedol 5:1. Ako sa ale neskôr ukázalo, Jurček prepálil tempo a
          nechal sa vystriedať Marcelom, ktorý ale išiel do svojho, t.j. Paľovho
          tímu a k Mišovi putoval Boris. Marcel hneď po príchode na ihrisko
          znížil na 5:2. Následne pridali po góle Luboš, Palo a zase Marcel a
          bolo vyrovnané. Mišo na krátko dostal svoje mužstvo opäť do vedenia
          6:5. Po oddýchnutí sa Jurček ešte vrátil do zápasu, opäť sa vystriedal
          s Marcelom, ale tento krát ostal v Paľovom tíme v bránke a gól už
          nepustil. Zápas zdramatizoval Peťo gólom avšak do vlastnej brány.
          Brilantný obrat zavŕšil Palo gólom do prázdnej brány spoza polovice
          ihriska. Zápas teda napokon skončil 7:6 v prospech Paľovho tímu. Po
          zápase boli chalani zregenerovať anus v Trenčianskych Tepliciach. Za
          kontroverzných udalostí Luboš B. na pár minút ostal v bazéne bez
          plaviek. Večer sa uskutočnil ilegálny pokrový turnaj, tento krát s
          ďalšou dávkou kontroverzie, keď sa dvaja hráči nevedeli zhodnúť na
          tom, či si výhru delia, alebo vyhral len jeden. V kauze boli zapojení
          Peťo a kto iný ako Ľuboš B.
        </Odsek>
        <Nadpis>Epilóg – 132 km</Nadpis>
        <Odsek>
          Na cestu domov sa spolu vybrali Mišo, Ľuboš B. a Jurček, ktorý ťahal
          takmer celý čas do Trenčína. Po pivku Mišo nasadol na vlak a odviezol
          sa do Trnavy, odkiaľ pokračoval na bicykli domov. Juro odprevadil
          Ľuboša za Trenčín, odkiaľ mu poradil skratku domov. Bolo to síce
          ďalej, ale o to horšia cesta. Ľubošovi to nevadilo, lebo sa tešil na
          pstruha na Kulháni. Po zistení, že čakacia doba je vyše hodiny, si dal
          namiesto pstruha horalku. Miro nevyužil možnosť zviesť sa v balíku na
          vlak do Trenčína, ale išiel sólo do Púchova. Vo vlaku sa napokon
          stretol s Mišom. Je tak kuriozitou, že napriek tomu, že sa Miro
          zúčastnil svojej prvej TdO, stále neokúsil čaro jeho pelotónu a nikto
          z borcov ho nevidel bicyklovať sa. Cely rok 2020 bol výrazne
          ovplyvnený ochorením COVID-19. Mnohé športové podujatia museli byť
          presunuté na iný termín, alebo dokonca zrušené. Organizátorom TdO sa
          však aj napriek pandémii podarilo udržať tradíciu a tak sa v roku 2021
          môžeme tešiť na jubilejný 10-ty ročník.
        </Odsek>
      </Article>
    </>
  );
}
