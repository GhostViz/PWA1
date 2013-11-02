/*
Name: Freddie Nichols
Date: 10/24/2013
Assignment: Goal4: Assignment: Duel3
*/

// self-executing function
(function(){

console.log("FIGHT!");

// Player 1 Object
var fighter1 = { name:"Spiderman", maxDamage: 20, health: 100 };

// Player 2 Object
var fighter2 = { name:"Batman", maxDamage: 20, health: 100 };

// round number
var round = 0;

// fight
function fight()
{
	console.log('in the fight function');

	// alert to start the fight
	alert(fighter1[0]+":"+fighter1[2]+" * START * "+fighter2[0]+":"+fighter2[2]);

	// start the loop
	for(var i=0; i < 10; i++)
	{
		// set min damage for both fighters
		var minDmg1 = fighter1[1] * .5;
		var minDmg2 = fighter2[1] * .5;

		// calculte damage
		var f1 = Math.floor(Math.random() * (fighter1[1] - minDmg1) + minDmg1);
		var f2 = Math.floor(Math.random() * (fighter2[1] - minDmg2) + minDmg2);

		// do the damage
		fighter1[2] -= f1;
		fighter2[2] -= f2;

		console.log(fighter1[0]+":"+fighter1[2]+" "+fighter2[0]+":"+fighter2[2]);

		// return the results
		var results = winnerCheck();

		console.log(results);

		// check the results 
		if(results === "No winner!")
		{
			round++;
			alert(fighter1[0]+":"+fighter1[2]+" * Round "+ round+" Is Over! * "+fighter2[0]+":"+fighter2[2]);
		}
		else
		{
			alert(results);
			break;
		}
	}

};

// check for a winner
function winnerCheck()
{
	console.log('In winnerCheck');

	var result = "No winner!";

	if(fighter1[2] < 1 && fighter2[2] < 1 )
	{
		result = "You both died!"
	}
	else if(fighter1[2] < 1 )
	{
		result = fighter2[0] + " Wins!"
	}
	else if(fighter2[2] < 1 )
	{
		result = fighter1[0] + " Wins!"
	};

	return result;

};

console.log('program starts');
fight();

})();