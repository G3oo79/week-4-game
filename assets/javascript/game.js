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
    $(".totalnumber").text(guessNumber);
    /*alert(guessNumber);*/

    //this funtion is to capture gems clicks!!
	$("img").click(function(){
		/*$(".yellowgem").animate({fontSize: '1000'},2000);*/
 /* alert("it works!");*/
 });

    //
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

    }

    //
    function select(crystals) {
      counter += crystals;
      $('#numbercount').empty();
      $('#numbercount').append(counter);

      if (counter > guessNumber) {
        losses++;
        $('#losses').html(losses);
        
        reset();
      } else if (counter == guessNumber) {
        wins++;
        $('#winner').html(wins);
        
        reset();
      };

    };










});
