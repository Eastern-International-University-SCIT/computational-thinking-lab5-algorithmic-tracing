/**
 * Trace-fill puzzle: students drag Line / variable chips into blank rows.
 * INSTANCE is embedded by generate_search_puzzles.js.
 *
 * Pieces are a multiset taken only from blank cells (repeats allowed).
 * Execution gates on each blank row until that row is fully correct.
 */

window.TracePuzzle = (function () {
  const INSTANCE = {
  "array": [
    267,
    239,
    829,
    983,
    376,
    542,
    467,
    74,
    183,
    663,
    500,
    975,
    965,
    278
  ],
  "varFields": [
    "n",
    "left",
    "mid",
    "right",
    "i",
    "j",
    "k",
    "merged"
  ],
  "blankFields": [
    "stepId",
    "left",
    "mid",
    "right",
    "i",
    "j",
    "k",
    "merged"
  ],
  "executorGlobal": "NaturalMergeSortExecutor",
  "pickedSteps": [
    7,
    10,
    11,
    16,
    17,
    19,
    21,
    22,
    23,
    25,
    26,
    32,
    39,
    57,
    60,
    64,
    68,
    75,
    76,
    77,
    78,
    82,
    83,
    85,
    87,
    93,
    94,
    95,
    104,
    108,
    110,
    112,
    115,
    118,
    119,
    121,
    125,
    129,
    130,
    131,
    132,
    133,
    141,
    142,
    143,
    144,
    145,
    146,
    152,
    157,
    159,
    163,
    164,
    165,
    168,
    175,
    186,
    188,
    189,
    194,
    199,
    201,
    204,
    206,
    215,
    216
  ],
  "answers": {
    "7": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "0",
      "right": "\u2014",
      "i": "1",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "10": {
      "stepId": "setRight",
      "left": "0",
      "mid": "0",
      "right": "3",
      "i": "3",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "11": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "0",
      "right": "3",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "16": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "0",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "17": {
      "stepId": "incK",
      "left": "0",
      "mid": "0",
      "right": "3",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "19": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "0",
      "right": "3",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "21": {
      "stepId": "drainRight",
      "left": "0",
      "mid": "0",
      "right": "3",
      "i": "\u2014",
      "j": "1",
      "k": "2",
      "merged": "false"
    },
    "22": {
      "stepId": "setMergedTrue",
      "left": "0",
      "mid": "0",
      "right": "3",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "23": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "25": {
      "stepId": "extendLeft",
      "left": "4",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "26": {
      "stepId": "setMid",
      "left": "4",
      "mid": "5",
      "right": "\u2014",
      "i": "5",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "32": {
      "stepId": "copyRuns",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "39": {
      "stepId": "takeRight",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "1",
      "j": "0",
      "k": "5",
      "merged": "true"
    },
    "57": {
      "stepId": "incK",
      "left": "7",
      "mid": "9",
      "right": "11",
      "i": "1",
      "j": "0",
      "k": "8",
      "merged": "true"
    },
    "60": {
      "stepId": "incK",
      "left": "7",
      "mid": "9",
      "right": "11",
      "i": "2",
      "j": "0",
      "k": "9",
      "merged": "true"
    },
    "64": {
      "stepId": "compareMerge",
      "left": "7",
      "mid": "9",
      "right": "11",
      "i": "2",
      "j": "1",
      "k": "10",
      "merged": "true"
    },
    "68": {
      "stepId": "setMergedTrue",
      "left": "7",
      "mid": "9",
      "right": "11",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "75": {
      "stepId": "extendRight",
      "left": "12",
      "mid": "12",
      "right": "13",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "76": {
      "stepId": "setRight",
      "left": "12",
      "mid": "12",
      "right": "13",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "77": {
      "stepId": "callMerge",
      "left": "12",
      "mid": "12",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "78": {
      "stepId": "copyRuns",
      "left": "12",
      "mid": "12",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "82": {
      "stepId": "takeRight",
      "left": "12",
      "mid": "12",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "12",
      "merged": "true"
    },
    "83": {
      "stepId": "incK",
      "left": "12",
      "mid": "12",
      "right": "13",
      "i": "0",
      "j": "\u2014",
      "k": "13",
      "merged": "true"
    },
    "85": {
      "stepId": "setMergedTrue",
      "left": "12",
      "mid": "12",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "87": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "93": {
      "stepId": "setMid",
      "left": "0",
      "mid": "3",
      "right": "\u2014",
      "i": "3",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "94": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "3",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "95": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "3",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "104": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "1",
      "j": "0",
      "k": "1",
      "merged": "false"
    },
    "108": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "2",
      "j": "0",
      "k": "2",
      "merged": "false"
    },
    "110": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "2",
      "j": "1",
      "k": "3",
      "merged": "false"
    },
    "112": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "2",
      "j": "1",
      "k": "3",
      "merged": "false"
    },
    "115": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "2",
      "j": "2",
      "k": "4",
      "merged": "false"
    },
    "118": {
      "stepId": "setMergedTrue",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "119": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "121": {
      "stepId": "extendLeft",
      "left": "7",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "125": {
      "stepId": "extendRight",
      "left": "7",
      "mid": "11",
      "right": "12",
      "i": "12",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "129": {
      "stepId": "initMergePointers",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "7",
      "merged": "true"
    },
    "130": {
      "stepId": "whileBoth",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "7",
      "merged": "true"
    },
    "131": {
      "stepId": "compareMerge",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "7",
      "merged": "true"
    },
    "132": {
      "stepId": "takeLeft",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "7",
      "merged": "true"
    },
    "133": {
      "stepId": "incK",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "1",
      "j": "0",
      "k": "8",
      "merged": "true"
    },
    "141": {
      "stepId": "takeLeft",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "2",
      "j": "1",
      "k": "10",
      "merged": "true"
    },
    "142": {
      "stepId": "incK",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "3",
      "j": "1",
      "k": "11",
      "merged": "true"
    },
    "143": {
      "stepId": "compareMerge",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "3",
      "j": "1",
      "k": "11",
      "merged": "true"
    },
    "144": {
      "stepId": "takeLeft",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "3",
      "j": "1",
      "k": "11",
      "merged": "true"
    },
    "145": {
      "stepId": "incK",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "4",
      "j": "1",
      "k": "12",
      "merged": "true"
    },
    "146": {
      "stepId": "compareMerge",
      "left": "7",
      "mid": "11",
      "right": "13",
      "i": "4",
      "j": "1",
      "k": "12",
      "merged": "true"
    },
    "152": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "157": {
      "stepId": "extendLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "159": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "6",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "163": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "164": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "165": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "168": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "175": {
      "stepId": "incK",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "1",
      "j": "2",
      "k": "3",
      "merged": "false"
    },
    "186": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "3",
      "j": "3",
      "k": "6",
      "merged": "false"
    },
    "188": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "4",
      "j": "3",
      "k": "7",
      "merged": "false"
    },
    "189": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "4",
      "j": "3",
      "k": "7",
      "merged": "false"
    },
    "194": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "5",
      "j": "4",
      "k": "9",
      "merged": "false"
    },
    "199": {
      "stepId": "incK",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "6",
      "j": "5",
      "k": "11",
      "merged": "false"
    },
    "201": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "6",
      "j": "5",
      "k": "11",
      "merged": "false"
    },
    "204": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "6",
      "j": "6",
      "k": "12",
      "merged": "false"
    },
    "206": {
      "stepId": "drainLeft",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "6",
      "j": "\u2014",
      "k": "13",
      "merged": "false"
    },
    "215": {
      "stepId": "setMid",
      "left": "0",
      "mid": "13",
      "right": "\u2014",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "216": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "13",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 361,
        "value": "takeLeft"
      },
      {
        "id": 497,
        "value": "takeRight"
      },
      {
        "id": 161,
        "value": "copyRuns"
      },
      {
        "id": 153,
        "value": "callMerge"
      },
      {
        "id": 233,
        "value": "compareMerge"
      },
      {
        "id": 97,
        "value": "takeRight"
      },
      {
        "id": 1,
        "value": "advancePastMid"
      },
      {
        "id": 417,
        "value": "copyRuns"
      },
      {
        "id": 409,
        "value": "callMerge"
      },
      {
        "id": 489,
        "value": "takeRight"
      },
      {
        "id": 81,
        "value": "setMid"
      },
      {
        "id": 113,
        "value": "incK"
      },
      {
        "id": 329,
        "value": "incK"
      },
      {
        "id": 249,
        "value": "takeRight"
      },
      {
        "id": 441,
        "value": "incK"
      },
      {
        "id": 521,
        "value": "advancePastMid"
      },
      {
        "id": 473,
        "value": "compareMerge"
      },
      {
        "id": 369,
        "value": "incK"
      },
      {
        "id": 105,
        "value": "incK"
      },
      {
        "id": 377,
        "value": "compareMerge"
      },
      {
        "id": 321,
        "value": "takeLeft"
      },
      {
        "id": 201,
        "value": "setMid"
      },
      {
        "id": 305,
        "value": "whileBoth"
      },
      {
        "id": 337,
        "value": "takeLeft"
      },
      {
        "id": 433,
        "value": "takeRight"
      },
      {
        "id": 353,
        "value": "compareMerge"
      },
      {
        "id": 65,
        "value": "advanceAfterMerge"
      },
      {
        "id": 89,
        "value": "copyRuns"
      },
      {
        "id": 345,
        "value": "incK"
      },
      {
        "id": 281,
        "value": "extendLeft"
      },
      {
        "id": 393,
        "value": "extendLeft"
      },
      {
        "id": 297,
        "value": "initMergePointers"
      },
      {
        "id": 209,
        "value": "advancePastMid"
      },
      {
        "id": 9,
        "value": "setRight"
      },
      {
        "id": 137,
        "value": "extendRight"
      },
      {
        "id": 225,
        "value": "incK"
      },
      {
        "id": 177,
        "value": "incK"
      },
      {
        "id": 169,
        "value": "takeRight"
      },
      {
        "id": 25,
        "value": "takeRight"
      },
      {
        "id": 385,
        "value": "checkUntil"
      },
      {
        "id": 257,
        "value": "takeRight"
      },
      {
        "id": 185,
        "value": "setMergedTrue"
      },
      {
        "id": 193,
        "value": "checkUntil"
      },
      {
        "id": 289,
        "value": "extendRight"
      },
      {
        "id": 17,
        "value": "callMerge"
      },
      {
        "id": 465,
        "value": "takeRight"
      },
      {
        "id": 73,
        "value": "extendLeft"
      },
      {
        "id": 513,
        "value": "setMid"
      },
      {
        "id": 457,
        "value": "compareMerge"
      },
      {
        "id": 49,
        "value": "drainRight"
      },
      {
        "id": 57,
        "value": "setMergedTrue"
      },
      {
        "id": 481,
        "value": "incK"
      },
      {
        "id": 241,
        "value": "incK"
      },
      {
        "id": 449,
        "value": "takeLeft"
      },
      {
        "id": 401,
        "value": "advancePastMid"
      },
      {
        "id": 217,
        "value": "checkHasRight"
      },
      {
        "id": 273,
        "value": "advanceAfterMerge"
      },
      {
        "id": 145,
        "value": "setRight"
      },
      {
        "id": 265,
        "value": "setMergedTrue"
      },
      {
        "id": 41,
        "value": "takeLeft"
      },
      {
        "id": 425,
        "value": "initMergePointers"
      },
      {
        "id": 33,
        "value": "incK"
      },
      {
        "id": 121,
        "value": "compareMerge"
      },
      {
        "id": 313,
        "value": "compareMerge"
      },
      {
        "id": 505,
        "value": "drainLeft"
      },
      {
        "id": 129,
        "value": "setMergedTrue"
      }
    ],
    "left": [
      {
        "id": 226,
        "value": "0"
      },
      {
        "id": 330,
        "value": "7"
      },
      {
        "id": 402,
        "value": "0"
      },
      {
        "id": 162,
        "value": "12"
      },
      {
        "id": 482,
        "value": "0"
      },
      {
        "id": 314,
        "value": "7"
      },
      {
        "id": 98,
        "value": "4"
      },
      {
        "id": 450,
        "value": "0"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 378,
        "value": "7"
      },
      {
        "id": 346,
        "value": "7"
      },
      {
        "id": 354,
        "value": "7"
      },
      {
        "id": 178,
        "value": "12"
      },
      {
        "id": 202,
        "value": "0"
      },
      {
        "id": 250,
        "value": "0"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 290,
        "value": "7"
      },
      {
        "id": 138,
        "value": "12"
      },
      {
        "id": 106,
        "value": "7"
      },
      {
        "id": 386,
        "value": "\u2014"
      },
      {
        "id": 426,
        "value": "0"
      },
      {
        "id": 146,
        "value": "12"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 90,
        "value": "4"
      },
      {
        "id": 306,
        "value": "7"
      },
      {
        "id": 298,
        "value": "7"
      },
      {
        "id": 474,
        "value": "0"
      },
      {
        "id": 442,
        "value": "0"
      },
      {
        "id": 282,
        "value": "7"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 234,
        "value": "0"
      },
      {
        "id": 410,
        "value": "0"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 274,
        "value": "\u2014"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 514,
        "value": "0"
      },
      {
        "id": 130,
        "value": "7"
      },
      {
        "id": 362,
        "value": "7"
      },
      {
        "id": 50,
        "value": "0"
      },
      {
        "id": 186,
        "value": "12"
      },
      {
        "id": 242,
        "value": "0"
      },
      {
        "id": 122,
        "value": "7"
      },
      {
        "id": 74,
        "value": "4"
      },
      {
        "id": 506,
        "value": "0"
      },
      {
        "id": 370,
        "value": "7"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 394,
        "value": "0"
      },
      {
        "id": 114,
        "value": "7"
      },
      {
        "id": 418,
        "value": "0"
      },
      {
        "id": 266,
        "value": "0"
      },
      {
        "id": 258,
        "value": "0"
      },
      {
        "id": 522,
        "value": "0"
      },
      {
        "id": 154,
        "value": "12"
      },
      {
        "id": 82,
        "value": "4"
      },
      {
        "id": 218,
        "value": "0"
      },
      {
        "id": 210,
        "value": "0"
      },
      {
        "id": 498,
        "value": "0"
      },
      {
        "id": 490,
        "value": "0"
      },
      {
        "id": 170,
        "value": "12"
      },
      {
        "id": 466,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 338,
        "value": "7"
      },
      {
        "id": 434,
        "value": "0"
      },
      {
        "id": 322,
        "value": "7"
      },
      {
        "id": 66,
        "value": "\u2014"
      },
      {
        "id": 458,
        "value": "0"
      }
    ],
    "mid": [
      {
        "id": 323,
        "value": "11"
      },
      {
        "id": 211,
        "value": "3"
      },
      {
        "id": 259,
        "value": "3"
      },
      {
        "id": 355,
        "value": "11"
      },
      {
        "id": 507,
        "value": "6"
      },
      {
        "id": 283,
        "value": "\u2014"
      },
      {
        "id": 483,
        "value": "6"
      },
      {
        "id": 235,
        "value": "3"
      },
      {
        "id": 171,
        "value": "12"
      },
      {
        "id": 83,
        "value": "5"
      },
      {
        "id": 219,
        "value": "3"
      },
      {
        "id": 387,
        "value": "\u2014"
      },
      {
        "id": 51,
        "value": "0"
      },
      {
        "id": 435,
        "value": "6"
      },
      {
        "id": 331,
        "value": "11"
      },
      {
        "id": 67,
        "value": "\u2014"
      },
      {
        "id": 459,
        "value": "6"
      },
      {
        "id": 427,
        "value": "6"
      },
      {
        "id": 299,
        "value": "11"
      },
      {
        "id": 19,
        "value": "0"
      },
      {
        "id": 515,
        "value": "13"
      },
      {
        "id": 99,
        "value": "5"
      },
      {
        "id": 275,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "0"
      },
      {
        "id": 451,
        "value": "6"
      },
      {
        "id": 3,
        "value": "0"
      },
      {
        "id": 115,
        "value": "9"
      },
      {
        "id": 163,
        "value": "12"
      },
      {
        "id": 411,
        "value": "6"
      },
      {
        "id": 443,
        "value": "6"
      },
      {
        "id": 139,
        "value": "12"
      },
      {
        "id": 91,
        "value": "5"
      },
      {
        "id": 371,
        "value": "11"
      },
      {
        "id": 35,
        "value": "0"
      },
      {
        "id": 155,
        "value": "12"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 475,
        "value": "6"
      },
      {
        "id": 43,
        "value": "0"
      },
      {
        "id": 363,
        "value": "11"
      },
      {
        "id": 187,
        "value": "12"
      },
      {
        "id": 315,
        "value": "11"
      },
      {
        "id": 267,
        "value": "3"
      },
      {
        "id": 499,
        "value": "6"
      },
      {
        "id": 131,
        "value": "9"
      },
      {
        "id": 179,
        "value": "12"
      },
      {
        "id": 347,
        "value": "11"
      },
      {
        "id": 307,
        "value": "11"
      },
      {
        "id": 147,
        "value": "12"
      },
      {
        "id": 395,
        "value": "\u2014"
      },
      {
        "id": 227,
        "value": "3"
      },
      {
        "id": 59,
        "value": "0"
      },
      {
        "id": 75,
        "value": "\u2014"
      },
      {
        "id": 419,
        "value": "6"
      },
      {
        "id": 11,
        "value": "0"
      },
      {
        "id": 339,
        "value": "11"
      },
      {
        "id": 379,
        "value": "11"
      },
      {
        "id": 491,
        "value": "6"
      },
      {
        "id": 203,
        "value": "3"
      },
      {
        "id": 403,
        "value": "6"
      },
      {
        "id": 523,
        "value": "13"
      },
      {
        "id": 467,
        "value": "6"
      },
      {
        "id": 291,
        "value": "11"
      },
      {
        "id": 123,
        "value": "9"
      },
      {
        "id": 251,
        "value": "3"
      },
      {
        "id": 107,
        "value": "9"
      },
      {
        "id": 243,
        "value": "3"
      }
    ],
    "right": [
      {
        "id": 348,
        "value": "13"
      },
      {
        "id": 308,
        "value": "13"
      },
      {
        "id": 228,
        "value": "6"
      },
      {
        "id": 172,
        "value": "13"
      },
      {
        "id": 148,
        "value": "13"
      },
      {
        "id": 116,
        "value": "11"
      },
      {
        "id": 44,
        "value": "3"
      },
      {
        "id": 404,
        "value": "\u2014"
      },
      {
        "id": 484,
        "value": "13"
      },
      {
        "id": 356,
        "value": "13"
      },
      {
        "id": 500,
        "value": "13"
      },
      {
        "id": 524,
        "value": "\u2014"
      },
      {
        "id": 396,
        "value": "\u2014"
      },
      {
        "id": 412,
        "value": "13"
      },
      {
        "id": 508,
        "value": "13"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 364,
        "value": "13"
      },
      {
        "id": 20,
        "value": "3"
      },
      {
        "id": 180,
        "value": "13"
      },
      {
        "id": 276,
        "value": "\u2014"
      },
      {
        "id": 268,
        "value": "6"
      },
      {
        "id": 324,
        "value": "13"
      },
      {
        "id": 12,
        "value": "3"
      },
      {
        "id": 188,
        "value": "13"
      },
      {
        "id": 68,
        "value": "\u2014"
      },
      {
        "id": 468,
        "value": "13"
      },
      {
        "id": 420,
        "value": "13"
      },
      {
        "id": 372,
        "value": "13"
      },
      {
        "id": 292,
        "value": "12"
      },
      {
        "id": 260,
        "value": "6"
      },
      {
        "id": 60,
        "value": "3"
      },
      {
        "id": 316,
        "value": "13"
      },
      {
        "id": 284,
        "value": "\u2014"
      },
      {
        "id": 220,
        "value": "\u2014"
      },
      {
        "id": 340,
        "value": "13"
      },
      {
        "id": 92,
        "value": "6"
      },
      {
        "id": 140,
        "value": "13"
      },
      {
        "id": 76,
        "value": "\u2014"
      },
      {
        "id": 236,
        "value": "6"
      },
      {
        "id": 244,
        "value": "6"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 332,
        "value": "13"
      },
      {
        "id": 444,
        "value": "13"
      },
      {
        "id": 28,
        "value": "3"
      },
      {
        "id": 204,
        "value": "\u2014"
      },
      {
        "id": 36,
        "value": "3"
      },
      {
        "id": 252,
        "value": "6"
      },
      {
        "id": 476,
        "value": "13"
      },
      {
        "id": 388,
        "value": "\u2014"
      },
      {
        "id": 380,
        "value": "13"
      },
      {
        "id": 436,
        "value": "13"
      },
      {
        "id": 452,
        "value": "13"
      },
      {
        "id": 52,
        "value": "3"
      },
      {
        "id": 492,
        "value": "13"
      },
      {
        "id": 164,
        "value": "13"
      },
      {
        "id": 428,
        "value": "13"
      },
      {
        "id": 100,
        "value": "6"
      },
      {
        "id": 124,
        "value": "11"
      },
      {
        "id": 212,
        "value": "\u2014"
      },
      {
        "id": 108,
        "value": "11"
      },
      {
        "id": 300,
        "value": "13"
      },
      {
        "id": 460,
        "value": "13"
      },
      {
        "id": 156,
        "value": "13"
      },
      {
        "id": 132,
        "value": "11"
      },
      {
        "id": 196,
        "value": "\u2014"
      },
      {
        "id": 516,
        "value": "\u2014"
      }
    ],
    "i": [
      {
        "id": 189,
        "value": "\u2014"
      },
      {
        "id": 269,
        "value": "\u2014"
      },
      {
        "id": 77,
        "value": "4"
      },
      {
        "id": 421,
        "value": "\u2014"
      },
      {
        "id": 245,
        "value": "2"
      },
      {
        "id": 309,
        "value": "0"
      },
      {
        "id": 341,
        "value": "2"
      },
      {
        "id": 21,
        "value": "\u2014"
      },
      {
        "id": 261,
        "value": "2"
      },
      {
        "id": 525,
        "value": "14"
      },
      {
        "id": 405,
        "value": "7"
      },
      {
        "id": 357,
        "value": "3"
      },
      {
        "id": 509,
        "value": "6"
      },
      {
        "id": 13,
        "value": "3"
      },
      {
        "id": 285,
        "value": "7"
      },
      {
        "id": 325,
        "value": "0"
      },
      {
        "id": 253,
        "value": "2"
      },
      {
        "id": 461,
        "value": "4"
      },
      {
        "id": 333,
        "value": "1"
      },
      {
        "id": 157,
        "value": "\u2014"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 53,
        "value": "\u2014"
      },
      {
        "id": 229,
        "value": "1"
      },
      {
        "id": 317,
        "value": "0"
      },
      {
        "id": 85,
        "value": "5"
      },
      {
        "id": 93,
        "value": "\u2014"
      },
      {
        "id": 237,
        "value": "2"
      },
      {
        "id": 149,
        "value": "13"
      },
      {
        "id": 61,
        "value": "\u2014"
      },
      {
        "id": 45,
        "value": "0"
      },
      {
        "id": 437,
        "value": "0"
      },
      {
        "id": 429,
        "value": "0"
      },
      {
        "id": 293,
        "value": "12"
      },
      {
        "id": 197,
        "value": "\u2014"
      },
      {
        "id": 397,
        "value": "0"
      },
      {
        "id": 301,
        "value": "0"
      },
      {
        "id": 181,
        "value": "0"
      },
      {
        "id": 221,
        "value": "4"
      },
      {
        "id": 389,
        "value": "\u2014"
      },
      {
        "id": 165,
        "value": "\u2014"
      },
      {
        "id": 213,
        "value": "4"
      },
      {
        "id": 477,
        "value": "5"
      },
      {
        "id": 117,
        "value": "2"
      },
      {
        "id": 101,
        "value": "1"
      },
      {
        "id": 493,
        "value": "6"
      },
      {
        "id": 205,
        "value": "3"
      },
      {
        "id": 469,
        "value": "4"
      },
      {
        "id": 125,
        "value": "2"
      },
      {
        "id": 413,
        "value": "\u2014"
      },
      {
        "id": 29,
        "value": "0"
      },
      {
        "id": 69,
        "value": "4"
      },
      {
        "id": 109,
        "value": "1"
      },
      {
        "id": 517,
        "value": "13"
      },
      {
        "id": 277,
        "value": "7"
      },
      {
        "id": 349,
        "value": "3"
      },
      {
        "id": 445,
        "value": "1"
      },
      {
        "id": 365,
        "value": "3"
      },
      {
        "id": 381,
        "value": "4"
      },
      {
        "id": 5,
        "value": "1"
      },
      {
        "id": 373,
        "value": "4"
      },
      {
        "id": 453,
        "value": "3"
      },
      {
        "id": 501,
        "value": "6"
      },
      {
        "id": 485,
        "value": "6"
      },
      {
        "id": 173,
        "value": "0"
      },
      {
        "id": 141,
        "value": "13"
      },
      {
        "id": 133,
        "value": "\u2014"
      }
    ],
    "j": [
      {
        "id": 190,
        "value": "\u2014"
      },
      {
        "id": 510,
        "value": "\u2014"
      },
      {
        "id": 350,
        "value": "1"
      },
      {
        "id": 110,
        "value": "0"
      },
      {
        "id": 54,
        "value": "1"
      },
      {
        "id": 406,
        "value": "\u2014"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 102,
        "value": "0"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 118,
        "value": "0"
      },
      {
        "id": 94,
        "value": "\u2014"
      },
      {
        "id": 470,
        "value": "3"
      },
      {
        "id": 478,
        "value": "4"
      },
      {
        "id": 446,
        "value": "2"
      },
      {
        "id": 454,
        "value": "3"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 230,
        "value": "0"
      },
      {
        "id": 382,
        "value": "1"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 254,
        "value": "1"
      },
      {
        "id": 246,
        "value": "1"
      },
      {
        "id": 374,
        "value": "1"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 334,
        "value": "0"
      },
      {
        "id": 430,
        "value": "0"
      },
      {
        "id": 398,
        "value": "\u2014"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 22,
        "value": "\u2014"
      },
      {
        "id": 502,
        "value": "6"
      },
      {
        "id": 422,
        "value": "\u2014"
      },
      {
        "id": 150,
        "value": "\u2014"
      },
      {
        "id": 366,
        "value": "1"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 142,
        "value": "\u2014"
      },
      {
        "id": 126,
        "value": "1"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 318,
        "value": "0"
      },
      {
        "id": 390,
        "value": "\u2014"
      },
      {
        "id": 486,
        "value": "5"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 518,
        "value": "\u2014"
      },
      {
        "id": 358,
        "value": "1"
      },
      {
        "id": 238,
        "value": "0"
      },
      {
        "id": 414,
        "value": "\u2014"
      },
      {
        "id": 302,
        "value": "0"
      },
      {
        "id": 462,
        "value": "3"
      },
      {
        "id": 342,
        "value": "1"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 78,
        "value": "\u2014"
      },
      {
        "id": 526,
        "value": "\u2014"
      },
      {
        "id": 262,
        "value": "2"
      },
      {
        "id": 310,
        "value": "0"
      },
      {
        "id": 198,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "\u2014"
      },
      {
        "id": 174,
        "value": "0"
      },
      {
        "id": 86,
        "value": "\u2014"
      },
      {
        "id": 270,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "\u2014"
      },
      {
        "id": 326,
        "value": "0"
      },
      {
        "id": 438,
        "value": "0"
      },
      {
        "id": 134,
        "value": "\u2014"
      },
      {
        "id": 214,
        "value": "\u2014"
      },
      {
        "id": 286,
        "value": "\u2014"
      },
      {
        "id": 494,
        "value": "5"
      },
      {
        "id": 206,
        "value": "\u2014"
      },
      {
        "id": 62,
        "value": "\u2014"
      }
    ],
    "k": [
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 423,
        "value": "\u2014"
      },
      {
        "id": 223,
        "value": "\u2014"
      },
      {
        "id": 335,
        "value": "8"
      },
      {
        "id": 447,
        "value": "3"
      },
      {
        "id": 199,
        "value": "\u2014"
      },
      {
        "id": 295,
        "value": "\u2014"
      },
      {
        "id": 407,
        "value": "\u2014"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 327,
        "value": "7"
      },
      {
        "id": 487,
        "value": "11"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 383,
        "value": "12"
      },
      {
        "id": 455,
        "value": "6"
      },
      {
        "id": 375,
        "value": "12"
      },
      {
        "id": 351,
        "value": "11"
      },
      {
        "id": 343,
        "value": "10"
      },
      {
        "id": 439,
        "value": "0"
      },
      {
        "id": 39,
        "value": "1"
      },
      {
        "id": 479,
        "value": "9"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 271,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "\u2014"
      },
      {
        "id": 71,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "\u2014"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 367,
        "value": "11"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 471,
        "value": "7"
      },
      {
        "id": 231,
        "value": "1"
      },
      {
        "id": 511,
        "value": "13"
      },
      {
        "id": 303,
        "value": "7"
      },
      {
        "id": 119,
        "value": "9"
      },
      {
        "id": 519,
        "value": "\u2014"
      },
      {
        "id": 279,
        "value": "\u2014"
      },
      {
        "id": 527,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "\u2014"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "12"
      },
      {
        "id": 183,
        "value": "13"
      },
      {
        "id": 415,
        "value": "\u2014"
      },
      {
        "id": 463,
        "value": "7"
      },
      {
        "id": 503,
        "value": "12"
      },
      {
        "id": 311,
        "value": "7"
      },
      {
        "id": 55,
        "value": "2"
      },
      {
        "id": 247,
        "value": "3"
      },
      {
        "id": 15,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "10"
      },
      {
        "id": 431,
        "value": "0"
      },
      {
        "id": 111,
        "value": "8"
      },
      {
        "id": 47,
        "value": "1"
      },
      {
        "id": 391,
        "value": "\u2014"
      },
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 239,
        "value": "2"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 399,
        "value": "\u2014"
      },
      {
        "id": 495,
        "value": "11"
      },
      {
        "id": 103,
        "value": "5"
      },
      {
        "id": 191,
        "value": "\u2014"
      },
      {
        "id": 263,
        "value": "4"
      },
      {
        "id": 319,
        "value": "7"
      },
      {
        "id": 359,
        "value": "11"
      },
      {
        "id": 135,
        "value": "\u2014"
      },
      {
        "id": 255,
        "value": "3"
      },
      {
        "id": 31,
        "value": "0"
      }
    ],
    "merged": [
      {
        "id": 480,
        "value": "false"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 72,
        "value": "true"
      },
      {
        "id": 496,
        "value": "false"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 416,
        "value": "false"
      },
      {
        "id": 528,
        "value": "false"
      },
      {
        "id": 48,
        "value": "false"
      },
      {
        "id": 24,
        "value": "false"
      },
      {
        "id": 512,
        "value": "false"
      },
      {
        "id": 344,
        "value": "true"
      },
      {
        "id": 240,
        "value": "false"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 232,
        "value": "false"
      },
      {
        "id": 288,
        "value": "true"
      },
      {
        "id": 320,
        "value": "true"
      },
      {
        "id": 488,
        "value": "false"
      },
      {
        "id": 32,
        "value": "false"
      },
      {
        "id": 424,
        "value": "false"
      },
      {
        "id": 256,
        "value": "false"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 368,
        "value": "true"
      },
      {
        "id": 312,
        "value": "true"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 336,
        "value": "true"
      },
      {
        "id": 472,
        "value": "false"
      },
      {
        "id": 224,
        "value": "false"
      },
      {
        "id": 464,
        "value": "false"
      },
      {
        "id": 296,
        "value": "true"
      },
      {
        "id": 304,
        "value": "true"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 208,
        "value": "false"
      },
      {
        "id": 280,
        "value": "true"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 168,
        "value": "true"
      },
      {
        "id": 456,
        "value": "false"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 56,
        "value": "false"
      },
      {
        "id": 440,
        "value": "false"
      },
      {
        "id": 216,
        "value": "false"
      },
      {
        "id": 400,
        "value": "false"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 80,
        "value": "true"
      },
      {
        "id": 392,
        "value": "true"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 504,
        "value": "false"
      },
      {
        "id": 328,
        "value": "true"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 272,
        "value": "true"
      },
      {
        "id": 248,
        "value": "false"
      },
      {
        "id": 448,
        "value": "false"
      },
      {
        "id": 376,
        "value": "true"
      },
      {
        "id": 384,
        "value": "true"
      },
      {
        "id": 520,
        "value": "false"
      },
      {
        "id": 408,
        "value": "false"
      },
      {
        "id": 432,
        "value": "false"
      },
      {
        "id": 112,
        "value": "true"
      },
      {
        "id": 360,
        "value": "true"
      },
      {
        "id": 40,
        "value": "false"
      },
      {
        "id": 264,
        "value": "false"
      },
      {
        "id": 352,
        "value": "true"
      },
      {
        "id": 192,
        "value": "true"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 2,
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 3,
      "stepId": "whileScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 4,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 5,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 6,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 7,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 8,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 9,
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 10,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 3,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 11,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 12,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 13,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 14,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 15,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 16,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 17,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        239,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 18,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        239,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 19,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 20,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": null,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 21,
      "stepId": "drainRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": null,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 22,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 23,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 24,
      "stepId": "setLeft",
      "n": 14,
      "left": 4,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 25,
      "stepId": "extendLeft",
      "n": 14,
      "left": 4,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 26,
      "stepId": "setMid",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 27,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 28,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 29,
      "stepId": "extendRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 30,
      "stepId": "setRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 31,
      "stepId": "callMerge",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 32,
      "stepId": "copyRuns",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 33,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 34,
      "stepId": "whileBoth",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 35,
      "stepId": "compareMerge",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 36,
      "stepId": "takeLeft",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 37,
      "stepId": "incK",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 38,
      "stepId": "compareMerge",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 39,
      "stepId": "takeRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 40,
      "stepId": "incK",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": null,
      "k": 6,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 41,
      "stepId": "drainLeft",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": null,
      "k": 6,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 42,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 43,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 44,
      "stepId": "setLeft",
      "n": 14,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 45,
      "stepId": "extendLeft",
      "n": 14,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 46,
      "stepId": "setMid",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 47,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 48,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 49,
      "stepId": "extendRight",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 50,
      "stepId": "setRight",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 51,
      "stepId": "callMerge",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 52,
      "stepId": "copyRuns",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 53,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 54,
      "stepId": "whileBoth",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 55,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 56,
      "stepId": "takeLeft",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 57,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 1,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 58,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 1,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 59,
      "stepId": "takeLeft",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 1,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 60,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 2,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 61,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 2,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 62,
      "stepId": "takeRight",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 2,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 63,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 2,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 64,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 2,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 65,
      "stepId": "takeLeft",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": 2,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 66,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": null,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 67,
      "stepId": "drainRight",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": null,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 68,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 7,
      "mid": 9,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 69,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 70,
      "stepId": "setLeft",
      "n": 14,
      "left": 12,
      "mid": null,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 71,
      "stepId": "extendLeft",
      "n": 14,
      "left": 12,
      "mid": null,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 72,
      "stepId": "setMid",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 73,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 74,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 75,
      "stepId": "extendRight",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 76,
      "stepId": "setRight",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 77,
      "stepId": "callMerge",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 78,
      "stepId": "copyRuns",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 79,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 12,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 80,
      "stepId": "whileBoth",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 12,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 81,
      "stepId": "compareMerge",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 12,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        965,
        278
      ]
    },
    {
      "step": 82,
      "stepId": "takeRight",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 12,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 83,
      "stepId": "incK",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        278
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 84,
      "stepId": "drainLeft",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        278
      ]
    },
    {
      "step": 85,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 12,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 86,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 87,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 88,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 89,
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 90,
      "stepId": "whileScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 91,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 92,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 93,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 94,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 95,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 96,
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 4,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 97,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 98,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 99,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 100,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 101,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 102,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 103,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 104,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 105,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 106,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 107,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 108,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 109,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        239,
        267,
        376,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 110,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        239,
        267,
        376,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 111,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        239,
        267,
        376,
        983,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 112,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 113,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 114,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        376,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 115,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 116,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": null,
      "k": 5,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 117,
      "stepId": "drainLeft",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": null,
      "k": 5,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        467,
        542,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 118,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 119,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 120,
      "stepId": "setLeft",
      "n": 14,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 121,
      "stepId": "extendLeft",
      "n": 14,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 122,
      "stepId": "setMid",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 123,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 124,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 125,
      "stepId": "extendRight",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 12,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 126,
      "stepId": "setRight",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 127,
      "stepId": "callMerge",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 128,
      "stepId": "copyRuns",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 129,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 130,
      "stepId": "whileBoth",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 131,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 132,
      "stepId": "takeLeft",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 133,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 134,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 135,
      "stepId": "takeLeft",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 136,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 137,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        500,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 138,
      "stepId": "takeRight",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 139,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 140,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        663,
        975,
        278,
        965
      ]
    },
    {
      "step": 141,
      "stepId": "takeLeft",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 142,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 3,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 143,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 3,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        975,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 144,
      "stepId": "takeLeft",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 3,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 145,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 4,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 146,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 4,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        278,
        965
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 147,
      "stepId": "takeRight",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 4,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        965
      ]
    },
    {
      "step": 148,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 4,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        965
      ]
    },
    {
      "step": 149,
      "stepId": "drainLeft",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": 4,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        965
      ]
    },
    {
      "step": 150,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 7,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 151,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 152,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 153,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 154,
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 155,
      "stepId": "whileScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 156,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 157,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 158,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 159,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 160,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 161,
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 162,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 163,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 164,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 165,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 166,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 167,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 168,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        74,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 169,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        74,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 170,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        74,
        267,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 171,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        74,
        183,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 172,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        74,
        183,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 173,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        74,
        183,
        376,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 174,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        74,
        183,
        239,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 175,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        74,
        183,
        239,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 176,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        74,
        183,
        239,
        467,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 177,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 178,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 179,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        542,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 180,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 181,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 182,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        829,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 183,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 184,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 185,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        983,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 186,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 187,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 188,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        74,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 189,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        183,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 190,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 191,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        183,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 192,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 193,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 4,
      "k": 9,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        278,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 194,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 4,
      "k": 9,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        278,
        500,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 195,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 4,
      "k": 9,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 196,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 5,
      "k": 10,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 197,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 5,
      "k": 10,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        500,
        663,
        965,
        975
      ]
    },
    {
      "step": 198,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 5,
      "k": 10,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        663,
        965,
        975
      ]
    },
    {
      "step": 199,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": 5,
      "k": 11,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        663,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 200,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": 5,
      "k": 11,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        663,
        965,
        975
      ]
    },
    {
      "step": 201,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": 5,
      "k": 11,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        965,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 202,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": 6,
      "k": 12,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        965,
        975
      ]
    },
    {
      "step": 203,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": 6,
      "k": 12,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        965,
        975
      ]
    },
    {
      "step": 204,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": 6,
      "k": 12,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 205,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": null,
      "k": 13,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        975
      ]
    },
    {
      "step": 206,
      "stepId": "drainLeft",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 6,
      "j": null,
      "k": 13,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        975
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 207,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 208,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 209,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 210,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 211,
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 212,
      "stepId": "whileScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 213,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 214,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 215,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 216,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 217,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 218,
      "stepId": "breakOddRun",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 219,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    }
  ]
};

  let filled = {}; // stepNumber -> { stepId?, i?, result?, ... }
  /** Remaining chips per field (multiset); starts as a copy of INSTANCE.pieces. */
  let availablePieces = {};
  let activeSection = "stepId";
  let gateResolve = null;
  let gateReject = null;
  /** Step number the executor is currently blocked on (if any). */
  let pendingGateStep = null;
  let panelOpen = false;
  let dragPayload = null;
  /** Step numbers of blank rows confirmed when the run reaches them. */
  let validatedSteps = new Set();
  let taskComplete = false;
  let nextPieceId = 1;
  function puzzleStorageKey() {
    try {
      let path = window.location.pathname.replace(/\\/g, "/");
      const coursePath = path.match(/(?:^|\/)(search|sort|tree)\/.+$/i);
      if (coursePath) path = coursePath[0].replace(/^\//, "");
      return "tracelab-puzzle-state:" + path;
    } catch (_) {
      return null;
    }
  }

  function savePuzzleState() {
    try {
      const key = puzzleStorageKey();
      if (!key) return;
      localStorage.setItem(key, JSON.stringify({ filled: filled, taskComplete: taskComplete }));
    } catch (_) { /* ignore */ }
  }

  function restorePuzzleState() {
    try {
      const key = puzzleStorageKey();
      if (!key) return false;
      const raw = localStorage.getItem(key);
      if (!raw) return false;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved.filled !== "object") return false;
      filled = saved.filled;
      taskComplete = !!saved.taskComplete;
      // Rebuild availablePieces: start from full set and remove placed pieces
      resetAvailablePieces();
      Object.keys(filled).forEach(function(step) {
        const rowFill = filled[step];
        Object.keys(rowFill).forEach(function(field) {
          const val = rowFill[field];
          if (val != null && val !== "") takePiece(field, val);
        });
      });
      return true;
    } catch (_) { return false; }
  }


  function t(key) {
    return window.I18n ? window.I18n.t(key) : key;
  }

  function stepLabel(stepId) {
    return window.I18n ? window.I18n.stepLabel(stepId) : stepId;
  }

  function formatResult(result) {
    if (result == null || result === "") return "—";
    if (result === "NOT_FOUND") {
      return window.I18n ? window.I18n.t("notFoundValue") : "NOT_FOUND";
    }
    return String(result);
  }

  function formatArray(arr) {
    return "[" + arr.join(", ") + "]";
  }

  function displayFieldValue(field, value) {
    if (value == null || value === "") return "—";
    if (field === "stepId") return stepLabel(value);
    if (field === "result") return formatResult(value);
    return String(value);
  }

  function varFields() {
    return INSTANCE.varFields || [];
  }

  function blankFieldList() {
    if (INSTANCE.blankFields && INSTANCE.blankFields.length) {
      return INSTANCE.blankFields.slice();
    }
    return ["stepId"].concat(varFields());
  }

  function sectionLabel(field) {
    if (field === "stepId") return t("puzzleSectionStepId");
    const key =
      "puzzleSection" + field.charAt(0).toUpperCase() + field.slice(1);
    const labeled = t(key);
    if (labeled && labeled !== key) return labeled;
    const colKey = "col" + field.charAt(0).toUpperCase() + field.slice(1);
    const col = t(colKey);
    if (col && col !== colKey) return col;
    return field;
  }

  function executorApi() {
    const name = INSTANCE.executorGlobal;
    return name && window[name] ? window[name] : null;
  }

  function blankRows() {
    return INSTANCE.rows.filter((row) => row.missing);
  }

  function totalBlankRows() {
    return blankRows().length;
  }

  function missingFields(row) {
    return row && row.missing ? Object.keys(row.missing) : [];
  }

  function clonePieces(src) {
    const out = {};
    Object.keys(src || {}).forEach((field) => {
      out[field] = (src[field] || []).map((piece) => ({
        id: piece.id != null ? piece.id : nextPieceId++,
        value: String(piece.value),
      }));
    });
    return out;
  }

  function resetAvailablePieces() {
    nextPieceId = 1;
    availablePieces = clonePieces(INSTANCE.pieces);
  }

  function takePiece(field, value, preferredId) {
    const list = availablePieces[field] || [];
    let idx = -1;
    if (preferredId != null) {
      idx = list.findIndex(
        (p) => p.id === preferredId && String(p.value) === String(value)
      );
    }
    if (idx < 0) {
      idx = list.findIndex((p) => String(p.value) === String(value));
    }
    if (idx < 0) return null;
    const [piece] = list.splice(idx, 1);
    return piece;
  }

  function returnPiece(field, value) {
    if (value == null || value === "") return;
    if (!availablePieces[field]) availablePieces[field] = [];
    availablePieces[field].push({
      id: nextPieceId++,
      value: String(value),
    });
  }

  function getFill(stepNumber, field) {
    const rowFill = filled[stepNumber];
    if (!rowFill) return null;
    return rowFill[field] != null ? rowFill[field] : null;
  }

  function expectedAnswer(stepNumber, field) {
    const ans =
      INSTANCE.answers[String(stepNumber)] || INSTANCE.answers[stepNumber];
    if (!ans) return null;
    return ans[field] != null ? String(ans[field]) : null;
  }

  function isBlankRowCorrect(stepNumber) {
    const row = INSTANCE.rows.find((r) => r.step === stepNumber);
    if (!row || !row.missing) return false;
    for (const field of missingFields(row)) {
      const got = getFill(stepNumber, field);
      const want = expectedAnswer(stepNumber, field);
      if (got == null || String(got) !== String(want)) return false;
    }
    return true;
  }

  function isSolved() {
    return blankRows().every((row) => isBlankRowCorrect(row.step));
  }

  function isRowSolved(stepNumber) {
    return isBlankRowCorrect(stepNumber);
  }

  function isTaskComplete() {
    return taskComplete;
  }

  function updateStats() {
    const countEl = document.getElementById("puzzle-correct-count");
    const totalEl = document.getElementById("puzzle-total-blanks");
    if (countEl) countEl.textContent = String(validatedSteps.size);
    if (totalEl) totalEl.textContent = String(totalBlankRows());
  }

  function setControlsLocked(locked) {
    const controls = document.querySelector(".controls");
    if (controls) {
      controls.classList.toggle("is-locked", locked);
      controls.setAttribute("aria-disabled", locked ? "true" : "false");
    }
    ["btn-run", "btn-step", "btn-pause", "speed"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (locked) {
        el.disabled = true;
        el.setAttribute("data-puzzle-locked", "true");
      } else if (el.getAttribute("data-puzzle-locked") === "true") {
        el.removeAttribute("data-puzzle-locked");
        if (id === "speed") el.disabled = false;
      }
    });
  }

  function setCompleteBadge(visible) {
    const badge = document.getElementById("puzzle-complete-badge");
    if (!badge) return;
    badge.hidden = !visible;
    if (visible) badge.textContent = t("puzzleComplete");
  }

  function setTaskComplete(complete) {
    taskComplete = !!complete;
    setCompleteBadge(taskComplete);
    setControlsLocked(taskComplete);
    const tracePanel = document.querySelector(".trace-panel");
    if (tracePanel) {
      tracePanel.classList.toggle("is-puzzle-complete", taskComplete);
    }
    if (taskComplete) {
      savePuzzleState();
      closePanel();
      setStatus(t("puzzleComplete"), "ok");
      let completionPath = window.location.pathname.replace(/\\/g, "/");
      const coursePath = completionPath.match(/(?:^|\/)(search|sort|tree)\/.+$/i);
      if (coursePath) completionPath = coursePath[0].replace(/^\//, "");
      const completionMessage = {
        type: "tracelab:puzzle-complete",
        path: completionPath,
      };
      try {
        window.parent.postMessage(completionMessage, "*");
      } catch (_) {
        /* The puzzle also works as a standalone page. */
      }
      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage(completionMessage, "*");
        }
      } catch (_) {
        /* Ignore a blocked opener. */
      }
      try {
        const storageKey = "tracelab-standalone-completions-v1";
        const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (stored.indexOf(completionPath) === -1) stored.push(completionPath);
        localStorage.setItem(storageKey, JSON.stringify(stored));
      } catch (_) {
        /* Progress still reaches an embedding dashboard via postMessage. */
      }
    }
  }

  function releaseGateIfReady() {
    if (!gateResolve || pendingGateStep == null) return;
    if (!isRowSolved(pendingGateStep)) return;
    const resolve = gateResolve;
    gateResolve = null;
    gateReject = null;
    clearAwaitingFillMarks();
    pendingGateStep = null;
    resolve();
  }

  function clearAwaitingFillMarks() {
    const body = document.getElementById("trace-body");
    if (!body) return;
    body.querySelectorAll("tr.is-awaiting-fill").forEach((r) => {
      r.classList.remove("is-awaiting-fill");
    });
  }

  function revealGateRow(stepNumber) {
    if (stepNumber == null) return;
    const body = document.getElementById("trace-body");
    if (!body) return;
    clearAwaitingFillMarks();
    const tr = body.querySelector(`tr[data-puzzle-step="${stepNumber}"]`);
    if (!tr) return;
    tr.classList.add("is-awaiting-fill");
    // Prefer centering so the blank row is not clipped under the last executed step.
    tr.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" });
  }

  function awaitGate() {
    if (pendingGateStep != null && isRowSolved(pendingGateStep)) {
      clearAwaitingFillMarks();
      pendingGateStep = null;
      return Promise.resolve();
    }
    const stepToReveal = pendingGateStep;
    openPanel();
    setStatus(t("puzzleBlocked"), "warn");
    // Reveal now, then again after layout settles (panel open / prior smooth scrolls).
    revealGateRow(stepToReveal);
    requestAnimationFrame(() => {
      revealGateRow(stepToReveal);
      setTimeout(() => revealGateRow(stepToReveal), 120);
    });
    return new Promise((resolve, reject) => {
      gateResolve = () => {
        gateResolve = null;
        gateReject = null;
        clearAwaitingFillMarks();
        pendingGateStep = null;
        resolve();
      };
      gateReject = () => {
        gateResolve = null;
        gateReject = null;
        clearAwaitingFillMarks();
        pendingGateStep = null;
        reject(new Error("aborted"));
      };
    });
  }

  function abortGate() {
    if (gateReject) {
      gateReject();
      return;
    }
    if (gateResolve) {
      const r = gateResolve;
      gateResolve = null;
      pendingGateStep = null;
      r();
    }
  }

  function setStatus(message, kind) {
    const el = document.getElementById("puzzle-status");
    if (!el) return;
    el.textContent = message || "";
    el.classList.remove("is-ok", "is-warn", "is-err");
    if (kind) el.classList.add("is-" + kind);
  }

  function syncValidationForStep(stepNumber) {
    if (isBlankRowCorrect(stepNumber)) return;
    if (!validatedSteps.has(stepNumber)) return;
    validatedSteps.delete(stepNumber);
    const tr = document.querySelector(
      `#trace-body tr[data-puzzle-step="${stepNumber}"]`
    );
    if (tr) {
      tr.classList.remove("is-validated", "is-validating");
    }
    updateStats();
  }

  function updateDropCell(stepNumber, field) {
    const cell = document.querySelector(
      `#trace-body tr[data-puzzle-step="${stepNumber}"] td[data-drop-field="${field}"]`
    );
    if (!cell) return;

    const value = getFill(stepNumber, field);
    cell.classList.remove("is-filled", "is-correct", "is-wrong", "drag-over");
    cell.innerHTML = "";

    if (value == null || value === "") {
      const slot = document.createElement("span");
      slot.className = "drop-slot";
      slot.textContent = t("puzzleDropHere");
      cell.appendChild(slot);
      return;
    }

    cell.classList.add("is-filled");
    const chip = document.createElement("span");
    chip.className = "drop-chip";
    chip.draggable = !taskComplete;
    chip.textContent = displayFieldValue(field, value);
    chip.title = t("puzzleDragBackHint");
    chip.addEventListener("dragstart", (e) => {
      if (taskComplete) {
        e.preventDefault();
        return;
      }
      dragPayload = {
        source: "trace",
        field,
        value: String(value),
        stepNumber,
      };
      chip.classList.add("is-dragging");
      e.dataTransfer.setData(
        "application/x-trace-puzzle",
        JSON.stringify(dragPayload)
      );
      e.dataTransfer.effectAllowed = "move";
    });
    chip.addEventListener("dragend", () => {
      chip.classList.remove("is-dragging");
      dragPayload = null;
      clearDragOverMarks();
    });
    cell.appendChild(chip);

    const correct = String(value) === String(expectedAnswer(stepNumber, field));
    cell.classList.add(correct ? "is-correct" : "is-wrong");
  }

  function clearDragOverMarks() {
    document
      .querySelectorAll(".drop-target.drag-over, .puzzle-panel.drag-over-return")
      .forEach((el) => el.classList.remove("drag-over", "drag-over-return"));
  }

  function refreshFilledCells() {
    blankRows().forEach((row) => {
      missingFields(row).forEach((field) => updateDropCell(row.step, field));
    });

    const banner = document.getElementById("puzzle-banner");
    if (banner) {
      banner.hidden = isSolved();
    }

    const anyFilled = Object.keys(filled).some((step) => {
      const rowFill = filled[step];
      return (
        rowFill &&
        Object.keys(rowFill).some((k) => rowFill[k] != null && rowFill[k] !== "")
      );
    });

    if (isSolved()) {
      setStatus(t("puzzleSolved"), "ok");
    } else if (pendingGateStep != null && !isRowSolved(pendingGateStep)) {
      setStatus(t("puzzleBlocked"), "warn");
    } else if (anyFilled) {
      setStatus(t("puzzlePartial"), "warn");
    } else {
      setStatus("", null);
    }

    releaseGateIfReady();
  }

  function renderTraceTable() {
    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (!body) return;

    if (empty) empty.classList.add("hidden");
    body.innerHTML = "";

    const arrText = formatArray(INSTANCE.array);

    INSTANCE.rows.forEach((row) => {
      const tr = document.createElement("tr");
      tr.dataset.stepId = row.stepId;
      tr.dataset.puzzleStep = String(row.step);
      if (row.result != null) tr.dataset.result = String(row.result);
      if (row.missing) tr.classList.add("puzzle-missing");

      const cells = [
        { text: String(row.step), field: null },
        {
          text:
            row.missing && row.missing.stepId ? null : stepLabel(row.stepId),
          field: row.missing && row.missing.stepId ? "stepId" : null,
          stepId: row.stepId,
        },
        { text: arrText, field: null },
      ];

      varFields().forEach((field) => {
        const blank = !!(row.missing && row.missing[field]);
        let text;
        if (blank) {
          text = null;
        } else if (field === "result") {
          text = formatResult(row.result);
        } else if (row[field] == null) {
          text = "—";
        } else {
          text = String(row[field]);
        }
        cells.push({ text, field: blank ? field : null });
      });

      cells.forEach((spec) => {
        const td = document.createElement("td");
        if (spec.field) {
          td.dataset.dropField = spec.field;
          td.className = "drop-target";
          td.setAttribute("aria-label", t("puzzleDropHere"));
          bindDropTarget(td, row.step, spec.field);
        } else {
          td.textContent = spec.text;
        }
        tr.appendChild(td);
      });

      body.appendChild(tr);
    });

    refreshFilledCells();
  }

  function markActiveStep(stepNumber) {
    const body = document.getElementById("trace-body");
    if (!body) return;
    body.querySelectorAll("tr.latest").forEach((r) => r.classList.remove("latest"));
    const tr = body.querySelector(`tr[data-puzzle-step="${stepNumber}"]`);
    if (!tr) return;
    tr.classList.add("latest", "is-reached");

    const row = INSTANCE.rows.find((r) => r.step === stepNumber);
    if (row && row.missing && isBlankRowCorrect(stepNumber)) {
      if (!validatedSteps.has(stepNumber)) {
        validatedSteps.add(stepNumber);
        updateStats();
      }
      tr.classList.remove("is-wrong-row");
      tr.classList.add("is-validated");
      tr.classList.remove("is-validating");
      void tr.offsetWidth;
      tr.classList.add("is-validating");
    }

    tr.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function clearValidationMarks() {
    validatedSteps = new Set();
    const body = document.getElementById("trace-body");
    if (body) {
      body
        .querySelectorAll("tr.is-validated, tr.is-validating, tr.is-wrong-row")
        .forEach((r) => {
          r.classList.remove("is-validated", "is-validating", "is-wrong-row");
        });
    }
    updateStats();
  }

  function onRunFinished(success) {
    if (taskComplete) return;
    if (!success) return;
    if (validatedSteps.size < totalBlankRows()) return;
    if (!isSolved()) return;
    setTaskComplete(true);
    const exec = executorApi();
    if (exec && exec.setButtons) exec.setButtons();
  }

  function availableSections() {
    const sections = [];
    blankFieldList().forEach((field) => {
      if (INSTANCE.pieces[field] && INSTANCE.pieces[field].length) {
        sections.push(field);
      }
    });
    return sections;
  }

  function ensureSectionButtons() {
    const host = document.querySelector(".puzzle-sections");
    if (!host) return;
    const wanted = blankFieldList();
    const existing = new Set(
      Array.from(host.querySelectorAll(".puzzle-section-btn")).map(
        (btn) => btn.dataset.section
      )
    );
    wanted.forEach((field) => {
      if (existing.has(field)) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "puzzle-section-btn";
      btn.dataset.section = field;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", "false");
      btn.textContent = sectionLabel(field);
      btn.addEventListener("click", () => {
        activeSection = field;
        refreshSectionTabs();
        renderChips();
      });
      host.appendChild(btn);
    });
  }

  function refreshLanguage() {
    renderChips();
    refreshSectionTabs();
    refreshFilledCells();

    const body = document.getElementById("trace-body");
    if (!body || !window.I18n) return;
    const hasResultField = varFields().indexOf("result") >= 0;
    const resultOffset = hasResultField ? 3 + varFields().indexOf("result") : -1;
    body.querySelectorAll("tr[data-step-id]").forEach((tr) => {
      const stepId = tr.dataset.stepId;
      const cells = tr.children;
      if (!cells || cells.length < 2) return;
      const lineTd = cells[1];
      if (lineTd.dataset.dropField === "stepId") {
        updateDropCell(Number(tr.dataset.puzzleStep), "stepId");
      } else {
        lineTd.textContent = window.I18n.stepLabel(stepId);
      }
      if (hasResultField && resultOffset >= 0 && cells[resultOffset]) {
        const resultTd = cells[resultOffset];
        if (resultTd.dataset.dropField === "result") {
          updateDropCell(Number(tr.dataset.puzzleStep), "result");
        } else if (tr.dataset.result != null) {
          resultTd.textContent = formatResult(tr.dataset.result);
        }
      }
    });

    const title = document.getElementById("puzzle-panel-title");
    if (title) title.textContent = t("puzzlePanelTitle");
    const hint = document.getElementById("puzzle-panel-hint");
    if (hint) hint.textContent = t("puzzlePanelHint");
    const openBtn = document.getElementById("btn-puzzle-palette");
    if (openBtn) openBtn.textContent = t("puzzleOpenPalette");
    const resetBtn = document.getElementById("btn-puzzle-reset-pieces");
    if (resetBtn) resetBtn.textContent = t("puzzleResetPieces");
    const badge = document.getElementById("puzzle-complete-badge");
    if (badge && !badge.hidden) badge.textContent = t("puzzleComplete");
    const banner = document.getElementById("puzzle-banner");
    if (banner && !banner.hidden) {
      banner.textContent = t("puzzleBanner");
    }
    updateStats();
  }

  function refreshSectionTabs() {
    ensureSectionButtons();
    const sections = availableSections();
    if (!sections.includes(activeSection)) {
      activeSection = sections[0] || "stepId";
    }
    document.querySelectorAll(".puzzle-section-btn").forEach((btn) => {
      const section = btn.dataset.section;
      const available = sections.includes(section);
      btn.hidden = !available;
      if (!available) return;
      const active = section === activeSection;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
      btn.textContent = sectionLabel(section);
    });
  }

  function shuffleInPlace(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  }

  function renderChips() {
    const host = document.getElementById("puzzle-chips");
    if (!host) return;
    host.innerHTML = "";

    const field = activeSection;
    const pieces = availablePieces[field] || [];
    // Shuffle the selected column so piece order is not the trace order.
    shuffleInPlace(pieces);
    pieces.forEach((piece) => {
      const label = displayFieldValue(field, piece.value);
      host.appendChild(makeChip(field, piece.value, label, piece.id));
    });
  }

  function makeChip(field, value, label, pieceId) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "puzzle-chip";
    chip.draggable = true;
    chip.dataset.field = field;
    chip.dataset.value = value;
    if (pieceId != null) chip.dataset.pieceId = String(pieceId);
    chip.textContent = label;
    chip.title = t("puzzleDragHint");

    chip.addEventListener("dragstart", (e) => {
      dragPayload = { source: "panel", field, value, pieceId };
      chip.classList.add("is-dragging");
      e.dataTransfer.setData(
        "application/x-trace-puzzle",
        JSON.stringify(dragPayload)
      );
      e.dataTransfer.effectAllowed = "move";
    });
    chip.addEventListener("dragend", () => {
      chip.classList.remove("is-dragging");
      dragPayload = null;
      clearDragOverMarks();
    });

    return chip;
  }

  function readDragPayload(e) {
    let payload = dragPayload;
    try {
      const raw = e.dataTransfer.getData("application/x-trace-puzzle");
      if (raw) payload = JSON.parse(raw);
    } catch (_) {
      /* keep dragPayload */
    }
    return payload;
  }

  function bindDropTarget(td, stepNumber, field) {
    td.addEventListener("dragover", (e) => {
      if (!dragPayload || dragPayload.field !== field) return;
      if (
        dragPayload.source === "trace" &&
        dragPayload.stepNumber === stepNumber
      ) {
        return;
      }
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      td.classList.add("drag-over");
    });
    td.addEventListener("dragleave", () => {
      td.classList.remove("drag-over");
    });
    td.addEventListener("drop", (e) => {
      e.preventDefault();
      td.classList.remove("drag-over");
      const payload = readDragPayload(e);
      if (!payload || payload.field !== field) {
        setStatus(t("puzzleWrongColumn"), "err");
        return;
      }
      if (payload.source === "trace") {
        moveFill(payload.stepNumber, stepNumber, field);
        return;
      }
      applyFill(stepNumber, field, payload.value, payload.pieceId);
    });
  }

  function bindPanelReturnZone() {
    const panel = document.getElementById("puzzle-panel");
    if (!panel) return;

    panel.addEventListener("dragover", (e) => {
      if (!dragPayload || dragPayload.source !== "trace") return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      panel.classList.add("drag-over-return");
    });
    panel.addEventListener("dragleave", (e) => {
      if (panel.contains(e.relatedTarget)) return;
      panel.classList.remove("drag-over-return");
    });
    panel.addEventListener("drop", (e) => {
      panel.classList.remove("drag-over-return");
      const payload = readDragPayload(e);
      if (!payload || payload.source !== "trace") return;
      e.preventDefault();
      e.stopPropagation();
      if (payload.field && availableSections().includes(payload.field)) {
        activeSection = payload.field;
        refreshSectionTabs();
      }
      clearFill(payload.stepNumber, payload.field);
    });
  }

  function applyFill(stepNumber, field, value, pieceId) {
    if (taskComplete) return;

    const taken = takePiece(field, value, pieceId);
    if (!taken) {
      setStatus(t("puzzleWrongColumn"), "err");
      renderChips();
      return;
    }

    if (!filled[stepNumber]) filled[stepNumber] = {};
    const previous = filled[stepNumber][field];
    if (previous != null && previous !== "") {
      returnPiece(field, previous);
    }
    filled[stepNumber][field] = String(taken.value);

    syncValidationForStep(stepNumber);
    savePuzzleState();
    renderChips();
    refreshFilledCells();
  }

  function moveFill(fromStep, toStep, field) {
    if (taskComplete) return;
    if (fromStep == null || toStep == null || fromStep === toStep) return;

    const value = getFill(fromStep, field);
    if (value == null || value === "") return;

    if (!filled[toStep]) filled[toStep] = {};
    const previous = filled[toStep][field];
    if (previous != null && previous !== "") {
      returnPiece(field, previous);
    }

    delete filled[fromStep][field];
    if (Object.keys(filled[fromStep]).length === 0) {
      delete filled[fromStep];
    }
    filled[toStep][field] = String(value);

    syncValidationForStep(fromStep);
    syncValidationForStep(toStep);
    savePuzzleState();
    renderChips();
    refreshFilledCells();
  }

  function clearFill(stepNumber, field) {
    if (taskComplete) return;
    if (!filled[stepNumber]) return;
    const previous = filled[stepNumber][field];
    if (previous == null || previous === "") return;

    returnPiece(field, previous);
    delete filled[stepNumber][field];
    if (Object.keys(filled[stepNumber]).length === 0) {
      delete filled[stepNumber];
    }

    syncValidationForStep(stepNumber);
    savePuzzleState();
    renderChips();
    refreshFilledCells();
  }

  function clearFills() {
    if (taskComplete) return;
    filled = {};
    resetAvailablePieces();
    clearValidationMarks();
    renderChips();
    refreshFilledCells();
    setStatus("", null);
    savePuzzleState();
  }

  function openPanel() {
    const panel = document.getElementById("puzzle-panel");
    if (!panel) return;
    panel.hidden = false;
    panelOpen = true;
    const btn = document.getElementById("btn-puzzle-palette");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }

  function closePanel() {
    const panel = document.getElementById("puzzle-panel");
    if (!panel) return;
    panel.hidden = true;
    panelOpen = false;
    const btn = document.getElementById("btn-puzzle-palette");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function togglePanel() {
    if (panelOpen) closePanel();
    else openPanel();
  }

  function bindPanelDrag() {
    const panel = document.getElementById("puzzle-panel");
    const handle = document.getElementById("puzzle-panel-handle");
    if (!panel || !handle) return;

    let dragging = false;
    let ox = 0;
    let oy = 0;

    handle.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      dragging = true;
      const rect = panel.getBoundingClientRect();
      ox = e.clientX - rect.left;
      oy = e.clientY - rect.top;
      handle.setPointerCapture(e.pointerId);
      panel.classList.add("is-dragging-panel");
      e.preventDefault();
    });

    handle.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const x = Math.min(
        window.innerWidth - 80,
        Math.max(8, e.clientX - ox)
      );
      const y = Math.min(
        window.innerHeight - 80,
        Math.max(8, e.clientY - oy)
      );
      panel.style.left = x + "px";
      panel.style.top = y + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      panel.classList.remove("is-dragging-panel");
      try {
        handle.releasePointerCapture(e.pointerId);
      } catch (_) {
        /* ignore */
      }
    }

    handle.addEventListener("pointerup", endDrag);
    handle.addEventListener("pointercancel", endDrag);
  }

  function bindUi() {
    const openBtn = document.getElementById("btn-puzzle-palette");
    if (openBtn) {
      openBtn.addEventListener("click", () => togglePanel());
    }
    const closeBtn = document.getElementById("btn-puzzle-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => closePanel());
    }
    const resetBtn = document.getElementById("btn-puzzle-reset-pieces");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => clearFills());
    }
    document.querySelectorAll(".puzzle-section-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSection = btn.dataset.section || "stepId";
        refreshSectionTabs();
        renderChips();
      });
    });
    bindPanelDrag();
    bindPanelReturnZone();
  }

  function prepareRun(options) {
    if (taskComplete && !(options && options.force)) return;
    clearAwaitingFillMarks();
    const body = document.getElementById("trace-body");
    if (body) {
      body
        .querySelectorAll(
          "tr.latest, tr.is-reached, tr.is-validated, tr.is-validating, tr.is-awaiting-fill"
        )
        .forEach((r) => {
          r.classList.remove(
            "latest",
            "is-reached",
            "is-validated",
            "is-validating",
            "is-awaiting-fill",
            "is-wrong-row"
          );
        });
    }
    validatedSteps = new Set();
    updateStats();
    renderTraceTable();
    const banner = document.getElementById("puzzle-banner");
    if (banner) {
      banner.hidden = isSolved();
      if (!banner.hidden) banner.textContent = t("puzzleBanner");
    }
  }

  function reset() {
    setTaskComplete(false);
    pendingGateStep = null;
    clearAwaitingFillMarks();
    clearFills();
    clearValidationMarks();
    renderTraceTable();
    updateStats();
    const banner = document.getElementById("puzzle-banner");
    if (banner) {
      banner.hidden = false;
      banner.textContent = t("puzzleBanner");
    }
  }

  function init() {
    resetAvailablePieces();
    bindUi();
    if (restorePuzzleState()) {
      setCompleteBadge(taskComplete);
      setControlsLocked(taskComplete);
      var tracePanel = document.querySelector(".trace-panel");
      if (tracePanel) tracePanel.classList.toggle("is-puzzle-complete", taskComplete);
      renderTraceTable();
      refreshSectionTabs();
      renderChips();
      closePanel();
      updateStats();
      if (taskComplete) setStatus(t("puzzleComplete"), "ok");
    } else {
      reset();
      refreshSectionTabs();
      renderChips();
      closePanel();
      updateStats();
    }
  }

  function shouldGate(nextStepNumber) {
    const row = INSTANCE.rows.find((r) => r.step === nextStepNumber);
    if (!row || !row.missing) return false;
    if (isRowSolved(nextStepNumber)) return false;
    pendingGateStep = nextStepNumber;
    return true;
  }

  return {
    INSTANCE,
    init,
    reset,
    prepareRun,
    renderTraceTable,
    refreshLanguage,
    markActiveStep,
    awaitGate,
    abortGate,
    shouldGate,
    isSolved,
    isTaskComplete,
    onRunFinished,
    openPanel,
    getInstance() {
      return INSTANCE;
    },
  };
})();
