export const meows=[new Audio('./catMeows/meow0.mp3'),new Audio('./catMeows/meow1.mp3'),new Audio('./catMeows/meow2.mp3')
    ,new Audio('./catMeows/meow3.mp3'),new Audio('./catMeows/meow4.mp3'),new Audio('./catMeows/meow5.mp3')
];
export const nrMeows=7;
export function playMeow(idx){
    let Sound=meows[idx];
    Sound.play().catch(error => {
        Console.error('Audio playback failed:', error);
    });
}