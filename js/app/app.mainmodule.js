import 'angular';

import toastrService from './shared/toastr-service/toastr-service';
import appDataService from './shared/app-data-service/app-data-service';
import home from './home/home.component';
import bookDetails from './book-details/book-details.component';
import detailRow from './book-details/detail-row.component';
import bookActions from './book-actions/book-actions.component';

var app = angular.module('sampleapp', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngMessages',
  'ui.bootstrap',
  'toastr'
]);

toastrService(app);
appDataService(app);
home(app);
bookDetails(app);
detailRow(app);
bookActions(app);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/bookDetails/:bookId', {
        template: '<book-details></book-details>'
      })
      .when('/bookActions/:bookId', {
        template: '<book-actions></book-actions>'
      })
      .otherwise({ redirectTo: '/' });
  }
]);
