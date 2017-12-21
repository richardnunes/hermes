module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        //allowImportExportEverywhere: false,
        codeFrame: false
    },
    extends: ['eslint','plugin:react/recommended'],
    plugins: [
        'html'
    ],
    rules: {
        'no-invalid-this': 0,
        'func-style': 0
    },
    env: {
        "browser": true,
        "node": true
    }
};
