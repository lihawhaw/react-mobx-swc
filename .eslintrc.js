module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  settings: {
    react: {
      version: 'detect', // React version. 'detect' automatically picks the version you have installed.
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['react-hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    // 检查 Hook 的规则
    'react-hooks/rules-of-hooks': ['error'],
    // 检查 effect 的依赖
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
}
