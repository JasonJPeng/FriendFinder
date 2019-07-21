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
    // var userData = {"name": "Jason", "image": "hhhhhhhh",
    //     "scores":[1,2,3,4,5,4,3,2,1,4]                               
    // };


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

$("input[name='image']").change(function(){
    var imgUrl = $("input[name='image']").val().trim(" ");
    if (imgUrl ==="") {
        $("#previewImg img").attr("height", "0")
    } else {
       $("#previewImg img").attr("src", imgUrl ).attr('width', "200px").attr('height', "200px");
    }   
})

$("#submit").on("click", function(event) {
    event.preventDefault();

    var userData = {
        name: $("input[name='name']").val(),
        image: $("input[name='image']").val(),
        scores: [
          $("input[name='1']:checked").val(),
          $("input[name='2']:checked").val(),
          $("input[name='3']:checked").val(),
          $("input[name='4']:checked").val(),
          $("input[name='5']:checked").val(),
          $("input[name='6']:checked").val(),
          $("input[name='7']:checked").val(),
          $("input[name='8']:checked").val(),
          $("input[name='9']:checked").val(),
          $("input[name='10']:checked").val()
        ]
      };

    

    $.post("/api/friends", userData, function(data) {

        console.log(data);
        console.log(userData);

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.image);

        // // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
})

})