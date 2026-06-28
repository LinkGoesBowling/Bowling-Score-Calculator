console.log("Programmed by Link Kelly (LinkGoesBowling)");
//start of score calculator
//continue at line 349
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
let shot21Completed = false;
const getGamesFromLocalStorage = localStorage.getItem('allGames');
function addPins(count){
	if (shot === 22){
		if (previousShot === 10 || previousShot !== 10){ //this executes no matter what, but the script was executing addPins without a button press without this condition
			console.log("Shot 22 executed");
			score += count;
			shot++;
			endGame();
			return;
		}
	}
	if (shot === 1){
		shot1Count = count;
		let changeShot1 = document.getElementById("shot1");
		changeShot1.textContent = shot1Count;
	}
	if (shot === 2){
		shot2Count = count;
		let changeShot2 = document.getElementById("shot2");
		changeShot2.textContent = shot2Count;
	}
	if (shot === 3){
		shot3Count = count;
		let changeShot3 = document.getElementById("shot3");
		changeShot3.textContent = shot3Count;
	}
	if (shot === 4){
		shot4Count = count;
		let changeShot4 = document.getElementById("shot4");
		changeShot4.textContent = shot4Count;
	}
	if (shot === 5){
		shot5Count = count;
		let changeShot5 = document.getElementById("shot5");
		changeShot5.textContent = shot5Count;
	}
	if (shot === 6){
		shot6Count = count;
		let changeShot6 = document.getElementById("shot6");
		changeShot6.textContent = shot6Count;
	}
	if (shot === 7){
		shot7Count = count;
		let changeShot7 = document.getElementById("shot7");
		changeShot7.textContent = shot7Count;
	}
	if (shot === 8){
		shot8Count = count;
		let changeShot8 = document.getElementById("shot8");
		changeShot8.textContent = shot8Count;
	}
	if (shot === 9){
		shot9Count = count;
		let changeShot9 = document.getElementById("shot9");
		changeShot9.textContent = shot9Count;
	}
	if(shot === 10){
		shot10Count = count;
		let changeShot10 = document.getElementById("shot10");
		changeShot10.textContent = shot10Count;
	}
	if (shot === 11){
		shot11Count = count;
		let changeShot11 = document.getElementById("shot11");
		changeShot11.textContent = shot11Count;
	}
	if (shot === 12) {
		shot12Count = count;
		let changeShot12 = document.getElementById("shot12");
		changeShot12.textContent = shot12Count;
	}
	if (shot === 13){
		shot13Count = count;
		let changeShot13 = document.getElementById("shot13");
		changeShot13.textContent = shot13Count;
	}
	if (shot === 14){
		shot14Count = count;
		let changeShot14 = document.getElementById("shot14");
		changeShot14.textContent = shot14Count;
	}
	if (shot === 15){
		shot15Count = count;
		let changeShot15 = document.getElementById("shot15");
		changeShot15.textContent = shot15Count;
	}
	if (shot === 16){
		shot16Count = count;
		let changeShot16 = document.getElementById("shot16");
		changeShot16.textContent = shot16Count;
	}
	if (shot === 17){
		shot17Count = count;
		let changeShot17 = document.getElementById("shot17");
		changeShot17.textContent = shot17Count;
	}
	if (shot === 18){
		shot18Count = count;
		let changeShot18 = document.getElementById("shot18");
		changeShot18.textContent = shot18Count;
	}
		if (shot === 19 || shot === 20 || shot === 21){
			tenthFrame(count);
		}
	if (shot === 20){
		shot20Count = count;
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
	if (shot === 23){
		endGame();
	}
	console.log("Score: " + score);
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
}
function addStrike(){
	if (shot === 22){
		if (previousShot === 10 || previousShot !== 10){
			console.log("Shot 22");
			score += 10;
			console.log("Score: " + score);
			shot++;
			endGame();
			return;
		}
		const changeScore = document.getElementById("score");
		changeScore.textContent = score;
	}
	if (shot === 1){
	let changeShot2 = document.getElementById("shot2");
	changeShot2.textContent = "X";
	}
	if (shot === 3){
		let changeShot4 = document.getElementById("shot4");
		changeShot4.textContent = "X";
	}
	if (shot === 5){
		let changeShot6 = document.getElementById("shot6");
		changeShot6.textContent = "X";
	}
	if (shot === 7){
		let changeShot8 = document.getElementById("shot8");
		changeShot8.textContent = "X";
	}
	if (shot === 9){
		let changeShot10 = document.getElementById("shot10");
		changeShot10.textContent = "X";
	}
	if (shot === 11){
		let changeShot12 = document.getElementById("shot12");
		changeShot12.textContent = "X";
	}
	if (shot === 13){
		let changeShot14 = document.getElementById("shot14");
		changeShot14.textContent = "X";
	}
	if (shot === 15){
		let changeShot16 = document.getElementById("shot16");
		changeShot16.textContent = "X";
	}
	if (shot === 17){
		let changeShot18 = document.getElementById("shot18");
		changeShot18.textContent = "X";
	}
	if (shot === 20){
		let changeShot20 = document.getElementById("shot20");
		changeShot20.textContent = "X";
	}
	if (shot === 21 && shot20Count === 10){
		let changeShot21 = document.getElementById("shot21");
		changeShot21.textContent = "X";
	}
	if (shot === 22){
		let changeShot18 = document.getElementById("shot22");
		changeShot22.textContent = "X";
	}
	strikeButtonPressed = true;
	if (shot === 19 || shot === 20 || shot === 21){
	tenthFrame(10);
	}
	if (previousShot !== 10){
		doubleStrike = false;
	}
	if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17 || shot === 19 && shot !== 21){
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
		addSpare();
	}
	if (previousShot === 10){
		doubleStrike = true;
	}
	if (shot === 23){
		endGame();
	}
	console.log("Score: " + score);
	previousShot = 10;
	strikeButtonPressed = false;
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
	return;
}
function addSpare(){
	spareButtonPressed = true;
	spareButtonPressed = false;
	if (shot === 22){
		if (shot21Count === 10){
			console.log("That's not a spare situation!");
		}
		else {
			score += 10 - shot21Count;
			shot++;
			endGame();
		}
	}
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
		if (shot === 2){
			let changeShot2 = document.getElementById("shot2");
			changeShot2.textContent = "/"
		}
		//continue here
	}
	else if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17 || shot === 19){
		console.log("That's the first shot of the frame!");
	}
	if (shot === 21) {
		if (previousShot === 10){
			score += (10 - shot20Count) * 2;
			shot++;
			shot21Count = "spare";
		}
		else {
			score += 10 - shot20Count;
			shot++;
			shot21Count = "spare";
		}
	}
	console.log("Score: " + score);
	console.log(shot);
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
}
function tenthFrame(shots){
	if (shot21Completed === false){
	if (shot === 19){
		shot++;
	}
	if (shot === 20 && shot20Completed === false){
		if (doubleStrike === true){
			console.log("Shot 20");
			score += shots * 3;
			shot20Count = shots;
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
		if (doubleStrike === true && shot20Count === 10){
			score += shots * 2;
			console.log("Score: " + score);
			shot21Count = shots;
			shot++;
		}
		if (doubleStrike === false && shot20Count === 10 || previousShot === "spare"){
			score += shots;
			console.log("Score: " + score);
			shot21Count = shots;
			shot++;
			if (shots < 10 - shot20Count){
				shot++;
				endGame();
			}
			return;
		}
		if (shot20Count !== 10){
			if (shots > 10 - shot20Count){
				console.log("You can't hit more than 10 pins in a frame!");
			}
			if (shots === 10 - shot20Count || spareButtonPressed === true){
				if (shot17Count === 10){
					score += shots;
					console.log("Score: " + score);
					shot21Count = "spare";
					shot++;
				}
				if (shot17Count !== 10){
					score += shots;
					console.log("Score: " + score);
					shot21Count = shots;
					shot++;
				}
			}
			if (shots < 10 - shot20Count){
				if (shot17Count !== 10){
					score += shots;
					console.log("Score: " + score);
					shot21Count = shots;
				}
				if (shot17Count === 10){
					score += shots * 2;
					console.log("Score: " + score);
					shot21Count = shots;
				}
				shot++;
				endGame();
			}
			if (shots > 10 - shot20Count){
				score += 10 - shot20Count;
				shot21Count = shots;
				shot++;
				endGame();
			}
		}
		if (previousShot === 10 && doubleStrike === false){
			score += shots;
			shot21Count = shots;
			shot++;
			endGame();
		}
	}
	shot21Completed = true;
	return;
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
	}
}
//end of score calculator
function endGame(){
	if (shot === 23) {
		console.log("Final score: " + score);
		allGames.push(score);
		localStorage.setItem('allGames', allGames);
		calculateAverage();
		shot++;
		console.log("Press Restart Game to log a new game");
		const changeScore = document.getElementById("score");
		changeScore.textContent = score;
	}
}
function restartGame(){
	console.log("The game has restarted");
	const changeScore = document.getElementById("score");
	changeScore.textContent = 0;
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
  	shot21Completed = false;
	let resetShot1 = document.getElementById("shot1");
	resetShot1.textContent = " ";
	let resetShot2 = document.getElementById("shot2");
	resetShot2.textContent = " ";
	let resetShot3 = document.getElementById("shot3");
	resetShot3.textContent = " ";
	let resetShot4 = document.getElementById("shot4");
	resetShot4.textContent = " ";
	let resetShot5 = document.getElementById("shot5");
	resetShot5.textContent = " ";
	let resetShot6 = document.getElementById("shot6");
	resetShot6.textContent = " ";
	let resetShot7 = document.getElementById("shot7");
	resetShot7.textContent = " ";
	let resetShot8 = document.getElementById("shot8");
	resetShot8.textContent = " ";
	let resetShot9 = document.getElementById("shot9");
	resetShot9.textContent = " ";
	let resetShot10 = document.getElementById("shot10");
	resetShot10.textContent = " ";
	let resetShot11 = document.getElementById("shot11");
	resetShot11.textContent = " ";
	let resetShot12 = document.getElementById("shot12");
	resetShot12.textContent = " ";
	let resetShot13 = document.getElementById("shot13");
	resetShot13.textContent = " ";
	let resetShot14 = document.getElementById("shot14");
	resetShot14.textContent = " ";
	let resetShot15 = document.getElementById("shot15");
	resetShot15.textContent = " ";
	let resetShot16 = document.getElementById("shot16");
	resetShot16.textContent = " ";
	let resetShot17 = document.getElementById("shot17");
	resetShot17.textContent = " ";
	let resetShot18 = document.getElementById("shot18");
	resetShot18.textContent = " ";
	let resetShot20 = document.getElementById("shot20");
	resetShot20.textContent = " ";
	let resetShot21= document.getElementById("shot21");
	resetShot21.textContent = " ";
	let resetShot22 = document.getElementById("shot22");
	resetShot22.textContent = " ";
}
function calculateAverage(){
	let pinfallTotal = 0;
	for (let i = 0; i < allGames.length; i++){
		pinfallTotal += allGames[i];
	}
	let average = pinfallTotal / allGames.length;
	console.log("Average: " + average);
	console.log("Games: " + allGames.length);
	console.log("pinfallTotal: " + pinfallTotal);
}
