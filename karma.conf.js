const path = require('path');
const isLocalDev = process.env.CI !== 'true';

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      { pattern: './src/**/*.spec.js', type: 'module', watched: true }
    ],
    preprocessors: {
      './src/**/*.spec.js': ['webpack']
    },
    frameworks: ['jasmine', 'webpack'],
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.css/, exclude: /node_modules/, loader: 'css-loader' },
          { test: /\.js$/, enforce: 'post',
            exclude: [/\.spec.js$/, /node_modules/, /karma-test-shim.js$/],
            loader: 'istanbul-instrumenter-loader',
            query: {
              esModules: true
            }
          }
        ]
      },
      watch: true
    },
    reporters: ['progress', 'dots', 'junit', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: isLocalDev ? config.LOG_INFO : config.LOG_DEBUG,
    autoWatch: isLocalDev,
    browsers: ['ChromiumHeadlessConfigured'],
    customLaunchers: {
      ChromiumHeadlessConfigured: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      }
    },
    singleRun: !isLocalDev,
    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/test-results/',
      outputFile: 'test-results.xml',
      suite: 'www.thegreenhouse.io',
      useBrowserName: false
    },
    coverageIstanbulReporter: {
      'dir': path.join(__dirname, 'reports'),
      'reports': ['html', 'cobertura', 'text-summary'],
      'report-config': {
        'html': {
          subdir: 'test-coverage'
        },
        'cobertura': {
          file: 'test-coverage/coverage.xml'
        },
        'text-summary': {}
      },
      'fixWebpackSourcePaths': true,
      'remapOptions': {
        exclude: [/\*.spec.ts/]
      },
      'thresholds': {
        // set to `true` to not fail the test command when thresholds are not met
        emitWarning: false,
        // thresholds for all files
        global: {
          statements: 80,
          branches: 90,
          functions: 75,
          lines: 80
        }
      }
    }
  });
};