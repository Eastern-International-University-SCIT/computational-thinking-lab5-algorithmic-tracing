/**
 * Trace-fill puzzle for BST insertion.
 * Students drag Line (stepId) chips into blank rows.
 * Pieces are a multiset taken only from blank Line cells.
 * Execution gates on each blank row until that row is fully correct.
 *
 * INSTANCE is embedded by generate_bst_insertion_puzzles.js.
 */

window.TracePuzzle = (function () {
  const INSTANCE = {
  "sequence": [
    2100,
    1300,
    800,
    500,
    300,
    200,
    100,
    400,
    700,
    600,
    1100,
    1000,
    900,
    1200,
    1800,
    1600,
    1500,
    1400,
    1700,
    2000,
    1900,
    2900,
    2600,
    2400,
    2300,
    2200,
    2500,
    2800,
    2700,
    3200,
    3100,
    3000,
    3300
  ],
  "height": 6,
  "balanced": true,
  "varFields": [
    "key",
    "current",
    "parent",
    "side",
    "root"
  ],
  "blankFields": [
    "stepId"
  ],
  "tableFields": [
    "key",
    "current",
    "parent",
    "side",
    "root"
  ],
  "executorGlobal": "BstInsertExecutor",
  "pickedSteps": [
    237,
    239,
    241,
    246,
    247,
    248,
    252,
    255,
    256,
    262,
    263,
    265,
    270,
    271,
    275,
    276,
    278,
    279,
    281,
    282,
    285,
    293,
    298,
    299,
    301,
    303,
    305,
    306,
    317,
    318,
    320,
    321,
    322,
    325,
    327,
    329,
    331,
    333,
    335,
    336,
    338,
    341,
    345,
    349,
    350,
    352,
    357,
    358,
    360,
    362,
    363,
    365,
    374,
    379,
    380,
    381,
    387,
    388,
    389,
    390,
    391,
    398,
    400,
    404,
    405,
    406,
    407,
    410,
    418,
    419,
    421,
    424,
    428,
    434,
    435,
    437,
    438,
    444,
    448,
    454,
    455,
    459,
    462,
    465,
    467,
    468,
    469,
    471,
    472,
    473,
    475,
    476,
    478,
    479,
    490,
    494,
    496,
    497,
    498,
    501,
    509,
    511,
    512,
    519,
    522,
    524,
    525,
    527,
    528,
    536,
    538,
    545,
    547,
    548,
    549,
    553,
    557,
    558,
    559,
    561,
    570,
    572,
    573,
    578,
    582,
    585,
    589,
    591,
    595,
    601,
    604,
    605,
    607,
    610,
    612,
    614,
    617,
    618,
    619,
    621,
    622,
    625,
    626,
    627,
    628,
    631,
    636,
    640,
    641,
    645,
    648,
    654,
    657,
    660,
    662,
    663,
    665,
    668,
    671,
    673,
    677,
    682,
    684,
    691,
    693,
    695,
    696,
    700,
    701,
    702,
    703,
    712,
    715,
    718,
    720,
    724,
    726,
    727,
    728,
    733,
    735,
    737,
    739,
    743,
    749,
    750,
    751,
    753,
    758,
    768,
    777,
    778,
    779,
    780,
    781
  ],
  "answers": {
    "237": {
      "stepId": "callInsert"
    },
    "239": {
      "stepId": "checkEmpty"
    },
    "241": {
      "stepId": "setParent"
    },
    "246": {
      "stepId": "whileLoop"
    },
    "247": {
      "stepId": "parentAssign"
    },
    "248": {
      "stepId": "checkLess"
    },
    "252": {
      "stepId": "checkLess"
    },
    "255": {
      "stepId": "attachCheck"
    },
    "256": {
      "stepId": "attachRight"
    },
    "262": {
      "stepId": "setCurrent"
    },
    "263": {
      "stepId": "setParent"
    },
    "265": {
      "stepId": "parentAssign"
    },
    "270": {
      "stepId": "checkLess"
    },
    "271": {
      "stepId": "goLeft"
    },
    "275": {
      "stepId": "goRight"
    },
    "276": {
      "stepId": "whileLoop"
    },
    "278": {
      "stepId": "checkLess"
    },
    "279": {
      "stepId": "goLeft"
    },
    "281": {
      "stepId": "attachCheck"
    },
    "282": {
      "stepId": "attachLeft"
    },
    "285": {
      "stepId": "callInsert"
    },
    "293": {
      "stepId": "goLeft"
    },
    "298": {
      "stepId": "whileLoop"
    },
    "299": {
      "stepId": "parentAssign"
    },
    "301": {
      "stepId": "goRight"
    },
    "303": {
      "stepId": "parentAssign"
    },
    "305": {
      "stepId": "goLeft"
    },
    "306": {
      "stepId": "whileLoop"
    },
    "317": {
      "stepId": "checkEmpty"
    },
    "318": {
      "stepId": "setCurrent"
    },
    "320": {
      "stepId": "whileLoop"
    },
    "321": {
      "stepId": "parentAssign"
    },
    "322": {
      "stepId": "checkLess"
    },
    "325": {
      "stepId": "parentAssign"
    },
    "327": {
      "stepId": "goLeft"
    },
    "329": {
      "stepId": "parentAssign"
    },
    "331": {
      "stepId": "goRight"
    },
    "333": {
      "stepId": "parentAssign"
    },
    "335": {
      "stepId": "goRight"
    },
    "336": {
      "stepId": "whileLoop"
    },
    "338": {
      "stepId": "attachRight"
    },
    "341": {
      "stepId": "callInsert"
    },
    "345": {
      "stepId": "setParent"
    },
    "349": {
      "stepId": "goLeft"
    },
    "350": {
      "stepId": "whileLoop"
    },
    "352": {
      "stepId": "checkLess"
    },
    "357": {
      "stepId": "returnRoot"
    },
    "358": {
      "stepId": "mainLoop"
    },
    "360": {
      "stepId": "createNode"
    },
    "362": {
      "stepId": "setCurrent"
    },
    "363": {
      "stepId": "setParent"
    },
    "365": {
      "stepId": "parentAssign"
    },
    "374": {
      "stepId": "checkLess"
    },
    "379": {
      "stepId": "returnRoot"
    },
    "380": {
      "stepId": "mainLoop"
    },
    "381": {
      "stepId": "callInsert"
    },
    "387": {
      "stepId": "parentAssign"
    },
    "388": {
      "stepId": "checkLess"
    },
    "389": {
      "stepId": "goLeft"
    },
    "390": {
      "stepId": "whileLoop"
    },
    "391": {
      "stepId": "parentAssign"
    },
    "398": {
      "stepId": "whileLoop"
    },
    "400": {
      "stepId": "checkLess"
    },
    "404": {
      "stepId": "attachLeft"
    },
    "405": {
      "stepId": "returnRoot"
    },
    "406": {
      "stepId": "mainLoop"
    },
    "407": {
      "stepId": "callInsert"
    },
    "410": {
      "stepId": "setCurrent"
    },
    "418": {
      "stepId": "checkLess"
    },
    "419": {
      "stepId": "goRight"
    },
    "421": {
      "stepId": "parentAssign"
    },
    "424": {
      "stepId": "whileLoop"
    },
    "428": {
      "stepId": "whileLoop"
    },
    "434": {
      "stepId": "attachLeft"
    },
    "435": {
      "stepId": "returnRoot"
    },
    "437": {
      "stepId": "callInsert"
    },
    "438": {
      "stepId": "createNode"
    },
    "444": {
      "stepId": "checkLess"
    },
    "448": {
      "stepId": "checkLess"
    },
    "454": {
      "stepId": "whileLoop"
    },
    "455": {
      "stepId": "parentAssign"
    },
    "459": {
      "stepId": "attachCheck"
    },
    "462": {
      "stepId": "mainLoop"
    },
    "465": {
      "stepId": "checkEmpty"
    },
    "467": {
      "stepId": "setParent"
    },
    "468": {
      "stepId": "whileLoop"
    },
    "469": {
      "stepId": "parentAssign"
    },
    "471": {
      "stepId": "goLeft"
    },
    "472": {
      "stepId": "whileLoop"
    },
    "473": {
      "stepId": "parentAssign"
    },
    "475": {
      "stepId": "goRight"
    },
    "476": {
      "stepId": "whileLoop"
    },
    "478": {
      "stepId": "checkLess"
    },
    "479": {
      "stepId": "goRight"
    },
    "490": {
      "stepId": "whileLoop"
    },
    "494": {
      "stepId": "whileLoop"
    },
    "496": {
      "stepId": "checkLess"
    },
    "497": {
      "stepId": "goRight"
    },
    "498": {
      "stepId": "whileLoop"
    },
    "501": {
      "stepId": "goRight"
    },
    "509": {
      "stepId": "returnRoot"
    },
    "511": {
      "stepId": "callInsert"
    },
    "512": {
      "stepId": "createNode"
    },
    "519": {
      "stepId": "goRight"
    },
    "522": {
      "stepId": "attachRight"
    },
    "524": {
      "stepId": "mainLoop"
    },
    "525": {
      "stepId": "callInsert"
    },
    "527": {
      "stepId": "checkEmpty"
    },
    "528": {
      "stepId": "setCurrent"
    },
    "536": {
      "stepId": "checkLess"
    },
    "538": {
      "stepId": "whileLoop"
    },
    "545": {
      "stepId": "checkEmpty"
    },
    "547": {
      "stepId": "setParent"
    },
    "548": {
      "stepId": "whileLoop"
    },
    "549": {
      "stepId": "parentAssign"
    },
    "553": {
      "stepId": "parentAssign"
    },
    "557": {
      "stepId": "parentAssign"
    },
    "558": {
      "stepId": "checkLess"
    },
    "559": {
      "stepId": "goLeft"
    },
    "561": {
      "stepId": "attachCheck"
    },
    "570": {
      "stepId": "whileLoop"
    },
    "572": {
      "stepId": "checkLess"
    },
    "573": {
      "stepId": "goRight"
    },
    "578": {
      "stepId": "whileLoop"
    },
    "582": {
      "stepId": "whileLoop"
    },
    "585": {
      "stepId": "goLeft"
    },
    "589": {
      "stepId": "returnRoot"
    },
    "591": {
      "stepId": "callInsert"
    },
    "595": {
      "stepId": "setParent"
    },
    "601": {
      "stepId": "parentAssign"
    },
    "604": {
      "stepId": "whileLoop"
    },
    "605": {
      "stepId": "parentAssign"
    },
    "607": {
      "stepId": "goLeft"
    },
    "610": {
      "stepId": "checkLess"
    },
    "612": {
      "stepId": "whileLoop"
    },
    "614": {
      "stepId": "checkLess"
    },
    "617": {
      "stepId": "attachCheck"
    },
    "618": {
      "stepId": "attachLeft"
    },
    "619": {
      "stepId": "returnRoot"
    },
    "621": {
      "stepId": "callInsert"
    },
    "622": {
      "stepId": "createNode"
    },
    "625": {
      "stepId": "setParent"
    },
    "626": {
      "stepId": "whileLoop"
    },
    "627": {
      "stepId": "parentAssign"
    },
    "628": {
      "stepId": "checkLess"
    },
    "631": {
      "stepId": "parentAssign"
    },
    "636": {
      "stepId": "checkLess"
    },
    "640": {
      "stepId": "checkLess"
    },
    "641": {
      "stepId": "goRight"
    },
    "645": {
      "stepId": "returnRoot"
    },
    "648": {
      "stepId": "createNode"
    },
    "654": {
      "stepId": "checkLess"
    },
    "657": {
      "stepId": "parentAssign"
    },
    "660": {
      "stepId": "whileLoop"
    },
    "662": {
      "stepId": "checkLess"
    },
    "663": {
      "stepId": "goRight"
    },
    "665": {
      "stepId": "attachCheck"
    },
    "668": {
      "stepId": "mainLoop"
    },
    "671": {
      "stepId": "checkEmpty"
    },
    "673": {
      "stepId": "setParent"
    },
    "677": {
      "stepId": "goRight"
    },
    "682": {
      "stepId": "whileLoop"
    },
    "684": {
      "stepId": "checkLess"
    },
    "691": {
      "stepId": "attachCheck"
    },
    "693": {
      "stepId": "returnRoot"
    },
    "695": {
      "stepId": "callInsert"
    },
    "696": {
      "stepId": "createNode"
    },
    "700": {
      "stepId": "whileLoop"
    },
    "701": {
      "stepId": "parentAssign"
    },
    "702": {
      "stepId": "checkLess"
    },
    "703": {
      "stepId": "goRight"
    },
    "712": {
      "stepId": "mainLoop"
    },
    "715": {
      "stepId": "checkEmpty"
    },
    "718": {
      "stepId": "whileLoop"
    },
    "720": {
      "stepId": "checkLess"
    },
    "724": {
      "stepId": "checkLess"
    },
    "726": {
      "stepId": "whileLoop"
    },
    "727": {
      "stepId": "parentAssign"
    },
    "728": {
      "stepId": "checkLess"
    },
    "733": {
      "stepId": "returnRoot"
    },
    "735": {
      "stepId": "callInsert"
    },
    "737": {
      "stepId": "checkEmpty"
    },
    "739": {
      "stepId": "setParent"
    },
    "743": {
      "stepId": "goRight"
    },
    "749": {
      "stepId": "parentAssign"
    },
    "750": {
      "stepId": "checkLess"
    },
    "751": {
      "stepId": "goLeft"
    },
    "753": {
      "stepId": "parentAssign"
    },
    "758": {
      "stepId": "attachLeft"
    },
    "768": {
      "stepId": "checkLess"
    },
    "777": {
      "stepId": "goRight"
    },
    "778": {
      "stepId": "whileLoop"
    },
    "779": {
      "stepId": "attachCheck"
    },
    "780": {
      "stepId": "attachRight"
    },
    "781": {
      "stepId": "returnRoot"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 40,
        "value": "whileLoop"
      },
      {
        "id": 175,
        "value": "checkLess"
      },
      {
        "id": 137,
        "value": "attachCheck"
      },
      {
        "id": 71,
        "value": "parentAssign"
      },
      {
        "id": 112,
        "value": "checkEmpty"
      },
      {
        "id": 3,
        "value": "setParent"
      },
      {
        "id": 170,
        "value": "checkLess"
      },
      {
        "id": 164,
        "value": "attachCheck"
      },
      {
        "id": 153,
        "value": "parentAssign"
      },
      {
        "id": 77,
        "value": "createNode"
      },
      {
        "id": 160,
        "value": "setParent"
      },
      {
        "id": 49,
        "value": "createNode"
      },
      {
        "id": 27,
        "value": "goLeft"
      },
      {
        "id": 129,
        "value": "setParent"
      },
      {
        "id": 191,
        "value": "goRight"
      },
      {
        "id": 143,
        "value": "whileLoop"
      },
      {
        "id": 12,
        "value": "parentAssign"
      },
      {
        "id": 110,
        "value": "checkLess"
      },
      {
        "id": 70,
        "value": "goRight"
      },
      {
        "id": 18,
        "value": "goLeft"
      },
      {
        "id": 73,
        "value": "whileLoop"
      },
      {
        "id": 78,
        "value": "checkLess"
      },
      {
        "id": 1,
        "value": "callInsert"
      },
      {
        "id": 47,
        "value": "returnRoot"
      },
      {
        "id": 136,
        "value": "checkLess"
      },
      {
        "id": 75,
        "value": "returnRoot"
      },
      {
        "id": 2,
        "value": "checkEmpty"
      },
      {
        "id": 122,
        "value": "checkLess"
      },
      {
        "id": 135,
        "value": "whileLoop"
      },
      {
        "id": 133,
        "value": "goLeft"
      },
      {
        "id": 161,
        "value": "goRight"
      },
      {
        "id": 98,
        "value": "goRight"
      },
      {
        "id": 11,
        "value": "setParent"
      },
      {
        "id": 31,
        "value": "whileLoop"
      },
      {
        "id": 124,
        "value": "whileLoop"
      },
      {
        "id": 29,
        "value": "checkEmpty"
      },
      {
        "id": 95,
        "value": "whileLoop"
      },
      {
        "id": 101,
        "value": "returnRoot"
      },
      {
        "id": 166,
        "value": "callInsert"
      },
      {
        "id": 100,
        "value": "goRight"
      },
      {
        "id": 52,
        "value": "parentAssign"
      },
      {
        "id": 113,
        "value": "setParent"
      },
      {
        "id": 65,
        "value": "returnRoot"
      },
      {
        "id": 96,
        "value": "whileLoop"
      },
      {
        "id": 16,
        "value": "whileLoop"
      },
      {
        "id": 51,
        "value": "setParent"
      },
      {
        "id": 158,
        "value": "mainLoop"
      },
      {
        "id": 76,
        "value": "callInsert"
      },
      {
        "id": 127,
        "value": "returnRoot"
      },
      {
        "id": 145,
        "value": "checkLess"
      },
      {
        "id": 25,
        "value": "goRight"
      },
      {
        "id": 187,
        "value": "goLeft"
      },
      {
        "id": 46,
        "value": "checkLess"
      },
      {
        "id": 53,
        "value": "checkLess"
      },
      {
        "id": 81,
        "value": "parentAssign"
      },
      {
        "id": 59,
        "value": "goLeft"
      },
      {
        "id": 45,
        "value": "whileLoop"
      },
      {
        "id": 38,
        "value": "parentAssign"
      },
      {
        "id": 141,
        "value": "createNode"
      },
      {
        "id": 36,
        "value": "parentAssign"
      },
      {
        "id": 6,
        "value": "checkLess"
      },
      {
        "id": 154,
        "value": "whileLoop"
      },
      {
        "id": 147,
        "value": "checkLess"
      },
      {
        "id": 189,
        "value": "attachLeft"
      },
      {
        "id": 55,
        "value": "mainLoop"
      },
      {
        "id": 32,
        "value": "parentAssign"
      },
      {
        "id": 93,
        "value": "checkLess"
      },
      {
        "id": 128,
        "value": "callInsert"
      },
      {
        "id": 131,
        "value": "whileLoop"
      },
      {
        "id": 115,
        "value": "parentAssign"
      },
      {
        "id": 118,
        "value": "checkLess"
      },
      {
        "id": 74,
        "value": "attachLeft"
      },
      {
        "id": 193,
        "value": "attachCheck"
      },
      {
        "id": 19,
        "value": "attachCheck"
      },
      {
        "id": 180,
        "value": "returnRoot"
      },
      {
        "id": 15,
        "value": "goRight"
      },
      {
        "id": 92,
        "value": "whileLoop"
      },
      {
        "id": 86,
        "value": "whileLoop"
      },
      {
        "id": 174,
        "value": "whileLoop"
      },
      {
        "id": 121,
        "value": "whileLoop"
      },
      {
        "id": 181,
        "value": "callInsert"
      },
      {
        "id": 28,
        "value": "whileLoop"
      },
      {
        "id": 195,
        "value": "returnRoot"
      },
      {
        "id": 54,
        "value": "returnRoot"
      },
      {
        "id": 43,
        "value": "setParent"
      },
      {
        "id": 21,
        "value": "callInsert"
      },
      {
        "id": 66,
        "value": "mainLoop"
      },
      {
        "id": 148,
        "value": "checkLess"
      },
      {
        "id": 94,
        "value": "goRight"
      },
      {
        "id": 61,
        "value": "parentAssign"
      },
      {
        "id": 188,
        "value": "parentAssign"
      },
      {
        "id": 9,
        "value": "attachRight"
      },
      {
        "id": 192,
        "value": "whileLoop"
      },
      {
        "id": 97,
        "value": "checkLess"
      },
      {
        "id": 63,
        "value": "checkLess"
      },
      {
        "id": 8,
        "value": "attachCheck"
      },
      {
        "id": 72,
        "value": "whileLoop"
      },
      {
        "id": 156,
        "value": "goRight"
      },
      {
        "id": 171,
        "value": "goRight"
      },
      {
        "id": 20,
        "value": "attachLeft"
      },
      {
        "id": 60,
        "value": "whileLoop"
      },
      {
        "id": 120,
        "value": "attachCheck"
      },
      {
        "id": 35,
        "value": "goLeft"
      },
      {
        "id": 4,
        "value": "whileLoop"
      },
      {
        "id": 140,
        "value": "callInsert"
      },
      {
        "id": 182,
        "value": "checkEmpty"
      },
      {
        "id": 114,
        "value": "whileLoop"
      },
      {
        "id": 138,
        "value": "attachLeft"
      },
      {
        "id": 48,
        "value": "mainLoop"
      },
      {
        "id": 172,
        "value": "mainLoop"
      },
      {
        "id": 89,
        "value": "whileLoop"
      },
      {
        "id": 84,
        "value": "checkEmpty"
      },
      {
        "id": 125,
        "value": "whileLoop"
      },
      {
        "id": 179,
        "value": "checkLess"
      },
      {
        "id": 186,
        "value": "checkLess"
      },
      {
        "id": 194,
        "value": "attachRight"
      },
      {
        "id": 67,
        "value": "callInsert"
      },
      {
        "id": 146,
        "value": "parentAssign"
      },
      {
        "id": 80,
        "value": "whileLoop"
      },
      {
        "id": 108,
        "value": "checkEmpty"
      },
      {
        "id": 184,
        "value": "goRight"
      },
      {
        "id": 7,
        "value": "checkLess"
      },
      {
        "id": 185,
        "value": "parentAssign"
      },
      {
        "id": 58,
        "value": "checkLess"
      },
      {
        "id": 173,
        "value": "checkEmpty"
      },
      {
        "id": 50,
        "value": "setCurrent"
      },
      {
        "id": 111,
        "value": "whileLoop"
      },
      {
        "id": 167,
        "value": "createNode"
      },
      {
        "id": 169,
        "value": "parentAssign"
      },
      {
        "id": 90,
        "value": "parentAssign"
      },
      {
        "id": 183,
        "value": "setParent"
      },
      {
        "id": 178,
        "value": "parentAssign"
      },
      {
        "id": 117,
        "value": "parentAssign"
      },
      {
        "id": 10,
        "value": "setCurrent"
      },
      {
        "id": 37,
        "value": "goRight"
      },
      {
        "id": 165,
        "value": "returnRoot"
      },
      {
        "id": 22,
        "value": "goLeft"
      },
      {
        "id": 109,
        "value": "setCurrent"
      },
      {
        "id": 82,
        "value": "attachCheck"
      },
      {
        "id": 103,
        "value": "createNode"
      },
      {
        "id": 33,
        "value": "checkLess"
      },
      {
        "id": 107,
        "value": "callInsert"
      },
      {
        "id": 105,
        "value": "attachRight"
      },
      {
        "id": 68,
        "value": "setCurrent"
      },
      {
        "id": 83,
        "value": "mainLoop"
      },
      {
        "id": 69,
        "value": "checkLess"
      },
      {
        "id": 176,
        "value": "checkLess"
      },
      {
        "id": 88,
        "value": "goLeft"
      },
      {
        "id": 123,
        "value": "goRight"
      },
      {
        "id": 87,
        "value": "parentAssign"
      },
      {
        "id": 23,
        "value": "whileLoop"
      },
      {
        "id": 168,
        "value": "whileLoop"
      },
      {
        "id": 57,
        "value": "parentAssign"
      },
      {
        "id": 64,
        "value": "attachLeft"
      },
      {
        "id": 41,
        "value": "attachRight"
      },
      {
        "id": 62,
        "value": "whileLoop"
      },
      {
        "id": 5,
        "value": "parentAssign"
      },
      {
        "id": 150,
        "value": "returnRoot"
      },
      {
        "id": 17,
        "value": "checkLess"
      },
      {
        "id": 85,
        "value": "setParent"
      },
      {
        "id": 132,
        "value": "parentAssign"
      },
      {
        "id": 13,
        "value": "checkLess"
      },
      {
        "id": 24,
        "value": "parentAssign"
      },
      {
        "id": 144,
        "value": "parentAssign"
      },
      {
        "id": 56,
        "value": "callInsert"
      },
      {
        "id": 142,
        "value": "setParent"
      },
      {
        "id": 134,
        "value": "checkLess"
      },
      {
        "id": 26,
        "value": "parentAssign"
      },
      {
        "id": 151,
        "value": "createNode"
      },
      {
        "id": 130,
        "value": "parentAssign"
      },
      {
        "id": 34,
        "value": "parentAssign"
      },
      {
        "id": 30,
        "value": "setCurrent"
      },
      {
        "id": 116,
        "value": "parentAssign"
      },
      {
        "id": 119,
        "value": "goLeft"
      },
      {
        "id": 106,
        "value": "mainLoop"
      },
      {
        "id": 157,
        "value": "attachCheck"
      },
      {
        "id": 190,
        "value": "checkLess"
      },
      {
        "id": 14,
        "value": "goLeft"
      },
      {
        "id": 102,
        "value": "callInsert"
      },
      {
        "id": 126,
        "value": "goLeft"
      },
      {
        "id": 162,
        "value": "whileLoop"
      },
      {
        "id": 42,
        "value": "callInsert"
      },
      {
        "id": 159,
        "value": "checkEmpty"
      },
      {
        "id": 152,
        "value": "checkLess"
      },
      {
        "id": 149,
        "value": "goRight"
      },
      {
        "id": 163,
        "value": "checkLess"
      },
      {
        "id": 91,
        "value": "goRight"
      },
      {
        "id": 44,
        "value": "goLeft"
      },
      {
        "id": 39,
        "value": "goRight"
      },
      {
        "id": 139,
        "value": "returnRoot"
      },
      {
        "id": 79,
        "value": "checkLess"
      },
      {
        "id": 104,
        "value": "goRight"
      },
      {
        "id": 99,
        "value": "whileLoop"
      },
      {
        "id": 177,
        "value": "whileLoop"
      },
      {
        "id": 155,
        "value": "checkLess"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainLoop",
      "key": 2100,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 2,
      "stepId": "callInsert",
      "key": 2100,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 3,
      "stepId": "createNode",
      "key": 2100,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 4,
      "stepId": "checkEmpty",
      "key": 2100,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 5,
      "stepId": "returnNew",
      "key": 2100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 6,
      "stepId": "mainLoop",
      "key": 1300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 7,
      "stepId": "callInsert",
      "key": 1300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 8,
      "stepId": "createNode",
      "key": 1300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 9,
      "stepId": "checkEmpty",
      "key": 1300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 10,
      "stepId": "setCurrent",
      "key": 1300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 11,
      "stepId": "setParent",
      "key": 1300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 12,
      "stepId": "whileLoop",
      "key": 1300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 13,
      "stepId": "parentAssign",
      "key": 1300,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 14,
      "stepId": "checkLess",
      "key": 1300,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 15,
      "stepId": "goLeft",
      "key": 1300,
      "current": null,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 16,
      "stepId": "whileLoop",
      "key": 1300,
      "current": null,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 17,
      "stepId": "attachCheck",
      "key": 1300,
      "current": null,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 18,
      "stepId": "attachLeft",
      "key": 1300,
      "current": null,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 19,
      "stepId": "returnRoot",
      "key": 1300,
      "current": null,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 20,
      "stepId": "mainLoop",
      "key": 800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 21,
      "stepId": "callInsert",
      "key": 800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 22,
      "stepId": "createNode",
      "key": 800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 23,
      "stepId": "checkEmpty",
      "key": 800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 24,
      "stepId": "setCurrent",
      "key": 800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 25,
      "stepId": "setParent",
      "key": 800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 26,
      "stepId": "whileLoop",
      "key": 800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 27,
      "stepId": "parentAssign",
      "key": 800,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 28,
      "stepId": "checkLess",
      "key": 800,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 29,
      "stepId": "goLeft",
      "key": 800,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 30,
      "stepId": "whileLoop",
      "key": 800,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 31,
      "stepId": "parentAssign",
      "key": 800,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 32,
      "stepId": "checkLess",
      "key": 800,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 33,
      "stepId": "goLeft",
      "key": 800,
      "current": null,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 34,
      "stepId": "whileLoop",
      "key": 800,
      "current": null,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 35,
      "stepId": "attachCheck",
      "key": 800,
      "current": null,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 36,
      "stepId": "attachLeft",
      "key": 800,
      "current": null,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 37,
      "stepId": "returnRoot",
      "key": 800,
      "current": null,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 38,
      "stepId": "mainLoop",
      "key": 500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 39,
      "stepId": "callInsert",
      "key": 500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 40,
      "stepId": "createNode",
      "key": 500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 41,
      "stepId": "checkEmpty",
      "key": 500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 42,
      "stepId": "setCurrent",
      "key": 500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 43,
      "stepId": "setParent",
      "key": 500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 44,
      "stepId": "whileLoop",
      "key": 500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 45,
      "stepId": "parentAssign",
      "key": 500,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 46,
      "stepId": "checkLess",
      "key": 500,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 47,
      "stepId": "goLeft",
      "key": 500,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 48,
      "stepId": "whileLoop",
      "key": 500,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 49,
      "stepId": "parentAssign",
      "key": 500,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 50,
      "stepId": "checkLess",
      "key": 500,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 51,
      "stepId": "goLeft",
      "key": 500,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 52,
      "stepId": "whileLoop",
      "key": 500,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 53,
      "stepId": "parentAssign",
      "key": 500,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 54,
      "stepId": "checkLess",
      "key": 500,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 55,
      "stepId": "goLeft",
      "key": 500,
      "current": null,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 56,
      "stepId": "whileLoop",
      "key": 500,
      "current": null,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 57,
      "stepId": "attachCheck",
      "key": 500,
      "current": null,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 58,
      "stepId": "attachLeft",
      "key": 500,
      "current": null,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 59,
      "stepId": "returnRoot",
      "key": 500,
      "current": null,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 60,
      "stepId": "mainLoop",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 61,
      "stepId": "callInsert",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 62,
      "stepId": "createNode",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 63,
      "stepId": "checkEmpty",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 64,
      "stepId": "setCurrent",
      "key": 300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 65,
      "stepId": "setParent",
      "key": 300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 66,
      "stepId": "whileLoop",
      "key": 300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 67,
      "stepId": "parentAssign",
      "key": 300,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 68,
      "stepId": "checkLess",
      "key": 300,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 69,
      "stepId": "goLeft",
      "key": 300,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 70,
      "stepId": "whileLoop",
      "key": 300,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 71,
      "stepId": "parentAssign",
      "key": 300,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 72,
      "stepId": "checkLess",
      "key": 300,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 73,
      "stepId": "goLeft",
      "key": 300,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 74,
      "stepId": "whileLoop",
      "key": 300,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 75,
      "stepId": "parentAssign",
      "key": 300,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 76,
      "stepId": "checkLess",
      "key": 300,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 77,
      "stepId": "goLeft",
      "key": 300,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 78,
      "stepId": "whileLoop",
      "key": 300,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 79,
      "stepId": "parentAssign",
      "key": 300,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 80,
      "stepId": "checkLess",
      "key": 300,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 81,
      "stepId": "goLeft",
      "key": 300,
      "current": null,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 82,
      "stepId": "whileLoop",
      "key": 300,
      "current": null,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 83,
      "stepId": "attachCheck",
      "key": 300,
      "current": null,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 84,
      "stepId": "attachLeft",
      "key": 300,
      "current": null,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 85,
      "stepId": "returnRoot",
      "key": 300,
      "current": null,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 86,
      "stepId": "mainLoop",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 87,
      "stepId": "callInsert",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 88,
      "stepId": "createNode",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 89,
      "stepId": "checkEmpty",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 90,
      "stepId": "setCurrent",
      "key": 200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 91,
      "stepId": "setParent",
      "key": 200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 92,
      "stepId": "whileLoop",
      "key": 200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 93,
      "stepId": "parentAssign",
      "key": 200,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 94,
      "stepId": "checkLess",
      "key": 200,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 95,
      "stepId": "goLeft",
      "key": 200,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 96,
      "stepId": "whileLoop",
      "key": 200,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 97,
      "stepId": "parentAssign",
      "key": 200,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 98,
      "stepId": "checkLess",
      "key": 200,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 99,
      "stepId": "goLeft",
      "key": 200,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 100,
      "stepId": "whileLoop",
      "key": 200,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 101,
      "stepId": "parentAssign",
      "key": 200,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 102,
      "stepId": "checkLess",
      "key": 200,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 103,
      "stepId": "goLeft",
      "key": 200,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 104,
      "stepId": "whileLoop",
      "key": 200,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 105,
      "stepId": "parentAssign",
      "key": 200,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 106,
      "stepId": "checkLess",
      "key": 200,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 107,
      "stepId": "goLeft",
      "key": 200,
      "current": 300,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 108,
      "stepId": "whileLoop",
      "key": 200,
      "current": 300,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 109,
      "stepId": "parentAssign",
      "key": 200,
      "current": 300,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 110,
      "stepId": "checkLess",
      "key": 200,
      "current": 300,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 111,
      "stepId": "goLeft",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 112,
      "stepId": "whileLoop",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 113,
      "stepId": "attachCheck",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 114,
      "stepId": "attachLeft",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 115,
      "stepId": "returnRoot",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 116,
      "stepId": "mainLoop",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 117,
      "stepId": "callInsert",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 118,
      "stepId": "createNode",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 119,
      "stepId": "checkEmpty",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 120,
      "stepId": "setCurrent",
      "key": 100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 121,
      "stepId": "setParent",
      "key": 100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 122,
      "stepId": "whileLoop",
      "key": 100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 123,
      "stepId": "parentAssign",
      "key": 100,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 124,
      "stepId": "checkLess",
      "key": 100,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 125,
      "stepId": "goLeft",
      "key": 100,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 126,
      "stepId": "whileLoop",
      "key": 100,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 127,
      "stepId": "parentAssign",
      "key": 100,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 128,
      "stepId": "checkLess",
      "key": 100,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 129,
      "stepId": "goLeft",
      "key": 100,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 130,
      "stepId": "whileLoop",
      "key": 100,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 131,
      "stepId": "parentAssign",
      "key": 100,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 132,
      "stepId": "checkLess",
      "key": 100,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 133,
      "stepId": "goLeft",
      "key": 100,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 134,
      "stepId": "whileLoop",
      "key": 100,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 135,
      "stepId": "parentAssign",
      "key": 100,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 136,
      "stepId": "checkLess",
      "key": 100,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 137,
      "stepId": "goLeft",
      "key": 100,
      "current": 300,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 138,
      "stepId": "whileLoop",
      "key": 100,
      "current": 300,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 139,
      "stepId": "parentAssign",
      "key": 100,
      "current": 300,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 140,
      "stepId": "checkLess",
      "key": 100,
      "current": 300,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 141,
      "stepId": "goLeft",
      "key": 100,
      "current": 200,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 142,
      "stepId": "whileLoop",
      "key": 100,
      "current": 200,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 143,
      "stepId": "parentAssign",
      "key": 100,
      "current": 200,
      "parent": 200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 144,
      "stepId": "checkLess",
      "key": 100,
      "current": 200,
      "parent": 200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 145,
      "stepId": "goLeft",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 146,
      "stepId": "whileLoop",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 147,
      "stepId": "attachCheck",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 148,
      "stepId": "attachLeft",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 149,
      "stepId": "returnRoot",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 150,
      "stepId": "mainLoop",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 151,
      "stepId": "callInsert",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 152,
      "stepId": "createNode",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 153,
      "stepId": "checkEmpty",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 154,
      "stepId": "setCurrent",
      "key": 400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 155,
      "stepId": "setParent",
      "key": 400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 156,
      "stepId": "whileLoop",
      "key": 400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 157,
      "stepId": "parentAssign",
      "key": 400,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 158,
      "stepId": "checkLess",
      "key": 400,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 159,
      "stepId": "goLeft",
      "key": 400,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 160,
      "stepId": "whileLoop",
      "key": 400,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 161,
      "stepId": "parentAssign",
      "key": 400,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 162,
      "stepId": "checkLess",
      "key": 400,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 163,
      "stepId": "goLeft",
      "key": 400,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 164,
      "stepId": "whileLoop",
      "key": 400,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 165,
      "stepId": "parentAssign",
      "key": 400,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 166,
      "stepId": "checkLess",
      "key": 400,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 167,
      "stepId": "goLeft",
      "key": 400,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 168,
      "stepId": "whileLoop",
      "key": 400,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 169,
      "stepId": "parentAssign",
      "key": 400,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 170,
      "stepId": "checkLess",
      "key": 400,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 171,
      "stepId": "goLeft",
      "key": 400,
      "current": 300,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 172,
      "stepId": "whileLoop",
      "key": 400,
      "current": 300,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 173,
      "stepId": "parentAssign",
      "key": 400,
      "current": 300,
      "parent": 300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 174,
      "stepId": "checkLess",
      "key": 400,
      "current": 300,
      "parent": 300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 175,
      "stepId": "goRight",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 176,
      "stepId": "whileLoop",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 177,
      "stepId": "attachCheck",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 178,
      "stepId": "attachRight",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 179,
      "stepId": "returnRoot",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 180,
      "stepId": "mainLoop",
      "key": 700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 181,
      "stepId": "callInsert",
      "key": 700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 182,
      "stepId": "createNode",
      "key": 700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 183,
      "stepId": "checkEmpty",
      "key": 700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 184,
      "stepId": "setCurrent",
      "key": 700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 185,
      "stepId": "setParent",
      "key": 700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 186,
      "stepId": "whileLoop",
      "key": 700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 187,
      "stepId": "parentAssign",
      "key": 700,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 188,
      "stepId": "checkLess",
      "key": 700,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 189,
      "stepId": "goLeft",
      "key": 700,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 190,
      "stepId": "whileLoop",
      "key": 700,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 191,
      "stepId": "parentAssign",
      "key": 700,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 192,
      "stepId": "checkLess",
      "key": 700,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 193,
      "stepId": "goLeft",
      "key": 700,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 194,
      "stepId": "whileLoop",
      "key": 700,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 195,
      "stepId": "parentAssign",
      "key": 700,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 196,
      "stepId": "checkLess",
      "key": 700,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 197,
      "stepId": "goLeft",
      "key": 700,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 198,
      "stepId": "whileLoop",
      "key": 700,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 199,
      "stepId": "parentAssign",
      "key": 700,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 200,
      "stepId": "checkLess",
      "key": 700,
      "current": 500,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 201,
      "stepId": "goRight",
      "key": 700,
      "current": null,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 202,
      "stepId": "whileLoop",
      "key": 700,
      "current": null,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 203,
      "stepId": "attachCheck",
      "key": 700,
      "current": null,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 204,
      "stepId": "attachRight",
      "key": 700,
      "current": null,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 205,
      "stepId": "returnRoot",
      "key": 700,
      "current": null,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 206,
      "stepId": "mainLoop",
      "key": 600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 207,
      "stepId": "callInsert",
      "key": 600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 208,
      "stepId": "createNode",
      "key": 600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 209,
      "stepId": "checkEmpty",
      "key": 600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 210,
      "stepId": "setCurrent",
      "key": 600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 211,
      "stepId": "setParent",
      "key": 600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 212,
      "stepId": "whileLoop",
      "key": 600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 213,
      "stepId": "parentAssign",
      "key": 600,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 214,
      "stepId": "checkLess",
      "key": 600,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 215,
      "stepId": "goLeft",
      "key": 600,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 216,
      "stepId": "whileLoop",
      "key": 600,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 217,
      "stepId": "parentAssign",
      "key": 600,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 218,
      "stepId": "checkLess",
      "key": 600,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 219,
      "stepId": "goLeft",
      "key": 600,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 220,
      "stepId": "whileLoop",
      "key": 600,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 221,
      "stepId": "parentAssign",
      "key": 600,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 222,
      "stepId": "checkLess",
      "key": 600,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 223,
      "stepId": "goLeft",
      "key": 600,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 224,
      "stepId": "whileLoop",
      "key": 600,
      "current": 500,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 225,
      "stepId": "parentAssign",
      "key": 600,
      "current": 500,
      "parent": 500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 226,
      "stepId": "checkLess",
      "key": 600,
      "current": 500,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 227,
      "stepId": "goRight",
      "key": 600,
      "current": 700,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 228,
      "stepId": "whileLoop",
      "key": 600,
      "current": 700,
      "parent": 500,
      "side": "right",
      "root": 2100
    },
    {
      "step": 229,
      "stepId": "parentAssign",
      "key": 600,
      "current": 700,
      "parent": 700,
      "side": "right",
      "root": 2100
    },
    {
      "step": 230,
      "stepId": "checkLess",
      "key": 600,
      "current": 700,
      "parent": 700,
      "side": "left",
      "root": 2100
    },
    {
      "step": 231,
      "stepId": "goLeft",
      "key": 600,
      "current": null,
      "parent": 700,
      "side": "left",
      "root": 2100
    },
    {
      "step": 232,
      "stepId": "whileLoop",
      "key": 600,
      "current": null,
      "parent": 700,
      "side": "left",
      "root": 2100
    },
    {
      "step": 233,
      "stepId": "attachCheck",
      "key": 600,
      "current": null,
      "parent": 700,
      "side": "left",
      "root": 2100
    },
    {
      "step": 234,
      "stepId": "attachLeft",
      "key": 600,
      "current": null,
      "parent": 700,
      "side": "left",
      "root": 2100
    },
    {
      "step": 235,
      "stepId": "returnRoot",
      "key": 600,
      "current": null,
      "parent": 700,
      "side": "left",
      "root": 2100
    },
    {
      "step": 236,
      "stepId": "mainLoop",
      "key": 1100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 237,
      "stepId": "callInsert",
      "key": 1100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 238,
      "stepId": "createNode",
      "key": 1100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 239,
      "stepId": "checkEmpty",
      "key": 1100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 240,
      "stepId": "setCurrent",
      "key": 1100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 241,
      "stepId": "setParent",
      "key": 1100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 242,
      "stepId": "whileLoop",
      "key": 1100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 243,
      "stepId": "parentAssign",
      "key": 1100,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 244,
      "stepId": "checkLess",
      "key": 1100,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 245,
      "stepId": "goLeft",
      "key": 1100,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 246,
      "stepId": "whileLoop",
      "key": 1100,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 247,
      "stepId": "parentAssign",
      "key": 1100,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 248,
      "stepId": "checkLess",
      "key": 1100,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 249,
      "stepId": "goLeft",
      "key": 1100,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 250,
      "stepId": "whileLoop",
      "key": 1100,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 251,
      "stepId": "parentAssign",
      "key": 1100,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 252,
      "stepId": "checkLess",
      "key": 1100,
      "current": 800,
      "parent": 800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 253,
      "stepId": "goRight",
      "key": 1100,
      "current": null,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 254,
      "stepId": "whileLoop",
      "key": 1100,
      "current": null,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 255,
      "stepId": "attachCheck",
      "key": 1100,
      "current": null,
      "parent": 800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 256,
      "stepId": "attachRight",
      "key": 1100,
      "current": null,
      "parent": 800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 257,
      "stepId": "returnRoot",
      "key": 1100,
      "current": null,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 258,
      "stepId": "mainLoop",
      "key": 1000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 259,
      "stepId": "callInsert",
      "key": 1000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 260,
      "stepId": "createNode",
      "key": 1000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 261,
      "stepId": "checkEmpty",
      "key": 1000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 262,
      "stepId": "setCurrent",
      "key": 1000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 263,
      "stepId": "setParent",
      "key": 1000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 264,
      "stepId": "whileLoop",
      "key": 1000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 265,
      "stepId": "parentAssign",
      "key": 1000,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 266,
      "stepId": "checkLess",
      "key": 1000,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 267,
      "stepId": "goLeft",
      "key": 1000,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 268,
      "stepId": "whileLoop",
      "key": 1000,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 269,
      "stepId": "parentAssign",
      "key": 1000,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 270,
      "stepId": "checkLess",
      "key": 1000,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 271,
      "stepId": "goLeft",
      "key": 1000,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 272,
      "stepId": "whileLoop",
      "key": 1000,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 273,
      "stepId": "parentAssign",
      "key": 1000,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 274,
      "stepId": "checkLess",
      "key": 1000,
      "current": 800,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 275,
      "stepId": "goRight",
      "key": 1000,
      "current": 1100,
      "parent": 800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 276,
      "stepId": "whileLoop",
      "key": 1000,
      "current": 1100,
      "parent": 800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 277,
      "stepId": "parentAssign",
      "key": 1000,
      "current": 1100,
      "parent": 1100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 278,
      "stepId": "checkLess",
      "key": 1000,
      "current": 1100,
      "parent": 1100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 279,
      "stepId": "goLeft",
      "key": 1000,
      "current": null,
      "parent": 1100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 280,
      "stepId": "whileLoop",
      "key": 1000,
      "current": null,
      "parent": 1100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 281,
      "stepId": "attachCheck",
      "key": 1000,
      "current": null,
      "parent": 1100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 282,
      "stepId": "attachLeft",
      "key": 1000,
      "current": null,
      "parent": 1100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 283,
      "stepId": "returnRoot",
      "key": 1000,
      "current": null,
      "parent": 1100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 284,
      "stepId": "mainLoop",
      "key": 900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 285,
      "stepId": "callInsert",
      "key": 900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 286,
      "stepId": "createNode",
      "key": 900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 287,
      "stepId": "checkEmpty",
      "key": 900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 288,
      "stepId": "setCurrent",
      "key": 900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 289,
      "stepId": "setParent",
      "key": 900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 290,
      "stepId": "whileLoop",
      "key": 900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 291,
      "stepId": "parentAssign",
      "key": 900,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 292,
      "stepId": "checkLess",
      "key": 900,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 293,
      "stepId": "goLeft",
      "key": 900,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 294,
      "stepId": "whileLoop",
      "key": 900,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 295,
      "stepId": "parentAssign",
      "key": 900,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 296,
      "stepId": "checkLess",
      "key": 900,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 297,
      "stepId": "goLeft",
      "key": 900,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 298,
      "stepId": "whileLoop",
      "key": 900,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 299,
      "stepId": "parentAssign",
      "key": 900,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 300,
      "stepId": "checkLess",
      "key": 900,
      "current": 800,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 301,
      "stepId": "goRight",
      "key": 900,
      "current": 1100,
      "parent": 800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 302,
      "stepId": "whileLoop",
      "key": 900,
      "current": 1100,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 303,
      "stepId": "parentAssign",
      "key": 900,
      "current": 1100,
      "parent": 1100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 304,
      "stepId": "checkLess",
      "key": 900,
      "current": 1100,
      "parent": 1100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 305,
      "stepId": "goLeft",
      "key": 900,
      "current": 1000,
      "parent": 1100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 306,
      "stepId": "whileLoop",
      "key": 900,
      "current": 1000,
      "parent": 1100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 307,
      "stepId": "parentAssign",
      "key": 900,
      "current": 1000,
      "parent": 1000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 308,
      "stepId": "checkLess",
      "key": 900,
      "current": 1000,
      "parent": 1000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 309,
      "stepId": "goLeft",
      "key": 900,
      "current": null,
      "parent": 1000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 310,
      "stepId": "whileLoop",
      "key": 900,
      "current": null,
      "parent": 1000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 311,
      "stepId": "attachCheck",
      "key": 900,
      "current": null,
      "parent": 1000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 312,
      "stepId": "attachLeft",
      "key": 900,
      "current": null,
      "parent": 1000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 313,
      "stepId": "returnRoot",
      "key": 900,
      "current": null,
      "parent": 1000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 314,
      "stepId": "mainLoop",
      "key": 1200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 315,
      "stepId": "callInsert",
      "key": 1200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 316,
      "stepId": "createNode",
      "key": 1200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 317,
      "stepId": "checkEmpty",
      "key": 1200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 318,
      "stepId": "setCurrent",
      "key": 1200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 319,
      "stepId": "setParent",
      "key": 1200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 320,
      "stepId": "whileLoop",
      "key": 1200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 321,
      "stepId": "parentAssign",
      "key": 1200,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 322,
      "stepId": "checkLess",
      "key": 1200,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 323,
      "stepId": "goLeft",
      "key": 1200,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 324,
      "stepId": "whileLoop",
      "key": 1200,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 325,
      "stepId": "parentAssign",
      "key": 1200,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 326,
      "stepId": "checkLess",
      "key": 1200,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 327,
      "stepId": "goLeft",
      "key": 1200,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 328,
      "stepId": "whileLoop",
      "key": 1200,
      "current": 800,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 329,
      "stepId": "parentAssign",
      "key": 1200,
      "current": 800,
      "parent": 800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 330,
      "stepId": "checkLess",
      "key": 1200,
      "current": 800,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 331,
      "stepId": "goRight",
      "key": 1200,
      "current": 1100,
      "parent": 800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 332,
      "stepId": "whileLoop",
      "key": 1200,
      "current": 1100,
      "parent": 800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 333,
      "stepId": "parentAssign",
      "key": 1200,
      "current": 1100,
      "parent": 1100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 334,
      "stepId": "checkLess",
      "key": 1200,
      "current": 1100,
      "parent": 1100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 335,
      "stepId": "goRight",
      "key": 1200,
      "current": null,
      "parent": 1100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 336,
      "stepId": "whileLoop",
      "key": 1200,
      "current": null,
      "parent": 1100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 337,
      "stepId": "attachCheck",
      "key": 1200,
      "current": null,
      "parent": 1100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 338,
      "stepId": "attachRight",
      "key": 1200,
      "current": null,
      "parent": 1100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 339,
      "stepId": "returnRoot",
      "key": 1200,
      "current": null,
      "parent": 1100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 340,
      "stepId": "mainLoop",
      "key": 1800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 341,
      "stepId": "callInsert",
      "key": 1800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 342,
      "stepId": "createNode",
      "key": 1800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 343,
      "stepId": "checkEmpty",
      "key": 1800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 344,
      "stepId": "setCurrent",
      "key": 1800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 345,
      "stepId": "setParent",
      "key": 1800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 346,
      "stepId": "whileLoop",
      "key": 1800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 347,
      "stepId": "parentAssign",
      "key": 1800,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 348,
      "stepId": "checkLess",
      "key": 1800,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 349,
      "stepId": "goLeft",
      "key": 1800,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 350,
      "stepId": "whileLoop",
      "key": 1800,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 351,
      "stepId": "parentAssign",
      "key": 1800,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 352,
      "stepId": "checkLess",
      "key": 1800,
      "current": 1300,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 353,
      "stepId": "goRight",
      "key": 1800,
      "current": null,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 354,
      "stepId": "whileLoop",
      "key": 1800,
      "current": null,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 355,
      "stepId": "attachCheck",
      "key": 1800,
      "current": null,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 356,
      "stepId": "attachRight",
      "key": 1800,
      "current": null,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 357,
      "stepId": "returnRoot",
      "key": 1800,
      "current": null,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 358,
      "stepId": "mainLoop",
      "key": 1600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 359,
      "stepId": "callInsert",
      "key": 1600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 360,
      "stepId": "createNode",
      "key": 1600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 361,
      "stepId": "checkEmpty",
      "key": 1600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 362,
      "stepId": "setCurrent",
      "key": 1600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 363,
      "stepId": "setParent",
      "key": 1600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 364,
      "stepId": "whileLoop",
      "key": 1600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 365,
      "stepId": "parentAssign",
      "key": 1600,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 366,
      "stepId": "checkLess",
      "key": 1600,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 367,
      "stepId": "goLeft",
      "key": 1600,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 368,
      "stepId": "whileLoop",
      "key": 1600,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 369,
      "stepId": "parentAssign",
      "key": 1600,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 370,
      "stepId": "checkLess",
      "key": 1600,
      "current": 1300,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 371,
      "stepId": "goRight",
      "key": 1600,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 372,
      "stepId": "whileLoop",
      "key": 1600,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 373,
      "stepId": "parentAssign",
      "key": 1600,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 374,
      "stepId": "checkLess",
      "key": 1600,
      "current": 1800,
      "parent": 1800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 375,
      "stepId": "goLeft",
      "key": 1600,
      "current": null,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 376,
      "stepId": "whileLoop",
      "key": 1600,
      "current": null,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 377,
      "stepId": "attachCheck",
      "key": 1600,
      "current": null,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 378,
      "stepId": "attachLeft",
      "key": 1600,
      "current": null,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 379,
      "stepId": "returnRoot",
      "key": 1600,
      "current": null,
      "parent": 1800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 380,
      "stepId": "mainLoop",
      "key": 1500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 381,
      "stepId": "callInsert",
      "key": 1500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 382,
      "stepId": "createNode",
      "key": 1500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 383,
      "stepId": "checkEmpty",
      "key": 1500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 384,
      "stepId": "setCurrent",
      "key": 1500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 385,
      "stepId": "setParent",
      "key": 1500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 386,
      "stepId": "whileLoop",
      "key": 1500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 387,
      "stepId": "parentAssign",
      "key": 1500,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 388,
      "stepId": "checkLess",
      "key": 1500,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 389,
      "stepId": "goLeft",
      "key": 1500,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 390,
      "stepId": "whileLoop",
      "key": 1500,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 391,
      "stepId": "parentAssign",
      "key": 1500,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 392,
      "stepId": "checkLess",
      "key": 1500,
      "current": 1300,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 393,
      "stepId": "goRight",
      "key": 1500,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 394,
      "stepId": "whileLoop",
      "key": 1500,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 395,
      "stepId": "parentAssign",
      "key": 1500,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 396,
      "stepId": "checkLess",
      "key": 1500,
      "current": 1800,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 397,
      "stepId": "goLeft",
      "key": 1500,
      "current": 1600,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 398,
      "stepId": "whileLoop",
      "key": 1500,
      "current": 1600,
      "parent": 1800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 399,
      "stepId": "parentAssign",
      "key": 1500,
      "current": 1600,
      "parent": 1600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 400,
      "stepId": "checkLess",
      "key": 1500,
      "current": 1600,
      "parent": 1600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 401,
      "stepId": "goLeft",
      "key": 1500,
      "current": null,
      "parent": 1600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 402,
      "stepId": "whileLoop",
      "key": 1500,
      "current": null,
      "parent": 1600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 403,
      "stepId": "attachCheck",
      "key": 1500,
      "current": null,
      "parent": 1600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 404,
      "stepId": "attachLeft",
      "key": 1500,
      "current": null,
      "parent": 1600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 405,
      "stepId": "returnRoot",
      "key": 1500,
      "current": null,
      "parent": 1600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 406,
      "stepId": "mainLoop",
      "key": 1400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 407,
      "stepId": "callInsert",
      "key": 1400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 408,
      "stepId": "createNode",
      "key": 1400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 409,
      "stepId": "checkEmpty",
      "key": 1400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 410,
      "stepId": "setCurrent",
      "key": 1400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 411,
      "stepId": "setParent",
      "key": 1400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 412,
      "stepId": "whileLoop",
      "key": 1400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 413,
      "stepId": "parentAssign",
      "key": 1400,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 414,
      "stepId": "checkLess",
      "key": 1400,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 415,
      "stepId": "goLeft",
      "key": 1400,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 416,
      "stepId": "whileLoop",
      "key": 1400,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 417,
      "stepId": "parentAssign",
      "key": 1400,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 418,
      "stepId": "checkLess",
      "key": 1400,
      "current": 1300,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 419,
      "stepId": "goRight",
      "key": 1400,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 420,
      "stepId": "whileLoop",
      "key": 1400,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 421,
      "stepId": "parentAssign",
      "key": 1400,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 422,
      "stepId": "checkLess",
      "key": 1400,
      "current": 1800,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 423,
      "stepId": "goLeft",
      "key": 1400,
      "current": 1600,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 424,
      "stepId": "whileLoop",
      "key": 1400,
      "current": 1600,
      "parent": 1800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 425,
      "stepId": "parentAssign",
      "key": 1400,
      "current": 1600,
      "parent": 1600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 426,
      "stepId": "checkLess",
      "key": 1400,
      "current": 1600,
      "parent": 1600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 427,
      "stepId": "goLeft",
      "key": 1400,
      "current": 1500,
      "parent": 1600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 428,
      "stepId": "whileLoop",
      "key": 1400,
      "current": 1500,
      "parent": 1600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 429,
      "stepId": "parentAssign",
      "key": 1400,
      "current": 1500,
      "parent": 1500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 430,
      "stepId": "checkLess",
      "key": 1400,
      "current": 1500,
      "parent": 1500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 431,
      "stepId": "goLeft",
      "key": 1400,
      "current": null,
      "parent": 1500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 432,
      "stepId": "whileLoop",
      "key": 1400,
      "current": null,
      "parent": 1500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 433,
      "stepId": "attachCheck",
      "key": 1400,
      "current": null,
      "parent": 1500,
      "side": "left",
      "root": 2100
    },
    {
      "step": 434,
      "stepId": "attachLeft",
      "key": 1400,
      "current": null,
      "parent": 1500,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 435,
      "stepId": "returnRoot",
      "key": 1400,
      "current": null,
      "parent": 1500,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 436,
      "stepId": "mainLoop",
      "key": 1700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 437,
      "stepId": "callInsert",
      "key": 1700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 438,
      "stepId": "createNode",
      "key": 1700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 439,
      "stepId": "checkEmpty",
      "key": 1700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 440,
      "stepId": "setCurrent",
      "key": 1700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 441,
      "stepId": "setParent",
      "key": 1700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 442,
      "stepId": "whileLoop",
      "key": 1700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 443,
      "stepId": "parentAssign",
      "key": 1700,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 444,
      "stepId": "checkLess",
      "key": 1700,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 445,
      "stepId": "goLeft",
      "key": 1700,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 446,
      "stepId": "whileLoop",
      "key": 1700,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 447,
      "stepId": "parentAssign",
      "key": 1700,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 448,
      "stepId": "checkLess",
      "key": 1700,
      "current": 1300,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 449,
      "stepId": "goRight",
      "key": 1700,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 450,
      "stepId": "whileLoop",
      "key": 1700,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 451,
      "stepId": "parentAssign",
      "key": 1700,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 452,
      "stepId": "checkLess",
      "key": 1700,
      "current": 1800,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 453,
      "stepId": "goLeft",
      "key": 1700,
      "current": 1600,
      "parent": 1800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 454,
      "stepId": "whileLoop",
      "key": 1700,
      "current": 1600,
      "parent": 1800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 455,
      "stepId": "parentAssign",
      "key": 1700,
      "current": 1600,
      "parent": 1600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 456,
      "stepId": "checkLess",
      "key": 1700,
      "current": 1600,
      "parent": 1600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 457,
      "stepId": "goRight",
      "key": 1700,
      "current": null,
      "parent": 1600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 458,
      "stepId": "whileLoop",
      "key": 1700,
      "current": null,
      "parent": 1600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 459,
      "stepId": "attachCheck",
      "key": 1700,
      "current": null,
      "parent": 1600,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 460,
      "stepId": "attachRight",
      "key": 1700,
      "current": null,
      "parent": 1600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 461,
      "stepId": "returnRoot",
      "key": 1700,
      "current": null,
      "parent": 1600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 462,
      "stepId": "mainLoop",
      "key": 2000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 463,
      "stepId": "callInsert",
      "key": 2000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 464,
      "stepId": "createNode",
      "key": 2000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 465,
      "stepId": "checkEmpty",
      "key": 2000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 466,
      "stepId": "setCurrent",
      "key": 2000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 467,
      "stepId": "setParent",
      "key": 2000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 468,
      "stepId": "whileLoop",
      "key": 2000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 469,
      "stepId": "parentAssign",
      "key": 2000,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 470,
      "stepId": "checkLess",
      "key": 2000,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 471,
      "stepId": "goLeft",
      "key": 2000,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 472,
      "stepId": "whileLoop",
      "key": 2000,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 473,
      "stepId": "parentAssign",
      "key": 2000,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 474,
      "stepId": "checkLess",
      "key": 2000,
      "current": 1300,
      "parent": 1300,
      "side": "right",
      "root": 2100
    },
    {
      "step": 475,
      "stepId": "goRight",
      "key": 2000,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 476,
      "stepId": "whileLoop",
      "key": 2000,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 477,
      "stepId": "parentAssign",
      "key": 2000,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 478,
      "stepId": "checkLess",
      "key": 2000,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 479,
      "stepId": "goRight",
      "key": 2000,
      "current": null,
      "parent": 1800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 480,
      "stepId": "whileLoop",
      "key": 2000,
      "current": null,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 481,
      "stepId": "attachCheck",
      "key": 2000,
      "current": null,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 482,
      "stepId": "attachRight",
      "key": 2000,
      "current": null,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 483,
      "stepId": "returnRoot",
      "key": 2000,
      "current": null,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 484,
      "stepId": "mainLoop",
      "key": 1900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 485,
      "stepId": "callInsert",
      "key": 1900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 486,
      "stepId": "createNode",
      "key": 1900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 487,
      "stepId": "checkEmpty",
      "key": 1900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 488,
      "stepId": "setCurrent",
      "key": 1900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 489,
      "stepId": "setParent",
      "key": 1900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 490,
      "stepId": "whileLoop",
      "key": 1900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 491,
      "stepId": "parentAssign",
      "key": 1900,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 492,
      "stepId": "checkLess",
      "key": 1900,
      "current": 2100,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 493,
      "stepId": "goLeft",
      "key": 1900,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 494,
      "stepId": "whileLoop",
      "key": 1900,
      "current": 1300,
      "parent": 2100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 495,
      "stepId": "parentAssign",
      "key": 1900,
      "current": 1300,
      "parent": 1300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 496,
      "stepId": "checkLess",
      "key": 1900,
      "current": 1300,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 497,
      "stepId": "goRight",
      "key": 1900,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 498,
      "stepId": "whileLoop",
      "key": 1900,
      "current": 1800,
      "parent": 1300,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 499,
      "stepId": "parentAssign",
      "key": 1900,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 500,
      "stepId": "checkLess",
      "key": 1900,
      "current": 1800,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 501,
      "stepId": "goRight",
      "key": 1900,
      "current": 2000,
      "parent": 1800,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 502,
      "stepId": "whileLoop",
      "key": 1900,
      "current": 2000,
      "parent": 1800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 503,
      "stepId": "parentAssign",
      "key": 1900,
      "current": 2000,
      "parent": 2000,
      "side": "right",
      "root": 2100
    },
    {
      "step": 504,
      "stepId": "checkLess",
      "key": 1900,
      "current": 2000,
      "parent": 2000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 505,
      "stepId": "goLeft",
      "key": 1900,
      "current": null,
      "parent": 2000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 506,
      "stepId": "whileLoop",
      "key": 1900,
      "current": null,
      "parent": 2000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 507,
      "stepId": "attachCheck",
      "key": 1900,
      "current": null,
      "parent": 2000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 508,
      "stepId": "attachLeft",
      "key": 1900,
      "current": null,
      "parent": 2000,
      "side": "left",
      "root": 2100
    },
    {
      "step": 509,
      "stepId": "returnRoot",
      "key": 1900,
      "current": null,
      "parent": 2000,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 510,
      "stepId": "mainLoop",
      "key": 2900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 511,
      "stepId": "callInsert",
      "key": 2900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 512,
      "stepId": "createNode",
      "key": 2900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 513,
      "stepId": "checkEmpty",
      "key": 2900,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 514,
      "stepId": "setCurrent",
      "key": 2900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 515,
      "stepId": "setParent",
      "key": 2900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 516,
      "stepId": "whileLoop",
      "key": 2900,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 517,
      "stepId": "parentAssign",
      "key": 2900,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 518,
      "stepId": "checkLess",
      "key": 2900,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 519,
      "stepId": "goRight",
      "key": 2900,
      "current": null,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 520,
      "stepId": "whileLoop",
      "key": 2900,
      "current": null,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 521,
      "stepId": "attachCheck",
      "key": 2900,
      "current": null,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 522,
      "stepId": "attachRight",
      "key": 2900,
      "current": null,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 523,
      "stepId": "returnRoot",
      "key": 2900,
      "current": null,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 524,
      "stepId": "mainLoop",
      "key": 2600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 525,
      "stepId": "callInsert",
      "key": 2600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 526,
      "stepId": "createNode",
      "key": 2600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 527,
      "stepId": "checkEmpty",
      "key": 2600,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 528,
      "stepId": "setCurrent",
      "key": 2600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 529,
      "stepId": "setParent",
      "key": 2600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 530,
      "stepId": "whileLoop",
      "key": 2600,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 531,
      "stepId": "parentAssign",
      "key": 2600,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 532,
      "stepId": "checkLess",
      "key": 2600,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 533,
      "stepId": "goRight",
      "key": 2600,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 534,
      "stepId": "whileLoop",
      "key": 2600,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 535,
      "stepId": "parentAssign",
      "key": 2600,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 536,
      "stepId": "checkLess",
      "key": 2600,
      "current": 2900,
      "parent": 2900,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 537,
      "stepId": "goLeft",
      "key": 2600,
      "current": null,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 538,
      "stepId": "whileLoop",
      "key": 2600,
      "current": null,
      "parent": 2900,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 539,
      "stepId": "attachCheck",
      "key": 2600,
      "current": null,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 540,
      "stepId": "attachLeft",
      "key": 2600,
      "current": null,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 541,
      "stepId": "returnRoot",
      "key": 2600,
      "current": null,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 542,
      "stepId": "mainLoop",
      "key": 2400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 543,
      "stepId": "callInsert",
      "key": 2400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 544,
      "stepId": "createNode",
      "key": 2400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 545,
      "stepId": "checkEmpty",
      "key": 2400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 546,
      "stepId": "setCurrent",
      "key": 2400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 547,
      "stepId": "setParent",
      "key": 2400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 548,
      "stepId": "whileLoop",
      "key": 2400,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 549,
      "stepId": "parentAssign",
      "key": 2400,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 550,
      "stepId": "checkLess",
      "key": 2400,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 551,
      "stepId": "goRight",
      "key": 2400,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 552,
      "stepId": "whileLoop",
      "key": 2400,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 553,
      "stepId": "parentAssign",
      "key": 2400,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 554,
      "stepId": "checkLess",
      "key": 2400,
      "current": 2900,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 555,
      "stepId": "goLeft",
      "key": 2400,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 556,
      "stepId": "whileLoop",
      "key": 2400,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 557,
      "stepId": "parentAssign",
      "key": 2400,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 558,
      "stepId": "checkLess",
      "key": 2400,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 559,
      "stepId": "goLeft",
      "key": 2400,
      "current": null,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 560,
      "stepId": "whileLoop",
      "key": 2400,
      "current": null,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 561,
      "stepId": "attachCheck",
      "key": 2400,
      "current": null,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 562,
      "stepId": "attachLeft",
      "key": 2400,
      "current": null,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 563,
      "stepId": "returnRoot",
      "key": 2400,
      "current": null,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 564,
      "stepId": "mainLoop",
      "key": 2300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 565,
      "stepId": "callInsert",
      "key": 2300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 566,
      "stepId": "createNode",
      "key": 2300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 567,
      "stepId": "checkEmpty",
      "key": 2300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 568,
      "stepId": "setCurrent",
      "key": 2300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 569,
      "stepId": "setParent",
      "key": 2300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 570,
      "stepId": "whileLoop",
      "key": 2300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 571,
      "stepId": "parentAssign",
      "key": 2300,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 572,
      "stepId": "checkLess",
      "key": 2300,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 573,
      "stepId": "goRight",
      "key": 2300,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 574,
      "stepId": "whileLoop",
      "key": 2300,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 575,
      "stepId": "parentAssign",
      "key": 2300,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 576,
      "stepId": "checkLess",
      "key": 2300,
      "current": 2900,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 577,
      "stepId": "goLeft",
      "key": 2300,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 578,
      "stepId": "whileLoop",
      "key": 2300,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 579,
      "stepId": "parentAssign",
      "key": 2300,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 580,
      "stepId": "checkLess",
      "key": 2300,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 581,
      "stepId": "goLeft",
      "key": 2300,
      "current": 2400,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 582,
      "stepId": "whileLoop",
      "key": 2300,
      "current": 2400,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 583,
      "stepId": "parentAssign",
      "key": 2300,
      "current": 2400,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 584,
      "stepId": "checkLess",
      "key": 2300,
      "current": 2400,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 585,
      "stepId": "goLeft",
      "key": 2300,
      "current": null,
      "parent": 2400,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 586,
      "stepId": "whileLoop",
      "key": 2300,
      "current": null,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 587,
      "stepId": "attachCheck",
      "key": 2300,
      "current": null,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 588,
      "stepId": "attachLeft",
      "key": 2300,
      "current": null,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 589,
      "stepId": "returnRoot",
      "key": 2300,
      "current": null,
      "parent": 2400,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 590,
      "stepId": "mainLoop",
      "key": 2200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 591,
      "stepId": "callInsert",
      "key": 2200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 592,
      "stepId": "createNode",
      "key": 2200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 593,
      "stepId": "checkEmpty",
      "key": 2200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 594,
      "stepId": "setCurrent",
      "key": 2200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 595,
      "stepId": "setParent",
      "key": 2200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 596,
      "stepId": "whileLoop",
      "key": 2200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 597,
      "stepId": "parentAssign",
      "key": 2200,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 598,
      "stepId": "checkLess",
      "key": 2200,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 599,
      "stepId": "goRight",
      "key": 2200,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 600,
      "stepId": "whileLoop",
      "key": 2200,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 601,
      "stepId": "parentAssign",
      "key": 2200,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 602,
      "stepId": "checkLess",
      "key": 2200,
      "current": 2900,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 603,
      "stepId": "goLeft",
      "key": 2200,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 604,
      "stepId": "whileLoop",
      "key": 2200,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 605,
      "stepId": "parentAssign",
      "key": 2200,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 606,
      "stepId": "checkLess",
      "key": 2200,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 607,
      "stepId": "goLeft",
      "key": 2200,
      "current": 2400,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 608,
      "stepId": "whileLoop",
      "key": 2200,
      "current": 2400,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 609,
      "stepId": "parentAssign",
      "key": 2200,
      "current": 2400,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 610,
      "stepId": "checkLess",
      "key": 2200,
      "current": 2400,
      "parent": 2400,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 611,
      "stepId": "goLeft",
      "key": 2200,
      "current": 2300,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 612,
      "stepId": "whileLoop",
      "key": 2200,
      "current": 2300,
      "parent": 2400,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 613,
      "stepId": "parentAssign",
      "key": 2200,
      "current": 2300,
      "parent": 2300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 614,
      "stepId": "checkLess",
      "key": 2200,
      "current": 2300,
      "parent": 2300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 615,
      "stepId": "goLeft",
      "key": 2200,
      "current": null,
      "parent": 2300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 616,
      "stepId": "whileLoop",
      "key": 2200,
      "current": null,
      "parent": 2300,
      "side": "left",
      "root": 2100
    },
    {
      "step": 617,
      "stepId": "attachCheck",
      "key": 2200,
      "current": null,
      "parent": 2300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 618,
      "stepId": "attachLeft",
      "key": 2200,
      "current": null,
      "parent": 2300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 619,
      "stepId": "returnRoot",
      "key": 2200,
      "current": null,
      "parent": 2300,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 620,
      "stepId": "mainLoop",
      "key": 2500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 621,
      "stepId": "callInsert",
      "key": 2500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 622,
      "stepId": "createNode",
      "key": 2500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 623,
      "stepId": "checkEmpty",
      "key": 2500,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 624,
      "stepId": "setCurrent",
      "key": 2500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 625,
      "stepId": "setParent",
      "key": 2500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 626,
      "stepId": "whileLoop",
      "key": 2500,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 627,
      "stepId": "parentAssign",
      "key": 2500,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 628,
      "stepId": "checkLess",
      "key": 2500,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 629,
      "stepId": "goRight",
      "key": 2500,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 630,
      "stepId": "whileLoop",
      "key": 2500,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 631,
      "stepId": "parentAssign",
      "key": 2500,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 632,
      "stepId": "checkLess",
      "key": 2500,
      "current": 2900,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 633,
      "stepId": "goLeft",
      "key": 2500,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 634,
      "stepId": "whileLoop",
      "key": 2500,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 635,
      "stepId": "parentAssign",
      "key": 2500,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 636,
      "stepId": "checkLess",
      "key": 2500,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 637,
      "stepId": "goLeft",
      "key": 2500,
      "current": 2400,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 638,
      "stepId": "whileLoop",
      "key": 2500,
      "current": 2400,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 639,
      "stepId": "parentAssign",
      "key": 2500,
      "current": 2400,
      "parent": 2400,
      "side": "left",
      "root": 2100
    },
    {
      "step": 640,
      "stepId": "checkLess",
      "key": 2500,
      "current": 2400,
      "parent": 2400,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 641,
      "stepId": "goRight",
      "key": 2500,
      "current": null,
      "parent": 2400,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 642,
      "stepId": "whileLoop",
      "key": 2500,
      "current": null,
      "parent": 2400,
      "side": "right",
      "root": 2100
    },
    {
      "step": 643,
      "stepId": "attachCheck",
      "key": 2500,
      "current": null,
      "parent": 2400,
      "side": "right",
      "root": 2100
    },
    {
      "step": 644,
      "stepId": "attachRight",
      "key": 2500,
      "current": null,
      "parent": 2400,
      "side": "right",
      "root": 2100
    },
    {
      "step": 645,
      "stepId": "returnRoot",
      "key": 2500,
      "current": null,
      "parent": 2400,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 646,
      "stepId": "mainLoop",
      "key": 2800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 647,
      "stepId": "callInsert",
      "key": 2800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 648,
      "stepId": "createNode",
      "key": 2800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 649,
      "stepId": "checkEmpty",
      "key": 2800,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 650,
      "stepId": "setCurrent",
      "key": 2800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 651,
      "stepId": "setParent",
      "key": 2800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 652,
      "stepId": "whileLoop",
      "key": 2800,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 653,
      "stepId": "parentAssign",
      "key": 2800,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 654,
      "stepId": "checkLess",
      "key": 2800,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 655,
      "stepId": "goRight",
      "key": 2800,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 656,
      "stepId": "whileLoop",
      "key": 2800,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 657,
      "stepId": "parentAssign",
      "key": 2800,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 658,
      "stepId": "checkLess",
      "key": 2800,
      "current": 2900,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 659,
      "stepId": "goLeft",
      "key": 2800,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 660,
      "stepId": "whileLoop",
      "key": 2800,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 661,
      "stepId": "parentAssign",
      "key": 2800,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 662,
      "stepId": "checkLess",
      "key": 2800,
      "current": 2600,
      "parent": 2600,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 663,
      "stepId": "goRight",
      "key": 2800,
      "current": null,
      "parent": 2600,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 664,
      "stepId": "whileLoop",
      "key": 2800,
      "current": null,
      "parent": 2600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 665,
      "stepId": "attachCheck",
      "key": 2800,
      "current": null,
      "parent": 2600,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 666,
      "stepId": "attachRight",
      "key": 2800,
      "current": null,
      "parent": 2600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 667,
      "stepId": "returnRoot",
      "key": 2800,
      "current": null,
      "parent": 2600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 668,
      "stepId": "mainLoop",
      "key": 2700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 669,
      "stepId": "callInsert",
      "key": 2700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 670,
      "stepId": "createNode",
      "key": 2700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 671,
      "stepId": "checkEmpty",
      "key": 2700,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 672,
      "stepId": "setCurrent",
      "key": 2700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 673,
      "stepId": "setParent",
      "key": 2700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 674,
      "stepId": "whileLoop",
      "key": 2700,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 675,
      "stepId": "parentAssign",
      "key": 2700,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 676,
      "stepId": "checkLess",
      "key": 2700,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 677,
      "stepId": "goRight",
      "key": 2700,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 678,
      "stepId": "whileLoop",
      "key": 2700,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 679,
      "stepId": "parentAssign",
      "key": 2700,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 680,
      "stepId": "checkLess",
      "key": 2700,
      "current": 2900,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 681,
      "stepId": "goLeft",
      "key": 2700,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100
    },
    {
      "step": 682,
      "stepId": "whileLoop",
      "key": 2700,
      "current": 2600,
      "parent": 2900,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 683,
      "stepId": "parentAssign",
      "key": 2700,
      "current": 2600,
      "parent": 2600,
      "side": "left",
      "root": 2100
    },
    {
      "step": 684,
      "stepId": "checkLess",
      "key": 2700,
      "current": 2600,
      "parent": 2600,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 685,
      "stepId": "goRight",
      "key": 2700,
      "current": 2800,
      "parent": 2600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 686,
      "stepId": "whileLoop",
      "key": 2700,
      "current": 2800,
      "parent": 2600,
      "side": "right",
      "root": 2100
    },
    {
      "step": 687,
      "stepId": "parentAssign",
      "key": 2700,
      "current": 2800,
      "parent": 2800,
      "side": "right",
      "root": 2100
    },
    {
      "step": 688,
      "stepId": "checkLess",
      "key": 2700,
      "current": 2800,
      "parent": 2800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 689,
      "stepId": "goLeft",
      "key": 2700,
      "current": null,
      "parent": 2800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 690,
      "stepId": "whileLoop",
      "key": 2700,
      "current": null,
      "parent": 2800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 691,
      "stepId": "attachCheck",
      "key": 2700,
      "current": null,
      "parent": 2800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 692,
      "stepId": "attachLeft",
      "key": 2700,
      "current": null,
      "parent": 2800,
      "side": "left",
      "root": 2100
    },
    {
      "step": 693,
      "stepId": "returnRoot",
      "key": 2700,
      "current": null,
      "parent": 2800,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 694,
      "stepId": "mainLoop",
      "key": 3200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 695,
      "stepId": "callInsert",
      "key": 3200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 696,
      "stepId": "createNode",
      "key": 3200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 697,
      "stepId": "checkEmpty",
      "key": 3200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 698,
      "stepId": "setCurrent",
      "key": 3200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 699,
      "stepId": "setParent",
      "key": 3200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 700,
      "stepId": "whileLoop",
      "key": 3200,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 701,
      "stepId": "parentAssign",
      "key": 3200,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 702,
      "stepId": "checkLess",
      "key": 3200,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 703,
      "stepId": "goRight",
      "key": 3200,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 704,
      "stepId": "whileLoop",
      "key": 3200,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 705,
      "stepId": "parentAssign",
      "key": 3200,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 706,
      "stepId": "checkLess",
      "key": 3200,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 707,
      "stepId": "goRight",
      "key": 3200,
      "current": null,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 708,
      "stepId": "whileLoop",
      "key": 3200,
      "current": null,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 709,
      "stepId": "attachCheck",
      "key": 3200,
      "current": null,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 710,
      "stepId": "attachRight",
      "key": 3200,
      "current": null,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 711,
      "stepId": "returnRoot",
      "key": 3200,
      "current": null,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 712,
      "stepId": "mainLoop",
      "key": 3100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 713,
      "stepId": "callInsert",
      "key": 3100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 714,
      "stepId": "createNode",
      "key": 3100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 715,
      "stepId": "checkEmpty",
      "key": 3100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 716,
      "stepId": "setCurrent",
      "key": 3100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 717,
      "stepId": "setParent",
      "key": 3100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 718,
      "stepId": "whileLoop",
      "key": 3100,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 719,
      "stepId": "parentAssign",
      "key": 3100,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 720,
      "stepId": "checkLess",
      "key": 3100,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 721,
      "stepId": "goRight",
      "key": 3100,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 722,
      "stepId": "whileLoop",
      "key": 3100,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 723,
      "stepId": "parentAssign",
      "key": 3100,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 724,
      "stepId": "checkLess",
      "key": 3100,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 725,
      "stepId": "goRight",
      "key": 3100,
      "current": 3200,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 726,
      "stepId": "whileLoop",
      "key": 3100,
      "current": 3200,
      "parent": 2900,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 727,
      "stepId": "parentAssign",
      "key": 3100,
      "current": 3200,
      "parent": 3200,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 728,
      "stepId": "checkLess",
      "key": 3100,
      "current": 3200,
      "parent": 3200,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 729,
      "stepId": "goLeft",
      "key": 3100,
      "current": null,
      "parent": 3200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 730,
      "stepId": "whileLoop",
      "key": 3100,
      "current": null,
      "parent": 3200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 731,
      "stepId": "attachCheck",
      "key": 3100,
      "current": null,
      "parent": 3200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 732,
      "stepId": "attachLeft",
      "key": 3100,
      "current": null,
      "parent": 3200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 733,
      "stepId": "returnRoot",
      "key": 3100,
      "current": null,
      "parent": 3200,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 734,
      "stepId": "mainLoop",
      "key": 3000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 735,
      "stepId": "callInsert",
      "key": 3000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 736,
      "stepId": "createNode",
      "key": 3000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 737,
      "stepId": "checkEmpty",
      "key": 3000,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 738,
      "stepId": "setCurrent",
      "key": 3000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 739,
      "stepId": "setParent",
      "key": 3000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 740,
      "stepId": "whileLoop",
      "key": 3000,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 741,
      "stepId": "parentAssign",
      "key": 3000,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 742,
      "stepId": "checkLess",
      "key": 3000,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 743,
      "stepId": "goRight",
      "key": 3000,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 744,
      "stepId": "whileLoop",
      "key": 3000,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 745,
      "stepId": "parentAssign",
      "key": 3000,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 746,
      "stepId": "checkLess",
      "key": 3000,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 747,
      "stepId": "goRight",
      "key": 3000,
      "current": 3200,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 748,
      "stepId": "whileLoop",
      "key": 3000,
      "current": 3200,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 749,
      "stepId": "parentAssign",
      "key": 3000,
      "current": 3200,
      "parent": 3200,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 750,
      "stepId": "checkLess",
      "key": 3000,
      "current": 3200,
      "parent": 3200,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 751,
      "stepId": "goLeft",
      "key": 3000,
      "current": 3100,
      "parent": 3200,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 752,
      "stepId": "whileLoop",
      "key": 3000,
      "current": 3100,
      "parent": 3200,
      "side": "left",
      "root": 2100
    },
    {
      "step": 753,
      "stepId": "parentAssign",
      "key": 3000,
      "current": 3100,
      "parent": 3100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 754,
      "stepId": "checkLess",
      "key": 3000,
      "current": 3100,
      "parent": 3100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 755,
      "stepId": "goLeft",
      "key": 3000,
      "current": null,
      "parent": 3100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 756,
      "stepId": "whileLoop",
      "key": 3000,
      "current": null,
      "parent": 3100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 757,
      "stepId": "attachCheck",
      "key": 3000,
      "current": null,
      "parent": 3100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 758,
      "stepId": "attachLeft",
      "key": 3000,
      "current": null,
      "parent": 3100,
      "side": "left",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 759,
      "stepId": "returnRoot",
      "key": 3000,
      "current": null,
      "parent": 3100,
      "side": "left",
      "root": 2100
    },
    {
      "step": 760,
      "stepId": "mainLoop",
      "key": 3300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 761,
      "stepId": "callInsert",
      "key": 3300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 762,
      "stepId": "createNode",
      "key": 3300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 763,
      "stepId": "checkEmpty",
      "key": 3300,
      "current": null,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 764,
      "stepId": "setCurrent",
      "key": 3300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 765,
      "stepId": "setParent",
      "key": 3300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 766,
      "stepId": "whileLoop",
      "key": 3300,
      "current": 2100,
      "parent": null,
      "side": null,
      "root": 2100
    },
    {
      "step": 767,
      "stepId": "parentAssign",
      "key": 3300,
      "current": 2100,
      "parent": 2100,
      "side": null,
      "root": 2100
    },
    {
      "step": 768,
      "stepId": "checkLess",
      "key": 3300,
      "current": 2100,
      "parent": 2100,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 769,
      "stepId": "goRight",
      "key": 3300,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 770,
      "stepId": "whileLoop",
      "key": 3300,
      "current": 2900,
      "parent": 2100,
      "side": "right",
      "root": 2100
    },
    {
      "step": 771,
      "stepId": "parentAssign",
      "key": 3300,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 772,
      "stepId": "checkLess",
      "key": 3300,
      "current": 2900,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 773,
      "stepId": "goRight",
      "key": 3300,
      "current": 3200,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 774,
      "stepId": "whileLoop",
      "key": 3300,
      "current": 3200,
      "parent": 2900,
      "side": "right",
      "root": 2100
    },
    {
      "step": 775,
      "stepId": "parentAssign",
      "key": 3300,
      "current": 3200,
      "parent": 3200,
      "side": "right",
      "root": 2100
    },
    {
      "step": 776,
      "stepId": "checkLess",
      "key": 3300,
      "current": 3200,
      "parent": 3200,
      "side": "right",
      "root": 2100
    },
    {
      "step": 777,
      "stepId": "goRight",
      "key": 3300,
      "current": null,
      "parent": 3200,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 778,
      "stepId": "whileLoop",
      "key": 3300,
      "current": null,
      "parent": 3200,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 779,
      "stepId": "attachCheck",
      "key": 3300,
      "current": null,
      "parent": 3200,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 780,
      "stepId": "attachRight",
      "key": 3300,
      "current": null,
      "parent": 3200,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 781,
      "stepId": "returnRoot",
      "key": 3300,
      "current": null,
      "parent": 3200,
      "side": "right",
      "root": 2100,
      "missing": {
        "stepId": true
      }
    }
  ]
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

  function t(key) {
    return window.I18n ? window.I18n.t(key) : key;
  }

  function stepLabel(stepId) {
    return window.I18n ? window.I18n.stepLabel(stepId) : stepId;
  }

  function varFields() {
    return INSTANCE.varFields || ["key", "current", "parent", "side", "root"];
  }

  function blankFieldList() {
    if (INSTANCE.blankFields && INSTANCE.blankFields.length) {
      return INSTANCE.blankFields.slice();
    }
    return ["stepId"].concat(varFields());
  }

  function tableFields() {
    if (INSTANCE.tableFields && INSTANCE.tableFields.length) {
      return INSTANCE.tableFields.slice();
    }
    return varFields();
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

  function displayFieldValue(field, value) {
    if (value == null || value === "") return "—";
    if (field === "stepId") return stepLabel(value);
    if (field === "side") {
      if (value === "left") return t("labelLeft") || "left";
      if (value === "right") return t("labelRight") || "right";
      if (value === "—" || value === "null") return "—";
      return String(value);
    }
    if (
      (field === "current" || field === "parent" || field === "root") &&
      (value === "null" || value === null)
    ) {
      return t("labelNull") || "null";
    }
    return String(value);
  }

  function displayRowValue(field, raw) {
    if (field === "side") {
      if (raw == null || raw === "") return "—";
      return displayFieldValue(field, raw);
    }
    if (raw == null || raw === "") {
      return displayFieldValue(field, "null");
    }
    return displayFieldValue(field, raw);
  }

  function executorApi() {
    const name = INSTANCE.executorGlobal || "BstInsertExecutor";
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

  function renderTraceTable() {
    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (!body) return;

    if (empty) empty.classList.add("hidden");
    body.innerHTML = "";

    const fields = tableFields();

    INSTANCE.rows.forEach((row) => {
      const tr = document.createElement("tr");
      tr.dataset.stepId = row.stepId;
      tr.dataset.puzzleStep = String(row.step);
      if (row.missing) tr.classList.add("puzzle-missing");

      const cells = [
        { text: String(row.step), field: null },
        {
          text:
            row.missing && row.missing.stepId ? null : stepLabel(row.stepId),
          field: row.missing && row.missing.stepId ? "stepId" : null,
          stepId: row.stepId,
        },
      ];

      fields.forEach((field) => {
        const blank = !!(row.missing && row.missing[field]);
        cells.push({
          text: blank ? null : displayRowValue(field, row[field]),
          field: blank ? field : null,
        });
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

  function refreshLanguage() {
    renderChips();
    refreshSectionTabs();
    refreshFilledCells();

    const body = document.getElementById("trace-body");
    if (!body || !window.I18n) return;
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

      const row = INSTANCE.rows.find(
        (r) => String(r.step) === String(tr.dataset.puzzleStep)
      );
      if (!row) return;
      const fields = tableFields();
      fields.forEach((field, idx) => {
        const td = cells[2 + idx];
        if (!td) return;
        if (td.dataset.dropField) {
          updateDropCell(Number(tr.dataset.puzzleStep), td.dataset.dropField);
        } else {
          td.textContent = displayRowValue(field, row[field]);
        }
      });
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
