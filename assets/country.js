$(document).ready(function start() {
    
    $.ajax({
        url: "https://restcountries.eu/rest/v2/name/USA",
        method: "GET"


    }).then(function (response) {
        $(".country-info").css({ display: "block" })
        $("#name").text("Country: " + response[0].name)
        $("#native-name").text("Native Name: " + response[0].nativeName)
        $("#capital").text("Capital: " + response[0].capital)
        $("#population").text("Population: " + response[0].population)
        $("#region").text("Region: " + response[0].region)
        $("#currency").text("Currency: " + response[0].currencies[0].name)
        console.log(response, "test")
        console.log(response[0].nativeName)
        console.log(response[0].capital)
        console.log(response[0].population)
        console.log(response[0].region)
        console.log(response[0].currencies[0].name)
        //   

    })
}
)
var countrySearch;
console.log("start");
$("#search").on("click", function (event) {
    event.preventDefault();
    console.log("clicked")

    var countrySearch = $("#cSearch").val().trim()


    var countryURL = "https://restcountries.eu/rest/v2/name/" + countrySearch;




    $.ajax({
        url: countryURL,
        method: "GET"


    }).then(function (response) {
        $(".country-info").css({ display: "block" })
        $("#name").text("Country: " + response[0].name)
        $("#native-name").text("Native Name: " + response[0].nativeName)
        $("#capital").text("Capital: " + response[0].capital)
        $("#population").text("Population: " + response[0].population)
        $("#region").text("Region: " + response[0].region)
        $("#currency").text("Currency: " + response[0].currencies[0].name)
        $("#cSearch").val("")
        console.log(response)
        console.log(response[0].nativeName)
        console.log(response[0].capital)
        console.log(response[0].population)
        console.log(response[0].region)
        console.log(response[0].currencies[0].name)

        var cityLocation = response[0].capital;
        var APIKey = "08201fdb1a365def49e6181967f0815d";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&appid=" + APIKey + "&units=imperial";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            $(".city").html("<h1>" + response.name + "</h1>");
            $(".wind").text("Wind speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature: " + response.main.temp);

        });

    })

    var countryURL = "https://restcountries.eu/rest/v2/name/" + countrySearch;

    if (countrySearch !== "") {
        $.ajax({
            url: countryURL,
            method: "GET"
        }).then(function (response) {
            $("#name").text("Country: " + response[0].name);
            $("#native-name").text("Native Name: " + response[0].nativeName);
            $("#capital").text("Capital: " + response[0].capital);
            $("#population").text("Population: " + response[0].population);
            $("#region").text("Region: " + response[0].region);
            $("#currency").text("Currency: " + response[0].currencies[0].name);
            $(".country-info").css({ display: "block" });
            console.log(response)
            console.log(response[0].nativeName)
            console.log(response[0].capital)
            console.log(response[0].population)
            console.log(response[0].region)
            console.log(response[0].currencies[0].name)
        })


    } else {

        $("#enterCountry").css({ display: "block" })
    }
})

$("#close").on("click", function () {
    $("#enterCountry").css({ display: "none" })
})