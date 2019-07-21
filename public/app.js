strQ = [
  "aaaaaaaaaaaaaa",
  "bbbbbbbbbbbbbb",
  "ccccccccccccccc",
  "dddddddddddddd",
  "eeeeeeeeeeeeee",
  "ffffffffffffff",
  "gggggggggggggg",
  "hhhhhhhhhhhhhh",
  "iiiiiiiiiiiiii",
  "jjjjjjjjjjjjjjj"
];



$( document ).ready(function() {
    console.log( "ready!" );
    var userData = {"name": "Jason", "image": "hhhhhhhh",
        "scores":[1,2,3,4,5,4,3,2,1,4]                               
    };


var htmlQesAns ="";

for (var i =0; i<10; i++) {

qNum = i+1;    

htmlQesAns =
`<div class="question"> 
         ${qNum}. ${strQ[i]}
      </div>   
      <div class = "answer"> 
                <span>(strongly disagree)</span>  
                <input type="radio" name="${qNum}" value="1"> 1
                <input type="radio" name="${qNum}" value="2"> 2
                <input type="radio" name="${qNum}" value="3"> 3
                <input type="radio" name="${qNum}" value="4"> 4
                <input type="radio" name="${qNum}" value="5"> 5
                <span>(strongly agree) </span>
      </div>` ;    

$("#qTable").append($(htmlQesAns));
}

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