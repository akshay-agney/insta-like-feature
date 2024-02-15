let heart1 = document.querySelector("#image i");
let heart2 = document.querySelector("#heart2");
let img = document.querySelector("#image img");

img.addEventListener("dblclick", () => {
     heart1.style.opacity = 1;
     heart1.style.transform = " translate(-50%,-50%) scale(2)";
     setTimeout(() => {
          heart1.style.opacity = 0;
          heart1.style.transform = " translate(-50%,-50%) scale(0)";
     }, 500);
});

heart2.addEventListener("click", () => {
     heart1.style.transform = " translate(-50%,-50%) scale(2)";
     heart1.style.opacity = 1;
     setTimeout(() => {
          heart1.style.opacity = 0;
          heart1.style.transform = " translate(-50%,-50%) scale(0)";
     }, 500);    
});
