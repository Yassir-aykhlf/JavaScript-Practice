"use strict";

const transactions = [
    {
        id: "tx_001",
        customerId: "cust_123",
        customerType: "premium", // 'premium', 'regular', 'new'
        amount: 299.99,
        items: [
            { category: "electronics", quantity: 1, price: 199.99 },
            { category: "accessories", quantity: 2, price: 50.0 },
        ],
        paymentMethod: "credit_card", // 'credit_card', 'debit_card', 'paypal', 'apple_pay'
        timestamp: "2024-01-15T10:30:00Z",
        refunded: false,
    },
    {
        id: "tx_002",
        customerId: "cust_456",
        customerType: "regular",
        amount: 149.99,
        items: [
            { category: "clothing", quantity: 1, price: 149.99 },
        ],
        paymentMethod: "paypal",
        timestamp: "2024-01-16T11:00:00Z",
        refunded: false,
    },
    // ... more transactions
];

const generateAnalytics = function (transactions, options) {
    // first I will create a filtered array
    const filteredTransactions = transactions.filter((txn) => {
        if (options.excludeRefunded && txn.refunded) {
            return false;
        }
        if (options.minOrderValue && txn.amount < options.minOrderValue) {
            return false;
        }
        if (
            options.customerTypes &&
            !options.customerTypes.includes(txn.customerType)
        ) {
            return false;
        }
        if (options.dateRange) {
            const txnDate = new Date(txn.timestamp);
            const startDate = new Date(options.dateRange.start);
            const endDate = new Date(options.dateRange.end);
            if (txnDate < startDate || txnDate >= endDate) {
                return false;
            }
        }
        return true;
    });

    // reduce the transactions array into a single summary object
    // first construct the accumulator
    const initialAnalytics = {
        // for revenue analysis
        totalRevenue: 0,
        transactionCount: 0, // to calculate the average
        revenueByCustomerType: {},
        // for product insights
        itemsSoldByCategory: {},
        revenueByCategory: {},
        //for payment intelligence
        paymentMethodUsage: {},
        // for customuer segmentation
        customerProfiles: {},
    };

    // the reduce method, for each transaction i'll update the accumulator
    const processedData = filteredTransactions.reduce((acc, txn) => {
        acc.totalRevenue += txn.amount;
        acc.transactionCount++;

        const type = txn.customerType;
        if (!acc.revenueByCustomerType[type]) {
            acc.revenueByCustomerType[type] = 0;
        }
        acc.revenueByCustomerType[type] += txn.amount;

        txn.items.forEach((item) => {
            const category = item.category;
            if (!acc.itemsSoldByCategory[category]) {
                acc.itemsSoldByCategory[category] = 0;
            }
            acc.itemsSoldByCategory[category] += item.quantity;

            if (!acc.revenueByCategory[category]) {
                acc.revenueByCategory[category] = 0;
            }
            acc.revenueByCategory[category] += item.price * item.quantity;
        });

        const method = txn.paymentMethod;
        if (!acc.paymentMethodUsage[method]) {
            acc.paymentMethodUsage[method] = 0;
        }
        acc.paymentMethodUsage[method]++;

        const custId = txn.customerId;
        if (!acc.customerProfiles[custId]) {
            acc.customerProfiles[custId] = {
                purchaseCount: 0,
                totalSpent: 0,
                type: txn.customerType,
            };
        }
        acc.customerProfiles[custId].purchaseCount++;
        acc.customerProfiles[custId].totalSpent += txn.amount;

        return acc;
    }, initialAnalytics);

    // final report construction
    const averageOrderValue =
        processedData.transactionCount > 0
            ? processedData.totalRevenue / processedData.transactionCount
            : 0;

    // find best performing categories
    const findBestInObject = (obj) => {
        if (Object.keys(obj).length === 0) return null;
        return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    };

    const bestCategoryByRevenue = findBestInObject(
        processedData.revenueByCategory
    );
    const bestCategoryByItemsSold = findBestInObject(
        processedData.itemsSoldByCategory
    );

    const paymentMethodSummary = {
        card: 0,
        digital_wallet: 0,
    };
    for (const method in processedData.paymentMethodUsage) {
        if (["credit_card", "debit_card"].includes(method)) {
            paymentMethodSummary.card +=
                processedData.paymentMethodUsage[method];
        } else if (["paypal", "apple_pay"].includes(method)) {
            paymentMethodSummary.digital_wallet +=
                processedData.paymentMethodUsage[method];
        }
    }

    const valuableCustomers = Object.keys(
        processedData.customerProfiles
    ).filter((id) => processedData.customerProfiles[id].purchaseCount > 1);
    const upgradeCandidates = Object.keys(
        processedData.customerProfiles
    ).filter((id) => {
        const profile = processedData.customerProfiles[id];
        return (
            profile.type === "regular" && profile.totalSpent / profile.purchaseCount > averageOrderValue
        );
    });

    const finalAnalytics = {
      summary: {
        totalRevenue: processedData.totalRevenue,
        totalTransactions: processedData.transactionCount,
        averageOrderValue: averageOrderValue,
      },
      revenueAnalysis: {
        byCustomerType: processedData.revenueByCustomerType,
      },
      productInsights: {
        bestCategoryByRevenue: bestCategoryByRevenue,
        bestCategoryByItemsSold: bestCategoryByItemsSold,
        revenueDistribution: processedData.revenueByCategory,
        salesDistribution: processedData.itemsSoldByCategory,
      },
      paymentIntelligence: {
        usage: processedData.paymentMethodUsage,
        summary: paymentMethodSummary,
      },
      customerSegmentation: {
        multiPurchaseCustomers: valuableCustomers,
        potentialPremiumUpgrades: upgradeCandidates,
      },
    }

    return finalAnalytics;
};

const analytics = generateAnalytics(transactions, {
    excludeRefunded: true,
    minOrderValue: 10,
    customerTypes: ["premium", "regular"],
    dateRange: { start: "2024-01-01", end: "2024-01-31" },
});

console.log(analytics);
