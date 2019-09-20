
console.log("start");
$("#search").submit( function(event){
    event.preventDefault();

    var countrySearch=$("#cSearch").val().trim()


    var countryURL= "https://restcountries.eu/rest/v2/name/"+ countrySearch;
    
    $.ajax({
        url:countryURL,
        method: "GET"
    }).then (function(response){
        $("#name").text(response[0].nativeName)
        $("#capital").text(response[0].capital)
        $("#population").text(response[0].population)
        $("#region").text(response[0].region)
        $("#currency").text(response[0].currencies[0].name)
        console.log(response)
        console.log(response[0].nativeName)
        console.log(response[0].capital)
        console.log(response[0].population)
        console.log(response[0].region)
        console.log(response[0].currencies[0].name)
    })

    

})


