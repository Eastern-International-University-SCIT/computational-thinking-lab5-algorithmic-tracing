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
    "n",
    "i",
    "j",
    "minIndex"
  ],
  "blankFields": [
    "stepId",
    "i",
    "j",
    "minIndex"
  ],
  "executorGlobal": "SelectionSortExecutor",
  "pickedSteps": [
    5,
    7,
    11,
    13,
    15,
    16,
    23,
    30,
    32,
    35,
    37,
    44,
    49,
    54,
    55,
    59,
    64,
    67,
    68,
    69,
    73,
    75,
    78,
    79,
    81,
    82,
    87,
    93,
    94,
    96,
    99,
    106,
    117,
    119,
    122,
    125,
    137,
    138,
    139,
    140,
    141,
    148,
    173,
    179,
    182,
    183,
    185,
    189,
    191,
    193,
    194,
    196,
    198,
    200,
    207,
    208,
    211,
    212,
    214,
    215,
    217,
    219,
    220,
    231,
    235,
    236,
    237,
    240,
    242,
    243,
    244,
    245,
    247,
    261,
    262,
    263,
    264,
    267,
    272,
    273,
    275,
    276,
    279,
    281,
    285,
    288,
    294,
    303,
    305,
    309,
    311,
    313,
    317,
    318,
    319,
    325,
    326,
    328,
    334,
    336,
    340,
    343,
    344,
    345,
    349
  ],
  "answers": {
    "5": {
      "stepId": "forJ",
      "i": "0",
      "j": "1",
      "minIndex": "0"
    },
    "7": {
      "stepId": "compare",
      "i": "0",
      "j": "2",
      "minIndex": "0"
    },
    "11": {
      "stepId": "compare",
      "i": "0",
      "j": "6",
      "minIndex": "0"
    },
    "13": {
      "stepId": "compare",
      "i": "0",
      "j": "8",
      "minIndex": "0"
    },
    "15": {
      "stepId": "compare",
      "i": "0",
      "j": "10",
      "minIndex": "0"
    },
    "16": {
      "stepId": "compare",
      "i": "0",
      "j": "11",
      "minIndex": "0"
    },
    "23": {
      "stepId": "compare",
      "i": "0",
      "j": "18",
      "minIndex": "0"
    },
    "30": {
      "stepId": "forJ",
      "i": "1",
      "j": "2",
      "minIndex": "1"
    },
    "32": {
      "stepId": "compare",
      "i": "1",
      "j": "3",
      "minIndex": "1"
    },
    "35": {
      "stepId": "compare",
      "i": "1",
      "j": "5",
      "minIndex": "3"
    },
    "37": {
      "stepId": "compare",
      "i": "1",
      "j": "7",
      "minIndex": "3"
    },
    "44": {
      "stepId": "compare",
      "i": "1",
      "j": "14",
      "minIndex": "3"
    },
    "49": {
      "stepId": "compare",
      "i": "1",
      "j": "19",
      "minIndex": "3"
    },
    "54": {
      "stepId": "setMin",
      "i": "2",
      "j": "\u2014",
      "minIndex": "2"
    },
    "55": {
      "stepId": "markRange",
      "i": "2",
      "j": "\u2014",
      "minIndex": "2"
    },
    "59": {
      "stepId": "compare",
      "i": "2",
      "j": "4",
      "minIndex": "3"
    },
    "64": {
      "stepId": "updateMin",
      "i": "2",
      "j": "7",
      "minIndex": "7"
    },
    "67": {
      "stepId": "compare",
      "i": "2",
      "j": "10",
      "minIndex": "7"
    },
    "68": {
      "stepId": "compare",
      "i": "2",
      "j": "11",
      "minIndex": "7"
    },
    "69": {
      "stepId": "compare",
      "i": "2",
      "j": "12",
      "minIndex": "7"
    },
    "73": {
      "stepId": "compare",
      "i": "2",
      "j": "16",
      "minIndex": "7"
    },
    "75": {
      "stepId": "compare",
      "i": "2",
      "j": "18",
      "minIndex": "7"
    },
    "78": {
      "stepId": "swapMin",
      "i": "2",
      "j": "\u2014",
      "minIndex": "2"
    },
    "79": {
      "stepId": "markSortedI",
      "i": "2",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "81": {
      "stepId": "setMin",
      "i": "3",
      "j": "\u2014",
      "minIndex": "3"
    },
    "82": {
      "stepId": "markRange",
      "i": "3",
      "j": "\u2014",
      "minIndex": "3"
    },
    "87": {
      "stepId": "compare",
      "i": "3",
      "j": "6",
      "minIndex": "4"
    },
    "93": {
      "stepId": "compare",
      "i": "3",
      "j": "11",
      "minIndex": "10"
    },
    "94": {
      "stepId": "compare",
      "i": "3",
      "j": "12",
      "minIndex": "10"
    },
    "96": {
      "stepId": "compare",
      "i": "3",
      "j": "14",
      "minIndex": "10"
    },
    "99": {
      "stepId": "compare",
      "i": "3",
      "j": "17",
      "minIndex": "10"
    },
    "106": {
      "stepId": "forI",
      "i": "4",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "117": {
      "stepId": "compare",
      "i": "4",
      "j": "11",
      "minIndex": "10"
    },
    "119": {
      "stepId": "compare",
      "i": "4",
      "j": "13",
      "minIndex": "10"
    },
    "122": {
      "stepId": "compare",
      "i": "4",
      "j": "16",
      "minIndex": "10"
    },
    "125": {
      "stepId": "compare",
      "i": "4",
      "j": "19",
      "minIndex": "10"
    },
    "137": {
      "stepId": "compare",
      "i": "5",
      "j": "8",
      "minIndex": "7"
    },
    "138": {
      "stepId": "updateMin",
      "i": "5",
      "j": "8",
      "minIndex": "8"
    },
    "139": {
      "stepId": "compare",
      "i": "5",
      "j": "9",
      "minIndex": "8"
    },
    "140": {
      "stepId": "compare",
      "i": "5",
      "j": "10",
      "minIndex": "8"
    },
    "141": {
      "stepId": "updateMin",
      "i": "5",
      "j": "10",
      "minIndex": "10"
    },
    "148": {
      "stepId": "compare",
      "i": "5",
      "j": "17",
      "minIndex": "10"
    },
    "173": {
      "stepId": "compare",
      "i": "6",
      "j": "19",
      "minIndex": "11"
    },
    "179": {
      "stepId": "markRange",
      "i": "7",
      "j": "\u2014",
      "minIndex": "7"
    },
    "182": {
      "stepId": "updateMin",
      "i": "7",
      "j": "8",
      "minIndex": "8"
    },
    "183": {
      "stepId": "compare",
      "i": "7",
      "j": "9",
      "minIndex": "8"
    },
    "185": {
      "stepId": "compare",
      "i": "7",
      "j": "11",
      "minIndex": "8"
    },
    "189": {
      "stepId": "compare",
      "i": "7",
      "j": "15",
      "minIndex": "8"
    },
    "191": {
      "stepId": "compare",
      "i": "7",
      "j": "17",
      "minIndex": "8"
    },
    "193": {
      "stepId": "compare",
      "i": "7",
      "j": "19",
      "minIndex": "8"
    },
    "194": {
      "stepId": "updateMin",
      "i": "7",
      "j": "19",
      "minIndex": "19"
    },
    "196": {
      "stepId": "swapMin",
      "i": "7",
      "j": "\u2014",
      "minIndex": "7"
    },
    "198": {
      "stepId": "forI",
      "i": "8",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "200": {
      "stepId": "markRange",
      "i": "8",
      "j": "\u2014",
      "minIndex": "8"
    },
    "207": {
      "stepId": "compare",
      "i": "8",
      "j": "14",
      "minIndex": "8"
    },
    "208": {
      "stepId": "compare",
      "i": "8",
      "j": "15",
      "minIndex": "8"
    },
    "211": {
      "stepId": "compare",
      "i": "8",
      "j": "18",
      "minIndex": "8"
    },
    "212": {
      "stepId": "compare",
      "i": "8",
      "j": "19",
      "minIndex": "8"
    },
    "214": {
      "stepId": "markSortedI",
      "i": "8",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "215": {
      "stepId": "forI",
      "i": "9",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "217": {
      "stepId": "markRange",
      "i": "9",
      "j": "\u2014",
      "minIndex": "9"
    },
    "219": {
      "stepId": "compare",
      "i": "9",
      "j": "10",
      "minIndex": "9"
    },
    "220": {
      "stepId": "compare",
      "i": "9",
      "j": "11",
      "minIndex": "9"
    },
    "231": {
      "stepId": "updateMin",
      "i": "9",
      "j": "18",
      "minIndex": "18"
    },
    "235": {
      "stepId": "markSortedI",
      "i": "9",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "236": {
      "stepId": "forI",
      "i": "10",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "237": {
      "stepId": "setMin",
      "i": "10",
      "j": "\u2014",
      "minIndex": "10"
    },
    "240": {
      "stepId": "compare",
      "i": "10",
      "j": "11",
      "minIndex": "10"
    },
    "242": {
      "stepId": "compare",
      "i": "10",
      "j": "12",
      "minIndex": "11"
    },
    "243": {
      "stepId": "compare",
      "i": "10",
      "j": "13",
      "minIndex": "11"
    },
    "244": {
      "stepId": "compare",
      "i": "10",
      "j": "14",
      "minIndex": "11"
    },
    "245": {
      "stepId": "updateMin",
      "i": "10",
      "j": "14",
      "minIndex": "14"
    },
    "247": {
      "stepId": "updateMin",
      "i": "10",
      "j": "15",
      "minIndex": "15"
    },
    "261": {
      "stepId": "compare",
      "i": "11",
      "j": "14",
      "minIndex": "11"
    },
    "262": {
      "stepId": "updateMin",
      "i": "11",
      "j": "14",
      "minIndex": "14"
    },
    "263": {
      "stepId": "compare",
      "i": "11",
      "j": "15",
      "minIndex": "14"
    },
    "264": {
      "stepId": "compare",
      "i": "11",
      "j": "16",
      "minIndex": "14"
    },
    "267": {
      "stepId": "compare",
      "i": "11",
      "j": "19",
      "minIndex": "14"
    },
    "272": {
      "stepId": "forI",
      "i": "12",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "273": {
      "stepId": "setMin",
      "i": "12",
      "j": "\u2014",
      "minIndex": "12"
    },
    "275": {
      "stepId": "forJ",
      "i": "12",
      "j": "13",
      "minIndex": "12"
    },
    "276": {
      "stepId": "compare",
      "i": "12",
      "j": "13",
      "minIndex": "12"
    },
    "279": {
      "stepId": "compare",
      "i": "12",
      "j": "15",
      "minIndex": "14"
    },
    "281": {
      "stepId": "compare",
      "i": "12",
      "j": "17",
      "minIndex": "14"
    },
    "285": {
      "stepId": "swapMin",
      "i": "12",
      "j": "\u2014",
      "minIndex": "12"
    },
    "288": {
      "stepId": "setMin",
      "i": "13",
      "j": "\u2014",
      "minIndex": "13"
    },
    "294": {
      "stepId": "compare",
      "i": "13",
      "j": "16",
      "minIndex": "14"
    },
    "303": {
      "stepId": "setMin",
      "i": "14",
      "j": "\u2014",
      "minIndex": "14"
    },
    "305": {
      "stepId": "forJ",
      "i": "14",
      "j": "15",
      "minIndex": "14"
    },
    "309": {
      "stepId": "compare",
      "i": "14",
      "j": "18",
      "minIndex": "14"
    },
    "311": {
      "stepId": "checkSwap",
      "i": "14",
      "j": "\u2014",
      "minIndex": "14"
    },
    "313": {
      "stepId": "forI",
      "i": "15",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "317": {
      "stepId": "compare",
      "i": "15",
      "j": "16",
      "minIndex": "15"
    },
    "318": {
      "stepId": "updateMin",
      "i": "15",
      "j": "16",
      "minIndex": "16"
    },
    "319": {
      "stepId": "compare",
      "i": "15",
      "j": "17",
      "minIndex": "16"
    },
    "325": {
      "stepId": "markSortedI",
      "i": "15",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "326": {
      "stepId": "forI",
      "i": "16",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "328": {
      "stepId": "markRange",
      "i": "16",
      "j": "\u2014",
      "minIndex": "16"
    },
    "334": {
      "stepId": "markSortedI",
      "i": "16",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "336": {
      "stepId": "setMin",
      "i": "17",
      "j": "\u2014",
      "minIndex": "17"
    },
    "340": {
      "stepId": "compare",
      "i": "17",
      "j": "19",
      "minIndex": "17"
    },
    "343": {
      "stepId": "forI",
      "i": "18",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "344": {
      "stepId": "setMin",
      "i": "18",
      "j": "\u2014",
      "minIndex": "18"
    },
    "345": {
      "stepId": "markRange",
      "i": "18",
      "j": "\u2014",
      "minIndex": "18"
    },
    "349": {
      "stepId": "markSortedI",
      "i": "18",
      "j": "\u2014",
      "minIndex": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 185,
        "value": "compare"
      },
      {
        "id": 165,
        "value": "compare"
      },
      {
        "id": 161,
        "value": "updateMin"
      },
      {
        "id": 37,
        "value": "compare"
      },
      {
        "id": 277,
        "value": "compare"
      },
      {
        "id": 153,
        "value": "compare"
      },
      {
        "id": 193,
        "value": "compare"
      },
      {
        "id": 381,
        "value": "markSortedI"
      },
      {
        "id": 353,
        "value": "forJ"
      },
      {
        "id": 9,
        "value": "compare"
      },
      {
        "id": 53,
        "value": "setMin"
      },
      {
        "id": 397,
        "value": "setMin"
      },
      {
        "id": 221,
        "value": "compare"
      },
      {
        "id": 253,
        "value": "updateMin"
      },
      {
        "id": 77,
        "value": "compare"
      },
      {
        "id": 133,
        "value": "compare"
      },
      {
        "id": 329,
        "value": "compare"
      },
      {
        "id": 373,
        "value": "updateMin"
      },
      {
        "id": 189,
        "value": "compare"
      },
      {
        "id": 29,
        "value": "forJ"
      },
      {
        "id": 109,
        "value": "compare"
      },
      {
        "id": 205,
        "value": "swapMin"
      },
      {
        "id": 145,
        "value": "compare"
      },
      {
        "id": 89,
        "value": "swapMin"
      },
      {
        "id": 409,
        "value": "setMin"
      },
      {
        "id": 225,
        "value": "compare"
      },
      {
        "id": 169,
        "value": "compare"
      },
      {
        "id": 249,
        "value": "compare"
      },
      {
        "id": 217,
        "value": "compare"
      },
      {
        "id": 69,
        "value": "compare"
      },
      {
        "id": 57,
        "value": "markRange"
      },
      {
        "id": 325,
        "value": "compare"
      },
      {
        "id": 129,
        "value": "compare"
      },
      {
        "id": 173,
        "value": "markRange"
      },
      {
        "id": 413,
        "value": "markRange"
      },
      {
        "id": 369,
        "value": "compare"
      },
      {
        "id": 101,
        "value": "markRange"
      },
      {
        "id": 137,
        "value": "compare"
      },
      {
        "id": 1,
        "value": "forJ"
      },
      {
        "id": 281,
        "value": "compare"
      },
      {
        "id": 49,
        "value": "compare"
      },
      {
        "id": 149,
        "value": "updateMin"
      },
      {
        "id": 313,
        "value": "forI"
      },
      {
        "id": 201,
        "value": "updateMin"
      },
      {
        "id": 317,
        "value": "setMin"
      },
      {
        "id": 357,
        "value": "compare"
      },
      {
        "id": 229,
        "value": "compare"
      },
      {
        "id": 417,
        "value": "markSortedI"
      },
      {
        "id": 61,
        "value": "compare"
      },
      {
        "id": 269,
        "value": "compare"
      },
      {
        "id": 289,
        "value": "updateMin"
      },
      {
        "id": 385,
        "value": "forI"
      },
      {
        "id": 105,
        "value": "compare"
      },
      {
        "id": 321,
        "value": "forJ"
      },
      {
        "id": 17,
        "value": "compare"
      },
      {
        "id": 121,
        "value": "compare"
      },
      {
        "id": 341,
        "value": "setMin"
      },
      {
        "id": 377,
        "value": "compare"
      },
      {
        "id": 309,
        "value": "compare"
      },
      {
        "id": 141,
        "value": "compare"
      },
      {
        "id": 177,
        "value": "updateMin"
      },
      {
        "id": 333,
        "value": "compare"
      },
      {
        "id": 33,
        "value": "compare"
      },
      {
        "id": 245,
        "value": "compare"
      },
      {
        "id": 285,
        "value": "updateMin"
      },
      {
        "id": 93,
        "value": "markSortedI"
      },
      {
        "id": 361,
        "value": "checkSwap"
      },
      {
        "id": 181,
        "value": "compare"
      },
      {
        "id": 345,
        "value": "compare"
      },
      {
        "id": 401,
        "value": "compare"
      },
      {
        "id": 297,
        "value": "updateMin"
      },
      {
        "id": 21,
        "value": "compare"
      },
      {
        "id": 301,
        "value": "compare"
      },
      {
        "id": 157,
        "value": "compare"
      },
      {
        "id": 305,
        "value": "compare"
      },
      {
        "id": 113,
        "value": "compare"
      },
      {
        "id": 273,
        "value": "compare"
      },
      {
        "id": 41,
        "value": "compare"
      },
      {
        "id": 213,
        "value": "markRange"
      },
      {
        "id": 233,
        "value": "markSortedI"
      },
      {
        "id": 197,
        "value": "compare"
      },
      {
        "id": 125,
        "value": "forI"
      },
      {
        "id": 365,
        "value": "forI"
      },
      {
        "id": 257,
        "value": "markSortedI"
      },
      {
        "id": 237,
        "value": "forI"
      },
      {
        "id": 5,
        "value": "compare"
      },
      {
        "id": 337,
        "value": "swapMin"
      },
      {
        "id": 117,
        "value": "compare"
      },
      {
        "id": 209,
        "value": "forI"
      },
      {
        "id": 85,
        "value": "compare"
      },
      {
        "id": 81,
        "value": "compare"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 73,
        "value": "compare"
      },
      {
        "id": 241,
        "value": "markRange"
      },
      {
        "id": 97,
        "value": "setMin"
      },
      {
        "id": 261,
        "value": "forI"
      },
      {
        "id": 389,
        "value": "markRange"
      },
      {
        "id": 349,
        "value": "setMin"
      },
      {
        "id": 405,
        "value": "forI"
      },
      {
        "id": 293,
        "value": "compare"
      },
      {
        "id": 65,
        "value": "updateMin"
      },
      {
        "id": 393,
        "value": "markSortedI"
      },
      {
        "id": 25,
        "value": "compare"
      },
      {
        "id": 265,
        "value": "setMin"
      },
      {
        "id": 45,
        "value": "compare"
      }
    ],
    "i": [
      {
        "id": 78,
        "value": "2"
      },
      {
        "id": 222,
        "value": "8"
      },
      {
        "id": 202,
        "value": "7"
      },
      {
        "id": 266,
        "value": "10"
      },
      {
        "id": 378,
        "value": "15"
      },
      {
        "id": 278,
        "value": "10"
      },
      {
        "id": 218,
        "value": "8"
      },
      {
        "id": 162,
        "value": "5"
      },
      {
        "id": 386,
        "value": "16"
      },
      {
        "id": 134,
        "value": "4"
      },
      {
        "id": 178,
        "value": "7"
      },
      {
        "id": 318,
        "value": "12"
      },
      {
        "id": 42,
        "value": "1"
      },
      {
        "id": 150,
        "value": "5"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 158,
        "value": "5"
      },
      {
        "id": 170,
        "value": "6"
      },
      {
        "id": 118,
        "value": "3"
      },
      {
        "id": 390,
        "value": "16"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 410,
        "value": "18"
      },
      {
        "id": 138,
        "value": "4"
      },
      {
        "id": 198,
        "value": "7"
      },
      {
        "id": 50,
        "value": "1"
      },
      {
        "id": 82,
        "value": "2"
      },
      {
        "id": 246,
        "value": "9"
      },
      {
        "id": 326,
        "value": "12"
      },
      {
        "id": 398,
        "value": "17"
      },
      {
        "id": 214,
        "value": "8"
      },
      {
        "id": 406,
        "value": "18"
      },
      {
        "id": 98,
        "value": "3"
      },
      {
        "id": 262,
        "value": "10"
      },
      {
        "id": 58,
        "value": "2"
      },
      {
        "id": 114,
        "value": "3"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 418,
        "value": "18"
      },
      {
        "id": 34,
        "value": "1"
      },
      {
        "id": 282,
        "value": "10"
      },
      {
        "id": 414,
        "value": "18"
      },
      {
        "id": 110,
        "value": "3"
      },
      {
        "id": 322,
        "value": "12"
      },
      {
        "id": 126,
        "value": "4"
      },
      {
        "id": 242,
        "value": "9"
      },
      {
        "id": 330,
        "value": "12"
      },
      {
        "id": 210,
        "value": "8"
      },
      {
        "id": 174,
        "value": "7"
      },
      {
        "id": 102,
        "value": "3"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 234,
        "value": "8"
      },
      {
        "id": 298,
        "value": "11"
      },
      {
        "id": 70,
        "value": "2"
      },
      {
        "id": 310,
        "value": "11"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 338,
        "value": "12"
      },
      {
        "id": 74,
        "value": "2"
      },
      {
        "id": 130,
        "value": "4"
      },
      {
        "id": 274,
        "value": "10"
      },
      {
        "id": 90,
        "value": "2"
      },
      {
        "id": 62,
        "value": "2"
      },
      {
        "id": 358,
        "value": "14"
      },
      {
        "id": 186,
        "value": "7"
      },
      {
        "id": 402,
        "value": "17"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 342,
        "value": "13"
      },
      {
        "id": 394,
        "value": "16"
      },
      {
        "id": 314,
        "value": "12"
      },
      {
        "id": 334,
        "value": "12"
      },
      {
        "id": 226,
        "value": "8"
      },
      {
        "id": 86,
        "value": "2"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 250,
        "value": "9"
      },
      {
        "id": 258,
        "value": "9"
      },
      {
        "id": 366,
        "value": "15"
      },
      {
        "id": 30,
        "value": "1"
      },
      {
        "id": 302,
        "value": "11"
      },
      {
        "id": 154,
        "value": "5"
      },
      {
        "id": 94,
        "value": "2"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 166,
        "value": "5"
      },
      {
        "id": 106,
        "value": "3"
      },
      {
        "id": 254,
        "value": "9"
      },
      {
        "id": 270,
        "value": "10"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 122,
        "value": "3"
      },
      {
        "id": 362,
        "value": "14"
      },
      {
        "id": 294,
        "value": "11"
      },
      {
        "id": 354,
        "value": "14"
      },
      {
        "id": 230,
        "value": "8"
      },
      {
        "id": 54,
        "value": "2"
      },
      {
        "id": 190,
        "value": "7"
      },
      {
        "id": 206,
        "value": "7"
      },
      {
        "id": 238,
        "value": "9"
      },
      {
        "id": 382,
        "value": "15"
      },
      {
        "id": 370,
        "value": "15"
      },
      {
        "id": 290,
        "value": "10"
      },
      {
        "id": 374,
        "value": "15"
      },
      {
        "id": 286,
        "value": "10"
      },
      {
        "id": 142,
        "value": "4"
      },
      {
        "id": 346,
        "value": "13"
      },
      {
        "id": 350,
        "value": "14"
      },
      {
        "id": 182,
        "value": "7"
      },
      {
        "id": 194,
        "value": "7"
      },
      {
        "id": 306,
        "value": "11"
      },
      {
        "id": 146,
        "value": "5"
      },
      {
        "id": 10,
        "value": "0"
      }
    ],
    "j": [
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "19"
      },
      {
        "id": 171,
        "value": "19"
      },
      {
        "id": 187,
        "value": "11"
      },
      {
        "id": 407,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "\u2014"
      },
      {
        "id": 359,
        "value": "18"
      },
      {
        "id": 51,
        "value": "19"
      },
      {
        "id": 387,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "8"
      },
      {
        "id": 367,
        "value": "\u2014"
      },
      {
        "id": 223,
        "value": "15"
      },
      {
        "id": 71,
        "value": "10"
      },
      {
        "id": 347,
        "value": "16"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 319,
        "value": "\u2014"
      },
      {
        "id": 163,
        "value": "10"
      },
      {
        "id": 415,
        "value": "\u2014"
      },
      {
        "id": 299,
        "value": "14"
      },
      {
        "id": 259,
        "value": "\u2014"
      },
      {
        "id": 183,
        "value": "9"
      },
      {
        "id": 11,
        "value": "6"
      },
      {
        "id": 211,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "15"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 3,
        "value": "1"
      },
      {
        "id": 323,
        "value": "13"
      },
      {
        "id": 23,
        "value": "11"
      },
      {
        "id": 251,
        "value": "11"
      },
      {
        "id": 275,
        "value": "12"
      },
      {
        "id": 59,
        "value": "\u2014"
      },
      {
        "id": 219,
        "value": "14"
      },
      {
        "id": 63,
        "value": "4"
      },
      {
        "id": 139,
        "value": "16"
      },
      {
        "id": 343,
        "value": "\u2014"
      },
      {
        "id": 283,
        "value": "14"
      },
      {
        "id": 351,
        "value": "\u2014"
      },
      {
        "id": 279,
        "value": "13"
      },
      {
        "id": 87,
        "value": "18"
      },
      {
        "id": 363,
        "value": "\u2014"
      },
      {
        "id": 339,
        "value": "\u2014"
      },
      {
        "id": 379,
        "value": "17"
      },
      {
        "id": 403,
        "value": "19"
      },
      {
        "id": 307,
        "value": "16"
      },
      {
        "id": 371,
        "value": "16"
      },
      {
        "id": 227,
        "value": "18"
      },
      {
        "id": 135,
        "value": "13"
      },
      {
        "id": 311,
        "value": "19"
      },
      {
        "id": 383,
        "value": "\u2014"
      },
      {
        "id": 247,
        "value": "10"
      },
      {
        "id": 315,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "2"
      },
      {
        "id": 115,
        "value": "12"
      },
      {
        "id": 287,
        "value": "14"
      },
      {
        "id": 203,
        "value": "19"
      },
      {
        "id": 67,
        "value": "7"
      },
      {
        "id": 39,
        "value": "5"
      },
      {
        "id": 151,
        "value": "8"
      },
      {
        "id": 199,
        "value": "19"
      },
      {
        "id": 167,
        "value": "17"
      },
      {
        "id": 19,
        "value": "10"
      },
      {
        "id": 123,
        "value": "17"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 195,
        "value": "17"
      },
      {
        "id": 411,
        "value": "\u2014"
      },
      {
        "id": 15,
        "value": "8"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 303,
        "value": "15"
      },
      {
        "id": 55,
        "value": "\u2014"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "3"
      },
      {
        "id": 119,
        "value": "14"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 395,
        "value": "\u2014"
      },
      {
        "id": 155,
        "value": "9"
      },
      {
        "id": 79,
        "value": "12"
      },
      {
        "id": 99,
        "value": "\u2014"
      },
      {
        "id": 83,
        "value": "16"
      },
      {
        "id": 43,
        "value": "7"
      },
      {
        "id": 111,
        "value": "11"
      },
      {
        "id": 391,
        "value": "\u2014"
      },
      {
        "id": 291,
        "value": "15"
      },
      {
        "id": 127,
        "value": "\u2014"
      },
      {
        "id": 159,
        "value": "10"
      },
      {
        "id": 179,
        "value": "8"
      },
      {
        "id": 375,
        "value": "16"
      },
      {
        "id": 107,
        "value": "6"
      },
      {
        "id": 47,
        "value": "14"
      },
      {
        "id": 31,
        "value": "2"
      },
      {
        "id": 267,
        "value": "\u2014"
      },
      {
        "id": 419,
        "value": "\u2014"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 335,
        "value": "17"
      },
      {
        "id": 255,
        "value": "18"
      },
      {
        "id": 355,
        "value": "15"
      },
      {
        "id": 131,
        "value": "11"
      },
      {
        "id": 295,
        "value": "14"
      },
      {
        "id": 143,
        "value": "19"
      },
      {
        "id": 27,
        "value": "18"
      },
      {
        "id": 271,
        "value": "11"
      },
      {
        "id": 75,
        "value": "11"
      },
      {
        "id": 327,
        "value": "13"
      },
      {
        "id": 331,
        "value": "15"
      },
      {
        "id": 399,
        "value": "\u2014"
      }
    ],
    "minIndex": [
      {
        "id": 144,
        "value": "10"
      },
      {
        "id": 348,
        "value": "14"
      },
      {
        "id": 84,
        "value": "7"
      },
      {
        "id": 160,
        "value": "8"
      },
      {
        "id": 384,
        "value": "\u2014"
      },
      {
        "id": 308,
        "value": "14"
      },
      {
        "id": 128,
        "value": "\u2014"
      },
      {
        "id": 12,
        "value": "0"
      },
      {
        "id": 124,
        "value": "10"
      },
      {
        "id": 36,
        "value": "1"
      },
      {
        "id": 300,
        "value": "14"
      },
      {
        "id": 292,
        "value": "15"
      },
      {
        "id": 116,
        "value": "10"
      },
      {
        "id": 260,
        "value": "\u2014"
      },
      {
        "id": 76,
        "value": "7"
      },
      {
        "id": 140,
        "value": "10"
      },
      {
        "id": 220,
        "value": "8"
      },
      {
        "id": 28,
        "value": "0"
      },
      {
        "id": 228,
        "value": "8"
      },
      {
        "id": 312,
        "value": "14"
      },
      {
        "id": 408,
        "value": "\u2014"
      },
      {
        "id": 52,
        "value": "3"
      },
      {
        "id": 240,
        "value": "\u2014"
      },
      {
        "id": 304,
        "value": "14"
      },
      {
        "id": 180,
        "value": "8"
      },
      {
        "id": 268,
        "value": "10"
      },
      {
        "id": 208,
        "value": "7"
      },
      {
        "id": 284,
        "value": "11"
      },
      {
        "id": 188,
        "value": "8"
      },
      {
        "id": 256,
        "value": "18"
      },
      {
        "id": 340,
        "value": "12"
      },
      {
        "id": 272,
        "value": "10"
      },
      {
        "id": 60,
        "value": "2"
      },
      {
        "id": 40,
        "value": "3"
      },
      {
        "id": 80,
        "value": "7"
      },
      {
        "id": 132,
        "value": "10"
      },
      {
        "id": 416,
        "value": "18"
      },
      {
        "id": 64,
        "value": "3"
      },
      {
        "id": 380,
        "value": "16"
      },
      {
        "id": 136,
        "value": "10"
      },
      {
        "id": 368,
        "value": "\u2014"
      },
      {
        "id": 352,
        "value": "14"
      },
      {
        "id": 420,
        "value": "\u2014"
      },
      {
        "id": 100,
        "value": "3"
      },
      {
        "id": 264,
        "value": "\u2014"
      },
      {
        "id": 244,
        "value": "9"
      },
      {
        "id": 8,
        "value": "0"
      },
      {
        "id": 176,
        "value": "7"
      },
      {
        "id": 108,
        "value": "4"
      },
      {
        "id": 120,
        "value": "10"
      },
      {
        "id": 44,
        "value": "3"
      },
      {
        "id": 192,
        "value": "8"
      },
      {
        "id": 48,
        "value": "3"
      },
      {
        "id": 56,
        "value": "2"
      },
      {
        "id": 276,
        "value": "11"
      },
      {
        "id": 168,
        "value": "10"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 252,
        "value": "9"
      },
      {
        "id": 196,
        "value": "8"
      },
      {
        "id": 24,
        "value": "0"
      },
      {
        "id": 104,
        "value": "3"
      },
      {
        "id": 344,
        "value": "13"
      },
      {
        "id": 216,
        "value": "8"
      },
      {
        "id": 356,
        "value": "14"
      },
      {
        "id": 388,
        "value": "\u2014"
      },
      {
        "id": 332,
        "value": "14"
      },
      {
        "id": 400,
        "value": "17"
      },
      {
        "id": 156,
        "value": "8"
      },
      {
        "id": 20,
        "value": "0"
      },
      {
        "id": 396,
        "value": "\u2014"
      },
      {
        "id": 392,
        "value": "16"
      },
      {
        "id": 68,
        "value": "7"
      },
      {
        "id": 72,
        "value": "7"
      },
      {
        "id": 288,
        "value": "14"
      },
      {
        "id": 336,
        "value": "14"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 92,
        "value": "2"
      },
      {
        "id": 172,
        "value": "11"
      },
      {
        "id": 232,
        "value": "8"
      },
      {
        "id": 200,
        "value": "8"
      },
      {
        "id": 280,
        "value": "11"
      },
      {
        "id": 296,
        "value": "11"
      },
      {
        "id": 324,
        "value": "12"
      },
      {
        "id": 112,
        "value": "10"
      },
      {
        "id": 204,
        "value": "19"
      },
      {
        "id": 148,
        "value": "7"
      },
      {
        "id": 184,
        "value": "8"
      },
      {
        "id": 320,
        "value": "12"
      },
      {
        "id": 372,
        "value": "15"
      },
      {
        "id": 88,
        "value": "7"
      },
      {
        "id": 96,
        "value": "\u2014"
      },
      {
        "id": 364,
        "value": "14"
      },
      {
        "id": 32,
        "value": "1"
      },
      {
        "id": 248,
        "value": "9"
      },
      {
        "id": 376,
        "value": "16"
      },
      {
        "id": 328,
        "value": "12"
      },
      {
        "id": 360,
        "value": "14"
      },
      {
        "id": 224,
        "value": "8"
      },
      {
        "id": 152,
        "value": "8"
      },
      {
        "id": 212,
        "value": "\u2014"
      },
      {
        "id": 412,
        "value": "18"
      },
      {
        "id": 164,
        "value": "10"
      },
      {
        "id": 404,
        "value": "17"
      },
      {
        "id": 316,
        "value": "\u2014"
      },
      {
        "id": 4,
        "value": "0"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "n": 20,
      "i": null,
      "j": null,
      "minIndex": null,
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
      "stepId": "forI",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": null,
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
      "stepId": "setMin",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "stepId": "markRange",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "stepId": "forJ",
      "n": 20,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 6,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 2,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 8,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 3,
      "minIndex": 0,
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
      "step": 9,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 4,
      "minIndex": 0,
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
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 5,
      "minIndex": 0,
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
      "n": 20,
      "i": 0,
      "j": 6,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 12,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 7,
      "minIndex": 0,
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
      "step": 13,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 8,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 14,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 9,
      "minIndex": 0,
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
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 10,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 16,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 11,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 17,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 12,
      "minIndex": 0,
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
      "step": 18,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 13,
      "minIndex": 0,
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
      "step": 19,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 14,
      "minIndex": 0,
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
      "step": 20,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 15,
      "minIndex": 0,
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
      "step": 21,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 16,
      "minIndex": 0,
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
      "step": 22,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 17,
      "minIndex": 0,
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
      "step": 23,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 18,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 24,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 19,
      "minIndex": 0,
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
      "step": 25,
      "stepId": "checkSwap",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "step": 26,
      "stepId": "markSortedI",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": null,
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
      "step": 27,
      "stepId": "forI",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": null,
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
      "step": 28,
      "stepId": "setMin",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 1,
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
      "step": 29,
      "stepId": "markRange",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 1,
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
      "step": 30,
      "stepId": "forJ",
      "n": 20,
      "i": 1,
      "j": 2,
      "minIndex": 1,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 31,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 2,
      "minIndex": 1,
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
      "step": 32,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 3,
      "minIndex": 1,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 33,
      "stepId": "updateMin",
      "n": 20,
      "i": 1,
      "j": 3,
      "minIndex": 3,
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
      "step": 34,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 4,
      "minIndex": 3,
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
      "step": 35,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 5,
      "minIndex": 3,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 36,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 6,
      "minIndex": 3,
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
      "step": 37,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 7,
      "minIndex": 3,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 38,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 8,
      "minIndex": 3,
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
      "step": 39,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 9,
      "minIndex": 3,
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
      "step": 40,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 10,
      "minIndex": 3,
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
      "step": 41,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 11,
      "minIndex": 3,
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
      "step": 42,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 12,
      "minIndex": 3,
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
      "step": 43,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 13,
      "minIndex": 3,
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
      "step": 44,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 14,
      "minIndex": 3,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 45,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 15,
      "minIndex": 3,
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
      "step": 46,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 16,
      "minIndex": 3,
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
      "step": 47,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 17,
      "minIndex": 3,
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
      "step": 48,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 18,
      "minIndex": 3,
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
      "step": 49,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 19,
      "minIndex": 3,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 50,
      "stepId": "checkSwap",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 3,
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
      "step": 51,
      "stepId": "swapMin",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 1,
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
      "step": 52,
      "stepId": "markSortedI",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": null,
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
      "step": 53,
      "stepId": "forI",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": null,
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
      "step": 54,
      "stepId": "setMin",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 2,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 55,
      "stepId": "markRange",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 2,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 56,
      "stepId": "forJ",
      "n": 20,
      "i": 2,
      "j": 3,
      "minIndex": 2,
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
      "step": 57,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 3,
      "minIndex": 2,
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
      "step": 58,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 3,
      "minIndex": 3,
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
      "step": 59,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 4,
      "minIndex": 3,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 60,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 4,
      "minIndex": 4,
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
      "step": 61,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 5,
      "minIndex": 4,
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
      "step": 62,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 6,
      "minIndex": 4,
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
      "step": 63,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 7,
      "minIndex": 4,
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
      "step": 64,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 7,
      "minIndex": 7,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 65,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 8,
      "minIndex": 7,
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
      "step": 66,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 9,
      "minIndex": 7,
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
      "step": 67,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 10,
      "minIndex": 7,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 68,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 11,
      "minIndex": 7,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 69,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 12,
      "minIndex": 7,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 70,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 13,
      "minIndex": 7,
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
      "step": 71,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 14,
      "minIndex": 7,
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
      "step": 72,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 15,
      "minIndex": 7,
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
      "step": 73,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 16,
      "minIndex": 7,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 74,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 17,
      "minIndex": 7,
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
      "step": 75,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 18,
      "minIndex": 7,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 76,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 19,
      "minIndex": 7,
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
      "step": 77,
      "stepId": "checkSwap",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 7,
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
      "step": 78,
      "stepId": "swapMin",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 79,
      "stepId": "markSortedI",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 80,
      "stepId": "forI",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 81,
      "stepId": "setMin",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 82,
      "stepId": "markRange",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 83,
      "stepId": "forJ",
      "n": 20,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 84,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 85,
      "stepId": "updateMin",
      "n": 20,
      "i": 3,
      "j": 4,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 86,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 5,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 87,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 6,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 88,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 7,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 89,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 8,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 90,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 9,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 91,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 10,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 92,
      "stepId": "updateMin",
      "n": 20,
      "i": 3,
      "j": 10,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 93,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 11,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 94,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 12,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 95,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 13,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 96,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 14,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 97,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 15,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 98,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 16,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 99,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 17,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 100,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 18,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 101,
      "stepId": "updateMin",
      "n": 20,
      "i": 3,
      "j": 18,
      "minIndex": 18,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 102,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 19,
      "minIndex": 18,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 103,
      "stepId": "checkSwap",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 18,
      "array": [
        19,
        48,
        55,
        272,
        194,
        958,
        652,
        500,
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
      "step": 104,
      "stepId": "swapMin",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 105,
      "stepId": "markSortedI",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 106,
      "stepId": "forI",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 107,
      "stepId": "setMin",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 108,
      "stepId": "markRange",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 109,
      "stepId": "forJ",
      "n": 20,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 110,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 111,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 6,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 112,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 7,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 113,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 8,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 114,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 9,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 115,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 10,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 116,
      "stepId": "updateMin",
      "n": 20,
      "i": 4,
      "j": 10,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 117,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 11,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 118,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 12,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 119,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 13,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 120,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 14,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 121,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 15,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 122,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 16,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 123,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 17,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 124,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 18,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 125,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 19,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 126,
      "stepId": "checkSwap",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        194,
        958,
        652,
        500,
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
        272,
        219
      ]
    },
    {
      "step": 127,
      "stepId": "swapMin",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 128,
      "stepId": "markSortedI",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 129,
      "stepId": "forI",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 130,
      "stepId": "setMin",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 131,
      "stepId": "markRange",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 132,
      "stepId": "forJ",
      "n": 20,
      "i": 5,
      "j": 6,
      "minIndex": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 133,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 6,
      "minIndex": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 134,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 6,
      "minIndex": 6,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 135,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 7,
      "minIndex": 6,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 136,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 7,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 137,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 8,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 138,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 8,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 139,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 9,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 140,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 10,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 141,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 10,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 142,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 11,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 143,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 12,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 144,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 13,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 145,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 14,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 146,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 15,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 147,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 16,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 148,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 17,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 149,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 18,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 150,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 19,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 151,
      "stepId": "checkSwap",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 10,
      "array": [
        19,
        48,
        55,
        112,
        183,
        958,
        652,
        500,
        253,
        890,
        194,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 152,
      "stepId": "swapMin",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 153,
      "stepId": "markSortedI",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 154,
      "stepId": "forI",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 155,
      "stepId": "setMin",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 156,
      "stepId": "markRange",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 157,
      "stepId": "forJ",
      "n": 20,
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 158,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 159,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 7,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 160,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 8,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 161,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 8,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 162,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 9,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 163,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 10,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 164,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 11,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 165,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 11,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 166,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 12,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 167,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 13,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 168,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 14,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 169,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 15,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 170,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 16,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 171,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 17,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 172,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 18,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 173,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 19,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 174,
      "stepId": "checkSwap",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 11,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        652,
        500,
        253,
        890,
        958,
        197,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 175,
      "stepId": "swapMin",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 176,
      "stepId": "markSortedI",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 177,
      "stepId": "forI",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": null,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 178,
      "stepId": "setMin",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 179,
      "stepId": "markRange",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 180,
      "stepId": "forJ",
      "n": 20,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 181,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 182,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 8,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 183,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 9,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 184,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 10,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 185,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 11,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 186,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 12,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 187,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 13,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 188,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 14,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 189,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 15,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 190,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 16,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 191,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 17,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 192,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 18,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 193,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 19,
      "minIndex": 8,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 194,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 19,
      "minIndex": 19,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 195,
      "stepId": "checkSwap",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 19,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        500,
        253,
        890,
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        219
      ]
    },
    {
      "step": 196,
      "stepId": "swapMin",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 7,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 197,
      "stepId": "markSortedI",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": null,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 198,
      "stepId": "forI",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": null,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 199,
      "stepId": "setMin",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 200,
      "stepId": "markRange",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 201,
      "stepId": "forJ",
      "n": 20,
      "i": 8,
      "j": 9,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 202,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 9,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 203,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 10,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 204,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 11,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 205,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 12,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 206,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 13,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 207,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 14,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 208,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 15,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 209,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 16,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 210,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 17,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 211,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 18,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 212,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 19,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 213,
      "stepId": "checkSwap",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": 8,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 214,
      "stepId": "markSortedI",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": null,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 215,
      "stepId": "forI",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": null,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 216,
      "stepId": "setMin",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 217,
      "stepId": "markRange",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 218,
      "stepId": "forJ",
      "n": 20,
      "i": 9,
      "j": 10,
      "minIndex": 9,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 219,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 10,
      "minIndex": 9,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 220,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 11,
      "minIndex": 9,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 221,
      "stepId": "updateMin",
      "n": 20,
      "i": 9,
      "j": 11,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 222,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 12,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 223,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 13,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 224,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 14,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 225,
      "stepId": "updateMin",
      "n": 20,
      "i": 9,
      "j": 14,
      "minIndex": 14,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 226,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 15,
      "minIndex": 14,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 227,
      "stepId": "updateMin",
      "n": 20,
      "i": 9,
      "j": 15,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 228,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 16,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 229,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 17,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 230,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 18,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 231,
      "stepId": "updateMin",
      "n": 20,
      "i": 9,
      "j": 18,
      "minIndex": 18,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 232,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 19,
      "minIndex": 18,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 233,
      "stepId": "checkSwap",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 18,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        272,
        500
      ]
    },
    {
      "step": 234,
      "stepId": "swapMin",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 235,
      "stepId": "markSortedI",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": null,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 236,
      "stepId": "forI",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": null,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 237,
      "stepId": "setMin",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 238,
      "stepId": "markRange",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 239,
      "stepId": "forJ",
      "n": 20,
      "i": 10,
      "j": 11,
      "minIndex": 10,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 240,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 11,
      "minIndex": 10,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 241,
      "stepId": "updateMin",
      "n": 20,
      "i": 10,
      "j": 11,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 242,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 12,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 243,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 13,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 244,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 14,
      "minIndex": 11,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 245,
      "stepId": "updateMin",
      "n": 20,
      "i": 10,
      "j": 14,
      "minIndex": 14,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 246,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 15,
      "minIndex": 14,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 247,
      "stepId": "updateMin",
      "n": 20,
      "i": 10,
      "j": 15,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 248,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 16,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 249,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 17,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 250,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 18,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 251,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 19,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 252,
      "stepId": "checkSwap",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 15,
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
        958,
        652,
        733,
        977,
        593,
        359,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 253,
      "stepId": "swapMin",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 254,
      "stepId": "markSortedI",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": null,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 255,
      "stepId": "forI",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": null,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 256,
      "stepId": "setMin",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 257,
      "stepId": "markRange",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 258,
      "stepId": "forJ",
      "n": 20,
      "i": 11,
      "j": 12,
      "minIndex": 11,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 259,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 12,
      "minIndex": 11,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 260,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 13,
      "minIndex": 11,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 261,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 14,
      "minIndex": 11,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 262,
      "stepId": "updateMin",
      "n": 20,
      "i": 11,
      "j": 14,
      "minIndex": 14,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 263,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 15,
      "minIndex": 14,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 264,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 16,
      "minIndex": 14,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 265,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 17,
      "minIndex": 14,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 266,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 18,
      "minIndex": 14,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 267,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 19,
      "minIndex": 14,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 268,
      "stepId": "updateMin",
      "n": 20,
      "i": 11,
      "j": 19,
      "minIndex": 19,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 269,
      "stepId": "checkSwap",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 19,
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
        652,
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        500
      ]
    },
    {
      "step": 270,
      "stepId": "swapMin",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 271,
      "stepId": "markSortedI",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": null,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 272,
      "stepId": "forI",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": null,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 273,
      "stepId": "setMin",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 274,
      "stepId": "markRange",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 275,
      "stepId": "forJ",
      "n": 20,
      "i": 12,
      "j": 13,
      "minIndex": 12,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 276,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 13,
      "minIndex": 12,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 277,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 14,
      "minIndex": 12,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 278,
      "stepId": "updateMin",
      "n": 20,
      "i": 12,
      "j": 14,
      "minIndex": 14,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 279,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 15,
      "minIndex": 14,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 280,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 16,
      "minIndex": 14,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 281,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 17,
      "minIndex": 14,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 282,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 18,
      "minIndex": 14,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 283,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 19,
      "minIndex": 14,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 284,
      "stepId": "checkSwap",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 14,
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
        733,
        977,
        593,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 285,
      "stepId": "swapMin",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 286,
      "stepId": "markSortedI",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": null,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 287,
      "stepId": "forI",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": null,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 288,
      "stepId": "setMin",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 13,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 289,
      "stepId": "markRange",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 13,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 290,
      "stepId": "forJ",
      "n": 20,
      "i": 13,
      "j": 14,
      "minIndex": 13,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 291,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 14,
      "minIndex": 13,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 292,
      "stepId": "updateMin",
      "n": 20,
      "i": 13,
      "j": 14,
      "minIndex": 14,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 293,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 15,
      "minIndex": 14,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 294,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 16,
      "minIndex": 14,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 295,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 17,
      "minIndex": 14,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 296,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 18,
      "minIndex": 14,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 297,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 19,
      "minIndex": 14,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 298,
      "stepId": "updateMin",
      "n": 20,
      "i": 13,
      "j": 19,
      "minIndex": 19,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 299,
      "stepId": "checkSwap",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 19,
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
        977,
        733,
        958,
        926,
        951,
        890,
        652
      ]
    },
    {
      "step": 300,
      "stepId": "swapMin",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 13,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 301,
      "stepId": "markSortedI",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": null,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 302,
      "stepId": "forI",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": null,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 303,
      "stepId": "setMin",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 304,
      "stepId": "markRange",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 305,
      "stepId": "forJ",
      "n": 20,
      "i": 14,
      "j": 15,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 306,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 15,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 307,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 16,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 308,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 17,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 309,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 18,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 310,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 19,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 311,
      "stepId": "checkSwap",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": 14,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 312,
      "stepId": "markSortedI",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": null,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 313,
      "stepId": "forI",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": null,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 314,
      "stepId": "setMin",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 15,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 315,
      "stepId": "markRange",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 15,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 316,
      "stepId": "forJ",
      "n": 20,
      "i": 15,
      "j": 16,
      "minIndex": 15,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 317,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 16,
      "minIndex": 15,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 318,
      "stepId": "updateMin",
      "n": 20,
      "i": 15,
      "j": 16,
      "minIndex": 16,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 319,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 17,
      "minIndex": 16,
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
        958,
        926,
        951,
        890,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 320,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 18,
      "minIndex": 16,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 321,
      "stepId": "updateMin",
      "n": 20,
      "i": 15,
      "j": 18,
      "minIndex": 18,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 322,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 19,
      "minIndex": 18,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 323,
      "stepId": "checkSwap",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 18,
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
        958,
        926,
        951,
        890,
        977
      ]
    },
    {
      "step": 324,
      "stepId": "swapMin",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 15,
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
      "step": 325,
      "stepId": "markSortedI",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": null,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 326,
      "stepId": "forI",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": null,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 327,
      "stepId": "setMin",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": 16,
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
      "step": 328,
      "stepId": "markRange",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": 16,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 329,
      "stepId": "forJ",
      "n": 20,
      "i": 16,
      "j": 17,
      "minIndex": 16,
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
      "step": 330,
      "stepId": "compare",
      "n": 20,
      "i": 16,
      "j": 17,
      "minIndex": 16,
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
      "step": 331,
      "stepId": "compare",
      "n": 20,
      "i": 16,
      "j": 18,
      "minIndex": 16,
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
      "step": 332,
      "stepId": "compare",
      "n": 20,
      "i": 16,
      "j": 19,
      "minIndex": 16,
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
      "step": 333,
      "stepId": "checkSwap",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": 16,
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
      "step": 334,
      "stepId": "markSortedI",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": null,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 335,
      "stepId": "forI",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": null,
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
      "step": 336,
      "stepId": "setMin",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": 17,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 337,
      "stepId": "markRange",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": 17,
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
      "step": 338,
      "stepId": "forJ",
      "n": 20,
      "i": 17,
      "j": 18,
      "minIndex": 17,
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
      "step": 339,
      "stepId": "compare",
      "n": 20,
      "i": 17,
      "j": 18,
      "minIndex": 17,
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
      "step": 340,
      "stepId": "compare",
      "n": 20,
      "i": 17,
      "j": 19,
      "minIndex": 17,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 341,
      "stepId": "checkSwap",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": 17,
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
      "step": 342,
      "stepId": "markSortedI",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": null,
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
      "step": 343,
      "stepId": "forI",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": null,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 344,
      "stepId": "setMin",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": 18,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 345,
      "stepId": "markRange",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": 18,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 346,
      "stepId": "forJ",
      "n": 20,
      "i": 18,
      "j": 19,
      "minIndex": 18,
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
      "step": 347,
      "stepId": "compare",
      "n": 20,
      "i": 18,
      "j": 19,
      "minIndex": 18,
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
      "step": 348,
      "stepId": "checkSwap",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": 18,
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
      "step": 349,
      "stepId": "markSortedI",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": null,
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
        "i": true,
        "j": true,
        "minIndex": true
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
