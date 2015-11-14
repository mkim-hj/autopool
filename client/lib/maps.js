Template.maps.onRendered(function() {
	Meteor.startup(function() {
	  GoogleMaps.load();
	});
});

var start;
var end;

Template.maps.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
	GoogleMaps.maps.exampleMap.instance.addListener('click', function(event) {
		// console.log($("#start-location").val());
		if ($("#start-location").val()) {
			$("#end-location").val(event.latLng)
			end = event.latLng;
		} else {
			$("#start-location").val(event.latLng)
			start = event.latLng;
		}
		console.log(event.latLng);
		var marker = new google.maps.Marker({
			position: (event.latLng),
			map:map.instance
		});
	});
  });
});

Template.maps.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(37.778965, -122.234049),
        zoom: 9
      };
    }
  }
});

Template.maps.events({
	'click .confirm-button': function(event) {
		Meteor.http.call(
			"GET",
			"http://mike-hack-day-8472588.us-east-1.elb.amazonaws.com/user/U_1234/carpool/",
			{params: {
				"start_lat": 37.7236373,
				"start_lon": -122.4595594,
				"end_lat": 37.751376,
				"end_lon":-122.494138,
				"start_time": "17:37",
				"end_time": "17:49"
			}},
			function(err, result) {
				Router.go("/matches");
		  		if (!err) {
		  			console.log(result);
		  		} else {
		  			console.log(err);
		  			// Trigger error in loading animation
		  		}
		});
	}
})
