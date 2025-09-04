"use strict";

const inventory = [
    {
        id: "p001",
        name: "Artisanal Sourdough Loaf",
        stock: 5,
        price: 8.99,
        category: "Bakery",
    },
    {
        id: "p002",
        name: "Organic Honey Jar",
        stock: 12,
        price: 14.5,
        category: "Pantry",
    },
    {
        id: "p003",
        name: "Cold Brew Coffee Concentrate",
        stock: 0,
        price: 18.0,
        category: "Beverages",
    },
    {
        id: "p004",
        name: "Handcrafted Olive Oil",
        stock: 8,
        price: 22.95,
        category: "Pantry",
    },
    {
        id: "p005",
        name: "Gourmet Chocolate Bar",
        stock: 20,
        price: 5.99,
        category: "Confections",
    },
];

const customerOrders = [
    {
        orderId: "c001",
        items: [
            { productId: "p002", quantity: 2 },
            { productId: "p005", quantity: 3 },
        ],
    },
    {
        orderId: "c002",
        items: [{ productId: "p004", quantity: 1 }],
    },
    {
        orderId: "c003",
        items: [
            { productId: "p001", quantity: 1 },
            { productId: "p005", quantity: 1 },
        ],
    },
    { orderId: "c004", items: [{ productId: "p003", quantity: 1 }] }, // This order can't be fulfilled!
];

const findProduct = function (productId) {
    return inventory.find((product) => product?.id === productId);
};

const hasAvailableStock = function (productId) {
    const product = findProduct(productId);
    return product ? product.stock > 0 : false;
};

const isOrderFulfillable = function (orderId) {
    const order = customerOrders.find((order) => order.orderId === orderId);
    if (!order) return false;
    const orderItems = order.items;
    if (!orderItems) return false;
    return orderItems.every((item) => {
        const invItem = findProduct(item.productId);
        if (!invItem) return false;
        return item.quantity <= invItem.stock;
    });
};

const getAllProductIdsFromOrders = function () {
    return customerOrders.flatMap((order) =>
        order.items.map((product) => product.productId)
    );
};

const findLastSoldProductDetails = function () {
    const lastOrder = customerOrders.at(-1)?.items.at(-1);
    return lastOrder ? findProduct(lastOrder.productId) : undefined;
};
