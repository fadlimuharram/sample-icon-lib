module.exports = {
  parser: 'babel-eslint',
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    jsx: true,
    useJSXTextNode: true,
    allowImportExportEverywhere: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-a11y/label-has-associated-control': 'off',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
};
