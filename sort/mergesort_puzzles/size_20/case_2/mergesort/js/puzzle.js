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
    540,
    178,
    420,
    987,
    29,
    594,
    156,
    270,
    483,
    111,
    45,
    426,
    917,
    241,
    104,
    531,
    614,
    550,
    897,
    380
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
    7,
    9,
    10,
    13,
    18,
    19,
    20,
    26,
    29,
    30,
    39,
    47,
    53,
    54,
    55,
    57,
    59,
    60,
    63,
    65,
    66,
    68,
    73,
    74,
    75,
    78,
    80,
    85,
    87,
    89,
    96,
    97,
    98,
    99,
    105,
    106,
    107,
    108,
    109,
    113,
    114,
    122,
    124,
    132,
    142,
    154,
    160,
    169,
    170,
    173,
    181,
    185,
    186,
    187,
    188,
    189,
    191,
    194,
    199,
    201,
    202,
    203,
    204,
    205,
    208,
    213,
    214,
    220,
    221,
    223,
    230,
    231,
    237,
    240,
    245,
    247,
    249,
    254,
    260,
    263,
    266,
    268,
    272,
    277,
    279,
    285,
    286,
    289,
    290,
    292,
    293,
    298,
    302,
    305,
    306,
    309,
    310,
    314,
    317,
    320,
    321,
    331,
    335,
    338,
    345,
    356,
    364,
    368,
    369,
    371,
    372,
    373,
    374,
    375,
    378,
    379,
    384,
    390,
    391,
    396,
    403,
    407,
    408,
    410,
    420,
    421,
    423,
    426,
    430,
    431
  ],
  "answers": {
    "7": {
      "stepId": "checkLeftRight",
      "left": "0",
      "mid": "—",
      "right": "9",
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
    "13": {
      "stepId": "sortLeft",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "18": {
      "stepId": "markRange",
      "left": "0",
      "mid": "—",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "19": {
      "stepId": "checkLeftRight",
      "left": "0",
      "mid": "—",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "20": {
      "stepId": "setMid",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "26": {
      "stepId": "checkLeftRight",
      "left": "1",
      "mid": "—",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "29": {
      "stepId": "initMergePointers",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "30": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "39": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "47": {
      "stepId": "incK",
      "left": "0",
      "mid": "1",
      "right": "2",
      "i": "1",
      "j": "—",
      "k": "2"
    },
    "53": {
      "stepId": "sortLeft",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "54": {
      "stepId": "markRange",
      "left": "3",
      "mid": "—",
      "right": "3",
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
    "59": {
      "stepId": "callMerge",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "60": {
      "stepId": "copyRuns",
      "left": "3",
      "mid": "3",
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
      "i": "0",
      "j": "—",
      "k": "4"
    },
    "66": {
      "stepId": "drainLeft",
      "left": "3",
      "mid": "3",
      "right": "4",
      "i": "0",
      "j": "—",
      "k": "4"
    },
    "68": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "73": {
      "stepId": "incK",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "74": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "75": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "78": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "80": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "2",
      "right": "4",
      "i": "2",
      "j": "1",
      "k": "3"
    },
    "85": {
      "stepId": "markRange",
      "left": "5",
      "mid": "—",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "87": {
      "stepId": "setMid",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "89": {
      "stepId": "markRange",
      "left": "5",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "96": {
      "stepId": "sortLeft",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "97": {
      "stepId": "markRange",
      "left": "5",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "98": {
      "stepId": "checkLeftRight",
      "left": "5",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "99": {
      "stepId": "sortRight",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "105": {
      "stepId": "whileBoth",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "5"
    },
    "106": {
      "stepId": "compareMerge",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "5"
    },
    "107": {
      "stepId": "takeRight",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "0",
      "k": "5"
    },
    "108": {
      "stepId": "incK",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "—",
      "k": "6"
    },
    "109": {
      "stepId": "drainLeft",
      "left": "5",
      "mid": "5",
      "right": "6",
      "i": "0",
      "j": "—",
      "k": "6"
    },
    "113": {
      "stepId": "callMerge",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "114": {
      "stepId": "copyRuns",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "122": {
      "stepId": "incK",
      "left": "5",
      "mid": "6",
      "right": "7",
      "i": "1",
      "j": "—",
      "k": "7"
    },
    "124": {
      "stepId": "sortRight",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "132": {
      "stepId": "markRange",
      "left": "9",
      "mid": "—",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "142": {
      "stepId": "callMerge",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "154": {
      "stepId": "incK",
      "left": "5",
      "mid": "7",
      "right": "9",
      "i": "2",
      "j": "1",
      "k": "8"
    },
    "160": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "169": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "170": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "173": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "1",
      "j": "2",
      "k": "3"
    },
    "181": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "3",
      "j": "3",
      "k": "6"
    },
    "185": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "3",
      "j": "4",
      "k": "7"
    },
    "186": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "4",
      "j": "4",
      "k": "8"
    },
    "187": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "4",
      "j": "4",
      "k": "8"
    },
    "188": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "4",
      "j": "4",
      "k": "8"
    },
    "189": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "9",
      "i": "4",
      "j": "—",
      "k": "9"
    },
    "191": {
      "stepId": "sortRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "194": {
      "stepId": "setMid",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "199": {
      "stepId": "sortLeft",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "201": {
      "stepId": "checkLeftRight",
      "left": "10",
      "mid": "—",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "202": {
      "stepId": "setMid",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "203": {
      "stepId": "sortLeft",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "204": {
      "stepId": "markRange",
      "left": "10",
      "mid": "—",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "205": {
      "stepId": "checkLeftRight",
      "left": "10",
      "mid": "—",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "208": {
      "stepId": "markRange",
      "left": "10",
      "mid": "—",
      "right": "10",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "213": {
      "stepId": "callMerge",
      "left": "10",
      "mid": "10",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "214": {
      "stepId": "copyRuns",
      "left": "10",
      "mid": "10",
      "right": "11",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "220": {
      "stepId": "drainRight",
      "left": "10",
      "mid": "10",
      "right": "11",
      "i": "—",
      "j": "0",
      "k": "11"
    },
    "221": {
      "stepId": "sortRight",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "223": {
      "stepId": "checkLeftRight",
      "left": "12",
      "mid": "—",
      "right": "12",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "230": {
      "stepId": "incK",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "1",
      "j": "0",
      "k": "11"
    },
    "231": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "11",
      "right": "12",
      "i": "1",
      "j": "0",
      "k": "11"
    },
    "237": {
      "stepId": "checkLeftRight",
      "left": "13",
      "mid": "—",
      "right": "14",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "240": {
      "stepId": "markRange",
      "left": "13",
      "mid": "—",
      "right": "13",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "245": {
      "stepId": "callMerge",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "247": {
      "stepId": "initMergePointers",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "0",
      "j": "0",
      "k": "13"
    },
    "249": {
      "stepId": "compareMerge",
      "left": "13",
      "mid": "13",
      "right": "14",
      "i": "0",
      "j": "0",
      "k": "13"
    },
    "254": {
      "stepId": "copyRuns",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "260": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "1",
      "j": "0",
      "k": "11"
    },
    "263": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "1",
      "j": "1",
      "k": "12"
    },
    "266": {
      "stepId": "drainLeft",
      "left": "10",
      "mid": "12",
      "right": "14",
      "i": "1",
      "j": "—",
      "k": "13"
    },
    "268": {
      "stepId": "markRange",
      "left": "15",
      "mid": "—",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "272": {
      "stepId": "markRange",
      "left": "15",
      "mid": "—",
      "right": "17",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "277": {
      "stepId": "checkLeftRight",
      "left": "15",
      "mid": "—",
      "right": "16",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "279": {
      "stepId": "sortLeft",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "285": {
      "stepId": "callMerge",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "286": {
      "stepId": "copyRuns",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "289": {
      "stepId": "compareMerge",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "290": {
      "stepId": "takeLeft",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "292": {
      "stepId": "drainRight",
      "left": "15",
      "mid": "15",
      "right": "16",
      "i": "—",
      "j": "0",
      "k": "16"
    },
    "293": {
      "stepId": "sortRight",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "298": {
      "stepId": "initMergePointers",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "0",
      "j": "0",
      "k": "15"
    },
    "302": {
      "stepId": "incK",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "1",
      "j": "0",
      "k": "16"
    },
    "305": {
      "stepId": "incK",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "1",
      "j": "—",
      "k": "17"
    },
    "306": {
      "stepId": "drainLeft",
      "left": "15",
      "mid": "16",
      "right": "17",
      "i": "1",
      "j": "—",
      "k": "17"
    },
    "309": {
      "stepId": "checkLeftRight",
      "left": "18",
      "mid": "—",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "310": {
      "stepId": "setMid",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "314": {
      "stepId": "sortRight",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "317": {
      "stepId": "callMerge",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "320": {
      "stepId": "whileBoth",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "18"
    },
    "321": {
      "stepId": "compareMerge",
      "left": "18",
      "mid": "18",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "18"
    },
    "331": {
      "stepId": "incK",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "0",
      "j": "1",
      "k": "16"
    },
    "335": {
      "stepId": "compareMerge",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "1",
      "j": "1",
      "k": "17"
    },
    "338": {
      "stepId": "compareMerge",
      "left": "15",
      "mid": "17",
      "right": "19",
      "i": "2",
      "j": "1",
      "k": "18"
    },
    "345": {
      "stepId": "whileBoth",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "10"
    },
    "356": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "3",
      "j": "0",
      "k": "13"
    },
    "364": {
      "stepId": "compareMerge",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "2",
      "k": "16"
    },
    "368": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "3",
      "k": "17"
    },
    "369": {
      "stepId": "incK",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "18"
    },
    "371": {
      "stepId": "takeRight",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "4",
      "k": "18"
    },
    "372": {
      "stepId": "incK",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "—",
      "k": "19"
    },
    "373": {
      "stepId": "drainLeft",
      "left": "10",
      "mid": "14",
      "right": "19",
      "i": "4",
      "j": "—",
      "k": "19"
    },
    "374": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "375": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "378": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "379": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "384": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "390": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "2",
      "j": "2",
      "k": "4"
    },
    "391": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "2",
      "j": "2",
      "k": "4"
    },
    "396": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "4",
      "j": "2",
      "k": "6"
    },
    "403": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "5",
      "j": "3",
      "k": "8"
    },
    "407": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "4",
      "k": "10"
    },
    "408": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "4",
      "k": "10"
    },
    "410": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "6",
      "j": "5",
      "k": "11"
    },
    "420": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "6",
      "k": "14"
    },
    "421": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "6",
      "k": "14"
    },
    "423": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "8",
      "j": "7",
      "k": "15"
    },
    "426": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "9",
      "j": "7",
      "k": "16"
    },
    "430": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "9",
      "j": "8",
      "k": "17"
    },
    "431": {
      "stepId": "incK",
      "left": "0",
      "mid": "9",
      "right": "19",
      "i": "9",
      "j": "9",
      "k": "18"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 638,
        "value": "initMergePointers"
      },
      {
        "id": 414,
        "value": "checkLeftRight"
      },
      {
        "id": 134,
        "value": "incK"
      },
      {
        "id": 197,
        "value": "setMid"
      },
      {
        "id": 764,
        "value": "takeRight"
      },
      {
        "id": 344,
        "value": "takeLeft"
      },
      {
        "id": 890,
        "value": "compareMerge"
      },
      {
        "id": 169,
        "value": "takeLeft"
      },
      {
        "id": 71,
        "value": "copyRuns"
      },
      {
        "id": 771,
        "value": "incK"
      },
      {
        "id": 463,
        "value": "copyRuns"
      },
      {
        "id": 57,
        "value": "initMergePointers"
      },
      {
        "id": 540,
        "value": "copyRuns"
      },
      {
        "id": 526,
        "value": "initMergePointers"
      },
      {
        "id": 50,
        "value": "checkLeftRight"
      },
      {
        "id": 428,
        "value": "sortLeft"
      },
      {
        "id": 379,
        "value": "takeRight"
      },
      {
        "id": 351,
        "value": "compareMerge"
      },
      {
        "id": 624,
        "value": "drainRight"
      },
      {
        "id": 232,
        "value": "sortRight"
      },
      {
        "id": 729,
        "value": "whileBoth"
      },
      {
        "id": 400,
        "value": "setMid"
      },
      {
        "id": 505,
        "value": "checkLeftRight"
      },
      {
        "id": 834,
        "value": "compareMerge"
      },
      {
        "id": 386,
        "value": "incK"
      },
      {
        "id": 512,
        "value": "markRange"
      },
      {
        "id": 743,
        "value": "compareMerge"
      },
      {
        "id": 1,
        "value": "checkLeftRight"
      },
      {
        "id": 484,
        "value": "checkLeftRight"
      },
      {
        "id": 820,
        "value": "compareMerge"
      },
      {
        "id": 680,
        "value": "sortRight"
      },
      {
        "id": 694,
        "value": "whileBoth"
      },
      {
        "id": 778,
        "value": "drainLeft"
      },
      {
        "id": 813,
        "value": "compareMerge"
      },
      {
        "id": 869,
        "value": "compareMerge"
      },
      {
        "id": 246,
        "value": "compareMerge"
      },
      {
        "id": 631,
        "value": "sortRight"
      },
      {
        "id": 659,
        "value": "drainLeft"
      },
      {
        "id": 589,
        "value": "sortLeft"
      },
      {
        "id": 750,
        "value": "takeRight"
      },
      {
        "id": 708,
        "value": "incK"
      },
      {
        "id": 687,
        "value": "callMerge"
      },
      {
        "id": 617,
        "value": "takeLeft"
      },
      {
        "id": 827,
        "value": "takeLeft"
      },
      {
        "id": 295,
        "value": "sortRight"
      },
      {
        "id": 575,
        "value": "markRange"
      },
      {
        "id": 883,
        "value": "compareMerge"
      },
      {
        "id": 799,
        "value": "compareMerge"
      },
      {
        "id": 155,
        "value": "incK"
      },
      {
        "id": 211,
        "value": "sortLeft"
      },
      {
        "id": 288,
        "value": "incK"
      },
      {
        "id": 491,
        "value": "incK"
      },
      {
        "id": 806,
        "value": "takeLeft"
      },
      {
        "id": 162,
        "value": "compareMerge"
      },
      {
        "id": 862,
        "value": "incK"
      },
      {
        "id": 148,
        "value": "copyRuns"
      },
      {
        "id": 848,
        "value": "incK"
      },
      {
        "id": 841,
        "value": "takeRight"
      },
      {
        "id": 855,
        "value": "compareMerge"
      },
      {
        "id": 225,
        "value": "checkLeftRight"
      },
      {
        "id": 785,
        "value": "callMerge"
      },
      {
        "id": 876,
        "value": "takeRight"
      },
      {
        "id": 722,
        "value": "compareMerge"
      },
      {
        "id": 330,
        "value": "compareMerge"
      },
      {
        "id": 302,
        "value": "markRange"
      },
      {
        "id": 456,
        "value": "callMerge"
      },
      {
        "id": 442,
        "value": "checkLeftRight"
      },
      {
        "id": 218,
        "value": "markRange"
      },
      {
        "id": 897,
        "value": "takeRight"
      },
      {
        "id": 666,
        "value": "checkLeftRight"
      },
      {
        "id": 127,
        "value": "compareMerge"
      },
      {
        "id": 204,
        "value": "markRange"
      },
      {
        "id": 274,
        "value": "callMerge"
      },
      {
        "id": 323,
        "value": "copyRuns"
      },
      {
        "id": 904,
        "value": "incK"
      },
      {
        "id": 568,
        "value": "markRange"
      },
      {
        "id": 176,
        "value": "takeLeft"
      },
      {
        "id": 582,
        "value": "checkLeftRight"
      },
      {
        "id": 435,
        "value": "markRange"
      },
      {
        "id": 715,
        "value": "compareMerge"
      },
      {
        "id": 120,
        "value": "copyRuns"
      },
      {
        "id": 407,
        "value": "sortLeft"
      },
      {
        "id": 645,
        "value": "incK"
      },
      {
        "id": 470,
        "value": "drainRight"
      },
      {
        "id": 519,
        "value": "callMerge"
      },
      {
        "id": 603,
        "value": "copyRuns"
      },
      {
        "id": 8,
        "value": "sortLeft"
      },
      {
        "id": 337,
        "value": "takeRight"
      },
      {
        "id": 547,
        "value": "compareMerge"
      },
      {
        "id": 596,
        "value": "callMerge"
      },
      {
        "id": 92,
        "value": "markRange"
      },
      {
        "id": 554,
        "value": "compareMerge"
      },
      {
        "id": 477,
        "value": "sortRight"
      },
      {
        "id": 281,
        "value": "copyRuns"
      },
      {
        "id": 99,
        "value": "checkLeftRight"
      },
      {
        "id": 29,
        "value": "markRange"
      },
      {
        "id": 141,
        "value": "drainLeft"
      },
      {
        "id": 673,
        "value": "setMid"
      },
      {
        "id": 792,
        "value": "copyRuns"
      },
      {
        "id": 498,
        "value": "compareMerge"
      },
      {
        "id": 239,
        "value": "whileBoth"
      },
      {
        "id": 36,
        "value": "checkLeftRight"
      },
      {
        "id": 736,
        "value": "takeRight"
      },
      {
        "id": 190,
        "value": "markRange"
      },
      {
        "id": 64,
        "value": "whileBoth"
      },
      {
        "id": 533,
        "value": "compareMerge"
      },
      {
        "id": 561,
        "value": "drainLeft"
      },
      {
        "id": 43,
        "value": "setMid"
      },
      {
        "id": 757,
        "value": "incK"
      },
      {
        "id": 372,
        "value": "compareMerge"
      },
      {
        "id": 260,
        "value": "incK"
      },
      {
        "id": 309,
        "value": "callMerge"
      },
      {
        "id": 449,
        "value": "markRange"
      },
      {
        "id": 113,
        "value": "callMerge"
      },
      {
        "id": 22,
        "value": "sortLeft"
      },
      {
        "id": 610,
        "value": "compareMerge"
      },
      {
        "id": 421,
        "value": "setMid"
      },
      {
        "id": 183,
        "value": "compareMerge"
      },
      {
        "id": 365,
        "value": "incK"
      },
      {
        "id": 85,
        "value": "sortLeft"
      },
      {
        "id": 652,
        "value": "incK"
      },
      {
        "id": 701,
        "value": "compareMerge"
      },
      {
        "id": 358,
        "value": "takeLeft"
      },
      {
        "id": 316,
        "value": "incK"
      },
      {
        "id": 393,
        "value": "sortRight"
      },
      {
        "id": 78,
        "value": "incK"
      },
      {
        "id": 267,
        "value": "drainLeft"
      },
      {
        "id": 253,
        "value": "takeRight"
      },
      {
        "id": 15,
        "value": "markRange"
      },
      {
        "id": 106,
        "value": "markRange"
      }
    ],
    "left": [
      {
        "id": 730,
        "value": "10"
      },
      {
        "id": 408,
        "value": "10"
      },
      {
        "id": 191,
        "value": "5"
      },
      {
        "id": 737,
        "value": "10"
      },
      {
        "id": 310,
        "value": "5"
      },
      {
        "id": 93,
        "value": "3"
      },
      {
        "id": 653,
        "value": "15"
      },
      {
        "id": 443,
        "value": "10"
      },
      {
        "id": 527,
        "value": "13"
      },
      {
        "id": 576,
        "value": "15"
      },
      {
        "id": 415,
        "value": "10"
      },
      {
        "id": 464,
        "value": "10"
      },
      {
        "id": 625,
        "value": "15"
      },
      {
        "id": 240,
        "value": "5"
      },
      {
        "id": 751,
        "value": "10"
      },
      {
        "id": 149,
        "value": "0"
      },
      {
        "id": 380,
        "value": "0"
      },
      {
        "id": 786,
        "value": "0"
      },
      {
        "id": 849,
        "value": "0"
      },
      {
        "id": 366,
        "value": "0"
      },
      {
        "id": 702,
        "value": "18"
      },
      {
        "id": 758,
        "value": "10"
      },
      {
        "id": 877,
        "value": "0"
      },
      {
        "id": 387,
        "value": "0"
      },
      {
        "id": 590,
        "value": "15"
      },
      {
        "id": 688,
        "value": "18"
      },
      {
        "id": 863,
        "value": "0"
      },
      {
        "id": 485,
        "value": "12"
      },
      {
        "id": 856,
        "value": "0"
      },
      {
        "id": 541,
        "value": "10"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 905,
        "value": "0"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 254,
        "value": "5"
      },
      {
        "id": 555,
        "value": "10"
      },
      {
        "id": 618,
        "value": "15"
      },
      {
        "id": 247,
        "value": "5"
      },
      {
        "id": 520,
        "value": "13"
      },
      {
        "id": 534,
        "value": "13"
      },
      {
        "id": 716,
        "value": "15"
      },
      {
        "id": 289,
        "value": "5"
      },
      {
        "id": 583,
        "value": "15"
      },
      {
        "id": 499,
        "value": "10"
      },
      {
        "id": 135,
        "value": "3"
      },
      {
        "id": 548,
        "value": "10"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 394,
        "value": "0"
      },
      {
        "id": 695,
        "value": "18"
      },
      {
        "id": 198,
        "value": "5"
      },
      {
        "id": 100,
        "value": "3"
      },
      {
        "id": 870,
        "value": "0"
      },
      {
        "id": 436,
        "value": "10"
      },
      {
        "id": 807,
        "value": "0"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 884,
        "value": "0"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 65,
        "value": "0"
      },
      {
        "id": 282,
        "value": "5"
      },
      {
        "id": 429,
        "value": "10"
      },
      {
        "id": 331,
        "value": "0"
      },
      {
        "id": 345,
        "value": "0"
      },
      {
        "id": 681,
        "value": "18"
      },
      {
        "id": 793,
        "value": "0"
      },
      {
        "id": 709,
        "value": "15"
      },
      {
        "id": 471,
        "value": "10"
      },
      {
        "id": 779,
        "value": "10"
      },
      {
        "id": 156,
        "value": "0"
      },
      {
        "id": 478,
        "value": "10"
      },
      {
        "id": 212,
        "value": "5"
      },
      {
        "id": 51,
        "value": "1"
      },
      {
        "id": 177,
        "value": "0"
      },
      {
        "id": 233,
        "value": "5"
      },
      {
        "id": 835,
        "value": "0"
      },
      {
        "id": 275,
        "value": "5"
      },
      {
        "id": 891,
        "value": "0"
      },
      {
        "id": 128,
        "value": "3"
      },
      {
        "id": 828,
        "value": "0"
      },
      {
        "id": 296,
        "value": "5"
      },
      {
        "id": 114,
        "value": "3"
      },
      {
        "id": 317,
        "value": "5"
      },
      {
        "id": 821,
        "value": "0"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 506,
        "value": "13"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 457,
        "value": "10"
      },
      {
        "id": 513,
        "value": "13"
      },
      {
        "id": 772,
        "value": "10"
      },
      {
        "id": 205,
        "value": "5"
      },
      {
        "id": 898,
        "value": "0"
      },
      {
        "id": 303,
        "value": "9"
      },
      {
        "id": 611,
        "value": "15"
      },
      {
        "id": 562,
        "value": "10"
      },
      {
        "id": 107,
        "value": "4"
      },
      {
        "id": 744,
        "value": "10"
      },
      {
        "id": 450,
        "value": "10"
      },
      {
        "id": 422,
        "value": "10"
      },
      {
        "id": 632,
        "value": "15"
      },
      {
        "id": 352,
        "value": "0"
      },
      {
        "id": 142,
        "value": "3"
      },
      {
        "id": 338,
        "value": "0"
      },
      {
        "id": 121,
        "value": "3"
      },
      {
        "id": 170,
        "value": "0"
      },
      {
        "id": 86,
        "value": "3"
      },
      {
        "id": 268,
        "value": "5"
      },
      {
        "id": 261,
        "value": "5"
      },
      {
        "id": 800,
        "value": "0"
      },
      {
        "id": 163,
        "value": "0"
      },
      {
        "id": 842,
        "value": "0"
      },
      {
        "id": 660,
        "value": "15"
      },
      {
        "id": 373,
        "value": "0"
      },
      {
        "id": 184,
        "value": "0"
      },
      {
        "id": 667,
        "value": "18"
      },
      {
        "id": 723,
        "value": "15"
      },
      {
        "id": 492,
        "value": "10"
      },
      {
        "id": 219,
        "value": "5"
      },
      {
        "id": 569,
        "value": "15"
      },
      {
        "id": 226,
        "value": "5"
      },
      {
        "id": 401,
        "value": "10"
      },
      {
        "id": 646,
        "value": "15"
      },
      {
        "id": 604,
        "value": "15"
      },
      {
        "id": 324,
        "value": "0"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 765,
        "value": "10"
      },
      {
        "id": 674,
        "value": "18"
      },
      {
        "id": 359,
        "value": "0"
      },
      {
        "id": 814,
        "value": "0"
      },
      {
        "id": 597,
        "value": "15"
      },
      {
        "id": 639,
        "value": "15"
      },
      {
        "id": 37,
        "value": "0"
      }
    ],
    "mid": [
      {
        "id": 3,
        "value": "—"
      },
      {
        "id": 192,
        "value": "—"
      },
      {
        "id": 612,
        "value": "15"
      },
      {
        "id": 570,
        "value": "—"
      },
      {
        "id": 157,
        "value": "2"
      },
      {
        "id": 822,
        "value": "9"
      },
      {
        "id": 647,
        "value": "16"
      },
      {
        "id": 136,
        "value": "3"
      },
      {
        "id": 213,
        "value": "5"
      },
      {
        "id": 311,
        "value": "7"
      },
      {
        "id": 108,
        "value": "—"
      },
      {
        "id": 808,
        "value": "9"
      },
      {
        "id": 129,
        "value": "3"
      },
      {
        "id": 584,
        "value": "—"
      },
      {
        "id": 857,
        "value": "9"
      },
      {
        "id": 59,
        "value": "0"
      },
      {
        "id": 535,
        "value": "13"
      },
      {
        "id": 304,
        "value": "—"
      },
      {
        "id": 325,
        "value": "4"
      },
      {
        "id": 850,
        "value": "9"
      },
      {
        "id": 745,
        "value": "14"
      },
      {
        "id": 122,
        "value": "3"
      },
      {
        "id": 437,
        "value": "—"
      },
      {
        "id": 654,
        "value": "16"
      },
      {
        "id": 458,
        "value": "10"
      },
      {
        "id": 500,
        "value": "11"
      },
      {
        "id": 871,
        "value": "9"
      },
      {
        "id": 689,
        "value": "18"
      },
      {
        "id": 836,
        "value": "9"
      },
      {
        "id": 675,
        "value": "18"
      },
      {
        "id": 766,
        "value": "14"
      },
      {
        "id": 360,
        "value": "4"
      },
      {
        "id": 388,
        "value": "4"
      },
      {
        "id": 724,
        "value": "17"
      },
      {
        "id": 220,
        "value": "—"
      },
      {
        "id": 73,
        "value": "1"
      },
      {
        "id": 479,
        "value": "11"
      },
      {
        "id": 45,
        "value": "0"
      },
      {
        "id": 626,
        "value": "15"
      },
      {
        "id": 318,
        "value": "7"
      },
      {
        "id": 374,
        "value": "4"
      },
      {
        "id": 598,
        "value": "15"
      },
      {
        "id": 843,
        "value": "9"
      },
      {
        "id": 591,
        "value": "15"
      },
      {
        "id": 423,
        "value": "11"
      },
      {
        "id": 661,
        "value": "16"
      },
      {
        "id": 829,
        "value": "9"
      },
      {
        "id": 899,
        "value": "9"
      },
      {
        "id": 367,
        "value": "4"
      },
      {
        "id": 206,
        "value": "—"
      },
      {
        "id": 885,
        "value": "9"
      },
      {
        "id": 619,
        "value": "15"
      },
      {
        "id": 66,
        "value": "0"
      },
      {
        "id": 409,
        "value": "12"
      },
      {
        "id": 269,
        "value": "5"
      },
      {
        "id": 115,
        "value": "3"
      },
      {
        "id": 38,
        "value": "—"
      },
      {
        "id": 878,
        "value": "9"
      },
      {
        "id": 514,
        "value": "—"
      },
      {
        "id": 283,
        "value": "6"
      },
      {
        "id": 234,
        "value": "5"
      },
      {
        "id": 101,
        "value": "—"
      },
      {
        "id": 297,
        "value": "7"
      },
      {
        "id": 815,
        "value": "9"
      },
      {
        "id": 87,
        "value": "3"
      },
      {
        "id": 633,
        "value": "16"
      },
      {
        "id": 493,
        "value": "11"
      },
      {
        "id": 486,
        "value": "—"
      },
      {
        "id": 507,
        "value": "—"
      },
      {
        "id": 710,
        "value": "17"
      },
      {
        "id": 521,
        "value": "13"
      },
      {
        "id": 255,
        "value": "5"
      },
      {
        "id": 577,
        "value": "—"
      },
      {
        "id": 717,
        "value": "17"
      },
      {
        "id": 346,
        "value": "4"
      },
      {
        "id": 906,
        "value": "9"
      },
      {
        "id": 199,
        "value": "7"
      },
      {
        "id": 178,
        "value": "2"
      },
      {
        "id": 549,
        "value": "12"
      },
      {
        "id": 640,
        "value": "16"
      },
      {
        "id": 794,
        "value": "9"
      },
      {
        "id": 395,
        "value": "9"
      },
      {
        "id": 703,
        "value": "18"
      },
      {
        "id": 290,
        "value": "6"
      },
      {
        "id": 451,
        "value": "—"
      },
      {
        "id": 248,
        "value": "5"
      },
      {
        "id": 227,
        "value": "—"
      },
      {
        "id": 556,
        "value": "12"
      },
      {
        "id": 339,
        "value": "4"
      },
      {
        "id": 52,
        "value": "—"
      },
      {
        "id": 353,
        "value": "4"
      },
      {
        "id": 381,
        "value": "4"
      },
      {
        "id": 472,
        "value": "10"
      },
      {
        "id": 94,
        "value": "—"
      },
      {
        "id": 444,
        "value": "—"
      },
      {
        "id": 150,
        "value": "2"
      },
      {
        "id": 402,
        "value": "14"
      },
      {
        "id": 787,
        "value": "9"
      },
      {
        "id": 892,
        "value": "9"
      },
      {
        "id": 185,
        "value": "2"
      },
      {
        "id": 262,
        "value": "5"
      },
      {
        "id": 542,
        "value": "12"
      },
      {
        "id": 332,
        "value": "4"
      },
      {
        "id": 143,
        "value": "3"
      },
      {
        "id": 430,
        "value": "11"
      },
      {
        "id": 773,
        "value": "14"
      },
      {
        "id": 31,
        "value": "—"
      },
      {
        "id": 682,
        "value": "18"
      },
      {
        "id": 759,
        "value": "14"
      },
      {
        "id": 563,
        "value": "12"
      },
      {
        "id": 696,
        "value": "18"
      },
      {
        "id": 24,
        "value": "2"
      },
      {
        "id": 171,
        "value": "2"
      },
      {
        "id": 528,
        "value": "13"
      },
      {
        "id": 780,
        "value": "14"
      },
      {
        "id": 416,
        "value": "—"
      },
      {
        "id": 276,
        "value": "6"
      },
      {
        "id": 17,
        "value": "—"
      },
      {
        "id": 605,
        "value": "15"
      },
      {
        "id": 668,
        "value": "—"
      },
      {
        "id": 10,
        "value": "4"
      },
      {
        "id": 864,
        "value": "9"
      },
      {
        "id": 801,
        "value": "9"
      },
      {
        "id": 80,
        "value": "1"
      },
      {
        "id": 731,
        "value": "14"
      },
      {
        "id": 738,
        "value": "14"
      },
      {
        "id": 465,
        "value": "10"
      },
      {
        "id": 752,
        "value": "14"
      },
      {
        "id": 164,
        "value": "2"
      },
      {
        "id": 241,
        "value": "5"
      }
    ],
    "right": [
      {
        "id": 81,
        "value": "2"
      },
      {
        "id": 690,
        "value": "19"
      },
      {
        "id": 648,
        "value": "17"
      },
      {
        "id": 732,
        "value": "19"
      },
      {
        "id": 53,
        "value": "1"
      },
      {
        "id": 809,
        "value": "19"
      },
      {
        "id": 144,
        "value": "4"
      },
      {
        "id": 641,
        "value": "17"
      },
      {
        "id": 242,
        "value": "6"
      },
      {
        "id": 186,
        "value": "4"
      },
      {
        "id": 746,
        "value": "19"
      },
      {
        "id": 753,
        "value": "19"
      },
      {
        "id": 123,
        "value": "4"
      },
      {
        "id": 214,
        "value": "6"
      },
      {
        "id": 207,
        "value": "7"
      },
      {
        "id": 585,
        "value": "16"
      },
      {
        "id": 886,
        "value": "19"
      },
      {
        "id": 725,
        "value": "19"
      },
      {
        "id": 865,
        "value": "19"
      },
      {
        "id": 781,
        "value": "19"
      },
      {
        "id": 249,
        "value": "6"
      },
      {
        "id": 788,
        "value": "19"
      },
      {
        "id": 879,
        "value": "19"
      },
      {
        "id": 676,
        "value": "19"
      },
      {
        "id": 312,
        "value": "9"
      },
      {
        "id": 438,
        "value": "11"
      },
      {
        "id": 564,
        "value": "14"
      },
      {
        "id": 130,
        "value": "4"
      },
      {
        "id": 851,
        "value": "19"
      },
      {
        "id": 333,
        "value": "9"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 284,
        "value": "7"
      },
      {
        "id": 158,
        "value": "4"
      },
      {
        "id": 39,
        "value": "1"
      },
      {
        "id": 697,
        "value": "19"
      },
      {
        "id": 193,
        "value": "9"
      },
      {
        "id": 382,
        "value": "9"
      },
      {
        "id": 508,
        "value": "14"
      },
      {
        "id": 704,
        "value": "19"
      },
      {
        "id": 396,
        "value": "19"
      },
      {
        "id": 480,
        "value": "12"
      },
      {
        "id": 410,
        "value": "14"
      },
      {
        "id": 263,
        "value": "6"
      },
      {
        "id": 627,
        "value": "16"
      },
      {
        "id": 25,
        "value": "4"
      },
      {
        "id": 662,
        "value": "17"
      },
      {
        "id": 837,
        "value": "19"
      },
      {
        "id": 165,
        "value": "4"
      },
      {
        "id": 102,
        "value": "3"
      },
      {
        "id": 235,
        "value": "6"
      },
      {
        "id": 571,
        "value": "19"
      },
      {
        "id": 655,
        "value": "17"
      },
      {
        "id": 501,
        "value": "12"
      },
      {
        "id": 529,
        "value": "14"
      },
      {
        "id": 634,
        "value": "17"
      },
      {
        "id": 32,
        "value": "1"
      },
      {
        "id": 326,
        "value": "9"
      },
      {
        "id": 536,
        "value": "14"
      },
      {
        "id": 452,
        "value": "10"
      },
      {
        "id": 669,
        "value": "19"
      },
      {
        "id": 340,
        "value": "9"
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
        "id": 578,
        "value": "17"
      },
      {
        "id": 228,
        "value": "5"
      },
      {
        "id": 557,
        "value": "14"
      },
      {
        "id": 389,
        "value": "9"
      },
      {
        "id": 550,
        "value": "14"
      },
      {
        "id": 319,
        "value": "9"
      },
      {
        "id": 116,
        "value": "4"
      },
      {
        "id": 60,
        "value": "1"
      },
      {
        "id": 11,
        "value": "9"
      },
      {
        "id": 487,
        "value": "12"
      },
      {
        "id": 4,
        "value": "9"
      },
      {
        "id": 900,
        "value": "19"
      },
      {
        "id": 767,
        "value": "19"
      },
      {
        "id": 67,
        "value": "1"
      },
      {
        "id": 613,
        "value": "16"
      },
      {
        "id": 606,
        "value": "16"
      },
      {
        "id": 88,
        "value": "4"
      },
      {
        "id": 298,
        "value": "9"
      },
      {
        "id": 403,
        "value": "19"
      },
      {
        "id": 200,
        "value": "9"
      },
      {
        "id": 816,
        "value": "19"
      },
      {
        "id": 18,
        "value": "4"
      },
      {
        "id": 844,
        "value": "19"
      },
      {
        "id": 221,
        "value": "5"
      },
      {
        "id": 109,
        "value": "4"
      },
      {
        "id": 179,
        "value": "4"
      },
      {
        "id": 256,
        "value": "6"
      },
      {
        "id": 95,
        "value": "3"
      },
      {
        "id": 543,
        "value": "14"
      },
      {
        "id": 515,
        "value": "13"
      },
      {
        "id": 445,
        "value": "11"
      },
      {
        "id": 459,
        "value": "11"
      },
      {
        "id": 291,
        "value": "7"
      },
      {
        "id": 823,
        "value": "19"
      },
      {
        "id": 522,
        "value": "14"
      },
      {
        "id": 172,
        "value": "4"
      },
      {
        "id": 347,
        "value": "9"
      },
      {
        "id": 718,
        "value": "19"
      },
      {
        "id": 599,
        "value": "16"
      },
      {
        "id": 354,
        "value": "9"
      },
      {
        "id": 893,
        "value": "19"
      },
      {
        "id": 620,
        "value": "16"
      },
      {
        "id": 424,
        "value": "12"
      },
      {
        "id": 872,
        "value": "19"
      },
      {
        "id": 592,
        "value": "16"
      },
      {
        "id": 795,
        "value": "19"
      },
      {
        "id": 368,
        "value": "9"
      },
      {
        "id": 431,
        "value": "12"
      },
      {
        "id": 802,
        "value": "19"
      },
      {
        "id": 151,
        "value": "4"
      },
      {
        "id": 466,
        "value": "11"
      },
      {
        "id": 277,
        "value": "7"
      },
      {
        "id": 760,
        "value": "19"
      },
      {
        "id": 361,
        "value": "9"
      },
      {
        "id": 270,
        "value": "6"
      },
      {
        "id": 137,
        "value": "4"
      },
      {
        "id": 305,
        "value": "9"
      },
      {
        "id": 711,
        "value": "19"
      },
      {
        "id": 830,
        "value": "19"
      },
      {
        "id": 907,
        "value": "19"
      },
      {
        "id": 683,
        "value": "19"
      },
      {
        "id": 473,
        "value": "11"
      },
      {
        "id": 74,
        "value": "2"
      },
      {
        "id": 494,
        "value": "12"
      },
      {
        "id": 417,
        "value": "12"
      },
      {
        "id": 774,
        "value": "19"
      },
      {
        "id": 375,
        "value": "9"
      }
    ],
    "i": [
      {
        "id": 908,
        "value": "9"
      },
      {
        "id": 782,
        "value": "4"
      },
      {
        "id": 299,
        "value": "—"
      },
      {
        "id": 348,
        "value": "1"
      },
      {
        "id": 796,
        "value": "—"
      },
      {
        "id": 691,
        "value": "—"
      },
      {
        "id": 110,
        "value": "—"
      },
      {
        "id": 131,
        "value": "0"
      },
      {
        "id": 628,
        "value": "—"
      },
      {
        "id": 19,
        "value": "—"
      },
      {
        "id": 229,
        "value": "—"
      },
      {
        "id": 201,
        "value": "—"
      },
      {
        "id": 369,
        "value": "4"
      },
      {
        "id": 873,
        "value": "8"
      },
      {
        "id": 495,
        "value": "1"
      },
      {
        "id": 257,
        "value": "0"
      },
      {
        "id": 47,
        "value": "—"
      },
      {
        "id": 502,
        "value": "1"
      },
      {
        "id": 635,
        "value": "—"
      },
      {
        "id": 103,
        "value": "—"
      },
      {
        "id": 677,
        "value": "—"
      },
      {
        "id": 341,
        "value": "1"
      },
      {
        "id": 894,
        "value": "9"
      },
      {
        "id": 537,
        "value": "0"
      },
      {
        "id": 586,
        "value": "—"
      },
      {
        "id": 68,
        "value": "0"
      },
      {
        "id": 600,
        "value": "—"
      },
      {
        "id": 705,
        "value": "0"
      },
      {
        "id": 222,
        "value": "—"
      },
      {
        "id": 215,
        "value": "—"
      },
      {
        "id": 5,
        "value": "—"
      },
      {
        "id": 334,
        "value": "1"
      },
      {
        "id": 789,
        "value": "—"
      },
      {
        "id": 404,
        "value": "—"
      },
      {
        "id": 866,
        "value": "6"
      },
      {
        "id": 124,
        "value": "—"
      },
      {
        "id": 803,
        "value": "0"
      },
      {
        "id": 82,
        "value": "1"
      },
      {
        "id": 292,
        "value": "1"
      },
      {
        "id": 663,
        "value": "1"
      },
      {
        "id": 26,
        "value": "—"
      },
      {
        "id": 187,
        "value": "2"
      },
      {
        "id": 558,
        "value": "1"
      },
      {
        "id": 397,
        "value": "—"
      },
      {
        "id": 264,
        "value": "0"
      },
      {
        "id": 250,
        "value": "0"
      },
      {
        "id": 754,
        "value": "4"
      },
      {
        "id": 831,
        "value": "2"
      },
      {
        "id": 383,
        "value": "4"
      },
      {
        "id": 271,
        "value": "0"
      },
      {
        "id": 712,
        "value": "0"
      },
      {
        "id": 523,
        "value": "—"
      },
      {
        "id": 761,
        "value": "4"
      },
      {
        "id": 509,
        "value": "—"
      },
      {
        "id": 621,
        "value": "0"
      },
      {
        "id": 362,
        "value": "3"
      },
      {
        "id": 180,
        "value": "1"
      },
      {
        "id": 516,
        "value": "—"
      },
      {
        "id": 656,
        "value": "1"
      },
      {
        "id": 614,
        "value": "0"
      },
      {
        "id": 278,
        "value": "—"
      },
      {
        "id": 411,
        "value": "—"
      },
      {
        "id": 530,
        "value": "0"
      },
      {
        "id": 838,
        "value": "4"
      },
      {
        "id": 75,
        "value": "—"
      },
      {
        "id": 817,
        "value": "1"
      },
      {
        "id": 474,
        "value": "—"
      },
      {
        "id": 460,
        "value": "—"
      },
      {
        "id": 145,
        "value": "0"
      },
      {
        "id": 684,
        "value": "—"
      },
      {
        "id": 418,
        "value": "—"
      },
      {
        "id": 740,
        "value": "3"
      },
      {
        "id": 481,
        "value": "—"
      },
      {
        "id": 544,
        "value": "—"
      },
      {
        "id": 12,
        "value": "—"
      },
      {
        "id": 775,
        "value": "4"
      },
      {
        "id": 159,
        "value": "0"
      },
      {
        "id": 579,
        "value": "—"
      },
      {
        "id": 593,
        "value": "—"
      },
      {
        "id": 845,
        "value": "5"
      },
      {
        "id": 117,
        "value": "—"
      },
      {
        "id": 355,
        "value": "3"
      },
      {
        "id": 880,
        "value": "8"
      },
      {
        "id": 390,
        "value": "4"
      },
      {
        "id": 432,
        "value": "—"
      },
      {
        "id": 453,
        "value": "—"
      },
      {
        "id": 719,
        "value": "1"
      },
      {
        "id": 824,
        "value": "2"
      },
      {
        "id": 852,
        "value": "6"
      },
      {
        "id": 376,
        "value": "4"
      },
      {
        "id": 670,
        "value": "—"
      },
      {
        "id": 313,
        "value": "—"
      },
      {
        "id": 54,
        "value": "—"
      },
      {
        "id": 747,
        "value": "4"
      },
      {
        "id": 607,
        "value": "—"
      },
      {
        "id": 901,
        "value": "9"
      },
      {
        "id": 642,
        "value": "0"
      },
      {
        "id": 33,
        "value": "—"
      },
      {
        "id": 243,
        "value": "0"
      },
      {
        "id": 327,
        "value": "—"
      },
      {
        "id": 551,
        "value": "1"
      },
      {
        "id": 425,
        "value": "—"
      },
      {
        "id": 285,
        "value": "—"
      },
      {
        "id": 565,
        "value": "1"
      },
      {
        "id": 61,
        "value": "0"
      },
      {
        "id": 194,
        "value": "—"
      },
      {
        "id": 488,
        "value": "—"
      },
      {
        "id": 236,
        "value": "—"
      },
      {
        "id": 887,
        "value": "8"
      },
      {
        "id": 698,
        "value": "0"
      },
      {
        "id": 320,
        "value": "2"
      },
      {
        "id": 572,
        "value": "—"
      },
      {
        "id": 726,
        "value": "2"
      },
      {
        "id": 40,
        "value": "—"
      },
      {
        "id": 768,
        "value": "4"
      },
      {
        "id": 173,
        "value": "0"
      },
      {
        "id": 152,
        "value": "—"
      },
      {
        "id": 306,
        "value": "—"
      },
      {
        "id": 733,
        "value": "0"
      },
      {
        "id": 467,
        "value": "—"
      },
      {
        "id": 166,
        "value": "0"
      },
      {
        "id": 96,
        "value": "—"
      },
      {
        "id": 859,
        "value": "6"
      },
      {
        "id": 138,
        "value": "0"
      },
      {
        "id": 649,
        "value": "1"
      },
      {
        "id": 439,
        "value": "—"
      },
      {
        "id": 446,
        "value": "—"
      },
      {
        "id": 810,
        "value": "0"
      },
      {
        "id": 89,
        "value": "—"
      },
      {
        "id": 208,
        "value": "—"
      }
    ],
    "j": [
      {
        "id": 818,
        "value": "1"
      },
      {
        "id": 391,
        "value": "—"
      },
      {
        "id": 881,
        "value": "6"
      },
      {
        "id": 209,
        "value": "—"
      },
      {
        "id": 440,
        "value": "—"
      },
      {
        "id": 230,
        "value": "—"
      },
      {
        "id": 503,
        "value": "0"
      },
      {
        "id": 559,
        "value": "1"
      },
      {
        "id": 615,
        "value": "0"
      },
      {
        "id": 720,
        "value": "1"
      },
      {
        "id": 517,
        "value": "—"
      },
      {
        "id": 153,
        "value": "—"
      },
      {
        "id": 76,
        "value": "—"
      },
      {
        "id": 902,
        "value": "8"
      },
      {
        "id": 825,
        "value": "2"
      },
      {
        "id": 664,
        "value": "—"
      },
      {
        "id": 377,
        "value": "4"
      },
      {
        "id": 349,
        "value": "2"
      },
      {
        "id": 888,
        "value": "7"
      },
      {
        "id": 475,
        "value": "0"
      },
      {
        "id": 790,
        "value": "—"
      },
      {
        "id": 748,
        "value": "2"
      },
      {
        "id": 188,
        "value": "1"
      },
      {
        "id": 482,
        "value": "—"
      },
      {
        "id": 265,
        "value": "—"
      },
      {
        "id": 769,
        "value": "4"
      },
      {
        "id": 909,
        "value": "9"
      },
      {
        "id": 279,
        "value": "—"
      },
      {
        "id": 300,
        "value": "—"
      },
      {
        "id": 531,
        "value": "0"
      },
      {
        "id": 286,
        "value": "—"
      },
      {
        "id": 146,
        "value": "—"
      },
      {
        "id": 776,
        "value": "—"
      },
      {
        "id": 832,
        "value": "2"
      },
      {
        "id": 587,
        "value": "—"
      },
      {
        "id": 62,
        "value": "0"
      },
      {
        "id": 97,
        "value": "—"
      },
      {
        "id": 195,
        "value": "—"
      },
      {
        "id": 370,
        "value": "4"
      },
      {
        "id": 174,
        "value": "1"
      },
      {
        "id": 328,
        "value": "—"
      },
      {
        "id": 741,
        "value": "0"
      },
      {
        "id": 419,
        "value": "—"
      },
      {
        "id": 321,
        "value": "1"
      },
      {
        "id": 496,
        "value": "0"
      },
      {
        "id": 104,
        "value": "—"
      },
      {
        "id": 314,
        "value": "—"
      },
      {
        "id": 244,
        "value": "0"
      },
      {
        "id": 125,
        "value": "—"
      },
      {
        "id": 118,
        "value": "—"
      },
      {
        "id": 251,
        "value": "0"
      },
      {
        "id": 510,
        "value": "—"
      },
      {
        "id": 468,
        "value": "—"
      },
      {
        "id": 412,
        "value": "—"
      },
      {
        "id": 384,
        "value": "4"
      },
      {
        "id": 237,
        "value": "—"
      },
      {
        "id": 524,
        "value": "—"
      },
      {
        "id": 657,
        "value": "—"
      },
      {
        "id": 405,
        "value": "—"
      },
      {
        "id": 608,
        "value": "—"
      },
      {
        "id": 727,
        "value": "1"
      },
      {
        "id": 307,
        "value": "—"
      },
      {
        "id": 629,
        "value": "0"
      },
      {
        "id": 202,
        "value": "—"
      },
      {
        "id": 853,
        "value": "4"
      },
      {
        "id": 139,
        "value": "—"
      },
      {
        "id": 846,
        "value": "3"
      },
      {
        "id": 426,
        "value": "—"
      },
      {
        "id": 601,
        "value": "—"
      },
      {
        "id": 783,
        "value": "—"
      },
      {
        "id": 132,
        "value": "0"
      },
      {
        "id": 41,
        "value": "—"
      },
      {
        "id": 13,
        "value": "—"
      },
      {
        "id": 552,
        "value": "0"
      },
      {
        "id": 797,
        "value": "—"
      },
      {
        "id": 356,
        "value": "3"
      },
      {
        "id": 860,
        "value": "4"
      },
      {
        "id": 111,
        "value": "—"
      },
      {
        "id": 398,
        "value": "—"
      },
      {
        "id": 566,
        "value": "—"
      },
      {
        "id": 6,
        "value": "—"
      },
      {
        "id": 27,
        "value": "—"
      },
      {
        "id": 811,
        "value": "0"
      },
      {
        "id": 699,
        "value": "0"
      },
      {
        "id": 83,
        "value": "—"
      },
      {
        "id": 363,
        "value": "4"
      },
      {
        "id": 55,
        "value": "—"
      },
      {
        "id": 636,
        "value": "—"
      },
      {
        "id": 755,
        "value": "3"
      },
      {
        "id": 643,
        "value": "0"
      },
      {
        "id": 433,
        "value": "—"
      },
      {
        "id": 69,
        "value": "0"
      },
      {
        "id": 335,
        "value": "1"
      },
      {
        "id": 90,
        "value": "—"
      },
      {
        "id": 160,
        "value": "1"
      },
      {
        "id": 181,
        "value": "1"
      },
      {
        "id": 692,
        "value": "—"
      },
      {
        "id": 20,
        "value": "—"
      },
      {
        "id": 762,
        "value": "4"
      },
      {
        "id": 713,
        "value": "1"
      },
      {
        "id": 734,
        "value": "0"
      },
      {
        "id": 671,
        "value": "—"
      },
      {
        "id": 895,
        "value": "7"
      },
      {
        "id": 258,
        "value": "0"
      },
      {
        "id": 342,
        "value": "1"
      },
      {
        "id": 34,
        "value": "—"
      },
      {
        "id": 839,
        "value": "2"
      },
      {
        "id": 293,
        "value": "—"
      },
      {
        "id": 685,
        "value": "—"
      },
      {
        "id": 573,
        "value": "—"
      },
      {
        "id": 678,
        "value": "—"
      },
      {
        "id": 650,
        "value": "0"
      },
      {
        "id": 48,
        "value": "—"
      },
      {
        "id": 223,
        "value": "—"
      },
      {
        "id": 594,
        "value": "—"
      },
      {
        "id": 538,
        "value": "0"
      },
      {
        "id": 489,
        "value": "—"
      },
      {
        "id": 272,
        "value": "—"
      },
      {
        "id": 804,
        "value": "0"
      },
      {
        "id": 706,
        "value": "0"
      },
      {
        "id": 454,
        "value": "—"
      },
      {
        "id": 167,
        "value": "1"
      },
      {
        "id": 461,
        "value": "—"
      },
      {
        "id": 622,
        "value": "0"
      },
      {
        "id": 216,
        "value": "—"
      },
      {
        "id": 874,
        "value": "6"
      },
      {
        "id": 867,
        "value": "5"
      },
      {
        "id": 545,
        "value": "—"
      },
      {
        "id": 447,
        "value": "—"
      },
      {
        "id": 580,
        "value": "—"
      }
    ],
    "k": [
      {
        "id": 798,
        "value": "—"
      },
      {
        "id": 553,
        "value": "11"
      },
      {
        "id": 28,
        "value": "—"
      },
      {
        "id": 287,
        "value": "—"
      },
      {
        "id": 189,
        "value": "3"
      },
      {
        "id": 819,
        "value": "2"
      },
      {
        "id": 595,
        "value": "—"
      },
      {
        "id": 259,
        "value": "5"
      },
      {
        "id": 546,
        "value": "—"
      },
      {
        "id": 350,
        "value": "3"
      },
      {
        "id": 658,
        "value": "17"
      },
      {
        "id": 406,
        "value": "—"
      },
      {
        "id": 560,
        "value": "12"
      },
      {
        "id": 231,
        "value": "—"
      },
      {
        "id": 385,
        "value": "8"
      },
      {
        "id": 882,
        "value": "14"
      },
      {
        "id": 700,
        "value": "18"
      },
      {
        "id": 147,
        "value": "4"
      },
      {
        "id": 42,
        "value": "—"
      },
      {
        "id": 21,
        "value": "—"
      },
      {
        "id": 721,
        "value": "17"
      },
      {
        "id": 714,
        "value": "16"
      },
      {
        "id": 371,
        "value": "8"
      },
      {
        "id": 224,
        "value": "—"
      },
      {
        "id": 294,
        "value": "7"
      },
      {
        "id": 399,
        "value": "—"
      },
      {
        "id": 861,
        "value": "10"
      },
      {
        "id": 315,
        "value": "—"
      },
      {
        "id": 763,
        "value": "18"
      },
      {
        "id": 266,
        "value": "6"
      },
      {
        "id": 847,
        "value": "8"
      },
      {
        "id": 154,
        "value": "—"
      },
      {
        "id": 903,
        "value": "17"
      },
      {
        "id": 686,
        "value": "—"
      },
      {
        "id": 679,
        "value": "—"
      },
      {
        "id": 770,
        "value": "18"
      },
      {
        "id": 609,
        "value": "—"
      },
      {
        "id": 707,
        "value": "18"
      },
      {
        "id": 672,
        "value": "—"
      },
      {
        "id": 476,
        "value": "11"
      },
      {
        "id": 525,
        "value": "—"
      },
      {
        "id": 161,
        "value": "1"
      },
      {
        "id": 651,
        "value": "16"
      },
      {
        "id": 392,
        "value": "9"
      },
      {
        "id": 413,
        "value": "—"
      },
      {
        "id": 308,
        "value": "—"
      },
      {
        "id": 119,
        "value": "—"
      },
      {
        "id": 448,
        "value": "—"
      },
      {
        "id": 441,
        "value": "—"
      },
      {
        "id": 77,
        "value": "—"
      },
      {
        "id": 756,
        "value": "17"
      },
      {
        "id": 14,
        "value": "—"
      },
      {
        "id": 539,
        "value": "13"
      },
      {
        "id": 504,
        "value": "11"
      },
      {
        "id": 574,
        "value": "—"
      },
      {
        "id": 532,
        "value": "13"
      },
      {
        "id": 623,
        "value": "15"
      },
      {
        "id": 126,
        "value": "—"
      },
      {
        "id": 7,
        "value": "—"
      },
      {
        "id": 133,
        "value": "3"
      },
      {
        "id": 84,
        "value": "2"
      },
      {
        "id": 343,
        "value": "2"
      },
      {
        "id": 420,
        "value": "—"
      },
      {
        "id": 322,
        "value": "8"
      },
      {
        "id": 518,
        "value": "—"
      },
      {
        "id": 826,
        "value": "4"
      },
      {
        "id": 896,
        "value": "16"
      },
      {
        "id": 273,
        "value": "6"
      },
      {
        "id": 805,
        "value": "0"
      },
      {
        "id": 490,
        "value": "—"
      },
      {
        "id": 196,
        "value": "—"
      },
      {
        "id": 427,
        "value": "—"
      },
      {
        "id": 238,
        "value": "—"
      },
      {
        "id": 175,
        "value": "1"
      },
      {
        "id": 511,
        "value": "—"
      },
      {
        "id": 329,
        "value": "—"
      },
      {
        "id": 357,
        "value": "6"
      },
      {
        "id": 35,
        "value": "—"
      },
      {
        "id": 336,
        "value": "2"
      },
      {
        "id": 630,
        "value": "16"
      },
      {
        "id": 105,
        "value": "—"
      },
      {
        "id": 70,
        "value": "0"
      },
      {
        "id": 217,
        "value": "—"
      },
      {
        "id": 735,
        "value": "10"
      },
      {
        "id": 693,
        "value": "—"
      },
      {
        "id": 910,
        "value": "18"
      },
      {
        "id": 497,
        "value": "11"
      },
      {
        "id": 434,
        "value": "—"
      },
      {
        "id": 602,
        "value": "—"
      },
      {
        "id": 833,
        "value": "4"
      },
      {
        "id": 203,
        "value": "—"
      },
      {
        "id": 63,
        "value": "0"
      },
      {
        "id": 364,
        "value": "7"
      },
      {
        "id": 749,
        "value": "16"
      },
      {
        "id": 245,
        "value": "5"
      },
      {
        "id": 889,
        "value": "15"
      },
      {
        "id": 742,
        "value": "13"
      },
      {
        "id": 301,
        "value": "—"
      },
      {
        "id": 182,
        "value": "2"
      },
      {
        "id": 644,
        "value": "15"
      },
      {
        "id": 112,
        "value": "—"
      },
      {
        "id": 378,
        "value": "8"
      },
      {
        "id": 665,
        "value": "17"
      },
      {
        "id": 49,
        "value": "—"
      },
      {
        "id": 784,
        "value": "19"
      },
      {
        "id": 840,
        "value": "6"
      },
      {
        "id": 140,
        "value": "4"
      },
      {
        "id": 469,
        "value": "—"
      },
      {
        "id": 483,
        "value": "—"
      },
      {
        "id": 168,
        "value": "1"
      },
      {
        "id": 455,
        "value": "—"
      },
      {
        "id": 98,
        "value": "—"
      },
      {
        "id": 56,
        "value": "—"
      },
      {
        "id": 728,
        "value": "18"
      },
      {
        "id": 567,
        "value": "13"
      },
      {
        "id": 581,
        "value": "—"
      },
      {
        "id": 462,
        "value": "—"
      },
      {
        "id": 637,
        "value": "—"
      },
      {
        "id": 588,
        "value": "—"
      },
      {
        "id": 252,
        "value": "5"
      },
      {
        "id": 791,
        "value": "—"
      },
      {
        "id": 91,
        "value": "—"
      },
      {
        "id": 280,
        "value": "—"
      },
      {
        "id": 875,
        "value": "14"
      },
      {
        "id": 777,
        "value": "19"
      },
      {
        "id": 868,
        "value": "11"
      },
      {
        "id": 812,
        "value": "0"
      },
      {
        "id": 854,
        "value": "10"
      },
      {
        "id": 616,
        "value": "15"
      },
      {
        "id": 210,
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 8,
      "stepId": "setMid",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 14,
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 20,
      "stepId": "setMid",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 21,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 27,
      "stepId": "callMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 30,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 31,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        540,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 32,
      "stepId": "takeRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        178,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 33,
      "stepId": "incK",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "array": [
        178,
        178,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 34,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "array": [
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        540,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 46,
      "stepId": "takeRight",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        178,
        420,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 47,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 1,
      "j": null,
      "k": 2,
      "array": [
        178,
        420,
        420,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "drainLeft",
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 1,
      "j": null,
      "k": 2,
      "array": [
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 54,
      "stepId": "markRange",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "checkLeftRight",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 60,
      "stepId": "copyRuns",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 61,
      "stepId": "initMergePointers",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
      "array": [
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        987,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeRight",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 3,
      "array": [
        178,
        420,
        540,
        29,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 65,
      "stepId": "incK",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": null,
      "k": 4,
      "array": [
        178,
        420,
        540,
        29,
        29,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "drainLeft",
      "left": 3,
      "mid": 3,
      "right": 4,
      "i": 0,
      "j": null,
      "k": 4,
      "array": [
        178,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        178,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
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
        178,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        178,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 72,
      "stepId": "takeRight",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 73,
      "stepId": "incK",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        29,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        29,
        420,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeLeft",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        29,
        178,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "incK",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        178,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
        29,
        178,
        540,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 78,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        178,
        420,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 79,
      "stepId": "incK",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        29,
        178,
        420,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 80,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        29,
        178,
        420,
        29,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeLeft",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 82,
      "stepId": "incK",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": 1,
      "k": 4,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 83,
      "stepId": "drainRight",
      "left": 0,
      "mid": 2,
      "right": 4,
      "i": null,
      "j": 1,
      "k": 4,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 84,
      "stepId": "sortRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 85,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 87,
      "stepId": "setMid",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "sortLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 89,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 91,
      "stepId": "setMid",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 92,
      "stepId": "sortLeft",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 93,
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 94,
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 95,
      "stepId": "setMid",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 96,
      "stepId": "sortLeft",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "markRange",
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 98,
      "stepId": "checkLeftRight",
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "sortRight",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 100,
      "stepId": "markRange",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 101,
      "stepId": "checkLeftRight",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 102,
      "stepId": "callMerge",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 103,
      "stepId": "copyRuns",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 104,
      "stepId": "initMergePointers",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 105,
      "stepId": "whileBoth",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        594,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeRight",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 108,
      "stepId": "incK",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        156,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 109,
      "stepId": "drainLeft",
      "left": 5,
      "mid": 5,
      "right": 6,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 110,
      "stepId": "sortRight",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 111,
      "stepId": "markRange",
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 112,
      "stepId": "checkLeftRight",
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 113,
      "stepId": "callMerge",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "copyRuns",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "initMergePointers",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 116,
      "stepId": "whileBoth",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 117,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 118,
      "stepId": "takeLeft",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 119,
      "stepId": "incK",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 120,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        594,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 121,
      "stepId": "takeRight",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 122,
      "stepId": "incK",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": null,
      "k": 7,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        270,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 123,
      "stepId": "drainLeft",
      "left": 5,
      "mid": 6,
      "right": 7,
      "i": 1,
      "j": null,
      "k": 7,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 124,
      "stepId": "sortRight",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "markRange",
      "left": 8,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 126,
      "stepId": "checkLeftRight",
      "left": 8,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 127,
      "stepId": "setMid",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 128,
      "stepId": "sortLeft",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 129,
      "stepId": "markRange",
      "left": 8,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 130,
      "stepId": "checkLeftRight",
      "left": 8,
      "mid": null,
      "right": 8,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 131,
      "stepId": "sortRight",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 132,
      "stepId": "markRange",
      "left": 9,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "checkLeftRight",
      "left": 9,
      "mid": null,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 134,
      "stepId": "callMerge",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 135,
      "stepId": "copyRuns",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 136,
      "stepId": "initMergePointers",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 137,
      "stepId": "whileBoth",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 138,
      "stepId": "compareMerge",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        483,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 139,
      "stepId": "takeRight",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 8,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 140,
      "stepId": "incK",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": null,
      "k": 9,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        111,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 141,
      "stepId": "drainLeft",
      "left": 8,
      "mid": 8,
      "right": 9,
      "i": 0,
      "j": null,
      "k": 9,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 142,
      "stepId": "callMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "copyRuns",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 144,
      "stepId": "initMergePointers",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 145,
      "stepId": "whileBoth",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 146,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        156,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 147,
      "stepId": "takeRight",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 5,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 148,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 1,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 149,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 1,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        270,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 150,
      "stepId": "takeLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 0,
      "j": 1,
      "k": 6,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 151,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 7,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 152,
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 7,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        594,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 153,
      "stepId": "takeLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 7,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 154,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 8,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "compareMerge",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 8,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        111,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 156,
      "stepId": "takeRight",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": 1,
      "k": 8,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 157,
      "stepId": "incK",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": null,
      "k": 9,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        483,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 158,
      "stepId": "drainLeft",
      "left": 5,
      "mid": 7,
      "right": 9,
      "i": 2,
      "j": null,
      "k": 9,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 159,
      "stepId": "callMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 160,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 162,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 163,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 164,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 165,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 166,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        29,
        178,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 167,
      "stepId": "takeRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        29,
        111,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 168,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        111,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 169,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        111,
        420,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        111,
        156,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 171,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 2,
      "k": 3,
      "array": [
        29,
        111,
        156,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 172,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 2,
      "k": 3,
      "array": [
        29,
        111,
        156,
        540,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 173,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 1,
      "j": 2,
      "k": 3,
      "array": [
        29,
        111,
        156,
        178,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        29,
        111,
        156,
        178,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 175,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        29,
        111,
        156,
        178,
        987,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 176,
      "stepId": "takeRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        29,
        111,
        156,
        178,
        270,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 177,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 3,
      "k": 5,
      "array": [
        29,
        111,
        156,
        178,
        270,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 178,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 3,
      "k": 5,
      "array": [
        29,
        111,
        156,
        178,
        270,
        111,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 179,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 2,
      "j": 3,
      "k": 5,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 180,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 181,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        156,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 183,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 4,
      "k": 7,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 184,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 4,
      "k": 7,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        270,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 185,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 3,
      "j": 4,
      "k": 7,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 186,
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": 4,
      "k": 8,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 187,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": 4,
      "k": 8,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        483,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 188,
      "stepId": "takeRight",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": 4,
      "k": 8,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "incK",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": null,
      "k": 9,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        594,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 190,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 4,
      "right": 9,
      "i": 4,
      "j": null,
      "k": 9,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 191,
      "stepId": "sortRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 193,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 194,
      "stepId": "setMid",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 196,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 197,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 198,
      "stepId": "setMid",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 199,
      "stepId": "sortLeft",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "left": 10,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 201,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "setMid",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 203,
      "stepId": "sortLeft",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 204,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 205,
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "setMid",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 207,
      "stepId": "sortLeft",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 208,
      "stepId": "markRange",
      "left": 10,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "checkLeftRight",
      "left": 10,
      "mid": null,
      "right": 10,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 210,
      "stepId": "sortRight",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 211,
      "stepId": "markRange",
      "left": 11,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 212,
      "stepId": "checkLeftRight",
      "left": 11,
      "mid": null,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 213,
      "stepId": "callMerge",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 214,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 216,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 217,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 218,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 219,
      "stepId": "incK",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 220,
      "stepId": "drainRight",
      "left": 10,
      "mid": 10,
      "right": 11,
      "i": null,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "sortRight",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 222,
      "stepId": "markRange",
      "left": 12,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 223,
      "stepId": "checkLeftRight",
      "left": 12,
      "mid": null,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 224,
      "stepId": "callMerge",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 225,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 226,
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 227,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 228,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 229,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 230,
      "stepId": "incK",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 231,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 232,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 233,
      "stepId": "incK",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": 0,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 234,
      "stepId": "drainRight",
      "left": 10,
      "mid": 11,
      "right": 12,
      "i": null,
      "j": 0,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 235,
      "stepId": "sortRight",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 236,
      "stepId": "markRange",
      "left": 13,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 237,
      "stepId": "checkLeftRight",
      "left": 13,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 238,
      "stepId": "setMid",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 239,
      "stepId": "sortLeft",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 240,
      "stepId": "markRange",
      "left": 13,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "checkLeftRight",
      "left": 13,
      "mid": null,
      "right": 13,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 242,
      "stepId": "sortRight",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 243,
      "stepId": "markRange",
      "left": 14,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 244,
      "stepId": "checkLeftRight",
      "left": 14,
      "mid": null,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 245,
      "stepId": "callMerge",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 246,
      "stepId": "copyRuns",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 247,
      "stepId": "initMergePointers",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "whileBoth",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 249,
      "stepId": "compareMerge",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        241,
        104,
        531,
        614,
        550,
        897,
        380
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
      "step": 250,
      "stepId": "takeRight",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 251,
      "stepId": "incK",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 14,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        104,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 252,
      "stepId": "drainLeft",
      "left": 13,
      "mid": 13,
      "right": 14,
      "i": 0,
      "j": null,
      "k": 14,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 253,
      "stepId": "callMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 254,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
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
      "step": 255,
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 256,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 257,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 258,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 259,
      "stepId": "incK",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 260,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        426,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeRight",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 262,
      "stepId": "incK",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 1,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 263,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 1,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        917,
        104,
        241,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeRight",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": 1,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 265,
      "stepId": "incK",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": null,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        104,
        241,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 266,
      "stepId": "drainLeft",
      "left": 10,
      "mid": 12,
      "right": 14,
      "i": 1,
      "j": null,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "sortRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 268,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "step": 269,
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 270,
      "stepId": "setMid",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 271,
      "stepId": "sortLeft",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 272,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 274,
      "stepId": "setMid",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 275,
      "stepId": "sortLeft",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 276,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 277,
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "step": 278,
      "stepId": "setMid",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 279,
      "stepId": "sortLeft",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "step": 280,
      "stepId": "markRange",
      "left": 15,
      "mid": null,
      "right": 15,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 281,
      "stepId": "checkLeftRight",
      "left": 15,
      "mid": null,
      "right": 15,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 282,
      "stepId": "sortRight",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 283,
      "stepId": "markRange",
      "left": 16,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 284,
      "stepId": "checkLeftRight",
      "left": 16,
      "mid": null,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 285,
      "stepId": "callMerge",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "step": 286,
      "stepId": "copyRuns",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "step": 287,
      "stepId": "initMergePointers",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 288,
      "stepId": "whileBoth",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 289,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "takeLeft",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "step": 291,
      "stepId": "incK",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": 0,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 292,
      "stepId": "drainRight",
      "left": 15,
      "mid": 15,
      "right": 16,
      "i": null,
      "j": 0,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "sortRight",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "step": 294,
      "stepId": "markRange",
      "left": 17,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 295,
      "stepId": "checkLeftRight",
      "left": 17,
      "mid": null,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 296,
      "stepId": "callMerge",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 297,
      "stepId": "copyRuns",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 298,
      "stepId": "initMergePointers",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "whileBoth",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 300,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 301,
      "stepId": "takeLeft",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 302,
      "stepId": "incK",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": 0,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
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
      "stepId": "compareMerge",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": 0,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        614,
        550,
        897,
        380
      ]
    },
    {
      "step": 304,
      "stepId": "takeRight",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": 0,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        550,
        897,
        380
      ]
    },
    {
      "step": 305,
      "stepId": "incK",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": null,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        550,
        897,
        380
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
      "step": 306,
      "stepId": "drainLeft",
      "left": 15,
      "mid": 16,
      "right": 17,
      "i": 1,
      "j": null,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
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
      "step": 307,
      "stepId": "sortRight",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 308,
      "stepId": "markRange",
      "left": 18,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 309,
      "stepId": "checkLeftRight",
      "left": 18,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
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
      "step": 310,
      "stepId": "setMid",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
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
      "step": 311,
      "stepId": "sortLeft",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 312,
      "stepId": "markRange",
      "left": 18,
      "mid": null,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 313,
      "stepId": "checkLeftRight",
      "left": 18,
      "mid": null,
      "right": 18,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 314,
      "stepId": "sortRight",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
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
      "stepId": "markRange",
      "left": 19,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 316,
      "stepId": "checkLeftRight",
      "left": 19,
      "mid": null,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 317,
      "stepId": "callMerge",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
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
      "step": 318,
      "stepId": "copyRuns",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 319,
      "stepId": "initMergePointers",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
      ]
    },
    {
      "step": 320,
      "stepId": "whileBoth",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
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
      "stepId": "compareMerge",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        897,
        380
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
      "stepId": "takeRight",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        380
      ]
    },
    {
      "step": 323,
      "stepId": "incK",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 19,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        380
      ]
    },
    {
      "step": 324,
      "stepId": "drainLeft",
      "left": 18,
      "mid": 18,
      "right": 19,
      "i": 0,
      "j": null,
      "k": 19,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 325,
      "stepId": "callMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 326,
      "stepId": "copyRuns",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 327,
      "stepId": "initMergePointers",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 328,
      "stepId": "whileBoth",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 329,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        531,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 330,
      "stepId": "takeRight",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 331,
      "stepId": "incK",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        550,
        614,
        380,
        897
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
      "step": 332,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        550,
        614,
        380,
        897
      ]
    },
    {
      "step": 333,
      "stepId": "takeLeft",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 0,
      "j": 1,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        614,
        380,
        897
      ]
    },
    {
      "step": 334,
      "stepId": "incK",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        614,
        380,
        897
      ]
    },
    {
      "step": 335,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        614,
        380,
        897
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
      "stepId": "takeLeft",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        380,
        897
      ]
    },
    {
      "step": 337,
      "stepId": "incK",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        380,
        897
      ]
    },
    {
      "step": 338,
      "stepId": "compareMerge",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        380,
        897
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
      "stepId": "takeLeft",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": 2,
      "j": 1,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 340,
      "stepId": "incK",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": 1,
      "k": 19,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 341,
      "stepId": "drainRight",
      "left": 15,
      "mid": 17,
      "right": 19,
      "i": null,
      "j": 1,
      "k": 19,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 342,
      "stepId": "callMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 343,
      "stepId": "copyRuns",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 344,
      "stepId": "initMergePointers",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 345,
      "stepId": "whileBoth",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
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
      "step": 346,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 347,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 10,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 348,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 349,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 350,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 11,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 351,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 352,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 353,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 2,
      "j": 0,
      "k": 12,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 354,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 355,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        426,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 356,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 0,
      "k": 13,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        917,
        380,
        531,
        550,
        614,
        897
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
      "step": 357,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 14,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 358,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 14,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        917,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 359,
      "stepId": "takeLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 3,
      "j": 1,
      "k": 14,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 360,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 1,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 361,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 1,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        380,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 362,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 1,
      "k": 15,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 363,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        531,
        550,
        614,
        897
      ]
    },
    {
      "step": 364,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        531,
        550,
        614,
        897
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
      "step": 365,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 16,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        550,
        614,
        897
      ]
    },
    {
      "step": 366,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        550,
        614,
        897
      ]
    },
    {
      "step": 367,
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        550,
        614,
        897
      ]
    },
    {
      "step": 368,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 17,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        614,
        897
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
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        614,
        897
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
      "stepId": "compareMerge",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        614,
        897
      ]
    },
    {
      "step": 371,
      "stepId": "takeRight",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": 4,
      "k": 18,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        897
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
      "step": 372,
      "stepId": "incK",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": null,
      "k": 19,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        897
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
      "step": 373,
      "stepId": "drainLeft",
      "left": 10,
      "mid": 14,
      "right": 19,
      "i": 4,
      "j": null,
      "k": 19,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 374,
      "stepId": "callMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 375,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 376,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 377,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 378,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 379,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 380,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 381,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        29,
        111,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 382,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        29,
        45,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 383,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        45,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 384,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        45,
        156,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        29,
        45,
        104,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 386,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 2,
      "k": 3,
      "array": [
        29,
        45,
        104,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 387,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 2,
      "k": 3,
      "array": [
        29,
        45,
        104,
        178,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 388,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 1,
      "j": 2,
      "k": 3,
      "array": [
        29,
        45,
        104,
        111,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 389,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        29,
        45,
        104,
        111,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 390,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        29,
        45,
        104,
        111,
        270,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 391,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 2,
      "j": 2,
      "k": 4,
      "array": [
        29,
        45,
        104,
        111,
        156,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        29,
        45,
        104,
        111,
        156,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 393,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        29,
        45,
        104,
        111,
        156,
        420,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 394,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 395,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 396,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        483,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 397,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 2,
      "k": 6,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 398,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 399,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        540,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 400,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 4,
      "j": 3,
      "k": 7,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 401,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 3,
      "k": 8,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 402,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 3,
      "k": 8,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        594,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 403,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 3,
      "k": 8,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 404,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 405,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        987,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 406,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 5,
      "j": 4,
      "k": 9,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 407,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "i": 6,
      "j": 4,
      "k": 10,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        45,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 409,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 4,
      "k": 10,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 410,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 411,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        104,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 412,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 6,
      "j": 5,
      "k": 11,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 413,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 414,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        241,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 415,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 5,
      "k": 12,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 416,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 417,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        380,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 418,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 7,
      "j": 6,
      "k": 13,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 419,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        426,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 420,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        426,
        531,
        550,
        614,
        897,
        917
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
      "step": 421,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 6,
      "k": 14,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        531,
        550,
        614,
        897,
        917
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
      "step": 422,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        531,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 423,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        531,
        550,
        614,
        897,
        917
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
      "step": 424,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 8,
      "j": 7,
      "k": 15,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 425,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        550,
        614,
        897,
        917
      ]
    },
    {
      "step": 426,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        550,
        614,
        897,
        917
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
      "step": 427,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 7,
      "k": 16,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        614,
        897,
        917
      ]
    },
    {
      "step": 428,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        614,
        897,
        917
      ]
    },
    {
      "step": 429,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        614,
        897,
        917
      ]
    },
    {
      "step": 430,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 8,
      "k": 17,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        897,
        917
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
      "step": 431,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        897,
        917
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
      "step": 432,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        897,
        917
      ]
    },
    {
      "step": 433,
      "stepId": "takeRight",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": 9,
      "k": 18,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        917
      ]
    },
    {
      "step": 434,
      "stepId": "incK",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": null,
      "k": 19,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        917
      ]
    },
    {
      "step": 435,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 9,
      "right": 19,
      "i": 9,
      "j": null,
      "k": 19,
      "array": [
        29,
        45,
        104,
        111,
        156,
        178,
        241,
        270,
        380,
        420,
        426,
        483,
        531,
        540,
        550,
        594,
        614,
        897,
        917,
        987
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
