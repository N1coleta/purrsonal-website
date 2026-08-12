import { rec, cats, catsNose, modifySize,nrCats } from './catsData.js';


class InsideRec{
    constructor(x1,x2,y1,y2){
        this.coords=new rec(x1,y1,x2-x1+1,y2-y1+1);
        this.images=[];
    }
    matrix() {
        return [];
    }
}

class pair{
    constructor(a, b){
        this.f=a;
        this.s=b;
    }
}

const recta =document.getElementById("rec");
const boopAr = new rec();
boopAr.constructor2(recta.getBoundingClientRect());
const width=boopAr.x2-boopAr.x1+1;
const height=boopAr.y2-boopAr.y1+1;
let sizeCollum;
let sizeRow;

let nrRows=6;
let nrCollums=6;
const myRec = new InsideRec(0, 0, 0, 0);
const grid=myRec.matrix();



function insideRectangle(x,y){
    return (x>=boopAr.x1 && x<=boopAr.x2)&&(y>=boopAr.y1 && y<=boopAr.y2);
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function resizeGrid( nrRows, nrCols) {
    grid.length = nrRows; 
    for (let r = 0; r < nrRows; r++) {
        if (!grid[r]){ 
            grid[r] = [];
        }
        grid[r].length=nrCols;
        for(let c=0;c<nrCols;++c){
            grid[r][c]=new InsideRec(0,0,0,0);
        }
    }
}
function constructGrid(){
    sizeRow=width/nrCollums;
    sizeCollum=height/nrRows;
    let auxR=nrRows;//pentru impartire
    if(width%nrCollums!=0){
        nrRows++;//spatiu extra
    }
    if(height%auxR!=0){
        nrCollums++;
    }
    resizeGrid(nrRows,nrCollums);   
    for(let i=0;i<nrRows;++i){
        for(let j=0;j<nrCollums;++j){
            grid[i][j].coords.w=sizeRow;
            grid[i][j].coords.h=sizeCollum;
            if(j==0){
                grid[i][j].coords.x1=0;
            }else{
                grid[i][j].coords.x1=grid[i][j-1].coords.x2;
            }
            if(i==0){
                grid[i][j].coords.y1=0;
            }else{
                grid[i][j].coords.y1=grid[i-1][j].coords.y2;
            }
            if(i==nrRows-1){
                grid[i][j].coords.y2=height;
                grid[i][j].coords.h=grid[i][j].coords.y2-grid[i][j].coords.y1+1;
            }else{
                grid[i][j].coords.y2= grid[i][j].coords.y1+sizeCollum;
            }
            if(j==nrCollums-1){
                grid[i][j].coords.x2=width;
                grid[i][j].coords.w=grid[i][j].coords.x2-grid[i][j].coords.x1+1;
            }else{
                grid[i][j].coords.x2= grid[i][j].coords.x1+sizeRow;
            }
        }
    }
}
function resizeRec(){

    for(let i=0;i<nrCats;++i){
        //resize la imagine si trebuie sa dam resize si la dreptunghiuri
        let heightRatio=height/cats[i].h;    
        let lenghtRatio=width/cats[i].w;
        catsNose[i].x1=catsNose[i].x1*lenghtRatio;
        catsNose[i].x2=catsNose[i].x2*lenghtRatio;
        catsNose[i].w=catsNose[i].w*lenghtRatio;

        catsNose[i].y1=catsNose[i].y1*heightRatio;
        catsNose[i].y2=catsNose[i].y2*heightRatio;
        catsNose[i].h=catsNose[i].h*heightRatio;
    }
}
function findGridPos(x,y){
    return new pair(Math.floor(x / sizeRow), Math.floor(y / sizeCollum));
}


function addImg(startRow,endRow,startCol,endCol,idxImg){
    for(let i=startRow;i<=endRow;++i){
        for(let j=startCol;j<=endCol;++j){
            grid[i][j].images.push(idxImg);
        }
    }
}

function setUpImg(){
    for(let i=0;i<nrCats;++i){
        let startSquare=findGridPos(catsNose[i].x1,catsNose[i].y1);
        let endSquare=findGridPos(catsNose[i].x2,catsNose[i].y2);
        addImg(startSquare.s,endSquare.s,startSquare.f,endSquare.f,i);
    }
}

document.addEventListener('click', function(e){
    let cursorX = e.clientX;
    let cursorY = e.clientY;
    console.log("clicked"); 
    if(insideRectangle(cursorX,cursorY)){
        cursorX-=boopAr.x1;
        cursorY-=boopAr.y1;
        console.log("inside rectangle");
        let crt=getRandomColor();
        recta.style.setProperty("--bg-color",crt);
        let poz=findGridPos(cursorX,cursorY);
        console.log(poz.f+" "+poz.s);
        console.log(nrCollums);
    }
});
resizeRec();
constructGrid();
setUpImg();
console.log(boopAr.w);
console.log(boopAr.h);