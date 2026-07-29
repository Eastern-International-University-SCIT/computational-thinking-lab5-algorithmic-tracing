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
    "swapped"
  ],
  "blankFields": [
    "stepId",
    "i",
    "j",
    "swapped"
  ],
  "executorGlobal": "BubbleSortExecutor",
  "pickedSteps": [
    2,
    5,
    10,
    12,
    13,
    14,
    16,
    17,
    21,
    26,
    27,
    28,
    29,
    31,
    34,
    39,
    42,
    46,
    48,
    53,
    58,
    63,
    66,
    68,
    78,
    80,
    82,
    91,
    93,
    97,
    99,
    100,
    102,
    104,
    105,
    107,
    111,
    115,
    118,
    120,
    121,
    123,
    128,
    131,
    134,
    136,
    144,
    146,
    154,
    163,
    165,
    167,
    168,
    169,
    175,
    176,
    177,
    181,
    182,
    184,
    187,
    191,
    195,
    207,
    213,
    214,
    215,
    218,
    220,
    233
  ],
  "answers": {
    "2": {
      "stepId": "forI",
      "i": "0",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "5": {
      "stepId": "forJ",
      "i": "0",
      "j": "0",
      "swapped": "false"
    },
    "10": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "1",
      "swapped": "true"
    },
    "12": {
      "stepId": "compare",
      "i": "0",
      "j": "2",
      "swapped": "true"
    },
    "13": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "2",
      "swapped": "true"
    },
    "14": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "2",
      "swapped": "true"
    },
    "16": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "3",
      "swapped": "true"
    },
    "17": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "3",
      "swapped": "true"
    },
    "21": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "5",
      "swapped": "true"
    },
    "26": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "7",
      "swapped": "true"
    },
    "27": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "7",
      "swapped": "true"
    },
    "28": {
      "stepId": "compare",
      "i": "0",
      "j": "8",
      "swapped": "true"
    },
    "29": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "8",
      "swapped": "true"
    },
    "31": {
      "stepId": "compare",
      "i": "0",
      "j": "9",
      "swapped": "true"
    },
    "34": {
      "stepId": "compare",
      "i": "0",
      "j": "10",
      "swapped": "true"
    },
    "39": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "11",
      "swapped": "true"
    },
    "42": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "12",
      "swapped": "true"
    },
    "46": {
      "stepId": "setSwapped",
      "i": "1",
      "j": "\u2014",
      "swapped": "false"
    },
    "48": {
      "stepId": "forJ",
      "i": "1",
      "j": "0",
      "swapped": "false"
    },
    "53": {
      "stepId": "compare",
      "i": "1",
      "j": "4",
      "swapped": "false"
    },
    "58": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "5",
      "swapped": "true"
    },
    "63": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "7",
      "swapped": "true"
    },
    "66": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "8",
      "swapped": "true"
    },
    "68": {
      "stepId": "compare",
      "i": "1",
      "j": "9",
      "swapped": "true"
    },
    "78": {
      "stepId": "checkEarlyExit",
      "i": "1",
      "j": "\u2014",
      "swapped": "true"
    },
    "80": {
      "stepId": "setSwapped",
      "i": "2",
      "j": "\u2014",
      "swapped": "false"
    },
    "82": {
      "stepId": "forJ",
      "i": "2",
      "j": "0",
      "swapped": "false"
    },
    "91": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "4",
      "swapped": "true"
    },
    "93": {
      "stepId": "compare",
      "i": "2",
      "j": "6",
      "swapped": "true"
    },
    "97": {
      "stepId": "compare",
      "i": "2",
      "j": "8",
      "swapped": "true"
    },
    "99": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "8",
      "swapped": "true"
    },
    "100": {
      "stepId": "compare",
      "i": "2",
      "j": "9",
      "swapped": "true"
    },
    "102": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "9",
      "swapped": "true"
    },
    "104": {
      "stepId": "swapAdjacent",
      "i": "2",
      "j": "10",
      "swapped": "true"
    },
    "105": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "10",
      "swapped": "true"
    },
    "107": {
      "stepId": "checkEarlyExit",
      "i": "2",
      "j": "\u2014",
      "swapped": "true"
    },
    "111": {
      "stepId": "forJ",
      "i": "3",
      "j": "0",
      "swapped": "false"
    },
    "115": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "2",
      "swapped": "false"
    },
    "118": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "3",
      "swapped": "true"
    },
    "120": {
      "stepId": "compare",
      "i": "3",
      "j": "4",
      "swapped": "true"
    },
    "121": {
      "stepId": "compare",
      "i": "3",
      "j": "5",
      "swapped": "true"
    },
    "123": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "5",
      "swapped": "true"
    },
    "128": {
      "stepId": "compare",
      "i": "3",
      "j": "8",
      "swapped": "true"
    },
    "131": {
      "stepId": "compare",
      "i": "3",
      "j": "9",
      "swapped": "true"
    },
    "134": {
      "stepId": "markSortedEnd",
      "i": "3",
      "j": "\u2014",
      "swapped": "true"
    },
    "136": {
      "stepId": "forI",
      "i": "4",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "144": {
      "stepId": "compare",
      "i": "4",
      "j": "2",
      "swapped": "true"
    },
    "146": {
      "stepId": "setSwappedTrue",
      "i": "4",
      "j": "2",
      "swapped": "true"
    },
    "154": {
      "stepId": "swapAdjacent",
      "i": "4",
      "j": "7",
      "swapped": "true"
    },
    "163": {
      "stepId": "compare",
      "i": "5",
      "j": "0",
      "swapped": "false"
    },
    "165": {
      "stepId": "setSwappedTrue",
      "i": "5",
      "j": "0",
      "swapped": "true"
    },
    "167": {
      "stepId": "compare",
      "i": "5",
      "j": "2",
      "swapped": "true"
    },
    "168": {
      "stepId": "compare",
      "i": "5",
      "j": "3",
      "swapped": "true"
    },
    "169": {
      "stepId": "swapAdjacent",
      "i": "5",
      "j": "3",
      "swapped": "true"
    },
    "175": {
      "stepId": "setSwappedTrue",
      "i": "5",
      "j": "6",
      "swapped": "true"
    },
    "176": {
      "stepId": "compare",
      "i": "5",
      "j": "7",
      "swapped": "true"
    },
    "177": {
      "stepId": "markSortedEnd",
      "i": "5",
      "j": "\u2014",
      "swapped": "true"
    },
    "181": {
      "stepId": "markRange",
      "i": "6",
      "j": "\u2014",
      "swapped": "false"
    },
    "182": {
      "stepId": "forJ",
      "i": "6",
      "j": "0",
      "swapped": "false"
    },
    "184": {
      "stepId": "compare",
      "i": "6",
      "j": "1",
      "swapped": "false"
    },
    "187": {
      "stepId": "setSwappedTrue",
      "i": "6",
      "j": "2",
      "swapped": "true"
    },
    "191": {
      "stepId": "swapAdjacent",
      "i": "6",
      "j": "5",
      "swapped": "true"
    },
    "195": {
      "stepId": "checkEarlyExit",
      "i": "6",
      "j": "\u2014",
      "swapped": "true"
    },
    "207": {
      "stepId": "swapAdjacent",
      "i": "7",
      "j": "4",
      "swapped": "true"
    },
    "213": {
      "stepId": "setSwapped",
      "i": "8",
      "j": "\u2014",
      "swapped": "false"
    },
    "214": {
      "stepId": "markRange",
      "i": "8",
      "j": "\u2014",
      "swapped": "false"
    },
    "215": {
      "stepId": "forJ",
      "i": "8",
      "j": "0",
      "swapped": "false"
    },
    "218": {
      "stepId": "setSwappedTrue",
      "i": "8",
      "j": "0",
      "swapped": "true"
    },
    "220": {
      "stepId": "compare",
      "i": "8",
      "j": "2",
      "swapped": "true"
    },
    "233": {
      "stepId": "markSortedEnd",
      "i": "9",
      "j": "\u2014",
      "swapped": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 5,
        "value": "forJ"
      },
      {
        "id": 237,
        "value": "compare"
      },
      {
        "id": 253,
        "value": "swapAdjacent"
      },
      {
        "id": 213,
        "value": "swapAdjacent"
      },
      {
        "id": 37,
        "value": "swapAdjacent"
      },
      {
        "id": 81,
        "value": "setSwappedTrue"
      },
      {
        "id": 69,
        "value": "setSwapped"
      },
      {
        "id": 25,
        "value": "swapAdjacent"
      },
      {
        "id": 141,
        "value": "checkEarlyExit"
      },
      {
        "id": 93,
        "value": "compare"
      },
      {
        "id": 109,
        "value": "setSwappedTrue"
      },
      {
        "id": 73,
        "value": "forJ"
      },
      {
        "id": 201,
        "value": "setSwappedTrue"
      },
      {
        "id": 1,
        "value": "forI"
      },
      {
        "id": 45,
        "value": "compare"
      },
      {
        "id": 205,
        "value": "compare"
      },
      {
        "id": 209,
        "value": "compare"
      },
      {
        "id": 181,
        "value": "forI"
      },
      {
        "id": 277,
        "value": "markSortedEnd"
      },
      {
        "id": 265,
        "value": "forJ"
      },
      {
        "id": 121,
        "value": "setSwappedTrue"
      },
      {
        "id": 173,
        "value": "compare"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 61,
        "value": "setSwappedTrue"
      },
      {
        "id": 165,
        "value": "setSwappedTrue"
      },
      {
        "id": 21,
        "value": "setSwappedTrue"
      },
      {
        "id": 217,
        "value": "setSwappedTrue"
      },
      {
        "id": 137,
        "value": "setSwappedTrue"
      },
      {
        "id": 197,
        "value": "compare"
      },
      {
        "id": 249,
        "value": "checkEarlyExit"
      },
      {
        "id": 105,
        "value": "forJ"
      },
      {
        "id": 193,
        "value": "swapAdjacent"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 189,
        "value": "setSwappedTrue"
      },
      {
        "id": 269,
        "value": "setSwappedTrue"
      },
      {
        "id": 33,
        "value": "setSwappedTrue"
      },
      {
        "id": 101,
        "value": "setSwapped"
      },
      {
        "id": 233,
        "value": "forJ"
      },
      {
        "id": 149,
        "value": "swapAdjacent"
      },
      {
        "id": 169,
        "value": "compare"
      },
      {
        "id": 9,
        "value": "swapAdjacent"
      },
      {
        "id": 229,
        "value": "markRange"
      },
      {
        "id": 29,
        "value": "setSwappedTrue"
      },
      {
        "id": 53,
        "value": "compare"
      },
      {
        "id": 145,
        "value": "forJ"
      },
      {
        "id": 97,
        "value": "checkEarlyExit"
      },
      {
        "id": 221,
        "value": "compare"
      },
      {
        "id": 125,
        "value": "compare"
      },
      {
        "id": 17,
        "value": "swapAdjacent"
      },
      {
        "id": 133,
        "value": "swapAdjacent"
      },
      {
        "id": 49,
        "value": "swapAdjacent"
      },
      {
        "id": 41,
        "value": "setSwappedTrue"
      },
      {
        "id": 113,
        "value": "compare"
      },
      {
        "id": 161,
        "value": "compare"
      },
      {
        "id": 273,
        "value": "compare"
      },
      {
        "id": 177,
        "value": "markSortedEnd"
      },
      {
        "id": 89,
        "value": "swapAdjacent"
      },
      {
        "id": 77,
        "value": "compare"
      },
      {
        "id": 225,
        "value": "markSortedEnd"
      },
      {
        "id": 117,
        "value": "compare"
      },
      {
        "id": 65,
        "value": "setSwappedTrue"
      },
      {
        "id": 245,
        "value": "swapAdjacent"
      },
      {
        "id": 261,
        "value": "markRange"
      },
      {
        "id": 153,
        "value": "swapAdjacent"
      },
      {
        "id": 185,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "swapAdjacent"
      },
      {
        "id": 129,
        "value": "setSwappedTrue"
      },
      {
        "id": 257,
        "value": "setSwapped"
      },
      {
        "id": 157,
        "value": "compare"
      },
      {
        "id": 241,
        "value": "setSwappedTrue"
      }
    ],
    "i": [
      {
        "id": 234,
        "value": "6"
      },
      {
        "id": 262,
        "value": "8"
      },
      {
        "id": 214,
        "value": "5"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 150,
        "value": "3"
      },
      {
        "id": 106,
        "value": "2"
      },
      {
        "id": 122,
        "value": "2"
      },
      {
        "id": 178,
        "value": "3"
      },
      {
        "id": 274,
        "value": "8"
      },
      {
        "id": 110,
        "value": "2"
      },
      {
        "id": 138,
        "value": "2"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 194,
        "value": "4"
      },
      {
        "id": 154,
        "value": "3"
      },
      {
        "id": 54,
        "value": "0"
      },
      {
        "id": 198,
        "value": "5"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 94,
        "value": "1"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 250,
        "value": "6"
      },
      {
        "id": 118,
        "value": "2"
      },
      {
        "id": 174,
        "value": "3"
      },
      {
        "id": 226,
        "value": "5"
      },
      {
        "id": 254,
        "value": "7"
      },
      {
        "id": 114,
        "value": "2"
      },
      {
        "id": 66,
        "value": "0"
      },
      {
        "id": 62,
        "value": "0"
      },
      {
        "id": 210,
        "value": "5"
      },
      {
        "id": 218,
        "value": "5"
      },
      {
        "id": 86,
        "value": "1"
      },
      {
        "id": 158,
        "value": "3"
      },
      {
        "id": 74,
        "value": "1"
      },
      {
        "id": 242,
        "value": "6"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 266,
        "value": "8"
      },
      {
        "id": 182,
        "value": "4"
      },
      {
        "id": 82,
        "value": "1"
      },
      {
        "id": 258,
        "value": "8"
      },
      {
        "id": 146,
        "value": "3"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 98,
        "value": "1"
      },
      {
        "id": 46,
        "value": "0"
      },
      {
        "id": 90,
        "value": "1"
      },
      {
        "id": 70,
        "value": "1"
      },
      {
        "id": 134,
        "value": "2"
      },
      {
        "id": 170,
        "value": "3"
      },
      {
        "id": 142,
        "value": "2"
      },
      {
        "id": 190,
        "value": "4"
      },
      {
        "id": 246,
        "value": "6"
      },
      {
        "id": 166,
        "value": "3"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 278,
        "value": "9"
      },
      {
        "id": 186,
        "value": "4"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 222,
        "value": "5"
      },
      {
        "id": 50,
        "value": "0"
      },
      {
        "id": 102,
        "value": "2"
      },
      {
        "id": 202,
        "value": "5"
      },
      {
        "id": 238,
        "value": "6"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 78,
        "value": "1"
      },
      {
        "id": 206,
        "value": "5"
      },
      {
        "id": 162,
        "value": "3"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 126,
        "value": "2"
      },
      {
        "id": 270,
        "value": "8"
      },
      {
        "id": 130,
        "value": "2"
      },
      {
        "id": 230,
        "value": "6"
      }
    ],
    "j": [
      {
        "id": 211,
        "value": "3"
      },
      {
        "id": 79,
        "value": "4"
      },
      {
        "id": 15,
        "value": "2"
      },
      {
        "id": 227,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "5"
      },
      {
        "id": 7,
        "value": "0"
      },
      {
        "id": 255,
        "value": "4"
      },
      {
        "id": 51,
        "value": "8"
      },
      {
        "id": 175,
        "value": "9"
      },
      {
        "id": 31,
        "value": "3"
      },
      {
        "id": 183,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "0"
      },
      {
        "id": 87,
        "value": "7"
      },
      {
        "id": 223,
        "value": "7"
      },
      {
        "id": 67,
        "value": "12"
      },
      {
        "id": 275,
        "value": "2"
      },
      {
        "id": 171,
        "value": "8"
      },
      {
        "id": 179,
        "value": "\u2014"
      },
      {
        "id": 59,
        "value": "10"
      },
      {
        "id": 63,
        "value": "11"
      },
      {
        "id": 127,
        "value": "9"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 71,
        "value": "\u2014"
      },
      {
        "id": 279,
        "value": "\u2014"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "2"
      },
      {
        "id": 39,
        "value": "7"
      },
      {
        "id": 115,
        "value": "6"
      },
      {
        "id": 99,
        "value": "\u2014"
      },
      {
        "id": 187,
        "value": "2"
      },
      {
        "id": 271,
        "value": "0"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 163,
        "value": "5"
      },
      {
        "id": 259,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "2"
      },
      {
        "id": 111,
        "value": "4"
      },
      {
        "id": 235,
        "value": "0"
      },
      {
        "id": 247,
        "value": "5"
      },
      {
        "id": 131,
        "value": "9"
      },
      {
        "id": 159,
        "value": "4"
      },
      {
        "id": 215,
        "value": "3"
      },
      {
        "id": 47,
        "value": "8"
      },
      {
        "id": 11,
        "value": "1"
      },
      {
        "id": 123,
        "value": "8"
      },
      {
        "id": 55,
        "value": "9"
      },
      {
        "id": 251,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "2"
      },
      {
        "id": 95,
        "value": "9"
      },
      {
        "id": 83,
        "value": "5"
      },
      {
        "id": 151,
        "value": "2"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "10"
      },
      {
        "id": 155,
        "value": "3"
      },
      {
        "id": 203,
        "value": "0"
      },
      {
        "id": 167,
        "value": "5"
      },
      {
        "id": 139,
        "value": "10"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 239,
        "value": "1"
      },
      {
        "id": 43,
        "value": "7"
      },
      {
        "id": 219,
        "value": "6"
      },
      {
        "id": 91,
        "value": "8"
      },
      {
        "id": 147,
        "value": "0"
      },
      {
        "id": 267,
        "value": "0"
      },
      {
        "id": 243,
        "value": "2"
      },
      {
        "id": 195,
        "value": "7"
      },
      {
        "id": 119,
        "value": "8"
      },
      {
        "id": 19,
        "value": "2"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 199,
        "value": "0"
      },
      {
        "id": 27,
        "value": "3"
      }
    ],
    "swapped": [
      {
        "id": 108,
        "value": "false"
      },
      {
        "id": 244,
        "value": "true"
      },
      {
        "id": 268,
        "value": "false"
      },
      {
        "id": 264,
        "value": "false"
      },
      {
        "id": 76,
        "value": "false"
      },
      {
        "id": 60,
        "value": "true"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 24,
        "value": "true"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 140,
        "value": "true"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 112,
        "value": "true"
      },
      {
        "id": 184,
        "value": "\u2014"
      },
      {
        "id": 72,
        "value": "false"
      },
      {
        "id": 248,
        "value": "true"
      },
      {
        "id": 228,
        "value": "true"
      },
      {
        "id": 252,
        "value": "true"
      },
      {
        "id": 164,
        "value": "true"
      },
      {
        "id": 232,
        "value": "false"
      },
      {
        "id": 116,
        "value": "true"
      },
      {
        "id": 156,
        "value": "true"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 32,
        "value": "true"
      },
      {
        "id": 12,
        "value": "true"
      },
      {
        "id": 276,
        "value": "true"
      },
      {
        "id": 180,
        "value": "true"
      },
      {
        "id": 152,
        "value": "false"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 68,
        "value": "true"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 224,
        "value": "true"
      },
      {
        "id": 52,
        "value": "true"
      },
      {
        "id": 28,
        "value": "true"
      },
      {
        "id": 36,
        "value": "true"
      },
      {
        "id": 40,
        "value": "true"
      },
      {
        "id": 216,
        "value": "true"
      },
      {
        "id": 236,
        "value": "false"
      },
      {
        "id": 20,
        "value": "true"
      },
      {
        "id": 204,
        "value": "true"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 188,
        "value": "true"
      },
      {
        "id": 192,
        "value": "true"
      },
      {
        "id": 200,
        "value": "false"
      },
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 132,
        "value": "true"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 212,
        "value": "true"
      },
      {
        "id": 100,
        "value": "true"
      },
      {
        "id": 124,
        "value": "true"
      },
      {
        "id": 168,
        "value": "true"
      },
      {
        "id": 172,
        "value": "true"
      },
      {
        "id": 80,
        "value": "false"
      },
      {
        "id": 16,
        "value": "true"
      },
      {
        "id": 84,
        "value": "true"
      },
      {
        "id": 220,
        "value": "true"
      },
      {
        "id": 260,
        "value": "false"
      },
      {
        "id": 92,
        "value": "true"
      },
      {
        "id": 256,
        "value": "true"
      },
      {
        "id": 280,
        "value": "false"
      },
      {
        "id": 104,
        "value": "false"
      },
      {
        "id": 272,
        "value": "true"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 48,
        "value": "true"
      },
      {
        "id": 196,
        "value": "true"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 44,
        "value": "true"
      },
      {
        "id": 240,
        "value": "false"
      },
      {
        "id": 148,
        "value": "false"
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
      "swapped": null,
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
      "swapped": null,
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
        "swapped": true
      }
    },
    {
      "step": 3,
      "stepId": "setSwapped",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": false,
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
      "swapped": false,
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
      "j": 0,
      "swapped": false,
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
        "swapped": true
      }
    },
    {
      "step": 6,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": false,
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": false,
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
      "step": 8,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": true,
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
      "step": 9,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 1,
      "swapped": true,
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
      "step": 10,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 1,
      "swapped": true,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 11,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 1,
      "swapped": true,
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
      "step": 12,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 2,
      "swapped": true,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 13,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 2,
      "swapped": true,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 14,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 2,
      "swapped": true,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 15,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
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
      "step": 16,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 17,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 18,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 4,
      "swapped": true,
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
      "step": 19,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
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
      "step": 20,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        983,
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        983,
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
        "swapped": true
      }
    },
    {
      "step": 22,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        983,
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
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
      "step": 24,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
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
      "step": 25,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
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
      "step": 26,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        983,
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
        "swapped": true
      }
    },
    {
      "step": 27,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        983,
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
        "swapped": true
      }
    },
    {
      "step": 28,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        983,
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
        "swapped": true
      }
    },
    {
      "step": 29,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        983,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 30,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        983,
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
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        983,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 32,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        983,
        389,
        199,
        692
      ]
    },
    {
      "step": 33,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        983,
        389,
        199,
        692
      ]
    },
    {
      "step": 34,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        983,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 35,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        983,
        199,
        692
      ]
    },
    {
      "step": 36,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        983,
        199,
        692
      ]
    },
    {
      "step": 37,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        983,
        199,
        692
      ]
    },
    {
      "step": 38,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        983,
        692
      ]
    },
    {
      "step": 39,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        983,
        692
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 40,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        983,
        692
      ]
    },
    {
      "step": 41,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 42,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 43,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 44,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 45,
      "stepId": "forI",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": null,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 46,
      "stepId": "setSwapped",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 47,
      "stepId": "markRange",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 48,
      "stepId": "forJ",
      "n": 14,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 49,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 50,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 1,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 51,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 2,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 52,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 3,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 53,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        980,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 54,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        980,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 55,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        980,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 56,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        980,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 57,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        980,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 58,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        980,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 59,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        980,
        874,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 60,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        980,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 61,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        980,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 62,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        980,
        20,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 63,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        980,
        947,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 64,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        980,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 65,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        980,
        947,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 66,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        980,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 67,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        980,
        389,
        199,
        692,
        983
      ]
    },
    {
      "step": 68,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        980,
        389,
        199,
        692,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 69,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        980,
        199,
        692,
        983
      ]
    },
    {
      "step": 70,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        980,
        199,
        692,
        983
      ]
    },
    {
      "step": 71,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        980,
        199,
        692,
        983
      ]
    },
    {
      "step": 72,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        980,
        692,
        983
      ]
    },
    {
      "step": 73,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        980,
        692,
        983
      ]
    },
    {
      "step": 74,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        980,
        692,
        983
      ]
    },
    {
      "step": 75,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 76,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 77,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 78,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 79,
      "stepId": "forI",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": null,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 80,
      "stepId": "setSwapped",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 81,
      "stepId": "markRange",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 82,
      "stepId": "forJ",
      "n": 14,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 83,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 84,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 1,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 85,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 2,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 86,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 3,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        251,
        78,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 87,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 3,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        78,
        251,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 88,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 3,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        251,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 89,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        251,
        192,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 90,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 91,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 92,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 93,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        874,
        20,
        947,
        389,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 94,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 95,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 96,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        947,
        389,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 97,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        947,
        389,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 98,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        947,
        199,
        692,
        980,
        983
      ]
    },
    {
      "step": 99,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        947,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 100,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        947,
        199,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 101,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        947,
        692,
        980,
        983
      ]
    },
    {
      "step": 102,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        947,
        692,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 103,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        947,
        692,
        980,
        983
      ]
    },
    {
      "step": 104,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 105,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 106,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 107,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 108,
      "stepId": "forI",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": null,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 109,
      "stepId": "setSwapped",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 110,
      "stepId": "markRange",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 111,
      "stepId": "forJ",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 112,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 113,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 1,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 114,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 2,
      "swapped": false,
      "array": [
        151,
        213,
        218,
        78,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 115,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 2,
      "swapped": false,
      "array": [
        151,
        213,
        78,
        218,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 116,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 2,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        218,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 117,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        218,
        192,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 118,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 119,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 120,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 121,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        251,
        20,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 122,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 123,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 124,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 125,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        874,
        389,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 126,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        874,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 127,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        874,
        199,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 128,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        874,
        199,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 129,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        874,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 130,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        874,
        692,
        947,
        980,
        983
      ]
    },
    {
      "step": 131,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        874,
        692,
        947,
        980,
        983
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 132,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 133,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 134,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 135,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 136,
      "stepId": "forI",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": null,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 137,
      "stepId": "setSwapped",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 138,
      "stepId": "markRange",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 139,
      "stepId": "forJ",
      "n": 14,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 140,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 141,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 1,
      "swapped": false,
      "array": [
        151,
        213,
        78,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 142,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 1,
      "swapped": false,
      "array": [
        151,
        78,
        213,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 143,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 1,
      "swapped": true,
      "array": [
        151,
        78,
        213,
        192,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 144,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        151,
        78,
        213,
        192,
        218,
        20,
        251,
        389,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 145,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 146,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        218,
        20,
        251,
        389,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 147,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 148,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        218,
        20,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 149,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 150,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 151,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 152,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 153,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        389,
        199,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 154,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 155,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 156,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 157,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 158,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 159,
      "stepId": "forI",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": null,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 160,
      "stepId": "setSwapped",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 161,
      "stepId": "markRange",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 162,
      "stepId": "forJ",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 163,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        151,
        78,
        192,
        213,
        20,
        218,
        251,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 164,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        78,
        151,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 165,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        213,
        20,
        218,
        251,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 166,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 1,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        213,
        20,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 167,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 2,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        213,
        20,
        218,
        251,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 168,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 3,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        213,
        20,
        218,
        251,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 169,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 3,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        251,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 170,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 3,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        251,
        199,
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
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 4,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        251,
        199,
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
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        251,
        199,
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
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        251,
        199,
        389,
        692,
        874,
        947,
        980,
        983
      ]
    },
    {
      "step": 174,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
      "step": 175,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 176,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 177,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 178,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
      "stepId": "forI",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": null,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
      "stepId": "setSwapped",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
      "stepId": "markRange",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 182,
      "stepId": "forJ",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 183,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
      "step": 184,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 1,
      "swapped": false,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 185,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 2,
      "swapped": false,
      "array": [
        78,
        151,
        192,
        20,
        213,
        218,
        199,
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 2,
      "swapped": false,
      "array": [
        78,
        151,
        20,
        192,
        213,
        218,
        199,
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
      "step": 187,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 2,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        218,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 188,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 3,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        218,
        199,
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
      "step": 189,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 4,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        218,
        199,
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
      "step": 190,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        218,
        199,
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
      "step": 191,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 192,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 193,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 6,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 194,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 195,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
        "swapped": true
      }
    },
    {
      "step": 196,
      "stepId": "forI",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": null,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 197,
      "stepId": "setSwapped",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 198,
      "stepId": "markRange",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 199,
      "stepId": "forJ",
      "n": 14,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 200,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 201,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 1,
      "swapped": false,
      "array": [
        78,
        151,
        20,
        192,
        213,
        199,
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
      "step": 202,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 1,
      "swapped": false,
      "array": [
        78,
        20,
        151,
        192,
        213,
        199,
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
      "step": 203,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 1,
      "swapped": true,
      "array": [
        78,
        20,
        151,
        192,
        213,
        199,
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
      "step": 204,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 2,
      "swapped": true,
      "array": [
        78,
        20,
        151,
        192,
        213,
        199,
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
      "step": 205,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 3,
      "swapped": true,
      "array": [
        78,
        20,
        151,
        192,
        213,
        199,
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
      "step": 206,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 4,
      "swapped": true,
      "array": [
        78,
        20,
        151,
        192,
        213,
        199,
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
      "step": 207,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 4,
      "swapped": true,
      "array": [
        78,
        20,
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
        "swapped": true
      }
    },
    {
      "step": 208,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 4,
      "swapped": true,
      "array": [
        78,
        20,
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
      "step": 209,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 5,
      "swapped": true,
      "array": [
        78,
        20,
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
      "step": 210,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        78,
        20,
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
      "step": 211,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        78,
        20,
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
      "step": 212,
      "stepId": "forI",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": null,
      "array": [
        78,
        20,
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
      "step": 213,
      "stepId": "setSwapped",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        78,
        20,
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
        "swapped": true
      }
    },
    {
      "step": 214,
      "stepId": "markRange",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        78,
        20,
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
        "swapped": true
      }
    },
    {
      "step": 215,
      "stepId": "forJ",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        78,
        20,
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
        "swapped": true
      }
    },
    {
      "step": 216,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        78,
        20,
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
      "step": 217,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": false,
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
      "step": 218,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": true,
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
        "swapped": true
      }
    },
    {
      "step": 219,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 1,
      "swapped": true,
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
      "step": 220,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 2,
      "swapped": true,
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
        "swapped": true
      }
    },
    {
      "step": 221,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 3,
      "swapped": true,
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
      "step": 222,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 4,
      "swapped": true,
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
      "step": 223,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": true,
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
      "step": 224,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": true,
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
      "step": 225,
      "stepId": "forI",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": null,
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
      "step": 226,
      "stepId": "setSwapped",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
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
      "step": 227,
      "stepId": "markRange",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
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
      "step": 228,
      "stepId": "forJ",
      "n": 14,
      "i": 9,
      "j": 0,
      "swapped": false,
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
      "step": 229,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 0,
      "swapped": false,
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
      "step": 230,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 1,
      "swapped": false,
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
      "step": 231,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 2,
      "swapped": false,
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
      "step": 232,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 3,
      "swapped": false,
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
      "step": 233,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
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
        "swapped": true
      }
    },
    {
      "step": 234,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
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
      "step": 235,
      "stepId": "breakEarly",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
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
