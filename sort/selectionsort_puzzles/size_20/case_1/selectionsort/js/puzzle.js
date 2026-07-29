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
    586,
    892,
    456,
    349,
    266,
    94,
    944,
    940,
    842,
    615,
    967,
    755,
    501,
    483,
    420,
    413,
    243,
    218,
    203,
    42
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
    5,
    7,
    15,
    21,
    28,
    29,
    34,
    37,
    44,
    48,
    49,
    55,
    58,
    64,
    65,
    66,
    67,
    71,
    73,
    74,
    75,
    84,
    90,
    96,
    97,
    107,
    109,
    113,
    115,
    116,
    118,
    120,
    124,
    125,
    128,
    129,
    130,
    135,
    136,
    137,
    139,
    141,
    144,
    145,
    149,
    150,
    151,
    154,
    155,
    158,
    159,
    163,
    164,
    169,
    178,
    182,
    184,
    188,
    190,
    198,
    199,
    201,
    203,
    209,
    214,
    218,
    224,
    230,
    233,
    236,
    238,
    241,
    243,
    246,
    249,
    250,
    251,
    252,
    254,
    255,
    259,
    260,
    273,
    279,
    285,
    290,
    294,
    296,
    298,
    299,
    300,
    302,
    308,
    311,
    316,
    319,
    320,
    327,
    330,
    331,
    339,
    340,
    343,
    345,
    347,
    352,
    356,
    359,
    360,
    361,
    362,
    365,
    370,
    373,
    381
  ],
  "answers": {
    "5": {
      "stepId": "forJ",
      "i": "0",
      "j": "1",
      "minIndex": "0"
    },
    "7": {
      "stepId": "compare",
      "i": "0",
      "j": "2",
      "minIndex": "0"
    },
    "15": {
      "stepId": "compare",
      "i": "0",
      "j": "6",
      "minIndex": "5"
    },
    "21": {
      "stepId": "compare",
      "i": "0",
      "j": "12",
      "minIndex": "5"
    },
    "28": {
      "stepId": "compare",
      "i": "0",
      "j": "19",
      "minIndex": "5"
    },
    "29": {
      "stepId": "updateMin",
      "i": "0",
      "j": "19",
      "minIndex": "19"
    },
    "34": {
      "stepId": "setMin",
      "i": "1",
      "j": "\u2014",
      "minIndex": "1"
    },
    "37": {
      "stepId": "compare",
      "i": "1",
      "j": "2",
      "minIndex": "1"
    },
    "44": {
      "stepId": "updateMin",
      "i": "1",
      "j": "5",
      "minIndex": "5"
    },
    "48": {
      "stepId": "compare",
      "i": "1",
      "j": "9",
      "minIndex": "5"
    },
    "49": {
      "stepId": "compare",
      "i": "1",
      "j": "10",
      "minIndex": "5"
    },
    "55": {
      "stepId": "compare",
      "i": "1",
      "j": "16",
      "minIndex": "5"
    },
    "58": {
      "stepId": "compare",
      "i": "1",
      "j": "19",
      "minIndex": "5"
    },
    "64": {
      "stepId": "markRange",
      "i": "2",
      "j": "\u2014",
      "minIndex": "2"
    },
    "65": {
      "stepId": "forJ",
      "i": "2",
      "j": "3",
      "minIndex": "2"
    },
    "66": {
      "stepId": "compare",
      "i": "2",
      "j": "3",
      "minIndex": "2"
    },
    "67": {
      "stepId": "updateMin",
      "i": "2",
      "j": "3",
      "minIndex": "3"
    },
    "71": {
      "stepId": "compare",
      "i": "2",
      "j": "6",
      "minIndex": "4"
    },
    "73": {
      "stepId": "compare",
      "i": "2",
      "j": "8",
      "minIndex": "4"
    },
    "74": {
      "stepId": "compare",
      "i": "2",
      "j": "9",
      "minIndex": "4"
    },
    "75": {
      "stepId": "compare",
      "i": "2",
      "j": "10",
      "minIndex": "4"
    },
    "84": {
      "stepId": "updateMin",
      "i": "2",
      "j": "17",
      "minIndex": "17"
    },
    "90": {
      "stepId": "markSortedI",
      "i": "2",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "96": {
      "stepId": "updateMin",
      "i": "3",
      "j": "4",
      "minIndex": "4"
    },
    "97": {
      "stepId": "compare",
      "i": "3",
      "j": "5",
      "minIndex": "4"
    },
    "107": {
      "stepId": "compare",
      "i": "3",
      "j": "15",
      "minIndex": "4"
    },
    "109": {
      "stepId": "updateMin",
      "i": "3",
      "j": "16",
      "minIndex": "16"
    },
    "113": {
      "stepId": "compare",
      "i": "3",
      "j": "19",
      "minIndex": "17"
    },
    "115": {
      "stepId": "swapMin",
      "i": "3",
      "j": "\u2014",
      "minIndex": "3"
    },
    "116": {
      "stepId": "markSortedI",
      "i": "3",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "118": {
      "stepId": "setMin",
      "i": "4",
      "j": "\u2014",
      "minIndex": "4"
    },
    "120": {
      "stepId": "forJ",
      "i": "4",
      "j": "5",
      "minIndex": "4"
    },
    "124": {
      "stepId": "compare",
      "i": "4",
      "j": "8",
      "minIndex": "4"
    },
    "125": {
      "stepId": "compare",
      "i": "4",
      "j": "9",
      "minIndex": "4"
    },
    "128": {
      "stepId": "compare",
      "i": "4",
      "j": "12",
      "minIndex": "4"
    },
    "129": {
      "stepId": "compare",
      "i": "4",
      "j": "13",
      "minIndex": "4"
    },
    "130": {
      "stepId": "compare",
      "i": "4",
      "j": "14",
      "minIndex": "4"
    },
    "135": {
      "stepId": "compare",
      "i": "4",
      "j": "18",
      "minIndex": "16"
    },
    "136": {
      "stepId": "compare",
      "i": "4",
      "j": "19",
      "minIndex": "16"
    },
    "137": {
      "stepId": "checkSwap",
      "i": "4",
      "j": "\u2014",
      "minIndex": "16"
    },
    "139": {
      "stepId": "markSortedI",
      "i": "4",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "141": {
      "stepId": "setMin",
      "i": "5",
      "j": "\u2014",
      "minIndex": "5"
    },
    "144": {
      "stepId": "compare",
      "i": "5",
      "j": "6",
      "minIndex": "5"
    },
    "145": {
      "stepId": "compare",
      "i": "5",
      "j": "7",
      "minIndex": "5"
    },
    "149": {
      "stepId": "updateMin",
      "i": "5",
      "j": "9",
      "minIndex": "9"
    },
    "150": {
      "stepId": "compare",
      "i": "5",
      "j": "10",
      "minIndex": "9"
    },
    "151": {
      "stepId": "compare",
      "i": "5",
      "j": "11",
      "minIndex": "9"
    },
    "154": {
      "stepId": "compare",
      "i": "5",
      "j": "13",
      "minIndex": "12"
    },
    "155": {
      "stepId": "updateMin",
      "i": "5",
      "j": "13",
      "minIndex": "13"
    },
    "158": {
      "stepId": "compare",
      "i": "5",
      "j": "15",
      "minIndex": "14"
    },
    "159": {
      "stepId": "updateMin",
      "i": "5",
      "j": "15",
      "minIndex": "15"
    },
    "163": {
      "stepId": "compare",
      "i": "5",
      "j": "18",
      "minIndex": "16"
    },
    "164": {
      "stepId": "compare",
      "i": "5",
      "j": "19",
      "minIndex": "16"
    },
    "169": {
      "stepId": "setMin",
      "i": "6",
      "j": "\u2014",
      "minIndex": "6"
    },
    "178": {
      "stepId": "compare",
      "i": "6",
      "j": "10",
      "minIndex": "9"
    },
    "182": {
      "stepId": "compare",
      "i": "6",
      "j": "13",
      "minIndex": "12"
    },
    "184": {
      "stepId": "compare",
      "i": "6",
      "j": "14",
      "minIndex": "13"
    },
    "188": {
      "stepId": "compare",
      "i": "6",
      "j": "16",
      "minIndex": "15"
    },
    "190": {
      "stepId": "updateMin",
      "i": "6",
      "j": "17",
      "minIndex": "17"
    },
    "198": {
      "stepId": "markRange",
      "i": "7",
      "j": "\u2014",
      "minIndex": "7"
    },
    "199": {
      "stepId": "forJ",
      "i": "7",
      "j": "8",
      "minIndex": "7"
    },
    "201": {
      "stepId": "updateMin",
      "i": "7",
      "j": "8",
      "minIndex": "8"
    },
    "203": {
      "stepId": "updateMin",
      "i": "7",
      "j": "9",
      "minIndex": "9"
    },
    "209": {
      "stepId": "updateMin",
      "i": "7",
      "j": "13",
      "minIndex": "13"
    },
    "214": {
      "stepId": "compare",
      "i": "7",
      "j": "16",
      "minIndex": "15"
    },
    "218": {
      "stepId": "checkSwap",
      "i": "7",
      "j": "\u2014",
      "minIndex": "15"
    },
    "224": {
      "stepId": "forJ",
      "i": "8",
      "j": "9",
      "minIndex": "8"
    },
    "230": {
      "stepId": "updateMin",
      "i": "8",
      "j": "12",
      "minIndex": "12"
    },
    "233": {
      "stepId": "compare",
      "i": "8",
      "j": "14",
      "minIndex": "13"
    },
    "236": {
      "stepId": "compare",
      "i": "8",
      "j": "16",
      "minIndex": "14"
    },
    "238": {
      "stepId": "compare",
      "i": "8",
      "j": "18",
      "minIndex": "14"
    },
    "241": {
      "stepId": "swapMin",
      "i": "8",
      "j": "\u2014",
      "minIndex": "8"
    },
    "243": {
      "stepId": "forI",
      "i": "9",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "246": {
      "stepId": "forJ",
      "i": "9",
      "j": "10",
      "minIndex": "9"
    },
    "249": {
      "stepId": "compare",
      "i": "9",
      "j": "12",
      "minIndex": "9"
    },
    "250": {
      "stepId": "updateMin",
      "i": "9",
      "j": "12",
      "minIndex": "12"
    },
    "251": {
      "stepId": "compare",
      "i": "9",
      "j": "13",
      "minIndex": "12"
    },
    "252": {
      "stepId": "updateMin",
      "i": "9",
      "j": "13",
      "minIndex": "13"
    },
    "254": {
      "stepId": "compare",
      "i": "9",
      "j": "15",
      "minIndex": "13"
    },
    "255": {
      "stepId": "compare",
      "i": "9",
      "j": "16",
      "minIndex": "13"
    },
    "259": {
      "stepId": "compare",
      "i": "9",
      "j": "19",
      "minIndex": "18"
    },
    "260": {
      "stepId": "checkSwap",
      "i": "9",
      "j": "\u2014",
      "minIndex": "18"
    },
    "273": {
      "stepId": "compare",
      "i": "10",
      "j": "14",
      "minIndex": "13"
    },
    "279": {
      "stepId": "checkSwap",
      "i": "10",
      "j": "\u2014",
      "minIndex": "13"
    },
    "285": {
      "stepId": "forJ",
      "i": "11",
      "j": "12",
      "minIndex": "11"
    },
    "290": {
      "stepId": "compare",
      "i": "11",
      "j": "15",
      "minIndex": "12"
    },
    "294": {
      "stepId": "compare",
      "i": "11",
      "j": "19",
      "minIndex": "12"
    },
    "296": {
      "stepId": "swapMin",
      "i": "11",
      "j": "\u2014",
      "minIndex": "11"
    },
    "298": {
      "stepId": "forI",
      "i": "12",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "299": {
      "stepId": "setMin",
      "i": "12",
      "j": "\u2014",
      "minIndex": "12"
    },
    "300": {
      "stepId": "markRange",
      "i": "12",
      "j": "\u2014",
      "minIndex": "12"
    },
    "302": {
      "stepId": "compare",
      "i": "12",
      "j": "13",
      "minIndex": "12"
    },
    "308": {
      "stepId": "updateMin",
      "i": "12",
      "j": "18",
      "minIndex": "18"
    },
    "311": {
      "stepId": "checkSwap",
      "i": "12",
      "j": "\u2014",
      "minIndex": "19"
    },
    "316": {
      "stepId": "markRange",
      "i": "13",
      "j": "\u2014",
      "minIndex": "13"
    },
    "319": {
      "stepId": "updateMin",
      "i": "13",
      "j": "14",
      "minIndex": "14"
    },
    "320": {
      "stepId": "compare",
      "i": "13",
      "j": "15",
      "minIndex": "14"
    },
    "327": {
      "stepId": "swapMin",
      "i": "13",
      "j": "\u2014",
      "minIndex": "13"
    },
    "330": {
      "stepId": "setMin",
      "i": "14",
      "j": "\u2014",
      "minIndex": "14"
    },
    "331": {
      "stepId": "markRange",
      "i": "14",
      "j": "\u2014",
      "minIndex": "14"
    },
    "339": {
      "stepId": "checkSwap",
      "i": "14",
      "j": "\u2014",
      "minIndex": "19"
    },
    "340": {
      "stepId": "swapMin",
      "i": "14",
      "j": "\u2014",
      "minIndex": "14"
    },
    "343": {
      "stepId": "setMin",
      "i": "15",
      "j": "\u2014",
      "minIndex": "15"
    },
    "345": {
      "stepId": "forJ",
      "i": "15",
      "j": "16",
      "minIndex": "15"
    },
    "347": {
      "stepId": "updateMin",
      "i": "15",
      "j": "16",
      "minIndex": "16"
    },
    "352": {
      "stepId": "checkSwap",
      "i": "15",
      "j": "\u2014",
      "minIndex": "19"
    },
    "356": {
      "stepId": "setMin",
      "i": "16",
      "j": "\u2014",
      "minIndex": "16"
    },
    "359": {
      "stepId": "compare",
      "i": "16",
      "j": "17",
      "minIndex": "16"
    },
    "360": {
      "stepId": "compare",
      "i": "16",
      "j": "18",
      "minIndex": "16"
    },
    "361": {
      "stepId": "compare",
      "i": "16",
      "j": "19",
      "minIndex": "16"
    },
    "362": {
      "stepId": "checkSwap",
      "i": "16",
      "j": "\u2014",
      "minIndex": "16"
    },
    "365": {
      "stepId": "setMin",
      "i": "17",
      "j": "\u2014",
      "minIndex": "17"
    },
    "370": {
      "stepId": "updateMin",
      "i": "17",
      "j": "19",
      "minIndex": "19"
    },
    "373": {
      "stepId": "markSortedI",
      "i": "17",
      "j": "\u2014",
      "minIndex": "\u2014"
    },
    "381": {
      "stepId": "swapMin",
      "i": "18",
      "j": "\u2014",
      "minIndex": "18"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 129,
        "value": "compare"
      },
      {
        "id": 17,
        "value": "compare"
      },
      {
        "id": 385,
        "value": "compare"
      },
      {
        "id": 441,
        "value": "checkSwap"
      },
      {
        "id": 457,
        "value": "swapMin"
      },
      {
        "id": 197,
        "value": "compare"
      },
      {
        "id": 101,
        "value": "compare"
      },
      {
        "id": 65,
        "value": "updateMin"
      },
      {
        "id": 321,
        "value": "compare"
      },
      {
        "id": 345,
        "value": "compare"
      },
      {
        "id": 329,
        "value": "compare"
      },
      {
        "id": 165,
        "value": "setMin"
      },
      {
        "id": 305,
        "value": "compare"
      },
      {
        "id": 309,
        "value": "updateMin"
      },
      {
        "id": 285,
        "value": "swapMin"
      },
      {
        "id": 357,
        "value": "setMin"
      },
      {
        "id": 233,
        "value": "updateMin"
      },
      {
        "id": 89,
        "value": "markSortedI"
      },
      {
        "id": 353,
        "value": "forI"
      },
      {
        "id": 253,
        "value": "updateMin"
      },
      {
        "id": 29,
        "value": "compare"
      },
      {
        "id": 421,
        "value": "checkSwap"
      },
      {
        "id": 205,
        "value": "compare"
      },
      {
        "id": 193,
        "value": "updateMin"
      },
      {
        "id": 317,
        "value": "compare"
      },
      {
        "id": 113,
        "value": "swapMin"
      },
      {
        "id": 425,
        "value": "setMin"
      },
      {
        "id": 249,
        "value": "updateMin"
      },
      {
        "id": 61,
        "value": "compare"
      },
      {
        "id": 337,
        "value": "forJ"
      },
      {
        "id": 173,
        "value": "compare"
      },
      {
        "id": 349,
        "value": "swapMin"
      },
      {
        "id": 453,
        "value": "markSortedI"
      },
      {
        "id": 9,
        "value": "compare"
      },
      {
        "id": 97,
        "value": "compare"
      },
      {
        "id": 153,
        "value": "compare"
      },
      {
        "id": 449,
        "value": "updateMin"
      },
      {
        "id": 361,
        "value": "markRange"
      },
      {
        "id": 265,
        "value": "forJ"
      },
      {
        "id": 401,
        "value": "checkSwap"
      },
      {
        "id": 145,
        "value": "compare"
      },
      {
        "id": 313,
        "value": "compare"
      },
      {
        "id": 13,
        "value": "compare"
      },
      {
        "id": 81,
        "value": "compare"
      },
      {
        "id": 241,
        "value": "forJ"
      },
      {
        "id": 41,
        "value": "compare"
      },
      {
        "id": 273,
        "value": "compare"
      },
      {
        "id": 289,
        "value": "forI"
      },
      {
        "id": 209,
        "value": "compare"
      },
      {
        "id": 157,
        "value": "checkSwap"
      },
      {
        "id": 149,
        "value": "compare"
      },
      {
        "id": 333,
        "value": "checkSwap"
      },
      {
        "id": 429,
        "value": "compare"
      },
      {
        "id": 73,
        "value": "compare"
      },
      {
        "id": 45,
        "value": "compare"
      },
      {
        "id": 445,
        "value": "setMin"
      },
      {
        "id": 93,
        "value": "updateMin"
      },
      {
        "id": 1,
        "value": "forJ"
      },
      {
        "id": 49,
        "value": "compare"
      },
      {
        "id": 301,
        "value": "updateMin"
      },
      {
        "id": 213,
        "value": "setMin"
      },
      {
        "id": 57,
        "value": "forJ"
      },
      {
        "id": 393,
        "value": "setMin"
      },
      {
        "id": 261,
        "value": "checkSwap"
      },
      {
        "id": 281,
        "value": "compare"
      },
      {
        "id": 37,
        "value": "compare"
      },
      {
        "id": 189,
        "value": "compare"
      },
      {
        "id": 169,
        "value": "compare"
      },
      {
        "id": 397,
        "value": "markRange"
      },
      {
        "id": 225,
        "value": "compare"
      },
      {
        "id": 125,
        "value": "forJ"
      },
      {
        "id": 369,
        "value": "updateMin"
      },
      {
        "id": 269,
        "value": "updateMin"
      },
      {
        "id": 229,
        "value": "compare"
      },
      {
        "id": 373,
        "value": "checkSwap"
      },
      {
        "id": 297,
        "value": "compare"
      },
      {
        "id": 105,
        "value": "updateMin"
      },
      {
        "id": 21,
        "value": "updateMin"
      },
      {
        "id": 217,
        "value": "compare"
      },
      {
        "id": 77,
        "value": "compare"
      },
      {
        "id": 141,
        "value": "compare"
      },
      {
        "id": 381,
        "value": "updateMin"
      },
      {
        "id": 365,
        "value": "compare"
      },
      {
        "id": 221,
        "value": "compare"
      },
      {
        "id": 325,
        "value": "checkSwap"
      },
      {
        "id": 185,
        "value": "compare"
      },
      {
        "id": 109,
        "value": "compare"
      },
      {
        "id": 177,
        "value": "updateMin"
      },
      {
        "id": 257,
        "value": "compare"
      },
      {
        "id": 433,
        "value": "compare"
      },
      {
        "id": 33,
        "value": "updateMin"
      },
      {
        "id": 117,
        "value": "markSortedI"
      },
      {
        "id": 277,
        "value": "compare"
      },
      {
        "id": 437,
        "value": "compare"
      },
      {
        "id": 161,
        "value": "markSortedI"
      },
      {
        "id": 409,
        "value": "setMin"
      },
      {
        "id": 293,
        "value": "forJ"
      },
      {
        "id": 389,
        "value": "swapMin"
      },
      {
        "id": 377,
        "value": "markRange"
      },
      {
        "id": 121,
        "value": "setMin"
      },
      {
        "id": 201,
        "value": "updateMin"
      },
      {
        "id": 181,
        "value": "compare"
      },
      {
        "id": 405,
        "value": "swapMin"
      },
      {
        "id": 237,
        "value": "markRange"
      },
      {
        "id": 413,
        "value": "forJ"
      },
      {
        "id": 85,
        "value": "updateMin"
      },
      {
        "id": 133,
        "value": "compare"
      },
      {
        "id": 5,
        "value": "compare"
      },
      {
        "id": 341,
        "value": "compare"
      },
      {
        "id": 137,
        "value": "compare"
      },
      {
        "id": 53,
        "value": "markRange"
      },
      {
        "id": 417,
        "value": "updateMin"
      },
      {
        "id": 245,
        "value": "updateMin"
      },
      {
        "id": 25,
        "value": "setMin"
      },
      {
        "id": 69,
        "value": "compare"
      }
    ],
    "i": [
      {
        "id": 306,
        "value": "9"
      },
      {
        "id": 262,
        "value": "7"
      },
      {
        "id": 374,
        "value": "12"
      },
      {
        "id": 294,
        "value": "9"
      },
      {
        "id": 66,
        "value": "2"
      },
      {
        "id": 158,
        "value": "4"
      },
      {
        "id": 346,
        "value": "11"
      },
      {
        "id": 442,
        "value": "16"
      },
      {
        "id": 6,
        "value": "0"
      },
      {
        "id": 10,
        "value": "0"
      },
      {
        "id": 246,
        "value": "7"
      },
      {
        "id": 282,
        "value": "8"
      },
      {
        "id": 174,
        "value": "5"
      },
      {
        "id": 310,
        "value": "9"
      },
      {
        "id": 350,
        "value": "11"
      },
      {
        "id": 402,
        "value": "14"
      },
      {
        "id": 414,
        "value": "15"
      },
      {
        "id": 342,
        "value": "11"
      },
      {
        "id": 406,
        "value": "14"
      },
      {
        "id": 386,
        "value": "13"
      },
      {
        "id": 378,
        "value": "13"
      },
      {
        "id": 254,
        "value": "7"
      },
      {
        "id": 134,
        "value": "4"
      },
      {
        "id": 302,
        "value": "9"
      },
      {
        "id": 78,
        "value": "2"
      },
      {
        "id": 30,
        "value": "1"
      },
      {
        "id": 242,
        "value": "7"
      },
      {
        "id": 390,
        "value": "13"
      },
      {
        "id": 198,
        "value": "5"
      },
      {
        "id": 274,
        "value": "8"
      },
      {
        "id": 190,
        "value": "5"
      },
      {
        "id": 398,
        "value": "14"
      },
      {
        "id": 94,
        "value": "3"
      },
      {
        "id": 458,
        "value": "18"
      },
      {
        "id": 106,
        "value": "3"
      },
      {
        "id": 122,
        "value": "4"
      },
      {
        "id": 46,
        "value": "1"
      },
      {
        "id": 86,
        "value": "2"
      },
      {
        "id": 154,
        "value": "4"
      },
      {
        "id": 22,
        "value": "0"
      },
      {
        "id": 250,
        "value": "7"
      },
      {
        "id": 314,
        "value": "9"
      },
      {
        "id": 258,
        "value": "7"
      },
      {
        "id": 166,
        "value": "5"
      },
      {
        "id": 126,
        "value": "4"
      },
      {
        "id": 14,
        "value": "0"
      },
      {
        "id": 2,
        "value": "0"
      },
      {
        "id": 82,
        "value": "2"
      },
      {
        "id": 422,
        "value": "15"
      },
      {
        "id": 18,
        "value": "0"
      },
      {
        "id": 446,
        "value": "17"
      },
      {
        "id": 138,
        "value": "4"
      },
      {
        "id": 266,
        "value": "8"
      },
      {
        "id": 34,
        "value": "1"
      },
      {
        "id": 194,
        "value": "5"
      },
      {
        "id": 338,
        "value": "11"
      },
      {
        "id": 150,
        "value": "4"
      },
      {
        "id": 54,
        "value": "2"
      },
      {
        "id": 426,
        "value": "16"
      },
      {
        "id": 210,
        "value": "5"
      },
      {
        "id": 330,
        "value": "10"
      },
      {
        "id": 222,
        "value": "6"
      },
      {
        "id": 206,
        "value": "5"
      },
      {
        "id": 438,
        "value": "16"
      },
      {
        "id": 98,
        "value": "3"
      },
      {
        "id": 74,
        "value": "2"
      },
      {
        "id": 218,
        "value": "6"
      },
      {
        "id": 146,
        "value": "4"
      },
      {
        "id": 182,
        "value": "5"
      },
      {
        "id": 110,
        "value": "3"
      },
      {
        "id": 234,
        "value": "6"
      },
      {
        "id": 202,
        "value": "5"
      },
      {
        "id": 354,
        "value": "12"
      },
      {
        "id": 50,
        "value": "1"
      },
      {
        "id": 394,
        "value": "14"
      },
      {
        "id": 418,
        "value": "15"
      },
      {
        "id": 290,
        "value": "9"
      },
      {
        "id": 322,
        "value": "9"
      },
      {
        "id": 326,
        "value": "9"
      },
      {
        "id": 410,
        "value": "15"
      },
      {
        "id": 366,
        "value": "12"
      },
      {
        "id": 214,
        "value": "6"
      },
      {
        "id": 230,
        "value": "6"
      },
      {
        "id": 362,
        "value": "12"
      },
      {
        "id": 298,
        "value": "9"
      },
      {
        "id": 318,
        "value": "9"
      },
      {
        "id": 226,
        "value": "6"
      },
      {
        "id": 370,
        "value": "12"
      },
      {
        "id": 26,
        "value": "1"
      },
      {
        "id": 238,
        "value": "7"
      },
      {
        "id": 38,
        "value": "1"
      },
      {
        "id": 270,
        "value": "8"
      },
      {
        "id": 454,
        "value": "17"
      },
      {
        "id": 382,
        "value": "13"
      },
      {
        "id": 162,
        "value": "4"
      },
      {
        "id": 102,
        "value": "3"
      },
      {
        "id": 334,
        "value": "10"
      },
      {
        "id": 450,
        "value": "17"
      },
      {
        "id": 58,
        "value": "2"
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
        "id": 278,
        "value": "8"
      },
      {
        "id": 178,
        "value": "5"
      },
      {
        "id": 142,
        "value": "4"
      },
      {
        "id": 70,
        "value": "2"
      },
      {
        "id": 286,
        "value": "8"
      },
      {
        "id": 118,
        "value": "3"
      },
      {
        "id": 90,
        "value": "2"
      },
      {
        "id": 434,
        "value": "16"
      },
      {
        "id": 358,
        "value": "12"
      },
      {
        "id": 430,
        "value": "16"
      },
      {
        "id": 130,
        "value": "4"
      },
      {
        "id": 186,
        "value": "5"
      },
      {
        "id": 114,
        "value": "3"
      },
      {
        "id": 170,
        "value": "5"
      }
    ],
    "j": [
      {
        "id": 379,
        "value": "\u2014"
      },
      {
        "id": 351,
        "value": "\u2014"
      },
      {
        "id": 295,
        "value": "10"
      },
      {
        "id": 275,
        "value": "14"
      },
      {
        "id": 227,
        "value": "14"
      },
      {
        "id": 31,
        "value": "2"
      },
      {
        "id": 43,
        "value": "10"
      },
      {
        "id": 287,
        "value": "\u2014"
      },
      {
        "id": 143,
        "value": "13"
      },
      {
        "id": 187,
        "value": "11"
      },
      {
        "id": 395,
        "value": "\u2014"
      },
      {
        "id": 203,
        "value": "15"
      },
      {
        "id": 191,
        "value": "13"
      },
      {
        "id": 411,
        "value": "\u2014"
      },
      {
        "id": 207,
        "value": "18"
      },
      {
        "id": 39,
        "value": "9"
      },
      {
        "id": 155,
        "value": "19"
      },
      {
        "id": 363,
        "value": "\u2014"
      },
      {
        "id": 347,
        "value": "19"
      },
      {
        "id": 83,
        "value": "10"
      },
      {
        "id": 439,
        "value": "19"
      },
      {
        "id": 355,
        "value": "\u2014"
      },
      {
        "id": 255,
        "value": "13"
      },
      {
        "id": 135,
        "value": "9"
      },
      {
        "id": 199,
        "value": "15"
      },
      {
        "id": 151,
        "value": "18"
      },
      {
        "id": 247,
        "value": "8"
      },
      {
        "id": 15,
        "value": "12"
      },
      {
        "id": 51,
        "value": "19"
      },
      {
        "id": 407,
        "value": "\u2014"
      },
      {
        "id": 11,
        "value": "6"
      },
      {
        "id": 223,
        "value": "13"
      },
      {
        "id": 375,
        "value": "\u2014"
      },
      {
        "id": 271,
        "value": "12"
      },
      {
        "id": 215,
        "value": "\u2014"
      },
      {
        "id": 243,
        "value": "8"
      },
      {
        "id": 339,
        "value": "12"
      },
      {
        "id": 427,
        "value": "\u2014"
      },
      {
        "id": 323,
        "value": "19"
      },
      {
        "id": 71,
        "value": "6"
      },
      {
        "id": 47,
        "value": "16"
      },
      {
        "id": 415,
        "value": "16"
      },
      {
        "id": 163,
        "value": "\u2014"
      },
      {
        "id": 195,
        "value": "13"
      },
      {
        "id": 55,
        "value": "\u2014"
      },
      {
        "id": 455,
        "value": "\u2014"
      },
      {
        "id": 171,
        "value": "6"
      },
      {
        "id": 211,
        "value": "19"
      },
      {
        "id": 311,
        "value": "13"
      },
      {
        "id": 95,
        "value": "4"
      },
      {
        "id": 335,
        "value": "\u2014"
      },
      {
        "id": 99,
        "value": "5"
      },
      {
        "id": 159,
        "value": "\u2014"
      },
      {
        "id": 7,
        "value": "2"
      },
      {
        "id": 267,
        "value": "9"
      },
      {
        "id": 279,
        "value": "16"
      },
      {
        "id": 19,
        "value": "19"
      },
      {
        "id": 127,
        "value": "5"
      },
      {
        "id": 35,
        "value": "5"
      },
      {
        "id": 327,
        "value": "\u2014"
      },
      {
        "id": 119,
        "value": "\u2014"
      },
      {
        "id": 67,
        "value": "3"
      },
      {
        "id": 179,
        "value": "9"
      },
      {
        "id": 383,
        "value": "14"
      },
      {
        "id": 391,
        "value": "\u2014"
      },
      {
        "id": 263,
        "value": "\u2014"
      },
      {
        "id": 307,
        "value": "13"
      },
      {
        "id": 139,
        "value": "12"
      },
      {
        "id": 235,
        "value": "17"
      },
      {
        "id": 423,
        "value": "\u2014"
      },
      {
        "id": 431,
        "value": "17"
      },
      {
        "id": 239,
        "value": "\u2014"
      },
      {
        "id": 167,
        "value": "\u2014"
      },
      {
        "id": 63,
        "value": "3"
      },
      {
        "id": 387,
        "value": "15"
      },
      {
        "id": 299,
        "value": "12"
      },
      {
        "id": 331,
        "value": "14"
      },
      {
        "id": 59,
        "value": "3"
      },
      {
        "id": 399,
        "value": "\u2014"
      },
      {
        "id": 371,
        "value": "18"
      },
      {
        "id": 419,
        "value": "16"
      },
      {
        "id": 3,
        "value": "1"
      },
      {
        "id": 291,
        "value": "\u2014"
      },
      {
        "id": 359,
        "value": "\u2014"
      },
      {
        "id": 451,
        "value": "19"
      },
      {
        "id": 231,
        "value": "16"
      },
      {
        "id": 403,
        "value": "\u2014"
      },
      {
        "id": 91,
        "value": "\u2014"
      },
      {
        "id": 27,
        "value": "\u2014"
      },
      {
        "id": 131,
        "value": "8"
      },
      {
        "id": 147,
        "value": "14"
      },
      {
        "id": 23,
        "value": "19"
      },
      {
        "id": 443,
        "value": "\u2014"
      },
      {
        "id": 315,
        "value": "15"
      },
      {
        "id": 175,
        "value": "7"
      },
      {
        "id": 303,
        "value": "12"
      },
      {
        "id": 447,
        "value": "\u2014"
      },
      {
        "id": 459,
        "value": "\u2014"
      },
      {
        "id": 107,
        "value": "16"
      },
      {
        "id": 75,
        "value": "8"
      },
      {
        "id": 283,
        "value": "18"
      },
      {
        "id": 115,
        "value": "\u2014"
      },
      {
        "id": 319,
        "value": "16"
      },
      {
        "id": 123,
        "value": "\u2014"
      },
      {
        "id": 111,
        "value": "19"
      },
      {
        "id": 435,
        "value": "18"
      },
      {
        "id": 183,
        "value": "10"
      },
      {
        "id": 79,
        "value": "9"
      },
      {
        "id": 219,
        "value": "10"
      },
      {
        "id": 367,
        "value": "13"
      },
      {
        "id": 103,
        "value": "15"
      },
      {
        "id": 87,
        "value": "17"
      },
      {
        "id": 259,
        "value": "16"
      },
      {
        "id": 251,
        "value": "9"
      },
      {
        "id": 343,
        "value": "15"
      }
    ],
    "minIndex": [
      {
        "id": 156,
        "value": "16"
      },
      {
        "id": 224,
        "value": "12"
      },
      {
        "id": 208,
        "value": "16"
      },
      {
        "id": 168,
        "value": "5"
      },
      {
        "id": 16,
        "value": "5"
      },
      {
        "id": 416,
        "value": "15"
      },
      {
        "id": 292,
        "value": "\u2014"
      },
      {
        "id": 288,
        "value": "8"
      },
      {
        "id": 344,
        "value": "12"
      },
      {
        "id": 152,
        "value": "16"
      },
      {
        "id": 236,
        "value": "17"
      },
      {
        "id": 400,
        "value": "14"
      },
      {
        "id": 80,
        "value": "4"
      },
      {
        "id": 332,
        "value": "13"
      },
      {
        "id": 96,
        "value": "4"
      },
      {
        "id": 364,
        "value": "12"
      },
      {
        "id": 20,
        "value": "5"
      },
      {
        "id": 228,
        "value": "13"
      },
      {
        "id": 312,
        "value": "13"
      },
      {
        "id": 212,
        "value": "16"
      },
      {
        "id": 412,
        "value": "15"
      },
      {
        "id": 240,
        "value": "7"
      },
      {
        "id": 64,
        "value": "2"
      },
      {
        "id": 12,
        "value": "5"
      },
      {
        "id": 340,
        "value": "11"
      },
      {
        "id": 336,
        "value": "13"
      },
      {
        "id": 128,
        "value": "4"
      },
      {
        "id": 120,
        "value": "\u2014"
      },
      {
        "id": 296,
        "value": "9"
      },
      {
        "id": 44,
        "value": "5"
      },
      {
        "id": 196,
        "value": "13"
      },
      {
        "id": 124,
        "value": "4"
      },
      {
        "id": 108,
        "value": "16"
      },
      {
        "id": 404,
        "value": "19"
      },
      {
        "id": 260,
        "value": "15"
      },
      {
        "id": 48,
        "value": "5"
      },
      {
        "id": 180,
        "value": "9"
      },
      {
        "id": 220,
        "value": "9"
      },
      {
        "id": 100,
        "value": "4"
      },
      {
        "id": 176,
        "value": "5"
      },
      {
        "id": 40,
        "value": "5"
      },
      {
        "id": 132,
        "value": "4"
      },
      {
        "id": 424,
        "value": "19"
      },
      {
        "id": 200,
        "value": "14"
      },
      {
        "id": 68,
        "value": "3"
      },
      {
        "id": 368,
        "value": "12"
      },
      {
        "id": 192,
        "value": "12"
      },
      {
        "id": 84,
        "value": "4"
      },
      {
        "id": 256,
        "value": "13"
      },
      {
        "id": 184,
        "value": "9"
      },
      {
        "id": 272,
        "value": "12"
      },
      {
        "id": 28,
        "value": "1"
      },
      {
        "id": 164,
        "value": "\u2014"
      },
      {
        "id": 60,
        "value": "2"
      },
      {
        "id": 264,
        "value": "15"
      },
      {
        "id": 460,
        "value": "18"
      },
      {
        "id": 328,
        "value": "18"
      },
      {
        "id": 32,
        "value": "1"
      },
      {
        "id": 300,
        "value": "9"
      },
      {
        "id": 252,
        "value": "9"
      },
      {
        "id": 304,
        "value": "12"
      },
      {
        "id": 268,
        "value": "8"
      },
      {
        "id": 56,
        "value": "2"
      },
      {
        "id": 428,
        "value": "16"
      },
      {
        "id": 140,
        "value": "4"
      },
      {
        "id": 24,
        "value": "19"
      },
      {
        "id": 72,
        "value": "4"
      },
      {
        "id": 388,
        "value": "14"
      },
      {
        "id": 8,
        "value": "0"
      },
      {
        "id": 308,
        "value": "12"
      },
      {
        "id": 280,
        "value": "14"
      },
      {
        "id": 324,
        "value": "18"
      },
      {
        "id": 136,
        "value": "4"
      },
      {
        "id": 456,
        "value": "\u2014"
      },
      {
        "id": 408,
        "value": "14"
      },
      {
        "id": 372,
        "value": "18"
      },
      {
        "id": 112,
        "value": "17"
      },
      {
        "id": 440,
        "value": "16"
      },
      {
        "id": 4,
        "value": "0"
      },
      {
        "id": 360,
        "value": "12"
      },
      {
        "id": 188,
        "value": "9"
      },
      {
        "id": 316,
        "value": "13"
      },
      {
        "id": 284,
        "value": "14"
      },
      {
        "id": 348,
        "value": "12"
      },
      {
        "id": 420,
        "value": "16"
      },
      {
        "id": 452,
        "value": "19"
      },
      {
        "id": 396,
        "value": "14"
      },
      {
        "id": 52,
        "value": "5"
      },
      {
        "id": 148,
        "value": "4"
      },
      {
        "id": 104,
        "value": "4"
      },
      {
        "id": 376,
        "value": "19"
      },
      {
        "id": 392,
        "value": "13"
      },
      {
        "id": 432,
        "value": "16"
      },
      {
        "id": 216,
        "value": "6"
      },
      {
        "id": 380,
        "value": "13"
      },
      {
        "id": 244,
        "value": "7"
      },
      {
        "id": 320,
        "value": "13"
      },
      {
        "id": 88,
        "value": "17"
      },
      {
        "id": 276,
        "value": "13"
      },
      {
        "id": 116,
        "value": "3"
      },
      {
        "id": 444,
        "value": "16"
      },
      {
        "id": 36,
        "value": "5"
      },
      {
        "id": 144,
        "value": "4"
      },
      {
        "id": 204,
        "value": "15"
      },
      {
        "id": 160,
        "value": "16"
      },
      {
        "id": 248,
        "value": "8"
      },
      {
        "id": 352,
        "value": "11"
      },
      {
        "id": 436,
        "value": "16"
      },
      {
        "id": 76,
        "value": "4"
      },
      {
        "id": 384,
        "value": "14"
      },
      {
        "id": 448,
        "value": "17"
      },
      {
        "id": 92,
        "value": "\u2014"
      },
      {
        "id": 356,
        "value": "\u2014"
      },
      {
        "id": 232,
        "value": "15"
      },
      {
        "id": 172,
        "value": "5"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainCall",
      "n": 20,
      "i": null,
      "j": null,
      "minIndex": null,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 2,
      "stepId": "forI",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": null,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 3,
      "stepId": "setMin",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": 0,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 4,
      "stepId": "markRange",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": 0,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 5,
      "stepId": "forJ",
      "n": 20,
      "i": 0,
      "j": 1,
      "minIndex": 0,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 6,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 1,
      "minIndex": 0,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 7,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 2,
      "minIndex": 0,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 8,
      "stepId": "updateMin",
      "n": 20,
      "i": 0,
      "j": 2,
      "minIndex": 2,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 9,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 3,
      "minIndex": 2,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 10,
      "stepId": "updateMin",
      "n": 20,
      "i": 0,
      "j": 3,
      "minIndex": 3,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 11,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 4,
      "minIndex": 3,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 12,
      "stepId": "updateMin",
      "n": 20,
      "i": 0,
      "j": 4,
      "minIndex": 4,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 13,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 5,
      "minIndex": 4,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 14,
      "stepId": "updateMin",
      "n": 20,
      "i": 0,
      "j": 5,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 15,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 6,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 16,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 7,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 17,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 8,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 18,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 9,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 19,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 10,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 20,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 11,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 21,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 12,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 22,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 13,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 23,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 14,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 24,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 15,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 25,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 16,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 26,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 17,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 27,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 18,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 28,
      "stepId": "compare",
      "n": 20,
      "i": 0,
      "j": 19,
      "minIndex": 5,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 29,
      "stepId": "updateMin",
      "n": 20,
      "i": 0,
      "j": 19,
      "minIndex": 19,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 30,
      "stepId": "checkSwap",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": 19,
      "array": [
        586,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        42
      ]
    },
    {
      "step": 31,
      "stepId": "swapMin",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": 0,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 32,
      "stepId": "markSortedI",
      "n": 20,
      "i": 0,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 33,
      "stepId": "forI",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 34,
      "stepId": "setMin",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 35,
      "stepId": "markRange",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 36,
      "stepId": "forJ",
      "n": 20,
      "i": 1,
      "j": 2,
      "minIndex": 1,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 37,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 2,
      "minIndex": 1,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 38,
      "stepId": "updateMin",
      "n": 20,
      "i": 1,
      "j": 2,
      "minIndex": 2,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 39,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 3,
      "minIndex": 2,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 40,
      "stepId": "updateMin",
      "n": 20,
      "i": 1,
      "j": 3,
      "minIndex": 3,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 41,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 4,
      "minIndex": 3,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 42,
      "stepId": "updateMin",
      "n": 20,
      "i": 1,
      "j": 4,
      "minIndex": 4,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 43,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 5,
      "minIndex": 4,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 44,
      "stepId": "updateMin",
      "n": 20,
      "i": 1,
      "j": 5,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 45,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 6,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 46,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 7,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 47,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 8,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 48,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 9,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 49,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 10,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 50,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 11,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 51,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 12,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 52,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 13,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 53,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 14,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 54,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 15,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 55,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 16,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 56,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 17,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 57,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 18,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 58,
      "stepId": "compare",
      "n": 20,
      "i": 1,
      "j": 19,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 59,
      "stepId": "checkSwap",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 5,
      "array": [
        42,
        892,
        456,
        349,
        266,
        94,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 60,
      "stepId": "swapMin",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": 1,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 61,
      "stepId": "markSortedI",
      "n": 20,
      "i": 1,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 62,
      "stepId": "forI",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 63,
      "stepId": "setMin",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 64,
      "stepId": "markRange",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 65,
      "stepId": "forJ",
      "n": 20,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 66,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 3,
      "minIndex": 2,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 67,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 3,
      "minIndex": 3,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 68,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 4,
      "minIndex": 3,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 69,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 4,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 70,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 5,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 71,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 6,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
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
      "n": 20,
      "i": 2,
      "j": 7,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 73,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 8,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 74,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 9,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 75,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 10,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 76,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 11,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 77,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 12,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 78,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 13,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 79,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 14,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 80,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 15,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 81,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 16,
      "minIndex": 4,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 82,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 16,
      "minIndex": 16,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 83,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 17,
      "minIndex": 16,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 84,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 17,
      "minIndex": 17,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 85,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 18,
      "minIndex": 17,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 86,
      "stepId": "updateMin",
      "n": 20,
      "i": 2,
      "j": 18,
      "minIndex": 18,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 87,
      "stepId": "compare",
      "n": 20,
      "i": 2,
      "j": 19,
      "minIndex": 18,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 88,
      "stepId": "checkSwap",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 18,
      "array": [
        42,
        94,
        456,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        203,
        586
      ]
    },
    {
      "step": 89,
      "stepId": "swapMin",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": 2,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 90,
      "stepId": "markSortedI",
      "n": 20,
      "i": 2,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 91,
      "stepId": "forI",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 92,
      "stepId": "setMin",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 93,
      "stepId": "markRange",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 94,
      "stepId": "forJ",
      "n": 20,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 95,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 4,
      "minIndex": 3,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 96,
      "stepId": "updateMin",
      "n": 20,
      "i": 3,
      "j": 4,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 97,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 5,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 98,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 6,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 99,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 7,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 100,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 8,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 101,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 9,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 102,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 10,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 103,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 11,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 104,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 12,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 105,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 13,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 106,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 14,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 107,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 15,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 108,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 16,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 109,
      "stepId": "updateMin",
      "n": 20,
      "i": 3,
      "j": 16,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 110,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 17,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 111,
      "stepId": "updateMin",
      "n": 20,
      "i": 3,
      "j": 17,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 112,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 18,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 113,
      "stepId": "compare",
      "n": 20,
      "i": 3,
      "j": 19,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 114,
      "stepId": "checkSwap",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        349,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        218,
        456,
        586
      ]
    },
    {
      "step": 115,
      "stepId": "swapMin",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": 3,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 116,
      "stepId": "markSortedI",
      "n": 20,
      "i": 3,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 117,
      "stepId": "forI",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 118,
      "stepId": "setMin",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 119,
      "stepId": "markRange",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 120,
      "stepId": "forJ",
      "n": 20,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 121,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 5,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 122,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 6,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 123,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 7,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 124,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 8,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 125,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 9,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 126,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 10,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 127,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 11,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 128,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 12,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 129,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 13,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 130,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 14,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 131,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 15,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 132,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 16,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 133,
      "stepId": "updateMin",
      "n": 20,
      "i": 4,
      "j": 16,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 134,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 17,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ]
    },
    {
      "step": 135,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 18,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 136,
      "stepId": "compare",
      "n": 20,
      "i": 4,
      "j": 19,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 137,
      "stepId": "checkSwap",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        266,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        243,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 138,
      "stepId": "swapMin",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": 4,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 139,
      "stepId": "markSortedI",
      "n": 20,
      "i": 4,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 140,
      "stepId": "forI",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 141,
      "stepId": "setMin",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 142,
      "stepId": "markRange",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 143,
      "stepId": "forJ",
      "n": 20,
      "i": 5,
      "j": 6,
      "minIndex": 5,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 144,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 6,
      "minIndex": 5,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 145,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 7,
      "minIndex": 5,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 146,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 8,
      "minIndex": 5,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 147,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 8,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 148,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 9,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 149,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 9,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 150,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 10,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 151,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 11,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 152,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 12,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 153,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 12,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 154,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 155,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 13,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 156,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 157,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 14,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 158,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 15,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 159,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 15,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 160,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 16,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 161,
      "stepId": "updateMin",
      "n": 20,
      "i": 5,
      "j": 16,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 162,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 17,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 163,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 18,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 164,
      "stepId": "compare",
      "n": 20,
      "i": 5,
      "j": 19,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 165,
      "stepId": "checkSwap",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        892,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        266,
        349,
        456,
        586
      ]
    },
    {
      "step": 166,
      "stepId": "swapMin",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": 5,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 167,
      "stepId": "markSortedI",
      "n": 20,
      "i": 5,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 168,
      "stepId": "forI",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 169,
      "stepId": "setMin",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 170,
      "stepId": "markRange",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 171,
      "stepId": "forJ",
      "n": 20,
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 172,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 7,
      "minIndex": 6,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 173,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 7,
      "minIndex": 7,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 174,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 8,
      "minIndex": 7,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 175,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 8,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 176,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 9,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 177,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 9,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 178,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 10,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 179,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 11,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 180,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 12,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 181,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 12,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 182,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 183,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 13,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 184,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 185,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 14,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 186,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 15,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 187,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 15,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 188,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 16,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 189,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 17,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 190,
      "stepId": "updateMin",
      "n": 20,
      "i": 6,
      "j": 17,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 191,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 18,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 192,
      "stepId": "compare",
      "n": 20,
      "i": 6,
      "j": 19,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 193,
      "stepId": "checkSwap",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        944,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        349,
        456,
        586
      ]
    },
    {
      "step": 194,
      "stepId": "swapMin",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": 6,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 195,
      "stepId": "markSortedI",
      "n": 20,
      "i": 6,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 196,
      "stepId": "forI",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 197,
      "stepId": "setMin",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 198,
      "stepId": "markRange",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 199,
      "stepId": "forJ",
      "n": 20,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 200,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 8,
      "minIndex": 7,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 201,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 8,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 202,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 9,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 203,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 9,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 204,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 10,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 205,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 11,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 206,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 12,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 207,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 12,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 208,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 209,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 13,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 210,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 211,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 14,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 212,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 15,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 213,
      "stepId": "updateMin",
      "n": 20,
      "i": 7,
      "j": 15,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 214,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 16,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 215,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 17,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 216,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 18,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 217,
      "stepId": "compare",
      "n": 20,
      "i": 7,
      "j": 19,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 218,
      "stepId": "checkSwap",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        940,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        413,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 219,
      "stepId": "swapMin",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": 7,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 220,
      "stepId": "markSortedI",
      "n": 20,
      "i": 7,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 221,
      "stepId": "forI",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 222,
      "stepId": "setMin",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 223,
      "stepId": "markRange",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 224,
      "stepId": "forJ",
      "n": 20,
      "i": 8,
      "j": 9,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 225,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 9,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 226,
      "stepId": "updateMin",
      "n": 20,
      "i": 8,
      "j": 9,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 227,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 10,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 228,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 11,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 229,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 12,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 230,
      "stepId": "updateMin",
      "n": 20,
      "i": 8,
      "j": 12,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 231,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 232,
      "stepId": "updateMin",
      "n": 20,
      "i": 8,
      "j": 13,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 233,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 234,
      "stepId": "updateMin",
      "n": 20,
      "i": 8,
      "j": 14,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 235,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 15,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 236,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 16,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 237,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 17,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 238,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 18,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 239,
      "stepId": "compare",
      "n": 20,
      "i": 8,
      "j": 19,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 240,
      "stepId": "checkSwap",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        842,
        615,
        967,
        755,
        501,
        483,
        420,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 241,
      "stepId": "swapMin",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": 8,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 242,
      "stepId": "markSortedI",
      "n": 20,
      "i": 8,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 243,
      "stepId": "forI",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 244,
      "stepId": "setMin",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 245,
      "stepId": "markRange",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 246,
      "stepId": "forJ",
      "n": 20,
      "i": 9,
      "j": 10,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 247,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 10,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 248,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 11,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 249,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 12,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 250,
      "stepId": "updateMin",
      "n": 20,
      "i": 9,
      "j": 12,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 251,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 252,
      "stepId": "updateMin",
      "n": 20,
      "i": 9,
      "j": 13,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 253,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 254,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 15,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 255,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 16,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 256,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 17,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 257,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 18,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 258,
      "stepId": "updateMin",
      "n": 20,
      "i": 9,
      "j": 18,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ]
    },
    {
      "step": 259,
      "stepId": "compare",
      "n": 20,
      "i": 9,
      "j": 19,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 260,
      "stepId": "checkSwap",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        615,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        456,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 261,
      "stepId": "swapMin",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": 9,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 262,
      "stepId": "markSortedI",
      "n": 20,
      "i": 9,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 263,
      "stepId": "forI",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 264,
      "stepId": "setMin",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 10,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 265,
      "stepId": "markRange",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 10,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 266,
      "stepId": "forJ",
      "n": 20,
      "i": 10,
      "j": 11,
      "minIndex": 10,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 267,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 11,
      "minIndex": 10,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 268,
      "stepId": "updateMin",
      "n": 20,
      "i": 10,
      "j": 11,
      "minIndex": 11,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 269,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 12,
      "minIndex": 11,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 270,
      "stepId": "updateMin",
      "n": 20,
      "i": 10,
      "j": 12,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 271,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 272,
      "stepId": "updateMin",
      "n": 20,
      "i": 10,
      "j": 13,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 273,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 274,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 15,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 275,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 16,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 276,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 17,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 277,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 18,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 278,
      "stepId": "compare",
      "n": 20,
      "i": 10,
      "j": 19,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 279,
      "stepId": "checkSwap",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        967,
        755,
        501,
        483,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 280,
      "stepId": "swapMin",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": 10,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 281,
      "stepId": "markSortedI",
      "n": 20,
      "i": 10,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 282,
      "stepId": "forI",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 283,
      "stepId": "setMin",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 11,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 284,
      "stepId": "markRange",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 11,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 285,
      "stepId": "forJ",
      "n": 20,
      "i": 11,
      "j": 12,
      "minIndex": 11,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 286,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 12,
      "minIndex": 11,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 287,
      "stepId": "updateMin",
      "n": 20,
      "i": 11,
      "j": 12,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 288,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 289,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 14,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 290,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 15,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 291,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 16,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 292,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 17,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 293,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 18,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 294,
      "stepId": "compare",
      "n": 20,
      "i": 11,
      "j": 19,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 295,
      "stepId": "checkSwap",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        755,
        501,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 296,
      "stepId": "swapMin",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": 11,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 297,
      "stepId": "markSortedI",
      "n": 20,
      "i": 11,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 298,
      "stepId": "forI",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 299,
      "stepId": "setMin",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 300,
      "stepId": "markRange",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 301,
      "stepId": "forJ",
      "n": 20,
      "i": 12,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 302,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 13,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 303,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 14,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 304,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 15,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 305,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 16,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 306,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 17,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 307,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 18,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 308,
      "stepId": "updateMin",
      "n": 20,
      "i": 12,
      "j": 18,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 309,
      "stepId": "compare",
      "n": 20,
      "i": 12,
      "j": 19,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 310,
      "stepId": "updateMin",
      "n": 20,
      "i": 12,
      "j": 19,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ]
    },
    {
      "step": 311,
      "stepId": "checkSwap",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        755,
        967,
        842,
        940,
        892,
        944,
        615,
        586
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 312,
      "stepId": "swapMin",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": 12,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 313,
      "stepId": "markSortedI",
      "n": 20,
      "i": 12,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 314,
      "stepId": "forI",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 315,
      "stepId": "setMin",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 316,
      "stepId": "markRange",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 317,
      "stepId": "forJ",
      "n": 20,
      "i": 13,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 318,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 14,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 319,
      "stepId": "updateMin",
      "n": 20,
      "i": 13,
      "j": 14,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 320,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 15,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 321,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 16,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 322,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 17,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 323,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 18,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 324,
      "stepId": "updateMin",
      "n": 20,
      "i": 13,
      "j": 18,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 325,
      "stepId": "compare",
      "n": 20,
      "i": 13,
      "j": 19,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 326,
      "stepId": "checkSwap",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        967,
        842,
        940,
        892,
        944,
        615,
        755
      ]
    },
    {
      "step": 327,
      "stepId": "swapMin",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": 13,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 328,
      "stepId": "markSortedI",
      "n": 20,
      "i": 13,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 329,
      "stepId": "forI",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 330,
      "stepId": "setMin",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 331,
      "stepId": "markRange",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 332,
      "stepId": "forJ",
      "n": 20,
      "i": 14,
      "j": 15,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 333,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 15,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 334,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 16,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 335,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 17,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 336,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 18,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 337,
      "stepId": "compare",
      "n": 20,
      "i": 14,
      "j": 19,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 338,
      "stepId": "updateMin",
      "n": 20,
      "i": 14,
      "j": 19,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ]
    },
    {
      "step": 339,
      "stepId": "checkSwap",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        842,
        940,
        892,
        944,
        967,
        755
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 340,
      "stepId": "swapMin",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": 14,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 341,
      "stepId": "markSortedI",
      "n": 20,
      "i": 14,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 342,
      "stepId": "forI",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 343,
      "stepId": "setMin",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 344,
      "stepId": "markRange",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 345,
      "stepId": "forJ",
      "n": 20,
      "i": 15,
      "j": 16,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 346,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 16,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 347,
      "stepId": "updateMin",
      "n": 20,
      "i": 15,
      "j": 16,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 348,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 17,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 349,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 18,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 350,
      "stepId": "compare",
      "n": 20,
      "i": 15,
      "j": 19,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 351,
      "stepId": "updateMin",
      "n": 20,
      "i": 15,
      "j": 19,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ]
    },
    {
      "step": 352,
      "stepId": "checkSwap",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        940,
        892,
        944,
        967,
        842
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 353,
      "stepId": "swapMin",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": 15,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 354,
      "stepId": "markSortedI",
      "n": 20,
      "i": 15,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 355,
      "stepId": "forI",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 356,
      "stepId": "setMin",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 357,
      "stepId": "markRange",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 358,
      "stepId": "forJ",
      "n": 20,
      "i": 16,
      "j": 17,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 359,
      "stepId": "compare",
      "n": 20,
      "i": 16,
      "j": 17,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 360,
      "stepId": "compare",
      "n": 20,
      "i": 16,
      "j": 18,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 361,
      "stepId": "compare",
      "n": 20,
      "i": 16,
      "j": 19,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 362,
      "stepId": "checkSwap",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": 16,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 363,
      "stepId": "markSortedI",
      "n": 20,
      "i": 16,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 364,
      "stepId": "forI",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 365,
      "stepId": "setMin",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 366,
      "stepId": "markRange",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 367,
      "stepId": "forJ",
      "n": 20,
      "i": 17,
      "j": 18,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 368,
      "stepId": "compare",
      "n": 20,
      "i": 17,
      "j": 18,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 369,
      "stepId": "compare",
      "n": 20,
      "i": 17,
      "j": 19,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 370,
      "stepId": "updateMin",
      "n": 20,
      "i": 17,
      "j": 19,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 371,
      "stepId": "checkSwap",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        944,
        967,
        940
      ]
    },
    {
      "step": 372,
      "stepId": "swapMin",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": 17,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 373,
      "stepId": "markSortedI",
      "n": 20,
      "i": 17,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 374,
      "stepId": "forI",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 375,
      "stepId": "setMin",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 376,
      "stepId": "markRange",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 377,
      "stepId": "forJ",
      "n": 20,
      "i": 18,
      "j": 19,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 378,
      "stepId": "compare",
      "n": 20,
      "i": 18,
      "j": 19,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 379,
      "stepId": "updateMin",
      "n": 20,
      "i": 18,
      "j": 19,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 380,
      "stepId": "checkSwap",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": 19,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        967,
        944
      ]
    },
    {
      "step": 381,
      "stepId": "swapMin",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": 18,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
      ],
      "missing": {
        "stepId": true,
        "i": true,
        "j": true,
        "minIndex": true
      }
    },
    {
      "step": 382,
      "stepId": "markSortedI",
      "n": 20,
      "i": 18,
      "j": null,
      "minIndex": null,
      "array": [
        42,
        94,
        203,
        218,
        243,
        266,
        349,
        413,
        420,
        456,
        483,
        501,
        586,
        615,
        755,
        842,
        892,
        940,
        944,
        967
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
