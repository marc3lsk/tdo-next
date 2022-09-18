import Head from "next/head";
import Layout from "../components/MyLayout";
import header from "../public/header2012.jpg";

export default function Rocnik2012() {
  return (
    <>
      <Head>
        <title>2012 - Tour de Orava</title>
      </Head>
      <Layout>
        <h1>2012</h1>
        <img src={header.src} alt="2012" />
      </Layout>
    </>
  );
}
