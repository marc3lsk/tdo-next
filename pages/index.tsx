import Head from "next/head";
import Layout from "../components/MyLayout";

export default function Index() {
  return (
    <>
      <Head>
        <title>Tour de Orava</title>
      </Head>
      <Layout>
        <h1>Tour de Orava</h1>
        <h2 style={{ fontWeight: 400, fontSize: 30 }}>This is a heading</h2>
      </Layout>
    </>
  );
}
