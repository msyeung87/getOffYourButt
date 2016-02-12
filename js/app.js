$(function(){

$('#thirtyMin').on("click", function(){
	alertMsg();
	hideButtons();
	setInterval(alertMsg, 30*60*1000); // every 30 minutes
});

$('#fortyFiveMin').on("click", function(){
	alertMsg();
	hideButtons();
	setInterval(alertMsg, 45*60*1000); // every 45 minutes

});

$('#hourly').on("click", function(){
	alertMsg();
	hideButtons();
	setInterval(alertMsg, 60*60*1000); // every hour
});

// validate only numbers are being entered
$('#customTime').keydown(function(event) {
    // Allow special chars + arrows 
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 
        || event.keyCode == 27 || event.keyCode == 13 
        || (event.keyCode == 65 && event.ctrlKey === true) 
        || (event.keyCode >= 35 && event.keyCode <= 39)){
            return;
    }else {
        // If it's not a number stop the keypress
        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault(); 
        }   
    }
});

$('#customButton').on("click", function(){
	alertMsg();
	var customTime = $('#customTime').val();
	setInterval(alertMsg, customTime*60*1000);
	hideButtons();
})

function hideButtons(){
	$('#thirtyMin').hide();
	$('#fortyFiveMin').hide();
	$('#hourly').hide();
	var refresh = "<br><input type='button' class='button_done button' onClick='history.go(0)' value='Finish Workout'>";
	$('#mainButtons').html('<h2>Ok let\'s get started!');
	$('#mainButtons').append(refresh);
}

// Getting random exercise
function randomExercise(){
	var arrayExercise = ['Push Up', 'Sit Up', 'Jumping Jack', 'Squats', 'Leg Raise', 'Ab Crunch', 'Plank', 'Heel touches', 'Chair Dips', 'High Knees', 'Lunges', 'Side to Side Lunges', 'Climbers', 'Bicycle Crunches'];
	var chosenExercise = Math.floor(Math.random() * arrayExercise.length);
	return arrayExercise[chosenExercise];
};

// Getting random number of reps
function randomReps(){
	var arrayReps = ['10', '15', '20', '25', '30'];
	var chosenReps = Math.floor(Math.random() * arrayReps.length);
	return arrayReps[chosenReps];
};

function alertMsg(){
	swal({   
		title: randomExercise()+': '+randomReps()+' reps',   
		timer: 17000,   
		showConfirmButton: true 
	});
	playMusic();
};

function playMusic(){
	var player = document.getElementById('music');
	setTimeout(function(){
	    player.play();
	    setTimeout(function(){
	        player.pause();
	        player.currentTime = 0;
	    }, 17000); // plays for only 17 seconds
	}, 0); // time delay to start music, 0 seconds
};




var d = new Date();
var n = d.getFullYear();
$('#footer').append("Copyright "+n+" | Get Off Your Butt by Matt Yeung")

});