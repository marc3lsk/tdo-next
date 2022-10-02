import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href={`${process.env.BASE_PATH ?? ""}/favicon.svg`} />
      </Head>
      <Header />
      <main className="pt-5">{children}</main>
    </>
  );
}
