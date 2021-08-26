// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const igConfig = require("./ignite-ui-cli.json");

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      "http://code.jquery.com/jquery-1.12.3.js",
      "http://code.jquery.com/ui/1.11.4/jquery-ui.min.js",
      `${igConfig.project.igniteuiSource}/css/themes/infragistics/infragistics.theme.css`,
      `${igConfig.project.igniteuiSource}/css/structure/infragistics.css`,
      ...igConfig.project.sourceFiles.map(x => `${igConfig.project.igniteuiSource}/js/${x}`),

      "karma-test-entry.ts"
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/test-ng-proj-pure'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
