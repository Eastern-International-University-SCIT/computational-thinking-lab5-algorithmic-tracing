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
    2,
    4,
    5,
    10,
    13,
    20,
    25,
    35,
    38,
    39,
    42,
    44,
    45,
    50,
    51,
    54,
    58,
    59,
    66,
    72,
    73,
    77,
    78,
    84,
    87,
    88,
    93,
    97,
    103,
    104,
    108,
    111,
    116,
    130,
    133,
    138,
    141,
    143,
    144,
    145,
    147,
    150,
    153,
    159,
    161,
    167,
    169,
    172,
    175,
    179,
    180,
    183,
    191,
    193,
    195,
    197,
    198,
    199,
    201,
    202,
    204,
    205,
    212,
    213,
    214,
    220
  ],
  "answers": {
    "2": {
      "stepId": "forI",
      "i": "0",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "4": {
      "stepId": "markRange",
      "i": "0",
      "j": "\u2014",
      "minIndex": "0"
    },
    "5": {
      "stepId": "forJ",
      "i": "0",
      "j": "1",
      "minIndex": "0"
    },
    "10": {
      "stepId": "compare",
      "i": "0",
      "j": "3",
      "minIndex": "2"
    },
    "13": {
      "stepId": "updateMin",
      "i": "0",
      "j": "4",
      "minIndex": "4"
    },
    "20": {
      "stepId": "compare",
      "i": "0",
      "j": "11",
      "minIndex": "4"
    },
    "25": {
      "stepId": "markSortedI",
      "i": "0",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "35": {
      "stepId": "compare",
      "i": "1",
      "j": "5",
      "minIndex": "3"
    },
    "38": {
      "stepId": "compare",
      "i": "1",
      "j": "8",
      "minIndex": "3"
    },
    "39": {
      "stepId": "updateMin",
      "i": "1",
      "j": "8",
      "minIndex": "8"
    },
    "42": {
      "stepId": "compare",
      "i": "1",
      "j": "10",
      "minIndex": "9"
    },
    "44": {
      "stepId": "compare",
      "i": "1",
      "j": "11",
      "minIndex": "10"
    },
    "45": {
      "stepId": "updateMin",
      "i": "1",
      "j": "11",
      "minIndex": "11"
    },
    "50": {
      "stepId": "swapMin",
      "i": "1",
      "j": "\u2014",
      "minIndex": "1"
    },
    "51": {
      "stepId": "markSortedI",
      "i": "1",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "54": {
      "stepId": "markRange",
      "i": "2",
      "j": "\u2014",
      "minIndex": "2"
    },
    "58": {
      "stepId": "compare",
      "i": "2",
      "j": "4",
      "minIndex": "3"
    },
    "59": {
      "stepId": "compare",
      "i": "2",
      "j": "5",
      "minIndex": "3"
    },
    "66": {
      "stepId": "compare",
      "i": "2",
      "j": "10",
      "minIndex": "9"
    },
    "72": {
      "stepId": "checkSwap",
      "i": "2",
      "j": "\u2014",
      "minIndex": "11"
    },
    "73": {
      "stepId": "swapMin",
      "i": "2",
      "j": "\u2014",
      "minIndex": "2"
    },
    "77": {
      "stepId": "markRange",
      "i": "3",
      "j": "\u2014",
      "minIndex": "3"
    },
    "78": {
      "stepId": "forJ",
      "i": "3",
      "j": "4",
      "minIndex": "3"
    },
    "84": {
      "stepId": "updateMin",
      "i": "3",
      "j": "8",
      "minIndex": "8"
    },
    "87": {
      "stepId": "compare",
      "i": "3",
      "j": "10",
      "minIndex": "9"
    },
    "88": {
      "stepId": "updateMin",
      "i": "3",
      "j": "10",
      "minIndex": "10"
    },
    "93": {
      "stepId": "swapMin",
      "i": "3",
      "j": "\u2014",
      "minIndex": "3"
    },
    "97": {
      "stepId": "markRange",
      "i": "4",
      "j": "\u2014",
      "minIndex": "4"
    },
    "103": {
      "stepId": "updateMin",
      "i": "4",
      "j": "7",
      "minIndex": "7"
    },
    "104": {
      "stepId": "compare",
      "i": "4",
      "j": "8",
      "minIndex": "7"
    },
    "108": {
      "stepId": "compare",
      "i": "4",
      "j": "10",
      "minIndex": "9"
    },
    "111": {
      "stepId": "compare",
      "i": "4",
      "j": "13",
      "minIndex": "9"
    },
    "116": {
      "stepId": "forI",
      "i": "5",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "130": {
      "stepId": "compare",
      "i": "5",
      "j": "12",
      "minIndex": "9"
    },
    "133": {
      "stepId": "swapMin",
      "i": "5",
      "j": "\u2014",
      "minIndex": "5"
    },
    "138": {
      "stepId": "forJ",
      "i": "6",
      "j": "7",
      "minIndex": "6"
    },
    "141": {
      "stepId": "compare",
      "i": "6",
      "j": "8",
      "minIndex": "7"
    },
    "143": {
      "stepId": "compare",
      "i": "6",
      "j": "9",
      "minIndex": "8"
    },
    "144": {
      "stepId": "compare",
      "i": "6",
      "j": "10",
      "minIndex": "8"
    },
    "145": {
      "stepId": "compare",
      "i": "6",
      "j": "11",
      "minIndex": "8"
    },
    "147": {
      "stepId": "compare",
      "i": "6",
      "j": "13",
      "minIndex": "8"
    },
    "150": {
      "stepId": "markSortedI",
      "i": "6",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "153": {
      "stepId": "markRange",
      "i": "7",
      "j": "\u2014",
      "minIndex": "7"
    },
    "159": {
      "stepId": "compare",
      "i": "7",
      "j": "11",
      "minIndex": "10"
    },
    "161": {
      "stepId": "compare",
      "i": "7",
      "j": "13",
      "minIndex": "10"
    },
    "167": {
      "stepId": "markRange",
      "i": "8",
      "j": "\u2014",
      "minIndex": "8"
    },
    "169": {
      "stepId": "compare",
      "i": "8",
      "j": "9",
      "minIndex": "8"
    },
    "172": {
      "stepId": "compare",
      "i": "8",
      "j": "11",
      "minIndex": "10"
    },
    "175": {
      "stepId": "checkSwap",
      "i": "8",
      "j": "\u2014",
      "minIndex": "10"
    },
    "179": {
      "stepId": "setMin",
      "i": "9",
      "j": "\u2014",
      "minIndex": "9"
    },
    "180": {
      "stepId": "markRange",
      "i": "9",
      "j": "\u2014",
      "minIndex": "9"
    },
    "183": {
      "stepId": "updateMin",
      "i": "9",
      "j": "10",
      "minIndex": "10"
    },
    "191": {
      "stepId": "forI",
      "i": "10",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "193": {
      "stepId": "markRange",
      "i": "10",
      "j": "\u2014",
      "minIndex": "10"
    },
    "195": {
      "stepId": "compare",
      "i": "10",
      "j": "11",
      "minIndex": "10"
    },
    "197": {
      "stepId": "updateMin",
      "i": "10",
      "j": "12",
      "minIndex": "12"
    },
    "198": {
      "stepId": "compare",
      "i": "10",
      "j": "13",
      "minIndex": "12"
    },
    "199": {
      "stepId": "checkSwap",
      "i": "10",
      "j": "\u2014",
      "minIndex": "12"
    },
    "201": {
      "stepId": "markSortedI",
      "i": "10",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "202": {
      "stepId": "forI",
      "i": "11",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "204": {
      "stepId": "markRange",
      "i": "11",
      "j": "\u2014",
      "minIndex": "11"
    },
    "205": {
      "stepId": "forJ",
      "i": "11",
      "j": "12",
      "minIndex": "11"
    },
    "212": {
      "stepId": "forI",
      "i": "12",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "213": {
      "stepId": "setMin",
      "i": "12",
      "j": "\u2014",
      "minIndex": "12"
    },
    "214": {
      "stepId": "markRange",
      "i": "12",
      "j": "\u2014",
      "minIndex": "12"
    },
    "220": {
      "stepId": "markSortedI",
      "i": "12",
      "j": "\u2014",
      "minIndex": "\u2014"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 129,
        "value": "forI"
      },
      {
        "id": 189,
        "value": "compare"
      },
      {
        "id": 173,
        "value": "compare"
      },
      {
        "id": 41,
        "value": "compare"
      },
      {
        "id": 233,
        "value": "markSortedI"
      },
      {
        "id": 169,
        "value": "markRange"
      },
      {
        "id": 193,
        "value": "checkSwap"
      },
      {
        "id": 101,
        "value": "updateMin"
      },
      {
        "id": 185,
        "value": "compare"
      },
      {
        "id": 221,
        "value": "updateMin"
      },
      {
        "id": 209,
        "value": "forI"
      },
      {
        "id": 213,
        "value": "markRange"
      },
      {
        "id": 261,
        "value": "markSortedI"
      },
      {
        "id": 149,
        "value": "compare"
      },
      {
        "id": 5,
        "value": "markRange"
      },
      {
        "id": 77,
        "value": "checkSwap"
      },
      {
        "id": 65,
        "value": "compare"
      },
      {
        "id": 29,
        "value": "compare"
      },
      {
        "id": 137,
        "value": "swapMin"
      },
      {
        "id": 33,
        "value": "compare"
      },
      {
        "id": 217,
        "value": "compare"
      },
      {
        "id": 89,
        "value": "forJ"
      },
      {
        "id": 17,
        "value": "updateMin"
      },
      {
        "id": 57,
        "value": "markSortedI"
      },
      {
        "id": 145,
        "value": "compare"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 9,
        "value": "forJ"
      },
      {
        "id": 69,
        "value": "compare"
      },
      {
        "id": 177,
        "value": "compare"
      },
      {
        "id": 157,
        "value": "compare"
      },
      {
        "id": 21,
        "value": "compare"
      },
      {
        "id": 201,
        "value": "markRange"
      },
      {
        "id": 253,
        "value": "setMin"
      },
      {
        "id": 125,
        "value": "compare"
      },
      {
        "id": 121,
        "value": "compare"
      },
      {
        "id": 1,
        "value": "forI"
      },
      {
        "id": 249,
        "value": "forI"
      },
      {
        "id": 241,
        "value": "markRange"
      },
      {
        "id": 153,
        "value": "compare"
      },
      {
        "id": 49,
        "value": "updateMin"
      },
      {
        "id": 237,
        "value": "forI"
      },
      {
        "id": 109,
        "value": "markRange"
      },
      {
        "id": 25,
        "value": "markSortedI"
      },
      {
        "id": 165,
        "value": "markSortedI"
      },
      {
        "id": 257,
        "value": "markRange"
      },
      {
        "id": 85,
        "value": "markRange"
      },
      {
        "id": 245,
        "value": "forJ"
      },
      {
        "id": 93,
        "value": "updateMin"
      },
      {
        "id": 73,
        "value": "compare"
      },
      {
        "id": 53,
        "value": "swapMin"
      },
      {
        "id": 141,
        "value": "forJ"
      },
      {
        "id": 105,
        "value": "swapMin"
      },
      {
        "id": 161,
        "value": "compare"
      },
      {
        "id": 81,
        "value": "swapMin"
      },
      {
        "id": 229,
        "value": "checkSwap"
      },
      {
        "id": 197,
        "value": "setMin"
      },
      {
        "id": 97,
        "value": "compare"
      },
      {
        "id": 37,
        "value": "updateMin"
      },
      {
        "id": 225,
        "value": "compare"
      },
      {
        "id": 181,
        "value": "markRange"
      },
      {
        "id": 45,
        "value": "compare"
      },
      {
        "id": 61,
        "value": "markRange"
      },
      {
        "id": 113,
        "value": "updateMin"
      },
      {
        "id": 133,
        "value": "compare"
      },
      {
        "id": 205,
        "value": "updateMin"
      },
      {
        "id": 117,
        "value": "compare"
      }
    ],
    "i": [
      {
        "id": 138,
        "value": "5"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 234,
        "value": "10"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 194,
        "value": "8"
      },
      {
        "id": 154,
        "value": "6"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 262,
        "value": "12"
      },
      {
        "id": 146,
        "value": "6"
      },
      {
        "id": 190,
        "value": "8"
      },
      {
        "id": 142,
        "value": "6"
      },
      {
        "id": 206,
        "value": "9"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 198,
        "value": "9"
      },
      {
        "id": 130,
        "value": "5"
      },
      {
        "id": 202,
        "value": "9"
      },
      {
        "id": 54,
        "value": "1"
      },
      {
        "id": 222,
        "value": "10"
      },
      {
        "id": 158,
        "value": "6"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 254,
        "value": "12"
      },
      {
        "id": 98,
        "value": "3"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 162,
        "value": "6"
      },
      {
        "id": 126,
        "value": "4"
      },
      {
        "id": 34,
        "value": "1"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 122,
        "value": "4"
      },
      {
        "id": 90,
        "value": "3"
      },
      {
        "id": 118,
        "value": "4"
      },
      {
        "id": 150,
        "value": "6"
      },
      {
        "id": 242,
        "value": "11"
      },
      {
        "id": 70,
        "value": "2"
      },
      {
        "id": 210,
        "value": "10"
      },
      {
        "id": 166,
        "value": "6"
      },
      {
        "id": 78,
        "value": "2"
      },
      {
        "id": 182,
        "value": "8"
      },
      {
        "id": 102,
        "value": "3"
      },
      {
        "id": 134,
        "value": "5"
      },
      {
        "id": 230,
        "value": "10"
      },
      {
        "id": 42,
        "value": "1"
      },
      {
        "id": 74,
        "value": "2"
      },
      {
        "id": 58,
        "value": "1"
      },
      {
        "id": 50,
        "value": "1"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 238,
        "value": "11"
      },
      {
        "id": 178,
        "value": "7"
      },
      {
        "id": 86,
        "value": "3"
      },
      {
        "id": 214,
        "value": "10"
      },
      {
        "id": 30,
        "value": "1"
      },
      {
        "id": 226,
        "value": "10"
      },
      {
        "id": 218,
        "value": "10"
      },
      {
        "id": 110,
        "value": "4"
      },
      {
        "id": 170,
        "value": "7"
      },
      {
        "id": 94,
        "value": "3"
      },
      {
        "id": 82,
        "value": "2"
      },
      {
        "id": 250,
        "value": "12"
      },
      {
        "id": 62,
        "value": "2"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 186,
        "value": "8"
      },
      {
        "id": 106,
        "value": "3"
      },
      {
        "id": 258,
        "value": "12"
      },
      {
        "id": 174,
        "value": "7"
      },
      {
        "id": 114,
        "value": "4"
      },
      {
        "id": 246,
        "value": "11"
      }
    ],
    "j": [
      {
        "id": 183,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "11"
      },
      {
        "id": 31,
        "value": "5"
      },
      {
        "id": 71,
        "value": "5"
      },
      {
        "id": 103,
        "value": "10"
      },
      {
        "id": 127,
        "value": "13"
      },
      {
        "id": 211,
        "value": "\u2014"
      },
      {
        "id": 43,
        "value": "10"
      },
      {
        "id": 159,
        "value": "11"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "10"
      },
      {
        "id": 91,
        "value": "4"
      },
      {
        "id": 171,
        "value": "\u2014"
      },
      {
        "id": 15,
        "value": "3"
      },
      {
        "id": 35,
        "value": "8"
      },
      {
        "id": 219,
        "value": "11"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 19,
        "value": "4"
      },
      {
        "id": 83,
        "value": "\u2014"
      },
      {
        "id": 259,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "8"
      },
      {
        "id": 247,
        "value": "12"
      },
      {
        "id": 55,
        "value": "\u2014"
      },
      {
        "id": 251,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "8"
      },
      {
        "id": 67,
        "value": "4"
      },
      {
        "id": 87,
        "value": "\u2014"
      },
      {
        "id": 139,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "11"
      },
      {
        "id": 151,
        "value": "9"
      },
      {
        "id": 199,
        "value": "\u2014"
      },
      {
        "id": 203,
        "value": "\u2014"
      },
      {
        "id": 123,
        "value": "10"
      },
      {
        "id": 99,
        "value": "10"
      },
      {
        "id": 155,
        "value": "10"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 95,
        "value": "8"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 143,
        "value": "7"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "11"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 131,
        "value": "\u2014"
      },
      {
        "id": 227,
        "value": "13"
      },
      {
        "id": 135,
        "value": "12"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 51,
        "value": "11"
      },
      {
        "id": 115,
        "value": "7"
      },
      {
        "id": 11,
        "value": "1"
      },
      {
        "id": 223,
        "value": "12"
      },
      {
        "id": 107,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "10"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 179,
        "value": "13"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "\u2014"
      },
      {
        "id": 59,
        "value": "\u2014"
      },
      {
        "id": 47,
        "value": "11"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 255,
        "value": "\u2014"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 187,
        "value": "9"
      },
      {
        "id": 163,
        "value": "13"
      },
      {
        "id": 147,
        "value": "8"
      }
    ],
    "minIndex": [
      {
        "id": 196,
        "value": "10"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "5"
      },
      {
        "id": 188,
        "value": "8"
      },
      {
        "id": 164,
        "value": "8"
      },
      {
        "id": 224,
        "value": "12"
      },
      {
        "id": 228,
        "value": "12"
      },
      {
        "id": 44,
        "value": "9"
      },
      {
        "id": 216,
        "value": "10"
      },
      {
        "id": 156,
        "value": "8"
      },
      {
        "id": 48,
        "value": "10"
      },
      {
        "id": 128,
        "value": "9"
      },
      {
        "id": 244,
        "value": "11"
      },
      {
        "id": 256,
        "value": "12"
      },
      {
        "id": 176,
        "value": "10"
      },
      {
        "id": 260,
        "value": "12"
      },
      {
        "id": 76,
        "value": "9"
      },
      {
        "id": 96,
        "value": "8"
      },
      {
        "id": 64,
        "value": "2"
      },
      {
        "id": 92,
        "value": "3"
      },
      {
        "id": 132,
        "value": "\u2014"
      },
      {
        "id": 32,
        "value": "3"
      },
      {
        "id": 12,
        "value": "0"
      },
      {
        "id": 68,
        "value": "3"
      },
      {
        "id": 124,
        "value": "9"
      },
      {
        "id": 28,
        "value": "\u2014"
      },
      {
        "id": 104,
        "value": "10"
      },
      {
        "id": 184,
        "value": "8"
      },
      {
        "id": 136,
        "value": "9"
      },
      {
        "id": 72,
        "value": "3"
      },
      {
        "id": 112,
        "value": "4"
      },
      {
        "id": 212,
        "value": "\u2014"
      },
      {
        "id": 192,
        "value": "10"
      },
      {
        "id": 16,
        "value": "2"
      },
      {
        "id": 52,
        "value": "11"
      },
      {
        "id": 204,
        "value": "9"
      },
      {
        "id": 108,
        "value": "3"
      },
      {
        "id": 220,
        "value": "10"
      },
      {
        "id": 144,
        "value": "6"
      },
      {
        "id": 88,
        "value": "3"
      },
      {
        "id": 232,
        "value": "12"
      },
      {
        "id": 172,
        "value": "7"
      },
      {
        "id": 208,
        "value": "10"
      },
      {
        "id": 264,
        "value": "\u2014"
      },
      {
        "id": 20,
        "value": "4"
      },
      {
        "id": 180,
        "value": "10"
      },
      {
        "id": 8,
        "value": "0"
      },
      {
        "id": 160,
        "value": "8"
      },
      {
        "id": 84,
        "value": "2"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 248,
        "value": "11"
      },
      {
        "id": 148,
        "value": "7"
      },
      {
        "id": 240,
        "value": "\u2014"
      },
      {
        "id": 168,
        "value": "\u2014"
      },
      {
        "id": 120,
        "value": "7"
      },
      {
        "id": 40,
        "value": "8"
      },
      {
        "id": 56,
        "value": "1"
      },
      {
        "id": 116,
        "value": "7"
      },
      {
        "id": 60,
        "value": "\u2014"
      },
      {
        "id": 152,
        "value": "8"
      },
      {
        "id": 80,
        "value": "11"
      },
      {
        "id": 252,
        "value": "\u2014"
      },
      {
        "id": 36,
        "value": "3"
      },
      {
        "id": 24,
        "value": "4"
      },
      {
        "id": 100,
        "value": "9"
      },
      {
        "id": 200,
        "value": "9"
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
      "minIndex": null,
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
        "minIndex": true
      }
    },
    {
      "step": 3,
      "stepId": "setMin",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "stepId": "markRange",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
        "minIndex": true
      }
    },
    {
      "step": 5,
      "stepId": "forJ",
      "n": 14,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
        "minIndex": true
      }
    },
    {
      "step": 6,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
      "step": 7,
      "stepId": "updateMin",
      "n": 14,
      "i": 0,
      "j": 1,
      "minIndex": 1,
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
      "n": 14,
      "i": 0,
      "j": 2,
      "minIndex": 1,
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
      "step": 9,
      "stepId": "updateMin",
      "n": 14,
      "i": 0,
      "j": 2,
      "minIndex": 2,
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
      "step": 10,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 3,
      "minIndex": 2,
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
        "minIndex": true
      }
    },
    {
      "step": 11,
      "stepId": "updateMin",
      "n": 14,
      "i": 0,
      "j": 3,
      "minIndex": 3,
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
      "n": 14,
      "i": 0,
      "j": 4,
      "minIndex": 3,
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
      "stepId": "updateMin",
      "n": 14,
      "i": 0,
      "j": 4,
      "minIndex": 4,
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
        "minIndex": true
      }
    },
    {
      "step": 14,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 5,
      "minIndex": 4,
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
      "step": 15,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 6,
      "minIndex": 4,
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
      "step": 16,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 7,
      "minIndex": 4,
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
      "step": 17,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 8,
      "minIndex": 4,
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
      "step": 18,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 9,
      "minIndex": 4,
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
      "step": 19,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 10,
      "minIndex": 4,
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
      "step": 20,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 11,
      "minIndex": 4,
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
        "minIndex": true
      }
    },
    {
      "step": 21,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 12,
      "minIndex": 4,
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
      "step": 22,
      "stepId": "compare",
      "n": 14,
      "i": 0,
      "j": 13,
      "minIndex": 4,
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
      "step": 23,
      "stepId": "checkSwap",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 4,
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
      "step": 24,
      "stepId": "swapMin",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "step": 25,
      "stepId": "markSortedI",
      "n": 14,
      "i": 0,
      "j": null,
      "minIndex": null,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 26,
      "stepId": "forI",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": null,
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
      "step": 27,
      "stepId": "setMin",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 1,
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
      "step": 28,
      "stepId": "markRange",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 1,
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
      "step": 29,
      "stepId": "forJ",
      "n": 14,
      "i": 1,
      "j": 2,
      "minIndex": 1,
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
      "step": 30,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 2,
      "minIndex": 1,
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
      "step": 31,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 2,
      "minIndex": 2,
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
      "step": 32,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 3,
      "minIndex": 2,
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
      "step": 33,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 3,
      "minIndex": 3,
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
      "step": 34,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 4,
      "minIndex": 3,
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
      "step": 35,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 5,
      "minIndex": 3,
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
      "j": 6,
      "minIndex": 3,
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
      "step": 37,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 7,
      "minIndex": 3,
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
      "step": 38,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 8,
      "minIndex": 3,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 39,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 8,
      "minIndex": 8,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 40,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 9,
      "minIndex": 8,
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
      "step": 41,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 9,
      "minIndex": 9,
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
      "step": 42,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 10,
      "minIndex": 9,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 43,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 10,
      "minIndex": 10,
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
      "step": 44,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 11,
      "minIndex": 10,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 45,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 11,
      "minIndex": 11,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 46,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 12,
      "minIndex": 11,
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
      "step": 47,
      "stepId": "updateMin",
      "n": 14,
      "i": 1,
      "j": 12,
      "minIndex": 12,
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
      "step": 48,
      "stepId": "compare",
      "n": 14,
      "i": 1,
      "j": 13,
      "minIndex": 12,
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
      "step": 49,
      "stepId": "checkSwap",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 12,
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
      "step": 50,
      "stepId": "swapMin",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        56,
        67,
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
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 51,
      "stepId": "markSortedI",
      "n": 14,
      "i": 1,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
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
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 52,
      "stepId": "forI",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 53,
      "stepId": "setMin",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 54,
      "stepId": "markRange",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        56,
        67,
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
        883,
        363
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
      "stepId": "forJ",
      "n": 14,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 56,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 57,
      "stepId": "updateMin",
      "n": 14,
      "i": 2,
      "j": 3,
      "minIndex": 3,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 58,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 4,
      "minIndex": 3,
      "array": [
        56,
        67,
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
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 59,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 5,
      "minIndex": 3,
      "array": [
        56,
        67,
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
        883,
        363
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
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 6,
      "minIndex": 3,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 61,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 7,
      "minIndex": 3,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 62,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 8,
      "minIndex": 3,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 63,
      "stepId": "updateMin",
      "n": 14,
      "i": 2,
      "j": 8,
      "minIndex": 8,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 64,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 9,
      "minIndex": 8,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 65,
      "stepId": "updateMin",
      "n": 14,
      "i": 2,
      "j": 9,
      "minIndex": 9,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 66,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 10,
      "minIndex": 9,
      "array": [
        56,
        67,
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
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 67,
      "stepId": "updateMin",
      "n": 14,
      "i": 2,
      "j": 10,
      "minIndex": 10,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 68,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 11,
      "minIndex": 10,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 69,
      "stepId": "updateMin",
      "n": 14,
      "i": 2,
      "j": 11,
      "minIndex": 11,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 70,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 12,
      "minIndex": 11,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 71,
      "stepId": "compare",
      "n": 14,
      "i": 2,
      "j": 13,
      "minIndex": 11,
      "array": [
        56,
        67,
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
        883,
        363
      ]
    },
    {
      "step": 72,
      "stepId": "checkSwap",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 11,
      "array": [
        56,
        67,
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
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 73,
      "stepId": "swapMin",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
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
      "stepId": "markSortedI",
      "n": 14,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 75,
      "stepId": "forI",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 76,
      "stepId": "setMin",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 77,
      "stepId": "markRange",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
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
      "stepId": "forJ",
      "n": 14,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
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
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 80,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 5,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 81,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 6,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 82,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 7,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 83,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 8,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 84,
      "stepId": "updateMin",
      "n": 14,
      "i": 3,
      "j": 8,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
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
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 9,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 86,
      "stepId": "updateMin",
      "n": 14,
      "i": 3,
      "j": 9,
      "minIndex": 9,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 87,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 10,
      "minIndex": 9,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
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
      "stepId": "updateMin",
      "n": 14,
      "i": 3,
      "j": 10,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 89,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 11,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 90,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 12,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 91,
      "stepId": "compare",
      "n": 14,
      "i": 3,
      "j": 13,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 92,
      "stepId": "checkSwap",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        537,
        966,
        976,
        890,
        667,
        517,
        394,
        316,
        742,
        883,
        363
      ]
    },
    {
      "step": 93,
      "stepId": "swapMin",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
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
      "stepId": "markSortedI",
      "n": 14,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 95,
      "stepId": "forI",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 96,
      "stepId": "setMin",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 97,
      "stepId": "markRange",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 98,
      "stepId": "forJ",
      "n": 14,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 99,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 100,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 6,
      "minIndex": 4,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 101,
      "stepId": "updateMin",
      "n": 14,
      "i": 4,
      "j": 6,
      "minIndex": 6,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 102,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 7,
      "minIndex": 6,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 103,
      "stepId": "updateMin",
      "n": 14,
      "i": 4,
      "j": 7,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 104,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 8,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 105,
      "stepId": "updateMin",
      "n": 14,
      "i": 4,
      "j": 8,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 106,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 9,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 107,
      "stepId": "updateMin",
      "n": 14,
      "i": 4,
      "j": 9,
      "minIndex": 9,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 108,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 10,
      "minIndex": 9,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 109,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 11,
      "minIndex": 9,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 110,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 12,
      "minIndex": 9,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 111,
      "stepId": "compare",
      "n": 14,
      "i": 4,
      "j": 13,
      "minIndex": 9,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 112,
      "stepId": "updateMin",
      "n": 14,
      "i": 4,
      "j": 13,
      "minIndex": 13,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 113,
      "stepId": "checkSwap",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 13,
      "array": [
        56,
        67,
        310,
        316,
        966,
        976,
        890,
        667,
        517,
        394,
        537,
        742,
        883,
        363
      ]
    },
    {
      "step": 114,
      "stepId": "swapMin",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": 4,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 115,
      "stepId": "markSortedI",
      "n": 14,
      "i": 4,
      "j": null,
      "minIndex": null,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 116,
      "stepId": "forI",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": null,
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
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 117,
      "stepId": "setMin",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 5,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 118,
      "stepId": "markRange",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 5,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 119,
      "stepId": "forJ",
      "n": 14,
      "i": 5,
      "j": 6,
      "minIndex": 5,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 120,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 6,
      "minIndex": 5,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 121,
      "stepId": "updateMin",
      "n": 14,
      "i": 5,
      "j": 6,
      "minIndex": 6,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 122,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 7,
      "minIndex": 6,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 123,
      "stepId": "updateMin",
      "n": 14,
      "i": 5,
      "j": 7,
      "minIndex": 7,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 124,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 8,
      "minIndex": 7,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 125,
      "stepId": "updateMin",
      "n": 14,
      "i": 5,
      "j": 8,
      "minIndex": 8,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 126,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 9,
      "minIndex": 8,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 127,
      "stepId": "updateMin",
      "n": 14,
      "i": 5,
      "j": 9,
      "minIndex": 9,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 128,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 10,
      "minIndex": 9,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 129,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 11,
      "minIndex": 9,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 130,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 12,
      "minIndex": 9,
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
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 131,
      "stepId": "compare",
      "n": 14,
      "i": 5,
      "j": 13,
      "minIndex": 9,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 132,
      "stepId": "checkSwap",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 9,
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
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 133,
      "stepId": "swapMin",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
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
      "stepId": "markSortedI",
      "n": 14,
      "i": 5,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 135,
      "stepId": "forI",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 136,
      "stepId": "setMin",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 137,
      "stepId": "markRange",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 138,
      "stepId": "forJ",
      "n": 14,
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
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
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 140,
      "stepId": "updateMin",
      "n": 14,
      "i": 6,
      "j": 7,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 141,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 8,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
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
      "stepId": "updateMin",
      "n": 14,
      "i": 6,
      "j": 8,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 143,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 9,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 144,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 10,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 145,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 11,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 146,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 12,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 147,
      "stepId": "compare",
      "n": 14,
      "i": 6,
      "j": 13,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 148,
      "stepId": "checkSwap",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        667,
        517,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 149,
      "stepId": "swapMin",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 150,
      "stepId": "markSortedI",
      "n": 14,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
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
      "stepId": "forI",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 152,
      "stepId": "setMin",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 153,
      "stepId": "markRange",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
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
      "stepId": "forJ",
      "n": 14,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 155,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 156,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 9,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 157,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 10,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 158,
      "stepId": "updateMin",
      "n": 14,
      "i": 7,
      "j": 10,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 159,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 11,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 160,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 12,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 161,
      "stepId": "compare",
      "n": 14,
      "i": 7,
      "j": 13,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 162,
      "stepId": "checkSwap",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        667,
        890,
        976,
        537,
        742,
        883,
        966
      ]
    },
    {
      "step": 163,
      "stepId": "swapMin",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 164,
      "stepId": "markSortedI",
      "n": 14,
      "i": 7,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 165,
      "stepId": "forI",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": null,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 166,
      "stepId": "setMin",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 167,
      "stepId": "markRange",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 168,
      "stepId": "forJ",
      "n": 14,
      "i": 8,
      "j": 9,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 169,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 9,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 170,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 10,
      "minIndex": 8,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 171,
      "stepId": "updateMin",
      "n": 14,
      "i": 8,
      "j": 10,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 172,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 11,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 173,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 12,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 174,
      "stepId": "compare",
      "n": 14,
      "i": 8,
      "j": 13,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ]
    },
    {
      "step": 175,
      "stepId": "checkSwap",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 10,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        517,
        537,
        890,
        976,
        667,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 176,
      "stepId": "swapMin",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": 8,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 177,
      "stepId": "markSortedI",
      "n": 14,
      "i": 8,
      "j": null,
      "minIndex": null,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 178,
      "stepId": "forI",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": null,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 179,
      "stepId": "setMin",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        976,
        890,
        742,
        883,
        966
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
      "stepId": "markRange",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        976,
        890,
        742,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 181,
      "stepId": "forJ",
      "n": 14,
      "i": 9,
      "j": 10,
      "minIndex": 9,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 182,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 10,
      "minIndex": 9,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 183,
      "stepId": "updateMin",
      "n": 14,
      "i": 9,
      "j": 10,
      "minIndex": 10,
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
        976,
        890,
        742,
        883,
        966
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
      "n": 14,
      "i": 9,
      "j": 11,
      "minIndex": 10,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 185,
      "stepId": "updateMin",
      "n": 14,
      "i": 9,
      "j": 11,
      "minIndex": 11,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 186,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 12,
      "minIndex": 11,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 187,
      "stepId": "compare",
      "n": 14,
      "i": 9,
      "j": 13,
      "minIndex": 11,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 188,
      "stepId": "checkSwap",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 11,
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
        976,
        890,
        742,
        883,
        966
      ]
    },
    {
      "step": 189,
      "stepId": "swapMin",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": 9,
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
        890,
        976,
        883,
        966
      ]
    },
    {
      "step": 190,
      "stepId": "markSortedI",
      "n": 14,
      "i": 9,
      "j": null,
      "minIndex": null,
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
        890,
        976,
        883,
        966
      ]
    },
    {
      "step": 191,
      "stepId": "forI",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": null,
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
        890,
        976,
        883,
        966
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
      "stepId": "setMin",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
        890,
        976,
        883,
        966
      ]
    },
    {
      "step": 193,
      "stepId": "markRange",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
        890,
        976,
        883,
        966
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
      "stepId": "forJ",
      "n": 14,
      "i": 10,
      "j": 11,
      "minIndex": 10,
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
        890,
        976,
        883,
        966
      ]
    },
    {
      "step": 195,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 11,
      "minIndex": 10,
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
        890,
        976,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 196,
      "stepId": "compare",
      "n": 14,
      "i": 10,
      "j": 12,
      "minIndex": 10,
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
        890,
        976,
        883,
        966
      ]
    },
    {
      "step": 197,
      "stepId": "updateMin",
      "n": 14,
      "i": 10,
      "j": 12,
      "minIndex": 12,
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
        890,
        976,
        883,
        966
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
      "i": 10,
      "j": 13,
      "minIndex": 12,
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
        890,
        976,
        883,
        966
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
      "stepId": "checkSwap",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 12,
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
        890,
        976,
        883,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 200,
      "stepId": "swapMin",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": 10,
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
        976,
        890,
        966
      ]
    },
    {
      "step": 201,
      "stepId": "markSortedI",
      "n": 14,
      "i": 10,
      "j": null,
      "minIndex": null,
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
        976,
        890,
        966
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
      "stepId": "forI",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": null,
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
        976,
        890,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 203,
      "stepId": "setMin",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        976,
        890,
        966
      ]
    },
    {
      "step": 204,
      "stepId": "markRange",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        976,
        890,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 205,
      "stepId": "forJ",
      "n": 14,
      "i": 11,
      "j": 12,
      "minIndex": 11,
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
        976,
        890,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 206,
      "stepId": "compare",
      "n": 14,
      "i": 11,
      "j": 12,
      "minIndex": 11,
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
        976,
        890,
        966
      ]
    },
    {
      "step": 207,
      "stepId": "updateMin",
      "n": 14,
      "i": 11,
      "j": 12,
      "minIndex": 12,
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
        976,
        890,
        966
      ]
    },
    {
      "step": 208,
      "stepId": "compare",
      "n": 14,
      "i": 11,
      "j": 13,
      "minIndex": 12,
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
        976,
        890,
        966
      ]
    },
    {
      "step": 209,
      "stepId": "checkSwap",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": 12,
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
        976,
        890,
        966
      ]
    },
    {
      "step": 210,
      "stepId": "swapMin",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": 11,
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
        976,
        966
      ]
    },
    {
      "step": 211,
      "stepId": "markSortedI",
      "n": 14,
      "i": 11,
      "j": null,
      "minIndex": null,
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
        976,
        966
      ]
    },
    {
      "step": 212,
      "stepId": "forI",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": null,
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
        976,
        966
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
      "stepId": "setMin",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        976,
        966
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 214,
      "stepId": "markRange",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
        976,
        966
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
      "stepId": "forJ",
      "n": 14,
      "i": 12,
      "j": 13,
      "minIndex": 12,
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
        976,
        966
      ]
    },
    {
      "step": 216,
      "stepId": "compare",
      "n": 14,
      "i": 12,
      "j": 13,
      "minIndex": 12,
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
        976,
        966
      ]
    },
    {
      "step": 217,
      "stepId": "updateMin",
      "n": 14,
      "i": 12,
      "j": 13,
      "minIndex": 13,
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
        976,
        966
      ]
    },
    {
      "step": 218,
      "stepId": "checkSwap",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 13,
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
        976,
        966
      ]
    },
    {
      "step": 219,
      "stepId": "swapMin",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": 12,
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
      "step": 220,
      "stepId": "markSortedI",
      "n": 14,
      "i": 12,
      "j": null,
      "minIndex": null,
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
