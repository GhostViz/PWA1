/*
Name: Freddie Nichols
Date: 11/02/2013
Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

console.log("FIGHT!");

// Player 1 vars
var playerOneName = "Spiderman";
var playerOneHealth = 100;
var playerOneDamage = 20;

// Player 2 vars
var playerTwoName = "Batman";
var playerTwoHealth = 100;
var playerTwoDamage = 20;

var round = 0;

function fight()
{
	console.log('in the fight function');

	alert(playerOneName+":"+playerOneHealth+" * START * "+playerTwoName+":"+playerTwoHealth)
	for(var i=0; i < 10; i++)
	{
		var minDmg1 = playerOneDamage * .5;
		var minDmg2 = playerTwoDamage * .5;
		var f1 = Math.floor(Math.random() * (playerOneDamage - minDmg1) + minDmg1);
		var f2 = Math.floor(Math.random() * (playerTwoDamage - minDmg2) + minDmg2);

		playerOneHealth -= f1;
		playerTwoHealth -= f2;

		console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

		var results = winnerCheck();

		console.log(results);

		if(results === "No winner!")
		{
			round++;
			alert(playerOneName+":"+playerOneHealth+" * Round "+ round+" Is Over! * "+playerTwoName+":"+playerTwoHealth);
		}
		else
		{
			alert(results);
			break;
		}
	}

};

function winnerCheck()
{
	console.log('In winnerCheck');

	var result = "No winner!";

	if(playerOneHealth < 1 && playerTwoHealth < 1 )
	{
		result = "You both died!"
	}
	else if(playerOneHealth < 1 )
	{
		result = playerTwoName + " Wins!"
	}
	else if(playerTwoHealth < 1 )
	{
		result = playerOneName + " Wins!"
	};

	return result;

};

console.log('program starts');
fight();

})();