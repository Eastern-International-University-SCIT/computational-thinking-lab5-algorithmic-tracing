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
    "low",
    "high",
    "i",
    "j",
    "pivot",
    "pi"
  ],
  "blankFields": [
    "stepId",
    "low",
    "high",
    "i",
    "j",
    "pivot",
    "pi"
  ],
  "executorGlobal": "QuickSortExecutor",
  "pickedSteps": [
    2,
    10,
    12,
    15,
    17,
    21,
    22,
    23,
    28,
    29,
    30,
    33,
    45,
    53,
    58,
    59,
    60,
    61,
    63,
    67,
    68,
    69,
    80,
    85,
    87,
    92,
    97,
    103,
    104,
    106,
    111,
    112,
    113,
    118,
    120,
    122,
    126,
    128,
    134,
    135,
    138,
    141,
    142,
    143,
    144,
    147,
    153,
    154,
    158,
    159,
    166,
    173,
    174,
    175
  ],
  "answers": {
    "2": {
      "stepId": "markRange",
      "low": "0",
      "high": "13",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "10": {
      "stepId": "incI",
      "low": "0",
      "high": "13",
      "i": "0",
      "j": "1",
      "pivot": "692",
      "pi": "\u2014"
    },
    "12": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "0",
      "j": "2",
      "pivot": "692",
      "pi": "\u2014"
    },
    "15": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "1",
      "j": "3",
      "pivot": "692",
      "pi": "\u2014"
    },
    "17": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "13",
      "i": "2",
      "j": "3",
      "pivot": "692",
      "pi": "\u2014"
    },
    "21": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "3",
      "j": "5",
      "pivot": "692",
      "pi": "\u2014"
    },
    "22": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "3",
      "j": "6",
      "pivot": "692",
      "pi": "\u2014"
    },
    "23": {
      "stepId": "incI",
      "low": "0",
      "high": "13",
      "i": "4",
      "j": "6",
      "pivot": "692",
      "pi": "\u2014"
    },
    "28": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "5",
      "j": "8",
      "pivot": "692",
      "pi": "\u2014"
    },
    "29": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "5",
      "j": "9",
      "pivot": "692",
      "pi": "\u2014"
    },
    "30": {
      "stepId": "incI",
      "low": "0",
      "high": "13",
      "i": "6",
      "j": "9",
      "pivot": "692",
      "pi": "\u2014"
    },
    "33": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "6",
      "j": "11",
      "pivot": "692",
      "pi": "\u2014"
    },
    "45": {
      "stepId": "setPivot",
      "low": "0",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "199",
      "pi": "\u2014"
    },
    "53": {
      "stepId": "compare",
      "low": "0",
      "high": "8",
      "i": "0",
      "j": "3",
      "pivot": "199",
      "pi": "\u2014"
    },
    "58": {
      "stepId": "incI",
      "low": "0",
      "high": "8",
      "i": "2",
      "j": "5",
      "pivot": "199",
      "pi": "\u2014"
    },
    "59": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "8",
      "i": "2",
      "j": "5",
      "pivot": "199",
      "pi": "\u2014"
    },
    "60": {
      "stepId": "compare",
      "low": "0",
      "high": "8",
      "i": "2",
      "j": "6",
      "pivot": "199",
      "pi": "\u2014"
    },
    "61": {
      "stepId": "incI",
      "low": "0",
      "high": "8",
      "i": "3",
      "j": "6",
      "pivot": "199",
      "pi": "\u2014"
    },
    "63": {
      "stepId": "compare",
      "low": "0",
      "high": "8",
      "i": "3",
      "j": "7",
      "pivot": "199",
      "pi": "\u2014"
    },
    "67": {
      "stepId": "markRange",
      "low": "0",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "68": {
      "stepId": "checkLowHigh",
      "low": "0",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "69": {
      "stepId": "callPartition",
      "low": "0",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "80": {
      "stepId": "checkLowHigh",
      "low": "0",
      "high": "-1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "85": {
      "stepId": "setPivot",
      "low": "1",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "151",
      "pi": "\u2014"
    },
    "87": {
      "stepId": "forJ",
      "low": "1",
      "high": "3",
      "i": "0",
      "j": "1",
      "pivot": "151",
      "pi": "\u2014"
    },
    "92": {
      "stepId": "swapPivot",
      "low": "1",
      "high": "3",
      "i": "1",
      "j": "\u2014",
      "pivot": "151",
      "pi": "2"
    },
    "97": {
      "stepId": "sortRight",
      "low": "1",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "2"
    },
    "103": {
      "stepId": "callPartition",
      "low": "5",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "104": {
      "stepId": "setPivot",
      "low": "5",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "213",
      "pi": "\u2014"
    },
    "106": {
      "stepId": "forJ",
      "low": "5",
      "high": "8",
      "i": "4",
      "j": "5",
      "pivot": "213",
      "pi": "\u2014"
    },
    "111": {
      "stepId": "returnPi",
      "low": "5",
      "high": "8",
      "i": "4",
      "j": "\u2014",
      "pivot": "213",
      "pi": "5"
    },
    "112": {
      "stepId": "sortLeft",
      "low": "5",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "5"
    },
    "113": {
      "stepId": "markRange",
      "low": "5",
      "high": "4",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "118": {
      "stepId": "callPartition",
      "low": "6",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "120": {
      "stepId": "initI",
      "low": "6",
      "high": "8",
      "i": "5",
      "j": "\u2014",
      "pivot": "218",
      "pi": "\u2014"
    },
    "122": {
      "stepId": "compare",
      "low": "6",
      "high": "8",
      "i": "5",
      "j": "6",
      "pivot": "218",
      "pi": "\u2014"
    },
    "126": {
      "stepId": "sortLeft",
      "low": "6",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "6"
    },
    "128": {
      "stepId": "checkLowHigh",
      "low": "6",
      "high": "5",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "134": {
      "stepId": "initI",
      "low": "7",
      "high": "8",
      "i": "6",
      "j": "\u2014",
      "pivot": "251",
      "pi": "\u2014"
    },
    "135": {
      "stepId": "forJ",
      "low": "7",
      "high": "8",
      "i": "6",
      "j": "7",
      "pivot": "251",
      "pi": "\u2014"
    },
    "138": {
      "stepId": "returnPi",
      "low": "7",
      "high": "8",
      "i": "6",
      "j": "\u2014",
      "pivot": "251",
      "pi": "7"
    },
    "141": {
      "stepId": "checkLowHigh",
      "low": "7",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "142": {
      "stepId": "sortRight",
      "low": "7",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "7"
    },
    "143": {
      "stepId": "markRange",
      "low": "8",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "144": {
      "stepId": "checkLowHigh",
      "low": "8",
      "high": "8",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "147": {
      "stepId": "checkLowHigh",
      "low": "10",
      "high": "13",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "153": {
      "stepId": "incI",
      "low": "10",
      "high": "13",
      "i": "10",
      "j": "10",
      "pivot": "980",
      "pi": "\u2014"
    },
    "154": {
      "stepId": "swapIJ",
      "low": "10",
      "high": "13",
      "i": "10",
      "j": "10",
      "pivot": "980",
      "pi": "\u2014"
    },
    "158": {
      "stepId": "swapIJ",
      "low": "10",
      "high": "13",
      "i": "11",
      "j": "12",
      "pivot": "980",
      "pi": "\u2014"
    },
    "159": {
      "stepId": "swapPivot",
      "low": "10",
      "high": "13",
      "i": "11",
      "j": "\u2014",
      "pivot": "980",
      "pi": "12"
    },
    "166": {
      "stepId": "initI",
      "low": "10",
      "high": "11",
      "i": "9",
      "j": "\u2014",
      "pivot": "874",
      "pi": "\u2014"
    },
    "173": {
      "stepId": "checkLowHigh",
      "low": "10",
      "high": "9",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "174": {
      "stepId": "sortRight",
      "low": "10",
      "high": "11",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "10"
    },
    "175": {
      "stepId": "markRange",
      "low": "11",
      "high": "11",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 337,
        "value": "swapIJ"
      },
      {
        "id": 162,
        "value": "setPivot"
      },
      {
        "id": 50,
        "value": "incI"
      },
      {
        "id": 372,
        "value": "markRange"
      },
      {
        "id": 1,
        "value": "markRange"
      },
      {
        "id": 148,
        "value": "callPartition"
      },
      {
        "id": 183,
        "value": "sortRight"
      },
      {
        "id": 134,
        "value": "markRange"
      },
      {
        "id": 43,
        "value": "compare"
      },
      {
        "id": 78,
        "value": "compare"
      },
      {
        "id": 190,
        "value": "callPartition"
      },
      {
        "id": 155,
        "value": "checkLowHigh"
      },
      {
        "id": 225,
        "value": "markRange"
      },
      {
        "id": 365,
        "value": "sortRight"
      },
      {
        "id": 281,
        "value": "returnPi"
      },
      {
        "id": 288,
        "value": "checkLowHigh"
      },
      {
        "id": 120,
        "value": "incI"
      },
      {
        "id": 232,
        "value": "callPartition"
      },
      {
        "id": 344,
        "value": "swapPivot"
      },
      {
        "id": 239,
        "value": "initI"
      },
      {
        "id": 295,
        "value": "sortRight"
      },
      {
        "id": 309,
        "value": "checkLowHigh"
      },
      {
        "id": 176,
        "value": "swapPivot"
      },
      {
        "id": 22,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "setPivot"
      },
      {
        "id": 351,
        "value": "initI"
      },
      {
        "id": 99,
        "value": "incI"
      },
      {
        "id": 92,
        "value": "compare"
      },
      {
        "id": 253,
        "value": "sortLeft"
      },
      {
        "id": 218,
        "value": "sortLeft"
      },
      {
        "id": 15,
        "value": "compare"
      },
      {
        "id": 36,
        "value": "compare"
      },
      {
        "id": 274,
        "value": "forJ"
      },
      {
        "id": 358,
        "value": "checkLowHigh"
      },
      {
        "id": 197,
        "value": "setPivot"
      },
      {
        "id": 29,
        "value": "swapIJ"
      },
      {
        "id": 141,
        "value": "checkLowHigh"
      },
      {
        "id": 302,
        "value": "markRange"
      },
      {
        "id": 169,
        "value": "forJ"
      },
      {
        "id": 246,
        "value": "compare"
      },
      {
        "id": 8,
        "value": "incI"
      },
      {
        "id": 127,
        "value": "compare"
      },
      {
        "id": 267,
        "value": "initI"
      },
      {
        "id": 323,
        "value": "incI"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 211,
        "value": "returnPi"
      },
      {
        "id": 316,
        "value": "checkLowHigh"
      },
      {
        "id": 113,
        "value": "compare"
      },
      {
        "id": 260,
        "value": "checkLowHigh"
      },
      {
        "id": 71,
        "value": "incI"
      },
      {
        "id": 330,
        "value": "swapIJ"
      },
      {
        "id": 106,
        "value": "swapIJ"
      },
      {
        "id": 204,
        "value": "forJ"
      },
      {
        "id": 64,
        "value": "compare"
      }
    ],
    "low": [
      {
        "id": 268,
        "value": "7"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 198,
        "value": "5"
      },
      {
        "id": 247,
        "value": "6"
      },
      {
        "id": 100,
        "value": "0"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 352,
        "value": "10"
      },
      {
        "id": 240,
        "value": "6"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 142,
        "value": "0"
      },
      {
        "id": 296,
        "value": "7"
      },
      {
        "id": 345,
        "value": "10"
      },
      {
        "id": 275,
        "value": "7"
      },
      {
        "id": 65,
        "value": "0"
      },
      {
        "id": 289,
        "value": "7"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 86,
        "value": "0"
      },
      {
        "id": 331,
        "value": "10"
      },
      {
        "id": 135,
        "value": "0"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 121,
        "value": "0"
      },
      {
        "id": 310,
        "value": "8"
      },
      {
        "id": 205,
        "value": "5"
      },
      {
        "id": 233,
        "value": "6"
      },
      {
        "id": 261,
        "value": "6"
      },
      {
        "id": 254,
        "value": "6"
      },
      {
        "id": 359,
        "value": "10"
      },
      {
        "id": 338,
        "value": "10"
      },
      {
        "id": 128,
        "value": "0"
      },
      {
        "id": 366,
        "value": "10"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 212,
        "value": "5"
      },
      {
        "id": 51,
        "value": "0"
      },
      {
        "id": 373,
        "value": "11"
      },
      {
        "id": 177,
        "value": "1"
      },
      {
        "id": 317,
        "value": "10"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 114,
        "value": "0"
      },
      {
        "id": 156,
        "value": "0"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 93,
        "value": "0"
      },
      {
        "id": 226,
        "value": "5"
      },
      {
        "id": 184,
        "value": "1"
      },
      {
        "id": 282,
        "value": "7"
      },
      {
        "id": 191,
        "value": "5"
      },
      {
        "id": 163,
        "value": "1"
      },
      {
        "id": 170,
        "value": "1"
      },
      {
        "id": 303,
        "value": "8"
      },
      {
        "id": 324,
        "value": "10"
      },
      {
        "id": 219,
        "value": "5"
      },
      {
        "id": 149,
        "value": "0"
      }
    ],
    "high": [
      {
        "id": 248,
        "value": "8"
      },
      {
        "id": 136,
        "value": "3"
      },
      {
        "id": 38,
        "value": "13"
      },
      {
        "id": 24,
        "value": "13"
      },
      {
        "id": 241,
        "value": "8"
      },
      {
        "id": 213,
        "value": "8"
      },
      {
        "id": 360,
        "value": "9"
      },
      {
        "id": 171,
        "value": "3"
      },
      {
        "id": 367,
        "value": "11"
      },
      {
        "id": 80,
        "value": "13"
      },
      {
        "id": 178,
        "value": "3"
      },
      {
        "id": 157,
        "value": "-1"
      },
      {
        "id": 185,
        "value": "3"
      },
      {
        "id": 94,
        "value": "8"
      },
      {
        "id": 45,
        "value": "13"
      },
      {
        "id": 346,
        "value": "13"
      },
      {
        "id": 143,
        "value": "3"
      },
      {
        "id": 150,
        "value": "3"
      },
      {
        "id": 325,
        "value": "13"
      },
      {
        "id": 283,
        "value": "8"
      },
      {
        "id": 206,
        "value": "8"
      },
      {
        "id": 3,
        "value": "13"
      },
      {
        "id": 255,
        "value": "8"
      },
      {
        "id": 52,
        "value": "13"
      },
      {
        "id": 66,
        "value": "13"
      },
      {
        "id": 227,
        "value": "4"
      },
      {
        "id": 339,
        "value": "13"
      },
      {
        "id": 122,
        "value": "8"
      },
      {
        "id": 73,
        "value": "13"
      },
      {
        "id": 276,
        "value": "8"
      },
      {
        "id": 192,
        "value": "8"
      },
      {
        "id": 311,
        "value": "8"
      },
      {
        "id": 374,
        "value": "11"
      },
      {
        "id": 290,
        "value": "6"
      },
      {
        "id": 332,
        "value": "13"
      },
      {
        "id": 115,
        "value": "8"
      },
      {
        "id": 87,
        "value": "8"
      },
      {
        "id": 17,
        "value": "13"
      },
      {
        "id": 297,
        "value": "8"
      },
      {
        "id": 269,
        "value": "8"
      },
      {
        "id": 234,
        "value": "8"
      },
      {
        "id": 101,
        "value": "8"
      },
      {
        "id": 304,
        "value": "8"
      },
      {
        "id": 10,
        "value": "13"
      },
      {
        "id": 220,
        "value": "8"
      },
      {
        "id": 199,
        "value": "8"
      },
      {
        "id": 353,
        "value": "11"
      },
      {
        "id": 129,
        "value": "8"
      },
      {
        "id": 31,
        "value": "13"
      },
      {
        "id": 59,
        "value": "13"
      },
      {
        "id": 108,
        "value": "8"
      },
      {
        "id": 262,
        "value": "5"
      },
      {
        "id": 318,
        "value": "13"
      },
      {
        "id": 164,
        "value": "3"
      }
    ],
    "i": [
      {
        "id": 200,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "4"
      },
      {
        "id": 214,
        "value": "4"
      },
      {
        "id": 186,
        "value": "\u2014"
      },
      {
        "id": 74,
        "value": "6"
      },
      {
        "id": 326,
        "value": "10"
      },
      {
        "id": 333,
        "value": "10"
      },
      {
        "id": 340,
        "value": "11"
      },
      {
        "id": 361,
        "value": "\u2014"
      },
      {
        "id": 256,
        "value": "\u2014"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 81,
        "value": "6"
      },
      {
        "id": 277,
        "value": "6"
      },
      {
        "id": 137,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "5"
      },
      {
        "id": 298,
        "value": "\u2014"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 291,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "\u2014"
      },
      {
        "id": 102,
        "value": "2"
      },
      {
        "id": 249,
        "value": "5"
      },
      {
        "id": 95,
        "value": "0"
      },
      {
        "id": 25,
        "value": "1"
      },
      {
        "id": 32,
        "value": "2"
      },
      {
        "id": 46,
        "value": "3"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 375,
        "value": "\u2014"
      },
      {
        "id": 116,
        "value": "2"
      },
      {
        "id": 319,
        "value": "\u2014"
      },
      {
        "id": 284,
        "value": "6"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 228,
        "value": "\u2014"
      },
      {
        "id": 53,
        "value": "4"
      },
      {
        "id": 242,
        "value": "5"
      },
      {
        "id": 11,
        "value": "0"
      },
      {
        "id": 312,
        "value": "\u2014"
      },
      {
        "id": 368,
        "value": "\u2014"
      },
      {
        "id": 305,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "3"
      },
      {
        "id": 221,
        "value": "\u2014"
      },
      {
        "id": 179,
        "value": "1"
      },
      {
        "id": 172,
        "value": "0"
      },
      {
        "id": 88,
        "value": "\u2014"
      },
      {
        "id": 347,
        "value": "11"
      },
      {
        "id": 165,
        "value": "\u2014"
      },
      {
        "id": 354,
        "value": "9"
      },
      {
        "id": 270,
        "value": "6"
      },
      {
        "id": 60,
        "value": "5"
      },
      {
        "id": 123,
        "value": "3"
      },
      {
        "id": 109,
        "value": "2"
      },
      {
        "id": 193,
        "value": "\u2014"
      },
      {
        "id": 130,
        "value": "3"
      },
      {
        "id": 144,
        "value": "\u2014"
      }
    ],
    "j": [
      {
        "id": 33,
        "value": "3"
      },
      {
        "id": 285,
        "value": "\u2014"
      },
      {
        "id": 299,
        "value": "\u2014"
      },
      {
        "id": 82,
        "value": "11"
      },
      {
        "id": 131,
        "value": "7"
      },
      {
        "id": 348,
        "value": "\u2014"
      },
      {
        "id": 180,
        "value": "\u2014"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 68,
        "value": "9"
      },
      {
        "id": 75,
        "value": "9"
      },
      {
        "id": 271,
        "value": "\u2014"
      },
      {
        "id": 201,
        "value": "\u2014"
      },
      {
        "id": 369,
        "value": "\u2014"
      },
      {
        "id": 327,
        "value": "10"
      },
      {
        "id": 264,
        "value": "\u2014"
      },
      {
        "id": 306,
        "value": "\u2014"
      },
      {
        "id": 61,
        "value": "8"
      },
      {
        "id": 278,
        "value": "7"
      },
      {
        "id": 89,
        "value": "\u2014"
      },
      {
        "id": 320,
        "value": "\u2014"
      },
      {
        "id": 19,
        "value": "2"
      },
      {
        "id": 54,
        "value": "6"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 341,
        "value": "12"
      },
      {
        "id": 5,
        "value": "\u2014"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 355,
        "value": "\u2014"
      },
      {
        "id": 145,
        "value": "\u2014"
      },
      {
        "id": 376,
        "value": "\u2014"
      },
      {
        "id": 208,
        "value": "5"
      },
      {
        "id": 117,
        "value": "6"
      },
      {
        "id": 187,
        "value": "\u2014"
      },
      {
        "id": 292,
        "value": "\u2014"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 313,
        "value": "\u2014"
      },
      {
        "id": 26,
        "value": "3"
      },
      {
        "id": 96,
        "value": "3"
      },
      {
        "id": 40,
        "value": "5"
      },
      {
        "id": 47,
        "value": "6"
      },
      {
        "id": 124,
        "value": "6"
      },
      {
        "id": 138,
        "value": "\u2014"
      },
      {
        "id": 250,
        "value": "6"
      },
      {
        "id": 152,
        "value": "\u2014"
      },
      {
        "id": 229,
        "value": "\u2014"
      },
      {
        "id": 334,
        "value": "10"
      },
      {
        "id": 362,
        "value": "\u2014"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 12,
        "value": "1"
      },
      {
        "id": 173,
        "value": "1"
      },
      {
        "id": 257,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "5"
      },
      {
        "id": 110,
        "value": "5"
      },
      {
        "id": 236,
        "value": "\u2014"
      }
    ],
    "pivot": [
      {
        "id": 146,
        "value": "\u2014"
      },
      {
        "id": 97,
        "value": "199"
      },
      {
        "id": 188,
        "value": "\u2014"
      },
      {
        "id": 258,
        "value": "\u2014"
      },
      {
        "id": 167,
        "value": "151"
      },
      {
        "id": 370,
        "value": "\u2014"
      },
      {
        "id": 321,
        "value": "\u2014"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 293,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "692"
      },
      {
        "id": 265,
        "value": "\u2014"
      },
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 237,
        "value": "\u2014"
      },
      {
        "id": 139,
        "value": "\u2014"
      },
      {
        "id": 209,
        "value": "213"
      },
      {
        "id": 118,
        "value": "199"
      },
      {
        "id": 83,
        "value": "692"
      },
      {
        "id": 223,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 153,
        "value": "\u2014"
      },
      {
        "id": 34,
        "value": "692"
      },
      {
        "id": 41,
        "value": "692"
      },
      {
        "id": 300,
        "value": "\u2014"
      },
      {
        "id": 377,
        "value": "\u2014"
      },
      {
        "id": 104,
        "value": "199"
      },
      {
        "id": 69,
        "value": "692"
      },
      {
        "id": 349,
        "value": "980"
      },
      {
        "id": 251,
        "value": "218"
      },
      {
        "id": 125,
        "value": "199"
      },
      {
        "id": 272,
        "value": "251"
      },
      {
        "id": 76,
        "value": "692"
      },
      {
        "id": 62,
        "value": "692"
      },
      {
        "id": 335,
        "value": "980"
      },
      {
        "id": 202,
        "value": "213"
      },
      {
        "id": 13,
        "value": "692"
      },
      {
        "id": 111,
        "value": "199"
      },
      {
        "id": 328,
        "value": "980"
      },
      {
        "id": 216,
        "value": "213"
      },
      {
        "id": 342,
        "value": "980"
      },
      {
        "id": 132,
        "value": "199"
      },
      {
        "id": 279,
        "value": "251"
      },
      {
        "id": 286,
        "value": "251"
      },
      {
        "id": 160,
        "value": "\u2014"
      },
      {
        "id": 363,
        "value": "\u2014"
      },
      {
        "id": 307,
        "value": "\u2014"
      },
      {
        "id": 244,
        "value": "218"
      },
      {
        "id": 90,
        "value": "199"
      },
      {
        "id": 174,
        "value": "151"
      },
      {
        "id": 356,
        "value": "874"
      },
      {
        "id": 48,
        "value": "692"
      },
      {
        "id": 181,
        "value": "151"
      },
      {
        "id": 20,
        "value": "692"
      },
      {
        "id": 314,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "692"
      }
    ],
    "pi": [
      {
        "id": 189,
        "value": "2"
      },
      {
        "id": 154,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 378,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "\u2014"
      },
      {
        "id": 56,
        "value": "\u2014"
      },
      {
        "id": 112,
        "value": "\u2014"
      },
      {
        "id": 322,
        "value": "\u2014"
      },
      {
        "id": 266,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 77,
        "value": "\u2014"
      },
      {
        "id": 224,
        "value": "5"
      },
      {
        "id": 168,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 133,
        "value": "\u2014"
      },
      {
        "id": 329,
        "value": "\u2014"
      },
      {
        "id": 259,
        "value": "6"
      },
      {
        "id": 350,
        "value": "12"
      },
      {
        "id": 273,
        "value": "\u2014"
      },
      {
        "id": 308,
        "value": "\u2014"
      },
      {
        "id": 287,
        "value": "7"
      },
      {
        "id": 364,
        "value": "\u2014"
      },
      {
        "id": 301,
        "value": "7"
      },
      {
        "id": 105,
        "value": "\u2014"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 371,
        "value": "10"
      },
      {
        "id": 98,
        "value": "\u2014"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 217,
        "value": "5"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 343,
        "value": "\u2014"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 210,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "\u2014"
      },
      {
        "id": 196,
        "value": "\u2014"
      },
      {
        "id": 280,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "2"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 245,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "\u2014"
      },
      {
        "id": 21,
        "value": "\u2014"
      },
      {
        "id": 161,
        "value": "\u2014"
      },
      {
        "id": 315,
        "value": "\u2014"
      },
      {
        "id": 357,
        "value": "\u2014"
      },
      {
        "id": 126,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 336,
        "value": "\u2014"
      },
      {
        "id": 49,
        "value": "\u2014"
      },
      {
        "id": 42,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 252,
        "value": "\u2014"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
      "stepId": "markRange",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 3,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
      "stepId": "callPartition",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
      "stepId": "setPivot",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": 692,
      "pi": null,
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
      "step": 6,
      "stepId": "initI",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": null,
      "pivot": 692,
      "pi": null,
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
      "step": 7,
      "stepId": "forJ",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 0,
      "pivot": 692,
      "pi": null,
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
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 0,
      "pivot": 692,
      "pi": null,
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
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 1,
      "pivot": 692,
      "pi": null,
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
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 1,
      "pivot": 692,
      "pi": null,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 11,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 1,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        980,
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
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 2,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        980,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 13,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 1,
      "j": 2,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        980,
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
      "step": 14,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 1,
      "j": 2,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        980,
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
      "step": 15,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 1,
      "j": 3,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        980,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 16,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 2,
      "j": 3,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        980,
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 2,
      "j": 3,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        980,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 18,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 2,
      "j": 4,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        980,
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
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": 4,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        980,
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": 4,
      "pivot": 692,
      "pi": null,
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
      "step": 21,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": 5,
      "pivot": 692,
      "pi": null,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 22,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": 6,
      "pivot": 692,
      "pi": null,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 23,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 4,
      "j": 6,
      "pivot": 692,
      "pi": null,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 24,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 4,
      "j": 6,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        983,
        980,
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
      "step": 25,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 4,
      "j": 7,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        983,
        980,
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
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 5,
      "j": 7,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        983,
        980,
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 5,
      "j": 7,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        980,
        983,
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
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 5,
      "j": 8,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        980,
        983,
        874,
        20,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 29,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 5,
      "j": 9,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        980,
        983,
        874,
        20,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 30,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 6,
      "j": 9,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        980,
        983,
        874,
        20,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 31,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 6,
      "j": 9,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        983,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 32,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 6,
      "j": 10,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        983,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 33,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 6,
      "j": 11,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        983,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 34,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 7,
      "j": 11,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        983,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 35,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 7,
      "j": 11,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        874,
        980,
        947,
        983,
        199,
        692
      ]
    },
    {
      "step": 36,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 7,
      "j": 12,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        874,
        980,
        947,
        983,
        199,
        692
      ]
    },
    {
      "step": 37,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 8,
      "j": 12,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        874,
        980,
        947,
        983,
        199,
        692
      ]
    },
    {
      "step": 38,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 8,
      "j": 12,
      "pivot": 692,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        980,
        947,
        983,
        874,
        692
      ]
    },
    {
      "step": 39,
      "stepId": "swapPivot",
      "low": 0,
      "high": 13,
      "i": 8,
      "j": null,
      "pivot": 692,
      "pi": 9,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 40,
      "stepId": "returnPi",
      "low": 0,
      "high": 13,
      "i": 8,
      "j": null,
      "pivot": 692,
      "pi": 9,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 41,
      "stepId": "sortLeft",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 42,
      "stepId": "markRange",
      "low": 0,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 43,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 44,
      "stepId": "callPartition",
      "low": 0,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 45,
      "stepId": "setPivot",
      "low": 0,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 46,
      "stepId": "initI",
      "low": 0,
      "high": 8,
      "i": -1,
      "j": null,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 47,
      "stepId": "forJ",
      "low": 0,
      "high": 8,
      "i": -1,
      "j": 0,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 48,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": -1,
      "j": 0,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 49,
      "stepId": "incI",
      "low": 0,
      "high": 8,
      "i": 0,
      "j": 0,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 50,
      "stepId": "swapIJ",
      "low": 0,
      "high": 8,
      "i": 0,
      "j": 0,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 51,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": 0,
      "j": 1,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 52,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": 0,
      "j": 2,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 53,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": 0,
      "j": 3,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 54,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": 0,
      "j": 4,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 55,
      "stepId": "incI",
      "low": 0,
      "high": 8,
      "i": 1,
      "j": 4,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 56,
      "stepId": "swapIJ",
      "low": 0,
      "high": 8,
      "i": 1,
      "j": 4,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        218,
        251,
        213,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 57,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": 1,
      "j": 5,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        218,
        251,
        213,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 58,
      "stepId": "incI",
      "low": 0,
      "high": 8,
      "i": 2,
      "j": 5,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        218,
        251,
        213,
        192,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 59,
      "stepId": "swapIJ",
      "low": 0,
      "high": 8,
      "i": 2,
      "j": 5,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        192,
        251,
        213,
        218,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 60,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": 2,
      "j": 6,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        192,
        251,
        213,
        218,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 61,
      "stepId": "incI",
      "low": 0,
      "high": 8,
      "i": 3,
      "j": 6,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        192,
        251,
        213,
        218,
        20,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 62,
      "stepId": "swapIJ",
      "low": 0,
      "high": 8,
      "i": 3,
      "j": 6,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        213,
        218,
        251,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 63,
      "stepId": "compare",
      "low": 0,
      "high": 8,
      "i": 3,
      "j": 7,
      "pivot": 199,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        213,
        218,
        251,
        389,
        199,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 64,
      "stepId": "swapPivot",
      "low": 0,
      "high": 8,
      "i": 3,
      "j": null,
      "pivot": 199,
      "pi": 4,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 65,
      "stepId": "returnPi",
      "low": 0,
      "high": 8,
      "i": 3,
      "j": null,
      "pivot": 199,
      "pi": 4,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 66,
      "stepId": "sortLeft",
      "low": 0,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 67,
      "stepId": "markRange",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 68,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 69,
      "stepId": "callPartition",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 70,
      "stepId": "setPivot",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": 20,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 71,
      "stepId": "initI",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": null,
      "pivot": 20,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 72,
      "stepId": "forJ",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": 0,
      "pivot": 20,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 73,
      "stepId": "compare",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": 0,
      "pivot": 20,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 74,
      "stepId": "compare",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": 1,
      "pivot": 20,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 75,
      "stepId": "compare",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": 2,
      "pivot": 20,
      "pi": null,
      "array": [
        151,
        78,
        192,
        20,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 76,
      "stepId": "swapPivot",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": null,
      "pivot": 20,
      "pi": 0,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 77,
      "stepId": "returnPi",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": null,
      "pivot": 20,
      "pi": 0,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 78,
      "stepId": "sortLeft",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 0,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 79,
      "stepId": "markRange",
      "low": 0,
      "high": -1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 80,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": -1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 81,
      "stepId": "sortRight",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 0,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 82,
      "stepId": "markRange",
      "low": 1,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 83,
      "stepId": "checkLowHigh",
      "low": 1,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 84,
      "stepId": "callPartition",
      "low": 1,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 85,
      "stepId": "setPivot",
      "low": 1,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": 151,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 86,
      "stepId": "initI",
      "low": 1,
      "high": 3,
      "i": 0,
      "j": null,
      "pivot": 151,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 87,
      "stepId": "forJ",
      "low": 1,
      "high": 3,
      "i": 0,
      "j": 1,
      "pivot": 151,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 88,
      "stepId": "compare",
      "low": 1,
      "high": 3,
      "i": 0,
      "j": 1,
      "pivot": 151,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 89,
      "stepId": "incI",
      "low": 1,
      "high": 3,
      "i": 1,
      "j": 1,
      "pivot": 151,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 90,
      "stepId": "swapIJ",
      "low": 1,
      "high": 3,
      "i": 1,
      "j": 1,
      "pivot": 151,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 91,
      "stepId": "compare",
      "low": 1,
      "high": 3,
      "i": 1,
      "j": 2,
      "pivot": 151,
      "pi": null,
      "array": [
        20,
        78,
        192,
        151,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 92,
      "stepId": "swapPivot",
      "low": 1,
      "high": 3,
      "i": 1,
      "j": null,
      "pivot": 151,
      "pi": 2,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 93,
      "stepId": "returnPi",
      "low": 1,
      "high": 3,
      "i": 1,
      "j": null,
      "pivot": 151,
      "pi": 2,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 94,
      "stepId": "sortLeft",
      "low": 1,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 95,
      "stepId": "markRange",
      "low": 1,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 96,
      "stepId": "checkLowHigh",
      "low": 1,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 97,
      "stepId": "sortRight",
      "low": 1,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 98,
      "stepId": "markRange",
      "low": 3,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 99,
      "stepId": "checkLowHigh",
      "low": 3,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 100,
      "stepId": "sortRight",
      "low": 0,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 101,
      "stepId": "markRange",
      "low": 5,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 102,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 103,
      "stepId": "callPartition",
      "low": 5,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 104,
      "stepId": "setPivot",
      "low": 5,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": 213,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 105,
      "stepId": "initI",
      "low": 5,
      "high": 8,
      "i": 4,
      "j": null,
      "pivot": 213,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 106,
      "stepId": "forJ",
      "low": 5,
      "high": 8,
      "i": 4,
      "j": 5,
      "pivot": 213,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 107,
      "stepId": "compare",
      "low": 5,
      "high": 8,
      "i": 4,
      "j": 5,
      "pivot": 213,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 108,
      "stepId": "compare",
      "low": 5,
      "high": 8,
      "i": 4,
      "j": 6,
      "pivot": 213,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 109,
      "stepId": "compare",
      "low": 5,
      "high": 8,
      "i": 4,
      "j": 7,
      "pivot": 213,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        218,
        251,
        389,
        213,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 110,
      "stepId": "swapPivot",
      "low": 5,
      "high": 8,
      "i": 4,
      "j": null,
      "pivot": 213,
      "pi": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 111,
      "stepId": "returnPi",
      "low": 5,
      "high": 8,
      "i": 4,
      "j": null,
      "pivot": 213,
      "pi": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 112,
      "stepId": "sortLeft",
      "low": 5,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 113,
      "stepId": "markRange",
      "low": 5,
      "high": 4,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 114,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 4,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 115,
      "stepId": "sortRight",
      "low": 5,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 116,
      "stepId": "markRange",
      "low": 6,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 117,
      "stepId": "checkLowHigh",
      "low": 6,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 118,
      "stepId": "callPartition",
      "low": 6,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 119,
      "stepId": "setPivot",
      "low": 6,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": 218,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 120,
      "stepId": "initI",
      "low": 6,
      "high": 8,
      "i": 5,
      "j": null,
      "pivot": 218,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 121,
      "stepId": "forJ",
      "low": 6,
      "high": 8,
      "i": 5,
      "j": 6,
      "pivot": 218,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 122,
      "stepId": "compare",
      "low": 6,
      "high": 8,
      "i": 5,
      "j": 6,
      "pivot": 218,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 123,
      "stepId": "compare",
      "low": 6,
      "high": 8,
      "i": 5,
      "j": 7,
      "pivot": 218,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        251,
        389,
        218,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 124,
      "stepId": "swapPivot",
      "low": 6,
      "high": 8,
      "i": 5,
      "j": null,
      "pivot": 218,
      "pi": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 125,
      "stepId": "returnPi",
      "low": 6,
      "high": 8,
      "i": 5,
      "j": null,
      "pivot": 218,
      "pi": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 126,
      "stepId": "sortLeft",
      "low": 6,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 127,
      "stepId": "markRange",
      "low": 6,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 128,
      "stepId": "checkLowHigh",
      "low": 6,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 129,
      "stepId": "sortRight",
      "low": 6,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 130,
      "stepId": "markRange",
      "low": 7,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 131,
      "stepId": "checkLowHigh",
      "low": 7,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 132,
      "stepId": "callPartition",
      "low": 7,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 133,
      "stepId": "setPivot",
      "low": 7,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": 251,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 134,
      "stepId": "initI",
      "low": 7,
      "high": 8,
      "i": 6,
      "j": null,
      "pivot": 251,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 135,
      "stepId": "forJ",
      "low": 7,
      "high": 8,
      "i": 6,
      "j": 7,
      "pivot": 251,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 136,
      "stepId": "compare",
      "low": 7,
      "high": 8,
      "i": 6,
      "j": 7,
      "pivot": 251,
      "pi": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        389,
        251,
        692,
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 137,
      "stepId": "swapPivot",
      "low": 7,
      "high": 8,
      "i": 6,
      "j": null,
      "pivot": 251,
      "pi": 7,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 138,
      "stepId": "returnPi",
      "low": 7,
      "high": 8,
      "i": 6,
      "j": null,
      "pivot": 251,
      "pi": 7,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 139,
      "stepId": "sortLeft",
      "low": 7,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 140,
      "stepId": "markRange",
      "low": 7,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 141,
      "stepId": "checkLowHigh",
      "low": 7,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 142,
      "stepId": "sortRight",
      "low": 7,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 143,
      "stepId": "markRange",
      "low": 8,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 144,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 145,
      "stepId": "sortRight",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 146,
      "stepId": "markRange",
      "low": 10,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 147,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 148,
      "stepId": "callPartition",
      "low": 10,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 149,
      "stepId": "setPivot",
      "low": 10,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 150,
      "stepId": "initI",
      "low": 10,
      "high": 13,
      "i": 9,
      "j": null,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 151,
      "stepId": "forJ",
      "low": 10,
      "high": 13,
      "i": 9,
      "j": 10,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 152,
      "stepId": "compare",
      "low": 10,
      "high": 13,
      "i": 9,
      "j": 10,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 153,
      "stepId": "incI",
      "low": 10,
      "high": 13,
      "i": 10,
      "j": 10,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 154,
      "stepId": "swapIJ",
      "low": 10,
      "high": 13,
      "i": 10,
      "j": 10,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 155,
      "stepId": "compare",
      "low": 10,
      "high": 13,
      "i": 10,
      "j": 11,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 156,
      "stepId": "compare",
      "low": 10,
      "high": 13,
      "i": 10,
      "j": 12,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 157,
      "stepId": "incI",
      "low": 10,
      "high": 13,
      "i": 11,
      "j": 12,
      "pivot": 980,
      "pi": null,
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
        947,
        983,
        874,
        980
      ]
    },
    {
      "step": 158,
      "stepId": "swapIJ",
      "low": 10,
      "high": 13,
      "i": 11,
      "j": 12,
      "pivot": 980,
      "pi": null,
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
        947,
        874,
        983,
        980
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 159,
      "stepId": "swapPivot",
      "low": 10,
      "high": 13,
      "i": 11,
      "j": null,
      "pivot": 980,
      "pi": 12,
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
        947,
        874,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 160,
      "stepId": "returnPi",
      "low": 10,
      "high": 13,
      "i": 11,
      "j": null,
      "pivot": 980,
      "pi": 12,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 161,
      "stepId": "sortLeft",
      "low": 10,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 12,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 162,
      "stepId": "markRange",
      "low": 10,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 163,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 164,
      "stepId": "callPartition",
      "low": 10,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 165,
      "stepId": "setPivot",
      "low": 10,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": 874,
      "pi": null,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 166,
      "stepId": "initI",
      "low": 10,
      "high": 11,
      "i": 9,
      "j": null,
      "pivot": 874,
      "pi": null,
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
        947,
        874,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 167,
      "stepId": "forJ",
      "low": 10,
      "high": 11,
      "i": 9,
      "j": 10,
      "pivot": 874,
      "pi": null,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 168,
      "stepId": "compare",
      "low": 10,
      "high": 11,
      "i": 9,
      "j": 10,
      "pivot": 874,
      "pi": null,
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
        947,
        874,
        980,
        983
      ]
    },
    {
      "step": 169,
      "stepId": "swapPivot",
      "low": 10,
      "high": 11,
      "i": 9,
      "j": null,
      "pivot": 874,
      "pi": 10,
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
      "step": 170,
      "stepId": "returnPi",
      "low": 10,
      "high": 11,
      "i": 9,
      "j": null,
      "pivot": 874,
      "pi": 10,
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
      "step": 171,
      "stepId": "sortLeft",
      "low": 10,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 10,
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
      "step": 172,
      "stepId": "markRange",
      "low": 10,
      "high": 9,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
      "step": 173,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 9,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 174,
      "stepId": "sortRight",
      "low": 10,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 10,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 175,
      "stepId": "markRange",
      "low": 11,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
        "low": true,
        "high": true,
        "i": true,
        "j": true,
        "pivot": true,
        "pi": true
      }
    },
    {
      "step": 176,
      "stepId": "checkLowHigh",
      "low": 11,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
      "step": 177,
      "stepId": "sortRight",
      "low": 10,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 12,
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
      "stepId": "markRange",
      "low": 13,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
      "step": 179,
      "stepId": "checkLowHigh",
      "low": 13,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
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
