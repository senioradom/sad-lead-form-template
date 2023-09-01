export default {
  root: './src',
  build: {
    rollupOptions: {
      main: './src/index.html',
      output: {
        dir: './dist',
      }
    },
  },
};
