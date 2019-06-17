import template from './detail-row.component.html';

const detailRow = function(app) {
  app.component('detailRow', {
    transclude: true,
    template,
    controller: detailRowController,
    controllerAs: 'vm',
    bindings: {
      label: '<',
      content: '<'
    }
  });

  detailRowController.$inject = [];
  function detailRowController() {
    var vm = this;

    vm.$onInit = function() {      
    };
    vm.$onChanges = function(changesObj) {};
  }
};

export default detailRow;
