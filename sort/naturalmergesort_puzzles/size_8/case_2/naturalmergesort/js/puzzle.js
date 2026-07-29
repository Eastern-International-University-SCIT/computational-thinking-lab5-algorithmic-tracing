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
    695,
    596,
    145,
    164,
    323,
    54,
    489,
    27
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
    2,
    12,
    14,
    17,
    28,
    31,
    32,
    33,
    35,
    37,
    40,
    43,
    50,
    51,
    53,
    54,
    57,
    64,
    68,
    71,
    75,
    77,
    80,
    82,
    85,
    86,
    87,
    93,
    95,
    96,
    100,
    103,
    106,
    113,
    118,
    119,
    121
  ],
  "answers": {
    "2": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "12": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "14": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "17": {
      "stepId": "incK",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "\u2014",
      "k": "1",
      "merged": "false"
    },
    "28": {
      "stepId": "callMerge",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "31": {
      "stepId": "whileBoth",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "2",
      "merged": "true"
    },
    "32": {
      "stepId": "compareMerge",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "2",
      "merged": "true"
    },
    "33": {
      "stepId": "takeRight",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "2",
      "merged": "true"
    },
    "35": {
      "stepId": "compareMerge",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "0",
      "j": "1",
      "k": "3",
      "merged": "true"
    },
    "37": {
      "stepId": "incK",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "1",
      "j": "1",
      "k": "4",
      "merged": "true"
    },
    "40": {
      "stepId": "incK",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "2",
      "j": "1",
      "k": "5",
      "merged": "true"
    },
    "43": {
      "stepId": "incK",
      "left": "2",
      "mid": "4",
      "right": "6",
      "i": "\u2014",
      "j": "1",
      "k": "6",
      "merged": "true"
    },
    "50": {
      "stepId": "advancePastMid",
      "left": "7",
      "mid": "7",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "51": {
      "stepId": "checkHasRight",
      "left": "7",
      "mid": "7",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "53": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "54": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "57": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "64": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "1",
      "right": "6",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "68": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "71": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "6",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "75": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "1",
      "right": "6",
      "i": "0",
      "j": "2",
      "k": "2",
      "merged": "false"
    },
    "77": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "6",
      "i": "0",
      "j": "3",
      "k": "3",
      "merged": "false"
    },
    "80": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "6",
      "i": "0",
      "j": "4",
      "k": "4",
      "merged": "false"
    },
    "82": {
      "stepId": "incK",
      "left": "0",
      "mid": "1",
      "right": "6",
      "i": "0",
      "j": "\u2014",
      "k": "5",
      "merged": "false"
    },
    "85": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "86": {
      "stepId": "setLeft",
      "left": "7",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "87": {
      "stepId": "extendLeft",
      "left": "7",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "93": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "95": {
      "stepId": "whileScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "96": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "100": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "6",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "103": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "6",
      "right": "7",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "106": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "113": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "118": {
      "stepId": "extendLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "119": {
      "stepId": "setMid",
      "left": "0",
      "mid": "7",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "121": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "7",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 57,
        "value": "takeRight"
      },
      {
        "id": 25,
        "value": "incK"
      },
      {
        "id": 281,
        "value": "setMid"
      },
      {
        "id": 113,
        "value": "checkUntil"
      },
      {
        "id": 65,
        "value": "compareMerge"
      },
      {
        "id": 9,
        "value": "copyRuns"
      },
      {
        "id": 41,
        "value": "whileBoth"
      },
      {
        "id": 129,
        "value": "setLeft"
      },
      {
        "id": 73,
        "value": "incK"
      },
      {
        "id": 49,
        "value": "compareMerge"
      },
      {
        "id": 81,
        "value": "incK"
      },
      {
        "id": 161,
        "value": "takeRight"
      },
      {
        "id": 201,
        "value": "setLeft"
      },
      {
        "id": 145,
        "value": "compareMerge"
      },
      {
        "id": 33,
        "value": "callMerge"
      },
      {
        "id": 193,
        "value": "advanceAfterMerge"
      },
      {
        "id": 249,
        "value": "callMerge"
      },
      {
        "id": 233,
        "value": "setLeft"
      },
      {
        "id": 185,
        "value": "incK"
      },
      {
        "id": 289,
        "value": "checkHasRight"
      },
      {
        "id": 209,
        "value": "extendLeft"
      },
      {
        "id": 265,
        "value": "checkUntil"
      },
      {
        "id": 273,
        "value": "extendLeft"
      },
      {
        "id": 257,
        "value": "whileBoth"
      },
      {
        "id": 169,
        "value": "compareMerge"
      },
      {
        "id": 225,
        "value": "whileScan"
      },
      {
        "id": 121,
        "value": "repeatPass"
      },
      {
        "id": 241,
        "value": "checkHasRight"
      },
      {
        "id": 177,
        "value": "compareMerge"
      },
      {
        "id": 97,
        "value": "advancePastMid"
      },
      {
        "id": 217,
        "value": "repeatPass"
      },
      {
        "id": 17,
        "value": "whileBoth"
      },
      {
        "id": 89,
        "value": "incK"
      },
      {
        "id": 105,
        "value": "checkHasRight"
      },
      {
        "id": 137,
        "value": "callMerge"
      },
      {
        "id": 153,
        "value": "compareMerge"
      },
      {
        "id": 1,
        "value": "initScan"
      }
    ],
    "left": [
      {
        "id": 162,
        "value": "0"
      },
      {
        "id": 146,
        "value": "0"
      },
      {
        "id": 266,
        "value": "\u2014"
      },
      {
        "id": 2,
        "value": "\u2014"
      },
      {
        "id": 34,
        "value": "2"
      },
      {
        "id": 170,
        "value": "0"
      },
      {
        "id": 258,
        "value": "0"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 42,
        "value": "2"
      },
      {
        "id": 138,
        "value": "0"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 114,
        "value": "\u2014"
      },
      {
        "id": 50,
        "value": "2"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 234,
        "value": "0"
      },
      {
        "id": 106,
        "value": "7"
      },
      {
        "id": 290,
        "value": "0"
      },
      {
        "id": 226,
        "value": "\u2014"
      },
      {
        "id": 202,
        "value": "7"
      },
      {
        "id": 122,
        "value": "\u2014"
      },
      {
        "id": 74,
        "value": "2"
      },
      {
        "id": 282,
        "value": "0"
      },
      {
        "id": 210,
        "value": "7"
      },
      {
        "id": 218,
        "value": "\u2014"
      },
      {
        "id": 98,
        "value": "7"
      },
      {
        "id": 178,
        "value": "0"
      },
      {
        "id": 130,
        "value": "0"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 58,
        "value": "2"
      },
      {
        "id": 82,
        "value": "2"
      },
      {
        "id": 250,
        "value": "0"
      },
      {
        "id": 154,
        "value": "0"
      },
      {
        "id": 186,
        "value": "0"
      },
      {
        "id": 274,
        "value": "0"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 90,
        "value": "2"
      },
      {
        "id": 242,
        "value": "0"
      }
    ],
    "mid": [
      {
        "id": 171,
        "value": "1"
      },
      {
        "id": 27,
        "value": "0"
      },
      {
        "id": 107,
        "value": "7"
      },
      {
        "id": 219,
        "value": "\u2014"
      },
      {
        "id": 59,
        "value": "4"
      },
      {
        "id": 155,
        "value": "1"
      },
      {
        "id": 147,
        "value": "1"
      },
      {
        "id": 51,
        "value": "4"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 211,
        "value": "\u2014"
      },
      {
        "id": 251,
        "value": "6"
      },
      {
        "id": 291,
        "value": "7"
      },
      {
        "id": 83,
        "value": "4"
      },
      {
        "id": 179,
        "value": "1"
      },
      {
        "id": 11,
        "value": "0"
      },
      {
        "id": 163,
        "value": "1"
      },
      {
        "id": 99,
        "value": "7"
      },
      {
        "id": 267,
        "value": "\u2014"
      },
      {
        "id": 139,
        "value": "1"
      },
      {
        "id": 259,
        "value": "6"
      },
      {
        "id": 67,
        "value": "4"
      },
      {
        "id": 123,
        "value": "\u2014"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 43,
        "value": "4"
      },
      {
        "id": 187,
        "value": "1"
      },
      {
        "id": 75,
        "value": "4"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "4"
      },
      {
        "id": 243,
        "value": "6"
      },
      {
        "id": 91,
        "value": "4"
      },
      {
        "id": 115,
        "value": "\u2014"
      },
      {
        "id": 227,
        "value": "\u2014"
      },
      {
        "id": 19,
        "value": "0"
      },
      {
        "id": 131,
        "value": "\u2014"
      },
      {
        "id": 283,
        "value": "7"
      },
      {
        "id": 275,
        "value": "\u2014"
      },
      {
        "id": 235,
        "value": "\u2014"
      }
    ],
    "right": [
      {
        "id": 180,
        "value": "6"
      },
      {
        "id": 36,
        "value": "6"
      },
      {
        "id": 268,
        "value": "\u2014"
      },
      {
        "id": 76,
        "value": "6"
      },
      {
        "id": 20,
        "value": "1"
      },
      {
        "id": 108,
        "value": "\u2014"
      },
      {
        "id": 284,
        "value": "\u2014"
      },
      {
        "id": 188,
        "value": "6"
      },
      {
        "id": 172,
        "value": "6"
      },
      {
        "id": 164,
        "value": "6"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 52,
        "value": "6"
      },
      {
        "id": 140,
        "value": "6"
      },
      {
        "id": 260,
        "value": "7"
      },
      {
        "id": 60,
        "value": "6"
      },
      {
        "id": 132,
        "value": "\u2014"
      },
      {
        "id": 228,
        "value": "\u2014"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 196,
        "value": "\u2014"
      },
      {
        "id": 148,
        "value": "6"
      },
      {
        "id": 204,
        "value": "\u2014"
      },
      {
        "id": 44,
        "value": "6"
      },
      {
        "id": 116,
        "value": "\u2014"
      },
      {
        "id": 244,
        "value": "\u2014"
      },
      {
        "id": 252,
        "value": "7"
      },
      {
        "id": 276,
        "value": "\u2014"
      },
      {
        "id": 100,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "6"
      },
      {
        "id": 212,
        "value": "\u2014"
      },
      {
        "id": 92,
        "value": "6"
      },
      {
        "id": 156,
        "value": "6"
      },
      {
        "id": 28,
        "value": "1"
      },
      {
        "id": 124,
        "value": "\u2014"
      },
      {
        "id": 220,
        "value": "\u2014"
      },
      {
        "id": 12,
        "value": "1"
      },
      {
        "id": 292,
        "value": "\u2014"
      },
      {
        "id": 68,
        "value": "6"
      }
    ],
    "i": [
      {
        "id": 117,
        "value": "\u2014"
      },
      {
        "id": 109,
        "value": "8"
      },
      {
        "id": 165,
        "value": "0"
      },
      {
        "id": 245,
        "value": "7"
      },
      {
        "id": 53,
        "value": "0"
      },
      {
        "id": 181,
        "value": "0"
      },
      {
        "id": 13,
        "value": "\u2014"
      },
      {
        "id": 213,
        "value": "7"
      },
      {
        "id": 77,
        "value": "1"
      },
      {
        "id": 293,
        "value": "8"
      },
      {
        "id": 61,
        "value": "0"
      },
      {
        "id": 157,
        "value": "0"
      },
      {
        "id": 21,
        "value": "0"
      },
      {
        "id": 229,
        "value": "0"
      },
      {
        "id": 85,
        "value": "2"
      },
      {
        "id": 93,
        "value": "\u2014"
      },
      {
        "id": 101,
        "value": "8"
      },
      {
        "id": 237,
        "value": "0"
      },
      {
        "id": 173,
        "value": "0"
      },
      {
        "id": 69,
        "value": "0"
      },
      {
        "id": 277,
        "value": "0"
      },
      {
        "id": 189,
        "value": "0"
      },
      {
        "id": 261,
        "value": "0"
      },
      {
        "id": 5,
        "value": "0"
      },
      {
        "id": 37,
        "value": "\u2014"
      },
      {
        "id": 269,
        "value": "\u2014"
      },
      {
        "id": 221,
        "value": "\u2014"
      },
      {
        "id": 141,
        "value": "\u2014"
      },
      {
        "id": 125,
        "value": "\u2014"
      },
      {
        "id": 149,
        "value": "0"
      },
      {
        "id": 133,
        "value": "0"
      },
      {
        "id": 45,
        "value": "0"
      },
      {
        "id": 205,
        "value": "7"
      },
      {
        "id": 29,
        "value": "0"
      },
      {
        "id": 285,
        "value": "7"
      },
      {
        "id": 197,
        "value": "7"
      },
      {
        "id": 253,
        "value": "\u2014"
      }
    ],
    "j": [
      {
        "id": 174,
        "value": "3"
      },
      {
        "id": 102,
        "value": "\u2014"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "\u2014"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "1"
      },
      {
        "id": 214,
        "value": "\u2014"
      },
      {
        "id": 254,
        "value": "\u2014"
      },
      {
        "id": 110,
        "value": "\u2014"
      },
      {
        "id": 150,
        "value": "0"
      },
      {
        "id": 46,
        "value": "0"
      },
      {
        "id": 94,
        "value": "1"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 190,
        "value": "\u2014"
      },
      {
        "id": 86,
        "value": "1"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 166,
        "value": "2"
      },
      {
        "id": 78,
        "value": "1"
      },
      {
        "id": 246,
        "value": "\u2014"
      },
      {
        "id": 70,
        "value": "1"
      },
      {
        "id": 134,
        "value": "\u2014"
      },
      {
        "id": 286,
        "value": "\u2014"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 126,
        "value": "\u2014"
      },
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 118,
        "value": "\u2014"
      },
      {
        "id": 38,
        "value": "\u2014"
      },
      {
        "id": 206,
        "value": "\u2014"
      },
      {
        "id": 62,
        "value": "0"
      },
      {
        "id": 270,
        "value": "\u2014"
      },
      {
        "id": 262,
        "value": "0"
      },
      {
        "id": 54,
        "value": "0"
      },
      {
        "id": 142,
        "value": "\u2014"
      },
      {
        "id": 198,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "4"
      },
      {
        "id": 30,
        "value": "\u2014"
      }
    ],
    "k": [
      {
        "id": 71,
        "value": "3"
      },
      {
        "id": 47,
        "value": "2"
      },
      {
        "id": 159,
        "value": "1"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 199,
        "value": "\u2014"
      },
      {
        "id": 271,
        "value": "\u2014"
      },
      {
        "id": 95,
        "value": "6"
      },
      {
        "id": 279,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "\u2014"
      },
      {
        "id": 31,
        "value": "1"
      },
      {
        "id": 263,
        "value": "0"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "2"
      },
      {
        "id": 63,
        "value": "2"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 15,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "3"
      },
      {
        "id": 39,
        "value": "\u2014"
      },
      {
        "id": 295,
        "value": "\u2014"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "5"
      },
      {
        "id": 183,
        "value": "4"
      },
      {
        "id": 223,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "5"
      },
      {
        "id": 167,
        "value": "2"
      },
      {
        "id": 135,
        "value": "\u2014"
      },
      {
        "id": 151,
        "value": "0"
      },
      {
        "id": 79,
        "value": "4"
      },
      {
        "id": 255,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "\u2014"
      },
      {
        "id": 247,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      }
    ],
    "merged": [
      {
        "id": 48,
        "value": "true"
      },
      {
        "id": 240,
        "value": "false"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 296,
        "value": "false"
      },
      {
        "id": 112,
        "value": "true"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 144,
        "value": "false"
      },
      {
        "id": 216,
        "value": "true"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 24,
        "value": "false"
      },
      {
        "id": 272,
        "value": "true"
      },
      {
        "id": 184,
        "value": "false"
      },
      {
        "id": 232,
        "value": "false"
      },
      {
        "id": 264,
        "value": "false"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 72,
        "value": "true"
      },
      {
        "id": 128,
        "value": "\u2014"
      },
      {
        "id": 176,
        "value": "false"
      },
      {
        "id": 288,
        "value": "false"
      },
      {
        "id": 168,
        "value": "false"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 256,
        "value": "false"
      },
      {
        "id": 280,
        "value": "false"
      },
      {
        "id": 32,
        "value": "false"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 192,
        "value": "false"
      },
      {
        "id": 40,
        "value": "true"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 80,
        "value": "true"
      },
      {
        "id": 248,
        "value": "false"
      },
      {
        "id": 152,
        "value": "false"
      },
      {
        "id": 160,
        "value": "false"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 136,
        "value": "false"
      },
      {
        "id": 224,
        "value": "\u2014"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "repeatPass",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 2,
      "stepId": "initScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
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
      "step": 3,
      "stepId": "whileScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 4,
      "stepId": "setLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 5,
      "stepId": "extendLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 6,
      "stepId": "setMid",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 7,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 8,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 9,
      "stepId": "extendRight",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 10,
      "stepId": "setRight",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 11,
      "stepId": "callMerge",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 12,
      "stepId": "copyRuns",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
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
      "step": 13,
      "stepId": "initMergePointers",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 14,
      "stepId": "whileBoth",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
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
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 16,
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        596,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 17,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        596,
        596,
        145,
        164,
        323,
        54,
        489,
        27
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
      "stepId": "drainLeft",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        596,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 19,
      "stepId": "setMergedTrue",
      "n": 8,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 20,
      "stepId": "advanceAfterMerge",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 21,
      "stepId": "setLeft",
      "n": 8,
      "left": 2,
      "mid": null,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 22,
      "stepId": "extendLeft",
      "n": 8,
      "left": 2,
      "mid": null,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 23,
      "stepId": "setMid",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 24,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 25,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 26,
      "stepId": "extendRight",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 5,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 27,
      "stepId": "setRight",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 28,
      "stepId": "callMerge",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
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
      "step": 29,
      "stepId": "copyRuns",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 30,
      "stepId": "initMergePointers",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 31,
      "stepId": "whileBoth",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
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
      "step": 32,
      "stepId": "compareMerge",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
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
      "stepId": "takeRight",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
      "array": [
        596,
        695,
        54,
        164,
        323,
        54,
        489,
        27
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
      "step": 34,
      "stepId": "incK",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 3,
      "merged": true,
      "array": [
        596,
        695,
        54,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 35,
      "stepId": "compareMerge",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 3,
      "merged": true,
      "array": [
        596,
        695,
        54,
        164,
        323,
        54,
        489,
        27
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
      "stepId": "takeLeft",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 3,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 37,
      "stepId": "incK",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 1,
      "j": 1,
      "k": 4,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        323,
        54,
        489,
        27
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
      "stepId": "compareMerge",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 1,
      "j": 1,
      "k": 4,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 39,
      "stepId": "takeLeft",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 1,
      "j": 1,
      "k": 4,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        54,
        489,
        27
      ]
    },
    {
      "step": 40,
      "stepId": "incK",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 5,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        54,
        489,
        27
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
      "stepId": "compareMerge",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 5,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        54,
        489,
        27
      ]
    },
    {
      "step": 42,
      "stepId": "takeLeft",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 5,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 43,
      "stepId": "incK",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": null,
      "j": 1,
      "k": 6,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "step": 44,
      "stepId": "drainRight",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": null,
      "j": 1,
      "k": 6,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 45,
      "stepId": "setMergedTrue",
      "n": 8,
      "left": 2,
      "mid": 4,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 46,
      "stepId": "advanceAfterMerge",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 47,
      "stepId": "setLeft",
      "n": 8,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 48,
      "stepId": "extendLeft",
      "n": 8,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 49,
      "stepId": "setMid",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 50,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "step": 51,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "step": 52,
      "stepId": "breakOddRun",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 53,
      "stepId": "checkUntil",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "stepId": "repeatPass",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "step": 55,
      "stepId": "initScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 56,
      "stepId": "whileScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 57,
      "stepId": "setLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "stepId": "extendLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 59,
      "stepId": "setMid",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 60,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 61,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 62,
      "stepId": "extendRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 63,
      "stepId": "setRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 64,
      "stepId": "callMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "stepId": "copyRuns",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 66,
      "stepId": "initMergePointers",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 67,
      "stepId": "whileBoth",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 68,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        596,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        54,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 70,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        54,
        695,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 71,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        54,
        695,
        54,
        145,
        164,
        323,
        489,
        27
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
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        54,
        145,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 73,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        54,
        145,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 74,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        54,
        145,
        54,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 75,
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        54,
        145,
        164,
        145,
        164,
        323,
        489,
        27
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
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 3,
      "k": 3,
      "merged": false,
      "array": [
        54,
        145,
        164,
        145,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 77,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 3,
      "k": 3,
      "merged": false,
      "array": [
        54,
        145,
        164,
        145,
        164,
        323,
        489,
        27
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
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 3,
      "k": 3,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 79,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 4,
      "k": 4,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        164,
        323,
        489,
        27
      ]
    },
    {
      "step": 80,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 4,
      "k": 4,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        164,
        323,
        489,
        27
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
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": 4,
      "k": 4,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        323,
        489,
        27
      ]
    },
    {
      "step": 82,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 5,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        323,
        489,
        27
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
      "stepId": "drainLeft",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 5,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        323,
        489,
        27
      ]
    },
    {
      "step": 84,
      "stepId": "setMergedTrue",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 85,
      "stepId": "advanceAfterMerge",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "stepId": "setLeft",
      "n": 8,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "step": 87,
      "stepId": "extendLeft",
      "n": 8,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "stepId": "setMid",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 89,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 90,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 91,
      "stepId": "breakOddRun",
      "n": 8,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 92,
      "stepId": "checkUntil",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 93,
      "stepId": "repeatPass",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "stepId": "initScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 95,
      "stepId": "whileScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "stepId": "setLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "step": 97,
      "stepId": "extendLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 98,
      "stepId": "setMid",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 99,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 100,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "step": 101,
      "stepId": "extendRight",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 102,
      "stepId": "setRight",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 103,
      "stepId": "callMerge",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "step": 104,
      "stepId": "copyRuns",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 105,
      "stepId": "initMergePointers",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 106,
      "stepId": "whileBoth",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
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
      "step": 107,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        54,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 108,
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        27,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 109,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        27,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 110,
      "stepId": "drainLeft",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        27,
        145,
        164,
        323,
        489,
        596,
        695,
        27
      ]
    },
    {
      "step": 111,
      "stepId": "setMergedTrue",
      "n": 8,
      "left": 0,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 112,
      "stepId": "advanceAfterMerge",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 113,
      "stepId": "checkUntil",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
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
      "step": 114,
      "stepId": "repeatPass",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 115,
      "stepId": "initScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 116,
      "stepId": "whileScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 117,
      "stepId": "setLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 118,
      "stepId": "extendLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
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
      "stepId": "setMid",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
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
      "stepId": "advancePastMid",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 121,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
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
      "stepId": "breakOddRun",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 123,
      "stepId": "checkUntil",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
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
    reset();
    refreshSectionTabs();
    renderChips();
    closePanel();
    updateStats();
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
