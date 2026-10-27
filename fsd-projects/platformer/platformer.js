// PLATFORMER — STUDENT WORKSPACE
// =============================================================
// Students: make your changes ONLY in this section.
// You do not need to scroll through or edit the game engine below.
// =============================================================


// GAME SETTINGS

const walkAcceleration = 2.5; // how much is added to horizontal speed each frame
const gravity = 0.5; // how much is added to vertical speed each frame
const friction = 1.5; // how much the player is slowed each frame
const maxSpeed = 8; // maximum horizontal speed
const playerJumpStrength = 12; // jump strength
const projectileSpeed = 8; // projectile speed

let shouldDrawGrid = false;
let gridMade = false;


// =============================================================
// BUILD YOUR LEVEL
// =============================================================

function setup() {

  // TODO 1 - Enable the Grid
  toggleGrid();


  // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290)
createPlatform(300, 650, 400, 20)
createPlatform(700, 400, 20, 290)
createPlatform(500, 550, 400, 20)
createPlatform(800, 300, 700, 20)
createPlatform(900, 400, 500, 500)
createPlatform(650, 500, 650, 20)
  // TODO 3 - Create Collectables
createCollectable("database", 1350, 50);
createCollectable("diamond", 400, 600);


  // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("right", 320, 2000);
createCannon("top", 300, 700);
}


// =============================================================
// END OF STUDENT WORKSPACE
// DO NOT CHANGE THE GAME ENGINE BELOW THIS LINE
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// =============================================================
// DO NOT CHANGE THE GAME ENGINE BELOW THIS LINE



const HALLE_ANIMATION_DATA = (() => {
  const keys = ["sx","sy","width","height","hitWidth","hitHeight","hitDx","hitDy","xoffset","yoffset"];
  const packed = "duck~113,68~0,0,70,113,50,105,17,6,15,7;71,0,70,113,50,105,17,6,15,6;142,0,70,113,50,105,17,6,14,4;213,0,70,113,50,105,17,6,8,29;284,0,70,113,50,105,17,6,0,54;355,0,70,113,50,105,17,6,0,44;426,0,70,113,50,105,17,6,0,35;497,0,70,113,50,105,17,6,0,35;568,0,70,113,50,105,17,6,0,35;639,0,70,113,50,105,17,6,0,35;710,0,70,113,50,105,17,6,0,35;781,0,70,113,50,105,17,6,0,35;852,0,70,113,50,105,17,6,0,35;923,0,70,113,50,105,17,6,0,35;994,0,70,113,50,105,17,6,0,35;1065,0,70,113,50,105,17,6,0,35;1136,0,70,113,50,105,17,6,0,35;1207,0,70,113,50,105,17,6,0,25;1278,0,70,113,50,105,17,6,0,25;1349,0,70,113,50,105,17,6,0,25;1420,0,70,113,50,105,17,6,12,16;1491,0,70,113,50,105,17,6,15,7;1562,0,70,113,50,105,17,6,18,0;1633,0,70,113,50,105,17,6,17,2;1704,0,70,113,50,105,17,6,16,4;1775,0,70,113,50,105,17,6,16,6;1846,0,70,113,50,105,17,6,15,7;1917,0,70,113,50,105,17,6,15,7|flying-jump~122,82~0,125,101,159,50,1"
    + "05,19,35,5,34;102,125,101,159,50,105,19,35,6,38;204,125,101,159,50,105,19,35,0,41;306,125,101,159,50,105,19,35,0,42;408,125,101,159,50,105,19,35,7,27;510,125,101,159,50,105,19,35,13,13;612,125,101,159,50,105,19,35,15,14;714,125,101,159,50,105,19,35,14,35;816,125,101,159,50,105,19,35,14,35;918,125,101,159,50,105,19,35,14,35;1020,125,101,159,50,105,19,35,14,35;1122,125,101,159,50,105,19,35,13,35;1224,125,101,159,50,105,19,35,13,35;1326,125,101,159,50,105,19,35,13,35;1428,125,101,159,50,105,19,35,13,35;1530,125,101,159,50,105,19,35,13,35;1632,125,101,159,50,105,19,35,13,35;1734,125,101,159,50,105,19,35,13,35;1836,125,101,159,50,105,19,35,13,35;1938,125,101,159,50,105,19,35,13,35;2040,125,101,159,50,105,19,35,13,36;2142,125,101,159,50,105,19,35,13,35;2244,125,101,159,50,105,19,35,13,36;2346,125,101,159,50,105,19,35,13,35;2448,125,101,159,50,105,19,35,13,35;2550,125,101,159,50,105,19,35,14,36"
    + ";2652,125,101,159,50,105,19,35,14,35;2754,125,101,159,50,105,19,35,14,35;0,289,101,159,50,105,19,35,14,35;102,289,101,159,50,105,19,35,14,35;204,289,101,159,50,105,19,35,14,35;306,289,101,159,50,105,19,35,14,35;408,289,101,159,50,105,19,35,35,28;510,289,101,159,50,105,19,35,31,35;612,289,101,159,50,105,19,35,24,49;714,289,101,159,50,105,19,35,22,43;816,289,101,159,50,105,19,35,18,40;918,289,101,159,50,105,19,35,19,28;1020,289,101,159,50,105,19,35,20,17;1122,289,101,159,50,105,19,35,28,26;1224,289,101,159,50,105,19,35,33,40;1326,289,101,159,50,105,19,35,7,54;1428,289,101,159,50,105,19,35,4,67;1530,289,101,159,50,105,19,35,5,60;1632,289,101,159,50,105,19,35,5,51;1734,289,101,159,50,105,19,35,5,42;1836,289,101,159,50,105,19,35,6,34;1938,289,101,159,50,105,19,35,5,34|front-death~206,274~0,450,291,301,50,105,115,98,97,96;292,450,291,301,50,105,115,98,96,107;584,450,291,301,50,105,115,98,94,11"
    + "9;876,450,291,301,50,105,115,98,92,129;1168,450,291,301,50,105,115,98,93,126;1460,450,291,301,50,105,115,98,92,129;1752,450,291,301,50,105,115,98,93,126;2044,450,291,301,50,105,115,98,97,116;2336,450,291,301,50,105,115,98,95,122;2628,450,291,301,50,105,115,98,104,100;0,756,291,301,50,105,115,98,100,109;292,756,291,301,50,105,115,98,108,89;584,756,291,301,50,105,115,98,104,100;876,756,291,301,50,105,115,98,104,71;1168,756,291,301,50,105,115,98,95,66;1460,756,291,301,50,105,115,98,67,62;1752,756,291,301,50,105,115,98,47,52;2044,756,291,301,50,105,115,98,47,52;2336,756,291,301,50,105,115,98,42,37;2628,756,291,301,50,105,115,98,42,37;0,1062,291,301,50,105,115,98,31,27;292,1062,291,301,50,105,115,98,31,27;584,1062,291,301,50,105,115,98,27,15;876,1062,291,301,50,105,115,98,19,15;1168,1062,291,301,50,105,115,98,12,13;1460,1062,291,301,50,105,115,98,21,13;1752,1062,291,301,50,105,115,98,15,11;20"
        + "44,1062,291,301,50,105,115,98,11,11;2336,1062,291,301,50,105,115,98,27,9;2628,1062,291,301,50,105,115,98,21,9;0,1368,291,301,50,105,115,98,16,9;292,1368,291,301,50,105,115,98,13,9;584,1368,291,301,50,105,115,98,22,6;876,1368,291,301,50,105,115,98,22,6;1168,1368,291,301,50,105,115,98,19,3;1460,1368,291,301,50,105,115,98,19,3;1752,1368,291,301,50,105,115,98,21,3;2044,1368,291,301,50,105,115,98,21,3;2336,1368,291,301,50,105,115,98,22,1;2628,1368,291,301,50,105,115,98,22,1;0,1674,291,301,50,105,115,98,26,1;292,1674,291,301,50,105,115,98,26,1;584,1674,291,301,50,105,115,98,69,0;876,1674,291,301,50,105,115,98,69,0;1168,1674,291,301,50,105,115,98,70,3;1460,1674,291,301,50,105,115,98,70,3|front-idle~106,89~0,1980,89,106,50,105,18,2,0,0;90,1980,89,106,50,105,18,2,0,0;180,1980,89,106,50,105,18,2,0,0;270,1980,89,106,50,105,18,2,0,0;360,1980,89,106,50,105,18,2,0,0;450,1980,89,106,50,105,18,2,0,0;540"
    + ",1980,89,106,50,105,18,2,0,0;630,1980,89,106,50,105,18,2,0,0;720,1980,89,106,50,105,18,2,0,0;810,1980,89,106,50,105,18,2,0,0;900,1980,89,106,50,105,18,2,0,0;990,1980,89,106,50,105,18,2,0,0;1080,1980,89,106,50,105,18,2,0,0;1170,1980,89,106,50,105,18,2,0,0;1260,1980,89,106,50,105,18,2,0,0;1350,1980,89,106,50,105,18,2,0,0;1440,1980,89,106,50,105,18,2,0,0;1530,1980,89,106,50,105,18,2,0,0;1620,1980,89,106,50,105,18,2,0,0;1710,1980,89,106,50,105,18,2,0,0;1800,1980,89,106,50,105,18,2,0,0;1890,1980,89,106,50,105,18,2,0,0;1980,1980,89,106,50,105,18,2,0,0;2070,1980,89,106,50,105,18,2,0,0;2160,1980,89,106,50,105,18,2,0,0;2250,1980,89,106,50,105,18,2,0,0;2340,1980,89,106,50,105,18,2,0,0;2430,1980,89,106,50,105,18,2,0,0;2520,1980,89,106,50,105,18,2,0,0;2610,1980,89,106,50,105,18,2,0,0;2700,1980,89,106,50,105,18,2,0,0;2790,1980,89,106,50,105,18,2,0,0;0,2091,89,106,50,105,18,2,0,0;90,2091,89,106,50,105"
    + ",18,2,0,0;180,2091,89,106,50,105,18,2,0,0;270,2091,89,106,50,105,18,2,0,1;360,2091,89,106,50,105,18,2,0,1;450,2091,89,106,50,105,18,2,0,2;540,2091,89,106,50,105,18,2,0,3;630,2091,89,106,50,105,18,2,0,3;720,2091,89,106,50,105,18,2,0,3;810,2091,89,106,50,105,18,2,0,2;900,2091,89,106,50,105,18,2,0,1;990,2091,89,106,50,105,18,2,0,0;1080,2091,89,106,50,105,18,2,0,0;1170,2091,89,106,50,105,18,2,0,0;1260,2091,89,106,50,105,18,2,0,0;1350,2091,89,106,50,105,18,2,0,0;1440,2091,89,106,50,105,18,2,0,0;1530,2091,89,106,50,105,18,2,0,0;1620,2091,89,106,50,105,18,2,0,0;1710,2091,89,106,50,105,18,2,0,0;1800,2091,89,106,50,105,18,2,0,0;1890,2091,89,106,50,105,18,2,0,0;1980,2091,89,106,50,105,18,2,0,0;2070,2091,89,106,50,105,18,2,0,0;2160,2091,89,106,50,105,18,2,0,0;2250,2091,89,106,50,105,18,2,0,0;2340,2091,89,106,50,105,18,2,0,0;2430,2091,89,106,50,105,18,2,0,0;2520,2091,89,106,50,105,18,2,0,0;2610,2091"
    + ",89,106,50,105,18,2,0,0;2700,2091,89,106,50,105,18,2,0,0;2790,2091,89,106,50,105,18,2,0,0;0,2202,89,106,50,105,18,2,0,0;90,2202,89,106,50,105,18,2,0,0;180,2202,89,106,50,105,18,2,0,0;270,2202,89,106,50,105,18,2,0,0;360,2202,89,106,50,105,18,2,0,0;450,2202,89,106,50,105,18,2,0,0;540,2202,89,106,50,105,18,2,0,0;630,2202,89,106,50,105,18,2,0,0;720,2202,89,106,50,105,18,2,0,0;810,2202,89,106,50,105,18,2,0,0;900,2202,89,106,50,105,18,2,0,0;990,2202,89,106,50,105,18,2,0,0;1080,2202,89,106,50,105,18,2,0,0;1170,2202,89,106,50,105,18,2,0,0;1260,2202,89,106,50,105,18,2,0,0;1350,2202,89,106,50,105,18,2,0,0;1440,2202,89,106,50,105,18,2,0,0;1530,2202,89,106,50,105,18,2,0,0;1620,2202,89,106,50,105,18,2,0,0;1710,2202,89,106,50,105,18,2,0,0;1800,2202,89,106,50,105,18,2,0,0;1890,2202,89,106,50,105,18,2,0,0;1980,2202,89,106,50,105,18,2,0,0;2070,2202,89,106,50,105,18,2,0,0;2160,2202,89,106,50,105,18,2,0,0;"
    + "2250,2202,89,106,50,105,18,2,0,0;2340,2202,89,106,50,105,18,2,0,0;2430,2202,89,106,50,105,18,2,0,0;2520,2202,89,106,50,105,18,2,0,0;2610,2202,89,106,50,105,18,2,0,0;2700,2202,89,106,50,105,18,2,0,0;2790,2202,89,106,50,105,18,2,0,0;0,2313,89,106,50,105,18,2,0,0;90,2313,89,106,50,105,18,2,0,0;180,2313,89,106,50,105,18,2,0,0;270,2313,89,106,50,105,18,2,0,0;360,2313,89,106,50,105,18,2,0,0;450,2313,89,106,50,105,18,2,0,0;540,2313,89,106,50,105,18,2,0,0;630,2313,89,106,50,105,18,2,0,0;720,2313,89,106,50,105,18,2,0,0;810,2313,89,106,50,105,18,2,0,0;900,2313,89,106,50,105,18,2,0,0;990,2313,89,106,50,105,18,2,0,0;1080,2313,89,106,50,105,18,2,0,0;1170,2313,89,106,50,105,18,2,0,0;1260,2313,89,106,50,105,18,2,0,0;1350,2313,89,106,50,105,18,2,0,0;1440,2313,89,106,50,105,18,2,0,0;1530,2313,89,106,50,105,18,2,0,0;1620,2313,89,106,50,105,18,2,0,0;1710,2313,89,106,50,105,18,2,0,0;1800,2313,89,106,50,105,"
    + "18,2,0,0;1890,2313,89,106,50,105,18,2,0,0;1980,2313,89,106,50,105,18,2,0,0;2070,2313,89,106,50,105,18,2,0,0;2160,2313,89,106,50,105,18,2,0,0;2250,2313,89,106,50,105,18,2,0,0;2340,2313,89,106,50,105,18,2,0,0;2430,2313,89,106,50,105,18,2,0,0;2520,2313,89,106,50,105,18,2,0,0;2610,2313,89,106,50,105,18,2,0,0;2700,2313,89,106,50,105,18,2,0,0;2790,2313,89,106,50,105,18,2,0,0;0,2424,89,106,50,105,18,2,0,0;90,2424,89,106,50,105,18,2,0,0;180,2424,89,106,50,105,18,2,0,0;270,2424,89,106,50,105,18,2,0,0;360,2424,89,106,50,105,18,2,0,0;450,2424,89,106,50,105,18,2,0,0;540,2424,89,106,50,105,18,2,0,0;630,2424,89,106,50,105,18,2,0,0;720,2424,89,106,50,105,18,2,0,0;810,2424,89,106,50,105,18,2,0,0;900,2424,89,106,50,105,18,2,0,0;990,2424,89,106,50,105,18,2,0,0;1080,2424,89,106,50,105,18,2,0,0;1170,2424,89,106,50,105,18,2,0,0;1260,2424,89,106,50,105,18,2,0,0;1350,2424,89,106,50,105,18,2,0,0;1440,2424,89,10"
        + "6,50,105,18,2,0,0;1530,2424,89,106,50,105,18,2,0,0;1620,2424,89,106,50,105,18,2,0,0;1710,2424,89,106,50,105,18,2,0,0;1800,2424,89,106,50,105,18,2,0,0;1890,2424,89,106,50,105,18,2,0,0;1980,2424,89,106,50,105,18,2,0,0;2070,2424,89,106,50,105,18,2,0,0;2160,2424,89,106,50,105,18,2,0,0;2250,2424,89,106,50,105,18,2,0,0;2340,2424,89,106,50,105,18,2,0,0;2430,2424,89,106,50,105,18,2,0,0;2520,2424,89,106,50,105,18,2,0,0;2610,2424,89,106,50,105,18,2,0,0;2700,2424,89,106,50,105,18,2,0,0;2790,2424,89,106,50,105,18,2,0,0;0,2535,89,106,50,105,18,2,0,0;90,2535,89,106,50,105,18,2,0,0;180,2535,89,106,50,105,18,2,0,0;270,2535,89,106,50,105,18,2,0,0;360,2535,89,106,50,105,18,2,0,0;450,2535,89,106,50,105,18,2,0,0;540,2535,89,106,50,105,18,2,0,0;630,2535,89,106,50,105,18,2,0,0;720,2535,89,106,50,105,18,2,0,0;810,2535,89,106,50,105,18,2,0,0;900,2535,89,106,50,105,18,2,0,0;990,2535,89,106,50,105,18,2,0,0;1080,2"
    + "535,89,106,50,105,18,2,0,0;1170,2535,89,106,50,105,18,2,0,0;1260,2535,89,106,50,105,18,2,0,0;1350,2535,89,106,50,105,18,2,0,0;1440,2535,89,106,50,105,18,2,0,0;1530,2535,89,106,50,105,18,2,0,0;1620,2535,89,106,50,105,18,2,0,0|jump~131,81~0,2646,97,159,50,105,25,35,24,34;98,2646,97,159,50,105,25,35,21,38;196,2646,97,159,50,105,25,35,10,41;294,2646,97,159,50,105,25,35,8,42;392,2646,97,159,50,105,25,35,6,25;490,2646,97,159,50,105,25,35,2,8;588,2646,97,159,50,105,25,35,0,14;686,2646,97,159,50,105,25,35,4,25;784,2646,97,159,50,105,25,35,17,36;882,2646,97,159,50,105,25,35,19,45;980,2646,97,159,50,105,25,35,17,49;1078,2646,97,159,50,105,25,35,16,43;1176,2646,97,159,50,105,25,35,13,40;1274,2646,97,159,50,105,25,35,15,28;1372,2646,97,159,50,105,25,35,16,17;1470,2646,97,159,50,105,25,35,24,26;1568,2646,97,159,50,105,25,35,25,40;1666,2646,97,159,50,105,25,35,23,54;1764,2646,97,159,50,105,25,35,20,67"
    + ";1862,2646,97,159,50,105,25,35,21,60;1960,2646,97,159,50,105,25,35,22,51;2058,2646,97,159,50,105,25,35,22,42;2156,2646,97,159,50,105,25,35,23,34;2254,2646,97,159,50,105,25,35,23,34|lazer~117,149~0,2816,158,126,50,105,36,12,40,9;159,2816,158,126,50,105,36,12,35,8;318,2816,158,126,50,105,36,12,32,8;477,2816,158,126,50,105,36,12,30,7;636,2816,158,126,50,105,36,12,28,7;795,2816,158,126,50,105,36,12,28,6;954,2816,158,126,50,105,36,12,27,5;1113,2816,158,126,50,105,36,12,23,5;1272,2816,158,126,50,105,36,12,23,5;1431,2816,158,126,50,105,36,12,22,4;1590,2816,158,126,50,105,36,12,12,4;1749,2816,158,126,50,105,36,12,9,8;1908,2816,158,126,50,105,36,12,0,25;2067,2816,158,126,50,105,36,12,0,25;2226,2816,158,126,50,105,36,12,1,15;2385,2816,158,126,50,105,36,12,1,15;2544,2816,158,126,50,105,36,12,2,20;2703,2816,158,126,50,105,36,12,2,19;0,2947,158,126,50,105,36,12,2,18;159,2947,158,126,50,105,36,12,2,18"
    + ";318,2947,158,126,50,105,36,12,0,24;477,2947,158,126,50,105,36,12,0,17;636,2947,158,126,50,105,36,12,12,11;795,2947,158,126,50,105,36,12,16,5;954,2947,158,126,50,105,36,12,24,0;1113,2947,158,126,50,105,36,12,39,11;1272,2947,158,126,50,105,36,12,39,24;1431,2947,158,126,50,105,36,12,39,18;1590,2947,158,126,50,105,36,12,40,13;1749,2947,158,126,50,105,36,12,40,11;1908,2947,158,126,50,105,36,12,40,9|run~118,81~0,3078,83,119,50,105,20,15,3,0;84,3078,83,119,50,105,20,15,2,1;168,3078,83,119,50,105,20,15,2,3;252,3078,83,119,50,105,20,15,2,5;336,3078,83,119,50,105,20,15,2,7;420,3078,83,119,50,105,20,15,10,12;504,3078,83,119,50,105,20,15,17,19;588,3078,83,119,50,105,20,15,16,14;672,3078,83,119,50,105,20,15,4,8;756,3078,83,119,50,105,20,15,7,3;840,3078,83,119,50,105,20,15,0,0;924,3078,83,119,50,105,20,15,0,1;1008,3078,83,119,50,105,20,15,0,3;1092,3078,83,119,50,105,20,15,0,5;1176,3078,83,119,50,105,"
    + "20,15,0,7;1260,3078,83,119,50,105,20,15,10,12;1344,3078,83,119,50,105,20,15,17,19;1428,3078,83,119,50,105,20,15,16,14;1512,3078,83,119,50,105,20,15,14,8;1596,3078,83,119,50,105,20,15,14,4;1680,3078,83,119,50,105,20,15,7,0|stop~105,50~0,3201,50,105,50,105,0,0,0,0;51,3201,50,105,50,105,0,0,0,0|walk~107,69~0,3311,69,107,50,105,10,0,6,1;70,3311,69,107,50,105,10,0,2,4;140,3311,69,107,50,105,10,0,1,7;210,3311,69,107,50,105,10,0,0,10;280,3311,69,107,50,105,10,0,0,7;350,3311,69,107,50,105,10,0,5,5;420,3311,69,107,50,105,10,0,8,3;490,3311,69,107,50,105,10,0,8,2;560,3311,69,107,50,105,10,0,8,1;630,3311,69,107,50,105,10,0,8,0;700,3311,69,107,50,105,10,0,8,0;770,3311,69,107,50,105,10,0,8,0;840,3311,69,107,50,105,10,0,8,0;910,3311,69,107,50,105,10,0,8,0;980,3311,69,107,50,105,10,0,8,1;1050,3311,69,107,50,105,10,0,7,4;1120,3311,69,107,50,105,10,0,5,7;1190,3311,69,107,50,105,10,0,4,10;1260,3311,69,107,"
    + "50,105,10,0,0,7;1330,3311,69,107,50,105,10,0,1,3;1400,3311,69,107,50,105,10,0,6,2;1470,3311,69,107,50,105,10,0,8,1;1540,3311,69,107,50,105,10,0,8,0;1610,3311,69,107,50,105,10,0,8,0;1680,3311,69,107,50,105,10,0,8,0;1750,3311,69,107,50,105,10,0,8,0;1820,3311,69,107,50,105,10,0,8,0;1890,3311,69,107,50,105,10,0,8,0;1960,3311,69,107,50,105,10,0,8,1;2030,3311,69,107,50,105,10,0,7,1";
  const out = {};
  for (const block of packed.split("|")) {
    const [name, size, coordData] = block.split("~");
    const [maxHeight, maxWidth] = size.split(",").map(Number);
    const coordinates = coordData.split(";").map(row => {
      const values = row.split(",").map(Number);
      return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
    });
    out[name] = { coordinates, maxHeight, maxWidth };
  }
  return out;
})();
// Animation coordinates target the original 3000 x 4000 sheet. Derive source
// scaling from the loaded image so both the original PNG and resized embeds work.
const HALLE_ORIGINAL_WIDTH = 3000;
const HALLE_ORIGINAL_HEIGHT = 4000;

/////////////////////////////////////////////////
//////////ONLY CHANGE ABOVE THIS POINT///////////
/////////////////////////////////////////////////

// Base game variables
const frameRate = 60;
const playerScale = 0.8; //makes the player just a bit smaller. Doesn't affect the hitbox, just the image

// Player variables
const player = {
  x: 50,
  y: 100,
  speedX: 0,
  speedY: 0,
  width: undefined,
  height: undefined,
  onGround: false,
  facingRight: true,
  deadAndDeathAnimationDone: false,
  winConditionMet: false,
};

let hitDx;
let hitDy;
let hitBoxWidth = 50 * playerScale;
let hitBoxHeight = 105 * playerScale;
let firstTimeSetup = true;

const keyPress = {
  any: false,
  up: false,
  left: false,
  down: false,
  right: false,
  space: false,
};

// Player animation variables
const animationTypes = {
  duck: "duck",
  flyingJump: "flying-jump",
  frontDeath: "front-death",
  frontIdle: "front-idle",
  jump: "jump",
  lazer: "lazer",
  run: "run",
  stop: "stop",
  walk: "walk",
};
let currentAnimationType = animationTypes.run;
let frameIndex = 0;
let jumpTimer = 0;
let duckTimer = 0;
let DUCK_COUNTER_IDLE_VALUE = 14;
let debugVar = false;

let spriteHeight = 0;
let spriteWidth = 0;
let spriteX = 0;
let spriteY = 0;
let offsetX = 0;
let offsetY = 0;

// Platform, cannon, projectile, and collectable variables
let platforms = [];
let fakePlatforms = [];
let badPlatforms = [];
let cannons = [];
const cannonWidth = 118;
const cannonHeight = 80;
let projectiles = [];
const defaultProjectileWidth = 24;
const defaultProjectileHeight = defaultProjectileWidth;
const collectableWidth = 40;
const collectableHeight = 40;
let collectables = [];

// canvas and context variables; must be initialized later
let canvas;
let ctx;

// setup function variable
let setupGame;

let halleImage;
let animationDetails = {};

var collectableList = {
  database: { image: document.getElementById("database").src },
  diamond: { image: document.getElementById("diamond").src },
  grace: { image: document.getElementById("grace").src },
  kennedi: { image: document.getElementById("kennedi").src },
  max: { image: document.getElementById("max").src },
  steve: { image: document.getElementById("steve").src },
};

///// DO NOT CHANGE ANYTHING IN THIS FILE /////

///////////////////////////////////////////////
// Core functionality /////////////////////////
///////////////////////////////////////////////
function registerSetup(setup) {
  setupGame = setup;
}

function main() {
  ctx.clearRect(0, 0, 1400, 750);

  if (shouldDrawGrid) {
    makeGrid();
  }

  if (player.deadAndDeathAnimationDone) {
    deathOfPlayer();
    return;
  }

  if (player.winConditionMet) {
    winGame();
    return;
  }

  drawPlatforms();
  drawFakePlatforms();
  drawBadPlatforms();
  drawProjectiles();
  drawCannons();
  drawCollectables();
  playerFrictionAndGravity();

  player.x += player.speedX;
  player.y += player.speedY;

  collision();
  keyboardControlActions();
  projectileCollision();
  badPlatformCollision();
  collectablesCollide();

  animate();
  drawRobot();
}

function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
      setupGame();
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
}

function JsonFunction(status, response) {
  animationDetails = response;
}

function changeAnimationType() {
  if (currentAnimationType === animationTypes.frontDeath) {
    if (
      frameIndex >= animationDetails[currentAnimationType].coordinates.length
    ) {
      player.deadAndDeathAnimationDone = true;
    }
    return;
  }
  if (jumpTimer > 0 && !player.onGround) {
    currentAnimationType = animationTypes.jump;
    jumpTimer--;
  } else {
    jumpTimer = 0;
    if (Math.abs(player.speedX) > 0) {
            if (keyPress.left || keyPress.right) {
        currentAnimationType = animationTypes.run;
      } else {
        currentAnimationType = animationTypes.walk;
      }
    } else if (player.onGround) {
      if (keyPress.down) {
        currentAnimationType = animationTypes.duck;
        if (duckTimer < DUCK_COUNTER_IDLE_VALUE) {
          frameIndex = 3;
          duckTimer = DUCK_COUNTER_IDLE_VALUE * 2 - frameIndex;
        }
      } else if (
        duckTimer === 0 ||
        currentAnimationType === animationTypes.walk
      ) {
        currentAnimationType = animationTypes.frontIdle;
      }
    }
  }
}

function debug() {
  debugVar = true;

  ctx.fillText("xs" + player.speedX + " x: " + player.x, 500, 200);
  ctx.fillText("ys" + player.speedY + " y: " + player.y, 500, 250);

  ctx.fillStyle = "black";
  ctx.fillText("on ground " + player.onGround, 150 + player.x, player.y - 20);
  ctx.fillText("hitx" + hitDx, 150 + player.x, player.y);
  ctx.fillText("hity" + hitDy, 150 + player.x, player.y + 20);
  ctx.fillText("offsetx" + offsetX, 150 + player.x, player.y + 40);
  ctx.fillText("offsetY" + offsetY, 150 + player.x, player.y + 60);

  ctx.fillStyle = "grey";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ctx.fillStyle = "yellow";
  ctx.fillRect(500, 100, 50, 50);

  ctx.fillStyle = "green";
  ctx.fillRect(player.x, player.y, hitBoxWidth, hitBoxHeight);

  if (collision() !== undefined) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(player.x, player.y - 50, 10, 10);
  }
}

function animate() {
  if (
    !(
      keyPress.down &&
      duckTimer === DUCK_COUNTER_IDLE_VALUE &&
      currentAnimationType === animationTypes.duck
    )
  ) {
    frameIndex = frameIndex + 15 / frameRate;
    if (duckTimer > 0) {
      duckTimer -= 0.25;
    }
  }

  changeAnimationType();

  if (frameIndex >= animationDetails[currentAnimationType].coordinates.length) {
    frameIndex = 0;
  }

  spriteX =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .sx;
  spriteY =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .sy;
  spriteWidth =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .width;
  spriteHeight =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .height;

  maxWidth = animationDetails[currentAnimationType].maxWidth * playerScale;
  maxHeight = animationDetails[currentAnimationType].maxHeight * playerScale;

  offsetX =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .xoffset * playerScale;
  offsetY =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .yoffset * playerScale;

  player.width =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .width * playerScale;
  player.height =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .height * playerScale;

  hitDx =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .hitDx * playerScale;
  hitDy =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .hitDy * playerScale;
}

function drawRobot() {
  if (player.deadAndDeathAnimationDone) {
    return;
  }

  const sourceScaleX = halleImage.naturalWidth / HALLE_ORIGINAL_WIDTH;
  const sourceScaleY = halleImage.naturalHeight / HALLE_ORIGINAL_HEIGHT;

  if (player.facingRight) {
    ctx.drawImage(
      halleImage,
      spriteX * sourceScaleX,
      spriteY * sourceScaleY,
      spriteWidth * sourceScaleX,
      spriteHeight * sourceScaleY,
      player.x - hitDx,
      player.y - hitDy,
      player.width,
      player.height,
    );
  } else {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(
      halleImage,
      spriteX * sourceScaleX,
      spriteY * sourceScaleY,
      spriteWidth * sourceScaleX,
      spriteHeight * sourceScaleY,
      -player.x - player.width + hitDx,
      player.y - hitDy,
      player.width,
      player.height,
    );
    ctx.restore();
  }
}

function collision() {
  player.onGround = false;
  var result = undefined;

  for (var i = 0; i < platforms.length; i++) {
        if (
      player.x + hitBoxWidth > platforms[i].x &&
      player.x < platforms[i].x + platforms[i].width &&
      player.y < platforms[i].y + platforms[i].height &&
      player.y + hitBoxHeight > platforms[i].y
    ) {
      result = resolveCollision(
        platforms[i].x,
        platforms[i].y,
        platforms[i].width,
        platforms[i].height,
      );
    }
  }

  return result;
}

function resolveCollision(objx, objy, objw, objh) {
  let collisionDirection = "";

  let dx = player.x + hitBoxWidth / 2 - (objx + objw / 2);
  let dy = player.y + hitBoxHeight / 2 - (objy + objh / 2);

  let halfWidth = hitBoxWidth / 2 + objw / 2;
  let halfHeight = hitBoxHeight / 2 + objh / 2;

  let originx = halfWidth - Math.abs(dx);
  let originy = halfHeight - Math.abs(dy);

  if (debugVar) {
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(objx + dx, objy);
    ctx.lineTo(objx, objy);
    ctx.lineTo(objx, objy + dy);
    ctx.stroke();
    ctx.fillStyle = "rbga(252,186,3,.3)";
    ctx.fillRect(player.x, player.y, hitBoxWidth, hitBoxHeight);
  }

  if (originx >= originy) {
    if (dy > 0) {
      collisionDirection = "bottom";
      player.y = player.y + originy + 1;
      player.speedY = 0;
    } else {
      collisionDirection = "top";
      player.y = player.y - originy;
      player.speedY = 0;
      player.onGround = true;
    }
  } else {
    if (dx > 0) {
      collisionDirection = "left";
      player.x = player.x + originx;
      player.speedX = 0;
    } else {
      collisionDirection = "right";
      player.x = player.x - originx;
      player.speedX = 0;
    }
  }

  return collisionDirection;
}

function projectileCollision() {
  if (currentAnimationType === animationTypes.frontDeath) {
    return;
  }

  for (var i = 0; i < projectiles.length; i++) {
    if (
      projectiles[i].x > canvas.width + 100 + projectiles[i].width ||
      projectiles[i].x < -100 - projectiles[i].width ||
      projectiles[i].y > canvas.height + 100 + projectiles[i].height ||
      projectiles[i].y < -100 - projectiles[i].height
    ) {
      projectiles.splice(i, 1);
    }

    if (i === projectiles.length) {
      return;
    }

    if (
      projectiles[i].x < player.x + hitBoxWidth &&
      projectiles[i].x + projectiles[i].width > player.x &&
      projectiles[i].y < player.y + hitBoxHeight &&
      projectiles[i].y + projectiles[i].height > player.y
    ) {
      currentAnimationType = animationTypes.frontDeath;
      frameIndex = 0;
    }
  }
}

function badPlatformCollision() {
  if (currentAnimationType === animationTypes.frontDeath) {
    return;
  }

  for (var i = 0; i < badPlatforms.length; i++) {
    if (
      player.x + hitBoxWidth > badPlatforms[i].x &&
      player.x < badPlatforms[i].x + badPlatforms[i].width &&
      player.y < badPlatforms[i].y + badPlatforms[i].height &&
      player.y + hitBoxHeight > badPlatforms[i].y
    ) {
      currentAnimationType = animationTypes.frontDeath;
      frameIndex = 0;
    }
  }
}

function deathOfPlayer() {
  ctx.fillStyle = "grey";
  ctx.fillRect(
    canvas.width / 4,
    canvas.height / 6,
    canvas.width / 2,
    canvas.height / 2,
  );

  ctx.fillStyle = "black";
  ctx.font = "800% serif";

  ctx.fillText(
    "You are dead",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 5,
    (canvas.width / 16) * 14,
  );

  ctx.font = "500% serif";

  ctx.fillText(
    "Hit any key to restart",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 3,
    (canvas.width / 16) * 14,
  );

  if (keyPress.any) {
    keyPress.any = false;
    window.location.reload();
  }
}

function playerFrictionAndGravity() {
  if (player.speedX > maxSpeed) {
    player.speedX = maxSpeed;
  } else if (player.speedX < -maxSpeed) {
    player.speedX = -maxSpeed;
  }

  if (Math.abs(player.speedX) < 1) {
    player.speedX = 0;
  } else if (player.speedX > 0) {
    player.speedX = player.speedX - friction;
  } else {
    player.speedX = player.speedX + friction;
  }

  if (player.onGround === false) {
    player.speedY = player.speedY + gravity;
  }
}

function drawPlatforms() {
  for (var i = 0; i < platforms.length; i++) {
    if (platforms[i].minX !== null && platforms[i].maxX !== null) {
      platforms[i].x += platforms[i].speedX * platforms[i].directionX;

      if (platforms[i].x < platforms[i].minX) {
        platforms[i].x = platforms[i].minX;
                platforms[i].directionX *= -1;
      } else if (platforms[i].x > platforms[i].maxX) {
        platforms[i].x = platforms[i].maxX;
        platforms[i].directionX *= -1;
      }
    }

    if (platforms[i].minY !== null && platforms[i].maxY !== null) {
      platforms[i].y += platforms[i].speedY * platforms[i].directionY;

      if (platforms[i].y < platforms[i].minY) {
        platforms[i].y = platforms[i].minY;
        platforms[i].directionY *= -1;
      } else if (platforms[i].y > platforms[i].maxY) {
        platforms[i].y = platforms[i].maxY;
        platforms[i].directionY *= -1;
      }
    }

    const { color, x, y, width, height } = platforms[i];
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}

function drawFakePlatforms() {
  for (var i = 0; i < fakePlatforms.length; i++) {
    const { color, x, y, width, height } = fakePlatforms[i];
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}

function drawBadPlatforms() {
  for (var i = 0; i < badPlatforms.length; i++) {
    const { color, x, y, width, height } = badPlatforms[i];
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}

function toggleGrid() {
  shouldDrawGrid = true;
}

function makeGrid() {
  for (let i = 100; i < canvas.width; i += 100) {
    if (!gridMade) {
      createFakePlatform(i - 1, 35, 1, canvas.height);
    }

    ctx.font = "125% serif";
    ctx.fillStyle = "black";

    ctx.fillText(
      i,
      i - 15,
      25,
    );
  }

  for (let i = 100; i < canvas.height; i += 100) {
    if (!gridMade) {
      createFakePlatform(45, i - 1, canvas.width, 1);
    }

    ctx.font = "125% serif";

    ctx.fillText(
      i,
      10,
      i + 5,
    );
  }

  gridMade = true;
}

function drawProjectiles() {
  for (var i = 0; i < projectiles.length; i++) {
    ctx.drawImage(
      projectileImage,
      projectiles[i].x,
      projectiles[i].y,
      projectiles[i].width,
      projectiles[i].height,
    );

    projectiles[i].x = projectiles[i].x + projectiles[i].speedX;
    projectiles[i].y = projectiles[i].y + projectiles[i].speedY;
  }
}

function drawCannons() {
  for (var i = 0; i < cannons.length; i++) {
    if (cannons[i].projectileCountdown >= cannons[i].timeBetweenShots) {
      cannons[i].projectileCountdown = 0;

      createProjectile(
        cannons[i].location,
        cannons[i].x,
        cannons[i].y,
        cannons[i].projectileWidth,
        cannons[i].projectileHeight,
      );
    } else {
      cannons[i].projectileCountdown =
        cannons[i].projectileCountdown + 1;
    }

    if (cannons[i].minX !== null && cannons[i].maxX !== null) {
      cannons[i].x += cannons[i].speedX;

      if (
        cannons[i].x < cannons[i].minX ||
        cannons[i].x > cannons[i].maxX
      ) {
        cannons[i].speedX *= -1;
      }
    }

    if (cannons[i].minY !== null && cannons[i].maxY !== null) {
      cannons[i].y += cannons[i].speedY;

      if (
        cannons[i].y < cannons[i].minY ||
        cannons[i].y > cannons[i].maxY
      ) {
        cannons[i].speedY *= -1;
      }
    }

    ctx.fillStyle = "grey";
    ctx.save();
    ctx.translate(cannons[i].x, cannons[i].y);
    ctx.rotate((cannons[i].rotation * Math.PI) / 180);
    ctx.drawImage(cannonImage, 0, 0, cannonWidth, cannonHeight);
    ctx.translate(-cannons[i].x, -cannons[i].y);
    ctx.restore();
  }
}

function drawCollectables() {
  for (var i = 0; i < collectables.length; i++) {
    if (collectables[i].collected !== true) {
      ctx.drawImage(
        collectables[i].image,
        collectables[i].x,
        collectables[i].y,
        collectableWidth,
        collectableHeight,
      );
    } else {
      if (collectables[i].alpha > 0.4) {
        collectables[i].alpha =
          collectables[i].alpha - 0.007;
      }

      ctx.globalAlpha = collectables[i].alpha;

      ctx.drawImage(
        collectables[i].image,
        200 + 100 * i,
        10,
        collectableWidth,
        collectableHeight,
      );

      ctx.globalAlpha = 1;
    }
        if (
      collectables[i].minX !== null &&
      collectables[i].maxX !== null
    ) {
      collectables[i].x +=
        collectables[i].speed * collectables[i].direction;

      if (collectables[i].x < collectables[i].minX) {
        collectables[i].x = collectables[i].minX;
        collectables[i].direction *= -1;
      } else if (collectables[i].x > collectables[i].maxX) {
        collectables[i].x = collectables[i].maxX;
        collectables[i].direction *= -1;
      }
    }

    collectables[i].speedY =
      collectables[i].speedY + collectables[i].gravity;

    collectables[i].y =
      collectables[i].y + collectables[i].speedY;

    for (var j = 0; j < platforms.length; j++) {
      if (
        collectables[i].x + collectableWidth > platforms[j].x &&
        collectables[i].x < platforms[j].x + platforms[j].width &&
        collectables[i].y < platforms[j].y + platforms[j].height &&
        collectables[i].y + collectableHeight > platforms[j].y
      ) {
        collectables[i].y =
          collectables[i].y - collectables[i].speedY;

        collectables[i].speedY *=
          -collectables[i].bounce;
      }
    }
  }
}

function collectablesCollide() {
  for (var i = 0; i < collectables.length; i++) {
    if (
      collectables[i].x + collectableWidth > player.x &&
      collectables[i].x < player.x + hitBoxWidth &&
      collectables[i].y < player.y + hitBoxHeight &&
      collectables[i].y + collectableHeight > player.y
    ) {
      collectables[i].collected = true;
      checkForWin();
    }
  }
}

function checkForWin() {
  if (collectables.length === 0) {
    return;
  }

  for (var i = 0; i < collectables.length; i++) {
    if (collectables[i].collected !== true) {
      return;
    }
  }

  player.winConditionMet = true;
}

function winGame() {
  ctx.fillStyle = "grey";

  ctx.fillRect(
    canvas.width / 4,
    canvas.height / 6,
    canvas.width / 2,
    canvas.height / 2,
  );

  ctx.fillStyle = "white";
  ctx.font = "800% serif";

  ctx.fillText(
    "You Win!",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 5,
    (canvas.width / 16) * 14,
  );

  ctx.font = "500% serif";

  ctx.fillText(
    "Hit any key to restart",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 3,
    (canvas.width / 16) * 14,
  );

  if (keyPress.any) {
    keyPress.any = false;
    window.location.reload();
  }
}

function createPlatform(
  x,
  y,
  width,
  height,
  color = "grey",
  minX = null,
  maxX = null,
  speedX = 1,
  minY = null,
  maxY = null,
  speedY = 1,
) {
  platforms.push({
    x,
    y,
    width,
    height,
    color,
    minX,
    maxX,
    speedX,
    minY,
    maxY,
    speedY,
    directionX: 1,
    directionY: 1,
  });
}

function createFakePlatform(
  x,
  y,
  width,
  height,
  color = "grey",
) {
  fakePlatforms.push({
    x,
    y,
    width,
    height,
    color,
  });
}

function createBadPlatform(
  x,
  y,
  width,
  height,
  color = "red",
) {
  badPlatforms.push({
    x,
    y,
    width,
    height,
    color,
  });
}

function createCannon(
  wallLocation,
  position,
  timeBetweenShots,
  width = defaultProjectileWidth,
  height = defaultProjectileHeight,
  minPos = null,
  maxPos = null,
  speed = 1,
) {
  if (wallLocation === "top") {
    cannons.push({
      x: position,
      y: cannonHeight,
      rotation: 180,
      projectileCountdown: 0,
      location: wallLocation,
      timeBetweenShots:
        timeBetweenShots / (1000 / frameRate),
      projectileWidth: width,
      projectileHeight: height,
      minX: minPos,
      maxX: maxPos,
      speedX: speed,
      minY: null,
      maxY: null,
      speedY: 0,
    });
  } else if (wallLocation === "bottom") {
    cannons.push({
      x: position,
      y: canvas.height - cannonHeight,
      rotation: 0,
      projectileCountdown: 0,
      location: wallLocation,
      timeBetweenShots:
        timeBetweenShots / (1000 / frameRate),
      projectileWidth: width,
      projectileHeight: height,
      minX: minPos,
      maxX: maxPos,
      speedX: speed,
      minY: null,
      maxY: null,
      speedY: 0,
    });
  } else if (wallLocation === "left") {
    cannons.push({
      x: cannonHeight,
      y: position,
      rotation: 90,
      projectileCountdown: 0,
      location: wallLocation,
      timeBetweenShots:
        timeBetweenShots / (1000 / frameRate),
      projectileWidth: width,
      projectileHeight: height,
      minX: null,
      maxX: null,
      speedX: 0,
      minY: minPos,
      maxY: maxPos,
      speedY: speed,
    });
  } else if (wallLocation === "right") {
    cannons.push({
      x: canvas.width - cannonHeight,
      y: position,
      rotation: 270,
      projectileCountdown: 0,
      location: wallLocation,
      timeBetweenShots:
        timeBetweenShots / (1000 / frameRate),
      projectileWidth: width,
      projectileHeight: height,
      minX: null,
      maxX: null,
      speedX: 0,
      minY: minPos,
      maxY: maxPos,
      speedY: speed,
    });
  }
}
function createCollectable(
  type,
  x,
  y,
  gravity = 0,
  bounce = 1,
  minX = null,
  maxX = null,
  speed = 1,
) {
  if (type !== "") {
    var image = document.createElement("img");

    image.src = collectableList[type].image;
    image.id = "image" + collectables.length;

    collectables.push({
      image,
      x,
      y,
      speedY: 0,
      collected: false,
      alpha: 2,
      gravity,
      bounce,
      minX,
      maxX,
      speed,
      direction: 1,
    });
  }
}

function createProjectile(
  wallLocation,
  x,
  y,
  width,
  height,
) {
  if (currentAnimationType === animationTypes.frontDeath) {
    return;
  }

  if (wallLocation === "top") {
    projectiles.push({
      x: x - 71.5,
      y: y - 55 - height / 2,
      speedX: 0,
      speedY: projectileSpeed,
      width,
      height,
    });
  } else if (wallLocation === "bottom") {
    projectiles.push({
      x: x + 47,
      y: y + 50 + height / 2,
      speedX: 0,
      speedY: -projectileSpeed,
      width,
      height,
    });
  } else if (wallLocation === "left") {
    projectiles.push({
      x: x - 80 - width / 2,
      y: y + 46,
      speedX: projectileSpeed,
      speedY: 0,
      width,
      height,
    });
  } else if (wallLocation === "right") {
    projectiles.push({
      x: x + 40 + width / 2,
      y: y - 71.5,
      speedX: -projectileSpeed,
      speedY: 0,
      width,
      height,
    });
  }

  projectiles[projectiles.length - 1].x -=
    (width - defaultProjectileWidth) / 2;

  projectiles[projectiles.length - 1].y -=
    (height - defaultProjectileHeight) / 2;
}

function keyboardControlActions() {
  keyPress.any = false;

  if (currentAnimationType === animationTypes.frontDeath) {
    return;
  }

  if (keyPress.left) {
    player.speedX -= walkAcceleration;
    player.facingRight = false;
  }

  if (keyPress.right) {
    player.speedX += walkAcceleration;
    player.facingRight = true;
  }

  if (keyPress.space || keyPress.up) {
    if (player.onGround) {
      player.speedY =
        player.speedY - playerJumpStrength;

      jumpTimer = 19;
      player.onGround = false;
      frameIndex = 4;
    }
  }
}

function handleKeyDown(e) {
  keyPress.any = true;

  if (e.key === "ArrowUp" || e.key === "w") {
    keyPress.up = true;
  }

  if (e.key === "ArrowLeft" || e.key === "a") {
    keyPress.left = true;
  }

  if (e.key === "ArrowDown" || e.key === "s") {
    keyPress.down = true;
  }

  if (e.key === "ArrowRight" || e.key === "d") {
    keyPress.right = true;
  }

  if (e.key === " ") {
    keyPress.space = true;
  }
}

function handleKeyUp(e) {
  if (e.key === "ArrowUp" || e.key === "w") {
    keyPress.up = false;
  }

  if (e.key === "ArrowLeft" || e.key === "a") {
    keyPress.left = false;
  }

  if (e.key === "ArrowDown" || e.key === "s") {
    keyPress.down = false;

    if (currentAnimationType === animationTypes.duck) {
      duckTimer = 8;
      frameIndex = 20;
    }
  }

  if (e.key === "ArrowRight" || e.key === "d") {
    keyPress.right = false;
  }

  if (e.key === " ") {
    keyPress.space = false;
  }
}

function loadJson() {
  // Animation data is embedded directly in this JSFiddle.
}

(function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  function initializeGame() {
    if (firstTimeSetup) {
      halleImage =
        document.getElementById("player");

      projectileImage =
        document.getElementById("projectile");

      cannonImage =
        document.getElementById("cannon");

      if (
        !halleImage.complete ||
        halleImage.naturalWidth === 0
      ) {
        halleImage.addEventListener(
          "load",
          () => {
            if (!window.__halleGameStarted) {
              window.__halleGameStarted = true;

              setInterval(
                main,
                1000 / frameRate,
              );
            }
          },
          { once: true },
        );
      }

      document.addEventListener(
        "keydown",
        handleKeyDown,
      );

      document.addEventListener(
        "keyup",
        handleKeyUp,
      );

      firstTimeSetup = false;

      if (
        halleImage.complete &&
        halleImage.naturalWidth > 0 &&
        !window.__halleGameStarted
      ) {
        window.__halleGameStarted = true;

        setInterval(
          main,
          1000 / frameRate,
        );
      }
    }

    createPlatform(
      -50,
      -50,
      canvas.width + 100,
      50,
    );

    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    );

    createPlatform(
      -50,
      -50,
      50,
      canvas.height + 500,
    );

    createPlatform(
      canvas.width,
      -50,
      50,
      canvas.height + 100,
    );
        // Run the student's level code from the top of the file
    setup();
  }

  registerSetup(initializeGame);

  // halle.json is embedded above
  animationDetails = HALLE_ANIMATION_DATA;

  if (document.readyState === "loading") {
    window.addEventListener("load", setupGame);
  } else {
    setupGame();
  }
})();