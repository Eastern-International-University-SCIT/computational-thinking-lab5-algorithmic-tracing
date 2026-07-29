/**
 * Trace-fill puzzle for AVL insertion.
 * Students drag Line / variable chips into blank rows where values change.
 * Execution gates on each blank row until that row is fully correct.
 */

window.TracePuzzle = (function () {
  const INSTANCE = {
  "sequence": [
    10,
    20,
    30,
    40,
    50,
    60,
    70
  ],
  "height": 6,
  "caseNum": 2,
  "caseId": "right_unbalanced",
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
    92,
    93,
    94,
    99,
    100,
    101,
    109,
    111,
    127,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    155,
    158,
    169,
    174,
    178,
    180,
    189,
    190,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    235,
    236,
    248,
    251,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    267,
    268,
    269,
    270,
    271,
    275,
    276
  ],
  "answers": {
    "92": {
      "stepId": "updateHeight"
    },
    "93": {
      "stepId": "uhHl"
    },
    "94": {
      "stepId": "uhHr"
    },
    "99": {
      "stepId": "caseRR"
    },
    "100": {
      "stepId": "caseLR"
    },
    "101": {
      "stepId": "caseRL"
    },
    "109": {
      "stepId": "checkNull"
    },
    "111": {
      "stepId": "checkGreater"
    },
    "127": {
      "stepId": "caseLR"
    },
    "136": {
      "stepId": "caseLL"
    },
    "137": {
      "stepId": "caseRR"
    },
    "138": {
      "stepId": "rotateLeftRR"
    },
    "139": {
      "stepId": "rotL_y"
    },
    "140": {
      "stepId": "rotL_T2"
    },
    "141": {
      "stepId": "rotL_yLeft"
    },
    "142": {
      "stepId": "rotL_zRight"
    },
    "143": {
      "stepId": "rotL_updZ"
    },
    "144": {
      "stepId": "uhHl"
    },
    "145": {
      "stepId": "uhHr"
    },
    "146": {
      "stepId": "uhSet"
    },
    "147": {
      "stepId": "rotL_updY"
    },
    "148": {
      "stepId": "uhHl"
    },
    "149": {
      "stepId": "uhHr"
    },
    "150": {
      "stepId": "uhSet"
    },
    "151": {
      "stepId": "rotL_return"
    },
    "155": {
      "stepId": "uhSet"
    },
    "158": {
      "stepId": "caseLL"
    },
    "169": {
      "stepId": "checkNull"
    },
    "174": {
      "stepId": "checkLess"
    },
    "178": {
      "stepId": "returnNew"
    },
    "180": {
      "stepId": "uhHl"
    },
    "189": {
      "stepId": "returnNode"
    },
    "190": {
      "stepId": "updateHeight"
    },
    "208": {
      "stepId": "caseRR"
    },
    "209": {
      "stepId": "rotateLeftRR"
    },
    "210": {
      "stepId": "rotL_y"
    },
    "211": {
      "stepId": "rotL_T2"
    },
    "212": {
      "stepId": "rotL_yLeft"
    },
    "213": {
      "stepId": "rotL_zRight"
    },
    "214": {
      "stepId": "rotL_updZ"
    },
    "215": {
      "stepId": "uhHl"
    },
    "216": {
      "stepId": "uhHr"
    },
    "217": {
      "stepId": "uhSet"
    },
    "218": {
      "stepId": "rotL_updY"
    },
    "219": {
      "stepId": "uhHl"
    },
    "220": {
      "stepId": "uhHr"
    },
    "221": {
      "stepId": "uhSet"
    },
    "222": {
      "stepId": "rotL_return"
    },
    "235": {
      "stepId": "checkGreater"
    },
    "236": {
      "stepId": "goRight"
    },
    "248": {
      "stepId": "caseRL"
    },
    "251": {
      "stepId": "uhHl"
    },
    "255": {
      "stepId": "bfReturn"
    },
    "256": {
      "stepId": "caseLL"
    },
    "257": {
      "stepId": "caseRR"
    },
    "258": {
      "stepId": "rotateLeftRR"
    },
    "259": {
      "stepId": "rotL_y"
    },
    "260": {
      "stepId": "rotL_T2"
    },
    "261": {
      "stepId": "rotL_yLeft"
    },
    "262": {
      "stepId": "rotL_zRight"
    },
    "263": {
      "stepId": "rotL_updZ"
    },
    "264": {
      "stepId": "uhHl"
    },
    "265": {
      "stepId": "uhHr"
    },
    "266": {
      "stepId": "uhSet"
    },
    "267": {
      "stepId": "rotL_updY"
    },
    "268": {
      "stepId": "uhHl"
    },
    "269": {
      "stepId": "uhHr"
    },
    "270": {
      "stepId": "uhSet"
    },
    "271": {
      "stepId": "rotL_return"
    },
    "275": {
      "stepId": "uhSet"
    },
    "276": {
      "stepId": "calcBf"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 69,
        "value": "rotL_return"
      },
      {
        "id": 49,
        "value": "checkGreater"
      },
      {
        "id": 68,
        "value": "uhSet"
      },
      {
        "id": 66,
        "value": "uhHl"
      },
      {
        "id": 17,
        "value": "rotL_updZ"
      },
      {
        "id": 27,
        "value": "caseLL"
      },
      {
        "id": 53,
        "value": "bfReturn"
      },
      {
        "id": 67,
        "value": "uhHr"
      },
      {
        "id": 3,
        "value": "uhHr"
      },
      {
        "id": 61,
        "value": "rotL_updZ"
      },
      {
        "id": 51,
        "value": "caseRL"
      },
      {
        "id": 26,
        "value": "uhSet"
      },
      {
        "id": 37,
        "value": "rotL_T2"
      },
      {
        "id": 39,
        "value": "rotL_zRight"
      },
      {
        "id": 18,
        "value": "uhHl"
      },
      {
        "id": 34,
        "value": "caseRR"
      },
      {
        "id": 32,
        "value": "returnNode"
      },
      {
        "id": 13,
        "value": "rotL_y"
      },
      {
        "id": 52,
        "value": "uhHl"
      },
      {
        "id": 44,
        "value": "rotL_updY"
      },
      {
        "id": 59,
        "value": "rotL_yLeft"
      },
      {
        "id": 60,
        "value": "rotL_zRight"
      },
      {
        "id": 14,
        "value": "rotL_T2"
      },
      {
        "id": 64,
        "value": "uhSet"
      },
      {
        "id": 33,
        "value": "updateHeight"
      },
      {
        "id": 21,
        "value": "rotL_updY"
      },
      {
        "id": 11,
        "value": "caseRR"
      },
      {
        "id": 10,
        "value": "caseLL"
      },
      {
        "id": 55,
        "value": "caseRR"
      },
      {
        "id": 15,
        "value": "rotL_yLeft"
      },
      {
        "id": 20,
        "value": "uhSet"
      },
      {
        "id": 63,
        "value": "uhHr"
      },
      {
        "id": 58,
        "value": "rotL_T2"
      },
      {
        "id": 50,
        "value": "goRight"
      },
      {
        "id": 23,
        "value": "uhHr"
      },
      {
        "id": 4,
        "value": "caseRR"
      },
      {
        "id": 25,
        "value": "rotL_return"
      },
      {
        "id": 31,
        "value": "uhHl"
      },
      {
        "id": 48,
        "value": "rotL_return"
      },
      {
        "id": 2,
        "value": "uhHl"
      },
      {
        "id": 6,
        "value": "caseRL"
      },
      {
        "id": 41,
        "value": "uhHl"
      },
      {
        "id": 5,
        "value": "caseLR"
      },
      {
        "id": 35,
        "value": "rotateLeftRR"
      },
      {
        "id": 70,
        "value": "uhSet"
      },
      {
        "id": 1,
        "value": "updateHeight"
      },
      {
        "id": 57,
        "value": "rotL_y"
      },
      {
        "id": 24,
        "value": "uhSet"
      },
      {
        "id": 19,
        "value": "uhHr"
      },
      {
        "id": 28,
        "value": "checkNull"
      },
      {
        "id": 38,
        "value": "rotL_yLeft"
      },
      {
        "id": 47,
        "value": "uhSet"
      },
      {
        "id": 45,
        "value": "uhHl"
      },
      {
        "id": 62,
        "value": "uhHl"
      },
      {
        "id": 16,
        "value": "rotL_zRight"
      },
      {
        "id": 29,
        "value": "checkLess"
      },
      {
        "id": 43,
        "value": "uhSet"
      },
      {
        "id": 22,
        "value": "uhHl"
      },
      {
        "id": 12,
        "value": "rotateLeftRR"
      },
      {
        "id": 36,
        "value": "rotL_y"
      },
      {
        "id": 71,
        "value": "calcBf"
      },
      {
        "id": 7,
        "value": "checkNull"
      },
      {
        "id": 65,
        "value": "rotL_updY"
      },
      {
        "id": 56,
        "value": "rotateLeftRR"
      },
      {
        "id": 30,
        "value": "returnNew"
      },
      {
        "id": 40,
        "value": "rotL_updZ"
      },
      {
        "id": 9,
        "value": "caseLR"
      },
      {
        "id": 46,
        "value": "uhHr"
      },
      {
        "id": 54,
        "value": "caseLL"
      },
      {
        "id": 8,
        "value": "checkGreater"
      },
      {
        "id": 42,
        "value": "uhHr"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainLoop",
      "key": 10,
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
      "key": 10,
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
      "key": 10,
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
      "key": 10,
      "node": 10,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 5,
      "stepId": "mainLoop",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 6,
      "stepId": "callInsert",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 7,
      "stepId": "checkNull",
      "key": 20,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 8,
      "stepId": "checkLess",
      "key": 20,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 9,
      "stepId": "checkGreater",
      "key": 20,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 10,
      "stepId": "goRight",
      "key": 20,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 11,
      "stepId": "checkNull",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 12,
      "stepId": "returnNew",
      "key": 20,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 13,
      "stepId": "updateHeight",
      "key": 20,
      "node": 10,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 14,
      "stepId": "uhHl",
      "key": 20,
      "node": 10,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 10
    },
    {
      "step": 15,
      "stepId": "uhHr",
      "key": 20,
      "node": 10,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 16,
      "stepId": "uhSet",
      "key": 20,
      "node": 10,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 17,
      "stepId": "calcBf",
      "key": 20,
      "node": 10,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 18,
      "stepId": "bfReturn",
      "key": 20,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 19,
      "stepId": "caseLL",
      "key": 20,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 20,
      "stepId": "caseRR",
      "key": 20,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 21,
      "stepId": "caseLR",
      "key": 20,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 22,
      "stepId": "caseRL",
      "key": 20,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 23,
      "stepId": "returnNode",
      "key": 20,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 24,
      "stepId": "mainLoop",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 25,
      "stepId": "callInsert",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 26,
      "stepId": "checkNull",
      "key": 30,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 27,
      "stepId": "checkLess",
      "key": 30,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 28,
      "stepId": "checkGreater",
      "key": 30,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 29,
      "stepId": "goRight",
      "key": 30,
      "node": 10,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 30,
      "stepId": "checkNull",
      "key": 30,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 31,
      "stepId": "checkLess",
      "key": 30,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 32,
      "stepId": "checkGreater",
      "key": 30,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 33,
      "stepId": "goRight",
      "key": 30,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 34,
      "stepId": "checkNull",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 35,
      "stepId": "returnNew",
      "key": 30,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 36,
      "stepId": "updateHeight",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 37,
      "stepId": "uhHl",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 10
    },
    {
      "step": 38,
      "stepId": "uhHr",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 39,
      "stepId": "uhSet",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 40,
      "stepId": "calcBf",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 41,
      "stepId": "bfReturn",
      "key": 30,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 42,
      "stepId": "caseLL",
      "key": 30,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 43,
      "stepId": "caseRR",
      "key": 30,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 44,
      "stepId": "caseLR",
      "key": 30,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 45,
      "stepId": "caseRL",
      "key": 30,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 10
    },
    {
      "step": 46,
      "stepId": "returnNode",
      "key": 30,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 47,
      "stepId": "updateHeight",
      "key": 30,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 10
    },
    {
      "step": 48,
      "stepId": "uhHl",
      "key": 30,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 10
    },
    {
      "step": 49,
      "stepId": "uhHr",
      "key": 30,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 50,
      "stepId": "uhSet",
      "key": 30,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 51,
      "stepId": "calcBf",
      "key": 30,
      "node": 10,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 52,
      "stepId": "bfReturn",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 53,
      "stepId": "caseLL",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 54,
      "stepId": "caseRR",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 55,
      "stepId": "rotateLeftRR",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 56,
      "stepId": "rotL_y",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": 1,
      "root": 10
    },
    {
      "step": 57,
      "stepId": "rotL_T2",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": 1,
      "root": 10,
      "temp": null
    },
    {
      "step": 58,
      "stepId": "rotL_yLeft",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null
    },
    {
      "step": 59,
      "stepId": "rotL_zRight",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null
    },
    {
      "step": 60,
      "stepId": "rotL_updZ",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null
    },
    {
      "step": 61,
      "stepId": "uhHl",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null
    },
    {
      "step": 62,
      "stepId": "uhHr",
      "key": 30,
      "node": 10,
      "bf": -2,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": -1,
      "root": 20,
      "temp": null
    },
    {
      "step": 63,
      "stepId": "uhSet",
      "key": 30,
      "node": 10,
      "bf": 0,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": -1,
      "root": 20,
      "temp": null
    },
    {
      "step": 64,
      "stepId": "rotL_updY",
      "key": 30,
      "node": 10,
      "bf": 0,
      "case": "RR",
      "new_root": 20,
      "height_left": -1,
      "height_right": -1,
      "root": 20,
      "temp": null
    },
    {
      "step": 65,
      "stepId": "uhHl",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": "RR",
      "new_root": 20,
      "height_left": 0,
      "height_right": -1,
      "root": 20,
      "temp": null
    },
    {
      "step": 66,
      "stepId": "uhHr",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": "RR",
      "new_root": 20,
      "height_left": 0,
      "height_right": 0,
      "root": 20,
      "temp": null
    },
    {
      "step": 67,
      "stepId": "uhSet",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": "RR",
      "new_root": 20,
      "height_left": 0,
      "height_right": 0,
      "root": 20,
      "temp": null
    },
    {
      "step": 68,
      "stepId": "rotL_return",
      "key": 30,
      "node": 20,
      "bf": 0,
      "case": "RR",
      "new_root": 20,
      "height_left": 0,
      "height_right": 0,
      "root": 20,
      "temp": null
    },
    {
      "step": 69,
      "stepId": "mainLoop",
      "key": 40,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 70,
      "stepId": "callInsert",
      "key": 40,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 71,
      "stepId": "checkNull",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 72,
      "stepId": "checkLess",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 73,
      "stepId": "checkGreater",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 74,
      "stepId": "goRight",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 75,
      "stepId": "checkNull",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 76,
      "stepId": "checkLess",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 77,
      "stepId": "checkGreater",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 78,
      "stepId": "goRight",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 79,
      "stepId": "checkNull",
      "key": 40,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 80,
      "stepId": "returnNew",
      "key": 40,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 81,
      "stepId": "updateHeight",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 82,
      "stepId": "uhHl",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 20
    },
    {
      "step": 83,
      "stepId": "uhHr",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 84,
      "stepId": "uhSet",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 85,
      "stepId": "calcBf",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 86,
      "stepId": "bfReturn",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 87,
      "stepId": "caseLL",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 88,
      "stepId": "caseRR",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 89,
      "stepId": "caseLR",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 90,
      "stepId": "caseRL",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 91,
      "stepId": "returnNode",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 92,
      "stepId": "updateHeight",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 93,
      "stepId": "uhHl",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 94,
      "stepId": "uhHr",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 95,
      "stepId": "uhSet",
      "key": 40,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 96,
      "stepId": "calcBf",
      "key": 40,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 97,
      "stepId": "bfReturn",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 98,
      "stepId": "caseLL",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 99,
      "stepId": "caseRR",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 100,
      "stepId": "caseLR",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 101,
      "stepId": "caseRL",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 102,
      "stepId": "returnNode",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 103,
      "stepId": "mainLoop",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 104,
      "stepId": "callInsert",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 105,
      "stepId": "checkNull",
      "key": 50,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 106,
      "stepId": "checkLess",
      "key": 50,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 107,
      "stepId": "checkGreater",
      "key": 50,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 108,
      "stepId": "goRight",
      "key": 50,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 109,
      "stepId": "checkNull",
      "key": 50,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 110,
      "stepId": "checkLess",
      "key": 50,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 111,
      "stepId": "checkGreater",
      "key": 50,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 112,
      "stepId": "goRight",
      "key": 50,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 113,
      "stepId": "checkNull",
      "key": 50,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 114,
      "stepId": "checkLess",
      "key": 50,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 115,
      "stepId": "checkGreater",
      "key": 50,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 116,
      "stepId": "goRight",
      "key": 50,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 117,
      "stepId": "checkNull",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 118,
      "stepId": "returnNew",
      "key": 50,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 119,
      "stepId": "updateHeight",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 120,
      "stepId": "uhHl",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 20
    },
    {
      "step": 121,
      "stepId": "uhHr",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 122,
      "stepId": "uhSet",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 123,
      "stepId": "calcBf",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 124,
      "stepId": "bfReturn",
      "key": 50,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 125,
      "stepId": "caseLL",
      "key": 50,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 126,
      "stepId": "caseRR",
      "key": 50,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 127,
      "stepId": "caseLR",
      "key": 50,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 128,
      "stepId": "caseRL",
      "key": 50,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 129,
      "stepId": "returnNode",
      "key": 50,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 130,
      "stepId": "updateHeight",
      "key": 50,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 131,
      "stepId": "uhHl",
      "key": 50,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 20
    },
    {
      "step": 132,
      "stepId": "uhHr",
      "key": 50,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 133,
      "stepId": "uhSet",
      "key": 50,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 134,
      "stepId": "calcBf",
      "key": 50,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 135,
      "stepId": "bfReturn",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 136,
      "stepId": "caseLL",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 137,
      "stepId": "caseRR",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 138,
      "stepId": "rotateLeftRR",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 139,
      "stepId": "rotL_y",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 140,
      "stepId": "rotL_T2",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 141,
      "stepId": "rotL_yLeft",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 142,
      "stepId": "rotL_zRight",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 143,
      "stepId": "rotL_updZ",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 144,
      "stepId": "uhHl",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": 1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 145,
      "stepId": "uhHr",
      "key": 50,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": -1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 146,
      "stepId": "uhSet",
      "key": 50,
      "node": 30,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": -1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 147,
      "stepId": "rotL_updY",
      "key": 50,
      "node": 30,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": -1,
      "height_right": -1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 148,
      "stepId": "uhHl",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": -1,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 149,
      "stepId": "uhHr",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 150,
      "stepId": "uhSet",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 151,
      "stepId": "rotL_return",
      "key": 50,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 20,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 152,
      "stepId": "updateHeight",
      "key": 50,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 153,
      "stepId": "uhHl",
      "key": 50,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 20
    },
    {
      "step": 154,
      "stepId": "uhHr",
      "key": 50,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 155,
      "stepId": "uhSet",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 156,
      "stepId": "calcBf",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 157,
      "stepId": "bfReturn",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 158,
      "stepId": "caseLL",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 159,
      "stepId": "caseRR",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 160,
      "stepId": "caseLR",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 161,
      "stepId": "caseRL",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 162,
      "stepId": "returnNode",
      "key": 50,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 163,
      "stepId": "mainLoop",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 164,
      "stepId": "callInsert",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 165,
      "stepId": "checkNull",
      "key": 60,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 166,
      "stepId": "checkLess",
      "key": 60,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 167,
      "stepId": "checkGreater",
      "key": 60,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 168,
      "stepId": "goRight",
      "key": 60,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 169,
      "stepId": "checkNull",
      "key": 60,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 170,
      "stepId": "checkLess",
      "key": 60,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 171,
      "stepId": "checkGreater",
      "key": 60,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 172,
      "stepId": "goRight",
      "key": 60,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 173,
      "stepId": "checkNull",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 174,
      "stepId": "checkLess",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 175,
      "stepId": "checkGreater",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 176,
      "stepId": "goRight",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 177,
      "stepId": "checkNull",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 178,
      "stepId": "returnNew",
      "key": 60,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 179,
      "stepId": "updateHeight",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 180,
      "stepId": "uhHl",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 181,
      "stepId": "uhHr",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 182,
      "stepId": "uhSet",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 183,
      "stepId": "calcBf",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 184,
      "stepId": "bfReturn",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 185,
      "stepId": "caseLL",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 186,
      "stepId": "caseRR",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 187,
      "stepId": "caseLR",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 188,
      "stepId": "caseRL",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 20
    },
    {
      "step": 189,
      "stepId": "returnNode",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 190,
      "stepId": "updateHeight",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 191,
      "stepId": "uhHl",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 20
    },
    {
      "step": 192,
      "stepId": "uhHr",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 193,
      "stepId": "uhSet",
      "key": 60,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 194,
      "stepId": "calcBf",
      "key": 60,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 195,
      "stepId": "bfReturn",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 196,
      "stepId": "caseLL",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 197,
      "stepId": "caseRR",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 198,
      "stepId": "caseLR",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 199,
      "stepId": "caseRL",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 20
    },
    {
      "step": 200,
      "stepId": "returnNode",
      "key": 60,
      "node": 40,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 201,
      "stepId": "updateHeight",
      "key": 60,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 20
    },
    {
      "step": 202,
      "stepId": "uhHl",
      "key": 60,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 20
    },
    {
      "step": 203,
      "stepId": "uhHr",
      "key": 60,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 20
    },
    {
      "step": 204,
      "stepId": "uhSet",
      "key": 60,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 20
    },
    {
      "step": 205,
      "stepId": "calcBf",
      "key": 60,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 20
    },
    {
      "step": 206,
      "stepId": "bfReturn",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 20
    },
    {
      "step": 207,
      "stepId": "caseLL",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 20
    },
    {
      "step": 208,
      "stepId": "caseRR",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 209,
      "stepId": "rotateLeftRR",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 210,
      "stepId": "rotL_y",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 2,
      "root": 20,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 211,
      "stepId": "rotL_T2",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 2,
      "root": 20,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 212,
      "stepId": "rotL_yLeft",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 2,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 213,
      "stepId": "rotL_zRight",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 2,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 214,
      "stepId": "rotL_updZ",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 2,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 215,
      "stepId": "uhHl",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 2,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 216,
      "stepId": "uhHr",
      "key": 60,
      "node": 20,
      "bf": -2,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 217,
      "stepId": "uhSet",
      "key": 60,
      "node": 20,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 218,
      "stepId": "rotL_updY",
      "key": 60,
      "node": 20,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 219,
      "stepId": "uhHl",
      "key": 60,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 1,
      "height_right": 0,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 220,
      "stepId": "uhHr",
      "key": 60,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 1,
      "height_right": 1,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 221,
      "stepId": "uhSet",
      "key": 60,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 1,
      "height_right": 1,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 222,
      "stepId": "rotL_return",
      "key": 60,
      "node": 40,
      "bf": 0,
      "case": "RR",
      "new_root": 40,
      "height_left": 1,
      "height_right": 1,
      "root": 40,
      "temp": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 223,
      "stepId": "mainLoop",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 224,
      "stepId": "callInsert",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 225,
      "stepId": "checkNull",
      "key": 70,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 226,
      "stepId": "checkLess",
      "key": 70,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 227,
      "stepId": "checkGreater",
      "key": 70,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 228,
      "stepId": "goRight",
      "key": 70,
      "node": 40,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 229,
      "stepId": "checkNull",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 230,
      "stepId": "checkLess",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 231,
      "stepId": "checkGreater",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 232,
      "stepId": "goRight",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 233,
      "stepId": "checkNull",
      "key": 70,
      "node": 60,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 234,
      "stepId": "checkLess",
      "key": 70,
      "node": 60,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 235,
      "stepId": "checkGreater",
      "key": 70,
      "node": 60,
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
      "step": 236,
      "stepId": "goRight",
      "key": 70,
      "node": 60,
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
      "step": 237,
      "stepId": "checkNull",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 238,
      "stepId": "returnNew",
      "key": 70,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 239,
      "stepId": "updateHeight",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 240,
      "stepId": "uhHl",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 40
    },
    {
      "step": 241,
      "stepId": "uhHr",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 242,
      "stepId": "uhSet",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 243,
      "stepId": "calcBf",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 244,
      "stepId": "bfReturn",
      "key": 70,
      "node": 60,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 245,
      "stepId": "caseLL",
      "key": 70,
      "node": 60,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 246,
      "stepId": "caseRR",
      "key": 70,
      "node": 60,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 247,
      "stepId": "caseLR",
      "key": 70,
      "node": 60,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40
    },
    {
      "step": 248,
      "stepId": "caseRL",
      "key": 70,
      "node": 60,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 249,
      "stepId": "returnNode",
      "key": 70,
      "node": 60,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 250,
      "stepId": "updateHeight",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 251,
      "stepId": "uhHl",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 252,
      "stepId": "uhHr",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 253,
      "stepId": "uhSet",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 254,
      "stepId": "calcBf",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 255,
      "stepId": "bfReturn",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 256,
      "stepId": "caseLL",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 257,
      "stepId": "caseRR",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 258,
      "stepId": "rotateLeftRR",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 259,
      "stepId": "rotL_y",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 260,
      "stepId": "rotL_T2",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 261,
      "stepId": "rotL_yLeft",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 262,
      "stepId": "rotL_zRight",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 263,
      "stepId": "rotL_updZ",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 264,
      "stepId": "uhHl",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": 1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 265,
      "stepId": "uhHr",
      "key": 70,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 266,
      "stepId": "uhSet",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 267,
      "stepId": "rotL_updY",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": "RR",
      "new_root": 60,
      "height_left": -1,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 268,
      "stepId": "uhHl",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": "RR",
      "new_root": 60,
      "height_left": 0,
      "height_right": -1,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 269,
      "stepId": "uhHr",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": "RR",
      "new_root": 60,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 270,
      "stepId": "uhSet",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": "RR",
      "new_root": 60,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 271,
      "stepId": "rotL_return",
      "key": 70,
      "node": 60,
      "bf": 0,
      "case": "RR",
      "new_root": 60,
      "height_left": 0,
      "height_right": 0,
      "root": 40,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 272,
      "stepId": "updateHeight",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    },
    {
      "step": 273,
      "stepId": "uhHl",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 40
    },
    {
      "step": 274,
      "stepId": "uhHr",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 275,
      "stepId": "uhSet",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 276,
      "stepId": "calcBf",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 277,
      "stepId": "bfReturn",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 278,
      "stepId": "caseLL",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 279,
      "stepId": "caseRR",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 280,
      "stepId": "caseLR",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 281,
      "stepId": "caseRL",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 40
    },
    {
      "step": 282,
      "stepId": "returnNode",
      "key": 70,
      "node": 40,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 40
    }
  ],
  "meta": {
    "totalRows": 282,
    "blankRows": 71,
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
