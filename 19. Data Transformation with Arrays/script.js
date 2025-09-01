"use strict";

// --- INITIAL DATA ---
const shoppingCart = [
    {
        product: "Wireless Noise-Cancelling Headphones",
        price: "99.99", // Price is a string
        quantity: 2,
        category: "audio",
        taxable: true,
        shippingCost: 5.0,
    },
    {
        product: "Smartphone X Pro",
        price: 899.5,
        quantity: 1,
        category: "electronics",
        taxable: true,
        shippingCost: 7.25,
    },
    {
        product: "Vintage Vinyl Record",
        price: 24.5,
        quantity: 1,
        category: "music",
        taxable: false, // Tax-exempt
        shippingCost: 3.5,
    },
    {
        product: "Data Cable",
        price: "12.00",
        quantity: 3,
        category: "accessories",
        taxable: true,
        shippingCost: 2.0,
    },
    {
        product: "Extended Warranty", // No price, should be ignored
        quantity: 1,
        category: "service",
        taxable: false,
        shippingCost: 0,
    },
    {
        product: "Smart Home Hub",
        price: 149.0,
        quantity: 1,
        category: "electronics",
        taxable: true,
        shippingCost: 8.0,
    },
];

// The sales tax rate
const TAX_RATE = 0.0825; // 8.25%

// --- Part 1 ---
const normalizeAndCalculateLineItems = function (cart) {
    const lineItems = cart
        .filter((item) => item.price || 0)
        .map(function (item) {
            const itemPrice = Number(item.price);
            const quantity = item.quantity;
            return {
                ...item,
                price: itemPrice,
                lineTotal: itemPrice * quantity,
            };
        });
    return lineItems;
};

// --- Part 2 ---
const calculateOrderSummary = function (normalizedData) {
    const orderSummary = normalizedData.reduce(
        function (acc, item) {
            acc.subtotal += item.lineTotal;
            acc.totalShipping += item.shippingCost;
            acc.totalTax += item.taxable ? item.lineTotal * TAX_RATE : 0;

            return acc;
        },
        { subtotal: 0, totalShipping: 0, totalTax: 0, grandTotal: 0 }
    );
    orderSummary.grandTotal =
        orderSummary.subtotal +
        orderSummary.totalShipping +
        orderSummary.totalTax;
    return orderSummary;
};

// --- Part 3 ---
const generateReceiptHTML = function(lineItems, summary) {
    const itemHTML = lineItems
        .map(item => `<li><span>${item.quantity}x ${item.product}</span> <span>$${item.lineTotal.toFixed(2)}</span></li>`)
        .join('');

    return `
        <ul>${itemHTML}</ul>
        <hr>
        <p><span>Subtotal</span> <span>$${summary.subtotal.toFixed(2)}</span></p>
        <p><span>Shipping</span> <span>$${summary.totalShipping.toFixed(2)}</span></p>
        <p><span>Tax (8.25%)</span> <span>$${summary.totalTax.toFixed(2)}</span></p>
        <p><strong><span>Grand Total</span> <span>$${summary.grandTotal.toFixed(2)}</span></strong></p>
    `;
};

const displayReceipt = function() {
	const normalizedData = normalizeAndCalculateLineItems(shoppingCart);
	const orderSummary = calculateOrderSummary(normalizedData);
	const container = document.querySelector('#receipt-container');
	const html = generateReceiptHTML(normalizedData, orderSummary);
	container.insertAdjacentHTML("afterbegin", html);
}

displayReceipt();