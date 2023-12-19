# minimal-ts-rollup

This repo contains a bare-bones example of using Rollup to build a CAI demo.

## Prerequisites

If you haven't already, install Rollup:

```
npm install --global rollup
```

## Build and run 

After you clone this repository, install its dependencies:

```sh
cd c2pa-js-examples/minimal-ts-rollup
npm install
```

Then build and run it as follows:

```
npm run build
npm start
```

The `index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The bundle includes `src/main.ts` and all of its dependencies.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
