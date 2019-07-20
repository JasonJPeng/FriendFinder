$( document ).ready(function() {
    console.log( "ready!" );
    var userData = {"name": "Jason", "image": "hhhhhhhh",
        "scores":[1,2,3,4,5,4,3,2,1,4]                               
    };

$("#submit").on("click", function(event) {
    event.preventDefault();
    $.post("/api/friends", userData, function(data) {

        console.log(data);

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.image);

        // // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
})

})