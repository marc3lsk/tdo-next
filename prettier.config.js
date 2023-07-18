module.exports = {
    trailingComma: "all",
    tabWidth: 2,
    printWidth: 200,
    vueIndentScriptAndStyle: false,
    overrides: [
        {
            files: ["*.vue", "*.tsx"],
            options: {
                tabWidth: 2,
            },
        },
    ],
    plugins: [require("prettier-plugin-tailwindcss")],
};
