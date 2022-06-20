const { resolve } = require('path');
const { defineConfig } = require('vite');
const fg = require('fast-glob');

const files = fg.sync('examples/**/index.html');
const input = files.reduce((acc, path) => {
  const key = path.split('/')[1];
  return {
    ...acc,
    [key]: resolve(__dirname, path),
  };
}, {});
const paths = files.reduce((acc, path) => {
  const key = path.split('/')[1];
  return {
    ...acc,
    [key]: path,
  };
}, {});

module.exports = defineConfig({
  define: {
    __EXAMPLES__: JSON.stringify(paths),
  },
  build: {
    rollupOptions: {
      input,
    },
  },
});
