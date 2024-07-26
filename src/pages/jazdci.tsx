import { Component } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import Clanok from "../components/Clanok";
import MichalS from "../../public/jazdci/michals.jpg";
import PeterC from "../../public/jazdci/peterc.jpg";
import JurajB from "../../public/jazdci/jurajb.jpg";
import PavolL from "../../public/jazdci/pavoll.jpg";
import LubosK from "../../public/jazdci/lubosk.jpg";
import MarcelB from "../../public/jazdci/marcelb2.jpg";
import LubosB from "../../public/jazdci/lubosb.jpg";
import BorisK from "../../public/jazdci/boris.jpg";
import MiroJ from "../../public/jazdci/miroj2.jpg";
import Galeria from "../components/Galeria";
import ObrazokGalerie from "../components/ObrazokGalerie";
import Nadpis from "../components/Nadpis";
import Odsek from "../components/Odsek";

class GrafHmotnost extends Component<{ vaha }, { series: any; options: any }> {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "KG",
          data: props.vaha.map((x) => x.kg),
        },
      ],
      options: {
        chart: {
          zoom: {
            enabled: false,
          },
          type: "line",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: "straight",
        },
        tooltip: {
          enabled: false,
        },
        colors: ["#545454"],
        dataLabels: {
          enabled: true,
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: props.vaha.map((x) => x.rok),
        },
        yaxis: {},
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={250} />;
  }
}

const Jazdec = ({ foto, meno, popis, vyska, vaha, jedlo, oblubenec, etapa, film }) => (
  <div className="mb-16">
    <p className="mt-5">
      <h2 className="text-2xl font-bold">{meno} </h2>
    </p>
    <Odsek>{popis}</Odsek>
    <div className="mt-5 lg:flex lg:space-x-5">
      <Galeria>
        <ObrazokGalerie img={foto} alt={meno} className="h-full w-full max-w-sm lg:w-1/2" />
      </Galeria>
      <div className="mt-5 lg:mt-0 lg:w-1/2">
        <p className="mt-0">
          <span className="font-bold">Výška: </span>
          {vyska} cm
        </p>
        <p className="mt-3">
          <span className="font-bold">Hmotnosť v KG: </span>
          <GrafHmotnost vaha={vaha} />
        </p>
      </div>
    </div>
    <p className="lg:mt-5">
      <span className="font-bold">Obľúbené jedlo, ktoré najradšej pripravuješ: </span>
      {jedlo}
    </p>
    <p className="mt-1">
      <span className="font-bold">Obľúbený jazdec v pelotóne TdO: </span>
      {oblubenec}
    </p>
    <p className="mt-1">
      <span className="font-bold">Obľúbená etapa: </span>
      {etapa}
    </p>
    <p className="mt-1">
      <span className="font-bold">Obľubený film: </span>
      {film}
    </p>
  </div>
);

export default function Page() {
  return (
    <>
      <Head>
        <title>Jazdci - Tour de Orava</title>
      </Head>
      <Clanok>
        <h1 className="mb-5 text-center text-3xl font-bold">Chlastana Pro Team</h1>
        <Jazdec
          foto={MichalS}
          meno="Michal S."
          popis="Víťaz špurtérskej sútaže v roku 2013 a 2014. Celkové víťazstvá mu ušli len o chlp. Pre svoj agresívny štýl jazdy prezývaný aj Fitipálda."
          vyska={177}
          vaha={[
            { rok: 2014, kg: 72 },
            { rok: 2015, kg: 70 },
            { rok: 2016, kg: 70 },
            { rok: 2017, kg: 70 },
            { rok: 2019, kg: 72 },
            { rok: 2020, kg: 72 },
            { rok: 2021, kg: 71 },
            { rok: 2022, kg: 72 },
            { rok: 2023, kg: 73 },
            { rok: 2024, kg: 75 },
          ]}
          jedlo="Hamburgery na grile"
          oblubenec="Ing. Juraj Bernát (netreba za ním šlapať)"
          etapa="Každá víťazná. Ale s radosťou spomínam na horskú etapu Čierny Váh. To bol pekný kopček."
          film="The Intouchables"
        />
        <Jazdec
          foto={PeterC}
          meno="Peter Č."
          popis="Víťaz vrchárskej súťaže za rok 2013 a 2014 a celový víťaz za rok 2015."
          vyska={173}
          vaha={[
            { rok: 2014, kg: 70 },
            { rok: 2015, kg: 72 },
            { rok: 2016, kg: 73 },
            { rok: 2017, kg: 74 },
            { rok: 2018, kg: 72 },
            { rok: 2020, kg: 73 },
            { rok: 2021, kg: 74 },
          ]}
          jedlo="Rizoto"
          oblubenec="Larry"
          etapa="rok 2013, 3. deň - Nečakaná kráľovská etapa"
          film="Shawshank Redemption"
        />
        <Jazdec
          foto={JurajB}
          meno="Juraj B."
          popis="Silový tip jazdca, typologicky stavaný skôr pre jarné klasiky. Prezývaný aj gentleman na bicykli."
          vyska={188}
          vaha={[
            { rok: 2014, kg: 92 },
            { rok: 2015, kg: 93 },
            { rok: 2016, kg: 85 },
            { rok: 2017, kg: 92 },
            { rok: 2018, kg: 94 },
            { rok: 2019, kg: 93 },
            { rok: 2020, kg: 92 },
            { rok: 2021, kg: 93 },
            { rok: 2022, kg: 94 },
            { rok: 2023, kg: 94 },
            { rok: 2024, kg: 94 },
          ]}
          jedlo="Sushi"
          oblubenec="Pavol Lobb"
          etapa="Vodná nádrž Čierny Váh TdO 2014"
          film="Titanic"
        />
        <h1 className="mb-5 text-center text-3xl font-bold">Team Koniferum Cannondale</h1>
        <Jazdec
          foto={PavolL}
          meno="Pavol L."
          popis="Celkový víťaz za rok 2013 a 2014."
          vyska={191}
          vaha={[
            { rok: 2014, kg: 83 },
            { rok: 2015, kg: 82 },
            { rok: 2016, kg: 83 },
            { rok: 2017, kg: 83 },
            { rok: 2018, kg: 85 },
            { rok: 2019, kg: 86 },
            { rok: 2020, kg: 88 },
            { rok: 2021, kg: 89 },
            { rok: 2022, kg: 91 },
            { rok: 2023, kg: 91 },
            { rok: 2024, kg: 92 },
          ]}
          jedlo="Kurací perkelt"
          oblubenec="Juraj Bernát - jednoznačne najlepší zjazdár"
          etapa="Vodná nádrž Čierny Váh TdO 2014"
          film="Jurský park, Krstný otec"
        />
        <Jazdec
          foto={LubosK}
          meno="Ľuboš K."
          popis="Jeden z najlepších domestikov súčasnosti."
          vyska={195}
          vaha={[
            { rok: 2014, kg: 76 },
            { rok: 2015, kg: 76 },
            { rok: 2016, kg: 76 },
            { rok: 2020, kg: 72 },
            { rok: 2021, kg: 72 },
            { rok: 2022, kg: 72 },
            { rok: 2024, kg: 74 },
          ]}
          jedlo="Špagety"
          oblubenec="Baláži s jeho bosými nohami"
          etapa="Samozrejme moja skratka (Okolo vodnej nadrze Nova Bystrica, TdO 2013 - pozn. autora)"
          film="Bratstvo neohrozených"
        />
        <Jazdec
          foto={MarcelB}
          meno="Marcel B."
          popis="Ako nováčik pretekov v roku 2014 všetkých prekvapil a zvíťazil v horskej prémii."
          vyska={184}
          vaha={[
            { rok: 2014, kg: 74 },
            { rok: 2015, kg: 70 },
            { rok: 2016, kg: 75 },
            { rok: 2017, kg: 73 },
            { rok: 2018, kg: 77 },
            { rok: 2019, kg: 82 },
            { rok: 2020, kg: 80 },
            { rok: 2021, kg: 78 },
            { rok: 2022, kg: 78 },
            { rok: 2023, kg: 78 },
            { rok: 2024, kg: 77 },
          ]}
          jedlo="Zapekané zemiaky so syrom a zeleninou"
          oblubenec="Pavol a jeho elegancia na bicykli"
          etapa="Vodná nádrž Čierny Váh TdO 2014"
          film="Forrest Gump"
        />
        <h1 className="mb-5 text-center text-3xl font-bold">Team Bušo-Hansgrohe</h1>
        <Jazdec
          foto={LubosB}
          meno="Ľuboš B."
          popis="V prvom ročníku sa ako jediný nenechal zaskočiť náročnosťou Oravských kopcov a suverénne zvíťazil. Odvtedy však na ďalší výraznejší úspech stále len čaká. Pre svoju bojovnosť a pôvod prezývaný aj Oravský Vinokurov."
          vyska={175}
          vaha={[
            { rok: 2014, kg: 80 },
            { rok: 2015, kg: 81 },
            { rok: 2016, kg: 78 },
            { rok: 2017, kg: 76 },
            { rok: 2018, kg: 77 },
            { rok: 2019, kg: 77 },
            { rok: 2020, kg: 77 },
            { rok: 2021, kg: 76 },
            { rok: 2022, kg: 74 },
            { rok: 2023, kg: 74 },
            { rok: 2024, kg: 75 },
          ]}
          jedlo="Nemám"
          oblubenec="Zbožňujem rovnako všetkých"
          etapa="Okolo vodnej nadrze Nova Bystrica v ramci TdO 2013"
          film="Home alone, považujem ho za vrchol svojej hereckej kariéry"
        />
        <Jazdec
          foto={BorisK}
          meno="Boris K."
          popis="Ako nováčik pretekov v roku 2016 všetkých prekvapil a ani raz nezosadol."
          vyska={189}
          vaha={[
            { rok: 2016, kg: 108 },
            { rok: 2020, kg: 111 },
            { rok: 2022, kg: 104 },
          ]}
          jedlo="Spišské párky"
          oblubenec="Miro"
          etapa="Etapa do Osrblia a Čierneho Balogu"
          film="Terminátor 2"
        />
        <Jazdec
          foto={MiroJ}
          meno="Miro J."
          popis="Ako nováčik pretekov v roku 2020 všetkých prekvapil, že prišiel na TdO v pokročilom cyklistickom veku."
          vyska={176}
          vaha={[
            { rok: 2020, kg: 71 },
            { rok: 2021, kg: 68 },
          ]}
          jedlo="Perkelt z králika"
          oblubenec="V pelotóne ešte nešiel"
          etapa="Sólo etapa z chaty Cementár do Púchova"
          film="Leon"
        />
        <Nadpis>Historický rebríček – počet účastí na TdO:</Nadpis>
        <Odsek>
          <ul>
            <li>13 – Paľo, Ľuboš B.</li>
            <li>12 – Mišo, Juro</li>
            <li>11 – Marcel</li>
            <li>9 – Ľuboš K.</li>
            <li>8 – Peťo</li>
            <li>3 – Boris</li>
            <li>2 – Miro</li>
          </ul>
        </Odsek>
      </Clanok>
    </>
  );
}
