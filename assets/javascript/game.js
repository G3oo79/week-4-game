$(document).ready(function(){
	//global variables
	var guessNumber = Math.floor((Math.random() * 102) + 19);
    var counter = 0;
    var gemYellow= Math.floor((Math.random() * 12) + 1);
    var gemBlue = Math.floor((Math.random() * 12) + 1);
    var gemRed = Math.floor((Math.random() * 12) + 1);
    var wins = 0;
    var losses = 0;
    //this is where the munber to match is randomize!!
    $("#totalnumber").text(guessNumber);
    /*alert(guessNumber);*/

    //this funtion is to capture gems clicks!!
	$("img").click(function(){
		
 /* alert("it works!");*/
 });

    //this is 
    $(".yellowgem").click(function() {
    select(gemYellow);
    console.log(gemYellow);
    });
    $(".bluegem").click(function() {
    select(gemBlue);
    console.log(gemBlue);
    });
    $(".redgem").click(function() {
    select(gemRed);
    console.log(gemRed);
    });

    //
    function reset(){
    	guessNumber = Math.floor((Math.random() * 102) + 19);
    	$("#totalnumber").text(guessNumber);
    	/*alert(guessNumber);*/
    	counter = 0;
    	$("#numbercount").text(counter);
    	gemYellow= Math.floor((Math.random() * 12) + 1);
    	gemBlue = Math.floor((Math.random() * 12) + 1);
   		gemRed = Math.floor((Math.random() * 12) + 1);
    }

    //
    function select(crystals) {
      counter += crystals;
      $('#numbercount').empty();
      $('#numbercount').append(counter);

      if (counter > guessNumber) {
        losses++;
        $('#losser').html(losses);
        sweetAlert("Oops...", 
        "Sorry you Lost!", "error");
        reset();
      } else if (counter == guessNumber) {
        wins++;
        $('#winner').html(wins);
        swal("Good job!", "You Won!", "success")
        reset();
      };

    };

});
