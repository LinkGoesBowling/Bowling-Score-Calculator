console.log("Programmed by Link Kelly (LinkGoesBowling)");
/*bowling logic explained:
1. A strike doubles the next 2 shots. For example, if I get 3 strikes in a row to start the game, I would have 60 because the first one would be 10+10+10 for 30, the second one would be 10+10 for 20, and the third one
would be 10. If I added a 9-count and a spare after that, I would have 89 because the second one would have 9 pins added to it and the third one would have 10 pins added to it and the frame itself would be worth 10 pins.
2. A spare doubles the next shot. For example, if I started the game with a spare (first-shot count doesn't matter since it's the first shot) and then followed it up with a 9-count with a spare, I would have 29 because
the first spare would double the next shot and be worth 10+9 for 19, and the second spare, by itself since it isn't doubling anything, is worth 10 pins.
3. Open frames (no spare/no strike) provide no bonus points, although strikes and spares will double them. If an open frame comes after a strike, the strike would double both shots.
4. In the tenth frame, no bonus points are awarded from strikes and spares, but they will offer extra shots, and you can have up to 3. Spares and strikes from before the 10th frame will still double them. For example, if
you get 3 strikes in the 10th frame and a spare in the 9th, the 9th and 10th frame would combine to be worth 50 points since the spare would be worth 10 pins alone and add 10 pins because of the strike that came after it.
Then after those 20 pins in the 9th frame, there would be 30 pins added from the 10th frame since the 10th frame strikes do not double anything.
*/
//start of keyboard input script
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 189){
		return;
	}
	addPins(0);
})
document.addEventListener("keydown", event => {
	addPins(event.keyCode - 48);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 88){
		return;
	}
	addStrike();
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 191){
		return;
	}
	addSpare();
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 82){
		return;
	}
	restartGame();
})
//end of keyboard input script
//start of score calculator
for (let i = 1; i <= 22; i++){
	window["shot" + i + "Count"] = undefined;
}
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
for (let i = 1; i <= 9; i++){
	window["frame" + i + "Score"] = undefined;
}
function addPins(count){
	if (shot === 22){
		if (previousShot === 10 || previousShot !== 10){ //this executes no matter what, but the script was executing addPins without a button press without this condition
			score += count;
			shot++;
			shot22Count = count;
			let changeShot22 = document.getElementById("shot22");
			changeShot22.textContent = shot22Count;
			endGame();
			return;
		}
	}
		for (let i = 1; i <= 18; i++){
			if (shot === i){
				window ["shot" + i + "Count"] = count;
				let changeShot = document.getElementById("shot" + i);
				changeShot.textContent = window["shot" + i + "Count"];
			}
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
			alert("You can't have more than 10 pins in a frame!");
		}
		else {
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
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
	if (shot === 23 && shot21Count !== 10 && count === 10 - shot21Count){
		let changeShot22 = document.getElementById("shot22");
		changeShot22.textContent = "/";
	}
	if (shot === 22 && shot20Count !== 10 && count === 10 - shot20Count){
		let changeShot21 = document.getElementById("shot21");
		changeShot21.textContent = "/";
	}
	if (shot === 23){
		endGame();
	}
}
function addStrike(){
	if (shot === 22){
		if (previousShot === 10 || previousShot !== 10){
			score += 10;
			shot++;
			let changeShot22 = document.getElementById("shot22");
			changeShot22.textContent = "X";
			endGame();
			return;
		}
	}
	for (let i = 1; i <= 18; i++){
		if (shot === i){
			window ["shot" + i + "Count"] = "X";
			let changeShot = document.getElementById("shot" + (i + 1));
			changeShot.textContent = window["shot" + i + "Count"];
		}
	}
	strikeButtonPressed = true;
	if (shot === 19 || shot === 20 || shot === 21 || shot === 22){
		tenthFrame(10);
	}
	if (previousShot !== 10){
		doubleStrike = false;
	}
	if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17 || shot === 19 && shot !== 21){
	if (previousShot === "spare"){
		shot++;
		shot++;
		score += 20;
	}
	if (previousShot !== "spare" && previousShot !== 10) {
		shot++;
		shot++;
		score += 10;
	}
	if (previousShot === 10 && doubleStrike === false){
		score += 20;
		shot++;
		shot++;
		twoShotsAgo = 10;
	}
	if (doubleStrike === true){
		score += 30;
		shot++;
		shot++;
	}
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
	previousShot = 10;
	strikeButtonPressed = false;
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
	return;
}
function addSpare(){
	spareButtonPressed = true;
	spareButtonPressed = false;
	for (let i = 1; i <= 18; i++){
		if (shot === i){
			window ["shot" + i + "Count"] = "/";
			let changeShot = document.getElementById("shot" + i);
			changeShot.textContent = window["shot" + i + "Count"];
		}
	}
	if (shot === 21 && shot20Count !== 10){
		let changeShot21 = document.getElementById("shot21");
		changeShot21.textContent = "/";
	}
	if (shot === 22){
		if (shot21Count === 10){
			alert("That's not a spare situation!");
		}
		else {
			score += 10 - shot21Count;
			shot++;
			let changeShot22 = document.getElementById("shot22");
			changeShot22.textContent = "/";
			endGame();
		}
	}
	if (shot === 2 || shot === 4 || shot === 6 || shot === 8 || shot === 10 || shot === 12 || shot === 14 || shot === 16 || shot === 18){
		if (strikeFollowedByPinCount === true){
			score += (10 - previousShot) * 2;
			strikeFollowedByPinCount = false;
			shot++;
			twoShotsAgo = previousShot;
			previousShot = "spare";
	}
		else if (strikeFollowedByPinCount === false){
			shot++;
			score += 10 - previousShot;
			twoShotsAgo = previousShot;
			previousShot = "spare";
	}
	}
	else if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17 || shot === 20){
		alert("That's the first shot of the frame!");
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
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
}
function tenthFrame(shots){
	if (shot21Completed === true){
		if (shot === 22 && shots === 10){
		let changeShot22 = document.getElementById("shot22");
		changeShot22.textContent = "X";
	}
	if (shot === 22 && shots !== 10){
		changeShot22.textContent = shots;
	}
	}
	if (shot21Completed === false){
		if (shot === 19){
			shot++;
		}
	if (shot === 20 && shot20Completed === false){
		if (doubleStrike === true){
			score += shots * 3;
			shot20Count = shots;
			let changeShot20 = document.getElementById("shot20");
			changeShot20.textContent = shots;
			if (shots === 10){
				let changeShot20 = document.getElementById("shot20");
				changeShot20.textContent = "X";
			}
		}
		if (doubleStrike === false && previousShot !== 10 && previousShot !== "spare"){
			score += shots;
			shot20Count = shots;
			let changeShot20 = document.getElementById("shot20");
			changeShot20.textContent = shots;
			if (shots === 10){
				let changeShot20 = document.getElementById("shot20");
				changeShot20.textContent = "X";
			}
		}
		if (doubleStrike === false && previousShot === 10 || previousShot === "spare"){
			score += shots * 2;
			shot20Count = shots;
			let changeShot20 = document.getElementById("shot20");
			changeShot20.textContent = shots;
			if (shots === 10){
				let changeShot20 = document.getElementById("shot20");
				changeShot20.textContent = "X";
			}
		}
		if (previousShot !== 10){
			doubleStrike = false;
		}
		if (shot === 2 || shot === 3){
			changeFrame(1);
		}
		shot++;
		return;
	}
	if (shot === 21){
		if (shots > 10 - shot20Count && shot20Count !== 10){
			alert("You can't hit more than 10 pins in a frame!");
			return;
		}
		if (shots === 10 - shot20Count && shot20Count !== 10){
			let changeShot21 = document.getElementById("shot21");
			changeShot21.textContent = "/";
		}
		if (doubleStrike === true && shot20Count === 10){
			score += shots * 2;
			shot21Count = shots;
			shot++;
			let changeShot21 = document.getElementById("shot21");
			changeShot21.textContent = shots;
			if (shots === 10){
				let changeShot21 = document.getElementById("shot21");
				changeShot21.textContent = "X";
			}
		}
		if (doubleStrike === false && shot20Count === 10 || previousShot === "spare"){
			score += shots;
			shot21Count = shots;
			shot++;
			let changeShot21 = document.getElementById("shot21");
			changeShot21.textContent = shots;
			if (shots === 10){
				let changeShot21 = document.getElementById("shot21");
				changeShot21.textContent = "X";
			}
			if (shots < 10 - shot20Count){
				shot = 23;
				endGame();
			}
			return;
		}
		if (shot20Count !== 10){
			if (shots === 10 - shot20Count || spareButtonPressed === true){
				if (shot17Count === 10){
					score += shots;
					shot21Count = "spare";
					shot++;
				}
				if (shot17Count !== 10){
					score += shots;
					shot21Count = shots;
					shot++;
					let changeShot21 = document.getElementById("shot21");
					changeShot21.textContent = shots;
					if (shots === 10){
						let changeShot21 = document.getElementById("shot21");
						changeShot21.textContent = "X";
					}
				}
			}
			if (shots < 10 - shot20Count){
				if (shot17Count !== 10){
					score += shots;
					shot21Count = shots;
					let changeShot21 = document.getElementById("shot21");
					changeShot21.textContent = shots;
					if (shots === 10){
						let changeShot21 = document.getElementById("shot21");
						changeShot21.textContent = "X";
					}
				}
				if (shot17Count === 10){
					score += shots * 2;
					shot21Count = shots;
					let changeShot21 = document.getElementById("shot21");
					changeShot21.textContent = shots;
					if (shots === 10){
						let changeShot21 = document.getElementById("shot21");
						changeShot21.textContent = "X";
					}
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
//finish game functions
function endGame(){
	allGames.push(score);
	localStorage.setItem('allGames', allGames);
	calculateAverage();
	shot++;
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
}
function restartGame(){
	const changeScore = document.getElementById("score");
	changeScore.textContent = 0;
	for (let i = 0; i < 22; i++){
		window["shot" + i + "Count"] = undefined;
	}
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
	for (let i = 1; i <= 18; i++){ //skip shot 19 (since it wasn't a thing) and reset the rest of the shots
		let resetShot = document.getElementById("shot" + i);
		resetShot.textContent = " ";
	}
	for (let i = 20; i <= 22; i++){
		let resetShot = document.getElementById("shot" + i);
		resetShot.textContent = " ";
	}
}
function calculateAverage(){
	let pinfallTotal = 0;
	for (let i = 0; i < allGames.length; i++){
		pinfallTotal += allGames[i];
	}
	let average = pinfallTotal / allGames.length;
}
