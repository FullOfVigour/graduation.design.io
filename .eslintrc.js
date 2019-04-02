module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    'standard/computed-property-even-spacing': 0,
    'no-unused-expressions': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}
