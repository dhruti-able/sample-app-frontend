/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
      /* ... */
      dist: "/",
      "src/svelte": '/assets',
    },
    plugins: [
      /* ... */
      '@snowpack/plugin-svelte',
      [
        "@snowpack/plugin-run-script",
        {
          cmd: "eleventy",
          watch: "$1 --watch",
        },
      ]
    ],
    routes: [
      /* Enable an SPA Fallback in development: */
      // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
      /* Example: Bundle your final build: */
      // "bundle": true,
    },
    packageOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    },
};
  