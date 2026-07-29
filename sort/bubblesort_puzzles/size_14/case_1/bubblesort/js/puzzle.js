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
    3,
    4,
    6,
    7,
    8,
    16,
    17,
    20,
    21,
    29,
    30,
    32,
    33,
    37,
    42,
    49,
    50,
    51,
    52,
    54,
    61,
    64,
    66,
    69,
    70,
    73,
    81,
    83,
    86,
    89,
    90,
    91,
    94,
    95,
    96,
    98,
    104,
    109,
    110,
    120,
    121,
    125,
    126,
    128,
    129,
    132,
    135,
    139,
    149,
    151,
    164,
    166,
    167,
    169,
    172,
    173,
    176,
    179,
    183,
    187,
    193,
    194,
    196,
    197,
    200,
    204,
    210,
    212,
    214,
    217,
    219,
    221,
    224,
    228,
    232,
    237,
    239,
    252,
    261,
    264,
    266,
    270,
    273,
    278,
    281,
    282,
    283,
    284,
    289,
    295,
    299
  ],
  "answers": {
    "2": {
      "stepId": "forI",
      "i": "0",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "3": {
      "stepId": "setSwapped",
      "i": "0",
      "j": "\u2014",
      "swapped": "false"
    },
    "4": {
      "stepId": "markRange",
      "i": "0",
      "j": "\u2014",
      "swapped": "false"
    },
    "6": {
      "stepId": "compare",
      "i": "0",
      "j": "0",
      "swapped": "false"
    },
    "7": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "0",
      "swapped": "false"
    },
    "8": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "0",
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
    "20": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "5",
      "swapped": "true"
    },
    "21": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "5",
      "swapped": "true"
    },
    "29": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "8",
      "swapped": "true"
    },
    "30": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "8",
      "swapped": "true"
    },
    "32": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "9",
      "swapped": "true"
    },
    "33": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "9",
      "swapped": "true"
    },
    "37": {
      "stepId": "compare",
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
    "49": {
      "stepId": "compare",
      "i": "1",
      "j": "0",
      "swapped": "false"
    },
    "50": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "0",
      "swapped": "false"
    },
    "51": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "0",
      "swapped": "true"
    },
    "52": {
      "stepId": "compare",
      "i": "1",
      "j": "1",
      "swapped": "true"
    },
    "54": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "1",
      "swapped": "true"
    },
    "61": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "4",
      "swapped": "true"
    },
    "64": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "5",
      "swapped": "true"
    },
    "66": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "6",
      "swapped": "true"
    },
    "69": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "7",
      "swapped": "true"
    },
    "70": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "7",
      "swapped": "true"
    },
    "73": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "8",
      "swapped": "true"
    },
    "81": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "11",
      "swapped": "true"
    },
    "83": {
      "stepId": "markSortedEnd",
      "i": "1",
      "j": "\u2014",
      "swapped": "true"
    },
    "86": {
      "stepId": "setSwapped",
      "i": "2",
      "j": "\u2014",
      "swapped": "false"
    },
    "89": {
      "stepId": "compare",
      "i": "2",
      "j": "0",
      "swapped": "false"
    },
    "90": {
      "stepId": "swapAdjacent",
      "i": "2",
      "j": "0",
      "swapped": "false"
    },
    "91": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "0",
      "swapped": "true"
    },
    "94": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "1",
      "swapped": "true"
    },
    "95": {
      "stepId": "compare",
      "i": "2",
      "j": "2",
      "swapped": "true"
    },
    "96": {
      "stepId": "compare",
      "i": "2",
      "j": "3",
      "swapped": "true"
    },
    "98": {
      "stepId": "swapAdjacent",
      "i": "2",
      "j": "4",
      "swapped": "true"
    },
    "104": {
      "stepId": "swapAdjacent",
      "i": "2",
      "j": "6",
      "swapped": "true"
    },
    "109": {
      "stepId": "compare",
      "i": "2",
      "j": "8",
      "swapped": "true"
    },
    "110": {
      "stepId": "swapAdjacent",
      "i": "2",
      "j": "8",
      "swapped": "true"
    },
    "120": {
      "stepId": "forI",
      "i": "3",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "121": {
      "stepId": "setSwapped",
      "i": "3",
      "j": "\u2014",
      "swapped": "false"
    },
    "125": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "0",
      "swapped": "false"
    },
    "126": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "0",
      "swapped": "true"
    },
    "128": {
      "stepId": "compare",
      "i": "3",
      "j": "2",
      "swapped": "true"
    },
    "129": {
      "stepId": "compare",
      "i": "3",
      "j": "3",
      "swapped": "true"
    },
    "132": {
      "stepId": "compare",
      "i": "3",
      "j": "4",
      "swapped": "true"
    },
    "135": {
      "stepId": "compare",
      "i": "3",
      "j": "5",
      "swapped": "true"
    },
    "139": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "6",
      "swapped": "true"
    },
    "149": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "9",
      "swapped": "true"
    },
    "151": {
      "stepId": "checkEarlyExit",
      "i": "3",
      "j": "\u2014",
      "swapped": "true"
    },
    "164": {
      "stepId": "compare",
      "i": "4",
      "j": "4",
      "swapped": "true"
    },
    "166": {
      "stepId": "setSwappedTrue",
      "i": "4",
      "j": "4",
      "swapped": "true"
    },
    "167": {
      "stepId": "compare",
      "i": "4",
      "j": "5",
      "swapped": "true"
    },
    "169": {
      "stepId": "setSwappedTrue",
      "i": "4",
      "j": "5",
      "swapped": "true"
    },
    "172": {
      "stepId": "setSwappedTrue",
      "i": "4",
      "j": "6",
      "swapped": "true"
    },
    "173": {
      "stepId": "compare",
      "i": "4",
      "j": "7",
      "swapped": "true"
    },
    "176": {
      "stepId": "compare",
      "i": "4",
      "j": "8",
      "swapped": "true"
    },
    "179": {
      "stepId": "markSortedEnd",
      "i": "4",
      "j": "\u2014",
      "swapped": "true"
    },
    "183": {
      "stepId": "markRange",
      "i": "5",
      "j": "\u2014",
      "swapped": "false"
    },
    "187": {
      "stepId": "compare",
      "i": "5",
      "j": "2",
      "swapped": "false"
    },
    "193": {
      "stepId": "compare",
      "i": "5",
      "j": "4",
      "swapped": "true"
    },
    "194": {
      "stepId": "swapAdjacent",
      "i": "5",
      "j": "4",
      "swapped": "true"
    },
    "196": {
      "stepId": "compare",
      "i": "5",
      "j": "5",
      "swapped": "true"
    },
    "197": {
      "stepId": "swapAdjacent",
      "i": "5",
      "j": "5",
      "swapped": "true"
    },
    "200": {
      "stepId": "swapAdjacent",
      "i": "5",
      "j": "6",
      "swapped": "true"
    },
    "204": {
      "stepId": "setSwappedTrue",
      "i": "5",
      "j": "7",
      "swapped": "true"
    },
    "210": {
      "stepId": "forJ",
      "i": "6",
      "j": "0",
      "swapped": "false"
    },
    "212": {
      "stepId": "compare",
      "i": "6",
      "j": "1",
      "swapped": "false"
    },
    "214": {
      "stepId": "setSwappedTrue",
      "i": "6",
      "j": "1",
      "swapped": "true"
    },
    "217": {
      "stepId": "setSwappedTrue",
      "i": "6",
      "j": "2",
      "swapped": "true"
    },
    "219": {
      "stepId": "swapAdjacent",
      "i": "6",
      "j": "3",
      "swapped": "true"
    },
    "221": {
      "stepId": "compare",
      "i": "6",
      "j": "4",
      "swapped": "true"
    },
    "224": {
      "stepId": "compare",
      "i": "6",
      "j": "5",
      "swapped": "true"
    },
    "228": {
      "stepId": "swapAdjacent",
      "i": "6",
      "j": "6",
      "swapped": "true"
    },
    "232": {
      "stepId": "forI",
      "i": "7",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "237": {
      "stepId": "compare",
      "i": "7",
      "j": "1",
      "swapped": "false"
    },
    "239": {
      "stepId": "setSwappedTrue",
      "i": "7",
      "j": "1",
      "swapped": "true"
    },
    "252": {
      "stepId": "markSortedEnd",
      "i": "7",
      "j": "\u2014",
      "swapped": "true"
    },
    "261": {
      "stepId": "setSwappedTrue",
      "i": "8",
      "j": "1",
      "swapped": "true"
    },
    "264": {
      "stepId": "setSwappedTrue",
      "i": "8",
      "j": "2",
      "swapped": "true"
    },
    "266": {
      "stepId": "swapAdjacent",
      "i": "8",
      "j": "3",
      "swapped": "true"
    },
    "270": {
      "stepId": "setSwappedTrue",
      "i": "8",
      "j": "4",
      "swapped": "true"
    },
    "273": {
      "stepId": "forI",
      "i": "9",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "278": {
      "stepId": "compare",
      "i": "9",
      "j": "1",
      "swapped": "false"
    },
    "281": {
      "stepId": "compare",
      "i": "9",
      "j": "2",
      "swapped": "true"
    },
    "282": {
      "stepId": "swapAdjacent",
      "i": "9",
      "j": "2",
      "swapped": "true"
    },
    "283": {
      "stepId": "setSwappedTrue",
      "i": "9",
      "j": "2",
      "swapped": "true"
    },
    "284": {
      "stepId": "compare",
      "i": "9",
      "j": "3",
      "swapped": "true"
    },
    "289": {
      "stepId": "markRange",
      "i": "10",
      "j": "\u2014",
      "swapped": "false"
    },
    "295": {
      "stepId": "compare",
      "i": "10",
      "j": "2",
      "swapped": "true"
    },
    "299": {
      "stepId": "setSwapped",
      "i": "11",
      "j": "\u2014",
      "swapped": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 141,
        "value": "compare"
      },
      {
        "id": 189,
        "value": "compare"
      },
      {
        "id": 145,
        "value": "swapAdjacent"
      },
      {
        "id": 73,
        "value": "setSwappedTrue"
      },
      {
        "id": 329,
        "value": "setSwappedTrue"
      },
      {
        "id": 225,
        "value": "compare"
      },
      {
        "id": 317,
        "value": "setSwappedTrue"
      },
      {
        "id": 293,
        "value": "compare"
      },
      {
        "id": 289,
        "value": "compare"
      },
      {
        "id": 361,
        "value": "compare"
      },
      {
        "id": 341,
        "value": "compare"
      },
      {
        "id": 357,
        "value": "markRange"
      },
      {
        "id": 5,
        "value": "setSwapped"
      },
      {
        "id": 193,
        "value": "swapAdjacent"
      },
      {
        "id": 93,
        "value": "swapAdjacent"
      },
      {
        "id": 241,
        "value": "compare"
      },
      {
        "id": 169,
        "value": "swapAdjacent"
      },
      {
        "id": 365,
        "value": "setSwapped"
      },
      {
        "id": 353,
        "value": "compare"
      },
      {
        "id": 89,
        "value": "setSwappedTrue"
      },
      {
        "id": 325,
        "value": "swapAdjacent"
      },
      {
        "id": 125,
        "value": "swapAdjacent"
      },
      {
        "id": 269,
        "value": "forJ"
      },
      {
        "id": 177,
        "value": "compare"
      },
      {
        "id": 281,
        "value": "setSwappedTrue"
      },
      {
        "id": 345,
        "value": "swapAdjacent"
      },
      {
        "id": 333,
        "value": "forI"
      },
      {
        "id": 109,
        "value": "swapAdjacent"
      },
      {
        "id": 161,
        "value": "forI"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 213,
        "value": "compare"
      },
      {
        "id": 81,
        "value": "setSwappedTrue"
      },
      {
        "id": 105,
        "value": "setSwappedTrue"
      },
      {
        "id": 45,
        "value": "setSwappedTrue"
      },
      {
        "id": 309,
        "value": "setSwappedTrue"
      },
      {
        "id": 313,
        "value": "markSortedEnd"
      },
      {
        "id": 37,
        "value": "setSwappedTrue"
      },
      {
        "id": 197,
        "value": "setSwappedTrue"
      },
      {
        "id": 17,
        "value": "swapAdjacent"
      },
      {
        "id": 77,
        "value": "compare"
      },
      {
        "id": 321,
        "value": "setSwappedTrue"
      },
      {
        "id": 285,
        "value": "swapAdjacent"
      },
      {
        "id": 157,
        "value": "swapAdjacent"
      },
      {
        "id": 21,
        "value": "setSwappedTrue"
      },
      {
        "id": 209,
        "value": "setSwappedTrue"
      },
      {
        "id": 129,
        "value": "setSwappedTrue"
      },
      {
        "id": 305,
        "value": "compare"
      },
      {
        "id": 237,
        "value": "markRange"
      },
      {
        "id": 297,
        "value": "swapAdjacent"
      },
      {
        "id": 137,
        "value": "compare"
      },
      {
        "id": 249,
        "value": "swapAdjacent"
      },
      {
        "id": 153,
        "value": "compare"
      },
      {
        "id": 257,
        "value": "swapAdjacent"
      },
      {
        "id": 65,
        "value": "compare"
      },
      {
        "id": 149,
        "value": "swapAdjacent"
      },
      {
        "id": 41,
        "value": "swapAdjacent"
      },
      {
        "id": 1,
        "value": "forI"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 97,
        "value": "swapAdjacent"
      },
      {
        "id": 53,
        "value": "setSwappedTrue"
      },
      {
        "id": 245,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "setSwappedTrue"
      },
      {
        "id": 181,
        "value": "compare"
      },
      {
        "id": 229,
        "value": "compare"
      },
      {
        "id": 25,
        "value": "swapAdjacent"
      },
      {
        "id": 205,
        "value": "compare"
      },
      {
        "id": 217,
        "value": "setSwappedTrue"
      },
      {
        "id": 165,
        "value": "setSwapped"
      },
      {
        "id": 221,
        "value": "setSwappedTrue"
      },
      {
        "id": 261,
        "value": "swapAdjacent"
      },
      {
        "id": 117,
        "value": "setSwapped"
      },
      {
        "id": 29,
        "value": "setSwappedTrue"
      },
      {
        "id": 33,
        "value": "swapAdjacent"
      },
      {
        "id": 265,
        "value": "setSwappedTrue"
      },
      {
        "id": 49,
        "value": "swapAdjacent"
      },
      {
        "id": 101,
        "value": "setSwappedTrue"
      },
      {
        "id": 301,
        "value": "forI"
      },
      {
        "id": 273,
        "value": "compare"
      },
      {
        "id": 233,
        "value": "markSortedEnd"
      },
      {
        "id": 277,
        "value": "setSwappedTrue"
      },
      {
        "id": 253,
        "value": "compare"
      },
      {
        "id": 61,
        "value": "setSwappedTrue"
      },
      {
        "id": 133,
        "value": "setSwappedTrue"
      },
      {
        "id": 9,
        "value": "markRange"
      },
      {
        "id": 173,
        "value": "setSwappedTrue"
      },
      {
        "id": 349,
        "value": "setSwappedTrue"
      },
      {
        "id": 337,
        "value": "compare"
      },
      {
        "id": 113,
        "value": "markSortedEnd"
      },
      {
        "id": 185,
        "value": "compare"
      },
      {
        "id": 69,
        "value": "swapAdjacent"
      },
      {
        "id": 121,
        "value": "compare"
      },
      {
        "id": 201,
        "value": "checkEarlyExit"
      }
    ],
    "i": [
      {
        "id": 266,
        "value": "5"
      },
      {
        "id": 258,
        "value": "5"
      },
      {
        "id": 186,
        "value": "3"
      },
      {
        "id": 362,
        "value": "10"
      },
      {
        "id": 210,
        "value": "4"
      },
      {
        "id": 190,
        "value": "3"
      },
      {
        "id": 326,
        "value": "8"
      },
      {
        "id": 130,
        "value": "2"
      },
      {
        "id": 70,
        "value": "1"
      },
      {
        "id": 282,
        "value": "6"
      },
      {
        "id": 142,
        "value": "2"
      },
      {
        "id": 98,
        "value": "1"
      },
      {
        "id": 322,
        "value": "8"
      },
      {
        "id": 238,
        "value": "5"
      },
      {
        "id": 158,
        "value": "2"
      },
      {
        "id": 330,
        "value": "8"
      },
      {
        "id": 234,
        "value": "4"
      },
      {
        "id": 82,
        "value": "1"
      },
      {
        "id": 74,
        "value": "1"
      },
      {
        "id": 338,
        "value": "9"
      },
      {
        "id": 46,
        "value": "0"
      },
      {
        "id": 106,
        "value": "1"
      },
      {
        "id": 214,
        "value": "4"
      },
      {
        "id": 358,
        "value": "10"
      },
      {
        "id": 166,
        "value": "3"
      },
      {
        "id": 350,
        "value": "9"
      },
      {
        "id": 262,
        "value": "5"
      },
      {
        "id": 246,
        "value": "5"
      },
      {
        "id": 146,
        "value": "2"
      },
      {
        "id": 202,
        "value": "3"
      },
      {
        "id": 298,
        "value": "6"
      },
      {
        "id": 226,
        "value": "4"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 62,
        "value": "0"
      },
      {
        "id": 346,
        "value": "9"
      },
      {
        "id": 126,
        "value": "2"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 294,
        "value": "6"
      },
      {
        "id": 170,
        "value": "3"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 354,
        "value": "9"
      },
      {
        "id": 218,
        "value": "4"
      },
      {
        "id": 86,
        "value": "1"
      },
      {
        "id": 314,
        "value": "7"
      },
      {
        "id": 154,
        "value": "2"
      },
      {
        "id": 138,
        "value": "2"
      },
      {
        "id": 174,
        "value": "3"
      },
      {
        "id": 66,
        "value": "1"
      },
      {
        "id": 290,
        "value": "6"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 54,
        "value": "0"
      },
      {
        "id": 194,
        "value": "3"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 250,
        "value": "5"
      },
      {
        "id": 242,
        "value": "5"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 222,
        "value": "4"
      },
      {
        "id": 342,
        "value": "9"
      },
      {
        "id": 302,
        "value": "7"
      },
      {
        "id": 102,
        "value": "1"
      },
      {
        "id": 286,
        "value": "6"
      },
      {
        "id": 182,
        "value": "3"
      },
      {
        "id": 206,
        "value": "4"
      },
      {
        "id": 134,
        "value": "2"
      },
      {
        "id": 178,
        "value": "3"
      },
      {
        "id": 150,
        "value": "2"
      },
      {
        "id": 306,
        "value": "7"
      },
      {
        "id": 254,
        "value": "5"
      },
      {
        "id": 198,
        "value": "3"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 110,
        "value": "1"
      },
      {
        "id": 118,
        "value": "2"
      },
      {
        "id": 94,
        "value": "1"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 90,
        "value": "1"
      },
      {
        "id": 78,
        "value": "1"
      },
      {
        "id": 274,
        "value": "6"
      },
      {
        "id": 114,
        "value": "1"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 318,
        "value": "8"
      },
      {
        "id": 334,
        "value": "9"
      },
      {
        "id": 278,
        "value": "6"
      },
      {
        "id": 162,
        "value": "3"
      },
      {
        "id": 122,
        "value": "2"
      },
      {
        "id": 270,
        "value": "6"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 310,
        "value": "7"
      },
      {
        "id": 230,
        "value": "4"
      },
      {
        "id": 366,
        "value": "11"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 50,
        "value": "0"
      }
    ],
    "j": [
      {
        "id": 151,
        "value": "6"
      },
      {
        "id": 95,
        "value": "6"
      },
      {
        "id": 195,
        "value": "6"
      },
      {
        "id": 347,
        "value": "2"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "1"
      },
      {
        "id": 315,
        "value": "\u2014"
      },
      {
        "id": 331,
        "value": "4"
      },
      {
        "id": 351,
        "value": "2"
      },
      {
        "id": 39,
        "value": "5"
      },
      {
        "id": 231,
        "value": "8"
      },
      {
        "id": 327,
        "value": "3"
      },
      {
        "id": 123,
        "value": "0"
      },
      {
        "id": 279,
        "value": "1"
      },
      {
        "id": 295,
        "value": "5"
      },
      {
        "id": 59,
        "value": "11"
      },
      {
        "id": 359,
        "value": "\u2014"
      },
      {
        "id": 335,
        "value": "\u2014"
      },
      {
        "id": 303,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "4"
      },
      {
        "id": 91,
        "value": "5"
      },
      {
        "id": 51,
        "value": "9"
      },
      {
        "id": 191,
        "value": "5"
      },
      {
        "id": 83,
        "value": "1"
      },
      {
        "id": 275,
        "value": "1"
      },
      {
        "id": 131,
        "value": "0"
      },
      {
        "id": 255,
        "value": "5"
      },
      {
        "id": 11,
        "value": "\u2014"
      },
      {
        "id": 251,
        "value": "4"
      },
      {
        "id": 259,
        "value": "5"
      },
      {
        "id": 115,
        "value": "\u2014"
      },
      {
        "id": 227,
        "value": "7"
      },
      {
        "id": 267,
        "value": "7"
      },
      {
        "id": 323,
        "value": "2"
      },
      {
        "id": 215,
        "value": "5"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "0"
      },
      {
        "id": 175,
        "value": "0"
      },
      {
        "id": 319,
        "value": "1"
      },
      {
        "id": 107,
        "value": "8"
      },
      {
        "id": 43,
        "value": "8"
      },
      {
        "id": 283,
        "value": "2"
      },
      {
        "id": 139,
        "value": "2"
      },
      {
        "id": 31,
        "value": "3"
      },
      {
        "id": 363,
        "value": "2"
      },
      {
        "id": 343,
        "value": "2"
      },
      {
        "id": 99,
        "value": "7"
      },
      {
        "id": 355,
        "value": "3"
      },
      {
        "id": 219,
        "value": "5"
      },
      {
        "id": 339,
        "value": "1"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "12"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "0"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 287,
        "value": "3"
      },
      {
        "id": 207,
        "value": "4"
      },
      {
        "id": 155,
        "value": "8"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 243,
        "value": "2"
      },
      {
        "id": 71,
        "value": "0"
      },
      {
        "id": 35,
        "value": "5"
      },
      {
        "id": 143,
        "value": "3"
      },
      {
        "id": 163,
        "value": "\u2014"
      },
      {
        "id": 47,
        "value": "8"
      },
      {
        "id": 103,
        "value": "7"
      },
      {
        "id": 187,
        "value": "4"
      },
      {
        "id": 55,
        "value": "9"
      },
      {
        "id": 367,
        "value": "\u2014"
      },
      {
        "id": 183,
        "value": "3"
      },
      {
        "id": 307,
        "value": "1"
      },
      {
        "id": 247,
        "value": "4"
      },
      {
        "id": 111,
        "value": "11"
      },
      {
        "id": 159,
        "value": "8"
      },
      {
        "id": 79,
        "value": "1"
      },
      {
        "id": 211,
        "value": "4"
      },
      {
        "id": 87,
        "value": "4"
      },
      {
        "id": 291,
        "value": "4"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "3"
      },
      {
        "id": 179,
        "value": "2"
      },
      {
        "id": 223,
        "value": "6"
      },
      {
        "id": 299,
        "value": "6"
      },
      {
        "id": 271,
        "value": "0"
      },
      {
        "id": 15,
        "value": "0"
      },
      {
        "id": 199,
        "value": "9"
      },
      {
        "id": 311,
        "value": "1"
      },
      {
        "id": 171,
        "value": "0"
      },
      {
        "id": 67,
        "value": "0"
      },
      {
        "id": 263,
        "value": "6"
      },
      {
        "id": 19,
        "value": "0"
      }
    ],
    "swapped": [
      {
        "id": 356,
        "value": "true"
      },
      {
        "id": 348,
        "value": "true"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 84,
        "value": "true"
      },
      {
        "id": 256,
        "value": "true"
      },
      {
        "id": 280,
        "value": "true"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 260,
        "value": "true"
      },
      {
        "id": 156,
        "value": "true"
      },
      {
        "id": 192,
        "value": "true"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 352,
        "value": "true"
      },
      {
        "id": 268,
        "value": "true"
      },
      {
        "id": 216,
        "value": "true"
      },
      {
        "id": 164,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "true"
      },
      {
        "id": 124,
        "value": "false"
      },
      {
        "id": 332,
        "value": "true"
      },
      {
        "id": 92,
        "value": "true"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 32,
        "value": "true"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 284,
        "value": "true"
      },
      {
        "id": 360,
        "value": "false"
      },
      {
        "id": 224,
        "value": "true"
      },
      {
        "id": 316,
        "value": "true"
      },
      {
        "id": 52,
        "value": "true"
      },
      {
        "id": 248,
        "value": "true"
      },
      {
        "id": 112,
        "value": "true"
      },
      {
        "id": 232,
        "value": "true"
      },
      {
        "id": 252,
        "value": "true"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 368,
        "value": "false"
      },
      {
        "id": 240,
        "value": "false"
      },
      {
        "id": 204,
        "value": "true"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 364,
        "value": "true"
      },
      {
        "id": 172,
        "value": "false"
      },
      {
        "id": 336,
        "value": "\u2014"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 220,
        "value": "true"
      },
      {
        "id": 168,
        "value": "false"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 100,
        "value": "true"
      },
      {
        "id": 308,
        "value": "false"
      },
      {
        "id": 324,
        "value": "true"
      },
      {
        "id": 72,
        "value": "false"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 128,
        "value": "false"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 292,
        "value": "true"
      },
      {
        "id": 320,
        "value": "true"
      },
      {
        "id": 24,
        "value": "true"
      },
      {
        "id": 108,
        "value": "true"
      },
      {
        "id": 188,
        "value": "true"
      },
      {
        "id": 276,
        "value": "false"
      },
      {
        "id": 196,
        "value": "true"
      },
      {
        "id": 20,
        "value": "false"
      },
      {
        "id": 44,
        "value": "true"
      },
      {
        "id": 304,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "true"
      },
      {
        "id": 148,
        "value": "true"
      },
      {
        "id": 312,
        "value": "true"
      },
      {
        "id": 180,
        "value": "true"
      },
      {
        "id": 48,
        "value": "true"
      },
      {
        "id": 120,
        "value": "false"
      },
      {
        "id": 40,
        "value": "true"
      },
      {
        "id": 68,
        "value": "false"
      },
      {
        "id": 12,
        "value": "false"
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
        "id": 76,
        "value": "true"
      },
      {
        "id": 300,
        "value": "true"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 328,
        "value": "true"
      },
      {
        "id": 344,
        "value": "true"
      },
      {
        "id": 288,
        "value": "true"
      },
      {
        "id": 116,
        "value": "true"
      },
      {
        "id": 272,
        "value": "false"
      },
      {
        "id": 60,
        "value": "true"
      },
      {
        "id": 236,
        "value": "true"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 296,
        "value": "true"
      },
      {
        "id": 264,
        "value": "true"
      },
      {
        "id": 244,
        "value": "false"
      },
      {
        "id": 212,
        "value": "true"
      },
      {
        "id": 36,
        "value": "true"
      },
      {
        "id": 132,
        "value": "true"
      },
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 340,
        "value": "false"
      },
      {
        "id": 228,
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
      "stepId": "forI",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": null,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 4,
      "stepId": "markRange",
      "n": 14,
      "i": 0,
      "j": null,
      "swapped": false,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 5,
      "stepId": "forJ",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": false,
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
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": false,
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
        883,
        966,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 8,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 0,
      "swapped": true,
      "array": [
        883,
        966,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 9,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 1,
      "swapped": true,
      "array": [
        883,
        966,
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
      "step": 10,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 1,
      "swapped": true,
      "array": [
        883,
        742,
        966,
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 1,
      "swapped": true,
      "array": [
        883,
        742,
        966,
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
      "n": 14,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        883,
        742,
        966,
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        966,
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        966,
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
      "step": 15,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        966,
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
      "step": 16,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
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
        883,
        742,
        537,
        56,
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
        883,
        742,
        537,
        56,
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
      "step": 19,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        976,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 21,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        976,
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
        883,
        742,
        537,
        56,
        966,
        890,
        976,
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
      "step": 23,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        976,
        517,
        394,
        316,
        310,
        67,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        976,
        517,
        394,
        316,
        310,
        67,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        976,
        517,
        394,
        316,
        310,
        67,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        976,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 27,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        976,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 28,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        976,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 29,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        976,
        316,
        310,
        67,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        976,
        316,
        310,
        67,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 31,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        976,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 32,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        976,
        310,
        67,
        363
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
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        976,
        310,
        67,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 34,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        976,
        310,
        67,
        363
      ]
    },
    {
      "step": 35,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        976,
        67,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        976,
        67,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        976,
        67,
        363
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        976,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        976,
        363
      ]
    },
    {
      "step": 40,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        976,
        363
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 47,
      "stepId": "markRange",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 49,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        883,
        742,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
      "j": 0,
      "swapped": false,
      "array": [
        742,
        883,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
      "j": 0,
      "swapped": true,
      "array": [
        742,
        883,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 52,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 1,
      "swapped": true,
      "array": [
        742,
        883,
        537,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 53,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 1,
      "swapped": true,
      "array": [
        742,
        537,
        883,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 54,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 1,
      "swapped": true,
      "array": [
        742,
        537,
        883,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 55,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        742,
        537,
        883,
        56,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 56,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 57,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 58,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 59,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        966,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 60,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        966,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 61,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        966,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
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
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        966,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 63,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        966,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 64,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        966,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 65,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        966,
        517,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 66,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        966,
        394,
        316,
        310,
        67,
        363,
        976
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
      "j": 6,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        966,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 68,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        966,
        394,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 69,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        966,
        316,
        310,
        67,
        363,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 70,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        966,
        316,
        310,
        67,
        363,
        976
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
      "j": 8,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        966,
        316,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 72,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        966,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 73,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        966,
        310,
        67,
        363,
        976
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
      "j": 9,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        966,
        310,
        67,
        363,
        976
      ]
    },
    {
      "step": 75,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        966,
        67,
        363,
        976
      ]
    },
    {
      "step": 76,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        966,
        67,
        363,
        976
      ]
    },
    {
      "step": 77,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        966,
        67,
        363,
        976
      ]
    },
    {
      "step": 78,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        966,
        363,
        976
      ]
    },
    {
      "step": 79,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        966,
        363,
        976
      ]
    },
    {
      "step": 80,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        966,
        363,
        976
      ]
    },
    {
      "step": 81,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 82,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 83,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 84,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 85,
      "stepId": "forI",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": null,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 86,
      "stepId": "setSwapped",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
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
      "stepId": "markRange",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 88,
      "stepId": "forJ",
      "n": 14,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 89,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        742,
        537,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 90,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        537,
        742,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 91,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 0,
      "swapped": true,
      "array": [
        537,
        742,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
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
      "j": 1,
      "swapped": true,
      "array": [
        537,
        742,
        56,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 93,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 1,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 94,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 1,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 95,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 2,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 96,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 3,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 97,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        890,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 98,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        890,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 99,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        890,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 100,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        890,
        517,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 101,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        890,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 102,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        890,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 103,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 6,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        890,
        394,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 104,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 6,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        890,
        316,
        310,
        67,
        363,
        966,
        976
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
      "j": 6,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        890,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 106,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        890,
        316,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 107,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        890,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 108,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        890,
        310,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 109,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        890,
        310,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 110,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        890,
        67,
        363,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 111,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        890,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 112,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        890,
        67,
        363,
        966,
        976
      ]
    },
    {
      "step": 113,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        890,
        363,
        966,
        976
      ]
    },
    {
      "step": 114,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        890,
        363,
        966,
        976
      ]
    },
    {
      "step": 115,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        890,
        363,
        966,
        976
      ]
    },
    {
      "step": 116,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 117,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 118,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 119,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 120,
      "stepId": "forI",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": null,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
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
      "stepId": "setSwapped",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
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
      "stepId": "markRange",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 123,
      "stepId": "forJ",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 124,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        537,
        56,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 125,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        537,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 126,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 0,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 127,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 1,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 128,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
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
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        883,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        883,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 131,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        883,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 132,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        883,
        517,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 133,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        883,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 134,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        883,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 135,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        883,
        394,
        316,
        310,
        67,
        363,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        883,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 137,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        883,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 138,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        883,
        316,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 139,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        883,
        310,
        67,
        363,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 140,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        883,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 141,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        883,
        310,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 142,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        883,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 143,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        883,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 144,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        883,
        67,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 145,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        883,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 146,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        883,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 147,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        883,
        363,
        890,
        966,
        976
      ]
    },
    {
      "step": 148,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 149,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 150,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 151,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
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
      "stepId": "forI",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": null,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 153,
      "stepId": "setSwapped",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 154,
      "stepId": "markRange",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 155,
      "stepId": "forJ",
      "n": 14,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 156,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 157,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 158,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": false,
      "array": [
        56,
        537,
        742,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 159,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": false,
      "array": [
        56,
        537,
        667,
        742,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 160,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        742,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 161,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        742,
        517,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 162,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        742,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 163,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        742,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 164,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        742,
        394,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        742,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 166,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        742,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 167,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        742,
        316,
        310,
        67,
        363,
        883,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        742,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 169,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        742,
        310,
        67,
        363,
        883,
        890,
        966,
        976
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
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        742,
        310,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 171,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        742,
        67,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 172,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        742,
        67,
        363,
        883,
        890,
        966,
        976
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
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        742,
        67,
        363,
        883,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        742,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 175,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        742,
        363,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 176,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        742,
        363,
        883,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 178,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 179,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 180,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 181,
      "stepId": "forI",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": null,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 182,
      "stepId": "setSwapped",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 183,
      "stepId": "markRange",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 184,
      "stepId": "forJ",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 185,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 186,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 187,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 2,
      "swapped": false,
      "array": [
        56,
        537,
        667,
        517,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 2,
      "swapped": false,
      "array": [
        56,
        537,
        517,
        667,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 189,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        667,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 190,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        667,
        394,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 191,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        667,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 192,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        667,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 193,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        667,
        316,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        667,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 195,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        667,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 196,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        667,
        310,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 197,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        667,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 198,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        667,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 199,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        667,
        67,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 200,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        667,
        363,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 201,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        667,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 202,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        667,
        363,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 203,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 204,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 205,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 206,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 207,
      "stepId": "forI",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": null,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 208,
      "stepId": "setSwapped",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 209,
      "stepId": "markRange",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 210,
      "stepId": "forJ",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 211,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 212,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        537,
        517,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 213,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        517,
        537,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 214,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 1,
      "swapped": true,
      "array": [
        56,
        517,
        537,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
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
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        517,
        537,
        394,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 216,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        537,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 217,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        537,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 218,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        537,
        316,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 219,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        537,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 220,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        537,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 221,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        537,
        310,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 222,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        537,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 223,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        537,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 224,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        537,
        67,
        363,
        667,
        742,
        883,
        890,
        966,
        976
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
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        537,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 226,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        537,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 227,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        537,
        363,
        667,
        742,
        883,
        890,
        966,
        976
      ]
    },
    {
      "step": 228,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 6,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 229,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 6,
      "j": 6,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
      "step": 230,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
      "step": 231,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
      "step": 232,
      "stepId": "forI",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": null,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 233,
      "stepId": "setSwapped",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
      "step": 234,
      "stepId": "markRange",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
      "step": 235,
      "stepId": "forJ",
      "n": 14,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
      "step": 236,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
      "step": 237,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        517,
        394,
        316,
        310,
        67,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 238,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        394,
        517,
        316,
        310,
        67,
        363,
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
      "step": 239,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 1,
      "swapped": true,
      "array": [
        56,
        394,
        517,
        316,
        310,
        67,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 240,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        394,
        517,
        316,
        310,
        67,
        363,
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
      "step": 241,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        517,
        310,
        67,
        363,
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
      "step": 242,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        517,
        310,
        67,
        363,
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
      "step": 243,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        517,
        310,
        67,
        363,
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
      "step": 244,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        517,
        67,
        363,
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
      "step": 245,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        517,
        67,
        363,
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
      "step": 246,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        517,
        67,
        363,
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
      "step": 247,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        67,
        517,
        363,
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
      "step": 248,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        67,
        517,
        363,
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
      "step": 249,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        67,
        517,
        363,
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
      "step": 250,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 7,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 251,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 7,
      "j": 5,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 252,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 253,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 254,
      "stepId": "forI",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": null,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 255,
      "stepId": "setSwapped",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 256,
      "stepId": "markRange",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 257,
      "stepId": "forJ",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 258,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 259,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        394,
        316,
        310,
        67,
        363,
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
      "step": 260,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 8,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        316,
        394,
        310,
        67,
        363,
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
      "step": 261,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 8,
      "j": 1,
      "swapped": true,
      "array": [
        56,
        316,
        394,
        310,
        67,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 262,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        316,
        394,
        310,
        67,
        363,
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
      "step": 263,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 8,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        394,
        67,
        363,
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
      "step": 264,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 8,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        394,
        67,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 265,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        394,
        67,
        363,
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
      "step": 266,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 8,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        67,
        394,
        363,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 267,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 8,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        67,
        394,
        363,
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
      "step": 268,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        67,
        394,
        363,
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
      "step": 269,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 8,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        67,
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
      "step": 270,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 8,
      "j": 4,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 271,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        67,
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
      "step": 272,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 8,
      "j": null,
      "swapped": true,
      "array": [
        56,
        316,
        310,
        67,
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
      "step": 273,
      "stepId": "forI",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": null,
      "array": [
        56,
        316,
        310,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 274,
      "stepId": "setSwapped",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        56,
        316,
        310,
        67,
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
      "step": 275,
      "stepId": "markRange",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        56,
        316,
        310,
        67,
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
      "step": 276,
      "stepId": "forJ",
      "n": 14,
      "i": 9,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        316,
        310,
        67,
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
      "step": 277,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        316,
        310,
        67,
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
      "step": 278,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        316,
        310,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 279,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 9,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        310,
        316,
        67,
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
      "step": 280,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 9,
      "j": 1,
      "swapped": true,
      "array": [
        56,
        310,
        316,
        67,
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
      "step": 281,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        310,
        316,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 282,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 9,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        310,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 283,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 9,
      "j": 2,
      "swapped": true,
      "array": [
        56,
        310,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 284,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 3,
      "swapped": true,
      "array": [
        56,
        310,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 285,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": true,
      "array": [
        56,
        310,
        67,
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
      "step": 286,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 9,
      "j": null,
      "swapped": true,
      "array": [
        56,
        310,
        67,
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
      "step": 287,
      "stepId": "forI",
      "n": 14,
      "i": 10,
      "j": null,
      "swapped": null,
      "array": [
        56,
        310,
        67,
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
      "step": 288,
      "stepId": "setSwapped",
      "n": 14,
      "i": 10,
      "j": null,
      "swapped": false,
      "array": [
        56,
        310,
        67,
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
      "step": 289,
      "stepId": "markRange",
      "n": 14,
      "i": 10,
      "j": null,
      "swapped": false,
      "array": [
        56,
        310,
        67,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 290,
      "stepId": "forJ",
      "n": 14,
      "i": 10,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        310,
        67,
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
      "step": 291,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 0,
      "swapped": false,
      "array": [
        56,
        310,
        67,
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
      "step": 292,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 1,
      "swapped": false,
      "array": [
        56,
        310,
        67,
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
      "step": 293,
      "stepId": "swapAdjacent",
      "n": 14,
      "i": 10,
      "j": 1,
      "swapped": false,
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
      "step": 294,
      "stepId": "setSwappedTrue",
      "n": 14,
      "i": 10,
      "j": 1,
      "swapped": true,
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
      "step": 295,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 2,
      "swapped": true,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 296,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 10,
      "j": null,
      "swapped": true,
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
      "step": 297,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 10,
      "j": null,
      "swapped": true,
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
      "step": 298,
      "stepId": "forI",
      "n": 14,
      "i": 11,
      "j": null,
      "swapped": null,
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
      "step": 299,
      "stepId": "setSwapped",
      "n": 14,
      "i": 11,
      "j": null,
      "swapped": false,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 300,
      "stepId": "markRange",
      "n": 14,
      "i": 11,
      "j": null,
      "swapped": false,
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
      "step": 301,
      "stepId": "forJ",
      "n": 14,
      "i": 11,
      "j": 0,
      "swapped": false,
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
      "step": 302,
      "stepId": "compare",
      "n": 14,
      "i": 11,
      "j": 0,
      "swapped": false,
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
      "step": 303,
      "stepId": "compare",
      "n": 14,
      "i": 11,
      "j": 1,
      "swapped": false,
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
      "step": 304,
      "stepId": "markSortedEnd",
      "n": 14,
      "i": 11,
      "j": null,
      "swapped": false,
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
      "step": 305,
      "stepId": "checkEarlyExit",
      "n": 14,
      "i": 11,
      "j": null,
      "swapped": false,
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
      "step": 306,
      "stepId": "breakEarly",
      "n": 14,
      "i": 11,
      "j": null,
      "swapped": false,
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
