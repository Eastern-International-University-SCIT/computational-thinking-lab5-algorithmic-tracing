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
    5,
    6,
    10,
    12,
    15,
    17,
    19,
    34,
    37,
    39,
    43,
    51,
    55,
    64,
    68,
    71,
    73,
    74,
    75,
    76,
    78,
    81,
    82
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
    "5": {
      "stepId": "extendLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "6": {
      "stepId": "setMid",
      "left": "0",
      "mid": "1",
      "right": "\u2014",
      "i": "1",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "10": {
      "stepId": "setRight",
      "left": "0",
      "mid": "1",
      "right": "4",
      "i": "4",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "12": {
      "stepId": "copyRuns",
      "left": "0",
      "mid": "1",
      "right": "4",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "15": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "1",
      "right": "4",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "17": {
      "stepId": "incK",
      "left": "0",
      "mid": "1",
      "right": "4",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "19": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "1",
      "right": "4",
      "i": "0",
      "j": "1",
      "k": "1",
      "merged": "false"
    },
    "34": {
      "stepId": "checkHasRight",
      "left": "5",
      "mid": "7",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "37": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "39": {
      "stepId": "whileScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "43": {
      "stepId": "advancePastMid",
      "left": "0",
      "mid": "4",
      "right": "\u2014",
      "i": "5",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "51": {
      "stepId": "compareMerge",
      "left": "0",
      "mid": "4",
      "right": "7",
      "i": "0",
      "j": "0",
      "k": "0",
      "merged": "false"
    },
    "55": {
      "stepId": "takeRight",
      "left": "0",
      "mid": "4",
      "right": "7",
      "i": "1",
      "j": "0",
      "k": "1",
      "merged": "false"
    },
    "64": {
      "stepId": "takeLeft",
      "left": "0",
      "mid": "4",
      "right": "7",
      "i": "3",
      "j": "1",
      "k": "4",
      "merged": "false"
    },
    "68": {
      "stepId": "incK",
      "left": "0",
      "mid": "4",
      "right": "7",
      "i": "\u2014",
      "j": "1",
      "k": "6",
      "merged": "false"
    },
    "71": {
      "stepId": "advanceAfterMerge",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "true"
    },
    "73": {
      "stepId": "repeatPass",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "\u2014",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "\u2014"
    },
    "74": {
      "stepId": "initScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "75": {
      "stepId": "whileScan",
      "left": "\u2014",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "76": {
      "stepId": "setLeft",
      "left": "0",
      "mid": "\u2014",
      "right": "\u2014",
      "i": "0",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "78": {
      "stepId": "setMid",
      "left": "0",
      "mid": "7",
      "right": "\u2014",
      "i": "7",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "81": {
      "stepId": "breakOddRun",
      "left": "0",
      "mid": "7",
      "right": "\u2014",
      "i": "8",
      "j": "\u2014",
      "k": "\u2014",
      "merged": "false"
    },
    "82": {
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
        "id": 25,
        "value": "setMid"
      },
      {
        "id": 105,
        "value": "compareMerge"
      },
      {
        "id": 145,
        "value": "repeatPass"
      },
      {
        "id": 137,
        "value": "advanceAfterMerge"
      },
      {
        "id": 161,
        "value": "whileScan"
      },
      {
        "id": 153,
        "value": "initScan"
      },
      {
        "id": 73,
        "value": "checkHasRight"
      },
      {
        "id": 113,
        "value": "takeRight"
      },
      {
        "id": 65,
        "value": "takeRight"
      },
      {
        "id": 97,
        "value": "advancePastMid"
      },
      {
        "id": 185,
        "value": "breakOddRun"
      },
      {
        "id": 169,
        "value": "setLeft"
      },
      {
        "id": 121,
        "value": "takeLeft"
      },
      {
        "id": 9,
        "value": "setLeft"
      },
      {
        "id": 1,
        "value": "initScan"
      },
      {
        "id": 81,
        "value": "repeatPass"
      },
      {
        "id": 177,
        "value": "setMid"
      },
      {
        "id": 89,
        "value": "whileScan"
      },
      {
        "id": 49,
        "value": "compareMerge"
      },
      {
        "id": 33,
        "value": "setRight"
      },
      {
        "id": 41,
        "value": "copyRuns"
      },
      {
        "id": 57,
        "value": "incK"
      },
      {
        "id": 17,
        "value": "extendLeft"
      },
      {
        "id": 193,
        "value": "checkUntil"
      },
      {
        "id": 129,
        "value": "incK"
      }
    ],
    "left": [
      {
        "id": 138,
        "value": "\u2014"
      },
      {
        "id": 178,
        "value": "0"
      },
      {
        "id": 114,
        "value": "0"
      },
      {
        "id": 98,
        "value": "0"
      },
      {
        "id": 170,
        "value": "0"
      },
      {
        "id": 26,
        "value": "0"
      },
      {
        "id": 194,
        "value": "\u2014"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 106,
        "value": "0"
      },
      {
        "id": 74,
        "value": "5"
      },
      {
        "id": 154,
        "value": "\u2014"
      },
      {
        "id": 34,
        "value": "0"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 146,
        "value": "\u2014"
      },
      {
        "id": 66,
        "value": "0"
      },
      {
        "id": 50,
        "value": "0"
      },
      {
        "id": 90,
        "value": "\u2014"
      },
      {
        "id": 162,
        "value": "\u2014"
      },
      {
        "id": 186,
        "value": "0"
      },
      {
        "id": 42,
        "value": "0"
      },
      {
        "id": 58,
        "value": "0"
      },
      {
        "id": 130,
        "value": "0"
      },
      {
        "id": 82,
        "value": "\u2014"
      },
      {
        "id": 2,
        "value": "\u2014"
      },
      {
        "id": 122,
        "value": "0"
      }
    ],
    "mid": [
      {
        "id": 187,
        "value": "7"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 195,
        "value": "\u2014"
      },
      {
        "id": 139,
        "value": "\u2014"
      },
      {
        "id": 83,
        "value": "\u2014"
      },
      {
        "id": 147,
        "value": "\u2014"
      },
      {
        "id": 171,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "1"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "1"
      },
      {
        "id": 43,
        "value": "1"
      },
      {
        "id": 19,
        "value": "\u2014"
      },
      {
        "id": 59,
        "value": "1"
      },
      {
        "id": 179,
        "value": "7"
      },
      {
        "id": 107,
        "value": "4"
      },
      {
        "id": 155,
        "value": "\u2014"
      },
      {
        "id": 123,
        "value": "4"
      },
      {
        "id": 115,
        "value": "4"
      },
      {
        "id": 51,
        "value": "1"
      },
      {
        "id": 11,
        "value": "\u2014"
      },
      {
        "id": 75,
        "value": "7"
      },
      {
        "id": 131,
        "value": "4"
      },
      {
        "id": 163,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "1"
      },
      {
        "id": 99,
        "value": "4"
      }
    ],
    "right": [
      {
        "id": 116,
        "value": "7"
      },
      {
        "id": 132,
        "value": "7"
      },
      {
        "id": 44,
        "value": "4"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 180,
        "value": "\u2014"
      },
      {
        "id": 20,
        "value": "\u2014"
      },
      {
        "id": 148,
        "value": "\u2014"
      },
      {
        "id": 12,
        "value": "\u2014"
      },
      {
        "id": 140,
        "value": "\u2014"
      },
      {
        "id": 172,
        "value": "\u2014"
      },
      {
        "id": 124,
        "value": "7"
      },
      {
        "id": 36,
        "value": "4"
      },
      {
        "id": 68,
        "value": "4"
      },
      {
        "id": 92,
        "value": "\u2014"
      },
      {
        "id": 100,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "\u2014"
      },
      {
        "id": 188,
        "value": "\u2014"
      },
      {
        "id": 108,
        "value": "7"
      },
      {
        "id": 196,
        "value": "\u2014"
      },
      {
        "id": 60,
        "value": "4"
      },
      {
        "id": 156,
        "value": "\u2014"
      },
      {
        "id": 164,
        "value": "\u2014"
      },
      {
        "id": 52,
        "value": "4"
      },
      {
        "id": 76,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "\u2014"
      }
    ],
    "i": [
      {
        "id": 197,
        "value": "\u2014"
      },
      {
        "id": 13,
        "value": "0"
      },
      {
        "id": 45,
        "value": "\u2014"
      },
      {
        "id": 125,
        "value": "3"
      },
      {
        "id": 21,
        "value": "0"
      },
      {
        "id": 101,
        "value": "5"
      },
      {
        "id": 93,
        "value": "0"
      },
      {
        "id": 117,
        "value": "1"
      },
      {
        "id": 85,
        "value": "\u2014"
      },
      {
        "id": 165,
        "value": "0"
      },
      {
        "id": 37,
        "value": "4"
      },
      {
        "id": 189,
        "value": "8"
      },
      {
        "id": 133,
        "value": "\u2014"
      },
      {
        "id": 61,
        "value": "0"
      },
      {
        "id": 109,
        "value": "0"
      },
      {
        "id": 29,
        "value": "1"
      },
      {
        "id": 5,
        "value": "0"
      },
      {
        "id": 157,
        "value": "0"
      },
      {
        "id": 149,
        "value": "\u2014"
      },
      {
        "id": 77,
        "value": "8"
      },
      {
        "id": 173,
        "value": "0"
      },
      {
        "id": 141,
        "value": "8"
      },
      {
        "id": 181,
        "value": "7"
      },
      {
        "id": 69,
        "value": "0"
      },
      {
        "id": 53,
        "value": "0"
      }
    ],
    "j": [
      {
        "id": 22,
        "value": "\u2014"
      },
      {
        "id": 102,
        "value": "\u2014"
      },
      {
        "id": 142,
        "value": "\u2014"
      },
      {
        "id": 38,
        "value": "\u2014"
      },
      {
        "id": 54,
        "value": "0"
      },
      {
        "id": 30,
        "value": "\u2014"
      },
      {
        "id": 62,
        "value": "1"
      },
      {
        "id": 86,
        "value": "\u2014"
      },
      {
        "id": 190,
        "value": "\u2014"
      },
      {
        "id": 46,
        "value": "\u2014"
      },
      {
        "id": 134,
        "value": "1"
      },
      {
        "id": 150,
        "value": "\u2014"
      },
      {
        "id": 70,
        "value": "1"
      },
      {
        "id": 94,
        "value": "\u2014"
      },
      {
        "id": 198,
        "value": "\u2014"
      },
      {
        "id": 110,
        "value": "0"
      },
      {
        "id": 78,
        "value": "\u2014"
      },
      {
        "id": 166,
        "value": "\u2014"
      },
      {
        "id": 182,
        "value": "\u2014"
      },
      {
        "id": 14,
        "value": "\u2014"
      },
      {
        "id": 158,
        "value": "\u2014"
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
        "id": 126,
        "value": "1"
      },
      {
        "id": 118,
        "value": "0"
      }
    ],
    "k": [
      {
        "id": 111,
        "value": "0"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 47,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "1"
      },
      {
        "id": 31,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "\u2014"
      },
      {
        "id": 175,
        "value": "\u2014"
      },
      {
        "id": 191,
        "value": "\u2014"
      },
      {
        "id": 199,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "1"
      },
      {
        "id": 7,
        "value": "\u2014"
      },
      {
        "id": 15,
        "value": "\u2014"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "0"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 143,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "\u2014"
      },
      {
        "id": 135,
        "value": "6"
      },
      {
        "id": 151,
        "value": "\u2014"
      },
      {
        "id": 71,
        "value": "1"
      },
      {
        "id": 183,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 127,
        "value": "4"
      }
    ],
    "merged": [
      {
        "id": 144,
        "value": "true"
      },
      {
        "id": 72,
        "value": "false"
      },
      {
        "id": 120,
        "value": "false"
      },
      {
        "id": 104,
        "value": "false"
      },
      {
        "id": 176,
        "value": "false"
      },
      {
        "id": 64,
        "value": "false"
      },
      {
        "id": 160,
        "value": "false"
      },
      {
        "id": 56,
        "value": "false"
      },
      {
        "id": 48,
        "value": "false"
      },
      {
        "id": 80,
        "value": "true"
      },
      {
        "id": 112,
        "value": "false"
      },
      {
        "id": 8,
        "value": "false"
      },
      {
        "id": 136,
        "value": "false"
      },
      {
        "id": 16,
        "value": "false"
      },
      {
        "id": 152,
        "value": "\u2014"
      },
      {
        "id": 200,
        "value": "false"
      },
      {
        "id": 88,
        "value": "\u2014"
      },
      {
        "id": 128,
        "value": "false"
      },
      {
        "id": 24,
        "value": "false"
      },
      {
        "id": 40,
        "value": "false"
      },
      {
        "id": 168,
        "value": "false"
      },
      {
        "id": 184,
        "value": "false"
      },
      {
        "id": 96,
        "value": "false"
      },
      {
        "id": 32,
        "value": "false"
      },
      {
        "id": 192,
        "value": "false"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "repeatPass",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
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
      "stepId": "initScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 3,
      "stepId": "whileScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 4,
      "stepId": "setLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 5,
      "stepId": "extendLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 6,
      "stepId": "setMid",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 1,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 7,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "checkHasRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": null,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "extendRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 2,
      "i": 2,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "setRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 11,
      "stepId": "callMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
      "stepId": "copyRuns",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 13,
      "stepId": "initMergePointers",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 14,
      "stepId": "whileBoth",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 15,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 16,
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 17,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        81,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 18,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
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
      "step": 19,
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 1,
      "k": 1,
      "merged": false,
      "array": [
        81,
        337,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 20,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
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
      "step": 21,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
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
      "step": 22,
      "stepId": "takeLeft",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 0,
      "j": 2,
      "k": 2,
      "merged": false,
      "array": [
        81,
        337,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 23,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        81,
        337,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 24,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
      "array": [
        81,
        337,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 25,
      "stepId": "takeLeft",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": 1,
      "j": 2,
      "k": 3,
      "merged": false,
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
      "step": 26,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": null,
      "j": 2,
      "k": 4,
      "merged": false,
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
      "step": 27,
      "stepId": "drainRight",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": null,
      "j": 2,
      "k": 4,
      "merged": false,
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
      "step": 28,
      "stepId": "setMergedTrue",
      "n": 8,
      "left": 0,
      "mid": 1,
      "right": 4,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 29,
      "stepId": "advanceAfterMerge",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 30,
      "stepId": "setLeft",
      "n": 8,
      "left": 5,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 31,
      "stepId": "extendLeft",
      "n": 8,
      "left": 5,
      "mid": null,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 32,
      "stepId": "setMid",
      "n": 8,
      "left": 5,
      "mid": 7,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 33,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 5,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 34,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 5,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 35,
      "stepId": "breakOddRun",
      "n": 8,
      "left": 5,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 36,
      "stepId": "checkUntil",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 37,
      "stepId": "repeatPass",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 38,
      "stepId": "initScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 39,
      "stepId": "whileScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 40,
      "stepId": "setLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 41,
      "stepId": "extendLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 42,
      "stepId": "setMid",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": null,
      "i": 4,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 43,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 44,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": null,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 45,
      "stepId": "extendRight",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 5,
      "i": 5,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 46,
      "stepId": "setRight",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 47,
      "stepId": "callMerge",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 48,
      "stepId": "copyRuns",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 49,
      "stepId": "initMergePointers",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 50,
      "stepId": "whileBoth",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 51,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 52,
      "stepId": "takeLeft",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 0,
      "j": 0,
      "k": 0,
      "merged": false,
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
      "step": 53,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
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
      "step": 54,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
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
      "step": 55,
      "stepId": "takeRight",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 1,
      "j": 0,
      "k": 1,
      "merged": false,
      "array": [
        81,
        295,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 56,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        81,
        295,
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
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        81,
        295,
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
      "stepId": "takeLeft",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 1,
      "j": 1,
      "k": 2,
      "merged": false,
      "array": [
        81,
        295,
        337,
        812,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 59,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        81,
        295,
        337,
        812,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 60,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        81,
        295,
        337,
        812,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 61,
      "stepId": "takeLeft",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 2,
      "j": 1,
      "k": 3,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 62,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 63,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 64,
      "stepId": "takeLeft",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 3,
      "j": 1,
      "k": 4,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 65,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
        295,
        855,
        958
      ]
    },
    {
      "step": 66,
      "stepId": "compareMerge",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
        295,
        855,
        958
      ]
    },
    {
      "step": 67,
      "stepId": "takeLeft",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": 4,
      "j": 1,
      "k": 5,
      "merged": false,
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
      "step": 68,
      "stepId": "incK",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": null,
      "j": 1,
      "k": 6,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 69,
      "stepId": "drainRight",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": null,
      "j": 1,
      "k": 6,
      "merged": false,
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
      "step": 70,
      "stepId": "setMergedTrue",
      "n": 8,
      "left": 0,
      "mid": 4,
      "right": 7,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 71,
      "stepId": "advanceAfterMerge",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": true,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 72,
      "stepId": "checkUntil",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": true,
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
      "step": 73,
      "stepId": "repeatPass",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": null,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 74,
      "stepId": "initScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 75,
      "stepId": "whileScan",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 76,
      "stepId": "setLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 77,
      "stepId": "extendLeft",
      "n": 8,
      "left": 0,
      "mid": null,
      "right": null,
      "i": 0,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 78,
      "stepId": "setMid",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 7,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 79,
      "stepId": "advancePastMid",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 80,
      "stepId": "checkHasRight",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
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
      "step": 81,
      "stepId": "breakOddRun",
      "n": 8,
      "left": 0,
      "mid": 7,
      "right": null,
      "i": 8,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
        "k": true,
        "merged": true
      }
    },
    {
      "step": 82,
      "stepId": "checkUntil",
      "n": 8,
      "left": null,
      "mid": null,
      "right": null,
      "i": null,
      "j": null,
      "k": null,
      "merged": false,
      "array": [
        81,
        295,
        337,
        480,
        812,
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
