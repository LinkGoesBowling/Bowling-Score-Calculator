console.log("Programmed by Link Kelly (LinkGoesBowling)");
console.log("Frame 1:");
let shot1Count = 0;
let shot2Count = 0;
let shot3Count = 0;
let shot4Count = 0;
let shot5Count = 0;
let shot6Count = 0;
let shot7Count = 0;
let shot8Count = 0;
let shot9Count = 0;
let shot10Count = 0;
let shot11Count = 0;
let shot12Count = 0;
let shot13Count = 0;
let shot14Count = 0;
let shot15Count = 0;
let shot16Count = 0;
let shot17Count = 0;
let shot18Count = 0;
let shot19Count = 0;
let shot20Count = 0;
let shot21Count = 0;
let shot22Count = 0;
let shot = 1;
let score = 0;
let previousShot = 0;
let twoShotsAgo = 0;
let doubleStrike = false;
let strikeFollowedByPinCount = false;

function addPins(count){ //An extra pin is added on a spare after an open frame
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
			console.log("Frame: " + (Math.floor(shot / 2 + 0.5)));
			previousShot = count;
			if (twoShotsAgo !== 10) {
				score += count
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
		console.log("Frame " + (Math.floor(shot / 2 + 0.5)) + ":");
		if (previousShot === "spare"){
			score += count;
		}
		if (previousShot === 10){
			score+= count;
			strikeFollowedByPinCount = true;
		}
		if (doubleStrike === true){
			score += count * 2;
			doubleStrike = false;
		}
		else {
			score += count;
		}
		
		if (previousShot === 10){
			twoShotsAgo = 10;
		}
		if (previousShot !== 10){
			twoShotsAgo = 0;
		}
		previousShot = count;
	}
	else {
		tenthFrame();
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
	if (shot === 19){
		shot19Count = count;
	}
	if (shot === 20){
		shot20Count = count;
	}
	if (shot === 21){
		shot21Count = count;
	}
	if (shot === 22){
		shot22Count = count;
	}
	console.log("Score: " + score);
}
function addStrike(){
	if (previousShot !== 10){
		doubleStrike = false;
	}
	if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17){
	if (previousShot === "spare"){
		console.log("STRIIIIIIIKE!!!");
		shot++;
		shot++;
		score +=  20;
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
	}
	else if (shot === 2 || shot === 4 || shot === 6 || shot === 8 || shot === 10 || shot === 12 || shot === 14 || shot === 16 || shot === 18){
		console.log("It's the second shot! Click the spare button instead.");
	}
	else if (shot === 19 || shot === 20 || shot === 21){
		tenthFrame();
	}
	console.log("Score: " + score);
	console.log("Frame " + (Math.floor(shot / 2 + 0.5)) + ":");
	if (previousShot === 10){
		doubleStrike = true;
	}
	previousShot = 10;
}
function addSpare(){
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
	console.log("Frame " + (Math.floor(shot / 2 + 0.5)) + ":");
	score += 10 - previousShot;
	twoShotsAgo = previousShot;
	previousShot = "spare";
	}
	}
	else if (shot === 1 || shot === 3 || shot === 5 || shot === 7 || shot === 9 || shot === 11 || shot === 13 || shot === 15 || shot === 17){
		console.log("That's the first shot of the frame!");
	}
	else {
		tenthFrame();
	}
	console.log("Score: " + score);
}
function tenthFrame(){
	console.log("The 10th frame is not programmed yet!");
}
