"use strict";

// Initial Data
const products = [
  { id: "p1", name: "Wireless Mouse", price: 29.99, category: "Electronics" },
  {
    id: "p2",
    name: "Mechanical Keyboard",
    price: 89.99,
    category: "Electronics",
  },
  { id: "p3", name: "USB-C Hub", price: 34.5, category: "Accessories" },
  { id: "p4", name: "Laptop Stand", price: 45.0, category: "Accessories" },
  { id: "p5", name: "Ergonomic Chair", price: 249.99, category: "Furniture" },
];
const newArrivals = [
  { id: "p6", name: "4K Monitor", price: 399.99, category: "Electronics" },
  { id: "p7", name: "Desk Pad", price: 19.99, category: "Accessories" },
];

// --- Part 1 ---
const [featuredProduct, ...otherProducts] = products;
const fullInventory = [...products, ...newArrivals];

const logProductInfo = (...products) => {
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
  }
  console.log(products.length);
};

logProductInfo(products[0]);
logProductInfo(products[0], products[2]);
logProductInfo(...newArrivals);

// --- Part 2 ---
const productDetails = [
  { id: "pd1", name: "Webcam", stock: 15, rating: 4.5 },
  { id: "pd2", name: "LED Strip", stock: 0, rating: 4.0 },
  { id: "pd3", name: "Standing Desk", rating: 4.8 }, // stock is missing
  { id: "pd4", name: "Noise-Cancelling Headphones", stock: null, rating: 5.0 }, // stock is null
];

const getProductReview = (productObject) => {
  return productObject.rating ?? "No reviews yet";
};

const displayStockInfo = (productObject) => {
  return productObject.stock ?? "Contact for availability";
};

const runPromotion = (productObject) => {
  productObject.rating >= 4.5 &&
    console.log(`Special offer on ${productObject.name}`);
};

// --- Part 3 ---
const userSettings = {
  username: "AdminUser",
  theme: null,
  showNotifications: false
};

const order = {
  orderId: "ORD123",
  items: ["p1", "p3"],
  status: "Pending",
  assignedCourier: "CourierX"
};

userSettings.theme ??= 'light';

(order.status === "Pending" && order.items.length > 3) && (order.status = 'Awaiting Confirmation');
(order.assignedCourier && order.status !== "Shipped") && (order.assignedCourier = "Unconfirmed");

// --- Bonus Challenge ---
const finalizeOrder = (order, user) => {
	const { status, orderId, ...orderDetails } = order;
	const customerName = user.username ?? 'Guest';
	let priorityAlert = '';

	(order.status === 'Awaiting Confirmation' && user.showNotifications) &&
		(priorityAlert = `[PRIORITY ALERT] `);
	if (priorityAlert) {
		console.log(`PRIORITY ALERT: Order ${orderId} for ${customerName} is awaiting confirmation.`);
	}
	return `${priorityAlert}Order ${orderId} for ${user.username} is now ${order.status}.`;
}