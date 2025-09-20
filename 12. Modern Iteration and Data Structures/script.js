'use strict'

// --- Initial Data ---
const restaurantData = {
  name: "The Rustic Spoon",
  cuisine: "Italian",
  id: "rr-001",
  menuSpecials: [
    "Truffle Risotto",
    "Margherita Pizza",
    "Gnocchi al Pesto",
    "Tiramisu"
  ],
  openingHours: {
    tuesday: { open: 11, close: 22 },
    wednesday: { open: 11, close: 22 },
    thursday: { open: 11, close: 22 },
    friday: { open: 11, close: 23 },
    saturday: { open: 12, close: 24 },
    sunday: { open: 12, close: 20 },
  },
  tags: ["Italian", "Cozy", "Pizza", "Family Friendly", "Italian", "Pasta"],
  averageRating: 4.5,
  chef: {
    name: "Marco Rossi",
    specialty: "Pasta"
  },
  bookTable: function(numGuests) {
    console.log(`Booking a table for ${numGuests} guests at ${this.name}.`);
  }
};

for (const [index, specialItem] of restaurantData?.menuSpecials.entries()) {
	console.log(`${index + 1}: ${specialItem}`);
}

for (const [ day , {open, close} ] of Object.entries(restaurantData.openingHours)) {
	console.log(`On ${day}, we are open from ${open} to ${close}`);
}

const uniqueTags = [... new Set(restaurantData.tags)];

//2.2
let today = 'friday';

const restaurantOverview = {
	name: restaurantData.name,
	cuisine: restaurantData.cuisine,
	mainTag: uniqueTags[0],
  menuSpecial: restaurantData.menuSpecials[0],
	getMenuSummary() {
		console.log(`${this.name} offers ${this.cuisine} cuisine and is known for ${this.menuSpecial}`);
	},
	[today]: restaurantData.openingHours[today], 
}

// --- Part 3 ---

// --- New, Inconsistent Data ---
const allRestaurants = [
  // A complete record
  {
    name: "The Rustic Spoon",
    id: "rr-001",
    averageRating: 4.5,
    chef: { name: "Marco Rossi", specialty: "Pasta" }
  },
  // A record with a valid, but "falsy" rating, and a missing chef
  {
    name: "Pizza Palace",
    id: "rr-002",
    averageRating: 0, // This is a real, terrible rating
    // No chef property!
  },
  // A new restaurant with no rating yet
  {
    name: "Green Leaf Cafe",
    id: "rr-003",
    averageRating: null, // Rating is not available yet
    chef: { name: "Anya Sharma", specialty: "Vegan" }
  }
];

//3.1
for (const restaurantObj of allRestaurants) {
  console.log(`Chef at ${restaurantObj.name}: ${restaurantObj?.chef?.name ?? 'Chef not listed'}`);
  console.log(`Rating for ${restaurantObj.name}: ${restaurantObj?.averageRating ?? 'Not yet rated'}`);
}