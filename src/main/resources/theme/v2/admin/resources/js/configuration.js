module.controller('ConfigurationListCtrl', function ($scope, realm, ConfigurationServer) {
    $scope.realm = realm;
    ConfigurationServer.findAll(realm.realm).then(response => {
        console.log("Configuration:" + response);
        $scope.configs = response;
    });
});
