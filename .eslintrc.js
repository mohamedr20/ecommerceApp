module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        'no-console': 1,
    },
    env: {
        node: true,
    },
};
