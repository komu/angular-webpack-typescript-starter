routeConfiguration.$inject = ['$routeProvider'];
export function routeConfiguration($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
        .when('/', { template: '<homepage></homepage>'})
        .when('/foo', { template: '<foo></foo>'})
        .when('/hello/:target', { template: '<hello target="{{routeParams.target}}"></hello>', controller: exposeRouteParametersController })
        .otherwise( { template: '<not-found></not-found>'});
}

exposeRouteParametersController.$inject = ['$routeParams', '$scope'];
function exposeRouteParametersController($route: any, $scope: any) {
    $scope.routeParams = $route;
}
