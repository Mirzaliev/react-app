module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: '[local]_[hash:base64:5]',
                        module: true
                    }
                },
            },
        ],
    },
};
