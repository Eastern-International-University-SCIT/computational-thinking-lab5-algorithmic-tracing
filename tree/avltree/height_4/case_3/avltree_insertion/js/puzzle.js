/**
 * Trace-fill puzzle for AVL insertion.
 * Students drag Line / variable chips into blank rows where values change.
 * Execution gates on each blank row until that row is fully correct.
 */

window.TracePuzzle = (function () {
  const INSTANCE = {
  "sequence": [
    80,
    50,
    30,
    20,
    10,
    40,
    70,
    60,
    110,
    100,
    90,
    120
  ],
  "height": 4,
  "caseNum": 3,
  "caseId": "balanced",
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
    192,
    193,
    195,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
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
    223,
    224,
    225,
    226,
    236,
    245,
    246,
    260,
    263,
    266,
    270,
    272,
    291,
    292,
    298,
    300,
    305,
    309,
    310,
    311,
    312,
    313,
    314,
    315,
    316,
    317,
    318,
    319,
    320,
    321,
    322,
    323,
    324,
    326,
    341,
    344,
    348,
    360,
    384,
    396,
    397,
    398,
    399,
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409,
    410,
    418,
    428,
    436,
    439,
    440,
    449,
    451,
    454,
    455,
    456,
    461,
    462,
    463,
    464,
    465,
    466,
    467,
    468,
    469,
    470,
    471,
    472,
    473,
    474,
    475,
    476,
    477,
    478,
    479,
    480,
    481,
    482,
    483,
    484,
    485,
    486,
    487,
    488,
    489,
    492,
    493,
    500,
    504,
    505,
    510,
    512,
    517,
    518,
    533,
    536,
    543,
    556,
    562,
    564,
    568,
    571,
    572,
    573,
    574,
    575,
    576,
    577,
    578,
    579,
    580,
    581,
    582,
    583,
    584,
    585,
    586,
    597,
    600,
    603,
    618,
    621,
    623
  ],
  "answers": {
    "192": {
      "stepId": "uhHr"
    },
    "193": {
      "stepId": "uhSet"
    },
    "195": {
      "stepId": "bfReturn"
    },
    "198": {
      "stepId": "caseLR"
    },
    "199": {
      "stepId": "rotateLeftLR"
    },
    "200": {
      "stepId": "rotL_y"
    },
    "201": {
      "stepId": "rotL_T2"
    },
    "202": {
      "stepId": "rotL_yLeft"
    },
    "203": {
      "stepId": "rotL_zRight"
    },
    "204": {
      "stepId": "rotL_updZ"
    },
    "205": {
      "stepId": "uhHl"
    },
    "206": {
      "stepId": "uhHr"
    },
    "207": {
      "stepId": "uhSet"
    },
    "208": {
      "stepId": "rotL_updY"
    },
    "209": {
      "stepId": "uhHl"
    },
    "210": {
      "stepId": "uhHr"
    },
    "211": {
      "stepId": "uhSet"
    },
    "212": {
      "stepId": "rotL_return"
    },
    "213": {
      "stepId": "rotateRightLR"
    },
    "214": {
      "stepId": "rotR_y"
    },
    "215": {
      "stepId": "rotR_T2"
    },
    "216": {
      "stepId": "rotR_yRight"
    },
    "217": {
      "stepId": "rotR_zLeft"
    },
    "218": {
      "stepId": "rotR_updZ"
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
      "stepId": "rotR_updY"
    },
    "223": {
      "stepId": "uhHl"
    },
    "224": {
      "stepId": "uhHr"
    },
    "225": {
      "stepId": "uhSet"
    },
    "226": {
      "stepId": "rotR_return"
    },
    "236": {
      "stepId": "goRight"
    },
    "245": {
      "stepId": "uhSet"
    },
    "246": {
      "stepId": "calcBf"
    },
    "260": {
      "stepId": "caseRR"
    },
    "263": {
      "stepId": "returnNode"
    },
    "266": {
      "stepId": "uhHr"
    },
    "270": {
      "stepId": "caseLL"
    },
    "272": {
      "stepId": "caseLR"
    },
    "291": {
      "stepId": "checkNull"
    },
    "292": {
      "stepId": "returnNew"
    },
    "298": {
      "stepId": "bfReturn"
    },
    "300": {
      "stepId": "caseRR"
    },
    "305": {
      "stepId": "uhHl"
    },
    "309": {
      "stepId": "bfReturn"
    },
    "310": {
      "stepId": "caseLL"
    },
    "311": {
      "stepId": "rotateRightLL"
    },
    "312": {
      "stepId": "rotR_y"
    },
    "313": {
      "stepId": "rotR_T2"
    },
    "314": {
      "stepId": "rotR_yRight"
    },
    "315": {
      "stepId": "rotR_zLeft"
    },
    "316": {
      "stepId": "rotR_updZ"
    },
    "317": {
      "stepId": "uhHl"
    },
    "318": {
      "stepId": "uhHr"
    },
    "319": {
      "stepId": "uhSet"
    },
    "320": {
      "stepId": "rotR_updY"
    },
    "321": {
      "stepId": "uhHl"
    },
    "322": {
      "stepId": "uhHr"
    },
    "323": {
      "stepId": "uhSet"
    },
    "324": {
      "stepId": "rotR_return"
    },
    "326": {
      "stepId": "uhHl"
    },
    "341": {
      "stepId": "bfReturn"
    },
    "344": {
      "stepId": "caseLR"
    },
    "348": {
      "stepId": "callInsert"
    },
    "360": {
      "stepId": "goRight"
    },
    "384": {
      "stepId": "caseLL"
    },
    "396": {
      "stepId": "caseRR"
    },
    "397": {
      "stepId": "rotateLeftRR"
    },
    "398": {
      "stepId": "rotL_y"
    },
    "399": {
      "stepId": "rotL_T2"
    },
    "400": {
      "stepId": "rotL_yLeft"
    },
    "401": {
      "stepId": "rotL_zRight"
    },
    "402": {
      "stepId": "rotL_updZ"
    },
    "403": {
      "stepId": "uhHl"
    },
    "404": {
      "stepId": "uhHr"
    },
    "405": {
      "stepId": "uhSet"
    },
    "406": {
      "stepId": "rotL_updY"
    },
    "407": {
      "stepId": "uhHl"
    },
    "408": {
      "stepId": "uhHr"
    },
    "409": {
      "stepId": "uhSet"
    },
    "410": {
      "stepId": "rotL_return"
    },
    "418": {
      "stepId": "caseRR"
    },
    "428": {
      "stepId": "checkNull"
    },
    "436": {
      "stepId": "checkNull"
    },
    "439": {
      "stepId": "checkNull"
    },
    "440": {
      "stepId": "returnNew"
    },
    "449": {
      "stepId": "caseLR"
    },
    "451": {
      "stepId": "returnNode"
    },
    "454": {
      "stepId": "uhHr"
    },
    "455": {
      "stepId": "uhSet"
    },
    "456": {
      "stepId": "calcBf"
    },
    "461": {
      "stepId": "caseRL"
    },
    "462": {
      "stepId": "rotateRightRL"
    },
    "463": {
      "stepId": "rotR_y"
    },
    "464": {
      "stepId": "rotR_T2"
    },
    "465": {
      "stepId": "rotR_yRight"
    },
    "466": {
      "stepId": "rotR_zLeft"
    },
    "467": {
      "stepId": "rotR_updZ"
    },
    "468": {
      "stepId": "uhHl"
    },
    "469": {
      "stepId": "uhHr"
    },
    "470": {
      "stepId": "uhSet"
    },
    "471": {
      "stepId": "rotR_updY"
    },
    "472": {
      "stepId": "uhHl"
    },
    "473": {
      "stepId": "uhHr"
    },
    "474": {
      "stepId": "uhSet"
    },
    "475": {
      "stepId": "rotR_return"
    },
    "476": {
      "stepId": "rotateLeftRL"
    },
    "477": {
      "stepId": "rotL_y"
    },
    "478": {
      "stepId": "rotL_T2"
    },
    "479": {
      "stepId": "rotL_yLeft"
    },
    "480": {
      "stepId": "rotL_zRight"
    },
    "481": {
      "stepId": "rotL_updZ"
    },
    "482": {
      "stepId": "uhHl"
    },
    "483": {
      "stepId": "uhHr"
    },
    "484": {
      "stepId": "uhSet"
    },
    "485": {
      "stepId": "rotL_updY"
    },
    "486": {
      "stepId": "uhHl"
    },
    "487": {
      "stepId": "uhHr"
    },
    "488": {
      "stepId": "uhSet"
    },
    "489": {
      "stepId": "rotL_return"
    },
    "492": {
      "stepId": "uhHr"
    },
    "493": {
      "stepId": "uhSet"
    },
    "500": {
      "stepId": "returnNode"
    },
    "504": {
      "stepId": "uhSet"
    },
    "505": {
      "stepId": "calcBf"
    },
    "510": {
      "stepId": "caseRL"
    },
    "512": {
      "stepId": "mainLoop"
    },
    "517": {
      "stepId": "goRight"
    },
    "518": {
      "stepId": "checkNull"
    },
    "533": {
      "stepId": "uhHr"
    },
    "536": {
      "stepId": "bfReturn"
    },
    "543": {
      "stepId": "uhHl"
    },
    "556": {
      "stepId": "uhSet"
    },
    "562": {
      "stepId": "caseRL"
    },
    "564": {
      "stepId": "updateHeight"
    },
    "568": {
      "stepId": "calcBf"
    },
    "571": {
      "stepId": "caseRR"
    },
    "572": {
      "stepId": "rotateLeftRR"
    },
    "573": {
      "stepId": "rotL_y"
    },
    "574": {
      "stepId": "rotL_T2"
    },
    "575": {
      "stepId": "rotL_yLeft"
    },
    "576": {
      "stepId": "rotL_zRight"
    },
    "577": {
      "stepId": "rotL_updZ"
    },
    "578": {
      "stepId": "uhHl"
    },
    "579": {
      "stepId": "uhHr"
    },
    "580": {
      "stepId": "uhSet"
    },
    "581": {
      "stepId": "rotL_updY"
    },
    "582": {
      "stepId": "uhHl"
    },
    "583": {
      "stepId": "uhHr"
    },
    "584": {
      "stepId": "uhSet"
    },
    "585": {
      "stepId": "rotL_return"
    },
    "586": {
      "stepId": "mainLoop"
    },
    "597": {
      "stepId": "checkLess"
    },
    "600": {
      "stepId": "checkNull"
    },
    "603": {
      "stepId": "uhHl"
    },
    "618": {
      "stepId": "bfReturn"
    },
    "621": {
      "stepId": "caseLR"
    },
    "623": {
      "stepId": "returnNode"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 42,
        "value": "returnNew"
      },
      {
        "id": 6,
        "value": "rotL_y"
      },
      {
        "id": 11,
        "value": "uhHl"
      },
      {
        "id": 12,
        "value": "uhHr"
      },
      {
        "id": 75,
        "value": "uhHl"
      },
      {
        "id": 18,
        "value": "rotL_return"
      },
      {
        "id": 106,
        "value": "uhSet"
      },
      {
        "id": 76,
        "value": "uhHr"
      },
      {
        "id": 98,
        "value": "rotR_zLeft"
      },
      {
        "id": 13,
        "value": "uhSet"
      },
      {
        "id": 124,
        "value": "returnNode"
      },
      {
        "id": 129,
        "value": "goRight"
      },
      {
        "id": 30,
        "value": "uhHr"
      },
      {
        "id": 111,
        "value": "rotL_yLeft"
      },
      {
        "id": 56,
        "value": "uhSet"
      },
      {
        "id": 96,
        "value": "rotR_T2"
      },
      {
        "id": 15,
        "value": "uhHl"
      },
      {
        "id": 33,
        "value": "goRight"
      },
      {
        "id": 148,
        "value": "rotL_updY"
      },
      {
        "id": 144,
        "value": "rotL_updZ"
      },
      {
        "id": 120,
        "value": "uhSet"
      },
      {
        "id": 50,
        "value": "rotR_T2"
      },
      {
        "id": 31,
        "value": "uhSet"
      },
      {
        "id": 95,
        "value": "rotR_y"
      },
      {
        "id": 107,
        "value": "rotR_return"
      },
      {
        "id": 74,
        "value": "rotL_updZ"
      },
      {
        "id": 128,
        "value": "mainLoop"
      },
      {
        "id": 127,
        "value": "caseRL"
      },
      {
        "id": 40,
        "value": "caseLR"
      },
      {
        "id": 25,
        "value": "uhHl"
      },
      {
        "id": 104,
        "value": "uhHl"
      },
      {
        "id": 93,
        "value": "caseRL"
      },
      {
        "id": 118,
        "value": "uhHl"
      },
      {
        "id": 80,
        "value": "uhHr"
      },
      {
        "id": 22,
        "value": "rotR_yRight"
      },
      {
        "id": 89,
        "value": "returnNode"
      },
      {
        "id": 105,
        "value": "uhHr"
      },
      {
        "id": 82,
        "value": "rotL_return"
      },
      {
        "id": 61,
        "value": "rotR_return"
      },
      {
        "id": 157,
        "value": "bfReturn"
      },
      {
        "id": 47,
        "value": "caseLL"
      },
      {
        "id": 5,
        "value": "rotateLeftLR"
      },
      {
        "id": 86,
        "value": "checkNull"
      },
      {
        "id": 100,
        "value": "uhHl"
      },
      {
        "id": 159,
        "value": "returnNode"
      },
      {
        "id": 10,
        "value": "rotL_updZ"
      },
      {
        "id": 44,
        "value": "caseRR"
      },
      {
        "id": 52,
        "value": "rotR_zLeft"
      },
      {
        "id": 125,
        "value": "uhSet"
      },
      {
        "id": 77,
        "value": "uhSet"
      },
      {
        "id": 153,
        "value": "mainLoop"
      },
      {
        "id": 16,
        "value": "uhHr"
      },
      {
        "id": 112,
        "value": "rotL_zRight"
      },
      {
        "id": 73,
        "value": "rotL_zRight"
      },
      {
        "id": 7,
        "value": "rotL_T2"
      },
      {
        "id": 122,
        "value": "uhHr"
      },
      {
        "id": 48,
        "value": "rotateRightLL"
      },
      {
        "id": 53,
        "value": "rotR_updZ"
      },
      {
        "id": 81,
        "value": "uhSet"
      },
      {
        "id": 84,
        "value": "checkNull"
      },
      {
        "id": 54,
        "value": "uhHl"
      },
      {
        "id": 1,
        "value": "uhHr"
      },
      {
        "id": 149,
        "value": "uhHl"
      },
      {
        "id": 55,
        "value": "uhHr"
      },
      {
        "id": 41,
        "value": "checkNull"
      },
      {
        "id": 94,
        "value": "rotateRightRL"
      },
      {
        "id": 32,
        "value": "rotR_return"
      },
      {
        "id": 72,
        "value": "rotL_yLeft"
      },
      {
        "id": 117,
        "value": "rotL_updY"
      },
      {
        "id": 97,
        "value": "rotR_yRight"
      },
      {
        "id": 70,
        "value": "rotL_y"
      },
      {
        "id": 8,
        "value": "rotL_yLeft"
      },
      {
        "id": 135,
        "value": "caseRL"
      },
      {
        "id": 142,
        "value": "rotL_yLeft"
      },
      {
        "id": 151,
        "value": "uhSet"
      },
      {
        "id": 58,
        "value": "uhHl"
      },
      {
        "id": 141,
        "value": "rotL_T2"
      },
      {
        "id": 152,
        "value": "rotL_return"
      },
      {
        "id": 91,
        "value": "uhSet"
      },
      {
        "id": 51,
        "value": "rotR_yRight"
      },
      {
        "id": 114,
        "value": "uhHl"
      },
      {
        "id": 24,
        "value": "rotR_updZ"
      },
      {
        "id": 121,
        "value": "rotL_return"
      },
      {
        "id": 150,
        "value": "uhHr"
      },
      {
        "id": 145,
        "value": "uhHl"
      },
      {
        "id": 102,
        "value": "uhSet"
      },
      {
        "id": 154,
        "value": "checkLess"
      },
      {
        "id": 132,
        "value": "bfReturn"
      },
      {
        "id": 158,
        "value": "caseLR"
      },
      {
        "id": 90,
        "value": "uhHr"
      },
      {
        "id": 119,
        "value": "uhHr"
      },
      {
        "id": 115,
        "value": "uhHr"
      },
      {
        "id": 43,
        "value": "bfReturn"
      },
      {
        "id": 136,
        "value": "updateHeight"
      },
      {
        "id": 85,
        "value": "checkNull"
      },
      {
        "id": 103,
        "value": "rotR_updY"
      },
      {
        "id": 36,
        "value": "caseRR"
      },
      {
        "id": 83,
        "value": "caseRR"
      },
      {
        "id": 131,
        "value": "uhHr"
      },
      {
        "id": 109,
        "value": "rotL_y"
      },
      {
        "id": 71,
        "value": "rotL_T2"
      },
      {
        "id": 60,
        "value": "uhSet"
      },
      {
        "id": 67,
        "value": "caseLL"
      },
      {
        "id": 147,
        "value": "uhSet"
      },
      {
        "id": 92,
        "value": "calcBf"
      },
      {
        "id": 20,
        "value": "rotR_y"
      },
      {
        "id": 49,
        "value": "rotR_y"
      },
      {
        "id": 140,
        "value": "rotL_y"
      },
      {
        "id": 38,
        "value": "uhHr"
      },
      {
        "id": 110,
        "value": "rotL_T2"
      },
      {
        "id": 19,
        "value": "rotateRightLR"
      },
      {
        "id": 99,
        "value": "rotR_updZ"
      },
      {
        "id": 26,
        "value": "uhHr"
      },
      {
        "id": 4,
        "value": "caseLR"
      },
      {
        "id": 59,
        "value": "uhHr"
      },
      {
        "id": 64,
        "value": "caseLR"
      },
      {
        "id": 78,
        "value": "rotL_updY"
      },
      {
        "id": 126,
        "value": "calcBf"
      },
      {
        "id": 139,
        "value": "rotateLeftRR"
      },
      {
        "id": 79,
        "value": "uhHl"
      },
      {
        "id": 28,
        "value": "rotR_updY"
      },
      {
        "id": 27,
        "value": "uhSet"
      },
      {
        "id": 34,
        "value": "uhSet"
      },
      {
        "id": 155,
        "value": "checkNull"
      },
      {
        "id": 68,
        "value": "caseRR"
      },
      {
        "id": 37,
        "value": "returnNode"
      },
      {
        "id": 143,
        "value": "rotL_zRight"
      },
      {
        "id": 14,
        "value": "rotL_updY"
      },
      {
        "id": 88,
        "value": "caseLR"
      },
      {
        "id": 17,
        "value": "uhSet"
      },
      {
        "id": 134,
        "value": "uhSet"
      },
      {
        "id": 29,
        "value": "uhHl"
      },
      {
        "id": 45,
        "value": "uhHl"
      },
      {
        "id": 21,
        "value": "rotR_T2"
      },
      {
        "id": 9,
        "value": "rotL_zRight"
      },
      {
        "id": 65,
        "value": "callInsert"
      },
      {
        "id": 46,
        "value": "bfReturn"
      },
      {
        "id": 133,
        "value": "uhHl"
      },
      {
        "id": 156,
        "value": "uhHl"
      },
      {
        "id": 63,
        "value": "bfReturn"
      },
      {
        "id": 123,
        "value": "uhSet"
      },
      {
        "id": 146,
        "value": "uhHr"
      },
      {
        "id": 113,
        "value": "rotL_updZ"
      },
      {
        "id": 130,
        "value": "checkNull"
      },
      {
        "id": 23,
        "value": "rotR_zLeft"
      },
      {
        "id": 62,
        "value": "uhHl"
      },
      {
        "id": 35,
        "value": "calcBf"
      },
      {
        "id": 2,
        "value": "uhSet"
      },
      {
        "id": 108,
        "value": "rotateLeftRL"
      },
      {
        "id": 116,
        "value": "uhSet"
      },
      {
        "id": 137,
        "value": "calcBf"
      },
      {
        "id": 3,
        "value": "bfReturn"
      },
      {
        "id": 66,
        "value": "goRight"
      },
      {
        "id": 39,
        "value": "caseLL"
      },
      {
        "id": 69,
        "value": "rotateLeftRR"
      },
      {
        "id": 138,
        "value": "caseRR"
      },
      {
        "id": 101,
        "value": "uhHr"
      },
      {
        "id": 57,
        "value": "rotR_updY"
      },
      {
        "id": 87,
        "value": "returnNew"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainLoop",
      "key": 80,
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
      "key": 80,
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
      "key": 80,
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
      "key": 80,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 5,
      "stepId": "mainLoop",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 6,
      "stepId": "callInsert",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 7,
      "stepId": "checkNull",
      "key": 50,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 8,
      "stepId": "checkLess",
      "key": 50,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 9,
      "stepId": "goLeft",
      "key": 50,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 10,
      "stepId": "checkNull",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 11,
      "stepId": "returnNew",
      "key": 50,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 12,
      "stepId": "updateHeight",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 13,
      "stepId": "uhHl",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 80
    },
    {
      "step": 14,
      "stepId": "uhHr",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 15,
      "stepId": "uhSet",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 16,
      "stepId": "calcBf",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 17,
      "stepId": "bfReturn",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 18,
      "stepId": "caseLL",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 19,
      "stepId": "caseRR",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 20,
      "stepId": "caseLR",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 21,
      "stepId": "caseRL",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 22,
      "stepId": "returnNode",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
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
      "root": 80
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
      "root": 80
    },
    {
      "step": 25,
      "stepId": "checkNull",
      "key": 30,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 26,
      "stepId": "checkLess",
      "key": 30,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 27,
      "stepId": "goLeft",
      "key": 30,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 28,
      "stepId": "checkNull",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 29,
      "stepId": "checkLess",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 30,
      "stepId": "goLeft",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
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
      "root": 80
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
      "root": 80
    },
    {
      "step": 33,
      "stepId": "updateHeight",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 34,
      "stepId": "uhHl",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 80
    },
    {
      "step": 35,
      "stepId": "uhHr",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 36,
      "stepId": "uhSet",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 37,
      "stepId": "calcBf",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 38,
      "stepId": "bfReturn",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 39,
      "stepId": "caseLL",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 40,
      "stepId": "caseRR",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 41,
      "stepId": "caseLR",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 42,
      "stepId": "caseRL",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 43,
      "stepId": "returnNode",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 44,
      "stepId": "updateHeight",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 80
    },
    {
      "step": 45,
      "stepId": "uhHl",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 80
    },
    {
      "step": 46,
      "stepId": "uhHr",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 47,
      "stepId": "uhSet",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 48,
      "stepId": "calcBf",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 49,
      "stepId": "bfReturn",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 50,
      "stepId": "caseLL",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 51,
      "stepId": "rotateRightLL",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 52,
      "stepId": "rotR_y",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 80
    },
    {
      "step": 53,
      "stepId": "rotR_T2",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 80,
      "temp": null
    },
    {
      "step": 54,
      "stepId": "rotR_yRight",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 55,
      "stepId": "rotR_zLeft",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 56,
      "stepId": "rotR_updZ",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 57,
      "stepId": "uhHl",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 58,
      "stepId": "uhHr",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 59,
      "stepId": "uhSet",
      "key": 30,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 60,
      "stepId": "rotR_updY",
      "key": 30,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 61,
      "stepId": "uhHl",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 62,
      "stepId": "uhHr",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 63,
      "stepId": "uhSet",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 64,
      "stepId": "rotR_return",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
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
      "root": 50
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
      "root": 50
    },
    {
      "step": 67,
      "stepId": "checkNull",
      "key": 20,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 68,
      "stepId": "checkLess",
      "key": 20,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 69,
      "stepId": "goLeft",
      "key": 20,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
    },
    {
      "step": 86,
      "stepId": "updateHeight",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 87,
      "stepId": "uhHl",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 88,
      "stepId": "uhHr",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 89,
      "stepId": "uhSet",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 90,
      "stepId": "calcBf",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 91,
      "stepId": "bfReturn",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 92,
      "stepId": "caseLL",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 93,
      "stepId": "caseRR",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 94,
      "stepId": "caseLR",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 95,
      "stepId": "caseRL",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 96,
      "stepId": "returnNode",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
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
      "root": 50
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
      "root": 50
    },
    {
      "step": 99,
      "stepId": "checkNull",
      "key": 10,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 100,
      "stepId": "checkLess",
      "key": 10,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 101,
      "stepId": "goLeft",
      "key": 10,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
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
      "root": 50,
      "temp": null
    },
    {
      "step": 142,
      "stepId": "updateHeight",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 143,
      "stepId": "uhHl",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 144,
      "stepId": "uhHr",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 145,
      "stepId": "uhSet",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 146,
      "stepId": "calcBf",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 147,
      "stepId": "bfReturn",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 148,
      "stepId": "caseLL",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 149,
      "stepId": "caseRR",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 150,
      "stepId": "caseLR",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 151,
      "stepId": "caseRL",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 152,
      "stepId": "returnNode",
      "key": 10,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 153,
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
      "step": 154,
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
      "step": 155,
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
      "step": 156,
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
      "step": 157,
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
      "step": 158,
      "stepId": "checkNull",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 159,
      "stepId": "checkLess",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 160,
      "stepId": "checkGreater",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 161,
      "stepId": "goRight",
      "key": 40,
      "node": 20,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 162,
      "stepId": "checkNull",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 163,
      "stepId": "checkLess",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 164,
      "stepId": "checkGreater",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 165,
      "stepId": "goRight",
      "key": 40,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 166,
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
      "step": 167,
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
      "step": 168,
      "stepId": "updateHeight",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 169,
      "stepId": "uhHl",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 170,
      "stepId": "uhHr",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 171,
      "stepId": "uhSet",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 172,
      "stepId": "calcBf",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 173,
      "stepId": "bfReturn",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 174,
      "stepId": "caseLL",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 175,
      "stepId": "caseRR",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 176,
      "stepId": "caseLR",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 177,
      "stepId": "caseRL",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 178,
      "stepId": "returnNode",
      "key": 40,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 179,
      "stepId": "updateHeight",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 180,
      "stepId": "uhHl",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 181,
      "stepId": "uhHr",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 182,
      "stepId": "uhSet",
      "key": 40,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 183,
      "stepId": "calcBf",
      "key": 40,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 184,
      "stepId": "bfReturn",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 185,
      "stepId": "caseLL",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 186,
      "stepId": "caseRR",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 187,
      "stepId": "caseLR",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 188,
      "stepId": "caseRL",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 189,
      "stepId": "returnNode",
      "key": 40,
      "node": 20,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 190,
      "stepId": "updateHeight",
      "key": 40,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 191,
      "stepId": "uhHl",
      "key": 40,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 192,
      "stepId": "uhHr",
      "key": 40,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 193,
      "stepId": "uhSet",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 194,
      "stepId": "calcBf",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 195,
      "stepId": "bfReturn",
      "key": 40,
      "node": 50,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 196,
      "stepId": "caseLL",
      "key": 40,
      "node": 50,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 197,
      "stepId": "caseRR",
      "key": 40,
      "node": 50,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 198,
      "stepId": "caseLR",
      "key": 40,
      "node": 50,
      "bf": 2,
      "case": "LR",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 199,
      "stepId": "rotateLeftLR",
      "key": 40,
      "node": 50,
      "bf": 2,
      "case": "LR",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 200,
      "stepId": "rotL_y",
      "key": 40,
      "node": 20,
      "bf": 2,
      "case": "LR",
      "new_root": 30,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 201,
      "stepId": "rotL_T2",
      "key": 40,
      "node": 20,
      "bf": 2,
      "case": "LR",
      "new_root": 30,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 202,
      "stepId": "rotL_yLeft",
      "key": 40,
      "node": 20,
      "bf": 2,
      "case": "LR",
      "new_root": 30,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 203,
      "stepId": "rotL_zRight",
      "key": 40,
      "node": 20,
      "bf": 2,
      "case": "LR",
      "new_root": 30,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 204,
      "stepId": "rotL_updZ",
      "key": 40,
      "node": 20,
      "bf": 2,
      "case": "LR",
      "new_root": 30,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 205,
      "stepId": "uhHl",
      "key": 40,
      "node": 20,
      "bf": 2,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 206,
      "stepId": "uhHr",
      "key": 40,
      "node": 20,
      "bf": 2,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 207,
      "stepId": "uhSet",
      "key": 40,
      "node": 20,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 208,
      "stepId": "rotL_updY",
      "key": 40,
      "node": 20,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 209,
      "stepId": "uhHl",
      "key": 40,
      "node": 30,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 210,
      "stepId": "uhHr",
      "key": 40,
      "node": 30,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 211,
      "stepId": "uhSet",
      "key": 40,
      "node": 30,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 212,
      "stepId": "rotL_return",
      "key": 40,
      "node": 30,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 213,
      "stepId": "rotateRightLR",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 214,
      "stepId": "rotR_y",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 215,
      "stepId": "rotR_T2",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 216,
      "stepId": "rotR_yRight",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 217,
      "stepId": "rotR_zLeft",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 218,
      "stepId": "rotR_updZ",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 219,
      "stepId": "uhHl",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 220,
      "stepId": "uhHr",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 221,
      "stepId": "uhSet",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 222,
      "stepId": "rotR_updY",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": "LR",
      "new_root": 30,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 223,
      "stepId": "uhHl",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 0,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 224,
      "stepId": "uhHr",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 225,
      "stepId": "uhSet",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 226,
      "stepId": "rotR_return",
      "key": 40,
      "node": 30,
      "bf": 0,
      "case": "LR",
      "new_root": 30,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "temp": 40,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 227,
      "stepId": "mainLoop",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 228,
      "stepId": "callInsert",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 229,
      "stepId": "checkNull",
      "key": 70,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 230,
      "stepId": "checkLess",
      "key": 70,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 231,
      "stepId": "checkGreater",
      "key": 70,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 232,
      "stepId": "goRight",
      "key": 70,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 233,
      "stepId": "checkNull",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 234,
      "stepId": "checkLess",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 235,
      "stepId": "checkGreater",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 236,
      "stepId": "goRight",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 237,
      "stepId": "checkNull",
      "key": 70,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 238,
      "stepId": "checkLess",
      "key": 70,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 239,
      "stepId": "goLeft",
      "key": 70,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 240,
      "stepId": "checkNull",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 241,
      "stepId": "returnNew",
      "key": 70,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 242,
      "stepId": "updateHeight",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 243,
      "stepId": "uhHl",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 30
    },
    {
      "step": 244,
      "stepId": "uhHr",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 245,
      "stepId": "uhSet",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 246,
      "stepId": "calcBf",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 247,
      "stepId": "bfReturn",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 248,
      "stepId": "caseLL",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 249,
      "stepId": "caseRR",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 250,
      "stepId": "caseLR",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 251,
      "stepId": "caseRL",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 252,
      "stepId": "returnNode",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 253,
      "stepId": "updateHeight",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 254,
      "stepId": "uhHl",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 30
    },
    {
      "step": 255,
      "stepId": "uhHr",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 256,
      "stepId": "uhSet",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 257,
      "stepId": "calcBf",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 258,
      "stepId": "bfReturn",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 259,
      "stepId": "caseLL",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 260,
      "stepId": "caseRR",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 261,
      "stepId": "caseLR",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 262,
      "stepId": "caseRL",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 263,
      "stepId": "returnNode",
      "key": 70,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 264,
      "stepId": "updateHeight",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 265,
      "stepId": "uhHl",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 266,
      "stepId": "uhHr",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 267,
      "stepId": "uhSet",
      "key": 70,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 268,
      "stepId": "calcBf",
      "key": 70,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 269,
      "stepId": "bfReturn",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 270,
      "stepId": "caseLL",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 271,
      "stepId": "caseRR",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 272,
      "stepId": "caseLR",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 273,
      "stepId": "caseRL",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 274,
      "stepId": "returnNode",
      "key": 70,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 275,
      "stepId": "mainLoop",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 276,
      "stepId": "callInsert",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 277,
      "stepId": "checkNull",
      "key": 60,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 278,
      "stepId": "checkLess",
      "key": 60,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 279,
      "stepId": "checkGreater",
      "key": 60,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 280,
      "stepId": "goRight",
      "key": 60,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 281,
      "stepId": "checkNull",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 282,
      "stepId": "checkLess",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 283,
      "stepId": "checkGreater",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 284,
      "stepId": "goRight",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 285,
      "stepId": "checkNull",
      "key": 60,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 286,
      "stepId": "checkLess",
      "key": 60,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 287,
      "stepId": "goLeft",
      "key": 60,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 288,
      "stepId": "checkNull",
      "key": 60,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 289,
      "stepId": "checkLess",
      "key": 60,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 290,
      "stepId": "goLeft",
      "key": 60,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 291,
      "stepId": "checkNull",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 292,
      "stepId": "returnNew",
      "key": 60,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 293,
      "stepId": "updateHeight",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 294,
      "stepId": "uhHl",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 30
    },
    {
      "step": 295,
      "stepId": "uhHr",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 296,
      "stepId": "uhSet",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 297,
      "stepId": "calcBf",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 298,
      "stepId": "bfReturn",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 299,
      "stepId": "caseLL",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 300,
      "stepId": "caseRR",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 301,
      "stepId": "caseLR",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 302,
      "stepId": "caseRL",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 303,
      "stepId": "returnNode",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 304,
      "stepId": "updateHeight",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 305,
      "stepId": "uhHl",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 306,
      "stepId": "uhHr",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 307,
      "stepId": "uhSet",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 308,
      "stepId": "calcBf",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 309,
      "stepId": "bfReturn",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 310,
      "stepId": "caseLL",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 311,
      "stepId": "rotateRightLL",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 312,
      "stepId": "rotR_y",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 313,
      "stepId": "rotR_T2",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 314,
      "stepId": "rotR_yRight",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 315,
      "stepId": "rotR_zLeft",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 316,
      "stepId": "rotR_updZ",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 317,
      "stepId": "uhHl",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 318,
      "stepId": "uhHr",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 319,
      "stepId": "uhSet",
      "key": 60,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 320,
      "stepId": "rotR_updY",
      "key": 60,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 321,
      "stepId": "uhHl",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 322,
      "stepId": "uhHr",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 323,
      "stepId": "uhSet",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 324,
      "stepId": "rotR_return",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 325,
      "stepId": "updateHeight",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 326,
      "stepId": "uhHl",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 327,
      "stepId": "uhHr",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 328,
      "stepId": "uhSet",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 329,
      "stepId": "calcBf",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 330,
      "stepId": "bfReturn",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 331,
      "stepId": "caseLL",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 332,
      "stepId": "caseRR",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 333,
      "stepId": "caseLR",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 334,
      "stepId": "caseRL",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 335,
      "stepId": "returnNode",
      "key": 60,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 336,
      "stepId": "updateHeight",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 337,
      "stepId": "uhHl",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 338,
      "stepId": "uhHr",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 339,
      "stepId": "uhSet",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 340,
      "stepId": "calcBf",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 341,
      "stepId": "bfReturn",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 342,
      "stepId": "caseLL",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 343,
      "stepId": "caseRR",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 344,
      "stepId": "caseLR",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 345,
      "stepId": "caseRL",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 346,
      "stepId": "returnNode",
      "key": 60,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 347,
      "stepId": "mainLoop",
      "key": 110,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 348,
      "stepId": "callInsert",
      "key": 110,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 349,
      "stepId": "checkNull",
      "key": 110,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 350,
      "stepId": "checkLess",
      "key": 110,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 351,
      "stepId": "checkGreater",
      "key": 110,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 352,
      "stepId": "goRight",
      "key": 110,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 353,
      "stepId": "checkNull",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 354,
      "stepId": "checkLess",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 355,
      "stepId": "checkGreater",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 356,
      "stepId": "goRight",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 357,
      "stepId": "checkNull",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 358,
      "stepId": "checkLess",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 359,
      "stepId": "checkGreater",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 360,
      "stepId": "goRight",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 361,
      "stepId": "checkNull",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 362,
      "stepId": "checkLess",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 363,
      "stepId": "checkGreater",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 364,
      "stepId": "goRight",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 365,
      "stepId": "checkNull",
      "key": 110,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 366,
      "stepId": "returnNew",
      "key": 110,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 367,
      "stepId": "updateHeight",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 368,
      "stepId": "uhHl",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 369,
      "stepId": "uhHr",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 370,
      "stepId": "uhSet",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 371,
      "stepId": "calcBf",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 372,
      "stepId": "bfReturn",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 373,
      "stepId": "caseLL",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 374,
      "stepId": "caseRR",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 375,
      "stepId": "caseLR",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 376,
      "stepId": "caseRL",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 377,
      "stepId": "returnNode",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 378,
      "stepId": "updateHeight",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 379,
      "stepId": "uhHl",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 30
    },
    {
      "step": 380,
      "stepId": "uhHr",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 381,
      "stepId": "uhSet",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 382,
      "stepId": "calcBf",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 383,
      "stepId": "bfReturn",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 384,
      "stepId": "caseLL",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 385,
      "stepId": "caseRR",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 386,
      "stepId": "caseLR",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 387,
      "stepId": "caseRL",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 388,
      "stepId": "returnNode",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 389,
      "stepId": "updateHeight",
      "key": 110,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 390,
      "stepId": "uhHl",
      "key": 110,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 30
    },
    {
      "step": 391,
      "stepId": "uhHr",
      "key": 110,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 392,
      "stepId": "uhSet",
      "key": 110,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 393,
      "stepId": "calcBf",
      "key": 110,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 394,
      "stepId": "bfReturn",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 395,
      "stepId": "caseLL",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 396,
      "stepId": "caseRR",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 397,
      "stepId": "rotateLeftRR",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 398,
      "stepId": "rotL_y",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 399,
      "stepId": "rotL_T2",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 400,
      "stepId": "rotL_yLeft",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 401,
      "stepId": "rotL_zRight",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 402,
      "stepId": "rotL_updZ",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 403,
      "stepId": "uhHl",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 2,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 404,
      "stepId": "uhHr",
      "key": 110,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 405,
      "stepId": "uhSet",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 406,
      "stepId": "rotL_updY",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 407,
      "stepId": "uhHl",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 0,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 408,
      "stepId": "uhHr",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 409,
      "stepId": "uhSet",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 410,
      "stepId": "rotL_return",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "temp": 60,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 411,
      "stepId": "updateHeight",
      "key": 110,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 412,
      "stepId": "uhHl",
      "key": 110,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 413,
      "stepId": "uhHr",
      "key": 110,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 414,
      "stepId": "uhSet",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 415,
      "stepId": "calcBf",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 416,
      "stepId": "bfReturn",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 417,
      "stepId": "caseLL",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 418,
      "stepId": "caseRR",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 419,
      "stepId": "caseLR",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 420,
      "stepId": "caseRL",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 421,
      "stepId": "returnNode",
      "key": 110,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 422,
      "stepId": "mainLoop",
      "key": 100,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 423,
      "stepId": "callInsert",
      "key": 100,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 424,
      "stepId": "checkNull",
      "key": 100,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 425,
      "stepId": "checkLess",
      "key": 100,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 426,
      "stepId": "checkGreater",
      "key": 100,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 427,
      "stepId": "goRight",
      "key": 100,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 428,
      "stepId": "checkNull",
      "key": 100,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 429,
      "stepId": "checkLess",
      "key": 100,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 430,
      "stepId": "checkGreater",
      "key": 100,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 431,
      "stepId": "goRight",
      "key": 100,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 432,
      "stepId": "checkNull",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 433,
      "stepId": "checkLess",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 434,
      "stepId": "checkGreater",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 435,
      "stepId": "goRight",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 436,
      "stepId": "checkNull",
      "key": 100,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 437,
      "stepId": "checkLess",
      "key": 100,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 438,
      "stepId": "goLeft",
      "key": 100,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 439,
      "stepId": "checkNull",
      "key": 100,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 440,
      "stepId": "returnNew",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 441,
      "stepId": "updateHeight",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 442,
      "stepId": "uhHl",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 30
    },
    {
      "step": 443,
      "stepId": "uhHr",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 444,
      "stepId": "uhSet",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 445,
      "stepId": "calcBf",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 446,
      "stepId": "bfReturn",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 447,
      "stepId": "caseLL",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 448,
      "stepId": "caseRR",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 449,
      "stepId": "caseLR",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 450,
      "stepId": "caseRL",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 30
    },
    {
      "step": 451,
      "stepId": "returnNode",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 452,
      "stepId": "updateHeight",
      "key": 100,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 453,
      "stepId": "uhHl",
      "key": 100,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 454,
      "stepId": "uhHr",
      "key": 100,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 455,
      "stepId": "uhSet",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 456,
      "stepId": "calcBf",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 457,
      "stepId": "bfReturn",
      "key": 100,
      "node": 80,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 458,
      "stepId": "caseLL",
      "key": 100,
      "node": 80,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 459,
      "stepId": "caseRR",
      "key": 100,
      "node": 80,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 460,
      "stepId": "caseLR",
      "key": 100,
      "node": 80,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 461,
      "stepId": "caseRL",
      "key": 100,
      "node": 80,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 462,
      "stepId": "rotateRightRL",
      "key": 100,
      "node": 80,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 463,
      "stepId": "rotR_y",
      "key": 100,
      "node": 110,
      "bf": -2,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 464,
      "stepId": "rotR_T2",
      "key": 100,
      "node": 110,
      "bf": -2,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 465,
      "stepId": "rotR_yRight",
      "key": 100,
      "node": 110,
      "bf": -2,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 466,
      "stepId": "rotR_zLeft",
      "key": 100,
      "node": 110,
      "bf": -2,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 467,
      "stepId": "rotR_updZ",
      "key": 100,
      "node": 110,
      "bf": -2,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 468,
      "stepId": "uhHl",
      "key": 100,
      "node": 110,
      "bf": -2,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 469,
      "stepId": "uhHr",
      "key": 100,
      "node": 110,
      "bf": -2,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 470,
      "stepId": "uhSet",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 471,
      "stepId": "rotR_updY",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 472,
      "stepId": "uhHl",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 473,
      "stepId": "uhHr",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 474,
      "stepId": "uhSet",
      "key": 100,
      "node": 100,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 475,
      "stepId": "rotR_return",
      "key": 100,
      "node": 100,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 476,
      "stepId": "rotateLeftRL",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 477,
      "stepId": "rotL_y",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 478,
      "stepId": "rotL_T2",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 479,
      "stepId": "rotL_yLeft",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 480,
      "stepId": "rotL_zRight",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 481,
      "stepId": "rotL_updZ",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 482,
      "stepId": "uhHl",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 483,
      "stepId": "uhHr",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 484,
      "stepId": "uhSet",
      "key": 100,
      "node": 80,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 485,
      "stepId": "rotL_updY",
      "key": 100,
      "node": 80,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 486,
      "stepId": "uhHl",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": 0,
      "height_right": -1,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 487,
      "stepId": "uhHr",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 488,
      "stepId": "uhSet",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 489,
      "stepId": "rotL_return",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": "RL",
      "new_root": 100,
      "height_left": 0,
      "height_right": 0,
      "root": 30,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 490,
      "stepId": "updateHeight",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 491,
      "stepId": "uhHl",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 492,
      "stepId": "uhHr",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 493,
      "stepId": "uhSet",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 494,
      "stepId": "calcBf",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 495,
      "stepId": "bfReturn",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 496,
      "stepId": "caseLL",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 497,
      "stepId": "caseRR",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 498,
      "stepId": "caseLR",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 499,
      "stepId": "caseRL",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 30
    },
    {
      "step": 500,
      "stepId": "returnNode",
      "key": 100,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 501,
      "stepId": "updateHeight",
      "key": 100,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 502,
      "stepId": "uhHl",
      "key": 100,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 503,
      "stepId": "uhHr",
      "key": 100,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 504,
      "stepId": "uhSet",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 505,
      "stepId": "calcBf",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 506,
      "stepId": "bfReturn",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 507,
      "stepId": "caseLL",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 508,
      "stepId": "caseRR",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 509,
      "stepId": "caseLR",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 510,
      "stepId": "caseRL",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 511,
      "stepId": "returnNode",
      "key": 100,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 512,
      "stepId": "mainLoop",
      "key": 90,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 513,
      "stepId": "callInsert",
      "key": 90,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 514,
      "stepId": "checkNull",
      "key": 90,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 515,
      "stepId": "checkLess",
      "key": 90,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 516,
      "stepId": "checkGreater",
      "key": 90,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 517,
      "stepId": "goRight",
      "key": 90,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 518,
      "stepId": "checkNull",
      "key": 90,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 519,
      "stepId": "checkLess",
      "key": 90,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 520,
      "stepId": "checkGreater",
      "key": 90,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 521,
      "stepId": "goRight",
      "key": 90,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 522,
      "stepId": "checkNull",
      "key": 90,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 523,
      "stepId": "checkLess",
      "key": 90,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 524,
      "stepId": "goLeft",
      "key": 90,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 525,
      "stepId": "checkNull",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 526,
      "stepId": "checkLess",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 527,
      "stepId": "checkGreater",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 528,
      "stepId": "goRight",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 529,
      "stepId": "checkNull",
      "key": 90,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 530,
      "stepId": "returnNew",
      "key": 90,
      "node": 90,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 531,
      "stepId": "updateHeight",
      "key": 90,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 532,
      "stepId": "uhHl",
      "key": 90,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 533,
      "stepId": "uhHr",
      "key": 90,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 534,
      "stepId": "uhSet",
      "key": 90,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 535,
      "stepId": "calcBf",
      "key": 90,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 536,
      "stepId": "bfReturn",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 537,
      "stepId": "caseLL",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 538,
      "stepId": "caseRR",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 539,
      "stepId": "caseLR",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 540,
      "stepId": "caseRL",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 541,
      "stepId": "returnNode",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 542,
      "stepId": "updateHeight",
      "key": 90,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 543,
      "stepId": "uhHl",
      "key": 90,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 544,
      "stepId": "uhHr",
      "key": 90,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 545,
      "stepId": "uhSet",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 546,
      "stepId": "calcBf",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 547,
      "stepId": "bfReturn",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 548,
      "stepId": "caseLL",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 549,
      "stepId": "caseRR",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 550,
      "stepId": "caseLR",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 551,
      "stepId": "caseRL",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 30
    },
    {
      "step": 552,
      "stepId": "returnNode",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 553,
      "stepId": "updateHeight",
      "key": 90,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 554,
      "stepId": "uhHl",
      "key": 90,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 555,
      "stepId": "uhHr",
      "key": 90,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 556,
      "stepId": "uhSet",
      "key": 90,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 557,
      "stepId": "calcBf",
      "key": 90,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 558,
      "stepId": "bfReturn",
      "key": 90,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 559,
      "stepId": "caseLL",
      "key": 90,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 560,
      "stepId": "caseRR",
      "key": 90,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 561,
      "stepId": "caseLR",
      "key": 90,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30
    },
    {
      "step": 562,
      "stepId": "caseRL",
      "key": 90,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 563,
      "stepId": "returnNode",
      "key": 90,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30
    },
    {
      "step": 564,
      "stepId": "updateHeight",
      "key": 90,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 565,
      "stepId": "uhHl",
      "key": 90,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 30
    },
    {
      "step": 566,
      "stepId": "uhHr",
      "key": 90,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 30
    },
    {
      "step": 567,
      "stepId": "uhSet",
      "key": 90,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 30
    },
    {
      "step": 568,
      "stepId": "calcBf",
      "key": 90,
      "node": 30,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 569,
      "stepId": "bfReturn",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 30
    },
    {
      "step": 570,
      "stepId": "caseLL",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 30
    },
    {
      "step": 571,
      "stepId": "caseRR",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 572,
      "stepId": "rotateLeftRR",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 573,
      "stepId": "rotL_y",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 3,
      "root": 30,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 574,
      "stepId": "rotL_T2",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 3,
      "root": 30,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 575,
      "stepId": "rotL_yLeft",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 3,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 576,
      "stepId": "rotL_zRight",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 3,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 577,
      "stepId": "rotL_updZ",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 3,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 578,
      "stepId": "uhHl",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 3,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 579,
      "stepId": "uhHr",
      "key": 90,
      "node": 30,
      "bf": -2,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 1,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 580,
      "stepId": "uhSet",
      "key": 90,
      "node": 30,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 1,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 581,
      "stepId": "rotL_updY",
      "key": 90,
      "node": 30,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 1,
      "height_right": 1,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 582,
      "stepId": "uhHl",
      "key": 90,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 2,
      "height_right": 1,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 583,
      "stepId": "uhHr",
      "key": 90,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 2,
      "height_right": 2,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 584,
      "stepId": "uhSet",
      "key": 90,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 2,
      "height_right": 2,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 585,
      "stepId": "rotL_return",
      "key": 90,
      "node": 70,
      "bf": 0,
      "case": "RR",
      "new_root": 70,
      "height_left": 2,
      "height_right": 2,
      "root": 70,
      "temp": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 586,
      "stepId": "mainLoop",
      "key": 120,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 587,
      "stepId": "callInsert",
      "key": 120,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 588,
      "stepId": "checkNull",
      "key": 120,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 589,
      "stepId": "checkLess",
      "key": 120,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 590,
      "stepId": "checkGreater",
      "key": 120,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 591,
      "stepId": "goRight",
      "key": 120,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 592,
      "stepId": "checkNull",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 593,
      "stepId": "checkLess",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 594,
      "stepId": "checkGreater",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 595,
      "stepId": "goRight",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 596,
      "stepId": "checkNull",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 597,
      "stepId": "checkLess",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 598,
      "stepId": "checkGreater",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 599,
      "stepId": "goRight",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 600,
      "stepId": "checkNull",
      "key": 120,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 601,
      "stepId": "returnNew",
      "key": 120,
      "node": 120,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 602,
      "stepId": "updateHeight",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 603,
      "stepId": "uhHl",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 70,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 604,
      "stepId": "uhHr",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 605,
      "stepId": "uhSet",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 606,
      "stepId": "calcBf",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 607,
      "stepId": "bfReturn",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 608,
      "stepId": "caseLL",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 609,
      "stepId": "caseRR",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 610,
      "stepId": "caseLR",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 611,
      "stepId": "caseRL",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 70
    },
    {
      "step": 612,
      "stepId": "returnNode",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 613,
      "stepId": "updateHeight",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 614,
      "stepId": "uhHl",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 70
    },
    {
      "step": 615,
      "stepId": "uhHr",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70
    },
    {
      "step": 616,
      "stepId": "uhSet",
      "key": 120,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70
    },
    {
      "step": 617,
      "stepId": "calcBf",
      "key": 120,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70
    },
    {
      "step": 618,
      "stepId": "bfReturn",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 619,
      "stepId": "caseLL",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70
    },
    {
      "step": 620,
      "stepId": "caseRR",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70
    },
    {
      "step": 621,
      "stepId": "caseLR",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 622,
      "stepId": "caseRL",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 70
    },
    {
      "step": 623,
      "stepId": "returnNode",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 624,
      "stepId": "updateHeight",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    },
    {
      "step": 625,
      "stepId": "uhHl",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 70
    },
    {
      "step": 626,
      "stepId": "uhHr",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 627,
      "stepId": "uhSet",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 628,
      "stepId": "calcBf",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 629,
      "stepId": "bfReturn",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 630,
      "stepId": "caseLL",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 631,
      "stepId": "caseRR",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 632,
      "stepId": "caseLR",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 633,
      "stepId": "caseRL",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 70
    },
    {
      "step": 634,
      "stepId": "returnNode",
      "key": 120,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 70
    }
  ],
  "meta": {
    "totalRows": 634,
    "blankRows": 159,
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
