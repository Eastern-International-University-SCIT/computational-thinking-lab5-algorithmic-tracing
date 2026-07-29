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
    "left",
    "mid",
    "right",
    "i",
    "j",
    "k"
  ],
  "blankFields": [
    "stepId",
    "left",
    "mid",
    "right",
    "i",
    "j",
    "k"
  ],
  "executorGlobal": "MergeSortExecutor",
  "pickedSteps": [
    4,
    15,
    18,
    24,
    27,
    28,
    34,
    36,
    39,
    40,
    43,
    47,
    49,
    52,
    54,
    61,
    63,
    64,
    65,
    67,
    68,
    71,
    73,
    74,
    75,
    80,
    83,
    85,
    89,
    91,
    95,
    96,
    98,
    100,
    102,
    103,
    105,
    112,
    113,
    115,
    117,
    120,
    123,
    129,
    133,
    137,
    138,
    142,
    148,
    149,
    153,
    158,
    161,
    164,
    167,
    172,
    173,
    174,
    179,
    188,
    193,
    196,
    198,
    199,
    201,
    205,
    207,
    208,
    225,
    229,
    232,
    233,
    236,
    238,
    240,
    242,
    247,
    248,
    250,
    262,
    266,
    272
  ],
  "answers": {
    "4": {
      "stepId": "setMid",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "15": {
      "stepId": "checkLeftRight",
      "left": "0",
      "mid": "—",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "18": {
      "stepId": "markRange",
      "left": "0",
      "mid": "—",
      "right": "0",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "24": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "27": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "28": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "34": {
      "stepId": "setMid",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "36": {
      "stepId": "markRange",
      "left": "2",
      "mid": "—",
      "right": "2",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "39": {
      "stepId": "markRange",
      "left": "3",
      "mid": "—",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "40": {
      "stepId": "checkLeftRight",
      "left": "3",
      "mid": "—",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "43": {
      "stepId": "initMergePointers",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "2"
    },
    "47": {
      "stepId": "incK",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "—",
      "j": "0",
      "k": "3"
    },
    "49": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "52": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "54": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "61": {
      "stepId": "incK",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "1",
      "j": "—",
      "k": "3"
    },
    "63": {
      "stepId": "sortRight",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "64": {
      "stepId": "markRange",
      "left": "4",
      "mid": "—",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "65": {
      "stepId": "checkLeftRight",
      "left": "4",
      "mid": "—",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "67": {
      "stepId": "sortLeft",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "68": {
      "stepId": "markRange",
      "left": "4",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "71": {
      "stepId": "sortLeft",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "73": {
      "stepId": "checkLeftRight",
      "left": "4",
      "mid": "—",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "74": {
      "stepId": "sortRight",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "75": {
      "stepId": "markRange",
      "left": "5",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "80": {
      "stepId": "whileBoth",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "4"
    },
    "83": {
      "stepId": "incK",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "—",
      "j": "0",
      "k": "5"
    },
    "85": {
      "stepId": "sortRight",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "89": {
      "stepId": "copyRuns",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "91": {
      "stepId": "whileBoth",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "4"
    },
    "95": {
      "stepId": "drainLeft",
      "left": "4",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "—",
      "k": "5"
    },
    "96": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "98": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "100": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "102": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "103": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "105": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "112": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "3",
      "j": "1",
      "k": "4"
    },
    "113": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "3",
      "j": "1",
      "k": "4"
    },
    "115": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "3",
      "j": "2",
      "k": "5"
    },
    "117": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "6",
      "i": "—",
      "j": "2",
      "k": "6"
    },
    "120": {
      "stepId": "markRange",
      "left": "7",
      "mid": "—",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "123": {
      "stepId": "sortLeft",
      "left": "7",
      "mid": "10",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "129": {
      "stepId": "checkLeftRight",
      "left": "7",
      "mid": "—",
      "right": "8",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "133": {
      "stepId": "checkLeftRight",
      "left": "7",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "137": {
      "stepId": "callMerge",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "138": {
      "stepId": "copyRuns",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "142": {
      "stepId": "takeLeft",
      "left": "7",
      "mid": "7",
      "right": "8",
      "i": "0",
      "j": "0",
      "k": "7"
    },
    "148": {
      "stepId": "setMid",
      "left": "9",
      "mid": "9",
      "right": "10",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "149": {
      "stepId": "sortLeft",
      "left": "9",
      "mid": "9",
      "right": "10",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "153": {
      "stepId": "markRange",
      "left": "10",
      "mid": "—",
      "right": "10",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "158": {
      "stepId": "whileBoth",
      "left": "9",
      "mid": "9",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "9"
    },
    "161": {
      "stepId": "incK",
      "left": "9",
      "mid": "9",
      "right": "10",
      "i": "—",
      "j": "0",
      "k": "10"
    },
    "164": {
      "stepId": "copyRuns",
      "left": "7",
      "mid": "8",
      "right": "10",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "167": {
      "stepId": "compareMerge",
      "left": "7",
      "mid": "8",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "7"
    },
    "172": {
      "stepId": "incK",
      "left": "7",
      "mid": "8",
      "right": "10",
      "i": "1",
      "j": "1",
      "k": "9"
    },
    "173": {
      "stepId": "compareMerge",
      "left": "7",
      "mid": "8",
      "right": "10",
      "i": "1",
      "j": "1",
      "k": "9"
    },
    "174": {
      "stepId": "takeLeft",
      "left": "7",
      "mid": "8",
      "right": "10",
      "i": "1",
      "j": "1",
      "k": "9"
    },
    "179": {
      "stepId": "checkLeftRight",
      "left": "11",
      "mid": "—",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "188": {
      "stepId": "sortRight",
      "left": "11",
      "mid": "11",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "193": {
      "stepId": "initMergePointers",
      "left": "11",
      "mid": "11",
      "right": "12",
      "i": "0",
      "j": "0",
      "k": "11"
    },
    "196": {
      "stepId": "takeRight",
      "left": "11",
      "mid": "11",
      "right": "12",
      "i": "0",
      "j": "0",
      "k": "11"
    },
    "198": {
      "stepId": "drainLeft",
      "left": "11",
      "mid": "11",
      "right": "12",
      "i": "0",
      "j": "—",
      "k": "12"
    },
    "199": {
      "stepId": "sortRight",
      "left": "11",
      "mid": "12",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "201": {
      "stepId": "checkLeftRight",
      "left": "13",
      "mid": "—",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "205": {
      "stepId": "whileBoth",
      "left": "11",
      "mid": "12",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "11"
    },
    "207": {
      "stepId": "takeLeft",
      "left": "11",
      "mid": "12",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "11"
    },
    "208": {
      "stepId": "incK",
      "left": "11",
      "mid": "12",
      "right": "13",
      "i": "1",
      "j": "0",
      "k": "12"
    },
    "225": {
      "stepId": "incK",
      "left": "7",
      "mid": "10",
      "right": "13",
      "i": "2",
      "j": "1",
      "k": "10"
    },
    "229": {
      "stepId": "compareMerge",
      "left": "7",
      "mid": "10",
      "right": "13",
      "i": "2",
      "j": "2",
      "k": "11"
    },
    "232": {
      "stepId": "drainLeft",
      "left": "7",
      "mid": "10",
      "right": "13",
      "i": "2",
      "j": "—",
      "k": "12"
    },
    "233": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "236": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "238": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "240": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "242": {
      "stepId": "incK",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "247": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "2",
      "j": "1",
      "k": "3"
    },
    "248": {
      "stepId": "incK",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "2",
      "j": "2",
      "k": "4"
    },
    "250": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "2",
      "j": "2",
      "k": "4"
    },
    "262": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "5",
      "j": "3",
      "k": "8"
    },
    "266": {
      "stepId": "incK",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "5",
      "j": "5",
      "k": "10"
    },
    "272": {
      "stepId": "incK",
      "left": "0",
      "mid": "6",
      "right": "13",
      "i": "5",
      "j": "—",
      "k": "12"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 288,
        "value": "markRange"
      },
      {
        "id": 400,
        "value": "takeLeft"
      },
      {
        "id": 239,
        "value": "incK"
      },
      {
        "id": 323,
        "value": "copyRuns"
      },
      {
        "id": 155,
        "value": "checkLeftRight"
      },
      {
        "id": 295,
        "value": "sortLeft"
      },
      {
        "id": 393,
        "value": "compareMerge"
      },
      {
        "id": 36,
        "value": "takeRight"
      },
      {
        "id": 78,
        "value": "incK"
      },
      {
        "id": 414,
        "value": "sortRight"
      },
      {
        "id": 169,
        "value": "markRange"
      },
      {
        "id": 540,
        "value": "incK"
      },
      {
        "id": 113,
        "value": "sortRight"
      },
      {
        "id": 204,
        "value": "whileBoth"
      },
      {
        "id": 456,
        "value": "whileBoth"
      },
      {
        "id": 547,
        "value": "takeRight"
      },
      {
        "id": 512,
        "value": "takeRight"
      },
      {
        "id": 316,
        "value": "callMerge"
      },
      {
        "id": 372,
        "value": "copyRuns"
      },
      {
        "id": 85,
        "value": "callMerge"
      },
      {
        "id": 484,
        "value": "compareMerge"
      },
      {
        "id": 183,
        "value": "incK"
      },
      {
        "id": 442,
        "value": "sortRight"
      },
      {
        "id": 8,
        "value": "checkLeftRight"
      },
      {
        "id": 57,
        "value": "markRange"
      },
      {
        "id": 309,
        "value": "checkLeftRight"
      },
      {
        "id": 15,
        "value": "markRange"
      },
      {
        "id": 344,
        "value": "sortLeft"
      },
      {
        "id": 218,
        "value": "callMerge"
      },
      {
        "id": 365,
        "value": "incK"
      },
      {
        "id": 274,
        "value": "compareMerge"
      },
      {
        "id": 148,
        "value": "sortLeft"
      },
      {
        "id": 253,
        "value": "incK"
      },
      {
        "id": 330,
        "value": "takeLeft"
      },
      {
        "id": 190,
        "value": "sortRight"
      },
      {
        "id": 211,
        "value": "drainLeft"
      },
      {
        "id": 505,
        "value": "whileBoth"
      },
      {
        "id": 477,
        "value": "incK"
      },
      {
        "id": 99,
        "value": "takeLeft"
      },
      {
        "id": 463,
        "value": "takeLeft"
      },
      {
        "id": 386,
        "value": "incK"
      },
      {
        "id": 449,
        "value": "checkLeftRight"
      },
      {
        "id": 302,
        "value": "checkLeftRight"
      },
      {
        "id": 351,
        "value": "markRange"
      },
      {
        "id": 176,
        "value": "whileBoth"
      },
      {
        "id": 29,
        "value": "compareMerge"
      },
      {
        "id": 43,
        "value": "setMid"
      },
      {
        "id": 568,
        "value": "incK"
      },
      {
        "id": 554,
        "value": "takeRight"
      },
      {
        "id": 281,
        "value": "incK"
      },
      {
        "id": 162,
        "value": "sortRight"
      },
      {
        "id": 561,
        "value": "incK"
      },
      {
        "id": 358,
        "value": "whileBoth"
      },
      {
        "id": 92,
        "value": "whileBoth"
      },
      {
        "id": 22,
        "value": "copyRuns"
      },
      {
        "id": 260,
        "value": "compareMerge"
      },
      {
        "id": 127,
        "value": "checkLeftRight"
      },
      {
        "id": 225,
        "value": "initMergePointers"
      },
      {
        "id": 533,
        "value": "takeRight"
      },
      {
        "id": 197,
        "value": "copyRuns"
      },
      {
        "id": 106,
        "value": "incK"
      },
      {
        "id": 379,
        "value": "compareMerge"
      },
      {
        "id": 64,
        "value": "checkLeftRight"
      },
      {
        "id": 246,
        "value": "compareMerge"
      },
      {
        "id": 134,
        "value": "sortLeft"
      },
      {
        "id": 428,
        "value": "takeRight"
      },
      {
        "id": 337,
        "value": "setMid"
      },
      {
        "id": 1,
        "value": "setMid"
      },
      {
        "id": 267,
        "value": "takeRight"
      },
      {
        "id": 120,
        "value": "markRange"
      },
      {
        "id": 435,
        "value": "drainLeft"
      },
      {
        "id": 421,
        "value": "initMergePointers"
      },
      {
        "id": 141,
        "value": "markRange"
      },
      {
        "id": 498,
        "value": "callMerge"
      },
      {
        "id": 519,
        "value": "compareMerge"
      },
      {
        "id": 407,
        "value": "checkLeftRight"
      },
      {
        "id": 470,
        "value": "incK"
      },
      {
        "id": 232,
        "value": "compareMerge"
      },
      {
        "id": 50,
        "value": "markRange"
      },
      {
        "id": 491,
        "value": "drainLeft"
      },
      {
        "id": 71,
        "value": "initMergePointers"
      },
      {
        "id": 526,
        "value": "incK"
      }
    ],
    "left": [
      {
        "id": 450,
        "value": "13"
      },
      {
        "id": 345,
        "value": "9"
      },
      {
        "id": 401,
        "value": "7"
      },
      {
        "id": 79,
        "value": "2"
      },
      {
        "id": 555,
        "value": "0"
      },
      {
        "id": 562,
        "value": "0"
      },
      {
        "id": 310,
        "value": "7"
      },
      {
        "id": 520,
        "value": "0"
      },
      {
        "id": 205,
        "value": "4"
      },
      {
        "id": 408,
        "value": "11"
      },
      {
        "id": 317,
        "value": "7"
      },
      {
        "id": 513,
        "value": "0"
      },
      {
        "id": 352,
        "value": "10"
      },
      {
        "id": 212,
        "value": "4"
      },
      {
        "id": 394,
        "value": "7"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 156,
        "value": "4"
      },
      {
        "id": 373,
        "value": "7"
      },
      {
        "id": 135,
        "value": "4"
      },
      {
        "id": 247,
        "value": "0"
      },
      {
        "id": 443,
        "value": "11"
      },
      {
        "id": 58,
        "value": "3"
      },
      {
        "id": 499,
        "value": "0"
      },
      {
        "id": 289,
        "value": "7"
      },
      {
        "id": 324,
        "value": "7"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 177,
        "value": "4"
      },
      {
        "id": 261,
        "value": "0"
      },
      {
        "id": 338,
        "value": "9"
      },
      {
        "id": 303,
        "value": "7"
      },
      {
        "id": 331,
        "value": "7"
      },
      {
        "id": 485,
        "value": "7"
      },
      {
        "id": 457,
        "value": "11"
      },
      {
        "id": 471,
        "value": "11"
      },
      {
        "id": 534,
        "value": "0"
      },
      {
        "id": 422,
        "value": "11"
      },
      {
        "id": 170,
        "value": "5"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 415,
        "value": "11"
      },
      {
        "id": 275,
        "value": "0"
      },
      {
        "id": 569,
        "value": "0"
      },
      {
        "id": 254,
        "value": "0"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 128,
        "value": "4"
      },
      {
        "id": 51,
        "value": "2"
      },
      {
        "id": 86,
        "value": "0"
      },
      {
        "id": 65,
        "value": "3"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 121,
        "value": "4"
      },
      {
        "id": 387,
        "value": "7"
      },
      {
        "id": 149,
        "value": "4"
      },
      {
        "id": 114,
        "value": "0"
      },
      {
        "id": 436,
        "value": "11"
      },
      {
        "id": 163,
        "value": "4"
      },
      {
        "id": 366,
        "value": "9"
      },
      {
        "id": 198,
        "value": "4"
      },
      {
        "id": 506,
        "value": "0"
      },
      {
        "id": 380,
        "value": "7"
      },
      {
        "id": 429,
        "value": "11"
      },
      {
        "id": 359,
        "value": "9"
      },
      {
        "id": 100,
        "value": "0"
      },
      {
        "id": 191,
        "value": "4"
      },
      {
        "id": 541,
        "value": "0"
      },
      {
        "id": 268,
        "value": "0"
      },
      {
        "id": 44,
        "value": "2"
      },
      {
        "id": 240,
        "value": "0"
      },
      {
        "id": 478,
        "value": "7"
      },
      {
        "id": 548,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 527,
        "value": "0"
      },
      {
        "id": 296,
        "value": "7"
      },
      {
        "id": 72,
        "value": "2"
      },
      {
        "id": 93,
        "value": "0"
      },
      {
        "id": 219,
        "value": "0"
      },
      {
        "id": 492,
        "value": "7"
      },
      {
        "id": 464,
        "value": "11"
      },
      {
        "id": 226,
        "value": "0"
      },
      {
        "id": 184,
        "value": "4"
      },
      {
        "id": 142,
        "value": "4"
      },
      {
        "id": 233,
        "value": "0"
      },
      {
        "id": 282,
        "value": "0"
      }
    ],
    "mid": [
      {
        "id": 514,
        "value": "6"
      },
      {
        "id": 31,
        "value": "0"
      },
      {
        "id": 199,
        "value": "5"
      },
      {
        "id": 570,
        "value": "6"
      },
      {
        "id": 507,
        "value": "6"
      },
      {
        "id": 164,
        "value": "4"
      },
      {
        "id": 276,
        "value": "3"
      },
      {
        "id": 521,
        "value": "6"
      },
      {
        "id": 234,
        "value": "3"
      },
      {
        "id": 143,
        "value": "—"
      },
      {
        "id": 353,
        "value": "—"
      },
      {
        "id": 360,
        "value": "9"
      },
      {
        "id": 556,
        "value": "6"
      },
      {
        "id": 430,
        "value": "11"
      },
      {
        "id": 367,
        "value": "9"
      },
      {
        "id": 227,
        "value": "3"
      },
      {
        "id": 108,
        "value": "1"
      },
      {
        "id": 381,
        "value": "8"
      },
      {
        "id": 129,
        "value": "—"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 479,
        "value": "10"
      },
      {
        "id": 332,
        "value": "7"
      },
      {
        "id": 563,
        "value": "6"
      },
      {
        "id": 59,
        "value": "—"
      },
      {
        "id": 535,
        "value": "6"
      },
      {
        "id": 493,
        "value": "10"
      },
      {
        "id": 311,
        "value": "—"
      },
      {
        "id": 528,
        "value": "6"
      },
      {
        "id": 402,
        "value": "8"
      },
      {
        "id": 339,
        "value": "9"
      },
      {
        "id": 297,
        "value": "10"
      },
      {
        "id": 87,
        "value": "1"
      },
      {
        "id": 444,
        "value": "12"
      },
      {
        "id": 17,
        "value": "—"
      },
      {
        "id": 409,
        "value": "—"
      },
      {
        "id": 80,
        "value": "2"
      },
      {
        "id": 416,
        "value": "11"
      },
      {
        "id": 458,
        "value": "12"
      },
      {
        "id": 255,
        "value": "3"
      },
      {
        "id": 283,
        "value": "3"
      },
      {
        "id": 374,
        "value": "8"
      },
      {
        "id": 73,
        "value": "2"
      },
      {
        "id": 465,
        "value": "12"
      },
      {
        "id": 346,
        "value": "9"
      },
      {
        "id": 318,
        "value": "7"
      },
      {
        "id": 437,
        "value": "11"
      },
      {
        "id": 248,
        "value": "3"
      },
      {
        "id": 241,
        "value": "3"
      },
      {
        "id": 150,
        "value": "4"
      },
      {
        "id": 185,
        "value": "4"
      },
      {
        "id": 304,
        "value": "—"
      },
      {
        "id": 192,
        "value": "5"
      },
      {
        "id": 542,
        "value": "6"
      },
      {
        "id": 171,
        "value": "—"
      },
      {
        "id": 325,
        "value": "7"
      },
      {
        "id": 115,
        "value": "3"
      },
      {
        "id": 269,
        "value": "3"
      },
      {
        "id": 388,
        "value": "8"
      },
      {
        "id": 549,
        "value": "6"
      },
      {
        "id": 136,
        "value": "5"
      },
      {
        "id": 52,
        "value": "—"
      },
      {
        "id": 24,
        "value": "0"
      },
      {
        "id": 10,
        "value": "—"
      },
      {
        "id": 45,
        "value": "2"
      },
      {
        "id": 290,
        "value": "—"
      },
      {
        "id": 66,
        "value": "—"
      },
      {
        "id": 3,
        "value": "6"
      },
      {
        "id": 472,
        "value": "12"
      },
      {
        "id": 122,
        "value": "—"
      },
      {
        "id": 206,
        "value": "5"
      },
      {
        "id": 500,
        "value": "6"
      },
      {
        "id": 262,
        "value": "3"
      },
      {
        "id": 423,
        "value": "11"
      },
      {
        "id": 486,
        "value": "10"
      },
      {
        "id": 213,
        "value": "5"
      },
      {
        "id": 178,
        "value": "4"
      },
      {
        "id": 157,
        "value": "—"
      },
      {
        "id": 101,
        "value": "1"
      },
      {
        "id": 451,
        "value": "—"
      },
      {
        "id": 395,
        "value": "8"
      },
      {
        "id": 94,
        "value": "1"
      },
      {
        "id": 220,
        "value": "3"
      }
    ],
    "right": [
      {
        "id": 417,
        "value": "12"
      },
      {
        "id": 543,
        "value": "13"
      },
      {
        "id": 452,
        "value": "13"
      },
      {
        "id": 410,
        "value": "13"
      },
      {
        "id": 368,
        "value": "10"
      },
      {
        "id": 32,
        "value": "1"
      },
      {
        "id": 529,
        "value": "13"
      },
      {
        "id": 571,
        "value": "13"
      },
      {
        "id": 186,
        "value": "5"
      },
      {
        "id": 389,
        "value": "10"
      },
      {
        "id": 291,
        "value": "13"
      },
      {
        "id": 564,
        "value": "13"
      },
      {
        "id": 249,
        "value": "6"
      },
      {
        "id": 550,
        "value": "13"
      },
      {
        "id": 95,
        "value": "3"
      },
      {
        "id": 46,
        "value": "3"
      },
      {
        "id": 536,
        "value": "13"
      },
      {
        "id": 88,
        "value": "3"
      },
      {
        "id": 25,
        "value": "1"
      },
      {
        "id": 494,
        "value": "13"
      },
      {
        "id": 522,
        "value": "13"
      },
      {
        "id": 396,
        "value": "10"
      },
      {
        "id": 165,
        "value": "5"
      },
      {
        "id": 466,
        "value": "13"
      },
      {
        "id": 193,
        "value": "6"
      },
      {
        "id": 11,
        "value": "1"
      },
      {
        "id": 305,
        "value": "8"
      },
      {
        "id": 382,
        "value": "10"
      },
      {
        "id": 312,
        "value": "7"
      },
      {
        "id": 403,
        "value": "10"
      },
      {
        "id": 375,
        "value": "10"
      },
      {
        "id": 298,
        "value": "13"
      },
      {
        "id": 431,
        "value": "12"
      },
      {
        "id": 137,
        "value": "6"
      },
      {
        "id": 158,
        "value": "4"
      },
      {
        "id": 172,
        "value": "5"
      },
      {
        "id": 74,
        "value": "3"
      },
      {
        "id": 151,
        "value": "5"
      },
      {
        "id": 277,
        "value": "6"
      },
      {
        "id": 4,
        "value": "13"
      },
      {
        "id": 200,
        "value": "6"
      },
      {
        "id": 515,
        "value": "13"
      },
      {
        "id": 207,
        "value": "6"
      },
      {
        "id": 333,
        "value": "8"
      },
      {
        "id": 256,
        "value": "6"
      },
      {
        "id": 480,
        "value": "13"
      },
      {
        "id": 116,
        "value": "6"
      },
      {
        "id": 501,
        "value": "13"
      },
      {
        "id": 242,
        "value": "6"
      },
      {
        "id": 508,
        "value": "13"
      },
      {
        "id": 459,
        "value": "13"
      },
      {
        "id": 102,
        "value": "3"
      },
      {
        "id": 214,
        "value": "6"
      },
      {
        "id": 123,
        "value": "6"
      },
      {
        "id": 487,
        "value": "13"
      },
      {
        "id": 67,
        "value": "3"
      },
      {
        "id": 438,
        "value": "12"
      },
      {
        "id": 284,
        "value": "6"
      },
      {
        "id": 109,
        "value": "3"
      },
      {
        "id": 445,
        "value": "13"
      },
      {
        "id": 53,
        "value": "2"
      },
      {
        "id": 319,
        "value": "8"
      },
      {
        "id": 361,
        "value": "10"
      },
      {
        "id": 81,
        "value": "3"
      },
      {
        "id": 270,
        "value": "6"
      },
      {
        "id": 263,
        "value": "6"
      },
      {
        "id": 228,
        "value": "6"
      },
      {
        "id": 221,
        "value": "6"
      },
      {
        "id": 144,
        "value": "5"
      },
      {
        "id": 340,
        "value": "10"
      },
      {
        "id": 347,
        "value": "10"
      },
      {
        "id": 326,
        "value": "8"
      },
      {
        "id": 39,
        "value": "1"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 354,
        "value": "10"
      },
      {
        "id": 179,
        "value": "5"
      },
      {
        "id": 60,
        "value": "3"
      },
      {
        "id": 130,
        "value": "6"
      },
      {
        "id": 424,
        "value": "12"
      },
      {
        "id": 557,
        "value": "13"
      },
      {
        "id": 473,
        "value": "13"
      },
      {
        "id": 235,
        "value": "6"
      }
    ],
    "i": [
      {
        "id": 334,
        "value": "0"
      },
      {
        "id": 131,
        "value": "—"
      },
      {
        "id": 551,
        "value": "2"
      },
      {
        "id": 348,
        "value": "—"
      },
      {
        "id": 138,
        "value": "—"
      },
      {
        "id": 173,
        "value": "—"
      },
      {
        "id": 362,
        "value": "0"
      },
      {
        "id": 439,
        "value": "0"
      },
      {
        "id": 390,
        "value": "1"
      },
      {
        "id": 544,
        "value": "2"
      },
      {
        "id": 460,
        "value": "0"
      },
      {
        "id": 397,
        "value": "1"
      },
      {
        "id": 26,
        "value": "—"
      },
      {
        "id": 61,
        "value": "—"
      },
      {
        "id": 47,
        "value": "—"
      },
      {
        "id": 19,
        "value": "—"
      },
      {
        "id": 446,
        "value": "—"
      },
      {
        "id": 320,
        "value": "—"
      },
      {
        "id": 481,
        "value": "2"
      },
      {
        "id": 68,
        "value": "—"
      },
      {
        "id": 306,
        "value": "—"
      },
      {
        "id": 523,
        "value": "0"
      },
      {
        "id": 376,
        "value": "—"
      },
      {
        "id": 502,
        "value": "—"
      },
      {
        "id": 145,
        "value": "—"
      },
      {
        "id": 194,
        "value": "—"
      },
      {
        "id": 117,
        "value": "—"
      },
      {
        "id": 208,
        "value": "0"
      },
      {
        "id": 12,
        "value": "—"
      },
      {
        "id": 222,
        "value": "—"
      },
      {
        "id": 5,
        "value": "—"
      },
      {
        "id": 299,
        "value": "—"
      },
      {
        "id": 355,
        "value": "—"
      },
      {
        "id": 250,
        "value": "0"
      },
      {
        "id": 537,
        "value": "2"
      },
      {
        "id": 404,
        "value": "1"
      },
      {
        "id": 292,
        "value": "—"
      },
      {
        "id": 278,
        "value": "3"
      },
      {
        "id": 495,
        "value": "2"
      },
      {
        "id": 383,
        "value": "0"
      },
      {
        "id": 369,
        "value": "—"
      },
      {
        "id": 159,
        "value": "—"
      },
      {
        "id": 89,
        "value": "—"
      },
      {
        "id": 516,
        "value": "0"
      },
      {
        "id": 201,
        "value": "—"
      },
      {
        "id": 187,
        "value": "—"
      },
      {
        "id": 257,
        "value": "1"
      },
      {
        "id": 75,
        "value": "0"
      },
      {
        "id": 341,
        "value": "—"
      },
      {
        "id": 432,
        "value": "0"
      },
      {
        "id": 215,
        "value": "0"
      },
      {
        "id": 530,
        "value": "1"
      },
      {
        "id": 152,
        "value": "—"
      },
      {
        "id": 425,
        "value": "0"
      },
      {
        "id": 264,
        "value": "3"
      },
      {
        "id": 474,
        "value": "1"
      },
      {
        "id": 180,
        "value": "0"
      },
      {
        "id": 572,
        "value": "5"
      },
      {
        "id": 558,
        "value": "5"
      },
      {
        "id": 243,
        "value": "0"
      },
      {
        "id": 54,
        "value": "—"
      },
      {
        "id": 96,
        "value": "0"
      },
      {
        "id": 229,
        "value": "0"
      },
      {
        "id": 110,
        "value": "1"
      },
      {
        "id": 488,
        "value": "2"
      },
      {
        "id": 124,
        "value": "—"
      },
      {
        "id": 82,
        "value": "—"
      },
      {
        "id": 285,
        "value": "—"
      },
      {
        "id": 33,
        "value": "0"
      },
      {
        "id": 411,
        "value": "—"
      },
      {
        "id": 418,
        "value": "—"
      },
      {
        "id": 453,
        "value": "—"
      },
      {
        "id": 467,
        "value": "0"
      },
      {
        "id": 271,
        "value": "3"
      },
      {
        "id": 565,
        "value": "5"
      },
      {
        "id": 509,
        "value": "0"
      },
      {
        "id": 327,
        "value": "—"
      },
      {
        "id": 40,
        "value": "0"
      },
      {
        "id": 166,
        "value": "—"
      },
      {
        "id": 103,
        "value": "0"
      },
      {
        "id": 313,
        "value": "—"
      },
      {
        "id": 236,
        "value": "0"
      }
    ],
    "j": [
      {
        "id": 433,
        "value": "0"
      },
      {
        "id": 349,
        "value": "—"
      },
      {
        "id": 552,
        "value": "2"
      },
      {
        "id": 307,
        "value": "—"
      },
      {
        "id": 321,
        "value": "—"
      },
      {
        "id": 62,
        "value": "—"
      },
      {
        "id": 293,
        "value": "—"
      },
      {
        "id": 160,
        "value": "—"
      },
      {
        "id": 286,
        "value": "2"
      },
      {
        "id": 398,
        "value": "1"
      },
      {
        "id": 405,
        "value": "1"
      },
      {
        "id": 524,
        "value": "1"
      },
      {
        "id": 41,
        "value": "0"
      },
      {
        "id": 237,
        "value": "0"
      },
      {
        "id": 20,
        "value": "—"
      },
      {
        "id": 6,
        "value": "—"
      },
      {
        "id": 188,
        "value": "0"
      },
      {
        "id": 496,
        "value": "—"
      },
      {
        "id": 440,
        "value": "—"
      },
      {
        "id": 335,
        "value": "0"
      },
      {
        "id": 181,
        "value": "0"
      },
      {
        "id": 510,
        "value": "0"
      },
      {
        "id": 104,
        "value": "0"
      },
      {
        "id": 55,
        "value": "—"
      },
      {
        "id": 363,
        "value": "0"
      },
      {
        "id": 314,
        "value": "—"
      },
      {
        "id": 279,
        "value": "2"
      },
      {
        "id": 48,
        "value": "—"
      },
      {
        "id": 559,
        "value": "3"
      },
      {
        "id": 167,
        "value": "—"
      },
      {
        "id": 300,
        "value": "—"
      },
      {
        "id": 503,
        "value": "—"
      },
      {
        "id": 356,
        "value": "—"
      },
      {
        "id": 384,
        "value": "0"
      },
      {
        "id": 342,
        "value": "—"
      },
      {
        "id": 447,
        "value": "—"
      },
      {
        "id": 209,
        "value": "0"
      },
      {
        "id": 216,
        "value": "—"
      },
      {
        "id": 153,
        "value": "—"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 419,
        "value": "—"
      },
      {
        "id": 195,
        "value": "—"
      },
      {
        "id": 538,
        "value": "1"
      },
      {
        "id": 482,
        "value": "1"
      },
      {
        "id": 83,
        "value": "0"
      },
      {
        "id": 97,
        "value": "0"
      },
      {
        "id": 475,
        "value": "0"
      },
      {
        "id": 489,
        "value": "2"
      },
      {
        "id": 412,
        "value": "—"
      },
      {
        "id": 132,
        "value": "—"
      },
      {
        "id": 125,
        "value": "—"
      },
      {
        "id": 272,
        "value": "1"
      },
      {
        "id": 566,
        "value": "5"
      },
      {
        "id": 517,
        "value": "0"
      },
      {
        "id": 545,
        "value": "2"
      },
      {
        "id": 139,
        "value": "—"
      },
      {
        "id": 230,
        "value": "0"
      },
      {
        "id": 454,
        "value": "—"
      },
      {
        "id": 90,
        "value": "—"
      },
      {
        "id": 377,
        "value": "—"
      },
      {
        "id": 258,
        "value": "1"
      },
      {
        "id": 174,
        "value": "—"
      },
      {
        "id": 468,
        "value": "0"
      },
      {
        "id": 328,
        "value": "—"
      },
      {
        "id": 391,
        "value": "1"
      },
      {
        "id": 111,
        "value": "—"
      },
      {
        "id": 69,
        "value": "—"
      },
      {
        "id": 370,
        "value": "0"
      },
      {
        "id": 461,
        "value": "0"
      },
      {
        "id": 118,
        "value": "—"
      },
      {
        "id": 13,
        "value": "—"
      },
      {
        "id": 426,
        "value": "0"
      },
      {
        "id": 202,
        "value": "—"
      },
      {
        "id": 251,
        "value": "1"
      },
      {
        "id": 244,
        "value": "1"
      },
      {
        "id": 223,
        "value": "—"
      },
      {
        "id": 76,
        "value": "0"
      },
      {
        "id": 27,
        "value": "—"
      },
      {
        "id": 265,
        "value": "1"
      },
      {
        "id": 573,
        "value": "—"
      },
      {
        "id": 531,
        "value": "1"
      },
      {
        "id": 146,
        "value": "—"
      }
    ],
    "k": [
      {
        "id": 21,
        "value": "—"
      },
      {
        "id": 336,
        "value": "7"
      },
      {
        "id": 322,
        "value": "—"
      },
      {
        "id": 168,
        "value": "—"
      },
      {
        "id": 287,
        "value": "6"
      },
      {
        "id": 357,
        "value": "—"
      },
      {
        "id": 455,
        "value": "—"
      },
      {
        "id": 77,
        "value": "2"
      },
      {
        "id": 539,
        "value": "3"
      },
      {
        "id": 196,
        "value": "—"
      },
      {
        "id": 133,
        "value": "—"
      },
      {
        "id": 105,
        "value": "0"
      },
      {
        "id": 119,
        "value": "—"
      },
      {
        "id": 182,
        "value": "4"
      },
      {
        "id": 441,
        "value": "12"
      },
      {
        "id": 238,
        "value": "0"
      },
      {
        "id": 14,
        "value": "—"
      },
      {
        "id": 315,
        "value": "—"
      },
      {
        "id": 434,
        "value": "11"
      },
      {
        "id": 175,
        "value": "—"
      },
      {
        "id": 448,
        "value": "—"
      },
      {
        "id": 252,
        "value": "1"
      },
      {
        "id": 49,
        "value": "—"
      },
      {
        "id": 469,
        "value": "11"
      },
      {
        "id": 231,
        "value": "0"
      },
      {
        "id": 483,
        "value": "10"
      },
      {
        "id": 7,
        "value": "—"
      },
      {
        "id": 532,
        "value": "2"
      },
      {
        "id": 140,
        "value": "—"
      },
      {
        "id": 546,
        "value": "4"
      },
      {
        "id": 525,
        "value": "1"
      },
      {
        "id": 56,
        "value": "—"
      },
      {
        "id": 308,
        "value": "—"
      },
      {
        "id": 91,
        "value": "—"
      },
      {
        "id": 126,
        "value": "—"
      },
      {
        "id": 266,
        "value": "4"
      },
      {
        "id": 406,
        "value": "9"
      },
      {
        "id": 154,
        "value": "—"
      },
      {
        "id": 294,
        "value": "—"
      },
      {
        "id": 217,
        "value": "5"
      },
      {
        "id": 420,
        "value": "—"
      },
      {
        "id": 350,
        "value": "—"
      },
      {
        "id": 364,
        "value": "9"
      },
      {
        "id": 161,
        "value": "—"
      },
      {
        "id": 567,
        "value": "10"
      },
      {
        "id": 560,
        "value": "8"
      },
      {
        "id": 343,
        "value": "—"
      },
      {
        "id": 371,
        "value": "10"
      },
      {
        "id": 210,
        "value": "4"
      },
      {
        "id": 378,
        "value": "—"
      },
      {
        "id": 392,
        "value": "9"
      },
      {
        "id": 476,
        "value": "12"
      },
      {
        "id": 98,
        "value": "0"
      },
      {
        "id": 245,
        "value": "1"
      },
      {
        "id": 518,
        "value": "0"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 70,
        "value": "—"
      },
      {
        "id": 28,
        "value": "—"
      },
      {
        "id": 504,
        "value": "—"
      },
      {
        "id": 301,
        "value": "—"
      },
      {
        "id": 399,
        "value": "9"
      },
      {
        "id": 189,
        "value": "5"
      },
      {
        "id": 574,
        "value": "12"
      },
      {
        "id": 112,
        "value": "3"
      },
      {
        "id": 63,
        "value": "—"
      },
      {
        "id": 427,
        "value": "11"
      },
      {
        "id": 224,
        "value": "—"
      },
      {
        "id": 280,
        "value": "5"
      },
      {
        "id": 203,
        "value": "—"
      },
      {
        "id": 490,
        "value": "11"
      },
      {
        "id": 413,
        "value": "—"
      },
      {
        "id": 259,
        "value": "2"
      },
      {
        "id": 147,
        "value": "—"
      },
      {
        "id": 84,
        "value": "3"
      },
      {
        "id": 329,
        "value": "—"
      },
      {
        "id": 385,
        "value": "7"
      },
      {
        "id": 273,
        "value": "4"
      },
      {
        "id": 35,
        "value": "0"
      },
      {
        "id": 497,
        "value": "12"
      },
      {
        "id": 462,
        "value": "11"
      },
      {
        "id": 511,
        "value": "0"
      },
      {
        "id": 553,
        "value": "4"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "left": 0,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "setMid",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 5,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "setMid",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "sortLeft",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "setMid",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 13,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 15,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 16,
      "stepId": "setMid",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "sortLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 0,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 19,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 0,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 20,
      "stepId": "sortRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 1,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "checkLeftRight",
      "left": 1,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "callMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 24,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 25,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 26,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 27,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 28,
      "stepId": "takeRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        151,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 29,
      "stepId": "incK",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "array": [
        151,
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
      "step": 30,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
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
      "step": 31,
      "stepId": "sortRight",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 32,
      "stepId": "markRange",
      "left": 2,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 33,
      "stepId": "checkLeftRight",
      "left": 2,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 34,
      "stepId": "setMid",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 35,
      "stepId": "sortLeft",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 36,
      "stepId": "markRange",
      "left": 2,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 37,
      "stepId": "checkLeftRight",
      "left": 2,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 38,
      "stepId": "sortRight",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 39,
      "stepId": "markRange",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 40,
      "stepId": "checkLeftRight",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 41,
      "stepId": "callMerge",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 42,
      "stepId": "copyRuns",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 43,
      "stepId": "initMergePointers",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 44,
      "stepId": "whileBoth",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
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
      "step": 45,
      "stepId": "compareMerge",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
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
      "step": 46,
      "stepId": "takeLeft",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
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
      "step": 47,
      "stepId": "incK",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": 0,
      "k": 3,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 48,
      "stepId": "drainRight",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": 0,
      "k": 3,
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
      "step": 49,
      "stepId": "callMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 50,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 51,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 52,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 53,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 54,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
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
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 55,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 56,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 57,
      "stepId": "takeRight",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        151,
        213,
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
      "step": 58,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        151,
        213,
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
      "step": 59,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        151,
        213,
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
      "step": 60,
      "stepId": "takeRight",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        151,
        213,
        218,
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
      "step": 61,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": null,
      "k": 3,
      "array": [
        151,
        213,
        218,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 62,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 1,
      "j": null,
      "k": 3,
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
      "step": 63,
      "stepId": "sortRight",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 64,
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 65,
      "stepId": "checkLeftRight",
      "left": 4,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 66,
      "stepId": "setMid",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 67,
      "stepId": "sortLeft",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 68,
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 69,
      "stepId": "checkLeftRight",
      "left": 4,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 70,
      "stepId": "setMid",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 71,
      "stepId": "sortLeft",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 72,
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 73,
      "stepId": "checkLeftRight",
      "left": 4,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 74,
      "stepId": "sortRight",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 75,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 76,
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 77,
      "stepId": "callMerge",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 78,
      "stepId": "copyRuns",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 79,
      "stepId": "initMergePointers",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
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
      "step": 80,
      "stepId": "whileBoth",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 81,
      "stepId": "compareMerge",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
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
      "step": 82,
      "stepId": "takeLeft",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
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
      "step": 83,
      "stepId": "incK",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": 0,
      "k": 5,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 84,
      "stepId": "drainRight",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": 0,
      "k": 5,
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
      "step": 85,
      "stepId": "sortRight",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 86,
      "stepId": "markRange",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 87,
      "stepId": "checkLeftRight",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 88,
      "stepId": "callMerge",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 89,
      "stepId": "copyRuns",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 90,
      "stepId": "initMergePointers",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
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
      "step": 91,
      "stepId": "whileBoth",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 92,
      "stepId": "compareMerge",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
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
      "step": 93,
      "stepId": "takeRight",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        151,
        213,
        218,
        980,
        78,
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
      "step": 94,
      "stepId": "incK",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 5,
      "array": [
        151,
        213,
        218,
        980,
        78,
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
      "step": 95,
      "stepId": "drainLeft",
      "left": 4,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 5,
      "array": [
        151,
        213,
        218,
        980,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 96,
      "stepId": "callMerge",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        151,
        213,
        218,
        980,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 97,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        151,
        213,
        218,
        980,
        78,
        251,
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
      "step": 98,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        151,
        213,
        218,
        980,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 99,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        151,
        213,
        218,
        980,
        78,
        251,
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
      "step": 100,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        151,
        213,
        218,
        980,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 101,
      "stepId": "takeRight",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        78,
        213,
        218,
        980,
        78,
        251,
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
      "step": 102,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        78,
        213,
        218,
        980,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 103,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        78,
        213,
        218,
        980,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 104,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        78,
        151,
        218,
        980,
        78,
        251,
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
      "step": 105,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        78,
        151,
        218,
        980,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 106,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        78,
        151,
        218,
        980,
        78,
        251,
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
      "step": 107,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        78,
        151,
        213,
        980,
        78,
        251,
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
      "step": 108,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        78,
        151,
        213,
        980,
        78,
        251,
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
      "step": 109,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        78,
        151,
        213,
        980,
        78,
        251,
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
      "step": 110,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        78,
        151,
        213,
        218,
        78,
        251,
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
      "step": 111,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        78,
        151,
        213,
        218,
        78,
        251,
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
      "step": 112,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        78,
        151,
        213,
        218,
        78,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 113,
      "stepId": "takeRight",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        78,
        151,
        213,
        218,
        251,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 114,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        78,
        151,
        213,
        218,
        251,
        251,
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
      "step": 115,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        78,
        151,
        213,
        218,
        251,
        251,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 116,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 117,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": 2,
      "k": 6,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 118,
      "stepId": "drainRight",
      "left": 0,
      "mid": 3,
      "right": 6,
      "i": null,
      "j": 2,
      "k": 6,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 119,
      "stepId": "sortRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 120,
      "stepId": "markRange",
      "left": 7,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 121,
      "stepId": "checkLeftRight",
      "left": 7,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 122,
      "stepId": "setMid",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 123,
      "stepId": "sortLeft",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 124,
      "stepId": "markRange",
      "left": 7,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 125,
      "stepId": "checkLeftRight",
      "left": 7,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 126,
      "stepId": "setMid",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 127,
      "stepId": "sortLeft",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 128,
      "stepId": "markRange",
      "left": 7,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 129,
      "stepId": "checkLeftRight",
      "left": 7,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 130,
      "stepId": "setMid",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 131,
      "stepId": "sortLeft",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 132,
      "stepId": "markRange",
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 133,
      "stepId": "checkLeftRight",
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 134,
      "stepId": "sortRight",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 135,
      "stepId": "markRange",
      "left": 8,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 136,
      "stepId": "checkLeftRight",
      "left": 8,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 137,
      "stepId": "callMerge",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 138,
      "stepId": "copyRuns",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 139,
      "stepId": "initMergePointers",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 140,
      "stepId": "whileBoth",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 141,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 142,
      "stepId": "takeLeft",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 143,
      "stepId": "incK",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": 0,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 144,
      "stepId": "drainRight",
      "left": 7,
      "mid": 7,
      "right": 8,
      "i": null,
      "j": 0,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 145,
      "stepId": "sortRight",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 146,
      "stepId": "markRange",
      "left": 9,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 147,
      "stepId": "checkLeftRight",
      "left": 9,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 148,
      "stepId": "setMid",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 149,
      "stepId": "sortLeft",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 150,
      "stepId": "markRange",
      "left": 9,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 151,
      "stepId": "checkLeftRight",
      "left": 9,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 152,
      "stepId": "sortRight",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 153,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 154,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 155,
      "stepId": "callMerge",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 156,
      "stepId": "copyRuns",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 157,
      "stepId": "initMergePointers",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 158,
      "stepId": "whileBoth",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 159,
      "stepId": "compareMerge",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 160,
      "stepId": "takeLeft",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 161,
      "stepId": "incK",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": 0,
      "k": 10,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 162,
      "stepId": "drainRight",
      "left": 9,
      "mid": 9,
      "right": 10,
      "i": null,
      "j": 0,
      "k": 10,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 163,
      "stepId": "callMerge",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 164,
      "stepId": "copyRuns",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 165,
      "stepId": "initMergePointers",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 166,
      "stepId": "whileBoth",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
      "step": 167,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 168,
      "stepId": "takeRight",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 169,
      "stepId": "incK",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 170,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        874,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 171,
      "stepId": "takeLeft",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        20,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 172,
      "stepId": "incK",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        20,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 173,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        20,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 174,
      "stepId": "takeLeft",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 175,
      "stepId": "incK",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": 1,
      "k": 10,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 176,
      "stepId": "drainRight",
      "left": 7,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": 1,
      "k": 10,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 177,
      "stepId": "sortRight",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 178,
      "stepId": "markRange",
      "left": 11,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 179,
      "stepId": "checkLeftRight",
      "left": 11,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 180,
      "stepId": "setMid",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 181,
      "stepId": "sortLeft",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 182,
      "stepId": "markRange",
      "left": 11,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 183,
      "stepId": "checkLeftRight",
      "left": 11,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 184,
      "stepId": "setMid",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 185,
      "stepId": "sortLeft",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 186,
      "stepId": "markRange",
      "left": 11,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 187,
      "stepId": "checkLeftRight",
      "left": 11,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 188,
      "stepId": "sortRight",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 189,
      "stepId": "markRange",
      "left": 12,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 190,
      "stepId": "checkLeftRight",
      "left": 12,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 191,
      "stepId": "callMerge",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 192,
      "stepId": "copyRuns",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 193,
      "stepId": "initMergePointers",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 194,
      "stepId": "whileBoth",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 195,
      "stepId": "compareMerge",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        389,
        199,
        692
      ]
    },
    {
      "step": 196,
      "stepId": "takeRight",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        199,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 197,
      "stepId": "incK",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": null,
      "k": 12,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        199,
        692
      ]
    },
    {
      "step": 198,
      "stepId": "drainLeft",
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": null,
      "k": 12,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 199,
      "stepId": "sortRight",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 200,
      "stepId": "markRange",
      "left": 13,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 201,
      "stepId": "checkLeftRight",
      "left": 13,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 202,
      "stepId": "callMerge",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 203,
      "stepId": "copyRuns",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 204,
      "stepId": "initMergePointers",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 205,
      "stepId": "whileBoth",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 206,
      "stepId": "compareMerge",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 207,
      "stepId": "takeLeft",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 208,
      "stepId": "incK",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 12,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 209,
      "stepId": "compareMerge",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 12,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 210,
      "stepId": "takeLeft",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 12,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 211,
      "stepId": "incK",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": 0,
      "k": 13,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 212,
      "stepId": "drainRight",
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": null,
      "j": 0,
      "k": 13,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 213,
      "stepId": "callMerge",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 214,
      "stepId": "copyRuns",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 215,
      "stepId": "initMergePointers",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 216,
      "stepId": "whileBoth",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 217,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 218,
      "stepId": "takeLeft",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 7,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 219,
      "stepId": "incK",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 220,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 221,
      "stepId": "takeLeft",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 1,
      "j": 0,
      "k": 8,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 222,
      "stepId": "incK",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 223,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        874,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 224,
      "stepId": "takeRight",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 0,
      "k": 9,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 225,
      "stepId": "incK",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 10,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        947,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 226,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 10,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        947,
        199,
        389,
        692
      ]
    },
    {
      "step": 227,
      "stepId": "takeRight",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 10,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        199,
        389,
        692
      ]
    },
    {
      "step": 228,
      "stepId": "incK",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        199,
        389,
        692
      ]
    },
    {
      "step": 229,
      "stepId": "compareMerge",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        199,
        389,
        692
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 230,
      "stepId": "takeRight",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 11,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        389,
        692
      ]
    },
    {
      "step": 231,
      "stepId": "incK",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": null,
      "k": 12,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        389,
        692
      ]
    },
    {
      "step": 232,
      "stepId": "drainLeft",
      "left": 7,
      "mid": 10,
      "right": 13,
      "i": 2,
      "j": null,
      "k": 12,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 233,
      "stepId": "callMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 234,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 235,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 236,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 237,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        78,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 238,
      "stepId": "takeRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        20,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 239,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 240,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        20,
        151,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 241,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        20,
        78,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 242,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 243,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        20,
        78,
        213,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 244,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        20,
        78,
        151,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 245,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 246,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        20,
        78,
        151,
        218,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 247,
      "stepId": "takeRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        20,
        78,
        151,
        192,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 248,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        20,
        78,
        151,
        192,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 249,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        20,
        78,
        151,
        192,
        251,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 250,
      "stepId": "takeRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        20,
        78,
        151,
        192,
        199,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 251,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 3,
      "k": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 252,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 3,
      "k": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        980,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 253,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 2,
      "j": 3,
      "k": 5,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 254,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 255,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        983,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 256,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 257,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 3,
      "k": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 258,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 3,
      "k": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        20,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 259,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 4,
      "j": 3,
      "k": 7,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 260,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 3,
      "k": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 261,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 3,
      "k": 8,
      "array": [
        20,
        78,
        151,
        192,
        199,
        213,
        218,
        251,
        192,
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 262,
      "stepId": "takeRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 3,
      "k": 8,
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
        199,
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 263,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 4,
      "k": 9,
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
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 264,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 4,
      "k": 9,
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
        199,
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 265,
      "stepId": "takeRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 4,
      "k": 9,
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
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 266,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 5,
      "k": 10,
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
        389,
        692,
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 267,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 5,
      "k": 10,
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
        389,
        692,
        874,
        947
      ]
    },
    {
      "step": 268,
      "stepId": "takeRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 5,
      "k": 10,
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
        692,
        874,
        947
      ]
    },
    {
      "step": 269,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 6,
      "k": 11,
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
        692,
        874,
        947
      ]
    },
    {
      "step": 270,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 6,
      "k": 11,
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
        692,
        874,
        947
      ]
    },
    {
      "step": 271,
      "stepId": "takeRight",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": 6,
      "k": 11,
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
        874,
        947
      ]
    },
    {
      "step": 272,
      "stepId": "incK",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": null,
      "k": 12,
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
        874,
        947
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 273,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 6,
      "right": 13,
      "i": 5,
      "j": null,
      "k": 12,
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

  function completedPuzzleRequested() {
    try {
      return new URLSearchParams(window.location.search).get("completed") === "1";
    } catch (_) {
      return false;
    }
  }

  function loadCompletedAnswers() {
    filled = {};
    Object.keys(INSTANCE.answers || {}).forEach(function(step) {
      const answer = INSTANCE.answers[step] || {};
      filled[step] = {};
      Object.keys(answer).forEach(function(field) {
        filled[step][field] = String(answer[field]);
      });
    });
    taskComplete = true;
    savePuzzleState();
  }

  function restorePuzzleState() {
    let restored = false;
    try {
      const key = puzzleStorageKey();
      const raw = key ? localStorage.getItem(key) : null;
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && saved.filled && typeof saved.filled === "object" && !Array.isArray(saved.filled)) {
          filled = saved.filled;
          taskComplete = !!saved.taskComplete;
          restored = true;
        }
      }
    } catch (_) {
      /* A completed puzzle can still be reconstructed from its embedded answers. */
    }

    if (completedPuzzleRequested() && (!restored || !taskComplete || !isSolved())) {
      loadCompletedAnswers();
      restored = true;
    }
    if (!restored) return false;

    // Rebuild availablePieces: start from the full set and remove placed pieces.
    resetAvailablePieces();
    Object.keys(filled).forEach(function(step) {
      const rowFill = filled[step];
      if (!rowFill || typeof rowFill !== "object") return;
      Object.keys(rowFill).forEach(function(field) {
        const val = rowFill[field];
        if (val != null && val !== "") takePiece(field, val);
      });
    });
    return true;
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
