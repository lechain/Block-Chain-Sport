const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/sports/' : '/',
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    devServer: {
        //port:8081,
        //host: '10.58.92.40',
        https: false,
        open: true
    },

    configureWebpack: config => {
        let plugins = [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.log']//移除console
                    }
                },
                sourceMap: false,
                parallel: true
            })
        ]

        require('vux-loader').merge(config, {
            options: {},
            plugins: [
                {name: 'vux-ui'},
                {name: 'less-theme', path: 'src/assets/theme.less'}
            ]
        })

        if (process.env.NODE_ENV !== 'development') 
            config.plugins = [...config.plugins, ...plugins]
    }
}
