function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(43.1676109,-88.3101448),
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.HYBRID,
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
myMap();

