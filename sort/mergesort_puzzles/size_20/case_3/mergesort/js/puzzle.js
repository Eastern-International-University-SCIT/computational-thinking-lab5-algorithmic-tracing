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
    5,
    9,
    10,
    11,
    14,
    17,
    23,
    24,
    25,
    27,
    32,
    34,
    36,
    38,
    42,
    47,
    48,
    52,
    55,
    57,
    63,
    65,
    66,
    69,
    73,
    79,
    86,
    87,
    94,
    104,
    106,
    112,
    114,
    115,
    120,
    124,
    130,
    132,
    134,
    136,
    143,
    145,
    149,
    150,
    151,
    152,
    154,
    157,
    159,
    160,
    162,
    164,
    169,
    172,
    177,
    181,
    183,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    201,
    208,
    209,
    214,
    217,
    218,
    220,
    226,
    227,
    238,
    241,
    246,
    256,
    260,
    263,
    269,
    274,
    278,
    280,
    281,
    282,
    284,
    289,
    292,
    296,
    298,
    299,
    300,
    302,
    313,
    314,
    320,
    321,
    322,
    328,
    334,
    335,
    337,
    338,
    340,
    350,
    352,
    353,
    354,
    359,
    362,
    363,
    368,
    369,
    370,
    376,
    384,
    386,
    391,
    393,
    394,
    398,
    401,
    402,
    404,
    407,
    409
  ],
  "answers": {
    "5": {
      "stepId": "sortLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "9": {
      "stepId": "sortLeft",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "10": {
      "stepId": "markRange",
      "left": "0",
      "mid": "—",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "11": {
      "stepId": "checkLeftRight",
      "left": "0",
      "mid": "—",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "14": {
      "stepId": "markRange",
      "left": "0",
      "mid": "—",
      "right": "2",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "17": {
      "stepId": "sortLeft",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "23": {
      "stepId": "checkLeftRight",
      "left": "0",
      "mid": "—",
      "right": "0",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "24": {
      "stepId": "sortRight",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "25": {
      "stepId": "markRange",
      "left": "1",
      "mid": "—",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "27": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "32": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "34": {
      "stepId": "drainRight",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "0",
      "k": "1"
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
    "38": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "42": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "47": {
      "stepId": "incK",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "—",
      "j": "0",
      "k": "2"
    },
    "48": {
      "stepId": "drainRight",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "—",
      "j": "0",
      "k": "2"
    },
    "52": {
      "stepId": "setMid",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "55": {
      "stepId": "checkLeftRight",
      "left": "3",
      "mid": "—",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "57": {
      "stepId": "markRange",
      "left": "4",
      "mid": "—",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "63": {
      "stepId": "compareMerge",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "0",
      "j": "0",
      "k": "3"
    },
    "65": {
      "stepId": "incK",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "—",
      "j": "0",
      "k": "4"
    },
    "66": {
      "stepId": "drainRight",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "—",
      "j": "0",
      "k": "4"
    },
    "69": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "73": {
      "stepId": "incK",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "1",
      "j": "0",
      "k": "1"
    },
    "79": {
      "stepId": "incK",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "1",
      "j": "—",
      "k": "3"
    },
    "86": {
      "stepId": "markRange",
      "left": "5",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "87": {
      "stepId": "checkLeftRight",
      "left": "5",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "94": {
      "stepId": "markRange",
      "left": "5",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "104": {
      "stepId": "takeRight",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "5"
    },
    "106": {
      "stepId": "drainLeft",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "—",
      "k": "6"
    },
    "112": {
      "stepId": "initMergePointers",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "5"
    },
    "114": {
      "stepId": "compareMerge",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "5"
    },
    "115": {
      "stepId": "takeRight",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "5"
    },
    "120": {
      "stepId": "checkLeftRight",
      "left": "8",
      "mid": "—",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "124": {
      "stepId": "checkLeftRight",
      "left": "8",
      "mid": "—",
      "right": "8",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "130": {
      "stepId": "initMergePointers",
      "left": "8",
      "mid": "8",
      "right": "9",
      "i": "0",
      "j": "0",
      "k": "8"
    },
    "132": {
      "stepId": "compareMerge",
      "left": "8",
      "mid": "8",
      "right": "9",
      "i": "0",
      "j": "0",
      "k": "8"
    },
    "134": {
      "stepId": "incK",
      "left": "8",
      "mid": "8",
      "right": "9",
      "i": "—",
      "j": "0",
      "k": "9"
    },
    "136": {
      "stepId": "callMerge",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "143": {
      "stepId": "compareMerge",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "1",
      "j": "0",
      "k": "6"
    },
    "145": {
      "stepId": "incK",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "1",
      "j": "1",
      "k": "7"
    },
    "149": {
      "stepId": "compareMerge",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "2",
      "j": "1",
      "k": "8"
    },
    "150": {
      "stepId": "takeRight",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "2",
      "j": "1",
      "k": "8"
    },
    "151": {
      "stepId": "incK",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "2",
      "j": "—",
      "k": "9"
    },
    "152": {
      "stepId": "drainLeft",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "2",
      "j": "—",
      "k": "9"
    },
    "154": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "157": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "159": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "1",
      "j": "0",
      "k": "1"
    },
    "160": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "1",
      "j": "0",
      "k": "1"
    },
    "162": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "2",
      "j": "0",
      "k": "2"
    },
    "164": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "2",
      "j": "0",
      "k": "2"
    },
    "169": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "3",
      "j": "1",
      "k": "4"
    },
    "172": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "3",
      "j": "2",
      "k": "5"
    },
    "177": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "—",
      "j": "2",
      "k": "7"
    },
    "181": {
      "stepId": "checkLeftRight",
      "left": "10",
      "mid": "—",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "183": {
      "stepId": "sortLeft",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "190": {
      "stepId": "setMid",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "191": {
      "stepId": "sortLeft",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "192": {
      "stepId": "markRange",
      "left": "10",
      "mid": "—",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "193": {
      "stepId": "checkLeftRight",
      "left": "10",
      "mid": "—",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "194": {
      "stepId": "setMid",
      "left": "10",
      "mid": "10",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "195": {
      "stepId": "sortLeft",
      "left": "10",
      "mid": "10",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "196": {
      "stepId": "markRange",
      "left": "10",
      "mid": "—",
      "right": "10",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "201": {
      "stepId": "callMerge",
      "left": "10",
      "mid": "10",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "208": {
      "stepId": "drainRight",
      "left": "10",
      "mid": "10",
      "right": "11",
      "i": "—",
      "j": "0",
      "k": "11"
    },
    "209": {
      "stepId": "sortRight",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "214": {
      "stepId": "initMergePointers",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "0",
      "j": "0",
      "k": "10"
    },
    "217": {
      "stepId": "takeLeft",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "0",
      "j": "0",
      "k": "10"
    },
    "218": {
      "stepId": "incK",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "1",
      "j": "0",
      "k": "11"
    },
    "220": {
      "stepId": "takeLeft",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "1",
      "j": "0",
      "k": "11"
    },
    "226": {
      "stepId": "setMid",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "227": {
      "stepId": "sortLeft",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "238": {
      "stepId": "takeRight",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "0",
      "j": "0",
      "k": "13"
    },
    "241": {
      "stepId": "callMerge",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "246": {
      "stepId": "takeLeft",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "0",
      "j": "0",
      "k": "10"
    },
    "256": {
      "stepId": "incK",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "—",
      "j": "1",
      "k": "14"
    },
    "260": {
      "stepId": "checkLeftRight",
      "left": "15",
      "mid": "—",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "263": {
      "stepId": "markRange",
      "left": "15",
      "mid": "—",
      "right": "17",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "269": {
      "stepId": "setMid",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "274": {
      "stepId": "markRange",
      "left": "16",
      "mid": "—",
      "right": "16",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "278": {
      "stepId": "initMergePointers",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "280": {
      "stepId": "compareMerge",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "281": {
      "stepId": "takeLeft",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "282": {
      "stepId": "incK",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "—",
      "j": "0",
      "k": "16"
    },
    "284": {
      "stepId": "sortRight",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "289": {
      "stepId": "initMergePointers",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "292": {
      "stepId": "takeLeft",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "296": {
      "stepId": "incK",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "—",
      "j": "0",
      "k": "17"
    },
    "298": {
      "stepId": "sortRight",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "299": {
      "stepId": "markRange",
      "left": "18",
      "mid": "—",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "300": {
      "stepId": "checkLeftRight",
      "left": "18",
      "mid": "—",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "302": {
      "stepId": "sortLeft",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "313": {
      "stepId": "takeLeft",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "18"
    },
    "314": {
      "stepId": "incK",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "—",
      "j": "0",
      "k": "19"
    },
    "320": {
      "stepId": "compareMerge",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "321": {
      "stepId": "takeRight",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "322": {
      "stepId": "incK",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "0",
      "j": "1",
      "k": "16"
    },
    "328": {
      "stepId": "copyRuns",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "334": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "0",
      "j": "1",
      "k": "11"
    },
    "335": {
      "stepId": "takeLeft",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "0",
      "j": "1",
      "k": "11"
    },
    "337": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "1",
      "j": "1",
      "k": "12"
    },
    "338": {
      "stepId": "takeLeft",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "1",
      "j": "1",
      "k": "12"
    },
    "340": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "2",
      "j": "1",
      "k": "13"
    },
    "350": {
      "stepId": "takeLeft",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "3",
      "j": "3",
      "k": "16"
    },
    "352": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "17"
    },
    "353": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "17"
    },
    "354": {
      "stepId": "incK",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "18"
    },
    "359": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "362": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "363": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "368": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "2",
      "j": "0",
      "k": "2"
    },
    "369": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "2",
      "j": "0",
      "k": "2"
    },
    "370": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "2",
      "j": "0",
      "k": "2"
    },
    "376": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "3",
      "j": "1",
      "k": "4"
    },
    "384": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "7"
    },
    "386": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "8"
    },
    "391": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "5",
      "j": "4",
      "k": "9"
    },
    "393": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "4",
      "k": "10"
    },
    "394": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "4",
      "k": "10"
    },
    "398": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "7",
      "j": "5",
      "k": "12"
    },
    "401": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "7",
      "j": "6",
      "k": "13"
    },
    "402": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "7",
      "j": "6",
      "k": "13"
    },
    "404": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "6",
      "k": "14"
    },
    "407": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "7",
      "k": "15"
    },
    "409": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "7",
      "k": "15"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 743,
        "value": "takeRight"
      },
      {
        "id": 568,
        "value": "initMergePointers"
      },
      {
        "id": 680,
        "value": "incK"
      },
      {
        "id": 659,
        "value": "incK"
      },
      {
        "id": 344,
        "value": "compareMerge"
      },
      {
        "id": 57,
        "value": "markRange"
      },
      {
        "id": 694,
        "value": "compareMerge"
      },
      {
        "id": 771,
        "value": "compareMerge"
      },
      {
        "id": 113,
        "value": "drainRight"
      },
      {
        "id": 652,
        "value": "takeLeft"
      },
      {
        "id": 8,
        "value": "sortLeft"
      },
      {
        "id": 827,
        "value": "compareMerge"
      },
      {
        "id": 638,
        "value": "checkLeftRight"
      },
      {
        "id": 169,
        "value": "incK"
      },
      {
        "id": 386,
        "value": "checkLeftRight"
      },
      {
        "id": 554,
        "value": "setMid"
      },
      {
        "id": 1,
        "value": "sortLeft"
      },
      {
        "id": 533,
        "value": "incK"
      },
      {
        "id": 841,
        "value": "incK"
      },
      {
        "id": 736,
        "value": "compareMerge"
      },
      {
        "id": 806,
        "value": "compareMerge"
      },
      {
        "id": 43,
        "value": "checkLeftRight"
      },
      {
        "id": 820,
        "value": "takeLeft"
      },
      {
        "id": 71,
        "value": "takeLeft"
      },
      {
        "id": 631,
        "value": "markRange"
      },
      {
        "id": 309,
        "value": "incK"
      },
      {
        "id": 561,
        "value": "markRange"
      },
      {
        "id": 15,
        "value": "markRange"
      },
      {
        "id": 792,
        "value": "takeLeft"
      },
      {
        "id": 351,
        "value": "incK"
      },
      {
        "id": 617,
        "value": "incK"
      },
      {
        "id": 876,
        "value": "takeLeft"
      },
      {
        "id": 36,
        "value": "sortLeft"
      },
      {
        "id": 155,
        "value": "drainRight"
      },
      {
        "id": 778,
        "value": "incK"
      },
      {
        "id": 358,
        "value": "takeRight"
      },
      {
        "id": 134,
        "value": "markRange"
      },
      {
        "id": 78,
        "value": "drainRight"
      },
      {
        "id": 239,
        "value": "checkLeftRight"
      },
      {
        "id": 848,
        "value": "incK"
      },
      {
        "id": 540,
        "value": "checkLeftRight"
      },
      {
        "id": 183,
        "value": "markRange"
      },
      {
        "id": 176,
        "value": "incK"
      },
      {
        "id": 281,
        "value": "compareMerge"
      },
      {
        "id": 708,
        "value": "compareMerge"
      },
      {
        "id": 64,
        "value": "callMerge"
      },
      {
        "id": 673,
        "value": "takeRight"
      },
      {
        "id": 582,
        "value": "takeLeft"
      },
      {
        "id": 225,
        "value": "compareMerge"
      },
      {
        "id": 197,
        "value": "markRange"
      },
      {
        "id": 218,
        "value": "initMergePointers"
      },
      {
        "id": 365,
        "value": "compareMerge"
      },
      {
        "id": 701,
        "value": "takeLeft"
      },
      {
        "id": 505,
        "value": "sortLeft"
      },
      {
        "id": 862,
        "value": "incK"
      },
      {
        "id": 757,
        "value": "callMerge"
      },
      {
        "id": 799,
        "value": "takeRight"
      },
      {
        "id": 512,
        "value": "takeRight"
      },
      {
        "id": 855,
        "value": "compareMerge"
      },
      {
        "id": 470,
        "value": "initMergePointers"
      },
      {
        "id": 435,
        "value": "sortLeft"
      },
      {
        "id": 232,
        "value": "takeRight"
      },
      {
        "id": 519,
        "value": "callMerge"
      },
      {
        "id": 729,
        "value": "takeLeft"
      },
      {
        "id": 295,
        "value": "compareMerge"
      },
      {
        "id": 764,
        "value": "whileBoth"
      },
      {
        "id": 274,
        "value": "callMerge"
      },
      {
        "id": 246,
        "value": "checkLeftRight"
      },
      {
        "id": 22,
        "value": "checkLeftRight"
      },
      {
        "id": 722,
        "value": "compareMerge"
      },
      {
        "id": 29,
        "value": "markRange"
      },
      {
        "id": 162,
        "value": "initMergePointers"
      },
      {
        "id": 869,
        "value": "incK"
      },
      {
        "id": 253,
        "value": "initMergePointers"
      },
      {
        "id": 589,
        "value": "incK"
      },
      {
        "id": 414,
        "value": "markRange"
      },
      {
        "id": 666,
        "value": "compareMerge"
      },
      {
        "id": 715,
        "value": "takeLeft"
      },
      {
        "id": 603,
        "value": "initMergePointers"
      },
      {
        "id": 99,
        "value": "compareMerge"
      },
      {
        "id": 750,
        "value": "incK"
      },
      {
        "id": 813,
        "value": "incK"
      },
      {
        "id": 330,
        "value": "compareMerge"
      },
      {
        "id": 393,
        "value": "sortLeft"
      },
      {
        "id": 50,
        "value": "sortRight"
      },
      {
        "id": 449,
        "value": "callMerge"
      },
      {
        "id": 687,
        "value": "copyRuns"
      },
      {
        "id": 141,
        "value": "compareMerge"
      },
      {
        "id": 547,
        "value": "markRange"
      },
      {
        "id": 316,
        "value": "drainLeft"
      },
      {
        "id": 463,
        "value": "sortRight"
      },
      {
        "id": 834,
        "value": "takeRight"
      },
      {
        "id": 645,
        "value": "sortLeft"
      },
      {
        "id": 372,
        "value": "compareMerge"
      },
      {
        "id": 442,
        "value": "markRange"
      },
      {
        "id": 211,
        "value": "drainLeft"
      },
      {
        "id": 785,
        "value": "compareMerge"
      },
      {
        "id": 596,
        "value": "sortRight"
      },
      {
        "id": 428,
        "value": "setMid"
      },
      {
        "id": 526,
        "value": "takeLeft"
      },
      {
        "id": 267,
        "value": "incK"
      },
      {
        "id": 379,
        "value": "incK"
      },
      {
        "id": 106,
        "value": "incK"
      },
      {
        "id": 624,
        "value": "sortRight"
      },
      {
        "id": 260,
        "value": "compareMerge"
      },
      {
        "id": 204,
        "value": "takeRight"
      },
      {
        "id": 400,
        "value": "setMid"
      },
      {
        "id": 456,
        "value": "drainRight"
      },
      {
        "id": 491,
        "value": "takeLeft"
      },
      {
        "id": 127,
        "value": "checkLeftRight"
      },
      {
        "id": 323,
        "value": "copyRuns"
      },
      {
        "id": 120,
        "value": "setMid"
      },
      {
        "id": 148,
        "value": "incK"
      },
      {
        "id": 477,
        "value": "takeLeft"
      },
      {
        "id": 407,
        "value": "sortLeft"
      },
      {
        "id": 610,
        "value": "takeLeft"
      },
      {
        "id": 337,
        "value": "incK"
      },
      {
        "id": 421,
        "value": "checkLeftRight"
      },
      {
        "id": 302,
        "value": "takeRight"
      },
      {
        "id": 498,
        "value": "setMid"
      },
      {
        "id": 288,
        "value": "incK"
      },
      {
        "id": 85,
        "value": "markRange"
      },
      {
        "id": 575,
        "value": "compareMerge"
      },
      {
        "id": 190,
        "value": "checkLeftRight"
      },
      {
        "id": 484,
        "value": "incK"
      },
      {
        "id": 92,
        "value": "callMerge"
      }
    ],
    "left": [
      {
        "id": 457,
        "value": "10"
      },
      {
        "id": 856,
        "value": "0"
      },
      {
        "id": 604,
        "value": "15"
      },
      {
        "id": 541,
        "value": "15"
      },
      {
        "id": 149,
        "value": "3"
      },
      {
        "id": 527,
        "value": "10"
      },
      {
        "id": 534,
        "value": "10"
      },
      {
        "id": 751,
        "value": "10"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 310,
        "value": "5"
      },
      {
        "id": 247,
        "value": "8"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 65,
        "value": "0"
      },
      {
        "id": 842,
        "value": "0"
      },
      {
        "id": 352,
        "value": "0"
      },
      {
        "id": 261,
        "value": "8"
      },
      {
        "id": 667,
        "value": "15"
      },
      {
        "id": 849,
        "value": "0"
      },
      {
        "id": 156,
        "value": "3"
      },
      {
        "id": 632,
        "value": "18"
      },
      {
        "id": 198,
        "value": "5"
      },
      {
        "id": 807,
        "value": "0"
      },
      {
        "id": 331,
        "value": "0"
      },
      {
        "id": 702,
        "value": "10"
      },
      {
        "id": 212,
        "value": "5"
      },
      {
        "id": 772,
        "value": "0"
      },
      {
        "id": 611,
        "value": "15"
      },
      {
        "id": 758,
        "value": "0"
      },
      {
        "id": 597,
        "value": "15"
      },
      {
        "id": 618,
        "value": "15"
      },
      {
        "id": 870,
        "value": "0"
      },
      {
        "id": 786,
        "value": "0"
      },
      {
        "id": 688,
        "value": "10"
      },
      {
        "id": 324,
        "value": "0"
      },
      {
        "id": 443,
        "value": "10"
      },
      {
        "id": 128,
        "value": "3"
      },
      {
        "id": 387,
        "value": "10"
      },
      {
        "id": 366,
        "value": "0"
      },
      {
        "id": 135,
        "value": "4"
      },
      {
        "id": 93,
        "value": "0"
      },
      {
        "id": 359,
        "value": "0"
      },
      {
        "id": 289,
        "value": "5"
      },
      {
        "id": 100,
        "value": "0"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 520,
        "value": "10"
      },
      {
        "id": 219,
        "value": "5"
      },
      {
        "id": 737,
        "value": "10"
      },
      {
        "id": 177,
        "value": "0"
      },
      {
        "id": 464,
        "value": "10"
      },
      {
        "id": 268,
        "value": "8"
      },
      {
        "id": 394,
        "value": "10"
      },
      {
        "id": 58,
        "value": "1"
      },
      {
        "id": 338,
        "value": "0"
      },
      {
        "id": 835,
        "value": "0"
      },
      {
        "id": 646,
        "value": "18"
      },
      {
        "id": 142,
        "value": "3"
      },
      {
        "id": 233,
        "value": "5"
      },
      {
        "id": 114,
        "value": "0"
      },
      {
        "id": 576,
        "value": "15"
      },
      {
        "id": 471,
        "value": "10"
      },
      {
        "id": 275,
        "value": "5"
      },
      {
        "id": 191,
        "value": "5"
      },
      {
        "id": 716,
        "value": "10"
      },
      {
        "id": 303,
        "value": "5"
      },
      {
        "id": 296,
        "value": "5"
      },
      {
        "id": 345,
        "value": "0"
      },
      {
        "id": 436,
        "value": "10"
      },
      {
        "id": 184,
        "value": "5"
      },
      {
        "id": 625,
        "value": "15"
      },
      {
        "id": 422,
        "value": "10"
      },
      {
        "id": 709,
        "value": "10"
      },
      {
        "id": 681,
        "value": "15"
      },
      {
        "id": 814,
        "value": "0"
      },
      {
        "id": 828,
        "value": "0"
      },
      {
        "id": 429,
        "value": "10"
      },
      {
        "id": 86,
        "value": "2"
      },
      {
        "id": 730,
        "value": "10"
      },
      {
        "id": 821,
        "value": "0"
      },
      {
        "id": 506,
        "value": "13"
      },
      {
        "id": 513,
        "value": "13"
      },
      {
        "id": 660,
        "value": "18"
      },
      {
        "id": 779,
        "value": "0"
      },
      {
        "id": 723,
        "value": "10"
      },
      {
        "id": 51,
        "value": "0"
      },
      {
        "id": 744,
        "value": "10"
      },
      {
        "id": 877,
        "value": "0"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 793,
        "value": "0"
      },
      {
        "id": 380,
        "value": "0"
      },
      {
        "id": 254,
        "value": "8"
      },
      {
        "id": 121,
        "value": "3"
      },
      {
        "id": 226,
        "value": "5"
      },
      {
        "id": 548,
        "value": "15"
      },
      {
        "id": 478,
        "value": "10"
      },
      {
        "id": 863,
        "value": "0"
      },
      {
        "id": 695,
        "value": "10"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 415,
        "value": "10"
      },
      {
        "id": 205,
        "value": "5"
      },
      {
        "id": 170,
        "value": "0"
      },
      {
        "id": 590,
        "value": "15"
      },
      {
        "id": 408,
        "value": "10"
      },
      {
        "id": 562,
        "value": "16"
      },
      {
        "id": 317,
        "value": "5"
      },
      {
        "id": 499,
        "value": "13"
      },
      {
        "id": 240,
        "value": "8"
      },
      {
        "id": 639,
        "value": "18"
      },
      {
        "id": 492,
        "value": "10"
      },
      {
        "id": 555,
        "value": "15"
      },
      {
        "id": 653,
        "value": "18"
      },
      {
        "id": 800,
        "value": "0"
      },
      {
        "id": 569,
        "value": "15"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 485,
        "value": "10"
      },
      {
        "id": 765,
        "value": "0"
      },
      {
        "id": 450,
        "value": "10"
      },
      {
        "id": 282,
        "value": "5"
      },
      {
        "id": 373,
        "value": "0"
      },
      {
        "id": 583,
        "value": "15"
      },
      {
        "id": 163,
        "value": "0"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 401,
        "value": "10"
      },
      {
        "id": 674,
        "value": "15"
      }
    ],
    "mid": [
      {
        "id": 157,
        "value": "3"
      },
      {
        "id": 353,
        "value": "4"
      },
      {
        "id": 367,
        "value": "4"
      },
      {
        "id": 444,
        "value": "—"
      },
      {
        "id": 87,
        "value": "—"
      },
      {
        "id": 682,
        "value": "17"
      },
      {
        "id": 59,
        "value": "—"
      },
      {
        "id": 493,
        "value": "11"
      },
      {
        "id": 563,
        "value": "—"
      },
      {
        "id": 598,
        "value": "16"
      },
      {
        "id": 703,
        "value": "14"
      },
      {
        "id": 486,
        "value": "11"
      },
      {
        "id": 31,
        "value": "—"
      },
      {
        "id": 836,
        "value": "9"
      },
      {
        "id": 878,
        "value": "9"
      },
      {
        "id": 829,
        "value": "9"
      },
      {
        "id": 108,
        "value": "1"
      },
      {
        "id": 304,
        "value": "7"
      },
      {
        "id": 115,
        "value": "1"
      },
      {
        "id": 80,
        "value": "0"
      },
      {
        "id": 738,
        "value": "14"
      },
      {
        "id": 822,
        "value": "9"
      },
      {
        "id": 269,
        "value": "8"
      },
      {
        "id": 528,
        "value": "12"
      },
      {
        "id": 535,
        "value": "12"
      },
      {
        "id": 724,
        "value": "14"
      },
      {
        "id": 3,
        "value": "9"
      },
      {
        "id": 780,
        "value": "9"
      },
      {
        "id": 752,
        "value": "14"
      },
      {
        "id": 276,
        "value": "7"
      },
      {
        "id": 605,
        "value": "16"
      },
      {
        "id": 430,
        "value": "10"
      },
      {
        "id": 143,
        "value": "3"
      },
      {
        "id": 94,
        "value": "1"
      },
      {
        "id": 297,
        "value": "7"
      },
      {
        "id": 213,
        "value": "5"
      },
      {
        "id": 857,
        "value": "9"
      },
      {
        "id": 66,
        "value": "0"
      },
      {
        "id": 192,
        "value": "—"
      },
      {
        "id": 717,
        "value": "14"
      },
      {
        "id": 633,
        "value": "—"
      },
      {
        "id": 696,
        "value": "14"
      },
      {
        "id": 766,
        "value": "9"
      },
      {
        "id": 612,
        "value": "16"
      },
      {
        "id": 773,
        "value": "9"
      },
      {
        "id": 255,
        "value": "8"
      },
      {
        "id": 689,
        "value": "14"
      },
      {
        "id": 381,
        "value": "4"
      },
      {
        "id": 584,
        "value": "15"
      },
      {
        "id": 283,
        "value": "7"
      },
      {
        "id": 171,
        "value": "2"
      },
      {
        "id": 787,
        "value": "9"
      },
      {
        "id": 710,
        "value": "14"
      },
      {
        "id": 290,
        "value": "7"
      },
      {
        "id": 801,
        "value": "9"
      },
      {
        "id": 10,
        "value": "4"
      },
      {
        "id": 458,
        "value": "10"
      },
      {
        "id": 73,
        "value": "0"
      },
      {
        "id": 332,
        "value": "4"
      },
      {
        "id": 437,
        "value": "10"
      },
      {
        "id": 178,
        "value": "2"
      },
      {
        "id": 150,
        "value": "3"
      },
      {
        "id": 227,
        "value": "6"
      },
      {
        "id": 52,
        "value": "0"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 451,
        "value": "10"
      },
      {
        "id": 549,
        "value": "—"
      },
      {
        "id": 374,
        "value": "4"
      },
      {
        "id": 206,
        "value": "5"
      },
      {
        "id": 388,
        "value": "—"
      },
      {
        "id": 17,
        "value": "—"
      },
      {
        "id": 416,
        "value": "—"
      },
      {
        "id": 402,
        "value": "11"
      },
      {
        "id": 668,
        "value": "17"
      },
      {
        "id": 871,
        "value": "9"
      },
      {
        "id": 745,
        "value": "14"
      },
      {
        "id": 521,
        "value": "12"
      },
      {
        "id": 570,
        "value": "15"
      },
      {
        "id": 45,
        "value": "—"
      },
      {
        "id": 808,
        "value": "9"
      },
      {
        "id": 654,
        "value": "18"
      },
      {
        "id": 479,
        "value": "11"
      },
      {
        "id": 640,
        "value": "—"
      },
      {
        "id": 234,
        "value": "6"
      },
      {
        "id": 472,
        "value": "11"
      },
      {
        "id": 423,
        "value": "—"
      },
      {
        "id": 843,
        "value": "9"
      },
      {
        "id": 465,
        "value": "11"
      },
      {
        "id": 409,
        "value": "11"
      },
      {
        "id": 346,
        "value": "4"
      },
      {
        "id": 626,
        "value": "17"
      },
      {
        "id": 325,
        "value": "4"
      },
      {
        "id": 164,
        "value": "2"
      },
      {
        "id": 122,
        "value": "3"
      },
      {
        "id": 661,
        "value": "18"
      },
      {
        "id": 318,
        "value": "7"
      },
      {
        "id": 262,
        "value": "8"
      },
      {
        "id": 136,
        "value": "—"
      },
      {
        "id": 500,
        "value": "13"
      },
      {
        "id": 514,
        "value": "13"
      },
      {
        "id": 864,
        "value": "9"
      },
      {
        "id": 507,
        "value": "13"
      },
      {
        "id": 248,
        "value": "—"
      },
      {
        "id": 311,
        "value": "7"
      },
      {
        "id": 794,
        "value": "9"
      },
      {
        "id": 815,
        "value": "9"
      },
      {
        "id": 759,
        "value": "9"
      },
      {
        "id": 577,
        "value": "15"
      },
      {
        "id": 542,
        "value": "—"
      },
      {
        "id": 241,
        "value": "—"
      },
      {
        "id": 199,
        "value": "—"
      },
      {
        "id": 731,
        "value": "14"
      },
      {
        "id": 339,
        "value": "4"
      },
      {
        "id": 360,
        "value": "4"
      },
      {
        "id": 129,
        "value": "—"
      },
      {
        "id": 24,
        "value": "—"
      },
      {
        "id": 185,
        "value": "—"
      },
      {
        "id": 395,
        "value": "14"
      },
      {
        "id": 675,
        "value": "17"
      },
      {
        "id": 556,
        "value": "15"
      },
      {
        "id": 850,
        "value": "9"
      },
      {
        "id": 101,
        "value": "1"
      },
      {
        "id": 591,
        "value": "15"
      },
      {
        "id": 647,
        "value": "18"
      },
      {
        "id": 619,
        "value": "16"
      },
      {
        "id": 220,
        "value": "6"
      }
    ],
    "right": [
      {
        "id": 592,
        "value": "16"
      },
      {
        "id": 368,
        "value": "9"
      },
      {
        "id": 200,
        "value": "5"
      },
      {
        "id": 193,
        "value": "7"
      },
      {
        "id": 46,
        "value": "0"
      },
      {
        "id": 550,
        "value": "17"
      },
      {
        "id": 130,
        "value": "3"
      },
      {
        "id": 32,
        "value": "2"
      },
      {
        "id": 67,
        "value": "1"
      },
      {
        "id": 522,
        "value": "14"
      },
      {
        "id": 536,
        "value": "14"
      },
      {
        "id": 494,
        "value": "12"
      },
      {
        "id": 165,
        "value": "4"
      },
      {
        "id": 417,
        "value": "11"
      },
      {
        "id": 599,
        "value": "17"
      },
      {
        "id": 844,
        "value": "19"
      },
      {
        "id": 172,
        "value": "4"
      },
      {
        "id": 865,
        "value": "19"
      },
      {
        "id": 515,
        "value": "14"
      },
      {
        "id": 690,
        "value": "19"
      },
      {
        "id": 277,
        "value": "9"
      },
      {
        "id": 809,
        "value": "19"
      },
      {
        "id": 837,
        "value": "19"
      },
      {
        "id": 543,
        "value": "19"
      },
      {
        "id": 312,
        "value": "9"
      },
      {
        "id": 137,
        "value": "4"
      },
      {
        "id": 501,
        "value": "14"
      },
      {
        "id": 564,
        "value": "16"
      },
      {
        "id": 725,
        "value": "19"
      },
      {
        "id": 655,
        "value": "19"
      },
      {
        "id": 186,
        "value": "7"
      },
      {
        "id": 641,
        "value": "19"
      },
      {
        "id": 718,
        "value": "19"
      },
      {
        "id": 291,
        "value": "9"
      },
      {
        "id": 557,
        "value": "16"
      },
      {
        "id": 858,
        "value": "19"
      },
      {
        "id": 739,
        "value": "19"
      },
      {
        "id": 396,
        "value": "19"
      },
      {
        "id": 473,
        "value": "12"
      },
      {
        "id": 746,
        "value": "19"
      },
      {
        "id": 53,
        "value": "1"
      },
      {
        "id": 788,
        "value": "19"
      },
      {
        "id": 263,
        "value": "9"
      },
      {
        "id": 760,
        "value": "19"
      },
      {
        "id": 634,
        "value": "19"
      },
      {
        "id": 487,
        "value": "12"
      },
      {
        "id": 767,
        "value": "19"
      },
      {
        "id": 830,
        "value": "19"
      },
      {
        "id": 389,
        "value": "19"
      },
      {
        "id": 795,
        "value": "19"
      },
      {
        "id": 375,
        "value": "9"
      },
      {
        "id": 578,
        "value": "16"
      },
      {
        "id": 676,
        "value": "19"
      },
      {
        "id": 151,
        "value": "4"
      },
      {
        "id": 221,
        "value": "7"
      },
      {
        "id": 816,
        "value": "19"
      },
      {
        "id": 851,
        "value": "19"
      },
      {
        "id": 249,
        "value": "8"
      },
      {
        "id": 697,
        "value": "19"
      },
      {
        "id": 445,
        "value": "10"
      },
      {
        "id": 88,
        "value": "2"
      },
      {
        "id": 648,
        "value": "19"
      },
      {
        "id": 305,
        "value": "9"
      },
      {
        "id": 361,
        "value": "9"
      },
      {
        "id": 732,
        "value": "19"
      },
      {
        "id": 144,
        "value": "4"
      },
      {
        "id": 242,
        "value": "9"
      },
      {
        "id": 11,
        "value": "9"
      },
      {
        "id": 109,
        "value": "2"
      },
      {
        "id": 774,
        "value": "19"
      },
      {
        "id": 270,
        "value": "9"
      },
      {
        "id": 382,
        "value": "9"
      },
      {
        "id": 424,
        "value": "11"
      },
      {
        "id": 179,
        "value": "4"
      },
      {
        "id": 18,
        "value": "4"
      },
      {
        "id": 508,
        "value": "14"
      },
      {
        "id": 662,
        "value": "19"
      },
      {
        "id": 39,
        "value": "2"
      },
      {
        "id": 256,
        "value": "9"
      },
      {
        "id": 466,
        "value": "12"
      },
      {
        "id": 704,
        "value": "19"
      },
      {
        "id": 235,
        "value": "7"
      },
      {
        "id": 25,
        "value": "4"
      },
      {
        "id": 585,
        "value": "16"
      },
      {
        "id": 606,
        "value": "17"
      },
      {
        "id": 333,
        "value": "9"
      },
      {
        "id": 123,
        "value": "4"
      },
      {
        "id": 410,
        "value": "12"
      },
      {
        "id": 753,
        "value": "19"
      },
      {
        "id": 102,
        "value": "2"
      },
      {
        "id": 347,
        "value": "9"
      },
      {
        "id": 207,
        "value": "6"
      },
      {
        "id": 74,
        "value": "1"
      },
      {
        "id": 403,
        "value": "12"
      },
      {
        "id": 4,
        "value": "19"
      },
      {
        "id": 711,
        "value": "19"
      },
      {
        "id": 802,
        "value": "19"
      },
      {
        "id": 879,
        "value": "19"
      },
      {
        "id": 319,
        "value": "9"
      },
      {
        "id": 529,
        "value": "14"
      },
      {
        "id": 60,
        "value": "1"
      },
      {
        "id": 781,
        "value": "19"
      },
      {
        "id": 431,
        "value": "11"
      },
      {
        "id": 95,
        "value": "2"
      },
      {
        "id": 284,
        "value": "9"
      },
      {
        "id": 823,
        "value": "19"
      },
      {
        "id": 571,
        "value": "16"
      },
      {
        "id": 459,
        "value": "11"
      },
      {
        "id": 480,
        "value": "12"
      },
      {
        "id": 298,
        "value": "9"
      },
      {
        "id": 872,
        "value": "19"
      },
      {
        "id": 81,
        "value": "1"
      },
      {
        "id": 116,
        "value": "2"
      },
      {
        "id": 669,
        "value": "19"
      },
      {
        "id": 620,
        "value": "17"
      },
      {
        "id": 354,
        "value": "9"
      },
      {
        "id": 326,
        "value": "9"
      },
      {
        "id": 158,
        "value": "4"
      },
      {
        "id": 214,
        "value": "6"
      },
      {
        "id": 683,
        "value": "19"
      },
      {
        "id": 228,
        "value": "7"
      },
      {
        "id": 438,
        "value": "11"
      },
      {
        "id": 340,
        "value": "9"
      },
      {
        "id": 627,
        "value": "19"
      },
      {
        "id": 613,
        "value": "17"
      },
      {
        "id": 452,
        "value": "11"
      }
    ],
    "i": [
      {
        "id": 803,
        "value": "3"
      },
      {
        "id": 572,
        "value": "0"
      },
      {
        "id": 607,
        "value": "0"
      },
      {
        "id": 131,
        "value": "—"
      },
      {
        "id": 236,
        "value": "0"
      },
      {
        "id": 761,
        "value": "—"
      },
      {
        "id": 635,
        "value": "—"
      },
      {
        "id": 215,
        "value": "0"
      },
      {
        "id": 320,
        "value": "2"
      },
      {
        "id": 292,
        "value": "1"
      },
      {
        "id": 712,
        "value": "1"
      },
      {
        "id": 285,
        "value": "1"
      },
      {
        "id": 229,
        "value": "0"
      },
      {
        "id": 523,
        "value": "—"
      },
      {
        "id": 250,
        "value": "—"
      },
      {
        "id": 47,
        "value": "—"
      },
      {
        "id": 82,
        "value": "—"
      },
      {
        "id": 544,
        "value": "—"
      },
      {
        "id": 810,
        "value": "4"
      },
      {
        "id": 61,
        "value": "—"
      },
      {
        "id": 166,
        "value": "0"
      },
      {
        "id": 180,
        "value": "1"
      },
      {
        "id": 859,
        "value": "7"
      },
      {
        "id": 775,
        "value": "0"
      },
      {
        "id": 278,
        "value": "—"
      },
      {
        "id": 831,
        "value": "6"
      },
      {
        "id": 796,
        "value": "2"
      },
      {
        "id": 271,
        "value": "—"
      },
      {
        "id": 642,
        "value": "—"
      },
      {
        "id": 621,
        "value": "—"
      },
      {
        "id": 89,
        "value": "—"
      },
      {
        "id": 376,
        "value": "3"
      },
      {
        "id": 264,
        "value": "0"
      },
      {
        "id": 677,
        "value": "0"
      },
      {
        "id": 670,
        "value": "0"
      },
      {
        "id": 754,
        "value": "4"
      },
      {
        "id": 348,
        "value": "1"
      },
      {
        "id": 502,
        "value": "—"
      },
      {
        "id": 579,
        "value": "0"
      },
      {
        "id": 19,
        "value": "—"
      },
      {
        "id": 453,
        "value": "—"
      },
      {
        "id": 691,
        "value": "—"
      },
      {
        "id": 432,
        "value": "—"
      },
      {
        "id": 257,
        "value": "0"
      },
      {
        "id": 54,
        "value": "—"
      },
      {
        "id": 824,
        "value": "5"
      },
      {
        "id": 488,
        "value": "1"
      },
      {
        "id": 439,
        "value": "—"
      },
      {
        "id": 33,
        "value": "—"
      },
      {
        "id": 593,
        "value": "—"
      },
      {
        "id": 446,
        "value": "—"
      },
      {
        "id": 201,
        "value": "—"
      },
      {
        "id": 866,
        "value": "8"
      },
      {
        "id": 404,
        "value": "—"
      },
      {
        "id": 530,
        "value": "0"
      },
      {
        "id": 705,
        "value": "0"
      },
      {
        "id": 103,
        "value": "0"
      },
      {
        "id": 838,
        "value": "6"
      },
      {
        "id": 418,
        "value": "—"
      },
      {
        "id": 306,
        "value": "2"
      },
      {
        "id": 243,
        "value": "—"
      },
      {
        "id": 460,
        "value": "—"
      },
      {
        "id": 719,
        "value": "1"
      },
      {
        "id": 873,
        "value": "8"
      },
      {
        "id": 537,
        "value": "—"
      },
      {
        "id": 40,
        "value": "—"
      },
      {
        "id": 852,
        "value": "7"
      },
      {
        "id": 649,
        "value": "—"
      },
      {
        "id": 383,
        "value": "—"
      },
      {
        "id": 733,
        "value": "3"
      },
      {
        "id": 516,
        "value": "0"
      },
      {
        "id": 600,
        "value": "—"
      },
      {
        "id": 299,
        "value": "2"
      },
      {
        "id": 68,
        "value": "—"
      },
      {
        "id": 313,
        "value": "2"
      },
      {
        "id": 124,
        "value": "—"
      },
      {
        "id": 397,
        "value": "—"
      },
      {
        "id": 495,
        "value": "1"
      },
      {
        "id": 782,
        "value": "2"
      },
      {
        "id": 110,
        "value": "—"
      },
      {
        "id": 628,
        "value": "—"
      },
      {
        "id": 845,
        "value": "7"
      },
      {
        "id": 390,
        "value": "—"
      },
      {
        "id": 698,
        "value": "0"
      },
      {
        "id": 747,
        "value": "4"
      },
      {
        "id": 117,
        "value": "—"
      },
      {
        "id": 173,
        "value": "1"
      },
      {
        "id": 334,
        "value": "0"
      },
      {
        "id": 817,
        "value": "4"
      },
      {
        "id": 152,
        "value": "—"
      },
      {
        "id": 194,
        "value": "—"
      },
      {
        "id": 208,
        "value": "0"
      },
      {
        "id": 481,
        "value": "0"
      },
      {
        "id": 362,
        "value": "2"
      },
      {
        "id": 96,
        "value": "—"
      },
      {
        "id": 222,
        "value": "0"
      },
      {
        "id": 684,
        "value": "0"
      },
      {
        "id": 509,
        "value": "—"
      },
      {
        "id": 5,
        "value": "—"
      },
      {
        "id": 145,
        "value": "0"
      },
      {
        "id": 75,
        "value": "0"
      },
      {
        "id": 327,
        "value": "—"
      },
      {
        "id": 586,
        "value": "0"
      },
      {
        "id": 369,
        "value": "3"
      },
      {
        "id": 789,
        "value": "2"
      },
      {
        "id": 614,
        "value": "0"
      },
      {
        "id": 12,
        "value": "—"
      },
      {
        "id": 138,
        "value": "—"
      },
      {
        "id": 880,
        "value": "8"
      },
      {
        "id": 425,
        "value": "—"
      },
      {
        "id": 411,
        "value": "—"
      },
      {
        "id": 558,
        "value": "—"
      },
      {
        "id": 159,
        "value": "—"
      },
      {
        "id": 656,
        "value": "0"
      },
      {
        "id": 341,
        "value": "1"
      },
      {
        "id": 740,
        "value": "4"
      },
      {
        "id": 663,
        "value": "—"
      },
      {
        "id": 26,
        "value": "—"
      },
      {
        "id": 565,
        "value": "—"
      },
      {
        "id": 187,
        "value": "—"
      },
      {
        "id": 726,
        "value": "2"
      },
      {
        "id": 467,
        "value": "—"
      },
      {
        "id": 355,
        "value": "2"
      },
      {
        "id": 768,
        "value": "0"
      },
      {
        "id": 474,
        "value": "0"
      },
      {
        "id": 551,
        "value": "—"
      }
    ],
    "j": [
      {
        "id": 762,
        "value": "—"
      },
      {
        "id": 356,
        "value": "0"
      },
      {
        "id": 83,
        "value": "0"
      },
      {
        "id": 272,
        "value": "0"
      },
      {
        "id": 573,
        "value": "0"
      },
      {
        "id": 258,
        "value": "0"
      },
      {
        "id": 846,
        "value": "5"
      },
      {
        "id": 517,
        "value": "0"
      },
      {
        "id": 818,
        "value": "4"
      },
      {
        "id": 692,
        "value": "—"
      },
      {
        "id": 678,
        "value": "0"
      },
      {
        "id": 741,
        "value": "3"
      },
      {
        "id": 237,
        "value": "0"
      },
      {
        "id": 685,
        "value": "1"
      },
      {
        "id": 825,
        "value": "4"
      },
      {
        "id": 34,
        "value": "—"
      },
      {
        "id": 832,
        "value": "4"
      },
      {
        "id": 657,
        "value": "0"
      },
      {
        "id": 321,
        "value": "—"
      },
      {
        "id": 426,
        "value": "—"
      },
      {
        "id": 608,
        "value": "0"
      },
      {
        "id": 874,
        "value": "7"
      },
      {
        "id": 202,
        "value": "—"
      },
      {
        "id": 244,
        "value": "—"
      },
      {
        "id": 412,
        "value": "—"
      },
      {
        "id": 377,
        "value": "2"
      },
      {
        "id": 580,
        "value": "0"
      },
      {
        "id": 153,
        "value": "0"
      },
      {
        "id": 391,
        "value": "—"
      },
      {
        "id": 531,
        "value": "0"
      },
      {
        "id": 629,
        "value": "—"
      },
      {
        "id": 363,
        "value": "0"
      },
      {
        "id": 97,
        "value": "—"
      },
      {
        "id": 489,
        "value": "0"
      },
      {
        "id": 251,
        "value": "—"
      },
      {
        "id": 167,
        "value": "0"
      },
      {
        "id": 839,
        "value": "4"
      },
      {
        "id": 125,
        "value": "—"
      },
      {
        "id": 62,
        "value": "—"
      },
      {
        "id": 468,
        "value": "—"
      },
      {
        "id": 769,
        "value": "0"
      },
      {
        "id": 713,
        "value": "1"
      },
      {
        "id": 860,
        "value": "6"
      },
      {
        "id": 300,
        "value": "1"
      },
      {
        "id": 132,
        "value": "—"
      },
      {
        "id": 636,
        "value": "—"
      },
      {
        "id": 447,
        "value": "—"
      },
      {
        "id": 104,
        "value": "0"
      },
      {
        "id": 405,
        "value": "—"
      },
      {
        "id": 643,
        "value": "—"
      },
      {
        "id": 279,
        "value": "—"
      },
      {
        "id": 118,
        "value": "0"
      },
      {
        "id": 461,
        "value": "0"
      },
      {
        "id": 671,
        "value": "0"
      },
      {
        "id": 538,
        "value": "1"
      },
      {
        "id": 20,
        "value": "—"
      },
      {
        "id": 853,
        "value": "6"
      },
      {
        "id": 293,
        "value": "1"
      },
      {
        "id": 811,
        "value": "3"
      },
      {
        "id": 601,
        "value": "—"
      },
      {
        "id": 776,
        "value": "0"
      },
      {
        "id": 328,
        "value": "—"
      },
      {
        "id": 482,
        "value": "0"
      },
      {
        "id": 174,
        "value": "0"
      },
      {
        "id": 440,
        "value": "—"
      },
      {
        "id": 699,
        "value": "1"
      },
      {
        "id": 223,
        "value": "0"
      },
      {
        "id": 384,
        "value": "2"
      },
      {
        "id": 111,
        "value": "0"
      },
      {
        "id": 475,
        "value": "0"
      },
      {
        "id": 398,
        "value": "—"
      },
      {
        "id": 755,
        "value": "4"
      },
      {
        "id": 881,
        "value": "7"
      },
      {
        "id": 41,
        "value": "—"
      },
      {
        "id": 797,
        "value": "0"
      },
      {
        "id": 587,
        "value": "0"
      },
      {
        "id": 615,
        "value": "0"
      },
      {
        "id": 566,
        "value": "—"
      },
      {
        "id": 307,
        "value": "1"
      },
      {
        "id": 594,
        "value": "0"
      },
      {
        "id": 188,
        "value": "—"
      },
      {
        "id": 27,
        "value": "—"
      },
      {
        "id": 734,
        "value": "3"
      },
      {
        "id": 622,
        "value": "0"
      },
      {
        "id": 286,
        "value": "0"
      },
      {
        "id": 209,
        "value": "0"
      },
      {
        "id": 90,
        "value": "—"
      },
      {
        "id": 650,
        "value": "—"
      },
      {
        "id": 160,
        "value": "0"
      },
      {
        "id": 545,
        "value": "—"
      },
      {
        "id": 720,
        "value": "1"
      },
      {
        "id": 370,
        "value": "1"
      },
      {
        "id": 195,
        "value": "—"
      },
      {
        "id": 454,
        "value": "—"
      },
      {
        "id": 314,
        "value": "—"
      },
      {
        "id": 6,
        "value": "—"
      },
      {
        "id": 804,
        "value": "1"
      },
      {
        "id": 146,
        "value": "0"
      },
      {
        "id": 419,
        "value": "—"
      },
      {
        "id": 748,
        "value": "3"
      },
      {
        "id": 230,
        "value": "0"
      },
      {
        "id": 664,
        "value": "0"
      },
      {
        "id": 496,
        "value": "0"
      },
      {
        "id": 783,
        "value": "0"
      },
      {
        "id": 727,
        "value": "1"
      },
      {
        "id": 335,
        "value": "0"
      },
      {
        "id": 503,
        "value": "—"
      },
      {
        "id": 342,
        "value": "0"
      },
      {
        "id": 706,
        "value": "1"
      },
      {
        "id": 524,
        "value": "—"
      },
      {
        "id": 139,
        "value": "—"
      },
      {
        "id": 867,
        "value": "6"
      },
      {
        "id": 216,
        "value": "—"
      },
      {
        "id": 48,
        "value": "—"
      },
      {
        "id": 265,
        "value": "0"
      },
      {
        "id": 181,
        "value": "—"
      },
      {
        "id": 552,
        "value": "—"
      },
      {
        "id": 510,
        "value": "—"
      },
      {
        "id": 433,
        "value": "—"
      },
      {
        "id": 69,
        "value": "—"
      },
      {
        "id": 55,
        "value": "—"
      },
      {
        "id": 76,
        "value": "0"
      },
      {
        "id": 559,
        "value": "—"
      },
      {
        "id": 790,
        "value": "0"
      },
      {
        "id": 349,
        "value": "0"
      },
      {
        "id": 13,
        "value": "—"
      }
    ],
    "k": [
      {
        "id": 532,
        "value": "10"
      },
      {
        "id": 819,
        "value": "8"
      },
      {
        "id": 539,
        "value": "14"
      },
      {
        "id": 7,
        "value": "—"
      },
      {
        "id": 462,
        "value": "11"
      },
      {
        "id": 336,
        "value": "0"
      },
      {
        "id": 350,
        "value": "1"
      },
      {
        "id": 567,
        "value": "—"
      },
      {
        "id": 469,
        "value": "—"
      },
      {
        "id": 154,
        "value": "4"
      },
      {
        "id": 875,
        "value": "15"
      },
      {
        "id": 784,
        "value": "2"
      },
      {
        "id": 497,
        "value": "11"
      },
      {
        "id": 119,
        "value": "2"
      },
      {
        "id": 833,
        "value": "10"
      },
      {
        "id": 245,
        "value": "—"
      },
      {
        "id": 14,
        "value": "—"
      },
      {
        "id": 434,
        "value": "—"
      },
      {
        "id": 553,
        "value": "—"
      },
      {
        "id": 140,
        "value": "—"
      },
      {
        "id": 623,
        "value": "17"
      },
      {
        "id": 147,
        "value": "3"
      },
      {
        "id": 133,
        "value": "—"
      },
      {
        "id": 455,
        "value": "—"
      },
      {
        "id": 693,
        "value": "—"
      },
      {
        "id": 182,
        "value": "3"
      },
      {
        "id": 294,
        "value": "7"
      },
      {
        "id": 196,
        "value": "—"
      },
      {
        "id": 504,
        "value": "—"
      },
      {
        "id": 357,
        "value": "2"
      },
      {
        "id": 798,
        "value": "2"
      },
      {
        "id": 238,
        "value": "5"
      },
      {
        "id": 98,
        "value": "—"
      },
      {
        "id": 728,
        "value": "13"
      },
      {
        "id": 749,
        "value": "17"
      },
      {
        "id": 630,
        "value": "—"
      },
      {
        "id": 301,
        "value": "8"
      },
      {
        "id": 287,
        "value": "6"
      },
      {
        "id": 126,
        "value": "—"
      },
      {
        "id": 112,
        "value": "2"
      },
      {
        "id": 280,
        "value": "—"
      },
      {
        "id": 665,
        "value": "19"
      },
      {
        "id": 854,
        "value": "13"
      },
      {
        "id": 658,
        "value": "18"
      },
      {
        "id": 420,
        "value": "—"
      },
      {
        "id": 203,
        "value": "—"
      },
      {
        "id": 686,
        "value": "16"
      },
      {
        "id": 364,
        "value": "2"
      },
      {
        "id": 595,
        "value": "16"
      },
      {
        "id": 70,
        "value": "—"
      },
      {
        "id": 581,
        "value": "15"
      },
      {
        "id": 448,
        "value": "—"
      },
      {
        "id": 273,
        "value": "9"
      },
      {
        "id": 91,
        "value": "—"
      },
      {
        "id": 308,
        "value": "8"
      },
      {
        "id": 637,
        "value": "—"
      },
      {
        "id": 84,
        "value": "1"
      },
      {
        "id": 476,
        "value": "10"
      },
      {
        "id": 28,
        "value": "—"
      },
      {
        "id": 21,
        "value": "—"
      },
      {
        "id": 791,
        "value": "2"
      },
      {
        "id": 371,
        "value": "4"
      },
      {
        "id": 546,
        "value": "—"
      },
      {
        "id": 329,
        "value": "—"
      },
      {
        "id": 217,
        "value": "6"
      },
      {
        "id": 189,
        "value": "—"
      },
      {
        "id": 413,
        "value": "—"
      },
      {
        "id": 735,
        "value": "16"
      },
      {
        "id": 49,
        "value": "—"
      },
      {
        "id": 882,
        "value": "15"
      },
      {
        "id": 525,
        "value": "—"
      },
      {
        "id": 315,
        "value": "9"
      },
      {
        "id": 161,
        "value": "4"
      },
      {
        "id": 168,
        "value": "0"
      },
      {
        "id": 322,
        "value": "9"
      },
      {
        "id": 672,
        "value": "15"
      },
      {
        "id": 42,
        "value": "—"
      },
      {
        "id": 63,
        "value": "—"
      },
      {
        "id": 224,
        "value": "5"
      },
      {
        "id": 714,
        "value": "12"
      },
      {
        "id": 441,
        "value": "—"
      },
      {
        "id": 721,
        "value": "12"
      },
      {
        "id": 826,
        "value": "9"
      },
      {
        "id": 847,
        "value": "12"
      },
      {
        "id": 644,
        "value": "—"
      },
      {
        "id": 175,
        "value": "1"
      },
      {
        "id": 56,
        "value": "—"
      },
      {
        "id": 252,
        "value": "—"
      },
      {
        "id": 259,
        "value": "8"
      },
      {
        "id": 35,
        "value": "—"
      },
      {
        "id": 266,
        "value": "8"
      },
      {
        "id": 210,
        "value": "5"
      },
      {
        "id": 105,
        "value": "0"
      },
      {
        "id": 770,
        "value": "0"
      },
      {
        "id": 805,
        "value": "4"
      },
      {
        "id": 679,
        "value": "15"
      },
      {
        "id": 511,
        "value": "—"
      },
      {
        "id": 763,
        "value": "—"
      },
      {
        "id": 392,
        "value": "—"
      },
      {
        "id": 490,
        "value": "11"
      },
      {
        "id": 385,
        "value": "7"
      },
      {
        "id": 812,
        "value": "7"
      },
      {
        "id": 378,
        "value": "5"
      },
      {
        "id": 77,
        "value": "0"
      },
      {
        "id": 651,
        "value": "—"
      },
      {
        "id": 609,
        "value": "15"
      },
      {
        "id": 840,
        "value": "10"
      },
      {
        "id": 427,
        "value": "—"
      },
      {
        "id": 231,
        "value": "5"
      },
      {
        "id": 756,
        "value": "18"
      },
      {
        "id": 861,
        "value": "13"
      },
      {
        "id": 343,
        "value": "1"
      },
      {
        "id": 399,
        "value": "—"
      },
      {
        "id": 574,
        "value": "15"
      },
      {
        "id": 777,
        "value": "0"
      },
      {
        "id": 518,
        "value": "13"
      },
      {
        "id": 406,
        "value": "—"
      },
      {
        "id": 742,
        "value": "17"
      },
      {
        "id": 868,
        "value": "14"
      },
      {
        "id": 616,
        "value": "15"
      },
      {
        "id": 707,
        "value": "11"
      },
      {
        "id": 700,
        "value": "11"
      },
      {
        "id": 560,
        "value": "—"
      },
      {
        "id": 588,
        "value": "15"
      },
      {
        "id": 483,
        "value": "10"
      },
      {
        "id": 602,
        "value": "—"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "left": 0,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "setMid",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "sortLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 6,
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "setMid",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "sortLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 10,
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 11,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 12,
      "stepId": "setMid",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "sortLeft",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 15,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "setMid",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 17,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 18,
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 20,
      "stepId": "setMid",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 21,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 22,
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 0,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 23,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 0,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 24,
      "stepId": "sortRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 25,
      "stepId": "markRange",
      "left": 1,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 26,
      "stepId": "checkLeftRight",
      "left": 1,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 27,
      "stepId": "callMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 28,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 29,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 30,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 31,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 32,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
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
        "k": true
      }
    },
    {
      "step": 33,
      "stepId": "incK",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": 0,
      "k": 1,
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
      "step": 34,
      "stepId": "drainRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": 0,
      "k": 1,
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
        "k": true
      }
    },
    {
      "step": 35,
      "stepId": "sortRight",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 36,
      "stepId": "markRange",
      "left": 2,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 38,
      "stepId": "callMerge",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 39,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 40,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 41,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 42,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
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
        "k": true
      }
    },
    {
      "step": 43,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 44,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 45,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 46,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 47,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": 0,
      "k": 2,
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
        "k": true
      }
    },
    {
      "step": 48,
      "stepId": "drainRight",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": null,
      "j": 0,
      "k": 2,
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
        "k": true
      }
    },
    {
      "step": 49,
      "stepId": "sortRight",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 50,
      "stepId": "markRange",
      "left": 3,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 51,
      "stepId": "checkLeftRight",
      "left": 3,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 52,
      "stepId": "setMid",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 53,
      "stepId": "sortLeft",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 54,
      "stepId": "markRange",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 55,
      "stepId": "checkLeftRight",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 56,
      "stepId": "sortRight",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 57,
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 58,
      "stepId": "checkLeftRight",
      "left": 4,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 59,
      "stepId": "callMerge",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 60,
      "stepId": "copyRuns",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 61,
      "stepId": "initMergePointers",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
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
      "step": 62,
      "stepId": "whileBoth",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
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
      "step": 63,
      "stepId": "compareMerge",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
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
        "k": true
      }
    },
    {
      "step": 64,
      "stepId": "takeLeft",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
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
      "step": 65,
      "stepId": "incK",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": 0,
      "k": 4,
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
        "k": true
      }
    },
    {
      "step": 66,
      "stepId": "drainRight",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": 0,
      "k": 4,
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
        "k": true
      }
    },
    {
      "step": 67,
      "stepId": "callMerge",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 68,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 69,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
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
        "k": true
      }
    },
    {
      "step": 70,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 71,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 72,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 73,
      "stepId": "incK",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 0,
      "k": 1,
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
        "k": true
      }
    },
    {
      "step": 74,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 75,
      "stepId": "takeRight",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 76,
      "stepId": "incK",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 1,
      "k": 2,
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
      "step": 77,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 1,
      "k": 2,
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
      "step": 78,
      "stepId": "takeRight",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 1,
      "k": 2,
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
      "step": 79,
      "stepId": "incK",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": null,
      "k": 3,
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
      "step": 80,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": null,
      "k": 3,
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
      "step": 81,
      "stepId": "sortRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 82,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 83,
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 84,
      "stepId": "setMid",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 85,
      "stepId": "sortLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 86,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 87,
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 88,
      "stepId": "setMid",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 89,
      "stepId": "sortLeft",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 90,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 91,
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 92,
      "stepId": "setMid",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 93,
      "stepId": "sortLeft",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 94,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 95,
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 96,
      "stepId": "sortRight",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 97,
      "stepId": "markRange",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 98,
      "stepId": "checkLeftRight",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 99,
      "stepId": "callMerge",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 100,
      "stepId": "copyRuns",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 101,
      "stepId": "initMergePointers",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
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
      "step": 102,
      "stepId": "whileBoth",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
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
      "step": 103,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
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
      "step": 104,
      "stepId": "takeRight",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
        500,
        652,
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
        "k": true
      }
    },
    {
      "step": 105,
      "stepId": "incK",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        19,
        48,
        194,
        272,
        500,
        652,
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
      "step": 106,
      "stepId": "drainLeft",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        19,
        48,
        194,
        272,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 107,
      "stepId": "sortRight",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
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
      "step": 108,
      "stepId": "markRange",
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
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
      "step": 109,
      "stepId": "checkLeftRight",
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
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
      "step": 110,
      "stepId": "callMerge",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
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
      "step": 111,
      "stepId": "copyRuns",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
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
      "step": 112,
      "stepId": "initMergePointers",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
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
      "stepId": "whileBoth",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
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
      "step": 114,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 115,
      "stepId": "takeRight",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
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
      "stepId": "incK",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
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
      "step": 117,
      "stepId": "drainLeft",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 118,
      "stepId": "sortRight",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 119,
      "stepId": "markRange",
      "left": 8,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 120,
      "stepId": "checkLeftRight",
      "left": 8,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "stepId": "setMid",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 122,
      "stepId": "sortLeft",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 123,
      "stepId": "markRange",
      "left": 8,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 124,
      "stepId": "checkLeftRight",
      "left": 8,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 125,
      "stepId": "sortRight",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 126,
      "stepId": "markRange",
      "left": 9,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 127,
      "stepId": "checkLeftRight",
      "left": 9,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 128,
      "stepId": "callMerge",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 129,
      "stepId": "copyRuns",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 130,
      "stepId": "initMergePointers",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 131,
      "stepId": "whileBoth",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 132,
      "stepId": "compareMerge",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 133,
      "stepId": "takeLeft",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 134,
      "stepId": "incK",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": 0,
      "k": 9,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 135,
      "stepId": "drainRight",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": 0,
      "k": 9,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 136,
      "stepId": "callMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 137,
      "stepId": "copyRuns",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 138,
      "stepId": "initMergePointers",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 139,
      "stepId": "whileBoth",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 140,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 141,
      "stepId": "takeLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 142,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 6,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
      "step": 143,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 6,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        652,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 144,
      "stepId": "takeRight",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 6,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
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
      "step": 145,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 7,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 146,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 7,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
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
      "step": 147,
      "stepId": "takeLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 7,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
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
      "step": 148,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 8,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
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
      "step": 149,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 8,
      "array": [
        19,
        48,
        194,
        272,
        500,
        55,
        253,
        652,
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
        "k": true
      }
    },
    {
      "step": 150,
      "stepId": "takeRight",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 8,
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
        "k": true
      }
    },
    {
      "step": 151,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": null,
      "k": 9,
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
        "k": true
      }
    },
    {
      "step": 152,
      "stepId": "drainLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": null,
      "k": 9,
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
      "step": 153,
      "stepId": "callMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 154,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 155,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 156,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 157,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 158,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 159,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 160,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 161,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 162,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 0,
      "k": 2,
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
      "step": 163,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 0,
      "k": 2,
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
      "step": 164,
      "stepId": "takeRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 0,
      "k": 2,
      "array": [
        19,
        48,
        55,
        272,
        500,
        55,
        253,
        652,
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
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        19,
        48,
        55,
        272,
        500,
        55,
        253,
        652,
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
      "step": 166,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        19,
        48,
        55,
        272,
        500,
        55,
        253,
        652,
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
      "step": 167,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        19,
        48,
        55,
        194,
        500,
        55,
        253,
        652,
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
      "step": 168,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        19,
        48,
        55,
        194,
        500,
        55,
        253,
        652,
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
      "step": 169,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        19,
        48,
        55,
        194,
        500,
        55,
        253,
        652,
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
      "step": 170,
      "stepId": "takeRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        19,
        48,
        55,
        194,
        253,
        55,
        253,
        652,
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
      "step": 171,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        19,
        48,
        55,
        194,
        253,
        55,
        253,
        652,
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
      "step": 172,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        19,
        48,
        55,
        194,
        253,
        55,
        253,
        652,
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
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        253,
        652,
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
      "step": 174,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": 2,
      "k": 6,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        253,
        652,
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
      "step": 175,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": 2,
      "k": 6,
      "array": [
        19,
        48,
        55,
        194,
        253,
        272,
        253,
        652,
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
      "step": 176,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": 2,
      "k": 6,
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
      "step": 177,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": 2,
      "k": 7,
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
        "k": true
      }
    },
    {
      "step": 178,
      "stepId": "drainRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": 2,
      "k": 7,
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
      "step": 179,
      "stepId": "sortRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 180,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 181,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 182,
      "stepId": "setMid",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 183,
      "stepId": "sortLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 184,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 185,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 186,
      "stepId": "setMid",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 187,
      "stepId": "sortLeft",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 188,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 189,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 190,
      "stepId": "setMid",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 191,
      "stepId": "sortLeft",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 192,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 193,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 194,
      "stepId": "setMid",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 195,
      "stepId": "sortLeft",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 196,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 197,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 198,
      "stepId": "sortRight",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 199,
      "stepId": "markRange",
      "left": 11,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 200,
      "stepId": "checkLeftRight",
      "left": 11,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 201,
      "stepId": "callMerge",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 202,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 203,
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 204,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 205,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 206,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 207,
      "stepId": "incK",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": 0,
      "k": 11,
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
      "step": 208,
      "stepId": "drainRight",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": 0,
      "k": 11,
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
        "k": true
      }
    },
    {
      "step": 209,
      "stepId": "sortRight",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 210,
      "stepId": "markRange",
      "left": 12,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 211,
      "stepId": "checkLeftRight",
      "left": 12,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 212,
      "stepId": "callMerge",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 213,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 214,
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
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
        "k": true
      }
    },
    {
      "step": 215,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 216,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 217,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
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
        "k": true
      }
    },
    {
      "step": 218,
      "stepId": "incK",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 1,
      "j": 0,
      "k": 11,
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
        "k": true
      }
    },
    {
      "step": 219,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 1,
      "j": 0,
      "k": 11,
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
      "step": 220,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 1,
      "j": 0,
      "k": 11,
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
        "k": true
      }
    },
    {
      "step": 221,
      "stepId": "incK",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": 0,
      "k": 12,
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
      "step": 222,
      "stepId": "drainRight",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": 0,
      "k": 12,
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
      "step": 223,
      "stepId": "sortRight",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 224,
      "stepId": "markRange",
      "left": 13,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 225,
      "stepId": "checkLeftRight",
      "left": 13,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 226,
      "stepId": "setMid",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 227,
      "stepId": "sortLeft",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 228,
      "stepId": "markRange",
      "left": 13,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 229,
      "stepId": "checkLeftRight",
      "left": 13,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 230,
      "stepId": "sortRight",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 231,
      "stepId": "markRange",
      "left": 14,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 232,
      "stepId": "checkLeftRight",
      "left": 14,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 233,
      "stepId": "callMerge",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 234,
      "stepId": "copyRuns",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 235,
      "stepId": "initMergePointers",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
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
      "step": 236,
      "stepId": "whileBoth",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
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
      "step": 237,
      "stepId": "compareMerge",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
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
      "step": 238,
      "stepId": "takeRight",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
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
        733,
        593,
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
        "k": true
      }
    },
    {
      "step": 239,
      "stepId": "incK",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 14,
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
        733,
        593,
        593,
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 240,
      "stepId": "drainLeft",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 14,
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
        733,
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
      "step": 241,
      "stepId": "callMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
        733,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 242,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
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
        733,
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
      "step": 243,
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
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
        733,
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
      "step": 244,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
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
        733,
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
      "step": 245,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
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
        733,
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
      "step": 246,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
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
        733,
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
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 247,
      "stepId": "incK",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
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
        733,
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
      "step": 248,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
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
        733,
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
      "step": 249,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
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
        733,
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
      "step": 250,
      "stepId": "incK",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 2,
      "j": 0,
      "k": 12,
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
        733,
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
      "step": 251,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 2,
      "j": 0,
      "k": 12,
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
        733,
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
      "step": 252,
      "stepId": "takeRight",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 2,
      "j": 0,
      "k": 12,
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
      "step": 253,
      "stepId": "incK",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 2,
      "j": 1,
      "k": 13,
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
      "step": 254,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 2,
      "j": 1,
      "k": 13,
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
      "step": 255,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 2,
      "j": 1,
      "k": 13,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 256,
      "stepId": "incK",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": 1,
      "k": 14,
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
        "k": true
      }
    },
    {
      "step": 257,
      "stepId": "drainRight",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": 1,
      "k": 14,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 258,
      "stepId": "sortRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 259,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 260,
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 261,
      "stepId": "setMid",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 262,
      "stepId": "sortLeft",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 263,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 264,
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 265,
      "stepId": "setMid",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 266,
      "stepId": "sortLeft",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 267,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 268,
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 269,
      "stepId": "setMid",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 270,
      "stepId": "sortLeft",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 271,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 15,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 272,
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 15,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 273,
      "stepId": "sortRight",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 274,
      "stepId": "markRange",
      "left": 16,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 275,
      "stepId": "checkLeftRight",
      "left": 16,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 276,
      "stepId": "callMerge",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 277,
      "stepId": "copyRuns",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 278,
      "stepId": "initMergePointers",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 279,
      "stepId": "whileBoth",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 280,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 281,
      "stepId": "takeLeft",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 282,
      "stepId": "incK",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": 0,
      "k": 16,
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
        "k": true
      }
    },
    {
      "step": 283,
      "stepId": "drainRight",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": 0,
      "k": 16,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 284,
      "stepId": "sortRight",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 285,
      "stepId": "markRange",
      "left": 17,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 286,
      "stepId": "checkLeftRight",
      "left": 17,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 287,
      "stepId": "callMerge",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 288,
      "stepId": "copyRuns",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 289,
      "stepId": "initMergePointers",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 290,
      "stepId": "whileBoth",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 291,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 292,
      "stepId": "takeLeft",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 293,
      "stepId": "incK",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": 0,
      "k": 16,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 294,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": 0,
      "k": 16,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 295,
      "stepId": "takeLeft",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": 0,
      "k": 16,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 296,
      "stepId": "incK",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": 0,
      "k": 17,
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
        "k": true
      }
    },
    {
      "step": 297,
      "stepId": "drainRight",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": 0,
      "k": 17,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 298,
      "stepId": "sortRight",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 299,
      "stepId": "markRange",
      "left": 18,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 300,
      "stepId": "checkLeftRight",
      "left": 18,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 301,
      "stepId": "setMid",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 302,
      "stepId": "sortLeft",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 303,
      "stepId": "markRange",
      "left": 18,
      "mid": null,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 304,
      "stepId": "checkLeftRight",
      "left": 18,
      "mid": null,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 305,
      "stepId": "sortRight",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 306,
      "stepId": "markRange",
      "left": 19,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 307,
      "stepId": "checkLeftRight",
      "left": 19,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 308,
      "stepId": "callMerge",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 309,
      "stepId": "copyRuns",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 310,
      "stepId": "initMergePointers",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 311,
      "stepId": "whileBoth",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 312,
      "stepId": "compareMerge",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 313,
      "stepId": "takeLeft",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
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
        "k": true
      }
    },
    {
      "step": 314,
      "stepId": "incK",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": 0,
      "k": 19,
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
        "k": true
      }
    },
    {
      "step": 315,
      "stepId": "drainRight",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": 0,
      "k": 19,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 316,
      "stepId": "callMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 317,
      "stepId": "copyRuns",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 318,
      "stepId": "initMergePointers",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 319,
      "stepId": "whileBoth",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
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
        359,
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 320,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 321,
      "stepId": "takeRight",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 322,
      "stepId": "incK",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
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
        "k": true
      }
    },
    {
      "step": 323,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
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
        926,
        951,
        112,
        219
      ]
    },
    {
      "step": 324,
      "stepId": "takeRight",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
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
        951,
        112,
        219
      ]
    },
    {
      "step": 325,
      "stepId": "incK",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 17,
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
        951,
        112,
        219
      ]
    },
    {
      "step": 326,
      "stepId": "drainLeft",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 17,
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
      "step": 327,
      "stepId": "callMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 328,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 329,
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 330,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 331,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 332,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
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
      "step": 333,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 11,
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
      "step": 334,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 11,
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
        "k": true
      }
    },
    {
      "step": 335,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 11,
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
      "step": 336,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 12,
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
      "step": 337,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 12,
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
      "step": 338,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 12,
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
      "step": 339,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 13,
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
      "step": 340,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 13,
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
      "step": 341,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 13,
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
      "step": 342,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 14,
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
      "step": 343,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 14,
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
      "step": 344,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 14,
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
      "step": 345,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 3,
      "k": 15,
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
      "step": 346,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 3,
      "k": 15,
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
      "step": 347,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 3,
      "k": 15,
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
      "step": 348,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 3,
      "k": 16,
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
      "step": 349,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 3,
      "k": 16,
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
      "step": 350,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 3,
      "k": 16,
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
        "k": true
      }
    },
    {
      "step": 351,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
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
      "step": 352,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
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
        "k": true
      }
    },
    {
      "step": 353,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
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
        "k": true
      }
    },
    {
      "step": 354,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
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
        "k": true
      }
    },
    {
      "step": 355,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
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
      ]
    },
    {
      "step": 356,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
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
      "step": 357,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": null,
      "k": 19,
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
      "step": 358,
      "stepId": "drainLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": null,
      "k": 19,
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
      "step": 359,
      "stepId": "callMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
        "k": true
      }
    },
    {
      "step": 360,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
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
      "step": 361,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 362,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
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
        "k": true
      }
    },
    {
      "step": 363,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
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
        "k": true
      }
    },
    {
      "step": 364,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
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
      "step": 365,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 366,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 367,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
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
      "step": 368,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 2,
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
        "k": true
      }
    },
    {
      "step": 369,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 2,
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
        "k": true
      }
    },
    {
      "step": 370,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 2,
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
        "k": true
      }
    },
    {
      "step": 371,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 3,
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
      "step": 372,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 3,
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
      "step": 373,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 3,
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
      "step": 374,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 4,
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
      "step": 375,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 4,
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
      "step": 376,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 4,
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
        "k": true
      }
    },
    {
      "step": 377,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
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
      "step": 378,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
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
      "step": 379,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
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
      "step": 380,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
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
      "step": 381,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
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
      "step": 382,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
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
      ]
    },
    {
      "step": 383,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
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
      ]
    },
    {
      "step": 384,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
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
        "k": true
      }
    },
    {
      "step": 385,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
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
      "step": 386,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 8,
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
      "step": 387,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 8,
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
      "step": 388,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 8,
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
      "step": 389,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
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
      "step": 390,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
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
      "step": 391,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
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
      "step": 392,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
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
      "step": 393,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
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
      "step": 394,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
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
        "k": true
      }
    },
    {
      "step": 395,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
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
      "step": 396,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
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
      "step": 397,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
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
      "step": 398,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
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
        "k": true
      }
    },
    {
      "step": 399,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
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
      "step": 400,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
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
      "step": 401,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
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
        "k": true
      }
    },
    {
      "step": 402,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
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
        "k": true
      }
    },
    {
      "step": 403,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
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
      "step": 404,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
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
        "k": true
      }
    },
    {
      "step": 405,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
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
      "step": 406,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
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
      "step": 407,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 408,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
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
      "step": 409,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
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
        "k": true
      }
    },
    {
      "step": 410,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
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
      "step": 411,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
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
      "step": 412,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
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
      "step": 413,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
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
      "step": 414,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
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
      "step": 415,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
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
      "step": 416,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
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
      "step": 417,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
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
      "step": 418,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
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
      "step": 419,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": 9,
      "k": 19,
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
      "stepId": "drainRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": 9,
      "k": 19,
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
