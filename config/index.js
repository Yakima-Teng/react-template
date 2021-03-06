var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env.js'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/demos/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env.js'),
    port: 6060,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/demos/',
    proxyTable: {}
  }
}
