import Head from "next/head";
import Article from "../../components/Article";
import ImgHeader from "../../../public/rocnik/header2013.jpg";
import ImgDen1 from "../../../public/rocnik/2013/1.den.jpg";
import ImgDen1Vyska from "../../../public/rocnik/2013/1.den-vyska.jpg";
import ImgDen2 from "../../../public/rocnik/2013/2.den.jpg";
import ImgDen2Vyska from "../../../public/rocnik/2013/2.den-vyska.png";
import ImgDen3 from "../../../public/rocnik/2013/3.den.jpg";
import ImgDen3Vyska from "../../../public/rocnik/2013/3.den-vyska.jpg";
import ImgDen3_1 from "../../../public/rocnik/2013/3den2013_1_small.jpg";
import ImgDen3_2 from "../../../public/rocnik/2013/3den2013_2_small.jpg";
import ImgDen3_3 from "../../../public/rocnik/2013/3den2013_3.jpg";
import ImgDen5 from "../../../public/rocnik/2013/5den2013_small.jpg";
import ImgZltyDres from "../../../public/dresy/zlty.jpg";
import ImgZelenyDres from "../../../public/dresy/zeleny.jpg";
import ImgBodkovanyDres from "../../../public/dresy/bodkovany.jpg";
import ImgBielyDres from "../../../public/dresy/biely.jpg";

export default function Page() {
  return (
    <>
      <Head>
        <title>2013 - Tour de Orava</title>
      </Head>
      <img src={ImgHeader.src} alt="2013" className="w-full" />
      <Article>
        <strong className="block">Celkové poradie</strong>
        <table className="mt-5">
          <thead>
            <tr>
              <th className="border py-1 px-5 text-center"></th>
              <th className="border py-1 px-5 text-center">
                <img
                  src={ImgBodkovanyDres.src}
                  alt="Bodkovaný dres"
                  className="w-12"
                />
              </th>
              <th className="border py-1 px-5 text-center">
                <img
                  src={ImgZelenyDres.src}
                  alt="Zelený dres"
                  className="w-12"
                />
              </th>
              <th className="border py-1 px-5 text-center">
                <img src={ImgZltyDres.src} alt="Žltý dres" className="w-12" />
              </th>
              <th className="border py-1 px-5 text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border py-1 px-5 text-center">Pavol L.</td>
              <td className="border py-1 px-5 text-center">4, 4, 4</td>
              <td className="border py-1 px-5 text-center">4, 5</td>
              <td className="border py-1 px-5 text-center">21</td>
              <td className="border py-1 px-5 text-center">1. miesto</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">Michal S.</td>
              <td className="border py-1 px-5 text-center">5, 2, 2</td>
              <td className="border py-1 px-5 text-center">5, 4, 3</td>
              <td className="border py-1 px-5 text-center">21</td>
              <td className="border py-1 px-5 text-center">2. miesto</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">Peter Č.</td>
              <td className="border py-1 px-5 text-center">3, 5, 5</td>
              <td className="border py-1 px-5 text-center">3, 2, 2</td>
              <td className="border py-1 px-5 text-center">20</td>
              <td className="border py-1 px-5 text-center">3. miesto</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">Ľuboš B.</td>
              <td className="border py-1 px-5 text-center">2, 2, 3</td>
              <td className="border py-1 px-5 text-center">2, 2, 1</td>
              <td className="border py-1 px-5 text-center">13</td>
              <td className="border py-1 px-5 text-center">4. miesto</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">Ľuboš K.</td>
              <td className="border py-1 px-5 text-center">1, 1, 1</td>
              <td className="border py-1 px-5 text-center">1, 1</td>
              <td className="border py-1 px-5 text-center">5</td>
              <td className="border py-1 px-5 text-center">5. miesto</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">Juraj B.</td>
              <td className="border py-1 px-5 text-center">1</td>
              <td className="border py-1 px-5 text-center"></td>
              <td className="border py-1 px-5 text-center">1</td>
              <td className="border py-1 px-5 text-center">6. miesto</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-12 flex space-x-5">
          <img
            src={ImgZltyDres.src}
            alt="2013 Žltý dres Pavol L."
            className="w-24"
          />
          <p>Pavol L. - Celkový víťaz</p>
        </div>
        <div className="mt-8 flex space-x-5">
          <img
            src={ImgZelenyDres.src}
            alt="2013 Zelený dres Michal S."
            className="w-24"
          />
          <p>Michal S. - Najlepší špurtér</p>
        </div>
        <div className="mt-8 flex space-x-5">
          <img
            src={ImgBodkovanyDres.src}
            alt="2013 Bodkovaný dres Peter Č."
            className="w-24"
          />
          <p>Peter Č. - Najlepší vrchár</p>
        </div>
        <div className="mt-8 flex space-x-5">
          <img
            src={ImgBielyDres.src}
            alt="2013 Biely dres Juraj B."
            className="w-24"
          />
          <p>Juraj B. - Najlepší nováčik</p>
        </div>
        <strong className="mt-5 block font-bold">Výsledky tímov:</strong>
        <p>
          1. miesto - Team Koniferum Cannondale (Pavol L., Michal S., Ľuboš K.):
          47 bodov
        </p>
        <p>
          2. miesto - Ľudovítová Pro Team (Peter Č., Ľuboš B., Juraj B.): 34
          bodov
        </p>
        <strong className="mt-5 block">1. deň - Prológ</strong>
        <img src={ImgDen1.src} alt="1. deň - Prológ" className="mt-1 w-full" />
        <img
          src={ImgDen1Vyska.src}
          alt="1. deň - Prológ - výškový profil"
          className="mt-1 w-full"
        />
        <p className="mt-3">
          Od úvodu prvej etapy bol na čele Juraj B. ktorý potiahol svoj tým pod
          kopec, kde sa však na neho jeho tímový kolegovia vykašlali a Ľuboš B.
          s Petrom Č. sa pustili do sólo uniku. Ten sa im však nevyplatil a
          jasne prehrali. Hneď nastali rozpory v tíme Ľudovitová Pro Team, kde
          sa zdalo, že taktika na troch lídrov nie je najšťastnejšia.
        </p>
        <strong className="mt-5 block">Horská prémia</strong>
        <table className="mt-1">
          <tbody>
            <tr>
              <td className="border py-1 px-5 text-center">5b</td>
              <td className="border py-1 px-5 text-center">Michal S.</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">4b</td>
              <td className="border py-1 px-5 text-center">Pavol L.</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">3b</td>
              <td className="border py-1 px-5 text-center">Peter Č.</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">2b</td>
              <td className="border py-1 px-5 text-center">Ľuboš B.</td>
            </tr>
            <tr>
              <td className="border py-1 px-5 text-center">1b</td>
              <td className="border py-1 px-5 text-center">Ľuboš K.</td>
            </tr>
          </tbody>
        </table>
        <strong className="mt-5 block">2. deň - Kráľovská etapa</strong>
        <img
          src={ImgDen2.src}
          alt="2. deň - Kráľovská etapa"
          className="mt-1 w-full"
        />
        <img
          src={ImgDen2Vyska.src}
          alt="2. deň - Kráľovská etapa - výškový profil"
          className="mt-1 w-full"
        />
        <p className="mt-3">
          Pár kilometrov pred cieľom sa jazdcovi Pavlovi L. prihodil defekt a
          bol nútený pretek nedokončiť. Ostal s ním len Juraj B. a zvyšní jazdci
          sa pobili o poslednú špurtérsku prémiu. Ako prvý zaútočil Ľuboš B.
          avšak predbehli ho Peter Č. aj Michal S. Na ďalší útok sa už nezmohol.
          Údajne stretol stryka a musel sa pri ňom zastaviť. Táto prémia sa
          napokon po tesnom finiši opäť stala korisťou Michala S.
        </p>
        <p className="mt-3">
          Pár kilometrov pred cieľom sa jazdcovi Pavlovi L. prihodil defekt a
          bol nútený pretek nedokončiť. Ostal s ním len Juraj B. a zvyšní jazdci
          sa pobili o poslednú špurtérsku prémiu. Ako prvý zaútočil Ľuboš B.
          avšak predbehli ho Peter Č. aj Michal S. Na ďalší útok sa už nezmohol.
          Údajne stretol stryka a musel sa pri ňom zastaviť. Táto prémia sa
          napokon po tesnom finiši opäť stala korisťou Michala S.
        </p>
        <div className="w-full overflow-x-auto">
          <table className="mt-5">
            <thead>
              <tr>
                <th className="border py-1 px-1 text-center" colSpan={2}>
                  1. špurtérska prémia
                </th>
                <th className="border py-1 px-1 text-center" colSpan={2}>
                  Horská prémia
                </th>
                <th className="border py-1 px-1 text-center" colSpan={2}>
                  2. špurtérska prémia
                </th>
                <th className="border py-1 px-1 text-center" colSpan={2}>
                  3. špurtérska prémia
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-1 px-5 text-center">5b</td>
                <td className="border py-1 px-5 text-center">Michal S.</td>

                <td className="border py-1 px-5 text-center">5b</td>
                <td className="border py-1 px-5 text-center">Peter Č.</td>

                <td className="border py-1 px-5 text-center">5b</td>
                <td className="border py-1 px-5 text-center">Pavol L.</td>

                <td className="border py-1 px-5 text-center">3b</td>
                <td className="border py-1 px-5 text-center">Michal S.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">4b</td>
                <td className="border py-1 px-5 text-center">Pavol L.</td>

                <td className="border py-1 px-5 text-center">4b</td>
                <td className="border py-1 px-5 text-center">Pavol L.</td>

                <td className="border py-1 px-5 text-center">4b</td>
                <td className="border py-1 px-5 text-center">Michal S.</td>

                <td className="border py-1 px-5 text-center">2b</td>
                <td className="border py-1 px-5 text-center">Peter Č.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">3b</td>
                <td className="border py-1 px-5 text-center">Peter Č.</td>

                <td className="border py-1 px-5 text-center">3b</td>
                <td className="border py-1 px-5 text-center">Ľuboš B.</td>

                <td className="border py-1 px-5 text-center">3b</td>
                <td className="border py-1 px-5 text-center">Ľuboš B.</td>

                <td className="border py-1 px-5 text-center">1b</td>
                <td className="border py-1 px-5 text-center">Ľuboš B.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">2b</td>
                <td className="border py-1 px-5 text-center">Ľuboš B.</td>

                <td className="border py-1 px-5 text-center">2b</td>
                <td className="border py-1 px-5 text-center">Michal S.</td>

                <td className="border py-1 px-5 text-center">2b</td>
                <td className="border py-1 px-5 text-center">Peter Č.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">1b</td>
                <td className="border py-1 px-5 text-center">Ľuboš K.</td>

                <td className="border py-1 px-5 text-center">1b</td>
                <td className="border py-1 px-5 text-center">Ľuboš K.</td>

                <td className="border py-1 px-5 text-center">1b</td>
                <td className="border py-1 px-5 text-center">Ľuboš K.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <strong className="mt-5 block">
          3. deň - Nečakaná kráľovská etapa
        </strong>
        <img
          src={ImgDen3.src}
          alt="3. deň - Nečakaná kráľovská etapa"
          className="mt-1 w-full"
        />
        <img
          src={ImgDen3Vyska.src}
          alt="3. deň - Nečakaná kráľovská etapa - výškový profil"
          className="mt-1 w-full"
        />
        <p className="mt-3">
          Na tento deň bola naplánovaná najťažšia horská premia s cieľom pri
          partizánskej nemocnici vo výške 1153 m.n.m.. Postupne z balíka odpadli
          Juraj B., Ľuboš K. a Michal S. Ľubošovi B. údajne spadla reťaz a preto
          nevyhral. V závere sa zrodilo tesné víťazstvo Petra Č. pred Pavlom L.
          Táto etapa sa však ešte ani zdaleka neskončila. Po príchode do Novej
          Bystrice dostal Ľuboš K. výborný nápad vrátiť sa do Oravskej Lesnej
          "skratkou" ktorá mala nakoniec 30km. Uprostred cesty na 53km sa strhla
          búrka a bolo z toho poriadne dobrodrúžstvo.
        </p>
        <div className="w-full overflow-x-auto">
          <table className="mt-5">
            <thead>
              <tr>
                <th className="border py-1 px-1 text-center" colSpan={2}>
                  Horská prémia
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-1 px-5 text-center">5b</td>
                <td className="border py-1 px-5 text-center">Peter Č.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">4b</td>
                <td className="border py-1 px-5 text-center">Pavol L.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">3b</td>
                <td className="border py-1 px-5 text-center">Ľuboš B.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">2b</td>
                <td className="border py-1 px-5 text-center">Michal S.</td>
              </tr>
              <tr>
                <td className="border py-1 px-5 text-center">1b</td>
                <td className="border py-1 px-5 text-center">Juraj B.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img
          src={ImgDen3_1.src}
          alt="3. deň, fotka 1"
          className="mt-5 w-full"
        />
        <img
          src={ImgDen3_2.src}
          alt="3. deň, fotka 2"
          className="mt-5 w-full"
        />
        <img
          src={ImgDen3_3.src}
          alt="3. deň, fotka 3"
          className="mt-5 max-w-xs"
        />
        <strong className="mt-5 block">4. deň - Sanitárny deň</strong>
        <p className="mt-3">
          Po náročnom programe si jazdci TdO doprali deň bez bicykla. Najskôr sa
          boli pozrieť na Jánošíkové diery v Terchovej a neskôr zrelaxovali aj
          anus vo wellness hoteli Rozsutec.
        </p>
        <strong className="mt-5 block">5. deň - Záverečná etapa</strong>
        <p className="mt-3">
          Po sanitárnom dni Juraj B. a Pavol L. opustili dejisko pretekov hneď
          ráno. Vyskytli sa nepodložené klebety, že Pavol L. sa chcel proste
          vyhnúť prípadnej antidopingovej kontrole. Tieto reči sa samozrejme
          nezakladajú na pravde a Pavol L. zostáva symbolom novej, čistej
          cyklistiky. Ľuboš K. zostal strážiť chatu a Michal S., Ľuboš B. a
          Peter Č. sa pripojili k už tradičnej lesnianskej cyklotúre
          organizovanej akýmsi cyklistickým spolkom. Trasa, ktorá mala byť
          určená pre rodiny s deťmi, viedla napr. takým náročným stúpaním, ako
          je stúpanie na Paráč. Naši pretekári si z nepochopiteľných dôvodov
          nevychutnávali jazdu v pelotóne, ale držali sa značne pred ním. Aj
          preto došli do cieľa so značným náskokom aj pred občerstvením, ktorého
          sa im teda nedostalo.
        </p>
        <img
          src={ImgDen5.src}
          alt="5. deň - Záverečná etapa"
          className="mt-1 w-full"
        />
      </Article>
    </>
  );
}
