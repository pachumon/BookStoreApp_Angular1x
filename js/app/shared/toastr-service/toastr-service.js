const toastrService = function(app) {
  app.service("toastrService", [
    "toastr",
    function(toastr) {
      this.showError = function(msg) {
        toastr.error(msg);
      };
      this.showSuccess = function(msg) {
        toastr.success(msg);
      };
      this.showInfo = function(msg) {
        return toastr.info(msg, { timeOut: 500, extendedTimeOut: 500 });
      };
      this.clearToast = function(toast) {
        toastr.clear(toast);
      };
      this.clearAllToasts = function() {
        toastr.clear();
      };
    }
  ]);
};

export default toastrService;
