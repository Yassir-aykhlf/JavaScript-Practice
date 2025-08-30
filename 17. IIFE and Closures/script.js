'use strict'

(function() {
	const header = document.querySelector('h1');
	let clickCount = 0;
	header.style.color = 'teal';
	header.addEventListener('click', () => {
		++clickCount;
		console.log(`Article clicked. Total clicks: ${clickCount}`);
	})
	const buttons = document.querySelectorAll('button');

	/**
	 * this is a bug
	 * because i is initialized using var
	 * it gets hoisted to the IIFE scope
	 * meaning after the each button callback function will get 3 at first
	 * after the first loop finishes
	 * this a good exampe of why using var instead of let is bad practice
	 */
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			setTimeout(function() {
				console.log(`Report for Feature ${i + 1} generated`)
			}, 2000);
		});
	}

	buttons.forEach(function(button, i) {
		button.addEventListener('click', () => {
			setTimeout(() => {
				console.log(`Report for Feature ${i + 1} generated`)
			}, 2000);
		});
	})
})();
