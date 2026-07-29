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
    4,
    7,
    9,
    20,
    22,
    23,
    24,
    28,
    29,
    31,
    36,
    37,
    42,
    47,
    52,
    54,
    57,
    58,
    59,
    62,
    64,
    65,
    67,
    71,
    73,
    77,
    82,
    83,
    87,
    91,
    92,
    99,
    101,
    111,
    112,
    113,
    120,
    124,
    129,
    135,
    140,
    143,
    147,
    149,
    151,
    155,
    160,
    161,
    163,
    166,
    170,
    178,
    180,
    184,
    186,
    187,
    196,
    197,
    200,
    206,
    215,
    218,
    222,
    224,
    227,
    229,
    233,
    235,
    236,
    237,
    239,
    242,
    243,
    245,
    253,
    254,
    255,
    262,
    265,
    273,
    275,
    278,
    279
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
    "4": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "7": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "0",
      "right": "\u2014",
      "i": "1",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "9": {
      "stepId": "extendRight",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "1",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "20": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "2",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "22": {
      "stepId": "extendLeft",
      "left": "2",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "2",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "23": {
      "stepId": "setMid",
      "left": "2",
      "mid": "2",
      "right": "\u2014",
      "i": "2",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "24": {
      "stepId": "advancePastMid",
      "left": "2",
      "mid": "2",
      "right": "\u2014",
      "i": "3",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "28": {
      "stepId": "callMerge",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "29": {
      "stepId": "copyRuns",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "31": {
      "stepId": "whileBoth",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "2",
      "merged": "true"
    },
    "36": {
      "stepId": "setMergedTrue",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "37": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "42": {
      "stepId": "checkHasRight",
      "left": "4",
      "mid": "5",
      "right": "\u2014",
      "i": "6",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "47": {
      "stepId": "initMergePointers",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "4",
      "merged": "true"
    },
    "52": {
      "stepId": "compareMerge",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "1",
      "j": "0",
      "k": "5",
      "merged": "true"
    },
    "54": {
      "stepId": "incK",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "1",
      "j": "\u2014",
      "k": "6",
      "merged": "true"
    },
    "57": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "58": {
      "stepId": "setLeft",
      "left": "7",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "59": {
      "stepId": "extendLeft",
      "left": "7",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "62": {
      "stepId": "checkHasRight",
      "left": "7",
      "mid": "7",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "64": {
      "stepId": "setRight",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "65": {
      "stepId": "callMerge",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "67": {
      "stepId": "initMergePointers",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "0",
      "j": "0",
      "k": "7",
      "merged": "true"
    },
    "71": {
      "stepId": "incK",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "0",
      "j": "\u2014",
      "k": "8",
      "merged": "true"
    },
    "73": {
      "stepId": "setMergedTrue",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "77": {
      "stepId": "setMid",
      "left": "9",
      "mid": "9",
      "right": "\u2014",
      "i": "9",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "82": {
      "stepId": "callMerge",
      "left": "9",
      "mid": "9",
      "right": "10",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "83": {
      "stepId": "copyRuns",
      "left": "9",
      "mid": "9",
      "right": "10",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "87": {
      "stepId": "takeRight",
      "left": "9",
      "mid": "9",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "9",
      "merged": "true"
    },
    "91": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "92": {
      "stepId": "setLeft",
      "left": "11",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "99": {
      "stepId": "callMerge",
      "left": "11",
      "mid": "11",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "101": {
      "stepId": "initMergePointers",
      "left": "11",
      "mid": "11",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "111": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "112": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "113": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "120": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "1",
      "right": "\u2014",
      "i": "2",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "124": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "129": {
      "stepId": "incK",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "135": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "140": {
      "stepId": "checkHasRight",
      "left": "4",
      "mid": "6",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "143": {
      "stepId": "callMerge",
      "left": "4",
      "mid": "6",
      "right": "8",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "147": {
      "stepId": "compareMerge",
      "left": "4",
      "mid": "6",
      "right": "8",
      "i": "0",
      "j": "0",
      "k": "4",
      "merged": "true"
    },
    "149": {
      "stepId": "incK",
      "left": "4",
      "mid": "6",
      "right": "8",
      "i": "1",
      "j": "0",
      "k": "5",
      "merged": "true"
    },
    "151": {
      "stepId": "takeRight",
      "left": "4",
      "mid": "6",
      "right": "8",
      "i": "1",
      "j": "0",
      "k": "5",
      "merged": "true"
    },
    "155": {
      "stepId": "incK",
      "left": "4",
      "mid": "6",
      "right": "8",
      "i": "1",
      "j": "\u2014",
      "k": "7",
      "merged": "true"
    },
    "160": {
      "stepId": "extendLeft",
      "left": "9",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "9",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "161": {
      "stepId": "setMid",
      "left": "9",
      "mid": "10",
      "right": "\u2014",
      "i": "10",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "163": {
      "stepId": "checkHasRight",
      "left": "9",
      "mid": "10",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "166": {
      "stepId": "callMerge",
      "left": "9",
      "mid": "10",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "170": {
      "stepId": "compareMerge",
      "left": "9",
      "mid": "10",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "9",
      "merged": "true"
    },
    "178": {
      "stepId": "incK",
      "left": "9",
      "mid": "10",
      "right": "13",
      "i": "1",
      "j": "2",
      "k": "12",
      "merged": "true"
    },
    "180": {
      "stepId": "takeRight",
      "left": "9",
      "mid": "10",
      "right": "13",
      "i": "1",
      "j": "2",
      "k": "12",
      "merged": "true"
    },
    "184": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
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
    "196": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "197": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "200": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "206": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "0",
      "j": "2",
      "k": "2",
      "merged": "false"
    },
    "215": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "2",
      "j": "3",
      "k": "5",
      "merged": "false"
    },
    "218": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "3",
      "j": "3",
      "k": "6",
      "merged": "false"
    },
    "222": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "3",
      "j": "4",
      "k": "7",
      "merged": "false"
    },
    "224": {
      "stepId": "drainRight",
      "left": "0",
      "mid": "3",
      "right": "8",
      "i": "\u2014",
      "j": "4",
      "k": "8",
      "merged": "false"
    },
    "227": {
      "stepId": "setLeft",
      "left": "9",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "9",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "229": {
      "stepId": "setMid",
      "left": "9",
      "mid": "13",
      "right": "\u2014",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "233": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "235": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "236": {
      "stepId": "whileScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "237": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "239": {
      "stepId": "setMid",
      "left": "0",
      "mid": "8",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "242": {
      "stepId": "extendRight",
      "left": "0",
      "mid": "8",
      "right": "9",
      "i": "9",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "243": {
      "stepId": "setRight",
      "left": "0",
      "mid": "8",
      "right": "13",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "245": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "8",
      "right": "13",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "253": {
      "stepId": "incK",
      "left": "0",
      "mid": "8",
      "right": "13",
      "i": "1",
      "j": "1",
      "k": "2",
      "merged": "false"
    },
    "254": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "8",
      "right": "13",
      "i": "1",
      "j": "1",
      "k": "2",
      "merged": "false"
    },
    "255": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "8",
      "right": "13",
      "i": "1",
      "j": "1",
      "k": "2",
      "merged": "false"
    },
    "262": {
      "stepId": "incK",
      "left": "0",
      "mid": "8",
      "right": "13",
      "i": "1",
      "j": "4",
      "k": "5",
      "merged": "false"
    },
    "265": {
      "stepId": "incK",
      "left": "0",
      "mid": "8",
      "right": "13",
      "i": "1",
      "j": "\u2014",
      "k": "6",
      "merged": "false"
    },
    "273": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "275": {
      "stepId": "setMid",
      "left": "0",
      "mid": "13",
      "right": "\u2014",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "278": {
      "stepId": "breakOddRun",
      "left": "0",
      "mid": "13",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "279": {
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
        "id": 449,
        "value": "initScan"
      },
      {
        "id": 577,
        "value": "extendRight"
      },
      {
        "id": 201,
        "value": "setMergedTrue"
      },
      {
        "id": 177,
        "value": "callMerge"
      },
      {
        "id": 497,
        "value": "compareMerge"
      },
      {
        "id": 537,
        "value": "checkUntil"
      },
      {
        "id": 153,
        "value": "extendLeft"
      },
      {
        "id": 601,
        "value": "incK"
      },
      {
        "id": 137,
        "value": "advanceAfterMerge"
      },
      {
        "id": 65,
        "value": "callMerge"
      },
      {
        "id": 473,
        "value": "compareMerge"
      },
      {
        "id": 249,
        "value": "setLeft"
      },
      {
        "id": 521,
        "value": "setLeft"
      },
      {
        "id": 145,
        "value": "setLeft"
      },
      {
        "id": 401,
        "value": "callMerge"
      },
      {
        "id": 409,
        "value": "compareMerge"
      },
      {
        "id": 337,
        "value": "callMerge"
      },
      {
        "id": 609,
        "value": "compareMerge"
      },
      {
        "id": 297,
        "value": "checkHasRight"
      },
      {
        "id": 225,
        "value": "copyRuns"
      },
      {
        "id": 1,
        "value": "initScan"
      },
      {
        "id": 25,
        "value": "extendRight"
      },
      {
        "id": 441,
        "value": "repeatPass"
      },
      {
        "id": 217,
        "value": "callMerge"
      },
      {
        "id": 641,
        "value": "setLeft"
      },
      {
        "id": 57,
        "value": "advancePastMid"
      },
      {
        "id": 457,
        "value": "callMerge"
      },
      {
        "id": 41,
        "value": "extendLeft"
      },
      {
        "id": 97,
        "value": "advanceAfterMerge"
      },
      {
        "id": 17,
        "value": "advancePastMid"
      },
      {
        "id": 657,
        "value": "breakOddRun"
      },
      {
        "id": 593,
        "value": "copyRuns"
      },
      {
        "id": 465,
        "value": "copyRuns"
      },
      {
        "id": 625,
        "value": "incK"
      },
      {
        "id": 649,
        "value": "setMid"
      },
      {
        "id": 313,
        "value": "incK"
      },
      {
        "id": 529,
        "value": "setMid"
      },
      {
        "id": 113,
        "value": "initMergePointers"
      },
      {
        "id": 121,
        "value": "compareMerge"
      },
      {
        "id": 553,
        "value": "whileScan"
      },
      {
        "id": 265,
        "value": "initMergePointers"
      },
      {
        "id": 185,
        "value": "initMergePointers"
      },
      {
        "id": 489,
        "value": "compareMerge"
      },
      {
        "id": 569,
        "value": "setMid"
      },
      {
        "id": 353,
        "value": "incK"
      },
      {
        "id": 585,
        "value": "setRight"
      },
      {
        "id": 633,
        "value": "incK"
      },
      {
        "id": 329,
        "value": "checkHasRight"
      },
      {
        "id": 241,
        "value": "advanceAfterMerge"
      },
      {
        "id": 305,
        "value": "copyRuns"
      },
      {
        "id": 385,
        "value": "setMid"
      },
      {
        "id": 257,
        "value": "callMerge"
      },
      {
        "id": 345,
        "value": "compareMerge"
      },
      {
        "id": 169,
        "value": "setRight"
      },
      {
        "id": 545,
        "value": "initScan"
      },
      {
        "id": 617,
        "value": "takeRight"
      },
      {
        "id": 129,
        "value": "incK"
      },
      {
        "id": 281,
        "value": "checkUntil"
      },
      {
        "id": 561,
        "value": "setLeft"
      },
      {
        "id": 273,
        "value": "advanceAfterMerge"
      },
      {
        "id": 393,
        "value": "checkHasRight"
      },
      {
        "id": 233,
        "value": "takeRight"
      },
      {
        "id": 369,
        "value": "incK"
      },
      {
        "id": 433,
        "value": "advanceAfterMerge"
      },
      {
        "id": 425,
        "value": "takeRight"
      },
      {
        "id": 665,
        "value": "checkUntil"
      },
      {
        "id": 209,
        "value": "setMid"
      },
      {
        "id": 89,
        "value": "setMergedTrue"
      },
      {
        "id": 321,
        "value": "advanceAfterMerge"
      },
      {
        "id": 193,
        "value": "incK"
      },
      {
        "id": 9,
        "value": "setLeft"
      },
      {
        "id": 513,
        "value": "drainRight"
      },
      {
        "id": 361,
        "value": "takeRight"
      },
      {
        "id": 81,
        "value": "whileBoth"
      },
      {
        "id": 73,
        "value": "copyRuns"
      },
      {
        "id": 289,
        "value": "repeatPass"
      },
      {
        "id": 481,
        "value": "compareMerge"
      },
      {
        "id": 505,
        "value": "takeLeft"
      },
      {
        "id": 49,
        "value": "setMid"
      },
      {
        "id": 417,
        "value": "incK"
      },
      {
        "id": 105,
        "value": "checkHasRight"
      },
      {
        "id": 33,
        "value": "advanceAfterMerge"
      },
      {
        "id": 161,
        "value": "checkHasRight"
      },
      {
        "id": 377,
        "value": "extendLeft"
      }
    ],
    "left": [
      {
        "id": 466,
        "value": "0"
      },
      {
        "id": 554,
        "value": "\u2014"
      },
      {
        "id": 106,
        "value": "4"
      },
      {
        "id": 362,
        "value": "4"
      },
      {
        "id": 642,
        "value": "0"
      },
      {
        "id": 626,
        "value": "0"
      },
      {
        "id": 658,
        "value": "0"
      },
      {
        "id": 282,
        "value": "\u2014"
      },
      {
        "id": 402,
        "value": "9"
      },
      {
        "id": 210,
        "value": "9"
      },
      {
        "id": 242,
        "value": "\u2014"
      },
      {
        "id": 234,
        "value": "9"
      },
      {
        "id": 354,
        "value": "4"
      },
      {
        "id": 314,
        "value": "0"
      },
      {
        "id": 298,
        "value": "0"
      },
      {
        "id": 522,
        "value": "9"
      },
      {
        "id": 146,
        "value": "7"
      },
      {
        "id": 178,
        "value": "7"
      },
      {
        "id": 258,
        "value": "11"
      },
      {
        "id": 74,
        "value": "2"
      },
      {
        "id": 578,
        "value": "0"
      },
      {
        "id": 450,
        "value": "\u2014"
      },
      {
        "id": 194,
        "value": "7"
      },
      {
        "id": 122,
        "value": "4"
      },
      {
        "id": 442,
        "value": "\u2014"
      },
      {
        "id": 266,
        "value": "11"
      },
      {
        "id": 98,
        "value": "\u2014"
      },
      {
        "id": 610,
        "value": "0"
      },
      {
        "id": 346,
        "value": "4"
      },
      {
        "id": 202,
        "value": "7"
      },
      {
        "id": 162,
        "value": "7"
      },
      {
        "id": 370,
        "value": "4"
      },
      {
        "id": 154,
        "value": "7"
      },
      {
        "id": 386,
        "value": "9"
      },
      {
        "id": 410,
        "value": "9"
      },
      {
        "id": 474,
        "value": "0"
      },
      {
        "id": 618,
        "value": "0"
      },
      {
        "id": 426,
        "value": "9"
      },
      {
        "id": 50,
        "value": "2"
      },
      {
        "id": 570,
        "value": "0"
      },
      {
        "id": 602,
        "value": "0"
      },
      {
        "id": 594,
        "value": "0"
      },
      {
        "id": 586,
        "value": "0"
      },
      {
        "id": 138,
        "value": "\u2014"
      },
      {
        "id": 514,
        "value": "0"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 546,
        "value": "\u2014"
      },
      {
        "id": 418,
        "value": "9"
      },
      {
        "id": 218,
        "value": "9"
      },
      {
        "id": 2,
        "value": "\u2014"
      },
      {
        "id": 666,
        "value": "\u2014"
      },
      {
        "id": 378,
        "value": "9"
      },
      {
        "id": 42,
        "value": "2"
      },
      {
        "id": 490,
        "value": "0"
      },
      {
        "id": 458,
        "value": "0"
      },
      {
        "id": 306,
        "value": "0"
      },
      {
        "id": 434,
        "value": "\u2014"
      },
      {
        "id": 186,
        "value": "7"
      },
      {
        "id": 170,
        "value": "7"
      },
      {
        "id": 330,
        "value": "4"
      },
      {
        "id": 226,
        "value": "9"
      },
      {
        "id": 82,
        "value": "2"
      },
      {
        "id": 650,
        "value": "0"
      },
      {
        "id": 250,
        "value": "11"
      },
      {
        "id": 290,
        "value": "\u2014"
      },
      {
        "id": 58,
        "value": "2"
      },
      {
        "id": 90,
        "value": "2"
      },
      {
        "id": 34,
        "value": "\u2014"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 506,
        "value": "0"
      },
      {
        "id": 130,
        "value": "4"
      },
      {
        "id": 538,
        "value": "\u2014"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 114,
        "value": "4"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 482,
        "value": "0"
      },
      {
        "id": 530,
        "value": "9"
      },
      {
        "id": 274,
        "value": "\u2014"
      },
      {
        "id": 498,
        "value": "0"
      },
      {
        "id": 394,
        "value": "9"
      },
      {
        "id": 322,
        "value": "\u2014"
      },
      {
        "id": 338,
        "value": "4"
      },
      {
        "id": 634,
        "value": "0"
      },
      {
        "id": 562,
        "value": "0"
      }
    ],
    "mid": [
      {
        "id": 315,
        "value": "1"
      },
      {
        "id": 35,
        "value": "\u2014"
      },
      {
        "id": 83,
        "value": "2"
      },
      {
        "id": 507,
        "value": "3"
      },
      {
        "id": 491,
        "value": "3"
      },
      {
        "id": 419,
        "value": "10"
      },
      {
        "id": 355,
        "value": "6"
      },
      {
        "id": 339,
        "value": "6"
      },
      {
        "id": 11,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "2"
      },
      {
        "id": 579,
        "value": "8"
      },
      {
        "id": 371,
        "value": "6"
      },
      {
        "id": 379,
        "value": "\u2014"
      },
      {
        "id": 611,
        "value": "8"
      },
      {
        "id": 267,
        "value": "11"
      },
      {
        "id": 531,
        "value": "13"
      },
      {
        "id": 347,
        "value": "6"
      },
      {
        "id": 595,
        "value": "8"
      },
      {
        "id": 131,
        "value": "5"
      },
      {
        "id": 179,
        "value": "7"
      },
      {
        "id": 115,
        "value": "5"
      },
      {
        "id": 203,
        "value": "7"
      },
      {
        "id": 667,
        "value": "\u2014"
      },
      {
        "id": 643,
        "value": "\u2014"
      },
      {
        "id": 555,
        "value": "\u2014"
      },
      {
        "id": 427,
        "value": "10"
      },
      {
        "id": 147,
        "value": "\u2014"
      },
      {
        "id": 523,
        "value": "\u2014"
      },
      {
        "id": 363,
        "value": "6"
      },
      {
        "id": 291,
        "value": "\u2014"
      },
      {
        "id": 171,
        "value": "7"
      },
      {
        "id": 227,
        "value": "9"
      },
      {
        "id": 499,
        "value": "3"
      },
      {
        "id": 59,
        "value": "2"
      },
      {
        "id": 515,
        "value": "3"
      },
      {
        "id": 547,
        "value": "\u2014"
      },
      {
        "id": 19,
        "value": "0"
      },
      {
        "id": 659,
        "value": "13"
      },
      {
        "id": 635,
        "value": "8"
      },
      {
        "id": 195,
        "value": "7"
      },
      {
        "id": 443,
        "value": "\u2014"
      },
      {
        "id": 651,
        "value": "13"
      },
      {
        "id": 435,
        "value": "\u2014"
      },
      {
        "id": 411,
        "value": "10"
      },
      {
        "id": 75,
        "value": "2"
      },
      {
        "id": 563,
        "value": "\u2014"
      },
      {
        "id": 467,
        "value": "3"
      },
      {
        "id": 403,
        "value": "10"
      },
      {
        "id": 27,
        "value": "0"
      },
      {
        "id": 587,
        "value": "8"
      },
      {
        "id": 211,
        "value": "9"
      },
      {
        "id": 163,
        "value": "7"
      },
      {
        "id": 107,
        "value": "5"
      },
      {
        "id": 483,
        "value": "3"
      },
      {
        "id": 51,
        "value": "2"
      },
      {
        "id": 243,
        "value": "\u2014"
      },
      {
        "id": 387,
        "value": "10"
      },
      {
        "id": 275,
        "value": "\u2014"
      },
      {
        "id": 219,
        "value": "9"
      },
      {
        "id": 139,
        "value": "\u2014"
      },
      {
        "id": 259,
        "value": "11"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 475,
        "value": "3"
      },
      {
        "id": 99,
        "value": "\u2014"
      },
      {
        "id": 571,
        "value": "8"
      },
      {
        "id": 539,
        "value": "\u2014"
      },
      {
        "id": 603,
        "value": "8"
      },
      {
        "id": 91,
        "value": "2"
      },
      {
        "id": 627,
        "value": "8"
      },
      {
        "id": 123,
        "value": "5"
      },
      {
        "id": 451,
        "value": "\u2014"
      },
      {
        "id": 459,
        "value": "3"
      },
      {
        "id": 619,
        "value": "8"
      },
      {
        "id": 323,
        "value": "\u2014"
      },
      {
        "id": 43,
        "value": "\u2014"
      },
      {
        "id": 187,
        "value": "7"
      },
      {
        "id": 235,
        "value": "9"
      },
      {
        "id": 251,
        "value": "\u2014"
      },
      {
        "id": 299,
        "value": "1"
      },
      {
        "id": 283,
        "value": "\u2014"
      },
      {
        "id": 155,
        "value": "\u2014"
      },
      {
        "id": 331,
        "value": "6"
      },
      {
        "id": 395,
        "value": "10"
      },
      {
        "id": 307,
        "value": "1"
      }
    ],
    "right": [
      {
        "id": 164,
        "value": "\u2014"
      },
      {
        "id": 668,
        "value": "\u2014"
      },
      {
        "id": 116,
        "value": "6"
      },
      {
        "id": 492,
        "value": "8"
      },
      {
        "id": 68,
        "value": "3"
      },
      {
        "id": 196,
        "value": "8"
      },
      {
        "id": 52,
        "value": "\u2014"
      },
      {
        "id": 132,
        "value": "6"
      },
      {
        "id": 548,
        "value": "\u2014"
      },
      {
        "id": 324,
        "value": "\u2014"
      },
      {
        "id": 372,
        "value": "8"
      },
      {
        "id": 388,
        "value": "\u2014"
      },
      {
        "id": 284,
        "value": "\u2014"
      },
      {
        "id": 556,
        "value": "\u2014"
      },
      {
        "id": 204,
        "value": "8"
      },
      {
        "id": 580,
        "value": "9"
      },
      {
        "id": 460,
        "value": "8"
      },
      {
        "id": 172,
        "value": "8"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 268,
        "value": "13"
      },
      {
        "id": 252,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "1"
      },
      {
        "id": 532,
        "value": "\u2014"
      },
      {
        "id": 540,
        "value": "\u2014"
      },
      {
        "id": 124,
        "value": "6"
      },
      {
        "id": 564,
        "value": "\u2014"
      },
      {
        "id": 628,
        "value": "13"
      },
      {
        "id": 476,
        "value": "8"
      },
      {
        "id": 108,
        "value": "\u2014"
      },
      {
        "id": 660,
        "value": "\u2014"
      },
      {
        "id": 180,
        "value": "8"
      },
      {
        "id": 380,
        "value": "\u2014"
      },
      {
        "id": 516,
        "value": "8"
      },
      {
        "id": 44,
        "value": "\u2014"
      },
      {
        "id": 76,
        "value": "3"
      },
      {
        "id": 508,
        "value": "8"
      },
      {
        "id": 36,
        "value": "\u2014"
      },
      {
        "id": 444,
        "value": "\u2014"
      },
      {
        "id": 188,
        "value": "8"
      },
      {
        "id": 100,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 572,
        "value": "\u2014"
      },
      {
        "id": 156,
        "value": "\u2014"
      },
      {
        "id": 308,
        "value": "3"
      },
      {
        "id": 300,
        "value": "\u2014"
      },
      {
        "id": 212,
        "value": "\u2014"
      },
      {
        "id": 484,
        "value": "8"
      },
      {
        "id": 468,
        "value": "8"
      },
      {
        "id": 292,
        "value": "\u2014"
      },
      {
        "id": 356,
        "value": "8"
      },
      {
        "id": 500,
        "value": "8"
      },
      {
        "id": 92,
        "value": "3"
      },
      {
        "id": 412,
        "value": "13"
      },
      {
        "id": 84,
        "value": "3"
      },
      {
        "id": 596,
        "value": "13"
      },
      {
        "id": 228,
        "value": "10"
      },
      {
        "id": 588,
        "value": "13"
      },
      {
        "id": 12,
        "value": "\u2014"
      },
      {
        "id": 220,
        "value": "10"
      },
      {
        "id": 316,
        "value": "3"
      },
      {
        "id": 428,
        "value": "13"
      },
      {
        "id": 612,
        "value": "13"
      },
      {
        "id": 524,
        "value": "\u2014"
      },
      {
        "id": 260,
        "value": "13"
      },
      {
        "id": 604,
        "value": "13"
      },
      {
        "id": 60,
        "value": "\u2014"
      },
      {
        "id": 340,
        "value": "8"
      },
      {
        "id": 244,
        "value": "\u2014"
      },
      {
        "id": 652,
        "value": "\u2014"
      },
      {
        "id": 396,
        "value": "\u2014"
      },
      {
        "id": 420,
        "value": "13"
      },
      {
        "id": 436,
        "value": "\u2014"
      },
      {
        "id": 236,
        "value": "10"
      },
      {
        "id": 332,
        "value": "\u2014"
      },
      {
        "id": 20,
        "value": "\u2014"
      },
      {
        "id": 348,
        "value": "8"
      },
      {
        "id": 404,
        "value": "13"
      },
      {
        "id": 364,
        "value": "8"
      },
      {
        "id": 452,
        "value": "\u2014"
      },
      {
        "id": 148,
        "value": "\u2014"
      },
      {
        "id": 636,
        "value": "13"
      },
      {
        "id": 276,
        "value": "\u2014"
      },
      {
        "id": 644,
        "value": "\u2014"
      },
      {
        "id": 620,
        "value": "13"
      }
    ],
    "i": [
      {
        "id": 229,
        "value": "\u2014"
      },
      {
        "id": 157,
        "value": "7"
      },
      {
        "id": 637,
        "value": "1"
      },
      {
        "id": 405,
        "value": "\u2014"
      },
      {
        "id": 437,
        "value": "14"
      },
      {
        "id": 613,
        "value": "1"
      },
      {
        "id": 453,
        "value": "0"
      },
      {
        "id": 573,
        "value": "8"
      },
      {
        "id": 77,
        "value": "\u2014"
      },
      {
        "id": 565,
        "value": "0"
      },
      {
        "id": 253,
        "value": "11"
      },
      {
        "id": 133,
        "value": "1"
      },
      {
        "id": 61,
        "value": "3"
      },
      {
        "id": 277,
        "value": "14"
      },
      {
        "id": 293,
        "value": "\u2014"
      },
      {
        "id": 173,
        "value": "8"
      },
      {
        "id": 69,
        "value": "\u2014"
      },
      {
        "id": 509,
        "value": "3"
      },
      {
        "id": 165,
        "value": "8"
      },
      {
        "id": 333,
        "value": "7"
      },
      {
        "id": 365,
        "value": "1"
      },
      {
        "id": 605,
        "value": "1"
      },
      {
        "id": 429,
        "value": "1"
      },
      {
        "id": 477,
        "value": "0"
      },
      {
        "id": 181,
        "value": "\u2014"
      },
      {
        "id": 597,
        "value": "\u2014"
      },
      {
        "id": 501,
        "value": "3"
      },
      {
        "id": 485,
        "value": "0"
      },
      {
        "id": 37,
        "value": "2"
      },
      {
        "id": 373,
        "value": "1"
      },
      {
        "id": 237,
        "value": "0"
      },
      {
        "id": 629,
        "value": "1"
      },
      {
        "id": 341,
        "value": "\u2014"
      },
      {
        "id": 93,
        "value": "\u2014"
      },
      {
        "id": 549,
        "value": "0"
      },
      {
        "id": 381,
        "value": "9"
      },
      {
        "id": 589,
        "value": "13"
      },
      {
        "id": 53,
        "value": "2"
      },
      {
        "id": 653,
        "value": "13"
      },
      {
        "id": 389,
        "value": "10"
      },
      {
        "id": 189,
        "value": "0"
      },
      {
        "id": 125,
        "value": "1"
      },
      {
        "id": 493,
        "value": "2"
      },
      {
        "id": 461,
        "value": "\u2014"
      },
      {
        "id": 45,
        "value": "2"
      },
      {
        "id": 525,
        "value": "9"
      },
      {
        "id": 517,
        "value": "\u2014"
      },
      {
        "id": 109,
        "value": "6"
      },
      {
        "id": 101,
        "value": "4"
      },
      {
        "id": 309,
        "value": "\u2014"
      },
      {
        "id": 397,
        "value": "11"
      },
      {
        "id": 357,
        "value": "1"
      },
      {
        "id": 661,
        "value": "14"
      },
      {
        "id": 541,
        "value": "\u2014"
      },
      {
        "id": 149,
        "value": "7"
      },
      {
        "id": 445,
        "value": "\u2014"
      },
      {
        "id": 533,
        "value": "13"
      },
      {
        "id": 221,
        "value": "\u2014"
      },
      {
        "id": 325,
        "value": "4"
      },
      {
        "id": 197,
        "value": "0"
      },
      {
        "id": 421,
        "value": "1"
      },
      {
        "id": 469,
        "value": "\u2014"
      },
      {
        "id": 285,
        "value": "\u2014"
      },
      {
        "id": 621,
        "value": "1"
      },
      {
        "id": 557,
        "value": "0"
      },
      {
        "id": 117,
        "value": "0"
      },
      {
        "id": 301,
        "value": "2"
      },
      {
        "id": 141,
        "value": "7"
      },
      {
        "id": 269,
        "value": "0"
      },
      {
        "id": 29,
        "value": "1"
      },
      {
        "id": 349,
        "value": "0"
      },
      {
        "id": 261,
        "value": "\u2014"
      },
      {
        "id": 581,
        "value": "9"
      },
      {
        "id": 245,
        "value": "11"
      },
      {
        "id": 669,
        "value": "\u2014"
      },
      {
        "id": 5,
        "value": "0"
      },
      {
        "id": 413,
        "value": "0"
      },
      {
        "id": 645,
        "value": "0"
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
        "id": 21,
        "value": "1"
      },
      {
        "id": 205,
        "value": "\u2014"
      },
      {
        "id": 85,
        "value": "0"
      },
      {
        "id": 213,
        "value": "9"
      }
    ],
    "j": [
      {
        "id": 190,
        "value": "0"
      },
      {
        "id": 318,
        "value": "1"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 286,
        "value": "\u2014"
      },
      {
        "id": 310,
        "value": "\u2014"
      },
      {
        "id": 438,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "\u2014"
      },
      {
        "id": 46,
        "value": "\u2014"
      },
      {
        "id": 374,
        "value": "\u2014"
      },
      {
        "id": 270,
        "value": "0"
      },
      {
        "id": 110,
        "value": "\u2014"
      },
      {
        "id": 454,
        "value": "\u2014"
      },
      {
        "id": 262,
        "value": "\u2014"
      },
      {
        "id": 358,
        "value": "0"
      },
      {
        "id": 174,
        "value": "\u2014"
      },
      {
        "id": 54,
        "value": "\u2014"
      },
      {
        "id": 206,
        "value": "\u2014"
      },
      {
        "id": 302,
        "value": "\u2014"
      },
      {
        "id": 550,
        "value": "\u2014"
      },
      {
        "id": 366,
        "value": "0"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 118,
        "value": "0"
      },
      {
        "id": 494,
        "value": "3"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 214,
        "value": "\u2014"
      },
      {
        "id": 94,
        "value": "\u2014"
      },
      {
        "id": 486,
        "value": "2"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 38,
        "value": "\u2014"
      },
      {
        "id": 350,
        "value": "0"
      },
      {
        "id": 150,
        "value": "\u2014"
      },
      {
        "id": 86,
        "value": "0"
      },
      {
        "id": 238,
        "value": "0"
      },
      {
        "id": 518,
        "value": "4"
      },
      {
        "id": 254,
        "value": "\u2014"
      },
      {
        "id": 598,
        "value": "\u2014"
      },
      {
        "id": 478,
        "value": "0"
      },
      {
        "id": 134,
        "value": "\u2014"
      },
      {
        "id": 398,
        "value": "\u2014"
      },
      {
        "id": 430,
        "value": "2"
      },
      {
        "id": 126,
        "value": "0"
      },
      {
        "id": 102,
        "value": "\u2014"
      },
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 502,
        "value": "3"
      },
      {
        "id": 78,
        "value": "\u2014"
      },
      {
        "id": 614,
        "value": "1"
      },
      {
        "id": 662,
        "value": "\u2014"
      },
      {
        "id": 198,
        "value": "\u2014"
      },
      {
        "id": 542,
        "value": "\u2014"
      },
      {
        "id": 414,
        "value": "0"
      },
      {
        "id": 422,
        "value": "2"
      },
      {
        "id": 22,
        "value": "\u2014"
      },
      {
        "id": 382,
        "value": "\u2014"
      },
      {
        "id": 534,
        "value": "\u2014"
      },
      {
        "id": 246,
        "value": "\u2014"
      },
      {
        "id": 510,
        "value": "4"
      },
      {
        "id": 526,
        "value": "\u2014"
      },
      {
        "id": 470,
        "value": "\u2014"
      },
      {
        "id": 406,
        "value": "\u2014"
      },
      {
        "id": 30,
        "value": "\u2014"
      },
      {
        "id": 326,
        "value": "\u2014"
      },
      {
        "id": 590,
        "value": "\u2014"
      },
      {
        "id": 62,
        "value": "\u2014"
      },
      {
        "id": 646,
        "value": "\u2014"
      },
      {
        "id": 462,
        "value": "\u2014"
      },
      {
        "id": 342,
        "value": "\u2014"
      },
      {
        "id": 670,
        "value": "\u2014"
      },
      {
        "id": 582,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 334,
        "value": "\u2014"
      },
      {
        "id": 606,
        "value": "1"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "\u2014"
      },
      {
        "id": 638,
        "value": "\u2014"
      },
      {
        "id": 654,
        "value": "\u2014"
      },
      {
        "id": 142,
        "value": "\u2014"
      },
      {
        "id": 558,
        "value": "\u2014"
      },
      {
        "id": 574,
        "value": "\u2014"
      },
      {
        "id": 630,
        "value": "4"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 446,
        "value": "\u2014"
      },
      {
        "id": 566,
        "value": "\u2014"
      },
      {
        "id": 390,
        "value": "\u2014"
      },
      {
        "id": 622,
        "value": "1"
      }
    ],
    "k": [
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 655,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 223,
        "value": "\u2014"
      },
      {
        "id": 351,
        "value": "4"
      },
      {
        "id": 663,
        "value": "\u2014"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 551,
        "value": "\u2014"
      },
      {
        "id": 47,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 471,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 591,
        "value": "\u2014"
      },
      {
        "id": 423,
        "value": "12"
      },
      {
        "id": 39,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "\u2014"
      },
      {
        "id": 279,
        "value": "\u2014"
      },
      {
        "id": 15,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "6"
      },
      {
        "id": 519,
        "value": "8"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 527,
        "value": "\u2014"
      },
      {
        "id": 255,
        "value": "\u2014"
      },
      {
        "id": 511,
        "value": "7"
      },
      {
        "id": 295,
        "value": "\u2014"
      },
      {
        "id": 487,
        "value": "2"
      },
      {
        "id": 311,
        "value": "\u2014"
      },
      {
        "id": 31,
        "value": "\u2014"
      },
      {
        "id": 399,
        "value": "\u2014"
      },
      {
        "id": 239,
        "value": "9"
      },
      {
        "id": 623,
        "value": "2"
      },
      {
        "id": 335,
        "value": "\u2014"
      },
      {
        "id": 359,
        "value": "5"
      },
      {
        "id": 367,
        "value": "5"
      },
      {
        "id": 455,
        "value": "\u2014"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 383,
        "value": "\u2014"
      },
      {
        "id": 583,
        "value": "\u2014"
      },
      {
        "id": 327,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "2"
      },
      {
        "id": 319,
        "value": "1"
      },
      {
        "id": 607,
        "value": "2"
      },
      {
        "id": 271,
        "value": "11"
      },
      {
        "id": 503,
        "value": "6"
      },
      {
        "id": 407,
        "value": "\u2014"
      },
      {
        "id": 447,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "\u2014"
      },
      {
        "id": 431,
        "value": "12"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 495,
        "value": "5"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 639,
        "value": "6"
      },
      {
        "id": 647,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "5"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 375,
        "value": "7"
      },
      {
        "id": 599,
        "value": "\u2014"
      },
      {
        "id": 391,
        "value": "\u2014"
      },
      {
        "id": 439,
        "value": "\u2014"
      },
      {
        "id": 183,
        "value": "\u2014"
      },
      {
        "id": 415,
        "value": "9"
      },
      {
        "id": 247,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "4"
      },
      {
        "id": 535,
        "value": "\u2014"
      },
      {
        "id": 343,
        "value": "\u2014"
      },
      {
        "id": 559,
        "value": "\u2014"
      },
      {
        "id": 575,
        "value": "\u2014"
      },
      {
        "id": 567,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "\u2014"
      },
      {
        "id": 303,
        "value": "\u2014"
      },
      {
        "id": 463,
        "value": "\u2014"
      },
      {
        "id": 543,
        "value": "\u2014"
      },
      {
        "id": 615,
        "value": "2"
      },
      {
        "id": 199,
        "value": "8"
      },
      {
        "id": 71,
        "value": "\u2014"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 671,
        "value": "\u2014"
      },
      {
        "id": 479,
        "value": "0"
      },
      {
        "id": 631,
        "value": "5"
      },
      {
        "id": 191,
        "value": "7"
      }
    ],
    "merged": [
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 424,
        "value": "true"
      },
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 48,
        "value": "true"
      },
      {
        "id": 232,
        "value": "true"
      },
      {
        "id": 400,
        "value": "true"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 656,
        "value": "false"
      },
      {
        "id": 272,
        "value": "true"
      },
      {
        "id": 288,
        "value": "true"
      },
      {
        "id": 536,
        "value": "true"
      },
      {
        "id": 488,
        "value": "false"
      },
      {
        "id": 472,
        "value": "false"
      },
      {
        "id": 480,
        "value": "false"
      },
      {
        "id": 192,
        "value": "true"
      },
      {
        "id": 216,
        "value": "true"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 40,
        "value": "true"
      },
      {
        "id": 392,
        "value": "true"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 376,
        "value": "true"
      },
      {
        "id": 416,
        "value": "true"
      },
      {
        "id": 544,
        "value": "true"
      },
      {
        "id": 328,
        "value": "true"
      },
      {
        "id": 240,
        "value": "true"
      },
      {
        "id": 384,
        "value": "true"
      },
      {
        "id": 600,
        "value": "false"
      },
      {
        "id": 32,
        "value": "false"
      },
      {
        "id": 440,
        "value": "true"
      },
      {
        "id": 112,
        "value": "true"
      },
      {
        "id": 624,
        "value": "false"
      },
      {
        "id": 304,
        "value": "false"
      },
      {
        "id": 264,
        "value": "true"
      },
      {
        "id": 352,
        "value": "true"
      },
      {
        "id": 616,
        "value": "false"
      },
      {
        "id": 360,
        "value": "true"
      },
      {
        "id": 344,
        "value": "true"
      },
      {
        "id": 312,
        "value": "false"
      },
      {
        "id": 80,
        "value": "true"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 456,
        "value": "false"
      },
      {
        "id": 320,
        "value": "false"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 592,
        "value": "false"
      },
      {
        "id": 280,
        "value": "true"
      },
      {
        "id": 576,
        "value": "false"
      },
      {
        "id": 464,
        "value": "false"
      },
      {
        "id": 496,
        "value": "false"
      },
      {
        "id": 448,
        "value": "\u2014"
      },
      {
        "id": 560,
        "value": "false"
      },
      {
        "id": 248,
        "value": "true"
      },
      {
        "id": 552,
        "value": "false"
      },
      {
        "id": 256,
        "value": "true"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 672,
        "value": "false"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 72,
        "value": "true"
      },
      {
        "id": 504,
        "value": "false"
      },
      {
        "id": 512,
        "value": "false"
      },
      {
        "id": 224,
        "value": "true"
      },
      {
        "id": 336,
        "value": "true"
      },
      {
        "id": 432,
        "value": "true"
      },
      {
        "id": 528,
        "value": "true"
      },
      {
        "id": 296,
        "value": "\u2014"
      },
      {
        "id": 632,
        "value": "false"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 568,
        "value": "false"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 168,
        "value": "true"
      },
      {
        "id": 408,
        "value": "true"
      },
      {
        "id": 648,
        "value": "false"
      },
      {
        "id": 664,
        "value": "false"
      },
      {
        "id": 608,
        "value": "false"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 640,
        "value": "false"
      },
      {
        "id": 24,
        "value": "false"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 584,
        "value": "false"
      },
      {
        "id": 520,
        "value": "false"
      },
      {
        "id": 368,
        "value": "true"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
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
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 5,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 8,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 10,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 11,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 14,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        883,
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
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        883,
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
      "stepId": "drainLeft",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        883,
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
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 20,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 21,
      "stepId": "setLeft",
      "n": 14,
      "left": 2,
      "mid": null,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 22,
      "stepId": "extendLeft",
      "n": 14,
      "left": 2,
      "mid": null,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 23,
      "stepId": "setMid",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 24,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 25,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 26,
      "stepId": "extendRight",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 27,
      "stepId": "setRight",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 28,
      "stepId": "callMerge",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 29,
      "stepId": "copyRuns",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 30,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
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
      "step": 31,
      "stepId": "whileBoth",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
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
      "step": 32,
      "stepId": "compareMerge",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
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
      "step": 33,
      "stepId": "takeRight",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "merged": true,
      "array": [
        883,
        966,
        537,
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
      "step": 34,
      "stepId": "incK",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 3,
      "merged": true,
      "array": [
        883,
        966,
        537,
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
      "step": 35,
      "stepId": "drainLeft",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 3,
      "merged": true,
      "array": [
        883,
        966,
        537,
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
      "step": 36,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 37,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "stepId": "setLeft",
      "n": 14,
      "left": 4,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 39,
      "stepId": "extendLeft",
      "n": 14,
      "left": 4,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 40,
      "stepId": "setMid",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 41,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 42,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 43,
      "stepId": "extendRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 44,
      "stepId": "setRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 45,
      "stepId": "callMerge",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 46,
      "stepId": "copyRuns",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 47,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 48,
      "stepId": "whileBoth",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 49,
      "stepId": "compareMerge",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 50,
      "stepId": "takeLeft",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 51,
      "stepId": "incK",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "step": 52,
      "stepId": "compareMerge",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
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
      "stepId": "takeRight",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
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
      "step": 54,
      "stepId": "incK",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": null,
      "k": 6,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
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
      "stepId": "drainLeft",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 1,
      "j": null,
      "k": 6,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
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
      "step": 56,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 57,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 58,
      "stepId": "setLeft",
      "n": 14,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 59,
      "stepId": "extendLeft",
      "n": 14,
      "left": 7,
      "mid": null,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "stepId": "setMid",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 61,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 62,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 63,
      "stepId": "extendRight",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 64,
      "stepId": "setRight",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 65,
      "stepId": "callMerge",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 66,
      "stepId": "copyRuns",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 67,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 68,
      "stepId": "whileBoth",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 69,
      "stepId": "compareMerge",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
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
      "step": 70,
      "stepId": "takeRight",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 71,
      "stepId": "incK",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": null,
      "k": 8,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        517,
        394,
        316,
        310,
        67,
        363
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
      "step": 72,
      "stepId": "drainLeft",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": null,
      "k": 8,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        517,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 73,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
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
      "step": 74,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 75,
      "stepId": "setLeft",
      "n": 14,
      "left": 9,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 76,
      "stepId": "extendLeft",
      "n": 14,
      "left": 9,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 77,
      "stepId": "setMid",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
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
      "step": 78,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 79,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 80,
      "stepId": "extendRight",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 81,
      "stepId": "setRight",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 82,
      "stepId": "callMerge",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
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
      "step": 83,
      "stepId": "copyRuns",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
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
      "stepId": "initMergePointers",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 85,
      "stepId": "whileBoth",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 86,
      "stepId": "compareMerge",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        394,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 87,
      "stepId": "takeRight",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        316,
        310,
        67,
        363
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
      "step": 88,
      "stepId": "incK",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": null,
      "k": 10,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 89,
      "stepId": "drainLeft",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": null,
      "k": 10,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        316,
        310,
        67,
        363
      ]
    },
    {
      "step": 90,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 91,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
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
      "stepId": "setLeft",
      "n": 14,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
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
      "step": 93,
      "stepId": "extendLeft",
      "n": 14,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 94,
      "stepId": "setMid",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 95,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 96,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 97,
      "stepId": "extendRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 98,
      "stepId": "setRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 99,
      "stepId": "callMerge",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
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
      "step": 100,
      "stepId": "copyRuns",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 101,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
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
      "stepId": "whileBoth",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 103,
      "stepId": "compareMerge",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        310,
        67,
        363
      ]
    },
    {
      "step": 104,
      "stepId": "takeRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        67,
        363
      ]
    },
    {
      "step": 105,
      "stepId": "incK",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        67,
        363
      ]
    },
    {
      "step": 106,
      "stepId": "compareMerge",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        67,
        363
      ]
    },
    {
      "step": 107,
      "stepId": "takeLeft",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 108,
      "stepId": "incK",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": 1,
      "k": 13,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 109,
      "stepId": "drainRight",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": 1,
      "k": 13,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 110,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 11,
      "mid": 11,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 111,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 112,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 113,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 114,
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 115,
      "stepId": "whileScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 116,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 117,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 118,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 119,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 120,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 121,
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 122,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 3,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 123,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 124,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 125,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 126,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 127,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        883,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 128,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        537,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 129,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        537,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 130,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        537,
        966,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 131,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        537,
        742,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 132,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 2,
      "merged": false,
      "array": [
        537,
        742,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 133,
      "stepId": "drainLeft",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 2,
      "merged": false,
      "array": [
        537,
        742,
        537,
        742,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 134,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 135,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 136,
      "stepId": "setLeft",
      "n": 14,
      "left": 4,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 137,
      "stepId": "extendLeft",
      "n": 14,
      "left": 4,
      "mid": null,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 138,
      "stepId": "setMid",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 139,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 140,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 141,
      "stepId": "extendRight",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 142,
      "stepId": "setRight",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 143,
      "stepId": "callMerge",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 144,
      "stepId": "copyRuns",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 145,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 146,
      "stepId": "whileBoth",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 147,
      "stepId": "compareMerge",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 148,
      "stepId": "takeLeft",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 4,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 149,
      "stepId": "incK",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 150,
      "stepId": "compareMerge",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        890,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 151,
      "stepId": "takeRight",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "step": 152,
      "stepId": "incK",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": 1,
      "k": 6,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 153,
      "stepId": "compareMerge",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": 1,
      "k": 6,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        976,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 154,
      "stepId": "takeRight",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": 1,
      "k": 6,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 155,
      "stepId": "incK",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": null,
      "k": 7,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        517,
        667,
        316,
        394,
        67,
        310,
        363
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
      "stepId": "drainLeft",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": 1,
      "j": null,
      "k": 7,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        517,
        667,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 157,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 4,
      "mid": 6,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 158,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 159,
      "stepId": "setLeft",
      "n": 14,
      "left": 9,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 160,
      "stepId": "extendLeft",
      "n": 14,
      "left": 9,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
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
      "step": 161,
      "stepId": "setMid",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
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
      "step": 162,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 163,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
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
      "step": 164,
      "stepId": "extendRight",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 11,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 165,
      "stepId": "setRight",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 166,
      "stepId": "callMerge",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
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
      "step": 167,
      "stepId": "copyRuns",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 168,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 169,
      "stepId": "whileBoth",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 170,
      "stepId": "compareMerge",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        316,
        394,
        67,
        310,
        363
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
      "stepId": "takeRight",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 9,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 172,
      "stepId": "incK",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 173,
      "stepId": "compareMerge",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        394,
        67,
        310,
        363
      ]
    },
    {
      "step": 174,
      "stepId": "takeRight",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        67,
        310,
        363
      ]
    },
    {
      "step": 175,
      "stepId": "incK",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 2,
      "k": 11,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        67,
        310,
        363
      ]
    },
    {
      "step": 176,
      "stepId": "compareMerge",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 2,
      "k": 11,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        67,
        310,
        363
      ]
    },
    {
      "step": 177,
      "stepId": "takeLeft",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 2,
      "k": 11,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        310,
        363
      ]
    },
    {
      "step": 178,
      "stepId": "incK",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 12,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        310,
        363
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
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 12,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        310,
        363
      ]
    },
    {
      "step": 180,
      "stepId": "takeRight",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 12,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        363
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
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        363
      ]
    },
    {
      "step": 182,
      "stepId": "drainLeft",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        363
      ]
    },
    {
      "step": 183,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 9,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 184,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 185,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 186,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 189,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 190,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 191,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 192,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 193,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 194,
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 4,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 195,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 196,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 197,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 198,
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 199,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 200,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        537,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 201,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        56,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 202,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        56,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 203,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        56,
        742,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 204,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        56,
        517,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 205,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        56,
        517,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 206,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        56,
        517,
        883,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 207,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        56,
        517,
        537,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 208,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        56,
        517,
        537,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 209,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        56,
        517,
        537,
        966,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 210,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 211,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 212,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        56,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 213,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 214,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 215,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        517,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 216,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 217,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 218,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        667,
        890,
        976,
        67,
        310,
        316,
        363,
        394
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
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 220,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 3,
      "j": 4,
      "k": 7,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 221,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 3,
      "j": 4,
      "k": 7,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        890,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 222,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": 3,
      "j": 4,
      "k": 7,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 223,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": null,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 224,
      "stepId": "drainRight",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": null,
      "j": 4,
      "k": 8,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 225,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 3,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 226,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 227,
      "stepId": "setLeft",
      "n": 14,
      "left": 9,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 228,
      "stepId": "extendLeft",
      "n": 14,
      "left": 9,
      "mid": null,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 229,
      "stepId": "setMid",
      "n": 14,
      "left": 9,
      "mid": 13,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 230,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 9,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 231,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 9,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 232,
      "stepId": "breakOddRun",
      "n": 14,
      "left": 9,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 233,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 235,
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 236,
      "stepId": "whileScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 237,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 238,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 239,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 241,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 242,
      "stepId": "extendRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 9,
      "i": 9,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 243,
      "stepId": "setRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 244,
      "stepId": "callMerge",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 245,
      "stepId": "copyRuns",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "stepId": "initMergePointers",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 247,
      "stepId": "whileBoth",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 248,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 249,
      "stepId": "takeLeft",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 250,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 251,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        56,
        517,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 252,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        56,
        67,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 253,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        56,
        67,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 254,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        56,
        67,
        537,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 255,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        56,
        67,
        310,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        56,
        67,
        310,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 257,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        56,
        67,
        310,
        667,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 258,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 259,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 260,
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        742,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 261,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        363,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 262,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 4,
      "k": 5,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        363,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "stepId": "compareMerge",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 4,
      "k": 5,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        363,
        883,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 264,
      "stepId": "takeRight",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": 4,
      "k": 5,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 265,
      "stepId": "incK",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": null,
      "k": 6,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
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
      "step": 266,
      "stepId": "drainLeft",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": 1,
      "j": null,
      "k": 6,
      "merged": false,
      "array": [
        56,
        67,
        310,
        316,
        363,
        394,
        890,
        966,
        976,
        67,
        310,
        316,
        363,
        394
      ]
    },
    {
      "step": 267,
      "stepId": "setMergedTrue",
      "n": 14,
      "left": 0,
      "mid": 8,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 268,
      "stepId": "advanceAfterMerge",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 269,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 270,
      "stepId": "repeatPass",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
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
      "step": 271,
      "stepId": "initScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 272,
      "stepId": "whileScan",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 273,
      "stepId": "setLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 274,
      "stepId": "extendLeft",
      "n": 14,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 275,
      "stepId": "setMid",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 276,
      "stepId": "advancePastMid",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 277,
      "stepId": "checkHasRight",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 278,
      "stepId": "breakOddRun",
      "n": 14,
      "left": 0,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 279,
      "stepId": "checkUntil",
      "n": 14,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
