module.config([ '$routeProvider', function($routeProvider) {
    $routeProvider.when('/realms/:realm/configurations', {
        templateUrl : resourceUrl + '/partials/kc-configuration-list.html',
        resolve : {
            realm : function(RealmLoader) {
                return RealmLoader();
            }
        },
        controller : 'ConfigurationListCtrl'
    });
}]);