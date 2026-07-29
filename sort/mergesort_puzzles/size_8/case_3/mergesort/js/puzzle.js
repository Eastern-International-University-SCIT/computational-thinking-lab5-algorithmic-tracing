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
    480,
    812,
    81,
    337,
    815,
    295,
    855,
    958
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
    3,
    6,
    10,
    13,
    14,
    17,
    20,
    23,
    24,
    28,
    32,
    38,
    39,
    43,
    44,
    45,
    48,
    55,
    60,
    64,
    69,
    80,
    81,
    88,
    90,
    91,
    93,
    96,
    102,
    103,
    106,
    108,
    110,
    111,
    113,
    116,
    119,
    121
  ],
  "answers": {
    "3": {
      "stepId": "checkLeftRight",
      "left": "0",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "6": {
      "stepId": "markRange",
      "left": "0",
      "mid": "—",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "10": {
      "stepId": "markRange",
      "left": "0",
      "mid": "—",
      "right": "1",
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
    "14": {
      "stepId": "markRange",
      "left": "0",
      "mid": "—",
      "right": "0",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "17": {
      "stepId": "markRange",
      "left": "1",
      "mid": "—",
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
    "23": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "24": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "0",
      "right": "1",
      "i": "0",
      "j": "0",
      "k": "0"
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
    "32": {
      "stepId": "markRange",
      "left": "2",
      "mid": "—",
      "right": "2",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "38": {
      "stepId": "copyRuns",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "39": {
      "stepId": "initMergePointers",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "2"
    },
    "43": {
      "stepId": "incK",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "—",
      "j": "0",
      "k": "3"
    },
    "44": {
      "stepId": "drainRight",
      "left": "2",
      "mid": "2",
      "right": "3",
      "i": "—",
      "j": "0",
      "k": "3"
    },
    "45": {
      "stepId": "callMerge",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "48": {
      "stepId": "whileBoth",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "0",
      "j": "0",
      "k": "0"
    },
    "55": {
      "stepId": "drainLeft",
      "left": "0",
      "mid": "1",
      "right": "3",
      "i": "0",
      "j": "—",
      "k": "2"
    },
    "60": {
      "stepId": "sortLeft",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "64": {
      "stepId": "sortLeft",
      "left": "4",
      "mid": "4",
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
    "80": {
      "stepId": "checkLeftRight",
      "left": "6",
      "mid": "—",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "81": {
      "stepId": "setMid",
      "left": "6",
      "mid": "6",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "88": {
      "stepId": "callMerge",
      "left": "6",
      "mid": "6",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "90": {
      "stepId": "initMergePointers",
      "left": "6",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "6"
    },
    "91": {
      "stepId": "whileBoth",
      "left": "6",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "6"
    },
    "93": {
      "stepId": "takeLeft",
      "left": "6",
      "mid": "6",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "6"
    },
    "96": {
      "stepId": "callMerge",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
    },
    "102": {
      "stepId": "incK",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "1",
      "j": "0",
      "k": "5"
    },
    "103": {
      "stepId": "compareMerge",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "1",
      "j": "0",
      "k": "5"
    },
    "106": {
      "stepId": "drainRight",
      "left": "4",
      "mid": "5",
      "right": "7",
      "i": "—",
      "j": "0",
      "k": "6"
    },
    "108": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "—",
      "j": "—",
      "k": "—"
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
    "113": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "1",
      "j": "0",
      "k": "1"
    },
    "116": {
      "stepId": "incK",
      "left": "0",
      "mid": "3",
      "right": "7",
      "i": "1",
      "j": "1",
      "k": "2"
    },
    "119": {
      "stepId": "incK",
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
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 64,
        "value": "markRange"
      },
      {
        "id": 155,
        "value": "setMid"
      },
      {
        "id": 197,
        "value": "incK"
      },
      {
        "id": 183,
        "value": "takeLeft"
      },
      {
        "id": 50,
        "value": "compareMerge"
      },
      {
        "id": 113,
        "value": "whileBoth"
      },
      {
        "id": 78,
        "value": "copyRuns"
      },
      {
        "id": 36,
        "value": "markRange"
      },
      {
        "id": 260,
        "value": "takeLeft"
      },
      {
        "id": 176,
        "value": "whileBoth"
      },
      {
        "id": 57,
        "value": "takeLeft"
      },
      {
        "id": 85,
        "value": "initMergePointers"
      },
      {
        "id": 211,
        "value": "drainRight"
      },
      {
        "id": 246,
        "value": "incK"
      },
      {
        "id": 22,
        "value": "sortLeft"
      },
      {
        "id": 232,
        "value": "compareMerge"
      },
      {
        "id": 141,
        "value": "checkLeftRight"
      },
      {
        "id": 148,
        "value": "checkLeftRight"
      },
      {
        "id": 15,
        "value": "markRange"
      },
      {
        "id": 239,
        "value": "incK"
      },
      {
        "id": 169,
        "value": "initMergePointers"
      },
      {
        "id": 253,
        "value": "incK"
      },
      {
        "id": 43,
        "value": "copyRuns"
      },
      {
        "id": 29,
        "value": "markRange"
      },
      {
        "id": 1,
        "value": "checkLeftRight"
      },
      {
        "id": 190,
        "value": "callMerge"
      },
      {
        "id": 71,
        "value": "markRange"
      },
      {
        "id": 204,
        "value": "compareMerge"
      },
      {
        "id": 106,
        "value": "callMerge"
      },
      {
        "id": 127,
        "value": "sortLeft"
      },
      {
        "id": 92,
        "value": "incK"
      },
      {
        "id": 134,
        "value": "sortLeft"
      },
      {
        "id": 8,
        "value": "markRange"
      },
      {
        "id": 99,
        "value": "drainRight"
      },
      {
        "id": 218,
        "value": "copyRuns"
      },
      {
        "id": 120,
        "value": "drainLeft"
      },
      {
        "id": 225,
        "value": "whileBoth"
      },
      {
        "id": 162,
        "value": "callMerge"
      }
    ],
    "left": [
      {
        "id": 177,
        "value": "6"
      },
      {
        "id": 156,
        "value": "6"
      },
      {
        "id": 254,
        "value": "0"
      },
      {
        "id": 9,
        "value": "0"
      },
      {
        "id": 16,
        "value": "0"
      },
      {
        "id": 219,
        "value": "0"
      },
      {
        "id": 205,
        "value": "4"
      },
      {
        "id": 261,
        "value": "0"
      },
      {
        "id": 72,
        "value": "2"
      },
      {
        "id": 212,
        "value": "4"
      },
      {
        "id": 121,
        "value": "0"
      },
      {
        "id": 23,
        "value": "0"
      },
      {
        "id": 44,
        "value": "0"
      },
      {
        "id": 184,
        "value": "6"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 233,
        "value": "0"
      },
      {
        "id": 163,
        "value": "6"
      },
      {
        "id": 37,
        "value": "1"
      },
      {
        "id": 79,
        "value": "2"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 107,
        "value": "0"
      },
      {
        "id": 247,
        "value": "0"
      },
      {
        "id": 51,
        "value": "0"
      },
      {
        "id": 198,
        "value": "4"
      },
      {
        "id": 30,
        "value": "0"
      },
      {
        "id": 149,
        "value": "6"
      },
      {
        "id": 240,
        "value": "0"
      },
      {
        "id": 114,
        "value": "0"
      },
      {
        "id": 128,
        "value": "4"
      },
      {
        "id": 86,
        "value": "2"
      },
      {
        "id": 65,
        "value": "2"
      },
      {
        "id": 170,
        "value": "6"
      },
      {
        "id": 135,
        "value": "4"
      },
      {
        "id": 100,
        "value": "2"
      },
      {
        "id": 142,
        "value": "5"
      },
      {
        "id": 226,
        "value": "0"
      },
      {
        "id": 93,
        "value": "2"
      },
      {
        "id": 191,
        "value": "4"
      }
    ],
    "mid": [
      {
        "id": 52,
        "value": "0"
      },
      {
        "id": 122,
        "value": "1"
      },
      {
        "id": 185,
        "value": "6"
      },
      {
        "id": 171,
        "value": "6"
      },
      {
        "id": 87,
        "value": "2"
      },
      {
        "id": 94,
        "value": "2"
      },
      {
        "id": 10,
        "value": "—"
      },
      {
        "id": 73,
        "value": "—"
      },
      {
        "id": 192,
        "value": "5"
      },
      {
        "id": 38,
        "value": "—"
      },
      {
        "id": 136,
        "value": "4"
      },
      {
        "id": 241,
        "value": "3"
      },
      {
        "id": 3,
        "value": "—"
      },
      {
        "id": 45,
        "value": "0"
      },
      {
        "id": 80,
        "value": "2"
      },
      {
        "id": 213,
        "value": "5"
      },
      {
        "id": 115,
        "value": "1"
      },
      {
        "id": 178,
        "value": "6"
      },
      {
        "id": 108,
        "value": "1"
      },
      {
        "id": 66,
        "value": "—"
      },
      {
        "id": 59,
        "value": "0"
      },
      {
        "id": 143,
        "value": "—"
      },
      {
        "id": 206,
        "value": "5"
      },
      {
        "id": 129,
        "value": "5"
      },
      {
        "id": 262,
        "value": "3"
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
        "id": 31,
        "value": "—"
      },
      {
        "id": 227,
        "value": "3"
      },
      {
        "id": 101,
        "value": "2"
      },
      {
        "id": 150,
        "value": "—"
      },
      {
        "id": 220,
        "value": "3"
      },
      {
        "id": 164,
        "value": "6"
      },
      {
        "id": 157,
        "value": "6"
      },
      {
        "id": 17,
        "value": "—"
      },
      {
        "id": 248,
        "value": "3"
      },
      {
        "id": 24,
        "value": "0"
      },
      {
        "id": 199,
        "value": "5"
      }
    ],
    "right": [
      {
        "id": 74,
        "value": "2"
      },
      {
        "id": 151,
        "value": "7"
      },
      {
        "id": 102,
        "value": "3"
      },
      {
        "id": 242,
        "value": "7"
      },
      {
        "id": 235,
        "value": "7"
      },
      {
        "id": 123,
        "value": "3"
      },
      {
        "id": 144,
        "value": "5"
      },
      {
        "id": 116,
        "value": "3"
      },
      {
        "id": 186,
        "value": "7"
      },
      {
        "id": 53,
        "value": "1"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 60,
        "value": "1"
      },
      {
        "id": 88,
        "value": "3"
      },
      {
        "id": 221,
        "value": "7"
      },
      {
        "id": 137,
        "value": "5"
      },
      {
        "id": 18,
        "value": "1"
      },
      {
        "id": 200,
        "value": "7"
      },
      {
        "id": 214,
        "value": "7"
      },
      {
        "id": 207,
        "value": "7"
      },
      {
        "id": 172,
        "value": "7"
      },
      {
        "id": 109,
        "value": "3"
      },
      {
        "id": 249,
        "value": "7"
      },
      {
        "id": 4,
        "value": "7"
      },
      {
        "id": 11,
        "value": "3"
      },
      {
        "id": 81,
        "value": "3"
      },
      {
        "id": 67,
        "value": "3"
      },
      {
        "id": 39,
        "value": "1"
      },
      {
        "id": 165,
        "value": "7"
      },
      {
        "id": 263,
        "value": "7"
      },
      {
        "id": 193,
        "value": "7"
      },
      {
        "id": 256,
        "value": "7"
      },
      {
        "id": 130,
        "value": "7"
      },
      {
        "id": 228,
        "value": "7"
      },
      {
        "id": 158,
        "value": "7"
      },
      {
        "id": 32,
        "value": "0"
      },
      {
        "id": 179,
        "value": "7"
      },
      {
        "id": 25,
        "value": "1"
      },
      {
        "id": 95,
        "value": "3"
      }
    ],
    "i": [
      {
        "id": 138,
        "value": "—"
      },
      {
        "id": 26,
        "value": "—"
      },
      {
        "id": 61,
        "value": "0"
      },
      {
        "id": 166,
        "value": "—"
      },
      {
        "id": 110,
        "value": "—"
      },
      {
        "id": 68,
        "value": "—"
      },
      {
        "id": 187,
        "value": "0"
      },
      {
        "id": 103,
        "value": "—"
      },
      {
        "id": 229,
        "value": "0"
      },
      {
        "id": 96,
        "value": "—"
      },
      {
        "id": 117,
        "value": "0"
      },
      {
        "id": 194,
        "value": "—"
      },
      {
        "id": 12,
        "value": "—"
      },
      {
        "id": 159,
        "value": "—"
      },
      {
        "id": 33,
        "value": "—"
      },
      {
        "id": 257,
        "value": "2"
      },
      {
        "id": 152,
        "value": "—"
      },
      {
        "id": 82,
        "value": "—"
      },
      {
        "id": 145,
        "value": "—"
      },
      {
        "id": 19,
        "value": "—"
      },
      {
        "id": 89,
        "value": "0"
      },
      {
        "id": 180,
        "value": "0"
      },
      {
        "id": 5,
        "value": "—"
      },
      {
        "id": 40,
        "value": "—"
      },
      {
        "id": 236,
        "value": "0"
      },
      {
        "id": 243,
        "value": "1"
      },
      {
        "id": 201,
        "value": "1"
      },
      {
        "id": 222,
        "value": "—"
      },
      {
        "id": 250,
        "value": "1"
      },
      {
        "id": 173,
        "value": "0"
      },
      {
        "id": 54,
        "value": "0"
      },
      {
        "id": 75,
        "value": "—"
      },
      {
        "id": 131,
        "value": "—"
      },
      {
        "id": 215,
        "value": "—"
      },
      {
        "id": 208,
        "value": "1"
      },
      {
        "id": 47,
        "value": "—"
      },
      {
        "id": 264,
        "value": "2"
      },
      {
        "id": 124,
        "value": "0"
      }
    ],
    "j": [
      {
        "id": 188,
        "value": "0"
      },
      {
        "id": 237,
        "value": "0"
      },
      {
        "id": 76,
        "value": "—"
      },
      {
        "id": 83,
        "value": "—"
      },
      {
        "id": 62,
        "value": "0"
      },
      {
        "id": 13,
        "value": "—"
      },
      {
        "id": 48,
        "value": "—"
      },
      {
        "id": 118,
        "value": "0"
      },
      {
        "id": 111,
        "value": "—"
      },
      {
        "id": 34,
        "value": "—"
      },
      {
        "id": 90,
        "value": "0"
      },
      {
        "id": 265,
        "value": "1"
      },
      {
        "id": 244,
        "value": "0"
      },
      {
        "id": 202,
        "value": "0"
      },
      {
        "id": 20,
        "value": "—"
      },
      {
        "id": 216,
        "value": "0"
      },
      {
        "id": 181,
        "value": "0"
      },
      {
        "id": 139,
        "value": "—"
      },
      {
        "id": 6,
        "value": "—"
      },
      {
        "id": 251,
        "value": "1"
      },
      {
        "id": 55,
        "value": "0"
      },
      {
        "id": 174,
        "value": "0"
      },
      {
        "id": 132,
        "value": "—"
      },
      {
        "id": 153,
        "value": "—"
      },
      {
        "id": 195,
        "value": "—"
      },
      {
        "id": 160,
        "value": "—"
      },
      {
        "id": 223,
        "value": "—"
      },
      {
        "id": 167,
        "value": "—"
      },
      {
        "id": 97,
        "value": "0"
      },
      {
        "id": 41,
        "value": "—"
      },
      {
        "id": 258,
        "value": "1"
      },
      {
        "id": 104,
        "value": "0"
      },
      {
        "id": 230,
        "value": "0"
      },
      {
        "id": 146,
        "value": "—"
      },
      {
        "id": 27,
        "value": "—"
      },
      {
        "id": 209,
        "value": "0"
      },
      {
        "id": 125,
        "value": "—"
      },
      {
        "id": 69,
        "value": "—"
      }
    ],
    "k": [
      {
        "id": 105,
        "value": "3"
      },
      {
        "id": 49,
        "value": "—"
      },
      {
        "id": 224,
        "value": "—"
      },
      {
        "id": 98,
        "value": "3"
      },
      {
        "id": 154,
        "value": "—"
      },
      {
        "id": 119,
        "value": "0"
      },
      {
        "id": 217,
        "value": "6"
      },
      {
        "id": 91,
        "value": "2"
      },
      {
        "id": 28,
        "value": "—"
      },
      {
        "id": 238,
        "value": "0"
      },
      {
        "id": 266,
        "value": "3"
      },
      {
        "id": 77,
        "value": "—"
      },
      {
        "id": 140,
        "value": "—"
      },
      {
        "id": 7,
        "value": "—"
      },
      {
        "id": 133,
        "value": "—"
      },
      {
        "id": 259,
        "value": "3"
      },
      {
        "id": 231,
        "value": "0"
      },
      {
        "id": 14,
        "value": "—"
      },
      {
        "id": 35,
        "value": "—"
      },
      {
        "id": 63,
        "value": "0"
      },
      {
        "id": 203,
        "value": "5"
      },
      {
        "id": 56,
        "value": "0"
      },
      {
        "id": 112,
        "value": "—"
      },
      {
        "id": 196,
        "value": "—"
      },
      {
        "id": 175,
        "value": "6"
      },
      {
        "id": 70,
        "value": "—"
      },
      {
        "id": 189,
        "value": "6"
      },
      {
        "id": 245,
        "value": "1"
      },
      {
        "id": 168,
        "value": "—"
      },
      {
        "id": 84,
        "value": "—"
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
        "id": 182,
        "value": "6"
      },
      {
        "id": 126,
        "value": "2"
      },
      {
        "id": 161,
        "value": "—"
      },
      {
        "id": 252,
        "value": "2"
      },
      {
        "id": 147,
        "value": "—"
      },
      {
        "id": 210,
        "value": "5"
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "right": 0,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "checkLeftRight",
      "left": 1,
      "mid": null,
      "right": 1,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "takeLeft",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "i": null,
      "j": 0,
      "k": 1,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 26,
      "stepId": "drainRight",
      "left": 0,
      "mid": 0,
      "right": 1,
      "i": null,
      "j": 0,
      "k": 1,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "checkLeftRight",
      "left": 2,
      "mid": null,
      "right": 2,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "initMergePointers",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "whileBoth",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 42,
      "stepId": "takeLeft",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 2,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 43,
      "stepId": "incK",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": 0,
      "k": 3,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "drainRight",
      "left": 2,
      "mid": 2,
      "right": 3,
      "i": null,
      "j": 0,
      "k": 3,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "compareMerge",
      "left": 0,
      "mid": 1,
      "right": 3,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        480,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        81,
        812,
        81,
        337,
        815,
        295,
        855,
        958
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
        81,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
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
        81,
        812,
        81,
        337,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        81,
        337,
        815,
        295,
        855,
        958
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
        81,
        337,
        81,
        337,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 5,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "markRange",
      "left": 4,
      "mid": null,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        815,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        295,
        295,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        295,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "setMid",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 6,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
    },
    {
      "step": 93,
      "stepId": "takeLeft",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 6,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
    },
    {
      "step": 94,
      "stepId": "incK",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": 0,
      "k": 7,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
    },
    {
      "step": 95,
      "stepId": "drainRight",
      "left": 6,
      "mid": 6,
      "right": 7,
      "i": null,
      "j": 0,
      "k": 7,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
    },
    {
      "step": 101,
      "stepId": "takeLeft",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 4,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
    },
    {
      "step": 102,
      "stepId": "incK",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 5,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "i": 1,
      "j": 0,
      "k": 5,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 5,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
    },
    {
      "step": 105,
      "stepId": "incK",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": 0,
      "k": 6,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ]
    },
    {
      "step": 106,
      "stepId": "drainRight",
      "left": 4,
      "mid": 5,
      "right": 7,
      "i": null,
      "j": 0,
      "k": 6,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "initMergePointers",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
      "stepId": "compareMerge",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 1,
      "array": [
        81,
        337,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        295,
        480,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        295,
        480,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        81,
        295,
        480,
        812,
        295,
        815,
        855,
        958
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
        81,
        295,
        337,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        295,
        337,
        812,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "left": true,
        "mid": true,
        "right": true,
        "i": true,
        "j": true,
        "k": true
      }
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
        81,
        295,
        337,
        812,
        295,
        815,
        855,
        958
      ]
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
        81,
        295,
        337,
        480,
        295,
        815,
        855,
        958
      ],
      "missing": {
        "stepId": true,
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
        81,
        295,
        337,
        480,
        295,
        815,
        855,
        958
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
        81,
        295,
        337,
        480,
        295,
        815,
        855,
        958
      ]
    },
    {
      "step": 124,
      "stepId": "takeLeft",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": 3,
      "j": 1,
      "k": 4,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 125,
      "stepId": "incK",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": 1,
      "k": 5,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
      ]
    },
    {
      "step": 126,
      "stepId": "drainRight",
      "left": 0,
      "mid": 3,
      "right": 7,
      "i": null,
      "j": 1,
      "k": 5,
      "array": [
        81,
        295,
        337,
        480,
        812,
        815,
        855,
        958
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
