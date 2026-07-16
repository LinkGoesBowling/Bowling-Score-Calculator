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
document.addEventListener("keydown", event => {  //src: https://stackoverflow.com/questions/66991731/how-to-trigger-a-javascript-function-when-specific-key-is-pressed-on-keyboard, modified
	if (event.isComposing || event.keyCode !== 48 && event.keyCode !== 189){
		return;
	}
	addPins(0);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 49){
		return;
	}
	addPins(1);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 50){
		return;
	}
	addPins(2);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 51){
		return;
	}
	addPins(3);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 52){
		return;
	}
	addPins(4);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 53){
		return;
	}
	addPins(5);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 54){
		return;
	}
	addPins(6);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 55){
		return;
	}
	addPins(7);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 56){
		return;
	}
	addPins(8);
})
document.addEventListener("keydown", event => {
	if (event.isComposing || event.keyCode !== 57){
		return;
	}
	addPins(9);
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
			let changeShot22 = document.getElementById("frame10box2");
			changeShot22.textContent = shot22Count;
			endGame();
			return;
		}
	}
		for (let i = 1; i <= 18; i++){
			window ["shot" + i + "Count"] = count;
			let changeShot = document.getElementById("shot" + i);
			changeShot.textContent = window["shot" + i + "Count"];
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
	/* Commented out frame score script
	if (shot === 2 || shot === 3){ //shot counts are 1 higher than they should be because shot++ is triggered before these
		changeFrame(1);
		frame1Score = score;
	}
	if (shot === 4 || shot === 5){
		changeFrame(2);
		frame2Score = score;
		if (shot1Count === 10){
			let changeFrame1 = document.getElementById("frame1score");
			frame1Score += count;
			changeFrame1.textContent = frame1Score;
		}
		if (shot === 4 && previousShot === "spare"){
			frame1Score += count;
			changeFrame1.textContent = frame1Score;
		}
	}
	if (shot === 6 || shot === 7){
		changeFrame(3);
		frame3Score = score;
		if (shot3Count === 10 && shot1Count !== 10 && shot4Count !== "spare"){
			var changeFrame2 = document.getElementById("frame2score"); //var was used for function scope
			frame2Score += count;
			changeFrame2.textContent = frame2Score;
		} 
		if (shot3Count === 10 && shot1Count === 10){
			if (shot === 6){
				let changeFrame1 = document.getElementById("frame1Score");
				frame1Score += count;
				changeFrame1.textContent = frame1Score;
				frame2Score += count;
				changeFrame2.textContent = frame2Score;
			}
			if (shot === 7){
				frame2Score += count;
				changeFrame2.textContent = frame2Score;
			}
		}
		if (shot3Count === "spare" && shot === 6){
			frame2Score += count;
			changeFrame2.textContent = frame2Score;
		}
	}
	if (shot === 8 || shot === 9){
		changeFrame(4);
		frame4Score = score;
		if (shot5Count === 10 && shot3Count !== 10 && shot6Count !== "spare"){
			var changeFrame3 = document.getElementById("frame3score");
			frame3Score += count;
			changeFrame3.textContent = frame3Score;
		} 
		if (shot5Count === 10 && shot3Count === 10){
			if (shot === 8){
				frame3Score += count;
				changeFrame3.textContent = frame3Score;
				let changeFrame2 = document.getElementById("frame2Score");
				frame2Score += count;
				changeFrame2.textContent = frame2Score;
			}
			if (shot === 9){
				frame3Score += count;
				changeFrame3.textContent = frame3Score;
			}
		}
		if (shot5Count === "spare" && shot === 8){
			frame3Score += count;
			changeFrame3.textContent = frame3Score;
		}
	}
	if (shot ===  10|| shot === 11){
		changeFrame(5);
		if (shot7Count === 10 && shot5Count !== 10 && shot8Count !== "spare"){
			var changeFrame4 = document.getElementById("frame4score");
			frame4Score += count;
			changeFrame4.textContent = frame4Score;
		} 
		if (shot5Count === 10 && shot3Count === 10){
			if (shot === 10){
				let changeFrame3 = document.getElementById("frame3Score");
				frame3Score += count;
				changeFrame3.textContent = frame3Score;
				frame4Score += count;
				changeFrame4.textContent = frame4Score;
			}
			if (shot === 11){
				frame4Score += count;
				changeFrame4.textContent = frame4Score;
			}
		}
		if (shot7Count === "spare" && shot === 10){
			frame4Score += count;
			changeFrame4.textContent = frame4Score;
		}
		frame5Score = score;
	}
	if (shot ===  12|| shot === 13){
		changeFrame(6);
		frame6Score = score;
		if (shot9Count === 10 && shot7Count !== 10 && shot10Count !== "spare"){
			var changeFrame5 = document.getElementById("frame5score");
			frame5Score += count;
			changeFrame5.textContent = frame5Score;
		} 
		if (shot7Count === 10 && shot5Count === 10){
			if (shot === 12){
				frame5Score += count;
				changeFrame5.textContent = frame5Score;
				let changeFrame4 = document.getElementById("frame4Score");
				frame4Score += count;
				changeFrame4.textContent = frame4Score;
			}
			if (shot === 13){
				frame5Score += count;
				changeFrame5.textContent = frame5Score;
			}
		}
		if (shot9Count === "spare" && shot === 12){
			frame5Score += count;
			changeFrame5.textContent = frame5Score;
		}
	}
	if (shot ===  14|| shot === 15){
		changeFrame(7);
		frame7Score = score;
		if (shot11Count === 10 && shot9Count !== 10 && shot12Count !== "spare"){
			var changeFrame6 = document.getElementById("frame6score");
			frame6Score += count;
			changeFrame6.textContent = frame6Score;
		} 
		if (shot9Count === 10 && shot7Count === 10){
			if (shot === 13){
				frame5Score += count;
				changeFrame5.textContent = frame5Score;
				let changeFrame6 = document.getElementById("frame6Score");
				frame6Score += count;
				changeFrame6.textContent = frame6Score;
			}
			if (shot === 14){
				frame6Score += count;
				changeFrame6.textContent = frame5Score;
			}
		}
		if (shot11Count === "spare" && shot === 14){
			frame6Score += count;
			changeFrame6.textContent = frame6Score;
		}
	}
	if (shot ===  16|| shot === 17){
		changeFrame(8);
		if (shot13Count === 10 && shot11Count !== 10 && shot14Count !== "spare"){
			var changeFrame7 = document.getElementById("frame7score");
			frame7Score += count;
			changeFrame7.textContent = frame7Score;
		} 
		if (shot11Count === 10 && shot9Count === 10){
			if (shot === 13){
				frame7Score += count;
				changeFrame7.textContent = frame7Score;
				let changeFrame6 = document.getElementById("frame6Score");
				frame6Score += count;
				changeFrame6.textContent = frame6Score;
			}
			if (shot === 14){
				frame7Score += count;
				changeFrame7.textContent = frame7Score;
			}
		}
		if (shot13Count === "spare" && shot === 16){
			frame7Score += count;
			changeFrame7.textContent = frame7Score;
		}
		frame8Score = score;
	}
	if (shot ===  18|| shot === 19){
		changeFrame(9);
		frame9Score = score;
		if (shot15Count === 10 && shot13Count !== 10 && shot16Count !== "spare"){
			var changeFrame8 = document.getElementById("frame8score");
			frame8Score += count;
			changeFrame8.textContent = frame8Score;
		} 
		if (shot11Count === 10 && shot9Count === 10){
			if (shot === 13){
				let changeFrame7 = document.getElementById("frame7Score");
				frame7Score += count;
				changeFrame7.textContent = frame7Score;
				frame8Score += count;
				changeFrame8.textContent = frame8Score;
			}
			if (shot === 14){
				frame8Score += count;
				changeFrame8.textContent = frame8Score;
			}
		}
		if (shot13Count === "spare" && shot === 16){
			frame8Score += count;
			changeFrame8.textContent = frame8Score;
		}
	}
	*/
	if (shot === 23 && shot21Count !== 10 && count === 10 - shot21Count){
		let changeShot22 = document.getElementById("frame10box2");
		changeShot22.textContent = "/";
	}
	if (shot === 22 && shot20Count !== 10 && count === 10 - shot20Count){
		let changeShot21 = document.getElementById("frame10box1");
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
			let changeShot22 = document.getElementById("frame10box2");
			changeShot22.textContent = "X";
			endGame();
			return;
		}
	}
	for (let i = 1; i <= 18; i++){
			window ["shot" + i + "Count"] = "X";
			let changeShot = document.getElementById("shot" + i);
			changeShot.textContent = window["shot" + i + "Count"];
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
	/* Commented out frame score script
	if (shot === 2 || shot === 3){
		changeFrame(1);
		frame1Score = 10;
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
	}
	if (shot === 4 || shot === 5){
		changeFrame(2);
		if (shot2Count === "spare" || shot1Count === 10){
			let changeFrame1 = document.getElementById("frame1score");
			changeFrame1.textContent = 20;
			frame1Score = 20;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame2Score = score;
	}
	if (shot === 6 || shot === 7){
		changeFrame(3);
		if (shot4Count === "spare" || (shot3Count === 10 && shot1Count !== 10)){
			let changeFrame2 = document.getElementById("frame2score");
			frame2Score += 10;
			changeFrame2.textContent = frame2Score;
		}
		if (shot1Count === 10 && shot3Count === 10){
			let changeFrame1 = document.getElementById("frame1score");
			changeFrame1.textContent = 30;
			frame1Score = 30;
			let changeFrame2 = document.getElementById("frame2score");
			changeFrame2.textContent = 50;
			frame2Score = 50;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame3Score = score;
	}
	if (shot === 8 || shot === 9){
		changeFrame(4);
		if (shot6Count === "spare" || (shot5Count === 10 && shot3Count !== 10)){
			let changeFrame3 = document.getElementById("frame3score");
			frame3Score += 10;
			changeFrame3.textContent = frame3Score;
		}
		if (shot3Count === 10 && shot5Count === 10){
			let changeFrame2 = document.getElementById("frame2score");
			frame2Score += 10;
			changeFrame2.textContent = frame2Score;
			let changeFrame3 = document.getElementById("frame3score");
			frame3Score += 20;
			changeFrame3.textContent = frame3Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame4Score = score;
	}
	if (shot === 11 || shot === 10){
		changeFrame(5);
		if (shot8Count === "spare" || (shot7Count === 10 && shot5Count !== 10)){
			let changeFrame4 = document.getElementById("frame4score");
			frame4Score += 10;
			changeFrame4.textContent = frame4Score;
		}
		if (shot5Count === 10 && shot7Count === 10){
			let changeFrame3 = document.getElementById("frame3score");
			frame3Score += 10;
			changeFrame3.textContent = frame3Score;
			let changeFrame4 = document.getElementById("frame4score");
			frame4Score += 20;
			changeFrame4.textContent = frame4Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame5Score = score;
	}
	if (shot === 12 || shot === 13){
		changeFrame(6);
		if (shot10Count === "spare" || (shot9Count === 10 && shot7Count !== 10)){
			let changeFrame5 = document.getElementById("frame5score");
			frame5Score += 10;
			changeFrame5.textContent = frame5Score;
		}
		if (shot7Count === 10 && shot9Count === 10){
			let changeFrame5 = document.getElementById("frame5score");
			frame5Score += 20;
			changeFrame5.textContent = frame5Score;
			let changeFrame4 = document.getElementById("frame4score");
			frame4Score += 10;
			changeFrame4.textContent = frame4Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame6Score = score;
	}
	if (shot === 14 || shot === 15){
		changeFrame(7);
		if (shot12Count === "spare" || (shot11Count === 10 && shot9Count !== 10)){
			let changeFrame6 = document.getElementById("frame6score");
			frame6Score += 10;
			changeFrame6.textContent = frame6Score;
		}
		if (shot9Count === 10 && shot11Count === 10){
			let changeFrame5 = document.getElementById("frame5score");
			frame5Score += 10;
			changeFrame5.textContent = frame5Score;
			let changeFrame6 = document.getElementById("frame6score");
			frame6Score += 20;
			changeFrame6.textContent = frame6Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame7Score = score;
	}
	if (shot === 16 || shot === 17){
		changeFrame(8);
		if (shot14Count === "spare" || (shot13Count === 10 && shot11Count !== 10)){
			let changeFrame7 = document.getElementById("frame7score");
			frame7Score += 10;
			changeFrame7.textContent = frame7Score;
		}
		if (shot11Count === 10 && shot13Count === 10){
			let changeFrame7 = document.getElementById("frame7score");
			frame7Score += 20;
			changeFrame7.textContent = frame7Score;
			let changeFrame6 = document.getElementById("frame6score");
			frame6Score += 10;
			changeFrame6.textContent = frame6Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame8Score = score;
	}
	if (shot === 18 || shot === 19){
		changeFrame(9);
		if (shot16Count === "spare" || (shot15Count === 10 && shot13Count !== 10)){
			let changeFrame8 = document.getElementById("frame8score");
			frame8Score += 10;
			changeFrame8.textContent = frame8Score;
		}
		if (shot13Count === 10 && shot15Count === 10){
			let changeFrame7 = document.getElementById("frame7score");
			frame7Score += 10;
			changeFrame7.textContent = frame7Score;
			let changeFrame8 = document.getElementById("frame8score");
			frame8Score += 20;
			changeFrame8.textContent = frame8Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame9Score = score;
	}
	if (shot === 21){
		if (shot18Count === "spare" || (shot17Count === 10 && shot15Count !== 10)){
			let changeFrame9 = document.getElementById("frame9score");
			frame9Score += 10;
			changeFrame9.textContent = frame9Score;
		}
		if (shot15Count === 10 && shot17Count === 10){
			let changeFrame8 = document.getElementById("frame8score");
			frame8Score += 10;
			changeFrame8.textContent = frame8Score;
			let changeFrame9 = document.getElementById("frame9score");
			frame9Score += 20;
			changeFrame9.textContent = frame9Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame9Score = score;
	}
	if (shot === 22){
		if (shot17Count === 10){
			let changeFrame9 = document.getElementById("frame9score");
			frame9Score += 10;
			changeFrame9.textContent = frame9Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame9Score = score;
	}
	*/
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
	return;
}
function addSpare(){
	spareButtonPressed = true;
	spareButtonPressed = false;
	for (let i = 1; i <= 18; i++){
			window ["shot" + i + "Count"] = count;
			let changeShot = document.getElementById("shot" + i);
			changeShot.textContent = window["shot" + i + "Count"];
		}
	if (shot === 21 && shot20Count !== 10){
		let changeShot21 = document.getElementById("frame10box1");
		changeShot21.textContent = "/";
	}
	if (shot === 22){
		if (shot21Count === 10){
			console.log("That's not a spare situation!");
		}
		else {
			score += 10 - shot21Count;
			shot++;
			let changeShot22 = document.getElementById("frame10box2");
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
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
	/* Commented out frame score script
	if (shot === 2 || shot === 3){
		changeFrame(1);
		frame1Score = score;
	}
	if (shot === 5 || shot === 4){
		changeFrame(2);
		frame2Score = score;
	}
	if (shot ===  6|| shot === 7){
		changeFrame(3);
		frame3Score = score;
	}
	if (shot ===  8|| shot === 9){
		changeFrame(4);
		frame4Score = score;
	}
	if (shot ===  10|| shot === 11){
		changeFrame(5);
		frame5Score = score;
	}
	if (shot ===  12|| shot === 13){
		changeFrame(6);
		frame6Score = score;
	}
	if (shot ===  14|| shot === 15){
		changeFrame(7);
		frame7Score = score;
	}
	if (shot === 16 || shot === 17){
		changeFrame(8);
		frame8Score = score;
	}
	if (shot ===  18|| shot === 19){
		changeFrame(9);
		frame9Score = score;
	}
	*/
}
function tenthFrame(shots){
	if (shot21Completed === true){
		if (shot === 22 && shots === 10){
		let changeShot22 = document.getElementById("frame10box2");
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
			let changeShot20 = document.getElementById("shot10");
			changeShot20.textContent = shots;
			if (shots === 10){
				let changeShot20 = document.getElementById("shot10");
				changeShot20.textContent = "X";
			}
		}
		if (doubleStrike === false && previousShot !== 10 && previousShot !== "spare"){
			score += shots;
			shot20Count = shots;
			let changeShot20 = document.getElementById("shot10");
			changeShot20.textContent = shots;
			if (shots === 10){
				let changeShot20 = document.getElementById("shot10");
				changeShot20.textContent = "X";
			}
		}
		if (doubleStrike === false && previousShot === 10 || previousShot === "spare"){
			score += shots * 2;
			shot20Count = shots;
			let changeShot20 = document.getElementById("shot10");
			changeShot20.textContent = shots;
			if (shots === 10){
				let changeShot20 = document.getElementById("shot10");
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
			console.log("You can't hit more than 10 pins in a frame!");
			return;
		}
		if (shots === 10 - shot20Count && shot20Count !== 10){
			let changeShot21 = document.getElementById("frame10box1");
			changeShot21.textContent = "/"
		}
		if (doubleStrike === true && shot20Count === 10){
			score += shots * 2;
			shot21Count = shots;
			shot++;
			let changeShot21 = document.getElementById("frame10box1");
			changeShot21.textContent = shots;
			if (shots === 10){
				let changeShot21 = document.getElementById("frame10box1");
				changeShot21.textContent = "X";
			}
		}
		if (doubleStrike === false && shot20Count === 10 || previousShot === "spare"){
			score += shots;
			shot21Count = shots;
			shot++;
			let changeShot21 = document.getElementById("frame10box1");
			changeShot21.textContent = shots;
			if (shots === 10){
				let changeShot21 = document.getElementById("frame10box1");
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
					let changeShot21 = document.getElementById("frame10box1");
					changeShot21.textContent = shots;
					if (shots === 10){
						let changeShot21 = document.getElementById("frame10box1");
						changeShot21.textContent = "X";
					}
				}
			}
			if (shots < 10 - shot20Count){
				if (shot17Count !== 10){
					score += shots;
					shot21Count = shots;
					let changeShot21 = document.getElementById("frame10box1");
					changeShot21.textContent = shots;
					if (shots === 10){
						let changeShot21 = document.getElementById("frame10box1");
						changeShot21.textContent = "X";
					}
				}
				if (shot17Count === 10){
					score += shots * 2;
					shot21Count = shots;
					let changeShot21 = document.getElementById("frame10box1");
					changeShot21.textContent = shots;
					if (shots === 10){
						let changeShot21 = document.getElementById("frame10box1");
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
/* commented out (wanted to start new project)
function changeFrame(frame){
	if (frame === 1){
		let changeFrame1 = document.getElementById("frame1score");
		changeFrame1.textContent = score;
	}
	if (frame === 2){
		let changeFrame2 = document.getElementById("frame2score");
		changeFrame2.textContent = score;
	}
	if (frame === 3){
		let changeFrame3 = document.getElementById("frame3score");
		changeFrame3.textContent = score;
	}
	if (frame === 4){
		let changeFrame4 = document.getElementById("frame4score");
		changeFrame4.textContent = score;
	}
	if (frame === 5){
		let changeFrame5 = document.getElementById("frame5score");
		changeFrame5.textContent = score;
	}
	if (frame === 6){
		let changeFrame6 = document.getElementById("frame6score");
		changeFrame6.textContent = score;
	}
	if (frame === 7){
		let changeFrame7 = document.getElementById("frame7score");
		changeFrame7.textContent = score;
	}
	if (frame === 8){
		let changeFrame8 = document.getElementById("frame8score");
		changeFrame8.textContent = score;
	}
	if (frame === 9){
		let changeFrame9 = document.getElementById("frame9score");
		changeFrame9.textContent = score;
	}
}
*/
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
	resetShot1.textContent = " ";
	for (let i = 0; i < 22; i++){
		let resetShot = document.getElementById("shot" + i);
	}
}
function calculateAverage(){
	let pinfallTotal = 0;
	for (let i = 0; i < allGames.length; i++){
		pinfallTotal += allGames[i];
	}
	let average = pinfallTotal / allGames.length;
}
