import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="px-4 lg:px-0 pb-12">{children}</main>
    </>
  );
}
