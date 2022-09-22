import Head from "next/head";
import Link from "next/link";

const Rocniky = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tour de Orava</title>
      </Head>
      <div className="space-y-5 lg:space-y-16">
        {Rocniky.map((rocnik) => (
          <div key={rocnik} className="text-center">
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
