const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/household_account_book' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}
