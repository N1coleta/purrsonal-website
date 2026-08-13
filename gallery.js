
export let catPics = []; //  JSON objects with cat images
const catImg=document.getElementById("gallery");
export async function loadCats() {
  const res = await fetch('cats.json');
  const data = await res.json();
  catPics = data.cats;
  //changeCatImage(0);
}

export function getCatImage(idx) {
  //console.log(idx);
  return catPics[idx].image; 
}

export function changeCatImage(idx) {
  catImg.src = getCatImage(idx);
}
