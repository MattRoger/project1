$("#select-country").on("click", function(event) {
    event.preventDefault();
    console.log("hello");
    //
    var country = $("#country").val();
    console.log(country);
    // 
    var newsURL = "https://newsapi.org/v2/top-headlines?country=" +
        country + "&sources?language=en&apiKey=3ffac87758e944bab93103205e543edf";
    console.log(newsURL);

    $.ajax({
        url: newsURL,
        method: "GET"
    }).then(function(response) {
        var results = response.articles;
        console.log(response)
        //
        for (var i = 0; i < results.length; i++) {
            //
            var newsDiv = $("<div>");
            console.log("hit for loop")
            var imageURL = results[i].urlToImage;
            var title = results[i].title;
            var description = results[i].description;

            var h1 = $("<h1>").text(title);
            var p = $("<p>").text(description);

            var newsImage = $("<img>");
            newsImage.attr("src", imageURL);


            newsDiv.prepend(h1);
            newsDiv.prepend(p);
            newsDiv.prepend(newsImage);
            $("#news-view").prepend(newsDiv);
            // $("#news-view").text("hello")
        }

    });


});
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