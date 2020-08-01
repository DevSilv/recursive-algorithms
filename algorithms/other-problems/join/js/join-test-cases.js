// const { TestCase } = require("../../../../unit-tests/js/test-case");
const { test } = require("../../../../test-runner/test");
const { deepAreArraysEqual }
    = require("../../are-arrays-equal/js/are-arrays-equal");
const { join } = require("./join");

exports.testCases = [
    // new TestCase(
    //     "join",
    //     () => join([0, 1, 2], [3, 4]),
    //     res => deepAreArraysEqual(res, [0, 1, 2, 3, 4])
    // ),
    // new TestCase(
    //     "join",
    //     () => join([], []),
    //     res => deepAreArraysEqual(res, [])
    // ),
    // new TestCase(
    //     "join",
    //     () =>
    //         join(
    //             [
    //                 [3],
    //                 [4]
    //             ],
    //             [0, 1, 2]
    //         ),
    //     res =>
    //         deepAreArraysEqual(
    //             res,
    //             [
    //                 [3],
    //                 [4],
    //                 0,
    //                 1,
    //                 2
    //             ]
    //         )
    // )
];

test(
    res => {
        console.log(`join: ${res}`);
    },
    [
        () =>
            deepAreArraysEqual(
                join([0, 1, 2], [3, 4]),
                [0, 1, 2, 3, 4]
            ),
        () =>
            deepAreArraysEqual(
                join([], []),
                []
            ),
        () =>
            deepAreArraysEqual(
                join(
                    [
                        [3],
                        [4]
                    ],
                    [0, 1, 2]
                ),
                [
                    [3],
                    [4],
                    0,
                    1,
                    2
                ]
            )
    ]
);