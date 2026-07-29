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
    586,
    892,
    456,
    349,
    266,
    94,
    944,
    940,
    842,
    615,
    967,
    755,
    501,
    483,
    420,
    413,
    243,
    218,
    203,
    42
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
    7,
    10,
    13,
    15,
    16,
    20,
    24,
    25,
    32,
    37,
    42,
    45,
    46,
    49,
    51,
    52,
    63,
    64,
    70,
    77,
    90,
    92,
    94,
    97,
    102,
    103,
    109,
    110,
    111,
    117,
    119,
    120,
    123,
    125,
    127,
    137,
    141,
    142,
    147,
    150,
    159,
    163,
    164,
    165,
    166,
    168,
    169,
    170,
    174,
    179,
    184,
    185,
    188,
    192,
    193,
    194,
    202,
    204,
    212,
    216,
    228,
    229,
    233,
    239,
    242,
    243,
    245,
    246,
    250,
    252,
    254,
    263,
    266,
    269,
    271,
    277,
    279,
    280,
    282,
    285,
    286,
    287,
    289,
    294,
    295,
    296,
    297,
    298,
    300,
    302,
    305,
    306,
    312,
    314,
    317,
    319,
    323,
    324,
    325,
    326,
    328,
    332,
    334,
    336,
    338,
    339,
    342,
    343,
    349,
    350,
    352,
    357,
    359,
    361,
    366,
    367,
    370,
    374,
    375,
    383,
    386,
    388,
    389,
    399,
    402,
    404
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
    "7": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "1",
      "right": "\u2014",
      "i": "2",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "10": {
      "stepId": "setRight",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "2",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "13": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "15": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "16": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "20": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "3",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "24": {
      "stepId": "advancePastMid",
      "left": "3",
      "mid": "3",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "25": {
      "stepId": "checkHasRight",
      "left": "3",
      "mid": "3",
      "right": "\u2014",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "32": {
      "stepId": "compareMerge",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "0",
      "j": "0",
      "k": "3",
      "merged": "true"
    },
    "37": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "5",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "42": {
      "stepId": "checkHasRight",
      "left": "5",
      "mid": "6",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "45": {
      "stepId": "callMerge",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "46": {
      "stepId": "copyRuns",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "49": {
      "stepId": "compareMerge",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "5",
      "merged": "true"
    },
    "51": {
      "stepId": "incK",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "1",
      "j": "0",
      "k": "6",
      "merged": "true"
    },
    "52": {
      "stepId": "compareMerge",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "1",
      "j": "0",
      "k": "6",
      "merged": "true"
    },
    "63": {
      "stepId": "extendRight",
      "left": "8",
      "mid": "8",
      "right": "9",
      "i": "9",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "64": {
      "stepId": "setRight",
      "left": "8",
      "mid": "8",
      "right": "10",
      "i": "10",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "70": {
      "stepId": "takeRight",
      "left": "8",
      "mid": "8",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "8",
      "merged": "true"
    },
    "77": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "90": {
      "stepId": "takeRight",
      "left": "11",
      "mid": "11",
      "right": "12",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "92": {
      "stepId": "drainLeft",
      "left": "11",
      "mid": "11",
      "right": "12",
      "i": "0",
      "j": "\u2014",
      "k": "12",
      "merged": "true"
    },
    "94": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "97": {
      "stepId": "setMid",
      "left": "13",
      "mid": "13",
      "right": "\u2014",
      "i": "13",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "102": {
      "stepId": "callMerge",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "103": {
      "stepId": "copyRuns",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "109": {
      "stepId": "drainLeft",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "0",
      "j": "\u2014",
      "k": "14",
      "merged": "true"
    },
    "110": {
      "stepId": "setMergedTrue",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "111": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "15",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "117": {
      "stepId": "extendRight",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "16",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "119": {
      "stepId": "callMerge",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "120": {
      "stepId": "copyRuns",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "123": {
      "stepId": "compareMerge",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "0",
      "j": "0",
      "k": "15",
      "merged": "true"
    },
    "125": {
      "stepId": "incK",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "0",
      "j": "\u2014",
      "k": "16",
      "merged": "true"
    },
    "127": {
      "stepId": "setMergedTrue",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "137": {
      "stepId": "copyRuns",
      "left": "17",
      "mid": "17",
      "right": "18",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "141": {
      "stepId": "takeRight",
      "left": "17",
      "mid": "17",
      "right": "18",
      "i": "0",
      "j": "0",
      "k": "17",
      "merged": "true"
    },
    "142": {
      "stepId": "incK",
      "left": "17",
      "mid": "17",
      "right": "18",
      "i": "0",
      "j": "\u2014",
      "k": "18",
      "merged": "true"
    },
    "147": {
      "stepId": "extendLeft",
      "left": "19",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "150": {
      "stepId": "checkHasRight",
      "left": "19",
      "mid": "19",
      "right": "\u2014",
      "i": "20",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "159": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "2",
      "right": "\u2014",
      "i": "3",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "163": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "164": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "165": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "166": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "168": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "169": {
      "stepId": "incK",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "170": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "174": {
      "stepId": "setMergedTrue",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "179": {
      "stepId": "advancePastMid",
      "left": "5",
      "mid": "7",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "184": {
      "stepId": "copyRuns",
      "left": "5",
      "mid": "7",
      "right": "10",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "185": {
      "stepId": "initMergePointers",
      "left": "5",
      "mid": "7",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "5",
      "merged": "true"
    },
    "188": {
      "stepId": "takeLeft",
      "left": "5",
      "mid": "7",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "5",
      "merged": "true"
    },
    "192": {
      "stepId": "incK",
      "left": "5",
      "mid": "7",
      "right": "10",
      "i": "1",
      "j": "1",
      "k": "7",
      "merged": "true"
    },
    "193": {
      "stepId": "compareMerge",
      "left": "5",
      "mid": "7",
      "right": "10",
      "i": "1",
      "j": "1",
      "k": "7",
      "merged": "true"
    },
    "194": {
      "stepId": "takeRight",
      "left": "5",
      "mid": "7",
      "right": "10",
      "i": "1",
      "j": "1",
      "k": "7",
      "merged": "true"
    },
    "202": {
      "stepId": "drainRight",
      "left": "5",
      "mid": "7",
      "right": "10",
      "i": "\u2014",
      "j": "2",
      "k": "10",
      "merged": "true"
    },
    "204": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "212": {
      "stepId": "callMerge",
      "left": "11",
      "mid": "12",
      "right": "14",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "216": {
      "stepId": "compareMerge",
      "left": "11",
      "mid": "12",
      "right": "14",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "228": {
      "stepId": "advancePastMid",
      "left": "15",
      "mid": "16",
      "right": "\u2014",
      "i": "17",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "229": {
      "stepId": "checkHasRight",
      "left": "15",
      "mid": "16",
      "right": "\u2014",
      "i": "17",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "233": {
      "stepId": "copyRuns",
      "left": "15",
      "mid": "16",
      "right": "18",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "239": {
      "stepId": "compareMerge",
      "left": "15",
      "mid": "16",
      "right": "18",
      "i": "0",
      "j": "1",
      "k": "16",
      "merged": "true"
    },
    "242": {
      "stepId": "drainLeft",
      "left": "15",
      "mid": "16",
      "right": "18",
      "i": "0",
      "j": "\u2014",
      "k": "17",
      "merged": "true"
    },
    "243": {
      "stepId": "setMergedTrue",
      "left": "15",
      "mid": "16",
      "right": "18",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "245": {
      "stepId": "setLeft",
      "left": "19",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "246": {
      "stepId": "extendLeft",
      "left": "19",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "250": {
      "stepId": "breakOddRun",
      "left": "19",
      "mid": "19",
      "right": "\u2014",
      "i": "20",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "252": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "254": {
      "stepId": "whileScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "263": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "266": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "269": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "271": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "1",
      "j": "1",
      "k": "2",
      "merged": "false"
    },
    "277": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "3",
      "j": "1",
      "k": "4",
      "merged": "false"
    },
    "279": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "3",
      "j": "1",
      "k": "4",
      "merged": "false"
    },
    "280": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "4",
      "j": "1",
      "k": "5",
      "merged": "false"
    },
    "282": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "4",
      "j": "1",
      "k": "5",
      "merged": "false"
    },
    "285": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "4",
      "j": "2",
      "k": "6",
      "merged": "false"
    },
    "286": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "4",
      "j": "3",
      "k": "7",
      "merged": "false"
    },
    "287": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "4",
      "j": "3",
      "k": "7",
      "merged": "false"
    },
    "289": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "10",
      "i": "\u2014",
      "j": "3",
      "k": "8",
      "merged": "false"
    },
    "294": {
      "stepId": "extendLeft",
      "left": "11",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "295": {
      "stepId": "setMid",
      "left": "11",
      "mid": "14",
      "right": "\u2014",
      "i": "14",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "296": {
      "stepId": "advancePastMid",
      "left": "11",
      "mid": "14",
      "right": "\u2014",
      "i": "15",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "297": {
      "stepId": "checkHasRight",
      "left": "11",
      "mid": "14",
      "right": "\u2014",
      "i": "15",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "298": {
      "stepId": "extendRight",
      "left": "11",
      "mid": "14",
      "right": "15",
      "i": "15",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "300": {
      "stepId": "callMerge",
      "left": "11",
      "mid": "14",
      "right": "18",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "302": {
      "stepId": "initMergePointers",
      "left": "11",
      "mid": "14",
      "right": "18",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "305": {
      "stepId": "takeRight",
      "left": "11",
      "mid": "14",
      "right": "18",
      "i": "0",
      "j": "0",
      "k": "11",
      "merged": "true"
    },
    "306": {
      "stepId": "incK",
      "left": "11",
      "mid": "14",
      "right": "18",
      "i": "0",
      "j": "1",
      "k": "12",
      "merged": "true"
    },
    "312": {
      "stepId": "incK",
      "left": "11",
      "mid": "14",
      "right": "18",
      "i": "0",
      "j": "3",
      "k": "14",
      "merged": "true"
    },
    "314": {
      "stepId": "takeRight",
      "left": "11",
      "mid": "14",
      "right": "18",
      "i": "0",
      "j": "3",
      "k": "14",
      "merged": "true"
    },
    "317": {
      "stepId": "setMergedTrue",
      "left": "11",
      "mid": "14",
      "right": "18",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "319": {
      "stepId": "setLeft",
      "left": "19",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "323": {
      "stepId": "checkHasRight",
      "left": "19",
      "mid": "19",
      "right": "\u2014",
      "i": "20",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "324": {
      "stepId": "breakOddRun",
      "left": "19",
      "mid": "19",
      "right": "\u2014",
      "i": "20",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "325": {
      "stepId": "checkUntil",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "326": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "328": {
      "stepId": "whileScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "332": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "10",
      "right": "\u2014",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "334": {
      "stepId": "extendRight",
      "left": "0",
      "mid": "10",
      "right": "11",
      "i": "11",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "336": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "338": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "339": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "342": {
      "stepId": "incK",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "1",
      "j": "0",
      "k": "1",
      "merged": "false"
    },
    "343": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "1",
      "j": "0",
      "k": "1",
      "merged": "false"
    },
    "349": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "1",
      "j": "2",
      "k": "3",
      "merged": "false"
    },
    "350": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "1",
      "j": "2",
      "k": "3",
      "merged": "false"
    },
    "352": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "1",
      "j": "3",
      "k": "4",
      "merged": "false"
    },
    "357": {
      "stepId": "incK",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "3",
      "j": "3",
      "k": "6",
      "merged": "false"
    },
    "359": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "3",
      "j": "3",
      "k": "6",
      "merged": "false"
    },
    "361": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "3",
      "j": "4",
      "k": "7",
      "merged": "false"
    },
    "366": {
      "stepId": "incK",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "4",
      "j": "5",
      "k": "9",
      "merged": "false"
    },
    "367": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "4",
      "j": "5",
      "k": "9",
      "merged": "false"
    },
    "370": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "4",
      "j": "6",
      "k": "10",
      "merged": "false"
    },
    "374": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "4",
      "j": "7",
      "k": "11",
      "merged": "false"
    },
    "375": {
      "stepId": "incK",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "5",
      "j": "7",
      "k": "12",
      "merged": "false"
    },
    "383": {
      "stepId": "setMergedTrue",
      "left": "0",
      "mid": "10",
      "right": "18",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "386": {
      "stepId": "extendLeft",
      "left": "19",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "388": {
      "stepId": "advancePastMid",
      "left": "19",
      "mid": "19",
      "right": "\u2014",
      "i": "20",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "389": {
      "stepId": "checkHasRight",
      "left": "19",
      "mid": "19",
      "right": "\u2014",
      "i": "20",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "399": {
      "stepId": "checkHasRight",
      "left": "0",
      "mid": "18",
      "right": "\u2014",
      "i": "19",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "402": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "18",
      "right": "19",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "404": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "18",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 825,
        "value": "extendRight"
      },
      {
        "id": 641,
        "value": "takeRight"
      },
      {
        "id": 801,
        "value": "repeatPass"
      },
      {
        "id": 145,
        "value": "setRight"
      },
      {
        "id": 105,
        "value": "copyRuns"
      },
      {
        "id": 89,
        "value": "checkHasRight"
      },
      {
        "id": 881,
        "value": "takeRight"
      },
      {
        "id": 585,
        "value": "compareMerge"
      },
      {
        "id": 705,
        "value": "extendRight"
      },
      {
        "id": 785,
        "value": "breakOddRun"
      },
      {
        "id": 49,
        "value": "advanceAfterMerge"
      },
      {
        "id": 745,
        "value": "incK"
      },
      {
        "id": 313,
        "value": "extendLeft"
      },
      {
        "id": 809,
        "value": "whileScan"
      },
      {
        "id": 345,
        "value": "copyRuns"
      },
      {
        "id": 697,
        "value": "checkHasRight"
      },
      {
        "id": 913,
        "value": "compareMerge"
      },
      {
        "id": 761,
        "value": "setMergedTrue"
      },
      {
        "id": 57,
        "value": "advancePastMid"
      },
      {
        "id": 849,
        "value": "whileBoth"
      },
      {
        "id": 97,
        "value": "callMerge"
      },
      {
        "id": 465,
        "value": "advanceAfterMerge"
      },
      {
        "id": 393,
        "value": "setMergedTrue"
      },
      {
        "id": 281,
        "value": "setMergedTrue"
      },
      {
        "id": 321,
        "value": "checkHasRight"
      },
      {
        "id": 721,
        "value": "initMergePointers"
      },
      {
        "id": 681,
        "value": "setMid"
      },
      {
        "id": 689,
        "value": "advancePastMid"
      },
      {
        "id": 753,
        "value": "takeRight"
      },
      {
        "id": 985,
        "value": "checkHasRight"
      },
      {
        "id": 169,
        "value": "takeRight"
      },
      {
        "id": 873,
        "value": "compareMerge"
      },
      {
        "id": 473,
        "value": "callMerge"
      },
      {
        "id": 361,
        "value": "whileBoth"
      },
      {
        "id": 377,
        "value": "incK"
      },
      {
        "id": 433,
        "value": "incK"
      },
      {
        "id": 969,
        "value": "extendLeft"
      },
      {
        "id": 993,
        "value": "checkHasRight"
      },
      {
        "id": 385,
        "value": "compareMerge"
      },
      {
        "id": 737,
        "value": "incK"
      },
      {
        "id": 177,
        "value": "drainLeft"
      },
      {
        "id": 233,
        "value": "advanceAfterMerge"
      },
      {
        "id": 905,
        "value": "takeRight"
      },
      {
        "id": 249,
        "value": "callMerge"
      },
      {
        "id": 161,
        "value": "advanceAfterMerge"
      },
      {
        "id": 593,
        "value": "compareMerge"
      },
      {
        "id": 633,
        "value": "takeRight"
      },
      {
        "id": 521,
        "value": "drainLeft"
      },
      {
        "id": 153,
        "value": "takeRight"
      },
      {
        "id": 625,
        "value": "incK"
      },
      {
        "id": 729,
        "value": "takeRight"
      },
      {
        "id": 777,
        "value": "checkHasRight"
      },
      {
        "id": 857,
        "value": "incK"
      },
      {
        "id": 369,
        "value": "takeRight"
      },
      {
        "id": 65,
        "value": "checkHasRight"
      },
      {
        "id": 329,
        "value": "advancePastMid"
      },
      {
        "id": 217,
        "value": "drainLeft"
      },
      {
        "id": 241,
        "value": "extendRight"
      },
      {
        "id": 793,
        "value": "checkUntil"
      },
      {
        "id": 953,
        "value": "incK"
      },
      {
        "id": 529,
        "value": "setMergedTrue"
      },
      {
        "id": 201,
        "value": "callMerge"
      },
      {
        "id": 353,
        "value": "initMergePointers"
      },
      {
        "id": 841,
        "value": "initMergePointers"
      },
      {
        "id": 33,
        "value": "compareMerge"
      },
      {
        "id": 113,
        "value": "compareMerge"
      },
      {
        "id": 1001,
        "value": "callMerge"
      },
      {
        "id": 121,
        "value": "incK"
      },
      {
        "id": 409,
        "value": "copyRuns"
      },
      {
        "id": 497,
        "value": "checkHasRight"
      },
      {
        "id": 225,
        "value": "setMergedTrue"
      },
      {
        "id": 865,
        "value": "compareMerge"
      },
      {
        "id": 297,
        "value": "takeRight"
      },
      {
        "id": 129,
        "value": "compareMerge"
      },
      {
        "id": 769,
        "value": "setLeft"
      },
      {
        "id": 601,
        "value": "incK"
      },
      {
        "id": 273,
        "value": "incK"
      },
      {
        "id": 713,
        "value": "callMerge"
      },
      {
        "id": 657,
        "value": "compareMerge"
      },
      {
        "id": 425,
        "value": "takeLeft"
      },
      {
        "id": 25,
        "value": "initMergePointers"
      },
      {
        "id": 457,
        "value": "drainRight"
      },
      {
        "id": 833,
        "value": "callMerge"
      },
      {
        "id": 897,
        "value": "incK"
      },
      {
        "id": 921,
        "value": "incK"
      },
      {
        "id": 257,
        "value": "copyRuns"
      },
      {
        "id": 977,
        "value": "advancePastMid"
      },
      {
        "id": 505,
        "value": "copyRuns"
      },
      {
        "id": 481,
        "value": "compareMerge"
      },
      {
        "id": 289,
        "value": "copyRuns"
      },
      {
        "id": 673,
        "value": "extendLeft"
      },
      {
        "id": 537,
        "value": "setLeft"
      },
      {
        "id": 1009,
        "value": "initMergePointers"
      },
      {
        "id": 817,
        "value": "advancePastMid"
      },
      {
        "id": 513,
        "value": "compareMerge"
      },
      {
        "id": 553,
        "value": "breakOddRun"
      },
      {
        "id": 1,
        "value": "initScan"
      },
      {
        "id": 41,
        "value": "takeRight"
      },
      {
        "id": 449,
        "value": "takeRight"
      },
      {
        "id": 337,
        "value": "callMerge"
      },
      {
        "id": 489,
        "value": "advancePastMid"
      },
      {
        "id": 193,
        "value": "setMid"
      },
      {
        "id": 265,
        "value": "compareMerge"
      },
      {
        "id": 545,
        "value": "extendLeft"
      },
      {
        "id": 577,
        "value": "copyRuns"
      },
      {
        "id": 73,
        "value": "compareMerge"
      },
      {
        "id": 609,
        "value": "incK"
      },
      {
        "id": 137,
        "value": "extendRight"
      },
      {
        "id": 889,
        "value": "compareMerge"
      },
      {
        "id": 305,
        "value": "incK"
      },
      {
        "id": 945,
        "value": "takeLeft"
      },
      {
        "id": 17,
        "value": "setRight"
      },
      {
        "id": 441,
        "value": "compareMerge"
      },
      {
        "id": 9,
        "value": "advancePastMid"
      },
      {
        "id": 209,
        "value": "copyRuns"
      },
      {
        "id": 649,
        "value": "incK"
      },
      {
        "id": 961,
        "value": "setMergedTrue"
      },
      {
        "id": 185,
        "value": "advanceAfterMerge"
      },
      {
        "id": 665,
        "value": "incK"
      },
      {
        "id": 569,
        "value": "whileScan"
      },
      {
        "id": 937,
        "value": "compareMerge"
      },
      {
        "id": 81,
        "value": "advanceAfterMerge"
      },
      {
        "id": 617,
        "value": "takeLeft"
      },
      {
        "id": 929,
        "value": "compareMerge"
      },
      {
        "id": 561,
        "value": "repeatPass"
      },
      {
        "id": 417,
        "value": "initMergePointers"
      },
      {
        "id": 401,
        "value": "advancePastMid"
      }
    ],
    "left": [
      {
        "id": 410,
        "value": "5"
      },
      {
        "id": 626,
        "value": "0"
      },
      {
        "id": 202,
        "value": "13"
      },
      {
        "id": 850,
        "value": "0"
      },
      {
        "id": 722,
        "value": "11"
      },
      {
        "id": 946,
        "value": "0"
      },
      {
        "id": 562,
        "value": "\u2014"
      },
      {
        "id": 482,
        "value": "11"
      },
      {
        "id": 730,
        "value": "11"
      },
      {
        "id": 882,
        "value": "0"
      },
      {
        "id": 698,
        "value": "11"
      },
      {
        "id": 418,
        "value": "5"
      },
      {
        "id": 130,
        "value": "5"
      },
      {
        "id": 954,
        "value": "0"
      },
      {
        "id": 834,
        "value": "0"
      },
      {
        "id": 658,
        "value": "0"
      },
      {
        "id": 602,
        "value": "0"
      },
      {
        "id": 458,
        "value": "5"
      },
      {
        "id": 146,
        "value": "8"
      },
      {
        "id": 866,
        "value": "0"
      },
      {
        "id": 682,
        "value": "11"
      },
      {
        "id": 218,
        "value": "13"
      },
      {
        "id": 442,
        "value": "5"
      },
      {
        "id": 2,
        "value": "\u2014"
      },
      {
        "id": 210,
        "value": "13"
      },
      {
        "id": 786,
        "value": "19"
      },
      {
        "id": 154,
        "value": "8"
      },
      {
        "id": 106,
        "value": "5"
      },
      {
        "id": 634,
        "value": "0"
      },
      {
        "id": 506,
        "value": "15"
      },
      {
        "id": 522,
        "value": "15"
      },
      {
        "id": 242,
        "value": "15"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 818,
        "value": "0"
      },
      {
        "id": 874,
        "value": "0"
      },
      {
        "id": 642,
        "value": "0"
      },
      {
        "id": 530,
        "value": "15"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 714,
        "value": "11"
      },
      {
        "id": 586,
        "value": "0"
      },
      {
        "id": 498,
        "value": "15"
      },
      {
        "id": 346,
        "value": "0"
      },
      {
        "id": 98,
        "value": "5"
      },
      {
        "id": 50,
        "value": "\u2014"
      },
      {
        "id": 842,
        "value": "0"
      },
      {
        "id": 490,
        "value": "15"
      },
      {
        "id": 570,
        "value": "\u2014"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 474,
        "value": "11"
      },
      {
        "id": 298,
        "value": "17"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 994,
        "value": "0"
      },
      {
        "id": 930,
        "value": "0"
      },
      {
        "id": 594,
        "value": "0"
      },
      {
        "id": 250,
        "value": "15"
      },
      {
        "id": 274,
        "value": "15"
      },
      {
        "id": 738,
        "value": "11"
      },
      {
        "id": 906,
        "value": "0"
      },
      {
        "id": 922,
        "value": "0"
      },
      {
        "id": 258,
        "value": "15"
      },
      {
        "id": 90,
        "value": "5"
      },
      {
        "id": 234,
        "value": "\u2014"
      },
      {
        "id": 58,
        "value": "3"
      },
      {
        "id": 378,
        "value": "0"
      },
      {
        "id": 546,
        "value": "19"
      },
      {
        "id": 914,
        "value": "0"
      },
      {
        "id": 690,
        "value": "11"
      },
      {
        "id": 74,
        "value": "3"
      },
      {
        "id": 770,
        "value": "19"
      },
      {
        "id": 138,
        "value": "8"
      },
      {
        "id": 1002,
        "value": "0"
      },
      {
        "id": 962,
        "value": "0"
      },
      {
        "id": 170,
        "value": "11"
      },
      {
        "id": 610,
        "value": "0"
      },
      {
        "id": 66,
        "value": "3"
      },
      {
        "id": 466,
        "value": "\u2014"
      },
      {
        "id": 394,
        "value": "0"
      },
      {
        "id": 890,
        "value": "0"
      },
      {
        "id": 226,
        "value": "13"
      },
      {
        "id": 970,
        "value": "19"
      },
      {
        "id": 122,
        "value": "5"
      },
      {
        "id": 402,
        "value": "5"
      },
      {
        "id": 290,
        "value": "17"
      },
      {
        "id": 434,
        "value": "5"
      },
      {
        "id": 178,
        "value": "11"
      },
      {
        "id": 538,
        "value": "19"
      },
      {
        "id": 618,
        "value": "0"
      },
      {
        "id": 362,
        "value": "0"
      },
      {
        "id": 266,
        "value": "15"
      },
      {
        "id": 858,
        "value": "0"
      },
      {
        "id": 778,
        "value": "19"
      },
      {
        "id": 978,
        "value": "19"
      },
      {
        "id": 706,
        "value": "11"
      },
      {
        "id": 186,
        "value": "\u2014"
      },
      {
        "id": 450,
        "value": "5"
      },
      {
        "id": 674,
        "value": "11"
      },
      {
        "id": 578,
        "value": "0"
      },
      {
        "id": 426,
        "value": "5"
      },
      {
        "id": 354,
        "value": "0"
      },
      {
        "id": 322,
        "value": "19"
      },
      {
        "id": 82,
        "value": "\u2014"
      },
      {
        "id": 794,
        "value": "\u2014"
      },
      {
        "id": 162,
        "value": "\u2014"
      },
      {
        "id": 386,
        "value": "0"
      },
      {
        "id": 938,
        "value": "0"
      },
      {
        "id": 754,
        "value": "11"
      },
      {
        "id": 370,
        "value": "0"
      },
      {
        "id": 810,
        "value": "\u2014"
      },
      {
        "id": 194,
        "value": "13"
      },
      {
        "id": 666,
        "value": "0"
      },
      {
        "id": 554,
        "value": "19"
      },
      {
        "id": 762,
        "value": "11"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 338,
        "value": "0"
      },
      {
        "id": 826,
        "value": "0"
      },
      {
        "id": 114,
        "value": "5"
      },
      {
        "id": 986,
        "value": "19"
      },
      {
        "id": 1010,
        "value": "0"
      },
      {
        "id": 650,
        "value": "0"
      },
      {
        "id": 306,
        "value": "17"
      },
      {
        "id": 314,
        "value": "19"
      },
      {
        "id": 514,
        "value": "15"
      },
      {
        "id": 802,
        "value": "\u2014"
      },
      {
        "id": 330,
        "value": "0"
      },
      {
        "id": 282,
        "value": "15"
      },
      {
        "id": 898,
        "value": "0"
      },
      {
        "id": 746,
        "value": "11"
      }
    ],
    "mid": [
      {
        "id": 83,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "1"
      },
      {
        "id": 299,
        "value": "17"
      },
      {
        "id": 827,
        "value": "10"
      },
      {
        "id": 59,
        "value": "3"
      },
      {
        "id": 995,
        "value": "18"
      },
      {
        "id": 419,
        "value": "7"
      },
      {
        "id": 467,
        "value": "\u2014"
      },
      {
        "id": 235,
        "value": "\u2014"
      },
      {
        "id": 963,
        "value": "10"
      },
      {
        "id": 811,
        "value": "\u2014"
      },
      {
        "id": 707,
        "value": "14"
      },
      {
        "id": 723,
        "value": "14"
      },
      {
        "id": 147,
        "value": "8"
      },
      {
        "id": 387,
        "value": "2"
      },
      {
        "id": 619,
        "value": "4"
      },
      {
        "id": 107,
        "value": "6"
      },
      {
        "id": 443,
        "value": "7"
      },
      {
        "id": 779,
        "value": "19"
      },
      {
        "id": 851,
        "value": "10"
      },
      {
        "id": 731,
        "value": "14"
      },
      {
        "id": 555,
        "value": "19"
      },
      {
        "id": 683,
        "value": "14"
      },
      {
        "id": 635,
        "value": "4"
      },
      {
        "id": 523,
        "value": "16"
      },
      {
        "id": 163,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "6"
      },
      {
        "id": 931,
        "value": "10"
      },
      {
        "id": 915,
        "value": "10"
      },
      {
        "id": 267,
        "value": "15"
      },
      {
        "id": 203,
        "value": "13"
      },
      {
        "id": 27,
        "value": "1"
      },
      {
        "id": 219,
        "value": "13"
      },
      {
        "id": 451,
        "value": "7"
      },
      {
        "id": 939,
        "value": "10"
      },
      {
        "id": 667,
        "value": "4"
      },
      {
        "id": 131,
        "value": "6"
      },
      {
        "id": 491,
        "value": "16"
      },
      {
        "id": 363,
        "value": "2"
      },
      {
        "id": 907,
        "value": "10"
      },
      {
        "id": 51,
        "value": "\u2014"
      },
      {
        "id": 795,
        "value": "\u2014"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 11,
        "value": "1"
      },
      {
        "id": 427,
        "value": "7"
      },
      {
        "id": 179,
        "value": "11"
      },
      {
        "id": 675,
        "value": "\u2014"
      },
      {
        "id": 899,
        "value": "10"
      },
      {
        "id": 955,
        "value": "10"
      },
      {
        "id": 579,
        "value": "4"
      },
      {
        "id": 987,
        "value": "19"
      },
      {
        "id": 395,
        "value": "2"
      },
      {
        "id": 651,
        "value": "4"
      },
      {
        "id": 531,
        "value": "16"
      },
      {
        "id": 211,
        "value": "13"
      },
      {
        "id": 563,
        "value": "\u2014"
      },
      {
        "id": 139,
        "value": "8"
      },
      {
        "id": 291,
        "value": "17"
      },
      {
        "id": 411,
        "value": "7"
      },
      {
        "id": 171,
        "value": "11"
      },
      {
        "id": 699,
        "value": "14"
      },
      {
        "id": 347,
        "value": "2"
      },
      {
        "id": 979,
        "value": "19"
      },
      {
        "id": 227,
        "value": "13"
      },
      {
        "id": 595,
        "value": "4"
      },
      {
        "id": 275,
        "value": "15"
      },
      {
        "id": 459,
        "value": "7"
      },
      {
        "id": 155,
        "value": "8"
      },
      {
        "id": 755,
        "value": "14"
      },
      {
        "id": 43,
        "value": "1"
      },
      {
        "id": 195,
        "value": "13"
      },
      {
        "id": 603,
        "value": "4"
      },
      {
        "id": 627,
        "value": "4"
      },
      {
        "id": 331,
        "value": "2"
      },
      {
        "id": 947,
        "value": "10"
      },
      {
        "id": 787,
        "value": "19"
      },
      {
        "id": 123,
        "value": "6"
      },
      {
        "id": 843,
        "value": "10"
      },
      {
        "id": 539,
        "value": "\u2014"
      },
      {
        "id": 475,
        "value": "12"
      },
      {
        "id": 243,
        "value": "15"
      },
      {
        "id": 75,
        "value": "3"
      },
      {
        "id": 571,
        "value": "\u2014"
      },
      {
        "id": 507,
        "value": "16"
      },
      {
        "id": 883,
        "value": "10"
      },
      {
        "id": 739,
        "value": "14"
      },
      {
        "id": 187,
        "value": "\u2014"
      },
      {
        "id": 547,
        "value": "\u2014"
      },
      {
        "id": 371,
        "value": "2"
      },
      {
        "id": 691,
        "value": "14"
      },
      {
        "id": 307,
        "value": "17"
      },
      {
        "id": 67,
        "value": "3"
      },
      {
        "id": 323,
        "value": "19"
      },
      {
        "id": 803,
        "value": "\u2014"
      },
      {
        "id": 891,
        "value": "10"
      },
      {
        "id": 611,
        "value": "4"
      },
      {
        "id": 403,
        "value": "7"
      },
      {
        "id": 715,
        "value": "14"
      },
      {
        "id": 859,
        "value": "10"
      },
      {
        "id": 819,
        "value": "10"
      },
      {
        "id": 971,
        "value": "\u2014"
      },
      {
        "id": 875,
        "value": "10"
      },
      {
        "id": 259,
        "value": "15"
      },
      {
        "id": 435,
        "value": "7"
      },
      {
        "id": 99,
        "value": "6"
      },
      {
        "id": 923,
        "value": "10"
      },
      {
        "id": 251,
        "value": "15"
      },
      {
        "id": 339,
        "value": "2"
      },
      {
        "id": 1003,
        "value": "18"
      },
      {
        "id": 315,
        "value": "\u2014"
      },
      {
        "id": 771,
        "value": "\u2014"
      },
      {
        "id": 643,
        "value": "4"
      },
      {
        "id": 483,
        "value": "12"
      },
      {
        "id": 115,
        "value": "6"
      },
      {
        "id": 379,
        "value": "2"
      },
      {
        "id": 1011,
        "value": "18"
      },
      {
        "id": 587,
        "value": "4"
      },
      {
        "id": 355,
        "value": "2"
      },
      {
        "id": 835,
        "value": "10"
      },
      {
        "id": 747,
        "value": "14"
      },
      {
        "id": 283,
        "value": "15"
      },
      {
        "id": 763,
        "value": "14"
      },
      {
        "id": 515,
        "value": "16"
      },
      {
        "id": 867,
        "value": "10"
      },
      {
        "id": 19,
        "value": "1"
      },
      {
        "id": 499,
        "value": "16"
      },
      {
        "id": 659,
        "value": "4"
      }
    ],
    "right": [
      {
        "id": 940,
        "value": "18"
      },
      {
        "id": 804,
        "value": "\u2014"
      },
      {
        "id": 548,
        "value": "\u2014"
      },
      {
        "id": 908,
        "value": "18"
      },
      {
        "id": 996,
        "value": "\u2014"
      },
      {
        "id": 708,
        "value": "15"
      },
      {
        "id": 812,
        "value": "\u2014"
      },
      {
        "id": 948,
        "value": "18"
      },
      {
        "id": 300,
        "value": "18"
      },
      {
        "id": 452,
        "value": "10"
      },
      {
        "id": 140,
        "value": "9"
      },
      {
        "id": 292,
        "value": "18"
      },
      {
        "id": 332,
        "value": "\u2014"
      },
      {
        "id": 900,
        "value": "18"
      },
      {
        "id": 204,
        "value": "14"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 652,
        "value": "10"
      },
      {
        "id": 636,
        "value": "10"
      },
      {
        "id": 116,
        "value": "7"
      },
      {
        "id": 596,
        "value": "10"
      },
      {
        "id": 500,
        "value": "\u2014"
      },
      {
        "id": 988,
        "value": "\u2014"
      },
      {
        "id": 172,
        "value": "12"
      },
      {
        "id": 964,
        "value": "18"
      },
      {
        "id": 180,
        "value": "12"
      },
      {
        "id": 44,
        "value": "2"
      },
      {
        "id": 1004,
        "value": "19"
      },
      {
        "id": 780,
        "value": "\u2014"
      },
      {
        "id": 852,
        "value": "18"
      },
      {
        "id": 972,
        "value": "\u2014"
      },
      {
        "id": 884,
        "value": "18"
      },
      {
        "id": 420,
        "value": "10"
      },
      {
        "id": 612,
        "value": "10"
      },
      {
        "id": 572,
        "value": "\u2014"
      },
      {
        "id": 460,
        "value": "10"
      },
      {
        "id": 372,
        "value": "4"
      },
      {
        "id": 556,
        "value": "\u2014"
      },
      {
        "id": 108,
        "value": "7"
      },
      {
        "id": 676,
        "value": "\u2014"
      },
      {
        "id": 540,
        "value": "\u2014"
      },
      {
        "id": 100,
        "value": "7"
      },
      {
        "id": 364,
        "value": "4"
      },
      {
        "id": 932,
        "value": "18"
      },
      {
        "id": 68,
        "value": "\u2014"
      },
      {
        "id": 604,
        "value": "10"
      },
      {
        "id": 620,
        "value": "10"
      },
      {
        "id": 196,
        "value": "\u2014"
      },
      {
        "id": 836,
        "value": "18"
      },
      {
        "id": 220,
        "value": "14"
      },
      {
        "id": 52,
        "value": "\u2014"
      },
      {
        "id": 748,
        "value": "18"
      },
      {
        "id": 924,
        "value": "18"
      },
      {
        "id": 92,
        "value": "\u2014"
      },
      {
        "id": 388,
        "value": "4"
      },
      {
        "id": 76,
        "value": "4"
      },
      {
        "id": 380,
        "value": "4"
      },
      {
        "id": 28,
        "value": "2"
      },
      {
        "id": 36,
        "value": "2"
      },
      {
        "id": 276,
        "value": "16"
      },
      {
        "id": 692,
        "value": "\u2014"
      },
      {
        "id": 356,
        "value": "4"
      },
      {
        "id": 252,
        "value": "16"
      },
      {
        "id": 876,
        "value": "18"
      },
      {
        "id": 508,
        "value": "18"
      },
      {
        "id": 956,
        "value": "18"
      },
      {
        "id": 20,
        "value": "2"
      },
      {
        "id": 580,
        "value": "10"
      },
      {
        "id": 892,
        "value": "18"
      },
      {
        "id": 308,
        "value": "18"
      },
      {
        "id": 348,
        "value": "4"
      },
      {
        "id": 516,
        "value": "18"
      },
      {
        "id": 756,
        "value": "18"
      },
      {
        "id": 716,
        "value": "18"
      },
      {
        "id": 444,
        "value": "10"
      },
      {
        "id": 588,
        "value": "10"
      },
      {
        "id": 12,
        "value": "\u2014"
      },
      {
        "id": 732,
        "value": "18"
      },
      {
        "id": 492,
        "value": "\u2014"
      },
      {
        "id": 132,
        "value": "7"
      },
      {
        "id": 228,
        "value": "14"
      },
      {
        "id": 284,
        "value": "16"
      },
      {
        "id": 428,
        "value": "10"
      },
      {
        "id": 148,
        "value": "10"
      },
      {
        "id": 476,
        "value": "14"
      },
      {
        "id": 684,
        "value": "\u2014"
      },
      {
        "id": 188,
        "value": "\u2014"
      },
      {
        "id": 244,
        "value": "16"
      },
      {
        "id": 236,
        "value": "\u2014"
      },
      {
        "id": 412,
        "value": "10"
      },
      {
        "id": 212,
        "value": "14"
      },
      {
        "id": 828,
        "value": "11"
      },
      {
        "id": 1012,
        "value": "19"
      },
      {
        "id": 788,
        "value": "\u2014"
      },
      {
        "id": 484,
        "value": "14"
      },
      {
        "id": 532,
        "value": "18"
      },
      {
        "id": 796,
        "value": "\u2014"
      },
      {
        "id": 772,
        "value": "\u2014"
      },
      {
        "id": 436,
        "value": "10"
      },
      {
        "id": 340,
        "value": "4"
      },
      {
        "id": 700,
        "value": "\u2014"
      },
      {
        "id": 396,
        "value": "4"
      },
      {
        "id": 60,
        "value": "\u2014"
      },
      {
        "id": 644,
        "value": "10"
      },
      {
        "id": 324,
        "value": "\u2014"
      },
      {
        "id": 660,
        "value": "10"
      },
      {
        "id": 628,
        "value": "10"
      },
      {
        "id": 164,
        "value": "\u2014"
      },
      {
        "id": 916,
        "value": "18"
      },
      {
        "id": 980,
        "value": "\u2014"
      },
      {
        "id": 668,
        "value": "10"
      },
      {
        "id": 724,
        "value": "18"
      },
      {
        "id": 316,
        "value": "\u2014"
      },
      {
        "id": 124,
        "value": "7"
      },
      {
        "id": 860,
        "value": "18"
      },
      {
        "id": 820,
        "value": "\u2014"
      },
      {
        "id": 740,
        "value": "18"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 524,
        "value": "18"
      },
      {
        "id": 844,
        "value": "18"
      },
      {
        "id": 868,
        "value": "18"
      },
      {
        "id": 156,
        "value": "10"
      },
      {
        "id": 468,
        "value": "\u2014"
      },
      {
        "id": 404,
        "value": "\u2014"
      },
      {
        "id": 764,
        "value": "18"
      },
      {
        "id": 564,
        "value": "\u2014"
      },
      {
        "id": 260,
        "value": "16"
      },
      {
        "id": 268,
        "value": "16"
      }
    ],
    "i": [
      {
        "id": 277,
        "value": "0"
      },
      {
        "id": 525,
        "value": "0"
      },
      {
        "id": 373,
        "value": "0"
      },
      {
        "id": 781,
        "value": "20"
      },
      {
        "id": 861,
        "value": "1"
      },
      {
        "id": 77,
        "value": "0"
      },
      {
        "id": 597,
        "value": "0"
      },
      {
        "id": 869,
        "value": "1"
      },
      {
        "id": 429,
        "value": "0"
      },
      {
        "id": 29,
        "value": "0"
      },
      {
        "id": 397,
        "value": "\u2014"
      },
      {
        "id": 301,
        "value": "0"
      },
      {
        "id": 149,
        "value": "10"
      },
      {
        "id": 829,
        "value": "11"
      },
      {
        "id": 989,
        "value": "20"
      },
      {
        "id": 309,
        "value": "0"
      },
      {
        "id": 21,
        "value": "2"
      },
      {
        "id": 805,
        "value": "\u2014"
      },
      {
        "id": 445,
        "value": "1"
      },
      {
        "id": 157,
        "value": "0"
      },
      {
        "id": 221,
        "value": "0"
      },
      {
        "id": 797,
        "value": "\u2014"
      },
      {
        "id": 61,
        "value": "4"
      },
      {
        "id": 957,
        "value": "5"
      },
      {
        "id": 245,
        "value": "16"
      },
      {
        "id": 477,
        "value": "\u2014"
      },
      {
        "id": 317,
        "value": "19"
      },
      {
        "id": 709,
        "value": "15"
      },
      {
        "id": 85,
        "value": "5"
      },
      {
        "id": 877,
        "value": "1"
      },
      {
        "id": 893,
        "value": "1"
      },
      {
        "id": 981,
        "value": "20"
      },
      {
        "id": 125,
        "value": "1"
      },
      {
        "id": 181,
        "value": "0"
      },
      {
        "id": 213,
        "value": "\u2014"
      },
      {
        "id": 629,
        "value": "4"
      },
      {
        "id": 717,
        "value": "\u2014"
      },
      {
        "id": 765,
        "value": "\u2014"
      },
      {
        "id": 965,
        "value": "\u2014"
      },
      {
        "id": 837,
        "value": "\u2014"
      },
      {
        "id": 557,
        "value": "20"
      },
      {
        "id": 813,
        "value": "0"
      },
      {
        "id": 101,
        "value": "\u2014"
      },
      {
        "id": 109,
        "value": "\u2014"
      },
      {
        "id": 669,
        "value": "\u2014"
      },
      {
        "id": 133,
        "value": "1"
      },
      {
        "id": 261,
        "value": "\u2014"
      },
      {
        "id": 741,
        "value": "0"
      },
      {
        "id": 605,
        "value": "1"
      },
      {
        "id": 541,
        "value": "19"
      },
      {
        "id": 917,
        "value": "3"
      },
      {
        "id": 533,
        "value": "\u2014"
      },
      {
        "id": 757,
        "value": "0"
      },
      {
        "id": 685,
        "value": "14"
      },
      {
        "id": 421,
        "value": "0"
      },
      {
        "id": 661,
        "value": "4"
      },
      {
        "id": 517,
        "value": "0"
      },
      {
        "id": 165,
        "value": "11"
      },
      {
        "id": 189,
        "value": "13"
      },
      {
        "id": 141,
        "value": "9"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 229,
        "value": "\u2014"
      },
      {
        "id": 949,
        "value": "4"
      },
      {
        "id": 357,
        "value": "0"
      },
      {
        "id": 941,
        "value": "4"
      },
      {
        "id": 733,
        "value": "0"
      },
      {
        "id": 693,
        "value": "15"
      },
      {
        "id": 653,
        "value": "4"
      },
      {
        "id": 589,
        "value": "0"
      },
      {
        "id": 1005,
        "value": "\u2014"
      },
      {
        "id": 933,
        "value": "4"
      },
      {
        "id": 349,
        "value": "\u2014"
      },
      {
        "id": 197,
        "value": "13"
      },
      {
        "id": 845,
        "value": "0"
      },
      {
        "id": 237,
        "value": "15"
      },
      {
        "id": 789,
        "value": "20"
      },
      {
        "id": 53,
        "value": "3"
      },
      {
        "id": 997,
        "value": "19"
      },
      {
        "id": 205,
        "value": "\u2014"
      },
      {
        "id": 5,
        "value": "0"
      },
      {
        "id": 901,
        "value": "3"
      },
      {
        "id": 333,
        "value": "3"
      },
      {
        "id": 549,
        "value": "19"
      },
      {
        "id": 973,
        "value": "19"
      },
      {
        "id": 453,
        "value": "1"
      },
      {
        "id": 413,
        "value": "\u2014"
      },
      {
        "id": 493,
        "value": "17"
      },
      {
        "id": 405,
        "value": "8"
      },
      {
        "id": 117,
        "value": "0"
      },
      {
        "id": 749,
        "value": "0"
      },
      {
        "id": 173,
        "value": "0"
      },
      {
        "id": 285,
        "value": "\u2014"
      },
      {
        "id": 885,
        "value": "1"
      },
      {
        "id": 45,
        "value": "0"
      },
      {
        "id": 13,
        "value": "2"
      },
      {
        "id": 253,
        "value": "\u2014"
      },
      {
        "id": 461,
        "value": "\u2014"
      },
      {
        "id": 69,
        "value": "4"
      },
      {
        "id": 485,
        "value": "0"
      },
      {
        "id": 613,
        "value": "3"
      },
      {
        "id": 909,
        "value": "3"
      },
      {
        "id": 821,
        "value": "11"
      },
      {
        "id": 637,
        "value": "4"
      },
      {
        "id": 381,
        "value": "0"
      },
      {
        "id": 621,
        "value": "3"
      },
      {
        "id": 501,
        "value": "17"
      },
      {
        "id": 93,
        "value": "7"
      },
      {
        "id": 677,
        "value": "11"
      },
      {
        "id": 581,
        "value": "\u2014"
      },
      {
        "id": 1013,
        "value": "0"
      },
      {
        "id": 341,
        "value": "\u2014"
      },
      {
        "id": 773,
        "value": "19"
      },
      {
        "id": 365,
        "value": "0"
      },
      {
        "id": 269,
        "value": "0"
      },
      {
        "id": 565,
        "value": "\u2014"
      },
      {
        "id": 853,
        "value": "0"
      },
      {
        "id": 573,
        "value": "0"
      },
      {
        "id": 645,
        "value": "4"
      },
      {
        "id": 925,
        "value": "4"
      },
      {
        "id": 389,
        "value": "0"
      },
      {
        "id": 325,
        "value": "20"
      },
      {
        "id": 509,
        "value": "\u2014"
      },
      {
        "id": 701,
        "value": "15"
      },
      {
        "id": 293,
        "value": "\u2014"
      },
      {
        "id": 437,
        "value": "1"
      },
      {
        "id": 725,
        "value": "0"
      },
      {
        "id": 469,
        "value": "11"
      }
    ],
    "j": [
      {
        "id": 174,
        "value": "0"
      },
      {
        "id": 782,
        "value": "\u2014"
      },
      {
        "id": 662,
        "value": "3"
      },
      {
        "id": 830,
        "value": "\u2014"
      },
      {
        "id": 766,
        "value": "\u2014"
      },
      {
        "id": 846,
        "value": "0"
      },
      {
        "id": 966,
        "value": "\u2014"
      },
      {
        "id": 750,
        "value": "3"
      },
      {
        "id": 542,
        "value": "\u2014"
      },
      {
        "id": 294,
        "value": "\u2014"
      },
      {
        "id": 638,
        "value": "1"
      },
      {
        "id": 78,
        "value": "0"
      },
      {
        "id": 198,
        "value": "\u2014"
      },
      {
        "id": 206,
        "value": "\u2014"
      },
      {
        "id": 910,
        "value": "3"
      },
      {
        "id": 454,
        "value": "1"
      },
      {
        "id": 350,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "0"
      },
      {
        "id": 974,
        "value": "\u2014"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 262,
        "value": "\u2014"
      },
      {
        "id": 606,
        "value": "1"
      },
      {
        "id": 790,
        "value": "\u2014"
      },
      {
        "id": 822,
        "value": "\u2014"
      },
      {
        "id": 102,
        "value": "\u2014"
      },
      {
        "id": 518,
        "value": "1"
      },
      {
        "id": 870,
        "value": "0"
      },
      {
        "id": 990,
        "value": "\u2014"
      },
      {
        "id": 62,
        "value": "\u2014"
      },
      {
        "id": 358,
        "value": "0"
      },
      {
        "id": 926,
        "value": "5"
      },
      {
        "id": 566,
        "value": "\u2014"
      },
      {
        "id": 318,
        "value": "\u2014"
      },
      {
        "id": 406,
        "value": "\u2014"
      },
      {
        "id": 6,
        "value": "\u2014"
      },
      {
        "id": 1006,
        "value": "\u2014"
      },
      {
        "id": 1014,
        "value": "0"
      },
      {
        "id": 462,
        "value": "2"
      },
      {
        "id": 150,
        "value": "\u2014"
      },
      {
        "id": 862,
        "value": "0"
      },
      {
        "id": 278,
        "value": "\u2014"
      },
      {
        "id": 686,
        "value": "\u2014"
      },
      {
        "id": 214,
        "value": "\u2014"
      },
      {
        "id": 726,
        "value": "0"
      },
      {
        "id": 814,
        "value": "\u2014"
      },
      {
        "id": 430,
        "value": "0"
      },
      {
        "id": 126,
        "value": "0"
      },
      {
        "id": 998,
        "value": "\u2014"
      },
      {
        "id": 894,
        "value": "3"
      },
      {
        "id": 670,
        "value": "3"
      },
      {
        "id": 398,
        "value": "\u2014"
      },
      {
        "id": 94,
        "value": "\u2014"
      },
      {
        "id": 654,
        "value": "3"
      },
      {
        "id": 854,
        "value": "0"
      },
      {
        "id": 390,
        "value": "1"
      },
      {
        "id": 134,
        "value": "0"
      },
      {
        "id": 70,
        "value": "\u2014"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 470,
        "value": "\u2014"
      },
      {
        "id": 326,
        "value": "\u2014"
      },
      {
        "id": 486,
        "value": "0"
      },
      {
        "id": 622,
        "value": "1"
      },
      {
        "id": 54,
        "value": "\u2014"
      },
      {
        "id": 734,
        "value": "0"
      },
      {
        "id": 334,
        "value": "\u2014"
      },
      {
        "id": 694,
        "value": "\u2014"
      },
      {
        "id": 718,
        "value": "\u2014"
      },
      {
        "id": 478,
        "value": "\u2014"
      },
      {
        "id": 270,
        "value": "0"
      },
      {
        "id": 438,
        "value": "1"
      },
      {
        "id": 510,
        "value": "\u2014"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 574,
        "value": "\u2014"
      },
      {
        "id": 238,
        "value": "\u2014"
      },
      {
        "id": 110,
        "value": "\u2014"
      },
      {
        "id": 558,
        "value": "\u2014"
      },
      {
        "id": 806,
        "value": "\u2014"
      },
      {
        "id": 246,
        "value": "\u2014"
      },
      {
        "id": 22,
        "value": "\u2014"
      },
      {
        "id": 86,
        "value": "\u2014"
      },
      {
        "id": 446,
        "value": "1"
      },
      {
        "id": 958,
        "value": "7"
      },
      {
        "id": 702,
        "value": "\u2014"
      },
      {
        "id": 934,
        "value": "5"
      },
      {
        "id": 902,
        "value": "3"
      },
      {
        "id": 46,
        "value": "0"
      },
      {
        "id": 942,
        "value": "6"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 366,
        "value": "0"
      },
      {
        "id": 886,
        "value": "2"
      },
      {
        "id": 142,
        "value": "\u2014"
      },
      {
        "id": 774,
        "value": "\u2014"
      },
      {
        "id": 118,
        "value": "0"
      },
      {
        "id": 982,
        "value": "\u2014"
      },
      {
        "id": 254,
        "value": "\u2014"
      },
      {
        "id": 646,
        "value": "2"
      },
      {
        "id": 598,
        "value": "1"
      },
      {
        "id": 374,
        "value": "0"
      },
      {
        "id": 950,
        "value": "7"
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
        "id": 422,
        "value": "0"
      },
      {
        "id": 838,
        "value": "\u2014"
      },
      {
        "id": 534,
        "value": "\u2014"
      },
      {
        "id": 798,
        "value": "\u2014"
      },
      {
        "id": 230,
        "value": "\u2014"
      },
      {
        "id": 190,
        "value": "\u2014"
      },
      {
        "id": 302,
        "value": "0"
      },
      {
        "id": 678,
        "value": "\u2014"
      },
      {
        "id": 742,
        "value": "1"
      },
      {
        "id": 222,
        "value": "\u2014"
      },
      {
        "id": 494,
        "value": "\u2014"
      },
      {
        "id": 918,
        "value": "4"
      },
      {
        "id": 614,
        "value": "1"
      },
      {
        "id": 630,
        "value": "1"
      },
      {
        "id": 878,
        "value": "2"
      },
      {
        "id": 182,
        "value": "\u2014"
      },
      {
        "id": 590,
        "value": "0"
      },
      {
        "id": 582,
        "value": "\u2014"
      },
      {
        "id": 382,
        "value": "1"
      },
      {
        "id": 526,
        "value": "\u2014"
      },
      {
        "id": 710,
        "value": "\u2014"
      },
      {
        "id": 502,
        "value": "\u2014"
      },
      {
        "id": 414,
        "value": "\u2014"
      },
      {
        "id": 342,
        "value": "\u2014"
      },
      {
        "id": 758,
        "value": "3"
      },
      {
        "id": 550,
        "value": "\u2014"
      }
    ],
    "k": [
      {
        "id": 535,
        "value": "\u2014"
      },
      {
        "id": 703,
        "value": "\u2014"
      },
      {
        "id": 591,
        "value": "0"
      },
      {
        "id": 527,
        "value": "17"
      },
      {
        "id": 711,
        "value": "\u2014"
      },
      {
        "id": 919,
        "value": "7"
      },
      {
        "id": 207,
        "value": "\u2014"
      },
      {
        "id": 319,
        "value": "\u2014"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 935,
        "value": "9"
      },
      {
        "id": 423,
        "value": "5"
      },
      {
        "id": 735,
        "value": "11"
      },
      {
        "id": 367,
        "value": "0"
      },
      {
        "id": 431,
        "value": "5"
      },
      {
        "id": 983,
        "value": "\u2014"
      },
      {
        "id": 759,
        "value": "14"
      },
      {
        "id": 959,
        "value": "12"
      },
      {
        "id": 247,
        "value": "\u2014"
      },
      {
        "id": 15,
        "value": "\u2014"
      },
      {
        "id": 231,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 567,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "0"
      },
      {
        "id": 23,
        "value": "\u2014"
      },
      {
        "id": 815,
        "value": "\u2014"
      },
      {
        "id": 767,
        "value": "\u2014"
      },
      {
        "id": 719,
        "value": "\u2014"
      },
      {
        "id": 679,
        "value": "\u2014"
      },
      {
        "id": 743,
        "value": "12"
      },
      {
        "id": 55,
        "value": "\u2014"
      },
      {
        "id": 871,
        "value": "1"
      },
      {
        "id": 199,
        "value": "\u2014"
      },
      {
        "id": 623,
        "value": "4"
      },
      {
        "id": 687,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "6"
      },
      {
        "id": 775,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "11"
      },
      {
        "id": 751,
        "value": "14"
      },
      {
        "id": 991,
        "value": "\u2014"
      },
      {
        "id": 663,
        "value": "7"
      },
      {
        "id": 967,
        "value": "\u2014"
      },
      {
        "id": 671,
        "value": "8"
      },
      {
        "id": 255,
        "value": "\u2014"
      },
      {
        "id": 1015,
        "value": "0"
      },
      {
        "id": 727,
        "value": "11"
      },
      {
        "id": 495,
        "value": "\u2014"
      },
      {
        "id": 487,
        "value": "11"
      },
      {
        "id": 223,
        "value": "14"
      },
      {
        "id": 183,
        "value": "12"
      },
      {
        "id": 415,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "5"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 799,
        "value": "\u2014"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 879,
        "value": "3"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 111,
        "value": "\u2014"
      },
      {
        "id": 447,
        "value": "7"
      },
      {
        "id": 479,
        "value": "\u2014"
      },
      {
        "id": 295,
        "value": "\u2014"
      },
      {
        "id": 999,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "\u2014"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 655,
        "value": "7"
      },
      {
        "id": 911,
        "value": "6"
      },
      {
        "id": 887,
        "value": "3"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 31,
        "value": "0"
      },
      {
        "id": 47,
        "value": "0"
      },
      {
        "id": 559,
        "value": "\u2014"
      },
      {
        "id": 639,
        "value": "5"
      },
      {
        "id": 311,
        "value": "18"
      },
      {
        "id": 391,
        "value": "1"
      },
      {
        "id": 343,
        "value": "\u2014"
      },
      {
        "id": 943,
        "value": "10"
      },
      {
        "id": 303,
        "value": "17"
      },
      {
        "id": 863,
        "value": "1"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 407,
        "value": "\u2014"
      },
      {
        "id": 79,
        "value": "3"
      },
      {
        "id": 583,
        "value": "\u2014"
      },
      {
        "id": 975,
        "value": "\u2014"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 463,
        "value": "10"
      },
      {
        "id": 823,
        "value": "\u2014"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 471,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "6"
      },
      {
        "id": 855,
        "value": "0"
      },
      {
        "id": 359,
        "value": "0"
      },
      {
        "id": 335,
        "value": "\u2014"
      },
      {
        "id": 455,
        "value": "7"
      },
      {
        "id": 839,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "\u2014"
      },
      {
        "id": 951,
        "value": "11"
      },
      {
        "id": 383,
        "value": "1"
      },
      {
        "id": 575,
        "value": "\u2014"
      },
      {
        "id": 71,
        "value": "\u2014"
      },
      {
        "id": 607,
        "value": "2"
      },
      {
        "id": 695,
        "value": "\u2014"
      },
      {
        "id": 783,
        "value": "\u2014"
      },
      {
        "id": 327,
        "value": "\u2014"
      },
      {
        "id": 903,
        "value": "6"
      },
      {
        "id": 615,
        "value": "4"
      },
      {
        "id": 599,
        "value": "1"
      },
      {
        "id": 647,
        "value": "6"
      },
      {
        "id": 895,
        "value": "4"
      },
      {
        "id": 279,
        "value": "16"
      },
      {
        "id": 1007,
        "value": "\u2014"
      },
      {
        "id": 807,
        "value": "\u2014"
      },
      {
        "id": 271,
        "value": "15"
      },
      {
        "id": 543,
        "value": "\u2014"
      },
      {
        "id": 375,
        "value": "0"
      },
      {
        "id": 159,
        "value": "8"
      },
      {
        "id": 847,
        "value": "0"
      },
      {
        "id": 503,
        "value": "\u2014"
      },
      {
        "id": 631,
        "value": "5"
      },
      {
        "id": 791,
        "value": "\u2014"
      },
      {
        "id": 351,
        "value": "\u2014"
      },
      {
        "id": 927,
        "value": "9"
      },
      {
        "id": 519,
        "value": "16"
      },
      {
        "id": 831,
        "value": "\u2014"
      },
      {
        "id": 511,
        "value": "\u2014"
      },
      {
        "id": 551,
        "value": "\u2014"
      },
      {
        "id": 399,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 439,
        "value": "7"
      }
    ],
    "merged": [
      {
        "id": 400,
        "value": "true"
      },
      {
        "id": 736,
        "value": "true"
      },
      {
        "id": 552,
        "value": "true"
      },
      {
        "id": 24,
        "value": "false"
      },
      {
        "id": 560,
        "value": "true"
      },
      {
        "id": 432,
        "value": "true"
      },
      {
        "id": 888,
        "value": "false"
      },
      {
        "id": 928,
        "value": "false"
      },
      {
        "id": 184,
        "value": "true"
      },
      {
        "id": 880,
        "value": "false"
      },
      {
        "id": 208,
        "value": "true"
      },
      {
        "id": 920,
        "value": "false"
      },
      {
        "id": 960,
        "value": "false"
      },
      {
        "id": 904,
        "value": "false"
      },
      {
        "id": 856,
        "value": "false"
      },
      {
        "id": 664,
        "value": "false"
      },
      {
        "id": 152,
        "value": "true"
      },
      {
        "id": 288,
        "value": "true"
      },
      {
        "id": 240,
        "value": "true"
      },
      {
        "id": 832,
        "value": "false"
      },
      {
        "id": 944,
        "value": "false"
      },
      {
        "id": 544,
        "value": "true"
      },
      {
        "id": 688,
        "value": "true"
      },
      {
        "id": 1016,
        "value": "false"
      },
      {
        "id": 104,
        "value": "true"
      },
      {
        "id": 568,
        "value": "\u2014"
      },
      {
        "id": 200,
        "value": "true"
      },
      {
        "id": 672,
        "value": "false"
      },
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 648,
        "value": "false"
      },
      {
        "id": 984,
        "value": "true"
      },
      {
        "id": 608,
        "value": "false"
      },
      {
        "id": 80,
        "value": "true"
      },
      {
        "id": 776,
        "value": "true"
      },
      {
        "id": 528,
        "value": "true"
      },
      {
        "id": 752,
        "value": "true"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 680,
        "value": "true"
      },
      {
        "id": 160,
        "value": "true"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 952,
        "value": "false"
      },
      {
        "id": 280,
        "value": "true"
      },
      {
        "id": 456,
        "value": "true"
      },
      {
        "id": 912,
        "value": "false"
      },
      {
        "id": 176,
        "value": "true"
      },
      {
        "id": 48,
        "value": "false"
      },
      {
        "id": 976,
        "value": "true"
      },
      {
        "id": 224,
        "value": "true"
      },
      {
        "id": 744,
        "value": "true"
      },
      {
        "id": 592,
        "value": "false"
      },
      {
        "id": 800,
        "value": "true"
      },
      {
        "id": 784,
        "value": "true"
      },
      {
        "id": 616,
        "value": "false"
      },
      {
        "id": 656,
        "value": "false"
      },
      {
        "id": 496,
        "value": "true"
      },
      {
        "id": 336,
        "value": "false"
      },
      {
        "id": 536,
        "value": "true"
      },
      {
        "id": 1000,
        "value": "false"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 120,
        "value": "true"
      },
      {
        "id": 792,
        "value": "true"
      },
      {
        "id": 296,
        "value": "true"
      },
      {
        "id": 720,
        "value": "true"
      },
      {
        "id": 968,
        "value": "true"
      },
      {
        "id": 264,
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
        "id": 864,
        "value": "false"
      },
      {
        "id": 88,
        "value": "true"
      },
      {
        "id": 312,
        "value": "true"
      },
      {
        "id": 56,
        "value": "true"
      },
      {
        "id": 440,
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
        "id": 416,
        "value": "true"
      },
      {
        "id": 488,
        "value": "true"
      },
      {
        "id": 128,
        "value": "true"
      },
      {
        "id": 504,
        "value": "true"
      },
      {
        "id": 936,
        "value": "false"
      },
      {
        "id": 824,
        "value": "false"
      },
      {
        "id": 632,
        "value": "false"
      },
      {
        "id": 320,
        "value": "true"
      },
      {
        "id": 352,
        "value": "false"
      },
      {
        "id": 872,
        "value": "false"
      },
      {
        "id": 512,
        "value": "true"
      },
      {
        "id": 40,
        "value": "false"
      },
      {
        "id": 584,
        "value": "false"
      },
      {
        "id": 520,
        "value": "true"
      },
      {
        "id": 272,
        "value": "true"
      },
      {
        "id": 392,
        "value": "false"
      },
      {
        "id": 448,
        "value": "true"
      },
      {
        "id": 384,
        "value": "false"
      },
      {
        "id": 256,
        "value": "true"
      },
      {
        "id": 216,
        "value": "true"
      },
      {
        "id": 192,
        "value": "true"
      },
      {
        "id": 696,
        "value": "true"
      },
      {
        "id": 168,
        "value": "true"
      },
      {
        "id": 464,
        "value": "true"
      },
      {
        "id": 480,
        "value": "true"
      },
      {
        "id": 728,
        "value": "true"
      },
      {
        "id": 848,
        "value": "false"
      },
      {
        "id": 1008,
        "value": "false"
      },
      {
        "id": 712,
        "value": "true"
      },
      {
        "id": 768,
        "value": "true"
      },
      {
        "id": 72,
        "value": "true"
      },
      {
        "id": 704,
        "value": "true"
      },
      {
        "id": 600,
        "value": "false"
      },
      {
        "id": 376,
        "value": "false"
      },
      {
        "id": 808,
        "value": "\u2014"
      },
      {
        "id": 472,
        "value": "true"
      },
      {
        "id": 344,
        "value": "false"
      },
      {
        "id": 32,
        "value": "false"
      },
      {
        "id": 368,
        "value": "false"
      },
      {
        "id": 232,
        "value": "true"
      },
      {
        "id": 896,
        "value": "false"
      },
      {
        "id": 360,
        "value": "false"
      },
      {
        "id": 992,
        "value": "true"
      },
      {
        "id": 624,
        "value": "false"
      },
      {
        "id": 640,
        "value": "false"
      },
      {
        "id": 576,
        "value": "false"
      },
      {
        "id": 760,
        "value": "true"
      },
      {
        "id": 816,
        "value": "false"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 840,
        "value": "false"
      },
      {
        "id": 424,
        "value": "true"
      },
      {
        "id": 304,
        "value": "true"
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
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 6,
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 7,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 9,
      "stepId": "extendRight",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 10,
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 11,
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 12,
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 13,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 14,
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 15,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 16,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        456,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        456,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 18,
      "stepId": "drainLeft",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        456,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 19,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 20,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "n": 20,
      "left": 3,
      "mid": null,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 22,
      "stepId": "extendLeft",
      "n": 20,
      "left": 3,
      "mid": null,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 23,
      "stepId": "setMid",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": null,
      "i": 3,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 24,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 26,
      "stepId": "extendRight",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 27,
      "stepId": "setRight",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 4,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 28,
      "stepId": "callMerge",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 29,
      "stepId": "copyRuns",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 30,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 31,
      "stepId": "whileBoth",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 32,
      "stepId": "compareMerge",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
      "merged": true,
      "array": [
        456,
        586,
        892,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 33,
      "stepId": "takeRight",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 34,
      "stepId": "incK",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": null,
      "k": 4,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 35,
      "stepId": "drainLeft",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": null,
      "k": 4,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 36,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 37,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "n": 20,
      "left": 5,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 39,
      "stepId": "extendLeft",
      "n": 20,
      "left": 5,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 40,
      "stepId": "setMid",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": null,
      "i": 6,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 41,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 42,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 44,
      "stepId": "setRight",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 45,
      "stepId": "callMerge",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 46,
      "stepId": "copyRuns",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "initMergePointers",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 48,
      "stepId": "whileBoth",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 49,
      "stepId": "compareMerge",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "takeLeft",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 51,
      "stepId": "incK",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "compareMerge",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 54,
      "stepId": "incK",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": null,
      "k": 7,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 55,
      "stepId": "drainLeft",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": null,
      "k": 7,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 56,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 57,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 58,
      "stepId": "setLeft",
      "n": 20,
      "left": 8,
      "mid": null,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 59,
      "stepId": "extendLeft",
      "n": 20,
      "left": 8,
      "mid": null,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 60,
      "stepId": "setMid",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 61,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 62,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": null,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 63,
      "stepId": "extendRight",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 9,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "setRight",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 66,
      "stepId": "copyRuns",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 67,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 68,
      "stepId": "whileBoth",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 69,
      "stepId": "compareMerge",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 70,
      "stepId": "takeRight",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 8,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 71,
      "stepId": "incK",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 9,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 72,
      "stepId": "compareMerge",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 9,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 73,
      "stepId": "takeLeft",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 9,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 74,
      "stepId": "incK",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 75,
      "stepId": "drainRight",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": 1,
      "k": 10,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 76,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 8,
      "mid": 8,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 77,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "setLeft",
      "n": 20,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 79,
      "stepId": "extendLeft",
      "n": 20,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 80,
      "stepId": "setMid",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 81,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 82,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 83,
      "stepId": "extendRight",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 84,
      "stepId": "setRight",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 85,
      "stepId": "callMerge",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 86,
      "stepId": "copyRuns",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 87,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 88,
      "stepId": "whileBoth",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 89,
      "stepId": "compareMerge",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 90,
      "stepId": "takeRight",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 91,
      "stepId": "incK",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": null,
      "k": 12,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 92,
      "stepId": "drainLeft",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": null,
      "k": 12,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 11,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 94,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 95,
      "stepId": "setLeft",
      "n": 20,
      "left": 13,
      "mid": null,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 96,
      "stepId": "extendLeft",
      "n": 20,
      "left": 13,
      "mid": null,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 97,
      "stepId": "setMid",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 98,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 99,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 100,
      "stepId": "extendRight",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 101,
      "stepId": "setRight",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 102,
      "stepId": "callMerge",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 103,
      "stepId": "copyRuns",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "initMergePointers",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 105,
      "stepId": "whileBoth",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 106,
      "stepId": "compareMerge",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 107,
      "stepId": "takeRight",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 108,
      "stepId": "incK",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 14,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 109,
      "stepId": "drainLeft",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 14,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        420,
        413,
        243,
        218,
        203,
        42
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
      "step": 110,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
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
      "step": 111,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 113,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 114,
      "stepId": "setMid",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 115,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": null,
      "i": 16,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 116,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": null,
      "i": 16,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 117,
      "stepId": "extendRight",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 16,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
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
      "step": 118,
      "stepId": "setRight",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 16,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 119,
      "stepId": "callMerge",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
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
      "step": 120,
      "stepId": "copyRuns",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
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
      "stepId": "initMergePointers",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 122,
      "stepId": "whileBoth",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 123,
      "stepId": "compareMerge",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        413,
        243,
        218,
        203,
        42
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
      "step": 124,
      "stepId": "takeRight",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 125,
      "stepId": "incK",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": null,
      "k": 16,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        243,
        218,
        203,
        42
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
      "step": 126,
      "stepId": "drainLeft",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": null,
      "k": 16,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 127,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
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
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 129,
      "stepId": "setLeft",
      "n": 20,
      "left": 17,
      "mid": null,
      "right": null,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 130,
      "stepId": "extendLeft",
      "n": 20,
      "left": 17,
      "mid": null,
      "right": null,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 131,
      "stepId": "setMid",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": null,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 132,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": null,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 133,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": null,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 134,
      "stepId": "extendRight",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 135,
      "stepId": "setRight",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 136,
      "stepId": "callMerge",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 137,
      "stepId": "copyRuns",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
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
      "step": 138,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 17,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 139,
      "stepId": "whileBoth",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 17,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 140,
      "stepId": "compareMerge",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 17,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        218,
        203,
        42
      ]
    },
    {
      "step": 141,
      "stepId": "takeRight",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 17,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        203,
        42
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
      "step": 142,
      "stepId": "incK",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 0,
      "j": null,
      "k": 18,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        203,
        42
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
      "step": 143,
      "stepId": "drainLeft",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": 0,
      "j": null,
      "k": 18,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        203,
        42
      ]
    },
    {
      "step": 144,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 17,
      "mid": 17,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 145,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 146,
      "stepId": "setLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 147,
      "stepId": "extendLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "setMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 149,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 150,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 151,
      "stepId": "breakOddRun",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 152,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 153,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 154,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 155,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 156,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 157,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 158,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 159,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 160,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 161,
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
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 162,
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 163,
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 165,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 166,
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        456,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 168,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        266,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        266,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 170,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        266,
        586,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        266,
        349,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 172,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": null,
      "k": 2,
      "merged": false,
      "array": [
        266,
        349,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 173,
      "stepId": "drainLeft",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": null,
      "k": 2,
      "merged": false,
      "array": [
        266,
        349,
        892,
        266,
        349,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 174,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 175,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 176,
      "stepId": "setLeft",
      "n": 20,
      "left": 5,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 177,
      "stepId": "extendLeft",
      "n": 20,
      "left": 5,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 178,
      "stepId": "setMid",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 179,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "checkHasRight",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 181,
      "stepId": "extendRight",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 8,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 182,
      "stepId": "setRight",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 183,
      "stepId": "callMerge",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 184,
      "stepId": "copyRuns",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "initMergePointers",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 186,
      "stepId": "whileBoth",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 187,
      "stepId": "compareMerge",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 188,
      "stepId": "takeLeft",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 5,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 189,
      "stepId": "incK",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 190,
      "stepId": "compareMerge",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        940,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 191,
      "stepId": "takeRight",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 0,
      "k": 6,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 192,
      "stepId": "incK",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "compareMerge",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        944,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "takeRight",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 7,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 195,
      "stepId": "incK",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 2,
      "k": 8,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 196,
      "stepId": "compareMerge",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 2,
      "k": 8,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        615,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 197,
      "stepId": "takeLeft",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 1,
      "j": 2,
      "k": 8,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 198,
      "stepId": "incK",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 2,
      "j": 2,
      "k": 9,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 199,
      "stepId": "compareMerge",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 2,
      "j": 2,
      "k": 9,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        842,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 200,
      "stepId": "takeLeft",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": 2,
      "j": 2,
      "k": 9,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 201,
      "stepId": "incK",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": null,
      "j": 2,
      "k": 10,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 202,
      "stepId": "drainRight",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": null,
      "j": 2,
      "k": 10,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 203,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 5,
      "mid": 7,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 204,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 205,
      "stepId": "setLeft",
      "n": 20,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 206,
      "stepId": "extendLeft",
      "n": 20,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 207,
      "stepId": "setMid",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": null,
      "i": 12,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 208,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 209,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": null,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 210,
      "stepId": "extendRight",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 13,
      "i": 13,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 211,
      "stepId": "setRight",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 212,
      "stepId": "callMerge",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "copyRuns",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 214,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 215,
      "stepId": "whileBoth",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 216,
      "stepId": "compareMerge",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        501,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
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
      "step": 217,
      "stepId": "takeRight",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 218,
      "stepId": "incK",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 219,
      "stepId": "compareMerge",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        755,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 220,
      "stepId": "takeRight",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 221,
      "stepId": "incK",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 222,
      "stepId": "drainLeft",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 13,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        420,
        483,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 223,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 11,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 224,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 225,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 226,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 227,
      "stepId": "setMid",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": null,
      "i": 16,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 228,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": null,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
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
      "step": 229,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": null,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "extendRight",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 17,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 231,
      "stepId": "setRight",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 232,
      "stepId": "callMerge",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 233,
      "stepId": "copyRuns",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
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
      "stepId": "initMergePointers",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 235,
      "stepId": "whileBoth",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 236,
      "stepId": "compareMerge",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        243,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 237,
      "stepId": "takeRight",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 15,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 238,
      "stepId": "incK",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": 1,
      "k": 16,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        413,
        203,
        218,
        42
      ]
    },
    {
      "step": 239,
      "stepId": "compareMerge",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": 1,
      "k": 16,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        413,
        203,
        218,
        42
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
      "stepId": "takeRight",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": 1,
      "k": 16,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        203,
        218,
        42
      ]
    },
    {
      "step": 241,
      "stepId": "incK",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": null,
      "k": 17,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        203,
        218,
        42
      ]
    },
    {
      "step": 242,
      "stepId": "drainLeft",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": 0,
      "j": null,
      "k": 17,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        203,
        218,
        42
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
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 15,
      "mid": 16,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 245,
      "stepId": "setLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "stepId": "extendLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "stepId": "setMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 248,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 249,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 250,
      "stepId": "breakOddRun",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 251,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 252,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 253,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 254,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 256,
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
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 257,
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 258,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 259,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 260,
      "stepId": "extendRight",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 5,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 261,
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 10,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 262,
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 263,
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 265,
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 266,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        266,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 267,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 268,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        94,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 269,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        94,
        349,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 270,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        94,
        266,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 271,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        94,
        266,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 272,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        94,
        266,
        456,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 273,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        94,
        266,
        349,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 274,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        94,
        266,
        349,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 275,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        94,
        266,
        349,
        586,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 276,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 277,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 278,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        892,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 279,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 280,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 281,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        94,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 282,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 283,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 284,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        615,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 285,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 2,
      "k": 6,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 286,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 287,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        842,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 288,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": 4,
      "j": 3,
      "k": 7,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 289,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": null,
      "j": 3,
      "k": 8,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 290,
      "stepId": "drainRight",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": null,
      "j": 3,
      "k": 8,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 291,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 4,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 292,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 293,
      "stepId": "setLeft",
      "n": 20,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 294,
      "stepId": "extendLeft",
      "n": 20,
      "left": 11,
      "mid": null,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 295,
      "stepId": "setMid",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": null,
      "i": 14,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 296,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 297,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": null,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 298,
      "stepId": "extendRight",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 15,
      "i": 15,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 299,
      "stepId": "setRight",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 18,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 300,
      "stepId": "callMerge",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 301,
      "stepId": "copyRuns",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 302,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 303,
      "stepId": "whileBoth",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 304,
      "stepId": "compareMerge",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        420,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 305,
      "stepId": "takeRight",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 11,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 306,
      "stepId": "incK",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 307,
      "stepId": "compareMerge",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        483,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 308,
      "stepId": "takeRight",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 1,
      "k": 12,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 309,
      "stepId": "incK",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 2,
      "k": 13,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 310,
      "stepId": "compareMerge",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 2,
      "k": 13,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        501,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 311,
      "stepId": "takeRight",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 2,
      "k": 13,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 312,
      "stepId": "incK",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 3,
      "k": 14,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        755,
        203,
        218,
        243,
        413,
        42
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
      "step": 313,
      "stepId": "compareMerge",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 3,
      "k": 14,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        755,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 314,
      "stepId": "takeRight",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": 3,
      "k": 14,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        203,
        218,
        243,
        413,
        42
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
      "step": 315,
      "stepId": "incK",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": null,
      "k": 15,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 316,
      "stepId": "drainLeft",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": 0,
      "j": null,
      "k": 15,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        203,
        218,
        243,
        413,
        42
      ]
    },
    {
      "step": 317,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 11,
      "mid": 14,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 318,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 319,
      "stepId": "setLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 320,
      "stepId": "extendLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 321,
      "stepId": "setMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 322,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 323,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 324,
      "stepId": "breakOddRun",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 325,
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
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 326,
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
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 327,
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
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 328,
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
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 329,
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
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 330,
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
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 331,
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": null,
      "i": 10,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 332,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 333,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": null,
      "i": 11,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 334,
      "stepId": "extendRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 11,
      "i": 11,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 335,
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 18,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 336,
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 337,
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 338,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 339,
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 340,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 341,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 342,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 343,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        94,
        266,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 344,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        94,
        203,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 345,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        94,
        203,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 346,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        94,
        203,
        349,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 347,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        94,
        203,
        218,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 348,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        94,
        203,
        218,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 349,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        94,
        203,
        218,
        456,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 350,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 351,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 352,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        586,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 353,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 1,
      "j": 3,
      "k": 4,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 354,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 355,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        615,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 356,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 2,
      "j": 3,
      "k": 5,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 357,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 358,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        842,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 359,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 3,
      "k": 6,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 360,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 4,
      "k": 7,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 361,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 4,
      "k": 7,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        892,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 362,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 4,
      "k": 7,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 363,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 5,
      "k": 8,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 364,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 5,
      "k": 8,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        940,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 365,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 3,
      "j": 5,
      "k": 8,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 366,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 5,
      "k": 9,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 367,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 5,
      "k": 9,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        944,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 368,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 5,
      "k": 9,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 369,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 6,
      "k": 10,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 370,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 6,
      "k": 10,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        967,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 371,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 6,
      "k": 10,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 372,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 7,
      "k": 11,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 373,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 7,
      "k": 11,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        203,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 374,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 4,
      "j": 7,
      "k": 11,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 375,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 5,
      "j": 7,
      "k": 12,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
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
      "step": 376,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 5,
      "j": 7,
      "k": 12,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        218,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 377,
      "stepId": "takeLeft",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 5,
      "j": 7,
      "k": 12,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 378,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 6,
      "j": 7,
      "k": 13,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 379,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 6,
      "j": 7,
      "k": 13,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        243,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 380,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 6,
      "j": 7,
      "k": 13,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 381,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 6,
      "j": null,
      "k": 14,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 382,
      "stepId": "drainLeft",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": 6,
      "j": null,
      "k": 14,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        413,
        420,
        483,
        501,
        755,
        42
      ]
    },
    {
      "step": 383,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 10,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
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
      "step": 384,
      "stepId": "advanceAfterMerge",
      "n": 20,
      "left": null,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 385,
      "stepId": "setLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 386,
      "stepId": "extendLeft",
      "n": 20,
      "left": 19,
      "mid": null,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
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
      "step": 387,
      "stepId": "setMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 388,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
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
      "step": 389,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
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
      "step": 390,
      "stepId": "breakOddRun",
      "n": 20,
      "left": 19,
      "mid": 19,
      "right": null,
      "i": 20,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 391,
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
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 392,
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
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 393,
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
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 394,
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
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 395,
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
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 396,
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
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 397,
      "stepId": "setMid",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": null,
      "i": 18,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 398,
      "stepId": "advancePastMid",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 399,
      "stepId": "checkHasRight",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": null,
      "i": 19,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
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
      "step": 400,
      "stepId": "extendRight",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 19,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 401,
      "stepId": "setRight",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 19,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 402,
      "stepId": "callMerge",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
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
      "step": 403,
      "stepId": "copyRuns",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 404,
      "stepId": "initMergePointers",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
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
      "step": 405,
      "stepId": "whileBoth",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 406,
      "stepId": "compareMerge",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 407,
      "stepId": "takeRight",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
      "array": [
        42,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 408,
      "stepId": "incK",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        42,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 409,
      "stepId": "drainLeft",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 1,
      "merged": false,
      "array": [
        42,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967,
        42
      ]
    },
    {
      "step": 410,
      "stepId": "setMergedTrue",
      "n": 20,
      "left": 0,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 411,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 412,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 413,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 414,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 415,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 416,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 417,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 418,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 419,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 420,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 421,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ]
    },
    {
      "step": 422,
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
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
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
