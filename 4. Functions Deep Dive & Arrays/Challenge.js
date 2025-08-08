'use strict'

const alexLifts = [[105, 120, 140], [130, 145, 160]];
const sarahLifts = [[115, 130, 150], [110, 120, 135]];

const calcPowerScore = (lift1, lift2, lift3) => (lift1 + lift2 + lift3) / 3;

const declareChampion = function (alexScore, sarahScore) {
	const alexFormatted = alexScore.toFixed(1);
	const sarahFormatted = sarahScore.toFixed(1);
	
	if (alexScore >= sarahScore * 1.25) {
		console.log(`Alex is the champion with a dominant Power Score of ${alexFormatted}, crushing Sarah's ${sarahFormatted}!`);
	} else if (alexScore > sarahScore) {
		console.log(`Narrow Victory for Alex, but no champion is crowned (${alexFormatted} vs ${sarahFormatted}).`);
	}else if (sarahScore >= alexScore * 1.25) {
		console.log(`Sarah is the champion with a dominant Power Score of ${sarahFormatted}, crushing Alex's ${alexFormatted}!`);
	} else if (sarahScore > alexScore) {
		console.log(`Narrow Victory for Sarah, but no champion is crowned (${sarahFormatted} vs ${alexFormatted}).`);
	} else {
		console.log(`Draw!`);
	}
}

console.log(`--- Test DATA 1 ---`);
const alexPowerScore = calcPowerScore(alexLifts[0][0], alexLifts[0][1], alexLifts[0][2]);
const sarahPowerScore = calcPowerScore(sarahLifts[0][0], sarahLifts[0][1], sarahLifts[0][2]);
declareChampion(alexPowerScore, sarahPowerScore);

console.log(`--- Test DATA 2 ---`);
declareChampion(calcPowerScore(alexLifts[1][0], alexLifts[1][1], alexLifts[1][2]), calcPowerScore(sarahLifts[1][0], sarahLifts[1][1], sarahLifts[1][2]));

const getVictoryStatus = function (score1, score2) {
	return ((score1 >= score2 * 1.25 || score2 >= score1 * 1.25) ? `Dominant Victory` : ((score1 === score2) ? `Draw` : `Narrow Victory`)); 
}

console.log(`Victory status: ${getVictoryStatus(alexPowerScore, sarahPowerScore)}`);