module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        './vueform.config.js',
        './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
        './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    ],
    theme: {
        extend: {
            form: (theme) => ({
                primary: '#07BF9B',
            })
        },
    },
    plugins: [
        require('@vueform/vueform/tailwind')
    ]
}
