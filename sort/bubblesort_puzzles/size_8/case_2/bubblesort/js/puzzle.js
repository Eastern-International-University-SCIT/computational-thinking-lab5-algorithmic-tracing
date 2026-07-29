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
    695,
    596,
    145,
    164,
    323,
    54,
    489,
    27
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
    6,
    12,
    15,
    18,
    19,
    22,
    34,
    35,
    40,
    42,
    43,
    45,
    52,
    56,
    65,
    66,
    67,
    71,
    80,
    83,
    85,
    86,
    89,
    90,
    93,
    95,
    96,
    102,
    104,
    105,
    106,
    109,
    111,
    113
  ],
  "answers": {
    "6": {
      "stepId": "compare",
      "i": "0",
      "j": "0",
      "swapped": "false"
    },
    "12": {
      "stepId": "compare",
      "i": "0",
      "j": "2",
      "swapped": "true"
    },
    "15": {
      "stepId": "compare",
      "i": "0",
      "j": "3",
      "swapped": "true"
    },
    "18": {
      "stepId": "compare",
      "i": "0",
      "j": "4",
      "swapped": "true"
    },
    "19": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "4",
      "swapped": "true"
    },
    "22": {
      "stepId": "swapAdjacent",
      "i": "0",
      "j": "5",
      "swapped": "true"
    },
    "34": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "0",
      "swapped": "false"
    },
    "35": {
      "stepId": "setSwappedTrue",
      "i": "1",
      "j": "0",
      "swapped": "true"
    },
    "40": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "2",
      "swapped": "true"
    },
    "42": {
      "stepId": "compare",
      "i": "1",
      "j": "3",
      "swapped": "true"
    },
    "43": {
      "stepId": "swapAdjacent",
      "i": "1",
      "j": "3",
      "swapped": "true"
    },
    "45": {
      "stepId": "compare",
      "i": "1",
      "j": "4",
      "swapped": "true"
    },
    "52": {
      "stepId": "checkEarlyExit",
      "i": "1",
      "j": "\u2014",
      "swapped": "true"
    },
    "56": {
      "stepId": "forJ",
      "i": "2",
      "j": "0",
      "swapped": "false"
    },
    "65": {
      "stepId": "setSwappedTrue",
      "i": "2",
      "j": "4",
      "swapped": "true"
    },
    "66": {
      "stepId": "markSortedEnd",
      "i": "2",
      "j": "\u2014",
      "swapped": "true"
    },
    "67": {
      "stepId": "checkEarlyExit",
      "i": "2",
      "j": "\u2014",
      "swapped": "true"
    },
    "71": {
      "stepId": "forJ",
      "i": "3",
      "j": "0",
      "swapped": "false"
    },
    "80": {
      "stepId": "markSortedEnd",
      "i": "3",
      "j": "\u2014",
      "swapped": "true"
    },
    "83": {
      "stepId": "setSwapped",
      "i": "4",
      "j": "\u2014",
      "swapped": "false"
    },
    "85": {
      "stepId": "forJ",
      "i": "4",
      "j": "0",
      "swapped": "false"
    },
    "86": {
      "stepId": "compare",
      "i": "4",
      "j": "0",
      "swapped": "false"
    },
    "89": {
      "stepId": "compare",
      "i": "4",
      "j": "1",
      "swapped": "true"
    },
    "90": {
      "stepId": "compare",
      "i": "4",
      "j": "2",
      "swapped": "true"
    },
    "93": {
      "stepId": "markSortedEnd",
      "i": "4",
      "j": "\u2014",
      "swapped": "true"
    },
    "95": {
      "stepId": "forI",
      "i": "5",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "96": {
      "stepId": "setSwapped",
      "i": "5",
      "j": "\u2014",
      "swapped": "false"
    },
    "102": {
      "stepId": "setSwappedTrue",
      "i": "5",
      "j": "1",
      "swapped": "true"
    },
    "104": {
      "stepId": "checkEarlyExit",
      "i": "5",
      "j": "\u2014",
      "swapped": "true"
    },
    "105": {
      "stepId": "forI",
      "i": "6",
      "j": "\u2014",
      "swapped": "\u2014"
    },
    "106": {
      "stepId": "setSwapped",
      "i": "6",
      "j": "\u2014",
      "swapped": "false"
    },
    "109": {
      "stepId": "compare",
      "i": "6",
      "j": "0",
      "swapped": "false"
    },
    "111": {
      "stepId": "setSwappedTrue",
      "i": "6",
      "j": "0",
      "swapped": "true"
    },
    "113": {
      "stepId": "checkEarlyExit",
      "i": "6",
      "j": "\u2014",
      "swapped": "true"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 133,
        "value": "checkEarlyExit"
      },
      {
        "id": 45,
        "value": "compare"
      },
      {
        "id": 121,
        "value": "setSwapped"
      },
      {
        "id": 61,
        "value": "markSortedEnd"
      },
      {
        "id": 37,
        "value": "compare"
      },
      {
        "id": 81,
        "value": "forJ"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 41,
        "value": "swapAdjacent"
      },
      {
        "id": 109,
        "value": "setSwappedTrue"
      },
      {
        "id": 29,
        "value": "setSwappedTrue"
      },
      {
        "id": 85,
        "value": "compare"
      },
      {
        "id": 73,
        "value": "markSortedEnd"
      },
      {
        "id": 77,
        "value": "setSwapped"
      },
      {
        "id": 53,
        "value": "forJ"
      },
      {
        "id": 125,
        "value": "compare"
      },
      {
        "id": 49,
        "value": "checkEarlyExit"
      },
      {
        "id": 21,
        "value": "swapAdjacent"
      },
      {
        "id": 9,
        "value": "compare"
      },
      {
        "id": 117,
        "value": "forI"
      },
      {
        "id": 17,
        "value": "swapAdjacent"
      },
      {
        "id": 33,
        "value": "swapAdjacent"
      },
      {
        "id": 25,
        "value": "swapAdjacent"
      },
      {
        "id": 69,
        "value": "forJ"
      },
      {
        "id": 101,
        "value": "forI"
      },
      {
        "id": 93,
        "value": "compare"
      },
      {
        "id": 113,
        "value": "checkEarlyExit"
      },
      {
        "id": 57,
        "value": "setSwappedTrue"
      },
      {
        "id": 97,
        "value": "markSortedEnd"
      },
      {
        "id": 129,
        "value": "setSwappedTrue"
      },
      {
        "id": 5,
        "value": "compare"
      },
      {
        "id": 89,
        "value": "compare"
      },
      {
        "id": 65,
        "value": "checkEarlyExit"
      },
      {
        "id": 1,
        "value": "compare"
      },
      {
        "id": 105,
        "value": "setSwapped"
      }
    ],
    "i": [
      {
        "id": 58,
        "value": "2"
      },
      {
        "id": 110,
        "value": "5"
      },
      {
        "id": 102,
        "value": "5"
      },
      {
        "id": 34,
        "value": "1"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 86,
        "value": "4"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 30,
        "value": "1"
      },
      {
        "id": 70,
        "value": "3"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 106,
        "value": "5"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 74,
        "value": "3"
      },
      {
        "id": 78,
        "value": "4"
      },
      {
        "id": 26,
        "value": "1"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 114,
        "value": "5"
      },
      {
        "id": 94,
        "value": "4"
      },
      {
        "id": 130,
        "value": "6"
      },
      {
        "id": 54,
        "value": "2"
      },
      {
        "id": 90,
        "value": "4"
      },
      {
        "id": 126,
        "value": "6"
      },
      {
        "id": 98,
        "value": "4"
      },
      {
        "id": 118,
        "value": "6"
      },
      {
        "id": 82,
        "value": "4"
      },
      {
        "id": 134,
        "value": "6"
      },
      {
        "id": 50,
        "value": "1"
      },
      {
        "id": 42,
        "value": "1"
      },
      {
        "id": 62,
        "value": "2"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 122,
        "value": "6"
      },
      {
        "id": 18,
        "value": "0"
      }
    ],
    "j": [
      {
        "id": 87,
        "value": "0"
      },
      {
        "id": 3,
        "value": "0"
      },
      {
        "id": 19,
        "value": "4"
      },
      {
        "id": 111,
        "value": "1"
      },
      {
        "id": 135,
        "value": "\u2014"
      },
      {
        "id": 123,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "1"
      },
      {
        "id": 107,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 23,
        "value": "5"
      },
      {
        "id": 95,
        "value": "2"
      },
      {
        "id": 115,
        "value": "\u2014"
      },
      {
        "id": 103,
        "value": "\u2014"
      },
      {
        "id": 43,
        "value": "3"
      },
      {
        "id": 67,
        "value": "\u2014"
      },
      {
        "id": 131,
        "value": "0"
      },
      {
        "id": 51,
        "value": "\u2014"
      },
      {
        "id": 59,
        "value": "4"
      },
      {
        "id": 75,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "0"
      },
      {
        "id": 27,
        "value": "0"
      },
      {
        "id": 31,
        "value": "0"
      },
      {
        "id": 99,
        "value": "\u2014"
      },
      {
        "id": 35,
        "value": "2"
      },
      {
        "id": 39,
        "value": "3"
      },
      {
        "id": 127,
        "value": "0"
      },
      {
        "id": 47,
        "value": "4"
      },
      {
        "id": 7,
        "value": "2"
      },
      {
        "id": 11,
        "value": "3"
      },
      {
        "id": 79,
        "value": "\u2014"
      },
      {
        "id": 83,
        "value": "0"
      },
      {
        "id": 15,
        "value": "4"
      },
      {
        "id": 71,
        "value": "0"
      }
    ],
    "swapped": [
      {
        "id": 4,
        "value": "false"
      },
      {
        "id": 44,
        "value": "true"
      },
      {
        "id": 16,
        "value": "true"
      },
      {
        "id": 72,
        "value": "false"
      },
      {
        "id": 32,
        "value": "true"
      },
      {
        "id": 104,
        "value": "\u2014"
      },
      {
        "id": 108,
        "value": "false"
      },
      {
        "id": 56,
        "value": "false"
      },
      {
        "id": 20,
        "value": "true"
      },
      {
        "id": 88,
        "value": "false"
      },
      {
        "id": 120,
        "value": "\u2014"
      },
      {
        "id": 92,
        "value": "true"
      },
      {
        "id": 52,
        "value": "true"
      },
      {
        "id": 8,
        "value": "true"
      },
      {
        "id": 68,
        "value": "true"
      },
      {
        "id": 84,
        "value": "false"
      },
      {
        "id": 132,
        "value": "true"
      },
      {
        "id": 40,
        "value": "true"
      },
      {
        "id": 128,
        "value": "false"
      },
      {
        "id": 116,
        "value": "true"
      },
      {
        "id": 136,
        "value": "true"
      },
      {
        "id": 100,
        "value": "true"
      },
      {
        "id": 36,
        "value": "true"
      },
      {
        "id": 48,
        "value": "true"
      },
      {
        "id": 60,
        "value": "true"
      },
      {
        "id": 96,
        "value": "true"
      },
      {
        "id": 76,
        "value": "true"
      },
      {
        "id": 12,
        "value": "true"
      },
      {
        "id": 80,
        "value": "false"
      },
      {
        "id": 64,
        "value": "true"
      },
      {
        "id": 28,
        "value": "false"
      },
      {
        "id": 124,
        "value": "false"
      },
      {
        "id": 24,
        "value": "true"
      },
      {
        "id": 112,
        "value": "true"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "n": 8,
      "i": null,
      "j": null,
      "swapped": null,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 2,
      "stepId": "forI",
      "n": 8,
      "i": 0,
      "j": null,
      "swapped": null,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 3,
      "stepId": "setSwapped",
      "n": 8,
      "i": 0,
      "j": null,
      "swapped": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 4,
      "stepId": "markRange",
      "n": 8,
      "i": 0,
      "j": null,
      "swapped": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 5,
      "stepId": "forJ",
      "n": 8,
      "i": 0,
      "j": 0,
      "swapped": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 6,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 0,
      "swapped": false,
      "array": [
        695,
        596,
        145,
        164,
        323,
        54,
        489,
        27
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 7,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 0,
      "j": 0,
      "swapped": false,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 8,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 0,
      "j": 0,
      "swapped": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 9,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 1,
      "swapped": true,
      "array": [
        596,
        695,
        145,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 10,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 0,
      "j": 1,
      "swapped": true,
      "array": [
        596,
        145,
        695,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 11,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 0,
      "j": 1,
      "swapped": true,
      "array": [
        596,
        145,
        695,
        164,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 12,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        596,
        145,
        695,
        164,
        323,
        54,
        489,
        27
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
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        695,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 14,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 0,
      "j": 2,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        695,
        323,
        54,
        489,
        27
      ]
    },
    {
      "step": 15,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        695,
        323,
        54,
        489,
        27
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
      "n": 8,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        695,
        54,
        489,
        27
      ]
    },
    {
      "step": 17,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 0,
      "j": 3,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        695,
        54,
        489,
        27
      ]
    },
    {
      "step": 18,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 4,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        695,
        54,
        489,
        27
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 19,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 0,
      "j": 4,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        695,
        489,
        27
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 20,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 0,
      "j": 4,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        695,
        489,
        27
      ]
    },
    {
      "step": 21,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        695,
        489,
        27
      ]
    },
    {
      "step": 22,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        695,
        27
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 23,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 0,
      "j": 5,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        695,
        27
      ]
    },
    {
      "step": 24,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        695,
        27
      ]
    },
    {
      "step": 25,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 26,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 0,
      "j": 6,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 27,
      "stepId": "markSortedEnd",
      "n": 8,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 28,
      "stepId": "checkEarlyExit",
      "n": 8,
      "i": 0,
      "j": null,
      "swapped": true,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 29,
      "stepId": "forI",
      "n": 8,
      "i": 1,
      "j": null,
      "swapped": null,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 30,
      "stepId": "setSwapped",
      "n": 8,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 31,
      "stepId": "markRange",
      "n": 8,
      "i": 1,
      "j": null,
      "swapped": false,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 32,
      "stepId": "forJ",
      "n": 8,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 33,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        596,
        145,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 34,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 1,
      "j": 0,
      "swapped": false,
      "array": [
        145,
        596,
        164,
        323,
        54,
        489,
        27,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 35,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 1,
      "j": 0,
      "swapped": true,
      "array": [
        145,
        596,
        164,
        323,
        54,
        489,
        27,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 36,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 1,
      "swapped": true,
      "array": [
        145,
        596,
        164,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 37,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 1,
      "j": 1,
      "swapped": true,
      "array": [
        145,
        164,
        596,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 38,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 1,
      "j": 1,
      "swapped": true,
      "array": [
        145,
        164,
        596,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 39,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        145,
        164,
        596,
        323,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 40,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        596,
        54,
        489,
        27,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 41,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 1,
      "j": 2,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        596,
        54,
        489,
        27,
        695
      ]
    },
    {
      "step": 42,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        596,
        54,
        489,
        27,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 43,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        596,
        489,
        27,
        695
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
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 1,
      "j": 3,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        596,
        489,
        27,
        695
      ]
    },
    {
      "step": 45,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        596,
        489,
        27,
        695
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
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        489,
        596,
        27,
        695
      ]
    },
    {
      "step": 47,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 1,
      "j": 4,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        489,
        596,
        27,
        695
      ]
    },
    {
      "step": 48,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        489,
        596,
        27,
        695
      ]
    },
    {
      "step": 49,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 50,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 1,
      "j": 5,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 51,
      "stepId": "markSortedEnd",
      "n": 8,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 52,
      "stepId": "checkEarlyExit",
      "n": 8,
      "i": 1,
      "j": null,
      "swapped": true,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
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
      "stepId": "forI",
      "n": 8,
      "i": 2,
      "j": null,
      "swapped": null,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 54,
      "stepId": "setSwapped",
      "n": 8,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 55,
      "stepId": "markRange",
      "n": 8,
      "i": 2,
      "j": null,
      "swapped": false,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 56,
      "stepId": "forJ",
      "n": 8,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 57,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 0,
      "swapped": false,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 58,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 1,
      "swapped": false,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 59,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 2,
      "swapped": false,
      "array": [
        145,
        164,
        323,
        54,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 60,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 2,
      "j": 2,
      "swapped": false,
      "array": [
        145,
        164,
        54,
        323,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 61,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 2,
      "j": 2,
      "swapped": true,
      "array": [
        145,
        164,
        54,
        323,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 62,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 3,
      "swapped": true,
      "array": [
        145,
        164,
        54,
        323,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 63,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        145,
        164,
        54,
        323,
        489,
        27,
        596,
        695
      ]
    },
    {
      "step": 64,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 65,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 2,
      "j": 4,
      "swapped": true,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 66,
      "stepId": "markSortedEnd",
      "n": 8,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 67,
      "stepId": "checkEarlyExit",
      "n": 8,
      "i": 2,
      "j": null,
      "swapped": true,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 68,
      "stepId": "forI",
      "n": 8,
      "i": 3,
      "j": null,
      "swapped": null,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 69,
      "stepId": "setSwapped",
      "n": 8,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 70,
      "stepId": "markRange",
      "n": 8,
      "i": 3,
      "j": null,
      "swapped": false,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 71,
      "stepId": "forJ",
      "n": 8,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 72,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 0,
      "swapped": false,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 73,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 1,
      "swapped": false,
      "array": [
        145,
        164,
        54,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 74,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 3,
      "j": 1,
      "swapped": false,
      "array": [
        145,
        54,
        164,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 75,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 3,
      "j": 1,
      "swapped": true,
      "array": [
        145,
        54,
        164,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 76,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 2,
      "swapped": true,
      "array": [
        145,
        54,
        164,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 77,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        145,
        54,
        164,
        323,
        27,
        489,
        596,
        695
      ]
    },
    {
      "step": 78,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 79,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 3,
      "j": 3,
      "swapped": true,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 80,
      "stepId": "markSortedEnd",
      "n": 8,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 81,
      "stepId": "checkEarlyExit",
      "n": 8,
      "i": 3,
      "j": null,
      "swapped": true,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 82,
      "stepId": "forI",
      "n": 8,
      "i": 4,
      "j": null,
      "swapped": null,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 83,
      "stepId": "setSwapped",
      "n": 8,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 84,
      "stepId": "markRange",
      "n": 8,
      "i": 4,
      "j": null,
      "swapped": false,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 85,
      "stepId": "forJ",
      "n": 8,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 86,
      "stepId": "compare",
      "n": 8,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        145,
        54,
        164,
        27,
        323,
        489,
        596,
        695
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
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 4,
      "j": 0,
      "swapped": false,
      "array": [
        54,
        145,
        164,
        27,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 88,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 4,
      "j": 0,
      "swapped": true,
      "array": [
        54,
        145,
        164,
        27,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 89,
      "stepId": "compare",
      "n": 8,
      "i": 4,
      "j": 1,
      "swapped": true,
      "array": [
        54,
        145,
        164,
        27,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 90,
      "stepId": "compare",
      "n": 8,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        54,
        145,
        164,
        27,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 91,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 92,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 4,
      "j": 2,
      "swapped": true,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 93,
      "stepId": "markSortedEnd",
      "n": 8,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 94,
      "stepId": "checkEarlyExit",
      "n": 8,
      "i": 4,
      "j": null,
      "swapped": true,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 95,
      "stepId": "forI",
      "n": 8,
      "i": 5,
      "j": null,
      "swapped": null,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
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
      "stepId": "setSwapped",
      "n": 8,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 97,
      "stepId": "markRange",
      "n": 8,
      "i": 5,
      "j": null,
      "swapped": false,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 98,
      "stepId": "forJ",
      "n": 8,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 99,
      "stepId": "compare",
      "n": 8,
      "i": 5,
      "j": 0,
      "swapped": false,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 100,
      "stepId": "compare",
      "n": 8,
      "i": 5,
      "j": 1,
      "swapped": false,
      "array": [
        54,
        145,
        27,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 101,
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 5,
      "j": 1,
      "swapped": false,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 102,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 5,
      "j": 1,
      "swapped": true,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 103,
      "stepId": "markSortedEnd",
      "n": 8,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 104,
      "stepId": "checkEarlyExit",
      "n": 8,
      "i": 5,
      "j": null,
      "swapped": true,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 105,
      "stepId": "forI",
      "n": 8,
      "i": 6,
      "j": null,
      "swapped": null,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
      }
    },
    {
      "step": 106,
      "stepId": "setSwapped",
      "n": 8,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
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
      "stepId": "markRange",
      "n": 8,
      "i": 6,
      "j": null,
      "swapped": false,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 108,
      "stepId": "forJ",
      "n": 8,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 109,
      "stepId": "compare",
      "n": 8,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        54,
        27,
        145,
        164,
        323,
        489,
        596,
        695
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
      "stepId": "swapAdjacent",
      "n": 8,
      "i": 6,
      "j": 0,
      "swapped": false,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 111,
      "stepId": "setSwappedTrue",
      "n": 8,
      "i": 6,
      "j": 0,
      "swapped": true,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
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
      "stepId": "markSortedEnd",
      "n": 8,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ]
    },
    {
      "step": 113,
      "stepId": "checkEarlyExit",
      "n": 8,
      "i": 6,
      "j": null,
      "swapped": true,
      "array": [
        27,
        54,
        145,
        164,
        323,
        489,
        596,
        695
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "swapped": true
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
