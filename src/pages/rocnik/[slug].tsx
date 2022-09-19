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

export async function getStaticProps({ params }) {
  const data = await fetch("http://localhost:9673/index.php?graphql", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operationName: "Rocnik",
      query: `
        query Rocnik($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            id
            content(format: RENDERED)
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
                sizes(size: LARGE)
                srcSet(size: LARGE)
                uri
                title
              }
            }
            slug
            title(format: RAW)
            uri
          }
        }`,
      variables: {
        slug: params.slug,
      },
    }),
  });

  const json = await data.json();

  return {
    props: {
      post: json.data.post,
      featuredImage: json.data.post.featuredImage.node,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:9673/index.php?graphql", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operationName: "Rocniky",
      query: `
        query Rocniky {
          posts(where: { categoryName: "rocnik" }) {
            nodes {
              id
              slug
            }
          }
        }`,
    }),
  });

  const json = await data.json();

  return {
    paths: json.data.posts.nodes.map((x) => ({
      params: { ...x },
    })),
    fallback: true,
  };
}
