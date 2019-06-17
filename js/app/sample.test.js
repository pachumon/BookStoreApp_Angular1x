import 'angular';
import 'angular-mocks';
import 'angular-route';
import 'angular-sanitize';
import 'angular-animate';
import 'angular-messages';
import 'angular-ui-bootstrap';
import 'angular-toastr';
import 'jquery';

describe('sample test', () => {
  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(4).toEqual(4);
  });
});

describe('sample angular test', () => {
  var $componentController;

  beforeEach(angular.mock.module('sampleapp'));
  beforeEach(
    angular.mock.inject(function(_$log_) {
      console.log(_$log_);
    })
  );
  // beforeEach(
  //   angular.mock.inject(function(_$rootscope_) {
  //     console.log('kumbidi');
  //     $componentController = _$rootScope_;
  //   })
  // );

  //beforeEach(() => console.log(angular.mock.module("sampleapp")));

  it('should behave...', () => {
    expect(4).toEqual(4);
  });
});
