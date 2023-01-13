// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

module.exports = async () => ({
    verbose: true,
    testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/js-with-ts',
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/**/*.test.{js,jsx}',
        '!src/*/RbGenerated*/*.{js,jsx}',
        '!src/src.js',
        '!src/globalStyles.js',
        '!src/*/*/Loadable.{js,jsx}',
    ],
    coverageThreshold: {
        global: {
            statements: 98,
            branches: 91,
            functions: 98,
            lines: 98,
        },
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ico|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/internals/mocks/image.js',
    },
    setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
    setupFiles: ['raf/polyfill'],
    testRegex: 'tests/*/.*\\.test\\.js$',
    snapshotSerializers: [],
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'],
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
});
