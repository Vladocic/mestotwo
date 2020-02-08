// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({ // подключили cssnano
            preset: 'default', // выбрали настройки по умолчанию
        })
    ]
}