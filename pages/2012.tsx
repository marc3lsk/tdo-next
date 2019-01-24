import Head from "next/head";
import Layout from "components/MyLayout";

export default () => (
  <>
    <Head>
      <title>2012 - Tour de Orava</title>
    </Head>
    <Layout>
      <h1>2012</h1>
      <img src={require("../static/header2012.jpg")} alt="2012" />
    </Layout>
  </>
);
