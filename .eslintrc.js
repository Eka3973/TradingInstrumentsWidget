module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  parser: '@babel/eslint-parser',
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        printWidth: 80,
        endOfLine: 'auto'
      }
    ],
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-duplicate-imports': 'error',
    semi: ['error', 'never']
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
