const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/yoshii10134-household' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}
