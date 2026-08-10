import { rec, cats, catsNose, modifySize } from './catsData.js';

function modifySize(){
    for(i=0;i<nrCats;++i){
        //oglinesc y-ul
        maxy=cats[i].y2;
        y1=maxy-catsNose[i].y2; 
        y2=maxy-catsNose[i].y1;
        catsNose[i].y1=y1;
        catsNose[i].y2=y2;
    }
}


const recta =document.getElementById("rec");
const boopAr = new rec();
boopAr.constructor2(recta.getBoundingClientRect());
const width=boopAr.x2-boopAr.x1+1;
const height=boopAr.y2-boopAr.y1+1;
function insideRectangle(x,y){
    return (x>=boopAr.x1 && x<=boopAr.x2)&&(y>=boopAr.y1 && y<=boopAr.y2);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('click', function(e){
    cursorX = e.clientX;
    cursorY = e.clientY;
    console.log("clicked");
    if(insideRectangle(cursorX,cursorY)){

        console.log("inside rectangle");
        crt=getRandomColor();
        recta.style.setProperty("--bg-color",crt);
    }
});