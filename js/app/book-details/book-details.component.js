import template from './book-details.component.html';

const bookDetails = function(app) {
  app.component('bookDetails', {
    transclude: true,
    template,
    controller: bookDetailsController,
    controllerAs: 'vm',
    bindings: {}
  });

  bookDetailsController.$inject = ['appDataService', '$routeParams'];
  function bookDetailsController(appDataService, $routeParams) {
    var vm = this;

    vm.$onInit = function() {
      appDataService.GetBookDetails($routeParams.bookId).then(response => {
        vm.viewdata = response.data;
        console.log(vm.viewdata);
      });
    };
    vm.$onChanges = function(changesObj) {};
  }
};

export default bookDetails;
