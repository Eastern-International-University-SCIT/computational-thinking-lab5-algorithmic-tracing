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
    4,
    10,
    12,
    13,
    15,
    17,
    21,
    23,
    28,
    29,
    31,
    37,
    38,
    41,
    43,
    45,
    49,
    51,
    52,
    60,
    69,
    86,
    95,
    97,
    100,
    101,
    106,
    107,
    109,
    111,
    115,
    117,
    120,
    125,
    129,
    133,
    137,
    138,
    140,
    143,
    147,
    149,
    152,
    155,
    156,
    160,
    161,
    166,
    168,
    170,
    172,
    176,
    177,
    178,
    180,
    181,
    183,
    187,
    193,
    194,
    202,
    205,
    207,
    210,
    215,
    216,
    219,
    227,
    233,
    240,
    246,
    248,
    254,
    255,
    257,
    259,
    260,
    261,
    262,
    266,
    269,
    271,
    279,
    282,
    287,
    288,
    289,
    295,
    297,
    299,
    301,
    303,
    307,
    308,
    311,
    314,
    315,
    318,
    329,
    330,
    332,
    334,
    336,
    339,
    346,
    348,
    350,
    354,
    360,
    361,
    375,
    376,
    381,
    385,
    395,
    396,
    397,
    402,
    405,
    406,
    411,
    412,
    414,
    417,
    418,
    421,
    425,
    426
  ],
  "answers": {
    "4": {
      "stepId": "markRange",
      "i": "0",
      "j": "\u2014",
      "swapped": "false"
    },
    "10": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "2",
      "swapped": "true"
    },
    "12": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "3",
      "swapped": "true"
    },
    "13": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "3",
      "swapped": "true"
    },
    "15": {
      "stepId": "compare",
      "i": "0",
      "j": "5",
      "swapped": "true"
    },
    "17": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "5",
      "swapped": "true"
    },
    "21": {
      "stepId": "compare",
      "i": "0",
      "j": "7",
      "swapped": "true"
    },
    "23": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "7",
      "swapped": "true"
    },
    "28": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "9",
      "swapped": "true"
    },
    "29": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "9",
      "swapped": "true"
    },
    "31": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "10",
      "swapped": "true"
    },
    "37": {
      "stepId": "compare",
      "i": "0",
      "j": "13",
      "swapped": "true"
    },
    "38": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "13",
      "swapped": "true"
    },
    "41": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "14",
      "swapped": "true"
    },
    "43": {
      "stepId": "compare",
      "i": "0",
      "j": "15",
      "swapped": "true"
    },
    "45": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "15",
      "swapped": "true"
    },
    "49": {
      "stepId": "compare",
      "i": "0",
      "j": "17",
      "swapped": "true"
    },
    "51": {
      "stepId": "setSwappedTrue",
      "i": "0",
      "j": "17",
      "swapped": "true"
    },
    "52": {
      "stepId": "compare",
      "i": "0",
      "j": "18",
      "swapped": "true"
    },
    "60": {
      "stepId": "forJ",
      "i": "1",
      "j": "0",
      "swapped": "false"
    },
    "69": {
      "stepId": "compare",
      "i": "1",
      "j": "4",
      "swapped": "true"
    },
    "86": {
      "stepId": "compare",
      "i": "1",
      "j": "11",
      "swapped": "true"
    },
    "95": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "14",
      "swapped": "true"
    },
    "97": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "15",
      "swapped": "true"
    },
    "100": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "16",
      "swapped": "true"
    },
    "101": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "16",
      "swapped": "true"
    },
    "106": {
      "stepId": "checkEarlyExit",
      "i": "1",
      "j": "\u2014",
      "swapped": "true"
    },
    "107": {
      "stepId": "forI",
      "i": "2",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "109": {
      "stepId": "markRange",
      "i": "2",
      "j": "\u2014",
      "swapped": "false"
    },
    "111": {
      "stepId": "compare",
      "i": "2",
      "j": "0",
      "swapped": "false"
    },
    "115": {
      "stepId": "compare",
      "i": "2",
      "j": "4",
      "swapped": "false"
    },
    "117": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "4",
      "swapped": "true"
    },
    "120": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "5",
      "swapped": "true"
    },
    "125": {
      "stepId": "compare",
      "i": "2",
      "j": "8",
      "swapped": "true"
    },
    "129": {
      "stepId": "compare",
      "i": "2",
      "j": "10",
      "swapped": "true"
    },
    "133": {
      "stepId": "compare",
      "i": "2",
      "j": "12",
      "swapped": "true"
    },
    "137": {
      "stepId": "compare",
      "i": "2",
      "j": "14",
      "swapped": "true"
    },
    "138": {
      "stepId": "compare",
      "i": "2",
      "j": "15",
      "swapped": "true"
    },
    "140": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "15",
      "swapped": "true"
    },
    "143": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "16",
      "swapped": "true"
    },
    "147": {
      "stepId": "setSwapped",
      "i": "3",
      "j": "\u2014",
      "swapped": "false"
    },
    "149": {
      "stepId": "forJ",
      "i": "3",
      "j": "0",
      "swapped": "false"
    },
    "152": {
      "stepId": "compare",
      "i": "3",
      "j": "2",
      "swapped": "false"
    },
    "155": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "3",
      "swapped": "true"
    },
    "156": {
      "stepId": "compare",
      "i": "3",
      "j": "4",
      "swapped": "true"
    },
    "160": {
      "stepId": "compare",
      "i": "3",
      "j": "6",
      "swapped": "true"
    },
    "161": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "6",
      "swapped": "true"
    },
    "166": {
      "stepId": "compare",
      "i": "3",
      "j": "8",
      "swapped": "true"
    },
    "168": {
      "stepId": "compare",
      "i": "3",
      "j": "10",
      "swapped": "true"
    },
    "170": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "10",
      "swapped": "true"
    },
    "172": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "11",
      "swapped": "true"
    },
    "176": {
      "stepId": "compare",
      "i": "3",
      "j": "14",
      "swapped": "true"
    },
    "177": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "14",
      "swapped": "true"
    },
    "178": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "14",
      "swapped": "true"
    },
    "180": {
      "stepId": "swapAdjacent",
      "i": "3",
      "j": "15",
      "swapped": "true"
    },
    "181": {
      "stepId": "setSwappedTrue",
      "i": "3",
      "j": "15",
      "swapped": "true"
    },
    "183": {
      "stepId": "checkEarlyExit",
      "i": "3",
      "j": "\u2014",
      "swapped": "true"
    },
    "187": {
      "stepId": "forJ",
      "i": "4",
      "j": "0",
      "swapped": "false"
    },
    "193": {
      "stepId": "compare",
      "i": "4",
      "j": "3",
      "swapped": "true"
    },
    "194": {
      "stepId": "compare",
      "i": "4",
      "j": "4",
      "swapped": "true"
    },
    "202": {
      "stepId": "compare",
      "i": "4",
      "j": "8",
      "swapped": "true"
    },
    "205": {
      "stepId": "setSwappedTrue",
      "i": "4",
      "j": "9",
      "swapped": "true"
    },
    "207": {
      "stepId": "swapAdjacent",
      "i": "4",
      "j": "10",
      "swapped": "true"
    },
    "210": {
      "stepId": "compare",
      "i": "4",
      "j": "12",
      "swapped": "true"
    },
    "215": {
      "stepId": "swapAdjacent",
      "i": "4",
      "j": "14",
      "swapped": "true"
    },
    "216": {
      "stepId": "setSwappedTrue",
      "i": "4",
      "j": "14",
      "swapped": "true"
    },
    "219": {
      "stepId": "forI",
      "i": "5",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "227": {
      "stepId": "compare",
      "i": "5",
      "j": "4",
      "swapped": "false"
    },
    "233": {
      "stepId": "compare",
      "i": "5",
      "j": "6",
      "swapped": "true"
    },
    "240": {
      "stepId": "compare",
      "i": "5",
      "j": "11",
      "swapped": "true"
    },
    "246": {
      "stepId": "setSwappedTrue",
      "i": "5",
      "j": "13",
      "swapped": "true"
    },
    "248": {
      "stepId": "checkEarlyExit",
      "i": "5",
      "j": "\u2014",
      "swapped": "true"
    },
    "254": {
      "stepId": "compare",
      "i": "6",
      "j": "1",
      "swapped": "false"
    },
    "255": {
      "stepId": "compare",
      "i": "6",
      "j": "2",
      "swapped": "false"
    },
    "257": {
      "stepId": "swapAdjacent",
      "i": "6",
      "j": "3",
      "swapped": "false"
    },
    "259": {
      "stepId": "compare",
      "i": "6",
      "j": "4",
      "swapped": "true"
    },
    "260": {
      "stepId": "compare",
      "i": "6",
      "j": "5",
      "swapped": "true"
    },
    "261": {
      "stepId": "compare",
      "i": "6",
      "j": "6",
      "swapped": "true"
    },
    "262": {
      "stepId": "compare",
      "i": "6",
      "j": "7",
      "swapped": "true"
    },
    "266": {
      "stepId": "compare",
      "i": "6",
      "j": "9",
      "swapped": "true"
    },
    "269": {
      "stepId": "swapAdjacent",
      "i": "6",
      "j": "11",
      "swapped": "true"
    },
    "271": {
      "stepId": "compare",
      "i": "6",
      "j": "12",
      "swapped": "true"
    },
    "279": {
      "stepId": "forJ",
      "i": "7",
      "j": "0",
      "swapped": "false"
    },
    "282": {
      "stepId": "compare",
      "i": "7",
      "j": "2",
      "swapped": "false"
    },
    "287": {
      "stepId": "compare",
      "i": "7",
      "j": "7",
      "swapped": "false"
    },
    "288": {
      "stepId": "compare",
      "i": "7",
      "j": "8",
      "swapped": "false"
    },
    "289": {
      "stepId": "compare",
      "i": "7",
      "j": "9",
      "swapped": "false"
    },
    "295": {
      "stepId": "setSwappedTrue",
      "i": "7",
      "j": "11",
      "swapped": "true"
    },
    "297": {
      "stepId": "checkEarlyExit",
      "i": "7",
      "j": "\u2014",
      "swapped": "true"
    },
    "299": {
      "stepId": "setSwapped",
      "i": "8",
      "j": "\u2014",
      "swapped": "false"
    },
    "301": {
      "stepId": "forJ",
      "i": "8",
      "j": "0",
      "swapped": "false"
    },
    "303": {
      "stepId": "compare",
      "i": "8",
      "j": "1",
      "swapped": "false"
    },
    "307": {
      "stepId": "compare",
      "i": "8",
      "j": "5",
      "swapped": "false"
    },
    "308": {
      "stepId": "compare",
      "i": "8",
      "j": "6",
      "swapped": "false"
    },
    "311": {
      "stepId": "compare",
      "i": "8",
      "j": "9",
      "swapped": "false"
    },
    "314": {
      "stepId": "compare",
      "i": "8",
      "j": "10",
      "swapped": "true"
    },
    "315": {
      "stepId": "swapAdjacent",
      "i": "8",
      "j": "10",
      "swapped": "true"
    },
    "318": {
      "stepId": "checkEarlyExit",
      "i": "8",
      "j": "\u2014",
      "swapped": "true"
    },
    "329": {
      "stepId": "compare",
      "i": "9",
      "j": "6",
      "swapped": "false"
    },
    "330": {
      "stepId": "compare",
      "i": "9",
      "j": "7",
      "swapped": "false"
    },
    "332": {
      "stepId": "swapAdjacent",
      "i": "9",
      "j": "8",
      "swapped": "false"
    },
    "334": {
      "stepId": "compare",
      "i": "9",
      "j": "9",
      "swapped": "true"
    },
    "336": {
      "stepId": "setSwappedTrue",
      "i": "9",
      "j": "9",
      "swapped": "true"
    },
    "339": {
      "stepId": "forI",
      "i": "10",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "346": {
      "stepId": "compare",
      "i": "10",
      "j": "3",
      "swapped": "false"
    },
    "348": {
      "stepId": "compare",
      "i": "10",
      "j": "5",
      "swapped": "false"
    },
    "350": {
      "stepId": "compare",
      "i": "10",
      "j": "7",
      "swapped": "false"
    },
    "354": {
      "stepId": "swapAdjacent",
      "i": "10",
      "j": "8",
      "swapped": "true"
    },
    "360": {
      "stepId": "markRange",
      "i": "11",
      "j": "\u2014",
      "swapped": "false"
    },
    "361": {
      "stepId": "forJ",
      "i": "11",
      "j": "0",
      "swapped": "false"
    },
    "375": {
      "stepId": "checkEarlyExit",
      "i": "11",
      "j": "\u2014",
      "swapped": "true"
    },
    "376": {
      "stepId": "forI",
      "i": "12",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "381": {
      "stepId": "compare",
      "i": "12",
      "j": "1",
      "swapped": "false"
    },
    "385": {
      "stepId": "compare",
      "i": "12",
      "j": "5",
      "swapped": "false"
    },
    "395": {
      "stepId": "compare",
      "i": "13",
      "j": "0",
      "swapped": "false"
    },
    "396": {
      "stepId": "compare",
      "i": "13",
      "j": "1",
      "swapped": "false"
    },
    "397": {
      "stepId": "compare",
      "i": "13",
      "j": "2",
      "swapped": "false"
    },
    "402": {
      "stepId": "compare",
      "i": "13",
      "j": "5",
      "swapped": "true"
    },
    "405": {
      "stepId": "forI",
      "i": "14",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "406": {
      "stepId": "setSwapped",
      "i": "14",
      "j": "\u2014",
      "swapped": "false"
    },
    "411": {
      "stepId": "compare",
      "i": "14",
      "j": "2",
      "swapped": "false"
    },
    "412": {
      "stepId": "compare",
      "i": "14",
      "j": "3",
      "swapped": "false"
    },
    "414": {
      "stepId": "setSwappedTrue",
      "i": "14",
      "j": "3",
      "swapped": "true"
    },
    "417": {
      "stepId": "checkEarlyExit",
      "i": "14",
      "j": "\u2014",
      "swapped": "true"
    },
    "418": {
      "stepId": "forI",
      "i": "15",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "421": {
      "stepId": "forJ",
      "i": "15",
      "j": "0",
      "swapped": "false"
    },
    "425": {
      "stepId": "compare",
      "i": "15",
      "j": "3",
      "swapped": "false"
    },
    "426": {
      "stepId": "markSortedEnd",
      "i": "15",
      "j": "\u2014",
      "swapped": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 133,
        "value": "compare"
      },
      {
        "id": 137,
        "value": "compare"
      },
      {
        "id": 361,
        "value": "forJ"
      },
      {
        "id": 373,
        "value": "compare"
      },
      {
        "id": 205,
        "value": "compare"
      },
      {
        "id": 461,
        "value": "compare"
      },
      {
        "id": 397,
        "value": "compare"
      },
      {
        "id": 9,
        "value": "swapAdjacent"
      },
      {
        "id": 93,
        "value": "swapAdjacent"
      },
      {
        "id": 337,
        "value": "compare"
      },
      {
        "id": 509,
        "value": "markSortedEnd"
      },
      {
        "id": 221,
        "value": "setSwappedTrue"
      },
      {
        "id": 329,
        "value": "forJ"
      },
      {
        "id": 17,
        "value": "compare"
      },
      {
        "id": 53,
        "value": "swapAdjacent"
      },
      {
        "id": 333,
        "value": "compare"
      },
      {
        "id": 169,
        "value": "compare"
      },
      {
        "id": 285,
        "value": "checkEarlyExit"
      },
      {
        "id": 413,
        "value": "forI"
      },
      {
        "id": 325,
        "value": "compare"
      },
      {
        "id": 469,
        "value": "compare"
      },
      {
        "id": 161,
        "value": "setSwapped"
      },
      {
        "id": 305,
        "value": "compare"
      },
      {
        "id": 181,
        "value": "compare"
      },
      {
        "id": 309,
        "value": "compare"
      },
      {
        "id": 269,
        "value": "compare"
      },
      {
        "id": 457,
        "value": "compare"
      },
      {
        "id": 253,
        "value": "compare"
      },
      {
        "id": 265,
        "value": "forI"
      },
      {
        "id": 117,
        "value": "compare"
      },
      {
        "id": 1,
        "value": "markRange"
      },
      {
        "id": 433,
        "value": "markRange"
      },
      {
        "id": 481,
        "value": "compare"
      },
      {
        "id": 277,
        "value": "compare"
      },
      {
        "id": 165,
        "value": "forJ"
      },
      {
        "id": 497,
        "value": "forI"
      },
      {
        "id": 369,
        "value": "compare"
      },
      {
        "id": 45,
        "value": "compare"
      },
      {
        "id": 505,
        "value": "compare"
      },
      {
        "id": 441,
        "value": "checkEarlyExit"
      },
      {
        "id": 129,
        "value": "setSwappedTrue"
      },
      {
        "id": 401,
        "value": "swapAdjacent"
      },
      {
        "id": 393,
        "value": "compare"
      },
      {
        "id": 5,
        "value": "setSwappedTrue"
      },
      {
        "id": 73,
        "value": "compare"
      },
      {
        "id": 21,
        "value": "setSwappedTrue"
      },
      {
        "id": 65,
        "value": "compare"
      },
      {
        "id": 417,
        "value": "compare"
      },
      {
        "id": 453,
        "value": "compare"
      },
      {
        "id": 465,
        "value": "compare"
      },
      {
        "id": 493,
        "value": "checkEarlyExit"
      },
      {
        "id": 405,
        "value": "compare"
      },
      {
        "id": 377,
        "value": "compare"
      },
      {
        "id": 365,
        "value": "compare"
      },
      {
        "id": 301,
        "value": "compare"
      },
      {
        "id": 229,
        "value": "forJ"
      },
      {
        "id": 105,
        "value": "checkEarlyExit"
      },
      {
        "id": 273,
        "value": "compare"
      },
      {
        "id": 157,
        "value": "setSwappedTrue"
      },
      {
        "id": 49,
        "value": "swapAdjacent"
      },
      {
        "id": 261,
        "value": "setSwappedTrue"
      },
      {
        "id": 437,
        "value": "forJ"
      },
      {
        "id": 321,
        "value": "swapAdjacent"
      },
      {
        "id": 477,
        "value": "setSwapped"
      },
      {
        "id": 249,
        "value": "swapAdjacent"
      },
      {
        "id": 425,
        "value": "compare"
      },
      {
        "id": 13,
        "value": "setSwappedTrue"
      },
      {
        "id": 389,
        "value": "checkEarlyExit"
      },
      {
        "id": 213,
        "value": "setSwappedTrue"
      },
      {
        "id": 41,
        "value": "swapAdjacent"
      },
      {
        "id": 345,
        "value": "compare"
      },
      {
        "id": 473,
        "value": "forI"
      },
      {
        "id": 145,
        "value": "compare"
      },
      {
        "id": 77,
        "value": "forJ"
      },
      {
        "id": 217,
        "value": "swapAdjacent"
      },
      {
        "id": 233,
        "value": "compare"
      },
      {
        "id": 429,
        "value": "swapAdjacent"
      },
      {
        "id": 485,
        "value": "compare"
      },
      {
        "id": 209,
        "value": "swapAdjacent"
      },
      {
        "id": 101,
        "value": "setSwappedTrue"
      },
      {
        "id": 501,
        "value": "forJ"
      },
      {
        "id": 125,
        "value": "setSwappedTrue"
      },
      {
        "id": 25,
        "value": "compare"
      },
      {
        "id": 357,
        "value": "setSwapped"
      },
      {
        "id": 297,
        "value": "swapAdjacent"
      },
      {
        "id": 381,
        "value": "compare"
      },
      {
        "id": 237,
        "value": "compare"
      },
      {
        "id": 349,
        "value": "setSwappedTrue"
      },
      {
        "id": 225,
        "value": "checkEarlyExit"
      },
      {
        "id": 69,
        "value": "setSwappedTrue"
      },
      {
        "id": 201,
        "value": "swapAdjacent"
      },
      {
        "id": 97,
        "value": "swapAdjacent"
      },
      {
        "id": 185,
        "value": "swapAdjacent"
      },
      {
        "id": 241,
        "value": "compare"
      },
      {
        "id": 121,
        "value": "compare"
      },
      {
        "id": 489,
        "value": "setSwappedTrue"
      },
      {
        "id": 109,
        "value": "forI"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 449,
        "value": "compare"
      },
      {
        "id": 313,
        "value": "compare"
      },
      {
        "id": 385,
        "value": "swapAdjacent"
      },
      {
        "id": 317,
        "value": "compare"
      },
      {
        "id": 189,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "compare"
      },
      {
        "id": 341,
        "value": "compare"
      },
      {
        "id": 445,
        "value": "forI"
      },
      {
        "id": 421,
        "value": "compare"
      },
      {
        "id": 197,
        "value": "setSwappedTrue"
      },
      {
        "id": 33,
        "value": "swapAdjacent"
      },
      {
        "id": 281,
        "value": "setSwappedTrue"
      },
      {
        "id": 245,
        "value": "setSwappedTrue"
      },
      {
        "id": 37,
        "value": "setSwappedTrue"
      },
      {
        "id": 193,
        "value": "compare"
      },
      {
        "id": 289,
        "value": "compare"
      },
      {
        "id": 61,
        "value": "setSwappedTrue"
      },
      {
        "id": 293,
        "value": "compare"
      },
      {
        "id": 153,
        "value": "setSwappedTrue"
      },
      {
        "id": 353,
        "value": "checkEarlyExit"
      },
      {
        "id": 409,
        "value": "setSwappedTrue"
      },
      {
        "id": 141,
        "value": "compare"
      },
      {
        "id": 177,
        "value": "compare"
      },
      {
        "id": 89,
        "value": "setSwappedTrue"
      },
      {
        "id": 173,
        "value": "setSwappedTrue"
      },
      {
        "id": 149,
        "value": "compare"
      },
      {
        "id": 113,
        "value": "markRange"
      },
      {
        "id": 257,
        "value": "swapAdjacent"
      },
      {
        "id": 29,
        "value": "setSwappedTrue"
      },
      {
        "id": 81,
        "value": "compare"
      }
    ],
    "i": [
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 458,
        "value": "13"
      },
      {
        "id": 198,
        "value": "3"
      },
      {
        "id": 462,
        "value": "13"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 238,
        "value": "4"
      },
      {
        "id": 394,
        "value": "9"
      },
      {
        "id": 446,
        "value": "12"
      },
      {
        "id": 470,
        "value": "13"
      },
      {
        "id": 482,
        "value": "14"
      },
      {
        "id": 510,
        "value": "15"
      },
      {
        "id": 350,
        "value": "7"
      },
      {
        "id": 278,
        "value": "5"
      },
      {
        "id": 158,
        "value": "2"
      },
      {
        "id": 154,
        "value": "2"
      },
      {
        "id": 62,
        "value": "0"
      },
      {
        "id": 374,
        "value": "8"
      },
      {
        "id": 106,
        "value": "1"
      },
      {
        "id": 426,
        "value": "10"
      },
      {
        "id": 182,
        "value": "3"
      },
      {
        "id": 354,
        "value": "7"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 442,
        "value": "11"
      },
      {
        "id": 330,
        "value": "7"
      },
      {
        "id": 110,
        "value": "2"
      },
      {
        "id": 438,
        "value": "11"
      },
      {
        "id": 258,
        "value": "4"
      },
      {
        "id": 314,
        "value": "6"
      },
      {
        "id": 326,
        "value": "6"
      },
      {
        "id": 398,
        "value": "9"
      },
      {
        "id": 294,
        "value": "6"
      },
      {
        "id": 430,
        "value": "10"
      },
      {
        "id": 466,
        "value": "13"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 338,
        "value": "7"
      },
      {
        "id": 66,
        "value": "0"
      },
      {
        "id": 146,
        "value": "2"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 162,
        "value": "3"
      },
      {
        "id": 502,
        "value": "15"
      },
      {
        "id": 450,
        "value": "12"
      },
      {
        "id": 346,
        "value": "7"
      },
      {
        "id": 98,
        "value": "1"
      },
      {
        "id": 94,
        "value": "1"
      },
      {
        "id": 174,
        "value": "3"
      },
      {
        "id": 170,
        "value": "3"
      },
      {
        "id": 386,
        "value": "8"
      },
      {
        "id": 418,
        "value": "10"
      },
      {
        "id": 186,
        "value": "3"
      },
      {
        "id": 266,
        "value": "5"
      },
      {
        "id": 102,
        "value": "1"
      },
      {
        "id": 358,
        "value": "8"
      },
      {
        "id": 222,
        "value": "3"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 122,
        "value": "2"
      },
      {
        "id": 50,
        "value": "0"
      },
      {
        "id": 414,
        "value": "10"
      },
      {
        "id": 138,
        "value": "2"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 474,
        "value": "14"
      },
      {
        "id": 54,
        "value": "0"
      },
      {
        "id": 454,
        "value": "12"
      },
      {
        "id": 318,
        "value": "6"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 378,
        "value": "8"
      },
      {
        "id": 290,
        "value": "6"
      },
      {
        "id": 246,
        "value": "4"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 342,
        "value": "7"
      },
      {
        "id": 422,
        "value": "10"
      },
      {
        "id": 130,
        "value": "2"
      },
      {
        "id": 242,
        "value": "4"
      },
      {
        "id": 210,
        "value": "3"
      },
      {
        "id": 214,
        "value": "3"
      },
      {
        "id": 362,
        "value": "8"
      },
      {
        "id": 490,
        "value": "14"
      },
      {
        "id": 334,
        "value": "7"
      },
      {
        "id": 82,
        "value": "1"
      },
      {
        "id": 302,
        "value": "6"
      },
      {
        "id": 166,
        "value": "3"
      },
      {
        "id": 150,
        "value": "2"
      },
      {
        "id": 494,
        "value": "14"
      },
      {
        "id": 506,
        "value": "15"
      },
      {
        "id": 390,
        "value": "8"
      },
      {
        "id": 498,
        "value": "15"
      },
      {
        "id": 402,
        "value": "9"
      },
      {
        "id": 434,
        "value": "11"
      },
      {
        "id": 74,
        "value": "0"
      },
      {
        "id": 178,
        "value": "3"
      },
      {
        "id": 286,
        "value": "5"
      },
      {
        "id": 370,
        "value": "8"
      },
      {
        "id": 90,
        "value": "1"
      },
      {
        "id": 306,
        "value": "6"
      },
      {
        "id": 478,
        "value": "14"
      },
      {
        "id": 262,
        "value": "4"
      },
      {
        "id": 86,
        "value": "1"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 366,
        "value": "8"
      },
      {
        "id": 226,
        "value": "3"
      },
      {
        "id": 142,
        "value": "2"
      },
      {
        "id": 322,
        "value": "6"
      },
      {
        "id": 310,
        "value": "6"
      },
      {
        "id": 190,
        "value": "3"
      },
      {
        "id": 250,
        "value": "4"
      },
      {
        "id": 134,
        "value": "2"
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
        "id": 78,
        "value": "1"
      },
      {
        "id": 282,
        "value": "5"
      },
      {
        "id": 70,
        "value": "0"
      },
      {
        "id": 254,
        "value": "4"
      },
      {
        "id": 486,
        "value": "14"
      },
      {
        "id": 194,
        "value": "3"
      },
      {
        "id": 382,
        "value": "8"
      },
      {
        "id": 270,
        "value": "5"
      },
      {
        "id": 230,
        "value": "4"
      },
      {
        "id": 298,
        "value": "6"
      },
      {
        "id": 202,
        "value": "3"
      },
      {
        "id": 406,
        "value": "9"
      },
      {
        "id": 206,
        "value": "3"
      },
      {
        "id": 218,
        "value": "3"
      },
      {
        "id": 274,
        "value": "5"
      },
      {
        "id": 114,
        "value": "2"
      },
      {
        "id": 118,
        "value": "2"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 410,
        "value": "9"
      },
      {
        "id": 46,
        "value": "0"
      },
      {
        "id": 234,
        "value": "4"
      }
    ],
    "j": [
      {
        "id": 75,
        "value": "18"
      },
      {
        "id": 23,
        "value": "5"
      },
      {
        "id": 407,
        "value": "9"
      },
      {
        "id": 311,
        "value": "6"
      },
      {
        "id": 231,
        "value": "0"
      },
      {
        "id": 303,
        "value": "4"
      },
      {
        "id": 171,
        "value": "2"
      },
      {
        "id": 347,
        "value": "9"
      },
      {
        "id": 127,
        "value": "4"
      },
      {
        "id": 271,
        "value": "4"
      },
      {
        "id": 403,
        "value": "8"
      },
      {
        "id": 411,
        "value": "9"
      },
      {
        "id": 11,
        "value": "3"
      },
      {
        "id": 31,
        "value": "7"
      },
      {
        "id": 339,
        "value": "7"
      },
      {
        "id": 443,
        "value": "\u2014"
      },
      {
        "id": 323,
        "value": "11"
      },
      {
        "id": 487,
        "value": "3"
      },
      {
        "id": 55,
        "value": "14"
      },
      {
        "id": 95,
        "value": "15"
      },
      {
        "id": 415,
        "value": "\u2014"
      },
      {
        "id": 351,
        "value": "11"
      },
      {
        "id": 135,
        "value": "8"
      },
      {
        "id": 499,
        "value": "\u2014"
      },
      {
        "id": 455,
        "value": "5"
      },
      {
        "id": 483,
        "value": "2"
      },
      {
        "id": 15,
        "value": "3"
      },
      {
        "id": 375,
        "value": "6"
      },
      {
        "id": 219,
        "value": "15"
      },
      {
        "id": 475,
        "value": "\u2014"
      },
      {
        "id": 211,
        "value": "14"
      },
      {
        "id": 39,
        "value": "9"
      },
      {
        "id": 367,
        "value": "1"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 459,
        "value": "0"
      },
      {
        "id": 99,
        "value": "16"
      },
      {
        "id": 203,
        "value": "11"
      },
      {
        "id": 131,
        "value": "5"
      },
      {
        "id": 427,
        "value": "7"
      },
      {
        "id": 35,
        "value": "9"
      },
      {
        "id": 159,
        "value": "16"
      },
      {
        "id": 431,
        "value": "8"
      },
      {
        "id": 19,
        "value": "5"
      },
      {
        "id": 227,
        "value": "\u2014"
      },
      {
        "id": 295,
        "value": "2"
      },
      {
        "id": 47,
        "value": "13"
      },
      {
        "id": 491,
        "value": "3"
      },
      {
        "id": 187,
        "value": "6"
      },
      {
        "id": 143,
        "value": "12"
      },
      {
        "id": 139,
        "value": "10"
      },
      {
        "id": 87,
        "value": "11"
      },
      {
        "id": 355,
        "value": "\u2014"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 419,
        "value": "3"
      },
      {
        "id": 467,
        "value": "2"
      },
      {
        "id": 119,
        "value": "0"
      },
      {
        "id": 251,
        "value": "10"
      },
      {
        "id": 199,
        "value": "10"
      },
      {
        "id": 27,
        "value": "7"
      },
      {
        "id": 91,
        "value": "14"
      },
      {
        "id": 215,
        "value": "14"
      },
      {
        "id": 123,
        "value": "4"
      },
      {
        "id": 267,
        "value": "\u2014"
      },
      {
        "id": 511,
        "value": "\u2014"
      },
      {
        "id": 195,
        "value": "10"
      },
      {
        "id": 147,
        "value": "14"
      },
      {
        "id": 207,
        "value": "14"
      },
      {
        "id": 507,
        "value": "3"
      },
      {
        "id": 307,
        "value": "5"
      },
      {
        "id": 191,
        "value": "8"
      },
      {
        "id": 63,
        "value": "15"
      },
      {
        "id": 439,
        "value": "0"
      },
      {
        "id": 335,
        "value": "2"
      },
      {
        "id": 463,
        "value": "1"
      },
      {
        "id": 343,
        "value": "8"
      },
      {
        "id": 175,
        "value": "3"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 423,
        "value": "5"
      },
      {
        "id": 163,
        "value": "\u2014"
      },
      {
        "id": 471,
        "value": "5"
      },
      {
        "id": 391,
        "value": "\u2014"
      },
      {
        "id": 279,
        "value": "11"
      },
      {
        "id": 315,
        "value": "7"
      },
      {
        "id": 151,
        "value": "15"
      },
      {
        "id": 291,
        "value": "1"
      },
      {
        "id": 115,
        "value": "\u2014"
      },
      {
        "id": 447,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "2"
      },
      {
        "id": 179,
        "value": "4"
      },
      {
        "id": 263,
        "value": "14"
      },
      {
        "id": 223,
        "value": "15"
      },
      {
        "id": 255,
        "value": "12"
      },
      {
        "id": 495,
        "value": "\u2014"
      },
      {
        "id": 83,
        "value": "4"
      },
      {
        "id": 183,
        "value": "6"
      },
      {
        "id": 107,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "17"
      },
      {
        "id": 319,
        "value": "9"
      },
      {
        "id": 379,
        "value": "9"
      },
      {
        "id": 451,
        "value": "1"
      },
      {
        "id": 235,
        "value": "3"
      },
      {
        "id": 383,
        "value": "10"
      },
      {
        "id": 359,
        "value": "\u2014"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 435,
        "value": "\u2014"
      },
      {
        "id": 331,
        "value": "0"
      },
      {
        "id": 167,
        "value": "0"
      },
      {
        "id": 363,
        "value": "0"
      },
      {
        "id": 395,
        "value": "6"
      },
      {
        "id": 103,
        "value": "16"
      },
      {
        "id": 503,
        "value": "0"
      },
      {
        "id": 299,
        "value": "3"
      },
      {
        "id": 275,
        "value": "6"
      },
      {
        "id": 371,
        "value": "5"
      },
      {
        "id": 399,
        "value": "7"
      },
      {
        "id": 239,
        "value": "4"
      },
      {
        "id": 43,
        "value": "10"
      },
      {
        "id": 247,
        "value": "9"
      },
      {
        "id": 387,
        "value": "10"
      },
      {
        "id": 71,
        "value": "17"
      },
      {
        "id": 259,
        "value": "14"
      },
      {
        "id": 243,
        "value": "8"
      },
      {
        "id": 479,
        "value": "\u2014"
      },
      {
        "id": 51,
        "value": "13"
      },
      {
        "id": 327,
        "value": "12"
      },
      {
        "id": 155,
        "value": "15"
      },
      {
        "id": 59,
        "value": "15"
      },
      {
        "id": 283,
        "value": "13"
      }
    ],
    "swapped": [
      {
        "id": 368,
        "value": "false"
      },
      {
        "id": 124,
        "value": "false"
      },
      {
        "id": 272,
        "value": "false"
      },
      {
        "id": 92,
        "value": "true"
      },
      {
        "id": 140,
        "value": "true"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 36,
        "value": "true"
      },
      {
        "id": 324,
        "value": "true"
      },
      {
        "id": 452,
        "value": "false"
      },
      {
        "id": 192,
        "value": "true"
      },
      {
        "id": 120,
        "value": "false"
      },
      {
        "id": 416,
        "value": "\u2014"
      },
      {
        "id": 340,
        "value": "false"
      },
      {
        "id": 28,
        "value": "true"
      },
      {
        "id": 72,
        "value": "true"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 444,
        "value": "true"
      },
      {
        "id": 232,
        "value": "false"
      },
      {
        "id": 68,
        "value": "true"
      },
      {
        "id": 280,
        "value": "true"
      },
      {
        "id": 212,
        "value": "true"
      },
      {
        "id": 216,
        "value": "true"
      },
      {
        "id": 52,
        "value": "true"
      },
      {
        "id": 360,
        "value": "false"
      },
      {
        "id": 432,
        "value": "true"
      },
      {
        "id": 112,
        "value": "\u2014"
      },
      {
        "id": 60,
        "value": "true"
      },
      {
        "id": 240,
        "value": "true"
      },
      {
        "id": 24,
        "value": "true"
      },
      {
        "id": 500,
        "value": "\u2014"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 156,
        "value": "true"
      },
      {
        "id": 380,
        "value": "false"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 304,
        "value": "true"
      },
      {
        "id": 220,
        "value": "true"
      },
      {
        "id": 320,
        "value": "true"
      },
      {
        "id": 268,
        "value": "\u2014"
      },
      {
        "id": 448,
        "value": "\u2014"
      },
      {
        "id": 316,
        "value": "true"
      },
      {
        "id": 168,
        "value": "false"
      },
      {
        "id": 504,
        "value": "false"
      },
      {
        "id": 420,
        "value": "false"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 84,
        "value": "true"
      },
      {
        "id": 312,
        "value": "true"
      },
      {
        "id": 100,
        "value": "true"
      },
      {
        "id": 12,
        "value": "true"
      },
      {
        "id": 332,
        "value": "false"
      },
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 460,
        "value": "false"
      },
      {
        "id": 288,
        "value": "true"
      },
      {
        "id": 468,
        "value": "false"
      },
      {
        "id": 400,
        "value": "false"
      },
      {
        "id": 364,
        "value": "false"
      },
      {
        "id": 80,
        "value": "false"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 476,
        "value": "\u2014"
      },
      {
        "id": 256,
        "value": "true"
      },
      {
        "id": 508,
        "value": "false"
      },
      {
        "id": 428,
        "value": "false"
      },
      {
        "id": 492,
        "value": "true"
      },
      {
        "id": 300,
        "value": "false"
      },
      {
        "id": 296,
        "value": "false"
      },
      {
        "id": 188,
        "value": "true"
      },
      {
        "id": 456,
        "value": "false"
      },
      {
        "id": 404,
        "value": "false"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 464,
        "value": "false"
      },
      {
        "id": 480,
        "value": "false"
      },
      {
        "id": 484,
        "value": "false"
      },
      {
        "id": 308,
        "value": "true"
      },
      {
        "id": 284,
        "value": "true"
      },
      {
        "id": 376,
        "value": "false"
      },
      {
        "id": 336,
        "value": "false"
      },
      {
        "id": 496,
        "value": "true"
      },
      {
        "id": 408,
        "value": "true"
      },
      {
        "id": 328,
        "value": "true"
      },
      {
        "id": 8,
        "value": "true"
      },
      {
        "id": 164,
        "value": "false"
      },
      {
        "id": 76,
        "value": "true"
      },
      {
        "id": 472,
        "value": "true"
      },
      {
        "id": 396,
        "value": "false"
      },
      {
        "id": 224,
        "value": "true"
      },
      {
        "id": 40,
        "value": "true"
      },
      {
        "id": 108,
        "value": "true"
      },
      {
        "id": 48,
        "value": "true"
      },
      {
        "id": 440,
        "value": "false"
      },
      {
        "id": 32,
        "value": "true"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 228,
        "value": "true"
      },
      {
        "id": 264,
        "value": "true"
      },
      {
        "id": 276,
        "value": "true"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 20,
        "value": "true"
      },
      {
        "id": 356,
        "value": "true"
      },
      {
        "id": 260,
        "value": "true"
      },
      {
        "id": 436,
        "value": "false"
      },
      {
        "id": 512,
        "value": "false"
      },
      {
        "id": 204,
        "value": "true"
      },
      {
        "id": 172,
        "value": "false"
      },
      {
        "id": 4,
        "value": "false"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 148,
        "value": "true"
      },
      {
        "id": 236,
        "value": "true"
      },
      {
        "id": 344,
        "value": "false"
      },
      {
        "id": 44,
        "value": "true"
      },
      {
        "id": 348,
        "value": "false"
      },
      {
        "id": 248,
        "value": "true"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 116,
        "value": "false"
      },
      {
        "id": 244,
        "value": "true"
      },
      {
        "id": 488,
        "value": "false"
      },
      {
        "id": 180,
        "value": "true"
      },
      {
        "id": 388,
        "value": "true"
      },
      {
        "id": 16,
        "value": "true"
      },
      {
        "id": 292,
        "value": "false"
      },
      {
        "id": 392,
        "value": "true"
      },
      {
        "id": 352,
        "value": "true"
      },
      {
        "id": 372,
        "value": "false"
      },
      {
        "id": 412,
        "value": "true"
      },
      {
        "id": 384,
        "value": "true"
      },
      {
        "id": 196,
        "value": "true"
      },
      {
        "id": 132,
        "value": "true"
      },
      {
        "id": 424,
        "value": "false"
      },
      {
        "id": 252,
        "value": "true"
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
      "swapped": null,
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
      "swapped": null,
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
      "stepId": "setSwapped",
      "n": 20,
      "i": 0,
      "j": null,
      "swapped": false,
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
      "swapped": false,
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
        "swapped": true
      }
    },
    {
      "step": 5,
      "stepId": "forJ",
      "n": 20,
      "i": 0,
      "j": 0,
      "swapped": false,
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
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 0,
      "swapped": false,
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
      "j": 1,
      "swapped": false,
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
      "n": 20,
      "i": 0,
      "j": 2,
      "swapped": false,
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        272,
        48,
        500,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        500,
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
        "swapped": true
      }
    },
    {
      "step": 11,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        500,
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 13,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 14,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
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
      "step": 15,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 16,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        958,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        958,
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
        "swapped": true
      }
    },
    {
      "step": 18,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        958,
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        958,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        958,
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
      "j": 7,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        958,
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
        "swapped": true
      }
    },
    {
      "step": 22,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        958,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        958,
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
        "swapped": true
      }
    },
    {
      "step": 24,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        958,
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        958,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        958,
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
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        958,
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        958,
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
        "swapped": true
      }
    },
    {
      "step": 29,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        958,
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
        "swapped": true
      }
    },
    {
      "step": 30,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        958,
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
      "step": 31,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
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
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 32,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
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
      "step": 33,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
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
      "step": 34,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
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
      "n": 20,
      "i": 0,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
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
      "i": 0,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
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
        "swapped": true
      }
    },
    {
      "step": 38,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        977,
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
        "swapped": true
      }
    },
    {
      "step": 39,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        977,
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
      "i": 0,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 41,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        977,
        926,
        951,
        112,
        219
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 42,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        977,
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
      "i": 0,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        977,
        926,
        951,
        112,
        219
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        977,
        951,
        112,
        219
      ]
    },
    {
      "step": 45,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        977,
        951,
        112,
        219
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
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        977,
        951,
        112,
        219
      ]
    },
    {
      "step": 47,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 0,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        977,
        112,
        219
      ]
    },
    {
      "step": 48,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        977,
        112,
        219
      ]
    },
    {
      "step": 49,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 17,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        977,
        112,
        219
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
      "n": 20,
      "i": 0,
      "j": 17,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        977,
        219
      ]
    },
    {
      "step": 51,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 17,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        977,
        219
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
      "n": 20,
      "i": 0,
      "j": 18,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        977,
        219
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
      "n": 20,
      "i": 0,
      "j": 18,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 54,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 0,
      "j": 18,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 55,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 56,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 57,
      "stepId": "forI",
      "n": 20,
      "i": 1,
      "j": null,
      "swapped": null,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 58,
      "stepId": "setSwapped",
      "n": 20,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 59,
      "stepId": "markRange",
      "n": 20,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 60,
      "stepId": "forJ",
      "n": 20,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 61,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 62,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        272,
        48,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 63,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        272,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 64,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 1,
      "swapped": true,
      "array": [
        19,
        48,
        272,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 65,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        19,
        48,
        272,
        194,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 66,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 67,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 68,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 69,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
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
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        652,
        55,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 71,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 72,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 73,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
        253,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 74,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 75,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 76,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 77,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        890,
        183,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 78,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        890,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 79,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        890,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 80,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        890,
        197,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 81,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        890,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 82,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        890,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 83,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        890,
        733,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 84,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 85,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 86,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
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
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        958,
        593,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 88,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        958,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 89,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        958,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 90,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        958,
        359,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 91,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        958,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 92,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        958,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 93,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        958,
        926,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 94,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        958,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 95,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        958,
        951,
        112,
        219,
        977
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
      "n": 20,
      "i": 1,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        958,
        951,
        112,
        219,
        977
      ]
    },
    {
      "step": 97,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        958,
        112,
        219,
        977
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        958,
        112,
        219,
        977
      ]
    },
    {
      "step": 99,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        958,
        112,
        219,
        977
      ]
    },
    {
      "step": 100,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        958,
        219,
        977
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        958,
        219,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 102,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 17,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        958,
        219,
        977
      ]
    },
    {
      "step": 103,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 1,
      "j": 17,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 104,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 1,
      "j": 17,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 105,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 106,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "stepId": "forI",
      "n": 20,
      "i": 2,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "stepId": "setSwapped",
      "n": 20,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 109,
      "stepId": "markRange",
      "n": 20,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "stepId": "forJ",
      "n": 20,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 111,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "n": 20,
      "i": 2,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 113,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 114,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 115,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        500,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 117,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        500,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 118,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        500,
        253,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 119,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 120,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "n": 20,
      "i": 2,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 122,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        652,
        183,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 123,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        652,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 124,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        652,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 125,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        652,
        197,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 127,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 128,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 129,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
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
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        890,
        593,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 131,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        890,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 132,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        890,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 133,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        890,
        359,
        926,
        951,
        112,
        219,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 134,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 135,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 136,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        951,
        112,
        219,
        958,
        977
      ]
    },
    {
      "step": 137,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        951,
        112,
        219,
        958,
        977
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
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        951,
        112,
        219,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 139,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        951,
        219,
        958,
        977
      ]
    },
    {
      "step": 140,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        951,
        219,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 141,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        951,
        219,
        958,
        977
      ]
    },
    {
      "step": 142,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 2,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 143,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 2,
      "j": 16,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 144,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 145,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 146,
      "stepId": "forI",
      "n": 20,
      "i": 3,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 147,
      "stepId": "setSwapped",
      "n": 20,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 148,
      "stepId": "markRange",
      "n": 20,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 149,
      "stepId": "forJ",
      "n": 20,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
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
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 151,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 152,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 153,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        272,
        55,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 154,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 3,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        55,
        272,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 155,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        272,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
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
      "n": 20,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        272,
        253,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 157,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 158,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 159,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 160,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        500,
        183,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 161,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        500,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 162,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        500,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 163,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        500,
        197,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 164,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 165,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 166,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
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
      "n": 20,
      "i": 3,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 168,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        733,
        593,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
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
      "n": 20,
      "i": 3,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        733,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 170,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        733,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 171,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        733,
        359,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 172,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 3,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        926,
        112,
        219,
        951,
        958,
        977
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 174,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 175,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        926,
        112,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 176,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        926,
        112,
        219,
        951,
        958,
        977
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
      "n": 20,
      "i": 3,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        926,
        219,
        951,
        958,
        977
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        926,
        219,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 179,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        926,
        219,
        951,
        958,
        977
      ]
    },
    {
      "step": 180,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 3,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 3,
      "j": 15,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 183,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "stepId": "forI",
      "n": 20,
      "i": 4,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 185,
      "stepId": "setSwapped",
      "n": 20,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 186,
      "stepId": "markRange",
      "n": 20,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 187,
      "stepId": "forJ",
      "n": 20,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "n": 20,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 189,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 190,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        194,
        55,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 191,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 4,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 192,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 193,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 3,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "n": 20,
      "i": 4,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        183,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 196,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        272,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 197,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 4,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        272,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 198,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        272,
        197,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 199,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 200,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 4,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 201,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 202,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        652,
        593,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 204,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 4,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        652,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 205,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 4,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        652,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 206,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        652,
        359,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 207,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 4,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "n": 20,
      "i": 4,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 209,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 210,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
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
      "n": 20,
      "i": 4,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        890,
        112,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 212,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 4,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        890,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 213,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 4,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        890,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 214,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        890,
        219,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 215,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 4,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 216,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 4,
      "j": 14,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 217,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 218,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 219,
      "stepId": "forI",
      "n": 20,
      "i": 5,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 220,
      "stepId": "setSwapped",
      "n": 20,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 221,
      "stepId": "markRange",
      "n": 20,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 222,
      "stepId": "forJ",
      "n": 20,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 223,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 224,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 225,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 226,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 227,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        183,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 228,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 5,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        253,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 229,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 5,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        253,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 230,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        253,
        197,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 231,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 232,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 5,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 233,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 234,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 235,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 236,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        593,
        359,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 237,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 5,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 238,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 5,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 239,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 240,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        733,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 241,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        733,
        112,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 242,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 5,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        733,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 243,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 5,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        733,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 244,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        733,
        219,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 245,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 5,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 5,
      "j": 13,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 247,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 249,
      "stepId": "forI",
      "n": 20,
      "i": 6,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "setSwapped",
      "n": 20,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "markRange",
      "n": 20,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "forJ",
      "n": 20,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 255,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 256,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        194,
        183,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 6,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 258,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 6,
      "j": 3,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 260,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 261,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 262,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 263,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        500,
        359,
        593,
        652,
        112,
        219,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 264,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 6,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        652,
        112,
        219,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 6,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        652,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        652,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 267,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        652,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        652,
        112,
        219,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 269,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 6,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        652,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 270,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 6,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        652,
        219,
        733,
        890,
        926,
        951,
        958,
        977
      ]
    },
    {
      "step": 271,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        652,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 272,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 6,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 273,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 6,
      "j": 12,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 275,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "stepId": "forI",
      "n": 20,
      "i": 7,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "stepId": "setSwapped",
      "n": 20,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "stepId": "markRange",
      "n": 20,
      "i": 7,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "stepId": "forJ",
      "n": 20,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 280,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 281,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 282,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 283,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 284,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 285,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 5,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 286,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 6,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 287,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 7,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 288,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 8,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 289,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 9,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 290,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 10,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        593,
        112,
        219,
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
      "step": 291,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 7,
      "j": 10,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        593,
        219,
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
      "step": 292,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 7,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        593,
        219,
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
      "step": 293,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        593,
        219,
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
      "step": 294,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 7,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 295,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 7,
      "j": 11,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 296,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 297,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 7,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 298,
      "stepId": "forI",
      "n": 20,
      "i": 8,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 299,
      "stepId": "setSwapped",
      "n": 20,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 300,
      "stepId": "markRange",
      "n": 20,
      "i": 8,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 301,
      "stepId": "forJ",
      "n": 20,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 302,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 303,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 304,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 305,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 306,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 307,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 5,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 308,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 6,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 309,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 7,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 310,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 8,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
      "step": 311,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 9,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        500,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 312,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 8,
      "j": 9,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        500,
        219,
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
      "step": 313,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 8,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        500,
        219,
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
      "step": 314,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        500,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 315,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 8,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 316,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 8,
      "j": 10,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 317,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 8,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 318,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 8,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 319,
      "stepId": "forI",
      "n": 20,
      "i": 9,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 320,
      "stepId": "setSwapped",
      "n": 20,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 321,
      "stepId": "markRange",
      "n": 20,
      "i": 9,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 322,
      "stepId": "forJ",
      "n": 20,
      "i": 9,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 323,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 324,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 326,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 327,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 5,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "step": 329,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 6,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 330,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 7,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 331,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 8,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        359,
        112,
        219,
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
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 9,
      "j": 8,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        359,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 333,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 9,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        359,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        359,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 335,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 9,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 9,
      "j": 9,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 337,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 9,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 9,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "stepId": "forI",
      "n": 20,
      "i": 10,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 340,
      "stepId": "setSwapped",
      "n": 20,
      "i": 10,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "step": 341,
      "stepId": "markRange",
      "n": 20,
      "i": 10,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "stepId": "forJ",
      "n": 20,
      "i": 10,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "step": 344,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "step": 345,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "step": 346,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 347,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 5,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 349,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 6,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
      "step": 350,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 7,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        272,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 351,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 10,
      "j": 7,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        272,
        219,
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
      "step": 352,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 10,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        272,
        219,
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
      "step": 353,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        272,
        219,
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
      "step": 354,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 10,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 355,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 10,
      "j": 8,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 356,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 10,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 357,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 10,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 358,
      "stepId": "forI",
      "n": 20,
      "i": 11,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 359,
      "stepId": "setSwapped",
      "n": 20,
      "i": 11,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 360,
      "stepId": "markRange",
      "n": 20,
      "i": 11,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 361,
      "stepId": "forJ",
      "n": 20,
      "i": 11,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
        "swapped": true
      }
    },
    {
      "step": 362,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 363,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 364,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 365,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 366,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 367,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 5,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 368,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 6,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        253,
        112,
        219,
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
      "step": 369,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 11,
      "j": 6,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
        253,
        219,
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
      "step": 370,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 11,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
        253,
        219,
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
      "step": 371,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
        253,
        219,
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
      "step": 372,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 11,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 373,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 11,
      "j": 7,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 374,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 11,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 375,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 11,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 376,
      "stepId": "forI",
      "n": 20,
      "i": 12,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 377,
      "stepId": "setSwapped",
      "n": 20,
      "i": 12,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 378,
      "stepId": "markRange",
      "n": 20,
      "i": 12,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 379,
      "stepId": "forJ",
      "n": 20,
      "i": 12,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 380,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 381,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 382,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 383,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 384,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
      "step": 385,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 5,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        197,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 386,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 12,
      "j": 5,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 387,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 12,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 388,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 6,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 389,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 12,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 390,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 12,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 391,
      "stepId": "forI",
      "n": 20,
      "i": 13,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 392,
      "stepId": "setSwapped",
      "n": 20,
      "i": 13,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 393,
      "stepId": "markRange",
      "n": 20,
      "i": 13,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 394,
      "stepId": "forJ",
      "n": 20,
      "i": 13,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 395,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 396,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 397,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 398,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 399,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        194,
        112,
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
      "step": 400,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 13,
      "j": 4,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 401,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 13,
      "j": 4,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 402,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 5,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 403,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 13,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 404,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 13,
      "j": null,
      "swapped": true,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 405,
      "stepId": "forI",
      "n": 20,
      "i": 14,
      "j": null,
      "swapped": null,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 406,
      "stepId": "setSwapped",
      "n": 20,
      "i": 14,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 407,
      "stepId": "markRange",
      "n": 20,
      "i": 14,
      "j": null,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 408,
      "stepId": "forJ",
      "n": 20,
      "i": 14,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 409,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 0,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 410,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 1,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
      "step": 411,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 2,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 412,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 3,
      "swapped": false,
      "array": [
        19,
        48,
        55,
        183,
        112,
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
        "swapped": true
      }
    },
    {
      "step": 413,
      "stepId": "swapAdjacent",
      "n": 20,
      "i": 14,
      "j": 3,
      "swapped": false,
      "array": [
        19,
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
      "step": 414,
      "stepId": "setSwappedTrue",
      "n": 20,
      "i": 14,
      "j": 3,
      "swapped": true,
      "array": [
        19,
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
        "swapped": true
      }
    },
    {
      "step": 415,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 4,
      "swapped": true,
      "array": [
        19,
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
      "step": 416,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 14,
      "j": null,
      "swapped": true,
      "array": [
        19,
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
      "step": 417,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 14,
      "j": null,
      "swapped": true,
      "array": [
        19,
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
        "swapped": true
      }
    },
    {
      "step": 418,
      "stepId": "forI",
      "n": 20,
      "i": 15,
      "j": null,
      "swapped": null,
      "array": [
        19,
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
        "swapped": true
      }
    },
    {
      "step": 419,
      "stepId": "setSwapped",
      "n": 20,
      "i": 15,
      "j": null,
      "swapped": false,
      "array": [
        19,
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
      "step": 420,
      "stepId": "markRange",
      "n": 20,
      "i": 15,
      "j": null,
      "swapped": false,
      "array": [
        19,
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
      "step": 421,
      "stepId": "forJ",
      "n": 20,
      "i": 15,
      "j": 0,
      "swapped": false,
      "array": [
        19,
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
        "swapped": true
      }
    },
    {
      "step": 422,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 0,
      "swapped": false,
      "array": [
        19,
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
      "step": 423,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 1,
      "swapped": false,
      "array": [
        19,
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
      "step": 424,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 2,
      "swapped": false,
      "array": [
        19,
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
      "step": 425,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 3,
      "swapped": false,
      "array": [
        19,
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
        "swapped": true
      }
    },
    {
      "step": 426,
      "stepId": "markSortedEnd",
      "n": 20,
      "i": 15,
      "j": null,
      "swapped": false,
      "array": [
        19,
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
        "swapped": true
      }
    },
    {
      "step": 427,
      "stepId": "checkEarlyExit",
      "n": 20,
      "i": 15,
      "j": null,
      "swapped": false,
      "array": [
        19,
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
      "step": 428,
      "stepId": "breakEarly",
      "n": 20,
      "i": 15,
      "j": null,
      "swapped": false,
      "array": [
        19,
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
