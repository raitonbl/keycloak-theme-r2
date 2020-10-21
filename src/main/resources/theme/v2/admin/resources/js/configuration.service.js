module.service('ConfigurationServer', function ($http) {
    return {
        findAll: (realm) => $http.get(authUrl + '/admin/realms/' + realm + '/attributes')
    }
});