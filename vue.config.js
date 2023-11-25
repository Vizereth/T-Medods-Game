const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/T-Medods-Game/'  // Replace with your repository name
  : '/',
  transpileDependencies: true
})
