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
    540,
    178,
    420,
    987,
    29,
    594,
    156,
    270,
    483,
    111,
    45,
    426,
    917,
    241,
    104,
    531,
    614,
    550,
    897,
    380
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
    4,
    5,
    6,
    8,
    12,
    18,
    21,
    28,
    31,
    33,
    38,
    41,
    42,
    44,
    45,
    46,
    47,
    50,
    51,
    54,
    57,
    60,
    67,
    68,
    69,
    72,
    76,
    77,
    91,
    93,
    96,
    98,
    103,
    105,
    107,
    110,
    116,
    117,
    126,
    130,
    131,
    133,
    134,
    141,
    142,
    143,
    147,
    148,
    150,
    153,
    156,
    158,
    164,
    165,
    173,
    175,
    177,
    180,
    196,
    200,
    201,
    203,
    204,
    205,
    207,
    215,
    224,
    230,
    232,
    233,
    235,
    237,
    242,
    246,
    249
  ],
  "answers": {
    "2": {
      "stepId": "markRange",
      "low": "0",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "4": {
      "stepId": "callPartition",
      "low": "0",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "5": {
      "stepId": "setPivot",
      "low": "0",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "380",
      "pi": "\u2014"
    },
    "6": {
      "stepId": "initI",
      "low": "0",
      "high": "19",
      "i": "-1",
      "j": "\u2014",
      "pivot": "380",
      "pi": "\u2014"
    },
    "8": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "-1",
      "j": "0",
      "pivot": "380",
      "pi": "\u2014"
    },
    "12": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "0",
      "j": "2",
      "pivot": "380",
      "pi": "\u2014"
    },
    "18": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "1",
      "j": "6",
      "pivot": "380",
      "pi": "\u2014"
    },
    "21": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "2",
      "j": "7",
      "pivot": "380",
      "pi": "\u2014"
    },
    "28": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "4",
      "j": "10",
      "pivot": "380",
      "pi": "\u2014"
    },
    "31": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "5",
      "j": "11",
      "pivot": "380",
      "pi": "\u2014"
    },
    "33": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "5",
      "j": "13",
      "pivot": "380",
      "pi": "\u2014"
    },
    "38": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "19",
      "i": "7",
      "j": "14",
      "pivot": "380",
      "pi": "\u2014"
    },
    "41": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "7",
      "j": "17",
      "pivot": "380",
      "pi": "\u2014"
    },
    "42": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "7",
      "j": "18",
      "pivot": "380",
      "pi": "\u2014"
    },
    "44": {
      "stepId": "returnPi",
      "low": "0",
      "high": "19",
      "i": "7",
      "j": "\u2014",
      "pivot": "380",
      "pi": "8"
    },
    "45": {
      "stepId": "sortLeft",
      "low": "0",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "8"
    },
    "46": {
      "stepId": "markRange",
      "low": "0",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "47": {
      "stepId": "checkLowHigh",
      "low": "0",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "50": {
      "stepId": "initI",
      "low": "0",
      "high": "7",
      "i": "-1",
      "j": "\u2014",
      "pivot": "104",
      "pi": "\u2014"
    },
    "51": {
      "stepId": "forJ",
      "low": "0",
      "high": "7",
      "i": "-1",
      "j": "0",
      "pivot": "104",
      "pi": "\u2014"
    },
    "54": {
      "stepId": "incI",
      "low": "0",
      "high": "7",
      "i": "0",
      "j": "1",
      "pivot": "104",
      "pi": "\u2014"
    },
    "57": {
      "stepId": "compare",
      "low": "0",
      "high": "7",
      "i": "0",
      "j": "3",
      "pivot": "104",
      "pi": "\u2014"
    },
    "60": {
      "stepId": "incI",
      "low": "0",
      "high": "7",
      "i": "1",
      "j": "5",
      "pivot": "104",
      "pi": "\u2014"
    },
    "67": {
      "stepId": "checkLowHigh",
      "low": "0",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "68": {
      "stepId": "callPartition",
      "low": "0",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "69": {
      "stepId": "setPivot",
      "low": "0",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "45",
      "pi": "\u2014"
    },
    "72": {
      "stepId": "compare",
      "low": "0",
      "high": "1",
      "i": "-1",
      "j": "0",
      "pivot": "45",
      "pi": "\u2014"
    },
    "76": {
      "stepId": "returnPi",
      "low": "0",
      "high": "1",
      "i": "0",
      "j": "\u2014",
      "pivot": "45",
      "pi": "1"
    },
    "77": {
      "stepId": "sortLeft",
      "low": "0",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "1"
    },
    "91": {
      "stepId": "compare",
      "low": "3",
      "high": "7",
      "i": "2",
      "j": "4",
      "pivot": "156",
      "pi": "\u2014"
    },
    "93": {
      "stepId": "swapIJ",
      "low": "3",
      "high": "7",
      "i": "3",
      "j": "4",
      "pivot": "156",
      "pi": "\u2014"
    },
    "96": {
      "stepId": "swapPivot",
      "low": "3",
      "high": "7",
      "i": "3",
      "j": "\u2014",
      "pivot": "156",
      "pi": "4"
    },
    "98": {
      "stepId": "sortLeft",
      "low": "3",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "4"
    },
    "103": {
      "stepId": "checkLowHigh",
      "low": "5",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "105": {
      "stepId": "setPivot",
      "low": "5",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "270",
      "pi": "\u2014"
    },
    "107": {
      "stepId": "forJ",
      "low": "5",
      "high": "7",
      "i": "4",
      "j": "5",
      "pivot": "270",
      "pi": "\u2014"
    },
    "110": {
      "stepId": "swapIJ",
      "low": "5",
      "high": "7",
      "i": "5",
      "j": "5",
      "pivot": "270",
      "pi": "\u2014"
    },
    "116": {
      "stepId": "sortLeft",
      "low": "5",
      "high": "7",
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
    "126": {
      "stepId": "swapPivot",
      "low": "5",
      "high": "6",
      "i": "5",
      "j": "\u2014",
      "pivot": "241",
      "pi": "6"
    },
    "130": {
      "stepId": "checkLowHigh",
      "low": "5",
      "high": "5",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "131": {
      "stepId": "sortRight",
      "low": "5",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "6"
    },
    "133": {
      "stepId": "checkLowHigh",
      "low": "7",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "134": {
      "stepId": "sortRight",
      "low": "5",
      "high": "7",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "7"
    },
    "141": {
      "stepId": "setPivot",
      "low": "9",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "483",
      "pi": "\u2014"
    },
    "142": {
      "stepId": "initI",
      "low": "9",
      "high": "19",
      "i": "8",
      "j": "\u2014",
      "pivot": "483",
      "pi": "\u2014"
    },
    "143": {
      "stepId": "forJ",
      "low": "9",
      "high": "19",
      "i": "8",
      "j": "9",
      "pivot": "483",
      "pi": "\u2014"
    },
    "147": {
      "stepId": "incI",
      "low": "9",
      "high": "19",
      "i": "9",
      "j": "11",
      "pivot": "483",
      "pi": "\u2014"
    },
    "148": {
      "stepId": "swapIJ",
      "low": "9",
      "high": "19",
      "i": "9",
      "j": "11",
      "pivot": "483",
      "pi": "\u2014"
    },
    "150": {
      "stepId": "compare",
      "low": "9",
      "high": "19",
      "i": "9",
      "j": "13",
      "pivot": "483",
      "pi": "\u2014"
    },
    "153": {
      "stepId": "compare",
      "low": "9",
      "high": "19",
      "i": "10",
      "j": "14",
      "pivot": "483",
      "pi": "\u2014"
    },
    "156": {
      "stepId": "compare",
      "low": "9",
      "high": "19",
      "i": "10",
      "j": "17",
      "pivot": "483",
      "pi": "\u2014"
    },
    "158": {
      "stepId": "swapPivot",
      "low": "9",
      "high": "19",
      "i": "10",
      "j": "\u2014",
      "pivot": "483",
      "pi": "11"
    },
    "164": {
      "stepId": "setPivot",
      "low": "9",
      "high": "10",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "420",
      "pi": "\u2014"
    },
    "165": {
      "stepId": "initI",
      "low": "9",
      "high": "10",
      "i": "8",
      "j": "\u2014",
      "pivot": "420",
      "pi": "\u2014"
    },
    "173": {
      "stepId": "sortRight",
      "low": "9",
      "high": "10",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "9"
    },
    "175": {
      "stepId": "checkLowHigh",
      "low": "10",
      "high": "10",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "177": {
      "stepId": "markRange",
      "low": "12",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "180": {
      "stepId": "setPivot",
      "low": "12",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "540",
      "pi": "\u2014"
    },
    "196": {
      "stepId": "checkLowHigh",
      "low": "12",
      "high": "12",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "200": {
      "stepId": "callPartition",
      "low": "14",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "201": {
      "stepId": "setPivot",
      "low": "14",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "594",
      "pi": "\u2014"
    },
    "203": {
      "stepId": "forJ",
      "low": "14",
      "high": "19",
      "i": "13",
      "j": "14",
      "pivot": "594",
      "pi": "\u2014"
    },
    "204": {
      "stepId": "compare",
      "low": "14",
      "high": "19",
      "i": "13",
      "j": "14",
      "pivot": "594",
      "pi": "\u2014"
    },
    "205": {
      "stepId": "compare",
      "low": "14",
      "high": "19",
      "i": "13",
      "j": "15",
      "pivot": "594",
      "pi": "\u2014"
    },
    "207": {
      "stepId": "compare",
      "low": "14",
      "high": "19",
      "i": "13",
      "j": "17",
      "pivot": "594",
      "pi": "\u2014"
    },
    "215": {
      "stepId": "checkLowHigh",
      "low": "14",
      "high": "14",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "224": {
      "stepId": "incI",
      "low": "16",
      "high": "19",
      "i": "16",
      "j": "16",
      "pivot": "917",
      "pi": "\u2014"
    },
    "230": {
      "stepId": "swapPivot",
      "low": "16",
      "high": "19",
      "i": "17",
      "j": "\u2014",
      "pivot": "917",
      "pi": "18"
    },
    "232": {
      "stepId": "sortLeft",
      "low": "16",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "18"
    },
    "233": {
      "stepId": "markRange",
      "low": "16",
      "high": "17",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "235": {
      "stepId": "callPartition",
      "low": "16",
      "high": "17",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "237": {
      "stepId": "initI",
      "low": "16",
      "high": "17",
      "i": "15",
      "j": "\u2014",
      "pivot": "897",
      "pi": "\u2014"
    },
    "242": {
      "stepId": "swapPivot",
      "low": "16",
      "high": "17",
      "i": "16",
      "j": "\u2014",
      "pivot": "897",
      "pi": "17"
    },
    "246": {
      "stepId": "checkLowHigh",
      "low": "16",
      "high": "16",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "249": {
      "stepId": "checkLowHigh",
      "low": "18",
      "high": "17",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 218,
        "value": "swapPivot"
      },
      {
        "id": 155,
        "value": "incI"
      },
      {
        "id": 8,
        "value": "callPartition"
      },
      {
        "id": 36,
        "value": "compare"
      },
      {
        "id": 323,
        "value": "forJ"
      },
      {
        "id": 15,
        "value": "setPivot"
      },
      {
        "id": 120,
        "value": "checkLowHigh"
      },
      {
        "id": 274,
        "value": "swapPivot"
      },
      {
        "id": 162,
        "value": "checkLowHigh"
      },
      {
        "id": 190,
        "value": "returnPi"
      },
      {
        "id": 386,
        "value": "sortRight"
      },
      {
        "id": 148,
        "value": "compare"
      },
      {
        "id": 22,
        "value": "initI"
      },
      {
        "id": 477,
        "value": "swapPivot"
      },
      {
        "id": 407,
        "value": "setPivot"
      },
      {
        "id": 239,
        "value": "setPivot"
      },
      {
        "id": 351,
        "value": "compare"
      },
      {
        "id": 225,
        "value": "sortLeft"
      },
      {
        "id": 288,
        "value": "sortRight"
      },
      {
        "id": 267,
        "value": "markRange"
      },
      {
        "id": 526,
        "value": "checkLowHigh"
      },
      {
        "id": 253,
        "value": "swapIJ"
      },
      {
        "id": 463,
        "value": "checkLowHigh"
      },
      {
        "id": 337,
        "value": "swapIJ"
      },
      {
        "id": 372,
        "value": "setPivot"
      },
      {
        "id": 470,
        "value": "incI"
      },
      {
        "id": 260,
        "value": "sortLeft"
      },
      {
        "id": 379,
        "value": "initI"
      },
      {
        "id": 78,
        "value": "swapIJ"
      },
      {
        "id": 435,
        "value": "forJ"
      },
      {
        "id": 505,
        "value": "initI"
      },
      {
        "id": 106,
        "value": "sortLeft"
      },
      {
        "id": 113,
        "value": "markRange"
      },
      {
        "id": 400,
        "value": "markRange"
      },
      {
        "id": 64,
        "value": "compare"
      },
      {
        "id": 491,
        "value": "markRange"
      },
      {
        "id": 519,
        "value": "checkLowHigh"
      },
      {
        "id": 43,
        "value": "compare"
      },
      {
        "id": 197,
        "value": "sortLeft"
      },
      {
        "id": 365,
        "value": "swapPivot"
      },
      {
        "id": 50,
        "value": "compare"
      },
      {
        "id": 484,
        "value": "sortLeft"
      },
      {
        "id": 71,
        "value": "compare"
      },
      {
        "id": 344,
        "value": "compare"
      },
      {
        "id": 1,
        "value": "markRange"
      },
      {
        "id": 232,
        "value": "checkLowHigh"
      },
      {
        "id": 512,
        "value": "swapPivot"
      },
      {
        "id": 281,
        "value": "checkLowHigh"
      },
      {
        "id": 246,
        "value": "forJ"
      },
      {
        "id": 456,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "compare"
      },
      {
        "id": 29,
        "value": "compare"
      },
      {
        "id": 393,
        "value": "checkLowHigh"
      },
      {
        "id": 309,
        "value": "setPivot"
      },
      {
        "id": 169,
        "value": "callPartition"
      },
      {
        "id": 428,
        "value": "setPivot"
      },
      {
        "id": 414,
        "value": "checkLowHigh"
      },
      {
        "id": 421,
        "value": "callPartition"
      },
      {
        "id": 183,
        "value": "compare"
      },
      {
        "id": 92,
        "value": "compare"
      },
      {
        "id": 127,
        "value": "initI"
      },
      {
        "id": 442,
        "value": "compare"
      },
      {
        "id": 498,
        "value": "callPartition"
      },
      {
        "id": 141,
        "value": "incI"
      },
      {
        "id": 204,
        "value": "compare"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 211,
        "value": "swapIJ"
      },
      {
        "id": 99,
        "value": "returnPi"
      },
      {
        "id": 302,
        "value": "sortRight"
      },
      {
        "id": 176,
        "value": "setPivot"
      },
      {
        "id": 330,
        "value": "incI"
      },
      {
        "id": 134,
        "value": "forJ"
      },
      {
        "id": 316,
        "value": "initI"
      },
      {
        "id": 449,
        "value": "compare"
      },
      {
        "id": 295,
        "value": "checkLowHigh"
      },
      {
        "id": 358,
        "value": "compare"
      }
    ],
    "low": [
      {
        "id": 254,
        "value": "5"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 240,
        "value": "5"
      },
      {
        "id": 450,
        "value": "14"
      },
      {
        "id": 247,
        "value": "5"
      },
      {
        "id": 485,
        "value": "16"
      },
      {
        "id": 51,
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
        "id": 310,
        "value": "9"
      },
      {
        "id": 422,
        "value": "14"
      },
      {
        "id": 233,
        "value": "5"
      },
      {
        "id": 261,
        "value": "5"
      },
      {
        "id": 317,
        "value": "9"
      },
      {
        "id": 331,
        "value": "9"
      },
      {
        "id": 359,
        "value": "9"
      },
      {
        "id": 478,
        "value": "16"
      },
      {
        "id": 149,
        "value": "0"
      },
      {
        "id": 289,
        "value": "5"
      },
      {
        "id": 457,
        "value": "14"
      },
      {
        "id": 443,
        "value": "14"
      },
      {
        "id": 282,
        "value": "5"
      },
      {
        "id": 373,
        "value": "9"
      },
      {
        "id": 184,
        "value": "0"
      },
      {
        "id": 324,
        "value": "9"
      },
      {
        "id": 275,
        "value": "5"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 135,
        "value": "0"
      },
      {
        "id": 156,
        "value": "0"
      },
      {
        "id": 212,
        "value": "3"
      },
      {
        "id": 296,
        "value": "7"
      },
      {
        "id": 170,
        "value": "0"
      },
      {
        "id": 415,
        "value": "12"
      },
      {
        "id": 387,
        "value": "9"
      },
      {
        "id": 520,
        "value": "16"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 226,
        "value": "3"
      },
      {
        "id": 219,
        "value": "3"
      },
      {
        "id": 380,
        "value": "9"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 492,
        "value": "16"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 464,
        "value": "14"
      },
      {
        "id": 163,
        "value": "0"
      },
      {
        "id": 408,
        "value": "12"
      },
      {
        "id": 366,
        "value": "9"
      },
      {
        "id": 205,
        "value": "3"
      },
      {
        "id": 506,
        "value": "16"
      },
      {
        "id": 177,
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
        "value": "0"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 16,
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
        "id": 128,
        "value": "0"
      },
      {
        "id": 436,
        "value": "14"
      },
      {
        "id": 268,
        "value": "5"
      },
      {
        "id": 394,
        "value": "10"
      },
      {
        "id": 513,
        "value": "16"
      },
      {
        "id": 303,
        "value": "5"
      },
      {
        "id": 527,
        "value": "18"
      },
      {
        "id": 65,
        "value": "0"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 471,
        "value": "16"
      },
      {
        "id": 345,
        "value": "9"
      },
      {
        "id": 429,
        "value": "14"
      },
      {
        "id": 338,
        "value": "9"
      },
      {
        "id": 142,
        "value": "0"
      },
      {
        "id": 401,
        "value": "12"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 191,
        "value": "0"
      },
      {
        "id": 499,
        "value": "16"
      },
      {
        "id": 352,
        "value": "9"
      }
    ],
    "high": [
      {
        "id": 521,
        "value": "16"
      },
      {
        "id": 45,
        "value": "19"
      },
      {
        "id": 346,
        "value": "19"
      },
      {
        "id": 276,
        "value": "6"
      },
      {
        "id": 17,
        "value": "19"
      },
      {
        "id": 409,
        "value": "19"
      },
      {
        "id": 73,
        "value": "19"
      },
      {
        "id": 94,
        "value": "19"
      },
      {
        "id": 38,
        "value": "19"
      },
      {
        "id": 80,
        "value": "19"
      },
      {
        "id": 178,
        "value": "1"
      },
      {
        "id": 528,
        "value": "17"
      },
      {
        "id": 31,
        "value": "19"
      },
      {
        "id": 486,
        "value": "19"
      },
      {
        "id": 402,
        "value": "19"
      },
      {
        "id": 150,
        "value": "7"
      },
      {
        "id": 234,
        "value": "7"
      },
      {
        "id": 290,
        "value": "6"
      },
      {
        "id": 108,
        "value": "19"
      },
      {
        "id": 297,
        "value": "6"
      },
      {
        "id": 472,
        "value": "19"
      },
      {
        "id": 500,
        "value": "17"
      },
      {
        "id": 416,
        "value": "12"
      },
      {
        "id": 444,
        "value": "19"
      },
      {
        "id": 304,
        "value": "7"
      },
      {
        "id": 66,
        "value": "19"
      },
      {
        "id": 129,
        "value": "7"
      },
      {
        "id": 157,
        "value": "7"
      },
      {
        "id": 136,
        "value": "7"
      },
      {
        "id": 199,
        "value": "1"
      },
      {
        "id": 241,
        "value": "7"
      },
      {
        "id": 507,
        "value": "17"
      },
      {
        "id": 206,
        "value": "7"
      },
      {
        "id": 423,
        "value": "19"
      },
      {
        "id": 24,
        "value": "19"
      },
      {
        "id": 367,
        "value": "19"
      },
      {
        "id": 479,
        "value": "19"
      },
      {
        "id": 220,
        "value": "7"
      },
      {
        "id": 465,
        "value": "14"
      },
      {
        "id": 227,
        "value": "7"
      },
      {
        "id": 395,
        "value": "10"
      },
      {
        "id": 493,
        "value": "17"
      },
      {
        "id": 269,
        "value": "6"
      },
      {
        "id": 339,
        "value": "19"
      },
      {
        "id": 430,
        "value": "19"
      },
      {
        "id": 318,
        "value": "19"
      },
      {
        "id": 374,
        "value": "10"
      },
      {
        "id": 388,
        "value": "10"
      },
      {
        "id": 332,
        "value": "19"
      },
      {
        "id": 437,
        "value": "19"
      },
      {
        "id": 458,
        "value": "19"
      },
      {
        "id": 122,
        "value": "7"
      },
      {
        "id": 192,
        "value": "1"
      },
      {
        "id": 10,
        "value": "19"
      },
      {
        "id": 255,
        "value": "7"
      },
      {
        "id": 171,
        "value": "1"
      },
      {
        "id": 262,
        "value": "7"
      },
      {
        "id": 248,
        "value": "7"
      },
      {
        "id": 325,
        "value": "19"
      },
      {
        "id": 87,
        "value": "19"
      },
      {
        "id": 381,
        "value": "10"
      },
      {
        "id": 115,
        "value": "7"
      },
      {
        "id": 52,
        "value": "19"
      },
      {
        "id": 514,
        "value": "17"
      },
      {
        "id": 59,
        "value": "19"
      },
      {
        "id": 311,
        "value": "19"
      },
      {
        "id": 451,
        "value": "19"
      },
      {
        "id": 353,
        "value": "19"
      },
      {
        "id": 185,
        "value": "1"
      },
      {
        "id": 283,
        "value": "5"
      },
      {
        "id": 3,
        "value": "19"
      },
      {
        "id": 360,
        "value": "19"
      },
      {
        "id": 164,
        "value": "1"
      },
      {
        "id": 143,
        "value": "7"
      },
      {
        "id": 101,
        "value": "19"
      },
      {
        "id": 213,
        "value": "7"
      }
    ],
    "i": [
      {
        "id": 487,
        "value": "\u2014"
      },
      {
        "id": 200,
        "value": "\u2014"
      },
      {
        "id": 221,
        "value": "3"
      },
      {
        "id": 424,
        "value": "\u2014"
      },
      {
        "id": 228,
        "value": "\u2014"
      },
      {
        "id": 445,
        "value": "13"
      },
      {
        "id": 480,
        "value": "17"
      },
      {
        "id": 242,
        "value": "\u2014"
      },
      {
        "id": 53,
        "value": "2"
      },
      {
        "id": 67,
        "value": "5"
      },
      {
        "id": 186,
        "value": "-1"
      },
      {
        "id": 410,
        "value": "\u2014"
      },
      {
        "id": 193,
        "value": "0"
      },
      {
        "id": 102,
        "value": "7"
      },
      {
        "id": 319,
        "value": "8"
      },
      {
        "id": 340,
        "value": "9"
      },
      {
        "id": 39,
        "value": "0"
      },
      {
        "id": 270,
        "value": "\u2014"
      },
      {
        "id": 32,
        "value": "-1"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 494,
        "value": "\u2014"
      },
      {
        "id": 389,
        "value": "\u2014"
      },
      {
        "id": 515,
        "value": "16"
      },
      {
        "id": 452,
        "value": "13"
      },
      {
        "id": 207,
        "value": "2"
      },
      {
        "id": 95,
        "value": "7"
      },
      {
        "id": 508,
        "value": "15"
      },
      {
        "id": 361,
        "value": "10"
      },
      {
        "id": 123,
        "value": "\u2014"
      },
      {
        "id": 172,
        "value": "\u2014"
      },
      {
        "id": 130,
        "value": "-1"
      },
      {
        "id": 417,
        "value": "\u2014"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 144,
        "value": "0"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 11,
        "value": "\u2014"
      },
      {
        "id": 151,
        "value": "0"
      },
      {
        "id": 431,
        "value": "\u2014"
      },
      {
        "id": 81,
        "value": "7"
      },
      {
        "id": 312,
        "value": "\u2014"
      },
      {
        "id": 347,
        "value": "9"
      },
      {
        "id": 298,
        "value": "\u2014"
      },
      {
        "id": 256,
        "value": "5"
      },
      {
        "id": 305,
        "value": "\u2014"
      },
      {
        "id": 403,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "1"
      },
      {
        "id": 529,
        "value": "\u2014"
      },
      {
        "id": 368,
        "value": "10"
      },
      {
        "id": 375,
        "value": "\u2014"
      },
      {
        "id": 501,
        "value": "\u2014"
      },
      {
        "id": 88,
        "value": "7"
      },
      {
        "id": 522,
        "value": "\u2014"
      },
      {
        "id": 277,
        "value": "5"
      },
      {
        "id": 249,
        "value": "4"
      },
      {
        "id": 137,
        "value": "-1"
      },
      {
        "id": 179,
        "value": "\u2014"
      },
      {
        "id": 291,
        "value": "\u2014"
      },
      {
        "id": 109,
        "value": "\u2014"
      },
      {
        "id": 116,
        "value": "\u2014"
      },
      {
        "id": 74,
        "value": "5"
      },
      {
        "id": 25,
        "value": "-1"
      },
      {
        "id": 354,
        "value": "10"
      },
      {
        "id": 382,
        "value": "8"
      },
      {
        "id": 165,
        "value": "\u2014"
      },
      {
        "id": 284,
        "value": "\u2014"
      },
      {
        "id": 438,
        "value": "13"
      },
      {
        "id": 459,
        "value": "13"
      },
      {
        "id": 60,
        "value": "4"
      },
      {
        "id": 473,
        "value": "16"
      },
      {
        "id": 466,
        "value": "\u2014"
      },
      {
        "id": 214,
        "value": "3"
      },
      {
        "id": 18,
        "value": "\u2014"
      },
      {
        "id": 326,
        "value": "8"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 333,
        "value": "9"
      },
      {
        "id": 396,
        "value": "\u2014"
      }
    ],
    "j": [
      {
        "id": 509,
        "value": "\u2014"
      },
      {
        "id": 61,
        "value": "10"
      },
      {
        "id": 264,
        "value": "\u2014"
      },
      {
        "id": 68,
        "value": "11"
      },
      {
        "id": 327,
        "value": "9"
      },
      {
        "id": 89,
        "value": "17"
      },
      {
        "id": 215,
        "value": "4"
      },
      {
        "id": 110,
        "value": "\u2014"
      },
      {
        "id": 306,
        "value": "\u2014"
      },
      {
        "id": 376,
        "value": "\u2014"
      },
      {
        "id": 138,
        "value": "0"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 131,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "13"
      },
      {
        "id": 334,
        "value": "11"
      },
      {
        "id": 397,
        "value": "\u2014"
      },
      {
        "id": 530,
        "value": "\u2014"
      },
      {
        "id": 292,
        "value": "\u2014"
      },
      {
        "id": 320,
        "value": "\u2014"
      },
      {
        "id": 467,
        "value": "\u2014"
      },
      {
        "id": 439,
        "value": "14"
      },
      {
        "id": 173,
        "value": "\u2014"
      },
      {
        "id": 180,
        "value": "\u2014"
      },
      {
        "id": 502,
        "value": "\u2014"
      },
      {
        "id": 82,
        "value": "14"
      },
      {
        "id": 453,
        "value": "15"
      },
      {
        "id": 152,
        "value": "3"
      },
      {
        "id": 208,
        "value": "4"
      },
      {
        "id": 271,
        "value": "\u2014"
      },
      {
        "id": 47,
        "value": "6"
      },
      {
        "id": 425,
        "value": "\u2014"
      },
      {
        "id": 495,
        "value": "\u2014"
      },
      {
        "id": 187,
        "value": "0"
      },
      {
        "id": 250,
        "value": "5"
      },
      {
        "id": 124,
        "value": "\u2014"
      },
      {
        "id": 299,
        "value": "\u2014"
      },
      {
        "id": 54,
        "value": "7"
      },
      {
        "id": 446,
        "value": "14"
      },
      {
        "id": 117,
        "value": "\u2014"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 390,
        "value": "\u2014"
      },
      {
        "id": 313,
        "value": "\u2014"
      },
      {
        "id": 33,
        "value": "0"
      },
      {
        "id": 404,
        "value": "\u2014"
      },
      {
        "id": 19,
        "value": "\u2014"
      },
      {
        "id": 40,
        "value": "2"
      },
      {
        "id": 383,
        "value": "\u2014"
      },
      {
        "id": 26,
        "value": "\u2014"
      },
      {
        "id": 460,
        "value": "17"
      },
      {
        "id": 12,
        "value": "\u2014"
      },
      {
        "id": 96,
        "value": "18"
      },
      {
        "id": 488,
        "value": "\u2014"
      },
      {
        "id": 523,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 411,
        "value": "\u2014"
      },
      {
        "id": 362,
        "value": "17"
      },
      {
        "id": 474,
        "value": "16"
      },
      {
        "id": 5,
        "value": "\u2014"
      },
      {
        "id": 229,
        "value": "\u2014"
      },
      {
        "id": 159,
        "value": "5"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 516,
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
        "id": 341,
        "value": "11"
      },
      {
        "id": 432,
        "value": "\u2014"
      },
      {
        "id": 481,
        "value": "\u2014"
      },
      {
        "id": 257,
        "value": "5"
      },
      {
        "id": 355,
        "value": "14"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 145,
        "value": "1"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 418,
        "value": "\u2014"
      },
      {
        "id": 348,
        "value": "13"
      },
      {
        "id": 285,
        "value": "\u2014"
      }
    ],
    "pivot": [
      {
        "id": 377,
        "value": "420"
      },
      {
        "id": 489,
        "value": "\u2014"
      },
      {
        "id": 209,
        "value": "156"
      },
      {
        "id": 475,
        "value": "917"
      },
      {
        "id": 132,
        "value": "104"
      },
      {
        "id": 272,
        "value": "\u2014"
      },
      {
        "id": 363,
        "value": "483"
      },
      {
        "id": 202,
        "value": "\u2014"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 454,
        "value": "594"
      },
      {
        "id": 188,
        "value": "45"
      },
      {
        "id": 48,
        "value": "380"
      },
      {
        "id": 300,
        "value": "\u2014"
      },
      {
        "id": 125,
        "value": "\u2014"
      },
      {
        "id": 461,
        "value": "594"
      },
      {
        "id": 27,
        "value": "380"
      },
      {
        "id": 174,
        "value": "\u2014"
      },
      {
        "id": 160,
        "value": "104"
      },
      {
        "id": 258,
        "value": "270"
      },
      {
        "id": 244,
        "value": "270"
      },
      {
        "id": 97,
        "value": "380"
      },
      {
        "id": 181,
        "value": "45"
      },
      {
        "id": 34,
        "value": "380"
      },
      {
        "id": 195,
        "value": "45"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 293,
        "value": "\u2014"
      },
      {
        "id": 342,
        "value": "483"
      },
      {
        "id": 153,
        "value": "104"
      },
      {
        "id": 139,
        "value": "104"
      },
      {
        "id": 237,
        "value": "\u2014"
      },
      {
        "id": 104,
        "value": "380"
      },
      {
        "id": 524,
        "value": "\u2014"
      },
      {
        "id": 335,
        "value": "483"
      },
      {
        "id": 517,
        "value": "897"
      },
      {
        "id": 370,
        "value": "483"
      },
      {
        "id": 356,
        "value": "483"
      },
      {
        "id": 41,
        "value": "380"
      },
      {
        "id": 391,
        "value": "\u2014"
      },
      {
        "id": 426,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "380"
      },
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 321,
        "value": "483"
      },
      {
        "id": 384,
        "value": "420"
      },
      {
        "id": 62,
        "value": "380"
      },
      {
        "id": 496,
        "value": "\u2014"
      },
      {
        "id": 440,
        "value": "594"
      },
      {
        "id": 482,
        "value": "917"
      },
      {
        "id": 69,
        "value": "380"
      },
      {
        "id": 468,
        "value": "\u2014"
      },
      {
        "id": 286,
        "value": "\u2014"
      },
      {
        "id": 251,
        "value": "270"
      },
      {
        "id": 398,
        "value": "\u2014"
      },
      {
        "id": 314,
        "value": "483"
      },
      {
        "id": 405,
        "value": "\u2014"
      },
      {
        "id": 223,
        "value": "156"
      },
      {
        "id": 503,
        "value": "\u2014"
      },
      {
        "id": 20,
        "value": "380"
      },
      {
        "id": 146,
        "value": "104"
      },
      {
        "id": 216,
        "value": "156"
      },
      {
        "id": 76,
        "value": "380"
      },
      {
        "id": 510,
        "value": "897"
      },
      {
        "id": 349,
        "value": "483"
      },
      {
        "id": 328,
        "value": "483"
      },
      {
        "id": 83,
        "value": "380"
      },
      {
        "id": 412,
        "value": "540"
      },
      {
        "id": 90,
        "value": "380"
      },
      {
        "id": 118,
        "value": "\u2014"
      },
      {
        "id": 279,
        "value": "241"
      },
      {
        "id": 433,
        "value": "594"
      },
      {
        "id": 307,
        "value": "\u2014"
      },
      {
        "id": 531,
        "value": "\u2014"
      },
      {
        "id": 265,
        "value": "\u2014"
      },
      {
        "id": 419,
        "value": "\u2014"
      },
      {
        "id": 13,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 447,
        "value": "594"
      }
    ],
    "pi": [
      {
        "id": 217,
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
        "id": 525,
        "value": "\u2014"
      },
      {
        "id": 126,
        "value": "\u2014"
      },
      {
        "id": 189,
        "value": "\u2014"
      },
      {
        "id": 308,
        "value": "7"
      },
      {
        "id": 245,
        "value": "\u2014"
      },
      {
        "id": 343,
        "value": "\u2014"
      },
      {
        "id": 336,
        "value": "\u2014"
      },
      {
        "id": 427,
        "value": "\u2014"
      },
      {
        "id": 105,
        "value": "8"
      },
      {
        "id": 420,
        "value": "\u2014"
      },
      {
        "id": 490,
        "value": "18"
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
        "id": 301,
        "value": "\u2014"
      },
      {
        "id": 203,
        "value": "1"
      },
      {
        "id": 182,
        "value": "\u2014"
      },
      {
        "id": 462,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 497,
        "value": "\u2014"
      },
      {
        "id": 196,
        "value": "1"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 399,
        "value": "\u2014"
      },
      {
        "id": 532,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 168,
        "value": "\u2014"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 518,
        "value": "17"
      },
      {
        "id": 21,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 357,
        "value": "\u2014"
      },
      {
        "id": 259,
        "value": "\u2014"
      },
      {
        "id": 252,
        "value": "\u2014"
      },
      {
        "id": 280,
        "value": "6"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 224,
        "value": "4"
      },
      {
        "id": 469,
        "value": "\u2014"
      },
      {
        "id": 476,
        "value": "\u2014"
      },
      {
        "id": 371,
        "value": "11"
      },
      {
        "id": 273,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 350,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "4"
      },
      {
        "id": 385,
        "value": "\u2014"
      },
      {
        "id": 392,
        "value": "9"
      },
      {
        "id": 413,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 329,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 504,
        "value": "\u2014"
      },
      {
        "id": 315,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "\u2014"
      },
      {
        "id": 154,
        "value": "\u2014"
      },
      {
        "id": 511,
        "value": "\u2014"
      },
      {
        "id": 364,
        "value": "\u2014"
      },
      {
        "id": 455,
        "value": "\u2014"
      },
      {
        "id": 56,
        "value": "\u2014"
      },
      {
        "id": 161,
        "value": "\u2014"
      },
      {
        "id": 406,
        "value": "\u2014"
      },
      {
        "id": 133,
        "value": "\u2014"
      },
      {
        "id": 434,
        "value": "\u2014"
      },
      {
        "id": 77,
        "value": "\u2014"
      },
      {
        "id": 448,
        "value": "\u2014"
      },
      {
        "id": 266,
        "value": "7"
      },
      {
        "id": 49,
        "value": "\u2014"
      },
      {
        "id": 483,
        "value": "18"
      },
      {
        "id": 98,
        "value": "\u2014"
      },
      {
        "id": 322,
        "value": "\u2014"
      },
      {
        "id": 112,
        "value": "8"
      },
      {
        "id": 210,
        "value": "\u2014"
      },
      {
        "id": 294,
        "value": "6"
      },
      {
        "id": 441,
        "value": "\u2014"
      },
      {
        "id": 42,
        "value": "\u2014"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 2,
      "stepId": "markRange",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 4,
      "stepId": "callPartition",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 5,
      "stepId": "setPivot",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 380,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "high": 19,
      "i": -1,
      "j": null,
      "pivot": 380,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "high": 19,
      "i": -1,
      "j": 0,
      "pivot": 380,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 8,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": -1,
      "j": 0,
      "pivot": 380,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "high": 19,
      "i": -1,
      "j": 1,
      "pivot": 380,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 10,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 1,
      "pivot": 380,
      "pi": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 11,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 1,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 12,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 2,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 3,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 14,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 4,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 15,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 1,
      "j": 4,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 16,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 1,
      "j": 4,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        420,
        987,
        540,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 17,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 1,
      "j": 5,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        420,
        987,
        540,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 18,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 1,
      "j": 6,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        420,
        987,
        540,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 2,
      "j": 6,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        420,
        987,
        540,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 20,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 2,
      "j": 6,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        987,
        540,
        594,
        420,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 21,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 2,
      "j": 7,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        987,
        540,
        594,
        420,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 7,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        987,
        540,
        594,
        420,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 23,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 7,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        540,
        594,
        420,
        987,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 24,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 8,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        540,
        594,
        420,
        987,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 25,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 9,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        540,
        594,
        420,
        987,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 26,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 4,
      "j": 9,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        540,
        594,
        420,
        987,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 27,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 4,
      "j": 9,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        594,
        420,
        987,
        483,
        540,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 28,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 4,
      "j": 10,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        594,
        420,
        987,
        483,
        540,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 10,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        594,
        420,
        987,
        483,
        540,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 30,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 10,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        420,
        987,
        483,
        540,
        594,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 31,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 11,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        420,
        987,
        483,
        540,
        594,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 12,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        420,
        987,
        483,
        540,
        594,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 33,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 13,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        420,
        987,
        483,
        540,
        594,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "high": 19,
      "i": 6,
      "j": 13,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        420,
        987,
        483,
        540,
        594,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 35,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 6,
      "j": 13,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        987,
        483,
        540,
        594,
        426,
        917,
        420,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 36,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 6,
      "j": 14,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        987,
        483,
        540,
        594,
        426,
        917,
        420,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 37,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 7,
      "j": 14,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        987,
        483,
        540,
        594,
        426,
        917,
        420,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 38,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 7,
      "j": 14,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        483,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        380
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
      "step": 39,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 7,
      "j": 15,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        483,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 40,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 7,
      "j": 16,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        483,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 41,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 7,
      "j": 17,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        483,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        380
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
      "high": 19,
      "i": 7,
      "j": 18,
      "pivot": 380,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        483,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        380
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
      "high": 19,
      "i": 7,
      "j": null,
      "pivot": 380,
      "pi": 8,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 44,
      "stepId": "returnPi",
      "low": 0,
      "high": 19,
      "i": 7,
      "j": null,
      "pivot": 380,
      "pi": 8,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 45,
      "stepId": "sortLeft",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 8,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "markRange",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 47,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 48,
      "stepId": "callPartition",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 49,
      "stepId": "setPivot",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": 104,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 50,
      "stepId": "initI",
      "low": 0,
      "high": 7,
      "i": -1,
      "j": null,
      "pivot": 104,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 51,
      "stepId": "forJ",
      "low": 0,
      "high": 7,
      "i": -1,
      "j": 0,
      "pivot": 104,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": -1,
      "j": 0,
      "pivot": 104,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 53,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": -1,
      "j": 1,
      "pivot": 104,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 54,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 1,
      "pivot": 104,
      "pi": null,
      "array": [
        178,
        29,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 1,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        178,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 56,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 2,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        178,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 57,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 3,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        178,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 4,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        178,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 59,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 0,
      "j": 5,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        178,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 60,
      "stepId": "incI",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": 5,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        178,
        156,
        270,
        111,
        45,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": 5,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        45,
        156,
        270,
        111,
        178,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 62,
      "stepId": "compare",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": 6,
      "pivot": 104,
      "pi": null,
      "array": [
        29,
        45,
        156,
        270,
        111,
        178,
        241,
        104,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 63,
      "stepId": "swapPivot",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": null,
      "pivot": 104,
      "pi": 2,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 64,
      "stepId": "returnPi",
      "low": 0,
      "high": 7,
      "i": 1,
      "j": null,
      "pivot": 104,
      "pi": 2,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 65,
      "stepId": "sortLeft",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 66,
      "stepId": "markRange",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 67,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "callPartition",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "setPivot",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": 45,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "initI",
      "low": 0,
      "high": 1,
      "i": -1,
      "j": null,
      "pivot": 45,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 71,
      "stepId": "forJ",
      "low": 0,
      "high": 1,
      "i": -1,
      "j": 0,
      "pivot": 45,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 72,
      "stepId": "compare",
      "low": 0,
      "high": 1,
      "i": -1,
      "j": 0,
      "pivot": 45,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 73,
      "stepId": "incI",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": 0,
      "pivot": 45,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 74,
      "stepId": "swapIJ",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": 0,
      "pivot": 45,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 75,
      "stepId": "swapPivot",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": null,
      "pivot": 45,
      "pi": 1,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 76,
      "stepId": "returnPi",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": null,
      "pivot": 45,
      "pi": 1,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "sortLeft",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 78,
      "stepId": "markRange",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 79,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 80,
      "stepId": "sortRight",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 81,
      "stepId": "markRange",
      "low": 2,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 82,
      "stepId": "checkLowHigh",
      "low": 2,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 83,
      "stepId": "sortRight",
      "low": 0,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 84,
      "stepId": "markRange",
      "low": 3,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 85,
      "stepId": "checkLowHigh",
      "low": 3,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 86,
      "stepId": "callPartition",
      "low": 3,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 87,
      "stepId": "setPivot",
      "low": 3,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 88,
      "stepId": "initI",
      "low": 3,
      "high": 7,
      "i": 2,
      "j": null,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 89,
      "stepId": "forJ",
      "low": 3,
      "high": 7,
      "i": 2,
      "j": 3,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 90,
      "stepId": "compare",
      "low": 3,
      "high": 7,
      "i": 2,
      "j": 3,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 91,
      "stepId": "compare",
      "low": 3,
      "high": 7,
      "i": 2,
      "j": 4,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "incI",
      "low": 3,
      "high": 7,
      "i": 3,
      "j": 4,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        270,
        111,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 93,
      "stepId": "swapIJ",
      "low": 3,
      "high": 7,
      "i": 3,
      "j": 4,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        270,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "compare",
      "low": 3,
      "high": 7,
      "i": 3,
      "j": 5,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        270,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 95,
      "stepId": "compare",
      "low": 3,
      "high": 7,
      "i": 3,
      "j": 6,
      "pivot": 156,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        270,
        178,
        241,
        156,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 96,
      "stepId": "swapPivot",
      "low": 3,
      "high": 7,
      "i": 3,
      "j": null,
      "pivot": 156,
      "pi": 4,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 97,
      "stepId": "returnPi",
      "low": 3,
      "high": 7,
      "i": 3,
      "j": null,
      "pivot": 156,
      "pi": 4,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 98,
      "stepId": "sortLeft",
      "low": 3,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "markRange",
      "low": 3,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 100,
      "stepId": "checkLowHigh",
      "low": 3,
      "high": 3,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 101,
      "stepId": "sortRight",
      "low": 3,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 4,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 102,
      "stepId": "markRange",
      "low": 5,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 103,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "callPartition",
      "low": 5,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 105,
      "stepId": "setPivot",
      "low": 5,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "initI",
      "low": 5,
      "high": 7,
      "i": 4,
      "j": null,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 107,
      "stepId": "forJ",
      "low": 5,
      "high": 7,
      "i": 4,
      "j": 5,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "compare",
      "low": 5,
      "high": 7,
      "i": 4,
      "j": 5,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 109,
      "stepId": "incI",
      "low": 5,
      "high": 7,
      "i": 5,
      "j": 5,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 110,
      "stepId": "swapIJ",
      "low": 5,
      "high": 7,
      "i": 5,
      "j": 5,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 111,
      "stepId": "compare",
      "low": 5,
      "high": 7,
      "i": 5,
      "j": 6,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 112,
      "stepId": "incI",
      "low": 5,
      "high": 7,
      "i": 6,
      "j": 6,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 113,
      "stepId": "swapIJ",
      "low": 5,
      "high": 7,
      "i": 6,
      "j": 6,
      "pivot": 270,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 114,
      "stepId": "swapPivot",
      "low": 5,
      "high": 7,
      "i": 6,
      "j": null,
      "pivot": 270,
      "pi": 7,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 115,
      "stepId": "returnPi",
      "low": 5,
      "high": 7,
      "i": 6,
      "j": null,
      "pivot": 270,
      "pi": 7,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 116,
      "stepId": "sortLeft",
      "low": 5,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
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
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 120,
      "stepId": "setPivot",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": 241,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 121,
      "stepId": "initI",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": null,
      "pivot": 241,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 122,
      "stepId": "forJ",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": 5,
      "pivot": 241,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 123,
      "stepId": "compare",
      "low": 5,
      "high": 6,
      "i": 4,
      "j": 5,
      "pivot": 241,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 124,
      "stepId": "incI",
      "low": 5,
      "high": 6,
      "i": 5,
      "j": 5,
      "pivot": 241,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 125,
      "stepId": "swapIJ",
      "low": 5,
      "high": 6,
      "i": 5,
      "j": 5,
      "pivot": 241,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 126,
      "stepId": "swapPivot",
      "low": 5,
      "high": 6,
      "i": 5,
      "j": null,
      "pivot": 241,
      "pi": 6,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "returnPi",
      "low": 5,
      "high": 6,
      "i": 5,
      "j": null,
      "pivot": 241,
      "pi": 6,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 128,
      "stepId": "sortLeft",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 6,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 129,
      "stepId": "markRange",
      "low": 5,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 130,
      "stepId": "checkLowHigh",
      "low": 5,
      "high": 5,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 131,
      "stepId": "sortRight",
      "low": 5,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 6,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 132,
      "stepId": "markRange",
      "low": 7,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 133,
      "stepId": "checkLowHigh",
      "low": 7,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 134,
      "stepId": "sortRight",
      "low": 5,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "markRange",
      "low": 8,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 136,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 7,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 137,
      "stepId": "sortRight",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 8,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 138,
      "stepId": "markRange",
      "low": 9,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 139,
      "stepId": "checkLowHigh",
      "low": 9,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 140,
      "stepId": "callPartition",
      "low": 9,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 141,
      "stepId": "setPivot",
      "low": 9,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "initI",
      "low": 9,
      "high": 19,
      "i": 8,
      "j": null,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "forJ",
      "low": 9,
      "high": 19,
      "i": 8,
      "j": 9,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 8,
      "j": 9,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 145,
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 8,
      "j": 10,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 146,
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 8,
      "j": 11,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 147,
      "stepId": "incI",
      "low": 9,
      "high": 19,
      "i": 9,
      "j": 11,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        540,
        594,
        426,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "swapIJ",
      "low": 9,
      "high": 19,
      "i": 9,
      "j": 11,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        594,
        540,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 9,
      "j": 12,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        594,
        540,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 150,
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 9,
      "j": 13,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        594,
        540,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "incI",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": 13,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        594,
        540,
        917,
        420,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 152,
      "stepId": "swapIJ",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": 13,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        540,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 153,
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": 14,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        540,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        483
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
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": 15,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        540,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 155,
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": 16,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        540,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 156,
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": 17,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        540,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        483
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
      "step": 157,
      "stepId": "compare",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": 18,
      "pivot": 483,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        540,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        483
      ]
    },
    {
      "step": 158,
      "stepId": "swapPivot",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": null,
      "pivot": 483,
      "pi": 11,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
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
      "stepId": "returnPi",
      "low": 9,
      "high": 19,
      "i": 10,
      "j": null,
      "pivot": 483,
      "pi": 11,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 160,
      "stepId": "sortLeft",
      "low": 9,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 11,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 161,
      "stepId": "markRange",
      "low": 9,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 162,
      "stepId": "checkLowHigh",
      "low": 9,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 163,
      "stepId": "callPartition",
      "low": 9,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 164,
      "stepId": "setPivot",
      "low": 9,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": 420,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
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
      "step": 165,
      "stepId": "initI",
      "low": 9,
      "high": 10,
      "i": 8,
      "j": null,
      "pivot": 420,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
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
      "step": 166,
      "stepId": "forJ",
      "low": 9,
      "high": 10,
      "i": 8,
      "j": 9,
      "pivot": 420,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 167,
      "stepId": "compare",
      "low": 9,
      "high": 10,
      "i": 8,
      "j": 9,
      "pivot": 420,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        426,
        420,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 168,
      "stepId": "swapPivot",
      "low": 9,
      "high": 10,
      "i": 8,
      "j": null,
      "pivot": 420,
      "pi": 9,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 169,
      "stepId": "returnPi",
      "low": 9,
      "high": 10,
      "i": 8,
      "j": null,
      "pivot": 420,
      "pi": 9,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 170,
      "stepId": "sortLeft",
      "low": 9,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 171,
      "stepId": "markRange",
      "low": 9,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 172,
      "stepId": "checkLowHigh",
      "low": 9,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 173,
      "stepId": "sortRight",
      "low": 9,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
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
      "stepId": "markRange",
      "low": 10,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 175,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
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
      "stepId": "sortRight",
      "low": 9,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 11,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 177,
      "stepId": "markRange",
      "low": 12,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
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
      "step": 178,
      "stepId": "checkLowHigh",
      "low": 12,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 179,
      "stepId": "callPartition",
      "low": 12,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 180,
      "stepId": "setPivot",
      "low": 12,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
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
      "step": 181,
      "stepId": "initI",
      "low": 12,
      "high": 19,
      "i": 11,
      "j": null,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 182,
      "stepId": "forJ",
      "low": 12,
      "high": 19,
      "i": 11,
      "j": 12,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 183,
      "stepId": "compare",
      "low": 12,
      "high": 19,
      "i": 11,
      "j": 12,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 184,
      "stepId": "compare",
      "low": 12,
      "high": 19,
      "i": 11,
      "j": 13,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 185,
      "stepId": "compare",
      "low": 12,
      "high": 19,
      "i": 11,
      "j": 14,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 186,
      "stepId": "compare",
      "low": 12,
      "high": 19,
      "i": 11,
      "j": 15,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 187,
      "stepId": "incI",
      "low": 12,
      "high": 19,
      "i": 12,
      "j": 15,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        917,
        594,
        987,
        531,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 188,
      "stepId": "swapIJ",
      "low": 12,
      "high": 19,
      "i": 12,
      "j": 15,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        594,
        987,
        917,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 189,
      "stepId": "compare",
      "low": 12,
      "high": 19,
      "i": 12,
      "j": 16,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        594,
        987,
        917,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 190,
      "stepId": "compare",
      "low": 12,
      "high": 19,
      "i": 12,
      "j": 17,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        594,
        987,
        917,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 191,
      "stepId": "compare",
      "low": 12,
      "high": 19,
      "i": 12,
      "j": 18,
      "pivot": 540,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        594,
        987,
        917,
        614,
        550,
        897,
        540
      ]
    },
    {
      "step": 192,
      "stepId": "swapPivot",
      "low": 12,
      "high": 19,
      "i": 12,
      "j": null,
      "pivot": 540,
      "pi": 13,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 193,
      "stepId": "returnPi",
      "low": 12,
      "high": 19,
      "i": 12,
      "j": null,
      "pivot": 540,
      "pi": 13,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 194,
      "stepId": "sortLeft",
      "low": 12,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 13,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 195,
      "stepId": "markRange",
      "low": 12,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 196,
      "stepId": "checkLowHigh",
      "low": 12,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
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
      "step": 197,
      "stepId": "sortRight",
      "low": 12,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 13,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 198,
      "stepId": "markRange",
      "low": 14,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 199,
      "stepId": "checkLowHigh",
      "low": 14,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 200,
      "stepId": "callPartition",
      "low": 14,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
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
      "step": 201,
      "stepId": "setPivot",
      "low": 14,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
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
      "step": 202,
      "stepId": "initI",
      "low": 14,
      "high": 19,
      "i": 13,
      "j": null,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 203,
      "stepId": "forJ",
      "low": 14,
      "high": 19,
      "i": 13,
      "j": 14,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
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
      "step": 204,
      "stepId": "compare",
      "low": 14,
      "high": 19,
      "i": 13,
      "j": 14,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
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
      "step": 205,
      "stepId": "compare",
      "low": 14,
      "high": 19,
      "i": 13,
      "j": 15,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
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
      "step": 206,
      "stepId": "compare",
      "low": 14,
      "high": 19,
      "i": 13,
      "j": 16,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 207,
      "stepId": "compare",
      "low": 14,
      "high": 19,
      "i": 13,
      "j": 17,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
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
      "step": 208,
      "stepId": "incI",
      "low": 14,
      "high": 19,
      "i": 14,
      "j": 17,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        987,
        917,
        614,
        550,
        897,
        594
      ]
    },
    {
      "step": 209,
      "stepId": "swapIJ",
      "low": 14,
      "high": 19,
      "i": 14,
      "j": 17,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        917,
        614,
        987,
        897,
        594
      ]
    },
    {
      "step": 210,
      "stepId": "compare",
      "low": 14,
      "high": 19,
      "i": 14,
      "j": 18,
      "pivot": 594,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        917,
        614,
        987,
        897,
        594
      ]
    },
    {
      "step": 211,
      "stepId": "swapPivot",
      "low": 14,
      "high": 19,
      "i": 14,
      "j": null,
      "pivot": 594,
      "pi": 15,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 212,
      "stepId": "returnPi",
      "low": 14,
      "high": 19,
      "i": 14,
      "j": null,
      "pivot": 594,
      "pi": 15,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 213,
      "stepId": "sortLeft",
      "low": 14,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 15,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 214,
      "stepId": "markRange",
      "low": 14,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 215,
      "stepId": "checkLowHigh",
      "low": 14,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
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
      "step": 216,
      "stepId": "sortRight",
      "low": 14,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 15,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 217,
      "stepId": "markRange",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 218,
      "stepId": "checkLowHigh",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 219,
      "stepId": "callPartition",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 220,
      "stepId": "setPivot",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 221,
      "stepId": "initI",
      "low": 16,
      "high": 19,
      "i": 15,
      "j": null,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 222,
      "stepId": "forJ",
      "low": 16,
      "high": 19,
      "i": 15,
      "j": 16,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 223,
      "stepId": "compare",
      "low": 16,
      "high": 19,
      "i": 15,
      "j": 16,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 224,
      "stepId": "incI",
      "low": 16,
      "high": 19,
      "i": 16,
      "j": 16,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
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
      "step": 225,
      "stepId": "swapIJ",
      "low": 16,
      "high": 19,
      "i": 16,
      "j": 16,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 226,
      "stepId": "compare",
      "low": 16,
      "high": 19,
      "i": 16,
      "j": 17,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 227,
      "stepId": "compare",
      "low": 16,
      "high": 19,
      "i": 16,
      "j": 18,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 228,
      "stepId": "incI",
      "low": 16,
      "high": 19,
      "i": 17,
      "j": 18,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        987,
        897,
        917
      ]
    },
    {
      "step": 229,
      "stepId": "swapIJ",
      "low": 16,
      "high": 19,
      "i": 17,
      "j": 18,
      "pivot": 917,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        987,
        917
      ]
    },
    {
      "step": 230,
      "stepId": "swapPivot",
      "low": 16,
      "high": 19,
      "i": 17,
      "j": null,
      "pivot": 917,
      "pi": 18,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 231,
      "stepId": "returnPi",
      "low": 16,
      "high": 19,
      "i": 17,
      "j": null,
      "pivot": 917,
      "pi": 18,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 232,
      "stepId": "sortLeft",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 18,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 233,
      "stepId": "markRange",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 234,
      "stepId": "checkLowHigh",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 235,
      "stepId": "callPartition",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 236,
      "stepId": "setPivot",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": 897,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 237,
      "stepId": "initI",
      "low": 16,
      "high": 17,
      "i": 15,
      "j": null,
      "pivot": 897,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 238,
      "stepId": "forJ",
      "low": 16,
      "high": 17,
      "i": 15,
      "j": 16,
      "pivot": 897,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 239,
      "stepId": "compare",
      "low": 16,
      "high": 17,
      "i": 15,
      "j": 16,
      "pivot": 897,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 240,
      "stepId": "incI",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": 16,
      "pivot": 897,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 241,
      "stepId": "swapIJ",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": 16,
      "pivot": 897,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 242,
      "stepId": "swapPivot",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": null,
      "pivot": 897,
      "pi": 17,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 243,
      "stepId": "returnPi",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": null,
      "pivot": 897,
      "pi": 17,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 244,
      "stepId": "sortLeft",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 17,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 245,
      "stepId": "markRange",
      "low": 16,
      "high": 16,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 246,
      "stepId": "checkLowHigh",
      "low": 16,
      "high": 16,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 247,
      "stepId": "sortRight",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 17,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 248,
      "stepId": "markRange",
      "low": 18,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 249,
      "stepId": "checkLowHigh",
      "low": 18,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
      "step": 250,
      "stepId": "sortRight",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 18,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 251,
      "stepId": "markRange",
      "low": 19,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
      ]
    },
    {
      "step": 252,
      "stepId": "checkLowHigh",
      "low": 19,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
