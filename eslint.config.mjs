import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['.js', '.mjs', '.cjs', '.mjs', '.ts', '.cts', '.mts'],
    ignores: ['node_modules', 'dist', 'out', '.gitignore'],
    parserOptions: {
      extraFileExtensions: ['.svelte']
    },
    extends: [
      'eslint:recommended',
      'plugin:svelte/recommended',
      '@electron-toolkit/eslint-config-ts/recommended',
      '@electron-toolkit/eslint-config-prettier'
    ],
    overrides: [
      {
        files: ['*.svelte'],
        parser: 'svelte-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser'
        }
      }
    ],
    rules: {
      'svelte/no-unused-svelte-ignore': 'off'
    }
  }
]
