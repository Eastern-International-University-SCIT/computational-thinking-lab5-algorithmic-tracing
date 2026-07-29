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
    980,
    151,
    213,
    218,
    251,
    983,
    78,
    192,
    874,
    20,
    947,
    389,
    199,
    692
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
    5,
    6,
    13,
    14,
    15,
    17,
    20,
    22,
    24,
    35,
    36,
    37,
    39,
    40,
    45,
    53,
    58,
    59,
    61,
    68,
    69,
    71,
    73,
    76,
    79,
    80,
    84,
    87,
    88,
    89,
    102,
    110,
    118,
    121,
    122,
    126,
    127,
    131,
    132,
    134,
    142,
    150,
    151,
    157,
    158,
    163,
    168,
    172,
    173,
    175,
    176,
    178,
    182,
    183,
    186,
    187
  ],
  "answers": {
    "5": {
      "stepId": "extendLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "6": {
      "stepId": "setMid",
      "left": "0",
      "mid": "0",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "13": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "0",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "14": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "0",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "15": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "0",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "17": {
      "stepId": "incK",
      "left": "0",
      "mid": "0",
      "right": "5",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "20": {
      "stepId": "incK",
      "left": "0",
      "mid": "0",
      "right": "5",
      "i": "0",
      "j": "2",
      "k": "2",
      "merged": "false"
    },
    "22": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "0",
      "right": "5",
      "i": "0",
      "j": "2",
      "k": "2",
      "merged": "false"
    },
    "24": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "0",
      "right": "5",
      "i": "0",
      "j": "3",
      "k": "3",
      "merged": "false"
    },
    "35": {
      "stepId": "setMid",
      "left": "6",
      "mid": "8",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "36": {
      "stepId": "advancePastMid",
      "left": "6",
      "mid": "8",
      "right": "\u2014",
      "i": "9",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "37": {
      "stepId": "checkHasRight",
      "left": "6",
      "mid": "8",
      "right": "\u2014",
      "i": "9",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "39": {
      "stepId": "setRight",
      "left": "6",
      "mid": "8",
      "right": "10",
      "i": "10",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "40": {
      "stepId": "callMerge",
      "left": "6",
      "mid": "8",
      "right": "10",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "45": {
      "stepId": "takeRight",
      "left": "6",
      "mid": "8",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "6",
      "merged": "true"
    },
    "53": {
      "stepId": "compareMerge",
      "left": "6",
      "mid": "8",
      "right": "10",
      "i": "2",
      "j": "1",
      "k": "9",
      "merged": "true"
    },
    "58": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "59": {
      "stepId": "setLeft",
      "left": "11",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "61": {
      "stepId": "setMid",
      "left": "11",
      "mid": "11",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "68": {
      "stepId": "initMergePointers",
      "left": "11",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "69": {
      "stepId": "whileBoth",
      "left": "11",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "71": {
      "stepId": "takeRight",
      "left": "11",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "73": {
      "stepId": "compareMerge",
      "left": "11",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "1",
      "k": "12",
      "merged": "true"
    },
    "76": {
      "stepId": "drainRight",
      "left": "11",
      "mid": "11",
      "right": "13",
      "i": "\u2014",
      "j": "1",
      "k": "13",
      "merged": "true"
    },
    "79": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "80": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "84": {
      "stepId": "extendLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "87": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "5",
      "right": "\u2014",
      "i": "6",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "88": {
      "stepId": "extendRight",
      "left": "0",
      "mid": "5",
      "right": "6",
      "i": "6",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "89": {
      "stepId": "setRight",
      "left": "0",
      "mid": "5",
      "right": "10",
      "i": "10",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "102": {
      "stepId": "incK",
      "left": "0",
      "mid": "5",
      "right": "10",
      "i": "1",
      "j": "2",
      "k": "3",
      "merged": "false"
    },
    "110": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "5",
      "right": "10",
      "i": "2",
      "j": "3",
      "k": "5",
      "merged": "false"
    },
    "118": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "5",
      "right": "10",
      "i": "4",
      "j": "4",
      "k": "8",
      "merged": "false"
    },
    "121": {
      "stepId": "drainLeft",
      "left": "0",
      "mid": "5",
      "right": "10",
      "i": "4",
      "j": "\u2014",
      "k": "9",
      "merged": "false"
    },
    "122": {
      "stepId": "setMergedTrue",
      "left": "0",
      "mid": "5",
      "right": "10",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "126": {
      "stepId": "setMid",
      "left": "11",
      "mid": "13",
      "right": "\u2014",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "127": {
      "stepId": "advancePastMid",
      "left": "11",
      "mid": "13",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "131": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "132": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "134": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "142": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "150": {
      "stepId": "incK",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "2",
      "j": "0",
      "k": "2",
      "merged": "false"
    },
    "151": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "2",
      "j": "0",
      "k": "2",
      "merged": "false"
    },
    "157": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "4",
      "j": "0",
      "k": "4",
      "merged": "false"
    },
    "158": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "4",
      "j": "0",
      "k": "4",
      "merged": "false"
    },
    "163": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "5",
      "j": "1",
      "k": "6",
      "merged": "false"
    },
    "168": {
      "stepId": "incK",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "7",
      "j": "1",
      "k": "8",
      "merged": "false"
    },
    "172": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "7",
      "j": "2",
      "k": "9",
      "merged": "false"
    },
    "173": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "7",
      "j": "2",
      "k": "9",
      "merged": "false"
    },
    "175": {
      "stepId": "drainLeft",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "7",
      "j": "\u2014",
      "k": "10",
      "merged": "false"
    },
    "176": {
      "stepId": "setMergedTrue",
      "left": "0",
      "mid": "10",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "178": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "182": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "183": {
      "stepId": "extendLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "186": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "13",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "187": {
      "stepId": "breakOddRun",
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
        "id": 393,
        "value": "drainLeft"
      },
      {
        "id": 209,
        "value": "extendLeft"
      },
      {
        "id": 249,
        "value": "takeLeft"
      },
      {
        "id": 217,
        "value": "checkHasRight"
      },
      {
        "id": 121,
        "value": "compareMerge"
      },
      {
        "id": 345,
        "value": "compareMerge"
      },
      {
        "id": 433,
        "value": "checkHasRight"
      },
      {
        "id": 441,
        "value": "breakOddRun"
      },
      {
        "id": 337,
        "value": "compareMerge"
      },
      {
        "id": 193,
        "value": "checkUntil"
      },
      {
        "id": 297,
        "value": "repeatPass"
      },
      {
        "id": 81,
        "value": "advancePastMid"
      },
      {
        "id": 377,
        "value": "compareMerge"
      },
      {
        "id": 1,
        "value": "extendLeft"
      },
      {
        "id": 169,
        "value": "takeRight"
      },
      {
        "id": 153,
        "value": "initMergePointers"
      },
      {
        "id": 313,
        "value": "setLeft"
      },
      {
        "id": 177,
        "value": "compareMerge"
      },
      {
        "id": 113,
        "value": "takeRight"
      },
      {
        "id": 145,
        "value": "setMid"
      },
      {
        "id": 265,
        "value": "drainLeft"
      },
      {
        "id": 417,
        "value": "setLeft"
      },
      {
        "id": 17,
        "value": "initMergePointers"
      },
      {
        "id": 409,
        "value": "checkUntil"
      },
      {
        "id": 273,
        "value": "setMergedTrue"
      },
      {
        "id": 281,
        "value": "setMid"
      },
      {
        "id": 425,
        "value": "extendLeft"
      },
      {
        "id": 353,
        "value": "takeRight"
      },
      {
        "id": 401,
        "value": "setMergedTrue"
      },
      {
        "id": 257,
        "value": "compareMerge"
      },
      {
        "id": 241,
        "value": "incK"
      },
      {
        "id": 369,
        "value": "incK"
      },
      {
        "id": 185,
        "value": "drainRight"
      },
      {
        "id": 225,
        "value": "extendRight"
      },
      {
        "id": 97,
        "value": "setRight"
      },
      {
        "id": 89,
        "value": "checkHasRight"
      },
      {
        "id": 385,
        "value": "takeRight"
      },
      {
        "id": 41,
        "value": "incK"
      },
      {
        "id": 289,
        "value": "advancePastMid"
      },
      {
        "id": 25,
        "value": "whileBoth"
      },
      {
        "id": 57,
        "value": "takeRight"
      },
      {
        "id": 49,
        "value": "incK"
      },
      {
        "id": 9,
        "value": "setMid"
      },
      {
        "id": 73,
        "value": "setMid"
      },
      {
        "id": 33,
        "value": "compareMerge"
      },
      {
        "id": 305,
        "value": "initScan"
      },
      {
        "id": 201,
        "value": "repeatPass"
      },
      {
        "id": 129,
        "value": "advanceAfterMerge"
      },
      {
        "id": 361,
        "value": "compareMerge"
      },
      {
        "id": 65,
        "value": "compareMerge"
      },
      {
        "id": 161,
        "value": "whileBoth"
      },
      {
        "id": 137,
        "value": "setLeft"
      },
      {
        "id": 233,
        "value": "setRight"
      },
      {
        "id": 329,
        "value": "incK"
      },
      {
        "id": 105,
        "value": "callMerge"
      },
      {
        "id": 321,
        "value": "copyRuns"
      }
    ],
    "left": [
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 146,
        "value": "11"
      },
      {
        "id": 98,
        "value": "6"
      },
      {
        "id": 434,
        "value": "0"
      },
      {
        "id": 314,
        "value": "0"
      },
      {
        "id": 274,
        "value": "0"
      },
      {
        "id": 426,
        "value": "0"
      },
      {
        "id": 410,
        "value": "\u2014"
      },
      {
        "id": 50,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 266,
        "value": "0"
      },
      {
        "id": 322,
        "value": "0"
      },
      {
        "id": 282,
        "value": "11"
      },
      {
        "id": 106,
        "value": "6"
      },
      {
        "id": 122,
        "value": "6"
      },
      {
        "id": 402,
        "value": "0"
      },
      {
        "id": 250,
        "value": "0"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 290,
        "value": "11"
      },
      {
        "id": 82,
        "value": "6"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 154,
        "value": "11"
      },
      {
        "id": 202,
        "value": "\u2014"
      },
      {
        "id": 354,
        "value": "0"
      },
      {
        "id": 138,
        "value": "11"
      },
      {
        "id": 74,
        "value": "6"
      },
      {
        "id": 186,
        "value": "11"
      },
      {
        "id": 418,
        "value": "0"
      },
      {
        "id": 90,
        "value": "6"
      },
      {
        "id": 226,
        "value": "0"
      },
      {
        "id": 306,
        "value": "\u2014"
      },
      {
        "id": 170,
        "value": "11"
      },
      {
        "id": 362,
        "value": "0"
      },
      {
        "id": 378,
        "value": "0"
      },
      {
        "id": 258,
        "value": "0"
      },
      {
        "id": 346,
        "value": "0"
      },
      {
        "id": 234,
        "value": "0"
      },
      {
        "id": 298,
        "value": "\u2014"
      },
      {
        "id": 370,
        "value": "0"
      },
      {
        "id": 218,
        "value": "0"
      },
      {
        "id": 114,
        "value": "6"
      },
      {
        "id": 330,
        "value": "0"
      },
      {
        "id": 442,
        "value": "0"
      },
      {
        "id": 130,
        "value": "\u2014"
      },
      {
        "id": 210,
        "value": "0"
      },
      {
        "id": 338,
        "value": "0"
      },
      {
        "id": 66,
        "value": "0"
      },
      {
        "id": 242,
        "value": "0"
      },
      {
        "id": 394,
        "value": "0"
      },
      {
        "id": 162,
        "value": "11"
      },
      {
        "id": 386,
        "value": "0"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 178,
        "value": "11"
      },
      {
        "id": 26,
        "value": "0"
      }
    ],
    "mid": [
      {
        "id": 243,
        "value": "5"
      },
      {
        "id": 435,
        "value": "13"
      },
      {
        "id": 291,
        "value": "13"
      },
      {
        "id": 19,
        "value": "0"
      },
      {
        "id": 171,
        "value": "11"
      },
      {
        "id": 323,
        "value": "10"
      },
      {
        "id": 211,
        "value": "\u2014"
      },
      {
        "id": 99,
        "value": "8"
      },
      {
        "id": 35,
        "value": "0"
      },
      {
        "id": 91,
        "value": "8"
      },
      {
        "id": 59,
        "value": "0"
      },
      {
        "id": 187,
        "value": "11"
      },
      {
        "id": 267,
        "value": "5"
      },
      {
        "id": 123,
        "value": "8"
      },
      {
        "id": 259,
        "value": "5"
      },
      {
        "id": 315,
        "value": "\u2014"
      },
      {
        "id": 235,
        "value": "5"
      },
      {
        "id": 371,
        "value": "10"
      },
      {
        "id": 347,
        "value": "10"
      },
      {
        "id": 363,
        "value": "10"
      },
      {
        "id": 51,
        "value": "0"
      },
      {
        "id": 227,
        "value": "5"
      },
      {
        "id": 283,
        "value": "13"
      },
      {
        "id": 11,
        "value": "0"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 339,
        "value": "10"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 403,
        "value": "10"
      },
      {
        "id": 43,
        "value": "0"
      },
      {
        "id": 419,
        "value": "\u2014"
      },
      {
        "id": 163,
        "value": "11"
      },
      {
        "id": 411,
        "value": "\u2014"
      },
      {
        "id": 379,
        "value": "10"
      },
      {
        "id": 355,
        "value": "10"
      },
      {
        "id": 427,
        "value": "\u2014"
      },
      {
        "id": 299,
        "value": "\u2014"
      },
      {
        "id": 251,
        "value": "5"
      },
      {
        "id": 139,
        "value": "\u2014"
      },
      {
        "id": 275,
        "value": "5"
      },
      {
        "id": 395,
        "value": "10"
      },
      {
        "id": 131,
        "value": "\u2014"
      },
      {
        "id": 307,
        "value": "\u2014"
      },
      {
        "id": 155,
        "value": "11"
      },
      {
        "id": 443,
        "value": "13"
      },
      {
        "id": 75,
        "value": "8"
      },
      {
        "id": 67,
        "value": "0"
      },
      {
        "id": 387,
        "value": "10"
      },
      {
        "id": 83,
        "value": "8"
      },
      {
        "id": 331,
        "value": "10"
      },
      {
        "id": 27,
        "value": "0"
      },
      {
        "id": 107,
        "value": "8"
      },
      {
        "id": 147,
        "value": "11"
      },
      {
        "id": 115,
        "value": "8"
      },
      {
        "id": 219,
        "value": "5"
      },
      {
        "id": 179,
        "value": "11"
      }
    ],
    "right": [
      {
        "id": 292,
        "value": "\u2014"
      },
      {
        "id": 212,
        "value": "\u2014"
      },
      {
        "id": 220,
        "value": "\u2014"
      },
      {
        "id": 252,
        "value": "10"
      },
      {
        "id": 404,
        "value": "13"
      },
      {
        "id": 196,
        "value": "\u2014"
      },
      {
        "id": 332,
        "value": "13"
      },
      {
        "id": 428,
        "value": "\u2014"
      },
      {
        "id": 60,
        "value": "5"
      },
      {
        "id": 444,
        "value": "\u2014"
      },
      {
        "id": 124,
        "value": "10"
      },
      {
        "id": 28,
        "value": "5"
      },
      {
        "id": 12,
        "value": "\u2014"
      },
      {
        "id": 44,
        "value": "5"
      },
      {
        "id": 228,
        "value": "6"
      },
      {
        "id": 100,
        "value": "10"
      },
      {
        "id": 68,
        "value": "5"
      },
      {
        "id": 420,
        "value": "\u2014"
      },
      {
        "id": 300,
        "value": "\u2014"
      },
      {
        "id": 180,
        "value": "13"
      },
      {
        "id": 20,
        "value": "5"
      },
      {
        "id": 52,
        "value": "5"
      },
      {
        "id": 156,
        "value": "13"
      },
      {
        "id": 108,
        "value": "10"
      },
      {
        "id": 164,
        "value": "13"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 284,
        "value": "\u2014"
      },
      {
        "id": 348,
        "value": "13"
      },
      {
        "id": 308,
        "value": "\u2014"
      },
      {
        "id": 92,
        "value": "\u2014"
      },
      {
        "id": 364,
        "value": "13"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 204,
        "value": "\u2014"
      },
      {
        "id": 172,
        "value": "13"
      },
      {
        "id": 188,
        "value": "13"
      },
      {
        "id": 116,
        "value": "10"
      },
      {
        "id": 388,
        "value": "13"
      },
      {
        "id": 372,
        "value": "13"
      },
      {
        "id": 36,
        "value": "5"
      },
      {
        "id": 316,
        "value": "\u2014"
      },
      {
        "id": 340,
        "value": "13"
      },
      {
        "id": 260,
        "value": "10"
      },
      {
        "id": 396,
        "value": "13"
      },
      {
        "id": 276,
        "value": "10"
      },
      {
        "id": 412,
        "value": "\u2014"
      },
      {
        "id": 324,
        "value": "13"
      },
      {
        "id": 268,
        "value": "10"
      },
      {
        "id": 436,
        "value": "\u2014"
      },
      {
        "id": 380,
        "value": "13"
      },
      {
        "id": 148,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 356,
        "value": "13"
      },
      {
        "id": 244,
        "value": "10"
      },
      {
        "id": 132,
        "value": "\u2014"
      },
      {
        "id": 76,
        "value": "\u2014"
      },
      {
        "id": 236,
        "value": "10"
      }
    ],
    "i": [
      {
        "id": 253,
        "value": "2"
      },
      {
        "id": 197,
        "value": "\u2014"
      },
      {
        "id": 365,
        "value": "5"
      },
      {
        "id": 349,
        "value": "4"
      },
      {
        "id": 149,
        "value": "11"
      },
      {
        "id": 141,
        "value": "11"
      },
      {
        "id": 325,
        "value": "\u2014"
      },
      {
        "id": 173,
        "value": "0"
      },
      {
        "id": 317,
        "value": "0"
      },
      {
        "id": 245,
        "value": "1"
      },
      {
        "id": 333,
        "value": "2"
      },
      {
        "id": 341,
        "value": "2"
      },
      {
        "id": 133,
        "value": "11"
      },
      {
        "id": 421,
        "value": "0"
      },
      {
        "id": 157,
        "value": "0"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 301,
        "value": "\u2014"
      },
      {
        "id": 405,
        "value": "\u2014"
      },
      {
        "id": 381,
        "value": "7"
      },
      {
        "id": 229,
        "value": "6"
      },
      {
        "id": 285,
        "value": "13"
      },
      {
        "id": 181,
        "value": "0"
      },
      {
        "id": 277,
        "value": "\u2014"
      },
      {
        "id": 125,
        "value": "2"
      },
      {
        "id": 165,
        "value": "0"
      },
      {
        "id": 357,
        "value": "4"
      },
      {
        "id": 5,
        "value": "0"
      },
      {
        "id": 205,
        "value": "\u2014"
      },
      {
        "id": 93,
        "value": "9"
      },
      {
        "id": 13,
        "value": "0"
      },
      {
        "id": 261,
        "value": "4"
      },
      {
        "id": 53,
        "value": "0"
      },
      {
        "id": 237,
        "value": "10"
      },
      {
        "id": 269,
        "value": "4"
      },
      {
        "id": 69,
        "value": "0"
      },
      {
        "id": 21,
        "value": "0"
      },
      {
        "id": 117,
        "value": "0"
      },
      {
        "id": 429,
        "value": "0"
      },
      {
        "id": 85,
        "value": "9"
      },
      {
        "id": 309,
        "value": "0"
      },
      {
        "id": 109,
        "value": "\u2014"
      },
      {
        "id": 389,
        "value": "7"
      },
      {
        "id": 373,
        "value": "7"
      },
      {
        "id": 77,
        "value": "8"
      },
      {
        "id": 29,
        "value": "0"
      },
      {
        "id": 213,
        "value": "0"
      },
      {
        "id": 445,
        "value": "14"
      },
      {
        "id": 189,
        "value": "\u2014"
      },
      {
        "id": 221,
        "value": "6"
      },
      {
        "id": 437,
        "value": "14"
      },
      {
        "id": 293,
        "value": "14"
      },
      {
        "id": 61,
        "value": "0"
      },
      {
        "id": 45,
        "value": "0"
      },
      {
        "id": 413,
        "value": "\u2014"
      },
      {
        "id": 397,
        "value": "7"
      },
      {
        "id": 101,
        "value": "10"
      }
    ],
    "j": [
      {
        "id": 158,
        "value": "0"
      },
      {
        "id": 190,
        "value": "1"
      },
      {
        "id": 182,
        "value": "1"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 414,
        "value": "\u2014"
      },
      {
        "id": 398,
        "value": "\u2014"
      },
      {
        "id": 206,
        "value": "\u2014"
      },
      {
        "id": 62,
        "value": "2"
      },
      {
        "id": 198,
        "value": "\u2014"
      },
      {
        "id": 54,
        "value": "2"
      },
      {
        "id": 262,
        "value": "4"
      },
      {
        "id": 302,
        "value": "\u2014"
      },
      {
        "id": 390,
        "value": "2"
      },
      {
        "id": 94,
        "value": "\u2014"
      },
      {
        "id": 446,
        "value": "\u2014"
      },
      {
        "id": 78,
        "value": "\u2014"
      },
      {
        "id": 334,
        "value": "0"
      },
      {
        "id": 374,
        "value": "1"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 150,
        "value": "\u2014"
      },
      {
        "id": 126,
        "value": "1"
      },
      {
        "id": 438,
        "value": "\u2014"
      },
      {
        "id": 406,
        "value": "\u2014"
      },
      {
        "id": 214,
        "value": "\u2014"
      },
      {
        "id": 350,
        "value": "0"
      },
      {
        "id": 174,
        "value": "0"
      },
      {
        "id": 422,
        "value": "\u2014"
      },
      {
        "id": 102,
        "value": "\u2014"
      },
      {
        "id": 358,
        "value": "0"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 110,
        "value": "\u2014"
      },
      {
        "id": 166,
        "value": "0"
      },
      {
        "id": 86,
        "value": "\u2014"
      },
      {
        "id": 382,
        "value": "2"
      },
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 246,
        "value": "2"
      },
      {
        "id": 70,
        "value": "3"
      },
      {
        "id": 326,
        "value": "\u2014"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 270,
        "value": "\u2014"
      },
      {
        "id": 254,
        "value": "3"
      },
      {
        "id": 366,
        "value": "1"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 310,
        "value": "\u2014"
      },
      {
        "id": 286,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 430,
        "value": "\u2014"
      },
      {
        "id": 134,
        "value": "\u2014"
      },
      {
        "id": 142,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "\u2014"
      },
      {
        "id": 318,
        "value": "\u2014"
      },
      {
        "id": 118,
        "value": "0"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 342,
        "value": "0"
      }
    ],
    "k": [
      {
        "id": 39,
        "value": "0"
      },
      {
        "id": 343,
        "value": "2"
      },
      {
        "id": 159,
        "value": "11"
      },
      {
        "id": 223,
        "value": "\u2014"
      },
      {
        "id": 359,
        "value": "4"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 255,
        "value": "5"
      },
      {
        "id": 335,
        "value": "2"
      },
      {
        "id": 447,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 311,
        "value": "\u2014"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 263,
        "value": "8"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 439,
        "value": "\u2014"
      },
      {
        "id": 327,
        "value": "\u2014"
      },
      {
        "id": 15,
        "value": "\u2014"
      },
      {
        "id": 423,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "9"
      },
      {
        "id": 279,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "6"
      },
      {
        "id": 55,
        "value": "2"
      },
      {
        "id": 175,
        "value": "11"
      },
      {
        "id": 47,
        "value": "1"
      },
      {
        "id": 375,
        "value": "8"
      },
      {
        "id": 391,
        "value": "9"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "13"
      },
      {
        "id": 383,
        "value": "9"
      },
      {
        "id": 407,
        "value": "\u2014"
      },
      {
        "id": 319,
        "value": "\u2014"
      },
      {
        "id": 367,
        "value": "6"
      },
      {
        "id": 247,
        "value": "3"
      },
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 167,
        "value": "11"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 303,
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
        "id": 431,
        "value": "\u2014"
      },
      {
        "id": 415,
        "value": "\u2014"
      },
      {
        "id": 399,
        "value": "10"
      },
      {
        "id": 295,
        "value": "\u2014"
      },
      {
        "id": 71,
        "value": "3"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 199,
        "value": "\u2014"
      },
      {
        "id": 271,
        "value": "9"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 351,
        "value": "4"
      },
      {
        "id": 63,
        "value": "2"
      },
      {
        "id": 31,
        "value": "0"
      },
      {
        "id": 183,
        "value": "12"
      },
      {
        "id": 207,
        "value": "\u2014"
      }
    ],
    "merged": [
      {
        "id": 304,
        "value": "\u2014"
      },
      {
        "id": 80,
        "value": "true"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 248,
        "value": "false"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 208,
        "value": "\u2014"
      },
      {
        "id": 216,
        "value": "false"
      },
      {
        "id": 24,
        "value": "false"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 416,
        "value": "true"
      },
      {
        "id": 224,
        "value": "false"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 424,
        "value": "false"
      },
      {
        "id": 312,
        "value": "false"
      },
      {
        "id": 336,
        "value": "false"
      },
      {
        "id": 56,
        "value": "false"
      },
      {
        "id": 168,
        "value": "true"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 264,
        "value": "false"
      },
      {
        "id": 280,
        "value": "true"
      },
      {
        "id": 72,
        "value": "false"
      },
      {
        "id": 64,
        "value": "false"
      },
      {
        "id": 392,
        "value": "false"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 360,
        "value": "false"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 376,
        "value": "false"
      },
      {
        "id": 272,
        "value": "false"
      },
      {
        "id": 448,
        "value": "false"
      },
      {
        "id": 408,
        "value": "true"
      },
      {
        "id": 240,
        "value": "false"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 432,
        "value": "false"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 320,
        "value": "false"
      },
      {
        "id": 400,
        "value": "false"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 368,
        "value": "false"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 232,
        "value": "false"
      },
      {
        "id": 256,
        "value": "false"
      },
      {
        "id": 288,
        "value": "true"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 296,
        "value": "true"
      },
      {
        "id": 440,
        "value": "false"
      },
      {
        "id": 384,
        "value": "false"
      },
      {
        "id": 40,
        "value": "false"
      },
      {
        "id": 328,
        "value": "false"
      },
      {
        "id": 112,
        "value": "true"
      },
      {
        "id": 48,
        "value": "false"
      },
      {
        "id": 192,
        "value": "true"
      },
      {
        "id": 344,
        "value": "false"
      },
      {
        "id": 352,
        "value": "false"
      },
      {
        "id": 32,
        "value": "false"
      },
      {
        "id": 144,
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 10,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 11,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 12,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 13,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 14,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 15,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        980,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 16,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        151,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 17,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        151,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "right": 5,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        151,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 19,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        151,
        213,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 20,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        151,
        213,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 21,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        151,
        213,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 22,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        151,
        213,
        218,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 3,
      "k": 3,
      "merged": false,
      "array": [
        151,
        213,
        218,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 24,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 3,
      "k": 3,
      "merged": false,
      "array": [
        151,
        213,
        218,
        218,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 25,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 3,
      "k": 3,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 26,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 4,
      "k": 4,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 27,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 4,
      "k": 4,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        251,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 28,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": 0,
      "j": 4,
      "k": 4,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 29,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": null,
      "j": 4,
      "k": 5,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 30,
      "stepId": "drainRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": null,
      "j": 4,
      "k": 5,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 31,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 32,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 33,
      "stepId": "setLeft",
      "n": 14,
      "left": 6,
      "mid": null,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 34,
      "stepId": "extendLeft",
      "n": 14,
      "left": 6,
      "mid": null,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 35,
      "stepId": "setMid",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 36,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 37,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 38,
      "stepId": "extendRight",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 9,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 39,
      "stepId": "setRight",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "stepId": "callMerge",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 41,
      "stepId": "copyRuns",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 42,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 43,
      "stepId": "whileBoth",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 44,
      "stepId": "compareMerge",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 45,
      "stepId": "takeRight",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        20,
        947,
        389,
        199,
        692
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
      "step": 46,
      "stepId": "incK",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 47,
      "stepId": "compareMerge",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 48,
      "stepId": "takeLeft",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 49,
      "stepId": "incK",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 8,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 50,
      "stepId": "compareMerge",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 8,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 51,
      "stepId": "takeLeft",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 8,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 52,
      "stepId": "incK",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 2,
      "j": 1,
      "k": 9,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 53,
      "stepId": "compareMerge",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 2,
      "j": 1,
      "k": 9,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        20,
        947,
        389,
        199,
        692
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
      "step": 54,
      "stepId": "takeLeft",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": 2,
      "j": 1,
      "k": 9,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 55,
      "stepId": "incK",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 56,
      "stepId": "drainRight",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 57,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 6,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 58,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
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
      "step": 59,
      "stepId": "setLeft",
      "n": 14,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
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
      "step": 60,
      "stepId": "extendLeft",
      "n": 14,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 61,
      "stepId": "setMid",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
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
      "step": 62,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 63,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 64,
      "stepId": "extendRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 65,
      "stepId": "setRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 66,
      "stepId": "callMerge",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 67,
      "stepId": "copyRuns",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 68,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
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
      "stepId": "whileBoth",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
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
      "step": 70,
      "stepId": "compareMerge",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 71,
      "stepId": "takeRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        199,
        692
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
      "step": 72,
      "stepId": "incK",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        199,
        692
      ]
    },
    {
      "step": 73,
      "stepId": "compareMerge",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        199,
        692
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
      "step": 74,
      "stepId": "takeLeft",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 75,
      "stepId": "incK",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": 1,
      "k": 13,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 76,
      "stepId": "drainRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": 1,
      "k": 13,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 78,
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
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 79,
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
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "step": 80,
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
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "step": 81,
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
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 82,
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
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 83,
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
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 84,
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
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "step": 85,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 86,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 87,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "step": 89,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "step": 90,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 91,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 92,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 93,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 94,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 95,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        20,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 96,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        20,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 97,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        20,
        213,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 98,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        20,
        78,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 99,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        20,
        78,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 100,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        20,
        78,
        218,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 101,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        20,
        78,
        151,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 102,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        20,
        78,
        151,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "step": 103,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        20,
        78,
        151,
        251,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 104,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 105,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 106,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        980,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 107,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 108,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 109,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        983,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 110,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
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
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 112,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        20,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 113,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 114,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 115,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        78,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 116,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 117,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 118,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        192,
        874,
        947,
        199,
        389,
        692
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
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 120,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": null,
      "k": 9,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 121,
      "stepId": "drainLeft",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": 4,
      "j": null,
      "k": 9,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        874,
        947,
        199,
        389,
        692
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
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 5,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "step": 123,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 124,
      "stepId": "setLeft",
      "n": 14,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 125,
      "stepId": "extendLeft",
      "n": 14,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 126,
      "stepId": "setMid",
      "n": 14,
      "left": 11,
      "mid": 13,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "step": 127,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 11,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "step": 128,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 11,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 129,
      "stepId": "breakOddRun",
      "n": 14,
      "left": 11,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 130,
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
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 131,
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
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 134,
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
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "step": 135,
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
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 136,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 137,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 138,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 139,
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 11,
      "i": 11,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 140,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 141,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 142,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 144,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 145,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 146,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 147,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 148,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 149,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 150,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "step": 151,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "step": 152,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 153,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 3,
      "j": 0,
      "k": 3,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 154,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 3,
      "j": 0,
      "k": 3,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 155,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 3,
      "j": 0,
      "k": 3,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 156,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 4,
      "j": 0,
      "k": 4,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 157,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 4,
      "j": 0,
      "k": 4,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        213,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 4,
      "j": 0,
      "k": 4,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "step": 159,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 160,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 161,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 162,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 5,
      "j": 1,
      "k": 6,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 163,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 5,
      "j": 1,
      "k": 6,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        874,
        947,
        980,
        983,
        199,
        389,
        692
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
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 5,
      "j": 1,
      "k": 6,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 165,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 6,
      "j": 1,
      "k": 7,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 166,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 6,
      "j": 1,
      "k": 7,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        874,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 167,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 6,
      "j": 1,
      "k": 7,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 168,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": 1,
      "k": 8,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        947,
        980,
        983,
        199,
        389,
        692
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
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": 1,
      "k": 8,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        947,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 170,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": 1,
      "k": 8,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 171,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": 2,
      "k": 9,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        980,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 172,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": 2,
      "k": 9,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        980,
        983,
        199,
        389,
        692
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
      "step": 173,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": 2,
      "k": 9,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        983,
        199,
        389,
        692
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
      "step": 174,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": null,
      "k": 10,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        983,
        199,
        389,
        692
      ]
    },
    {
      "step": 175,
      "stepId": "drainLeft",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": 7,
      "j": null,
      "k": 10,
      "merged": false,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        983,
        199,
        389,
        692
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
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
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
      "step": 177,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 178,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
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
      "step": 179,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 180,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 181,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 182,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
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
      "step": 183,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
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
      "step": 184,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 185,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 186,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
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
      "step": 187,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
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
      "step": 188,
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
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        389,
        692,
        874,
        947,
        980,
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
    ["btn-pause", "speed"].forEach((id) => {
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
