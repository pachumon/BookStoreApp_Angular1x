import template from './home.component.html';

const home = function(app) {
  app.component('home', {
    transclude: true,
    template,
    controllerAs: 'vm',
    controller: homeController,
    bindings: {}
  });

  homeController.$inject = ['appDataService', '$window', 'toastrService'];

  function homeController(appDataService, $window, toastrService) {
    var vm = this;
    vm.viewdata = [];
    vm.$onInit = function() {
      appDataService.GetBookCollection().then(response => {
        vm.viewdata = response.data;
      });
    };

    vm.$onChanges = function(changes) {};

    vm.removeBook = book => {
      if ($window.confirm(`are you sure you want to remove ${book.title}`)) {
        appDataService.DeleteBookInfo(book.id).then(response => {
          toastrService.showSuccess('book has been removed');
        });
      }
    };
  }
};

export default home;
