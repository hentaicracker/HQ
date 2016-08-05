var path = require('path');

module.export = {

    entry: path.resolve(__dirname, './src/main.js'),

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        pubilcPath: path.resolve(__dirname, './build')
    },

    module: {
        loaders: [
            { test: /\.js[x]?$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style!css!autoprefixer!less' },
            { test: /\.(svg|ttf|eot|woff|woff2)(\?.*$|$)/, loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader' }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }


}