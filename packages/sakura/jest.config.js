const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // 别名设置
  moduleNameMapper: {
    'sakura/(.*)$': '<rootDir>/packages/$1',
    'sakura-style/(.*)$': '<rootDir>/packages/theme-chalk/src/$1',
    'ele/(.*)$': '<rootDir>/../element/packages/$1',
    'ele-style/(.*)$': '<rootDir>/../element/packages/theme-chalk/src/$1',
    '^sakura-ui$': '<rootDir>/src/index.ts',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // 测试文件
  // testMatch: ['<rootDir>/tests/unit/*.spec.ts?(x)'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest'
  }
}
