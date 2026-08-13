export class rec {
    constructor2(rectangle){
        this.x1=rectangle.left;
        this.y1=rectangle.top;
        this.x2=rectangle.right;
        this.y2=rectangle.bottom;
        this.w=(this.x2-this.x1+1);
        this.h=(this.y2-this.y1+1);
    }
    set4(x1,y1,w,h){
        this.x1=x1;
        this.x2=this.x1+w;
        this.y1=y1;
        this.y2=y1+h;
        this.w = w;
        this.h = h;
    }
    set2(x2,y2){
        this.x1=0;
        this.y1=0;
        this.x2=x2;
        this.y2=y2;
        this.w = x2;
        this.h = y2;
    }

    constructor(a, b, c, d) {
        if (c !== undefined && d !== undefined) {
            this.set4(a, b, c, d);
        } 
        else {
           this.set2(a,b);
        }
    }
}

export const nrCats = 87;
export const cats=[new rec(1600,1170),new rec(1500,1367),new rec(1587,1206),new rec(1600,1200),new rec(1500,867)//0-4
    ,new rec(1386,1104),new rec(1877,1326),new rec(1021,973),new rec(1023,761),new rec(708,662)//5-9
    ,new rec(870,753),new rec(1689,1131),new rec(1200,900),new rec(1537,967),new rec(1200,676)//9-14
    ,new rec(1869,1270),new rec(981,736),new rec(912,736),new rec(413,378),new rec(734,406)//15-19
    ,new rec(736,414),new rec(2136,1265),new rec(1200,800),new rec(736,736),new rec(965,731)//20-24
    ,new rec(736,552),new rec(1040,803),new rec(1423,831),new rec(1046,808),new rec(1200,1188)//25-29
    ,new rec(1019,927),new rec(3742,2490),new rec(3151,2160),new rec(5120,2160),new rec(1920,925)//30-34
    ,new rec(1368,979),new rec(864,712),new rec(1251,879),new rec(697,638),new rec(652,598)//35-39
    ,new rec(673,653),new rec(847,655),new rec(736,552),new rec(1151,784),new rec(1084,833)//40-44
    ,new rec(670,676),new rec(714,638),new rec(754,622),new rec(671,436),new rec(747,564)//45-49
    ,new rec(943,690),new rec(849,562),new rec(796,735),new rec(1250,811),new rec(554,554)//50-54
    ,new rec(659,623),new rec(972,759),new rec(933,865),new rec(736,552),new rec(736,552)//55-59
    ,new rec(2057,1410),new rec(827,643),new rec(1110,855),new rec(1082,959),new rec(1188,1039)//60-64
    ,new rec(1205,1246),new rec(640,553),new rec(1165,737),new rec(1136,640),new rec(1308,736)//65-69
    ,new rec(1308,736),new rec(1072,896),new rec(1200,643),new rec(1200,643),new rec(1072,896)//70-74
    ,new rec(1308,736),new rec(896,550),new rec(694,640),new rec(824,808),new rec(649,573)//75-79
    ,new rec(881,491),new rec(1079,1295),new rec(1136,640),new rec(1308,736),new rec(972,634)//80-84
    ,new rec(869 , 720),new rec(736 , 414)//85-86
] ;//dimensiunile imaginilor in px
export const catsNose=[new rec(752,276,178,156),new rec(1019,966,197,188),new rec(859,524,163,193),new rec(628,971,142,182),new rec(859,228,183,215)
    ,new rec(671,337,216,194),new rec(923,423,214,202),new rec(305,490,156,190),new rec(249,0,198,160),new rec(324,331,103,38)
    ,new rec(224,215,167,130),new rec(930,637,315,140),new rec(434,285,352,164),new rec(851,230,257,156),new rec(267,456,438,220)
    ,new rec(513,1120,266,150),new rec(372,242,206,181),new rec(403,403,247,129),new rec(147,242,99,48),new rec(362,135,299,271)
    ,new rec(445,305,291,109),new rec(678,817,376,448),new rec(931,518,117,101),new rec(304,489,165,74),new rec(221,369,203,139)
    ,new rec(333,321,113,57),new rec(245,268,262,174),new rec(830,380,174,103),new rec(445,491,132,83),new rec(467,984,198,134)
    ,new rec(0,523,149,150),new rec(1979,1369,289,232),new rec(384,174,426,496),new rec(1908,1182,654,542),new rec(776,629,380,296)
    ,new rec(1172,434,168,163),new rec(271,335,157,90),new rec(934,570,163,142),new rec(589,236,108,168),new rec(60,152,77,61)
    ,new rec(0,382,60,74),new rec(261,475,251,180),new rec(339,272,92,60),new rec(372,385,148,66),new rec(498,545,179,106)
    ,new rec(577,214,60,45),new rec(470,531,43,43),new rec(76,352,68,77),new rec(0,0,106,55),new rec(81,103,97,60)
    ,new rec(368,45,338,314),new rec(318,139,241,157),new rec(0,0,406,244),new rec(332,0,742,345),new rec(205,284,107,69)
    ,new rec(0,413,241,210),new rec(726,362,242,277),new rec(84,331,291,203),new rec(294,0,385,203),new rec(338,0,235,130)
    ,new rec(639,892,592,336),new rec(176,431,213,152),new rec(0,0,483,386),new rec(125,481,408,350),new rec(445,383,588,612)
    ,new rec(368,752,497,494),new rec(161,89,279,228),new rec(265,0,562,580),new rec(516,329,193,311),new rec(503,104,99,151)
    ,new rec(825,241,104,145),new rec(872,280,150,201),new rec(961,428,65,120),new rec(165,99,70,124),new rec(905,272,129,253)
    ,new rec(831,236,114,146),new rec(331,88,319,216),new rec(344,284,243,157),new rec(0,445,480,363),new rec(166,341,278,226)
    ,new rec(352,146,283,188),new rec(448,327,297,175),new rec(408,69,217,221),new rec(657,481,151,77),new rec(821,456,151,178)
    ,new rec(495, 0,374 , 222 ),new rec(436, 0,300,126)
] ;//astea sunt fata de sus
export function modifySize(){
    for(let i=0; i<nrCats; ++i){
        let maxy = cats[i].y2;
        let y1 = maxy - catsNose[i].y2; 
        let y2 = maxy - catsNose[i].y1;
        catsNose[i].y1 = y1;
        catsNose[i].y2 = y2;
    }
}

