/* 2372059 Syahrial Achmad C */

const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "GAMER";
    }, 0);
    setTimeout(() => {
        text.textContent = "PLAYER";
    }, 4000);
    setTimeout(() => {
        text.textContent = "PRO";
    }, 8000); 
}
textLoad();
setInterval(textLoad, 12000);