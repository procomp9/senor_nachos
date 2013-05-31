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

  var html = 'Señor Nacho B&B<br />' +
    '<a href="https://maps.google.com/?q=1037%20Mechem%20Dr,%20Lincoln%20National%20Forest,%20Ruidoso,%20Lincoln,%20New%20Mexico%2088345", target="_blank">' +
    '1037 Meachem Dr' +
    '<br />' +
    'Ruidoso, NM 88345</a>';
  var infoWindow = new google.maps.InfoWindow();
  infoWindow.setOptions({
      content: html,
      position: latlng,
  });
  infoWindow.open(map); 

  google.maps.event.addListener(marker, 'click', function() {
    map.setCenter(marker.getPosition());
    infoWindow.open(map);
  });
}