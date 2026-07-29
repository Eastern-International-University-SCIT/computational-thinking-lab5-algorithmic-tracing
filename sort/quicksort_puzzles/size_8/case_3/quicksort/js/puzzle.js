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
    480,
    812,
    81,
    337,
    815,
    295,
    855,
    958
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
    5,
    14,
    15,
    19,
    22,
    27,
    31,
    32,
    36,
    37,
    42,
    43,
    48,
    52,
    57,
    58,
    60,
    61,
    66,
    67,
    68,
    71,
    74,
    75,
    90,
    91,
    93,
    94,
    98,
    99,
    101,
    105,
    113,
    115,
    117
  ],
  "answers": {
    "5": {
      "stepId": "setPivot",
      "low": "0",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "958",
      "pi": "\u2014"
    },
    "14": {
      "stepId": "compare",
      "low": "0",
      "high": "7",
      "i": "1",
      "j": "2",
      "pivot": "958",
      "pi": "\u2014"
    },
    "15": {
      "stepId": "incI",
      "low": "0",
      "high": "7",
      "i": "2",
      "j": "2",
      "pivot": "958",
      "pi": "\u2014"
    },
    "19": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "7",
      "i": "3",
      "j": "3",
      "pivot": "958",
      "pi": "\u2014"
    },
    "22": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "7",
      "i": "4",
      "j": "4",
      "pivot": "958",
      "pi": "\u2014"
    },
    "27": {
      "stepId": "incI",
      "low": "0",
      "high": "7",
      "i": "6",
      "j": "6",
      "pivot": "958",
      "pi": "\u2014"
    },
    "31": {
      "stepId": "sortLeft",
      "low": "0",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "7"
    },
    "32": {
      "stepId": "markRange",
      "low": "0",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "36": {
      "stepId": "initI",
      "low": "0",
      "high": "6",
      "i": "-1",
      "j": "\u2014",
      "pivot": "855",
      "pi": "\u2014"
    },
    "37": {
      "stepId": "forJ",
      "low": "0",
      "high": "6",
      "i": "-1",
      "j": "0",
      "pivot": "855",
      "pi": "\u2014"
    },
    "42": {
      "stepId": "incI",
      "low": "0",
      "high": "6",
      "i": "1",
      "j": "1",
      "pivot": "855",
      "pi": "\u2014"
    },
    "43": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "6",
      "i": "1",
      "j": "1",
      "pivot": "855",
      "pi": "\u2014"
    },
    "48": {
      "stepId": "incI",
      "low": "0",
      "high": "6",
      "i": "3",
      "j": "3",
      "pivot": "855",
      "pi": "\u2014"
    },
    "52": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "6",
      "i": "4",
      "j": "4",
      "pivot": "855",
      "pi": "\u2014"
    },
    "57": {
      "stepId": "returnPi",
      "low": "0",
      "high": "6",
      "i": "5",
      "j": "\u2014",
      "pivot": "855",
      "pi": "6"
    },
    "58": {
      "stepId": "sortLeft",
      "low": "0",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "6"
    },
    "60": {
      "stepId": "checkLowHigh",
      "low": "0",
      "high": "5",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "61": {
      "stepId": "callPartition",
      "low": "0",
      "high": "5",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "66": {
      "stepId": "compare",
      "low": "0",
      "high": "5",
      "i": "-1",
      "j": "1",
      "pivot": "295",
      "pi": "\u2014"
    },
    "67": {
      "stepId": "compare",
      "low": "0",
      "high": "5",
      "i": "-1",
      "j": "2",
      "pivot": "295",
      "pi": "\u2014"
    },
    "68": {
      "stepId": "incI",
      "low": "0",
      "high": "5",
      "i": "0",
      "j": "2",
      "pivot": "295",
      "pi": "\u2014"
    },
    "71": {
      "stepId": "compare",
      "low": "0",
      "high": "5",
      "i": "0",
      "j": "4",
      "pivot": "295",
      "pi": "\u2014"
    },
    "74": {
      "stepId": "sortLeft",
      "low": "0",
      "high": "5",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "1"
    },
    "75": {
      "stepId": "markRange",
      "low": "0",
      "high": "0",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "90": {
      "stepId": "compare",
      "low": "2",
      "high": "5",
      "i": "3",
      "j": "4",
      "pivot": "812",
      "pi": "\u2014"
    },
    "91": {
      "stepId": "swapPivot",
      "low": "2",
      "high": "5",
      "i": "3",
      "j": "\u2014",
      "pivot": "812",
      "pi": "4"
    },
    "93": {
      "stepId": "sortLeft",
      "low": "2",
      "high": "5",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "4"
    },
    "94": {
      "stepId": "markRange",
      "low": "2",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "98": {
      "stepId": "initI",
      "low": "2",
      "high": "3",
      "i": "1",
      "j": "\u2014",
      "pivot": "337",
      "pi": "\u2014"
    },
    "99": {
      "stepId": "forJ",
      "low": "2",
      "high": "3",
      "i": "1",
      "j": "2",
      "pivot": "337",
      "pi": "\u2014"
    },
    "101": {
      "stepId": "swapPivot",
      "low": "2",
      "high": "3",
      "i": "1",
      "j": "\u2014",
      "pivot": "337",
      "pi": "2"
    },
    "105": {
      "stepId": "checkLowHigh",
      "low": "2",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "113": {
      "stepId": "markRange",
      "low": "7",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "115": {
      "stepId": "sortRight",
      "low": "0",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "7"
    },
    "117": {
      "stepId": "checkLowHigh",
      "low": "8",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 204,
        "value": "forJ"
      },
      {
        "id": 29,
        "value": "swapIJ"
      },
      {
        "id": 239,
        "value": "checkLowHigh"
      },
      {
        "id": 232,
        "value": "sortRight"
      },
      {
        "id": 120,
        "value": "callPartition"
      },
      {
        "id": 141,
        "value": "incI"
      },
      {
        "id": 190,
        "value": "markRange"
      },
      {
        "id": 176,
        "value": "swapPivot"
      },
      {
        "id": 155,
        "value": "sortLeft"
      },
      {
        "id": 106,
        "value": "sortLeft"
      },
      {
        "id": 64,
        "value": "forJ"
      },
      {
        "id": 148,
        "value": "compare"
      },
      {
        "id": 8,
        "value": "compare"
      },
      {
        "id": 57,
        "value": "initI"
      },
      {
        "id": 113,
        "value": "checkLowHigh"
      },
      {
        "id": 22,
        "value": "swapIJ"
      },
      {
        "id": 36,
        "value": "incI"
      },
      {
        "id": 225,
        "value": "markRange"
      },
      {
        "id": 71,
        "value": "incI"
      },
      {
        "id": 183,
        "value": "sortLeft"
      },
      {
        "id": 15,
        "value": "incI"
      },
      {
        "id": 99,
        "value": "returnPi"
      },
      {
        "id": 50,
        "value": "markRange"
      },
      {
        "id": 92,
        "value": "swapIJ"
      },
      {
        "id": 134,
        "value": "compare"
      },
      {
        "id": 162,
        "value": "markRange"
      },
      {
        "id": 211,
        "value": "swapPivot"
      },
      {
        "id": 169,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "incI"
      },
      {
        "id": 127,
        "value": "compare"
      },
      {
        "id": 1,
        "value": "setPivot"
      },
      {
        "id": 197,
        "value": "initI"
      },
      {
        "id": 78,
        "value": "swapIJ"
      },
      {
        "id": 43,
        "value": "sortLeft"
      },
      {
        "id": 218,
        "value": "checkLowHigh"
      }
    ],
    "low": [
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 149,
        "value": "0"
      },
      {
        "id": 219,
        "value": "2"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 135,
        "value": "0"
      },
      {
        "id": 100,
        "value": "0"
      },
      {
        "id": 93,
        "value": "0"
      },
      {
        "id": 198,
        "value": "2"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 170,
        "value": "2"
      },
      {
        "id": 128,
        "value": "0"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 114,
        "value": "0"
      },
      {
        "id": 86,
        "value": "0"
      },
      {
        "id": 121,
        "value": "0"
      },
      {
        "id": 142,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 191,
        "value": "2"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 177,
        "value": "2"
      },
      {
        "id": 163,
        "value": "0"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 226,
        "value": "7"
      },
      {
        "id": 212,
        "value": "2"
      },
      {
        "id": 184,
        "value": "2"
      },
      {
        "id": 240,
        "value": "8"
      },
      {
        "id": 51,
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
        "id": 233,
        "value": "0"
      },
      {
        "id": 65,
        "value": "0"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 205,
        "value": "2"
      }
    ],
    "high": [
      {
        "id": 122,
        "value": "5"
      },
      {
        "id": 115,
        "value": "5"
      },
      {
        "id": 17,
        "value": "7"
      },
      {
        "id": 171,
        "value": "5"
      },
      {
        "id": 66,
        "value": "6"
      },
      {
        "id": 59,
        "value": "6"
      },
      {
        "id": 87,
        "value": "6"
      },
      {
        "id": 206,
        "value": "3"
      },
      {
        "id": 129,
        "value": "5"
      },
      {
        "id": 10,
        "value": "7"
      },
      {
        "id": 199,
        "value": "3"
      },
      {
        "id": 73,
        "value": "6"
      },
      {
        "id": 101,
        "value": "6"
      },
      {
        "id": 227,
        "value": "6"
      },
      {
        "id": 94,
        "value": "6"
      },
      {
        "id": 3,
        "value": "7"
      },
      {
        "id": 108,
        "value": "6"
      },
      {
        "id": 192,
        "value": "3"
      },
      {
        "id": 157,
        "value": "5"
      },
      {
        "id": 52,
        "value": "6"
      },
      {
        "id": 80,
        "value": "6"
      },
      {
        "id": 45,
        "value": "7"
      },
      {
        "id": 220,
        "value": "1"
      },
      {
        "id": 31,
        "value": "7"
      },
      {
        "id": 178,
        "value": "5"
      },
      {
        "id": 136,
        "value": "5"
      },
      {
        "id": 164,
        "value": "0"
      },
      {
        "id": 150,
        "value": "5"
      },
      {
        "id": 234,
        "value": "7"
      },
      {
        "id": 38,
        "value": "7"
      },
      {
        "id": 143,
        "value": "5"
      },
      {
        "id": 213,
        "value": "3"
      },
      {
        "id": 241,
        "value": "7"
      },
      {
        "id": 24,
        "value": "7"
      },
      {
        "id": 185,
        "value": "5"
      }
    ],
    "i": [
      {
        "id": 172,
        "value": "3"
      },
      {
        "id": 123,
        "value": "\u2014"
      },
      {
        "id": 74,
        "value": "1"
      },
      {
        "id": 144,
        "value": "0"
      },
      {
        "id": 11,
        "value": "1"
      },
      {
        "id": 88,
        "value": "3"
      },
      {
        "id": 18,
        "value": "2"
      },
      {
        "id": 228,
        "value": "\u2014"
      },
      {
        "id": 109,
        "value": "\u2014"
      },
      {
        "id": 221,
        "value": "\u2014"
      },
      {
        "id": 165,
        "value": "\u2014"
      },
      {
        "id": 81,
        "value": "1"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 53,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "\u2014"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "-1"
      },
      {
        "id": 130,
        "value": "-1"
      },
      {
        "id": 102,
        "value": "5"
      },
      {
        "id": 39,
        "value": "6"
      },
      {
        "id": 214,
        "value": "1"
      },
      {
        "id": 95,
        "value": "4"
      },
      {
        "id": 60,
        "value": "-1"
      },
      {
        "id": 200,
        "value": "1"
      },
      {
        "id": 25,
        "value": "3"
      },
      {
        "id": 137,
        "value": "-1"
      },
      {
        "id": 207,
        "value": "1"
      },
      {
        "id": 242,
        "value": "\u2014"
      },
      {
        "id": 46,
        "value": "\u2014"
      },
      {
        "id": 151,
        "value": "0"
      },
      {
        "id": 32,
        "value": "4"
      },
      {
        "id": 179,
        "value": "3"
      },
      {
        "id": 186,
        "value": "\u2014"
      },
      {
        "id": 193,
        "value": "\u2014"
      },
      {
        "id": 116,
        "value": "\u2014"
      }
    ],
    "j": [
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 138,
        "value": "2"
      },
      {
        "id": 33,
        "value": "4"
      },
      {
        "id": 12,
        "value": "2"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 145,
        "value": "2"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 82,
        "value": "1"
      },
      {
        "id": 89,
        "value": "3"
      },
      {
        "id": 68,
        "value": "0"
      },
      {
        "id": 40,
        "value": "6"
      },
      {
        "id": 131,
        "value": "1"
      },
      {
        "id": 26,
        "value": "3"
      },
      {
        "id": 152,
        "value": "4"
      },
      {
        "id": 19,
        "value": "2"
      },
      {
        "id": 201,
        "value": "\u2014"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "1"
      },
      {
        "id": 208,
        "value": "2"
      },
      {
        "id": 117,
        "value": "\u2014"
      },
      {
        "id": 5,
        "value": "\u2014"
      },
      {
        "id": 96,
        "value": "4"
      },
      {
        "id": 180,
        "value": "\u2014"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 124,
        "value": "\u2014"
      },
      {
        "id": 47,
        "value": "\u2014"
      },
      {
        "id": 187,
        "value": "\u2014"
      },
      {
        "id": 110,
        "value": "\u2014"
      },
      {
        "id": 173,
        "value": "4"
      },
      {
        "id": 229,
        "value": "\u2014"
      },
      {
        "id": 61,
        "value": "\u2014"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 54,
        "value": "\u2014"
      }
    ],
    "pivot": [
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "958"
      },
      {
        "id": 139,
        "value": "295"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 174,
        "value": "812"
      },
      {
        "id": 202,
        "value": "337"
      },
      {
        "id": 244,
        "value": "\u2014"
      },
      {
        "id": 34,
        "value": "958"
      },
      {
        "id": 41,
        "value": "958"
      },
      {
        "id": 188,
        "value": "\u2014"
      },
      {
        "id": 62,
        "value": "855"
      },
      {
        "id": 55,
        "value": "\u2014"
      },
      {
        "id": 48,
        "value": "\u2014"
      },
      {
        "id": 146,
        "value": "295"
      },
      {
        "id": 13,
        "value": "958"
      },
      {
        "id": 27,
        "value": "958"
      },
      {
        "id": 125,
        "value": "\u2014"
      },
      {
        "id": 237,
        "value": "\u2014"
      },
      {
        "id": 160,
        "value": "\u2014"
      },
      {
        "id": 181,
        "value": "812"
      },
      {
        "id": 223,
        "value": "\u2014"
      },
      {
        "id": 209,
        "value": "337"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 104,
        "value": "855"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 83,
        "value": "855"
      },
      {
        "id": 216,
        "value": "337"
      },
      {
        "id": 90,
        "value": "855"
      },
      {
        "id": 132,
        "value": "295"
      },
      {
        "id": 118,
        "value": "\u2014"
      },
      {
        "id": 20,
        "value": "958"
      },
      {
        "id": 153,
        "value": "295"
      },
      {
        "id": 76,
        "value": "855"
      },
      {
        "id": 69,
        "value": "855"
      },
      {
        "id": 97,
        "value": "855"
      }
    ],
    "pi": [
      {
        "id": 161,
        "value": "1"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "\u2014"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "7"
      },
      {
        "id": 217,
        "value": "2"
      },
      {
        "id": 112,
        "value": "6"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "\u2014"
      },
      {
        "id": 105,
        "value": "6"
      },
      {
        "id": 77,
        "value": "\u2014"
      },
      {
        "id": 21,
        "value": "\u2014"
      },
      {
        "id": 154,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 168,
        "value": "\u2014"
      },
      {
        "id": 133,
        "value": "\u2014"
      },
      {
        "id": 98,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "\u2014"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 56,
        "value": "\u2014"
      },
      {
        "id": 245,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 210,
        "value": "\u2014"
      },
      {
        "id": 196,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "4"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 224,
        "value": "\u2014"
      },
      {
        "id": 42,
        "value": "\u2014"
      },
      {
        "id": 49,
        "value": "7"
      },
      {
        "id": 126,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 189,
        "value": "4"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 2,
      "stepId": "markRange",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 3,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 4,
      "stepId": "callPartition",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 5,
      "stepId": "setPivot",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 6,
      "stepId": "initI",
      "low": 0,
      "high": 7,
      "i": -1,
      "j": null,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 7,
      "stepId": "forJ",
      "low": 0,
      "high": 7,
      "i": -1,
      "j": 0,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 8,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": -1,
      "j": 0,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 9,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 0,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 10,
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 0,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 11,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 1,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 12,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": 1,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 13,
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": 1,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 14,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": 2,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 15,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 2,
      "j": 2,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 2,
      "j": 2,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 17,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 2,
      "j": 3,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 18,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 3,
      "j": 3,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 19,
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 3,
      "j": 3,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 20,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 3,
      "j": 4,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 21,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 4,
      "j": 4,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 22,
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 4,
      "j": 4,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 4,
      "j": 5,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 24,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 5,
      "j": 5,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 25,
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 5,
      "j": 5,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 26,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 5,
      "j": 6,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 27,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 6,
      "j": 6,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 28,
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 6,
      "j": 6,
      "pivot": 958,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 29,
      "stepId": "swapPivot",
      "low": 0,
      "high": 7,
      "i": 6,
      "j": null,
      "pivot": 958,
      "pi": 7,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 30,
      "stepId": "returnPi",
      "low": 0,
      "high": 7,
      "i": 6,
      "j": null,
      "pivot": 958,
      "pi": 7,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 31,
      "stepId": "sortLeft",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 32,
      "stepId": "markRange",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 33,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 34,
      "stepId": "callPartition",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 35,
      "stepId": "setPivot",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 36,
      "stepId": "initI",
      "low": 0,
      "high": 6,
      "i": -1,
      "j": null,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 37,
      "stepId": "forJ",
      "low": 0,
      "high": 6,
      "i": -1,
      "j": 0,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 38,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": -1,
      "j": 0,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 39,
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 0,
      "j": 0,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 40,
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 0,
      "j": 0,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 41,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 0,
      "j": 1,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 42,
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 1,
      "j": 1,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 43,
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 1,
      "j": 1,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 44,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 1,
      "j": 2,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 45,
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 2,
      "j": 2,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 46,
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 2,
      "j": 2,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 47,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 2,
      "j": 3,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 48,
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 3,
      "j": 3,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 49,
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 3,
      "j": 3,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 50,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 3,
      "j": 4,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 51,
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 4,
      "j": 4,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 52,
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 4,
      "j": 4,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 53,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 4,
      "j": 5,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 54,
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 5,
      "j": 5,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 55,
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 5,
      "j": 5,
      "pivot": 855,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 56,
      "stepId": "swapPivot",
      "low": 0,
      "high": 6,
      "i": 5,
      "j": null,
      "pivot": 855,
      "pi": 6,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 57,
      "stepId": "returnPi",
      "low": 0,
      "high": 6,
      "i": 5,
      "j": null,
      "pivot": 855,
      "pi": 6,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 58,
      "stepId": "sortLeft",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 6,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "stepId": "markRange",
      "low": 0,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 60,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "stepId": "callPartition",
      "low": 0,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "stepId": "setPivot",
      "low": 0,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": 295,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 63,
      "stepId": "initI",
      "low": 0,
      "high": 5,
      "i": -1,
      "j": null,
      "pivot": 295,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 64,
      "stepId": "forJ",
      "low": 0,
      "high": 5,
      "i": -1,
      "j": 0,
      "pivot": 295,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 65,
      "stepId": "compare",
      "low": 0,
      "high": 5,
      "i": -1,
      "j": 0,
      "pivot": 295,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 66,
      "stepId": "compare",
      "low": 0,
      "high": 5,
      "i": -1,
      "j": 1,
      "pivot": 295,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "step": 67,
      "stepId": "compare",
      "low": 0,
      "high": 5,
      "i": -1,
      "j": 2,
      "pivot": 295,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "stepId": "incI",
      "low": 0,
      "high": 5,
      "i": 0,
      "j": 2,
      "pivot": 295,
      "pi": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 5,
      "i": 0,
      "j": 2,
      "pivot": 295,
      "pi": null,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 70,
      "stepId": "compare",
      "low": 0,
      "high": 5,
      "i": 0,
      "j": 3,
      "pivot": 295,
      "pi": null,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 71,
      "stepId": "compare",
      "low": 0,
      "high": 5,
      "i": 0,
      "j": 4,
      "pivot": 295,
      "pi": null,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
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
      "step": 72,
      "stepId": "swapPivot",
      "low": 0,
      "high": 5,
      "i": 0,
      "j": null,
      "pivot": 295,
      "pi": 1,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 73,
      "stepId": "returnPi",
      "low": 0,
      "high": 5,
      "i": 0,
      "j": null,
      "pivot": 295,
      "pi": 1,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 74,
      "stepId": "sortLeft",
      "low": 0,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
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
      "step": 75,
      "stepId": "markRange",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
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
      "step": 76,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 77,
      "stepId": "sortRight",
      "low": 0,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 78,
      "stepId": "markRange",
      "low": 2,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 79,
      "stepId": "checkLowHigh",
      "low": 2,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 80,
      "stepId": "callPartition",
      "low": 2,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 81,
      "stepId": "setPivot",
      "low": 2,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 82,
      "stepId": "initI",
      "low": 2,
      "high": 5,
      "i": 1,
      "j": null,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 83,
      "stepId": "forJ",
      "low": 2,
      "high": 5,
      "i": 1,
      "j": 2,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 84,
      "stepId": "compare",
      "low": 2,
      "high": 5,
      "i": 1,
      "j": 2,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 85,
      "stepId": "incI",
      "low": 2,
      "high": 5,
      "i": 2,
      "j": 2,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 86,
      "stepId": "swapIJ",
      "low": 2,
      "high": 5,
      "i": 2,
      "j": 2,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 87,
      "stepId": "compare",
      "low": 2,
      "high": 5,
      "i": 2,
      "j": 3,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 88,
      "stepId": "incI",
      "low": 2,
      "high": 5,
      "i": 3,
      "j": 3,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 89,
      "stepId": "swapIJ",
      "low": 2,
      "high": 5,
      "i": 3,
      "j": 3,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 90,
      "stepId": "compare",
      "low": 2,
      "high": 5,
      "i": 3,
      "j": 4,
      "pivot": 812,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
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
      "step": 91,
      "stepId": "swapPivot",
      "low": 2,
      "high": 5,
      "i": 3,
      "j": null,
      "pivot": 812,
      "pi": 4,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
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
      "step": 92,
      "stepId": "returnPi",
      "low": 2,
      "high": 5,
      "i": 3,
      "j": null,
      "pivot": 812,
      "pi": 4,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 93,
      "stepId": "sortLeft",
      "low": 2,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
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
      "step": 94,
      "stepId": "markRange",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
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
      "step": 95,
      "stepId": "checkLowHigh",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 96,
      "stepId": "callPartition",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 97,
      "stepId": "setPivot",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": 337,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 98,
      "stepId": "initI",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": null,
      "pivot": 337,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
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
      "step": 99,
      "stepId": "forJ",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": 2,
      "pivot": 337,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
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
      "step": 100,
      "stepId": "compare",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": 2,
      "pivot": 337,
      "pi": null,
      "array": [
        81,
        295,
        480,
        337,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 101,
      "stepId": "swapPivot",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": null,
      "pivot": 337,
      "pi": 2,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
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
      "step": 102,
      "stepId": "returnPi",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": null,
      "pivot": 337,
      "pi": 2,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 103,
      "stepId": "sortLeft",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 104,
      "stepId": "markRange",
      "low": 2,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 105,
      "stepId": "checkLowHigh",
      "low": 2,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
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
      "step": 106,
      "stepId": "sortRight",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 107,
      "stepId": "markRange",
      "low": 3,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 108,
      "stepId": "checkLowHigh",
      "low": 3,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 109,
      "stepId": "sortRight",
      "low": 2,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 110,
      "stepId": "markRange",
      "low": 5,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 111,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 112,
      "stepId": "sortRight",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 6,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 113,
      "stepId": "markRange",
      "low": 7,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
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
      "low": 7,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 115,
      "stepId": "sortRight",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
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
      "step": 116,
      "stepId": "markRange",
      "low": 8,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 117,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
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
