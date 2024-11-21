import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import electronEslint from '@electron-toolkit/eslint-config-ts'
import electronPrettier from '@electron-toolkit/eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}']
  },
  {
    ignores: ['node_modules', 'dist', 'out', '.gitignore']
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: { extraFileExtensions: ['.svelte'] }
    },
    files: ['*.svelte'],
    parser: 'svelte-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser'
    }
  },
  {
    plugins: {
      '@electron-toolkit/eslint-config-ts': electronEslint,
      '@electron-toolkit/eslint-config-prettier': electronPrettier
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
