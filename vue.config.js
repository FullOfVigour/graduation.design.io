module.exports = {
  devServer: {
    port: '8081',
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8021/pc/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
