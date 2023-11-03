const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.VUE_APP_Serve === '1' ? '/' : './',//process.env.NODE_ENV === 'production'?'./':'/',
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			fallback: {
				fs: false,
				crypto: require.resolve("crypto-browserify"),
				stream: require.resolve("stream-browserify")
			}
		},
		plugins: [
			// Work around for Buffer is undefined:
			// https://github.com/webpack/changelog-v5/issues/10
			new webpack.ProvidePlugin({
				Buffer: ['buffer', 'Buffer'],
			}),
		]
	},
	devServer: {
		historyApiFallback: true
	}
})
