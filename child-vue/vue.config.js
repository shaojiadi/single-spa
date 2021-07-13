module.exports = {
  configureWebpack: {
    output: { 
      library: 'singleVue',  //类库名
      libraryTarget: 'umd'   //打包成一个umd类库，会把属性挂载到window上(window.singleVue.bootstrap等等)
    },
    devServer: {
      port: 10000
    }
  }
}
