const images= document.querySelectorAll(".img-hover-zoom img");
const lightbox= document.getElementById("lightbox");   
const lightboxImg= document.getElementById("lightbox-img");
const closeBtn= document.getElementById("close");

    images.forEach(img =>{
        img.addEventListener("click", () => {
            lightbox.style.display= "flex";
            lightboxImg.src= img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display= "none";
    });

function filterSelection(category){
    let images= document.getElementsByClassName("gallery-img");
    if(category== "all") category= "";

    for(let i=0;i<images.length;i++){
        let box= images[i].parentElement;
        box.style.display="none";
        
        if(images[i].className.indexOf(category)> -1){
            box.style.display= "block";
        }
    }
}

function darkMode(){
    document.body.classList.toggle("dark");
}

const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");
let currentIndex= 0;
images.forEach((img, index)=>{
    img.addEventListener("click", ()=>{
        currentIndex= index;
    });
});

nextBtn.addEventListener("click", ()=>{
    currentIndex= (currentIndex+1)%images.length;
    lightboxImg.src=images[currentIndex].src;
});

prevBtn.addEventListener("click", ()=>{
    currentIndex= (currentIndex - 1 + images.length)%images.length;
     lightboxImg.src=images[currentIndex].src;
});

