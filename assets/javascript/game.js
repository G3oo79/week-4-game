$(document).ready(function(){
	//global variables
    //=====================================================

	var guessNumber = Math.floor((Math.random() * 102) + 19);
    var counter = 0;
    var gemYellow= Math.floor((Math.random() * 12) + 1);
    var gemBlue = Math.floor((Math.random() * 12) + 1);
    var gemRed = Math.floor((Math.random() * 12) + 1);
    var wins = 0;
    var losses = 0;


    //this method sets a random number into the selector.
    //======================================================
    $("#totalnumber").text(guessNumber);
    /*alert(guessNumber);*/

    //this funtion is to capture gems clicks!!
    //==========================================
	$("img").click(function(){
		
 /* alert("it works!");*/
 });

    //this are my click events
    //================================
    $(".yellowgem").click(function() {
    select(gemYellow);
    //set the animation by setting up a function
    //==============================================
    $(".yellowgem").addClass("shake");
    setTimeout(function(){ $(".yellowgem").removeClass("shake"); }, 1000);
    
    });
    $(".bluegem").click(function() {
    select(gemBlue);
     //set the animation by setting up a function
    //==============================================
    $(".bluegem").addClass("shake");
    setTimeout(function(){ $(".bluegem").removeClass("shake"); }, 1000);
    });
    $(".redgem").click(function() {
    select(gemRed);
     //set the animation by setting up a function
    //==============================================
    $(".redgem").addClass("shake");
    setTimeout(function(){ $(".redgem").removeClass("shake"); }, 1000);
    });

    //Reset very important!! resets the gems and the "your total number"
    //==================================================================
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

    //function for counters and alerts ! very difficult to get this to work!!
    //need more practice!!!..
    //=======================================================================
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
