
var userLocation = document.getElementById("demo");
var url;

//Get user geolocation
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(getWeather);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getWeather(position) {
    hideEverything();
    url = "https://api.darksky.net/forecast/ffe452a30d83e1c14922cbd980efe63b/" + position.coords.latitude + "," + position.coords.longitude;
   	//Parse JSON  
   	$.ajax({
	    dataType: "jsonp",
	    url: url,
	     success: function(forecast) {
	   	 		getWeatherObject(forecast);
	   	 }
		});
    console.log("You successfully parsed the JSON.")
}

//GET information I need regarding weather.
function getWeatherObject(forecast){
	//this is where I'll collect the information from API
	var button = document.getElementById("button");
	var temperature = forecast["currently"]["temperature"];
	var summary = forecast["currently"]["summary"];
	var windspeed = forecast["currently"]["windSpeed"] + " mph";
	var humdity = (forecast["currently"]["humidity"]) * 100 + "%";
	var icon = forecast["currently"]["icon"];
	
	//and then get values
	document.getElementById("temperature").innerHTML = temperature.toPrecision(2) + "<span class='degree'>&#8457;</span>";
	document.getElementById("summary").innerHTML = summary;
	document.getElementById("windspeed").innerHTML = windspeed;
	document.getElementById("humidity").innerHTML = humdity;
	
	// document.getElementById("icon-name").innerHTML = icon;

	//display icon
	var icons = new Skycons({"color": "#fff7e4"});
		icons.set("icon_id", icon);
		console.log(Skycons.CLEAR_DAY);
		icons.play();
	
	//remove loadingGif
	$("#modal").hide("slow");
	showEverything();

	//onclick, toggles temperature from F to C vice-versa.
		$("#button").toggle(function() {
	  	$("#temperature").html(convertFtoC(temperature) + "<span class='degree'>&#8451;</span>");
	}, function() {
	  $("#temperature").html(temperature.toPrecision(2) + "<span class='degree'>&#8457;</span>");
	});
}



function convertFtoC(temperature){
	var newTemp = ((temperature - 32)*5)/9;
	return newTemp.toPrecision(2);
}



/*initiate *possible have a button where USER clicks "show me da weather" then it 'loads'*/
function myFunction(){
  // hideEverything();
  getLocation();
  $("#get-weather").remove();
  $('#modal').show();
  // setTimeout(showEverything,2000);
}

// hide everything
$("#footer").hide();
function hideEverything(){
	// $('#weather-box').hide();
	$("#weather-box").hide();
}

function showEverything(){
	// $('#weather-box').show();
	$("#weather-box").show("slow");
	$("#footer").show("slow");
}






