/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import  pkg from "next/dist/compiled/webpack/webpack.js";
const {webpack} = pkg;
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    // fixes proxy-agent dependencies
                    net: false,
                    dns: false,
                    tls: false,
                    assert: false,
                    // fixes next-i18next dependencies
                    path: false,
                    fs: false,
                    // fixes mapbox dependencies
                    events: false,
                    // fixes sentry dependencies
                    process: false
                }
            };
        }
        config.plugins.push(new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
            resource.request = resource.request.replace(/^node:/, "");
        }))
   return config;
  },

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default config;
