module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/styles/fonts.scss";
          @import "@/styles/variables.scss";
        `,
      },
    },
  },
}
