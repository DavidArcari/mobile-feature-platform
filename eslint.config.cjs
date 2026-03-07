const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const prettier = require('eslint-config-prettier')

module.exports = [
  {
    ignores: [
      'node_modules',
      'dist',
      'eslint.config.cjs'
    ]
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
]