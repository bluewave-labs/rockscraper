import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ),
  {
    rules: {
      'prettier/prettier': 'error',
      'no-undef': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['prettier'],
  },
];

export default eslintConfig;
