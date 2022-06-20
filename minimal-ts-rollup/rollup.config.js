import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import { wasm } from '@rollup/plugin-wasm';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.ts',
  output: {
    file: 'public/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    commonjs(),
    copy({
      targets: [
        {
          src: './index.html',
          dest: './public',
        },
        {
          src: './node_modules/c2pa/dist/c2pa.worker.min.js',
          dest: './public',
        },
      ],
      copyOnce: true,
      verbose: true,
    }),
    wasm(),
    typescript(),
    production && terser(), // minify, but only in production
  ],
};
