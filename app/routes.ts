routeConfiguration.$inject = ['$routeProvider'];
export function routeConfiguration($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
        .when('/', { template: '<homepage></homepage>'})
        .when('/foo', { template: '<foo></foo>'})
        .when('/bar', { template: '<bar></bar>'})
        .otherwise( { template: '<not-found></not-found>'});
}
