routeConfiguration.$inject = ['$routeProvider'];
export function routeConfiguration($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
        .when('/', { template: '<homepage></homepage>'})
        .when('/foo', { template: '<foo></foo>'})
        .when('/hello/:target', { template: '<hello target="{{routeParams.target}}"></hello>', controller: exposeRouteParamsController })
        .otherwise( { template: '<not-found></not-found>'});
}

exposeRouteParamsController.$inject = ['$routeParams', '$scope'];
function exposeRouteParamsController($routeParams: any, $scope: any) {
    $scope.routeParams = $routeParams;
}
