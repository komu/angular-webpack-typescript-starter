import module from './module';

module.component('hello', {
    template: require('./hello.html'),
    bindings: {
        target: '@'
    }
});
