angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives','ionic.rating'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash.html',
        controller: 'MapCtrl'
      }
    }
  })

 .state('tab.select', {
    url: '/dash/select',
    views: {
      'tab-dash': {
        templateUrl: 'templates/select.html',
        controller: 'MapCtrl'
      }
    }
  })

 .state('tab.rate', {
    url: '/dash/select/rate',
    views: {
      'tab-dash': {
        templateUrl: 'templates/rate.html',
        controller: 'RateCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

