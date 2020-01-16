module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'jest', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'eslint-config-prettier/@typescript-eslint',
  ],
  rules: {
    eqeqeq: 1,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/require-await': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/unbound-method': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  globals: { React: 'writable' },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: { version: 'detect' },
  },
  env: {
    browser: true,
    node: true,
  },
}
