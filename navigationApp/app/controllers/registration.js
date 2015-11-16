
angular.module('myApp').controller('RegistrationCtrl',
    function RegistrationCtrl($scope, DataFactory){
        'use strict';
        $scope.customer = {};
        $scope.selected = undefined;
        $scope.tabIndex = 0;
        $scope.buttonLabel = "Next";

        /*Initializing the tabs for display*/
        $scope.tabs = [
            { title:'Step 1', content:'views/step1Partial.html', disabled: false },
            { title:'Step 2', content:'views/step2Partial.html', disabled: true },
            { title:'Step 3', content:'views/step3Partial.html', disabled: true },
            { title:'Step 4', content:'views/step4Partial.html', disabled: true }
        ];

        /*Retrieving the states from service*/
        DataFactory.getStates().success(function(jsonData, statusCode){
            $scope.data = {
                states: jsonData
            };
        });

        /*Validate location to be from the allowed values*/
        $scope.validateLocation = function(){
            var newVal = $scope.customer.location;
            if (newVal == undefined || newVal == "") return;
            // if not selected in array of typeahead, change the value by empty string
            if($.inArray(newVal, $scope.data.states) === -1){
                $scope.customer.location = '';

            };
        };

        /*Progress bar status determination*/
        var getCurrentProgressState = function(currentState){
            switch (currentState) {
                case 0:
                    return 0;
                case 1:
                    return 33;
                case 2:
                    return 66;
                case 3:
                    return 100;
                default:
                    return 0;
            }

        };

        /*Determining the button label and progress bar completion based on the current step*/
        $scope.tabSelected = function(index) {
            $scope.customer.progress = getCurrentProgressState(index);

            $scope.tabIndex = index;
            if($scope.tabIndex === $scope.tabs.length -2){
                $scope.buttonLabel = "Confirm";
            }
            else{
                $scope.buttonLabel = "Next";
            }

                var i, j;
                for(i = 0 ; i <=$scope.tabIndex; i++){
                    $scope.tabs[i].disabled = false;
                }
                j = $scope.tabIndex +1;
                for(j ; j <=$scope.tabs.length -1; j++){
                    $scope.tabs[j].disabled = true;
                }

        }

        $scope.proceed = function() {
            if($scope.tabIndex !== $scope.tabs.length -1 ){
                $scope.tabs[$scope.tabIndex].active = false;
                $scope.tabIndex++;
                $scope.tabs[$scope.tabIndex].active = true;
            }

        };

        /*Initializing Date Picker*/
        $scope.today = function() {
            $scope.customer.departdate = new Date();
            $scope.customer.returndate = new Date();
        };

        $scope.today();
        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.openDepartDate = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.openedDepartDate = true;
            setTimeout(function() {
                $scope.openedDepartDate = false;
            }, 10);
        };

        $scope.openReturnDate = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.openedReturnDate = true;
            setTimeout(function() {
                $scope.openedReturnDate = false;
            }, 10);
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };
        $scope.returnDateCheck = function(){
            $scope.returnDateError = false;

            if($scope.customer.returndate < $scope.customer.departdate){
                $scope.returnDateError = true;
            }

        };

        /*Initializing time picker*/
        $scope.customer.departTime = new Date();
        $scope.customer.returnTime = new Date();

        $scope.updateReturnTime = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            $scope.customer.returnTime = d;
        };

        $scope.updateDepartTime = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            $scope.customer.departTime = d;
        };
    }
);