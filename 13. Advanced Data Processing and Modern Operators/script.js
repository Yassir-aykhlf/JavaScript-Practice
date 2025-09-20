// Raw data from the "API"
const creators = [
  {
    id: "c1",
    name: "Alice",
    products: [
      {
        id: "p1",
        name: "3D Icon Pack",
        price: 25,
        stock: 50,
        tags: ["icons", "3d", "design"],
      },
      {
        id: "p2",
        name: "UX Course",
        price: 150,
        stock: 0,
        tags: ["ux", "course", "design"],
      },
    ],
    socials: {
      twitter: "@alice_designs",
      instagram: "@alice_creates",
    },
  },
  {
    id: "c2",
    name: "Bob",
    products: [
      {
        id: "p3",
        name: "Photography Presets",
        price: 15,
        stock: 100,
        tags: ["photo", "presets", "lightroom"],
      },
    ],
    socials: {
      twitter: "@bob_photos",
      instagram: null, // Note: Bob hasn't linked his Instagram
    },
  },
  {
    id: "c3",
    name: "Charlie",
    products: [
      {
        id: "p4",
        name: "Music Production Kit",
        price: 75,
        stock: 20,
        tags: ["music", "audio", "ableton", "presets"],
      },
      {
        id: "p5",
        name: "Video Editing LUTs",
        price: 15,
        tags: ["video", "presets", "final cut"],
      }, // Note: Stock is missing
    ],
    socials: {
      // Note: Socials object is missing entirely
    },
  },
];

const supportHours = {
  monday: "9 AM - 5 PM",
  tuesday: "9 AM - 5 PM",
  wednesday: "9 AM - 8 PM",
  thursday: "9 AM - 8 PM",
  friday: "9 AM - 5 PM",
  // Saturday and Sunday are closed
};

// --- Task 1 ---
const dashboardData = {
  creators,
  supportHours,
};

// --- Task 2 ---
for ({ name: creatorName } of dashboardData.creators) {
  console.log(creatorName);
}

// --- Task 3 ---
// complexity: O(c * p * t)
console.log("--- Unique Product Tags ---");
const totalTags = [];
for (const creator of dashboardData.creators) {
  for (const product of creator.products) {
    if (product.tags) {
      totalTags.push(...product.tags);
    }
  }
}
const uniqueTags = [...new Set(totalTags)];
console.log(uniqueTags);

// --- Task 4 ---
console.log("--- Creators Socials ---");
for (const creator of dashboardData.creators) {
  const twitter = creator?.socials?.twitter ?? `N/A`;
  const instagram = creator?.socials?.instagram ?? `N/A`;
  console.log(
    `${creator.name}'s social media: Twitter - ${twitter}, Instagram - ${instagram}`
  );
}

// --- Task 5 ---
console.log("--- Products Stock Status ---");
for (const creator of dashboardData.creators) {
  for (const products of creator.products) {
    const stock = products?.stock ?? `Not Set`;
	console.log(
      `${products.name} - Stock: ${stock}`
    );
  }
}

// --- Task 6 ---
console.log("--- Support Schedule ---");
for ( const [day, hours] of Object.entries(dashboardData.supportHours)) {
	console.log(`On ${day}, support is available from ${hours}`)
}