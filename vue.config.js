// vue.config.js
module.exports = {
    publicPath: './',
    assetsDir: '',
    devServer: {
        proxy: {
            "/stubs/*": {
                target: "http://localhost:3000",
                secure: false
            }
        }
    }
};