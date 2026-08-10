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

export const nrCats = 7;
export const cats=[new rec(1600,1170),new rec(1500,1367),new rec(1587,1206),new rec(1600,1200),new rec(1500,867),new rec(1386,1104),new rec(1877,1326)] ;
export const catsNose=[new rec(752,276,178,156),new rec(1019, 966,197,188),new rec(859, 524,163 ,193),new rec(628, 971,142,182),new rec(859, 228,183,215),new rec(671, 337,216,194),new rec(923, 423,214,202)] ;//astea sunt fata de sus
export function modifySize(){
    for(let i=0; i<nrCats; ++i){
        let maxy = cats[i].y2;
        let y1 = maxy - catsNose[i].y2; 
        let y2 = maxy - catsNose[i].y1;
        catsNose[i].y1 = y1;
        catsNose[i].y2 = y2;
    }
}

