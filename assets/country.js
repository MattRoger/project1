var countrySearch;
console.log("start");

// If statement with model linked to empty string
$("#search").on("click", function (event) {
    event.preventDefault();
    console.log("clicked")

    var countrySearch = $("#cSearch").val().trim()


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
            $(".country-info").css({display:"block"});
            console.log(response)
            console.log(response[0].nativeName)
            console.log(response[0].capital)
            console.log(response[0].population)
            console.log(response[0].region)
            console.log(response[0].currencies[0].name)
        })


} else { 

$("#enterCountry").css({display:"block"})
}
})

$("#close").on("click", function(){
    $("#enterCountry").css({display:"none"})
})