'use strict'

const deckRef =  [
	{value: 'A♠', score: 11}, {value: 'A♥', score: 11}, {value: 'A♦', score: 11}, {value: 'A♣', score: 11},
	{value: '2♠', score: 2}, {value: '2♥', score: 2}, {value: '2♦', score: 2}, {value: '2♣', score: 2},
	{value: '3♠', score: 3}, {value: '3♥', score: 3}, {value: '3♦', score: 3}, {value: '3♣', score: 3},
	{value: '4♠', score: 4}, {value: '4♥', score: 4}, {value: '4♦', score: 4}, {value: '4♣', score: 4},
	{value: '5♠', score: 5}, {value: '5♥', score: 5}, {value: '5♦', score: 5}, {value: '5♣', score: 5},
	{value: '6♠', score: 6}, {value: '6♥', score: 6}, {value: '6♦', score: 6}, {value: '6♣', score: 6},
	{value: '7♠', score: 7}, {value: '7♥', score: 7}, {value: '7♦', score: 7}, {value: '7♣', score: 7},
	{value: '8♠', score: 8}, {value: '8♥', score: 8}, {value: '8♦', score: 8}, {value: '8♣', score: 8},
	{value: '9♠', score: 9}, {value: '9♥', score: 9}, {value: '9♦', score: 9}, {value: '9♣', score: 9},
	{value: '10♠', score: 10}, {value: '10♥', score: 10}, {value: '10♦', score: 10}, {value: '10♣', score: 10},
	{value: 'J♠', score: 10}, {value: 'J♥', score: 10}, {value: 'J♦', score: 10}, {value: 'J♣', score: 10},
	{value: 'Q♠', score: 10}, {value: 'Q♥', score: 10}, {value: 'Q♦', score: 10}, {value: 'Q♣', score: 10},
	{value: 'K♠', score: 10}, {value: 'K♥', score: 10}, {value: 'K♦', score: 10}, {value: 'K♣', score: 10}
];

const gameState = {
	playerScore: 0,
	dealerScore: 0,
	playerCards: [],
	dealerCards: [],
	deck: [],
	isGameOver: false
}

const gameResult	= document.getElementById('game-result');
const dealerScore	= document.getElementById('dealer-score');
const playerScore	= document.getElementById('player-score');
const dealerCards	= document.getElementById('dealer-cards');
const playerCards	= document.getElementById('player-cards');
const playerArea	= document.querySelector('#player-cards');
const dealerArea	= document.querySelector('#dealer-cards');
const btnNew		= document.querySelector('.btn-new');
const btnHit		= document.querySelector('.btn-hit');
const btnStand		= document.querySelector('.btn-stand');

dealerScore.textContent = gameState.dealerScore;
playerScore.textContent = gameState.playerScore;

const init = () => {
	gameState.playerScore = 0;
	gameState.dealerScore = 0;
	gameState.playerCards = [];
	gameState.dealerCards = [];
	gameState.deck = [...deckRef];
	gameState.isGameOver = false;

	playerArea.innerHTML = '';
	dealerArea.innerHTML = '';
	gameResult.textContent = '';

	for (let i = 0; i < 2; i++) {
		const playerCard = drawCard();
		gameState.playerCards.push(playerCard);
		displayCard(playerCard, playerCards);
	}
	for (let i = 0; i < 2; i++) {
		const dealerCard = drawCard();
		gameState.dealerCards.push(dealerCard);
		displayCard(dealerCard, dealerCards);
	}
	gameState.playerScore = calculateScore(gameState.playerCards)
	gameState.dealerScore = calculateScore(gameState.dealerCards)
	playerScore.textContent = gameState.playerScore;
	dealerScore.textContent = gameState.dealerScore;
}

const drawCard = () => {
	let cardIndex = Math.trunc(Math.random() * gameState.deck.length);
	let card = gameState.deck[cardIndex]; 
	gameState.deck.splice(cardIndex, 1);
	return card;
}

const displayCard = (card, area) => {
	const cardEl = document.createElement('div');
	cardEl.classList.add('card');
	cardEl.textContent = card.value;
	area.appendChild(cardEl);
}

const calculateScore = (cards) => {
	let totalScore = 0;
	let aceCount = 0;
	for (let i = 0; i < cards.length; i++) {
		if (cards[i].value[0] === 'A') {
			aceCount += 1;
		}
		totalScore += cards[i].score;
	}
	while (totalScore > 21 && totalScore > 0 && aceCount > 0) {
		totalScore -= 10;
		aceCount -= 1;
	}
	return totalScore;
}

const endGame = (result) => {
	if (result === 'bust') {
		gameResult.textContent = 'Bust!';
		gameResult.style.color = 'red';
		gameState.isGameOver = true;
	} else if (result === 'win') {
		gameResult.textContent = 'You won!';
		gameResult.style.color = 'green';
		gameState.isGameOver = true;
	} else if (result === 'tie') {
		gameResult.textContent = 'Tie!';
		gameResult.style.color = 'gray';
		gameState.isGameOver = true;
	} else {
		gameResult.textContent = 'You Lost!';
		gameResult.style.color = 'red';
		gameState.isGameOver = true;
	}
}

const hit = () => {
	if (gameState.isGameOver === false) {
		const card = drawCard();
		gameState.playerCards.push(card);
		displayCard(card, playerArea);
		gameState.playerScore = calculateScore(gameState.playerCards);
		playerScore.textContent = gameState.playerScore;
		if (gameState.playerScore > 21) {
			endGame('bust');
		}
	}
}

const stand = () => {
	if (gameState.isGameOver === false){
		while (gameState.dealerScore < 17) {
			const card = drawCard();
			gameState.dealerCards.push(card);
			displayCard(card, dealerArea);
			gameState.dealerScore = calculateScore(gameState.dealerCards);
			dealerScore.textContent = gameState.dealerScore;
			if (gameState.dealerScore > 21) {
				endGame('win');
			}
		}
		if (gameState.dealerScore > 21 || gameState.dealerScore <  gameState.playerScore) {
			endGame('win');
		} else if (gameState.dealerScore === gameState.playerScore) {
			endGame('tie');
		} else {
			endGame('lose');
		}
	}
}

btnNew.addEventListener('click', init);
btnHit.addEventListener('click', hit);
btnStand.addEventListener('click', stand);