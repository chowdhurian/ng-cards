module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(node_modules)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
