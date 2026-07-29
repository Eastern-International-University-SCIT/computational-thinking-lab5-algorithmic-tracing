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
    "left",
    "mid",
    "right",
    "i",
    "j",
    "k",
    "merged"
  ],
  "blankFields": [
    "stepId",
    "left",
    "mid",
    "right",
    "i",
    "j",
    "k",
    "merged"
  ],
  "executorGlobal": "NaturalMergeSortExecutor",
  "pickedSteps": [
    2,
    14,
    16,
    17,
    19,
    30,
    33,
    35,
    37,
    40,
    43,
    46,
    49,
    50,
    51,
    52,
    53,
    54,
    59,
    60,
    61,
    63,
    68,
    69,
    72,
    83,
    85,
    91,
    101,
    103,
    107,
    114,
    127,
    128,
    130,
    131,
    138,
    146,
    148,
    155,
    156,
    168,
    170,
    176,
    177,
    178,
    179,
    180,
    186,
    187,
    189,
    192,
    193,
    195,
    205,
    207,
    209,
    212,
    213,
    218,
    219,
    220,
    221,
    225,
    231,
    233,
    234,
    239,
    241,
    244,
    245,
    246,
    249,
    255,
    257,
    259,
    260,
    261,
    262,
    263,
    270
  ],
  "answers": {
    "2": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "14": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "2",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "16": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "2",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "17": {
      "stepId": "incK",
      "left": "0",
      "mid": "2",
      "right": "5",
      "i": "1",
      "j": "0",
      "k": "1",
      "merged": "false"
    },
    "19": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "2",
      "right": "5",
      "i": "1",
      "j": "0",
      "k": "1",
      "merged": "false"
    },
    "30": {
      "stepId": "drainRight",
      "left": "0",
      "mid": "2",
      "right": "5",
      "i": "\u2014",
      "j": "2",
      "k": "5",
      "merged": "false"
    },
    "33": {
      "stepId": "setLeft",
      "left": "6",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "6",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "35": {
      "stepId": "setMid",
      "left": "6",
      "mid": "6",
      "right": "\u2014",
      "i": "6",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "37": {
      "stepId": "checkHasRight",
      "left": "6",
      "mid": "6",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "40": {
      "stepId": "callMerge",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "43": {
      "stepId": "whileBoth",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "0",
      "j": "0",
      "k": "6",
      "merged": "true"
    },
    "46": {
      "stepId": "incK",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "0",
      "j": "1",
      "k": "7",
      "merged": "true"
    },
    "49": {
      "stepId": "incK",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "0",
      "j": "2",
      "k": "8",
      "merged": "true"
    },
    "50": {
      "stepId": "compareMerge",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "0",
      "j": "2",
      "k": "8",
      "merged": "true"
    },
    "51": {
      "stepId": "takeLeft",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "0",
      "j": "2",
      "k": "8",
      "merged": "true"
    },
    "52": {
      "stepId": "incK",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "\u2014",
      "j": "2",
      "k": "9",
      "merged": "true"
    },
    "53": {
      "stepId": "drainRight",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "\u2014",
      "j": "2",
      "k": "9",
      "merged": "true"
    },
    "54": {
      "stepId": "setMergedTrue",
      "left": "6",
      "mid": "6",
      "right": "9",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "59": {
      "stepId": "advancePastMid",
      "left": "10",
      "mid": "13",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "60": {
      "stepId": "checkHasRight",
      "left": "10",
      "mid": "13",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "61": {
      "stepId": "extendRight",
      "left": "10",
      "mid": "13",
      "right": "14",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "63": {
      "stepId": "callMerge",
      "left": "10",
      "mid": "13",
      "right": "14",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "68": {
      "stepId": "takeLeft",
      "left": "10",
      "mid": "13",
      "right": "14",
      "i": "0",
      "j": "0",
      "k": "10",
      "merged": "true"
    },
    "69": {
      "stepId": "incK",
      "left": "10",
      "mid": "13",
      "right": "14",
      "i": "1",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "72": {
      "stepId": "incK",
      "left": "10",
      "mid": "13",
      "right": "14",
      "i": "2",
      "j": "0",
      "k": "12",
      "merged": "true"
    },
    "83": {
      "stepId": "checkHasRight",
      "left": "15",
      "mid": "17",
      "right": "\u2014",
      "i": "18",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "85": {
      "stepId": "setRight",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "91": {
      "stepId": "takeRight",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "15",
      "merged": "true"
    },
    "101": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "103": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "107": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "5",
      "right": "\u2014",
      "i": "6",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "114": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "5",
      "right": "9",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "127": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "5",
      "right": "9",
      "i": "3",
      "j": "1",
      "k": "4",
      "merged": "false"
    },
    "128": {
      "stepId": "incK",
      "left": "0",
      "mid": "5",
      "right": "9",
      "i": "3",
      "j": "2",
      "k": "5",
      "merged": "false"
    },
    "130": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "5",
      "right": "9",
      "i": "3",
      "j": "2",
      "k": "5",
      "merged": "false"
    },
    "131": {
      "stepId": "incK",
      "left": "0",
      "mid": "5",
      "right": "9",
      "i": "4",
      "j": "2",
      "k": "6",
      "merged": "false"
    },
    "138": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "5",
      "right": "9",
      "i": "5",
      "j": "3",
      "k": "8",
      "merged": "false"
    },
    "146": {
      "stepId": "setMid",
      "left": "10",
      "mid": "14",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "148": {
      "stepId": "checkHasRight",
      "left": "10",
      "mid": "14",
      "right": "\u2014",
      "i": "15",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "155": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "10",
      "merged": "true"
    },
    "156": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "10",
      "merged": "true"
    },
    "168": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "2",
      "j": "2",
      "k": "14",
      "merged": "true"
    },
    "170": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "2",
      "j": "3",
      "k": "15",
      "merged": "true"
    },
    "176": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "17",
      "merged": "true"
    },
    "177": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "17",
      "merged": "true"
    },
    "178": {
      "stepId": "incK",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "18",
      "merged": "true"
    },
    "179": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "18",
      "merged": "true"
    },
    "180": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "18",
      "merged": "true"
    },
    "186": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "187": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "189": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "192": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "9",
      "right": "\u2014",
      "i": "10",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "193": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "9",
      "right": "\u2014",
      "i": "10",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "195": {
      "stepId": "setRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "205": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "2",
      "j": "0",
      "k": "2",
      "merged": "false"
    },
    "207": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "2",
      "j": "0",
      "k": "2",
      "merged": "false"
    },
    "209": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "3",
      "j": "0",
      "k": "3",
      "merged": "false"
    },
    "212": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "3",
      "j": "1",
      "k": "4",
      "merged": "false"
    },
    "213": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "3",
      "j": "1",
      "k": "4",
      "merged": "false"
    },
    "218": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "2",
      "k": "6",
      "merged": "false"
    },
    "219": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "2",
      "k": "6",
      "merged": "false"
    },
    "220": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "7",
      "merged": "false"
    },
    "221": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "7",
      "merged": "false"
    },
    "225": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "8",
      "merged": "false"
    },
    "231": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "4",
      "k": "10",
      "merged": "false"
    },
    "233": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "5",
      "k": "11",
      "merged": "false"
    },
    "234": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "5",
      "k": "11",
      "merged": "false"
    },
    "239": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "7",
      "j": "6",
      "k": "13",
      "merged": "false"
    },
    "241": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "6",
      "k": "14",
      "merged": "false"
    },
    "244": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "7",
      "k": "15",
      "merged": "false"
    },
    "245": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "7",
      "k": "15",
      "merged": "false"
    },
    "246": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "7",
      "k": "15",
      "merged": "false"
    },
    "249": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "9",
      "j": "7",
      "k": "16",
      "merged": "false"
    },
    "255": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "9",
      "j": "9",
      "k": "18",
      "merged": "false"
    },
    "257": {
      "stepId": "drainRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "\u2014",
      "j": "9",
      "k": "19",
      "merged": "false"
    },
    "259": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "20",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "260": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "261": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "262": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "263": {
      "stepId": "whileScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "270": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 529,
        "value": "takeLeft"
      },
      {
        "id": 393,
        "value": "initScan"
      },
      {
        "id": 129,
        "value": "drainRight"
      },
      {
        "id": 345,
        "value": "compareMerge"
      },
      {
        "id": 401,
        "value": "setLeft"
      },
      {
        "id": 89,
        "value": "incK"
      },
      {
        "id": 105,
        "value": "compareMerge"
      },
      {
        "id": 9,
        "value": "whileBoth"
      },
      {
        "id": 593,
        "value": "drainRight"
      },
      {
        "id": 193,
        "value": "incK"
      },
      {
        "id": 377,
        "value": "takeRight"
      },
      {
        "id": 617,
        "value": "repeatPass"
      },
      {
        "id": 65,
        "value": "checkHasRight"
      },
      {
        "id": 577,
        "value": "takeRight"
      },
      {
        "id": 49,
        "value": "setLeft"
      },
      {
        "id": 161,
        "value": "extendRight"
      },
      {
        "id": 545,
        "value": "incK"
      },
      {
        "id": 329,
        "value": "takeRight"
      },
      {
        "id": 169,
        "value": "callMerge"
      },
      {
        "id": 137,
        "value": "setMergedTrue"
      },
      {
        "id": 289,
        "value": "compareMerge"
      },
      {
        "id": 457,
        "value": "compareMerge"
      },
      {
        "id": 473,
        "value": "compareMerge"
      },
      {
        "id": 609,
        "value": "checkUntil"
      },
      {
        "id": 217,
        "value": "takeRight"
      },
      {
        "id": 201,
        "value": "checkHasRight"
      },
      {
        "id": 273,
        "value": "takeLeft"
      },
      {
        "id": 449,
        "value": "compareMerge"
      },
      {
        "id": 297,
        "value": "setMid"
      },
      {
        "id": 81,
        "value": "whileBoth"
      },
      {
        "id": 465,
        "value": "takeRight"
      },
      {
        "id": 1,
        "value": "initScan"
      },
      {
        "id": 97,
        "value": "incK"
      },
      {
        "id": 561,
        "value": "compareMerge"
      },
      {
        "id": 489,
        "value": "incK"
      },
      {
        "id": 33,
        "value": "takeRight"
      },
      {
        "id": 369,
        "value": "compareMerge"
      },
      {
        "id": 513,
        "value": "takeRight"
      },
      {
        "id": 481,
        "value": "takeRight"
      },
      {
        "id": 121,
        "value": "incK"
      },
      {
        "id": 313,
        "value": "compareMerge"
      },
      {
        "id": 409,
        "value": "advancePastMid"
      },
      {
        "id": 209,
        "value": "setRight"
      },
      {
        "id": 505,
        "value": "takeLeft"
      },
      {
        "id": 57,
        "value": "setMid"
      },
      {
        "id": 441,
        "value": "takeLeft"
      },
      {
        "id": 361,
        "value": "incK"
      },
      {
        "id": 145,
        "value": "advancePastMid"
      },
      {
        "id": 17,
        "value": "takeLeft"
      },
      {
        "id": 433,
        "value": "incK"
      },
      {
        "id": 249,
        "value": "compareMerge"
      },
      {
        "id": 257,
        "value": "takeRight"
      },
      {
        "id": 417,
        "value": "checkHasRight"
      },
      {
        "id": 25,
        "value": "incK"
      },
      {
        "id": 41,
        "value": "drainRight"
      },
      {
        "id": 225,
        "value": "initScan"
      },
      {
        "id": 337,
        "value": "compareMerge"
      },
      {
        "id": 321,
        "value": "takeRight"
      },
      {
        "id": 521,
        "value": "compareMerge"
      },
      {
        "id": 241,
        "value": "checkHasRight"
      },
      {
        "id": 385,
        "value": "repeatPass"
      },
      {
        "id": 425,
        "value": "setRight"
      },
      {
        "id": 537,
        "value": "compareMerge"
      },
      {
        "id": 553,
        "value": "incK"
      },
      {
        "id": 153,
        "value": "checkHasRight"
      },
      {
        "id": 305,
        "value": "checkHasRight"
      },
      {
        "id": 281,
        "value": "incK"
      },
      {
        "id": 633,
        "value": "whileScan"
      },
      {
        "id": 113,
        "value": "takeLeft"
      },
      {
        "id": 233,
        "value": "setLeft"
      },
      {
        "id": 73,
        "value": "callMerge"
      },
      {
        "id": 497,
        "value": "compareMerge"
      },
      {
        "id": 601,
        "value": "advanceAfterMerge"
      },
      {
        "id": 353,
        "value": "takeRight"
      },
      {
        "id": 569,
        "value": "takeLeft"
      },
      {
        "id": 641,
        "value": "checkUntil"
      },
      {
        "id": 585,
        "value": "takeLeft"
      },
      {
        "id": 265,
        "value": "incK"
      },
      {
        "id": 177,
        "value": "takeLeft"
      },
      {
        "id": 625,
        "value": "initScan"
      },
      {
        "id": 185,
        "value": "incK"
      }
    ],
    "left": [
      {
        "id": 218,
        "value": "15"
      },
      {
        "id": 482,
        "value": "0"
      },
      {
        "id": 210,
        "value": "15"
      },
      {
        "id": 162,
        "value": "10"
      },
      {
        "id": 474,
        "value": "0"
      },
      {
        "id": 322,
        "value": "10"
      },
      {
        "id": 98,
        "value": "6"
      },
      {
        "id": 466,
        "value": "0"
      },
      {
        "id": 402,
        "value": "0"
      },
      {
        "id": 426,
        "value": "0"
      },
      {
        "id": 250,
        "value": "0"
      },
      {
        "id": 298,
        "value": "10"
      },
      {
        "id": 594,
        "value": "0"
      },
      {
        "id": 114,
        "value": "6"
      },
      {
        "id": 458,
        "value": "0"
      },
      {
        "id": 130,
        "value": "6"
      },
      {
        "id": 586,
        "value": "0"
      },
      {
        "id": 346,
        "value": "10"
      },
      {
        "id": 562,
        "value": "0"
      },
      {
        "id": 186,
        "value": "10"
      },
      {
        "id": 194,
        "value": "10"
      },
      {
        "id": 2,
        "value": "\u2014"
      },
      {
        "id": 362,
        "value": "10"
      },
      {
        "id": 82,
        "value": "6"
      },
      {
        "id": 570,
        "value": "0"
      },
      {
        "id": 170,
        "value": "10"
      },
      {
        "id": 154,
        "value": "10"
      },
      {
        "id": 258,
        "value": "0"
      },
      {
        "id": 50,
        "value": "6"
      },
      {
        "id": 554,
        "value": "0"
      },
      {
        "id": 242,
        "value": "0"
      },
      {
        "id": 538,
        "value": "0"
      },
      {
        "id": 146,
        "value": "10"
      },
      {
        "id": 618,
        "value": "\u2014"
      },
      {
        "id": 90,
        "value": "6"
      },
      {
        "id": 498,
        "value": "0"
      },
      {
        "id": 330,
        "value": "10"
      },
      {
        "id": 178,
        "value": "10"
      },
      {
        "id": 514,
        "value": "0"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 522,
        "value": "0"
      },
      {
        "id": 274,
        "value": "0"
      },
      {
        "id": 266,
        "value": "0"
      },
      {
        "id": 442,
        "value": "0"
      },
      {
        "id": 434,
        "value": "0"
      },
      {
        "id": 226,
        "value": "\u2014"
      },
      {
        "id": 66,
        "value": "6"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 530,
        "value": "0"
      },
      {
        "id": 378,
        "value": "10"
      },
      {
        "id": 450,
        "value": "0"
      },
      {
        "id": 410,
        "value": "0"
      },
      {
        "id": 386,
        "value": "\u2014"
      },
      {
        "id": 418,
        "value": "0"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 234,
        "value": "0"
      },
      {
        "id": 306,
        "value": "10"
      },
      {
        "id": 354,
        "value": "10"
      },
      {
        "id": 610,
        "value": "\u2014"
      },
      {
        "id": 634,
        "value": "\u2014"
      },
      {
        "id": 74,
        "value": "6"
      },
      {
        "id": 138,
        "value": "6"
      },
      {
        "id": 642,
        "value": "\u2014"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 370,
        "value": "10"
      },
      {
        "id": 122,
        "value": "6"
      },
      {
        "id": 290,
        "value": "0"
      },
      {
        "id": 578,
        "value": "0"
      },
      {
        "id": 338,
        "value": "10"
      },
      {
        "id": 546,
        "value": "0"
      },
      {
        "id": 282,
        "value": "0"
      },
      {
        "id": 602,
        "value": "\u2014"
      },
      {
        "id": 626,
        "value": "\u2014"
      },
      {
        "id": 58,
        "value": "6"
      },
      {
        "id": 506,
        "value": "0"
      },
      {
        "id": 202,
        "value": "15"
      },
      {
        "id": 314,
        "value": "10"
      },
      {
        "id": 394,
        "value": "\u2014"
      },
      {
        "id": 490,
        "value": "0"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 106,
        "value": "6"
      }
    ],
    "mid": [
      {
        "id": 107,
        "value": "6"
      },
      {
        "id": 411,
        "value": "9"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 579,
        "value": "9"
      },
      {
        "id": 19,
        "value": "2"
      },
      {
        "id": 99,
        "value": "6"
      },
      {
        "id": 251,
        "value": "5"
      },
      {
        "id": 395,
        "value": "\u2014"
      },
      {
        "id": 51,
        "value": "\u2014"
      },
      {
        "id": 155,
        "value": "13"
      },
      {
        "id": 467,
        "value": "9"
      },
      {
        "id": 11,
        "value": "2"
      },
      {
        "id": 363,
        "value": "14"
      },
      {
        "id": 595,
        "value": "9"
      },
      {
        "id": 227,
        "value": "\u2014"
      },
      {
        "id": 299,
        "value": "14"
      },
      {
        "id": 75,
        "value": "6"
      },
      {
        "id": 115,
        "value": "6"
      },
      {
        "id": 219,
        "value": "17"
      },
      {
        "id": 163,
        "value": "13"
      },
      {
        "id": 475,
        "value": "9"
      },
      {
        "id": 419,
        "value": "9"
      },
      {
        "id": 635,
        "value": "\u2014"
      },
      {
        "id": 627,
        "value": "\u2014"
      },
      {
        "id": 459,
        "value": "9"
      },
      {
        "id": 307,
        "value": "14"
      },
      {
        "id": 43,
        "value": "2"
      },
      {
        "id": 275,
        "value": "5"
      },
      {
        "id": 491,
        "value": "9"
      },
      {
        "id": 291,
        "value": "5"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 331,
        "value": "14"
      },
      {
        "id": 347,
        "value": "14"
      },
      {
        "id": 259,
        "value": "5"
      },
      {
        "id": 59,
        "value": "6"
      },
      {
        "id": 339,
        "value": "14"
      },
      {
        "id": 243,
        "value": "5"
      },
      {
        "id": 499,
        "value": "9"
      },
      {
        "id": 283,
        "value": "5"
      },
      {
        "id": 35,
        "value": "2"
      },
      {
        "id": 139,
        "value": "6"
      },
      {
        "id": 523,
        "value": "9"
      },
      {
        "id": 531,
        "value": "9"
      },
      {
        "id": 83,
        "value": "6"
      },
      {
        "id": 323,
        "value": "14"
      },
      {
        "id": 123,
        "value": "6"
      },
      {
        "id": 507,
        "value": "9"
      },
      {
        "id": 179,
        "value": "13"
      },
      {
        "id": 203,
        "value": "17"
      },
      {
        "id": 483,
        "value": "9"
      },
      {
        "id": 195,
        "value": "13"
      },
      {
        "id": 355,
        "value": "14"
      },
      {
        "id": 555,
        "value": "9"
      },
      {
        "id": 571,
        "value": "9"
      },
      {
        "id": 315,
        "value": "14"
      },
      {
        "id": 387,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "6"
      },
      {
        "id": 403,
        "value": "\u2014"
      },
      {
        "id": 443,
        "value": "9"
      },
      {
        "id": 603,
        "value": "\u2014"
      },
      {
        "id": 131,
        "value": "6"
      },
      {
        "id": 267,
        "value": "5"
      },
      {
        "id": 563,
        "value": "9"
      },
      {
        "id": 587,
        "value": "9"
      },
      {
        "id": 171,
        "value": "13"
      },
      {
        "id": 435,
        "value": "9"
      },
      {
        "id": 619,
        "value": "\u2014"
      },
      {
        "id": 515,
        "value": "9"
      },
      {
        "id": 371,
        "value": "14"
      },
      {
        "id": 451,
        "value": "9"
      },
      {
        "id": 427,
        "value": "9"
      },
      {
        "id": 147,
        "value": "13"
      },
      {
        "id": 27,
        "value": "2"
      },
      {
        "id": 187,
        "value": "13"
      },
      {
        "id": 91,
        "value": "6"
      },
      {
        "id": 611,
        "value": "\u2014"
      },
      {
        "id": 539,
        "value": "9"
      },
      {
        "id": 211,
        "value": "17"
      },
      {
        "id": 547,
        "value": "9"
      },
      {
        "id": 379,
        "value": "14"
      },
      {
        "id": 643,
        "value": "\u2014"
      }
    ],
    "right": [
      {
        "id": 444,
        "value": "19"
      },
      {
        "id": 492,
        "value": "19"
      },
      {
        "id": 188,
        "value": "14"
      },
      {
        "id": 452,
        "value": "19"
      },
      {
        "id": 44,
        "value": "5"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 620,
        "value": "\u2014"
      },
      {
        "id": 548,
        "value": "19"
      },
      {
        "id": 132,
        "value": "9"
      },
      {
        "id": 476,
        "value": "19"
      },
      {
        "id": 284,
        "value": "9"
      },
      {
        "id": 500,
        "value": "19"
      },
      {
        "id": 628,
        "value": "\u2014"
      },
      {
        "id": 100,
        "value": "9"
      },
      {
        "id": 204,
        "value": "\u2014"
      },
      {
        "id": 212,
        "value": "19"
      },
      {
        "id": 340,
        "value": "19"
      },
      {
        "id": 92,
        "value": "9"
      },
      {
        "id": 428,
        "value": "19"
      },
      {
        "id": 316,
        "value": "19"
      },
      {
        "id": 540,
        "value": "19"
      },
      {
        "id": 348,
        "value": "19"
      },
      {
        "id": 332,
        "value": "19"
      },
      {
        "id": 292,
        "value": "9"
      },
      {
        "id": 244,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "9"
      },
      {
        "id": 140,
        "value": "9"
      },
      {
        "id": 28,
        "value": "5"
      },
      {
        "id": 252,
        "value": "9"
      },
      {
        "id": 364,
        "value": "19"
      },
      {
        "id": 580,
        "value": "19"
      },
      {
        "id": 556,
        "value": "19"
      },
      {
        "id": 572,
        "value": "19"
      },
      {
        "id": 324,
        "value": "19"
      },
      {
        "id": 372,
        "value": "19"
      },
      {
        "id": 636,
        "value": "\u2014"
      },
      {
        "id": 52,
        "value": "\u2014"
      },
      {
        "id": 380,
        "value": "19"
      },
      {
        "id": 148,
        "value": "\u2014"
      },
      {
        "id": 588,
        "value": "19"
      },
      {
        "id": 12,
        "value": "5"
      },
      {
        "id": 36,
        "value": "5"
      },
      {
        "id": 436,
        "value": "19"
      },
      {
        "id": 20,
        "value": "5"
      },
      {
        "id": 116,
        "value": "9"
      },
      {
        "id": 460,
        "value": "19"
      },
      {
        "id": 420,
        "value": "\u2014"
      },
      {
        "id": 468,
        "value": "19"
      },
      {
        "id": 524,
        "value": "19"
      },
      {
        "id": 564,
        "value": "19"
      },
      {
        "id": 156,
        "value": "\u2014"
      },
      {
        "id": 596,
        "value": "19"
      },
      {
        "id": 508,
        "value": "19"
      },
      {
        "id": 68,
        "value": "\u2014"
      },
      {
        "id": 60,
        "value": "\u2014"
      },
      {
        "id": 396,
        "value": "\u2014"
      },
      {
        "id": 604,
        "value": "\u2014"
      },
      {
        "id": 124,
        "value": "9"
      },
      {
        "id": 644,
        "value": "\u2014"
      },
      {
        "id": 228,
        "value": "\u2014"
      },
      {
        "id": 404,
        "value": "\u2014"
      },
      {
        "id": 484,
        "value": "19"
      },
      {
        "id": 388,
        "value": "\u2014"
      },
      {
        "id": 516,
        "value": "19"
      },
      {
        "id": 108,
        "value": "9"
      },
      {
        "id": 164,
        "value": "14"
      },
      {
        "id": 180,
        "value": "14"
      },
      {
        "id": 300,
        "value": "\u2014"
      },
      {
        "id": 196,
        "value": "14"
      },
      {
        "id": 260,
        "value": "9"
      },
      {
        "id": 76,
        "value": "9"
      },
      {
        "id": 412,
        "value": "\u2014"
      },
      {
        "id": 612,
        "value": "\u2014"
      },
      {
        "id": 220,
        "value": "19"
      },
      {
        "id": 308,
        "value": "\u2014"
      },
      {
        "id": 276,
        "value": "9"
      },
      {
        "id": 172,
        "value": "14"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 532,
        "value": "19"
      },
      {
        "id": 268,
        "value": "9"
      },
      {
        "id": 356,
        "value": "19"
      }
    ],
    "i": [
      {
        "id": 381,
        "value": "4"
      },
      {
        "id": 197,
        "value": "2"
      },
      {
        "id": 485,
        "value": "4"
      },
      {
        "id": 237,
        "value": "0"
      },
      {
        "id": 301,
        "value": "14"
      },
      {
        "id": 525,
        "value": "6"
      },
      {
        "id": 557,
        "value": "8"
      },
      {
        "id": 85,
        "value": "0"
      },
      {
        "id": 133,
        "value": "\u2014"
      },
      {
        "id": 141,
        "value": "\u2014"
      },
      {
        "id": 213,
        "value": "19"
      },
      {
        "id": 221,
        "value": "0"
      },
      {
        "id": 45,
        "value": "\u2014"
      },
      {
        "id": 645,
        "value": "\u2014"
      },
      {
        "id": 365,
        "value": "4"
      },
      {
        "id": 93,
        "value": "0"
      },
      {
        "id": 277,
        "value": "3"
      },
      {
        "id": 109,
        "value": "0"
      },
      {
        "id": 173,
        "value": "\u2014"
      },
      {
        "id": 37,
        "value": "1"
      },
      {
        "id": 293,
        "value": "5"
      },
      {
        "id": 245,
        "value": "6"
      },
      {
        "id": 477,
        "value": "4"
      },
      {
        "id": 309,
        "value": "15"
      },
      {
        "id": 509,
        "value": "4"
      },
      {
        "id": 469,
        "value": "3"
      },
      {
        "id": 157,
        "value": "14"
      },
      {
        "id": 29,
        "value": "1"
      },
      {
        "id": 253,
        "value": "0"
      },
      {
        "id": 493,
        "value": "4"
      },
      {
        "id": 317,
        "value": "0"
      },
      {
        "id": 13,
        "value": "0"
      },
      {
        "id": 389,
        "value": "\u2014"
      },
      {
        "id": 21,
        "value": "0"
      },
      {
        "id": 61,
        "value": "6"
      },
      {
        "id": 517,
        "value": "6"
      },
      {
        "id": 413,
        "value": "10"
      },
      {
        "id": 565,
        "value": "8"
      },
      {
        "id": 597,
        "value": "\u2014"
      },
      {
        "id": 589,
        "value": "9"
      },
      {
        "id": 501,
        "value": "4"
      },
      {
        "id": 325,
        "value": "0"
      },
      {
        "id": 437,
        "value": "2"
      },
      {
        "id": 421,
        "value": "10"
      },
      {
        "id": 461,
        "value": "3"
      },
      {
        "id": 357,
        "value": "4"
      },
      {
        "id": 637,
        "value": "0"
      },
      {
        "id": 229,
        "value": "0"
      },
      {
        "id": 69,
        "value": "7"
      },
      {
        "id": 581,
        "value": "9"
      },
      {
        "id": 189,
        "value": "1"
      },
      {
        "id": 445,
        "value": "2"
      },
      {
        "id": 373,
        "value": "4"
      },
      {
        "id": 333,
        "value": "2"
      },
      {
        "id": 165,
        "value": "14"
      },
      {
        "id": 549,
        "value": "8"
      },
      {
        "id": 269,
        "value": "3"
      },
      {
        "id": 341,
        "value": "2"
      },
      {
        "id": 117,
        "value": "0"
      },
      {
        "id": 53,
        "value": "6"
      },
      {
        "id": 181,
        "value": "0"
      },
      {
        "id": 101,
        "value": "0"
      },
      {
        "id": 533,
        "value": "6"
      },
      {
        "id": 5,
        "value": "0"
      },
      {
        "id": 205,
        "value": "18"
      },
      {
        "id": 149,
        "value": "14"
      },
      {
        "id": 125,
        "value": "\u2014"
      },
      {
        "id": 285,
        "value": "4"
      },
      {
        "id": 261,
        "value": "3"
      },
      {
        "id": 405,
        "value": "0"
      },
      {
        "id": 349,
        "value": "4"
      },
      {
        "id": 77,
        "value": "\u2014"
      },
      {
        "id": 453,
        "value": "3"
      },
      {
        "id": 429,
        "value": "19"
      },
      {
        "id": 397,
        "value": "0"
      },
      {
        "id": 613,
        "value": "\u2014"
      },
      {
        "id": 573,
        "value": "8"
      },
      {
        "id": 541,
        "value": "7"
      },
      {
        "id": 629,
        "value": "0"
      },
      {
        "id": 621,
        "value": "\u2014"
      },
      {
        "id": 605,
        "value": "20"
      }
    ],
    "j": [
      {
        "id": 510,
        "value": "4"
      },
      {
        "id": 126,
        "value": "2"
      },
      {
        "id": 198,
        "value": "0"
      },
      {
        "id": 438,
        "value": "0"
      },
      {
        "id": 78,
        "value": "\u2014"
      },
      {
        "id": 486,
        "value": "2"
      },
      {
        "id": 430,
        "value": "\u2014"
      },
      {
        "id": 470,
        "value": "1"
      },
      {
        "id": 174,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 566,
        "value": "7"
      },
      {
        "id": 54,
        "value": "\u2014"
      },
      {
        "id": 550,
        "value": "6"
      },
      {
        "id": 294,
        "value": "3"
      },
      {
        "id": 62,
        "value": "\u2014"
      },
      {
        "id": 462,
        "value": "1"
      },
      {
        "id": 558,
        "value": "7"
      },
      {
        "id": 454,
        "value": "0"
      },
      {
        "id": 366,
        "value": "4"
      },
      {
        "id": 278,
        "value": "2"
      },
      {
        "id": 446,
        "value": "0"
      },
      {
        "id": 614,
        "value": "\u2014"
      },
      {
        "id": 342,
        "value": "3"
      },
      {
        "id": 358,
        "value": "3"
      },
      {
        "id": 422,
        "value": "\u2014"
      },
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 286,
        "value": "2"
      },
      {
        "id": 262,
        "value": "1"
      },
      {
        "id": 374,
        "value": "4"
      },
      {
        "id": 310,
        "value": "\u2014"
      },
      {
        "id": 630,
        "value": "\u2014"
      },
      {
        "id": 254,
        "value": "0"
      },
      {
        "id": 390,
        "value": "\u2014"
      },
      {
        "id": 86,
        "value": "0"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 246,
        "value": "\u2014"
      },
      {
        "id": 190,
        "value": "0"
      },
      {
        "id": 350,
        "value": "3"
      },
      {
        "id": 302,
        "value": "\u2014"
      },
      {
        "id": 102,
        "value": "2"
      },
      {
        "id": 334,
        "value": "2"
      },
      {
        "id": 526,
        "value": "5"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 318,
        "value": "0"
      },
      {
        "id": 134,
        "value": "2"
      },
      {
        "id": 542,
        "value": "6"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 94,
        "value": "1"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 590,
        "value": "9"
      },
      {
        "id": 606,
        "value": "\u2014"
      },
      {
        "id": 646,
        "value": "\u2014"
      },
      {
        "id": 582,
        "value": "7"
      },
      {
        "id": 534,
        "value": "5"
      },
      {
        "id": 158,
        "value": "\u2014"
      },
      {
        "id": 326,
        "value": "0"
      },
      {
        "id": 182,
        "value": "0"
      },
      {
        "id": 574,
        "value": "7"
      },
      {
        "id": 622,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "\u2014"
      },
      {
        "id": 270,
        "value": "2"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 502,
        "value": "3"
      },
      {
        "id": 478,
        "value": "2"
      },
      {
        "id": 398,
        "value": "\u2014"
      },
      {
        "id": 518,
        "value": "4"
      },
      {
        "id": 110,
        "value": "2"
      },
      {
        "id": 214,
        "value": "\u2014"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 142,
        "value": "\u2014"
      },
      {
        "id": 598,
        "value": "9"
      },
      {
        "id": 382,
        "value": "4"
      },
      {
        "id": 118,
        "value": "2"
      },
      {
        "id": 494,
        "value": "3"
      },
      {
        "id": 406,
        "value": "\u2014"
      },
      {
        "id": 150,
        "value": "\u2014"
      },
      {
        "id": 638,
        "value": "\u2014"
      },
      {
        "id": 222,
        "value": "0"
      },
      {
        "id": 414,
        "value": "\u2014"
      },
      {
        "id": 206,
        "value": "\u2014"
      },
      {
        "id": 46,
        "value": "2"
      }
    ],
    "k": [
      {
        "id": 311,
        "value": "\u2014"
      },
      {
        "id": 303,
        "value": "\u2014"
      },
      {
        "id": 415,
        "value": "\u2014"
      },
      {
        "id": 463,
        "value": "4"
      },
      {
        "id": 503,
        "value": "7"
      },
      {
        "id": 263,
        "value": "4"
      },
      {
        "id": 255,
        "value": "0"
      },
      {
        "id": 127,
        "value": "9"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 223,
        "value": "15"
      },
      {
        "id": 55,
        "value": "\u2014"
      },
      {
        "id": 631,
        "value": "\u2014"
      },
      {
        "id": 391,
        "value": "\u2014"
      },
      {
        "id": 399,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 511,
        "value": "8"
      },
      {
        "id": 607,
        "value": "\u2014"
      },
      {
        "id": 15,
        "value": "0"
      },
      {
        "id": 623,
        "value": "\u2014"
      },
      {
        "id": 343,
        "value": "15"
      },
      {
        "id": 487,
        "value": "6"
      },
      {
        "id": 359,
        "value": "17"
      },
      {
        "id": 551,
        "value": "14"
      },
      {
        "id": 31,
        "value": "1"
      },
      {
        "id": 615,
        "value": "\u2014"
      },
      {
        "id": 591,
        "value": "18"
      },
      {
        "id": 231,
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
        "id": 471,
        "value": "4"
      },
      {
        "id": 199,
        "value": "12"
      },
      {
        "id": 367,
        "value": "18"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 455,
        "value": "3"
      },
      {
        "id": 271,
        "value": "5"
      },
      {
        "id": 599,
        "value": "19"
      },
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 247,
        "value": "\u2014"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 527,
        "value": "11"
      },
      {
        "id": 47,
        "value": "5"
      },
      {
        "id": 71,
        "value": "\u2014"
      },
      {
        "id": 287,
        "value": "6"
      },
      {
        "id": 207,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 279,
        "value": "5"
      },
      {
        "id": 183,
        "value": "10"
      },
      {
        "id": 95,
        "value": "7"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 519,
        "value": "10"
      },
      {
        "id": 439,
        "value": "2"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "9"
      },
      {
        "id": 567,
        "value": "15"
      },
      {
        "id": 535,
        "value": "11"
      },
      {
        "id": 375,
        "value": "18"
      },
      {
        "id": 111,
        "value": "8"
      },
      {
        "id": 543,
        "value": "13"
      },
      {
        "id": 327,
        "value": "10"
      },
      {
        "id": 407,
        "value": "\u2014"
      },
      {
        "id": 431,
        "value": "\u2014"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "8"
      },
      {
        "id": 191,
        "value": "11"
      },
      {
        "id": 639,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "6"
      },
      {
        "id": 103,
        "value": "8"
      },
      {
        "id": 319,
        "value": "10"
      },
      {
        "id": 295,
        "value": "8"
      },
      {
        "id": 583,
        "value": "16"
      },
      {
        "id": 575,
        "value": "15"
      },
      {
        "id": 647,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "1"
      },
      {
        "id": 447,
        "value": "2"
      },
      {
        "id": 495,
        "value": "7"
      },
      {
        "id": 335,
        "value": "14"
      },
      {
        "id": 479,
        "value": "6"
      },
      {
        "id": 423,
        "value": "\u2014"
      },
      {
        "id": 351,
        "value": "17"
      },
      {
        "id": 559,
        "value": "15"
      }
    ],
    "merged": [
      {
        "id": 648,
        "value": "false"
      },
      {
        "id": 424,
        "value": "false"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 488,
        "value": "false"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 168,
        "value": "true"
      },
      {
        "id": 72,
        "value": "true"
      },
      {
        "id": 512,
        "value": "false"
      },
      {
        "id": 320,
        "value": "true"
      },
      {
        "id": 336,
        "value": "true"
      },
      {
        "id": 464,
        "value": "false"
      },
      {
        "id": 568,
        "value": "false"
      },
      {
        "id": 440,
        "value": "false"
      },
      {
        "id": 608,
        "value": "true"
      },
      {
        "id": 352,
        "value": "true"
      },
      {
        "id": 192,
        "value": "true"
      },
      {
        "id": 640,
        "value": "false"
      },
      {
        "id": 232,
        "value": "false"
      },
      {
        "id": 408,
        "value": "false"
      },
      {
        "id": 392,
        "value": "\u2014"
      },
      {
        "id": 384,
        "value": "true"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 560,
        "value": "false"
      },
      {
        "id": 400,
        "value": "false"
      },
      {
        "id": 552,
        "value": "false"
      },
      {
        "id": 368,
        "value": "true"
      },
      {
        "id": 272,
        "value": "false"
      },
      {
        "id": 432,
        "value": "false"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 216,
        "value": "true"
      },
      {
        "id": 256,
        "value": "false"
      },
      {
        "id": 328,
        "value": "true"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 600,
        "value": "false"
      },
      {
        "id": 624,
        "value": "\u2014"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 576,
        "value": "false"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 248,
        "value": "false"
      },
      {
        "id": 504,
        "value": "false"
      },
      {
        "id": 360,
        "value": "true"
      },
      {
        "id": 416,
        "value": "false"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 264,
        "value": "false"
      },
      {
        "id": 528,
        "value": "false"
      },
      {
        "id": 48,
        "value": "false"
      },
      {
        "id": 536,
        "value": "false"
      },
      {
        "id": 288,
        "value": "false"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 616,
        "value": "true"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 304,
        "value": "true"
      },
      {
        "id": 544,
        "value": "false"
      },
      {
        "id": 312,
        "value": "true"
      },
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 32,
        "value": "false"
      },
      {
        "id": 632,
        "value": "false"
      },
      {
        "id": 456,
        "value": "false"
      },
      {
        "id": 376,
        "value": "true"
      },
      {
        "id": 344,
        "value": "true"
      },
      {
        "id": 40,
        "value": "false"
      },
      {
        "id": 592,
        "value": "false"
      },
      {
        "id": 240,
        "value": "false"
      },
      {
        "id": 24,
        "value": "false"
      },
      {
        "id": 448,
        "value": "false"
      },
      {
        "id": 280,
        "value": "false"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 584,
        "value": "false"
      },
      {
        "id": 224,
        "value": "true"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 80,
        "value": "true"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 296,
        "value": "false"
      },
      {
        "id": 496,
        "value": "false"
      },
      {
        "id": 472,
        "value": "false"
      },
      {
        "id": 112,
        "value": "true"
      },
      {
        "id": 520,
        "value": "false"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 480,
        "value": "false"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "repeatPass",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
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
      "stepId": "initScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 3,
      "stepId": "whileScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "setLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "extendLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "checkHasRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "extendRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 3,
      "i": 3,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 15,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 16,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 17,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 18,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
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
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        19,
        48,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 20,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
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
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
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
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
        194,
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
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        194,
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
      "step": 24,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        194,
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
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        194,
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
      "step": 26,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        194,
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
      "step": 27,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        194,
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
      "step": 28,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": 2,
      "j": 2,
      "k": 4,
      "merged": false,
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
      "step": 29,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": null,
      "j": 2,
      "k": 5,
      "merged": false,
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
      "step": 30,
      "stepId": "drainRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": null,
      "j": 2,
      "k": 5,
      "merged": false,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 31,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 32,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 33,
      "stepId": "setLeft",
      "n": 20,
      "left": 6,
      "mid": null,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 34,
      "stepId": "extendLeft",
      "n": 20,
      "left": 6,
      "mid": null,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 35,
      "stepId": "setMid",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 36,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 37,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 38,
      "stepId": "extendRight",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 39,
      "stepId": "setRight",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 40,
      "stepId": "callMerge",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 41,
      "stepId": "copyRuns",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 42,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
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
      "step": 43,
      "stepId": "whileBoth",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 44,
      "stepId": "compareMerge",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
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
      "step": 45,
      "stepId": "takeRight",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
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
      "stepId": "incK",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 47,
      "stepId": "compareMerge",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
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
      "stepId": "takeRight",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
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
      "stepId": "incK",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 2,
      "k": 8,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 50,
      "stepId": "compareMerge",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 2,
      "k": 8,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 51,
      "stepId": "takeLeft",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": 0,
      "j": 2,
      "k": 8,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 52,
      "stepId": "incK",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": null,
      "j": 2,
      "k": 9,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 53,
      "stepId": "drainRight",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": null,
      "j": 2,
      "k": 9,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 54,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 6,
      "mid": 6,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 55,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "step": 56,
      "stepId": "setLeft",
      "n": 20,
      "left": 10,
      "mid": null,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "extendLeft",
      "n": 20,
      "left": 10,
      "mid": null,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "setMid",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "advancePastMid",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 60,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 61,
      "stepId": "extendRight",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 62,
      "stepId": "setRight",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "callMerge",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 64,
      "stepId": "copyRuns",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "step": 65,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "whileBoth",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "step": 68,
      "stepId": "takeLeft",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 69,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 70,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "takeLeft",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 2,
      "j": 0,
      "k": 12,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 73,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 2,
      "j": 0,
      "k": 12,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
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
      "step": 74,
      "stepId": "takeRight",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 2,
      "j": 0,
      "k": 12,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
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
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 2,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
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
      "step": 76,
      "stepId": "drainLeft",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": 2,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
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
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 10,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 78,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 79,
      "stepId": "setLeft",
      "n": 20,
      "left": 15,
      "mid": null,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 80,
      "stepId": "extendLeft",
      "n": 20,
      "left": 15,
      "mid": null,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 81,
      "stepId": "setMid",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": null,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 82,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": null,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 83,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": null,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 84,
      "stepId": "extendRight",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 18,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 85,
      "stepId": "setRight",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 86,
      "stepId": "callMerge",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 87,
      "stepId": "copyRuns",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 88,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 89,
      "stepId": "whileBoth",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 90,
      "stepId": "compareMerge",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 91,
      "stepId": "takeRight",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        926,
        951,
        112,
        219
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 92,
      "stepId": "incK",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 93,
      "stepId": "compareMerge",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 94,
      "stepId": "takeRight",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        951,
        112,
        219
      ]
    },
    {
      "step": 95,
      "stepId": "incK",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 17,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        951,
        112,
        219
      ]
    },
    {
      "step": 96,
      "stepId": "drainLeft",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 17,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        951,
        112,
        219
      ]
    },
    {
      "step": 97,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 98,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 99,
      "stepId": "checkUntil",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 100,
      "stepId": "repeatPass",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 101,
      "stepId": "initScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 102,
      "stepId": "whileScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 103,
      "stepId": "setLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 104,
      "stepId": "extendLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 105,
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 106,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 107,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 108,
      "stepId": "extendRight",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 109,
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 9,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 110,
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 111,
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 112,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 113,
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 114,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 115,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 116,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 117,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 118,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 119,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 120,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
        194,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 121,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
        55,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 122,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        55,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 123,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        55,
        272,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 124,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 125,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 126,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        500,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 127,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 128,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 3,
      "j": 2,
      "k": 5,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 129,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 3,
      "j": 2,
      "k": 5,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        958,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 130,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 3,
      "j": 2,
      "k": 5,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 131,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 132,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        55,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 133,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 134,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": 2,
      "k": 7,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 135,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": 2,
      "k": 7,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        253,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 136,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": 2,
      "k": 7,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 137,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": 3,
      "k": 8,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 138,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": 3,
      "k": 8,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        652,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 139,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": 3,
      "k": 8,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 140,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": null,
      "k": 9,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 141,
      "stepId": "drainLeft",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": 5,
      "j": null,
      "k": 9,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        890,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 142,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 5,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 143,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 144,
      "stepId": "setLeft",
      "n": 20,
      "left": 10,
      "mid": null,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 145,
      "stepId": "extendLeft",
      "n": 20,
      "left": 10,
      "mid": null,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 146,
      "stepId": "setMid",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 147,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 148,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 149,
      "stepId": "extendRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 15,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 150,
      "stepId": "setRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 151,
      "stepId": "callMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 152,
      "stepId": "copyRuns",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 153,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 154,
      "stepId": "whileBoth",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 155,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        183,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 156,
      "stepId": "takeRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 157,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 158,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        197,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 159,
      "stepId": "takeLeft",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 11,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 160,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 161,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        593,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 162,
      "stepId": "takeLeft",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 163,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 13,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 164,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 13,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        733,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 165,
      "stepId": "takeRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 13,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 166,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 14,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 167,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 14,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        977,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 168,
      "stepId": "takeRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 14,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 169,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 3,
      "k": 15,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        112,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 170,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 3,
      "k": 15,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        112,
        219,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 171,
      "stepId": "takeLeft",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 3,
      "k": 15,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 172,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 3,
      "k": 16,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 173,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 3,
      "k": 16,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        219,
        359,
        926,
        951
      ]
    },
    {
      "step": 174,
      "stepId": "takeLeft",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 3,
      "k": 16,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        359,
        926,
        951
      ]
    },
    {
      "step": 175,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        359,
        926,
        951
      ]
    },
    {
      "step": 176,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        359,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 177,
      "stepId": "takeRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 178,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 179,
      "stepId": "compareMerge",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        926,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 180,
      "stepId": "takeRight",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        951
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 181,
      "stepId": "incK",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": null,
      "k": 19,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        951
      ]
    },
    {
      "step": 182,
      "stepId": "drainLeft",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": null,
      "k": 19,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        951
      ]
    },
    {
      "step": 183,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 184,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 185,
      "stepId": "checkUntil",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 186,
      "stepId": "repeatPass",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 187,
      "stepId": "initScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 188,
      "stepId": "whileScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 189,
      "stepId": "setLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 190,
      "stepId": "extendLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 191,
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 192,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 193,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 194,
      "stepId": "extendRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 195,
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 19,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 196,
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 197,
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 198,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 199,
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 200,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 201,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 202,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 203,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 204,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 205,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 206,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 207,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 2,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 208,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 209,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 210,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 3,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 211,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 212,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        253,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 213,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 214,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 215,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        272,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 216,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 217,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 218,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        500,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 219,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 220,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 221,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        652,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 222,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 223,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 224,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        890,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 225,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 226,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 227,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        958,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 228,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 229,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 230,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
      "merged": false,
      "array": [
        19,
        48,
        55,
        112,
        183,
        194,
        197,
        219,
        253,
        272,
        112,
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 231,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
      "merged": false,
      "array": [
        19,
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
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 232,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
      "merged": false,
      "array": [
        19,
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
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 233,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
      "merged": false,
      "array": [
        19,
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
        183,
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 234,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
      "merged": false,
      "array": [
        19,
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
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 235,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
      "merged": false,
      "array": [
        19,
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
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 236,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
      "merged": false,
      "array": [
        19,
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
        197,
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 237,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
      "merged": false,
      "array": [
        19,
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
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 238,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
      "merged": false,
      "array": [
        19,
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
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 239,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
      "merged": false,
      "array": [
        19,
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
        219,
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 240,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
      "merged": false,
      "array": [
        19,
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
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 241,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
      "merged": false,
      "array": [
        19,
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
        359,
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 242,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
      "merged": false,
      "array": [
        19,
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
        359,
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 243,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
      "merged": false,
      "array": [
        19,
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
        593,
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 244,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
      "merged": false,
      "array": [
        19,
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
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 245,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
      "merged": false,
      "array": [
        19,
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
        593,
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 246,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
      "merged": false,
      "array": [
        19,
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
        733,
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 247,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
      "merged": false,
      "array": [
        19,
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
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 248,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
      "merged": false,
      "array": [
        19,
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
        733,
        926,
        951,
        977
      ]
    },
    {
      "step": 249,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
      "merged": false,
      "array": [
        19,
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
        926,
        951,
        977
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 250,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
      "merged": false,
      "array": [
        19,
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
        926,
        951,
        977
      ]
    },
    {
      "step": 251,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
      "merged": false,
      "array": [
        19,
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
        926,
        951,
        977
      ]
    },
    {
      "step": 252,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
      "merged": false,
      "array": [
        19,
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
        951,
        977
      ]
    },
    {
      "step": 253,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
      "merged": false,
      "array": [
        19,
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
        951,
        977
      ]
    },
    {
      "step": 254,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
      "merged": false,
      "array": [
        19,
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
        951,
        977
      ]
    },
    {
      "step": 255,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
      "merged": false,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 256,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": 9,
      "k": 19,
      "merged": false,
      "array": [
        19,
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
      "stepId": "drainRight",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": 9,
      "k": 19,
      "merged": false,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 258,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
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
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 260,
      "stepId": "checkUntil",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 261,
      "stepId": "repeatPass",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 262,
      "stepId": "initScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 263,
      "stepId": "whileScan",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
      }
    },
    {
      "step": 264,
      "stepId": "setLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
      "stepId": "extendLeft",
      "n": 20,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 19,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
      "stepId": "checkHasRight",
      "n": 20,
      "left": 0,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
      "step": 269,
      "stepId": "breakOddRun",
      "n": 20,
      "left": 0,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
      "stepId": "checkUntil",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        19,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true,
        "merged": true
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
