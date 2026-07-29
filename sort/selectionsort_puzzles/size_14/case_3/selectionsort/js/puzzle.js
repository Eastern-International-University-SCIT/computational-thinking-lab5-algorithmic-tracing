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
    12,
    14,
    15,
    18,
    19,
    26,
    27,
    33,
    35,
    36,
    38,
    43,
    48,
    55,
    57,
    61,
    63,
    64,
    67,
    68,
    77,
    79,
    81,
    82,
    84,
    85,
    87,
    91,
    93,
    94,
    98,
    102,
    105,
    107,
    114,
    115,
    122,
    124,
    126,
    131,
    133,
    134,
    137,
    138,
    149,
    150,
    151,
    153,
    165,
    166,
    168,
    171,
    179,
    182,
    185,
    188,
    189,
    192,
    197,
    201,
    202
  ],
  "answers": {
    "12": {
      "stepId": "compare",
      "i": "0",
      "j": "6",
      "minIndex": "1"
    },
    "14": {
      "stepId": "compare",
      "i": "0",
      "j": "7",
      "minIndex": "6"
    },
    "15": {
      "stepId": "compare",
      "i": "0",
      "j": "8",
      "minIndex": "6"
    },
    "18": {
      "stepId": "compare",
      "i": "0",
      "j": "10",
      "minIndex": "9"
    },
    "19": {
      "stepId": "compare",
      "i": "0",
      "j": "11",
      "minIndex": "9"
    },
    "26": {
      "stepId": "setMin",
      "i": "1",
      "j": "\u2014",
      "minIndex": "1"
    },
    "27": {
      "stepId": "markRange",
      "i": "1",
      "j": "\u2014",
      "minIndex": "1"
    },
    "33": {
      "stepId": "compare",
      "i": "1",
      "j": "6",
      "minIndex": "1"
    },
    "35": {
      "stepId": "compare",
      "i": "1",
      "j": "7",
      "minIndex": "6"
    },
    "36": {
      "stepId": "compare",
      "i": "1",
      "j": "8",
      "minIndex": "6"
    },
    "38": {
      "stepId": "compare",
      "i": "1",
      "j": "10",
      "minIndex": "6"
    },
    "43": {
      "stepId": "swapMin",
      "i": "1",
      "j": "\u2014",
      "minIndex": "1"
    },
    "48": {
      "stepId": "forJ",
      "i": "2",
      "j": "3",
      "minIndex": "2"
    },
    "55": {
      "stepId": "compare",
      "i": "2",
      "j": "8",
      "minIndex": "6"
    },
    "57": {
      "stepId": "compare",
      "i": "2",
      "j": "10",
      "minIndex": "6"
    },
    "61": {
      "stepId": "checkSwap",
      "i": "2",
      "j": "\u2014",
      "minIndex": "6"
    },
    "63": {
      "stepId": "markSortedI",
      "i": "2",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "64": {
      "stepId": "forI",
      "i": "3",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "67": {
      "stepId": "forJ",
      "i": "3",
      "j": "4",
      "minIndex": "3"
    },
    "68": {
      "stepId": "compare",
      "i": "3",
      "j": "4",
      "minIndex": "3"
    },
    "77": {
      "stepId": "compare",
      "i": "3",
      "j": "11",
      "minIndex": "7"
    },
    "79": {
      "stepId": "compare",
      "i": "3",
      "j": "13",
      "minIndex": "7"
    },
    "81": {
      "stepId": "swapMin",
      "i": "3",
      "j": "\u2014",
      "minIndex": "3"
    },
    "82": {
      "stepId": "markSortedI",
      "i": "3",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "84": {
      "stepId": "setMin",
      "i": "4",
      "j": "\u2014",
      "minIndex": "4"
    },
    "85": {
      "stepId": "markRange",
      "i": "4",
      "j": "\u2014",
      "minIndex": "4"
    },
    "87": {
      "stepId": "compare",
      "i": "4",
      "j": "5",
      "minIndex": "4"
    },
    "91": {
      "stepId": "compare",
      "i": "4",
      "j": "8",
      "minIndex": "6"
    },
    "93": {
      "stepId": "compare",
      "i": "4",
      "j": "10",
      "minIndex": "6"
    },
    "94": {
      "stepId": "compare",
      "i": "4",
      "j": "11",
      "minIndex": "6"
    },
    "98": {
      "stepId": "checkSwap",
      "i": "4",
      "j": "\u2014",
      "minIndex": "12"
    },
    "102": {
      "stepId": "setMin",
      "i": "5",
      "j": "\u2014",
      "minIndex": "5"
    },
    "105": {
      "stepId": "compare",
      "i": "5",
      "j": "6",
      "minIndex": "5"
    },
    "107": {
      "stepId": "compare",
      "i": "5",
      "j": "7",
      "minIndex": "6"
    },
    "114": {
      "stepId": "checkSwap",
      "i": "5",
      "j": "\u2014",
      "minIndex": "6"
    },
    "115": {
      "stepId": "swapMin",
      "i": "5",
      "j": "\u2014",
      "minIndex": "5"
    },
    "122": {
      "stepId": "updateMin",
      "i": "6",
      "j": "7",
      "minIndex": "7"
    },
    "124": {
      "stepId": "compare",
      "i": "6",
      "j": "9",
      "minIndex": "7"
    },
    "126": {
      "stepId": "compare",
      "i": "6",
      "j": "11",
      "minIndex": "7"
    },
    "131": {
      "stepId": "markSortedI",
      "i": "6",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "133": {
      "stepId": "setMin",
      "i": "7",
      "j": "\u2014",
      "minIndex": "7"
    },
    "134": {
      "stepId": "markRange",
      "i": "7",
      "j": "\u2014",
      "minIndex": "7"
    },
    "137": {
      "stepId": "updateMin",
      "i": "7",
      "j": "8",
      "minIndex": "8"
    },
    "138": {
      "stepId": "compare",
      "i": "7",
      "j": "9",
      "minIndex": "8"
    },
    "149": {
      "stepId": "setMin",
      "i": "8",
      "j": "\u2014",
      "minIndex": "8"
    },
    "150": {
      "stepId": "markRange",
      "i": "8",
      "j": "\u2014",
      "minIndex": "8"
    },
    "151": {
      "stepId": "forJ",
      "i": "8",
      "j": "9",
      "minIndex": "8"
    },
    "153": {
      "stepId": "compare",
      "i": "8",
      "j": "10",
      "minIndex": "8"
    },
    "165": {
      "stepId": "compare",
      "i": "9",
      "j": "10",
      "minIndex": "9"
    },
    "166": {
      "stepId": "updateMin",
      "i": "9",
      "j": "10",
      "minIndex": "10"
    },
    "168": {
      "stepId": "updateMin",
      "i": "9",
      "j": "11",
      "minIndex": "11"
    },
    "171": {
      "stepId": "updateMin",
      "i": "9",
      "j": "13",
      "minIndex": "13"
    },
    "179": {
      "stepId": "compare",
      "i": "10",
      "j": "11",
      "minIndex": "10"
    },
    "182": {
      "stepId": "compare",
      "i": "10",
      "j": "13",
      "minIndex": "11"
    },
    "185": {
      "stepId": "markSortedI",
      "i": "10",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "188": {
      "stepId": "markRange",
      "i": "11",
      "j": "\u2014",
      "minIndex": "11"
    },
    "189": {
      "stepId": "forJ",
      "i": "11",
      "j": "12",
      "minIndex": "11"
    },
    "192": {
      "stepId": "checkSwap",
      "i": "11",
      "j": "\u2014",
      "minIndex": "11"
    },
    "197": {
      "stepId": "forJ",
      "i": "12",
      "j": "13",
      "minIndex": "12"
    },
    "201": {
      "stepId": "swapMin",
      "i": "12",
      "j": "\u2014",
      "minIndex": "12"
    },
    "202": {
      "stepId": "markSortedI",
      "i": "12",
      "j": "\u2014",
      "minIndex": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 141,
        "value": "swapMin"
      },
      {
        "id": 181,
        "value": "markRange"
      },
      {
        "id": 37,
        "value": "compare"
      },
      {
        "id": 21,
        "value": "setMin"
      },
      {
        "id": 125,
        "value": "setMin"
      },
      {
        "id": 189,
        "value": "compare"
      },
      {
        "id": 205,
        "value": "updateMin"
      },
      {
        "id": 157,
        "value": "markSortedI"
      },
      {
        "id": 177,
        "value": "setMin"
      },
      {
        "id": 49,
        "value": "forJ"
      },
      {
        "id": 41,
        "value": "compare"
      },
      {
        "id": 113,
        "value": "compare"
      },
      {
        "id": 149,
        "value": "compare"
      },
      {
        "id": 217,
        "value": "markSortedI"
      },
      {
        "id": 89,
        "value": "swapMin"
      },
      {
        "id": 161,
        "value": "setMin"
      },
      {
        "id": 241,
        "value": "markSortedI"
      },
      {
        "id": 73,
        "value": "forJ"
      },
      {
        "id": 121,
        "value": "checkSwap"
      },
      {
        "id": 145,
        "value": "updateMin"
      },
      {
        "id": 129,
        "value": "compare"
      },
      {
        "id": 201,
        "value": "updateMin"
      },
      {
        "id": 9,
        "value": "compare"
      },
      {
        "id": 225,
        "value": "forJ"
      },
      {
        "id": 229,
        "value": "checkSwap"
      },
      {
        "id": 65,
        "value": "markSortedI"
      },
      {
        "id": 237,
        "value": "swapMin"
      },
      {
        "id": 133,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "compare"
      },
      {
        "id": 77,
        "value": "compare"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 233,
        "value": "forJ"
      },
      {
        "id": 5,
        "value": "compare"
      },
      {
        "id": 169,
        "value": "updateMin"
      },
      {
        "id": 45,
        "value": "swapMin"
      },
      {
        "id": 221,
        "value": "markRange"
      },
      {
        "id": 93,
        "value": "markSortedI"
      },
      {
        "id": 69,
        "value": "forI"
      },
      {
        "id": 213,
        "value": "compare"
      },
      {
        "id": 193,
        "value": "compare"
      },
      {
        "id": 81,
        "value": "compare"
      },
      {
        "id": 61,
        "value": "checkSwap"
      },
      {
        "id": 209,
        "value": "compare"
      },
      {
        "id": 29,
        "value": "compare"
      },
      {
        "id": 197,
        "value": "updateMin"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 137,
        "value": "checkSwap"
      },
      {
        "id": 17,
        "value": "compare"
      },
      {
        "id": 185,
        "value": "forJ"
      },
      {
        "id": 153,
        "value": "compare"
      },
      {
        "id": 117,
        "value": "compare"
      },
      {
        "id": 97,
        "value": "setMin"
      },
      {
        "id": 101,
        "value": "markRange"
      },
      {
        "id": 105,
        "value": "compare"
      },
      {
        "id": 33,
        "value": "compare"
      },
      {
        "id": 1,
        "value": "compare"
      },
      {
        "id": 109,
        "value": "compare"
      },
      {
        "id": 53,
        "value": "compare"
      },
      {
        "id": 25,
        "value": "markRange"
      },
      {
        "id": 165,
        "value": "markRange"
      },
      {
        "id": 173,
        "value": "compare"
      }
    ],
    "i": [
      {
        "id": 134,
        "value": "5"
      },
      {
        "id": 74,
        "value": "3"
      },
      {
        "id": 226,
        "value": "11"
      },
      {
        "id": 206,
        "value": "9"
      },
      {
        "id": 58,
        "value": "2"
      },
      {
        "id": 118,
        "value": "4"
      },
      {
        "id": 210,
        "value": "10"
      },
      {
        "id": 114,
        "value": "4"
      },
      {
        "id": 78,
        "value": "3"
      },
      {
        "id": 222,
        "value": "11"
      },
      {
        "id": 218,
        "value": "10"
      },
      {
        "id": 122,
        "value": "4"
      },
      {
        "id": 178,
        "value": "8"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 166,
        "value": "7"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 70,
        "value": "3"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 214,
        "value": "10"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 90,
        "value": "3"
      },
      {
        "id": 238,
        "value": "12"
      },
      {
        "id": 182,
        "value": "8"
      },
      {
        "id": 50,
        "value": "2"
      },
      {
        "id": 234,
        "value": "12"
      },
      {
        "id": 150,
        "value": "6"
      },
      {
        "id": 30,
        "value": "1"
      },
      {
        "id": 106,
        "value": "4"
      },
      {
        "id": 42,
        "value": "1"
      },
      {
        "id": 170,
        "value": "7"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 186,
        "value": "8"
      },
      {
        "id": 98,
        "value": "4"
      },
      {
        "id": 34,
        "value": "1"
      },
      {
        "id": 54,
        "value": "2"
      },
      {
        "id": 126,
        "value": "5"
      },
      {
        "id": 82,
        "value": "3"
      },
      {
        "id": 86,
        "value": "3"
      },
      {
        "id": 22,
        "value": "1"
      },
      {
        "id": 26,
        "value": "1"
      },
      {
        "id": 110,
        "value": "4"
      },
      {
        "id": 230,
        "value": "11"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 190,
        "value": "8"
      },
      {
        "id": 154,
        "value": "6"
      },
      {
        "id": 142,
        "value": "5"
      },
      {
        "id": 162,
        "value": "7"
      },
      {
        "id": 202,
        "value": "9"
      },
      {
        "id": 158,
        "value": "6"
      },
      {
        "id": 102,
        "value": "4"
      },
      {
        "id": 198,
        "value": "9"
      },
      {
        "id": 138,
        "value": "5"
      },
      {
        "id": 62,
        "value": "2"
      },
      {
        "id": 146,
        "value": "6"
      },
      {
        "id": 242,
        "value": "12"
      },
      {
        "id": 130,
        "value": "5"
      },
      {
        "id": 174,
        "value": "7"
      },
      {
        "id": 94,
        "value": "3"
      },
      {
        "id": 194,
        "value": "9"
      }
    ],
    "j": [
      {
        "id": 15,
        "value": "10"
      },
      {
        "id": 7,
        "value": "7"
      },
      {
        "id": 219,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "8"
      },
      {
        "id": 115,
        "value": "10"
      },
      {
        "id": 151,
        "value": "9"
      },
      {
        "id": 171,
        "value": "8"
      },
      {
        "id": 223,
        "value": "\u2014"
      },
      {
        "id": 43,
        "value": "10"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 211,
        "value": "11"
      },
      {
        "id": 139,
        "value": "\u2014"
      },
      {
        "id": 11,
        "value": "8"
      },
      {
        "id": 179,
        "value": "\u2014"
      },
      {
        "id": 227,
        "value": "12"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 199,
        "value": "10"
      },
      {
        "id": 235,
        "value": "13"
      },
      {
        "id": 111,
        "value": "8"
      },
      {
        "id": 207,
        "value": "13"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "8"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "7"
      },
      {
        "id": 155,
        "value": "11"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 83,
        "value": "11"
      },
      {
        "id": 3,
        "value": "6"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "\u2014"
      },
      {
        "id": 47,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "11"
      },
      {
        "id": 195,
        "value": "10"
      },
      {
        "id": 79,
        "value": "4"
      },
      {
        "id": 183,
        "value": "\u2014"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "4"
      },
      {
        "id": 27,
        "value": "\u2014"
      },
      {
        "id": 187,
        "value": "9"
      },
      {
        "id": 31,
        "value": "6"
      },
      {
        "id": 19,
        "value": "11"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "13"
      },
      {
        "id": 23,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "7"
      },
      {
        "id": 131,
        "value": "6"
      },
      {
        "id": 175,
        "value": "9"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 123,
        "value": "\u2014"
      },
      {
        "id": 51,
        "value": "3"
      },
      {
        "id": 59,
        "value": "10"
      },
      {
        "id": 215,
        "value": "13"
      },
      {
        "id": 135,
        "value": "7"
      },
      {
        "id": 127,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "10"
      },
      {
        "id": 163,
        "value": "\u2014"
      },
      {
        "id": 99,
        "value": "\u2014"
      },
      {
        "id": 107,
        "value": "5"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 203,
        "value": "11"
      },
      {
        "id": 71,
        "value": "\u2014"
      }
    ],
    "minIndex": [
      {
        "id": 128,
        "value": "5"
      },
      {
        "id": 192,
        "value": "8"
      },
      {
        "id": 120,
        "value": "6"
      },
      {
        "id": 196,
        "value": "9"
      },
      {
        "id": 40,
        "value": "6"
      },
      {
        "id": 144,
        "value": "5"
      },
      {
        "id": 100,
        "value": "4"
      },
      {
        "id": 240,
        "value": "12"
      },
      {
        "id": 116,
        "value": "6"
      },
      {
        "id": 28,
        "value": "1"
      },
      {
        "id": 124,
        "value": "12"
      },
      {
        "id": 188,
        "value": "8"
      },
      {
        "id": 12,
        "value": "6"
      },
      {
        "id": 232,
        "value": "11"
      },
      {
        "id": 4,
        "value": "1"
      },
      {
        "id": 112,
        "value": "6"
      },
      {
        "id": 20,
        "value": "9"
      },
      {
        "id": 224,
        "value": "11"
      },
      {
        "id": 92,
        "value": "3"
      },
      {
        "id": 204,
        "value": "11"
      },
      {
        "id": 152,
        "value": "7"
      },
      {
        "id": 216,
        "value": "11"
      },
      {
        "id": 244,
        "value": "\u2014"
      },
      {
        "id": 168,
        "value": "7"
      },
      {
        "id": 212,
        "value": "10"
      },
      {
        "id": 84,
        "value": "7"
      },
      {
        "id": 104,
        "value": "4"
      },
      {
        "id": 156,
        "value": "7"
      },
      {
        "id": 72,
        "value": "\u2014"
      },
      {
        "id": 148,
        "value": "7"
      },
      {
        "id": 88,
        "value": "7"
      },
      {
        "id": 16,
        "value": "9"
      },
      {
        "id": 220,
        "value": "\u2014"
      },
      {
        "id": 76,
        "value": "3"
      },
      {
        "id": 96,
        "value": "\u2014"
      },
      {
        "id": 200,
        "value": "10"
      },
      {
        "id": 136,
        "value": "6"
      },
      {
        "id": 140,
        "value": "6"
      },
      {
        "id": 52,
        "value": "2"
      },
      {
        "id": 48,
        "value": "1"
      },
      {
        "id": 36,
        "value": "6"
      },
      {
        "id": 164,
        "value": "7"
      },
      {
        "id": 44,
        "value": "6"
      },
      {
        "id": 56,
        "value": "6"
      },
      {
        "id": 236,
        "value": "12"
      },
      {
        "id": 208,
        "value": "13"
      },
      {
        "id": 172,
        "value": "8"
      },
      {
        "id": 64,
        "value": "6"
      },
      {
        "id": 160,
        "value": "\u2014"
      },
      {
        "id": 108,
        "value": "4"
      },
      {
        "id": 8,
        "value": "6"
      },
      {
        "id": 80,
        "value": "3"
      },
      {
        "id": 184,
        "value": "8"
      },
      {
        "id": 180,
        "value": "8"
      },
      {
        "id": 176,
        "value": "8"
      },
      {
        "id": 228,
        "value": "11"
      },
      {
        "id": 24,
        "value": "1"
      },
      {
        "id": 132,
        "value": "5"
      },
      {
        "id": 60,
        "value": "6"
      },
      {
        "id": 68,
        "value": "\u2014"
      },
      {
        "id": 32,
        "value": "1"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "n": 14,
      "i": null,
      "j": null,
      "minIndex": null,
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
      "stepId": "forI",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": null,
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
      "stepId": "setMin",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "stepId": "markRange",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "stepId": "forJ",
      "n": 14,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
      "stepId": "updateMin",
      "n": 14,
      "i": 0,
      "j": 1,
      "minIndex": 1,
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
      "n": 14,
      "i": 0,
      "j": 2,
      "minIndex": 1,
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
      "n": 14,
      "i": 0,
      "j": 3,
      "minIndex": 1,
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
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 4,
      "minIndex": 1,
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
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 5,
      "minIndex": 1,
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
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 6,
      "minIndex": 1,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 13,
      "stepId": "updateMin",
      "n": 14,
      "i": 0,
      "j": 6,
      "minIndex": 6,
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
      "step": 14,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 7,
      "minIndex": 6,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 15,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 8,
      "minIndex": 6,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 16,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 9,
      "minIndex": 6,
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
      "step": 17,
      "stepId": "updateMin",
      "n": 14,
      "i": 0,
      "j": 9,
      "minIndex": 9,
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
      "step": 18,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 10,
      "minIndex": 9,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 19,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 11,
      "minIndex": 9,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 20,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 12,
      "minIndex": 9,
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
      "step": 21,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 13,
      "minIndex": 9,
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
      "step": 22,
      "stepId": "checkSwap",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 9,
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
      "step": 23,
      "stepId": "swapMin",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 0,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 24,
      "stepId": "markSortedI",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 25,
      "stepId": "forI",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 26,
      "stepId": "setMin",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 27,
      "stepId": "markRange",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 28,
      "stepId": "forJ",
      "n": 14,
      "i": 1,
      "j": 2,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 29,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 2,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 30,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 3,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 31,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 4,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
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
      "n": 14,
      "i": 1,
      "j": 5,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
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
      "n": 14,
      "i": 1,
      "j": 6,
      "minIndex": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 34,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 6,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
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
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 7,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
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
      "n": 14,
      "i": 1,
      "j": 8,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 37,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 9,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 38,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 10,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 39,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 11,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 40,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 12,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 41,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 13,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 42,
      "stepId": "checkSwap",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 6,
      "array": [
        20,
        151,
        213,
        218,
        251,
        983,
        78,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 43,
      "stepId": "swapMin",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 44,
      "stepId": "markSortedI",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 45,
      "stepId": "forI",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 46,
      "stepId": "setMin",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 47,
      "stepId": "markRange",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 48,
      "stepId": "forJ",
      "n": 14,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 49,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 50,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 4,
      "minIndex": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 51,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 5,
      "minIndex": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 52,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 6,
      "minIndex": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 53,
      "stepId": "updateMin",
      "n": 14,
      "i": 2,
      "j": 6,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 54,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 7,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 55,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 8,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
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
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 9,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 57,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 10,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 58,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 11,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 59,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 12,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 60,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 13,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 61,
      "stepId": "checkSwap",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 6,
      "array": [
        20,
        78,
        213,
        218,
        251,
        983,
        151,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 62,
      "stepId": "swapMin",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 63,
      "stepId": "markSortedI",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 64,
      "stepId": "forI",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
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
      "stepId": "setMin",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 66,
      "stepId": "markRange",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 67,
      "stepId": "forJ",
      "n": 14,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
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
      "n": 14,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
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
      "n": 14,
      "i": 3,
      "j": 5,
      "minIndex": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 70,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 6,
      "minIndex": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 71,
      "stepId": "updateMin",
      "n": 14,
      "i": 3,
      "j": 6,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 72,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 7,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 73,
      "stepId": "updateMin",
      "n": 14,
      "i": 3,
      "j": 7,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 74,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 8,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 75,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 9,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 76,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 10,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 77,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 11,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 78,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 12,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 79,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 13,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
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
      "stepId": "checkSwap",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        218,
        251,
        983,
        213,
        192,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 81,
      "stepId": "swapMin",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
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
      "stepId": "markSortedI",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
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
      "stepId": "forI",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 84,
      "stepId": "setMin",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 85,
      "stepId": "markRange",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 86,
      "stepId": "forJ",
      "n": 14,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 87,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
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
      "n": 14,
      "i": 4,
      "j": 6,
      "minIndex": 4,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 89,
      "stepId": "updateMin",
      "n": 14,
      "i": 4,
      "j": 6,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 90,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 7,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 91,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 8,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 92,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 9,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 93,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 10,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
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
      "n": 14,
      "i": 4,
      "j": 11,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
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
      "n": 14,
      "i": 4,
      "j": 12,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 96,
      "stepId": "updateMin",
      "n": 14,
      "i": 4,
      "j": 12,
      "minIndex": 12,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 97,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 13,
      "minIndex": 12,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 98,
      "stepId": "checkSwap",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 12,
      "array": [
        20,
        78,
        151,
        192,
        251,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 99,
      "stepId": "swapMin",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 100,
      "stepId": "markSortedI",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 101,
      "stepId": "forI",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 102,
      "stepId": "setMin",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 103,
      "stepId": "markRange",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 104,
      "stepId": "forJ",
      "n": 14,
      "i": 5,
      "j": 6,
      "minIndex": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 105,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 6,
      "minIndex": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 106,
      "stepId": "updateMin",
      "n": 14,
      "i": 5,
      "j": 6,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 107,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 7,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 108,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 8,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 109,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 9,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 110,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 10,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 111,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 11,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 112,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 12,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 113,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 13,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 114,
      "stepId": "checkSwap",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        983,
        213,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 115,
      "stepId": "swapMin",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 116,
      "stepId": "markSortedI",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 117,
      "stepId": "forI",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 118,
      "stepId": "setMin",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 119,
      "stepId": "markRange",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 120,
      "stepId": "forJ",
      "n": 14,
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 121,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 122,
      "stepId": "updateMin",
      "n": 14,
      "i": 6,
      "j": 7,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
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
      "n": 14,
      "i": 6,
      "j": 8,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 124,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 9,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 125,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 10,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 126,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 11,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 127,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 12,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 128,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 13,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 129,
      "stepId": "checkSwap",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        218,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 130,
      "stepId": "swapMin",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 131,
      "stepId": "markSortedI",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 132,
      "stepId": "forI",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 133,
      "stepId": "setMin",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 134,
      "stepId": "markRange",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 135,
      "stepId": "forJ",
      "n": 14,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 136,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 137,
      "stepId": "updateMin",
      "n": 14,
      "i": 7,
      "j": 8,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
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
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 9,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
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
      "n": 14,
      "i": 7,
      "j": 10,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 140,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 11,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 141,
      "stepId": "updateMin",
      "n": 14,
      "i": 7,
      "j": 11,
      "minIndex": 11,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 142,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 12,
      "minIndex": 11,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 143,
      "stepId": "updateMin",
      "n": 14,
      "i": 7,
      "j": 12,
      "minIndex": 12,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 144,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 13,
      "minIndex": 12,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 145,
      "stepId": "checkSwap",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 12,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        983,
        874,
        980,
        947,
        389,
        251,
        692
      ]
    },
    {
      "step": 146,
      "stepId": "swapMin",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 147,
      "stepId": "markSortedI",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 148,
      "stepId": "forI",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": null,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 149,
      "stepId": "setMin",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 150,
      "stepId": "markRange",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 151,
      "stepId": "forJ",
      "n": 14,
      "i": 8,
      "j": 9,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 152,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 9,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 153,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 10,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 154,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 11,
      "minIndex": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 155,
      "stepId": "updateMin",
      "n": 14,
      "i": 8,
      "j": 11,
      "minIndex": 11,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 156,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 12,
      "minIndex": 11,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 157,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 13,
      "minIndex": 11,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 158,
      "stepId": "checkSwap",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 11,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        874,
        980,
        947,
        389,
        983,
        692
      ]
    },
    {
      "step": 159,
      "stepId": "swapMin",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 8,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 160,
      "stepId": "markSortedI",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": null,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 161,
      "stepId": "forI",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": null,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 162,
      "stepId": "setMin",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 163,
      "stepId": "markRange",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 164,
      "stepId": "forJ",
      "n": 14,
      "i": 9,
      "j": 10,
      "minIndex": 9,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 165,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 10,
      "minIndex": 9,
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
        947,
        874,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 166,
      "stepId": "updateMin",
      "n": 14,
      "i": 9,
      "j": 10,
      "minIndex": 10,
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
        947,
        874,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 167,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 11,
      "minIndex": 10,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 168,
      "stepId": "updateMin",
      "n": 14,
      "i": 9,
      "j": 11,
      "minIndex": 11,
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
        947,
        874,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 169,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 12,
      "minIndex": 11,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 170,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 13,
      "minIndex": 11,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 171,
      "stepId": "updateMin",
      "n": 14,
      "i": 9,
      "j": 13,
      "minIndex": 13,
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
        947,
        874,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 172,
      "stepId": "checkSwap",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 13,
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
        947,
        874,
        983,
        692
      ]
    },
    {
      "step": 173,
      "stepId": "swapMin",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
      ]
    },
    {
      "step": 174,
      "stepId": "markSortedI",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": null,
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
      ]
    },
    {
      "step": 175,
      "stepId": "forI",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": null,
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
      ]
    },
    {
      "step": 176,
      "stepId": "setMin",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
      ]
    },
    {
      "step": 177,
      "stepId": "markRange",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
      ]
    },
    {
      "step": 178,
      "stepId": "forJ",
      "n": 14,
      "i": 10,
      "j": 11,
      "minIndex": 10,
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
      ]
    },
    {
      "step": 179,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 11,
      "minIndex": 10,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 180,
      "stepId": "updateMin",
      "n": 14,
      "i": 10,
      "j": 11,
      "minIndex": 11,
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
      ]
    },
    {
      "step": 181,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 12,
      "minIndex": 11,
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
      ]
    },
    {
      "step": 182,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 13,
      "minIndex": 11,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 183,
      "stepId": "checkSwap",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 11,
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
      ]
    },
    {
      "step": 184,
      "stepId": "swapMin",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
        983,
        980
      ]
    },
    {
      "step": 185,
      "stepId": "markSortedI",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": null,
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
        983,
        980
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
      "stepId": "forI",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": null,
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
        983,
        980
      ]
    },
    {
      "step": 187,
      "stepId": "setMin",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        983,
        980
      ]
    },
    {
      "step": 188,
      "stepId": "markRange",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        983,
        980
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 189,
      "stepId": "forJ",
      "n": 14,
      "i": 11,
      "j": 12,
      "minIndex": 11,
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
        983,
        980
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
      "n": 14,
      "i": 11,
      "j": 12,
      "minIndex": 11,
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
        983,
        980
      ]
    },
    {
      "step": 191,
      "stepId": "compare",
      "n": 14,
      "i": 11,
      "j": 13,
      "minIndex": 11,
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
        983,
        980
      ]
    },
    {
      "step": 192,
      "stepId": "checkSwap",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        983,
        980
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 193,
      "stepId": "markSortedI",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": null,
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
        983,
        980
      ]
    },
    {
      "step": 194,
      "stepId": "forI",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": null,
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
        983,
        980
      ]
    },
    {
      "step": 195,
      "stepId": "setMin",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        983,
        980
      ]
    },
    {
      "step": 196,
      "stepId": "markRange",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        983,
        980
      ]
    },
    {
      "step": 197,
      "stepId": "forJ",
      "n": 14,
      "i": 12,
      "j": 13,
      "minIndex": 12,
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
        983,
        980
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 198,
      "stepId": "compare",
      "n": 14,
      "i": 12,
      "j": 13,
      "minIndex": 12,
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
        983,
        980
      ]
    },
    {
      "step": 199,
      "stepId": "updateMin",
      "n": 14,
      "i": 12,
      "j": 13,
      "minIndex": 13,
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
        983,
        980
      ]
    },
    {
      "step": 200,
      "stepId": "checkSwap",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 13,
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
        983,
        980
      ]
    },
    {
      "step": 201,
      "stepId": "swapMin",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 202,
      "stepId": "markSortedI",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": null,
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
