import template from './book-actions.component.html';

const bookActions = function(app) {
  app.component('bookActions', {
    transclude: true,
    template,
    controller: bookActionsController,
    controllerAs: 'vm',
    bindings: {}
  });

  bookActionsController.$inject = [
    'appDataService',
    '$routeParams',
    '$route',
    'toastrService',
    '$location'
  ];
  function bookActionsController(
    appDataService,
    $routeParams,
    $route,
    toastrService,
    $location
  ) {
    var vm = this;

    vm.$onInit = function() {
      console.log($location);
      if ($routeParams.bookId !== '0') {
        appDataService.GetBookDetails($routeParams.bookId).then(response => {
          vm.viewdata = response.data;
          console.log(vm.viewdata);
        });
      } else {
        vm.viewdata = {
          id: 0,
          title: '',
          author: '',
          published: 2019,
          category: ''
        };
      }
    };
    vm.$onChanges = function(changesObj) {};

    vm.submit = isvalid => {
      console.log(isvalid);
      if (!isvalid) return;
      appDataService.UpdateBookInfo(vm.viewdata).then(response => {
        toastrService.showSuccess(`book information saved`);
        $location.path('/');
      });
    };

    vm.resetForm = () => {
      $route.reload();
    };
  }
};

export default bookActions;
