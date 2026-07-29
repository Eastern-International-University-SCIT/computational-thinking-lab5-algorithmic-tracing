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
    969,
    770,
    266,
    12,
    860,
    855,
    843,
    222
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
    8,
    9,
    13,
    16,
    20,
    24,
    26,
    28,
    41,
    44,
    51,
    52,
    59,
    62,
    63,
    67,
    68,
    69,
    70,
    72,
    74,
    76,
    77,
    78,
    79,
    86,
    98,
    102,
    104,
    105,
    106,
    110,
    111,
    115,
    118,
    120,
    121,
    124,
    125,
    126
  ],
  "answers": {
    "8": {
      "stepId": "setMid",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "9": {
      "stepId": "sortLeft",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "13": {
      "stepId": "sortLeft",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "16": {
      "stepId": "sortRight",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "20": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "24": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "26": {
      "stepId": "drainLeft",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "—",
      "k": "1"
    },
    "28": {
      "stepId": "markRange",
      "left": "2",
      "mid": "—",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "41": {
      "stepId": "compareMerge",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "2"
    },
    "44": {
      "stepId": "drainLeft",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "0",
      "j": "—",
      "k": "3"
    },
    "51": {
      "stepId": "incK",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "52": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "0",
      "j": "1",
      "k": "1"
    },
    "59": {
      "stepId": "setMid",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "62": {
      "stepId": "checkLeftRight",
      "left": "4",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "63": {
      "stepId": "setMid",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "67": {
      "stepId": "sortRight",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "68": {
      "stepId": "markRange",
      "left": "5",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "69": {
      "stepId": "checkLeftRight",
      "left": "5",
      "mid": "—",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "70": {
      "stepId": "callMerge",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "72": {
      "stepId": "initMergePointers",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "4"
    },
    "74": {
      "stepId": "compareMerge",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "0",
      "j": "0",
      "k": "4"
    },
    "76": {
      "stepId": "incK",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "0",
      "j": "—",
      "k": "5"
    },
    "77": {
      "stepId": "drainLeft",
      "left": "4",
      "mid": "4",
      "right": "5",
      "i": "0",
      "j": "—",
      "k": "5"
    },
    "78": {
      "stepId": "sortRight",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "79": {
      "stepId": "markRange",
      "left": "6",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "86": {
      "stepId": "markRange",
      "left": "7",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "98": {
      "stepId": "initMergePointers",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "4"
    },
    "102": {
      "stepId": "incK",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "0",
      "j": "1",
      "k": "5"
    },
    "104": {
      "stepId": "takeRight",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "0",
      "j": "1",
      "k": "5"
    },
    "105": {
      "stepId": "incK",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "0",
      "j": "—",
      "k": "6"
    },
    "106": {
      "stepId": "drainLeft",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "0",
      "j": "—",
      "k": "6"
    },
    "110": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "111": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "115": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "1",
      "j": "0",
      "k": "1"
    },
    "118": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "120": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "2",
      "j": "1",
      "k": "3"
    },
    "121": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "2",
      "j": "1",
      "k": "3"
    },
    "124": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "3",
      "j": "1",
      "k": "4"
    },
    "125": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "3",
      "j": "2",
      "k": "5"
    },
    "126": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "3",
      "j": "2",
      "k": "5"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 155,
        "value": "drainLeft"
      },
      {
        "id": 134,
        "value": "initMergePointers"
      },
      {
        "id": 57,
        "value": "compareMerge"
      },
      {
        "id": 8,
        "value": "sortLeft"
      },
      {
        "id": 78,
        "value": "compareMerge"
      },
      {
        "id": 162,
        "value": "sortRight"
      },
      {
        "id": 15,
        "value": "sortLeft"
      },
      {
        "id": 225,
        "value": "compareMerge"
      },
      {
        "id": 127,
        "value": "callMerge"
      },
      {
        "id": 253,
        "value": "takeLeft"
      },
      {
        "id": 106,
        "value": "sortRight"
      },
      {
        "id": 148,
        "value": "incK"
      },
      {
        "id": 246,
        "value": "compareMerge"
      },
      {
        "id": 218,
        "value": "whileBoth"
      },
      {
        "id": 232,
        "value": "takeRight"
      },
      {
        "id": 64,
        "value": "drainLeft"
      },
      {
        "id": 239,
        "value": "takeLeft"
      },
      {
        "id": 92,
        "value": "checkLeftRight"
      },
      {
        "id": 43,
        "value": "drainLeft"
      },
      {
        "id": 211,
        "value": "drainLeft"
      },
      {
        "id": 22,
        "value": "sortRight"
      },
      {
        "id": 267,
        "value": "incK"
      },
      {
        "id": 169,
        "value": "markRange"
      },
      {
        "id": 176,
        "value": "markRange"
      },
      {
        "id": 50,
        "value": "markRange"
      },
      {
        "id": 99,
        "value": "setMid"
      },
      {
        "id": 260,
        "value": "takeRight"
      },
      {
        "id": 197,
        "value": "takeRight"
      },
      {
        "id": 29,
        "value": "copyRuns"
      },
      {
        "id": 71,
        "value": "incK"
      },
      {
        "id": 36,
        "value": "takeRight"
      },
      {
        "id": 190,
        "value": "incK"
      },
      {
        "id": 1,
        "value": "setMid"
      },
      {
        "id": 183,
        "value": "initMergePointers"
      },
      {
        "id": 120,
        "value": "checkLeftRight"
      },
      {
        "id": 204,
        "value": "incK"
      },
      {
        "id": 85,
        "value": "setMid"
      },
      {
        "id": 113,
        "value": "markRange"
      },
      {
        "id": 274,
        "value": "compareMerge"
      },
      {
        "id": 141,
        "value": "compareMerge"
      }
    ],
    "left": [
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 135,
        "value": "4"
      },
      {
        "id": 254,
        "value": "0"
      },
      {
        "id": 37,
        "value": "0"
      },
      {
        "id": 107,
        "value": "4"
      },
      {
        "id": 184,
        "value": "4"
      },
      {
        "id": 268,
        "value": "0"
      },
      {
        "id": 170,
        "value": "6"
      },
      {
        "id": 100,
        "value": "4"
      },
      {
        "id": 191,
        "value": "4"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 58,
        "value": "2"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 128,
        "value": "4"
      },
      {
        "id": 205,
        "value": "4"
      },
      {
        "id": 65,
        "value": "2"
      },
      {
        "id": 114,
        "value": "5"
      },
      {
        "id": 79,
        "value": "0"
      },
      {
        "id": 233,
        "value": "0"
      },
      {
        "id": 212,
        "value": "4"
      },
      {
        "id": 275,
        "value": "0"
      },
      {
        "id": 72,
        "value": "0"
      },
      {
        "id": 261,
        "value": "0"
      },
      {
        "id": 177,
        "value": "7"
      },
      {
        "id": 240,
        "value": "0"
      },
      {
        "id": 86,
        "value": "4"
      },
      {
        "id": 142,
        "value": "4"
      },
      {
        "id": 198,
        "value": "4"
      },
      {
        "id": 121,
        "value": "5"
      },
      {
        "id": 226,
        "value": "0"
      },
      {
        "id": 163,
        "value": "4"
      },
      {
        "id": 149,
        "value": "4"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 156,
        "value": "4"
      },
      {
        "id": 219,
        "value": "0"
      },
      {
        "id": 93,
        "value": "4"
      },
      {
        "id": 247,
        "value": "0"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 51,
        "value": "2"
      }
    ],
    "mid": [
      {
        "id": 227,
        "value": "3"
      },
      {
        "id": 108,
        "value": "4"
      },
      {
        "id": 192,
        "value": "5"
      },
      {
        "id": 3,
        "value": "1"
      },
      {
        "id": 87,
        "value": "5"
      },
      {
        "id": 101,
        "value": "4"
      },
      {
        "id": 10,
        "value": "1"
      },
      {
        "id": 241,
        "value": "3"
      },
      {
        "id": 157,
        "value": "4"
      },
      {
        "id": 185,
        "value": "5"
      },
      {
        "id": 234,
        "value": "3"
      },
      {
        "id": 255,
        "value": "3"
      },
      {
        "id": 164,
        "value": "5"
      },
      {
        "id": 220,
        "value": "3"
      },
      {
        "id": 143,
        "value": "4"
      },
      {
        "id": 199,
        "value": "5"
      },
      {
        "id": 31,
        "value": "0"
      },
      {
        "id": 17,
        "value": "0"
      },
      {
        "id": 262,
        "value": "3"
      },
      {
        "id": 150,
        "value": "4"
      },
      {
        "id": 171,
        "value": "—"
      },
      {
        "id": 269,
        "value": "3"
      },
      {
        "id": 38,
        "value": "0"
      },
      {
        "id": 45,
        "value": "0"
      },
      {
        "id": 52,
        "value": "—"
      },
      {
        "id": 122,
        "value": "—"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 59,
        "value": "2"
      },
      {
        "id": 276,
        "value": "3"
      },
      {
        "id": 213,
        "value": "5"
      },
      {
        "id": 94,
        "value": "—"
      },
      {
        "id": 115,
        "value": "—"
      },
      {
        "id": 178,
        "value": "—"
      },
      {
        "id": 24,
        "value": "0"
      },
      {
        "id": 136,
        "value": "4"
      },
      {
        "id": 73,
        "value": "1"
      },
      {
        "id": 206,
        "value": "5"
      },
      {
        "id": 80,
        "value": "1"
      },
      {
        "id": 129,
        "value": "4"
      },
      {
        "id": 248,
        "value": "3"
      }
    ],
    "right": [
      {
        "id": 53,
        "value": "3"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 25,
        "value": "1"
      },
      {
        "id": 116,
        "value": "5"
      },
      {
        "id": 207,
        "value": "7"
      },
      {
        "id": 18,
        "value": "1"
      },
      {
        "id": 151,
        "value": "5"
      },
      {
        "id": 186,
        "value": "7"
      },
      {
        "id": 109,
        "value": "5"
      },
      {
        "id": 228,
        "value": "7"
      },
      {
        "id": 249,
        "value": "7"
      },
      {
        "id": 214,
        "value": "7"
      },
      {
        "id": 256,
        "value": "7"
      },
      {
        "id": 144,
        "value": "5"
      },
      {
        "id": 102,
        "value": "5"
      },
      {
        "id": 263,
        "value": "7"
      },
      {
        "id": 32,
        "value": "1"
      },
      {
        "id": 172,
        "value": "7"
      },
      {
        "id": 11,
        "value": "3"
      },
      {
        "id": 74,
        "value": "3"
      },
      {
        "id": 123,
        "value": "5"
      },
      {
        "id": 95,
        "value": "5"
      },
      {
        "id": 277,
        "value": "7"
      },
      {
        "id": 165,
        "value": "7"
      },
      {
        "id": 235,
        "value": "7"
      },
      {
        "id": 158,
        "value": "5"
      },
      {
        "id": 67,
        "value": "3"
      },
      {
        "id": 242,
        "value": "7"
      },
      {
        "id": 60,
        "value": "3"
      },
      {
        "id": 200,
        "value": "7"
      },
      {
        "id": 137,
        "value": "5"
      },
      {
        "id": 4,
        "value": "3"
      },
      {
        "id": 130,
        "value": "5"
      },
      {
        "id": 179,
        "value": "7"
      },
      {
        "id": 81,
        "value": "3"
      },
      {
        "id": 270,
        "value": "7"
      },
      {
        "id": 88,
        "value": "7"
      },
      {
        "id": 39,
        "value": "1"
      },
      {
        "id": 193,
        "value": "7"
      },
      {
        "id": 221,
        "value": "7"
      }
    ],
    "i": [
      {
        "id": 159,
        "value": "0"
      },
      {
        "id": 61,
        "value": "0"
      },
      {
        "id": 145,
        "value": "0"
      },
      {
        "id": 201,
        "value": "0"
      },
      {
        "id": 26,
        "value": "—"
      },
      {
        "id": 33,
        "value": "—"
      },
      {
        "id": 110,
        "value": "—"
      },
      {
        "id": 68,
        "value": "0"
      },
      {
        "id": 54,
        "value": "—"
      },
      {
        "id": 89,
        "value": "—"
      },
      {
        "id": 82,
        "value": "0"
      },
      {
        "id": 264,
        "value": "3"
      },
      {
        "id": 278,
        "value": "3"
      },
      {
        "id": 131,
        "value": "—"
      },
      {
        "id": 250,
        "value": "2"
      },
      {
        "id": 40,
        "value": "0"
      },
      {
        "id": 124,
        "value": "—"
      },
      {
        "id": 103,
        "value": "—"
      },
      {
        "id": 5,
        "value": "—"
      },
      {
        "id": 173,
        "value": "—"
      },
      {
        "id": 75,
        "value": "0"
      },
      {
        "id": 180,
        "value": "—"
      },
      {
        "id": 47,
        "value": "0"
      },
      {
        "id": 208,
        "value": "0"
      },
      {
        "id": 19,
        "value": "—"
      },
      {
        "id": 166,
        "value": "—"
      },
      {
        "id": 236,
        "value": "1"
      },
      {
        "id": 194,
        "value": "0"
      },
      {
        "id": 271,
        "value": "3"
      },
      {
        "id": 187,
        "value": "0"
      },
      {
        "id": 117,
        "value": "—"
      },
      {
        "id": 152,
        "value": "0"
      },
      {
        "id": 257,
        "value": "2"
      },
      {
        "id": 222,
        "value": "0"
      },
      {
        "id": 229,
        "value": "0"
      },
      {
        "id": 215,
        "value": "0"
      },
      {
        "id": 138,
        "value": "0"
      },
      {
        "id": 243,
        "value": "1"
      },
      {
        "id": 96,
        "value": "—"
      },
      {
        "id": 12,
        "value": "—"
      }
    ],
    "j": [
      {
        "id": 90,
        "value": "—"
      },
      {
        "id": 244,
        "value": "1"
      },
      {
        "id": 104,
        "value": "—"
      },
      {
        "id": 209,
        "value": "—"
      },
      {
        "id": 223,
        "value": "0"
      },
      {
        "id": 230,
        "value": "0"
      },
      {
        "id": 13,
        "value": "—"
      },
      {
        "id": 27,
        "value": "—"
      },
      {
        "id": 6,
        "value": "—"
      },
      {
        "id": 272,
        "value": "2"
      },
      {
        "id": 118,
        "value": "—"
      },
      {
        "id": 160,
        "value": "—"
      },
      {
        "id": 202,
        "value": "1"
      },
      {
        "id": 251,
        "value": "1"
      },
      {
        "id": 139,
        "value": "0"
      },
      {
        "id": 216,
        "value": "—"
      },
      {
        "id": 111,
        "value": "—"
      },
      {
        "id": 181,
        "value": "—"
      },
      {
        "id": 83,
        "value": "1"
      },
      {
        "id": 146,
        "value": "0"
      },
      {
        "id": 188,
        "value": "0"
      },
      {
        "id": 55,
        "value": "—"
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
        "id": 76,
        "value": "1"
      },
      {
        "id": 125,
        "value": "—"
      },
      {
        "id": 174,
        "value": "—"
      },
      {
        "id": 132,
        "value": "—"
      },
      {
        "id": 62,
        "value": "0"
      },
      {
        "id": 41,
        "value": "0"
      },
      {
        "id": 195,
        "value": "1"
      },
      {
        "id": 279,
        "value": "2"
      },
      {
        "id": 167,
        "value": "—"
      },
      {
        "id": 48,
        "value": "—"
      },
      {
        "id": 153,
        "value": "—"
      },
      {
        "id": 69,
        "value": "—"
      },
      {
        "id": 97,
        "value": "—"
      },
      {
        "id": 34,
        "value": "—"
      },
      {
        "id": 265,
        "value": "1"
      },
      {
        "id": 258,
        "value": "1"
      }
    ],
    "k": [
      {
        "id": 273,
        "value": "5"
      },
      {
        "id": 63,
        "value": "2"
      },
      {
        "id": 98,
        "value": "—"
      },
      {
        "id": 224,
        "value": "0"
      },
      {
        "id": 119,
        "value": "—"
      },
      {
        "id": 182,
        "value": "—"
      },
      {
        "id": 105,
        "value": "—"
      },
      {
        "id": 217,
        "value": "6"
      },
      {
        "id": 161,
        "value": "5"
      },
      {
        "id": 245,
        "value": "2"
      },
      {
        "id": 231,
        "value": "0"
      },
      {
        "id": 168,
        "value": "—"
      },
      {
        "id": 49,
        "value": "1"
      },
      {
        "id": 35,
        "value": "—"
      },
      {
        "id": 175,
        "value": "—"
      },
      {
        "id": 154,
        "value": "5"
      },
      {
        "id": 77,
        "value": "1"
      },
      {
        "id": 259,
        "value": "3"
      },
      {
        "id": 140,
        "value": "4"
      },
      {
        "id": 238,
        "value": "1"
      },
      {
        "id": 266,
        "value": "4"
      },
      {
        "id": 133,
        "value": "—"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 28,
        "value": "—"
      },
      {
        "id": 280,
        "value": "5"
      },
      {
        "id": 147,
        "value": "4"
      },
      {
        "id": 70,
        "value": "3"
      },
      {
        "id": 203,
        "value": "5"
      },
      {
        "id": 112,
        "value": "—"
      },
      {
        "id": 210,
        "value": "6"
      },
      {
        "id": 84,
        "value": "1"
      },
      {
        "id": 7,
        "value": "—"
      },
      {
        "id": 252,
        "value": "3"
      },
      {
        "id": 21,
        "value": "—"
      },
      {
        "id": 196,
        "value": "5"
      },
      {
        "id": 14,
        "value": "—"
      },
      {
        "id": 56,
        "value": "—"
      },
      {
        "id": 126,
        "value": "—"
      },
      {
        "id": 189,
        "value": "4"
      },
      {
        "id": 91,
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
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 2,
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 3,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 4,
      "stepId": "setMid",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 5,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 6,
      "stepId": "markRange",
      "left": 0,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 7,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 8,
      "stepId": "setMid",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 9,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 11,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 12,
      "stepId": "setMid",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 13,
      "stepId": "sortLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "right": 0,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 15,
      "stepId": "checkLeftRight",
      "left": 0,
      "mid": null,
      "right": 0,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 16,
      "stepId": "sortRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 17,
      "stepId": "markRange",
      "left": 1,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 18,
      "stepId": "checkLeftRight",
      "left": 1,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 19,
      "stepId": "callMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 20,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 22,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 23,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        969,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 24,
      "stepId": "takeRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        770,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "incK",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "array": [
        770,
        770,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 26,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": null,
      "k": 1,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "sortRight",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 28,
      "stepId": "markRange",
      "left": 2,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "checkLeftRight",
      "left": 2,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 30,
      "stepId": "setMid",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 31,
      "stepId": "sortLeft",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 32,
      "stepId": "markRange",
      "left": 2,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 33,
      "stepId": "checkLeftRight",
      "left": 2,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 34,
      "stepId": "sortRight",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 35,
      "stepId": "markRange",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 36,
      "stepId": "checkLeftRight",
      "left": 3,
      "mid": null,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 37,
      "stepId": "callMerge",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 38,
      "stepId": "copyRuns",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 39,
      "stepId": "initMergePointers",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 40,
      "stepId": "whileBoth",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 41,
      "stepId": "compareMerge",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "array": [
        770,
        969,
        266,
        12,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 42,
      "stepId": "takeRight",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "array": [
        770,
        969,
        12,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 43,
      "stepId": "incK",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 3,
      "array": [
        770,
        969,
        12,
        12,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 44,
      "stepId": "drainLeft",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 3,
      "array": [
        770,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 45,
      "stepId": "callMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 46,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        770,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 47,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        770,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 48,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        770,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 49,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        770,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 50,
      "stepId": "takeRight",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        12,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 51,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        12,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 52,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        12,
        969,
        12,
        266,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "takeRight",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 1,
      "k": 1,
      "array": [
        12,
        266,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 54,
      "stepId": "incK",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 2,
      "array": [
        12,
        266,
        12,
        266,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 55,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": null,
      "k": 2,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 56,
      "stepId": "sortRight",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 57,
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 58,
      "stepId": "checkLeftRight",
      "left": 4,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 59,
      "stepId": "setMid",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "sortLeft",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 61,
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 62,
      "stepId": "checkLeftRight",
      "left": 4,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 63,
      "stepId": "setMid",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "sortLeft",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 65,
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 66,
      "stepId": "checkLeftRight",
      "left": 4,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 67,
      "stepId": "sortRight",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "left": 5,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "callMerge",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 71,
      "stepId": "copyRuns",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 72,
      "stepId": "initMergePointers",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 73,
      "stepId": "whileBoth",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ]
    },
    {
      "step": 74,
      "stepId": "compareMerge",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        860,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "takeRight",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        855,
        855,
        843,
        222
      ]
    },
    {
      "step": 76,
      "stepId": "incK",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": null,
      "k": 5,
      "array": [
        12,
        266,
        770,
        969,
        855,
        855,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 77,
      "stepId": "drainLeft",
      "left": 4,
      "mid": 4,
      "right": 5,
      "i": 0,
      "j": null,
      "k": 5,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 78,
      "stepId": "sortRight",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "markRange",
      "left": 6,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "checkLeftRight",
      "left": 6,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 81,
      "stepId": "setMid",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 82,
      "stepId": "sortLeft",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 83,
      "stepId": "markRange",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 84,
      "stepId": "checkLeftRight",
      "left": 6,
      "mid": null,
      "right": 6,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 85,
      "stepId": "sortRight",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 86,
      "stepId": "markRange",
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ],
      "missing": {
        "stepId": true,
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
      "left": 7,
      "mid": null,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 88,
      "stepId": "callMerge",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 89,
      "stepId": "copyRuns",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 90,
      "stepId": "initMergePointers",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 6,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 91,
      "stepId": "whileBoth",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 6,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 92,
      "stepId": "compareMerge",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 6,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        843,
        222
      ]
    },
    {
      "step": 93,
      "stepId": "takeRight",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 6,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        222
      ]
    },
    {
      "step": 94,
      "stepId": "incK",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 7,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        222
      ]
    },
    {
      "step": 95,
      "stepId": "drainLeft",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 7,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        843
      ]
    },
    {
      "step": 96,
      "stepId": "callMerge",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        843
      ]
    },
    {
      "step": 97,
      "stepId": "copyRuns",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        843
      ]
    },
    {
      "step": 98,
      "stepId": "initMergePointers",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        843
      ],
      "missing": {
        "stepId": true,
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
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        843
      ]
    },
    {
      "step": 100,
      "stepId": "compareMerge",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        855,
        860,
        222,
        843
      ]
    },
    {
      "step": 101,
      "stepId": "takeRight",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        12,
        266,
        770,
        969,
        222,
        860,
        222,
        843
      ]
    },
    {
      "step": 102,
      "stepId": "incK",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 1,
      "k": 5,
      "array": [
        12,
        266,
        770,
        969,
        222,
        860,
        222,
        843
      ],
      "missing": {
        "stepId": true,
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
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 1,
      "k": 5,
      "array": [
        12,
        266,
        770,
        969,
        222,
        860,
        222,
        843
      ]
    },
    {
      "step": 104,
      "stepId": "takeRight",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 1,
      "k": 5,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        222,
        843
      ],
      "missing": {
        "stepId": true,
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
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        222,
        843
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "drainLeft",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": null,
      "k": 6,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "callMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 108,
      "stepId": "copyRuns",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 109,
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 110,
      "stepId": "whileBoth",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 111,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 112,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 113,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 114,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        12,
        266,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 115,
      "stepId": "takeRight",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        12,
        222,
        770,
        969,
        222,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
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
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        12,
        222,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 117,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        12,
        222,
        770,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 118,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 1,
      "j": 1,
      "k": 2,
      "array": [
        12,
        222,
        266,
        969,
        222,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 119,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        12,
        222,
        266,
        969,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 120,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        12,
        222,
        266,
        969,
        222,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 2,
      "j": 1,
      "k": 3,
      "array": [
        12,
        222,
        266,
        770,
        222,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 122,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        12,
        222,
        266,
        770,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 123,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        12,
        222,
        266,
        770,
        222,
        843,
        855,
        860
      ]
    },
    {
      "step": 124,
      "stepId": "takeRight",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        12,
        222,
        266,
        770,
        843,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        12,
        222,
        266,
        770,
        843,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 126,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        12,
        222,
        266,
        770,
        843,
        843,
        855,
        860
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 127,
      "stepId": "takeRight",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 2,
      "k": 5,
      "array": [
        12,
        222,
        266,
        770,
        843,
        855,
        855,
        860
      ]
    },
    {
      "step": 128,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        12,
        222,
        266,
        770,
        843,
        855,
        855,
        860
      ]
    },
    {
      "step": 129,
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        12,
        222,
        266,
        770,
        843,
        855,
        855,
        860
      ]
    },
    {
      "step": 130,
      "stepId": "takeRight",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 3,
      "k": 6,
      "array": [
        12,
        222,
        266,
        770,
        843,
        855,
        860,
        860
      ]
    },
    {
      "step": 131,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": null,
      "k": 7,
      "array": [
        12,
        222,
        266,
        770,
        843,
        855,
        860,
        860
      ]
    },
    {
      "step": 132,
      "stepId": "drainLeft",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": null,
      "k": 7,
      "array": [
        12,
        222,
        266,
        770,
        843,
        855,
        860,
        969
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
