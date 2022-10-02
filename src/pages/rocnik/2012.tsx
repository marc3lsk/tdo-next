import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2012.jpg";
import ImgDen2 from "../../../public/rocnik/2012/2.den2012.jpg";
import Nadpis from "../../components/Nadpis";
import Galeria from "../../components/Galeria";
import ObrazokGalerie from "../../components/ObrazokGalerie";
import Odsek from "../../components/Odsek";

export default function Page() {
  return (
    <>
      <Head>
        <title>2012 - Tour de Orava</title>
      </Head>
      <Galeria>
        <ObrazokGalerie {...ImgHeader} alt="Ročník 2012" className="w-full" />
      </Galeria>
      <Article>
        <em className="-mb-3 block">
          Od nášho spoluautora Ing. Ľuboša Brišša.
        </em>
        <Nadpis>1. deň - Prológ</Nadpis>
        <Odsek>
          Organizátori (Ľuboša B. - pozn. autora) na začiatok pripravili asi 30
          km dlhý prológ, ktorý mal značne netradičný profil, keďže trasa ihneď
          po štarte zaviedla pretekárov do približne kilometer dlhého ostrého
          stúpania, typického skôr pre záver tých najnáročnejších etáp. S touto
          nástrahou (výplodom pojašenej hlavy - pozn. autora) sa dokázal
          vysporiadať iba Ľuboš B., ktorý jediný nemusel zosadnúť zo sedla a
          prémiu s prehľadom vyhral. (Všetci ostatní mali štipku zdravého rozumu
          - pozn. autora) Na kopci sa pelotón počkal a pokračoval v pokojnom
          tempe po prekrásnom okolí Oravskej Lesnej, kde sa pristavil pri
          rôznych turistických atrakciách, ako sú napr. starý kostol nad obcou,
          Historická lesná úvraťová železnica či lyžiarske stredisko Orava Snow.
          V lyžiarskom stredisku si vychutnali aj zjazd tunajšími vychýrenými
          zjazdovkami, samozrejme na bicykloch. Prológ ubral ročníku 2012 na
          diváckej atraktivite, pretože ukázal, že jeden z TOP favoritov, Ľuboš
          K., prišiel na preteky v slabej forme, spôsobenej pravdepodobne
          zdravotnými problémami.
        </Odsek>
        <Nadpis>2. deň - Kráľovská etapa</Nadpis>
        <Galeria>
          <ObrazokGalerie
            {...ImgDen2}
            alt="2. deň - Kráľovská etapa"
            className="mt-3 mb-8 w-full"
          />
        </Galeria>
        <Odsek>
          Vyše 80 km dlhá etapa, trasa Oravská Lesná – Nová Bystrica – Terchová
          – Zázrivá – Oravská Lesná. Po úvodných rovinatých kilometroch prišla
          prvá horská prémia, stúpanie na ceste Orava – Kysuce. Na čelo pelotónu
          išiel pracovať Ľuboš B., ktorý bol okrem najväčšieho favorita na
          celkové víťazstvo aj hlavným domestikom do kopcov. Na čele odpracoval
          celé stúpanie, očakával preto, že o prémiu (B) sa bojovať nebude.
          Preto ho veľmi prekvapil nástup Michala S. asi sto metrov pred
          prémiou, na ktorý už nestihol zareagovať. Nasledoval 7 km rýchly
          zjazd, v ktorom pelotón dokonca predbiehal niekoľkých krajinkárov v
          automobiloch. V nasledujúcom krátkom a miernom stúpaní (C) k Múzeu
          kysuckej dediny po skvelom taktickom výkone triumfoval Michal S. pred
          Ľubošom B. V ostatných horských prémiách (D, E, F) už Ľuboš B.
          nenechal nič na náhodu a víťazstvo si postrážil. Zo všetkých treba
          spomenúť dve: stúpanie z Terchovej smerom na Zázrivú a najmä
          najdôležitejšie a najťažšie stúpanie ročníka 2012, stúpanie zo
          Zázrivej do Oravskej Lesnej. Najmä v tejto etape ukázal Pavol L. veľmi
          slabú vrchársku formu. Keďže sa etapa uskutočnila ešte v dobe temna, o
          umiestení ostatných jazdcov na konkrétnych prémiách sa nezachovali
          žiadne informácie. S najväčšou pravdepodobnosťou obsahovala etapa ešte
          ďalšie menšie horské prémie, o ktorých sa však taktiež nezachovali
          žiadne zdroje, isté je len, že na nich zvíťazil Ľuboš B. Kvôli
          náročnosti etapy boli zrušené všetky rýchlostné prémie pod heslom „kto
          zmení tempo, berie v krčme kolo“. (Ľuboš B. ich zrušil vždy okamžite
          ako na nich prehral. Aj to heslo vymyslel ze behu. - pozn. autora)
        </Odsek>
        <Nadpis>3. deň - Sanitárny deň</Nadpis>
        <Odsek>
          Po kráľovskej etapa nasledoval sanitárny deň, ktorý jazdci využili na
          wellness v Terchovej. Vo wellnesse začal aj najväčší škandál ročníka
          2012, tzv. Kauza uterák. V rámci menšej turistiky navštívili pretekári
          sochu Jánošíka nad obcou. Po zaslúženom oddychu mala nasledovať
          záverečná etapa k partizánskej nemocnici, ale kvôli nepriazni počasia
          sa organizátori vzhľadom na bezpečnosť pretekárov rozhodli etapu
          radšej zrušiť.
        </Odsek>
      </Article>
    </>
  );
}
