const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
// const cssnext = require('postcss-cssnext');
// const precss = require('precss');
const cssnano = require('cssnano');
module.exports = {
    plugins: [
        atImport,
        autoprefixer({
            overrideBrowserslist:['>=0%']
        }),
        cssnano
    ]
};