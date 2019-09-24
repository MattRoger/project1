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
        var newsDiv = $("<div>");
        console.log(results)
            //
        for (var i = 0; i < results.length; i++) {
            //
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
        }

    });


});