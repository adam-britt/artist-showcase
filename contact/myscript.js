//function myMap() {
//	var mapOptions = {
//		center: new google.maps.LatLng(43.1676109,-88.3101448),
//		zoom: 17,
//		mapTypeId: google.maps.MapTypeId.HYBRID,
//	}
//	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//}

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(43.1676109,-88.3101448),
        zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
};

myMap();

