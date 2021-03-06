const { test } = require("../../../../test-runners/js/test");
const {
    trialDivision,
    trialDivision2
} = require("./trial-division");
const areArraysEqualModule
    = require("../../are-arrays-equal/js/are-arrays-equal");

test(
    res => {
        console.log(`trialDivision: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(0, 2, [], [], 0, 0, false)[2],
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(1, 2, [], [], 0, 0, false)[2],
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(10, 2, [], [], 0, 0, false)[2],
                [2, 5]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(100, 2, [], [], 0, 0, false)[2],
                [2, 5]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(101, 2, [], [], 0, 0, false)[2],
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(102, 2, [], [], 0, 0, false)[2],
                [2, 3, 17]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(103, 2, [], [], 0, 0, false)[2],
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(104, 2, [], [], 0, 0, false)[2],
                [2, 13]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(105, 2, [], [], 0, 0, false)[2],
                [3, 5, 7]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(106, 2, [], [], 0, 0, false)[2],
                [2, 53]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(107, 2, [], [], 0, 0, false)[2],
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(108, 2, [], [], 0, 0, false)[2],
                [2, 3]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(109, 2, [], [], 0, 0, false)[2],
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(110, 2, [], [], 0, 0, false)[2],
                [2, 5, 11]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(111, 2, [], [], 0, 0, false)[2],
                [3, 37]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(112, 2, [], [], 0, 0, false)[2],
                [2, 7]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(113, 2, [], [], 0, 0, false)[2],
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(114, 2, [], [], 0, 0, false)[2],
                [2, 3, 19]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(115, 2, [], [], 0, 0, false)[2],
                [5, 23]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(116, 2, [], [], 0, 0, false)[2],
                [2, 29]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(117, 2, [], [], 0, 0, false)[2],
                [3, 13]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(118, 2, [], [], 0, 0, false)[2],
                [2, 59]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(119, 2, [], [], 0, 0, false)[2],
                [7, 17]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision(120, 2, [], [], 0, 0, false)[2],
                [2, 3, 5]
            )
    ]
);

test(
    res => {
        console.log(`trialDivision2: ${res}`);
    },
    [
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(0, 2, [], []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(1, 2, [], []),
                []
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(10, 2, [], []),
                [2, 5]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(100, 2, [], []),
                [2, 2, 5, 5]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(101, 2, [], []),
                [101]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(102, 2, [], []),
                [2, 3, 17]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(103, 2, [], []),
                [103]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(104, 2, [], []),
                [2, 2, 2, 13]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(105, 2, [], []),
                [3, 5, 7]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(106, 2, [], []),
                [2, 53]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(107, 2, [], []),
                [107]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(108, 2, [], []),
                [2, 2, 3, 3, 3]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(109, 2, [], []),
                [109]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(110, 2, [], []),
                [2, 5, 11]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(111, 2, [], []),
                [3, 37]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(112, 2, [], []),
                [2, 2, 2, 2, 7]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(113, 2, [], []),
                [113]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(114, 2, [], []),
                [2, 3, 19]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(115, 2, [], []),
                [5, 23]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(116, 2, [], []),
                [2, 2, 29]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(117, 2, [], []),
                [3, 3, 13]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(118, 2, [], []),
                [2, 59]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(119, 2, [], []),
                [7, 17]
            ),
        () =>
            areArraysEqualModule.deepAreArraysEqual(
                trialDivision2(120, 2, [], []),
                [2, 2, 2, 3, 5]
            )
    ]
);