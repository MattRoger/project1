console.log('javascript loaded');

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// var cityLocation = $("#capital").text();
// var APIKey = "08201fdb1a365def49e6181967f0815d";
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&appid=" + APIKey + "&units=imperial";

// // Created an AJAX call
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);

//     $(".city").html("<h1>" + response.name + "</h1>");
//     $(".wind").text("Wind speed: " + response.wind.speed);
//     $(".humidity").text("Humidity: " + response.main.humidity);
//     $(".temp").text("Temperature: " + response.main.temp);

// });