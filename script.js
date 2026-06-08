console.log("Programmed by Link Kelly (LinkGoesBowling)");
let shot1Count = undefined;
let shot2Count = undefined;
let shot3Count = undefined;
let shot4Count = undefined;
let shot5Count = undefined;
let shot6Count = undefined;
let shot7Count = undefined;
let shot8Count = undefined;
let shot9Count = undefined;
let shot10Count = undefined;
let shot11Count = undefined;
let shot12Count = undefined;
let shot13Count = undefined;
let shot14Count = undefined;
let shot15Count = undefined;
let shot16Count = undefined;
let shot17Count = undefined;
let shot18Count = undefined;
let shot19Count = undefined;
let shot20Count = undefined;
let shot21Count = undefined;
let shot22Count = undefined;
let shot = 1;
let score = 0;
let previousShot = 0;
let twoShotsAgo = 0;
let doubleStrike = false;
let strikeFollowedByPinCount = false;
let isTenthFrame = false;
let strikeButtonPressed = false;
let spareButtonPressed = false;
let shot20Completed = false;
let allGames = [];

function addPins(count){
		if (shot === 19 || shot === 20 || shot === 21){
			tenthFrame(count);
		}
	if (shot === 2 || shot === 4 || shot === 6 || shot === 8 || shot === 10 || shot === 12 || shot === 14 || shot === 16 || shot === 18){
		if (previousShot === 10 - count){
			addSpare();
			return;
		}
		if (previousShot > 10 - count){
			console.log("You can't have more than 10 pins in a frame!");
		}
		else {
			console.log(count + " pins added to score");
			shot++;
			previousShot = count;
			if (twoShotsAgo !== 10) {
				score += count;
			}
			if (twoShotsAgo === 10){
			score += count * 2;
		}
		strikeFollowedByPinCount = false;
		}
	}
	else if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17){
		console.log(count + " pins added to score");
		shot++;
		if (previousShot === "spare"){
			score += count;
		}
		if (previousShot === 10 && doubleStrike === false){
			score+= count;
			strikeFollowedByPinCount = true;

		}
		if (doubleStrike === true){
			score += count * 3;
			strikeFollowedByPinCount = true;
			doubleStrike = false;
		}
		else {
			score += count;
		}
		
		if (previousShot === 10){
			twoShotsAgo = 10;
			doubleStrike = false;
		}
		if (previousShot !== 10){
			twoShotsAgo = 0;
		}
		previousShot = count;
	}
	if (shot === 1){
		shot1Count = count;
	}
	if (shot === 2){
		shot2Count = count;
	}
	if (shot === 3){
		shot3Count = count;
	}
	if (shot === 4){
		shot4Count = count;
	}
	if (shot === 5){
		shot5Count = count;
	}
	if (shot === 6){
		shot6Count = count;
	}
	if (shot === 7){
		shot7Count = count;
	}
	if (shot === 8){
		shot8Count = count;
	}
	if (shot === 9){
		shot9Count = count;
	}
	if(shot === 10){
		shot10Count = count;
	}
	if (shot === 11){
		shot11Count = count;
	}
	if (shot === 12) {
		shot12Count = count;
	}
	if (shot === 13){
		shot13Count = count;
	}
	if (shot === 14){
		shot14Count = count;
	}
	if (shot === 15){
		shot15Count = count;
	}
	if (shot === 16){
		shot16Count = count;
	}
	if (shot === 17){
		shot17Count = count;
	}
	if (shot === 18){
		shot18Count = count;
	}
	console.log("Score: " + score);
}
function addStrike(){
	strikeButtonPressed = true;
	if (shot === 19 || shot === 20 || shot === 21){
	tenthFrame(10);
	}
	if (previousShot !== 10){
		doubleStrike = false;
	}
	if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17 || shot === 19){
	if (previousShot === "spare"){
		console.log("STRIIIIIIIKE!!!");
		shot++;
		shot++;
		score += 20;
	}
	if (previousShot !== "spare" && previousShot !== 10) {
		console.log("STRIIIIIIIKE!!!");
		shot++;
		shot++;
		score += 10;
	}
	if (previousShot === 10 && doubleStrike === false){
		console.log("STRIIIIIIIKE!!!");
		score += 20;
		shot++;
		shot++;
		twoShotsAgo = 10;
	}
	if (doubleStrike === true){
		console.log("STRIIIIIIIKE!!!");
		score += 30;
		shot++;
		shot++;
	}
	console.log(shot);
	if (shot === 17){
		shot17Count = 10;
	}
	}
	else if (shot === 2 || shot === 4 || shot === 6 || shot === 8 || shot === 10 || shot === 12 || shot === 14 || shot === 16 || shot === 18){
		console.log("It's the second shot! Click the spare button instead.");
	}
	console.log("Score: " + score);
	if (previousShot === 10){
		doubleStrike = true;
	}
	previousShot = 10;
	strikeButtonPressed = false;
}
function addSpare(){
	spareButtonPressed = true;
	spareButtonPressed = false;
	if (shot === 2 || shot === 4 || shot === 6 || shot === 8 || shot === 10 || shot === 12 || shot === 14 || shot === 16 || shot === 18){
	if (strikeFollowedByPinCount === true){
		console.log("Congrats! You got a spare.");
		score += (10 - previousShot) * 2;
		strikeFollowedByPinCount = false;
		shot++;
		twoShotsAgo = previousShot;
		previousShot = "spare";
	}
	else if (strikeFollowedByPinCount === false){
	console.log("Congrats! You got a spare.");
	shot++;
	score += 10 - previousShot;
	twoShotsAgo = previousShot;
	previousShot = "spare";
	}
	}
	else if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17 || shot === 19){
		console.log("That's the first shot of the frame!");
	}
	else if (shot === 21) {
		tenthFrame(10 - shot20Count);
	}
	else if (shot === 22) {
		if (shot21Count === 10){
			tenthFrame(10 - shot21Count);
		}
		else {
			console.log("Not a spare situation")
		}
	}
	
	console.log("Score: " + score);
	console.log(shot);
}
function tenthFrame(shots){
	if (shot === 19){
		shot++;
	}
	if (shot === 20 && shot20Completed === false){
		if (doubleStrike === true){
			console.log("Shot 20");
			score += shots * 3;
			shot20Count = shots;
			shot20Completed = true;
		}
		if (doubleStrike === false && previousShot !== 10 && previousShot !== "spare"){
			console.log("Shot 20");
			score += shots;
			shot20Count = shots;
		}
		if (doubleStrike === false && previousShot === 10 || previousShot === "spare"){
			console.log("Shot 20");
			score += shots * 2;
			shot20Count = shots;
		}
		if (previousShot !== 10){
			doubleStrike = false;
		}
		shot++;
		return;
	}
	if (shot === 21){
		console.log("Shot 21");
		if (doubleStrike === true && shot20Count === 10){
			score += shots * 2;
			shot++;
		}
		if (doubleStrike === false && shot20Count === 10){
			score += shots;
			shot++;
		}
		if (shot20Count !== 10){
			if (shots > 10 - shot20Count){
				console.log("You can't hit more than 10 pins in a frame!");
			}
			if (shots === 10 - shot20Count || spareButtonPressed === true){
				if (shot17Count === 10){
					score += shots * 2;
					shot++;
				}
				if (shot17Count !== 10){
					score += shots;
					shot++;
				}
			}
			if (shots < 10 - shot20Count){
				if (shot17Count !== 10){
					score += shots;
					console.log("Shot 17 was not a strike");
					endGame();
				}
				if (shot17Count === 10){
					score += shots * 2;
					console.log("Shot 17 was a strike");
					endGame();
				}
			}
			else{
				score += 10 - shot20Count;
				shot++;
			}
		}
		if (previousShot === 10 && doubleStrike === false){
			score += shots;
			shot++;
		}
		console.log(shot);
	}
if (shot === 22){
		console.log("Shot 22");
		score += shots;
		endGame();
	}
}
function endGame(){
	allGames.push(score);
 shot1Count = undefined;
 shot2Count = undefined;
 shot3Count = undefined;
 shot4Count = undefined;
 shot5Count = undefined;
 shot6Count = undefined;
 shot7Count = undefined;
 shot8Count = undefined;
 shot9Count = undefined;
 shot10Count = undefined;
 shot11Count = undefined;
 shot12Count = undefined;
 shot13Count = undefined;
 shot14Count = undefined;
 shot15Count = undefined;
 shot16Count = undefined;
 shot17Count = undefined;
 shot18Count = undefined;
 shot19Count = undefined;
 shot20Count = undefined;
 shot21Count = undefined;
 shot22Count = undefined;
 shot = 1;
 score = 0;
 previousShot = 0;
 twoShotsAgo = 0;
 doubleStrike = false;
 strikeFollowedByPinCount = false;
 isTenthFrame = false;
 strikeButtonPressed = false;
 spareButtonPressed = false;
 shot20Completed = false;
	console.log(allGames);
}
