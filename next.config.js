const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;
const withTypescript = require("@zeit/next-typescript");
const withImages = require("next-images");

module.exports = withImages(
  withTypescript({
    //inlineImageLimit: 16384,
    //assetPrefix: "/tdo",
    webpack: function(config) {
      if (ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerPort: 8888,
            openAnalyzer: true
          })
        );
      }

      return config;
    }
  })
);
