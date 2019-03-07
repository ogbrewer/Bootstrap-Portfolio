var topics = ["Yamaha", "Honda", "Harley", "Kawasaki", "Suzuki"]



function makeButtons() {  //generates buttons from Topics

  $("#motoview").empty();

  for (var i = 0; i < topics.length; i++) {


    var a = $("<button>");
    a.attr("data-motorcycle", topics[i]);
    a.text(topics[i]);
    $("#motoview").append(a);
  }

}

$("#add-bike").on("click", function (event) { //allows you to add to Topics

  event.preventDefault();

  var topic = $("#name-input").val().trim();
  console.log(topic);
  topics.push(topic);
  console.log(topics);





  makeButtons();

});

$(document).on("click", "button", function () { //connecting buttons
  var motorcycle = $(this).attr("data-motorcycle");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    motorcycle + "&api_key=VQQWbrTPXO4uxcgqUPk295whNafMY3iF&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var topics = response.data;

    console.log(topics);
    for (var i = 0; i < topics.length; i++) {
      var gifDiv = $("<div class='giph'>");

      var rating = topics[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var motorcycleImage = $("<img>");
      motorcycleImage.addClass("gif")
      motorcycleImage.attr("src", topics[i].images.fixed_height_still.url);
      motorcycleImage.attr("data-still", topics[i].images.fixed_height_still.url);
      motorcycleImage.attr("data-animate", topics[i].images.fixed_height.url);



      gifDiv.prepend(p);
      gifDiv.prepend(motorcycleImage);

      $("#gifs-appear-here").append(gifDiv);
    
    }
    console.log(response);

$(".gif").on("click", function () {
        var state = $(this).attr("data-state");

        if (state === "animate") {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }

        else {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        }
      });
      makeButtons();

  });

});
makeButtons();


  