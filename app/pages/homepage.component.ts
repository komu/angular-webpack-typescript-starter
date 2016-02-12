import module from './module';

class HomepageController {

    currentTime: string = null;

    static $inject = ['$http', '$log'];
    constructor($http: angular.IHttpService, $log: angular.ILogService) {
        $http.get('http://date.jsontest.com/').then(r => {
            const data: any = r.data;
            $log.debug("got data", data);
            this.currentTime = data.time;
        }, e => {
            $log.warn("failed to load data", e);
        });
    }
}

module.component('homepage', {
    template: require('./homepage.html'),
    controller: HomepageController
});
