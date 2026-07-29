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
    19,
    272,
    500,
    48,
    194,
    958,
    652,
    55,
    253,
    890,
    183,
    197,
    733,
    977,
    593,
    359,
    926,
    951,
    112,
    219
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
    8,
    12,
    15,
    17,
    18,
    22,
    23,
    26,
    30,
    32,
    33,
    37,
    45,
    46,
    50,
    51,
    53,
    58,
    59,
    60,
    61,
    66,
    67,
    71,
    74,
    75,
    76,
    79,
    80,
    82,
    84,
    88,
    89,
    90,
    94,
    98,
    105,
    106,
    108,
    114,
    118,
    126,
    129,
    137,
    140,
    144,
    145,
    148,
    150,
    152,
    153,
    157,
    161,
    165,
    167,
    168,
    175,
    178,
    181,
    185,
    187,
    189,
    190,
    196,
    204,
    207,
    209,
    215,
    220,
    221,
    226,
    235,
    239,
    243,
    248,
    254,
    259,
    262,
    263,
    268,
    270,
    272,
    274,
    280
  ],
  "answers": {
    "8": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "-1",
      "j": "0",
      "pivot": "219",
      "pi": "\u2014"
    },
    "12": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "0",
      "j": "2",
      "pivot": "219",
      "pi": "\u2014"
    },
    "15": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "19",
      "i": "1",
      "j": "3",
      "pivot": "219",
      "pi": "\u2014"
    },
    "17": {
      "stepId": "incI",
      "low": "0",
      "high": "19",
      "i": "2",
      "j": "4",
      "pivot": "219",
      "pi": "\u2014"
    },
    "18": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "19",
      "i": "2",
      "j": "4",
      "pivot": "219",
      "pi": "\u2014"
    },
    "22": {
      "stepId": "incI",
      "low": "0",
      "high": "19",
      "i": "3",
      "j": "7",
      "pivot": "219",
      "pi": "\u2014"
    },
    "23": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "19",
      "i": "3",
      "j": "7",
      "pivot": "219",
      "pi": "\u2014"
    },
    "26": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "3",
      "j": "10",
      "pivot": "219",
      "pi": "\u2014"
    },
    "30": {
      "stepId": "incI",
      "low": "0",
      "high": "19",
      "i": "5",
      "j": "11",
      "pivot": "219",
      "pi": "\u2014"
    },
    "32": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "5",
      "j": "12",
      "pivot": "219",
      "pi": "\u2014"
    },
    "33": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "5",
      "j": "13",
      "pivot": "219",
      "pi": "\u2014"
    },
    "37": {
      "stepId": "compare",
      "low": "0",
      "high": "19",
      "i": "5",
      "j": "17",
      "pivot": "219",
      "pi": "\u2014"
    },
    "45": {
      "stepId": "checkLowHigh",
      "low": "0",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "46": {
      "stepId": "callPartition",
      "low": "0",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "50": {
      "stepId": "compare",
      "low": "0",
      "high": "6",
      "i": "-1",
      "j": "0",
      "pivot": "112",
      "pi": "\u2014"
    },
    "51": {
      "stepId": "incI",
      "low": "0",
      "high": "6",
      "i": "0",
      "j": "0",
      "pivot": "112",
      "pi": "\u2014"
    },
    "53": {
      "stepId": "compare",
      "low": "0",
      "high": "6",
      "i": "0",
      "j": "1",
      "pivot": "112",
      "pi": "\u2014"
    },
    "58": {
      "stepId": "incI",
      "low": "0",
      "high": "6",
      "i": "2",
      "j": "3",
      "pivot": "112",
      "pi": "\u2014"
    },
    "59": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "6",
      "i": "2",
      "j": "3",
      "pivot": "112",
      "pi": "\u2014"
    },
    "60": {
      "stepId": "compare",
      "low": "0",
      "high": "6",
      "i": "2",
      "j": "4",
      "pivot": "112",
      "pi": "\u2014"
    },
    "61": {
      "stepId": "compare",
      "low": "0",
      "high": "6",
      "i": "2",
      "j": "5",
      "pivot": "112",
      "pi": "\u2014"
    },
    "66": {
      "stepId": "checkLowHigh",
      "low": "0",
      "high": "2",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "67": {
      "stepId": "callPartition",
      "low": "0",
      "high": "2",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "71": {
      "stepId": "compare",
      "low": "0",
      "high": "2",
      "i": "-1",
      "j": "0",
      "pivot": "55",
      "pi": "\u2014"
    },
    "74": {
      "stepId": "compare",
      "low": "0",
      "high": "2",
      "i": "0",
      "j": "1",
      "pivot": "55",
      "pi": "\u2014"
    },
    "75": {
      "stepId": "incI",
      "low": "0",
      "high": "2",
      "i": "1",
      "j": "1",
      "pivot": "55",
      "pi": "\u2014"
    },
    "76": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "2",
      "i": "1",
      "j": "1",
      "pivot": "55",
      "pi": "\u2014"
    },
    "79": {
      "stepId": "sortLeft",
      "low": "0",
      "high": "2",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "2"
    },
    "80": {
      "stepId": "markRange",
      "low": "0",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "82": {
      "stepId": "callPartition",
      "low": "0",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "84": {
      "stepId": "initI",
      "low": "0",
      "high": "1",
      "i": "-1",
      "j": "\u2014",
      "pivot": "48",
      "pi": "\u2014"
    },
    "88": {
      "stepId": "swapIJ",
      "low": "0",
      "high": "1",
      "i": "0",
      "j": "0",
      "pivot": "48",
      "pi": "\u2014"
    },
    "89": {
      "stepId": "swapPivot",
      "low": "0",
      "high": "1",
      "i": "0",
      "j": "\u2014",
      "pivot": "48",
      "pi": "1"
    },
    "90": {
      "stepId": "returnPi",
      "low": "0",
      "high": "1",
      "i": "0",
      "j": "\u2014",
      "pivot": "48",
      "pi": "1"
    },
    "94": {
      "stepId": "sortRight",
      "low": "0",
      "high": "1",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "1"
    },
    "98": {
      "stepId": "markRange",
      "low": "3",
      "high": "2",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "105": {
      "stepId": "initI",
      "low": "4",
      "high": "6",
      "i": "3",
      "j": "\u2014",
      "pivot": "194",
      "pi": "\u2014"
    },
    "106": {
      "stepId": "forJ",
      "low": "4",
      "high": "6",
      "i": "3",
      "j": "4",
      "pivot": "194",
      "pi": "\u2014"
    },
    "108": {
      "stepId": "incI",
      "low": "4",
      "high": "6",
      "i": "4",
      "j": "4",
      "pivot": "194",
      "pi": "\u2014"
    },
    "114": {
      "stepId": "markRange",
      "low": "4",
      "high": "4",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "118": {
      "stepId": "checkLowHigh",
      "low": "6",
      "high": "6",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "126": {
      "stepId": "compare",
      "low": "8",
      "high": "19",
      "i": "7",
      "j": "8",
      "pivot": "272",
      "pi": "\u2014"
    },
    "129": {
      "stepId": "compare",
      "low": "8",
      "high": "19",
      "i": "8",
      "j": "9",
      "pivot": "272",
      "pi": "\u2014"
    },
    "137": {
      "stepId": "compare",
      "low": "8",
      "high": "19",
      "i": "8",
      "j": "17",
      "pivot": "272",
      "pi": "\u2014"
    },
    "140": {
      "stepId": "returnPi",
      "low": "8",
      "high": "19",
      "i": "8",
      "j": "\u2014",
      "pivot": "272",
      "pi": "9"
    },
    "144": {
      "stepId": "sortRight",
      "low": "8",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "9"
    },
    "145": {
      "stepId": "markRange",
      "low": "10",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "148": {
      "stepId": "setPivot",
      "low": "10",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "890",
      "pi": "\u2014"
    },
    "150": {
      "stepId": "forJ",
      "low": "10",
      "high": "19",
      "i": "9",
      "j": "10",
      "pivot": "890",
      "pi": "\u2014"
    },
    "152": {
      "stepId": "incI",
      "low": "10",
      "high": "19",
      "i": "10",
      "j": "10",
      "pivot": "890",
      "pi": "\u2014"
    },
    "153": {
      "stepId": "swapIJ",
      "low": "10",
      "high": "19",
      "i": "10",
      "j": "10",
      "pivot": "890",
      "pi": "\u2014"
    },
    "157": {
      "stepId": "swapIJ",
      "low": "10",
      "high": "19",
      "i": "11",
      "j": "12",
      "pivot": "890",
      "pi": "\u2014"
    },
    "161": {
      "stepId": "swapIJ",
      "low": "10",
      "high": "19",
      "i": "12",
      "j": "14",
      "pivot": "890",
      "pi": "\u2014"
    },
    "165": {
      "stepId": "compare",
      "low": "10",
      "high": "19",
      "i": "13",
      "j": "16",
      "pivot": "890",
      "pi": "\u2014"
    },
    "167": {
      "stepId": "compare",
      "low": "10",
      "high": "19",
      "i": "13",
      "j": "18",
      "pivot": "890",
      "pi": "\u2014"
    },
    "168": {
      "stepId": "incI",
      "low": "10",
      "high": "19",
      "i": "14",
      "j": "18",
      "pivot": "890",
      "pi": "\u2014"
    },
    "175": {
      "stepId": "callPartition",
      "low": "10",
      "high": "14",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "178": {
      "stepId": "forJ",
      "low": "10",
      "high": "14",
      "i": "9",
      "j": "10",
      "pivot": "652",
      "pi": "\u2014"
    },
    "181": {
      "stepId": "swapIJ",
      "low": "10",
      "high": "14",
      "i": "10",
      "j": "10",
      "pivot": "652",
      "pi": "\u2014"
    },
    "185": {
      "stepId": "swapIJ",
      "low": "10",
      "high": "14",
      "i": "11",
      "j": "12",
      "pivot": "652",
      "pi": "\u2014"
    },
    "187": {
      "stepId": "incI",
      "low": "10",
      "high": "14",
      "i": "12",
      "j": "13",
      "pivot": "652",
      "pi": "\u2014"
    },
    "189": {
      "stepId": "swapPivot",
      "low": "10",
      "high": "14",
      "i": "12",
      "j": "\u2014",
      "pivot": "652",
      "pi": "13"
    },
    "190": {
      "stepId": "returnPi",
      "low": "10",
      "high": "14",
      "i": "12",
      "j": "\u2014",
      "pivot": "652",
      "pi": "13"
    },
    "196": {
      "stepId": "initI",
      "low": "10",
      "high": "12",
      "i": "9",
      "j": "\u2014",
      "pivot": "359",
      "pi": "\u2014"
    },
    "204": {
      "stepId": "checkLowHigh",
      "low": "10",
      "high": "9",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "207": {
      "stepId": "checkLowHigh",
      "low": "11",
      "high": "12",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "209": {
      "stepId": "setPivot",
      "low": "11",
      "high": "12",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "500",
      "pi": "\u2014"
    },
    "215": {
      "stepId": "sortLeft",
      "low": "11",
      "high": "12",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "11"
    },
    "220": {
      "stepId": "checkLowHigh",
      "low": "12",
      "high": "12",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "221": {
      "stepId": "sortRight",
      "low": "10",
      "high": "14",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "13"
    },
    "226": {
      "stepId": "checkLowHigh",
      "low": "16",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "235": {
      "stepId": "incI",
      "low": "16",
      "high": "19",
      "i": "17",
      "j": "17",
      "pivot": "977",
      "pi": "\u2014"
    },
    "239": {
      "stepId": "swapIJ",
      "low": "16",
      "high": "19",
      "i": "18",
      "j": "18",
      "pivot": "977",
      "pi": "\u2014"
    },
    "243": {
      "stepId": "markRange",
      "low": "16",
      "high": "18",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "248": {
      "stepId": "forJ",
      "low": "16",
      "high": "18",
      "i": "15",
      "j": "16",
      "pivot": "958",
      "pi": "\u2014"
    },
    "254": {
      "stepId": "swapIJ",
      "low": "16",
      "high": "18",
      "i": "17",
      "j": "17",
      "pivot": "958",
      "pi": "\u2014"
    },
    "259": {
      "stepId": "checkLowHigh",
      "low": "16",
      "high": "17",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "262": {
      "stepId": "initI",
      "low": "16",
      "high": "17",
      "i": "15",
      "j": "\u2014",
      "pivot": "951",
      "pi": "\u2014"
    },
    "263": {
      "stepId": "forJ",
      "low": "16",
      "high": "17",
      "i": "15",
      "j": "16",
      "pivot": "951",
      "pi": "\u2014"
    },
    "268": {
      "stepId": "returnPi",
      "low": "16",
      "high": "17",
      "i": "16",
      "j": "\u2014",
      "pivot": "951",
      "pi": "17"
    },
    "270": {
      "stepId": "markRange",
      "low": "16",
      "high": "16",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "272": {
      "stepId": "sortRight",
      "low": "16",
      "high": "17",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "17"
    },
    "274": {
      "stepId": "checkLowHigh",
      "low": "18",
      "high": "17",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    },
    "280": {
      "stepId": "checkLowHigh",
      "low": "20",
      "high": "19",
      "i": "\u2014",
      "j": "\u2014",
      "pivot": "\u2014",
      "pi": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 456,
        "value": "checkLowHigh"
      },
      {
        "id": 400,
        "value": "forJ"
      },
      {
        "id": 372,
        "value": "compare"
      },
      {
        "id": 8,
        "value": "compare"
      },
      {
        "id": 414,
        "value": "swapIJ"
      },
      {
        "id": 554,
        "value": "returnPi"
      },
      {
        "id": 246,
        "value": "markRange"
      },
      {
        "id": 540,
        "value": "initI"
      },
      {
        "id": 533,
        "value": "checkLowHigh"
      },
      {
        "id": 505,
        "value": "swapIJ"
      },
      {
        "id": 428,
        "value": "swapPivot"
      },
      {
        "id": 274,
        "value": "markRange"
      },
      {
        "id": 29,
        "value": "swapIJ"
      },
      {
        "id": 64,
        "value": "compare"
      },
      {
        "id": 169,
        "value": "compare"
      },
      {
        "id": 561,
        "value": "markRange"
      },
      {
        "id": 442,
        "value": "initI"
      },
      {
        "id": 183,
        "value": "swapIJ"
      },
      {
        "id": 225,
        "value": "swapPivot"
      },
      {
        "id": 295,
        "value": "compare"
      },
      {
        "id": 449,
        "value": "checkLowHigh"
      },
      {
        "id": 57,
        "value": "incI"
      },
      {
        "id": 470,
        "value": "sortLeft"
      },
      {
        "id": 113,
        "value": "compare"
      },
      {
        "id": 232,
        "value": "returnPi"
      },
      {
        "id": 288,
        "value": "compare"
      },
      {
        "id": 239,
        "value": "sortRight"
      },
      {
        "id": 141,
        "value": "compare"
      },
      {
        "id": 547,
        "value": "forJ"
      },
      {
        "id": 43,
        "value": "swapIJ"
      },
      {
        "id": 491,
        "value": "checkLowHigh"
      },
      {
        "id": 512,
        "value": "markRange"
      },
      {
        "id": 351,
        "value": "swapIJ"
      },
      {
        "id": 134,
        "value": "compare"
      },
      {
        "id": 71,
        "value": "compare"
      },
      {
        "id": 148,
        "value": "checkLowHigh"
      },
      {
        "id": 316,
        "value": "sortRight"
      },
      {
        "id": 575,
        "value": "checkLowHigh"
      },
      {
        "id": 85,
        "value": "checkLowHigh"
      },
      {
        "id": 99,
        "value": "compare"
      },
      {
        "id": 190,
        "value": "sortLeft"
      },
      {
        "id": 407,
        "value": "swapIJ"
      },
      {
        "id": 484,
        "value": "sortRight"
      },
      {
        "id": 330,
        "value": "setPivot"
      },
      {
        "id": 526,
        "value": "swapIJ"
      },
      {
        "id": 155,
        "value": "callPartition"
      },
      {
        "id": 498,
        "value": "incI"
      },
      {
        "id": 435,
        "value": "returnPi"
      },
      {
        "id": 92,
        "value": "callPartition"
      },
      {
        "id": 365,
        "value": "swapIJ"
      },
      {
        "id": 302,
        "value": "compare"
      },
      {
        "id": 358,
        "value": "swapIJ"
      },
      {
        "id": 211,
        "value": "initI"
      },
      {
        "id": 253,
        "value": "initI"
      },
      {
        "id": 421,
        "value": "incI"
      },
      {
        "id": 477,
        "value": "checkLowHigh"
      },
      {
        "id": 281,
        "value": "checkLowHigh"
      },
      {
        "id": 344,
        "value": "incI"
      },
      {
        "id": 393,
        "value": "callPartition"
      },
      {
        "id": 309,
        "value": "returnPi"
      },
      {
        "id": 267,
        "value": "incI"
      },
      {
        "id": 582,
        "value": "checkLowHigh"
      },
      {
        "id": 260,
        "value": "forJ"
      },
      {
        "id": 197,
        "value": "markRange"
      },
      {
        "id": 120,
        "value": "incI"
      },
      {
        "id": 78,
        "value": "compare"
      },
      {
        "id": 323,
        "value": "markRange"
      },
      {
        "id": 176,
        "value": "incI"
      },
      {
        "id": 1,
        "value": "compare"
      },
      {
        "id": 204,
        "value": "callPartition"
      },
      {
        "id": 568,
        "value": "sortRight"
      },
      {
        "id": 519,
        "value": "forJ"
      },
      {
        "id": 50,
        "value": "compare"
      },
      {
        "id": 22,
        "value": "incI"
      },
      {
        "id": 127,
        "value": "swapIJ"
      },
      {
        "id": 162,
        "value": "compare"
      },
      {
        "id": 36,
        "value": "incI"
      },
      {
        "id": 379,
        "value": "compare"
      },
      {
        "id": 106,
        "value": "incI"
      },
      {
        "id": 386,
        "value": "incI"
      },
      {
        "id": 463,
        "value": "setPivot"
      },
      {
        "id": 337,
        "value": "forJ"
      },
      {
        "id": 218,
        "value": "swapIJ"
      },
      {
        "id": 15,
        "value": "swapIJ"
      }
    ],
    "low": [
      {
        "id": 373,
        "value": "10"
      },
      {
        "id": 121,
        "value": "0"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 219,
        "value": "0"
      },
      {
        "id": 268,
        "value": "4"
      },
      {
        "id": 324,
        "value": "10"
      },
      {
        "id": 261,
        "value": "4"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 576,
        "value": "18"
      },
      {
        "id": 415,
        "value": "10"
      },
      {
        "id": 548,
        "value": "16"
      },
      {
        "id": 310,
        "value": "8"
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
        "id": 541,
        "value": "16"
      },
      {
        "id": 394,
        "value": "10"
      },
      {
        "id": 93,
        "value": "0"
      },
      {
        "id": 191,
        "value": "0"
      },
      {
        "id": 352,
        "value": "10"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 443,
        "value": "10"
      },
      {
        "id": 499,
        "value": "16"
      },
      {
        "id": 583,
        "value": "20"
      },
      {
        "id": 457,
        "value": "11"
      },
      {
        "id": 317,
        "value": "8"
      },
      {
        "id": 387,
        "value": "10"
      },
      {
        "id": 422,
        "value": "10"
      },
      {
        "id": 226,
        "value": "0"
      },
      {
        "id": 562,
        "value": "16"
      },
      {
        "id": 359,
        "value": "10"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 492,
        "value": "16"
      },
      {
        "id": 345,
        "value": "10"
      },
      {
        "id": 436,
        "value": "10"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 205,
        "value": "0"
      },
      {
        "id": 247,
        "value": "3"
      },
      {
        "id": 471,
        "value": "11"
      },
      {
        "id": 170,
        "value": "0"
      },
      {
        "id": 338,
        "value": "10"
      },
      {
        "id": 275,
        "value": "4"
      },
      {
        "id": 464,
        "value": "11"
      },
      {
        "id": 142,
        "value": "0"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 485,
        "value": "10"
      },
      {
        "id": 184,
        "value": "0"
      },
      {
        "id": 513,
        "value": "16"
      },
      {
        "id": 527,
        "value": "16"
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
        "id": 478,
        "value": "12"
      },
      {
        "id": 240,
        "value": "0"
      },
      {
        "id": 212,
        "value": "0"
      },
      {
        "id": 198,
        "value": "0"
      },
      {
        "id": 534,
        "value": "16"
      },
      {
        "id": 296,
        "value": "8"
      },
      {
        "id": 366,
        "value": "10"
      },
      {
        "id": 401,
        "value": "10"
      },
      {
        "id": 380,
        "value": "10"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 128,
        "value": "0"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 177,
        "value": "0"
      },
      {
        "id": 429,
        "value": "10"
      },
      {
        "id": 520,
        "value": "16"
      },
      {
        "id": 289,
        "value": "8"
      },
      {
        "id": 135,
        "value": "0"
      },
      {
        "id": 65,
        "value": "0"
      },
      {
        "id": 450,
        "value": "10"
      },
      {
        "id": 282,
        "value": "6"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 86,
        "value": "0"
      },
      {
        "id": 569,
        "value": "16"
      },
      {
        "id": 555,
        "value": "16"
      },
      {
        "id": 114,
        "value": "0"
      },
      {
        "id": 233,
        "value": "0"
      },
      {
        "id": 506,
        "value": "16"
      },
      {
        "id": 149,
        "value": "0"
      },
      {
        "id": 408,
        "value": "10"
      },
      {
        "id": 254,
        "value": "4"
      },
      {
        "id": 163,
        "value": "0"
      },
      {
        "id": 331,
        "value": "10"
      },
      {
        "id": 100,
        "value": "0"
      }
    ],
    "high": [
      {
        "id": 472,
        "value": "12"
      },
      {
        "id": 129,
        "value": "6"
      },
      {
        "id": 269,
        "value": "6"
      },
      {
        "id": 465,
        "value": "12"
      },
      {
        "id": 353,
        "value": "19"
      },
      {
        "id": 255,
        "value": "6"
      },
      {
        "id": 486,
        "value": "14"
      },
      {
        "id": 248,
        "value": "2"
      },
      {
        "id": 164,
        "value": "2"
      },
      {
        "id": 346,
        "value": "19"
      },
      {
        "id": 101,
        "value": "6"
      },
      {
        "id": 24,
        "value": "19"
      },
      {
        "id": 528,
        "value": "18"
      },
      {
        "id": 339,
        "value": "19"
      },
      {
        "id": 290,
        "value": "19"
      },
      {
        "id": 94,
        "value": "6"
      },
      {
        "id": 17,
        "value": "19"
      },
      {
        "id": 66,
        "value": "19"
      },
      {
        "id": 374,
        "value": "19"
      },
      {
        "id": 542,
        "value": "17"
      },
      {
        "id": 514,
        "value": "18"
      },
      {
        "id": 556,
        "value": "17"
      },
      {
        "id": 143,
        "value": "6"
      },
      {
        "id": 227,
        "value": "1"
      },
      {
        "id": 437,
        "value": "14"
      },
      {
        "id": 297,
        "value": "19"
      },
      {
        "id": 367,
        "value": "19"
      },
      {
        "id": 234,
        "value": "1"
      },
      {
        "id": 332,
        "value": "19"
      },
      {
        "id": 171,
        "value": "2"
      },
      {
        "id": 360,
        "value": "19"
      },
      {
        "id": 416,
        "value": "14"
      },
      {
        "id": 73,
        "value": "19"
      },
      {
        "id": 381,
        "value": "19"
      },
      {
        "id": 535,
        "value": "17"
      },
      {
        "id": 3,
        "value": "19"
      },
      {
        "id": 507,
        "value": "19"
      },
      {
        "id": 325,
        "value": "19"
      },
      {
        "id": 108,
        "value": "6"
      },
      {
        "id": 213,
        "value": "1"
      },
      {
        "id": 52,
        "value": "19"
      },
      {
        "id": 563,
        "value": "16"
      },
      {
        "id": 31,
        "value": "19"
      },
      {
        "id": 150,
        "value": "2"
      },
      {
        "id": 570,
        "value": "17"
      },
      {
        "id": 318,
        "value": "19"
      },
      {
        "id": 199,
        "value": "1"
      },
      {
        "id": 395,
        "value": "14"
      },
      {
        "id": 45,
        "value": "19"
      },
      {
        "id": 311,
        "value": "19"
      },
      {
        "id": 409,
        "value": "14"
      },
      {
        "id": 185,
        "value": "2"
      },
      {
        "id": 493,
        "value": "19"
      },
      {
        "id": 192,
        "value": "2"
      },
      {
        "id": 430,
        "value": "14"
      },
      {
        "id": 87,
        "value": "6"
      },
      {
        "id": 59,
        "value": "19"
      },
      {
        "id": 304,
        "value": "19"
      },
      {
        "id": 577,
        "value": "17"
      },
      {
        "id": 283,
        "value": "6"
      },
      {
        "id": 38,
        "value": "19"
      },
      {
        "id": 241,
        "value": "1"
      },
      {
        "id": 262,
        "value": "6"
      },
      {
        "id": 500,
        "value": "19"
      },
      {
        "id": 584,
        "value": "19"
      },
      {
        "id": 220,
        "value": "1"
      },
      {
        "id": 451,
        "value": "9"
      },
      {
        "id": 479,
        "value": "12"
      },
      {
        "id": 402,
        "value": "14"
      },
      {
        "id": 80,
        "value": "19"
      },
      {
        "id": 122,
        "value": "6"
      },
      {
        "id": 276,
        "value": "4"
      },
      {
        "id": 157,
        "value": "2"
      },
      {
        "id": 178,
        "value": "2"
      },
      {
        "id": 444,
        "value": "12"
      },
      {
        "id": 521,
        "value": "18"
      },
      {
        "id": 10,
        "value": "19"
      },
      {
        "id": 549,
        "value": "17"
      },
      {
        "id": 115,
        "value": "6"
      },
      {
        "id": 388,
        "value": "19"
      },
      {
        "id": 423,
        "value": "14"
      },
      {
        "id": 136,
        "value": "6"
      },
      {
        "id": 206,
        "value": "1"
      },
      {
        "id": 458,
        "value": "12"
      }
    ],
    "i": [
      {
        "id": 501,
        "value": "17"
      },
      {
        "id": 585,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "3"
      },
      {
        "id": 116,
        "value": "0"
      },
      {
        "id": 32,
        "value": "2"
      },
      {
        "id": 270,
        "value": "4"
      },
      {
        "id": 515,
        "value": "\u2014"
      },
      {
        "id": 508,
        "value": "18"
      },
      {
        "id": 354,
        "value": "10"
      },
      {
        "id": 4,
        "value": "-1"
      },
      {
        "id": 431,
        "value": "12"
      },
      {
        "id": 326,
        "value": "\u2014"
      },
      {
        "id": 291,
        "value": "7"
      },
      {
        "id": 46,
        "value": "3"
      },
      {
        "id": 256,
        "value": "3"
      },
      {
        "id": 494,
        "value": "\u2014"
      },
      {
        "id": 438,
        "value": "12"
      },
      {
        "id": 249,
        "value": "\u2014"
      },
      {
        "id": 550,
        "value": "15"
      },
      {
        "id": 284,
        "value": "\u2014"
      },
      {
        "id": 557,
        "value": "16"
      },
      {
        "id": 88,
        "value": "\u2014"
      },
      {
        "id": 228,
        "value": "0"
      },
      {
        "id": 144,
        "value": "2"
      },
      {
        "id": 382,
        "value": "13"
      },
      {
        "id": 403,
        "value": "9"
      },
      {
        "id": 452,
        "value": "\u2014"
      },
      {
        "id": 319,
        "value": "\u2014"
      },
      {
        "id": 529,
        "value": "17"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 522,
        "value": "15"
      },
      {
        "id": 263,
        "value": "3"
      },
      {
        "id": 11,
        "value": "0"
      },
      {
        "id": 368,
        "value": "12"
      },
      {
        "id": 200,
        "value": "\u2014"
      },
      {
        "id": 417,
        "value": "11"
      },
      {
        "id": 361,
        "value": "11"
      },
      {
        "id": 235,
        "value": "0"
      },
      {
        "id": 18,
        "value": "1"
      },
      {
        "id": 165,
        "value": "-1"
      },
      {
        "id": 60,
        "value": "5"
      },
      {
        "id": 81,
        "value": "5"
      },
      {
        "id": 179,
        "value": "1"
      },
      {
        "id": 193,
        "value": "\u2014"
      },
      {
        "id": 102,
        "value": "-1"
      },
      {
        "id": 221,
        "value": "0"
      },
      {
        "id": 396,
        "value": "\u2014"
      },
      {
        "id": 123,
        "value": "2"
      },
      {
        "id": 137,
        "value": "2"
      },
      {
        "id": 172,
        "value": "0"
      },
      {
        "id": 25,
        "value": "2"
      },
      {
        "id": 466,
        "value": "\u2014"
      },
      {
        "id": 571,
        "value": "\u2014"
      },
      {
        "id": 564,
        "value": "\u2014"
      },
      {
        "id": 347,
        "value": "10"
      },
      {
        "id": 298,
        "value": "8"
      },
      {
        "id": 480,
        "value": "\u2014"
      },
      {
        "id": 186,
        "value": "1"
      },
      {
        "id": 207,
        "value": "\u2014"
      },
      {
        "id": 312,
        "value": "8"
      },
      {
        "id": 277,
        "value": "\u2014"
      },
      {
        "id": 53,
        "value": "3"
      },
      {
        "id": 67,
        "value": "5"
      },
      {
        "id": 305,
        "value": "8"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 340,
        "value": "9"
      },
      {
        "id": 445,
        "value": "9"
      },
      {
        "id": 333,
        "value": "\u2014"
      },
      {
        "id": 214,
        "value": "-1"
      },
      {
        "id": 487,
        "value": "\u2014"
      },
      {
        "id": 130,
        "value": "2"
      },
      {
        "id": 242,
        "value": "\u2014"
      },
      {
        "id": 536,
        "value": "\u2014"
      },
      {
        "id": 543,
        "value": "15"
      },
      {
        "id": 459,
        "value": "\u2014"
      },
      {
        "id": 375,
        "value": "13"
      },
      {
        "id": 109,
        "value": "0"
      },
      {
        "id": 578,
        "value": "\u2014"
      },
      {
        "id": 410,
        "value": "10"
      },
      {
        "id": 473,
        "value": "\u2014"
      },
      {
        "id": 74,
        "value": "5"
      },
      {
        "id": 158,
        "value": "\u2014"
      },
      {
        "id": 424,
        "value": "12"
      },
      {
        "id": 389,
        "value": "14"
      }
    ],
    "j": [
      {
        "id": 495,
        "value": "\u2014"
      },
      {
        "id": 551,
        "value": "16"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 257,
        "value": "\u2014"
      },
      {
        "id": 320,
        "value": "\u2014"
      },
      {
        "id": 509,
        "value": "18"
      },
      {
        "id": 369,
        "value": "14"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 516,
        "value": "\u2014"
      },
      {
        "id": 117,
        "value": "1"
      },
      {
        "id": 530,
        "value": "17"
      },
      {
        "id": 544,
        "value": "\u2014"
      },
      {
        "id": 537,
        "value": "\u2014"
      },
      {
        "id": 565,
        "value": "\u2014"
      },
      {
        "id": 208,
        "value": "\u2014"
      },
      {
        "id": 54,
        "value": "10"
      },
      {
        "id": 460,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "13"
      },
      {
        "id": 124,
        "value": "3"
      },
      {
        "id": 376,
        "value": "16"
      },
      {
        "id": 467,
        "value": "\u2014"
      },
      {
        "id": 418,
        "value": "12"
      },
      {
        "id": 481,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "0"
      },
      {
        "id": 523,
        "value": "16"
      },
      {
        "id": 201,
        "value": "\u2014"
      },
      {
        "id": 187,
        "value": "1"
      },
      {
        "id": 152,
        "value": "\u2014"
      },
      {
        "id": 26,
        "value": "4"
      },
      {
        "id": 61,
        "value": "11"
      },
      {
        "id": 425,
        "value": "13"
      },
      {
        "id": 404,
        "value": "10"
      },
      {
        "id": 299,
        "value": "9"
      },
      {
        "id": 502,
        "value": "17"
      },
      {
        "id": 222,
        "value": "0"
      },
      {
        "id": 33,
        "value": "4"
      },
      {
        "id": 558,
        "value": "\u2014"
      },
      {
        "id": 572,
        "value": "\u2014"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 327,
        "value": "\u2014"
      },
      {
        "id": 68,
        "value": "12"
      },
      {
        "id": 19,
        "value": "3"
      },
      {
        "id": 334,
        "value": "\u2014"
      },
      {
        "id": 383,
        "value": "18"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 138,
        "value": "4"
      },
      {
        "id": 390,
        "value": "18"
      },
      {
        "id": 579,
        "value": "\u2014"
      },
      {
        "id": 145,
        "value": "5"
      },
      {
        "id": 306,
        "value": "17"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 264,
        "value": "4"
      },
      {
        "id": 362,
        "value": "12"
      },
      {
        "id": 474,
        "value": "\u2014"
      },
      {
        "id": 110,
        "value": "0"
      },
      {
        "id": 348,
        "value": "10"
      },
      {
        "id": 131,
        "value": "3"
      },
      {
        "id": 355,
        "value": "10"
      },
      {
        "id": 439,
        "value": "\u2014"
      },
      {
        "id": 285,
        "value": "\u2014"
      },
      {
        "id": 453,
        "value": "\u2014"
      },
      {
        "id": 173,
        "value": "1"
      },
      {
        "id": 180,
        "value": "1"
      },
      {
        "id": 397,
        "value": "\u2014"
      },
      {
        "id": 12,
        "value": "2"
      },
      {
        "id": 47,
        "value": "7"
      },
      {
        "id": 166,
        "value": "0"
      },
      {
        "id": 271,
        "value": "4"
      },
      {
        "id": 40,
        "value": "7"
      },
      {
        "id": 96,
        "value": "\u2014"
      },
      {
        "id": 488,
        "value": "\u2014"
      },
      {
        "id": 341,
        "value": "10"
      },
      {
        "id": 313,
        "value": "\u2014"
      },
      {
        "id": 292,
        "value": "8"
      },
      {
        "id": 432,
        "value": "\u2014"
      },
      {
        "id": 411,
        "value": "10"
      },
      {
        "id": 250,
        "value": "\u2014"
      },
      {
        "id": 82,
        "value": "17"
      },
      {
        "id": 446,
        "value": "\u2014"
      },
      {
        "id": 586,
        "value": "\u2014"
      },
      {
        "id": 89,
        "value": "\u2014"
      },
      {
        "id": 229,
        "value": "\u2014"
      },
      {
        "id": 5,
        "value": "0"
      }
    ],
    "pivot": [
      {
        "id": 405,
        "value": "652"
      },
      {
        "id": 132,
        "value": "112"
      },
      {
        "id": 531,
        "value": "958"
      },
      {
        "id": 559,
        "value": "951"
      },
      {
        "id": 153,
        "value": "\u2014"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 489,
        "value": "\u2014"
      },
      {
        "id": 174,
        "value": "55"
      },
      {
        "id": 545,
        "value": "951"
      },
      {
        "id": 566,
        "value": "\u2014"
      },
      {
        "id": 440,
        "value": "652"
      },
      {
        "id": 223,
        "value": "48"
      },
      {
        "id": 517,
        "value": "\u2014"
      },
      {
        "id": 160,
        "value": "\u2014"
      },
      {
        "id": 524,
        "value": "958"
      },
      {
        "id": 83,
        "value": "219"
      },
      {
        "id": 125,
        "value": "112"
      },
      {
        "id": 216,
        "value": "48"
      },
      {
        "id": 181,
        "value": "55"
      },
      {
        "id": 20,
        "value": "219"
      },
      {
        "id": 237,
        "value": "48"
      },
      {
        "id": 48,
        "value": "219"
      },
      {
        "id": 363,
        "value": "890"
      },
      {
        "id": 503,
        "value": "977"
      },
      {
        "id": 6,
        "value": "219"
      },
      {
        "id": 398,
        "value": "\u2014"
      },
      {
        "id": 251,
        "value": "\u2014"
      },
      {
        "id": 573,
        "value": "\u2014"
      },
      {
        "id": 538,
        "value": "\u2014"
      },
      {
        "id": 412,
        "value": "652"
      },
      {
        "id": 272,
        "value": "194"
      },
      {
        "id": 419,
        "value": "652"
      },
      {
        "id": 447,
        "value": "359"
      },
      {
        "id": 580,
        "value": "\u2014"
      },
      {
        "id": 356,
        "value": "890"
      },
      {
        "id": 146,
        "value": "112"
      },
      {
        "id": 587,
        "value": "\u2014"
      },
      {
        "id": 13,
        "value": "219"
      },
      {
        "id": 230,
        "value": "48"
      },
      {
        "id": 279,
        "value": "\u2014"
      },
      {
        "id": 90,
        "value": "\u2014"
      },
      {
        "id": 496,
        "value": "\u2014"
      },
      {
        "id": 475,
        "value": "\u2014"
      },
      {
        "id": 426,
        "value": "652"
      },
      {
        "id": 461,
        "value": "\u2014"
      },
      {
        "id": 244,
        "value": "\u2014"
      },
      {
        "id": 104,
        "value": "112"
      },
      {
        "id": 139,
        "value": "112"
      },
      {
        "id": 384,
        "value": "890"
      },
      {
        "id": 349,
        "value": "890"
      },
      {
        "id": 482,
        "value": "\u2014"
      },
      {
        "id": 209,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "219"
      },
      {
        "id": 335,
        "value": "890"
      },
      {
        "id": 370,
        "value": "890"
      },
      {
        "id": 468,
        "value": "500"
      },
      {
        "id": 391,
        "value": "890"
      },
      {
        "id": 258,
        "value": "194"
      },
      {
        "id": 286,
        "value": "\u2014"
      },
      {
        "id": 41,
        "value": "219"
      },
      {
        "id": 118,
        "value": "112"
      },
      {
        "id": 454,
        "value": "\u2014"
      },
      {
        "id": 342,
        "value": "890"
      },
      {
        "id": 167,
        "value": "55"
      },
      {
        "id": 76,
        "value": "219"
      },
      {
        "id": 552,
        "value": "951"
      },
      {
        "id": 265,
        "value": "194"
      },
      {
        "id": 97,
        "value": "\u2014"
      },
      {
        "id": 300,
        "value": "272"
      },
      {
        "id": 321,
        "value": "\u2014"
      },
      {
        "id": 328,
        "value": "\u2014"
      },
      {
        "id": 293,
        "value": "272"
      },
      {
        "id": 307,
        "value": "272"
      },
      {
        "id": 62,
        "value": "219"
      },
      {
        "id": 69,
        "value": "219"
      },
      {
        "id": 433,
        "value": "652"
      },
      {
        "id": 377,
        "value": "890"
      },
      {
        "id": 314,
        "value": "272"
      },
      {
        "id": 510,
        "value": "977"
      },
      {
        "id": 55,
        "value": "219"
      },
      {
        "id": 111,
        "value": "112"
      },
      {
        "id": 188,
        "value": "55"
      },
      {
        "id": 34,
        "value": "219"
      },
      {
        "id": 202,
        "value": "\u2014"
      }
    ],
    "pi": [
      {
        "id": 168,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 455,
        "value": "\u2014"
      },
      {
        "id": 210,
        "value": "\u2014"
      },
      {
        "id": 21,
        "value": "\u2014"
      },
      {
        "id": 98,
        "value": "\u2014"
      },
      {
        "id": 77,
        "value": "\u2014"
      },
      {
        "id": 560,
        "value": "17"
      },
      {
        "id": 217,
        "value": "\u2014"
      },
      {
        "id": 357,
        "value": "\u2014"
      },
      {
        "id": 511,
        "value": "\u2014"
      },
      {
        "id": 567,
        "value": "\u2014"
      },
      {
        "id": 546,
        "value": "\u2014"
      },
      {
        "id": 462,
        "value": "\u2014"
      },
      {
        "id": 469,
        "value": "\u2014"
      },
      {
        "id": 196,
        "value": "2"
      },
      {
        "id": 434,
        "value": "13"
      },
      {
        "id": 588,
        "value": "\u2014"
      },
      {
        "id": 525,
        "value": "\u2014"
      },
      {
        "id": 497,
        "value": "\u2014"
      },
      {
        "id": 553,
        "value": "\u2014"
      },
      {
        "id": 259,
        "value": "\u2014"
      },
      {
        "id": 504,
        "value": "\u2014"
      },
      {
        "id": 532,
        "value": "\u2014"
      },
      {
        "id": 406,
        "value": "\u2014"
      },
      {
        "id": 420,
        "value": "\u2014"
      },
      {
        "id": 392,
        "value": "\u2014"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 385,
        "value": "\u2014"
      },
      {
        "id": 301,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "1"
      },
      {
        "id": 322,
        "value": "9"
      },
      {
        "id": 427,
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
        "id": 42,
        "value": "\u2014"
      },
      {
        "id": 105,
        "value": "\u2014"
      },
      {
        "id": 273,
        "value": "\u2014"
      },
      {
        "id": 154,
        "value": "\u2014"
      },
      {
        "id": 448,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 483,
        "value": "\u2014"
      },
      {
        "id": 280,
        "value": "\u2014"
      },
      {
        "id": 378,
        "value": "\u2014"
      },
      {
        "id": 245,
        "value": "1"
      },
      {
        "id": 441,
        "value": "13"
      },
      {
        "id": 336,
        "value": "\u2014"
      },
      {
        "id": 343,
        "value": "\u2014"
      },
      {
        "id": 49,
        "value": "\u2014"
      },
      {
        "id": 413,
        "value": "\u2014"
      },
      {
        "id": 112,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "\u2014"
      },
      {
        "id": 126,
        "value": "\u2014"
      },
      {
        "id": 490,
        "value": "13"
      },
      {
        "id": 224,
        "value": "\u2014"
      },
      {
        "id": 574,
        "value": "17"
      },
      {
        "id": 539,
        "value": "\u2014"
      },
      {
        "id": 315,
        "value": "9"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 308,
        "value": "\u2014"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 189,
        "value": "\u2014"
      },
      {
        "id": 476,
        "value": "11"
      },
      {
        "id": 28,
        "value": "\u2014"
      },
      {
        "id": 518,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "1"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 161,
        "value": "\u2014"
      },
      {
        "id": 252,
        "value": "\u2014"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 399,
        "value": "\u2014"
      },
      {
        "id": 329,
        "value": "\u2014"
      },
      {
        "id": 350,
        "value": "\u2014"
      },
      {
        "id": 133,
        "value": "\u2014"
      },
      {
        "id": 56,
        "value": "\u2014"
      },
      {
        "id": 266,
        "value": "\u2014"
      },
      {
        "id": 371,
        "value": "\u2014"
      },
      {
        "id": 364,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "\u2014"
      },
      {
        "id": 581,
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
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
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
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 5,
      "stepId": "setPivot",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 6,
      "stepId": "initI",
      "low": 0,
      "high": 19,
      "i": -1,
      "j": null,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 7,
      "stepId": "forJ",
      "low": 0,
      "high": 19,
      "i": -1,
      "j": 0,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 8,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": -1,
      "j": 0,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 0,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 10,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 0,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 11,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 1,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 12,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 0,
      "j": 2,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 14,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 1,
      "j": 3,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        272,
        500,
        48,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 15,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 1,
      "j": 3,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        500,
        272,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "high": 19,
      "i": 1,
      "j": 4,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        500,
        272,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 17,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 2,
      "j": 4,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        500,
        272,
        194,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 2,
      "j": 4,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "high": 19,
      "i": 2,
      "j": 5,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 20,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 2,
      "j": 6,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 21,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 2,
      "j": 7,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 22,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 7,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 7,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        500,
        958,
        652,
        272,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 8,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        500,
        958,
        652,
        272,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 25,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 9,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        500,
        958,
        652,
        272,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 26,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 3,
      "j": 10,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        500,
        958,
        652,
        272,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "step": 27,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 4,
      "j": 10,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        500,
        958,
        652,
        272,
        253,
        890,
        183,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 28,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 4,
      "j": 10,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        958,
        652,
        272,
        253,
        890,
        500,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 29,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 4,
      "j": 11,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        958,
        652,
        272,
        253,
        890,
        500,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 30,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 11,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        958,
        652,
        272,
        253,
        890,
        500,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "high": 19,
      "i": 5,
      "j": 11,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 32,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 12,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 13,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 14,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 35,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 15,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 36,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 16,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 37,
      "stepId": "compare",
      "low": 0,
      "high": 19,
      "i": 5,
      "j": 17,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
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
      "high": 19,
      "i": 5,
      "j": 18,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 39,
      "stepId": "incI",
      "low": 0,
      "high": 19,
      "i": 6,
      "j": 18,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        652,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 40,
      "stepId": "swapIJ",
      "low": 0,
      "high": 19,
      "i": 6,
      "j": 18,
      "pivot": 219,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        272,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        219
      ]
    },
    {
      "step": 41,
      "stepId": "swapPivot",
      "low": 0,
      "high": 19,
      "i": 6,
      "j": null,
      "pivot": 219,
      "pi": 7,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 42,
      "stepId": "returnPi",
      "low": 0,
      "high": 19,
      "i": 6,
      "j": null,
      "pivot": 219,
      "pi": 7,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 43,
      "stepId": "sortLeft",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 44,
      "stepId": "markRange",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 45,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "callPartition",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "setPivot",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 48,
      "stepId": "initI",
      "low": 0,
      "high": 6,
      "i": -1,
      "j": null,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 49,
      "stepId": "forJ",
      "low": 0,
      "high": 6,
      "i": -1,
      "j": 0,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 50,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": -1,
      "j": 0,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 0,
      "j": 0,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 0,
      "j": 0,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 53,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 0,
      "j": 1,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 1,
      "j": 1,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 55,
      "stepId": "swapIJ",
      "low": 0,
      "high": 6,
      "i": 1,
      "j": 1,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 56,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 1,
      "j": 2,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 57,
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 1,
      "j": 3,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 58,
      "stepId": "incI",
      "low": 0,
      "high": 6,
      "i": 2,
      "j": 3,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        194,
        55,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "high": 6,
      "i": 2,
      "j": 3,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "high": 6,
      "i": 2,
      "j": 4,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "compare",
      "low": 0,
      "high": 6,
      "i": 2,
      "j": 5,
      "pivot": 112,
      "pi": null,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        112,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "swapPivot",
      "low": 0,
      "high": 6,
      "i": 2,
      "j": null,
      "pivot": 112,
      "pi": 3,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 63,
      "stepId": "returnPi",
      "low": 0,
      "high": 6,
      "i": 2,
      "j": null,
      "pivot": 112,
      "pi": 3,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 64,
      "stepId": "sortLeft",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 3,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 65,
      "stepId": "markRange",
      "low": 0,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 66,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "callPartition",
      "low": 0,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "setPivot",
      "low": 0,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 69,
      "stepId": "initI",
      "low": 0,
      "high": 2,
      "i": -1,
      "j": null,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 70,
      "stepId": "forJ",
      "low": 0,
      "high": 2,
      "i": -1,
      "j": 0,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 71,
      "stepId": "compare",
      "low": 0,
      "high": 2,
      "i": -1,
      "j": 0,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "incI",
      "low": 0,
      "high": 2,
      "i": 0,
      "j": 0,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 73,
      "stepId": "swapIJ",
      "low": 0,
      "high": 2,
      "i": 0,
      "j": 0,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 74,
      "stepId": "compare",
      "low": 0,
      "high": 2,
      "i": 0,
      "j": 1,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "incI",
      "low": 0,
      "high": 2,
      "i": 1,
      "j": 1,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "swapIJ",
      "low": 0,
      "high": 2,
      "i": 1,
      "j": 1,
      "pivot": 55,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "swapPivot",
      "low": 0,
      "high": 2,
      "i": 1,
      "j": null,
      "pivot": 55,
      "pi": 2,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 78,
      "stepId": "returnPi",
      "low": 0,
      "high": 2,
      "i": 1,
      "j": null,
      "pivot": 55,
      "pi": 2,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 79,
      "stepId": "sortLeft",
      "low": 0,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "markRange",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 82,
      "stepId": "callPartition",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "setPivot",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": 48,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 84,
      "stepId": "initI",
      "low": 0,
      "high": 1,
      "i": -1,
      "j": null,
      "pivot": 48,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "forJ",
      "low": 0,
      "high": 1,
      "i": -1,
      "j": 0,
      "pivot": 48,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 86,
      "stepId": "compare",
      "low": 0,
      "high": 1,
      "i": -1,
      "j": 0,
      "pivot": 48,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 87,
      "stepId": "incI",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": 0,
      "pivot": 48,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 88,
      "stepId": "swapIJ",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": 0,
      "pivot": 48,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "step": 89,
      "stepId": "swapPivot",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": null,
      "pivot": 48,
      "pi": 1,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "step": 90,
      "stepId": "returnPi",
      "low": 0,
      "high": 1,
      "i": 0,
      "j": null,
      "pivot": 48,
      "pi": 1,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "sortLeft",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 92,
      "stepId": "markRange",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 93,
      "stepId": "checkLowHigh",
      "low": 0,
      "high": 0,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 94,
      "stepId": "sortRight",
      "low": 0,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 1,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "markRange",
      "low": 2,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 96,
      "stepId": "checkLowHigh",
      "low": 2,
      "high": 1,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 97,
      "stepId": "sortRight",
      "low": 0,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 2,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 98,
      "stepId": "markRange",
      "low": 3,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "checkLowHigh",
      "low": 3,
      "high": 2,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 100,
      "stepId": "sortRight",
      "low": 0,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 3,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 101,
      "stepId": "markRange",
      "low": 4,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 102,
      "stepId": "checkLowHigh",
      "low": 4,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 103,
      "stepId": "callPartition",
      "low": 4,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 104,
      "stepId": "setPivot",
      "low": 4,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": 194,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 105,
      "stepId": "initI",
      "low": 4,
      "high": 6,
      "i": 3,
      "j": null,
      "pivot": 194,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "forJ",
      "low": 4,
      "high": 6,
      "i": 3,
      "j": 4,
      "pivot": 194,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "low": 4,
      "high": 6,
      "i": 3,
      "j": 4,
      "pivot": 194,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 108,
      "stepId": "incI",
      "low": 4,
      "high": 6,
      "i": 4,
      "j": 4,
      "pivot": 194,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "step": 109,
      "stepId": "swapIJ",
      "low": 4,
      "high": 6,
      "i": 4,
      "j": 4,
      "pivot": 194,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 110,
      "stepId": "compare",
      "low": 4,
      "high": 6,
      "i": 4,
      "j": 5,
      "pivot": 194,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        197,
        194,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 111,
      "stepId": "swapPivot",
      "low": 4,
      "high": 6,
      "i": 4,
      "j": null,
      "pivot": 194,
      "pi": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 112,
      "stepId": "returnPi",
      "low": 4,
      "high": 6,
      "i": 4,
      "j": null,
      "pivot": 194,
      "pi": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 113,
      "stepId": "sortLeft",
      "low": 4,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 114,
      "stepId": "markRange",
      "low": 4,
      "high": 4,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "step": 115,
      "stepId": "checkLowHigh",
      "low": 4,
      "high": 4,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 116,
      "stepId": "sortRight",
      "low": 4,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 117,
      "stepId": "markRange",
      "low": 6,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 118,
      "stepId": "checkLowHigh",
      "low": 6,
      "high": 6,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "sortRight",
      "low": 0,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 120,
      "stepId": "markRange",
      "low": 8,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 121,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 122,
      "stepId": "callPartition",
      "low": 8,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 123,
      "stepId": "setPivot",
      "low": 8,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 124,
      "stepId": "initI",
      "low": 8,
      "high": 19,
      "i": 7,
      "j": null,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 125,
      "stepId": "forJ",
      "low": 8,
      "high": 19,
      "i": 7,
      "j": 8,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 126,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 7,
      "j": 8,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "incI",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 8,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 128,
      "stepId": "swapIJ",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 8,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 129,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 9,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 10,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 131,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 11,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 132,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 12,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 133,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 13,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 134,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 14,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 135,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 15,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 136,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 16,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 137,
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 17,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
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
      "stepId": "compare",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": 18,
      "pivot": 272,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        890,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        272
      ]
    },
    {
      "step": 139,
      "stepId": "swapPivot",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": null,
      "pivot": 272,
      "pi": 9,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 140,
      "stepId": "returnPi",
      "low": 8,
      "high": 19,
      "i": 8,
      "j": null,
      "pivot": 272,
      "pi": 9,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "stepId": "sortLeft",
      "low": 8,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 142,
      "stepId": "markRange",
      "low": 8,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 143,
      "stepId": "checkLowHigh",
      "low": 8,
      "high": 8,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 144,
      "stepId": "sortRight",
      "low": 8,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 9,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "stepId": "markRange",
      "low": 10,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "step": 146,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 147,
      "stepId": "callPartition",
      "low": 10,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 148,
      "stepId": "setPivot",
      "low": 10,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "stepId": "initI",
      "low": 10,
      "high": 19,
      "i": 9,
      "j": null,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 150,
      "stepId": "forJ",
      "low": 10,
      "high": 19,
      "i": 9,
      "j": 10,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 9,
      "j": 10,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 152,
      "stepId": "incI",
      "low": 10,
      "high": 19,
      "i": 10,
      "j": 10,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "step": 153,
      "stepId": "swapIJ",
      "low": 10,
      "high": 19,
      "i": 10,
      "j": 10,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "low": 10,
      "high": 19,
      "i": 10,
      "j": 11,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 155,
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 10,
      "j": 12,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 156,
      "stepId": "incI",
      "low": 10,
      "high": 19,
      "i": 11,
      "j": 12,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        958,
        733,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 157,
      "stepId": "swapIJ",
      "low": 10,
      "high": 19,
      "i": 11,
      "j": 12,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        958,
        977,
        593,
        359,
        926,
        951,
        652,
        890
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
      "step": 158,
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 11,
      "j": 13,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        958,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 159,
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 11,
      "j": 14,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        958,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 160,
      "stepId": "incI",
      "low": 10,
      "high": 19,
      "i": 12,
      "j": 14,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        958,
        977,
        593,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 161,
      "stepId": "swapIJ",
      "low": 10,
      "high": 19,
      "i": 12,
      "j": 14,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        977,
        958,
        359,
        926,
        951,
        652,
        890
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
      "step": 162,
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 12,
      "j": 15,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        977,
        958,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 163,
      "stepId": "incI",
      "low": 10,
      "high": 19,
      "i": 13,
      "j": 15,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        977,
        958,
        359,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 164,
      "stepId": "swapIJ",
      "low": 10,
      "high": 19,
      "i": 13,
      "j": 15,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        958,
        977,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 165,
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 13,
      "j": 16,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        958,
        977,
        926,
        951,
        652,
        890
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
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 13,
      "j": 17,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        958,
        977,
        926,
        951,
        652,
        890
      ]
    },
    {
      "step": 167,
      "stepId": "compare",
      "low": 10,
      "high": 19,
      "i": 13,
      "j": 18,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        958,
        977,
        926,
        951,
        652,
        890
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
      "step": 168,
      "stepId": "incI",
      "low": 10,
      "high": 19,
      "i": 14,
      "j": 18,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        958,
        977,
        926,
        951,
        652,
        890
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
      "stepId": "swapIJ",
      "low": 10,
      "high": 19,
      "i": 14,
      "j": 18,
      "pivot": 890,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        977,
        926,
        951,
        958,
        890
      ]
    },
    {
      "step": 170,
      "stepId": "swapPivot",
      "low": 10,
      "high": 19,
      "i": 14,
      "j": null,
      "pivot": 890,
      "pi": 15,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 171,
      "stepId": "returnPi",
      "low": 10,
      "high": 19,
      "i": 14,
      "j": null,
      "pivot": 890,
      "pi": 15,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 172,
      "stepId": "sortLeft",
      "low": 10,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 15,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 173,
      "stepId": "markRange",
      "low": 10,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 174,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 175,
      "stepId": "callPartition",
      "low": 10,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
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
      "stepId": "setPivot",
      "low": 10,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 177,
      "stepId": "initI",
      "low": 10,
      "high": 14,
      "i": 9,
      "j": null,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 178,
      "stepId": "forJ",
      "low": 10,
      "high": 14,
      "i": 9,
      "j": 10,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
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
      "step": 179,
      "stepId": "compare",
      "low": 10,
      "high": 14,
      "i": 9,
      "j": 10,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 180,
      "stepId": "incI",
      "low": 10,
      "high": 14,
      "i": 10,
      "j": 10,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 181,
      "stepId": "swapIJ",
      "low": 10,
      "high": 14,
      "i": 10,
      "j": 10,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
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
      "step": 182,
      "stepId": "compare",
      "low": 10,
      "high": 14,
      "i": 10,
      "j": 11,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 183,
      "stepId": "compare",
      "low": 10,
      "high": 14,
      "i": 10,
      "j": 12,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 184,
      "stepId": "incI",
      "low": 10,
      "high": 14,
      "i": 11,
      "j": 12,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        733,
        593,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 185,
      "stepId": "swapIJ",
      "low": 10,
      "high": 14,
      "i": 11,
      "j": 12,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        733,
        359,
        652,
        890,
        926,
        951,
        958,
        977
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
      "step": 186,
      "stepId": "compare",
      "low": 10,
      "high": 14,
      "i": 11,
      "j": 13,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        733,
        359,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 187,
      "stepId": "incI",
      "low": 10,
      "high": 14,
      "i": 12,
      "j": 13,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        733,
        359,
        652,
        890,
        926,
        951,
        958,
        977
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
      "step": 188,
      "stepId": "swapIJ",
      "low": 10,
      "high": 14,
      "i": 12,
      "j": 13,
      "pivot": 652,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        733,
        652,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 189,
      "stepId": "swapPivot",
      "low": 10,
      "high": 14,
      "i": 12,
      "j": null,
      "pivot": 652,
      "pi": 13,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 190,
      "stepId": "returnPi",
      "low": 10,
      "high": 14,
      "i": 12,
      "j": null,
      "pivot": 652,
      "pi": 13,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 191,
      "stepId": "sortLeft",
      "low": 10,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 13,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 192,
      "stepId": "markRange",
      "low": 10,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 193,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 194,
      "stepId": "callPartition",
      "low": 10,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 195,
      "stepId": "setPivot",
      "low": 10,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": 359,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 196,
      "stepId": "initI",
      "low": 10,
      "high": 12,
      "i": 9,
      "j": null,
      "pivot": 359,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "stepId": "forJ",
      "low": 10,
      "high": 12,
      "i": 9,
      "j": 10,
      "pivot": 359,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 198,
      "stepId": "compare",
      "low": 10,
      "high": 12,
      "i": 9,
      "j": 10,
      "pivot": 359,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 199,
      "stepId": "compare",
      "low": 10,
      "high": 12,
      "i": 9,
      "j": 11,
      "pivot": 359,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 200,
      "stepId": "swapPivot",
      "low": 10,
      "high": 12,
      "i": 9,
      "j": null,
      "pivot": 359,
      "pi": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 201,
      "stepId": "returnPi",
      "low": 10,
      "high": 12,
      "i": 9,
      "j": null,
      "pivot": 359,
      "pi": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 202,
      "stepId": "sortLeft",
      "low": 10,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 203,
      "stepId": "markRange",
      "low": 10,
      "high": 9,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 204,
      "stepId": "checkLowHigh",
      "low": 10,
      "high": 9,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "stepId": "sortRight",
      "low": 10,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 206,
      "stepId": "markRange",
      "low": 11,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 207,
      "stepId": "checkLowHigh",
      "low": 11,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "stepId": "callPartition",
      "low": 11,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 209,
      "stepId": "setPivot",
      "low": 11,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": 500,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 210,
      "stepId": "initI",
      "low": 11,
      "high": 12,
      "i": 10,
      "j": null,
      "pivot": 500,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 211,
      "stepId": "forJ",
      "low": 11,
      "high": 12,
      "i": 10,
      "j": 11,
      "pivot": 500,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 212,
      "stepId": "compare",
      "low": 11,
      "high": 12,
      "i": 10,
      "j": 11,
      "pivot": 500,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        593,
        500,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 213,
      "stepId": "swapPivot",
      "low": 11,
      "high": 12,
      "i": 10,
      "j": null,
      "pivot": 500,
      "pi": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 214,
      "stepId": "returnPi",
      "low": 11,
      "high": 12,
      "i": 10,
      "j": null,
      "pivot": 500,
      "pi": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 215,
      "stepId": "sortLeft",
      "low": 11,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "stepId": "markRange",
      "low": 11,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 217,
      "stepId": "checkLowHigh",
      "low": 11,
      "high": 10,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 218,
      "stepId": "sortRight",
      "low": 11,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 219,
      "stepId": "markRange",
      "low": 12,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 220,
      "stepId": "checkLowHigh",
      "low": 12,
      "high": 12,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 221,
      "stepId": "sortRight",
      "low": 10,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 13,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 222,
      "stepId": "markRange",
      "low": 14,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 223,
      "stepId": "checkLowHigh",
      "low": 14,
      "high": 14,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 224,
      "stepId": "sortRight",
      "low": 10,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 15,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 225,
      "stepId": "markRange",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 226,
      "stepId": "checkLowHigh",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 227,
      "stepId": "callPartition",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 228,
      "stepId": "setPivot",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 229,
      "stepId": "initI",
      "low": 16,
      "high": 19,
      "i": 15,
      "j": null,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 230,
      "stepId": "forJ",
      "low": 16,
      "high": 19,
      "i": 15,
      "j": 16,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 231,
      "stepId": "compare",
      "low": 16,
      "high": 19,
      "i": 15,
      "j": 16,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 232,
      "stepId": "incI",
      "low": 16,
      "high": 19,
      "i": 16,
      "j": 16,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 233,
      "stepId": "swapIJ",
      "low": 16,
      "high": 19,
      "i": 16,
      "j": 16,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 234,
      "stepId": "compare",
      "low": 16,
      "high": 19,
      "i": 16,
      "j": 17,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 235,
      "stepId": "incI",
      "low": 16,
      "high": 19,
      "i": 17,
      "j": 17,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "stepId": "swapIJ",
      "low": 16,
      "high": 19,
      "i": 17,
      "j": 17,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 237,
      "stepId": "compare",
      "low": 16,
      "high": 19,
      "i": 17,
      "j": 18,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 238,
      "stepId": "incI",
      "low": 16,
      "high": 19,
      "i": 18,
      "j": 18,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 239,
      "stepId": "swapIJ",
      "low": 16,
      "high": 19,
      "i": 18,
      "j": 18,
      "pivot": 977,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 240,
      "stepId": "swapPivot",
      "low": 16,
      "high": 19,
      "i": 18,
      "j": null,
      "pivot": 977,
      "pi": 19,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 241,
      "stepId": "returnPi",
      "low": 16,
      "high": 19,
      "i": 18,
      "j": null,
      "pivot": 977,
      "pi": 19,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 242,
      "stepId": "sortLeft",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 19,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 243,
      "stepId": "markRange",
      "low": 16,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 244,
      "stepId": "checkLowHigh",
      "low": 16,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 245,
      "stepId": "callPartition",
      "low": 16,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 246,
      "stepId": "setPivot",
      "low": 16,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 247,
      "stepId": "initI",
      "low": 16,
      "high": 18,
      "i": 15,
      "j": null,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 248,
      "stepId": "forJ",
      "low": 16,
      "high": 18,
      "i": 15,
      "j": 16,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 249,
      "stepId": "compare",
      "low": 16,
      "high": 18,
      "i": 15,
      "j": 16,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 250,
      "stepId": "incI",
      "low": 16,
      "high": 18,
      "i": 16,
      "j": 16,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 251,
      "stepId": "swapIJ",
      "low": 16,
      "high": 18,
      "i": 16,
      "j": 16,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 252,
      "stepId": "compare",
      "low": 16,
      "high": 18,
      "i": 16,
      "j": 17,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 253,
      "stepId": "incI",
      "low": 16,
      "high": 18,
      "i": 17,
      "j": 17,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 254,
      "stepId": "swapIJ",
      "low": 16,
      "high": 18,
      "i": 17,
      "j": 17,
      "pivot": 958,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 255,
      "stepId": "swapPivot",
      "low": 16,
      "high": 18,
      "i": 17,
      "j": null,
      "pivot": 958,
      "pi": 18,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 256,
      "stepId": "returnPi",
      "low": 16,
      "high": 18,
      "i": 17,
      "j": null,
      "pivot": 958,
      "pi": 18,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 257,
      "stepId": "sortLeft",
      "low": 16,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 18,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 258,
      "stepId": "markRange",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 259,
      "stepId": "checkLowHigh",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 260,
      "stepId": "callPartition",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 261,
      "stepId": "setPivot",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": 951,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 262,
      "stepId": "initI",
      "low": 16,
      "high": 17,
      "i": 15,
      "j": null,
      "pivot": 951,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 263,
      "stepId": "forJ",
      "low": 16,
      "high": 17,
      "i": 15,
      "j": 16,
      "pivot": 951,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 264,
      "stepId": "compare",
      "low": 16,
      "high": 17,
      "i": 15,
      "j": 16,
      "pivot": 951,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 265,
      "stepId": "incI",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": 16,
      "pivot": 951,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 266,
      "stepId": "swapIJ",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": 16,
      "pivot": 951,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 267,
      "stepId": "swapPivot",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": null,
      "pivot": 951,
      "pi": 17,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 268,
      "stepId": "returnPi",
      "low": 16,
      "high": 17,
      "i": 16,
      "j": null,
      "pivot": 951,
      "pi": 17,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 269,
      "stepId": "sortLeft",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 17,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 270,
      "stepId": "markRange",
      "low": 16,
      "high": 16,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 271,
      "stepId": "checkLowHigh",
      "low": 16,
      "high": 16,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 272,
      "stepId": "sortRight",
      "low": 16,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 17,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 273,
      "stepId": "markRange",
      "low": 18,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 274,
      "stepId": "checkLowHigh",
      "low": 18,
      "high": 17,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
      "step": 275,
      "stepId": "sortRight",
      "low": 16,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 18,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 276,
      "stepId": "markRange",
      "low": 19,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 277,
      "stepId": "checkLowHigh",
      "low": 19,
      "high": 18,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 278,
      "stepId": "sortRight",
      "low": 16,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": 19,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 279,
      "stepId": "markRange",
      "low": 20,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 280,
      "stepId": "checkLowHigh",
      "low": 20,
      "high": 19,
      "i": null,
      "j": null,
      "pivot": null,
      "pi": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        359,
        500,
        593,
        652,
        733,
        890,
        926,
        951,
        958,
        977
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
