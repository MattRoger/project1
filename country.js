
console.log("start");
$("#search").submit( function(event){
    event.preventDefault();
    console.log("clicked")
    var countrySearch=$("#cSearch").val().trim()
    console.log($("#cSearch").val().trim())
    console.log(countrySearch)
    var countryURL= "https://restcountries.eu/rest/v2/name/"+ countrySearch;
    console.log(countryURL)
    $.ajax({
        url:countryURL,
        method: "GET"
    }).then (function(response){
        console.log(response)
    })

    

})


