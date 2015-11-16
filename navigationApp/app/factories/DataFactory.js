angular.module('myApp').factory('DataFactory',
    function DataFactory($q, $http, $location){
        'use strict';
        var exports = {};
        exports.getStates = function(){
            return $http.get('json/states.json')
                .error(function(data){
                    console.log('There is an error!', data);
                });

        };
        return exports;
    }

);