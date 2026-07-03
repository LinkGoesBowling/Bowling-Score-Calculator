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
//start of score calculator
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
let frame1Score = undefined;
let frame2Score = undefined;
let frame3Score = undefined;
let frame4Score = undefined;
let frame5Score = undefined;
let frame6Score = undefined;
let frame7Score = undefined;
let frame8Score = undefined;
let frame9Score = undefined;
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
			if (shot === 1){
				shot1Count = count;
				let changeShot1 = document.getElementById("shot1");
				changeShot1.textContent = shot1Count;
		
			}
			if (shot === 2){
				shot2Count = count;
				let changeShot2 = document.getElementById("frame1box");
				changeShot2.textContent = shot2Count;
			}
			if (shot === 3){
				shot3Count = count;
				let changeShot3 = document.getElementById("shot2");
				changeShot3.textContent = shot3Count;
			}
			if (shot === 4){
				shot4Count = count;
				let changeShot4 = document.getElementById("frame2box");
				changeShot4.textContent = shot4Count;
			}
			if (shot === 5){
				shot5Count = count;
				let changeShot5 = document.getElementById("shot3");
				changeShot5.textContent = shot5Count;
			}
			if (shot === 6){
				shot6Count = count;
				let changeShot6 = document.getElementById("frame3box");
				changeShot6.textContent = shot6Count;
			}
			if (shot === 7){
				shot7Count = count;
				let changeShot7 = document.getElementById("shot4");
				changeShot7.textContent = shot7Count;
			}
			if (shot === 8){
				shot8Count = count;
				let changeShot8 = document.getElementById("frame4box");
				changeShot8.textContent = shot8Count;
			}
			if (shot === 9){
				shot9Count = count;
				let changeShot9 = document.getElementById("shot5");
				changeShot9.textContent = shot9Count;
			}
			if(shot === 10){
				shot10Count = count;
				let changeShot10 = document.getElementById("frame5box");
				changeShot10.textContent = shot10Count;
			}
			if (shot === 11){
				shot11Count = count;
				let changeShot11 = document.getElementById("shot6");
				changeShot11.textContent = shot11Count;
			}
			if (shot === 12) {
				shot12Count = count;
				let changeShot12 = document.getElementById("frame6box");
				changeShot12.textContent = shot12Count;
			}
			if (shot === 13){
				shot13Count = count;
				let changeShot13 = document.getElementById("shot7");
				changeShot13.textContent = shot13Count;
			}
			if (shot === 14){
				shot14Count = count;
				let changeShot14 = document.getElementById("frame7box");
				changeShot14.textContent = shot14Count;
			}
			if (shot === 15){
				shot15Count = count;
				let changeShot15 = document.getElementById("shot8");
				changeShot15.textContent = shot15Count;
			}
			if (shot === 16){
				shot16Count = count;
				let changeShot16 = document.getElementById("frame8box");
				changeShot16.textContent = shot16Count;
			}
			if (shot === 17){
				shot17Count = count;
				let changeShot17 = document.getElementById("shot9");
				changeShot17.textContent = shot17Count;
			}
			if (shot === 18){
				shot18Count = count;
				let changeShot18 = document.getElementById("frame9box");
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
	if (shot === 23){
		endGame();
	}
	const changeScore = document.getElementById("score");
	changeScore.textContent = score;
	changeFrame();
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
	if (shot === 1){
	let changeShot2 = document.getElementById("frame1box");
	changeShot2.textContent = "X";
	}
	if (shot === 3){
		let changeShot4 = document.getElementById("frame2box");
		changeShot4.textContent = "X";
	}
	if (shot === 5){
		let changeShot6 = document.getElementById("frame3box");
		changeShot6.textContent = "X";
	}
	if (shot === 7){
		let changeShot8 = document.getElementById("frame4box");
		changeShot8.textContent = "X";
	}
	if (shot === 9){
		let changeShot10 = document.getElementById("frame5box");
		changeShot10.textContent = "X";
	}
	if (shot === 11){
		let changeShot12 = document.getElementById("frame6box");
		changeShot12.textContent = "X";
	}
	if (shot === 13){
		let changeShot14 = document.getElementById("frame7box");
		changeShot14.textContent = "X";
	}
	if (shot === 15){
		let changeShot16 = document.getElementById("frame8box");
		changeShot16.textContent = "X";
	}
	if (shot === 17){
		let changeShot18 = document.getElementById("frame9box");
		changeShot18.textContent = "X";
	}
	if (shot === 20){
		let changeShot20 = document.getElementById("shot10");
		changeShot20.textContent = "X";
	}
	if (shot === 21 && shot20Count === 10){
		let changeShot21 = document.getElementById("frame10box1");
		changeShot21.textContent = "X";
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
	if (shot === 2 || shot === 3){
		changeFrame(1);
		frame1Score = 10;
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
	}
	if (shot === 4 || shot === 5){
		changeFrame(2);
		if (shot1Count === 10 || shot2Count === "spare"){
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
		if (shot5Count === "spare" || (shot4Count === 10 && shot2Count !== 10)){
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
		if (shot7Count === "spare" || (shot6Count === 10 && doubleStrike === false)){
			let changeFrame3 = document.getElementById("frame3score");
			frame3Score += 10;
			changeFrame3.textContent = frame3Score;
		}
		if (doubleStrike === true){
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
		if (previousShot === "spare" || (previousShot === 10 && doubleStrike === false)){
			let changeFrame4 = document.getElementById("frame4score");
			frame4Score += 10;
			changeFrame4.textContent = frame4Score;
		}
		if (doubleStrike === true){
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
		if (previousShot === "spare" || (previousShot === 10 && doubleStrike === false)){
			let changeFrame5 = document.getElementById("frame5score");
			frame5Score += 10;
			changeFrame5.textContent = frame5Score;
		}
		if (doubleStrike === true){
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
		if (previousShot === "spare" || (previousShot === 10 && doubleStrike === false)){
			let changeFrame6 = document.getElementById("frame6score");
			frame6Score += 10;
			changeFrame6.textContent = frame6Score;
		}
		if (doubleStrike === true){
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
		if (previousShot === "spare" || (previousShot === 10 && doubleStrike === false)){
			let changeFrame7 = document.getElementById("frame7score");
			frame7Score += 10;
			changeFrame7.textContent = frame7Score;
		}
		if (doubleStrike === true){
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
		if (previousShot === "spare" || (previousShot === 10 && doubleStrike === false)){
			let changeFrame8 = document.getElementById("frame8score");
			frame8Score += 10;
			changeFrame8.textContent = frame8Score;
		}
		if (doubleStrike === true){
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
		if (previousShot === "spare" || (previousShot === 10 && doubleStrike === false)){
			let changeFrame9 = document.getElementById("frame9score");
			frame9Score += 10;
			changeFrame9.textContent = frame9Score;
		}
		if (doubleStrike === true){
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
		if (previousShot === 10){
			let changeFrame9 = document.getElementById("frame9score");
			frame9Score += 10;
			changeFrame9.textContent = frame9Score;
		}
		let changeScore = document.getElementById("score");
		changeScore.textContent = score;
		frame9Score = score;
	}
	return;
}
function addSpare(){
	spareButtonPressed = true;
	spareButtonPressed = false;
	if (shot === 2){
		let changeShot2 = document.getElementById("frame1box");
		changeShot2.textContent = "/";
	}
	if (shot === 4){
		let changeShot4 = document.getElementById("frame2box");
		changeShot4.textContent = "/";
	}
	if (shot === 6){
		let changeShot6 = document.getElementById("frame3box");
		changeShot6.textContent = "/";
	}
	if (shot === 8){
		let changeShot8 = document.getElementById("frame4box");
		changeShot8.textContent = "/";
	}
	if (shot === 10){
		let changeShot10 = document.getElementById("frame5box");
		changeShot10.textContent = "/";
	}
	if (shot === 12){
		let changeShot12 = document.getElementById("frame6box");
		changeShot12.textContent = "/";
	}
	if (shot === 14){
		let changeShot14 = document.getElementById("frame7box");
		changeShot14.textContent = "/";
	}
	if (shot === 16){
		let changeShot16 = document.getElementById("frame8box");
		changeShot16.textContent = "/";
	}
	if (shot === 18){
		let changeShot18 = document.getElementById("frame9box");
		changeShot18.textContent = "/";
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
	changeFrame();
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
		shot++;
		return;
	}
	if (shot === 21){
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
			if (shots > 10 - shot20Count){
				console.log("You can't hit more than 10 pins in a frame!");
			}
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
//end of score calculator
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
	let resetFrameBox1 = document.getElementById("frame1box");
	resetFrameBox1.textContent = " ";
	let resetShot2 = document.getElementById("shot2");
	resetShot2.textContent = " ";
	let resetFrameBox2 = document.getElementById("frame2box");
	resetFrameBox2.textContent = " ";
	let resetShot3 = document.getElementById("shot3");
	resetShot3.textContent = " ";
	let resetFrameBox3 = document.getElementById("frame3box");
	resetFrameBox3.textContent = " ";
	let resetShot4 = document.getElementById("shot4");
	resetShot4.textContent = " ";
	let resetFrameBox4 = document.getElementById("frame4box");
	resetFrameBox4.textContent = " ";
	let resetShot5 = document.getElementById("shot5");
	resetShot5.textContent = " ";
	let resetFrameBox5 = document.getElementById("frame5box");
	resetFrameBox5.textContent = " ";
	let resetShot6 = document.getElementById("shot6");
	resetShot6.textContent = " ";
	let resetFrameBox6 = document.getElementById("frame6box");
	resetFrameBox6.textContent = " ";
	let resetShot7 = document.getElementById("shot7");
	resetShot7.textContent = " ";
	let resetFrameBox7 = document.getElementById("frame7box");
	resetFrameBox7.textContent = " ";
	let resetShot8 = document.getElementById("shot8");
	resetShot8.textContent = " ";
	let resetFrameBox8 = document.getElementById("frame8box");
	resetFrameBox8.textContent = " ";
	let resetShot9 = document.getElementById("shot9");
	resetShot9.textContent = " ";
	let resetFrameBox9 = document.getElementById("frame9box");
	resetFrameBox9.textContent = " ";
	let resetShot10 = document.getElementById("shot10");
	resetShot10.textContent = " ";
	let reset10Frame1 = document.getElementById("frame10box1");
	reset10Frame1.textContent = " ";
	let reset10Frame2 = document.getElementById("frame10box2");
	reset10Frame2.textContent = " ";
	let resetFrame1Score = document.getElementById("frame1score");
	resetFrame1Score.textContent = " ";
	let resetFrame2Score = document.getElementById("frame2score");
	resetFrame2Score.textContent = " ";
	let resetFrame3Score = document.getElementById("frame3score");
	resetFrame3Score.textContent = " ";
	let resetFrame4Score = document.getElementById("frame4score");
	resetFrame4Score.textContent = " ";
	let resetFrame5Score = document.getElementById("frame5score");
	resetFrame5Score.textContent = " ";
	let resetFrame6Score = document.getElementById("frame6score");
	resetFrame6Score.textContent = " ";
	let resetFrame7Score = document.getElementById("frame7score");
	resetFrame7Score.textContent = " ";
	let resetFrame8Score = document.getElementById("frame8score");
	resetFrame8Score.textContent = " ";
	let resetFrame9Score = document.getElementById("frame9score");
	resetFrame9Score.textContent = " ";
}
function calculateAverage(){
	let pinfallTotal = 0;
	for (let i = 0; i < allGames.length; i++){
		pinfallTotal += allGames[i];
	}
	let average = pinfallTotal / allGames.length;
}
