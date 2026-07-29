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
    "i",
    "j",
    "minIndex"
  ],
  "blankFields": [
    "stepId",
    "i",
    "j",
    "minIndex"
  ],
  "executorGlobal": "SelectionSortExecutor",
  "pickedSteps": [
    2,
    6,
    8,
    9,
    16,
    17,
    18,
    20,
    25,
    26,
    27,
    33,
    38,
    39,
    42,
    43,
    50,
    51,
    53,
    63,
    71,
    72,
    76,
    80
  ],
  "answers": {
    "2": {
      "stepId": "forI",
      "i": "0",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "6": {
      "stepId": "compare",
      "i": "0",
      "j": "1",
      "minIndex": "0"
    },
    "8": {
      "stepId": "updateMin",
      "i": "0",
      "j": "2",
      "minIndex": "2"
    },
    "9": {
      "stepId": "compare",
      "i": "0",
      "j": "3",
      "minIndex": "2"
    },
    "16": {
      "stepId": "markSortedI",
      "i": "0",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "17": {
      "stepId": "forI",
      "i": "1",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "18": {
      "stepId": "setMin",
      "i": "1",
      "j": "\u2014",
      "minIndex": "1"
    },
    "20": {
      "stepId": "forJ",
      "i": "1",
      "j": "2",
      "minIndex": "1"
    },
    "25": {
      "stepId": "compare",
      "i": "1",
      "j": "4",
      "minIndex": "3"
    },
    "26": {
      "stepId": "compare",
      "i": "1",
      "j": "5",
      "minIndex": "3"
    },
    "27": {
      "stepId": "updateMin",
      "i": "1",
      "j": "5",
      "minIndex": "5"
    },
    "33": {
      "stepId": "forI",
      "i": "2",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "38": {
      "stepId": "updateMin",
      "i": "2",
      "j": "3",
      "minIndex": "3"
    },
    "39": {
      "stepId": "compare",
      "i": "2",
      "j": "4",
      "minIndex": "3"
    },
    "42": {
      "stepId": "compare",
      "i": "2",
      "j": "7",
      "minIndex": "3"
    },
    "43": {
      "stepId": "checkSwap",
      "i": "2",
      "j": "\u2014",
      "minIndex": "3"
    },
    "50": {
      "stepId": "compare",
      "i": "3",
      "j": "4",
      "minIndex": "3"
    },
    "51": {
      "stepId": "compare",
      "i": "3",
      "j": "5",
      "minIndex": "3"
    },
    "53": {
      "stepId": "compare",
      "i": "3",
      "j": "7",
      "minIndex": "3"
    },
    "63": {
      "stepId": "compare",
      "i": "4",
      "j": "7",
      "minIndex": "5"
    },
    "71": {
      "stepId": "compare",
      "i": "5",
      "j": "6",
      "minIndex": "5"
    },
    "72": {
      "stepId": "compare",
      "i": "5",
      "j": "7",
      "minIndex": "5"
    },
    "76": {
      "stepId": "setMin",
      "i": "6",
      "j": "\u2014",
      "minIndex": "6"
    },
    "80": {
      "stepId": "checkSwap",
      "i": "6",
      "j": "\u2014",
      "minIndex": "6"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 21,
        "value": "forI"
      },
      {
        "id": 73,
        "value": "compare"
      },
      {
        "id": 17,
        "value": "markSortedI"
      },
      {
        "id": 53,
        "value": "compare"
      },
      {
        "id": 85,
        "value": "compare"
      },
      {
        "id": 57,
        "value": "compare"
      },
      {
        "id": 93,
        "value": "checkSwap"
      },
      {
        "id": 65,
        "value": "compare"
      },
      {
        "id": 45,
        "value": "forI"
      },
      {
        "id": 9,
        "value": "updateMin"
      },
      {
        "id": 61,
        "value": "checkSwap"
      },
      {
        "id": 49,
        "value": "updateMin"
      },
      {
        "id": 1,
        "value": "forI"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 69,
        "value": "compare"
      },
      {
        "id": 41,
        "value": "updateMin"
      },
      {
        "id": 29,
        "value": "forJ"
      },
      {
        "id": 25,
        "value": "setMin"
      },
      {
        "id": 33,
        "value": "compare"
      },
      {
        "id": 37,
        "value": "compare"
      },
      {
        "id": 81,
        "value": "compare"
      },
      {
        "id": 77,
        "value": "compare"
      },
      {
        "id": 89,
        "value": "setMin"
      },
      {
        "id": 5,
        "value": "compare"
      }
    ],
    "i": [
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 86,
        "value": "5"
      },
      {
        "id": 90,
        "value": "6"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 54,
        "value": "2"
      },
      {
        "id": 42,
        "value": "1"
      },
      {
        "id": 30,
        "value": "1"
      },
      {
        "id": 50,
        "value": "2"
      },
      {
        "id": 62,
        "value": "2"
      },
      {
        "id": 46,
        "value": "2"
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
        "id": 74,
        "value": "3"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 22,
        "value": "1"
      },
      {
        "id": 58,
        "value": "2"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 82,
        "value": "5"
      },
      {
        "id": 78,
        "value": "4"
      },
      {
        "id": 94,
        "value": "6"
      },
      {
        "id": 26,
        "value": "1"
      },
      {
        "id": 34,
        "value": "1"
      },
      {
        "id": 66,
        "value": "3"
      },
      {
        "id": 38,
        "value": "1"
      }
    ],
    "j": [
      {
        "id": 15,
        "value": "3"
      },
      {
        "id": 3,
        "value": "\u2014"
      },
      {
        "id": 59,
        "value": "7"
      },
      {
        "id": 43,
        "value": "5"
      },
      {
        "id": 71,
        "value": "5"
      },
      {
        "id": 23,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "\u2014"
      },
      {
        "id": 87,
        "value": "7"
      },
      {
        "id": 7,
        "value": "1"
      },
      {
        "id": 83,
        "value": "6"
      },
      {
        "id": 47,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 55,
        "value": "4"
      },
      {
        "id": 11,
        "value": "2"
      },
      {
        "id": 31,
        "value": "2"
      },
      {
        "id": 51,
        "value": "3"
      },
      {
        "id": 75,
        "value": "7"
      },
      {
        "id": 19,
        "value": "\u2014"
      },
      {
        "id": 39,
        "value": "5"
      },
      {
        "id": 35,
        "value": "4"
      },
      {
        "id": 67,
        "value": "4"
      },
      {
        "id": 95,
        "value": "\u2014"
      },
      {
        "id": 79,
        "value": "7"
      }
    ],
    "minIndex": [
      {
        "id": 68,
        "value": "3"
      },
      {
        "id": 20,
        "value": "\u2014"
      },
      {
        "id": 4,
        "value": "\u2014"
      },
      {
        "id": 28,
        "value": "1"
      },
      {
        "id": 24,
        "value": "\u2014"
      },
      {
        "id": 52,
        "value": "3"
      },
      {
        "id": 92,
        "value": "6"
      },
      {
        "id": 60,
        "value": "3"
      },
      {
        "id": 56,
        "value": "3"
      },
      {
        "id": 36,
        "value": "3"
      },
      {
        "id": 96,
        "value": "6"
      },
      {
        "id": 72,
        "value": "3"
      },
      {
        "id": 88,
        "value": "5"
      },
      {
        "id": 8,
        "value": "0"
      },
      {
        "id": 48,
        "value": "\u2014"
      },
      {
        "id": 84,
        "value": "5"
      },
      {
        "id": 80,
        "value": "5"
      },
      {
        "id": 32,
        "value": "1"
      },
      {
        "id": 40,
        "value": "3"
      },
      {
        "id": 64,
        "value": "3"
      },
      {
        "id": 12,
        "value": "2"
      },
      {
        "id": 76,
        "value": "3"
      },
      {
        "id": 16,
        "value": "2"
      },
      {
        "id": 44,
        "value": "5"
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
      "minIndex": null,
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
      "stepId": "forI",
      "n": 8,
      "i": 0,
      "j": null,
      "minIndex": null,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 3,
      "stepId": "setMin",
      "n": 8,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "stepId": "markRange",
      "n": 8,
      "i": 0,
      "j": null,
      "minIndex": 0,
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
      "stepId": "forJ",
      "n": 8,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 1,
      "minIndex": 0,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 7,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 2,
      "minIndex": 0,
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
      "stepId": "updateMin",
      "n": 8,
      "i": 0,
      "j": 2,
      "minIndex": 2,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 9,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 3,
      "minIndex": 2,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 10,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 4,
      "minIndex": 2,
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
      "step": 11,
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 5,
      "minIndex": 2,
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
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 6,
      "minIndex": 2,
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
      "stepId": "compare",
      "n": 8,
      "i": 0,
      "j": 7,
      "minIndex": 2,
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
      "stepId": "checkSwap",
      "n": 8,
      "i": 0,
      "j": null,
      "minIndex": 2,
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
      "stepId": "swapMin",
      "n": 8,
      "i": 0,
      "j": null,
      "minIndex": 0,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 16,
      "stepId": "markSortedI",
      "n": 8,
      "i": 0,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 17,
      "stepId": "forI",
      "n": 8,
      "i": 1,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 18,
      "stepId": "setMin",
      "n": 8,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 19,
      "stepId": "markRange",
      "n": 8,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 20,
      "stepId": "forJ",
      "n": 8,
      "i": 1,
      "j": 2,
      "minIndex": 1,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 21,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 2,
      "minIndex": 1,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 22,
      "stepId": "updateMin",
      "n": 8,
      "i": 1,
      "j": 2,
      "minIndex": 2,
      "array": [
        81,
        812,
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
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 3,
      "minIndex": 2,
      "array": [
        81,
        812,
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
      "stepId": "updateMin",
      "n": 8,
      "i": 1,
      "j": 3,
      "minIndex": 3,
      "array": [
        81,
        812,
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
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 4,
      "minIndex": 3,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 26,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 5,
      "minIndex": 3,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 27,
      "stepId": "updateMin",
      "n": 8,
      "i": 1,
      "j": 5,
      "minIndex": 5,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 28,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 6,
      "minIndex": 5,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 29,
      "stepId": "compare",
      "n": 8,
      "i": 1,
      "j": 7,
      "minIndex": 5,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 30,
      "stepId": "checkSwap",
      "n": 8,
      "i": 1,
      "j": null,
      "minIndex": 5,
      "array": [
        81,
        812,
        480,
        337,
        815,
        295,
        855,
        958
      ]
    },
    {
      "step": 31,
      "stepId": "swapMin",
      "n": 8,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 32,
      "stepId": "markSortedI",
      "n": 8,
      "i": 1,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 33,
      "stepId": "forI",
      "n": 8,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 34,
      "stepId": "setMin",
      "n": 8,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 35,
      "stepId": "markRange",
      "n": 8,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 36,
      "stepId": "forJ",
      "n": 8,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 37,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 38,
      "stepId": "updateMin",
      "n": 8,
      "i": 2,
      "j": 3,
      "minIndex": 3,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 39,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 4,
      "minIndex": 3,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 40,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 5,
      "minIndex": 3,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 41,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 6,
      "minIndex": 3,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 42,
      "stepId": "compare",
      "n": 8,
      "i": 2,
      "j": 7,
      "minIndex": 3,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 43,
      "stepId": "checkSwap",
      "n": 8,
      "i": 2,
      "j": null,
      "minIndex": 3,
      "array": [
        81,
        295,
        480,
        337,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 44,
      "stepId": "swapMin",
      "n": 8,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 45,
      "stepId": "markSortedI",
      "n": 8,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 46,
      "stepId": "forI",
      "n": 8,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 47,
      "stepId": "setMin",
      "n": 8,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 48,
      "stepId": "markRange",
      "n": 8,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 49,
      "stepId": "forJ",
      "n": 8,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 50,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 51,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 5,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 52,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 6,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 53,
      "stepId": "compare",
      "n": 8,
      "i": 3,
      "j": 7,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 54,
      "stepId": "checkSwap",
      "n": 8,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 55,
      "stepId": "markSortedI",
      "n": 8,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 56,
      "stepId": "forI",
      "n": 8,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 57,
      "stepId": "setMin",
      "n": 8,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 58,
      "stepId": "markRange",
      "n": 8,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 59,
      "stepId": "forJ",
      "n": 8,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 60,
      "stepId": "compare",
      "n": 8,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 61,
      "stepId": "updateMin",
      "n": 8,
      "i": 4,
      "j": 5,
      "minIndex": 5,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 62,
      "stepId": "compare",
      "n": 8,
      "i": 4,
      "j": 6,
      "minIndex": 5,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 63,
      "stepId": "compare",
      "n": 8,
      "i": 4,
      "j": 7,
      "minIndex": 5,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 64,
      "stepId": "checkSwap",
      "n": 8,
      "i": 4,
      "j": null,
      "minIndex": 5,
      "array": [
        81,
        295,
        337,
        480,
        815,
        812,
        855,
        958
      ]
    },
    {
      "step": 65,
      "stepId": "swapMin",
      "n": 8,
      "i": 4,
      "j": null,
      "minIndex": 4,
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
      "step": 66,
      "stepId": "markSortedI",
      "n": 8,
      "i": 4,
      "j": null,
      "minIndex": null,
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
      "step": 67,
      "stepId": "forI",
      "n": 8,
      "i": 5,
      "j": null,
      "minIndex": null,
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
      "stepId": "setMin",
      "n": 8,
      "i": 5,
      "j": null,
      "minIndex": 5,
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
      "step": 69,
      "stepId": "markRange",
      "n": 8,
      "i": 5,
      "j": null,
      "minIndex": 5,
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
      "stepId": "forJ",
      "n": 8,
      "i": 5,
      "j": 6,
      "minIndex": 5,
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
      "stepId": "compare",
      "n": 8,
      "i": 5,
      "j": 6,
      "minIndex": 5,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 72,
      "stepId": "compare",
      "n": 8,
      "i": 5,
      "j": 7,
      "minIndex": 5,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 73,
      "stepId": "checkSwap",
      "n": 8,
      "i": 5,
      "j": null,
      "minIndex": 5,
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
      "step": 74,
      "stepId": "markSortedI",
      "n": 8,
      "i": 5,
      "j": null,
      "minIndex": null,
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
      "step": 75,
      "stepId": "forI",
      "n": 8,
      "i": 6,
      "j": null,
      "minIndex": null,
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
      "step": 76,
      "stepId": "setMin",
      "n": 8,
      "i": 6,
      "j": null,
      "minIndex": 6,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 77,
      "stepId": "markRange",
      "n": 8,
      "i": 6,
      "j": null,
      "minIndex": 6,
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
      "stepId": "forJ",
      "n": 8,
      "i": 6,
      "j": 7,
      "minIndex": 6,
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
      "step": 79,
      "stepId": "compare",
      "n": 8,
      "i": 6,
      "j": 7,
      "minIndex": 6,
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
      "stepId": "checkSwap",
      "n": 8,
      "i": 6,
      "j": null,
      "minIndex": 6,
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
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 81,
      "stepId": "markSortedI",
      "n": 8,
      "i": 6,
      "j": null,
      "minIndex": null,
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
