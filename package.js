Package.describe({
  name: 'productiveme:backrid',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Backgrid.js is a set of components for building semantic and easily stylable data grid widgets.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/productiveme/meteor-backgrid.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  backbone: "0.9.10",
  backgrid: "0.3.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(["jquery", "json", "underscore"]);
  // api.imply('underscore');
  // api.imply('backbone');
  api.addFiles('pre-backbone.js', 'client');
  api.addFiles('.npm/package/node_modules/backgrid/node_modules/backbone/backbone.js', 'client');
  api.addFiles('pre-backgrid.js');
  api.addFiles([
    '.npm/package/node_modules/backgrid/lib/backgrid.js',
    '.npm/package/node_modules/backgrid/lib/backgrid.css',
  ], 'client');
  api.addFiles('backgrid.js', 'client');
  api.export(['Backbone','Backgrid'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('backgrid');
  api.addFiles('backgrid-tests.js');
});

