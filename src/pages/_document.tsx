import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-gray-800 lg:text-lg">
        <Main />
        <NextScript />
        <script src="https://strava-embeds.com/embed.js"></script>
      </body>
    </Html>
  );
}
