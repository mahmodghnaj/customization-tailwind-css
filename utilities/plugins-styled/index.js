const colors = require("./themes/colors/index");
const colorFunctions = require("./themes/functions");
const themes = require("./themes/themes");
const base = require('../plugins-styled/base')
const global = require('../plugins-styled/global')
const styled = require('../plugins-styled/styled')
const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
    colorFunctions.injectThemes(addBase, config, themes)
    addBase(base)
    addComponents(global)
    addComponents(styled)
};
module.exports = require("tailwindcss/plugin")(mainFunction, {
    theme: {
        extend: {
            colors: {
                ...colors,
            }
        }
    },
});