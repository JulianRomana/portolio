module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'max-len': ['warn', {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        // fix for svg icons
        ignorePattern: 'd=([s]*?)',
      }],
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
      'no-param-reassign': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
