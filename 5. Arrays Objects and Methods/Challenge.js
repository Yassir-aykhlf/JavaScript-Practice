const user = {
	username : 'JaneDoe',
	weight: 65,
	height: 175,
	meals: [],
	calculateBMR : function () {
		if (!this.bmr) {
			this.bmr =  10 * this.weight + 6.25 * this.height;
		}
		return this.bmr;
	},
	addMeal: function (mealName, calories) {
		const meal = {
			name: mealName,
			calories: calories
		};
		this.meals.push(meal);
	},
	getTodaysSummary: function () {
		return `${this.username}'s BMR is ${this.calculateBMR()} calories. Today, they have eaten ${this.meals.length} meals.`;
	},
	updateStat: function (statName, value) {
		const updatables = ['weight', 'height'];
		if (updatables.includes(statName)) {
			this[statName] = value;
			this.bmr = null;
			this.calculateBMR();
		}
	}
}

user.addMeal('Breakfast', 450);
user.addMeal('Lunch', 700);
user.addMeal('Dinner', 600);

console.log(user);
console.log(user.getTodaysSummary());

user.updateStat('weight', 70);
console.log(user.getTodaysSummary());