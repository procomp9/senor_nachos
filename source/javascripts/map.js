function drawMap(elem){

  var latlng = new google.maps.LatLng(33.354715,-105.668553);
  
  var mapOptions = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  var map = new google.maps.Map(document.getElementById(elem), mapOptions);

  var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"Señor Nacho B&B"
  });

}