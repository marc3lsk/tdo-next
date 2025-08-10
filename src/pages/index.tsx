import Head from "next/head";
import PozadiaUvodnejStranky from "../components/PozadiaUvodnejStranky";

const Rocniky = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tour de Orava</title>
      </Head>
      <PozadiaUvodnejStranky />
    </>
  );
}
