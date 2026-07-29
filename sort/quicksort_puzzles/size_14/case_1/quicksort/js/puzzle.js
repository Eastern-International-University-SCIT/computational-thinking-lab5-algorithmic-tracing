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
    966,
    883,
    742,
    537,
    56,
    976,
    890,
    667,
    517,
    394,
    316,
    310,
    67,
    363
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
    6,
    8,
    9,
    15,
    18,
    23,
    24,
    25,
    31,
    35,
    39,
    41,
    42,
    51,
    53,
    54,
    59,
    65,
    67,
    69,
    73,
    76,
    78,
    79,
    82,
    83,
    84,
    95,
    99,
    104,
    107,
    111,
    115,
    116,
    117,
    118,
    120,
    128,
    129,
    136,
    137,
    138,
    139,
    140,
    142,
    148,
    149,
    150,
    154,
    160,
    166,
    168
  ],
  "answers": {
    "6": {
      "stepId": "initI",
      "low": "0",
      "high": "13",
      "i": "-1",
      "j": "\u2014",
      "pivot": "363",
      "pi": "\u2014"
    },
    "8": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "-1",
      "j": "0",
      "pivot": "363",
      "pi": "\u2014"
    },
    "9": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "-1",
      "j": "1",
      "pivot": "363",
      "pi": "\u2014"
    },
    "15": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "0",
      "j": "5",
      "pivot": "363",
      "pi": "\u2014"
    },
    "18": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "0",
      "j": "8",
      "pivot": "363",
      "pi": "\u2014"
    },
    "23": {
      "stepId": "compare",
      "low": "0",
      "high": "13",
      "i": "1",
      "j": "11",
      "pivot": "363",
      "pi": "\u2014"
    },
    "24": {
      "stepId": "incI",
      "low": "0",
      "high": "13",
      "i": "2",
      "j": "11",
      "pivot": "363",
      "pi": "\u2014"
    },
    "25": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "13",
      "i": "2",
      "j": "11",
      "pivot": "363",
      "pi": "\u2014"
    },
    "31": {
      "stepId": "sortLeft",
      "low": "0",
      "high": "13",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "4"
    },
    "35": {
      "stepId": "setPivot",
      "low": "0",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "67",
      "pi": "\u2014"
    },
    "39": {
      "stepId": "incI",
      "low": "0",
      "high": "3",
      "i": "0",
      "j": "0",
      "pivot": "67",
      "pi": "\u2014"
    },
    "41": {
      "stepId": "compare",
      "low": "0",
      "high": "3",
      "i": "0",
      "j": "1",
      "pivot": "67",
      "pi": "\u2014"
    },
    "42": {
      "stepId": "compare",
      "low": "0",
      "high": "3",
      "i": "0",
      "j": "2",
      "pivot": "67",
      "pi": "\u2014"
    },
    "51": {
      "stepId": "callPartition",
      "low": "2",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "53": {
      "stepId": "initI",
      "low": "2",
      "high": "3",
      "i": "1",
      "j": "\u2014",
      "pivot": "316",
      "pi": "\u2014"
    },
    "54": {
      "stepId": "forJ",
      "low": "2",
      "high": "3",
      "i": "1",
      "j": "2",
      "pivot": "316",
      "pi": "\u2014"
    },
    "59": {
      "stepId": "returnPi",
      "low": "2",
      "high": "3",
      "i": "2",
      "j": "\u2014",
      "pivot": "316",
      "pi": "3"
    },
    "65": {
      "stepId": "checkLowHigh",
      "low": "4",
      "high": "3",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "67": {
      "stepId": "markRange",
      "low": "5",
      "high": "13",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "69": {
      "stepId": "callPartition",
      "low": "5",
      "high": "13",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "73": {
      "stepId": "compare",
      "low": "5",
      "high": "13",
      "i": "4",
      "j": "5",
      "pivot": "966",
      "pi": "\u2014"
    },
    "76": {
      "stepId": "swapIJ",
      "low": "5",
      "high": "13",
      "i": "5",
      "j": "6",
      "pivot": "966",
      "pi": "\u2014"
    },
    "78": {
      "stepId": "incI",
      "low": "5",
      "high": "13",
      "i": "6",
      "j": "7",
      "pivot": "966",
      "pi": "\u2014"
    },
    "79": {
      "stepId": "swapIJ",
      "low": "5",
      "high": "13",
      "i": "6",
      "j": "7",
      "pivot": "966",
      "pi": "\u2014"
    },
    "82": {
      "stepId": "swapIJ",
      "low": "5",
      "high": "13",
      "i": "7",
      "j": "8",
      "pivot": "966",
      "pi": "\u2014"
    },
    "83": {
      "stepId": "compare",
      "low": "5",
      "high": "13",
      "i": "7",
      "j": "9",
      "pivot": "966",
      "pi": "\u2014"
    },
    "84": {
      "stepId": "incI",
      "low": "5",
      "high": "13",
      "i": "8",
      "j": "9",
      "pivot": "966",
      "pi": "\u2014"
    },
    "95": {
      "stepId": "swapPivot",
      "low": "5",
      "high": "13",
      "i": "11",
      "j": "\u2014",
      "pivot": "966",
      "pi": "12"
    },
    "99": {
      "stepId": "checkLowHigh",
      "low": "5",
      "high": "11",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "104": {
      "stepId": "compare",
      "low": "5",
      "high": "11",
      "i": "4",
      "j": "5",
      "pivot": "537",
      "pi": "\u2014"
    },
    "107": {
      "stepId": "incI",
      "low": "5",
      "high": "11",
      "i": "5",
      "j": "7",
      "pivot": "537",
      "pi": "\u2014"
    },
    "111": {
      "stepId": "swapIJ",
      "low": "5",
      "high": "11",
      "i": "6",
      "j": "8",
      "pivot": "537",
      "pi": "\u2014"
    },
    "115": {
      "stepId": "returnPi",
      "low": "5",
      "high": "11",
      "i": "6",
      "j": "\u2014",
      "pivot": "537",
      "pi": "7"
    },
    "116": {
      "stepId": "sortLeft",
      "low": "5",
      "high": "11",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "7"
    },
    "117": {
      "stepId": "markRange",
      "low": "5",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "118": {
      "stepId": "checkLowHigh",
      "low": "5",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "120": {
      "stepId": "setPivot",
      "low": "5",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "394",
      "pi": "\u2014"
    },
    "128": {
      "stepId": "checkLowHigh",
      "low": "5",
      "high": "4",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "129": {
      "stepId": "sortRight",
      "low": "5",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "5"
    },
    "136": {
      "stepId": "setPivot",
      "low": "8",
      "high": "11",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "890",
      "pi": "\u2014"
    },
    "137": {
      "stepId": "initI",
      "low": "8",
      "high": "11",
      "i": "7",
      "j": "\u2014",
      "pivot": "890",
      "pi": "\u2014"
    },
    "138": {
      "stepId": "forJ",
      "low": "8",
      "high": "11",
      "i": "7",
      "j": "8",
      "pivot": "890",
      "pi": "\u2014"
    },
    "139": {
      "stepId": "compare",
      "low": "8",
      "high": "11",
      "i": "7",
      "j": "8",
      "pivot": "890",
      "pi": "\u2014"
    },
    "140": {
      "stepId": "incI",
      "low": "8",
      "high": "11",
      "i": "8",
      "j": "8",
      "pivot": "890",
      "pi": "\u2014"
    },
    "142": {
      "stepId": "compare",
      "low": "8",
      "high": "11",
      "i": "8",
      "j": "9",
      "pivot": "890",
      "pi": "\u2014"
    },
    "148": {
      "stepId": "swapPivot",
      "low": "8",
      "high": "11",
      "i": "10",
      "j": "\u2014",
      "pivot": "890",
      "pi": "11"
    },
    "149": {
      "stepId": "returnPi",
      "low": "8",
      "high": "11",
      "i": "10",
      "j": "\u2014",
      "pivot": "890",
      "pi": "11"
    },
    "150": {
      "stepId": "sortLeft",
      "low": "8",
      "high": "11",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "11"
    },
    "154": {
      "stepId": "setPivot",
      "low": "8",
      "high": "10",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "742",
      "pi": "\u2014"
    },
    "160": {
      "stepId": "compare",
      "low": "8",
      "high": "10",
      "i": "8",
      "j": "9",
      "pivot": "742",
      "pi": "\u2014"
    },
    "166": {
      "stepId": "sortRight",
      "low": "8",
      "high": "10",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "9"
    },
    "168": {
      "stepId": "checkLowHigh",
      "low": "10",
      "high": "10",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 302,
        "value": "incI"
      },
      {
        "id": 85,
        "value": "compare"
      },
      {
        "id": 218,
        "value": "swapIJ"
      },
      {
        "id": 344,
        "value": "compare"
      },
      {
        "id": 267,
        "value": "sortRight"
      },
      {
        "id": 57,
        "value": "sortLeft"
      },
      {
        "id": 288,
        "value": "forJ"
      },
      {
        "id": 337,
        "value": "setPivot"
      },
      {
        "id": 232,
        "value": "sortLeft"
      },
      {
        "id": 1,
        "value": "initI"
      },
      {
        "id": 50,
        "value": "swapIJ"
      },
      {
        "id": 127,
        "value": "markRange"
      },
      {
        "id": 120,
        "value": "checkLowHigh"
      },
      {
        "id": 169,
        "value": "swapIJ"
      },
      {
        "id": 22,
        "value": "compare"
      },
      {
        "id": 295,
        "value": "compare"
      },
      {
        "id": 99,
        "value": "initI"
      },
      {
        "id": 8,
        "value": "compare"
      },
      {
        "id": 204,
        "value": "compare"
      },
      {
        "id": 309,
        "value": "compare"
      },
      {
        "id": 190,
        "value": "swapPivot"
      },
      {
        "id": 316,
        "value": "swapPivot"
      },
      {
        "id": 281,
        "value": "initI"
      },
      {
        "id": 92,
        "value": "callPartition"
      },
      {
        "id": 253,
        "value": "setPivot"
      },
      {
        "id": 211,
        "value": "incI"
      },
      {
        "id": 113,
        "value": "returnPi"
      },
      {
        "id": 246,
        "value": "checkLowHigh"
      },
      {
        "id": 162,
        "value": "swapIJ"
      },
      {
        "id": 239,
        "value": "markRange"
      },
      {
        "id": 155,
        "value": "incI"
      },
      {
        "id": 323,
        "value": "returnPi"
      },
      {
        "id": 71,
        "value": "incI"
      },
      {
        "id": 141,
        "value": "compare"
      },
      {
        "id": 176,
        "value": "compare"
      },
      {
        "id": 64,
        "value": "setPivot"
      },
      {
        "id": 43,
        "value": "incI"
      },
      {
        "id": 106,
        "value": "forJ"
      },
      {
        "id": 134,
        "value": "callPartition"
      },
      {
        "id": 358,
        "value": "checkLowHigh"
      },
      {
        "id": 148,
        "value": "swapIJ"
      },
      {
        "id": 274,
        "value": "setPivot"
      },
      {
        "id": 29,
        "value": "compare"
      },
      {
        "id": 330,
        "value": "sortLeft"
      },
      {
        "id": 260,
        "value": "checkLowHigh"
      },
      {
        "id": 183,
        "value": "incI"
      },
      {
        "id": 351,
        "value": "sortRight"
      },
      {
        "id": 225,
        "value": "returnPi"
      },
      {
        "id": 36,
        "value": "compare"
      },
      {
        "id": 78,
        "value": "compare"
      },
      {
        "id": 15,
        "value": "compare"
      },
      {
        "id": 197,
        "value": "checkLowHigh"
      }
    ],
    "low": [
      {
        "id": 100,
        "value": "2"
      },
      {
        "id": 198,
        "value": "5"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 219,
        "value": "5"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 142,
        "value": "5"
      },
      {
        "id": 191,
        "value": "5"
      },
      {
        "id": 163,
        "value": "5"
      },
      {
        "id": 282,
        "value": "8"
      },
      {
        "id": 226,
        "value": "5"
      },
      {
        "id": 268,
        "value": "5"
      },
      {
        "id": 261,
        "value": "5"
      },
      {
        "id": 240,
        "value": "5"
      },
      {
        "id": 51,
        "value": "0"
      },
      {
        "id": 156,
        "value": "5"
      },
      {
        "id": 149,
        "value": "5"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 331,
        "value": "8"
      },
      {
        "id": 345,
        "value": "8"
      },
      {
        "id": 177,
        "value": "5"
      },
      {
        "id": 303,
        "value": "8"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 86,
        "value": "0"
      },
      {
        "id": 107,
        "value": "2"
      },
      {
        "id": 275,
        "value": "8"
      },
      {
        "id": 121,
        "value": "4"
      },
      {
        "id": 317,
        "value": "8"
      },
      {
        "id": 65,
        "value": "0"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 247,
        "value": "5"
      },
      {
        "id": 359,
        "value": "10"
      },
      {
        "id": 338,
        "value": "8"
      },
      {
        "id": 114,
        "value": "2"
      },
      {
        "id": 352,
        "value": "8"
      },
      {
        "id": 296,
        "value": "8"
      },
      {
        "id": 254,
        "value": "5"
      },
      {
        "id": 289,
        "value": "8"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 212,
        "value": "5"
      },
      {
        "id": 184,
        "value": "5"
      },
      {
        "id": 170,
        "value": "5"
      },
      {
        "id": 135,
        "value": "5"
      },
      {
        "id": 128,
        "value": "5"
      },
      {
        "id": 324,
        "value": "8"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 310,
        "value": "8"
      },
      {
        "id": 93,
        "value": "2"
      },
      {
        "id": 205,
        "value": "5"
      },
      {
        "id": 233,
        "value": "5"
      }
    ],
    "high": [
      {
        "id": 199,
        "value": "11"
      },
      {
        "id": 227,
        "value": "11"
      },
      {
        "id": 31,
        "value": "13"
      },
      {
        "id": 248,
        "value": "6"
      },
      {
        "id": 178,
        "value": "13"
      },
      {
        "id": 339,
        "value": "10"
      },
      {
        "id": 24,
        "value": "13"
      },
      {
        "id": 325,
        "value": "11"
      },
      {
        "id": 66,
        "value": "3"
      },
      {
        "id": 80,
        "value": "3"
      },
      {
        "id": 297,
        "value": "11"
      },
      {
        "id": 360,
        "value": "10"
      },
      {
        "id": 45,
        "value": "13"
      },
      {
        "id": 3,
        "value": "13"
      },
      {
        "id": 262,
        "value": "4"
      },
      {
        "id": 213,
        "value": "11"
      },
      {
        "id": 171,
        "value": "13"
      },
      {
        "id": 143,
        "value": "13"
      },
      {
        "id": 94,
        "value": "3"
      },
      {
        "id": 73,
        "value": "3"
      },
      {
        "id": 269,
        "value": "6"
      },
      {
        "id": 108,
        "value": "3"
      },
      {
        "id": 220,
        "value": "11"
      },
      {
        "id": 276,
        "value": "11"
      },
      {
        "id": 157,
        "value": "13"
      },
      {
        "id": 129,
        "value": "13"
      },
      {
        "id": 311,
        "value": "11"
      },
      {
        "id": 283,
        "value": "11"
      },
      {
        "id": 122,
        "value": "3"
      },
      {
        "id": 52,
        "value": "13"
      },
      {
        "id": 150,
        "value": "13"
      },
      {
        "id": 332,
        "value": "11"
      },
      {
        "id": 206,
        "value": "11"
      },
      {
        "id": 17,
        "value": "13"
      },
      {
        "id": 318,
        "value": "11"
      },
      {
        "id": 255,
        "value": "6"
      },
      {
        "id": 59,
        "value": "13"
      },
      {
        "id": 234,
        "value": "11"
      },
      {
        "id": 185,
        "value": "13"
      },
      {
        "id": 38,
        "value": "13"
      },
      {
        "id": 101,
        "value": "3"
      },
      {
        "id": 115,
        "value": "3"
      },
      {
        "id": 290,
        "value": "11"
      },
      {
        "id": 10,
        "value": "13"
      },
      {
        "id": 353,
        "value": "10"
      },
      {
        "id": 241,
        "value": "6"
      },
      {
        "id": 87,
        "value": "3"
      },
      {
        "id": 164,
        "value": "13"
      },
      {
        "id": 136,
        "value": "13"
      },
      {
        "id": 192,
        "value": "13"
      },
      {
        "id": 346,
        "value": "10"
      },
      {
        "id": 304,
        "value": "11"
      }
    ],
    "i": [
      {
        "id": 291,
        "value": "7"
      },
      {
        "id": 179,
        "value": "7"
      },
      {
        "id": 298,
        "value": "7"
      },
      {
        "id": 284,
        "value": "7"
      },
      {
        "id": 361,
        "value": "\u2014"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 74,
        "value": "0"
      },
      {
        "id": 102,
        "value": "1"
      },
      {
        "id": 172,
        "value": "7"
      },
      {
        "id": 312,
        "value": "8"
      },
      {
        "id": 158,
        "value": "6"
      },
      {
        "id": 186,
        "value": "8"
      },
      {
        "id": 347,
        "value": "8"
      },
      {
        "id": 151,
        "value": "5"
      },
      {
        "id": 144,
        "value": "4"
      },
      {
        "id": 81,
        "value": "0"
      },
      {
        "id": 137,
        "value": "\u2014"
      },
      {
        "id": 18,
        "value": "-1"
      },
      {
        "id": 242,
        "value": "\u2014"
      },
      {
        "id": 25,
        "value": "0"
      },
      {
        "id": 214,
        "value": "5"
      },
      {
        "id": 305,
        "value": "8"
      },
      {
        "id": 4,
        "value": "-1"
      },
      {
        "id": 354,
        "value": "\u2014"
      },
      {
        "id": 165,
        "value": "6"
      },
      {
        "id": 193,
        "value": "11"
      },
      {
        "id": 221,
        "value": "6"
      },
      {
        "id": 53,
        "value": "2"
      },
      {
        "id": 207,
        "value": "4"
      },
      {
        "id": 123,
        "value": "\u2014"
      },
      {
        "id": 277,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "1"
      },
      {
        "id": 11,
        "value": "-1"
      },
      {
        "id": 32,
        "value": "0"
      },
      {
        "id": 46,
        "value": "2"
      },
      {
        "id": 88,
        "value": "0"
      },
      {
        "id": 340,
        "value": "\u2014"
      },
      {
        "id": 249,
        "value": "\u2014"
      },
      {
        "id": 60,
        "value": "\u2014"
      },
      {
        "id": 130,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "\u2014"
      },
      {
        "id": 228,
        "value": "6"
      },
      {
        "id": 109,
        "value": "1"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 200,
        "value": "\u2014"
      },
      {
        "id": 270,
        "value": "\u2014"
      },
      {
        "id": 333,
        "value": "\u2014"
      },
      {
        "id": 256,
        "value": "\u2014"
      },
      {
        "id": 116,
        "value": "2"
      },
      {
        "id": 326,
        "value": "10"
      },
      {
        "id": 319,
        "value": "10"
      },
      {
        "id": 235,
        "value": "\u2014"
      }
    ],
    "j": [
      {
        "id": 187,
        "value": "9"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 33,
        "value": "8"
      },
      {
        "id": 166,
        "value": "7"
      },
      {
        "id": 124,
        "value": "\u2014"
      },
      {
        "id": 5,
        "value": "\u2014"
      },
      {
        "id": 264,
        "value": "\u2014"
      },
      {
        "id": 285,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 19,
        "value": "1"
      },
      {
        "id": 61,
        "value": "\u2014"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 131,
        "value": "\u2014"
      },
      {
        "id": 334,
        "value": "\u2014"
      },
      {
        "id": 271,
        "value": "\u2014"
      },
      {
        "id": 362,
        "value": "\u2014"
      },
      {
        "id": 138,
        "value": "\u2014"
      },
      {
        "id": 250,
        "value": "\u2014"
      },
      {
        "id": 355,
        "value": "\u2014"
      },
      {
        "id": 89,
        "value": "2"
      },
      {
        "id": 257,
        "value": "\u2014"
      },
      {
        "id": 110,
        "value": "2"
      },
      {
        "id": 222,
        "value": "8"
      },
      {
        "id": 54,
        "value": "11"
      },
      {
        "id": 299,
        "value": "8"
      },
      {
        "id": 26,
        "value": "5"
      },
      {
        "id": 82,
        "value": "1"
      },
      {
        "id": 75,
        "value": "0"
      },
      {
        "id": 47,
        "value": "11"
      },
      {
        "id": 341,
        "value": "\u2014"
      },
      {
        "id": 327,
        "value": "\u2014"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 229,
        "value": "\u2014"
      },
      {
        "id": 68,
        "value": "\u2014"
      },
      {
        "id": 145,
        "value": "5"
      },
      {
        "id": 12,
        "value": "0"
      },
      {
        "id": 117,
        "value": "\u2014"
      },
      {
        "id": 180,
        "value": "9"
      },
      {
        "id": 201,
        "value": "\u2014"
      },
      {
        "id": 292,
        "value": "8"
      },
      {
        "id": 313,
        "value": "9"
      },
      {
        "id": 40,
        "value": "11"
      },
      {
        "id": 348,
        "value": "9"
      },
      {
        "id": 96,
        "value": "\u2014"
      },
      {
        "id": 215,
        "value": "7"
      },
      {
        "id": 152,
        "value": "6"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 306,
        "value": "8"
      },
      {
        "id": 208,
        "value": "5"
      },
      {
        "id": 320,
        "value": "\u2014"
      },
      {
        "id": 173,
        "value": "8"
      },
      {
        "id": 159,
        "value": "7"
      }
    ],
    "pivot": [
      {
        "id": 174,
        "value": "966"
      },
      {
        "id": 237,
        "value": "\u2014"
      },
      {
        "id": 335,
        "value": "\u2014"
      },
      {
        "id": 13,
        "value": "363"
      },
      {
        "id": 251,
        "value": "\u2014"
      },
      {
        "id": 90,
        "value": "67"
      },
      {
        "id": 314,
        "value": "890"
      },
      {
        "id": 244,
        "value": "\u2014"
      },
      {
        "id": 342,
        "value": "742"
      },
      {
        "id": 209,
        "value": "537"
      },
      {
        "id": 132,
        "value": "\u2014"
      },
      {
        "id": 139,
        "value": "\u2014"
      },
      {
        "id": 118,
        "value": "316"
      },
      {
        "id": 279,
        "value": "890"
      },
      {
        "id": 55,
        "value": "363"
      },
      {
        "id": 62,
        "value": "\u2014"
      },
      {
        "id": 125,
        "value": "\u2014"
      },
      {
        "id": 349,
        "value": "742"
      },
      {
        "id": 6,
        "value": "363"
      },
      {
        "id": 195,
        "value": "966"
      },
      {
        "id": 272,
        "value": "\u2014"
      },
      {
        "id": 202,
        "value": "\u2014"
      },
      {
        "id": 328,
        "value": "890"
      },
      {
        "id": 20,
        "value": "363"
      },
      {
        "id": 97,
        "value": "\u2014"
      },
      {
        "id": 265,
        "value": "\u2014"
      },
      {
        "id": 216,
        "value": "537"
      },
      {
        "id": 69,
        "value": "67"
      },
      {
        "id": 188,
        "value": "966"
      },
      {
        "id": 230,
        "value": "537"
      },
      {
        "id": 76,
        "value": "67"
      },
      {
        "id": 83,
        "value": "67"
      },
      {
        "id": 356,
        "value": "\u2014"
      },
      {
        "id": 307,
        "value": "890"
      },
      {
        "id": 34,
        "value": "363"
      },
      {
        "id": 321,
        "value": "890"
      },
      {
        "id": 27,
        "value": "363"
      },
      {
        "id": 286,
        "value": "890"
      },
      {
        "id": 181,
        "value": "966"
      },
      {
        "id": 293,
        "value": "890"
      },
      {
        "id": 300,
        "value": "890"
      },
      {
        "id": 223,
        "value": "537"
      },
      {
        "id": 363,
        "value": "\u2014"
      },
      {
        "id": 41,
        "value": "363"
      },
      {
        "id": 111,
        "value": "316"
      },
      {
        "id": 160,
        "value": "966"
      },
      {
        "id": 258,
        "value": "394"
      },
      {
        "id": 146,
        "value": "966"
      },
      {
        "id": 48,
        "value": "363"
      },
      {
        "id": 104,
        "value": "316"
      },
      {
        "id": 153,
        "value": "966"
      },
      {
        "id": 167,
        "value": "966"
      }
    ],
    "pi": [
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 343,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "3"
      },
      {
        "id": 133,
        "value": "\u2014"
      },
      {
        "id": 364,
        "value": "\u2014"
      },
      {
        "id": 112,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "4"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 217,
        "value": "\u2014"
      },
      {
        "id": 329,
        "value": "11"
      },
      {
        "id": 280,
        "value": "\u2014"
      },
      {
        "id": 245,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 350,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 273,
        "value": "5"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 105,
        "value": "\u2014"
      },
      {
        "id": 266,
        "value": "\u2014"
      },
      {
        "id": 126,
        "value": "\u2014"
      },
      {
        "id": 259,
        "value": "\u2014"
      },
      {
        "id": 49,
        "value": "\u2014"
      },
      {
        "id": 154,
        "value": "\u2014"
      },
      {
        "id": 189,
        "value": "\u2014"
      },
      {
        "id": 357,
        "value": "9"
      },
      {
        "id": 196,
        "value": "12"
      },
      {
        "id": 252,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "7"
      },
      {
        "id": 308,
        "value": "\u2014"
      },
      {
        "id": 210,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 322,
        "value": "11"
      },
      {
        "id": 42,
        "value": "\u2014"
      },
      {
        "id": 98,
        "value": "\u2014"
      },
      {
        "id": 161,
        "value": "\u2014"
      },
      {
        "id": 301,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 224,
        "value": "\u2014"
      },
      {
        "id": 315,
        "value": "\u2014"
      },
      {
        "id": 168,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "7"
      },
      {
        "id": 336,
        "value": "11"
      },
      {
        "id": 77,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "\u2014"
      },
      {
        "id": 56,
        "value": "\u2014"
      },
      {
        "id": 21,
        "value": "\u2014"
      },
      {
        "id": 147,
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
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
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
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
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
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
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
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 5,
      "stepId": "setPivot",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 6,
      "stepId": "initI",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": null,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
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
      "step": 7,
      "stepId": "forJ",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 0,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 8,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 0,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
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
      "step": 9,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 1,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
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
      "step": 10,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 2,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 11,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 3,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 12,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": -1,
      "j": 4,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 13,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 4,
      "pivot": 363,
      "pi": null,
      "array": [
        966,
        883,
        742,
        537,
        56,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 14,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 4,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 15,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 5,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
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
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 6,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 17,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 7,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 18,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 8,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
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
      "step": 19,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 9,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 20,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 0,
      "j": 10,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 21,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 1,
      "j": 10,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        883,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 22,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 1,
      "j": 10,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        316,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        883,
        310,
        67,
        363
      ]
    },
    {
      "step": 23,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 1,
      "j": 11,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        316,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        883,
        310,
        67,
        363
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
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 2,
      "j": 11,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        316,
        742,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        883,
        310,
        67,
        363
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
      "step": 25,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 2,
      "j": 11,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        316,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        67,
        363
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
      "step": 26,
      "stepId": "compare",
      "low": 0,
      "high": 13,
      "i": 2,
      "j": 12,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        316,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        67,
        363
      ]
    },
    {
      "step": 27,
      "stepId": "incI",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": 12,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        316,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        67,
        363
      ]
    },
    {
      "step": 28,
      "stepId": "swapIJ",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": 12,
      "pivot": 363,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        966,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        363
      ]
    },
    {
      "step": 29,
      "stepId": "swapPivot",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": null,
      "pivot": 363,
      "pi": 4,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 30,
      "stepId": "returnPi",
      "low": 0,
      "high": 13,
      "i": 3,
      "j": null,
      "pivot": 363,
      "pi": 4,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 31,
      "stepId": "sortLeft",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 33,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 34,
      "stepId": "callPartition",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 35,
      "stepId": "setPivot",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 36,
      "stepId": "initI",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": null,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 37,
      "stepId": "forJ",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": 0,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 38,
      "stepId": "compare",
      "low": 0,
      "high": 3,
      "i": -1,
      "j": 0,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 39,
      "stepId": "incI",
      "low": 0,
      "high": 3,
      "i": 0,
      "j": 0,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 40,
      "stepId": "swapIJ",
      "low": 0,
      "high": 3,
      "i": 0,
      "j": 0,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 41,
      "stepId": "compare",
      "low": 0,
      "high": 3,
      "i": 0,
      "j": 1,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 42,
      "stepId": "compare",
      "low": 0,
      "high": 3,
      "i": 0,
      "j": 2,
      "pivot": 67,
      "pi": null,
      "array": [
        56,
        316,
        310,
        67,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "stepId": "swapPivot",
      "low": 0,
      "high": 3,
      "i": 0,
      "j": null,
      "pivot": 67,
      "pi": 1,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 44,
      "stepId": "returnPi",
      "low": 0,
      "high": 3,
      "i": 0,
      "j": null,
      "pivot": 67,
      "pi": 1,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 45,
      "stepId": "sortLeft",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 46,
      "stepId": "markRange",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 47,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 48,
      "stepId": "sortRight",
      "low": 0,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 49,
      "stepId": "markRange",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 50,
      "stepId": "checkLowHigh",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 51,
      "stepId": "callPartition",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 52,
      "stepId": "setPivot",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": 316,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 53,
      "stepId": "initI",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": null,
      "pivot": 316,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "stepId": "forJ",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": 2,
      "pivot": 316,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 55,
      "stepId": "compare",
      "low": 2,
      "high": 3,
      "i": 1,
      "j": 2,
      "pivot": 316,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 56,
      "stepId": "incI",
      "low": 2,
      "high": 3,
      "i": 2,
      "j": 2,
      "pivot": 316,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 57,
      "stepId": "swapIJ",
      "low": 2,
      "high": 3,
      "i": 2,
      "j": 2,
      "pivot": 316,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 58,
      "stepId": "swapPivot",
      "low": 2,
      "high": 3,
      "i": 2,
      "j": null,
      "pivot": 316,
      "pi": 3,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 59,
      "stepId": "returnPi",
      "low": 2,
      "high": 3,
      "i": 2,
      "j": null,
      "pivot": 316,
      "pi": 3,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "stepId": "sortLeft",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 3,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 61,
      "stepId": "markRange",
      "low": 2,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 62,
      "stepId": "checkLowHigh",
      "low": 2,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 63,
      "stepId": "sortRight",
      "low": 2,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 3,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 64,
      "stepId": "markRange",
      "low": 4,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 65,
      "stepId": "checkLowHigh",
      "low": 4,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 66,
      "stepId": "sortRight",
      "low": 0,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 67,
      "stepId": "markRange",
      "low": 5,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "low": 5,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 69,
      "stepId": "callPartition",
      "low": 5,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "low": 5,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 71,
      "stepId": "initI",
      "low": 5,
      "high": 13,
      "i": 4,
      "j": null,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 72,
      "stepId": "forJ",
      "low": 5,
      "high": 13,
      "i": 4,
      "j": 5,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 73,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 4,
      "j": 5,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 74,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 4,
      "j": 6,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 75,
      "stepId": "incI",
      "low": 5,
      "high": 13,
      "i": 5,
      "j": 6,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        976,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 76,
      "stepId": "swapIJ",
      "low": 5,
      "high": 13,
      "i": 5,
      "j": 6,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        976,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 77,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 5,
      "j": 7,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        976,
        667,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 78,
      "stepId": "incI",
      "low": 5,
      "high": 13,
      "i": 6,
      "j": 7,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        976,
        667,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 79,
      "stepId": "swapIJ",
      "low": 5,
      "high": 13,
      "i": 6,
      "j": 7,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        976,
        517,
        394,
        883,
        742,
        537,
        966
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
      "step": 80,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 6,
      "j": 8,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        976,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 81,
      "stepId": "incI",
      "low": 5,
      "high": 13,
      "i": 7,
      "j": 8,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        976,
        517,
        394,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 82,
      "stepId": "swapIJ",
      "low": 5,
      "high": 13,
      "i": 7,
      "j": 8,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        976,
        394,
        883,
        742,
        537,
        966
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
      "step": 83,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 7,
      "j": 9,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        976,
        394,
        883,
        742,
        537,
        966
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
      "step": 84,
      "stepId": "incI",
      "low": 5,
      "high": 13,
      "i": 8,
      "j": 9,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        976,
        394,
        883,
        742,
        537,
        966
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
      "step": 85,
      "stepId": "swapIJ",
      "low": 5,
      "high": 13,
      "i": 8,
      "j": 9,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        976,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 86,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 8,
      "j": 10,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        976,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 87,
      "stepId": "incI",
      "low": 5,
      "high": 13,
      "i": 9,
      "j": 10,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        976,
        883,
        742,
        537,
        966
      ]
    },
    {
      "step": 88,
      "stepId": "swapIJ",
      "low": 5,
      "high": 13,
      "i": 9,
      "j": 10,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        976,
        742,
        537,
        966
      ]
    },
    {
      "step": 89,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 9,
      "j": 11,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        976,
        742,
        537,
        966
      ]
    },
    {
      "step": 90,
      "stepId": "incI",
      "low": 5,
      "high": 13,
      "i": 10,
      "j": 11,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        976,
        742,
        537,
        966
      ]
    },
    {
      "step": 91,
      "stepId": "swapIJ",
      "low": 5,
      "high": 13,
      "i": 10,
      "j": 11,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        976,
        537,
        966
      ]
    },
    {
      "step": 92,
      "stepId": "compare",
      "low": 5,
      "high": 13,
      "i": 10,
      "j": 12,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        976,
        537,
        966
      ]
    },
    {
      "step": 93,
      "stepId": "incI",
      "low": 5,
      "high": 13,
      "i": 11,
      "j": 12,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        976,
        537,
        966
      ]
    },
    {
      "step": 94,
      "stepId": "swapIJ",
      "low": 5,
      "high": 13,
      "i": 11,
      "j": 12,
      "pivot": 966,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        976,
        966
      ]
    },
    {
      "step": 95,
      "stepId": "swapPivot",
      "low": 5,
      "high": 13,
      "i": 11,
      "j": null,
      "pivot": 966,
      "pi": 12,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
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
      "step": 96,
      "stepId": "returnPi",
      "low": 5,
      "high": 13,
      "i": 11,
      "j": null,
      "pivot": 966,
      "pi": 12,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 97,
      "stepId": "sortLeft",
      "low": 5,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 12,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 98,
      "stepId": "markRange",
      "low": 5,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 99,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
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
      "stepId": "callPartition",
      "low": 5,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 101,
      "stepId": "setPivot",
      "low": 5,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 102,
      "stepId": "initI",
      "low": 5,
      "high": 11,
      "i": 4,
      "j": null,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 103,
      "stepId": "forJ",
      "low": 5,
      "high": 11,
      "i": 4,
      "j": 5,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 104,
      "stepId": "compare",
      "low": 5,
      "high": 11,
      "i": 4,
      "j": 5,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
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
      "stepId": "compare",
      "low": 5,
      "high": 11,
      "i": 4,
      "j": 6,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 106,
      "stepId": "compare",
      "low": 5,
      "high": 11,
      "i": 4,
      "j": 7,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 107,
      "stepId": "incI",
      "low": 5,
      "high": 11,
      "i": 5,
      "j": 7,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        890,
        667,
        517,
        394,
        883,
        742,
        537,
        966,
        976
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
      "step": 108,
      "stepId": "swapIJ",
      "low": 5,
      "high": 11,
      "i": 5,
      "j": 7,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        667,
        890,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 109,
      "stepId": "compare",
      "low": 5,
      "high": 11,
      "i": 5,
      "j": 8,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        667,
        890,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 110,
      "stepId": "incI",
      "low": 5,
      "high": 11,
      "i": 6,
      "j": 8,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        667,
        890,
        394,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 111,
      "stepId": "swapIJ",
      "low": 5,
      "high": 11,
      "i": 6,
      "j": 8,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        890,
        667,
        883,
        742,
        537,
        966,
        976
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
      "stepId": "compare",
      "low": 5,
      "high": 11,
      "i": 6,
      "j": 9,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        890,
        667,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 113,
      "stepId": "compare",
      "low": 5,
      "high": 11,
      "i": 6,
      "j": 10,
      "pivot": 537,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        890,
        667,
        883,
        742,
        537,
        966,
        976
      ]
    },
    {
      "step": 114,
      "stepId": "swapPivot",
      "low": 5,
      "high": 11,
      "i": 6,
      "j": null,
      "pivot": 537,
      "pi": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 115,
      "stepId": "returnPi",
      "low": 5,
      "high": 11,
      "i": 6,
      "j": null,
      "pivot": 537,
      "pi": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "stepId": "sortLeft",
      "low": 5,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 117,
      "stepId": "markRange",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 118,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "stepId": "callPartition",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 120,
      "stepId": "setPivot",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": 394,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "stepId": "initI",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": null,
      "pivot": 394,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 122,
      "stepId": "forJ",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": 5,
      "pivot": 394,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 123,
      "stepId": "compare",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": 5,
      "pivot": 394,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        517,
        394,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 124,
      "stepId": "swapPivot",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": null,
      "pivot": 394,
      "pi": 5,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 125,
      "stepId": "returnPi",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": null,
      "pivot": 394,
      "pi": 5,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 126,
      "stepId": "sortLeft",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 5,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 127,
      "stepId": "markRange",
      "low": 5,
      "high": 4,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 128,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 4,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 5,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 130,
      "stepId": "markRange",
      "low": 6,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 131,
      "stepId": "checkLowHigh",
      "low": 6,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 132,
      "stepId": "sortRight",
      "low": 5,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 133,
      "stepId": "markRange",
      "low": 8,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 134,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 135,
      "stepId": "callPartition",
      "low": 8,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 136,
      "stepId": "setPivot",
      "low": 8,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 137,
      "stepId": "initI",
      "low": 8,
      "high": 11,
      "i": 7,
      "j": null,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 138,
      "stepId": "forJ",
      "low": 8,
      "high": 11,
      "i": 7,
      "j": 8,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "stepId": "compare",
      "low": 8,
      "high": 11,
      "i": 7,
      "j": 8,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 140,
      "stepId": "incI",
      "low": 8,
      "high": 11,
      "i": 8,
      "j": 8,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 141,
      "stepId": "swapIJ",
      "low": 8,
      "high": 11,
      "i": 8,
      "j": 8,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 142,
      "stepId": "compare",
      "low": 8,
      "high": 11,
      "i": 8,
      "j": 9,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "stepId": "incI",
      "low": 8,
      "high": 11,
      "i": 9,
      "j": 9,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 144,
      "stepId": "swapIJ",
      "low": 8,
      "high": 11,
      "i": 9,
      "j": 9,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 145,
      "stepId": "compare",
      "low": 8,
      "high": 11,
      "i": 9,
      "j": 10,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 146,
      "stepId": "incI",
      "low": 8,
      "high": 11,
      "i": 10,
      "j": 10,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 147,
      "stepId": "swapIJ",
      "low": 8,
      "high": 11,
      "i": 10,
      "j": 10,
      "pivot": 890,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 148,
      "stepId": "swapPivot",
      "low": 8,
      "high": 11,
      "i": 10,
      "j": null,
      "pivot": 890,
      "pi": 11,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 149,
      "stepId": "returnPi",
      "low": 8,
      "high": 11,
      "i": 10,
      "j": null,
      "pivot": 890,
      "pi": 11,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 150,
      "stepId": "sortLeft",
      "low": 8,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 11,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 151,
      "stepId": "markRange",
      "low": 8,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 152,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 153,
      "stepId": "callPartition",
      "low": 8,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 154,
      "stepId": "setPivot",
      "low": 8,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": 742,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "stepId": "initI",
      "low": 8,
      "high": 10,
      "i": 7,
      "j": null,
      "pivot": 742,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 156,
      "stepId": "forJ",
      "low": 8,
      "high": 10,
      "i": 7,
      "j": 8,
      "pivot": 742,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 157,
      "stepId": "compare",
      "low": 8,
      "high": 10,
      "i": 7,
      "j": 8,
      "pivot": 742,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 158,
      "stepId": "incI",
      "low": 8,
      "high": 10,
      "i": 8,
      "j": 8,
      "pivot": 742,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 159,
      "stepId": "swapIJ",
      "low": 8,
      "high": 10,
      "i": 8,
      "j": 8,
      "pivot": 742,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
      ]
    },
    {
      "step": 160,
      "stepId": "compare",
      "low": 8,
      "high": 10,
      "i": 8,
      "j": 9,
      "pivot": 742,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        883,
        742,
        890,
        966,
        976
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
      "step": 161,
      "stepId": "swapPivot",
      "low": 8,
      "high": 10,
      "i": 8,
      "j": null,
      "pivot": 742,
      "pi": 9,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 162,
      "stepId": "returnPi",
      "low": 8,
      "high": 10,
      "i": 8,
      "j": null,
      "pivot": 742,
      "pi": 9,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 163,
      "stepId": "sortLeft",
      "low": 8,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 164,
      "stepId": "markRange",
      "low": 8,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 165,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 166,
      "stepId": "sortRight",
      "low": 8,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
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
      "stepId": "markRange",
      "low": 10,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 168,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
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
      "step": 169,
      "stepId": "sortRight",
      "low": 8,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 11,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 170,
      "stepId": "markRange",
      "low": 12,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 171,
      "stepId": "checkLowHigh",
      "low": 12,
      "high": 11,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 172,
      "stepId": "sortRight",
      "low": 5,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 12,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 173,
      "stepId": "markRange",
      "low": 13,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 174,
      "stepId": "checkLowHigh",
      "low": 13,
      "high": 13,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976
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

  function completedPuzzleRequested() {
    try {
      return new URLSearchParams(window.location.search).get("completed") === "1";
    } catch (_) {
      return false;
    }
  }

  function loadCompletedAnswers() {
    filled = {};
    Object.keys(INSTANCE.answers || {}).forEach(function(step) {
      const answer = INSTANCE.answers[step] || {};
      filled[step] = {};
      Object.keys(answer).forEach(function(field) {
        filled[step][field] = String(answer[field]);
      });
    });
    taskComplete = true;
    savePuzzleState();
  }

  function restorePuzzleState() {
    let restored = false;
    try {
      const key = puzzleStorageKey();
      const raw = key ? localStorage.getItem(key) : null;
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && saved.filled && typeof saved.filled === "object" && !Array.isArray(saved.filled)) {
          filled = saved.filled;
          taskComplete = !!saved.taskComplete;
          restored = true;
        }
      }
    } catch (_) {
      /* A completed puzzle can still be reconstructed from its embedded answers. */
    }

    if (completedPuzzleRequested() && (!restored || !taskComplete || !isSolved())) {
      loadCompletedAnswers();
      restored = true;
    }
    if (!restored) return false;

    // Rebuild availablePieces: start from the full set and remove placed pieces.
    resetAvailablePieces();
    Object.keys(filled).forEach(function(step) {
      const rowFill = filled[step];
      if (!rowFill || typeof rowFill !== "object") return;
      Object.keys(rowFill).forEach(function(field) {
        const val = rowFill[field];
        if (val != null && val !== "") takePiece(field, val);
      });
    });
    return true;
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
