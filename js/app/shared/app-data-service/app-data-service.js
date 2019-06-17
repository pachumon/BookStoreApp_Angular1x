const appDataService = function(app) {
  app.factory('appDataService', appDataService);
  let baseApiUrl = 'http://localhost:3600';

  appDataService.$inject = ['$http', '$q', '$log'];
  function appDataService($http, $q, $log) {
    var service = {
      GetBookCollection: GetBookCollection,
      GetBookDetails: GetBookDetails,
      UpdateBookInfo: UpdateBookInfo,
      DeleteBookInfo: DeleteBookInfo
    };

    return service;

    function GetBookCollection() {
      let url = `${baseApiUrl}/books`;
      return InvokeHttp({ method: 'GET', url });
    }

    function GetBookDetails(bookId) {
      let url = `${baseApiUrl}/books/${bookId}`;
      return InvokeHttp({ method: 'GET', url });
    }

    function UpdateBookInfo(bookObj) {
      let { id, ...postData } = bookObj;
      let url = `${baseApiUrl}/books`;
      if (id === 0) {
        return InvokeHttp({ method: 'POST', url, data: postData });
      } else {
        url = `${url}/${id}`;
        return InvokeHttp({ method: 'PUT', url, data: postData });
      }
    }

    function DeleteBookInfo(bookId) {
      let url = `${baseApiUrl}/books/${bookId}`;
      return InvokeHttp({ method: 'DELETE', url });
    }

    function InvokeHttp(config) {
      return $http({ ...config })
        .then(function successcb(response, status, headers, config) {
          return response;
        })
        .catch(function errorcb(response, status, headers, config) {
          var val = $q.reject(response);
          return val;
        });
    }
  }
};

export default appDataService;
