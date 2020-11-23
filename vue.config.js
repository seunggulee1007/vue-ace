module.exports = {
	devServer: {
		overlay: false,
	},
	// outputDir: 'F:\\DEV\\spring-workspace\\RWS\\src\\main\\resources\\static',
	configureWebpack: {
		entry: ['babel-polyfill', '@/main.js'],
	},
	transpileDependencies: ['vuetify'],
};
