/**
 * Trace-fill puzzle for AVL insertion.
 * Students drag Line / variable chips into blank rows where values change.
 * Execution gates on each blank row until that row is fully correct.
 */

window.TracePuzzle = (function () {
  const INSTANCE = {
  "sequence": [
    50,
    40,
    30,
    20,
    10
  ],
  "height": 4,
  "caseNum": 1,
  "caseId": "left_unbalanced",
  "varFields": [
    "key",
    "node",
    "bf",
    "case",
    "new_root",
    "temp",
    "height_left",
    "height_right",
    "root"
  ],
  "blankFields": [
    "stepId"
  ],
  "pickedSteps": [
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    68,
    72,
    83,
    95,
    119,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    143,
    148
  ],
  "answers": {
    "50": {
      "stepId": "caseLL"
    },
    "51": {
      "stepId": "rotateRightLL"
    },
    "52": {
      "stepId": "rotR_y"
    },
    "53": {
      "stepId": "rotR_T2"
    },
    "54": {
      "stepId": "rotR_yRight"
    },
    "55": {
      "stepId": "rotR_zLeft"
    },
    "56": {
      "stepId": "rotR_updZ"
    },
    "57": {
      "stepId": "uhHl"
    },
    "58": {
      "stepId": "uhHr"
    },
    "59": {
      "stepId": "uhSet"
    },
    "60": {
      "stepId": "rotR_updY"
    },
    "61": {
      "stepId": "uhHl"
    },
    "62": {
      "stepId": "uhHr"
    },
    "63": {
      "stepId": "uhSet"
    },
    "64": {
      "stepId": "rotR_return"
    },
    "65": {
      "stepId": "mainLoop"
    },
    "68": {
      "stepId": "checkLess"
    },
    "72": {
      "stepId": "goLeft"
    },
    "83": {
      "stepId": "caseLR"
    },
    "95": {
      "stepId": "caseRL"
    },
    "119": {
      "stepId": "caseRL"
    },
    "127": {
      "stepId": "caseLL"
    },
    "128": {
      "stepId": "rotateRightLL"
    },
    "129": {
      "stepId": "rotR_y"
    },
    "130": {
      "stepId": "rotR_T2"
    },
    "131": {
      "stepId": "rotR_yRight"
    },
    "132": {
      "stepId": "rotR_zLeft"
    },
    "133": {
      "stepId": "rotR_updZ"
    },
    "134": {
      "stepId": "uhHl"
    },
    "135": {
      "stepId": "uhHr"
    },
    "136": {
      "stepId": "uhSet"
    },
    "137": {
      "stepId": "rotR_updY"
    },
    "138": {
      "stepId": "uhHl"
    },
    "139": {
      "stepId": "uhHr"
    },
    "140": {
      "stepId": "uhSet"
    },
    "141": {
      "stepId": "rotR_return"
    },
    "143": {
      "stepId": "uhHl"
    },
    "148": {
      "stepId": "caseLL"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 38,
        "value": "caseLL"
      },
      {
        "id": 37,
        "value": "uhHl"
      },
      {
        "id": 33,
        "value": "uhHl"
      },
      {
        "id": 32,
        "value": "rotR_updY"
      },
      {
        "id": 16,
        "value": "mainLoop"
      },
      {
        "id": 24,
        "value": "rotR_y"
      },
      {
        "id": 5,
        "value": "rotR_yRight"
      },
      {
        "id": 18,
        "value": "goLeft"
      },
      {
        "id": 3,
        "value": "rotR_y"
      },
      {
        "id": 14,
        "value": "uhSet"
      },
      {
        "id": 7,
        "value": "rotR_updZ"
      },
      {
        "id": 28,
        "value": "rotR_updZ"
      },
      {
        "id": 34,
        "value": "uhHr"
      },
      {
        "id": 10,
        "value": "uhSet"
      },
      {
        "id": 35,
        "value": "uhSet"
      },
      {
        "id": 2,
        "value": "rotateRightLL"
      },
      {
        "id": 29,
        "value": "uhHl"
      },
      {
        "id": 1,
        "value": "caseLL"
      },
      {
        "id": 21,
        "value": "caseRL"
      },
      {
        "id": 9,
        "value": "uhHr"
      },
      {
        "id": 25,
        "value": "rotR_T2"
      },
      {
        "id": 15,
        "value": "rotR_return"
      },
      {
        "id": 6,
        "value": "rotR_zLeft"
      },
      {
        "id": 30,
        "value": "uhHr"
      },
      {
        "id": 13,
        "value": "uhHr"
      },
      {
        "id": 4,
        "value": "rotR_T2"
      },
      {
        "id": 36,
        "value": "rotR_return"
      },
      {
        "id": 12,
        "value": "uhHl"
      },
      {
        "id": 23,
        "value": "rotateRightLL"
      },
      {
        "id": 11,
        "value": "rotR_updY"
      },
      {
        "id": 27,
        "value": "rotR_zLeft"
      },
      {
        "id": 26,
        "value": "rotR_yRight"
      },
      {
        "id": 22,
        "value": "caseLL"
      },
      {
        "id": 31,
        "value": "uhSet"
      },
      {
        "id": 20,
        "value": "caseRL"
      },
      {
        "id": 17,
        "value": "checkLess"
      },
      {
        "id": 19,
        "value": "caseLR"
      },
      {
        "id": 8,
        "value": "uhHl"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainLoop",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": null
    },
    {
      "step": 2,
      "stepId": "callInsert",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": null
    },
    {
      "step": 3,
      "stepId": "checkNull",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": null
    },
    {
      "step": 4,
      "stepId": "returnNew",
      "key": 50,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 5,
      "stepId": "mainLoop",
      "key": 40,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 6,
      "stepId": "callInsert",
      "key": 40,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 7,
      "stepId": "checkNull",
      "key": 40,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 8,
      "stepId": "checkLess",
      "key": 40,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 9,
      "stepId": "goLeft",
      "key": 40,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 10,
      "stepId": "checkNull",
      "key": 40,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 11,
      "stepId": "returnNew",
      "key": 40,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 12,
      "stepId": "updateHeight",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 13,
      "stepId": "uhHl",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 14,
      "stepId": "uhHr",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 15,
      "stepId": "uhSet",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 16,
      "stepId": "calcBf",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 17,
      "stepId": "bfReturn",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 18,
      "stepId": "caseLL",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 19,
      "stepId": "caseRR",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 20,
      "stepId": "caseLR",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 21,
      "stepId": "caseRL",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 22,
      "stepId": "returnNode",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 23,
      "stepId": "mainLoop",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 24,
      "stepId": "callInsert",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 25,
      "stepId": "checkNull",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 26,
      "stepId": "checkLess",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 27,
      "stepId": "goLeft",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 28,
      "stepId": "checkNull",
      "key": 30,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 29,
      "stepId": "checkLess",
      "key": 30,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 30,
      "stepId": "goLeft",
      "key": 30,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 31,
      "stepId": "checkNull",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 32,
      "stepId": "returnNew",
      "key": 30,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 33,
      "stepId": "updateHeight",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 34,
      "stepId": "uhHl",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 35,
      "stepId": "uhHr",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 36,
      "stepId": "uhSet",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 37,
      "stepId": "calcBf",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 38,
      "stepId": "bfReturn",
      "key": 30,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 39,
      "stepId": "caseLL",
      "key": 30,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 40,
      "stepId": "caseRR",
      "key": 30,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 41,
      "stepId": "caseLR",
      "key": 30,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 42,
      "stepId": "caseRL",
      "key": 30,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 43,
      "stepId": "returnNode",
      "key": 30,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 44,
      "stepId": "updateHeight",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 45,
      "stepId": "uhHl",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 46,
      "stepId": "uhHr",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 47,
      "stepId": "uhSet",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 48,
      "stepId": "calcBf",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 49,
      "stepId": "bfReturn",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 50,
      "stepId": "caseLL",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 51,
      "stepId": "rotateRightLL",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 52,
      "stepId": "rotR_y",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": 40,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 53,
      "stepId": "rotR_T2",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": 40,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 54,
      "stepId": "rotR_yRight",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": 40,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 55,
      "stepId": "rotR_zLeft",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": 40,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 56,
      "stepId": "rotR_updZ",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": 40,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 57,
      "stepId": "uhHl",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": 40,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 58,
      "stepId": "uhHr",
      "key": 30,
      "node": 50,
      "bf": 2,
      "case": "LL",
      "new_root": 40,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 59,
      "stepId": "uhSet",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 40,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 60,
      "stepId": "rotR_updY",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 40,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 61,
      "stepId": "uhHl",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": "LL",
      "new_root": 40,
      "height_left": 0,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 62,
      "stepId": "uhHr",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": "LL",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 63,
      "stepId": "uhSet",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": "LL",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 64,
      "stepId": "rotR_return",
      "key": 30,
      "node": 40,
      "bf": 0,
      "case": "LL",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 65,
      "stepId": "mainLoop",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 66,
      "stepId": "callInsert",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 67,
      "stepId": "checkNull",
      "key": 20,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 68,
      "stepId": "checkLess",
      "key": 20,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 69,
      "stepId": "goLeft",
      "key": 20,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 70,
      "stepId": "checkNull",
      "key": 20,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 71,
      "stepId": "checkLess",
      "key": 20,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 72,
      "stepId": "goLeft",
      "key": 20,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 73,
      "stepId": "checkNull",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 74,
      "stepId": "returnNew",
      "key": 20,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 75,
      "stepId": "updateHeight",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 76,
      "stepId": "uhHl",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 40
    },
    {
      "step": 77,
      "stepId": "uhHr",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 78,
      "stepId": "uhSet",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 79,
      "stepId": "calcBf",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 80,
      "stepId": "bfReturn",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 81,
      "stepId": "caseLL",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 82,
      "stepId": "caseRR",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 83,
      "stepId": "caseLR",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 84,
      "stepId": "caseRL",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 85,
      "stepId": "returnNode",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 86,
      "stepId": "updateHeight",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 87,
      "stepId": "uhHl",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 40
    },
    {
      "step": 88,
      "stepId": "uhHr",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 89,
      "stepId": "uhSet",
      "key": 20,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 90,
      "stepId": "calcBf",
      "key": 20,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 91,
      "stepId": "bfReturn",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 92,
      "stepId": "caseLL",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 93,
      "stepId": "caseRR",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 94,
      "stepId": "caseLR",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 95,
      "stepId": "caseRL",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 96,
      "stepId": "returnNode",
      "key": 20,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 97,
      "stepId": "mainLoop",
      "key": 10,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 98,
      "stepId": "callInsert",
      "key": 10,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 99,
      "stepId": "checkNull",
      "key": 10,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 100,
      "stepId": "checkLess",
      "key": 10,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 101,
      "stepId": "goLeft",
      "key": 10,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 102,
      "stepId": "checkNull",
      "key": 10,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 103,
      "stepId": "checkLess",
      "key": 10,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 104,
      "stepId": "goLeft",
      "key": 10,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 105,
      "stepId": "checkNull",
      "key": 10,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 106,
      "stepId": "checkLess",
      "key": 10,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 107,
      "stepId": "goLeft",
      "key": 10,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 108,
      "stepId": "checkNull",
      "key": 10,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 109,
      "stepId": "returnNew",
      "key": 10,
      "node": 10,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 110,
      "stepId": "updateHeight",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 111,
      "stepId": "uhHl",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 40
    },
    {
      "step": 112,
      "stepId": "uhHr",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 113,
      "stepId": "uhSet",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 114,
      "stepId": "calcBf",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 115,
      "stepId": "bfReturn",
      "key": 10,
      "node": 20,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 116,
      "stepId": "caseLL",
      "key": 10,
      "node": 20,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 117,
      "stepId": "caseRR",
      "key": 10,
      "node": 20,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 118,
      "stepId": "caseLR",
      "key": 10,
      "node": 20,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 119,
      "stepId": "caseRL",
      "key": 10,
      "node": 20,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 120,
      "stepId": "returnNode",
      "key": 10,
      "node": 20,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 121,
      "stepId": "updateHeight",
      "key": 10,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 122,
      "stepId": "uhHl",
      "key": 10,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 40
    },
    {
      "step": 123,
      "stepId": "uhHr",
      "key": 10,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 124,
      "stepId": "uhSet",
      "key": 10,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 125,
      "stepId": "calcBf",
      "key": 10,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 126,
      "stepId": "bfReturn",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 40
    },
    {
      "step": 127,
      "stepId": "caseLL",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 128,
      "stepId": "rotateRightLL",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 129,
      "stepId": "rotR_y",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": 20,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 130,
      "stepId": "rotR_T2",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": 20,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 131,
      "stepId": "rotR_yRight",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": 20,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 132,
      "stepId": "rotR_zLeft",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": 20,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 133,
      "stepId": "rotR_updZ",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": 20,
      "height_left": 1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 134,
      "stepId": "uhHl",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": 20,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 135,
      "stepId": "uhHr",
      "key": 10,
      "node": 30,
      "bf": 2,
      "case": "LL",
      "new_root": 20,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 136,
      "stepId": "uhSet",
      "key": 10,
      "node": 30,
      "bf": 0,
      "case": "LL",
      "new_root": 20,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 137,
      "stepId": "rotR_updY",
      "key": 10,
      "node": 30,
      "bf": 0,
      "case": "LL",
      "new_root": 20,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 138,
      "stepId": "uhHl",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": "LL",
      "new_root": 20,
      "height_left": 0,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 139,
      "stepId": "uhHr",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": "LL",
      "new_root": 20,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 140,
      "stepId": "uhSet",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": "LL",
      "new_root": 20,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 141,
      "stepId": "rotR_return",
      "key": 10,
      "node": 20,
      "bf": 0,
      "case": "LL",
      "new_root": 20,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 142,
      "stepId": "updateHeight",
      "key": 10,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 143,
      "stepId": "uhHl",
      "key": 10,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 144,
      "stepId": "uhHr",
      "key": 10,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 145,
      "stepId": "uhSet",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 146,
      "stepId": "calcBf",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 147,
      "stepId": "bfReturn",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 148,
      "stepId": "caseLL",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 149,
      "stepId": "caseRR",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 150,
      "stepId": "caseLR",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 151,
      "stepId": "caseRL",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 152,
      "stepId": "returnNode",
      "key": 10,
      "node": 40,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    }
  ],
  "meta": {
    "totalRows": 152,
    "blankRows": 38,
    "skipFirstRatio": 0.3,
    "pickRatio": 0.25,
    "changingFields": [
      "node",
      "bf",
      "root",
      "key",
      "height_left",
      "height_right",
      "case",
      "new_root",
      "temp"
    ]
  }
};

  let filled = {};
  let availablePieces = {};
  let activeSection = "stepId";
  let gateResolve = null;
  let gateReject = null;
  let pendingGateStep = null;
  let panelOpen = false;
  let dragPayload = null;
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

  const DISPLAY_FIELDS = INSTANCE.blankFields || ["stepId"];

  function t(key) {
    return window.I18n ? window.I18n.t(key) : key;
  }

  function stepLabel(stepId) {
    return window.I18n ? window.I18n.stepLabel(stepId) : stepId;
  }

  function nullLabel() {
    return window.I18n ? window.I18n.t("labelNull") : "null";
  }

  function formatBf(bf) {
    if (bf == null || bf === "" || bf === "—") return "—";
    const n = Number(bf);
    if (!Number.isFinite(n)) return String(bf);
    if (n > 0) return "+" + n;
    return String(n);
  }

  function displayFieldValue(field, value) {
    if (value == null || value === "") return "—";
    if (field === "stepId") return stepLabel(value);
    if (field === "bf") return formatBf(value);
    if (field === "new_root" && (value === "—" || value === "null")) return "—";
    if (
      (field === "node" || field === "root") &&
      (value === "null" || value === null)
    ) {
      return nullLabel();
    }
    return String(value);
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

  function rowDisplayValue(row, field) {
    if (field === "stepId") return stepLabel(row.stepId);
    if (field === "bf") return formatBf(row.bf);
    if (field === "temp") {
      if (row.temp === undefined) return "—";
      if (row.temp == null) return nullLabel();
      return String(row.temp);
    }
    if (field === "new_root") {
      return row.new_root == null ? "—" : String(row.new_root);
    }
    if (field === "node" || field === "root") {
      if (row[field] == null) return nullLabel();
      return String(row[field]);
    }
    if (field === "case" || field === "height_left" || field === "height_right") {
      return row[field] == null ? "—" : String(row[field]);
    }
    if (field === "key") return row.key == null ? "—" : String(row.key);
    return row[field] == null ? "—" : String(row[field]);
  }

  function renderTraceTable() {
    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (!body) return;

    if (empty) empty.classList.add("hidden");
    body.innerHTML = "";

    INSTANCE.rows.forEach((row) => {
      const tr = document.createElement("tr");
      tr.dataset.stepId = row.stepId;
      tr.dataset.puzzleStep = String(row.step);
      if (row.missing) tr.classList.add("puzzle-missing");

      const cellSpecs = [
        { text: String(row.step), field: null },
        {
          text: row.missing && row.missing.stepId ? null : stepLabel(row.stepId),
          field: row.missing && row.missing.stepId ? "stepId" : null,
        },
      ];

      for (const field of INSTANCE.varFields) {
        const isMissing = row.missing && row.missing[field];
        cellSpecs.push({
          text: isMissing ? null : rowDisplayValue(row, field),
          field: isMissing ? field : null,
        });
      }

      cellSpecs.forEach((spec) => {
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
    if (window.AvlInsertExecutor && window.AvlInsertExecutor.setButtons) {
      window.AvlInsertExecutor.setButtons();
    }
  }

  function availableSections() {
    return DISPLAY_FIELDS.filter(
      (f) => INSTANCE.pieces[f] && INSTANCE.pieces[f].length
    );
  }

  function sectionLabelKey(field) {
    if (field === "stepId") return "puzzleSectionStepId";
    if (field === "new_root") return "puzzleSectionNewRoot";
    if (field === "height_left") return "puzzleSectionHeightLeft";
    if (field === "height_right") return "puzzleSectionHeightRight";
    return "puzzleSection_" + field;
  }

  function refreshLanguage() {
    renderChips();
    refreshSectionTabs();
    refreshFilledCells();

    const body = document.getElementById("trace-body");
    if (body && window.I18n) {
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
        // Refresh null labels in fixed cells
        const row = INSTANCE.rows.find(
          (r) => r.step === Number(tr.dataset.puzzleStep)
        );
        if (!row) return;
        INSTANCE.varFields.forEach((field, idx) => {
          const td = cells[idx + 2];
          if (!td || td.dataset.dropField) return;
          td.textContent = rowDisplayValue(row, field);
        });
      });
    }

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
    if (banner && !banner.hidden) banner.textContent = t("puzzleBanner");
    updateStats();
  }

  function refreshSectionTabs() {
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
      const key = sectionLabelKey(section);
      const label = t(key);
      btn.textContent = label && label !== key ? label : section === "stepId" ? "Line" : section;
    });
  }

  function shuffleList(list) {
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
    shuffleList(pieces);
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
      /* keep */
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
    if (previous != null && previous !== "") returnPiece(field, previous);
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
    if (previous != null && previous !== "") returnPiece(field, previous);
    delete filled[fromStep][field];
    if (Object.keys(filled[fromStep]).length === 0) delete filled[fromStep];
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
    if (Object.keys(filled[stepNumber]).length === 0) delete filled[stepNumber];
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
      const x = Math.min(window.innerWidth - 80, Math.max(8, e.clientX - ox));
      const y = Math.min(window.innerHeight - 80, Math.max(8, e.clientY - oy));
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
    if (openBtn) openBtn.addEventListener("click", () => togglePanel());
    const closeBtn = document.getElementById("btn-puzzle-close");
    if (closeBtn) closeBtn.addEventListener("click", () => closePanel());
    const resetBtn = document.getElementById("btn-puzzle-reset-pieces");
    if (resetBtn) resetBtn.addEventListener("click", () => clearFills());
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
      const tracePanel = document.querySelector(".trace-panel");
      if (tracePanel) tracePanel.classList.toggle("is-puzzle-complete", taskComplete);
      renderTraceTable();
      refreshSectionTabs();
      renderChips();
      closePanel();
      updateStats();
      if (taskComplete) {
        setStatus(t("puzzleComplete"), "ok");
      }
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
