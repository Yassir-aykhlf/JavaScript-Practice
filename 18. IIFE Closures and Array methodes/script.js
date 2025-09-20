"use strict";

// --- Initial Data ---
const rawData = [
    {
        id: "user1",
        posts: [
            { postId: "post1", likes: 10, comments: 5 },
            { postId: "post2", likes: "20", comments: 7 },
        ],
    },
    {
        id: "user2",
        posts: [{ postId: "post3", likes: 15, comments: 3 }],
    },
    {
        id: "user3",
        posts: [],
    }, // User with no posts
    {
        id: "user4",
        posts: [
            { postId: "post4", likes: 5, comments: "invalid" },
            { postId: "post5", likes: 12, comments: 8 },
        ],
    },
];

// --- Part 1 ---

// initialize a Module using an IIFE
// the IIFE runs once, does its job and disappears from memory
// its job is to construct the module and establish a private protected scope for inner data
const sanitizerModule = (function () {
    // pure function; does not mutate the data passed to it
    const sanitize = function (data) {
        return data.map(function (user) {
            return {
                ...user,
                posts: user.posts.map(function (post) {
                    return {
                        ...post,
                        likes: Number(post.likes) || 0,
                        comments: Number(post.comments) || 0,
                    };
                }),
            };
        });
    };
    return {
        sanitize,
    };
})();

const sanitizedData = sanitizerModule.sanitize(rawData);

// --- Part 2 ---

// createScoreCalculator is a higher-order function
// it accepts arguments and return a new function
// works like and is a "factory function"
// the arguments get hard-coded in the returned function
// the returned function will work completly independently
const createScoreCalculator = function (likeWeight, commentWeight) {
    return function (post) {
        return post.likes * likeWeight + post.comments * commentWeight;
    };
};

const standardCalculator = createScoreCalculator(0.7, 1.3);
const likesFocusedCalculator = createScoreCalculator(1.5, 0.5);

const post = { postId: "post1", likes: 10, comments: 5 };

// --- Part 3 ---
const activeUsersReport = sanitizedData
    .filter((user) => user.posts.length > 0)
    .map((user) => {
        const postsWithScores = user.posts.map((post) => ({
            ...post,
            score: standardCalculator(post),
        }));
        const engagementStats = postsWithScores.reduce(
            (stats, post) => {
                stats.totalEngagement += post.score;
                if (post.score > stats.topPost.score) {
                    stats.topPost = post;
                }
                return stats;
            },
            {
                totalEngagement: 0,
                topPost: postsWithScores[0],
            }
        );
        return {
            userId: user.id,
            totalEngagement: engagementStats.totalEngagement,
            topPost: engagementStats.topPost,
        };
    });

console.log(activeUsersReport);
