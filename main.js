import { rec, cats, catsNose, modifySize,nrCats } from './catsData.js';
import {loadCats,changeCatImage} from './gallery.js'
import { meows ,playMeow,nrMeows} from './audio.js';
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

let nrRows=20;
let nrCollums=14;
const myRec = new InsideRec(0, 0, 0, 0);
const grid=myRec.matrix();

let imgActive=1;//the index of the image that is currently being displayed on the screen



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
        catsNose[i].w=catsNose[i].w*lenghtRatio;
        catsNose[i].x2 = catsNose[i].x1 + catsNose[i].w;

        catsNose[i].y1=catsNose[i].y1*heightRatio;
        catsNose[i].h=catsNose[i].h*heightRatio;
        catsNose[i].y2 = catsNose[i].y1 + catsNose[i].h;
    }
}
function findGridPos(x,y){
    return new pair(Math.round(y / sizeCollum),Math.round(x / sizeRow));
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
        addImg(startSquare.f, endSquare.f, startSquare.s, endSquare.s, i);
    }
    for(let i=0;i<nrRows;++i){
        for(let j=0;j<nrCollums;++j){
            if(grid[i][j].images.length<2){
                console.log("not enough pictures");
                console.log(i);
                console.log(j);
            }
        }
    }
}
function getRandomNumber(maxVal){
    return Math.floor(Math.random() * maxVal); 
}
function getOtherImgIdx(clicked){
    let maxImg=grid[clicked.f][clicked.s].images.length;
    if(maxImg==1 || maxImg==0){
        return -1;
    }
    let nr=getRandomNumber(maxImg); 
    while(grid[clicked.f][clicked.s].images[nr]==imgActive){
        console.log("miau");
        nr=getRandomNumber(maxImg); //sper sa nu dea crash lol
    }
    return grid[clicked.f][clicked.s].images[nr];
}

document.addEventListener('click', function(e){
    let cursorX = e.clientX;
    let cursorY = e.clientY;
    if(insideRectangle(cursorX,cursorY)){
        playMeow(getRandomNumber(nrMeows-1));
        cursorX-=boopAr.x1;
        cursorY-=boopAr.y1;
        let crt=getRandomColor();
        recta.style.setProperty("--bg-color",crt);
        let poz=findGridPos(cursorX,cursorY);
        let newImg=getOtherImgIdx(poz);
        if(newImg!=-1){
            imgActive=newImg;
            changeCatImage(newImg);
        }
    }
});
resizeRec();
constructGrid();
setUpImg();
await loadCats();
