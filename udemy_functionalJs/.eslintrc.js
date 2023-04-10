/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-sonarjs'
  ],
  ignorePatterns: ['buildDoc.ts', 'jest.config.js', '.eslintrc.js', 'test/**', 'build/**' ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
  },
  rules: {
    'max-len': ['error', 100, 2, { "ignoreUrls": true, "ignoreComments": false }],

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],

    'sonarjs/cognitive-complexity': ['error', 6],

    'no-process-exit': 'error',
    'no-process-env': 'error',
    'no-await-in-loop': 'error',
    //'no-console': 'error',
    // Disallow for loops
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForStatement',
        message: 'Use functions like Array.forEach, Array.map and mapSeries instead'
      },
      {
        selector: 'ForInStatement',
        message: 'Use functions like Array.forEach, Array.map and mapSeries instead'
      },
      {
        selector: 'ForOfStatement',
        message: 'Use functions like Array.forEach, Array.map and mapSeries instead'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
        'printWidth': 100
      }
    ],
    'object-shorthand': 'error',
    'no-plusplus': 'error',
    'no-param-reassign': ['error', { props: true }],
    'curly': 'error',
  }
};