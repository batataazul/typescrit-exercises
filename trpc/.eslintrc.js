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
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 100,
        "no-multiple-empty-lines": [
          "error",
          {
            "max": 2,
            "maxBOF": 1,
            "maxEOF": 0
          }
        ],
        "import/order": [
          "error",
          {
            "groups": [
              ["builtin", "external"],
              "internal",
              "parent",
              "sibling",
              "index"
            ],
            "newlines-between": "always-and-inside-groups"
          }
        ],
        "tabWidth": 2
      }
    ],
    'object-shorthand': 'error',
    'no-plusplus': 'error',
    'no-param-reassign': ['error', { props: true }],
    'curly': 'error',

    "curly": 2,
    "max-len": [
      "error",
      1630, // TODO decrease this value to 100
      {
        "ignoreUrls": true,
        "ignoreStrings": false,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    // TODO Remove "log" from the allow list:
    "no-console": ["error", { "allow": ["error", "info", "warn", "log"] }],
    "no-unused-vars": 0,
    // TODO fix the code so that we are able to enable this rule:
    // "no-param-reassign": ["error", { "props": false }], // TODO change props to true
    "no-shadow": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "object-curly-newline": 0,
    "padded-blocks": ["error", "never"],
    "prefer-destructuring": 0,
    "prefer-template": 0,
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "semi": 2,
    "space-before-blocks": 2,

    // TODO fix the code incrementally to remove these rules:

    "function-paren-newline": 0,
    "prefer-object-spread": 0,
    "function-call-argument-newline": 0,
    "camelcase": 0,
    "no-promise-executor-return": 0,
    "no-nested-ternary": 0,
    "no-else-return": 0,
    "import/order": 0,
    "import/no-useless-path-segments": 0,
    "operator-linebreak": 0,
    "implicit-arrow-linebreak": 0,
    "switch-colon-spacing": 0,
    "no-useless-escape": 0,
    "default-param-last": 0,
    "import/newline-after-import": 0,
    "arrow-body-style": 0,
    "no-restricted-globals": 0,
    "default-case-last": 0,
    "no-async-promise-executor": 0,
    "guard-for-in": 0,
    "no-restricted-syntax": 0,
    "no-extra-boolean-cast": 0,
    "lines-between-class-members": 0,
    "radix": 0,
    "no-param-reassign": 0,
    "no-dupe-else-if": 0,
    "no-return-assign": 0,
    "no-buffer-constructor": 0,
    "func-names": 0
  }
};