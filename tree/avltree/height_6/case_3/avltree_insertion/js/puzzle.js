/**
 * Trace-fill puzzle for AVL insertion.
 * Students drag Line / variable chips into blank rows where values change.
 * Execution gates on each blank row until that row is fully correct.
 */

window.TracePuzzle = (function () {
  const INSTANCE = {
  "sequence": [
    210,
    130,
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
    120,
    180,
    160,
    150,
    140,
    170,
    200,
    190,
    290,
    260,
    240,
    230,
    220,
    250,
    280,
    270,
    320,
    310,
    300,
    330
  ],
  "height": 6,
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
    779,
    786,
    790,
    793,
    795,
    799,
    800,
    801,
    804,
    806,
    810,
    813,
    816,
    817,
    819,
    826,
    830,
    831,
    834,
    835,
    836,
    837,
    838,
    839,
    840,
    841,
    842,
    843,
    844,
    845,
    846,
    847,
    848,
    849,
    856,
    857,
    864,
    872,
    878,
    880,
    890,
    891,
    899,
    900,
    901,
    902,
    903,
    904,
    905,
    906,
    907,
    908,
    909,
    910,
    911,
    912,
    913,
    914,
    920,
    925,
    926,
    932,
    933,
    934,
    943,
    948,
    949,
    960,
    961,
    966,
    972,
    976,
    985,
    993,
    994,
    999,
    1001,
    1002,
    1003,
    1004,
    1005,
    1006,
    1007,
    1008,
    1009,
    1010,
    1011,
    1012,
    1013,
    1014,
    1015,
    1016,
    1017,
    1018,
    1019,
    1020,
    1021,
    1022,
    1023,
    1024,
    1025,
    1026,
    1027,
    1028,
    1029,
    1030,
    1039,
    1040,
    1042,
    1047,
    1056,
    1060,
    1065,
    1066,
    1067,
    1070,
    1085,
    1086,
    1091,
    1093,
    1096,
    1099,
    1100,
    1101,
    1111,
    1112,
    1113,
    1114,
    1119,
    1120,
    1121,
    1125,
    1126,
    1127,
    1128,
    1129,
    1130,
    1131,
    1132,
    1133,
    1134,
    1135,
    1136,
    1137,
    1138,
    1139,
    1147,
    1150,
    1152,
    1167,
    1168,
    1169,
    1182,
    1183,
    1187,
    1189,
    1197,
    1201,
    1210,
    1216,
    1220,
    1221,
    1222,
    1227,
    1236,
    1239,
    1241,
    1243,
    1244,
    1251,
    1252,
    1258,
    1260,
    1269,
    1272,
    1273,
    1280,
    1281,
    1282,
    1283,
    1290,
    1291,
    1292,
    1293,
    1294,
    1295,
    1296,
    1297,
    1298,
    1299,
    1300,
    1301,
    1302,
    1303,
    1304,
    1307,
    1316,
    1324,
    1330,
    1331,
    1337,
    1339,
    1340,
    1341,
    1342,
    1344,
    1346,
    1363,
    1364,
    1366,
    1373,
    1387,
    1388,
    1390,
    1391,
    1392,
    1393,
    1394,
    1395,
    1396,
    1397,
    1398,
    1399,
    1400,
    1401,
    1402,
    1403,
    1404,
    1405,
    1413,
    1431,
    1436,
    1437,
    1438,
    1446,
    1450,
    1452,
    1455,
    1457,
    1469,
    1471,
    1472,
    1473,
    1474,
    1475,
    1476,
    1477,
    1478,
    1479,
    1480,
    1481,
    1482,
    1483,
    1484,
    1485,
    1486,
    1487,
    1488,
    1489,
    1490,
    1491,
    1492,
    1493,
    1494,
    1495,
    1496,
    1497,
    1498,
    1499,
    1500,
    1504,
    1515,
    1522,
    1523,
    1535,
    1547,
    1551,
    1561,
    1563,
    1564,
    1567,
    1568,
    1573,
    1574,
    1575,
    1581,
    1587,
    1589,
    1597,
    1598,
    1599,
    1600,
    1618,
    1619,
    1621,
    1626,
    1627,
    1635,
    1642,
    1643,
    1645,
    1652,
    1653,
    1655,
    1657,
    1658,
    1659,
    1660,
    1661,
    1662,
    1663,
    1664,
    1665,
    1666,
    1667,
    1668,
    1669,
    1670,
    1671,
    1672,
    1673,
    1674,
    1675,
    1676,
    1677,
    1678,
    1679,
    1680,
    1681,
    1682,
    1683,
    1684,
    1685,
    1690,
    1695,
    1716,
    1721,
    1723,
    1724,
    1725,
    1730,
    1738,
    1745,
    1750,
    1757,
    1763,
    1767,
    1777,
    1779,
    1780,
    1781,
    1784,
    1785,
    1786,
    1787,
    1788,
    1789,
    1790,
    1791,
    1792,
    1793,
    1794,
    1795,
    1796,
    1797,
    1798,
    1807,
    1810,
    1817,
    1823,
    1826,
    1830,
    1831,
    1838,
    1840,
    1842,
    1845,
    1854,
    1856,
    1858,
    1863,
    1865,
    1871,
    1875,
    1876,
    1878,
    1882,
    1883,
    1890,
    1891,
    1898,
    1899,
    1900,
    1901,
    1902,
    1903,
    1904,
    1905,
    1906,
    1907,
    1908,
    1909,
    1910,
    1911,
    1912,
    1913,
    1914,
    1918,
    1919,
    1928,
    1929,
    1930,
    1932,
    1947,
    1948,
    1951,
    1957,
    1965,
    1966,
    1971,
    1973,
    1982,
    1988,
    1991,
    1993,
    1996,
    1998,
    2000,
    2003,
    2020,
    2026,
    2030,
    2032,
    2040,
    2044,
    2050,
    2051,
    2054,
    2057,
    2058,
    2059,
    2060,
    2061,
    2062,
    2063,
    2064,
    2065,
    2066,
    2067,
    2068,
    2069,
    2070,
    2071,
    2075,
    2083,
    2086,
    2090,
    2092,
    2094,
    2100,
    2102,
    2110,
    2111,
    2117,
    2124,
    2126,
    2127,
    2128,
    2129,
    2130,
    2133,
    2137,
    2139,
    2144,
    2146,
    2151,
    2157,
    2161,
    2163,
    2175,
    2177,
    2180,
    2182,
    2184,
    2187,
    2188,
    2194,
    2195,
    2196,
    2197,
    2198,
    2199,
    2200,
    2201,
    2202,
    2203,
    2204,
    2205,
    2206,
    2207,
    2208,
    2209,
    2212,
    2219,
    2220,
    2221,
    2223,
    2227,
    2239,
    2245,
    2249,
    2251,
    2259,
    2262,
    2264,
    2268,
    2269,
    2270,
    2271,
    2272,
    2273,
    2274,
    2275,
    2276,
    2277,
    2278,
    2279,
    2280,
    2281,
    2282,
    2283,
    2284,
    2285,
    2286,
    2287,
    2288,
    2289,
    2290,
    2291,
    2292,
    2293,
    2294,
    2295,
    2296,
    2302,
    2304,
    2310,
    2313,
    2314,
    2319,
    2321,
    2334,
    2339,
    2342,
    2350,
    2356,
    2360,
    2366,
    2370,
    2372,
    2378,
    2382,
    2384,
    2391,
    2399,
    2400,
    2401,
    2402,
    2403,
    2404,
    2405,
    2406,
    2407,
    2408,
    2409,
    2410,
    2411,
    2412,
    2413,
    2414,
    2415,
    2416,
    2417,
    2418,
    2419,
    2420,
    2421,
    2422,
    2423,
    2424,
    2425,
    2426,
    2427,
    2430,
    2434,
    2442,
    2444,
    2445,
    2451,
    2452,
    2455,
    2458,
    2460,
    2469,
    2473,
    2476,
    2477,
    2479,
    2480,
    2484,
    2485,
    2486,
    2487,
    2489,
    2490,
    2497,
    2499,
    2507,
    2508,
    2510,
    2517,
    2527,
    2529,
    2530,
    2531,
    2532,
    2533,
    2534,
    2535,
    2536,
    2537,
    2538,
    2539,
    2540,
    2541,
    2542,
    2543,
    2546,
    2550,
    2560,
    2561
  ],
  "answers": {
    "779": {
      "stepId": "checkLess"
    },
    "786": {
      "stepId": "checkNull"
    },
    "790": {
      "stepId": "checkNull"
    },
    "793": {
      "stepId": "checkNull"
    },
    "795": {
      "stepId": "updateHeight"
    },
    "799": {
      "stepId": "calcBf"
    },
    "800": {
      "stepId": "bfReturn"
    },
    "801": {
      "stepId": "caseLL"
    },
    "804": {
      "stepId": "caseRL"
    },
    "806": {
      "stepId": "updateHeight"
    },
    "810": {
      "stepId": "calcBf"
    },
    "813": {
      "stepId": "caseRR"
    },
    "816": {
      "stepId": "returnNode"
    },
    "817": {
      "stepId": "updateHeight"
    },
    "819": {
      "stepId": "uhHr"
    },
    "826": {
      "stepId": "caseRL"
    },
    "830": {
      "stepId": "uhHr"
    },
    "831": {
      "stepId": "uhSet"
    },
    "834": {
      "stepId": "caseLL"
    },
    "835": {
      "stepId": "caseRR"
    },
    "836": {
      "stepId": "rotateLeftRR"
    },
    "837": {
      "stepId": "rotL_y"
    },
    "838": {
      "stepId": "rotL_T2"
    },
    "839": {
      "stepId": "rotL_yLeft"
    },
    "840": {
      "stepId": "rotL_zRight"
    },
    "841": {
      "stepId": "rotL_updZ"
    },
    "842": {
      "stepId": "uhHl"
    },
    "843": {
      "stepId": "uhHr"
    },
    "844": {
      "stepId": "uhSet"
    },
    "845": {
      "stepId": "rotL_updY"
    },
    "846": {
      "stepId": "uhHl"
    },
    "847": {
      "stepId": "uhHr"
    },
    "848": {
      "stepId": "uhSet"
    },
    "849": {
      "stepId": "rotL_return"
    },
    "856": {
      "stepId": "caseLL"
    },
    "857": {
      "stepId": "caseRR"
    },
    "864": {
      "stepId": "checkLess"
    },
    "872": {
      "stepId": "checkLess"
    },
    "878": {
      "stepId": "checkNull"
    },
    "880": {
      "stepId": "goLeft"
    },
    "890": {
      "stepId": "caseRR"
    },
    "891": {
      "stepId": "caseLR"
    },
    "899": {
      "stepId": "bfReturn"
    },
    "900": {
      "stepId": "caseLL"
    },
    "901": {
      "stepId": "rotateRightLL"
    },
    "902": {
      "stepId": "rotR_y"
    },
    "903": {
      "stepId": "rotR_T2"
    },
    "904": {
      "stepId": "rotR_yRight"
    },
    "905": {
      "stepId": "rotR_zLeft"
    },
    "906": {
      "stepId": "rotR_updZ"
    },
    "907": {
      "stepId": "uhHl"
    },
    "908": {
      "stepId": "uhHr"
    },
    "909": {
      "stepId": "uhSet"
    },
    "910": {
      "stepId": "rotR_updY"
    },
    "911": {
      "stepId": "uhHl"
    },
    "912": {
      "stepId": "uhHr"
    },
    "913": {
      "stepId": "uhSet"
    },
    "914": {
      "stepId": "rotR_return"
    },
    "920": {
      "stepId": "bfReturn"
    },
    "925": {
      "stepId": "returnNode"
    },
    "926": {
      "stepId": "updateHeight"
    },
    "932": {
      "stepId": "caseLL"
    },
    "933": {
      "stepId": "caseRR"
    },
    "934": {
      "stepId": "caseLR"
    },
    "943": {
      "stepId": "caseLL"
    },
    "948": {
      "stepId": "mainLoop"
    },
    "949": {
      "stepId": "callInsert"
    },
    "960": {
      "stepId": "checkGreater"
    },
    "961": {
      "stepId": "goRight"
    },
    "966": {
      "stepId": "checkLess"
    },
    "972": {
      "stepId": "uhHr"
    },
    "976": {
      "stepId": "caseLL"
    },
    "985": {
      "stepId": "calcBf"
    },
    "993": {
      "stepId": "uhHl"
    },
    "994": {
      "stepId": "uhHr"
    },
    "999": {
      "stepId": "caseRR"
    },
    "1001": {
      "stepId": "caseRL"
    },
    "1002": {
      "stepId": "rotateRightRL"
    },
    "1003": {
      "stepId": "rotR_y"
    },
    "1004": {
      "stepId": "rotR_T2"
    },
    "1005": {
      "stepId": "rotR_yRight"
    },
    "1006": {
      "stepId": "rotR_zLeft"
    },
    "1007": {
      "stepId": "rotR_updZ"
    },
    "1008": {
      "stepId": "uhHl"
    },
    "1009": {
      "stepId": "uhHr"
    },
    "1010": {
      "stepId": "uhSet"
    },
    "1011": {
      "stepId": "rotR_updY"
    },
    "1012": {
      "stepId": "uhHl"
    },
    "1013": {
      "stepId": "uhHr"
    },
    "1014": {
      "stepId": "uhSet"
    },
    "1015": {
      "stepId": "rotR_return"
    },
    "1016": {
      "stepId": "rotateLeftRL"
    },
    "1017": {
      "stepId": "rotL_y"
    },
    "1018": {
      "stepId": "rotL_T2"
    },
    "1019": {
      "stepId": "rotL_yLeft"
    },
    "1020": {
      "stepId": "rotL_zRight"
    },
    "1021": {
      "stepId": "rotL_updZ"
    },
    "1022": {
      "stepId": "uhHl"
    },
    "1023": {
      "stepId": "uhHr"
    },
    "1024": {
      "stepId": "uhSet"
    },
    "1025": {
      "stepId": "rotL_updY"
    },
    "1026": {
      "stepId": "uhHl"
    },
    "1027": {
      "stepId": "uhHr"
    },
    "1028": {
      "stepId": "uhSet"
    },
    "1029": {
      "stepId": "rotL_return"
    },
    "1030": {
      "stepId": "updateHeight"
    },
    "1039": {
      "stepId": "caseRL"
    },
    "1040": {
      "stepId": "returnNode"
    },
    "1042": {
      "stepId": "uhHl"
    },
    "1047": {
      "stepId": "caseLL"
    },
    "1056": {
      "stepId": "checkGreater"
    },
    "1060": {
      "stepId": "checkGreater"
    },
    "1065": {
      "stepId": "checkNull"
    },
    "1066": {
      "stepId": "checkLess"
    },
    "1067": {
      "stepId": "checkGreater"
    },
    "1070": {
      "stepId": "checkLess"
    },
    "1085": {
      "stepId": "updateHeight"
    },
    "1086": {
      "stepId": "uhHl"
    },
    "1091": {
      "stepId": "caseLL"
    },
    "1093": {
      "stepId": "caseLR"
    },
    "1096": {
      "stepId": "updateHeight"
    },
    "1099": {
      "stepId": "uhSet"
    },
    "1100": {
      "stepId": "calcBf"
    },
    "1101": {
      "stepId": "bfReturn"
    },
    "1111": {
      "stepId": "calcBf"
    },
    "1112": {
      "stepId": "bfReturn"
    },
    "1113": {
      "stepId": "caseLL"
    },
    "1114": {
      "stepId": "caseRR"
    },
    "1119": {
      "stepId": "uhHl"
    },
    "1120": {
      "stepId": "uhHr"
    },
    "1121": {
      "stepId": "uhSet"
    },
    "1125": {
      "stepId": "caseRR"
    },
    "1126": {
      "stepId": "rotateLeftRR"
    },
    "1127": {
      "stepId": "rotL_y"
    },
    "1128": {
      "stepId": "rotL_T2"
    },
    "1129": {
      "stepId": "rotL_yLeft"
    },
    "1130": {
      "stepId": "rotL_zRight"
    },
    "1131": {
      "stepId": "rotL_updZ"
    },
    "1132": {
      "stepId": "uhHl"
    },
    "1133": {
      "stepId": "uhHr"
    },
    "1134": {
      "stepId": "uhSet"
    },
    "1135": {
      "stepId": "rotL_updY"
    },
    "1136": {
      "stepId": "uhHl"
    },
    "1137": {
      "stepId": "uhHr"
    },
    "1138": {
      "stepId": "uhSet"
    },
    "1139": {
      "stepId": "rotL_return"
    },
    "1147": {
      "stepId": "checkLess"
    },
    "1150": {
      "stepId": "checkNull"
    },
    "1152": {
      "stepId": "goLeft"
    },
    "1167": {
      "stepId": "uhHl"
    },
    "1168": {
      "stepId": "uhHr"
    },
    "1169": {
      "stepId": "uhSet"
    },
    "1182": {
      "stepId": "bfReturn"
    },
    "1183": {
      "stepId": "caseLL"
    },
    "1187": {
      "stepId": "returnNode"
    },
    "1189": {
      "stepId": "callInsert"
    },
    "1197": {
      "stepId": "goRight"
    },
    "1201": {
      "stepId": "goRight"
    },
    "1210": {
      "stepId": "uhSet"
    },
    "1216": {
      "stepId": "caseRL"
    },
    "1220": {
      "stepId": "uhHr"
    },
    "1221": {
      "stepId": "uhSet"
    },
    "1222": {
      "stepId": "calcBf"
    },
    "1227": {
      "stepId": "caseRL"
    },
    "1236": {
      "stepId": "caseRR"
    },
    "1239": {
      "stepId": "returnNode"
    },
    "1241": {
      "stepId": "uhHl"
    },
    "1243": {
      "stepId": "uhSet"
    },
    "1244": {
      "stepId": "calcBf"
    },
    "1251": {
      "stepId": "mainLoop"
    },
    "1252": {
      "stepId": "callInsert"
    },
    "1258": {
      "stepId": "checkLess"
    },
    "1260": {
      "stepId": "goRight"
    },
    "1269": {
      "stepId": "checkLess"
    },
    "1272": {
      "stepId": "returnNew"
    },
    "1273": {
      "stepId": "updateHeight"
    },
    "1280": {
      "stepId": "caseRR"
    },
    "1281": {
      "stepId": "caseLR"
    },
    "1282": {
      "stepId": "caseRL"
    },
    "1283": {
      "stepId": "returnNode"
    },
    "1290": {
      "stepId": "caseLL"
    },
    "1291": {
      "stepId": "rotateRightLL"
    },
    "1292": {
      "stepId": "rotR_y"
    },
    "1293": {
      "stepId": "rotR_T2"
    },
    "1294": {
      "stepId": "rotR_yRight"
    },
    "1295": {
      "stepId": "rotR_zLeft"
    },
    "1296": {
      "stepId": "rotR_updZ"
    },
    "1297": {
      "stepId": "uhHl"
    },
    "1298": {
      "stepId": "uhHr"
    },
    "1299": {
      "stepId": "uhSet"
    },
    "1300": {
      "stepId": "rotR_updY"
    },
    "1301": {
      "stepId": "uhHl"
    },
    "1302": {
      "stepId": "uhHr"
    },
    "1303": {
      "stepId": "uhSet"
    },
    "1304": {
      "stepId": "rotR_return"
    },
    "1307": {
      "stepId": "uhHr"
    },
    "1316": {
      "stepId": "updateHeight"
    },
    "1324": {
      "stepId": "caseLR"
    },
    "1330": {
      "stepId": "uhSet"
    },
    "1331": {
      "stepId": "calcBf"
    },
    "1337": {
      "stepId": "returnNode"
    },
    "1339": {
      "stepId": "callInsert"
    },
    "1340": {
      "stepId": "checkNull"
    },
    "1341": {
      "stepId": "checkLess"
    },
    "1342": {
      "stepId": "checkGreater"
    },
    "1344": {
      "stepId": "checkNull"
    },
    "1346": {
      "stepId": "checkGreater"
    },
    "1363": {
      "stepId": "uhHl"
    },
    "1364": {
      "stepId": "uhHr"
    },
    "1366": {
      "stepId": "calcBf"
    },
    "1373": {
      "stepId": "updateHeight"
    },
    "1387": {
      "stepId": "uhSet"
    },
    "1388": {
      "stepId": "calcBf"
    },
    "1390": {
      "stepId": "caseLL"
    },
    "1391": {
      "stepId": "caseRR"
    },
    "1392": {
      "stepId": "rotateLeftRR"
    },
    "1393": {
      "stepId": "rotL_y"
    },
    "1394": {
      "stepId": "rotL_T2"
    },
    "1395": {
      "stepId": "rotL_yLeft"
    },
    "1396": {
      "stepId": "rotL_zRight"
    },
    "1397": {
      "stepId": "rotL_updZ"
    },
    "1398": {
      "stepId": "uhHl"
    },
    "1399": {
      "stepId": "uhHr"
    },
    "1400": {
      "stepId": "uhSet"
    },
    "1401": {
      "stepId": "rotL_updY"
    },
    "1402": {
      "stepId": "uhHl"
    },
    "1403": {
      "stepId": "uhHr"
    },
    "1404": {
      "stepId": "uhSet"
    },
    "1405": {
      "stepId": "rotL_return"
    },
    "1413": {
      "stepId": "caseRR"
    },
    "1431": {
      "stepId": "checkLess"
    },
    "1436": {
      "stepId": "checkGreater"
    },
    "1437": {
      "stepId": "goRight"
    },
    "1438": {
      "stepId": "checkNull"
    },
    "1446": {
      "stepId": "checkNull"
    },
    "1450": {
      "stepId": "returnNew"
    },
    "1452": {
      "stepId": "uhHl"
    },
    "1455": {
      "stepId": "calcBf"
    },
    "1457": {
      "stepId": "caseLL"
    },
    "1469": {
      "stepId": "caseRR"
    },
    "1471": {
      "stepId": "caseRL"
    },
    "1472": {
      "stepId": "rotateRightRL"
    },
    "1473": {
      "stepId": "rotR_y"
    },
    "1474": {
      "stepId": "rotR_T2"
    },
    "1475": {
      "stepId": "rotR_yRight"
    },
    "1476": {
      "stepId": "rotR_zLeft"
    },
    "1477": {
      "stepId": "rotR_updZ"
    },
    "1478": {
      "stepId": "uhHl"
    },
    "1479": {
      "stepId": "uhHr"
    },
    "1480": {
      "stepId": "uhSet"
    },
    "1481": {
      "stepId": "rotR_updY"
    },
    "1482": {
      "stepId": "uhHl"
    },
    "1483": {
      "stepId": "uhHr"
    },
    "1484": {
      "stepId": "uhSet"
    },
    "1485": {
      "stepId": "rotR_return"
    },
    "1486": {
      "stepId": "rotateLeftRL"
    },
    "1487": {
      "stepId": "rotL_y"
    },
    "1488": {
      "stepId": "rotL_T2"
    },
    "1489": {
      "stepId": "rotL_yLeft"
    },
    "1490": {
      "stepId": "rotL_zRight"
    },
    "1491": {
      "stepId": "rotL_updZ"
    },
    "1492": {
      "stepId": "uhHl"
    },
    "1493": {
      "stepId": "uhHr"
    },
    "1494": {
      "stepId": "uhSet"
    },
    "1495": {
      "stepId": "rotL_updY"
    },
    "1496": {
      "stepId": "uhHl"
    },
    "1497": {
      "stepId": "uhHr"
    },
    "1498": {
      "stepId": "uhSet"
    },
    "1499": {
      "stepId": "rotL_return"
    },
    "1500": {
      "stepId": "updateHeight"
    },
    "1504": {
      "stepId": "calcBf"
    },
    "1515": {
      "stepId": "calcBf"
    },
    "1522": {
      "stepId": "updateHeight"
    },
    "1523": {
      "stepId": "uhHl"
    },
    "1535": {
      "stepId": "checkNull"
    },
    "1547": {
      "stepId": "checkNull"
    },
    "1551": {
      "stepId": "checkLess"
    },
    "1561": {
      "stepId": "bfReturn"
    },
    "1563": {
      "stepId": "caseRR"
    },
    "1564": {
      "stepId": "caseLR"
    },
    "1567": {
      "stepId": "updateHeight"
    },
    "1568": {
      "stepId": "uhHl"
    },
    "1573": {
      "stepId": "caseLL"
    },
    "1574": {
      "stepId": "caseRR"
    },
    "1575": {
      "stepId": "caseLR"
    },
    "1581": {
      "stepId": "uhSet"
    },
    "1587": {
      "stepId": "caseRL"
    },
    "1589": {
      "stepId": "updateHeight"
    },
    "1597": {
      "stepId": "caseLR"
    },
    "1598": {
      "stepId": "caseRL"
    },
    "1599": {
      "stepId": "returnNode"
    },
    "1600": {
      "stepId": "updateHeight"
    },
    "1618": {
      "stepId": "checkLess"
    },
    "1619": {
      "stepId": "checkGreater"
    },
    "1621": {
      "stepId": "checkNull"
    },
    "1626": {
      "stepId": "checkLess"
    },
    "1627": {
      "stepId": "goLeft"
    },
    "1635": {
      "stepId": "checkNull"
    },
    "1642": {
      "stepId": "bfReturn"
    },
    "1643": {
      "stepId": "caseLL"
    },
    "1645": {
      "stepId": "caseLR"
    },
    "1652": {
      "stepId": "calcBf"
    },
    "1653": {
      "stepId": "bfReturn"
    },
    "1655": {
      "stepId": "caseRR"
    },
    "1657": {
      "stepId": "caseRL"
    },
    "1658": {
      "stepId": "rotateRightRL"
    },
    "1659": {
      "stepId": "rotR_y"
    },
    "1660": {
      "stepId": "rotR_T2"
    },
    "1661": {
      "stepId": "rotR_yRight"
    },
    "1662": {
      "stepId": "rotR_zLeft"
    },
    "1663": {
      "stepId": "rotR_updZ"
    },
    "1664": {
      "stepId": "uhHl"
    },
    "1665": {
      "stepId": "uhHr"
    },
    "1666": {
      "stepId": "uhSet"
    },
    "1667": {
      "stepId": "rotR_updY"
    },
    "1668": {
      "stepId": "uhHl"
    },
    "1669": {
      "stepId": "uhHr"
    },
    "1670": {
      "stepId": "uhSet"
    },
    "1671": {
      "stepId": "rotR_return"
    },
    "1672": {
      "stepId": "rotateLeftRL"
    },
    "1673": {
      "stepId": "rotL_y"
    },
    "1674": {
      "stepId": "rotL_T2"
    },
    "1675": {
      "stepId": "rotL_yLeft"
    },
    "1676": {
      "stepId": "rotL_zRight"
    },
    "1677": {
      "stepId": "rotL_updZ"
    },
    "1678": {
      "stepId": "uhHl"
    },
    "1679": {
      "stepId": "uhHr"
    },
    "1680": {
      "stepId": "uhSet"
    },
    "1681": {
      "stepId": "rotL_updY"
    },
    "1682": {
      "stepId": "uhHl"
    },
    "1683": {
      "stepId": "uhHr"
    },
    "1684": {
      "stepId": "uhSet"
    },
    "1685": {
      "stepId": "rotL_return"
    },
    "1690": {
      "stepId": "calcBf"
    },
    "1695": {
      "stepId": "caseRL"
    },
    "1716": {
      "stepId": "caseLR"
    },
    "1721": {
      "stepId": "uhHr"
    },
    "1723": {
      "stepId": "calcBf"
    },
    "1724": {
      "stepId": "bfReturn"
    },
    "1725": {
      "stepId": "caseLL"
    },
    "1730": {
      "stepId": "mainLoop"
    },
    "1738": {
      "stepId": "checkGreater"
    },
    "1745": {
      "stepId": "checkLess"
    },
    "1750": {
      "stepId": "checkNull"
    },
    "1757": {
      "stepId": "uhHl"
    },
    "1763": {
      "stepId": "caseRR"
    },
    "1767": {
      "stepId": "updateHeight"
    },
    "1777": {
      "stepId": "returnNode"
    },
    "1779": {
      "stepId": "uhHl"
    },
    "1780": {
      "stepId": "uhHr"
    },
    "1781": {
      "stepId": "uhSet"
    },
    "1784": {
      "stepId": "caseLL"
    },
    "1785": {
      "stepId": "rotateRightLL"
    },
    "1786": {
      "stepId": "rotR_y"
    },
    "1787": {
      "stepId": "rotR_T2"
    },
    "1788": {
      "stepId": "rotR_yRight"
    },
    "1789": {
      "stepId": "rotR_zLeft"
    },
    "1790": {
      "stepId": "rotR_updZ"
    },
    "1791": {
      "stepId": "uhHl"
    },
    "1792": {
      "stepId": "uhHr"
    },
    "1793": {
      "stepId": "uhSet"
    },
    "1794": {
      "stepId": "rotR_updY"
    },
    "1795": {
      "stepId": "uhHl"
    },
    "1796": {
      "stepId": "uhHr"
    },
    "1797": {
      "stepId": "uhSet"
    },
    "1798": {
      "stepId": "rotR_return"
    },
    "1807": {
      "stepId": "caseLR"
    },
    "1810": {
      "stepId": "updateHeight"
    },
    "1817": {
      "stepId": "caseRR"
    },
    "1823": {
      "stepId": "uhHr"
    },
    "1826": {
      "stepId": "bfReturn"
    },
    "1830": {
      "stepId": "caseRL"
    },
    "1831": {
      "stepId": "returnNode"
    },
    "1838": {
      "stepId": "checkNull"
    },
    "1840": {
      "stepId": "checkGreater"
    },
    "1842": {
      "stepId": "checkNull"
    },
    "1845": {
      "stepId": "goRight"
    },
    "1854": {
      "stepId": "checkLess"
    },
    "1856": {
      "stepId": "goRight"
    },
    "1858": {
      "stepId": "returnNew"
    },
    "1863": {
      "stepId": "calcBf"
    },
    "1865": {
      "stepId": "caseLL"
    },
    "1871": {
      "stepId": "uhHl"
    },
    "1875": {
      "stepId": "bfReturn"
    },
    "1876": {
      "stepId": "caseLL"
    },
    "1878": {
      "stepId": "caseLR"
    },
    "1882": {
      "stepId": "uhHl"
    },
    "1883": {
      "stepId": "uhHr"
    },
    "1890": {
      "stepId": "caseRL"
    },
    "1891": {
      "stepId": "returnNode"
    },
    "1898": {
      "stepId": "caseLL"
    },
    "1899": {
      "stepId": "caseRR"
    },
    "1900": {
      "stepId": "rotateLeftRR"
    },
    "1901": {
      "stepId": "rotL_y"
    },
    "1902": {
      "stepId": "rotL_T2"
    },
    "1903": {
      "stepId": "rotL_yLeft"
    },
    "1904": {
      "stepId": "rotL_zRight"
    },
    "1905": {
      "stepId": "rotL_updZ"
    },
    "1906": {
      "stepId": "uhHl"
    },
    "1907": {
      "stepId": "uhHr"
    },
    "1908": {
      "stepId": "uhSet"
    },
    "1909": {
      "stepId": "rotL_updY"
    },
    "1910": {
      "stepId": "uhHl"
    },
    "1911": {
      "stepId": "uhHr"
    },
    "1912": {
      "stepId": "uhSet"
    },
    "1913": {
      "stepId": "rotL_return"
    },
    "1914": {
      "stepId": "updateHeight"
    },
    "1918": {
      "stepId": "calcBf"
    },
    "1919": {
      "stepId": "bfReturn"
    },
    "1928": {
      "stepId": "uhSet"
    },
    "1929": {
      "stepId": "calcBf"
    },
    "1930": {
      "stepId": "bfReturn"
    },
    "1932": {
      "stepId": "caseRR"
    },
    "1947": {
      "stepId": "checkLess"
    },
    "1948": {
      "stepId": "checkGreater"
    },
    "1951": {
      "stepId": "checkLess"
    },
    "1957": {
      "stepId": "checkNull"
    },
    "1965": {
      "stepId": "caseLL"
    },
    "1966": {
      "stepId": "caseRR"
    },
    "1971": {
      "stepId": "uhHl"
    },
    "1973": {
      "stepId": "uhSet"
    },
    "1982": {
      "stepId": "uhHl"
    },
    "1988": {
      "stepId": "caseRR"
    },
    "1991": {
      "stepId": "returnNode"
    },
    "1993": {
      "stepId": "uhHl"
    },
    "1996": {
      "stepId": "calcBf"
    },
    "1998": {
      "stepId": "caseLL"
    },
    "2000": {
      "stepId": "caseLR"
    },
    "2003": {
      "stepId": "updateHeight"
    },
    "2020": {
      "stepId": "checkNull"
    },
    "2026": {
      "stepId": "checkGreater"
    },
    "2030": {
      "stepId": "checkGreater"
    },
    "2032": {
      "stepId": "checkNull"
    },
    "2040": {
      "stepId": "updateHeight"
    },
    "2044": {
      "stepId": "calcBf"
    },
    "2050": {
      "stepId": "returnNode"
    },
    "2051": {
      "stepId": "updateHeight"
    },
    "2054": {
      "stepId": "uhSet"
    },
    "2057": {
      "stepId": "caseLL"
    },
    "2058": {
      "stepId": "rotateRightLL"
    },
    "2059": {
      "stepId": "rotR_y"
    },
    "2060": {
      "stepId": "rotR_T2"
    },
    "2061": {
      "stepId": "rotR_yRight"
    },
    "2062": {
      "stepId": "rotR_zLeft"
    },
    "2063": {
      "stepId": "rotR_updZ"
    },
    "2064": {
      "stepId": "uhHl"
    },
    "2065": {
      "stepId": "uhHr"
    },
    "2066": {
      "stepId": "uhSet"
    },
    "2067": {
      "stepId": "rotR_updY"
    },
    "2068": {
      "stepId": "uhHl"
    },
    "2069": {
      "stepId": "uhHr"
    },
    "2070": {
      "stepId": "uhSet"
    },
    "2071": {
      "stepId": "rotR_return"
    },
    "2075": {
      "stepId": "uhSet"
    },
    "2083": {
      "stepId": "updateHeight"
    },
    "2086": {
      "stepId": "uhSet"
    },
    "2090": {
      "stepId": "caseRR"
    },
    "2092": {
      "stepId": "caseRL"
    },
    "2094": {
      "stepId": "updateHeight"
    },
    "2100": {
      "stepId": "caseLL"
    },
    "2102": {
      "stepId": "caseLR"
    },
    "2110": {
      "stepId": "bfReturn"
    },
    "2111": {
      "stepId": "caseLL"
    },
    "2117": {
      "stepId": "callInsert"
    },
    "2124": {
      "stepId": "checkGreater"
    },
    "2126": {
      "stepId": "checkNull"
    },
    "2127": {
      "stepId": "checkLess"
    },
    "2128": {
      "stepId": "checkGreater"
    },
    "2129": {
      "stepId": "goRight"
    },
    "2130": {
      "stepId": "checkNull"
    },
    "2133": {
      "stepId": "goRight"
    },
    "2137": {
      "stepId": "goRight"
    },
    "2139": {
      "stepId": "checkLess"
    },
    "2144": {
      "stepId": "updateHeight"
    },
    "2146": {
      "stepId": "uhHr"
    },
    "2151": {
      "stepId": "caseRR"
    },
    "2157": {
      "stepId": "uhHr"
    },
    "2161": {
      "stepId": "caseLL"
    },
    "2163": {
      "stepId": "caseLR"
    },
    "2175": {
      "stepId": "caseRL"
    },
    "2177": {
      "stepId": "updateHeight"
    },
    "2180": {
      "stepId": "uhSet"
    },
    "2182": {
      "stepId": "bfReturn"
    },
    "2184": {
      "stepId": "caseRR"
    },
    "2187": {
      "stepId": "returnNode"
    },
    "2188": {
      "stepId": "updateHeight"
    },
    "2194": {
      "stepId": "caseLL"
    },
    "2195": {
      "stepId": "caseRR"
    },
    "2196": {
      "stepId": "rotateLeftRR"
    },
    "2197": {
      "stepId": "rotL_y"
    },
    "2198": {
      "stepId": "rotL_T2"
    },
    "2199": {
      "stepId": "rotL_yLeft"
    },
    "2200": {
      "stepId": "rotL_zRight"
    },
    "2201": {
      "stepId": "rotL_updZ"
    },
    "2202": {
      "stepId": "uhHl"
    },
    "2203": {
      "stepId": "uhHr"
    },
    "2204": {
      "stepId": "uhSet"
    },
    "2205": {
      "stepId": "rotL_updY"
    },
    "2206": {
      "stepId": "uhHl"
    },
    "2207": {
      "stepId": "uhHr"
    },
    "2208": {
      "stepId": "uhSet"
    },
    "2209": {
      "stepId": "rotL_return"
    },
    "2212": {
      "stepId": "uhHr"
    },
    "2219": {
      "stepId": "caseRL"
    },
    "2220": {
      "stepId": "returnNode"
    },
    "2221": {
      "stepId": "mainLoop"
    },
    "2223": {
      "stepId": "checkNull"
    },
    "2227": {
      "stepId": "checkNull"
    },
    "2239": {
      "stepId": "checkNull"
    },
    "2245": {
      "stepId": "goLeft"
    },
    "2249": {
      "stepId": "uhHl"
    },
    "2251": {
      "stepId": "uhSet"
    },
    "2259": {
      "stepId": "updateHeight"
    },
    "2262": {
      "stepId": "uhSet"
    },
    "2264": {
      "stepId": "bfReturn"
    },
    "2268": {
      "stepId": "caseRL"
    },
    "2269": {
      "stepId": "rotateRightRL"
    },
    "2270": {
      "stepId": "rotR_y"
    },
    "2271": {
      "stepId": "rotR_T2"
    },
    "2272": {
      "stepId": "rotR_yRight"
    },
    "2273": {
      "stepId": "rotR_zLeft"
    },
    "2274": {
      "stepId": "rotR_updZ"
    },
    "2275": {
      "stepId": "uhHl"
    },
    "2276": {
      "stepId": "uhHr"
    },
    "2277": {
      "stepId": "uhSet"
    },
    "2278": {
      "stepId": "rotR_updY"
    },
    "2279": {
      "stepId": "uhHl"
    },
    "2280": {
      "stepId": "uhHr"
    },
    "2281": {
      "stepId": "uhSet"
    },
    "2282": {
      "stepId": "rotR_return"
    },
    "2283": {
      "stepId": "rotateLeftRL"
    },
    "2284": {
      "stepId": "rotL_y"
    },
    "2285": {
      "stepId": "rotL_T2"
    },
    "2286": {
      "stepId": "rotL_yLeft"
    },
    "2287": {
      "stepId": "rotL_zRight"
    },
    "2288": {
      "stepId": "rotL_updZ"
    },
    "2289": {
      "stepId": "uhHl"
    },
    "2290": {
      "stepId": "uhHr"
    },
    "2291": {
      "stepId": "uhSet"
    },
    "2292": {
      "stepId": "rotL_updY"
    },
    "2293": {
      "stepId": "uhHl"
    },
    "2294": {
      "stepId": "uhHr"
    },
    "2295": {
      "stepId": "uhSet"
    },
    "2296": {
      "stepId": "rotL_return"
    },
    "2302": {
      "stepId": "bfReturn"
    },
    "2304": {
      "stepId": "caseRR"
    },
    "2310": {
      "stepId": "uhHr"
    },
    "2313": {
      "stepId": "bfReturn"
    },
    "2314": {
      "stepId": "caseLL"
    },
    "2319": {
      "stepId": "updateHeight"
    },
    "2321": {
      "stepId": "uhHr"
    },
    "2334": {
      "stepId": "calcBf"
    },
    "2339": {
      "stepId": "caseRL"
    },
    "2342": {
      "stepId": "callInsert"
    },
    "2350": {
      "stepId": "goRight"
    },
    "2356": {
      "stepId": "checkLess"
    },
    "2360": {
      "stepId": "checkLess"
    },
    "2366": {
      "stepId": "checkNull"
    },
    "2370": {
      "stepId": "uhHr"
    },
    "2372": {
      "stepId": "calcBf"
    },
    "2378": {
      "stepId": "returnNode"
    },
    "2382": {
      "stepId": "uhSet"
    },
    "2384": {
      "stepId": "bfReturn"
    },
    "2391": {
      "stepId": "uhHl"
    },
    "2399": {
      "stepId": "caseRL"
    },
    "2400": {
      "stepId": "rotateRightRL"
    },
    "2401": {
      "stepId": "rotR_y"
    },
    "2402": {
      "stepId": "rotR_T2"
    },
    "2403": {
      "stepId": "rotR_yRight"
    },
    "2404": {
      "stepId": "rotR_zLeft"
    },
    "2405": {
      "stepId": "rotR_updZ"
    },
    "2406": {
      "stepId": "uhHl"
    },
    "2407": {
      "stepId": "uhHr"
    },
    "2408": {
      "stepId": "uhSet"
    },
    "2409": {
      "stepId": "rotR_updY"
    },
    "2410": {
      "stepId": "uhHl"
    },
    "2411": {
      "stepId": "uhHr"
    },
    "2412": {
      "stepId": "uhSet"
    },
    "2413": {
      "stepId": "rotR_return"
    },
    "2414": {
      "stepId": "rotateLeftRL"
    },
    "2415": {
      "stepId": "rotL_y"
    },
    "2416": {
      "stepId": "rotL_T2"
    },
    "2417": {
      "stepId": "rotL_yLeft"
    },
    "2418": {
      "stepId": "rotL_zRight"
    },
    "2419": {
      "stepId": "rotL_updZ"
    },
    "2420": {
      "stepId": "uhHl"
    },
    "2421": {
      "stepId": "uhHr"
    },
    "2422": {
      "stepId": "uhSet"
    },
    "2423": {
      "stepId": "rotL_updY"
    },
    "2424": {
      "stepId": "uhHl"
    },
    "2425": {
      "stepId": "uhHr"
    },
    "2426": {
      "stepId": "uhSet"
    },
    "2427": {
      "stepId": "rotL_return"
    },
    "2430": {
      "stepId": "uhHr"
    },
    "2434": {
      "stepId": "caseLL"
    },
    "2442": {
      "stepId": "uhSet"
    },
    "2444": {
      "stepId": "bfReturn"
    },
    "2445": {
      "stepId": "caseLL"
    },
    "2451": {
      "stepId": "uhHl"
    },
    "2452": {
      "stepId": "uhHr"
    },
    "2455": {
      "stepId": "bfReturn"
    },
    "2458": {
      "stepId": "caseLR"
    },
    "2460": {
      "stepId": "returnNode"
    },
    "2469": {
      "stepId": "checkGreater"
    },
    "2473": {
      "stepId": "checkGreater"
    },
    "2476": {
      "stepId": "checkLess"
    },
    "2477": {
      "stepId": "checkGreater"
    },
    "2479": {
      "stepId": "checkNull"
    },
    "2480": {
      "stepId": "checkLess"
    },
    "2484": {
      "stepId": "checkLess"
    },
    "2485": {
      "stepId": "checkGreater"
    },
    "2486": {
      "stepId": "goRight"
    },
    "2487": {
      "stepId": "checkNull"
    },
    "2489": {
      "stepId": "updateHeight"
    },
    "2490": {
      "stepId": "uhHl"
    },
    "2497": {
      "stepId": "caseLR"
    },
    "2499": {
      "stepId": "returnNode"
    },
    "2507": {
      "stepId": "caseRR"
    },
    "2508": {
      "stepId": "caseLR"
    },
    "2510": {
      "stepId": "returnNode"
    },
    "2517": {
      "stepId": "caseLL"
    },
    "2527": {
      "stepId": "bfReturn"
    },
    "2529": {
      "stepId": "caseRR"
    },
    "2530": {
      "stepId": "rotateLeftRR"
    },
    "2531": {
      "stepId": "rotL_y"
    },
    "2532": {
      "stepId": "rotL_T2"
    },
    "2533": {
      "stepId": "rotL_yLeft"
    },
    "2534": {
      "stepId": "rotL_zRight"
    },
    "2535": {
      "stepId": "rotL_updZ"
    },
    "2536": {
      "stepId": "uhHl"
    },
    "2537": {
      "stepId": "uhHr"
    },
    "2538": {
      "stepId": "uhSet"
    },
    "2539": {
      "stepId": "rotL_updY"
    },
    "2540": {
      "stepId": "uhHl"
    },
    "2541": {
      "stepId": "uhHr"
    },
    "2542": {
      "stepId": "uhSet"
    },
    "2543": {
      "stepId": "rotL_return"
    },
    "2546": {
      "stepId": "uhHr"
    },
    "2550": {
      "stepId": "caseLL"
    },
    "2560": {
      "stepId": "bfReturn"
    },
    "2561": {
      "stepId": "caseLL"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 544,
        "value": "rotL_return"
      },
      {
        "id": 641,
        "value": "caseLL"
      },
      {
        "id": 455,
        "value": "updateHeight"
      },
      {
        "id": 531,
        "value": "rotateLeftRL"
      },
      {
        "id": 494,
        "value": "rotL_updZ"
      },
      {
        "id": 109,
        "value": "uhHl"
      },
      {
        "id": 160,
        "value": "caseRL"
      },
      {
        "id": 615,
        "value": "uhHl"
      },
      {
        "id": 500,
        "value": "uhHr"
      },
      {
        "id": 502,
        "value": "rotL_return"
      },
      {
        "id": 228,
        "value": "uhSet"
      },
      {
        "id": 261,
        "value": "rotL_updZ"
      },
      {
        "id": 45,
        "value": "rotateRightLL"
      },
      {
        "id": 40,
        "value": "goLeft"
      },
      {
        "id": 120,
        "value": "caseLR"
      },
      {
        "id": 205,
        "value": "checkGreater"
      },
      {
        "id": 39,
        "value": "checkNull"
      },
      {
        "id": 427,
        "value": "caseLL"
      },
      {
        "id": 366,
        "value": "rotR_return"
      },
      {
        "id": 318,
        "value": "uhSet"
      },
      {
        "id": 334,
        "value": "calcBf"
      },
      {
        "id": 21,
        "value": "rotateLeftRR"
      },
      {
        "id": 5,
        "value": "updateHeight"
      },
      {
        "id": 107,
        "value": "caseRL"
      },
      {
        "id": 169,
        "value": "calcBf"
      },
      {
        "id": 17,
        "value": "uhHr"
      },
      {
        "id": 293,
        "value": "checkLess"
      },
      {
        "id": 469,
        "value": "goRight"
      },
      {
        "id": 149,
        "value": "goLeft"
      },
      {
        "id": 65,
        "value": "caseLL"
      },
      {
        "id": 517,
        "value": "rotateRightRL"
      },
      {
        "id": 256,
        "value": "rotateLeftRL"
      },
      {
        "id": 445,
        "value": "rotR_updZ"
      },
      {
        "id": 191,
        "value": "rotR_updY"
      },
      {
        "id": 546,
        "value": "caseRR"
      },
      {
        "id": 264,
        "value": "uhSet"
      },
      {
        "id": 535,
        "value": "rotL_zRight"
      },
      {
        "id": 528,
        "value": "uhHr"
      },
      {
        "id": 529,
        "value": "uhSet"
      },
      {
        "id": 582,
        "value": "rotL_T2"
      },
      {
        "id": 267,
        "value": "uhHr"
      },
      {
        "id": 210,
        "value": "calcBf"
      },
      {
        "id": 398,
        "value": "rotL_updZ"
      },
      {
        "id": 215,
        "value": "caseRR"
      },
      {
        "id": 313,
        "value": "uhHr"
      },
      {
        "id": 589,
        "value": "rotL_updY"
      },
      {
        "id": 309,
        "value": "rotR_yRight"
      },
      {
        "id": 625,
        "value": "rotL_y"
      },
      {
        "id": 283,
        "value": "caseLL"
      },
      {
        "id": 23,
        "value": "rotL_T2"
      },
      {
        "id": 449,
        "value": "rotR_updY"
      },
      {
        "id": 122,
        "value": "uhSet"
      },
      {
        "id": 285,
        "value": "caseLR"
      },
      {
        "id": 4,
        "value": "checkNull"
      },
      {
        "id": 584,
        "value": "rotL_zRight"
      },
      {
        "id": 345,
        "value": "uhHl"
      },
      {
        "id": 218,
        "value": "rotL_T2"
      },
      {
        "id": 141,
        "value": "uhSet"
      },
      {
        "id": 339,
        "value": "bfReturn"
      },
      {
        "id": 269,
        "value": "rotL_return"
      },
      {
        "id": 182,
        "value": "rotateRightLL"
      },
      {
        "id": 66,
        "value": "mainLoop"
      },
      {
        "id": 518,
        "value": "rotR_y"
      },
      {
        "id": 410,
        "value": "uhSet"
      },
      {
        "id": 25,
        "value": "rotL_zRight"
      },
      {
        "id": 383,
        "value": "uhHl"
      },
      {
        "id": 257,
        "value": "rotL_y"
      },
      {
        "id": 606,
        "value": "checkLess"
      },
      {
        "id": 566,
        "value": "rotateRightRL"
      },
      {
        "id": 379,
        "value": "goRight"
      },
      {
        "id": 388,
        "value": "uhHr"
      },
      {
        "id": 19,
        "value": "caseLL"
      },
      {
        "id": 577,
        "value": "uhHr"
      },
      {
        "id": 37,
        "value": "checkLess"
      },
      {
        "id": 92,
        "value": "rotateLeftRL"
      },
      {
        "id": 209,
        "value": "uhHr"
      },
      {
        "id": 263,
        "value": "uhHr"
      },
      {
        "id": 77,
        "value": "caseRL"
      },
      {
        "id": 76,
        "value": "caseRR"
      },
      {
        "id": 432,
        "value": "checkGreater"
      },
      {
        "id": 367,
        "value": "caseLR"
      },
      {
        "id": 631,
        "value": "uhHr"
      },
      {
        "id": 225,
        "value": "rotL_updY"
      },
      {
        "id": 44,
        "value": "caseLL"
      },
      {
        "id": 315,
        "value": "rotR_updY"
      },
      {
        "id": 477,
        "value": "uhHr"
      },
      {
        "id": 372,
        "value": "caseRL"
      },
      {
        "id": 240,
        "value": "caseRR"
      },
      {
        "id": 511,
        "value": "uhHl"
      },
      {
        "id": 291,
        "value": "returnNode"
      },
      {
        "id": 236,
        "value": "returnNew"
      },
      {
        "id": 213,
        "value": "calcBf"
      },
      {
        "id": 93,
        "value": "rotL_y"
      },
      {
        "id": 486,
        "value": "updateHeight"
      },
      {
        "id": 400,
        "value": "uhHr"
      },
      {
        "id": 541,
        "value": "uhHl"
      },
      {
        "id": 265,
        "value": "rotL_updY"
      },
      {
        "id": 488,
        "value": "caseRR"
      },
      {
        "id": 50,
        "value": "rotR_updZ"
      },
      {
        "id": 490,
        "value": "rotL_y"
      },
      {
        "id": 117,
        "value": "updateHeight"
      },
      {
        "id": 438,
        "value": "uhSet"
      },
      {
        "id": 159,
        "value": "uhSet"
      },
      {
        "id": 327,
        "value": "uhHr"
      },
      {
        "id": 62,
        "value": "caseLL"
      },
      {
        "id": 562,
        "value": "uhSet"
      },
      {
        "id": 423,
        "value": "caseRR"
      },
      {
        "id": 227,
        "value": "uhHr"
      },
      {
        "id": 246,
        "value": "rotR_zLeft"
      },
      {
        "id": 613,
        "value": "checkNull"
      },
      {
        "id": 627,
        "value": "rotL_yLeft"
      },
      {
        "id": 125,
        "value": "calcBf"
      },
      {
        "id": 208,
        "value": "uhHl"
      },
      {
        "id": 85,
        "value": "uhHr"
      },
      {
        "id": 328,
        "value": "uhSet"
      },
      {
        "id": 147,
        "value": "checkLess"
      },
      {
        "id": 467,
        "value": "checkLess"
      },
      {
        "id": 485,
        "value": "returnNode"
      },
      {
        "id": 177,
        "value": "caseRR"
      },
      {
        "id": 595,
        "value": "caseLL"
      },
      {
        "id": 136,
        "value": "rotL_yLeft"
      },
      {
        "id": 148,
        "value": "checkNull"
      },
      {
        "id": 276,
        "value": "checkNull"
      },
      {
        "id": 144,
        "value": "uhHr"
      },
      {
        "id": 480,
        "value": "caseRL"
      },
      {
        "id": 52,
        "value": "uhHr"
      },
      {
        "id": 14,
        "value": "updateHeight"
      },
      {
        "id": 358,
        "value": "rotR_updZ"
      },
      {
        "id": 635,
        "value": "uhHr"
      },
      {
        "id": 416,
        "value": "checkLess"
      },
      {
        "id": 533,
        "value": "rotL_T2"
      },
      {
        "id": 468,
        "value": "checkGreater"
      },
      {
        "id": 244,
        "value": "rotR_T2"
      },
      {
        "id": 503,
        "value": "uhHr"
      },
      {
        "id": 253,
        "value": "uhHr"
      },
      {
        "id": 49,
        "value": "rotR_zLeft"
      },
      {
        "id": 212,
        "value": "uhSet"
      },
      {
        "id": 482,
        "value": "uhSet"
      },
      {
        "id": 79,
        "value": "rotR_y"
      },
      {
        "id": 286,
        "value": "uhSet"
      },
      {
        "id": 74,
        "value": "uhHl"
      },
      {
        "id": 259,
        "value": "rotL_yLeft"
      },
      {
        "id": 326,
        "value": "uhHl"
      },
      {
        "id": 223,
        "value": "uhHr"
      },
      {
        "id": 347,
        "value": "updateHeight"
      },
      {
        "id": 376,
        "value": "checkNull"
      },
      {
        "id": 335,
        "value": "caseRL"
      },
      {
        "id": 422,
        "value": "uhHl"
      },
      {
        "id": 68,
        "value": "checkGreater"
      },
      {
        "id": 28,
        "value": "uhHr"
      },
      {
        "id": 126,
        "value": "bfReturn"
      },
      {
        "id": 619,
        "value": "caseLR"
      },
      {
        "id": 389,
        "value": "caseRL"
      },
      {
        "id": 173,
        "value": "goRight"
      },
      {
        "id": 302,
        "value": "calcBf"
      },
      {
        "id": 167,
        "value": "uhHl"
      },
      {
        "id": 32,
        "value": "uhHr"
      },
      {
        "id": 157,
        "value": "goRight"
      },
      {
        "id": 73,
        "value": "calcBf"
      },
      {
        "id": 196,
        "value": "uhHr"
      },
      {
        "id": 100,
        "value": "uhSet"
      },
      {
        "id": 399,
        "value": "uhHl"
      },
      {
        "id": 521,
        "value": "rotR_zLeft"
      },
      {
        "id": 176,
        "value": "updateHeight"
      },
      {
        "id": 507,
        "value": "checkNull"
      },
      {
        "id": 354,
        "value": "rotR_y"
      },
      {
        "id": 459,
        "value": "updateHeight"
      },
      {
        "id": 476,
        "value": "caseRR"
      },
      {
        "id": 350,
        "value": "uhHr"
      },
      {
        "id": 491,
        "value": "rotL_T2"
      },
      {
        "id": 214,
        "value": "caseLL"
      },
      {
        "id": 392,
        "value": "caseRR"
      },
      {
        "id": 351,
        "value": "uhSet"
      },
      {
        "id": 461,
        "value": "caseLR"
      },
      {
        "id": 70,
        "value": "checkLess"
      },
      {
        "id": 559,
        "value": "uhHr"
      },
      {
        "id": 123,
        "value": "calcBf"
      },
      {
        "id": 30,
        "value": "rotL_updY"
      },
      {
        "id": 104,
        "value": "uhSet"
      },
      {
        "id": 409,
        "value": "bfReturn"
      },
      {
        "id": 234,
        "value": "checkNull"
      },
      {
        "id": 119,
        "value": "caseLL"
      },
      {
        "id": 385,
        "value": "caseLL"
      },
      {
        "id": 474,
        "value": "updateHeight"
      },
      {
        "id": 599,
        "value": "uhHl"
      },
      {
        "id": 254,
        "value": "uhSet"
      },
      {
        "id": 545,
        "value": "bfReturn"
      },
      {
        "id": 83,
        "value": "rotR_updZ"
      },
      {
        "id": 465,
        "value": "checkGreater"
      },
      {
        "id": 63,
        "value": "caseRR"
      },
      {
        "id": 308,
        "value": "rotR_T2"
      },
      {
        "id": 579,
        "value": "rotR_return"
      },
      {
        "id": 331,
        "value": "uhHr"
      },
      {
        "id": 453,
        "value": "rotR_return"
      },
      {
        "id": 395,
        "value": "rotL_T2"
      },
      {
        "id": 539,
        "value": "uhSet"
      },
      {
        "id": 632,
        "value": "uhSet"
      },
      {
        "id": 252,
        "value": "uhHl"
      },
      {
        "id": 15,
        "value": "uhHr"
      },
      {
        "id": 168,
        "value": "uhSet"
      },
      {
        "id": 538,
        "value": "uhHr"
      },
      {
        "id": 95,
        "value": "rotL_yLeft"
      },
      {
        "id": 329,
        "value": "rotL_updY"
      },
      {
        "id": 591,
        "value": "uhHr"
      },
      {
        "id": 300,
        "value": "caseLL"
      },
      {
        "id": 418,
        "value": "caseLL"
      },
      {
        "id": 406,
        "value": "rotL_return"
      },
      {
        "id": 91,
        "value": "rotR_return"
      },
      {
        "id": 292,
        "value": "updateHeight"
      },
      {
        "id": 437,
        "value": "updateHeight"
      },
      {
        "id": 540,
        "value": "rotL_updY"
      },
      {
        "id": 402,
        "value": "rotL_updY"
      },
      {
        "id": 262,
        "value": "uhHl"
      },
      {
        "id": 249,
        "value": "uhHr"
      },
      {
        "id": 207,
        "value": "checkGreater"
      },
      {
        "id": 7,
        "value": "bfReturn"
      },
      {
        "id": 164,
        "value": "caseRL"
      },
      {
        "id": 272,
        "value": "calcBf"
      },
      {
        "id": 621,
        "value": "caseLL"
      },
      {
        "id": 75,
        "value": "uhHr"
      },
      {
        "id": 510,
        "value": "goLeft"
      },
      {
        "id": 230,
        "value": "caseRR"
      },
      {
        "id": 444,
        "value": "rotR_zLeft"
      },
      {
        "id": 640,
        "value": "bfReturn"
      },
      {
        "id": 243,
        "value": "rotR_y"
      },
      {
        "id": 146,
        "value": "rotL_return"
      },
      {
        "id": 462,
        "value": "bfReturn"
      },
      {
        "id": 250,
        "value": "uhSet"
      },
      {
        "id": 570,
        "value": "rotR_zLeft"
      },
      {
        "id": 317,
        "value": "uhHr"
      },
      {
        "id": 338,
        "value": "calcBf"
      },
      {
        "id": 16,
        "value": "caseRL"
      },
      {
        "id": 275,
        "value": "checkNull"
      },
      {
        "id": 115,
        "value": "checkGreater"
      },
      {
        "id": 558,
        "value": "checkNull"
      },
      {
        "id": 530,
        "value": "rotR_return"
      },
      {
        "id": 170,
        "value": "mainLoop"
      },
      {
        "id": 605,
        "value": "checkGreater"
      },
      {
        "id": 492,
        "value": "rotL_yLeft"
      },
      {
        "id": 516,
        "value": "caseRL"
      },
      {
        "id": 374,
        "value": "checkNull"
      },
      {
        "id": 573,
        "value": "uhHr"
      },
      {
        "id": 611,
        "value": "checkGreater"
      },
      {
        "id": 504,
        "value": "caseRL"
      },
      {
        "id": 472,
        "value": "goRight"
      },
      {
        "id": 46,
        "value": "rotR_y"
      },
      {
        "id": 431,
        "value": "checkGreater"
      },
      {
        "id": 636,
        "value": "uhSet"
      },
      {
        "id": 224,
        "value": "uhSet"
      },
      {
        "id": 290,
        "value": "caseRL"
      },
      {
        "id": 274,
        "value": "uhHl"
      },
      {
        "id": 310,
        "value": "rotR_zLeft"
      },
      {
        "id": 508,
        "value": "checkNull"
      },
      {
        "id": 397,
        "value": "rotL_zRight"
      },
      {
        "id": 446,
        "value": "uhHl"
      },
      {
        "id": 357,
        "value": "rotR_zLeft"
      },
      {
        "id": 277,
        "value": "checkLess"
      },
      {
        "id": 132,
        "value": "caseRR"
      },
      {
        "id": 556,
        "value": "checkLess"
      },
      {
        "id": 1,
        "value": "checkLess"
      },
      {
        "id": 578,
        "value": "uhSet"
      },
      {
        "id": 188,
        "value": "uhHl"
      },
      {
        "id": 628,
        "value": "rotL_zRight"
      },
      {
        "id": 226,
        "value": "uhHl"
      },
      {
        "id": 129,
        "value": "uhHl"
      },
      {
        "id": 333,
        "value": "rotL_return"
      },
      {
        "id": 549,
        "value": "caseLL"
      },
      {
        "id": 620,
        "value": "returnNode"
      },
      {
        "id": 118,
        "value": "uhHl"
      },
      {
        "id": 154,
        "value": "caseLL"
      },
      {
        "id": 198,
        "value": "caseLR"
      },
      {
        "id": 38,
        "value": "checkLess"
      },
      {
        "id": 325,
        "value": "rotL_updZ"
      },
      {
        "id": 288,
        "value": "updateHeight"
      },
      {
        "id": 473,
        "value": "checkLess"
      },
      {
        "id": 163,
        "value": "calcBf"
      },
      {
        "id": 247,
        "value": "rotR_updZ"
      },
      {
        "id": 407,
        "value": "updateHeight"
      },
      {
        "id": 94,
        "value": "rotL_T2"
      },
      {
        "id": 43,
        "value": "bfReturn"
      },
      {
        "id": 89,
        "value": "uhHr"
      },
      {
        "id": 440,
        "value": "rotateRightLL"
      },
      {
        "id": 435,
        "value": "calcBf"
      },
      {
        "id": 588,
        "value": "uhSet"
      },
      {
        "id": 349,
        "value": "uhHl"
      },
      {
        "id": 597,
        "value": "bfReturn"
      },
      {
        "id": 596,
        "value": "uhSet"
      },
      {
        "id": 29,
        "value": "uhSet"
      },
      {
        "id": 419,
        "value": "caseRR"
      },
      {
        "id": 171,
        "value": "callInsert"
      },
      {
        "id": 193,
        "value": "uhHr"
      },
      {
        "id": 101,
        "value": "rotL_updY"
      },
      {
        "id": 60,
        "value": "returnNode"
      },
      {
        "id": 441,
        "value": "rotR_y"
      },
      {
        "id": 155,
        "value": "returnNode"
      },
      {
        "id": 311,
        "value": "rotR_updZ"
      },
      {
        "id": 206,
        "value": "checkNull"
      },
      {
        "id": 26,
        "value": "rotL_updZ"
      },
      {
        "id": 18,
        "value": "uhSet"
      },
      {
        "id": 36,
        "value": "caseRR"
      },
      {
        "id": 64,
        "value": "caseLR"
      },
      {
        "id": 390,
        "value": "returnNode"
      },
      {
        "id": 411,
        "value": "calcBf"
      },
      {
        "id": 593,
        "value": "rotL_return"
      },
      {
        "id": 111,
        "value": "checkGreater"
      },
      {
        "id": 362,
        "value": "rotR_updY"
      },
      {
        "id": 134,
        "value": "rotL_y"
      },
      {
        "id": 509,
        "value": "checkNull"
      },
      {
        "id": 429,
        "value": "updateHeight"
      },
      {
        "id": 592,
        "value": "uhSet"
      },
      {
        "id": 337,
        "value": "uhHr"
      },
      {
        "id": 189,
        "value": "uhHr"
      },
      {
        "id": 299,
        "value": "bfReturn"
      },
      {
        "id": 574,
        "value": "uhSet"
      },
      {
        "id": 102,
        "value": "uhHl"
      },
      {
        "id": 156,
        "value": "callInsert"
      },
      {
        "id": 98,
        "value": "uhHl"
      },
      {
        "id": 324,
        "value": "rotL_zRight"
      },
      {
        "id": 352,
        "value": "caseLL"
      },
      {
        "id": 382,
        "value": "caseLL"
      },
      {
        "id": 133,
        "value": "rotateLeftRR"
      },
      {
        "id": 172,
        "value": "checkLess"
      },
      {
        "id": 417,
        "value": "checkNull"
      },
      {
        "id": 140,
        "value": "uhHr"
      },
      {
        "id": 365,
        "value": "uhSet"
      },
      {
        "id": 359,
        "value": "uhHl"
      },
      {
        "id": 112,
        "value": "checkGreater"
      },
      {
        "id": 442,
        "value": "rotR_T2"
      },
      {
        "id": 394,
        "value": "rotL_y"
      },
      {
        "id": 34,
        "value": "rotL_return"
      },
      {
        "id": 239,
        "value": "caseLL"
      },
      {
        "id": 554,
        "value": "callInsert"
      },
      {
        "id": 139,
        "value": "uhHl"
      },
      {
        "id": 368,
        "value": "updateHeight"
      },
      {
        "id": 436,
        "value": "returnNode"
      },
      {
        "id": 151,
        "value": "uhHr"
      },
      {
        "id": 2,
        "value": "checkNull"
      },
      {
        "id": 464,
        "value": "callInsert"
      },
      {
        "id": 175,
        "value": "returnNew"
      },
      {
        "id": 195,
        "value": "rotR_return"
      },
      {
        "id": 222,
        "value": "uhHl"
      },
      {
        "id": 289,
        "value": "caseLR"
      },
      {
        "id": 121,
        "value": "updateHeight"
      },
      {
        "id": 602,
        "value": "caseLR"
      },
      {
        "id": 27,
        "value": "uhHl"
      },
      {
        "id": 630,
        "value": "uhHl"
      },
      {
        "id": 457,
        "value": "caseRR"
      },
      {
        "id": 612,
        "value": "goRight"
      },
      {
        "id": 585,
        "value": "rotL_updZ"
      },
      {
        "id": 180,
        "value": "returnNode"
      },
      {
        "id": 456,
        "value": "uhSet"
      },
      {
        "id": 551,
        "value": "uhHr"
      },
      {
        "id": 80,
        "value": "rotR_T2"
      },
      {
        "id": 356,
        "value": "rotR_yRight"
      },
      {
        "id": 639,
        "value": "caseLL"
      },
      {
        "id": 97,
        "value": "rotL_updZ"
      },
      {
        "id": 478,
        "value": "caseLL"
      },
      {
        "id": 33,
        "value": "uhSet"
      },
      {
        "id": 439,
        "value": "caseLL"
      },
      {
        "id": 138,
        "value": "rotL_updZ"
      },
      {
        "id": 424,
        "value": "returnNode"
      },
      {
        "id": 143,
        "value": "uhHl"
      },
      {
        "id": 284,
        "value": "caseRR"
      },
      {
        "id": 408,
        "value": "calcBf"
      },
      {
        "id": 430,
        "value": "checkNull"
      },
      {
        "id": 373,
        "value": "returnNode"
      },
      {
        "id": 381,
        "value": "calcBf"
      },
      {
        "id": 61,
        "value": "updateHeight"
      },
      {
        "id": 56,
        "value": "uhHr"
      },
      {
        "id": 295,
        "value": "checkNull"
      },
      {
        "id": 466,
        "value": "checkNull"
      },
      {
        "id": 600,
        "value": "uhHr"
      },
      {
        "id": 604,
        "value": "checkGreater"
      },
      {
        "id": 386,
        "value": "caseLR"
      },
      {
        "id": 434,
        "value": "updateHeight"
      },
      {
        "id": 233,
        "value": "goRight"
      },
      {
        "id": 484,
        "value": "caseRR"
      },
      {
        "id": 363,
        "value": "uhHl"
      },
      {
        "id": 6,
        "value": "calcBf"
      },
      {
        "id": 51,
        "value": "uhHl"
      },
      {
        "id": 294,
        "value": "checkGreater"
      },
      {
        "id": 192,
        "value": "uhHl"
      },
      {
        "id": 421,
        "value": "uhSet"
      },
      {
        "id": 273,
        "value": "updateHeight"
      },
      {
        "id": 320,
        "value": "rotateLeftRL"
      },
      {
        "id": 536,
        "value": "rotL_updZ"
      },
      {
        "id": 512,
        "value": "uhSet"
      },
      {
        "id": 590,
        "value": "uhHl"
      },
      {
        "id": 113,
        "value": "checkNull"
      },
      {
        "id": 165,
        "value": "caseRR"
      },
      {
        "id": 41,
        "value": "caseRR"
      },
      {
        "id": 526,
        "value": "rotR_updY"
      },
      {
        "id": 594,
        "value": "uhHr"
      },
      {
        "id": 348,
        "value": "returnNode"
      },
      {
        "id": 255,
        "value": "rotR_return"
      },
      {
        "id": 401,
        "value": "uhSet"
      },
      {
        "id": 103,
        "value": "uhHr"
      },
      {
        "id": 202,
        "value": "callInsert"
      },
      {
        "id": 184,
        "value": "rotR_T2"
      },
      {
        "id": 543,
        "value": "uhSet"
      },
      {
        "id": 197,
        "value": "updateHeight"
      },
      {
        "id": 610,
        "value": "checkLess"
      },
      {
        "id": 296,
        "value": "checkLess"
      },
      {
        "id": 505,
        "value": "returnNode"
      },
      {
        "id": 415,
        "value": "checkGreater"
      },
      {
        "id": 567,
        "value": "rotR_y"
      },
      {
        "id": 375,
        "value": "checkGreater"
      },
      {
        "id": 307,
        "value": "rotR_y"
      },
      {
        "id": 341,
        "value": "mainLoop"
      },
      {
        "id": 572,
        "value": "uhHl"
      },
      {
        "id": 229,
        "value": "rotL_return"
      },
      {
        "id": 569,
        "value": "rotR_yRight"
      },
      {
        "id": 560,
        "value": "calcBf"
      },
      {
        "id": 452,
        "value": "uhSet"
      },
      {
        "id": 3,
        "value": "checkNull"
      },
      {
        "id": 515,
        "value": "bfReturn"
      },
      {
        "id": 135,
        "value": "rotL_T2"
      },
      {
        "id": 128,
        "value": "caseRR"
      },
      {
        "id": 178,
        "value": "caseLR"
      },
      {
        "id": 571,
        "value": "rotR_updZ"
      },
      {
        "id": 377,
        "value": "goRight"
      },
      {
        "id": 344,
        "value": "checkNull"
      },
      {
        "id": 520,
        "value": "rotR_yRight"
      },
      {
        "id": 425,
        "value": "uhHl"
      },
      {
        "id": 304,
        "value": "caseRR"
      },
      {
        "id": 548,
        "value": "bfReturn"
      },
      {
        "id": 179,
        "value": "caseRL"
      },
      {
        "id": 428,
        "value": "caseLR"
      },
      {
        "id": 542,
        "value": "uhHr"
      },
      {
        "id": 187,
        "value": "rotR_updZ"
      },
      {
        "id": 20,
        "value": "caseRR"
      },
      {
        "id": 336,
        "value": "caseLR"
      },
      {
        "id": 86,
        "value": "uhSet"
      },
      {
        "id": 71,
        "value": "uhHr"
      },
      {
        "id": 142,
        "value": "rotL_updY"
      },
      {
        "id": 460,
        "value": "caseLL"
      },
      {
        "id": 555,
        "value": "goRight"
      },
      {
        "id": 108,
        "value": "returnNode"
      },
      {
        "id": 105,
        "value": "rotL_return"
      },
      {
        "id": 623,
        "value": "caseRR"
      },
      {
        "id": 237,
        "value": "uhHl"
      },
      {
        "id": 166,
        "value": "returnNode"
      },
      {
        "id": 217,
        "value": "rotL_y"
      },
      {
        "id": 568,
        "value": "rotR_T2"
      },
      {
        "id": 360,
        "value": "uhHr"
      },
      {
        "id": 124,
        "value": "bfReturn"
      },
      {
        "id": 609,
        "value": "checkLess"
      },
      {
        "id": 499,
        "value": "uhHl"
      },
      {
        "id": 88,
        "value": "uhHl"
      },
      {
        "id": 396,
        "value": "rotL_yLeft"
      },
      {
        "id": 332,
        "value": "uhSet"
      },
      {
        "id": 131,
        "value": "uhSet"
      },
      {
        "id": 447,
        "value": "uhHr"
      },
      {
        "id": 316,
        "value": "uhHl"
      },
      {
        "id": 380,
        "value": "returnNew"
      },
      {
        "id": 370,
        "value": "uhHr"
      },
      {
        "id": 258,
        "value": "rotL_T2"
      },
      {
        "id": 306,
        "value": "rotateRightRL"
      },
      {
        "id": 150,
        "value": "uhHl"
      },
      {
        "id": 618,
        "value": "caseRR"
      },
      {
        "id": 12,
        "value": "caseRR"
      },
      {
        "id": 617,
        "value": "returnNode"
      },
      {
        "id": 11,
        "value": "calcBf"
      },
      {
        "id": 137,
        "value": "rotL_zRight"
      },
      {
        "id": 221,
        "value": "rotL_updZ"
      },
      {
        "id": 8,
        "value": "caseLL"
      },
      {
        "id": 96,
        "value": "rotL_zRight"
      },
      {
        "id": 413,
        "value": "caseRR"
      },
      {
        "id": 523,
        "value": "uhHl"
      },
      {
        "id": 361,
        "value": "uhSet"
      },
      {
        "id": 153,
        "value": "bfReturn"
      },
      {
        "id": 270,
        "value": "updateHeight"
      },
      {
        "id": 321,
        "value": "rotL_y"
      },
      {
        "id": 220,
        "value": "rotL_zRight"
      },
      {
        "id": 271,
        "value": "calcBf"
      },
      {
        "id": 241,
        "value": "caseRL"
      },
      {
        "id": 576,
        "value": "uhHl"
      },
      {
        "id": 581,
        "value": "rotL_y"
      },
      {
        "id": 547,
        "value": "uhHr"
      },
      {
        "id": 72,
        "value": "caseLL"
      },
      {
        "id": 248,
        "value": "uhHl"
      },
      {
        "id": 601,
        "value": "bfReturn"
      },
      {
        "id": 561,
        "value": "returnNode"
      },
      {
        "id": 564,
        "value": "uhHl"
      },
      {
        "id": 280,
        "value": "caseLR"
      },
      {
        "id": 586,
        "value": "uhHl"
      },
      {
        "id": 251,
        "value": "rotR_updY"
      },
      {
        "id": 471,
        "value": "goRight"
      },
      {
        "id": 47,
        "value": "rotR_T2"
      },
      {
        "id": 216,
        "value": "rotateLeftRR"
      },
      {
        "id": 553,
        "value": "caseRL"
      },
      {
        "id": 634,
        "value": "uhHl"
      },
      {
        "id": 162,
        "value": "uhSet"
      },
      {
        "id": 183,
        "value": "rotR_y"
      },
      {
        "id": 279,
        "value": "caseRR"
      },
      {
        "id": 598,
        "value": "caseLL"
      },
      {
        "id": 303,
        "value": "bfReturn"
      },
      {
        "id": 127,
        "value": "caseLL"
      },
      {
        "id": 448,
        "value": "uhSet"
      },
      {
        "id": 204,
        "value": "checkLess"
      },
      {
        "id": 371,
        "value": "bfReturn"
      },
      {
        "id": 48,
        "value": "rotR_yRight"
      },
      {
        "id": 537,
        "value": "uhHl"
      },
      {
        "id": 525,
        "value": "uhSet"
      },
      {
        "id": 557,
        "value": "checkLess"
      },
      {
        "id": 580,
        "value": "rotateLeftRL"
      },
      {
        "id": 403,
        "value": "uhHl"
      },
      {
        "id": 603,
        "value": "returnNode"
      },
      {
        "id": 532,
        "value": "rotL_y"
      },
      {
        "id": 161,
        "value": "uhHr"
      },
      {
        "id": 387,
        "value": "uhHl"
      },
      {
        "id": 298,
        "value": "checkNull"
      },
      {
        "id": 450,
        "value": "uhHl"
      },
      {
        "id": 404,
        "value": "uhHr"
      },
      {
        "id": 211,
        "value": "updateHeight"
      },
      {
        "id": 238,
        "value": "calcBf"
      },
      {
        "id": 622,
        "value": "bfReturn"
      },
      {
        "id": 633,
        "value": "rotL_updY"
      },
      {
        "id": 481,
        "value": "updateHeight"
      },
      {
        "id": 281,
        "value": "updateHeight"
      },
      {
        "id": 414,
        "value": "checkLess"
      },
      {
        "id": 322,
        "value": "rotL_T2"
      },
      {
        "id": 583,
        "value": "rotL_yLeft"
      },
      {
        "id": 495,
        "value": "uhHl"
      },
      {
        "id": 513,
        "value": "updateHeight"
      },
      {
        "id": 219,
        "value": "rotL_yLeft"
      },
      {
        "id": 59,
        "value": "bfReturn"
      },
      {
        "id": 391,
        "value": "caseLL"
      },
      {
        "id": 145,
        "value": "uhSet"
      },
      {
        "id": 260,
        "value": "rotL_zRight"
      },
      {
        "id": 342,
        "value": "checkGreater"
      },
      {
        "id": 181,
        "value": "caseLL"
      },
      {
        "id": 433,
        "value": "checkNull"
      },
      {
        "id": 110,
        "value": "caseLL"
      },
      {
        "id": 458,
        "value": "caseRL"
      },
      {
        "id": 190,
        "value": "uhSet"
      },
      {
        "id": 69,
        "value": "goRight"
      },
      {
        "id": 451,
        "value": "uhHr"
      },
      {
        "id": 426,
        "value": "calcBf"
      },
      {
        "id": 9,
        "value": "caseRL"
      },
      {
        "id": 501,
        "value": "uhSet"
      },
      {
        "id": 22,
        "value": "rotL_y"
      },
      {
        "id": 346,
        "value": "caseRR"
      },
      {
        "id": 323,
        "value": "rotL_yLeft"
      },
      {
        "id": 479,
        "value": "caseLR"
      },
      {
        "id": 412,
        "value": "bfReturn"
      },
      {
        "id": 242,
        "value": "rotateRightRL"
      },
      {
        "id": 463,
        "value": "caseLL"
      },
      {
        "id": 10,
        "value": "updateHeight"
      },
      {
        "id": 278,
        "value": "bfReturn"
      },
      {
        "id": 106,
        "value": "updateHeight"
      },
      {
        "id": 470,
        "value": "checkNull"
      },
      {
        "id": 534,
        "value": "rotL_yLeft"
      },
      {
        "id": 268,
        "value": "uhSet"
      },
      {
        "id": 552,
        "value": "calcBf"
      },
      {
        "id": 114,
        "value": "checkLess"
      },
      {
        "id": 524,
        "value": "uhHr"
      },
      {
        "id": 90,
        "value": "uhSet"
      },
      {
        "id": 152,
        "value": "uhSet"
      },
      {
        "id": 232,
        "value": "checkGreater"
      },
      {
        "id": 266,
        "value": "uhHl"
      },
      {
        "id": 305,
        "value": "caseRL"
      },
      {
        "id": 483,
        "value": "bfReturn"
      },
      {
        "id": 282,
        "value": "uhHl"
      },
      {
        "id": 130,
        "value": "uhHr"
      },
      {
        "id": 78,
        "value": "rotateRightRL"
      },
      {
        "id": 587,
        "value": "uhHr"
      },
      {
        "id": 54,
        "value": "rotR_updY"
      },
      {
        "id": 343,
        "value": "checkLess"
      },
      {
        "id": 369,
        "value": "caseRR"
      },
      {
        "id": 200,
        "value": "calcBf"
      },
      {
        "id": 287,
        "value": "caseRL"
      },
      {
        "id": 199,
        "value": "uhSet"
      },
      {
        "id": 638,
        "value": "uhHr"
      },
      {
        "id": 55,
        "value": "uhHl"
      },
      {
        "id": 87,
        "value": "rotR_updY"
      },
      {
        "id": 565,
        "value": "caseRL"
      },
      {
        "id": 194,
        "value": "uhSet"
      },
      {
        "id": 487,
        "value": "caseLL"
      },
      {
        "id": 203,
        "value": "checkNull"
      },
      {
        "id": 607,
        "value": "checkGreater"
      },
      {
        "id": 522,
        "value": "rotR_updZ"
      },
      {
        "id": 24,
        "value": "rotL_yLeft"
      },
      {
        "id": 314,
        "value": "uhSet"
      },
      {
        "id": 493,
        "value": "rotL_zRight"
      },
      {
        "id": 13,
        "value": "returnNode"
      },
      {
        "id": 637,
        "value": "rotL_return"
      },
      {
        "id": 31,
        "value": "uhHl"
      },
      {
        "id": 378,
        "value": "checkLess"
      },
      {
        "id": 231,
        "value": "checkLess"
      },
      {
        "id": 82,
        "value": "rotR_zLeft"
      },
      {
        "id": 550,
        "value": "updateHeight"
      },
      {
        "id": 624,
        "value": "rotateLeftRR"
      },
      {
        "id": 330,
        "value": "uhHl"
      },
      {
        "id": 297,
        "value": "goLeft"
      },
      {
        "id": 235,
        "value": "checkNull"
      },
      {
        "id": 629,
        "value": "rotL_updZ"
      },
      {
        "id": 364,
        "value": "uhHr"
      },
      {
        "id": 35,
        "value": "caseLL"
      },
      {
        "id": 174,
        "value": "checkLess"
      },
      {
        "id": 514,
        "value": "uhSet"
      },
      {
        "id": 158,
        "value": "goRight"
      },
      {
        "id": 575,
        "value": "rotR_updY"
      },
      {
        "id": 186,
        "value": "rotR_zLeft"
      },
      {
        "id": 185,
        "value": "rotR_yRight"
      },
      {
        "id": 116,
        "value": "checkLess"
      },
      {
        "id": 608,
        "value": "checkNull"
      },
      {
        "id": 353,
        "value": "rotateRightLL"
      },
      {
        "id": 405,
        "value": "uhSet"
      },
      {
        "id": 57,
        "value": "uhSet"
      },
      {
        "id": 42,
        "value": "caseLR"
      },
      {
        "id": 498,
        "value": "rotL_updY"
      },
      {
        "id": 67,
        "value": "callInsert"
      },
      {
        "id": 245,
        "value": "rotR_yRight"
      },
      {
        "id": 475,
        "value": "uhHr"
      },
      {
        "id": 626,
        "value": "rotL_T2"
      },
      {
        "id": 616,
        "value": "caseLR"
      },
      {
        "id": 519,
        "value": "rotR_T2"
      },
      {
        "id": 312,
        "value": "uhHl"
      },
      {
        "id": 340,
        "value": "caseLL"
      },
      {
        "id": 99,
        "value": "uhHr"
      },
      {
        "id": 58,
        "value": "rotR_return"
      },
      {
        "id": 84,
        "value": "uhHl"
      },
      {
        "id": 527,
        "value": "uhHl"
      },
      {
        "id": 319,
        "value": "rotR_return"
      },
      {
        "id": 497,
        "value": "uhSet"
      },
      {
        "id": 614,
        "value": "updateHeight"
      },
      {
        "id": 496,
        "value": "uhHr"
      },
      {
        "id": 563,
        "value": "bfReturn"
      },
      {
        "id": 53,
        "value": "uhSet"
      },
      {
        "id": 81,
        "value": "rotR_yRight"
      },
      {
        "id": 443,
        "value": "rotR_yRight"
      },
      {
        "id": 506,
        "value": "mainLoop"
      },
      {
        "id": 393,
        "value": "rotateLeftRR"
      },
      {
        "id": 489,
        "value": "rotateLeftRR"
      },
      {
        "id": 420,
        "value": "uhHl"
      },
      {
        "id": 384,
        "value": "bfReturn"
      },
      {
        "id": 454,
        "value": "uhSet"
      },
      {
        "id": 355,
        "value": "rotR_T2"
      },
      {
        "id": 201,
        "value": "returnNode"
      },
      {
        "id": 301,
        "value": "caseLR"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainLoop",
      "key": 210,
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
      "key": 210,
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
      "key": 210,
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
      "key": 210,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 5,
      "stepId": "mainLoop",
      "key": 130,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 6,
      "stepId": "callInsert",
      "key": 130,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 7,
      "stepId": "checkNull",
      "key": 130,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 8,
      "stepId": "checkLess",
      "key": 130,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 9,
      "stepId": "goLeft",
      "key": 130,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 10,
      "stepId": "checkNull",
      "key": 130,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 11,
      "stepId": "returnNew",
      "key": 130,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 12,
      "stepId": "updateHeight",
      "key": 130,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 13,
      "stepId": "uhHl",
      "key": 130,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 210
    },
    {
      "step": 14,
      "stepId": "uhHr",
      "key": 130,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 15,
      "stepId": "uhSet",
      "key": 130,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 16,
      "stepId": "calcBf",
      "key": 130,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 17,
      "stepId": "bfReturn",
      "key": 130,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 18,
      "stepId": "caseLL",
      "key": 130,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 19,
      "stepId": "caseRR",
      "key": 130,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 20,
      "stepId": "caseLR",
      "key": 130,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 21,
      "stepId": "caseRL",
      "key": 130,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 22,
      "stepId": "returnNode",
      "key": 130,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 23,
      "stepId": "mainLoop",
      "key": 80,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 24,
      "stepId": "callInsert",
      "key": 80,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 25,
      "stepId": "checkNull",
      "key": 80,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 26,
      "stepId": "checkLess",
      "key": 80,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 27,
      "stepId": "goLeft",
      "key": 80,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 28,
      "stepId": "checkNull",
      "key": 80,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 29,
      "stepId": "checkLess",
      "key": 80,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 30,
      "stepId": "goLeft",
      "key": 80,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 31,
      "stepId": "checkNull",
      "key": 80,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 32,
      "stepId": "returnNew",
      "key": 80,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 33,
      "stepId": "updateHeight",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 34,
      "stepId": "uhHl",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 210
    },
    {
      "step": 35,
      "stepId": "uhHr",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 36,
      "stepId": "uhSet",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 37,
      "stepId": "calcBf",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 38,
      "stepId": "bfReturn",
      "key": 80,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 39,
      "stepId": "caseLL",
      "key": 80,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 40,
      "stepId": "caseRR",
      "key": 80,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 41,
      "stepId": "caseLR",
      "key": 80,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 42,
      "stepId": "caseRL",
      "key": 80,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 43,
      "stepId": "returnNode",
      "key": 80,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 44,
      "stepId": "updateHeight",
      "key": 80,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 210
    },
    {
      "step": 45,
      "stepId": "uhHl",
      "key": 80,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 210
    },
    {
      "step": 46,
      "stepId": "uhHr",
      "key": 80,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 47,
      "stepId": "uhSet",
      "key": 80,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 48,
      "stepId": "calcBf",
      "key": 80,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 49,
      "stepId": "bfReturn",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 50,
      "stepId": "caseLL",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 51,
      "stepId": "rotateRightLL",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 52,
      "stepId": "rotR_y",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 130,
      "height_left": 1,
      "height_right": -1,
      "root": 210
    },
    {
      "step": 53,
      "stepId": "rotR_T2",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 130,
      "height_left": 1,
      "height_right": -1,
      "root": 210,
      "temp": null
    },
    {
      "step": 54,
      "stepId": "rotR_yRight",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 130,
      "height_left": 1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 55,
      "stepId": "rotR_zLeft",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 130,
      "height_left": 1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 56,
      "stepId": "rotR_updZ",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 130,
      "height_left": 1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 57,
      "stepId": "uhHl",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 130,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 58,
      "stepId": "uhHr",
      "key": 80,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 130,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 59,
      "stepId": "uhSet",
      "key": 80,
      "node": 210,
      "bf": 0,
      "case": "LL",
      "new_root": 130,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 60,
      "stepId": "rotR_updY",
      "key": 80,
      "node": 210,
      "bf": 0,
      "case": "LL",
      "new_root": 130,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 61,
      "stepId": "uhHl",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": "LL",
      "new_root": 130,
      "height_left": 0,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 62,
      "stepId": "uhHr",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": "LL",
      "new_root": 130,
      "height_left": 0,
      "height_right": 0,
      "root": 130,
      "temp": null
    },
    {
      "step": 63,
      "stepId": "uhSet",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": "LL",
      "new_root": 130,
      "height_left": 0,
      "height_right": 0,
      "root": 130,
      "temp": null
    },
    {
      "step": 64,
      "stepId": "rotR_return",
      "key": 80,
      "node": 130,
      "bf": 0,
      "case": "LL",
      "new_root": 130,
      "height_left": 0,
      "height_right": 0,
      "root": 130,
      "temp": null
    },
    {
      "step": 65,
      "stepId": "mainLoop",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 66,
      "stepId": "callInsert",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 67,
      "stepId": "checkNull",
      "key": 50,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 68,
      "stepId": "checkLess",
      "key": 50,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 69,
      "stepId": "goLeft",
      "key": 50,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 70,
      "stepId": "checkNull",
      "key": 50,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 71,
      "stepId": "checkLess",
      "key": 50,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 72,
      "stepId": "goLeft",
      "key": 50,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 73,
      "stepId": "checkNull",
      "key": 50,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 74,
      "stepId": "returnNew",
      "key": 50,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 75,
      "stepId": "updateHeight",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 76,
      "stepId": "uhHl",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 130
    },
    {
      "step": 77,
      "stepId": "uhHr",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 78,
      "stepId": "uhSet",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 79,
      "stepId": "calcBf",
      "key": 50,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 80,
      "stepId": "bfReturn",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 81,
      "stepId": "caseLL",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 82,
      "stepId": "caseRR",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 83,
      "stepId": "caseLR",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 84,
      "stepId": "caseRL",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 85,
      "stepId": "returnNode",
      "key": 50,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 86,
      "stepId": "updateHeight",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 87,
      "stepId": "uhHl",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 130
    },
    {
      "step": 88,
      "stepId": "uhHr",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 89,
      "stepId": "uhSet",
      "key": 50,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 90,
      "stepId": "calcBf",
      "key": 50,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 91,
      "stepId": "bfReturn",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 92,
      "stepId": "caseLL",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 93,
      "stepId": "caseRR",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 94,
      "stepId": "caseLR",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 95,
      "stepId": "caseRL",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 96,
      "stepId": "returnNode",
      "key": 50,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 97,
      "stepId": "mainLoop",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 98,
      "stepId": "callInsert",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 99,
      "stepId": "checkNull",
      "key": 30,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 100,
      "stepId": "checkLess",
      "key": 30,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 101,
      "stepId": "goLeft",
      "key": 30,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 102,
      "stepId": "checkNull",
      "key": 30,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 103,
      "stepId": "checkLess",
      "key": 30,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 104,
      "stepId": "goLeft",
      "key": 30,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 105,
      "stepId": "checkNull",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 106,
      "stepId": "checkLess",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 107,
      "stepId": "goLeft",
      "key": 30,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 108,
      "stepId": "checkNull",
      "key": 30,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 109,
      "stepId": "returnNew",
      "key": 30,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 110,
      "stepId": "updateHeight",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 111,
      "stepId": "uhHl",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 130
    },
    {
      "step": 112,
      "stepId": "uhHr",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 113,
      "stepId": "uhSet",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 114,
      "stepId": "calcBf",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 115,
      "stepId": "bfReturn",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 116,
      "stepId": "caseLL",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 117,
      "stepId": "caseRR",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 118,
      "stepId": "caseLR",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 119,
      "stepId": "caseRL",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 120,
      "stepId": "returnNode",
      "key": 30,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 121,
      "stepId": "updateHeight",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 122,
      "stepId": "uhHl",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 130
    },
    {
      "step": 123,
      "stepId": "uhHr",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 124,
      "stepId": "uhSet",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 125,
      "stepId": "calcBf",
      "key": 30,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 126,
      "stepId": "bfReturn",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 127,
      "stepId": "caseLL",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 128,
      "stepId": "rotateRightLL",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 129,
      "stepId": "rotR_y",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 130,
      "stepId": "rotR_T2",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 131,
      "stepId": "rotR_yRight",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 132,
      "stepId": "rotR_zLeft",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 133,
      "stepId": "rotR_updZ",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 134,
      "stepId": "uhHl",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 135,
      "stepId": "uhHr",
      "key": 30,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 136,
      "stepId": "uhSet",
      "key": 30,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 137,
      "stepId": "rotR_updY",
      "key": 30,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": -1,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 138,
      "stepId": "uhHl",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": -1,
      "root": 130,
      "temp": null
    },
    {
      "step": 139,
      "stepId": "uhHr",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 130,
      "temp": null
    },
    {
      "step": 140,
      "stepId": "uhSet",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 130,
      "temp": null
    },
    {
      "step": 141,
      "stepId": "rotR_return",
      "key": 30,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 130,
      "temp": null
    },
    {
      "step": 142,
      "stepId": "updateHeight",
      "key": 30,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 143,
      "stepId": "uhHl",
      "key": 30,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 130
    },
    {
      "step": 144,
      "stepId": "uhHr",
      "key": 30,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 145,
      "stepId": "uhSet",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 146,
      "stepId": "calcBf",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 147,
      "stepId": "bfReturn",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 148,
      "stepId": "caseLL",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 149,
      "stepId": "caseRR",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 150,
      "stepId": "caseLR",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 151,
      "stepId": "caseRL",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 152,
      "stepId": "returnNode",
      "key": 30,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 153,
      "stepId": "mainLoop",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 154,
      "stepId": "callInsert",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 155,
      "stepId": "checkNull",
      "key": 20,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 156,
      "stepId": "checkLess",
      "key": 20,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 157,
      "stepId": "goLeft",
      "key": 20,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 158,
      "stepId": "checkNull",
      "key": 20,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 159,
      "stepId": "checkLess",
      "key": 20,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 160,
      "stepId": "goLeft",
      "key": 20,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 161,
      "stepId": "checkNull",
      "key": 20,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 162,
      "stepId": "checkLess",
      "key": 20,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 163,
      "stepId": "goLeft",
      "key": 20,
      "node": 30,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 164,
      "stepId": "checkNull",
      "key": 20,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 165,
      "stepId": "returnNew",
      "key": 20,
      "node": 20,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 166,
      "stepId": "updateHeight",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 167,
      "stepId": "uhHl",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 130
    },
    {
      "step": 168,
      "stepId": "uhHr",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 169,
      "stepId": "uhSet",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 170,
      "stepId": "calcBf",
      "key": 20,
      "node": 30,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 171,
      "stepId": "bfReturn",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 172,
      "stepId": "caseLL",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 173,
      "stepId": "caseRR",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 174,
      "stepId": "caseLR",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 175,
      "stepId": "caseRL",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 130
    },
    {
      "step": 176,
      "stepId": "returnNode",
      "key": 20,
      "node": 30,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 177,
      "stepId": "updateHeight",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 178,
      "stepId": "uhHl",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 130
    },
    {
      "step": 179,
      "stepId": "uhHr",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 180,
      "stepId": "uhSet",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 181,
      "stepId": "calcBf",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 182,
      "stepId": "bfReturn",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 183,
      "stepId": "caseLL",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 184,
      "stepId": "caseRR",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 185,
      "stepId": "caseLR",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 186,
      "stepId": "caseRL",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 187,
      "stepId": "returnNode",
      "key": 20,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 188,
      "stepId": "updateHeight",
      "key": 20,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 130
    },
    {
      "step": 189,
      "stepId": "uhHl",
      "key": 20,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 130
    },
    {
      "step": 190,
      "stepId": "uhHr",
      "key": 20,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 191,
      "stepId": "uhSet",
      "key": 20,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 192,
      "stepId": "calcBf",
      "key": 20,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 193,
      "stepId": "bfReturn",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 194,
      "stepId": "caseLL",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 195,
      "stepId": "rotateRightLL",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 196,
      "stepId": "rotR_y",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 2,
      "height_right": 0,
      "root": 130
    },
    {
      "step": 197,
      "stepId": "rotR_T2",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 2,
      "height_right": 0,
      "root": 130,
      "temp": 80
    },
    {
      "step": 198,
      "stepId": "rotR_yRight",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 199,
      "stepId": "rotR_zLeft",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 200,
      "stepId": "rotR_updZ",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 201,
      "stepId": "uhHl",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 202,
      "stepId": "uhHr",
      "key": 20,
      "node": 130,
      "bf": 2,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 203,
      "stepId": "uhSet",
      "key": 20,
      "node": 130,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 204,
      "stepId": "rotR_updY",
      "key": 20,
      "node": 130,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 205,
      "stepId": "uhHl",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 80
    },
    {
      "step": 206,
      "stepId": "uhHr",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 80
    },
    {
      "step": 207,
      "stepId": "uhSet",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 80
    },
    {
      "step": 208,
      "stepId": "rotR_return",
      "key": 20,
      "node": 50,
      "bf": 0,
      "case": "LL",
      "new_root": 50,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 80
    },
    {
      "step": 209,
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
      "step": 210,
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
      "step": 211,
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
      "step": 212,
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
      "step": 213,
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
      "step": 214,
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
      "step": 215,
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
      "step": 216,
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
      "step": 217,
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
      "step": 218,
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
      "step": 219,
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
      "step": 220,
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
      "step": 221,
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
      "step": 222,
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
      "step": 223,
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
      "step": 224,
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
      "step": 225,
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
      "step": 226,
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
      "step": 227,
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
      "step": 228,
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
      "step": 229,
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
      "step": 230,
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
      "step": 231,
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
      "step": 232,
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
      "step": 233,
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
      "step": 234,
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
      "step": 235,
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
      "step": 236,
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
      "step": 237,
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
      "step": 238,
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
      "step": 239,
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
      "step": 240,
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
      "step": 241,
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
      "step": 242,
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
      "step": 243,
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
      "step": 244,
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
      "step": 245,
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
      "step": 246,
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
      "step": 247,
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
      "step": 248,
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
      "step": 249,
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
      "step": 250,
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
      "step": 251,
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
      "step": 252,
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
      "step": 253,
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
      "step": 254,
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
      "step": 255,
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
      "step": 256,
      "stepId": "uhHr",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 257,
      "stepId": "uhSet",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 258,
      "stepId": "calcBf",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 259,
      "stepId": "bfReturn",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 260,
      "stepId": "caseLL",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 261,
      "stepId": "caseRR",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 262,
      "stepId": "caseLR",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 263,
      "stepId": "caseRL",
      "key": 10,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 264,
      "stepId": "returnNode",
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
      "step": 265,
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
      "step": 266,
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
      "step": 267,
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
      "step": 268,
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
      "step": 269,
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
      "step": 270,
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
      "step": 271,
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
      "step": 272,
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
      "step": 273,
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
      "step": 274,
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
      "step": 275,
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
      "step": 276,
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
      "step": 277,
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
      "step": 278,
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
      "step": 279,
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
      "step": 280,
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
      "step": 281,
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
      "step": 282,
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
      "step": 283,
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
      "step": 284,
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
      "step": 285,
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
      "step": 286,
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
      "step": 287,
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
      "step": 288,
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
      "step": 289,
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
      "step": 290,
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
      "step": 291,
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
      "step": 292,
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
      "step": 293,
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
      "step": 294,
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
      "step": 295,
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
      "step": 296,
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
      "step": 297,
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
      "step": 298,
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
      "step": 299,
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
      "step": 300,
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
      "step": 301,
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
      "step": 302,
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
      "step": 303,
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
      "step": 304,
      "stepId": "uhHr",
      "key": 40,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 305,
      "stepId": "uhSet",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 306,
      "stepId": "calcBf",
      "key": 40,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 307,
      "stepId": "bfReturn",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 308,
      "stepId": "caseLL",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 309,
      "stepId": "caseRR",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 310,
      "stepId": "caseLR",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 311,
      "stepId": "caseRL",
      "key": 40,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 312,
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
      "step": 313,
      "stepId": "mainLoop",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 314,
      "stepId": "callInsert",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 315,
      "stepId": "checkNull",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 316,
      "stepId": "checkLess",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 317,
      "stepId": "checkGreater",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 318,
      "stepId": "goRight",
      "key": 70,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 319,
      "stepId": "checkNull",
      "key": 70,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 320,
      "stepId": "checkLess",
      "key": 70,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 321,
      "stepId": "goLeft",
      "key": 70,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 322,
      "stepId": "checkNull",
      "key": 70,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 323,
      "stepId": "checkLess",
      "key": 70,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 324,
      "stepId": "goLeft",
      "key": 70,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 325,
      "stepId": "checkNull",
      "key": 70,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 326,
      "stepId": "returnNew",
      "key": 70,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 327,
      "stepId": "updateHeight",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 328,
      "stepId": "uhHl",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 329,
      "stepId": "uhHr",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 330,
      "stepId": "uhSet",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 331,
      "stepId": "calcBf",
      "key": 70,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 332,
      "stepId": "bfReturn",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 333,
      "stepId": "caseLL",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 334,
      "stepId": "caseRR",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 335,
      "stepId": "caseLR",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 336,
      "stepId": "caseRL",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 337,
      "stepId": "returnNode",
      "key": 70,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 338,
      "stepId": "updateHeight",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 339,
      "stepId": "uhHl",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 340,
      "stepId": "uhHr",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 341,
      "stepId": "uhSet",
      "key": 70,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 342,
      "stepId": "calcBf",
      "key": 70,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 343,
      "stepId": "bfReturn",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 344,
      "stepId": "caseLL",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 345,
      "stepId": "caseRR",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 346,
      "stepId": "caseLR",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 347,
      "stepId": "caseRL",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 348,
      "stepId": "returnNode",
      "key": 70,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 349,
      "stepId": "updateHeight",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 350,
      "stepId": "uhHl",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 351,
      "stepId": "uhHr",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 352,
      "stepId": "uhSet",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 353,
      "stepId": "calcBf",
      "key": 70,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 354,
      "stepId": "bfReturn",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 355,
      "stepId": "caseLL",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 356,
      "stepId": "caseRR",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 357,
      "stepId": "caseLR",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 358,
      "stepId": "caseRL",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 359,
      "stepId": "returnNode",
      "key": 70,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 360,
      "stepId": "mainLoop",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 361,
      "stepId": "callInsert",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 362,
      "stepId": "checkNull",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 363,
      "stepId": "checkLess",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 364,
      "stepId": "checkGreater",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 365,
      "stepId": "goRight",
      "key": 60,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 366,
      "stepId": "checkNull",
      "key": 60,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 367,
      "stepId": "checkLess",
      "key": 60,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 368,
      "stepId": "goLeft",
      "key": 60,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 369,
      "stepId": "checkNull",
      "key": 60,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 370,
      "stepId": "checkLess",
      "key": 60,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 371,
      "stepId": "goLeft",
      "key": 60,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 372,
      "stepId": "checkNull",
      "key": 60,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 373,
      "stepId": "checkLess",
      "key": 60,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 374,
      "stepId": "goLeft",
      "key": 60,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 375,
      "stepId": "checkNull",
      "key": 60,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 376,
      "stepId": "returnNew",
      "key": 60,
      "node": 60,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 377,
      "stepId": "updateHeight",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 378,
      "stepId": "uhHl",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 379,
      "stepId": "uhHr",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 380,
      "stepId": "uhSet",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 381,
      "stepId": "calcBf",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 382,
      "stepId": "bfReturn",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 383,
      "stepId": "caseLL",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 384,
      "stepId": "caseRR",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 385,
      "stepId": "caseLR",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 386,
      "stepId": "caseRL",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 387,
      "stepId": "returnNode",
      "key": 60,
      "node": 70,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 388,
      "stepId": "updateHeight",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 389,
      "stepId": "uhHl",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 390,
      "stepId": "uhHr",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 391,
      "stepId": "uhSet",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 392,
      "stepId": "calcBf",
      "key": 60,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 393,
      "stepId": "bfReturn",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 394,
      "stepId": "caseLL",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 395,
      "stepId": "rotateRightLL",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 396,
      "stepId": "rotR_y",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 397,
      "stepId": "rotR_T2",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 398,
      "stepId": "rotR_yRight",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 399,
      "stepId": "rotR_zLeft",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 400,
      "stepId": "rotR_updZ",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 401,
      "stepId": "uhHl",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 402,
      "stepId": "uhHr",
      "key": 60,
      "node": 80,
      "bf": 2,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 403,
      "stepId": "uhSet",
      "key": 60,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 404,
      "stepId": "rotR_updY",
      "key": 60,
      "node": 80,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 405,
      "stepId": "uhHl",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 406,
      "stepId": "uhHr",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 407,
      "stepId": "uhSet",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 408,
      "stepId": "rotR_return",
      "key": 60,
      "node": 70,
      "bf": 0,
      "case": "LL",
      "new_root": 70,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 409,
      "stepId": "updateHeight",
      "key": 60,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 410,
      "stepId": "uhHl",
      "key": 60,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 411,
      "stepId": "uhHr",
      "key": 60,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 412,
      "stepId": "uhSet",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 413,
      "stepId": "calcBf",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 414,
      "stepId": "bfReturn",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 415,
      "stepId": "caseLL",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 416,
      "stepId": "caseRR",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 417,
      "stepId": "caseLR",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 418,
      "stepId": "caseRL",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 419,
      "stepId": "returnNode",
      "key": 60,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 420,
      "stepId": "updateHeight",
      "key": 60,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 421,
      "stepId": "uhHl",
      "key": 60,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 422,
      "stepId": "uhHr",
      "key": 60,
      "node": 50,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 423,
      "stepId": "uhSet",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 424,
      "stepId": "calcBf",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 425,
      "stepId": "bfReturn",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 426,
      "stepId": "caseLL",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 427,
      "stepId": "caseRR",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 428,
      "stepId": "caseLR",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 429,
      "stepId": "caseRL",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 430,
      "stepId": "returnNode",
      "key": 60,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 431,
      "stepId": "mainLoop",
      "key": 110,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 432,
      "stepId": "callInsert",
      "key": 110,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 433,
      "stepId": "checkNull",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 434,
      "stepId": "checkLess",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 435,
      "stepId": "checkGreater",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 436,
      "stepId": "goRight",
      "key": 110,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 437,
      "stepId": "checkNull",
      "key": 110,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 438,
      "stepId": "checkLess",
      "key": 110,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 439,
      "stepId": "goLeft",
      "key": 110,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 440,
      "stepId": "checkNull",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 441,
      "stepId": "checkLess",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 442,
      "stepId": "checkGreater",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 443,
      "stepId": "goRight",
      "key": 110,
      "node": 70,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 444,
      "stepId": "checkNull",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 445,
      "stepId": "checkLess",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 446,
      "stepId": "checkGreater",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 447,
      "stepId": "goRight",
      "key": 110,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 448,
      "stepId": "checkNull",
      "key": 110,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 449,
      "stepId": "returnNew",
      "key": 110,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 450,
      "stepId": "updateHeight",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 451,
      "stepId": "uhHl",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 452,
      "stepId": "uhHr",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 453,
      "stepId": "uhSet",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 454,
      "stepId": "calcBf",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 455,
      "stepId": "bfReturn",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 456,
      "stepId": "caseLL",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 457,
      "stepId": "caseRR",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 458,
      "stepId": "caseLR",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 459,
      "stepId": "caseRL",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 460,
      "stepId": "returnNode",
      "key": 110,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 461,
      "stepId": "updateHeight",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 462,
      "stepId": "uhHl",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 463,
      "stepId": "uhHr",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 464,
      "stepId": "uhSet",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 465,
      "stepId": "calcBf",
      "key": 110,
      "node": 70,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 466,
      "stepId": "bfReturn",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 467,
      "stepId": "caseLL",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 468,
      "stepId": "caseRR",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 469,
      "stepId": "caseLR",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 470,
      "stepId": "caseRL",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 471,
      "stepId": "returnNode",
      "key": 110,
      "node": 70,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 472,
      "stepId": "updateHeight",
      "key": 110,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 473,
      "stepId": "uhHl",
      "key": 110,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 474,
      "stepId": "uhHr",
      "key": 110,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 475,
      "stepId": "uhSet",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 476,
      "stepId": "calcBf",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 477,
      "stepId": "bfReturn",
      "key": 110,
      "node": 130,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 478,
      "stepId": "caseLL",
      "key": 110,
      "node": 130,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 479,
      "stepId": "caseRR",
      "key": 110,
      "node": 130,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 480,
      "stepId": "caseLR",
      "key": 110,
      "node": 130,
      "bf": 2,
      "case": "LR",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 481,
      "stepId": "rotateLeftLR",
      "key": 110,
      "node": 130,
      "bf": 2,
      "case": "LR",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 482,
      "stepId": "rotL_y",
      "key": 110,
      "node": 70,
      "bf": 2,
      "case": "LR",
      "new_root": 80,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 483,
      "stepId": "rotL_T2",
      "key": 110,
      "node": 70,
      "bf": 2,
      "case": "LR",
      "new_root": 80,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 484,
      "stepId": "rotL_yLeft",
      "key": 110,
      "node": 70,
      "bf": 2,
      "case": "LR",
      "new_root": 80,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 485,
      "stepId": "rotL_zRight",
      "key": 110,
      "node": 70,
      "bf": 2,
      "case": "LR",
      "new_root": 80,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 486,
      "stepId": "rotL_updZ",
      "key": 110,
      "node": 70,
      "bf": 2,
      "case": "LR",
      "new_root": 80,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 487,
      "stepId": "uhHl",
      "key": 110,
      "node": 70,
      "bf": 2,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 488,
      "stepId": "uhHr",
      "key": 110,
      "node": 70,
      "bf": 2,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 489,
      "stepId": "uhSet",
      "key": 110,
      "node": 70,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 490,
      "stepId": "rotL_updY",
      "key": 110,
      "node": 70,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 491,
      "stepId": "uhHl",
      "key": 110,
      "node": 80,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 492,
      "stepId": "uhHr",
      "key": 110,
      "node": 80,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 493,
      "stepId": "uhSet",
      "key": 110,
      "node": 80,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 494,
      "stepId": "rotL_return",
      "key": 110,
      "node": 80,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 495,
      "stepId": "rotateRightLR",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 496,
      "stepId": "rotR_y",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 497,
      "stepId": "rotR_T2",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 498,
      "stepId": "rotR_yRight",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 499,
      "stepId": "rotR_zLeft",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 500,
      "stepId": "rotR_updZ",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 501,
      "stepId": "uhHl",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 502,
      "stepId": "uhHr",
      "key": 110,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 503,
      "stepId": "uhSet",
      "key": 110,
      "node": 130,
      "bf": 0,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 504,
      "stepId": "rotR_updY",
      "key": 110,
      "node": 130,
      "bf": 0,
      "case": "LR",
      "new_root": 80,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 505,
      "stepId": "uhHl",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 110
    },
    {
      "step": 506,
      "stepId": "uhHr",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 110
    },
    {
      "step": 507,
      "stepId": "uhSet",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 110
    },
    {
      "step": 508,
      "stepId": "rotR_return",
      "key": 110,
      "node": 80,
      "bf": 0,
      "case": "LR",
      "new_root": 80,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 110
    },
    {
      "step": 509,
      "stepId": "updateHeight",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 510,
      "stepId": "uhHl",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 511,
      "stepId": "uhHr",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 512,
      "stepId": "uhSet",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 513,
      "stepId": "calcBf",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 514,
      "stepId": "bfReturn",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 515,
      "stepId": "caseLL",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 516,
      "stepId": "caseRR",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 517,
      "stepId": "caseLR",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 518,
      "stepId": "caseRL",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 519,
      "stepId": "returnNode",
      "key": 110,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 520,
      "stepId": "mainLoop",
      "key": 100,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 521,
      "stepId": "callInsert",
      "key": 100,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 522,
      "stepId": "checkNull",
      "key": 100,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 523,
      "stepId": "checkLess",
      "key": 100,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 524,
      "stepId": "checkGreater",
      "key": 100,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 525,
      "stepId": "goRight",
      "key": 100,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 526,
      "stepId": "checkNull",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 527,
      "stepId": "checkLess",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 528,
      "stepId": "checkGreater",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 529,
      "stepId": "goRight",
      "key": 100,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 530,
      "stepId": "checkNull",
      "key": 100,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 531,
      "stepId": "checkLess",
      "key": 100,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 532,
      "stepId": "goLeft",
      "key": 100,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 533,
      "stepId": "checkNull",
      "key": 100,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 534,
      "stepId": "checkLess",
      "key": 100,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 535,
      "stepId": "goLeft",
      "key": 100,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 536,
      "stepId": "checkNull",
      "key": 100,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 537,
      "stepId": "returnNew",
      "key": 100,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 538,
      "stepId": "updateHeight",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 539,
      "stepId": "uhHl",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 540,
      "stepId": "uhHr",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 541,
      "stepId": "uhSet",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 542,
      "stepId": "calcBf",
      "key": 100,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 543,
      "stepId": "bfReturn",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 544,
      "stepId": "caseLL",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 545,
      "stepId": "caseRR",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 546,
      "stepId": "caseLR",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 547,
      "stepId": "caseRL",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 548,
      "stepId": "returnNode",
      "key": 100,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 549,
      "stepId": "updateHeight",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 550,
      "stepId": "uhHl",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 551,
      "stepId": "uhHr",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 552,
      "stepId": "uhSet",
      "key": 100,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 553,
      "stepId": "calcBf",
      "key": 100,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 554,
      "stepId": "bfReturn",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 555,
      "stepId": "caseLL",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 556,
      "stepId": "caseRR",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 557,
      "stepId": "caseLR",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 558,
      "stepId": "caseRL",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 559,
      "stepId": "returnNode",
      "key": 100,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 560,
      "stepId": "updateHeight",
      "key": 100,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 561,
      "stepId": "uhHl",
      "key": 100,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 562,
      "stepId": "uhHr",
      "key": 100,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 563,
      "stepId": "uhSet",
      "key": 100,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 564,
      "stepId": "calcBf",
      "key": 100,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 565,
      "stepId": "bfReturn",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 566,
      "stepId": "caseLL",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 567,
      "stepId": "caseRR",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 568,
      "stepId": "caseLR",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 569,
      "stepId": "caseRL",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 570,
      "stepId": "returnNode",
      "key": 100,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 571,
      "stepId": "updateHeight",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 572,
      "stepId": "uhHl",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 573,
      "stepId": "uhHr",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 574,
      "stepId": "uhSet",
      "key": 100,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 575,
      "stepId": "calcBf",
      "key": 100,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 576,
      "stepId": "bfReturn",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 577,
      "stepId": "caseLL",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 578,
      "stepId": "caseRR",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 579,
      "stepId": "caseLR",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 580,
      "stepId": "caseRL",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 581,
      "stepId": "returnNode",
      "key": 100,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 582,
      "stepId": "mainLoop",
      "key": 90,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 583,
      "stepId": "callInsert",
      "key": 90,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 584,
      "stepId": "checkNull",
      "key": 90,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 585,
      "stepId": "checkLess",
      "key": 90,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 586,
      "stepId": "checkGreater",
      "key": 90,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 587,
      "stepId": "goRight",
      "key": 90,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 588,
      "stepId": "checkNull",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 589,
      "stepId": "checkLess",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 590,
      "stepId": "checkGreater",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 591,
      "stepId": "goRight",
      "key": 90,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 592,
      "stepId": "checkNull",
      "key": 90,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 593,
      "stepId": "checkLess",
      "key": 90,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 594,
      "stepId": "goLeft",
      "key": 90,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 595,
      "stepId": "checkNull",
      "key": 90,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 596,
      "stepId": "checkLess",
      "key": 90,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 597,
      "stepId": "goLeft",
      "key": 90,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 598,
      "stepId": "checkNull",
      "key": 90,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 599,
      "stepId": "checkLess",
      "key": 90,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 600,
      "stepId": "goLeft",
      "key": 90,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 601,
      "stepId": "checkNull",
      "key": 90,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 602,
      "stepId": "returnNew",
      "key": 90,
      "node": 90,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 603,
      "stepId": "updateHeight",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 604,
      "stepId": "uhHl",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 605,
      "stepId": "uhHr",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 606,
      "stepId": "uhSet",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 607,
      "stepId": "calcBf",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 608,
      "stepId": "bfReturn",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 609,
      "stepId": "caseLL",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 610,
      "stepId": "caseRR",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 611,
      "stepId": "caseLR",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 612,
      "stepId": "caseRL",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 613,
      "stepId": "returnNode",
      "key": 90,
      "node": 100,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 614,
      "stepId": "updateHeight",
      "key": 90,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 615,
      "stepId": "uhHl",
      "key": 90,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 616,
      "stepId": "uhHr",
      "key": 90,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 617,
      "stepId": "uhSet",
      "key": 90,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 618,
      "stepId": "calcBf",
      "key": 90,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 619,
      "stepId": "bfReturn",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 620,
      "stepId": "caseLL",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 621,
      "stepId": "rotateRightLL",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 622,
      "stepId": "rotR_y",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": 100,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 623,
      "stepId": "rotR_T2",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": 100,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 624,
      "stepId": "rotR_yRight",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": 100,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 625,
      "stepId": "rotR_zLeft",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": 100,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 626,
      "stepId": "rotR_updZ",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": 100,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 627,
      "stepId": "uhHl",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 628,
      "stepId": "uhHr",
      "key": 90,
      "node": 110,
      "bf": 2,
      "case": "LL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 629,
      "stepId": "uhSet",
      "key": 90,
      "node": 110,
      "bf": 0,
      "case": "LL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 630,
      "stepId": "rotR_updY",
      "key": 90,
      "node": 110,
      "bf": 0,
      "case": "LL",
      "new_root": 100,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 631,
      "stepId": "uhHl",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": "LL",
      "new_root": 100,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 632,
      "stepId": "uhHr",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": "LL",
      "new_root": 100,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 633,
      "stepId": "uhSet",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": "LL",
      "new_root": 100,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 634,
      "stepId": "rotR_return",
      "key": 90,
      "node": 100,
      "bf": 0,
      "case": "LL",
      "new_root": 100,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 635,
      "stepId": "updateHeight",
      "key": 90,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 636,
      "stepId": "uhHl",
      "key": 90,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 637,
      "stepId": "uhHr",
      "key": 90,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 638,
      "stepId": "uhSet",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 639,
      "stepId": "calcBf",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 640,
      "stepId": "bfReturn",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 641,
      "stepId": "caseLL",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 642,
      "stepId": "caseRR",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 643,
      "stepId": "caseLR",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 644,
      "stepId": "caseRL",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 645,
      "stepId": "returnNode",
      "key": 90,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 646,
      "stepId": "updateHeight",
      "key": 90,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 647,
      "stepId": "uhHl",
      "key": 90,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 648,
      "stepId": "uhHr",
      "key": 90,
      "node": 80,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 649,
      "stepId": "uhSet",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 650,
      "stepId": "calcBf",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 651,
      "stepId": "bfReturn",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 652,
      "stepId": "caseLL",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 653,
      "stepId": "caseRR",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 654,
      "stepId": "caseLR",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 655,
      "stepId": "caseRL",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 656,
      "stepId": "returnNode",
      "key": 90,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 657,
      "stepId": "updateHeight",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 658,
      "stepId": "uhHl",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 659,
      "stepId": "uhHr",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 660,
      "stepId": "uhSet",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 661,
      "stepId": "calcBf",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 662,
      "stepId": "bfReturn",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 663,
      "stepId": "caseLL",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 664,
      "stepId": "caseRR",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 665,
      "stepId": "caseLR",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 666,
      "stepId": "caseRL",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 667,
      "stepId": "returnNode",
      "key": 90,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 668,
      "stepId": "mainLoop",
      "key": 120,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 669,
      "stepId": "callInsert",
      "key": 120,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 670,
      "stepId": "checkNull",
      "key": 120,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 671,
      "stepId": "checkLess",
      "key": 120,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 672,
      "stepId": "checkGreater",
      "key": 120,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 673,
      "stepId": "goRight",
      "key": 120,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 674,
      "stepId": "checkNull",
      "key": 120,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 675,
      "stepId": "checkLess",
      "key": 120,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 676,
      "stepId": "checkGreater",
      "key": 120,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 677,
      "stepId": "goRight",
      "key": 120,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 678,
      "stepId": "checkNull",
      "key": 120,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 679,
      "stepId": "checkLess",
      "key": 120,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 680,
      "stepId": "goLeft",
      "key": 120,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 681,
      "stepId": "checkNull",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 682,
      "stepId": "checkLess",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 683,
      "stepId": "checkGreater",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 684,
      "stepId": "goRight",
      "key": 120,
      "node": 100,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 685,
      "stepId": "checkNull",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 686,
      "stepId": "checkLess",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 687,
      "stepId": "checkGreater",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 688,
      "stepId": "goRight",
      "key": 120,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 689,
      "stepId": "checkNull",
      "key": 120,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 690,
      "stepId": "returnNew",
      "key": 120,
      "node": 120,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 691,
      "stepId": "updateHeight",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 692,
      "stepId": "uhHl",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 693,
      "stepId": "uhHr",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 694,
      "stepId": "uhSet",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 695,
      "stepId": "calcBf",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 696,
      "stepId": "bfReturn",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 697,
      "stepId": "caseLL",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 698,
      "stepId": "caseRR",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 699,
      "stepId": "caseLR",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 700,
      "stepId": "caseRL",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 701,
      "stepId": "returnNode",
      "key": 120,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 702,
      "stepId": "updateHeight",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 703,
      "stepId": "uhHl",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 704,
      "stepId": "uhHr",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 705,
      "stepId": "uhSet",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 706,
      "stepId": "calcBf",
      "key": 120,
      "node": 100,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 707,
      "stepId": "bfReturn",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 708,
      "stepId": "caseLL",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 709,
      "stepId": "caseRR",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 710,
      "stepId": "caseLR",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 711,
      "stepId": "caseRL",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 712,
      "stepId": "returnNode",
      "key": 120,
      "node": 100,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 713,
      "stepId": "updateHeight",
      "key": 120,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 714,
      "stepId": "uhHl",
      "key": 120,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 715,
      "stepId": "uhHr",
      "key": 120,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 716,
      "stepId": "uhSet",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 717,
      "stepId": "calcBf",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 718,
      "stepId": "bfReturn",
      "key": 120,
      "node": 130,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 719,
      "stepId": "caseLL",
      "key": 120,
      "node": 130,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 720,
      "stepId": "caseRR",
      "key": 120,
      "node": 130,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 721,
      "stepId": "caseLR",
      "key": 120,
      "node": 130,
      "bf": 2,
      "case": "LR",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 722,
      "stepId": "rotateLeftLR",
      "key": 120,
      "node": 130,
      "bf": 2,
      "case": "LR",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 723,
      "stepId": "rotL_y",
      "key": 120,
      "node": 100,
      "bf": 2,
      "case": "LR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 724,
      "stepId": "rotL_T2",
      "key": 120,
      "node": 100,
      "bf": 2,
      "case": "LR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 725,
      "stepId": "rotL_yLeft",
      "key": 120,
      "node": 100,
      "bf": 2,
      "case": "LR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 726,
      "stepId": "rotL_zRight",
      "key": 120,
      "node": 100,
      "bf": 2,
      "case": "LR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 727,
      "stepId": "rotL_updZ",
      "key": 120,
      "node": 100,
      "bf": 2,
      "case": "LR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 728,
      "stepId": "uhHl",
      "key": 120,
      "node": 100,
      "bf": 2,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 729,
      "stepId": "uhHr",
      "key": 120,
      "node": 100,
      "bf": 2,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 730,
      "stepId": "uhSet",
      "key": 120,
      "node": 100,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 731,
      "stepId": "rotL_updY",
      "key": 120,
      "node": 100,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 732,
      "stepId": "uhHl",
      "key": 120,
      "node": 110,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null
    },
    {
      "step": 733,
      "stepId": "uhHr",
      "key": 120,
      "node": 110,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 734,
      "stepId": "uhSet",
      "key": 120,
      "node": 110,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 735,
      "stepId": "rotL_return",
      "key": 120,
      "node": 110,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 736,
      "stepId": "rotateRightLR",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 737,
      "stepId": "rotR_y",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": null
    },
    {
      "step": 738,
      "stepId": "rotR_T2",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 739,
      "stepId": "rotR_yRight",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 740,
      "stepId": "rotR_zLeft",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 741,
      "stepId": "rotR_updZ",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 742,
      "stepId": "uhHl",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 743,
      "stepId": "uhHr",
      "key": 120,
      "node": 130,
      "bf": 1,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 744,
      "stepId": "uhSet",
      "key": 120,
      "node": 130,
      "bf": 0,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 745,
      "stepId": "rotR_updY",
      "key": 120,
      "node": 130,
      "bf": 0,
      "case": "LR",
      "new_root": 110,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 746,
      "stepId": "uhHl",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 120
    },
    {
      "step": 747,
      "stepId": "uhHr",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 120
    },
    {
      "step": 748,
      "stepId": "uhSet",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 120
    },
    {
      "step": 749,
      "stepId": "rotR_return",
      "key": 120,
      "node": 110,
      "bf": 0,
      "case": "LR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 120
    },
    {
      "step": 750,
      "stepId": "updateHeight",
      "key": 120,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 751,
      "stepId": "uhHl",
      "key": 120,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 752,
      "stepId": "uhHr",
      "key": 120,
      "node": 80,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 753,
      "stepId": "uhSet",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 754,
      "stepId": "calcBf",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 755,
      "stepId": "bfReturn",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 756,
      "stepId": "caseLL",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 757,
      "stepId": "caseRR",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 758,
      "stepId": "caseLR",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 759,
      "stepId": "caseRL",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 760,
      "stepId": "returnNode",
      "key": 120,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 761,
      "stepId": "updateHeight",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 762,
      "stepId": "uhHl",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 763,
      "stepId": "uhHr",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 764,
      "stepId": "uhSet",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 765,
      "stepId": "calcBf",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 766,
      "stepId": "bfReturn",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 767,
      "stepId": "caseLL",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 768,
      "stepId": "caseRR",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 769,
      "stepId": "caseLR",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 770,
      "stepId": "caseRL",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 771,
      "stepId": "returnNode",
      "key": 120,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 772,
      "stepId": "mainLoop",
      "key": 180,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 773,
      "stepId": "callInsert",
      "key": 180,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 774,
      "stepId": "checkNull",
      "key": 180,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 775,
      "stepId": "checkLess",
      "key": 180,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 776,
      "stepId": "checkGreater",
      "key": 180,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 777,
      "stepId": "goRight",
      "key": 180,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 778,
      "stepId": "checkNull",
      "key": 180,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 779,
      "stepId": "checkLess",
      "key": 180,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 780,
      "stepId": "checkGreater",
      "key": 180,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 781,
      "stepId": "goRight",
      "key": 180,
      "node": 80,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 782,
      "stepId": "checkNull",
      "key": 180,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 783,
      "stepId": "checkLess",
      "key": 180,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 784,
      "stepId": "checkGreater",
      "key": 180,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 785,
      "stepId": "goRight",
      "key": 180,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 786,
      "stepId": "checkNull",
      "key": 180,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 787,
      "stepId": "checkLess",
      "key": 180,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 788,
      "stepId": "checkGreater",
      "key": 180,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 789,
      "stepId": "goRight",
      "key": 180,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 790,
      "stepId": "checkNull",
      "key": 180,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 791,
      "stepId": "checkLess",
      "key": 180,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 792,
      "stepId": "goLeft",
      "key": 180,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 793,
      "stepId": "checkNull",
      "key": 180,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 794,
      "stepId": "returnNew",
      "key": 180,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 795,
      "stepId": "updateHeight",
      "key": 180,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 796,
      "stepId": "uhHl",
      "key": 180,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 797,
      "stepId": "uhHr",
      "key": 180,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 798,
      "stepId": "uhSet",
      "key": 180,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 799,
      "stepId": "calcBf",
      "key": 180,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 800,
      "stepId": "bfReturn",
      "key": 180,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 801,
      "stepId": "caseLL",
      "key": 180,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 802,
      "stepId": "caseRR",
      "key": 180,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 803,
      "stepId": "caseLR",
      "key": 180,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 804,
      "stepId": "caseRL",
      "key": 180,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 805,
      "stepId": "returnNode",
      "key": 180,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 806,
      "stepId": "updateHeight",
      "key": 180,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 807,
      "stepId": "uhHl",
      "key": 180,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 808,
      "stepId": "uhHr",
      "key": 180,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 809,
      "stepId": "uhSet",
      "key": 180,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 810,
      "stepId": "calcBf",
      "key": 180,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 811,
      "stepId": "bfReturn",
      "key": 180,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 812,
      "stepId": "caseLL",
      "key": 180,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 813,
      "stepId": "caseRR",
      "key": 180,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 814,
      "stepId": "caseLR",
      "key": 180,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 815,
      "stepId": "caseRL",
      "key": 180,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 816,
      "stepId": "returnNode",
      "key": 180,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 817,
      "stepId": "updateHeight",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 818,
      "stepId": "uhHl",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 819,
      "stepId": "uhHr",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 820,
      "stepId": "uhSet",
      "key": 180,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 821,
      "stepId": "calcBf",
      "key": 180,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 822,
      "stepId": "bfReturn",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 823,
      "stepId": "caseLL",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 824,
      "stepId": "caseRR",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 825,
      "stepId": "caseLR",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 826,
      "stepId": "caseRL",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 827,
      "stepId": "returnNode",
      "key": 180,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 828,
      "stepId": "updateHeight",
      "key": 180,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 829,
      "stepId": "uhHl",
      "key": 180,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 830,
      "stepId": "uhHr",
      "key": 180,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 831,
      "stepId": "uhSet",
      "key": 180,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 832,
      "stepId": "calcBf",
      "key": 180,
      "node": 80,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 833,
      "stepId": "bfReturn",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 834,
      "stepId": "caseLL",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 835,
      "stepId": "caseRR",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 836,
      "stepId": "rotateLeftRR",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 837,
      "stepId": "rotL_y",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 838,
      "stepId": "rotL_T2",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 839,
      "stepId": "rotL_yLeft",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 840,
      "stepId": "rotL_zRight",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 841,
      "stepId": "rotL_updZ",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 842,
      "stepId": "uhHl",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 3,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 843,
      "stepId": "uhHr",
      "key": 180,
      "node": 80,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 844,
      "stepId": "uhSet",
      "key": 180,
      "node": 80,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 845,
      "stepId": "rotL_updY",
      "key": 180,
      "node": 80,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 846,
      "stepId": "uhHl",
      "key": 180,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 1,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 847,
      "stepId": "uhHr",
      "key": 180,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 2,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 848,
      "stepId": "uhSet",
      "key": 180,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 2,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 849,
      "stepId": "rotL_return",
      "key": 180,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 2,
      "root": 50,
      "temp": 100,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 850,
      "stepId": "updateHeight",
      "key": 180,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 851,
      "stepId": "uhHl",
      "key": 180,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 852,
      "stepId": "uhHr",
      "key": 180,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 853,
      "stepId": "uhSet",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 854,
      "stepId": "calcBf",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 855,
      "stepId": "bfReturn",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 856,
      "stepId": "caseLL",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 857,
      "stepId": "caseRR",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 858,
      "stepId": "caseLR",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 859,
      "stepId": "caseRL",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 860,
      "stepId": "returnNode",
      "key": 180,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 861,
      "stepId": "mainLoop",
      "key": 160,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 862,
      "stepId": "callInsert",
      "key": 160,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 863,
      "stepId": "checkNull",
      "key": 160,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 864,
      "stepId": "checkLess",
      "key": 160,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 865,
      "stepId": "checkGreater",
      "key": 160,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 866,
      "stepId": "goRight",
      "key": 160,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 867,
      "stepId": "checkNull",
      "key": 160,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 868,
      "stepId": "checkLess",
      "key": 160,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 869,
      "stepId": "checkGreater",
      "key": 160,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 870,
      "stepId": "goRight",
      "key": 160,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 871,
      "stepId": "checkNull",
      "key": 160,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 872,
      "stepId": "checkLess",
      "key": 160,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 873,
      "stepId": "checkGreater",
      "key": 160,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 874,
      "stepId": "goRight",
      "key": 160,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 875,
      "stepId": "checkNull",
      "key": 160,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 876,
      "stepId": "checkLess",
      "key": 160,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 877,
      "stepId": "goLeft",
      "key": 160,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 878,
      "stepId": "checkNull",
      "key": 160,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 879,
      "stepId": "checkLess",
      "key": 160,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 880,
      "stepId": "goLeft",
      "key": 160,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 881,
      "stepId": "checkNull",
      "key": 160,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 882,
      "stepId": "returnNew",
      "key": 160,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 883,
      "stepId": "updateHeight",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 884,
      "stepId": "uhHl",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 885,
      "stepId": "uhHr",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 886,
      "stepId": "uhSet",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 887,
      "stepId": "calcBf",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 888,
      "stepId": "bfReturn",
      "key": 160,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 889,
      "stepId": "caseLL",
      "key": 160,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 890,
      "stepId": "caseRR",
      "key": 160,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 891,
      "stepId": "caseLR",
      "key": 160,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 892,
      "stepId": "caseRL",
      "key": 160,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 893,
      "stepId": "returnNode",
      "key": 160,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 894,
      "stepId": "updateHeight",
      "key": 160,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 895,
      "stepId": "uhHl",
      "key": 160,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 896,
      "stepId": "uhHr",
      "key": 160,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 897,
      "stepId": "uhSet",
      "key": 160,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 898,
      "stepId": "calcBf",
      "key": 160,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 899,
      "stepId": "bfReturn",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 900,
      "stepId": "caseLL",
      "key": 160,
      "node": 210,
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
      "step": 901,
      "stepId": "rotateRightLL",
      "key": 160,
      "node": 210,
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
      "step": 902,
      "stepId": "rotR_y",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 180,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 903,
      "stepId": "rotR_T2",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 180,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 904,
      "stepId": "rotR_yRight",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 180,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 905,
      "stepId": "rotR_zLeft",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 180,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 906,
      "stepId": "rotR_updZ",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 180,
      "height_left": 1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 907,
      "stepId": "uhHl",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 180,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 908,
      "stepId": "uhHr",
      "key": 160,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 180,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 909,
      "stepId": "uhSet",
      "key": 160,
      "node": 210,
      "bf": 0,
      "case": "LL",
      "new_root": 180,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 910,
      "stepId": "rotR_updY",
      "key": 160,
      "node": 210,
      "bf": 0,
      "case": "LL",
      "new_root": 180,
      "height_left": -1,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 911,
      "stepId": "uhHl",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": "LL",
      "new_root": 180,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 912,
      "stepId": "uhHr",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": "LL",
      "new_root": 180,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 913,
      "stepId": "uhSet",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": "LL",
      "new_root": 180,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 914,
      "stepId": "rotR_return",
      "key": 160,
      "node": 180,
      "bf": 0,
      "case": "LL",
      "new_root": 180,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 915,
      "stepId": "updateHeight",
      "key": 160,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 916,
      "stepId": "uhHl",
      "key": 160,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 917,
      "stepId": "uhHr",
      "key": 160,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 918,
      "stepId": "uhSet",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 919,
      "stepId": "calcBf",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 920,
      "stepId": "bfReturn",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 921,
      "stepId": "caseLL",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 922,
      "stepId": "caseRR",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 923,
      "stepId": "caseLR",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 924,
      "stepId": "caseRL",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 925,
      "stepId": "returnNode",
      "key": 160,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 926,
      "stepId": "updateHeight",
      "key": 160,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 927,
      "stepId": "uhHl",
      "key": 160,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 928,
      "stepId": "uhHr",
      "key": 160,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 929,
      "stepId": "uhSet",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 930,
      "stepId": "calcBf",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 931,
      "stepId": "bfReturn",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 932,
      "stepId": "caseLL",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 933,
      "stepId": "caseRR",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 934,
      "stepId": "caseLR",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 935,
      "stepId": "caseRL",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 936,
      "stepId": "returnNode",
      "key": 160,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 937,
      "stepId": "updateHeight",
      "key": 160,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 938,
      "stepId": "uhHl",
      "key": 160,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 939,
      "stepId": "uhHr",
      "key": 160,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 940,
      "stepId": "uhSet",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 941,
      "stepId": "calcBf",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 942,
      "stepId": "bfReturn",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 943,
      "stepId": "caseLL",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 944,
      "stepId": "caseRR",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 945,
      "stepId": "caseLR",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 946,
      "stepId": "caseRL",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 947,
      "stepId": "returnNode",
      "key": 160,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 948,
      "stepId": "mainLoop",
      "key": 150,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 949,
      "stepId": "callInsert",
      "key": 150,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 950,
      "stepId": "checkNull",
      "key": 150,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 951,
      "stepId": "checkLess",
      "key": 150,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 952,
      "stepId": "checkGreater",
      "key": 150,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 953,
      "stepId": "goRight",
      "key": 150,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 954,
      "stepId": "checkNull",
      "key": 150,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 955,
      "stepId": "checkLess",
      "key": 150,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 956,
      "stepId": "checkGreater",
      "key": 150,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 957,
      "stepId": "goRight",
      "key": 150,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 958,
      "stepId": "checkNull",
      "key": 150,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 959,
      "stepId": "checkLess",
      "key": 150,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 960,
      "stepId": "checkGreater",
      "key": 150,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 961,
      "stepId": "goRight",
      "key": 150,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 962,
      "stepId": "checkNull",
      "key": 150,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 963,
      "stepId": "checkLess",
      "key": 150,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 964,
      "stepId": "goLeft",
      "key": 150,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 965,
      "stepId": "checkNull",
      "key": 150,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 966,
      "stepId": "checkLess",
      "key": 150,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 967,
      "stepId": "goLeft",
      "key": 150,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 968,
      "stepId": "checkNull",
      "key": 150,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 969,
      "stepId": "returnNew",
      "key": 150,
      "node": 150,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 970,
      "stepId": "updateHeight",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 971,
      "stepId": "uhHl",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 972,
      "stepId": "uhHr",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 973,
      "stepId": "uhSet",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 974,
      "stepId": "calcBf",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 975,
      "stepId": "bfReturn",
      "key": 150,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 976,
      "stepId": "caseLL",
      "key": 150,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 977,
      "stepId": "caseRR",
      "key": 150,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 978,
      "stepId": "caseLR",
      "key": 150,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 979,
      "stepId": "caseRL",
      "key": 150,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 980,
      "stepId": "returnNode",
      "key": 150,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 981,
      "stepId": "updateHeight",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 982,
      "stepId": "uhHl",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 50
    },
    {
      "step": 983,
      "stepId": "uhHr",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 984,
      "stepId": "uhSet",
      "key": 150,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 985,
      "stepId": "calcBf",
      "key": 150,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 986,
      "stepId": "bfReturn",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 987,
      "stepId": "caseLL",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 988,
      "stepId": "caseRR",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 989,
      "stepId": "caseLR",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 990,
      "stepId": "caseRL",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 50
    },
    {
      "step": 991,
      "stepId": "returnNode",
      "key": 150,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 992,
      "stepId": "updateHeight",
      "key": 150,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 993,
      "stepId": "uhHl",
      "key": 150,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 994,
      "stepId": "uhHr",
      "key": 150,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 995,
      "stepId": "uhSet",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 996,
      "stepId": "calcBf",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 997,
      "stepId": "bfReturn",
      "key": 150,
      "node": 130,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 998,
      "stepId": "caseLL",
      "key": 150,
      "node": 130,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 999,
      "stepId": "caseRR",
      "key": 150,
      "node": 130,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1000,
      "stepId": "caseLR",
      "key": 150,
      "node": 130,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1001,
      "stepId": "caseRL",
      "key": 150,
      "node": 130,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1002,
      "stepId": "rotateRightRL",
      "key": 150,
      "node": 130,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1003,
      "stepId": "rotR_y",
      "key": 150,
      "node": 180,
      "bf": -2,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1004,
      "stepId": "rotR_T2",
      "key": 150,
      "node": 180,
      "bf": -2,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1005,
      "stepId": "rotR_yRight",
      "key": 150,
      "node": 180,
      "bf": -2,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1006,
      "stepId": "rotR_zLeft",
      "key": 150,
      "node": 180,
      "bf": -2,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1007,
      "stepId": "rotR_updZ",
      "key": 150,
      "node": 180,
      "bf": -2,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 2,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1008,
      "stepId": "uhHl",
      "key": 150,
      "node": 180,
      "bf": -2,
      "case": "RL",
      "new_root": 160,
      "height_left": -1,
      "height_right": 2,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1009,
      "stepId": "uhHr",
      "key": 150,
      "node": 180,
      "bf": -2,
      "case": "RL",
      "new_root": 160,
      "height_left": -1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1010,
      "stepId": "uhSet",
      "key": 150,
      "node": 180,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": -1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1011,
      "stepId": "rotR_updY",
      "key": 150,
      "node": 180,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": -1,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1012,
      "stepId": "uhHl",
      "key": 150,
      "node": 160,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1013,
      "stepId": "uhHr",
      "key": 150,
      "node": 160,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1014,
      "stepId": "uhSet",
      "key": 150,
      "node": 160,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1015,
      "stepId": "rotR_return",
      "key": 150,
      "node": 160,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1016,
      "stepId": "rotateLeftRL",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1017,
      "stepId": "rotL_y",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1018,
      "stepId": "rotL_T2",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1019,
      "stepId": "rotL_yLeft",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1020,
      "stepId": "rotL_zRight",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1021,
      "stepId": "rotL_updZ",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1022,
      "stepId": "uhHl",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1023,
      "stepId": "uhHr",
      "key": 150,
      "node": 130,
      "bf": -1,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1024,
      "stepId": "uhSet",
      "key": 150,
      "node": 130,
      "bf": 0,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1025,
      "stepId": "rotL_updY",
      "key": 150,
      "node": 130,
      "bf": 0,
      "case": "RL",
      "new_root": 160,
      "height_left": 0,
      "height_right": 0,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1026,
      "stepId": "uhHl",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": "RL",
      "new_root": 160,
      "height_left": 1,
      "height_right": 0,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1027,
      "stepId": "uhHr",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": "RL",
      "new_root": 160,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1028,
      "stepId": "uhSet",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": "RL",
      "new_root": 160,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1029,
      "stepId": "rotL_return",
      "key": 150,
      "node": 160,
      "bf": 0,
      "case": "RL",
      "new_root": 160,
      "height_left": 1,
      "height_right": 1,
      "root": 50,
      "temp": 150,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1030,
      "stepId": "updateHeight",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1031,
      "stepId": "uhHl",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1032,
      "stepId": "uhHr",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1033,
      "stepId": "uhSet",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1034,
      "stepId": "calcBf",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1035,
      "stepId": "bfReturn",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1036,
      "stepId": "caseLL",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1037,
      "stepId": "caseRR",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1038,
      "stepId": "caseLR",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50
    },
    {
      "step": 1039,
      "stepId": "caseRL",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1040,
      "stepId": "returnNode",
      "key": 150,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1041,
      "stepId": "updateHeight",
      "key": 150,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1042,
      "stepId": "uhHl",
      "key": 150,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1043,
      "stepId": "uhHr",
      "key": 150,
      "node": 50,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1044,
      "stepId": "uhSet",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1045,
      "stepId": "calcBf",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1046,
      "stepId": "bfReturn",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1047,
      "stepId": "caseLL",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1048,
      "stepId": "caseRR",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1049,
      "stepId": "caseLR",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1050,
      "stepId": "caseRL",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1051,
      "stepId": "returnNode",
      "key": 150,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1052,
      "stepId": "mainLoop",
      "key": 140,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1053,
      "stepId": "callInsert",
      "key": 140,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1054,
      "stepId": "checkNull",
      "key": 140,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1055,
      "stepId": "checkLess",
      "key": 140,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1056,
      "stepId": "checkGreater",
      "key": 140,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1057,
      "stepId": "goRight",
      "key": 140,
      "node": 50,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1058,
      "stepId": "checkNull",
      "key": 140,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1059,
      "stepId": "checkLess",
      "key": 140,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1060,
      "stepId": "checkGreater",
      "key": 140,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1061,
      "stepId": "goRight",
      "key": 140,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1062,
      "stepId": "checkNull",
      "key": 140,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1063,
      "stepId": "checkLess",
      "key": 140,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1064,
      "stepId": "goLeft",
      "key": 140,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1065,
      "stepId": "checkNull",
      "key": 140,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1066,
      "stepId": "checkLess",
      "key": 140,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1067,
      "stepId": "checkGreater",
      "key": 140,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1068,
      "stepId": "goRight",
      "key": 140,
      "node": 130,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1069,
      "stepId": "checkNull",
      "key": 140,
      "node": 150,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1070,
      "stepId": "checkLess",
      "key": 140,
      "node": 150,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1071,
      "stepId": "goLeft",
      "key": 140,
      "node": 150,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1072,
      "stepId": "checkNull",
      "key": 140,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1073,
      "stepId": "returnNew",
      "key": 140,
      "node": 140,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1074,
      "stepId": "updateHeight",
      "key": 140,
      "node": 150,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1075,
      "stepId": "uhHl",
      "key": 140,
      "node": 150,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1076,
      "stepId": "uhHr",
      "key": 140,
      "node": 150,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1077,
      "stepId": "uhSet",
      "key": 140,
      "node": 150,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1078,
      "stepId": "calcBf",
      "key": 140,
      "node": 150,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1079,
      "stepId": "bfReturn",
      "key": 140,
      "node": 150,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1080,
      "stepId": "caseLL",
      "key": 140,
      "node": 150,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1081,
      "stepId": "caseRR",
      "key": 140,
      "node": 150,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1082,
      "stepId": "caseLR",
      "key": 140,
      "node": 150,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1083,
      "stepId": "caseRL",
      "key": 140,
      "node": 150,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 50
    },
    {
      "step": 1084,
      "stepId": "returnNode",
      "key": 140,
      "node": 150,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1085,
      "stepId": "updateHeight",
      "key": 140,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1086,
      "stepId": "uhHl",
      "key": 140,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1087,
      "stepId": "uhHr",
      "key": 140,
      "node": 130,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1088,
      "stepId": "uhSet",
      "key": 140,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1089,
      "stepId": "calcBf",
      "key": 140,
      "node": 130,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1090,
      "stepId": "bfReturn",
      "key": 140,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1091,
      "stepId": "caseLL",
      "key": 140,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1092,
      "stepId": "caseRR",
      "key": 140,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1093,
      "stepId": "caseLR",
      "key": 140,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1094,
      "stepId": "caseRL",
      "key": 140,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1095,
      "stepId": "returnNode",
      "key": 140,
      "node": 130,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1096,
      "stepId": "updateHeight",
      "key": 140,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1097,
      "stepId": "uhHl",
      "key": 140,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1098,
      "stepId": "uhHr",
      "key": 140,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1099,
      "stepId": "uhSet",
      "key": 140,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1100,
      "stepId": "calcBf",
      "key": 140,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1101,
      "stepId": "bfReturn",
      "key": 140,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1102,
      "stepId": "caseLL",
      "key": 140,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1103,
      "stepId": "caseRR",
      "key": 140,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1104,
      "stepId": "caseLR",
      "key": 140,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1105,
      "stepId": "caseRL",
      "key": 140,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 50
    },
    {
      "step": 1106,
      "stepId": "returnNode",
      "key": 140,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1107,
      "stepId": "updateHeight",
      "key": 140,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1108,
      "stepId": "uhHl",
      "key": 140,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1109,
      "stepId": "uhHr",
      "key": 140,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1110,
      "stepId": "uhSet",
      "key": 140,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1111,
      "stepId": "calcBf",
      "key": 140,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1112,
      "stepId": "bfReturn",
      "key": 140,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1113,
      "stepId": "caseLL",
      "key": 140,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1114,
      "stepId": "caseRR",
      "key": 140,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1115,
      "stepId": "caseLR",
      "key": 140,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1116,
      "stepId": "caseRL",
      "key": 140,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 50
    },
    {
      "step": 1117,
      "stepId": "returnNode",
      "key": 140,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1118,
      "stepId": "updateHeight",
      "key": 140,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 50
    },
    {
      "step": 1119,
      "stepId": "uhHl",
      "key": 140,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1120,
      "stepId": "uhHr",
      "key": 140,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1121,
      "stepId": "uhSet",
      "key": 140,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1122,
      "stepId": "calcBf",
      "key": 140,
      "node": 50,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 50
    },
    {
      "step": 1123,
      "stepId": "bfReturn",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 50
    },
    {
      "step": 1124,
      "stepId": "caseLL",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 50
    },
    {
      "step": 1125,
      "stepId": "caseRR",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1126,
      "stepId": "rotateLeftRR",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1127,
      "stepId": "rotL_y",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 4,
      "root": 50,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1128,
      "stepId": "rotL_T2",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 4,
      "root": 50,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1129,
      "stepId": "rotL_yLeft",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1130,
      "stepId": "rotL_zRight",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1131,
      "stepId": "rotL_updZ",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1132,
      "stepId": "uhHl",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1133,
      "stepId": "uhHr",
      "key": 140,
      "node": 50,
      "bf": -2,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1134,
      "stepId": "uhSet",
      "key": 140,
      "node": 50,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1135,
      "stepId": "rotL_updY",
      "key": 140,
      "node": 50,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1136,
      "stepId": "uhHl",
      "key": 140,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 3,
      "height_right": 2,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1137,
      "stepId": "uhHr",
      "key": 140,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1138,
      "stepId": "uhSet",
      "key": 140,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1139,
      "stepId": "rotL_return",
      "key": 140,
      "node": 110,
      "bf": 0,
      "case": "RR",
      "new_root": 110,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "temp": 80,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1140,
      "stepId": "mainLoop",
      "key": 170,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1141,
      "stepId": "callInsert",
      "key": 170,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1142,
      "stepId": "checkNull",
      "key": 170,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1143,
      "stepId": "checkLess",
      "key": 170,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1144,
      "stepId": "checkGreater",
      "key": 170,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1145,
      "stepId": "goRight",
      "key": 170,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1146,
      "stepId": "checkNull",
      "key": 170,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1147,
      "stepId": "checkLess",
      "key": 170,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1148,
      "stepId": "checkGreater",
      "key": 170,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1149,
      "stepId": "goRight",
      "key": 170,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1150,
      "stepId": "checkNull",
      "key": 170,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1151,
      "stepId": "checkLess",
      "key": 170,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1152,
      "stepId": "goLeft",
      "key": 170,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1153,
      "stepId": "checkNull",
      "key": 170,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1154,
      "stepId": "returnNew",
      "key": 170,
      "node": 170,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1155,
      "stepId": "updateHeight",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1156,
      "stepId": "uhHl",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1157,
      "stepId": "uhHr",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1158,
      "stepId": "uhSet",
      "key": 170,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1159,
      "stepId": "calcBf",
      "key": 170,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1160,
      "stepId": "bfReturn",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1161,
      "stepId": "caseLL",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1162,
      "stepId": "caseRR",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1163,
      "stepId": "caseLR",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1164,
      "stepId": "caseRL",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1165,
      "stepId": "returnNode",
      "key": 170,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1166,
      "stepId": "updateHeight",
      "key": 170,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1167,
      "stepId": "uhHl",
      "key": 170,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1168,
      "stepId": "uhHr",
      "key": 170,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1169,
      "stepId": "uhSet",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1170,
      "stepId": "calcBf",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1171,
      "stepId": "bfReturn",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1172,
      "stepId": "caseLL",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1173,
      "stepId": "caseRR",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1174,
      "stepId": "caseLR",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1175,
      "stepId": "caseRL",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1176,
      "stepId": "returnNode",
      "key": 170,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1177,
      "stepId": "updateHeight",
      "key": 170,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1178,
      "stepId": "uhHl",
      "key": 170,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1179,
      "stepId": "uhHr",
      "key": 170,
      "node": 110,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1180,
      "stepId": "uhSet",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1181,
      "stepId": "calcBf",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1182,
      "stepId": "bfReturn",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1183,
      "stepId": "caseLL",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1184,
      "stepId": "caseRR",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1185,
      "stepId": "caseLR",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1186,
      "stepId": "caseRL",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1187,
      "stepId": "returnNode",
      "key": 170,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1188,
      "stepId": "mainLoop",
      "key": 200,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1189,
      "stepId": "callInsert",
      "key": 200,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1190,
      "stepId": "checkNull",
      "key": 200,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1191,
      "stepId": "checkLess",
      "key": 200,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1192,
      "stepId": "checkGreater",
      "key": 200,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1193,
      "stepId": "goRight",
      "key": 200,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1194,
      "stepId": "checkNull",
      "key": 200,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1195,
      "stepId": "checkLess",
      "key": 200,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1196,
      "stepId": "checkGreater",
      "key": 200,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1197,
      "stepId": "goRight",
      "key": 200,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1198,
      "stepId": "checkNull",
      "key": 200,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1199,
      "stepId": "checkLess",
      "key": 200,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1200,
      "stepId": "checkGreater",
      "key": 200,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1201,
      "stepId": "goRight",
      "key": 200,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1202,
      "stepId": "checkNull",
      "key": 200,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1203,
      "stepId": "checkLess",
      "key": 200,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1204,
      "stepId": "goLeft",
      "key": 200,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1205,
      "stepId": "checkNull",
      "key": 200,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1206,
      "stepId": "returnNew",
      "key": 200,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1207,
      "stepId": "updateHeight",
      "key": 200,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1208,
      "stepId": "uhHl",
      "key": 200,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1209,
      "stepId": "uhHr",
      "key": 200,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1210,
      "stepId": "uhSet",
      "key": 200,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1211,
      "stepId": "calcBf",
      "key": 200,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1212,
      "stepId": "bfReturn",
      "key": 200,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1213,
      "stepId": "caseLL",
      "key": 200,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1214,
      "stepId": "caseRR",
      "key": 200,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1215,
      "stepId": "caseLR",
      "key": 200,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1216,
      "stepId": "caseRL",
      "key": 200,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1217,
      "stepId": "returnNode",
      "key": 200,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1218,
      "stepId": "updateHeight",
      "key": 200,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1219,
      "stepId": "uhHl",
      "key": 200,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1220,
      "stepId": "uhHr",
      "key": 200,
      "node": 180,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1221,
      "stepId": "uhSet",
      "key": 200,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1222,
      "stepId": "calcBf",
      "key": 200,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1223,
      "stepId": "bfReturn",
      "key": 200,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1224,
      "stepId": "caseLL",
      "key": 200,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1225,
      "stepId": "caseRR",
      "key": 200,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1226,
      "stepId": "caseLR",
      "key": 200,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1227,
      "stepId": "caseRL",
      "key": 200,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1228,
      "stepId": "returnNode",
      "key": 200,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1229,
      "stepId": "updateHeight",
      "key": 200,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1230,
      "stepId": "uhHl",
      "key": 200,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1231,
      "stepId": "uhHr",
      "key": 200,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1232,
      "stepId": "uhSet",
      "key": 200,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1233,
      "stepId": "calcBf",
      "key": 200,
      "node": 160,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1234,
      "stepId": "bfReturn",
      "key": 200,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1235,
      "stepId": "caseLL",
      "key": 200,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1236,
      "stepId": "caseRR",
      "key": 200,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1237,
      "stepId": "caseLR",
      "key": 200,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1238,
      "stepId": "caseRL",
      "key": 200,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1239,
      "stepId": "returnNode",
      "key": 200,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1240,
      "stepId": "updateHeight",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1241,
      "stepId": "uhHl",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1242,
      "stepId": "uhHr",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1243,
      "stepId": "uhSet",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1244,
      "stepId": "calcBf",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1245,
      "stepId": "bfReturn",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1246,
      "stepId": "caseLL",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1247,
      "stepId": "caseRR",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1248,
      "stepId": "caseLR",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1249,
      "stepId": "caseRL",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1250,
      "stepId": "returnNode",
      "key": 200,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1251,
      "stepId": "mainLoop",
      "key": 190,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1252,
      "stepId": "callInsert",
      "key": 190,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1253,
      "stepId": "checkNull",
      "key": 190,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1254,
      "stepId": "checkLess",
      "key": 190,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1255,
      "stepId": "checkGreater",
      "key": 190,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1256,
      "stepId": "goRight",
      "key": 190,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1257,
      "stepId": "checkNull",
      "key": 190,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1258,
      "stepId": "checkLess",
      "key": 190,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1259,
      "stepId": "checkGreater",
      "key": 190,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1260,
      "stepId": "goRight",
      "key": 190,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1261,
      "stepId": "checkNull",
      "key": 190,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1262,
      "stepId": "checkLess",
      "key": 190,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1263,
      "stepId": "checkGreater",
      "key": 190,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1264,
      "stepId": "goRight",
      "key": 190,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1265,
      "stepId": "checkNull",
      "key": 190,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1266,
      "stepId": "checkLess",
      "key": 190,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1267,
      "stepId": "goLeft",
      "key": 190,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1268,
      "stepId": "checkNull",
      "key": 190,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1269,
      "stepId": "checkLess",
      "key": 190,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1270,
      "stepId": "goLeft",
      "key": 190,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1271,
      "stepId": "checkNull",
      "key": 190,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1272,
      "stepId": "returnNew",
      "key": 190,
      "node": 190,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1273,
      "stepId": "updateHeight",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1274,
      "stepId": "uhHl",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1275,
      "stepId": "uhHr",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1276,
      "stepId": "uhSet",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1277,
      "stepId": "calcBf",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1278,
      "stepId": "bfReturn",
      "key": 190,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1279,
      "stepId": "caseLL",
      "key": 190,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1280,
      "stepId": "caseRR",
      "key": 190,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1281,
      "stepId": "caseLR",
      "key": 190,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1282,
      "stepId": "caseRL",
      "key": 190,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1283,
      "stepId": "returnNode",
      "key": 190,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1284,
      "stepId": "updateHeight",
      "key": 190,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1285,
      "stepId": "uhHl",
      "key": 190,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1286,
      "stepId": "uhHr",
      "key": 190,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1287,
      "stepId": "uhSet",
      "key": 190,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1288,
      "stepId": "calcBf",
      "key": 190,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1289,
      "stepId": "bfReturn",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1290,
      "stepId": "caseLL",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1291,
      "stepId": "rotateRightLL",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1292,
      "stepId": "rotR_y",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 200,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1293,
      "stepId": "rotR_T2",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 200,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1294,
      "stepId": "rotR_yRight",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 200,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1295,
      "stepId": "rotR_zLeft",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 200,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1296,
      "stepId": "rotR_updZ",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 200,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1297,
      "stepId": "uhHl",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 200,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1298,
      "stepId": "uhHr",
      "key": 190,
      "node": 210,
      "bf": 2,
      "case": "LL",
      "new_root": 200,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1299,
      "stepId": "uhSet",
      "key": 190,
      "node": 210,
      "bf": 0,
      "case": "LL",
      "new_root": 200,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1300,
      "stepId": "rotR_updY",
      "key": 190,
      "node": 210,
      "bf": 0,
      "case": "LL",
      "new_root": 200,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1301,
      "stepId": "uhHl",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": "LL",
      "new_root": 200,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1302,
      "stepId": "uhHr",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": "LL",
      "new_root": 200,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1303,
      "stepId": "uhSet",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": "LL",
      "new_root": 200,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1304,
      "stepId": "rotR_return",
      "key": 190,
      "node": 200,
      "bf": 0,
      "case": "LL",
      "new_root": 200,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1305,
      "stepId": "updateHeight",
      "key": 190,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1306,
      "stepId": "uhHl",
      "key": 190,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1307,
      "stepId": "uhHr",
      "key": 190,
      "node": 180,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1308,
      "stepId": "uhSet",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1309,
      "stepId": "calcBf",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1310,
      "stepId": "bfReturn",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1311,
      "stepId": "caseLL",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1312,
      "stepId": "caseRR",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1313,
      "stepId": "caseLR",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1314,
      "stepId": "caseRL",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1315,
      "stepId": "returnNode",
      "key": 190,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1316,
      "stepId": "updateHeight",
      "key": 190,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1317,
      "stepId": "uhHl",
      "key": 190,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1318,
      "stepId": "uhHr",
      "key": 190,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1319,
      "stepId": "uhSet",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1320,
      "stepId": "calcBf",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1321,
      "stepId": "bfReturn",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1322,
      "stepId": "caseLL",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1323,
      "stepId": "caseRR",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1324,
      "stepId": "caseLR",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1325,
      "stepId": "caseRL",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1326,
      "stepId": "returnNode",
      "key": 190,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1327,
      "stepId": "updateHeight",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1328,
      "stepId": "uhHl",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1329,
      "stepId": "uhHr",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1330,
      "stepId": "uhSet",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1331,
      "stepId": "calcBf",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1332,
      "stepId": "bfReturn",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1333,
      "stepId": "caseLL",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1334,
      "stepId": "caseRR",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1335,
      "stepId": "caseLR",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1336,
      "stepId": "caseRL",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1337,
      "stepId": "returnNode",
      "key": 190,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1338,
      "stepId": "mainLoop",
      "key": 290,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1339,
      "stepId": "callInsert",
      "key": 290,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1340,
      "stepId": "checkNull",
      "key": 290,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1341,
      "stepId": "checkLess",
      "key": 290,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1342,
      "stepId": "checkGreater",
      "key": 290,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1343,
      "stepId": "goRight",
      "key": 290,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1344,
      "stepId": "checkNull",
      "key": 290,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1345,
      "stepId": "checkLess",
      "key": 290,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1346,
      "stepId": "checkGreater",
      "key": 290,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1347,
      "stepId": "goRight",
      "key": 290,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1348,
      "stepId": "checkNull",
      "key": 290,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1349,
      "stepId": "checkLess",
      "key": 290,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1350,
      "stepId": "checkGreater",
      "key": 290,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1351,
      "stepId": "goRight",
      "key": 290,
      "node": 180,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1352,
      "stepId": "checkNull",
      "key": 290,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1353,
      "stepId": "checkLess",
      "key": 290,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1354,
      "stepId": "checkGreater",
      "key": 290,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1355,
      "stepId": "goRight",
      "key": 290,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1356,
      "stepId": "checkNull",
      "key": 290,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1357,
      "stepId": "checkLess",
      "key": 290,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1358,
      "stepId": "checkGreater",
      "key": 290,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1359,
      "stepId": "goRight",
      "key": 290,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1360,
      "stepId": "checkNull",
      "key": 290,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1361,
      "stepId": "returnNew",
      "key": 290,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1362,
      "stepId": "updateHeight",
      "key": 290,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1363,
      "stepId": "uhHl",
      "key": 290,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1364,
      "stepId": "uhHr",
      "key": 290,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1365,
      "stepId": "uhSet",
      "key": 290,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1366,
      "stepId": "calcBf",
      "key": 290,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1367,
      "stepId": "bfReturn",
      "key": 290,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1368,
      "stepId": "caseLL",
      "key": 290,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1369,
      "stepId": "caseRR",
      "key": 290,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1370,
      "stepId": "caseLR",
      "key": 290,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1371,
      "stepId": "caseRL",
      "key": 290,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1372,
      "stepId": "returnNode",
      "key": 290,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1373,
      "stepId": "updateHeight",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1374,
      "stepId": "uhHl",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1375,
      "stepId": "uhHr",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1376,
      "stepId": "uhSet",
      "key": 290,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1377,
      "stepId": "calcBf",
      "key": 290,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1378,
      "stepId": "bfReturn",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1379,
      "stepId": "caseLL",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1380,
      "stepId": "caseRR",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1381,
      "stepId": "caseLR",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1382,
      "stepId": "caseRL",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1383,
      "stepId": "returnNode",
      "key": 290,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1384,
      "stepId": "updateHeight",
      "key": 290,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1385,
      "stepId": "uhHl",
      "key": 290,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1386,
      "stepId": "uhHr",
      "key": 290,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1387,
      "stepId": "uhSet",
      "key": 290,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1388,
      "stepId": "calcBf",
      "key": 290,
      "node": 180,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1389,
      "stepId": "bfReturn",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1390,
      "stepId": "caseLL",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1391,
      "stepId": "caseRR",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1392,
      "stepId": "rotateLeftRR",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1393,
      "stepId": "rotL_y",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1394,
      "stepId": "rotL_T2",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1395,
      "stepId": "rotL_yLeft",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1396,
      "stepId": "rotL_zRight",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1397,
      "stepId": "rotL_updZ",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1398,
      "stepId": "uhHl",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1399,
      "stepId": "uhHr",
      "key": 290,
      "node": 180,
      "bf": -2,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1400,
      "stepId": "uhSet",
      "key": 290,
      "node": 180,
      "bf": 0,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1401,
      "stepId": "rotL_updY",
      "key": 290,
      "node": 180,
      "bf": 0,
      "case": "RR",
      "new_root": 200,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1402,
      "stepId": "uhHl",
      "key": 290,
      "node": 200,
      "bf": 0,
      "case": "RR",
      "new_root": 200,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1403,
      "stepId": "uhHr",
      "key": 290,
      "node": 200,
      "bf": 0,
      "case": "RR",
      "new_root": 200,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1404,
      "stepId": "uhSet",
      "key": 290,
      "node": 200,
      "bf": 0,
      "case": "RR",
      "new_root": 200,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1405,
      "stepId": "rotL_return",
      "key": 290,
      "node": 200,
      "bf": 0,
      "case": "RR",
      "new_root": 200,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 190,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1406,
      "stepId": "updateHeight",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1407,
      "stepId": "uhHl",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1408,
      "stepId": "uhHr",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1409,
      "stepId": "uhSet",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1410,
      "stepId": "calcBf",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1411,
      "stepId": "bfReturn",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1412,
      "stepId": "caseLL",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1413,
      "stepId": "caseRR",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1414,
      "stepId": "caseLR",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1415,
      "stepId": "caseRL",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1416,
      "stepId": "returnNode",
      "key": 290,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1417,
      "stepId": "updateHeight",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1418,
      "stepId": "uhHl",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1419,
      "stepId": "uhHr",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1420,
      "stepId": "uhSet",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1421,
      "stepId": "calcBf",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1422,
      "stepId": "bfReturn",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1423,
      "stepId": "caseLL",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1424,
      "stepId": "caseRR",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1425,
      "stepId": "caseLR",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1426,
      "stepId": "caseRL",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1427,
      "stepId": "returnNode",
      "key": 290,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1428,
      "stepId": "mainLoop",
      "key": 260,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1429,
      "stepId": "callInsert",
      "key": 260,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1430,
      "stepId": "checkNull",
      "key": 260,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1431,
      "stepId": "checkLess",
      "key": 260,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1432,
      "stepId": "checkGreater",
      "key": 260,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1433,
      "stepId": "goRight",
      "key": 260,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1434,
      "stepId": "checkNull",
      "key": 260,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1435,
      "stepId": "checkLess",
      "key": 260,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1436,
      "stepId": "checkGreater",
      "key": 260,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1437,
      "stepId": "goRight",
      "key": 260,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1438,
      "stepId": "checkNull",
      "key": 260,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1439,
      "stepId": "checkLess",
      "key": 260,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1440,
      "stepId": "checkGreater",
      "key": 260,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1441,
      "stepId": "goRight",
      "key": 260,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1442,
      "stepId": "checkNull",
      "key": 260,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1443,
      "stepId": "checkLess",
      "key": 260,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1444,
      "stepId": "checkGreater",
      "key": 260,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1445,
      "stepId": "goRight",
      "key": 260,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1446,
      "stepId": "checkNull",
      "key": 260,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1447,
      "stepId": "checkLess",
      "key": 260,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1448,
      "stepId": "goLeft",
      "key": 260,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1449,
      "stepId": "checkNull",
      "key": 260,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1450,
      "stepId": "returnNew",
      "key": 260,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1451,
      "stepId": "updateHeight",
      "key": 260,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1452,
      "stepId": "uhHl",
      "key": 260,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1453,
      "stepId": "uhHr",
      "key": 260,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1454,
      "stepId": "uhSet",
      "key": 260,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1455,
      "stepId": "calcBf",
      "key": 260,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1456,
      "stepId": "bfReturn",
      "key": 260,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1457,
      "stepId": "caseLL",
      "key": 260,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1458,
      "stepId": "caseRR",
      "key": 260,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1459,
      "stepId": "caseLR",
      "key": 260,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1460,
      "stepId": "caseRL",
      "key": 260,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1461,
      "stepId": "returnNode",
      "key": 260,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1462,
      "stepId": "updateHeight",
      "key": 260,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1463,
      "stepId": "uhHl",
      "key": 260,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1464,
      "stepId": "uhHr",
      "key": 260,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1465,
      "stepId": "uhSet",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1466,
      "stepId": "calcBf",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1467,
      "stepId": "bfReturn",
      "key": 260,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1468,
      "stepId": "caseLL",
      "key": 260,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1469,
      "stepId": "caseRR",
      "key": 260,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1470,
      "stepId": "caseLR",
      "key": 260,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1471,
      "stepId": "caseRL",
      "key": 260,
      "node": 210,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1472,
      "stepId": "rotateRightRL",
      "key": 260,
      "node": 210,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1473,
      "stepId": "rotR_y",
      "key": 260,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1474,
      "stepId": "rotR_T2",
      "key": 260,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1475,
      "stepId": "rotR_yRight",
      "key": 260,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1476,
      "stepId": "rotR_zLeft",
      "key": 260,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1477,
      "stepId": "rotR_updZ",
      "key": 260,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1478,
      "stepId": "uhHl",
      "key": 260,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1479,
      "stepId": "uhHr",
      "key": 260,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1480,
      "stepId": "uhSet",
      "key": 260,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1481,
      "stepId": "rotR_updY",
      "key": 260,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1482,
      "stepId": "uhHl",
      "key": 260,
      "node": 260,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1483,
      "stepId": "uhHr",
      "key": 260,
      "node": 260,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1484,
      "stepId": "uhSet",
      "key": 260,
      "node": 260,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1485,
      "stepId": "rotR_return",
      "key": 260,
      "node": 260,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1486,
      "stepId": "rotateLeftRL",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1487,
      "stepId": "rotL_y",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1488,
      "stepId": "rotL_T2",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1489,
      "stepId": "rotL_yLeft",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1490,
      "stepId": "rotL_zRight",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1491,
      "stepId": "rotL_updZ",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1492,
      "stepId": "uhHl",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1493,
      "stepId": "uhHr",
      "key": 260,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1494,
      "stepId": "uhSet",
      "key": 260,
      "node": 210,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1495,
      "stepId": "rotL_updY",
      "key": 260,
      "node": 210,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1496,
      "stepId": "uhHl",
      "key": 260,
      "node": 260,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1497,
      "stepId": "uhHr",
      "key": 260,
      "node": 260,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1498,
      "stepId": "uhSet",
      "key": 260,
      "node": 260,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1499,
      "stepId": "rotL_return",
      "key": 260,
      "node": 260,
      "bf": 0,
      "case": "RL",
      "new_root": 260,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1500,
      "stepId": "updateHeight",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1501,
      "stepId": "uhHl",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1502,
      "stepId": "uhHr",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1503,
      "stepId": "uhSet",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1504,
      "stepId": "calcBf",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1505,
      "stepId": "bfReturn",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1506,
      "stepId": "caseLL",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1507,
      "stepId": "caseRR",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1508,
      "stepId": "caseLR",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1509,
      "stepId": "caseRL",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1510,
      "stepId": "returnNode",
      "key": 260,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1511,
      "stepId": "updateHeight",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1512,
      "stepId": "uhHl",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1513,
      "stepId": "uhHr",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1514,
      "stepId": "uhSet",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1515,
      "stepId": "calcBf",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1516,
      "stepId": "bfReturn",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1517,
      "stepId": "caseLL",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1518,
      "stepId": "caseRR",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1519,
      "stepId": "caseLR",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1520,
      "stepId": "caseRL",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1521,
      "stepId": "returnNode",
      "key": 260,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1522,
      "stepId": "updateHeight",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1523,
      "stepId": "uhHl",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1524,
      "stepId": "uhHr",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1525,
      "stepId": "uhSet",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1526,
      "stepId": "calcBf",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1527,
      "stepId": "bfReturn",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1528,
      "stepId": "caseLL",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1529,
      "stepId": "caseRR",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1530,
      "stepId": "caseLR",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1531,
      "stepId": "caseRL",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1532,
      "stepId": "returnNode",
      "key": 260,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1533,
      "stepId": "mainLoop",
      "key": 240,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1534,
      "stepId": "callInsert",
      "key": 240,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1535,
      "stepId": "checkNull",
      "key": 240,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1536,
      "stepId": "checkLess",
      "key": 240,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1537,
      "stepId": "checkGreater",
      "key": 240,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1538,
      "stepId": "goRight",
      "key": 240,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1539,
      "stepId": "checkNull",
      "key": 240,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1540,
      "stepId": "checkLess",
      "key": 240,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1541,
      "stepId": "checkGreater",
      "key": 240,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1542,
      "stepId": "goRight",
      "key": 240,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1543,
      "stepId": "checkNull",
      "key": 240,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1544,
      "stepId": "checkLess",
      "key": 240,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1545,
      "stepId": "checkGreater",
      "key": 240,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1546,
      "stepId": "goRight",
      "key": 240,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1547,
      "stepId": "checkNull",
      "key": 240,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1548,
      "stepId": "checkLess",
      "key": 240,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1549,
      "stepId": "goLeft",
      "key": 240,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1550,
      "stepId": "checkNull",
      "key": 240,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1551,
      "stepId": "checkLess",
      "key": 240,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1552,
      "stepId": "checkGreater",
      "key": 240,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1553,
      "stepId": "goRight",
      "key": 240,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1554,
      "stepId": "checkNull",
      "key": 240,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1555,
      "stepId": "returnNew",
      "key": 240,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1556,
      "stepId": "updateHeight",
      "key": 240,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1557,
      "stepId": "uhHl",
      "key": 240,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1558,
      "stepId": "uhHr",
      "key": 240,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1559,
      "stepId": "uhSet",
      "key": 240,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1560,
      "stepId": "calcBf",
      "key": 240,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1561,
      "stepId": "bfReturn",
      "key": 240,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1562,
      "stepId": "caseLL",
      "key": 240,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1563,
      "stepId": "caseRR",
      "key": 240,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1564,
      "stepId": "caseLR",
      "key": 240,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1565,
      "stepId": "caseRL",
      "key": 240,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1566,
      "stepId": "returnNode",
      "key": 240,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1567,
      "stepId": "updateHeight",
      "key": 240,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1568,
      "stepId": "uhHl",
      "key": 240,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1569,
      "stepId": "uhHr",
      "key": 240,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1570,
      "stepId": "uhSet",
      "key": 240,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1571,
      "stepId": "calcBf",
      "key": 240,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1572,
      "stepId": "bfReturn",
      "key": 240,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1573,
      "stepId": "caseLL",
      "key": 240,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1574,
      "stepId": "caseRR",
      "key": 240,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1575,
      "stepId": "caseLR",
      "key": 240,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1576,
      "stepId": "caseRL",
      "key": 240,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1577,
      "stepId": "returnNode",
      "key": 240,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1578,
      "stepId": "updateHeight",
      "key": 240,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1579,
      "stepId": "uhHl",
      "key": 240,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1580,
      "stepId": "uhHr",
      "key": 240,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1581,
      "stepId": "uhSet",
      "key": 240,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1582,
      "stepId": "calcBf",
      "key": 240,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1583,
      "stepId": "bfReturn",
      "key": 240,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1584,
      "stepId": "caseLL",
      "key": 240,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1585,
      "stepId": "caseRR",
      "key": 240,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1586,
      "stepId": "caseLR",
      "key": 240,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1587,
      "stepId": "caseRL",
      "key": 240,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1588,
      "stepId": "returnNode",
      "key": 240,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1589,
      "stepId": "updateHeight",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1590,
      "stepId": "uhHl",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1591,
      "stepId": "uhHr",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1592,
      "stepId": "uhSet",
      "key": 240,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1593,
      "stepId": "calcBf",
      "key": 240,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1594,
      "stepId": "bfReturn",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1595,
      "stepId": "caseLL",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1596,
      "stepId": "caseRR",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1597,
      "stepId": "caseLR",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1598,
      "stepId": "caseRL",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1599,
      "stepId": "returnNode",
      "key": 240,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1600,
      "stepId": "updateHeight",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1601,
      "stepId": "uhHl",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1602,
      "stepId": "uhHr",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1603,
      "stepId": "uhSet",
      "key": 240,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1604,
      "stepId": "calcBf",
      "key": 240,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1605,
      "stepId": "bfReturn",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1606,
      "stepId": "caseLL",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1607,
      "stepId": "caseRR",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1608,
      "stepId": "caseLR",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1609,
      "stepId": "caseRL",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1610,
      "stepId": "returnNode",
      "key": 240,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1611,
      "stepId": "mainLoop",
      "key": 230,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1612,
      "stepId": "callInsert",
      "key": 230,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1613,
      "stepId": "checkNull",
      "key": 230,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1614,
      "stepId": "checkLess",
      "key": 230,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1615,
      "stepId": "checkGreater",
      "key": 230,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1616,
      "stepId": "goRight",
      "key": 230,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1617,
      "stepId": "checkNull",
      "key": 230,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1618,
      "stepId": "checkLess",
      "key": 230,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1619,
      "stepId": "checkGreater",
      "key": 230,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1620,
      "stepId": "goRight",
      "key": 230,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1621,
      "stepId": "checkNull",
      "key": 230,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1622,
      "stepId": "checkLess",
      "key": 230,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1623,
      "stepId": "checkGreater",
      "key": 230,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1624,
      "stepId": "goRight",
      "key": 230,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1625,
      "stepId": "checkNull",
      "key": 230,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1626,
      "stepId": "checkLess",
      "key": 230,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1627,
      "stepId": "goLeft",
      "key": 230,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1628,
      "stepId": "checkNull",
      "key": 230,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1629,
      "stepId": "checkLess",
      "key": 230,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1630,
      "stepId": "checkGreater",
      "key": 230,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1631,
      "stepId": "goRight",
      "key": 230,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1632,
      "stepId": "checkNull",
      "key": 230,
      "node": 240,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1633,
      "stepId": "checkLess",
      "key": 230,
      "node": 240,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1634,
      "stepId": "goLeft",
      "key": 230,
      "node": 240,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1635,
      "stepId": "checkNull",
      "key": 230,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1636,
      "stepId": "returnNew",
      "key": 230,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1637,
      "stepId": "updateHeight",
      "key": 230,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1638,
      "stepId": "uhHl",
      "key": 230,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1639,
      "stepId": "uhHr",
      "key": 230,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1640,
      "stepId": "uhSet",
      "key": 230,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1641,
      "stepId": "calcBf",
      "key": 230,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1642,
      "stepId": "bfReturn",
      "key": 230,
      "node": 240,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1643,
      "stepId": "caseLL",
      "key": 230,
      "node": 240,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1644,
      "stepId": "caseRR",
      "key": 230,
      "node": 240,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1645,
      "stepId": "caseLR",
      "key": 230,
      "node": 240,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1646,
      "stepId": "caseRL",
      "key": 230,
      "node": 240,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1647,
      "stepId": "returnNode",
      "key": 230,
      "node": 240,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1648,
      "stepId": "updateHeight",
      "key": 230,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1649,
      "stepId": "uhHl",
      "key": 230,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1650,
      "stepId": "uhHr",
      "key": 230,
      "node": 210,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1651,
      "stepId": "uhSet",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1652,
      "stepId": "calcBf",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1653,
      "stepId": "bfReturn",
      "key": 230,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1654,
      "stepId": "caseLL",
      "key": 230,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1655,
      "stepId": "caseRR",
      "key": 230,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1656,
      "stepId": "caseLR",
      "key": 230,
      "node": 210,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1657,
      "stepId": "caseRL",
      "key": 230,
      "node": 210,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1658,
      "stepId": "rotateRightRL",
      "key": 230,
      "node": 210,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1659,
      "stepId": "rotR_y",
      "key": 230,
      "node": 240,
      "bf": -2,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1660,
      "stepId": "rotR_T2",
      "key": 230,
      "node": 240,
      "bf": -2,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1661,
      "stepId": "rotR_yRight",
      "key": 230,
      "node": 240,
      "bf": -2,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1662,
      "stepId": "rotR_zLeft",
      "key": 230,
      "node": 240,
      "bf": -2,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1663,
      "stepId": "rotR_updZ",
      "key": 230,
      "node": 240,
      "bf": -2,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1664,
      "stepId": "uhHl",
      "key": 230,
      "node": 240,
      "bf": -2,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1665,
      "stepId": "uhHr",
      "key": 230,
      "node": 240,
      "bf": -2,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1666,
      "stepId": "uhSet",
      "key": 230,
      "node": 240,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1667,
      "stepId": "rotR_updY",
      "key": 230,
      "node": 240,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1668,
      "stepId": "uhHl",
      "key": 230,
      "node": 230,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1669,
      "stepId": "uhHr",
      "key": 230,
      "node": 230,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1670,
      "stepId": "uhSet",
      "key": 230,
      "node": 230,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1671,
      "stepId": "rotR_return",
      "key": 230,
      "node": 230,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1672,
      "stepId": "rotateLeftRL",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1673,
      "stepId": "rotL_y",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1674,
      "stepId": "rotL_T2",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1675,
      "stepId": "rotL_yLeft",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1676,
      "stepId": "rotL_zRight",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1677,
      "stepId": "rotL_updZ",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1678,
      "stepId": "uhHl",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1679,
      "stepId": "uhHr",
      "key": 230,
      "node": 210,
      "bf": -1,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1680,
      "stepId": "uhSet",
      "key": 230,
      "node": 210,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1681,
      "stepId": "rotL_updY",
      "key": 230,
      "node": 210,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1682,
      "stepId": "uhHl",
      "key": 230,
      "node": 230,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1683,
      "stepId": "uhHr",
      "key": 230,
      "node": 230,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1684,
      "stepId": "uhSet",
      "key": 230,
      "node": 230,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1685,
      "stepId": "rotL_return",
      "key": 230,
      "node": 230,
      "bf": 0,
      "case": "RL",
      "new_root": 230,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1686,
      "stepId": "updateHeight",
      "key": 230,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1687,
      "stepId": "uhHl",
      "key": 230,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1688,
      "stepId": "uhHr",
      "key": 230,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1689,
      "stepId": "uhSet",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1690,
      "stepId": "calcBf",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1691,
      "stepId": "bfReturn",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1692,
      "stepId": "caseLL",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1693,
      "stepId": "caseRR",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1694,
      "stepId": "caseLR",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1695,
      "stepId": "caseRL",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1696,
      "stepId": "returnNode",
      "key": 230,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1697,
      "stepId": "updateHeight",
      "key": 230,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1698,
      "stepId": "uhHl",
      "key": 230,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1699,
      "stepId": "uhHr",
      "key": 230,
      "node": 200,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1700,
      "stepId": "uhSet",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1701,
      "stepId": "calcBf",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1702,
      "stepId": "bfReturn",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1703,
      "stepId": "caseLL",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1704,
      "stepId": "caseRR",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1705,
      "stepId": "caseLR",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1706,
      "stepId": "caseRL",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1707,
      "stepId": "returnNode",
      "key": 230,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1708,
      "stepId": "updateHeight",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1709,
      "stepId": "uhHl",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1710,
      "stepId": "uhHr",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1711,
      "stepId": "uhSet",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1712,
      "stepId": "calcBf",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1713,
      "stepId": "bfReturn",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1714,
      "stepId": "caseLL",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1715,
      "stepId": "caseRR",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1716,
      "stepId": "caseLR",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1717,
      "stepId": "caseRL",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1718,
      "stepId": "returnNode",
      "key": 230,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1719,
      "stepId": "updateHeight",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1720,
      "stepId": "uhHl",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1721,
      "stepId": "uhHr",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1722,
      "stepId": "uhSet",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1723,
      "stepId": "calcBf",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1724,
      "stepId": "bfReturn",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1725,
      "stepId": "caseLL",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1726,
      "stepId": "caseRR",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1727,
      "stepId": "caseLR",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1728,
      "stepId": "caseRL",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1729,
      "stepId": "returnNode",
      "key": 230,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1730,
      "stepId": "mainLoop",
      "key": 220,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1731,
      "stepId": "callInsert",
      "key": 220,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1732,
      "stepId": "checkNull",
      "key": 220,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1733,
      "stepId": "checkLess",
      "key": 220,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1734,
      "stepId": "checkGreater",
      "key": 220,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1735,
      "stepId": "goRight",
      "key": 220,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1736,
      "stepId": "checkNull",
      "key": 220,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1737,
      "stepId": "checkLess",
      "key": 220,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1738,
      "stepId": "checkGreater",
      "key": 220,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1739,
      "stepId": "goRight",
      "key": 220,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1740,
      "stepId": "checkNull",
      "key": 220,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1741,
      "stepId": "checkLess",
      "key": 220,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1742,
      "stepId": "checkGreater",
      "key": 220,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1743,
      "stepId": "goRight",
      "key": 220,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1744,
      "stepId": "checkNull",
      "key": 220,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1745,
      "stepId": "checkLess",
      "key": 220,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1746,
      "stepId": "goLeft",
      "key": 220,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1747,
      "stepId": "checkNull",
      "key": 220,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1748,
      "stepId": "checkLess",
      "key": 220,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1749,
      "stepId": "goLeft",
      "key": 220,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1750,
      "stepId": "checkNull",
      "key": 220,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1751,
      "stepId": "checkLess",
      "key": 220,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1752,
      "stepId": "checkGreater",
      "key": 220,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1753,
      "stepId": "goRight",
      "key": 220,
      "node": 210,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1754,
      "stepId": "checkNull",
      "key": 220,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1755,
      "stepId": "returnNew",
      "key": 220,
      "node": 220,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1756,
      "stepId": "updateHeight",
      "key": 220,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1757,
      "stepId": "uhHl",
      "key": 220,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1758,
      "stepId": "uhHr",
      "key": 220,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1759,
      "stepId": "uhSet",
      "key": 220,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1760,
      "stepId": "calcBf",
      "key": 220,
      "node": 210,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1761,
      "stepId": "bfReturn",
      "key": 220,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1762,
      "stepId": "caseLL",
      "key": 220,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1763,
      "stepId": "caseRR",
      "key": 220,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1764,
      "stepId": "caseLR",
      "key": 220,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1765,
      "stepId": "caseRL",
      "key": 220,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1766,
      "stepId": "returnNode",
      "key": 220,
      "node": 210,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1767,
      "stepId": "updateHeight",
      "key": 220,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1768,
      "stepId": "uhHl",
      "key": 220,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1769,
      "stepId": "uhHr",
      "key": 220,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1770,
      "stepId": "uhSet",
      "key": 220,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1771,
      "stepId": "calcBf",
      "key": 220,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1772,
      "stepId": "bfReturn",
      "key": 220,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1773,
      "stepId": "caseLL",
      "key": 220,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1774,
      "stepId": "caseRR",
      "key": 220,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1775,
      "stepId": "caseLR",
      "key": 220,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1776,
      "stepId": "caseRL",
      "key": 220,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1777,
      "stepId": "returnNode",
      "key": 220,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1778,
      "stepId": "updateHeight",
      "key": 220,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1779,
      "stepId": "uhHl",
      "key": 220,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1780,
      "stepId": "uhHr",
      "key": 220,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1781,
      "stepId": "uhSet",
      "key": 220,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1782,
      "stepId": "calcBf",
      "key": 220,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1783,
      "stepId": "bfReturn",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1784,
      "stepId": "caseLL",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1785,
      "stepId": "rotateRightLL",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1786,
      "stepId": "rotR_y",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": 230,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1787,
      "stepId": "rotR_T2",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": 230,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1788,
      "stepId": "rotR_yRight",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": 230,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1789,
      "stepId": "rotR_zLeft",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": 230,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1790,
      "stepId": "rotR_updZ",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": 230,
      "height_left": 2,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1791,
      "stepId": "uhHl",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": 230,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1792,
      "stepId": "uhHr",
      "key": 220,
      "node": 260,
      "bf": 2,
      "case": "LL",
      "new_root": 230,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1793,
      "stepId": "uhSet",
      "key": 220,
      "node": 260,
      "bf": 0,
      "case": "LL",
      "new_root": 230,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1794,
      "stepId": "rotR_updY",
      "key": 220,
      "node": 260,
      "bf": 0,
      "case": "LL",
      "new_root": 230,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1795,
      "stepId": "uhHl",
      "key": 220,
      "node": 230,
      "bf": 0,
      "case": "LL",
      "new_root": 230,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1796,
      "stepId": "uhHr",
      "key": 220,
      "node": 230,
      "bf": 0,
      "case": "LL",
      "new_root": 230,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1797,
      "stepId": "uhSet",
      "key": 220,
      "node": 230,
      "bf": 0,
      "case": "LL",
      "new_root": 230,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1798,
      "stepId": "rotR_return",
      "key": 220,
      "node": 230,
      "bf": 0,
      "case": "LL",
      "new_root": 230,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 240,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1799,
      "stepId": "updateHeight",
      "key": 220,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1800,
      "stepId": "uhHl",
      "key": 220,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1801,
      "stepId": "uhHr",
      "key": 220,
      "node": 200,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1802,
      "stepId": "uhSet",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1803,
      "stepId": "calcBf",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1804,
      "stepId": "bfReturn",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1805,
      "stepId": "caseLL",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1806,
      "stepId": "caseRR",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1807,
      "stepId": "caseLR",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1808,
      "stepId": "caseRL",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1809,
      "stepId": "returnNode",
      "key": 220,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1810,
      "stepId": "updateHeight",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1811,
      "stepId": "uhHl",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1812,
      "stepId": "uhHr",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1813,
      "stepId": "uhSet",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1814,
      "stepId": "calcBf",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1815,
      "stepId": "bfReturn",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1816,
      "stepId": "caseLL",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1817,
      "stepId": "caseRR",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1818,
      "stepId": "caseLR",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1819,
      "stepId": "caseRL",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1820,
      "stepId": "returnNode",
      "key": 220,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1821,
      "stepId": "updateHeight",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1822,
      "stepId": "uhHl",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1823,
      "stepId": "uhHr",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1824,
      "stepId": "uhSet",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1825,
      "stepId": "calcBf",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1826,
      "stepId": "bfReturn",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1827,
      "stepId": "caseLL",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1828,
      "stepId": "caseRR",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1829,
      "stepId": "caseLR",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1830,
      "stepId": "caseRL",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1831,
      "stepId": "returnNode",
      "key": 220,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1832,
      "stepId": "mainLoop",
      "key": 250,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1833,
      "stepId": "callInsert",
      "key": 250,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1834,
      "stepId": "checkNull",
      "key": 250,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1835,
      "stepId": "checkLess",
      "key": 250,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1836,
      "stepId": "checkGreater",
      "key": 250,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1837,
      "stepId": "goRight",
      "key": 250,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1838,
      "stepId": "checkNull",
      "key": 250,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1839,
      "stepId": "checkLess",
      "key": 250,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1840,
      "stepId": "checkGreater",
      "key": 250,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1841,
      "stepId": "goRight",
      "key": 250,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1842,
      "stepId": "checkNull",
      "key": 250,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1843,
      "stepId": "checkLess",
      "key": 250,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1844,
      "stepId": "checkGreater",
      "key": 250,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1845,
      "stepId": "goRight",
      "key": 250,
      "node": 200,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1846,
      "stepId": "checkNull",
      "key": 250,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1847,
      "stepId": "checkLess",
      "key": 250,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1848,
      "stepId": "checkGreater",
      "key": 250,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1849,
      "stepId": "goRight",
      "key": 250,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1850,
      "stepId": "checkNull",
      "key": 250,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1851,
      "stepId": "checkLess",
      "key": 250,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1852,
      "stepId": "goLeft",
      "key": 250,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1853,
      "stepId": "checkNull",
      "key": 250,
      "node": 240,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1854,
      "stepId": "checkLess",
      "key": 250,
      "node": 240,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1855,
      "stepId": "checkGreater",
      "key": 250,
      "node": 240,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1856,
      "stepId": "goRight",
      "key": 250,
      "node": 240,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1857,
      "stepId": "checkNull",
      "key": 250,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1858,
      "stepId": "returnNew",
      "key": 250,
      "node": 250,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1859,
      "stepId": "updateHeight",
      "key": 250,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1860,
      "stepId": "uhHl",
      "key": 250,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1861,
      "stepId": "uhHr",
      "key": 250,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1862,
      "stepId": "uhSet",
      "key": 250,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1863,
      "stepId": "calcBf",
      "key": 250,
      "node": 240,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1864,
      "stepId": "bfReturn",
      "key": 250,
      "node": 240,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1865,
      "stepId": "caseLL",
      "key": 250,
      "node": 240,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1866,
      "stepId": "caseRR",
      "key": 250,
      "node": 240,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1867,
      "stepId": "caseLR",
      "key": 250,
      "node": 240,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1868,
      "stepId": "caseRL",
      "key": 250,
      "node": 240,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1869,
      "stepId": "returnNode",
      "key": 250,
      "node": 240,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1870,
      "stepId": "updateHeight",
      "key": 250,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1871,
      "stepId": "uhHl",
      "key": 250,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1872,
      "stepId": "uhHr",
      "key": 250,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1873,
      "stepId": "uhSet",
      "key": 250,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1874,
      "stepId": "calcBf",
      "key": 250,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1875,
      "stepId": "bfReturn",
      "key": 250,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1876,
      "stepId": "caseLL",
      "key": 250,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1877,
      "stepId": "caseRR",
      "key": 250,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1878,
      "stepId": "caseLR",
      "key": 250,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1879,
      "stepId": "caseRL",
      "key": 250,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 1880,
      "stepId": "returnNode",
      "key": 250,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1881,
      "stepId": "updateHeight",
      "key": 250,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1882,
      "stepId": "uhHl",
      "key": 250,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1883,
      "stepId": "uhHr",
      "key": 250,
      "node": 230,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1884,
      "stepId": "uhSet",
      "key": 250,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1885,
      "stepId": "calcBf",
      "key": 250,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1886,
      "stepId": "bfReturn",
      "key": 250,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1887,
      "stepId": "caseLL",
      "key": 250,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1888,
      "stepId": "caseRR",
      "key": 250,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1889,
      "stepId": "caseLR",
      "key": 250,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1890,
      "stepId": "caseRL",
      "key": 250,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1891,
      "stepId": "returnNode",
      "key": 250,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1892,
      "stepId": "updateHeight",
      "key": 250,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1893,
      "stepId": "uhHl",
      "key": 250,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1894,
      "stepId": "uhHr",
      "key": 250,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1895,
      "stepId": "uhSet",
      "key": 250,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1896,
      "stepId": "calcBf",
      "key": 250,
      "node": 200,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1897,
      "stepId": "bfReturn",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1898,
      "stepId": "caseLL",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1899,
      "stepId": "caseRR",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1900,
      "stepId": "rotateLeftRR",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1901,
      "stepId": "rotL_y",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1902,
      "stepId": "rotL_T2",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1903,
      "stepId": "rotL_yLeft",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1904,
      "stepId": "rotL_zRight",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1905,
      "stepId": "rotL_updZ",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1906,
      "stepId": "uhHl",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1907,
      "stepId": "uhHr",
      "key": 250,
      "node": 200,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1908,
      "stepId": "uhSet",
      "key": 250,
      "node": 200,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1909,
      "stepId": "rotL_updY",
      "key": 250,
      "node": 200,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1910,
      "stepId": "uhHl",
      "key": 250,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 1,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1911,
      "stepId": "uhHr",
      "key": 250,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1912,
      "stepId": "uhSet",
      "key": 250,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1913,
      "stepId": "rotL_return",
      "key": 250,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 210,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1914,
      "stepId": "updateHeight",
      "key": 250,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1915,
      "stepId": "uhHl",
      "key": 250,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1916,
      "stepId": "uhHr",
      "key": 250,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1917,
      "stepId": "uhSet",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1918,
      "stepId": "calcBf",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1919,
      "stepId": "bfReturn",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1920,
      "stepId": "caseLL",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1921,
      "stepId": "caseRR",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1922,
      "stepId": "caseLR",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1923,
      "stepId": "caseRL",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1924,
      "stepId": "returnNode",
      "key": 250,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1925,
      "stepId": "updateHeight",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1926,
      "stepId": "uhHl",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1927,
      "stepId": "uhHr",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1928,
      "stepId": "uhSet",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1929,
      "stepId": "calcBf",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1930,
      "stepId": "bfReturn",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1931,
      "stepId": "caseLL",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1932,
      "stepId": "caseRR",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1933,
      "stepId": "caseLR",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1934,
      "stepId": "caseRL",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 1935,
      "stepId": "returnNode",
      "key": 250,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1936,
      "stepId": "mainLoop",
      "key": 280,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1937,
      "stepId": "callInsert",
      "key": 280,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1938,
      "stepId": "checkNull",
      "key": 280,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1939,
      "stepId": "checkLess",
      "key": 280,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1940,
      "stepId": "checkGreater",
      "key": 280,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1941,
      "stepId": "goRight",
      "key": 280,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1942,
      "stepId": "checkNull",
      "key": 280,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1943,
      "stepId": "checkLess",
      "key": 280,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1944,
      "stepId": "checkGreater",
      "key": 280,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1945,
      "stepId": "goRight",
      "key": 280,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1946,
      "stepId": "checkNull",
      "key": 280,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1947,
      "stepId": "checkLess",
      "key": 280,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1948,
      "stepId": "checkGreater",
      "key": 280,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1949,
      "stepId": "goRight",
      "key": 280,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1950,
      "stepId": "checkNull",
      "key": 280,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1951,
      "stepId": "checkLess",
      "key": 280,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1952,
      "stepId": "checkGreater",
      "key": 280,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1953,
      "stepId": "goRight",
      "key": 280,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1954,
      "stepId": "checkNull",
      "key": 280,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1955,
      "stepId": "checkLess",
      "key": 280,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1956,
      "stepId": "goLeft",
      "key": 280,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1957,
      "stepId": "checkNull",
      "key": 280,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1958,
      "stepId": "returnNew",
      "key": 280,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1959,
      "stepId": "updateHeight",
      "key": 280,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1960,
      "stepId": "uhHl",
      "key": 280,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1961,
      "stepId": "uhHr",
      "key": 280,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1962,
      "stepId": "uhSet",
      "key": 280,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1963,
      "stepId": "calcBf",
      "key": 280,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1964,
      "stepId": "bfReturn",
      "key": 280,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1965,
      "stepId": "caseLL",
      "key": 280,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1966,
      "stepId": "caseRR",
      "key": 280,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1967,
      "stepId": "caseLR",
      "key": 280,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1968,
      "stepId": "caseRL",
      "key": 280,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 1969,
      "stepId": "returnNode",
      "key": 280,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1970,
      "stepId": "updateHeight",
      "key": 280,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1971,
      "stepId": "uhHl",
      "key": 280,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1972,
      "stepId": "uhHr",
      "key": 280,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1973,
      "stepId": "uhSet",
      "key": 280,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1974,
      "stepId": "calcBf",
      "key": 280,
      "node": 260,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1975,
      "stepId": "bfReturn",
      "key": 280,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1976,
      "stepId": "caseLL",
      "key": 280,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1977,
      "stepId": "caseRR",
      "key": 280,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1978,
      "stepId": "caseLR",
      "key": 280,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1979,
      "stepId": "caseRL",
      "key": 280,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 1980,
      "stepId": "returnNode",
      "key": 280,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1981,
      "stepId": "updateHeight",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1982,
      "stepId": "uhHl",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1983,
      "stepId": "uhHr",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1984,
      "stepId": "uhSet",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1985,
      "stepId": "calcBf",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1986,
      "stepId": "bfReturn",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1987,
      "stepId": "caseLL",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1988,
      "stepId": "caseRR",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1989,
      "stepId": "caseLR",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1990,
      "stepId": "caseRL",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 1991,
      "stepId": "returnNode",
      "key": 280,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1992,
      "stepId": "updateHeight",
      "key": 280,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 1993,
      "stepId": "uhHl",
      "key": 280,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1994,
      "stepId": "uhHr",
      "key": 280,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1995,
      "stepId": "uhSet",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1996,
      "stepId": "calcBf",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1997,
      "stepId": "bfReturn",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 1998,
      "stepId": "caseLL",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 1999,
      "stepId": "caseRR",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2000,
      "stepId": "caseLR",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2001,
      "stepId": "caseRL",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2002,
      "stepId": "returnNode",
      "key": 280,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2003,
      "stepId": "updateHeight",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2004,
      "stepId": "uhHl",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2005,
      "stepId": "uhHr",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2006,
      "stepId": "uhSet",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2007,
      "stepId": "calcBf",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2008,
      "stepId": "bfReturn",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2009,
      "stepId": "caseLL",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2010,
      "stepId": "caseRR",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2011,
      "stepId": "caseLR",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2012,
      "stepId": "caseRL",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2013,
      "stepId": "returnNode",
      "key": 280,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2014,
      "stepId": "mainLoop",
      "key": 270,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2015,
      "stepId": "callInsert",
      "key": 270,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2016,
      "stepId": "checkNull",
      "key": 270,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2017,
      "stepId": "checkLess",
      "key": 270,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2018,
      "stepId": "checkGreater",
      "key": 270,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2019,
      "stepId": "goRight",
      "key": 270,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2020,
      "stepId": "checkNull",
      "key": 270,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2021,
      "stepId": "checkLess",
      "key": 270,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2022,
      "stepId": "checkGreater",
      "key": 270,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2023,
      "stepId": "goRight",
      "key": 270,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2024,
      "stepId": "checkNull",
      "key": 270,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2025,
      "stepId": "checkLess",
      "key": 270,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2026,
      "stepId": "checkGreater",
      "key": 270,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2027,
      "stepId": "goRight",
      "key": 270,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2028,
      "stepId": "checkNull",
      "key": 270,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2029,
      "stepId": "checkLess",
      "key": 270,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2030,
      "stepId": "checkGreater",
      "key": 270,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2031,
      "stepId": "goRight",
      "key": 270,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2032,
      "stepId": "checkNull",
      "key": 270,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2033,
      "stepId": "checkLess",
      "key": 270,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2034,
      "stepId": "goLeft",
      "key": 270,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2035,
      "stepId": "checkNull",
      "key": 270,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2036,
      "stepId": "checkLess",
      "key": 270,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2037,
      "stepId": "goLeft",
      "key": 270,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2038,
      "stepId": "checkNull",
      "key": 270,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2039,
      "stepId": "returnNew",
      "key": 270,
      "node": 270,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2040,
      "stepId": "updateHeight",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2041,
      "stepId": "uhHl",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2042,
      "stepId": "uhHr",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2043,
      "stepId": "uhSet",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2044,
      "stepId": "calcBf",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2045,
      "stepId": "bfReturn",
      "key": 270,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2046,
      "stepId": "caseLL",
      "key": 270,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2047,
      "stepId": "caseRR",
      "key": 270,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2048,
      "stepId": "caseLR",
      "key": 270,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2049,
      "stepId": "caseRL",
      "key": 270,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2050,
      "stepId": "returnNode",
      "key": 270,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2051,
      "stepId": "updateHeight",
      "key": 270,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2052,
      "stepId": "uhHl",
      "key": 270,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2053,
      "stepId": "uhHr",
      "key": 270,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2054,
      "stepId": "uhSet",
      "key": 270,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2055,
      "stepId": "calcBf",
      "key": 270,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2056,
      "stepId": "bfReturn",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2057,
      "stepId": "caseLL",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2058,
      "stepId": "rotateRightLL",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": null,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2059,
      "stepId": "rotR_y",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": 280,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2060,
      "stepId": "rotR_T2",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": 280,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2061,
      "stepId": "rotR_yRight",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": 280,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2062,
      "stepId": "rotR_zLeft",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": 280,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2063,
      "stepId": "rotR_updZ",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": 280,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2064,
      "stepId": "uhHl",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": 280,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2065,
      "stepId": "uhHr",
      "key": 270,
      "node": 290,
      "bf": 2,
      "case": "LL",
      "new_root": 280,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2066,
      "stepId": "uhSet",
      "key": 270,
      "node": 290,
      "bf": 0,
      "case": "LL",
      "new_root": 280,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2067,
      "stepId": "rotR_updY",
      "key": 270,
      "node": 290,
      "bf": 0,
      "case": "LL",
      "new_root": 280,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2068,
      "stepId": "uhHl",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": "LL",
      "new_root": 280,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2069,
      "stepId": "uhHr",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": "LL",
      "new_root": 280,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2070,
      "stepId": "uhSet",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": "LL",
      "new_root": 280,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2071,
      "stepId": "rotR_return",
      "key": 270,
      "node": 280,
      "bf": 0,
      "case": "LL",
      "new_root": 280,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2072,
      "stepId": "updateHeight",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2073,
      "stepId": "uhHl",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2074,
      "stepId": "uhHr",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2075,
      "stepId": "uhSet",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2076,
      "stepId": "calcBf",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2077,
      "stepId": "bfReturn",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2078,
      "stepId": "caseLL",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2079,
      "stepId": "caseRR",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2080,
      "stepId": "caseLR",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2081,
      "stepId": "caseRL",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2082,
      "stepId": "returnNode",
      "key": 270,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2083,
      "stepId": "updateHeight",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2084,
      "stepId": "uhHl",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2085,
      "stepId": "uhHr",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2086,
      "stepId": "uhSet",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2087,
      "stepId": "calcBf",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2088,
      "stepId": "bfReturn",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2089,
      "stepId": "caseLL",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2090,
      "stepId": "caseRR",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2091,
      "stepId": "caseLR",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2092,
      "stepId": "caseRL",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2093,
      "stepId": "returnNode",
      "key": 270,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2094,
      "stepId": "updateHeight",
      "key": 270,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2095,
      "stepId": "uhHl",
      "key": 270,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2096,
      "stepId": "uhHr",
      "key": 270,
      "node": 160,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2097,
      "stepId": "uhSet",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2098,
      "stepId": "calcBf",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2099,
      "stepId": "bfReturn",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2100,
      "stepId": "caseLL",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2101,
      "stepId": "caseRR",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2102,
      "stepId": "caseLR",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2103,
      "stepId": "caseRL",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2104,
      "stepId": "returnNode",
      "key": 270,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2105,
      "stepId": "updateHeight",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2106,
      "stepId": "uhHl",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2107,
      "stepId": "uhHr",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2108,
      "stepId": "uhSet",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2109,
      "stepId": "calcBf",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2110,
      "stepId": "bfReturn",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2111,
      "stepId": "caseLL",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2112,
      "stepId": "caseRR",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2113,
      "stepId": "caseLR",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2114,
      "stepId": "caseRL",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2115,
      "stepId": "returnNode",
      "key": 270,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2116,
      "stepId": "mainLoop",
      "key": 320,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2117,
      "stepId": "callInsert",
      "key": 320,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2118,
      "stepId": "checkNull",
      "key": 320,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2119,
      "stepId": "checkLess",
      "key": 320,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2120,
      "stepId": "checkGreater",
      "key": 320,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2121,
      "stepId": "goRight",
      "key": 320,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2122,
      "stepId": "checkNull",
      "key": 320,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2123,
      "stepId": "checkLess",
      "key": 320,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2124,
      "stepId": "checkGreater",
      "key": 320,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2125,
      "stepId": "goRight",
      "key": 320,
      "node": 160,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2126,
      "stepId": "checkNull",
      "key": 320,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2127,
      "stepId": "checkLess",
      "key": 320,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2128,
      "stepId": "checkGreater",
      "key": 320,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2129,
      "stepId": "goRight",
      "key": 320,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2130,
      "stepId": "checkNull",
      "key": 320,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2131,
      "stepId": "checkLess",
      "key": 320,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2132,
      "stepId": "checkGreater",
      "key": 320,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2133,
      "stepId": "goRight",
      "key": 320,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2134,
      "stepId": "checkNull",
      "key": 320,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2135,
      "stepId": "checkLess",
      "key": 320,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2136,
      "stepId": "checkGreater",
      "key": 320,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2137,
      "stepId": "goRight",
      "key": 320,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2138,
      "stepId": "checkNull",
      "key": 320,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2139,
      "stepId": "checkLess",
      "key": 320,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2140,
      "stepId": "checkGreater",
      "key": 320,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2141,
      "stepId": "goRight",
      "key": 320,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2142,
      "stepId": "checkNull",
      "key": 320,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2143,
      "stepId": "returnNew",
      "key": 320,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2144,
      "stepId": "updateHeight",
      "key": 320,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2145,
      "stepId": "uhHl",
      "key": 320,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2146,
      "stepId": "uhHr",
      "key": 320,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2147,
      "stepId": "uhSet",
      "key": 320,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2148,
      "stepId": "calcBf",
      "key": 320,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2149,
      "stepId": "bfReturn",
      "key": 320,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2150,
      "stepId": "caseLL",
      "key": 320,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2151,
      "stepId": "caseRR",
      "key": 320,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2152,
      "stepId": "caseLR",
      "key": 320,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2153,
      "stepId": "caseRL",
      "key": 320,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2154,
      "stepId": "returnNode",
      "key": 320,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2155,
      "stepId": "updateHeight",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2156,
      "stepId": "uhHl",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2157,
      "stepId": "uhHr",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2158,
      "stepId": "uhSet",
      "key": 320,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2159,
      "stepId": "calcBf",
      "key": 320,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2160,
      "stepId": "bfReturn",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2161,
      "stepId": "caseLL",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2162,
      "stepId": "caseRR",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2163,
      "stepId": "caseLR",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2164,
      "stepId": "caseRL",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2165,
      "stepId": "returnNode",
      "key": 320,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2166,
      "stepId": "updateHeight",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2167,
      "stepId": "uhHl",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2168,
      "stepId": "uhHr",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2169,
      "stepId": "uhSet",
      "key": 320,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2170,
      "stepId": "calcBf",
      "key": 320,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2171,
      "stepId": "bfReturn",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2172,
      "stepId": "caseLL",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2173,
      "stepId": "caseRR",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2174,
      "stepId": "caseLR",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2175,
      "stepId": "caseRL",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2176,
      "stepId": "returnNode",
      "key": 320,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2177,
      "stepId": "updateHeight",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2178,
      "stepId": "uhHl",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2179,
      "stepId": "uhHr",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2180,
      "stepId": "uhSet",
      "key": 320,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2181,
      "stepId": "calcBf",
      "key": 320,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2182,
      "stepId": "bfReturn",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2183,
      "stepId": "caseLL",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2184,
      "stepId": "caseRR",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2185,
      "stepId": "caseLR",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2186,
      "stepId": "caseRL",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2187,
      "stepId": "returnNode",
      "key": 320,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2188,
      "stepId": "updateHeight",
      "key": 320,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2189,
      "stepId": "uhHl",
      "key": 320,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2190,
      "stepId": "uhHr",
      "key": 320,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2191,
      "stepId": "uhSet",
      "key": 320,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2192,
      "stepId": "calcBf",
      "key": 320,
      "node": 160,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2193,
      "stepId": "bfReturn",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2194,
      "stepId": "caseLL",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2195,
      "stepId": "caseRR",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2196,
      "stepId": "rotateLeftRR",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2197,
      "stepId": "rotL_y",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2198,
      "stepId": "rotL_T2",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2199,
      "stepId": "rotL_yLeft",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2200,
      "stepId": "rotL_zRight",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2201,
      "stepId": "rotL_updZ",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2202,
      "stepId": "uhHl",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 4,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2203,
      "stepId": "uhHr",
      "key": 320,
      "node": 160,
      "bf": -2,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2204,
      "stepId": "uhSet",
      "key": 320,
      "node": 160,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2205,
      "stepId": "rotL_updY",
      "key": 320,
      "node": 160,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2206,
      "stepId": "uhHl",
      "key": 320,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 3,
      "height_right": 2,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2207,
      "stepId": "uhHr",
      "key": 320,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2208,
      "stepId": "uhSet",
      "key": 320,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2209,
      "stepId": "rotL_return",
      "key": 320,
      "node": 230,
      "bf": 0,
      "case": "RR",
      "new_root": 230,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "temp": 200,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2210,
      "stepId": "updateHeight",
      "key": 320,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2211,
      "stepId": "uhHl",
      "key": 320,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2212,
      "stepId": "uhHr",
      "key": 320,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2213,
      "stepId": "uhSet",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2214,
      "stepId": "calcBf",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2215,
      "stepId": "bfReturn",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2216,
      "stepId": "caseLL",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2217,
      "stepId": "caseRR",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2218,
      "stepId": "caseLR",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2219,
      "stepId": "caseRL",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2220,
      "stepId": "returnNode",
      "key": 320,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2221,
      "stepId": "mainLoop",
      "key": 310,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2222,
      "stepId": "callInsert",
      "key": 310,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2223,
      "stepId": "checkNull",
      "key": 310,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2224,
      "stepId": "checkLess",
      "key": 310,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2225,
      "stepId": "checkGreater",
      "key": 310,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2226,
      "stepId": "goRight",
      "key": 310,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2227,
      "stepId": "checkNull",
      "key": 310,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2228,
      "stepId": "checkLess",
      "key": 310,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2229,
      "stepId": "checkGreater",
      "key": 310,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2230,
      "stepId": "goRight",
      "key": 310,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2231,
      "stepId": "checkNull",
      "key": 310,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2232,
      "stepId": "checkLess",
      "key": 310,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2233,
      "stepId": "checkGreater",
      "key": 310,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2234,
      "stepId": "goRight",
      "key": 310,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2235,
      "stepId": "checkNull",
      "key": 310,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2236,
      "stepId": "checkLess",
      "key": 310,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2237,
      "stepId": "checkGreater",
      "key": 310,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2238,
      "stepId": "goRight",
      "key": 310,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2239,
      "stepId": "checkNull",
      "key": 310,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2240,
      "stepId": "checkLess",
      "key": 310,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2241,
      "stepId": "checkGreater",
      "key": 310,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2242,
      "stepId": "goRight",
      "key": 310,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2243,
      "stepId": "checkNull",
      "key": 310,
      "node": 320,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2244,
      "stepId": "checkLess",
      "key": 310,
      "node": 320,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2245,
      "stepId": "goLeft",
      "key": 310,
      "node": 320,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2246,
      "stepId": "checkNull",
      "key": 310,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2247,
      "stepId": "returnNew",
      "key": 310,
      "node": 310,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2248,
      "stepId": "updateHeight",
      "key": 310,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2249,
      "stepId": "uhHl",
      "key": 310,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2250,
      "stepId": "uhHr",
      "key": 310,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2251,
      "stepId": "uhSet",
      "key": 310,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2252,
      "stepId": "calcBf",
      "key": 310,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2253,
      "stepId": "bfReturn",
      "key": 310,
      "node": 320,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2254,
      "stepId": "caseLL",
      "key": 310,
      "node": 320,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2255,
      "stepId": "caseRR",
      "key": 310,
      "node": 320,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2256,
      "stepId": "caseLR",
      "key": 310,
      "node": 320,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2257,
      "stepId": "caseRL",
      "key": 310,
      "node": 320,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": -1,
      "root": 110
    },
    {
      "step": 2258,
      "stepId": "returnNode",
      "key": 310,
      "node": 320,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2259,
      "stepId": "updateHeight",
      "key": 310,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2260,
      "stepId": "uhHl",
      "key": 310,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2261,
      "stepId": "uhHr",
      "key": 310,
      "node": 290,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2262,
      "stepId": "uhSet",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2263,
      "stepId": "calcBf",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2264,
      "stepId": "bfReturn",
      "key": 310,
      "node": 290,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2265,
      "stepId": "caseLL",
      "key": 310,
      "node": 290,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2266,
      "stepId": "caseRR",
      "key": 310,
      "node": 290,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2267,
      "stepId": "caseLR",
      "key": 310,
      "node": 290,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2268,
      "stepId": "caseRL",
      "key": 310,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2269,
      "stepId": "rotateRightRL",
      "key": 310,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2270,
      "stepId": "rotR_y",
      "key": 310,
      "node": 320,
      "bf": -2,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2271,
      "stepId": "rotR_T2",
      "key": 310,
      "node": 320,
      "bf": -2,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2272,
      "stepId": "rotR_yRight",
      "key": 310,
      "node": 320,
      "bf": -2,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2273,
      "stepId": "rotR_zLeft",
      "key": 310,
      "node": 320,
      "bf": -2,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2274,
      "stepId": "rotR_updZ",
      "key": 310,
      "node": 320,
      "bf": -2,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2275,
      "stepId": "uhHl",
      "key": 310,
      "node": 320,
      "bf": -2,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2276,
      "stepId": "uhHr",
      "key": 310,
      "node": 320,
      "bf": -2,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2277,
      "stepId": "uhSet",
      "key": 310,
      "node": 320,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2278,
      "stepId": "rotR_updY",
      "key": 310,
      "node": 320,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2279,
      "stepId": "uhHl",
      "key": 310,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2280,
      "stepId": "uhHr",
      "key": 310,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2281,
      "stepId": "uhSet",
      "key": 310,
      "node": 310,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2282,
      "stepId": "rotR_return",
      "key": 310,
      "node": 310,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2283,
      "stepId": "rotateLeftRL",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2284,
      "stepId": "rotL_y",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2285,
      "stepId": "rotL_T2",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2286,
      "stepId": "rotL_yLeft",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2287,
      "stepId": "rotL_zRight",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2288,
      "stepId": "rotL_updZ",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2289,
      "stepId": "uhHl",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2290,
      "stepId": "uhHr",
      "key": 310,
      "node": 290,
      "bf": -1,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2291,
      "stepId": "uhSet",
      "key": 310,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2292,
      "stepId": "rotL_updY",
      "key": 310,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": -1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2293,
      "stepId": "uhHl",
      "key": 310,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2294,
      "stepId": "uhHr",
      "key": 310,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2295,
      "stepId": "uhSet",
      "key": 310,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2296,
      "stepId": "rotL_return",
      "key": 310,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 310,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2297,
      "stepId": "updateHeight",
      "key": 310,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2298,
      "stepId": "uhHl",
      "key": 310,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2299,
      "stepId": "uhHr",
      "key": 310,
      "node": 280,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2300,
      "stepId": "uhSet",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2301,
      "stepId": "calcBf",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2302,
      "stepId": "bfReturn",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2303,
      "stepId": "caseLL",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2304,
      "stepId": "caseRR",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2305,
      "stepId": "caseLR",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2306,
      "stepId": "caseRL",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2307,
      "stepId": "returnNode",
      "key": 310,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2308,
      "stepId": "updateHeight",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2309,
      "stepId": "uhHl",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2310,
      "stepId": "uhHr",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2311,
      "stepId": "uhSet",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2312,
      "stepId": "calcBf",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2313,
      "stepId": "bfReturn",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2314,
      "stepId": "caseLL",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2315,
      "stepId": "caseRR",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2316,
      "stepId": "caseLR",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2317,
      "stepId": "caseRL",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2318,
      "stepId": "returnNode",
      "key": 310,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2319,
      "stepId": "updateHeight",
      "key": 310,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2320,
      "stepId": "uhHl",
      "key": 310,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2321,
      "stepId": "uhHr",
      "key": 310,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2322,
      "stepId": "uhSet",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2323,
      "stepId": "calcBf",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2324,
      "stepId": "bfReturn",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2325,
      "stepId": "caseLL",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2326,
      "stepId": "caseRR",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2327,
      "stepId": "caseLR",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2328,
      "stepId": "caseRL",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2329,
      "stepId": "returnNode",
      "key": 310,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2330,
      "stepId": "updateHeight",
      "key": 310,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2331,
      "stepId": "uhHl",
      "key": 310,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2332,
      "stepId": "uhHr",
      "key": 310,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2333,
      "stepId": "uhSet",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2334,
      "stepId": "calcBf",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2335,
      "stepId": "bfReturn",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2336,
      "stepId": "caseLL",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2337,
      "stepId": "caseRR",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2338,
      "stepId": "caseLR",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2339,
      "stepId": "caseRL",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2340,
      "stepId": "returnNode",
      "key": 310,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2341,
      "stepId": "mainLoop",
      "key": 300,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2342,
      "stepId": "callInsert",
      "key": 300,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2343,
      "stepId": "checkNull",
      "key": 300,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2344,
      "stepId": "checkLess",
      "key": 300,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2345,
      "stepId": "checkGreater",
      "key": 300,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2346,
      "stepId": "goRight",
      "key": 300,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2347,
      "stepId": "checkNull",
      "key": 300,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2348,
      "stepId": "checkLess",
      "key": 300,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2349,
      "stepId": "checkGreater",
      "key": 300,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2350,
      "stepId": "goRight",
      "key": 300,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2351,
      "stepId": "checkNull",
      "key": 300,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2352,
      "stepId": "checkLess",
      "key": 300,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2353,
      "stepId": "checkGreater",
      "key": 300,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2354,
      "stepId": "goRight",
      "key": 300,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2355,
      "stepId": "checkNull",
      "key": 300,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2356,
      "stepId": "checkLess",
      "key": 300,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2357,
      "stepId": "checkGreater",
      "key": 300,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2358,
      "stepId": "goRight",
      "key": 300,
      "node": 280,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2359,
      "stepId": "checkNull",
      "key": 300,
      "node": 310,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2360,
      "stepId": "checkLess",
      "key": 300,
      "node": 310,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2361,
      "stepId": "goLeft",
      "key": 300,
      "node": 310,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2362,
      "stepId": "checkNull",
      "key": 300,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2363,
      "stepId": "checkLess",
      "key": 300,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2364,
      "stepId": "checkGreater",
      "key": 300,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2365,
      "stepId": "goRight",
      "key": 300,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2366,
      "stepId": "checkNull",
      "key": 300,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2367,
      "stepId": "returnNew",
      "key": 300,
      "node": 300,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2368,
      "stepId": "updateHeight",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2369,
      "stepId": "uhHl",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2370,
      "stepId": "uhHr",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2371,
      "stepId": "uhSet",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2372,
      "stepId": "calcBf",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2373,
      "stepId": "bfReturn",
      "key": 300,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2374,
      "stepId": "caseLL",
      "key": 300,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2375,
      "stepId": "caseRR",
      "key": 300,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2376,
      "stepId": "caseLR",
      "key": 300,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2377,
      "stepId": "caseRL",
      "key": 300,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2378,
      "stepId": "returnNode",
      "key": 300,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2379,
      "stepId": "updateHeight",
      "key": 300,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2380,
      "stepId": "uhHl",
      "key": 300,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2381,
      "stepId": "uhHr",
      "key": 300,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2382,
      "stepId": "uhSet",
      "key": 300,
      "node": 310,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2383,
      "stepId": "calcBf",
      "key": 300,
      "node": 310,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2384,
      "stepId": "bfReturn",
      "key": 300,
      "node": 310,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2385,
      "stepId": "caseLL",
      "key": 300,
      "node": 310,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2386,
      "stepId": "caseRR",
      "key": 300,
      "node": 310,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2387,
      "stepId": "caseLR",
      "key": 300,
      "node": 310,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2388,
      "stepId": "caseRL",
      "key": 300,
      "node": 310,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2389,
      "stepId": "returnNode",
      "key": 300,
      "node": 310,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2390,
      "stepId": "updateHeight",
      "key": 300,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2391,
      "stepId": "uhHl",
      "key": 300,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2392,
      "stepId": "uhHr",
      "key": 300,
      "node": 280,
      "bf": 1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2393,
      "stepId": "uhSet",
      "key": 300,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2394,
      "stepId": "calcBf",
      "key": 300,
      "node": 280,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2395,
      "stepId": "bfReturn",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2396,
      "stepId": "caseLL",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2397,
      "stepId": "caseRR",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2398,
      "stepId": "caseLR",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2399,
      "stepId": "caseRL",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2400,
      "stepId": "rotateRightRL",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": null,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2401,
      "stepId": "rotR_y",
      "key": 300,
      "node": 310,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2402,
      "stepId": "rotR_T2",
      "key": 300,
      "node": 310,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2403,
      "stepId": "rotR_yRight",
      "key": 300,
      "node": 310,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2404,
      "stepId": "rotR_zLeft",
      "key": 300,
      "node": 310,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2405,
      "stepId": "rotR_updZ",
      "key": 300,
      "node": 310,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2406,
      "stepId": "uhHl",
      "key": 300,
      "node": 310,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 2,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2407,
      "stepId": "uhHr",
      "key": 300,
      "node": 310,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2408,
      "stepId": "uhSet",
      "key": 300,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2409,
      "stepId": "rotR_updY",
      "key": 300,
      "node": 310,
      "bf": 0,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 0,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2410,
      "stepId": "uhHl",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2411,
      "stepId": "uhHr",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2412,
      "stepId": "uhSet",
      "key": 300,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2413,
      "stepId": "rotR_return",
      "key": 300,
      "node": 290,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2414,
      "stepId": "rotateLeftRL",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2415,
      "stepId": "rotL_y",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2416,
      "stepId": "rotL_T2",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2417,
      "stepId": "rotL_yLeft",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2418,
      "stepId": "rotL_zRight",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2419,
      "stepId": "rotL_updZ",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": -1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2420,
      "stepId": "uhHl",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2421,
      "stepId": "uhHr",
      "key": 300,
      "node": 280,
      "bf": -2,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2422,
      "stepId": "uhSet",
      "key": 300,
      "node": 280,
      "bf": 1,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2423,
      "stepId": "rotL_updY",
      "key": 300,
      "node": 280,
      "bf": 1,
      "case": "RL",
      "new_root": 290,
      "height_left": 0,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2424,
      "stepId": "uhHl",
      "key": 300,
      "node": 290,
      "bf": 1,
      "case": "RL",
      "new_root": 290,
      "height_left": 1,
      "height_right": -1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2425,
      "stepId": "uhHr",
      "key": 300,
      "node": 290,
      "bf": 1,
      "case": "RL",
      "new_root": 290,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2426,
      "stepId": "uhSet",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 290,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2427,
      "stepId": "rotL_return",
      "key": 300,
      "node": 290,
      "bf": 0,
      "case": "RL",
      "new_root": 290,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": null,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2428,
      "stepId": "updateHeight",
      "key": 300,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2429,
      "stepId": "uhHl",
      "key": 300,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2430,
      "stepId": "uhHr",
      "key": 300,
      "node": 260,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2431,
      "stepId": "uhSet",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2432,
      "stepId": "calcBf",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2433,
      "stepId": "bfReturn",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2434,
      "stepId": "caseLL",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2435,
      "stepId": "caseRR",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2436,
      "stepId": "caseLR",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2437,
      "stepId": "caseRL",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2438,
      "stepId": "returnNode",
      "key": 300,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2439,
      "stepId": "updateHeight",
      "key": 300,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2440,
      "stepId": "uhHl",
      "key": 300,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2441,
      "stepId": "uhHr",
      "key": 300,
      "node": 230,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2442,
      "stepId": "uhSet",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2443,
      "stepId": "calcBf",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2444,
      "stepId": "bfReturn",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2445,
      "stepId": "caseLL",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2446,
      "stepId": "caseRR",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2447,
      "stepId": "caseLR",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2448,
      "stepId": "caseRL",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2449,
      "stepId": "returnNode",
      "key": 300,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2450,
      "stepId": "updateHeight",
      "key": 300,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2451,
      "stepId": "uhHl",
      "key": 300,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2452,
      "stepId": "uhHr",
      "key": 300,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2453,
      "stepId": "uhSet",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2454,
      "stepId": "calcBf",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2455,
      "stepId": "bfReturn",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2456,
      "stepId": "caseLL",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2457,
      "stepId": "caseRR",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2458,
      "stepId": "caseLR",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2459,
      "stepId": "caseRL",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2460,
      "stepId": "returnNode",
      "key": 300,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2461,
      "stepId": "mainLoop",
      "key": 330,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2462,
      "stepId": "callInsert",
      "key": 330,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2463,
      "stepId": "checkNull",
      "key": 330,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2464,
      "stepId": "checkLess",
      "key": 330,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2465,
      "stepId": "checkGreater",
      "key": 330,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2466,
      "stepId": "goRight",
      "key": 330,
      "node": 110,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2467,
      "stepId": "checkNull",
      "key": 330,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2468,
      "stepId": "checkLess",
      "key": 330,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2469,
      "stepId": "checkGreater",
      "key": 330,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2470,
      "stepId": "goRight",
      "key": 330,
      "node": 230,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2471,
      "stepId": "checkNull",
      "key": 330,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2472,
      "stepId": "checkLess",
      "key": 330,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2473,
      "stepId": "checkGreater",
      "key": 330,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2474,
      "stepId": "goRight",
      "key": 330,
      "node": 260,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2475,
      "stepId": "checkNull",
      "key": 330,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2476,
      "stepId": "checkLess",
      "key": 330,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2477,
      "stepId": "checkGreater",
      "key": 330,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2478,
      "stepId": "goRight",
      "key": 330,
      "node": 290,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2479,
      "stepId": "checkNull",
      "key": 330,
      "node": 310,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2480,
      "stepId": "checkLess",
      "key": 330,
      "node": 310,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2481,
      "stepId": "checkGreater",
      "key": 330,
      "node": 310,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2482,
      "stepId": "goRight",
      "key": 330,
      "node": 310,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2483,
      "stepId": "checkNull",
      "key": 330,
      "node": 320,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2484,
      "stepId": "checkLess",
      "key": 330,
      "node": 320,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2485,
      "stepId": "checkGreater",
      "key": 330,
      "node": 320,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2486,
      "stepId": "goRight",
      "key": 330,
      "node": 320,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2487,
      "stepId": "checkNull",
      "key": 330,
      "node": null,
      "bf": null,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2488,
      "stepId": "returnNew",
      "key": 330,
      "node": 330,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2489,
      "stepId": "updateHeight",
      "key": 330,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2490,
      "stepId": "uhHl",
      "key": 330,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2491,
      "stepId": "uhHr",
      "key": 330,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2492,
      "stepId": "uhSet",
      "key": 330,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2493,
      "stepId": "calcBf",
      "key": 330,
      "node": 320,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2494,
      "stepId": "bfReturn",
      "key": 330,
      "node": 320,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2495,
      "stepId": "caseLL",
      "key": 330,
      "node": 320,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2496,
      "stepId": "caseRR",
      "key": 330,
      "node": 320,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2497,
      "stepId": "caseLR",
      "key": 330,
      "node": 320,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2498,
      "stepId": "caseRL",
      "key": 330,
      "node": 320,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": -1,
      "height_right": 0,
      "root": 110
    },
    {
      "step": 2499,
      "stepId": "returnNode",
      "key": 330,
      "node": 320,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2500,
      "stepId": "updateHeight",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2501,
      "stepId": "uhHl",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2502,
      "stepId": "uhHr",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2503,
      "stepId": "uhSet",
      "key": 330,
      "node": 310,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2504,
      "stepId": "calcBf",
      "key": 330,
      "node": 310,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2505,
      "stepId": "bfReturn",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2506,
      "stepId": "caseLL",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2507,
      "stepId": "caseRR",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2508,
      "stepId": "caseLR",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2509,
      "stepId": "caseRL",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 0,
      "height_right": 1,
      "root": 110
    },
    {
      "step": 2510,
      "stepId": "returnNode",
      "key": 330,
      "node": 310,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2511,
      "stepId": "updateHeight",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2512,
      "stepId": "uhHl",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2513,
      "stepId": "uhHr",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2514,
      "stepId": "uhSet",
      "key": 330,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2515,
      "stepId": "calcBf",
      "key": 330,
      "node": 290,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2516,
      "stepId": "bfReturn",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2517,
      "stepId": "caseLL",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2518,
      "stepId": "caseRR",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2519,
      "stepId": "caseLR",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2520,
      "stepId": "caseRL",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 2,
      "root": 110
    },
    {
      "step": 2521,
      "stepId": "returnNode",
      "key": 330,
      "node": 290,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2522,
      "stepId": "updateHeight",
      "key": 330,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2523,
      "stepId": "uhHl",
      "key": 330,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2524,
      "stepId": "uhHr",
      "key": 330,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2525,
      "stepId": "uhSet",
      "key": 330,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2526,
      "stepId": "calcBf",
      "key": 330,
      "node": 260,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2527,
      "stepId": "bfReturn",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2528,
      "stepId": "caseLL",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": null,
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2529,
      "stepId": "caseRR",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2530,
      "stepId": "rotateLeftRR",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": null,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2531,
      "stepId": "rotL_y",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2532,
      "stepId": "rotL_T2",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2533,
      "stepId": "rotL_yLeft",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2534,
      "stepId": "rotL_zRight",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2535,
      "stepId": "rotL_updZ",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2536,
      "stepId": "uhHl",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 3,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2537,
      "stepId": "uhHr",
      "key": 330,
      "node": 260,
      "bf": -2,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2538,
      "stepId": "uhSet",
      "key": 330,
      "node": 260,
      "bf": 0,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2539,
      "stepId": "rotL_updY",
      "key": 330,
      "node": 260,
      "bf": 0,
      "case": "RR",
      "new_root": 290,
      "height_left": 1,
      "height_right": 1,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2540,
      "stepId": "uhHl",
      "key": 330,
      "node": 290,
      "bf": 0,
      "case": "RR",
      "new_root": 290,
      "height_left": 2,
      "height_right": 1,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2541,
      "stepId": "uhHr",
      "key": 330,
      "node": 290,
      "bf": 0,
      "case": "RR",
      "new_root": 290,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2542,
      "stepId": "uhSet",
      "key": 330,
      "node": 290,
      "bf": 0,
      "case": "RR",
      "new_root": 290,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2543,
      "stepId": "rotL_return",
      "key": 330,
      "node": 290,
      "bf": 0,
      "case": "RR",
      "new_root": 290,
      "height_left": 2,
      "height_right": 2,
      "root": 110,
      "temp": 280,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2544,
      "stepId": "updateHeight",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2545,
      "stepId": "uhHl",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2546,
      "stepId": "uhHr",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2547,
      "stepId": "uhSet",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2548,
      "stepId": "calcBf",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2549,
      "stepId": "bfReturn",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2550,
      "stepId": "caseLL",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2551,
      "stepId": "caseRR",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2552,
      "stepId": "caseLR",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2553,
      "stepId": "caseRL",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 3,
      "root": 110
    },
    {
      "step": 2554,
      "stepId": "returnNode",
      "key": 330,
      "node": 230,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2555,
      "stepId": "updateHeight",
      "key": 330,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2556,
      "stepId": "uhHl",
      "key": 330,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": null,
      "root": 110
    },
    {
      "step": 2557,
      "stepId": "uhHr",
      "key": 330,
      "node": 110,
      "bf": 0,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2558,
      "stepId": "uhSet",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2559,
      "stepId": "calcBf",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2560,
      "stepId": "bfReturn",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2561,
      "stepId": "caseLL",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 2562,
      "stepId": "caseRR",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2563,
      "stepId": "caseLR",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2564,
      "stepId": "caseRL",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": 3,
      "height_right": 4,
      "root": 110
    },
    {
      "step": 2565,
      "stepId": "returnNode",
      "key": 330,
      "node": 110,
      "bf": -1,
      "case": null,
      "new_root": null,
      "height_left": null,
      "height_right": null,
      "root": 110
    }
  ],
  "meta": {
    "totalRows": 2565,
    "blankRows": 641,
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
