(function () {
    const slides = products; 

let currentSlide = 0;
function showCurrentSlide() {
    //const slideTarget = document.querySelector('.carousel-two"')
    //slideTarget.src = slides[currentSlide];
    const slideImage = document.querySelector('.carousel-two"')
    slideImage.src = product[currentSlide].imageUrl;
    const slideTitle = document.querySelector('.carousel-two"')
    slideTitle.innerText = product[currentSlide].title;
    const slideTitlenext = document.querySelector('.carousel-two"')
    slideTitlenext.innerText = product[currentSlide].price;
    const slideButton= document.querySelector('.carousel-two"')
    slideButton.innerHTML = product[currentSlide].button;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide>= slides.length) currentSlide=0;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide<0) currentSlide=slides.length-1;
    showCurrentSlide();
}

document.querySelector('.bnext').addEventListener('click', nextSlide);
document.querySelector('.bprev').addEventListener('click', nextSlide);

showCurrentSlide();
setInterval(nextSlide, 3000);
})();
