

//import 'angular-mocks/ngMockE2E';

// var testsContext = require.context(".", true, /.test.js/);
// testsContext.keys().forEach(testsContext);

var testsContext = require.context(".", true, /.js/);
testsContext.keys().forEach(testsContext);
