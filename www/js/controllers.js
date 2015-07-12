angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading, $http) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.reloaddata = function () {
     $http.get('http://smells.mybluemix.net/easyEndpoint').then(function(resp) {
        alert(resp);
        // For JSON responses, resp.data contains the result
        }, function(err) {
        alert('ERR');
        // err.status will contain the status code
      })
     return;
    };
      
    

  $scope.objectdata = {};



  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
       

// temp
      var lat = 47.385798;
     var lng = 8.532635; 

      $scope.map.setCenter(new google.maps.LatLng(lat,  lng));
      $scope.map.setZoom(17); 

      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };


 $scope.putmarkers = function() {


var objects = [{
        "_id": "f25f7252ff5832016e870d8ab085292f",
        "_rev": "1-6f509894534e976cd2d81c64a8f391d2",
        "sensorID": "12423232323",
        "lat": 47.385769,
        "lng":8.532807,
        "ranking": 2,
        "price": 2,
        "smell": 20
    },
    {
        "_id": "22f426c45568f0eb6a20e2e1327b4766",
        "_rev": "1-6f509894534e976cd2d81c64a8f391d2",
        "sensorID": "12423232323",
        "lat": 47.384703,
        "lng":8.534047,
        "ranking": 5,
        "price": 0,
        "smell": 100
    },
    {
        "_id": "22f426c45568f0eb6a20e2e1327b4766",
        "_rev": "1-6f509894534e976cd2d81c64a8f391d2",
        "sensorID": "12423232323",
        "lat": 47.385742,
        "lng":8.534315,
        "ranking": 1,
        "price": 1,
        "smell": 160
    }]; 

    var lat; 
    var lng;
    var icon;
    var markers = [];
    var marker; 
    
       
    objects.forEach( function(object){
      
      lat= object.lat;
      lng = object.lng; 
      if (object.smell <= 2)      { img = "../img/10.png";}
      else if ( object.smell <=40) { img = "../img/20.png";}
      else if ( object.smell <=100) { img = "../img/30.png";}
      else if (object.smell <= 300) { img = "../img/40.png";}
      else                          { img = "../img/50.png";}

      if ( object.price > 0 ) { 
        price = "" + object.price + ' CHF  ';
      }else {
        price="free"
      }

      if ( object.ranking <= 1) {rating_img ="../img/1star.png";}
      else if ( object.ranking <= 2) {rating_img ="../img/2star.png";}
      else if ( object.ranking <= 3) {rating_img ="../img/3star.png";}
      else if ( object.ranking <= 4) {rating_img ="../img/4star.png";}
      else if ( object.ranking <= 5) {rating_img ="../img/5star.png";}
      else {rating_img ="../img/0star.png";}

     icon = '<a href="#/tab/dash/select"  style="text-decoration: none"><table> <td align=right> <img src=' + img + ' width=70% align="right">'+ ' </td>' + 
           '<td> <img src=' + rating_img + ' height="17"> </br> smell: '+  (object.smell/2)+
           ' %</br><b> price: '+ price + '</b></td></table></a>';

    var marker = new RichMarker({
        position: new google.maps.LatLng(lat, lng),
        shadow: 'none',
        content: icon
    });
    markers.push(marker);

 
    })
    var cluster = new MarkerClusterer($scope.map, markers);


  }


})


.controller('RateCtrl', function(){

})

.controller('SelectCtrl', function(){
});




