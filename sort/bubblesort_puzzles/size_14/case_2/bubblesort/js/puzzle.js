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
    267,
    239,
    829,
    983,
    376,
    542,
    467,
    74,
    183,
    663,
    500,
    975,
    965,
    278
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
    6,
    15,
    19,
    21,
    27,
    31,
    32,
    34,
    37,
    43,
    45,
    49,
    50,
    56,
    58,
    61,
    65,
    70,
    73,
    79,
    84,
    86,
    91,
    92,
    93,
    100,
    106,
    108,
    113,
    119,
    121,
    122,
    129,
    131,
    135,
    136,
    137,
    144,
    145,
    148,
    151,
    154,
    155,
    158,
    164,
    167,
    168,
    172,
    173,
    176,
    180,
    184,
    189,
    191,
    192,
    193,
    198,
    202,
    207,
    208,
    209,
    216,
    218,
    222,
    223,
    224,
    225,
    226
  ],
  "answers": {
    "6": {
      "stepId": "compare",
      "i": "0",
      "j": "0",
      "swapped": "false"
    },
    "15": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "4",
      "swapped": "true"
    },
    "19": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "5",
      "swapped": "true"
    },
    "21": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "6",
      "swapped": "true"
    },
    "27": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "8",
      "swapped": "true"
    },
    "31": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "9",
      "swapped": "true"
    },
    "32": {
      "stepId": "compare",
      "i": "0",
      "j": "10",
      "swapped": "true"
    },
    "34": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "10",
      "swapped": "true"
    },
    "37": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "11",
      "swapped": "true"
    },
    "43": {
      "stepId": "forI",
      "i": "1",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "45": {
      "stepId": "markRange",
      "i": "1",
      "j": "\u2014",
      "swapped": "false"
    },
    "49": {
      "stepId": "compare",
      "i": "1",
      "j": "2",
      "swapped": "false"
    },
    "50": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "2",
      "swapped": "false"
    },
    "56": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "4",
      "swapped": "true"
    },
    "58": {
      "stepId": "compare",
      "i": "1",
      "j": "5",
      "swapped": "true"
    },
    "61": {
      "stepId": "compare",
      "i": "1",
      "j": "6",
      "swapped": "true"
    },
    "65": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "7",
      "swapped": "true"
    },
    "70": {
      "stepId": "compare",
      "i": "1",
      "j": "9",
      "swapped": "true"
    },
    "73": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "10",
      "swapped": "true"
    },
    "79": {
      "stepId": "forI",
      "i": "2",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "84": {
      "stepId": "compare",
      "i": "2",
      "j": "1",
      "swapped": "false"
    },
    "86": {
      "stepId": "compare",
      "i": "2",
      "j": "3",
      "swapped": "false"
    },
    "91": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "4",
      "swapped": "true"
    },
    "92": {
      "stepId": "compare",
      "i": "2",
      "j": "5",
      "swapped": "true"
    },
    "93": {
      "stepId": "swapAdjacent",
      "i": "2",
      "j": "5",
      "swapped": "true"
    },
    "100": {
      "stepId": "compare",
      "i": "2",
      "j": "9",
      "swapped": "true"
    },
    "106": {
      "stepId": "forI",
      "i": "3",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "108": {
      "stepId": "markRange",
      "i": "3",
      "j": "\u2014",
      "swapped": "false"
    },
    "113": {
      "stepId": "compare",
      "i": "3",
      "j": "3",
      "swapped": "false"
    },
    "119": {
      "stepId": "compare",
      "i": "3",
      "j": "5",
      "swapped": "true"
    },
    "121": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "6",
      "swapped": "true"
    },
    "122": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "6",
      "swapped": "true"
    },
    "129": {
      "stepId": "checkEarlyExit",
      "i": "3",
      "j": "\u2014",
      "swapped": "true"
    },
    "131": {
      "stepId": "setSwapped",
      "i": "4",
      "j": "\u2014",
      "swapped": "false"
    },
    "135": {
      "stepId": "compare",
      "i": "4",
      "j": "1",
      "swapped": "false"
    },
    "136": {
      "stepId": "compare",
      "i": "4",
      "j": "2",
      "swapped": "false"
    },
    "137": {
      "stepId": "swapAdjacent",
      "i": "4",
      "j": "2",
      "swapped": "false"
    },
    "144": {
      "stepId": "compare",
      "i": "4",
      "j": "6",
      "swapped": "true"
    },
    "145": {
      "stepId": "compare",
      "i": "4",
      "j": "7",
      "swapped": "true"
    },
    "148": {
      "stepId": "setSwappedTrue",
      "i": "4",
      "j": "8",
      "swapped": "true"
    },
    "151": {
      "stepId": "forI",
      "i": "5",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "154": {
      "stepId": "forJ",
      "i": "5",
      "j": "0",
      "swapped": "false"
    },
    "155": {
      "stepId": "compare",
      "i": "5",
      "j": "0",
      "swapped": "false"
    },
    "158": {
      "stepId": "setSwappedTrue",
      "i": "5",
      "j": "1",
      "swapped": "true"
    },
    "164": {
      "stepId": "compare",
      "i": "5",
      "j": "5",
      "swapped": "true"
    },
    "167": {
      "stepId": "swapAdjacent",
      "i": "5",
      "j": "7",
      "swapped": "true"
    },
    "168": {
      "stepId": "setSwappedTrue",
      "i": "5",
      "j": "7",
      "swapped": "true"
    },
    "172": {
      "stepId": "setSwapped",
      "i": "6",
      "j": "\u2014",
      "swapped": "false"
    },
    "173": {
      "stepId": "markRange",
      "i": "6",
      "j": "\u2014",
      "swapped": "false"
    },
    "176": {
      "stepId": "swapAdjacent",
      "i": "6",
      "j": "0",
      "swapped": "false"
    },
    "180": {
      "stepId": "setSwappedTrue",
      "i": "6",
      "j": "1",
      "swapped": "true"
    },
    "184": {
      "stepId": "compare",
      "i": "6",
      "j": "5",
      "swapped": "true"
    },
    "189": {
      "stepId": "checkEarlyExit",
      "i": "6",
      "j": "\u2014",
      "swapped": "true"
    },
    "191": {
      "stepId": "setSwapped",
      "i": "7",
      "j": "\u2014",
      "swapped": "false"
    },
    "192": {
      "stepId": "markRange",
      "i": "7",
      "j": "\u2014",
      "swapped": "false"
    },
    "193": {
      "stepId": "forJ",
      "i": "7",
      "j": "0",
      "swapped": "false"
    },
    "198": {
      "stepId": "compare",
      "i": "7",
      "j": "4",
      "swapped": "false"
    },
    "202": {
      "stepId": "markSortedEnd",
      "i": "7",
      "j": "\u2014",
      "swapped": "true"
    },
    "207": {
      "stepId": "forJ",
      "i": "8",
      "j": "0",
      "swapped": "false"
    },
    "208": {
      "stepId": "compare",
      "i": "8",
      "j": "0",
      "swapped": "false"
    },
    "209": {
      "stepId": "compare",
      "i": "8",
      "j": "1",
      "swapped": "false"
    },
    "216": {
      "stepId": "checkEarlyExit",
      "i": "8",
      "j": "\u2014",
      "swapped": "true"
    },
    "218": {
      "stepId": "setSwapped",
      "i": "9",
      "j": "\u2014",
      "swapped": "false"
    },
    "222": {
      "stepId": "compare",
      "i": "9",
      "j": "1",
      "swapped": "false"
    },
    "223": {
      "stepId": "compare",
      "i": "9",
      "j": "2",
      "swapped": "false"
    },
    "224": {
      "stepId": "compare",
      "i": "9",
      "j": "3",
      "swapped": "false"
    },
    "225": {
      "stepId": "markSortedEnd",
      "i": "9",
      "j": "\u2014",
      "swapped": "false"
    },
    "226": {
      "stepId": "checkEarlyExit",
      "i": "9",
      "j": "\u2014",
      "swapped": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 185,
        "value": "setSwappedTrue"
      },
      {
        "id": 89,
        "value": "setSwappedTrue"
      },
      {
        "id": 165,
        "value": "forJ"
      },
      {
        "id": 93,
        "value": "compare"
      },
      {
        "id": 169,
        "value": "compare"
      },
      {
        "id": 49,
        "value": "swapAdjacent"
      },
      {
        "id": 157,
        "value": "setSwappedTrue"
      },
      {
        "id": 129,
        "value": "checkEarlyExit"
      },
      {
        "id": 229,
        "value": "markSortedEnd"
      },
      {
        "id": 269,
        "value": "checkEarlyExit"
      },
      {
        "id": 61,
        "value": "compare"
      },
      {
        "id": 177,
        "value": "compare"
      },
      {
        "id": 145,
        "value": "swapAdjacent"
      },
      {
        "id": 133,
        "value": "setSwapped"
      },
      {
        "id": 221,
        "value": "forJ"
      },
      {
        "id": 217,
        "value": "markRange"
      },
      {
        "id": 105,
        "value": "forI"
      },
      {
        "id": 161,
        "value": "forI"
      },
      {
        "id": 245,
        "value": "checkEarlyExit"
      },
      {
        "id": 237,
        "value": "compare"
      },
      {
        "id": 181,
        "value": "swapAdjacent"
      },
      {
        "id": 253,
        "value": "compare"
      },
      {
        "id": 29,
        "value": "setSwappedTrue"
      },
      {
        "id": 33,
        "value": "setSwappedTrue"
      },
      {
        "id": 149,
        "value": "compare"
      },
      {
        "id": 37,
        "value": "forI"
      },
      {
        "id": 1,
        "value": "compare"
      },
      {
        "id": 265,
        "value": "markSortedEnd"
      },
      {
        "id": 21,
        "value": "setSwappedTrue"
      },
      {
        "id": 25,
        "value": "compare"
      },
      {
        "id": 121,
        "value": "swapAdjacent"
      },
      {
        "id": 97,
        "value": "swapAdjacent"
      },
      {
        "id": 101,
        "value": "compare"
      },
      {
        "id": 141,
        "value": "compare"
      },
      {
        "id": 73,
        "value": "setSwappedTrue"
      },
      {
        "id": 209,
        "value": "checkEarlyExit"
      },
      {
        "id": 153,
        "value": "compare"
      },
      {
        "id": 13,
        "value": "swapAdjacent"
      },
      {
        "id": 125,
        "value": "setSwappedTrue"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 41,
        "value": "markRange"
      },
      {
        "id": 53,
        "value": "swapAdjacent"
      },
      {
        "id": 109,
        "value": "markRange"
      },
      {
        "id": 45,
        "value": "compare"
      },
      {
        "id": 173,
        "value": "setSwappedTrue"
      },
      {
        "id": 201,
        "value": "setSwappedTrue"
      },
      {
        "id": 241,
        "value": "compare"
      },
      {
        "id": 65,
        "value": "swapAdjacent"
      },
      {
        "id": 225,
        "value": "compare"
      },
      {
        "id": 69,
        "value": "compare"
      },
      {
        "id": 197,
        "value": "swapAdjacent"
      },
      {
        "id": 189,
        "value": "setSwapped"
      },
      {
        "id": 137,
        "value": "compare"
      },
      {
        "id": 257,
        "value": "compare"
      },
      {
        "id": 117,
        "value": "compare"
      },
      {
        "id": 5,
        "value": "swapAdjacent"
      },
      {
        "id": 261,
        "value": "compare"
      },
      {
        "id": 213,
        "value": "setSwapped"
      },
      {
        "id": 81,
        "value": "compare"
      },
      {
        "id": 9,
        "value": "setSwappedTrue"
      },
      {
        "id": 77,
        "value": "forI"
      },
      {
        "id": 249,
        "value": "setSwapped"
      },
      {
        "id": 113,
        "value": "compare"
      },
      {
        "id": 17,
        "value": "swapAdjacent"
      },
      {
        "id": 193,
        "value": "markRange"
      },
      {
        "id": 233,
        "value": "forJ"
      },
      {
        "id": 205,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "compare"
      }
    ],
    "i": [
      {
        "id": 86,
        "value": "2"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 230,
        "value": "7"
      },
      {
        "id": 66,
        "value": "1"
      },
      {
        "id": 154,
        "value": "4"
      },
      {
        "id": 42,
        "value": "1"
      },
      {
        "id": 210,
        "value": "6"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 122,
        "value": "3"
      },
      {
        "id": 170,
        "value": "5"
      },
      {
        "id": 130,
        "value": "3"
      },
      {
        "id": 162,
        "value": "5"
      },
      {
        "id": 146,
        "value": "4"
      },
      {
        "id": 262,
        "value": "9"
      },
      {
        "id": 202,
        "value": "6"
      },
      {
        "id": 138,
        "value": "4"
      },
      {
        "id": 194,
        "value": "6"
      },
      {
        "id": 166,
        "value": "5"
      },
      {
        "id": 238,
        "value": "8"
      },
      {
        "id": 106,
        "value": "3"
      },
      {
        "id": 90,
        "value": "2"
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
        "id": 182,
        "value": "5"
      },
      {
        "id": 102,
        "value": "2"
      },
      {
        "id": 258,
        "value": "9"
      },
      {
        "id": 222,
        "value": "7"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 110,
        "value": "3"
      },
      {
        "id": 158,
        "value": "4"
      },
      {
        "id": 50,
        "value": "1"
      },
      {
        "id": 206,
        "value": "6"
      },
      {
        "id": 78,
        "value": "2"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 178,
        "value": "5"
      },
      {
        "id": 266,
        "value": "9"
      },
      {
        "id": 254,
        "value": "9"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 186,
        "value": "5"
      },
      {
        "id": 226,
        "value": "7"
      },
      {
        "id": 270,
        "value": "9"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 242,
        "value": "8"
      },
      {
        "id": 174,
        "value": "5"
      },
      {
        "id": 94,
        "value": "2"
      },
      {
        "id": 250,
        "value": "9"
      },
      {
        "id": 70,
        "value": "1"
      },
      {
        "id": 150,
        "value": "4"
      },
      {
        "id": 134,
        "value": "4"
      },
      {
        "id": 142,
        "value": "4"
      },
      {
        "id": 58,
        "value": "1"
      },
      {
        "id": 218,
        "value": "7"
      },
      {
        "id": 214,
        "value": "7"
      },
      {
        "id": 118,
        "value": "3"
      },
      {
        "id": 74,
        "value": "1"
      },
      {
        "id": 114,
        "value": "3"
      },
      {
        "id": 198,
        "value": "6"
      },
      {
        "id": 54,
        "value": "1"
      },
      {
        "id": 98,
        "value": "2"
      },
      {
        "id": 126,
        "value": "3"
      },
      {
        "id": 246,
        "value": "8"
      },
      {
        "id": 82,
        "value": "2"
      },
      {
        "id": 190,
        "value": "6"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 62,
        "value": "1"
      }
    ],
    "j": [
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 227,
        "value": "4"
      },
      {
        "id": 143,
        "value": "2"
      },
      {
        "id": 15,
        "value": "6"
      },
      {
        "id": 239,
        "value": "0"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 259,
        "value": "2"
      },
      {
        "id": 247,
        "value": "\u2014"
      },
      {
        "id": 223,
        "value": "0"
      },
      {
        "id": 55,
        "value": "4"
      },
      {
        "id": 19,
        "value": "8"
      },
      {
        "id": 115,
        "value": "3"
      },
      {
        "id": 263,
        "value": "3"
      },
      {
        "id": 155,
        "value": "7"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "10"
      },
      {
        "id": 107,
        "value": "\u2014"
      },
      {
        "id": 99,
        "value": "5"
      },
      {
        "id": 71,
        "value": "9"
      },
      {
        "id": 43,
        "value": "\u2014"
      },
      {
        "id": 51,
        "value": "2"
      },
      {
        "id": 119,
        "value": "5"
      },
      {
        "id": 175,
        "value": "1"
      },
      {
        "id": 83,
        "value": "1"
      },
      {
        "id": 179,
        "value": "5"
      },
      {
        "id": 255,
        "value": "1"
      },
      {
        "id": 147,
        "value": "2"
      },
      {
        "id": 131,
        "value": "\u2014"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 11,
        "value": "5"
      },
      {
        "id": 219,
        "value": "\u2014"
      },
      {
        "id": 95,
        "value": "5"
      },
      {
        "id": 211,
        "value": "\u2014"
      },
      {
        "id": 251,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "\u2014"
      },
      {
        "id": 267,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "6"
      },
      {
        "id": 187,
        "value": "7"
      },
      {
        "id": 123,
        "value": "6"
      },
      {
        "id": 31,
        "value": "10"
      },
      {
        "id": 103,
        "value": "9"
      },
      {
        "id": 139,
        "value": "1"
      },
      {
        "id": 203,
        "value": "1"
      },
      {
        "id": 191,
        "value": "\u2014"
      },
      {
        "id": 199,
        "value": "0"
      },
      {
        "id": 47,
        "value": "2"
      },
      {
        "id": 87,
        "value": "3"
      },
      {
        "id": 27,
        "value": "10"
      },
      {
        "id": 167,
        "value": "0"
      },
      {
        "id": 271,
        "value": "\u2014"
      },
      {
        "id": 243,
        "value": "1"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "5"
      },
      {
        "id": 183,
        "value": "7"
      },
      {
        "id": 3,
        "value": "0"
      },
      {
        "id": 171,
        "value": "0"
      },
      {
        "id": 59,
        "value": "5"
      },
      {
        "id": 235,
        "value": "0"
      },
      {
        "id": 159,
        "value": "8"
      },
      {
        "id": 7,
        "value": "4"
      },
      {
        "id": 35,
        "value": "11"
      },
      {
        "id": 91,
        "value": "4"
      },
      {
        "id": 151,
        "value": "6"
      },
      {
        "id": 63,
        "value": "6"
      },
      {
        "id": 67,
        "value": "7"
      },
      {
        "id": 163,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "9"
      }
    ],
    "swapped": [
      {
        "id": 264,
        "value": "false"
      },
      {
        "id": 232,
        "value": "true"
      },
      {
        "id": 196,
        "value": "false"
      },
      {
        "id": 252,
        "value": "false"
      },
      {
        "id": 240,
        "value": "false"
      },
      {
        "id": 256,
        "value": "false"
      },
      {
        "id": 16,
        "value": "true"
      },
      {
        "id": 28,
        "value": "true"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 80,
        "value": "\u2014"
      },
      {
        "id": 68,
        "value": "true"
      },
      {
        "id": 116,
        "value": "false"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 248,
        "value": "true"
      },
      {
        "id": 156,
        "value": "true"
      },
      {
        "id": 52,
        "value": "false"
      },
      {
        "id": 260,
        "value": "false"
      },
      {
        "id": 188,
        "value": "true"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 164,
        "value": "\u2014"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 148,
        "value": "false"
      },
      {
        "id": 36,
        "value": "true"
      },
      {
        "id": 220,
        "value": "false"
      },
      {
        "id": 216,
        "value": "false"
      },
      {
        "id": 44,
        "value": "false"
      },
      {
        "id": 100,
        "value": "true"
      },
      {
        "id": 204,
        "value": "true"
      },
      {
        "id": 112,
        "value": "false"
      },
      {
        "id": 228,
        "value": "false"
      },
      {
        "id": 84,
        "value": "false"
      },
      {
        "id": 244,
        "value": "false"
      },
      {
        "id": 224,
        "value": "false"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 40,
        "value": "\u2014"
      },
      {
        "id": 192,
        "value": "false"
      },
      {
        "id": 20,
        "value": "true"
      },
      {
        "id": 180,
        "value": "true"
      },
      {
        "id": 4,
        "value": "false"
      },
      {
        "id": 268,
        "value": "false"
      },
      {
        "id": 92,
        "value": "true"
      },
      {
        "id": 212,
        "value": "true"
      },
      {
        "id": 140,
        "value": "false"
      },
      {
        "id": 48,
        "value": "false"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 88,
        "value": "false"
      },
      {
        "id": 136,
        "value": "false"
      },
      {
        "id": 72,
        "value": "true"
      },
      {
        "id": 124,
        "value": "true"
      },
      {
        "id": 60,
        "value": "true"
      },
      {
        "id": 8,
        "value": "true"
      },
      {
        "id": 108,
        "value": "\u2014"
      },
      {
        "id": 132,
        "value": "true"
      },
      {
        "id": 168,
        "value": "false"
      },
      {
        "id": 200,
        "value": "false"
      },
      {
        "id": 32,
        "value": "true"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 236,
        "value": "false"
      },
      {
        "id": 12,
        "value": "true"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 24,
        "value": "true"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 272,
        "value": "false"
      },
      {
        "id": 144,
        "value": "false"
      },
      {
        "id": 172,
        "value": "false"
      },
      {
        "id": 76,
        "value": "true"
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
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
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
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 3,
      "stepId": "setSwapped",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
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
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
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
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 6,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": false,
      "array": [
        267,
        239,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 7,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
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
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
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
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 10,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 11,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        983,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 12,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        983,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 13,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        983,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 14,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        983,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 15,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        983,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 16,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        983,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 17,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        983,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 18,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        983,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 19,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        983,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 20,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        983,
        74,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 21,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        983,
        183,
        663,
        500,
        975,
        965,
        278
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        983,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 23,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        983,
        183,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 24,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        983,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 25,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        983,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 26,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        983,
        663,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 27,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        983,
        500,
        975,
        965,
        278
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        983,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 29,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        983,
        500,
        975,
        965,
        278
      ]
    },
    {
      "step": 30,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        983,
        975,
        965,
        278
      ]
    },
    {
      "step": 31,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        983,
        975,
        965,
        278
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
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        983,
        975,
        965,
        278
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 33,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        983,
        965,
        278
      ]
    },
    {
      "step": 34,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        983,
        965,
        278
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
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        983,
        965,
        278
      ]
    },
    {
      "step": 36,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        983,
        278
      ]
    },
    {
      "step": 37,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        983,
        278
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 38,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        983,
        278
      ]
    },
    {
      "step": 39,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 40,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 41,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 42,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 43,
      "stepId": "forI",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": null,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
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
      "step": 44,
      "stepId": "setSwapped",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 45,
      "stepId": "markRange",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
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
      "step": 46,
      "stepId": "forJ",
      "n": 14,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 47,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 48,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 1,
      "swapped": false,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 49,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 2,
      "swapped": false,
      "array": [
        239,
        267,
        829,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
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
      "step": 50,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 2,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        829,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
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
      "step": 51,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        829,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 52,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        829,
        542,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 53,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        829,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 54,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        829,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 55,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        829,
        467,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 56,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        829,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
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
      "step": 57,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        829,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 58,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        829,
        74,
        183,
        663,
        500,
        975,
        965,
        278,
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        829,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 60,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        829,
        183,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 61,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        829,
        183,
        663,
        500,
        975,
        965,
        278,
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
      "step": 62,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        829,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 63,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        829,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 64,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        829,
        663,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 65,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        829,
        500,
        975,
        965,
        278,
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
      "step": 66,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        829,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 67,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        829,
        500,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 68,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 69,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        975,
        965,
        278,
        983
      ]
    },
    {
      "step": 70,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        975,
        965,
        278,
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
      "step": 71,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        975,
        965,
        278,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        975,
        278,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        975,
        278,
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
      "step": 74,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        975,
        278,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 79,
      "stepId": "forI",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": null,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
      "step": 80,
      "stepId": "setSwapped",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 81,
      "stepId": "markRange",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 83,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
      "step": 85,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 2,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        542,
        467,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
      "step": 87,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 3,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        467,
        542,
        74,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        467,
        74,
        542,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        467,
        74,
        542,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        467,
        74,
        542,
        183,
        663,
        500,
        829,
        965,
        278,
        975,
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
      "step": 93,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        663,
        500,
        829,
        965,
        278,
        975,
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        663,
        500,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 95,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        663,
        500,
        829,
        965,
        278,
        975,
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
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        663,
        500,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 97,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 98,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 99,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 100,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        965,
        278,
        975,
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
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        965,
        278,
        975,
        983
      ]
    },
    {
      "step": 102,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 103,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 104,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 105,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 106,
      "stepId": "forI",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": null,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
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
      "step": 107,
      "stepId": "setSwapped",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 108,
      "stepId": "markRange",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
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
      "step": 109,
      "stepId": "forJ",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 110,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 111,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 1,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 112,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 2,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 113,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        467,
        74,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
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
      "step": 114,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        74,
        467,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 115,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        467,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 116,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        467,
        183,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 117,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 118,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 119,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
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
      "step": 120,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        542,
        500,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 121,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        829,
        278,
        965,
        975,
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        829,
        278,
        965,
        975,
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
      "step": 123,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 124,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 125,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        829,
        278,
        965,
        975,
        983
      ]
    },
    {
      "step": 126,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 127,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 128,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 129,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
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
      "step": 130,
      "stepId": "forI",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": null,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 131,
      "stepId": "setSwapped",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
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
      "stepId": "markRange",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 133,
      "stepId": "forJ",
      "n": 14,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 134,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 135,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 1,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
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
      "step": 136,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": false,
      "array": [
        239,
        267,
        376,
        74,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": false,
      "array": [
        239,
        267,
        74,
        376,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
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
      "step": 138,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        376,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 139,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        376,
        183,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 140,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 141,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 142,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 143,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 144,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
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
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
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
      "step": 146,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        663,
        278,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 147,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 148,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
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
      "step": 149,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 150,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 151,
      "stepId": "forI",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": null,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
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
      "step": 152,
      "stepId": "setSwapped",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 153,
      "stepId": "markRange",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 154,
      "stepId": "forJ",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
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
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
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
      "step": 156,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 1,
      "swapped": false,
      "array": [
        239,
        267,
        74,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 157,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 1,
      "swapped": false,
      "array": [
        239,
        74,
        267,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 158,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 1,
      "swapped": true,
      "array": [
        239,
        74,
        267,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
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
      "step": 159,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 2,
      "swapped": true,
      "array": [
        239,
        74,
        267,
        183,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 160,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 2,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 161,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 2,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 162,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 3,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 163,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 4,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 164,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
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
      "step": 165,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 166,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        542,
        278,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 167,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
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
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 170,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 171,
      "stepId": "forI",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": null,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 172,
      "stepId": "setSwapped",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
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
      "step": 173,
      "stepId": "markRange",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
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
      "step": 174,
      "stepId": "forJ",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 175,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        239,
        74,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 176,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        74,
        239,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": true,
      "array": [
        74,
        239,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 178,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 1,
      "swapped": true,
      "array": [
        74,
        239,
        183,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 179,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 1,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 180,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 1,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
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
      "step": 181,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 2,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 182,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 3,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 183,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 4,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 184,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
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
      "j": 6,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        500,
        278,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 186,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 6,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 187,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 6,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 188,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 189,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 190,
      "stepId": "forI",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": null,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 191,
      "stepId": "setSwapped",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "stepId": "markRange",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 193,
      "stepId": "forJ",
      "n": 14,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 194,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 195,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 1,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 196,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 2,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 197,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 3,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 198,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 4,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 199,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 5,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        467,
        278,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 200,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 5,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 201,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 5,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 202,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 203,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 204,
      "stepId": "forI",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": null,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 205,
      "stepId": "setSwapped",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 206,
      "stepId": "markRange",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 207,
      "stepId": "forJ",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 209,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 1,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 210,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 2,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 211,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 3,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 212,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 4,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        376,
        278,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 213,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 8,
      "j": 4,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 214,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 8,
      "j": 4,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 215,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 216,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": true,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 217,
      "stepId": "forI",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": null,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 218,
      "stepId": "setSwapped",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "stepId": "markRange",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 220,
      "stepId": "forJ",
      "n": 14,
      "i": 9,
      "j": 0,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 221,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 0,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
        983
      ]
    },
    {
      "step": 222,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 1,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 223,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 2,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 224,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 3,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 225,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 226,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
      "step": 227,
      "stepId": "breakEarly",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        74,
        183,
        239,
        267,
        278,
        376,
        467,
        500,
        542,
        663,
        829,
        965,
        975,
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
