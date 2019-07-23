strQ = [
  "Do you believe love changes you? ",
  "Do you think people should change themselves to find love?",
  "Do you think the way your family loves has affected the way you love?",
  "Is happiness possible with a man or a woman who is not free?",
  "Is sex more of a physical connection for you, or emotional?",
  "Have you ever loved someone who you hoped would change for you?",
  "Do you believe vulnerability is a good thing when it comes to love?",
  "Do you believe people can change if they love someone?",
  "Do you believe in love at first sight?",
  "Am I the only judge of all that concerns me?"
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

$("#viewAll").on("click", function(event) {
  event.preventDefault();
  $.get("/api/friends", function (data) {
    
    data.forEach( function (e) {
    htmlCode = 
    `<figure class="figure">
    <img src="${e.image}" class="figure-img img-fluid rounded friendPhoto" alt="">
    <figcaption class="figure-caption">${e.name.substring(0,16)}</figcaption>
    </figure>  
    `
    $("#displayAll").prepend($(htmlCode));
    })
     
  })
}) 

$("#submit").on("click", function(event) {
    event.preventDefault();
    $("#warning").html("");
    var userData = {
        name: $("input[name='name']").val().trim(" "),
        image: $("input[name='image']").val().trim(" "),
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
    
///////   Validate the form ============      
    if (userData.name === "" ) {
      $("#warning").html("Please enter your name ");
      return;
    }   
    
    if (userData.image === "") {
      $("#warning").html("Please enter the link to your photo  ");
      return;
    } 
    
    console.log(userData.scores);

    for (var iErr = 0; iErr < userData.scores.length; iErr++ ) {
       if (typeof userData.scores[iErr]  === 'undefined') {
        $("#warning").html("Please answer question # " + (iErr + 1) );
         return;  
       }
    }

/////// =================================    
    

    $.post("/api/friends", userData, function(data) {

        console.log(data);
        console.log(userData);

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.image);
        
        $("#match-name1").text(userData.name);
        $("#match-img1").attr("src", userData.image);
    

        // // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
})

})