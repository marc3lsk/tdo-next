import Head from "next/head";

export default function Rocnik({ post, featuredImage }) {
  return (
    <>
      <Head>
        <title>Tour de Orava - {post?.slug}</title>
      </Head>
      <img
        width="100%"
        height="auto"
        src={featuredImage?.src}
        srcSet={featuredImage?.srcSet}
        sizes={featuredImage?.sizes}
        loading="lazy"
        className="mt-6"
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl pt-8">Ročník {post?.slug}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className="gutenberg"
        ></div>
      </div>
    </>
  );
}
