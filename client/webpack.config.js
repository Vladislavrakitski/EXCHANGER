const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const filename = ext => (isDev ? `[name].${ext}` : `[name]---[hash].${ext}`);

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all',
		},
	};

	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetWebpackPlugin(),
			new TerserWebpackPlugin(),
		];
	}

	return config;
};

const babelOptions = preset => {
	const options = {
		presets: ['@babel/preset-env'],
		plugins: ['@babel/plugin-proposal-class-properties'],
	};

	if (preset) {
		options.presets.push(preset);
	}

	return options;
};

const cssLoaders = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: isDev,
				reloadAll: true,
			},
		},
		'css-loader',
	];

	if (extra) {
		loaders.push(extra);
	}

	return loaders;
};

const assetsLoader = asset => {
	const loader = [
		{
			loader: 'file-loader',
			options: {
				name: filename('ext'),
				outputPath: `assets/${asset}/`,
			},
		},
	];

	return loader;
};

const plugins = () => {
	const base = [
		new HTMLWebpackPlugin({
			template: 'src/public/index.html',
			favicon: 'src/public/favicon.ico',
			filename: 'index.html',
			title: 'EXCHANGER',
			hash: !isDev,
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: filename('css'),
			chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
		}),
		new DotEnv(),
	];

	if (isProd) {
		base.push(new BundleAnalyzerPlugin());
	}

	return base;
};

module.exports = {
	mode: 'development',
	entry: `./src/index.jsx`,
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@images': path.resolve(__dirname, 'src/assets/images'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@Styles': path.resolve(__dirname, 'src/Styles'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
	},
	output: {
		publicPath: '/',
		filename: filename('js'),
		sourceMapFilename: filename('js.map'),
		path: path.resolve(__dirname, './dist'),
	},
	devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
	optimization: optimization(),
	devServer: {
		port: 3000,
		hot: isDev,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.(jp(e*)g|png|gif|ico)$/,
				include: [path.resolve(__dirname, 'src/assets/images/')],
				use: assetsLoader('images'),
			},
			{
				test: /.*\.svg$/,
				include: [path.resolve(__dirname, 'src/assets/images/')],
				use: assetsLoader('images'),
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				include: [path.resolve(__dirname, 'src/assets/fonts/')],
				use: assetsLoader('fonts'),
			},
			{
				test: /\.css$/,
				use: cssLoaders(),
			},
			{
				test: /\.less$/,
				use: cssLoaders('less-loader'),
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoaders('sass-loader'),
			},
			{
				test: /\.js[x]$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: babelOptions('@babel/preset-react'),
				},
			},
			{
				test: /\.ts[x]$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: babelOptions('@babel/preset-typescript'),
				},
			},
		],
	},
};
