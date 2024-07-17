const images = document.querySelector('.images');
const slider = document.querySelector('.slider');
const imageFiles = [
    'vk 1.jpg',
    'vk 2.jpg',
    'vk 3.jpg',
    
]
images.style.width = `${imageFiles.length * 100}%`;
let shift = (100 / imageFiles.length).toFixed(3); 

imageFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `./images/${file}`;
    images.appendChild(img);
    img.style.width = `${(100 / imageFiles.length).toFixed(3)}%`

    const input = document.createElement('input');
    const sliderButton = document.createElement('label');

    input.name = 'slider-buttons';
    input.type = 'radio';
    input.id = file;

    sliderButton.setAttribute('for', file);
    sliderButton.setAttribute('class', 'slider-button');

    const firstImg = images.querySelector('img');
    sliderButton.addEventListener('click', () => {
        firstImg.style.marginLeft =
            `-${(file.replace(/\D/g, '')*shift) - shift}%`;
        
    })

    slider.appendChild(input);
    slider.appendChild(sliderButton);
})

const img = images.querySelector('img');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
img.style.marginLeft = '0%';

left.addEventListener('click', () => {
    if (img.style.marginLeft !== '0%') 
        img.style.marginLeft =
            (parseFloat(img.style.marginLeft) + Number(shift)) + '%';
})

right.addEventListener('click', () => {
    if (img.style.marginLeft !== `-${((imageFiles.length * shift) - shift).toFixed(3)}%`)
        img.style.marginLeft = 
            (parseFloat(img.style.marginLeft) - shift) + '%';
})