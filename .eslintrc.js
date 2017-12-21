module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  extends: ['plugin:react/recommended'],
  plugins: [
    'html'
  ],
  rules: {
    'arrowParens': 'as-needed',
    'no-debugger': 1,
    'semi': 1
  }
};
