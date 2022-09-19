module.exports = {
  env: {
    es6: true,
    browser: true
  },
  parser: '@babel/eslint-parser',
  extends: [
    '@react-native-community',
    'plugin:flowtype/recommended',
    'prettier'
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: false,
        printWidth: 80,
        endOfLine: 'auto'
      }
    ],
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: ['error', 'never']
  }
}
