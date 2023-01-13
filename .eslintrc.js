const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));
module.exports = {
    plugins: ['react', 'prettier', 'jsx-a11y'],
    extends: ['react-app', 'airbnb', 'prettier'],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                prettierOptions,
            },
        ],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/aria-props': 2,
        'jsx-a11y/heading-has-content': 0,
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                controlComponents: ['Input'],
            },
        ],
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/mouse-events-have-key-events': 2,
        'jsx-a11y/role-has-required-aria-props': 2,
        'jsx-a11y/role-supports-aria-props': 2,
        'react/jsx-props-no-spreading': 'off',
    },
};
