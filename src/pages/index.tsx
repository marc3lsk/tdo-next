import Head from "next/head";
import PozadiaUvodnejStranky from "../components/PozadiaUvodnejStranky";

const Rocniky = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tour de Orava</title>
      </Head>
      <PozadiaUvodnejStranky />
      <div className="flex flex-wrap pb-16 pt-5">
        {false &&
          Rocniky.map((rocnik) => (
            <div key={rocnik} className="mx-auto w-[500px] text-center">
              <h2 className="hidden text-6xl">{rocnik}</h2>
              <img
                src={`/index/header${rocnik}.jpg`}
                alt={`Ročník ${rocnik}`}
                className="w-full"
              ></img>
            </div>
          ))}
      </div>
    </>
  );
}
