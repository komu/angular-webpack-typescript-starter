// First include to use ES6 functionality in older browsers
import 'es6-shim';

// Next, angular modules
import 'angular';
import 'angular-route';

// Finally load our global styles
import 'bootstrap/dist/css/bootstrap.css';
import './styles/default.scss';

const app = angular.module("my-app", [
    'ngRoute',
    require('./pages').name
]);

import { routeConfiguration } from './routes';

app.config(routeConfiguration);
app.config(['$locationProvider', (locationProvider: angular.ILocationProvider) => {
    locationProvider.html5Mode(true);
}]);

angular.bootstrap(document.body, ['my-app'], {strictDi: true});
