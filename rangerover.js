let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// const rightSlider = document.querySelector('#rightSlider');
// const imgOne = document.querySelector('#img1');
// const imgTwo = document.querySelector('#img2');
// const imgThree = document.querySelector('#img3');
// rightSlider.addEventListener('click', (e) => {
//     imgTwo.checked = true;
//     rightSlider.addEventListener('click', () => {
//         imgThree.checked = true;
//     })
// });
// const leftSlider = document.querySelector('#leftSlider');
// leftSlider.addEventListener('click', () => {
//     imgTwo.checked = true;
//     leftSlider.addEventListener('click', () => {
//         imgOne.checked = true;
//     })
//     leftSlider.addEventListener('click', () => {
//         imgThree.checked = true;
//     })
// })


const rangeroverBefore = document.querySelector('.rangeroverBefore')
const engineBefore = document.querySelector('.engineBefore');
const rangeRover = document.querySelector('.rangerover');
const engine = document.querySelector('.engine');
const imgChanged = document.querySelector('#lineChecked');
const tOne = document.querySelector('#titleOne')
const tTwo = document.querySelector('#titleTwo');
const pOne = document.querySelector('#paragraphOne');
const flexCol = document.querySelector('#flex-col');


function secondChecked() {
    rangeRover.addEventListener('click', () => {
        rangeRover.style.color = 'black';
        engine.style.color = 'grey'
        engine.classList.remove('engineBefore')
        rangeRover.classList.add('rangeroverBefore')
        imgChanged.src = './Fonts/rangeroverhse.avif';
        imgChanged.style.animation = 'myFade 0.4s ease-in'
        tOne.textContent = 'Range Rover SV';
        tTwo.textContent = '';
        pOne.textContent = 'An exquisite interpretation of Range Rover luxury and refinement. ';
        flexCol.style.animation = 'myFade 0.4s ease-in'
    })
}
secondChecked();

function firstChecked() {
    engine.addEventListener('click', () => {
        engine.style.color = 'black';
        rangeRover.style.color = 'grey'
        rangeRover.classList.remove('rangeroverBefore')
        engine.classList.add('engineBefore')
        imgChanged.src = './Fonts/svroverland.avif';
        imgChanged.style.animation = 'myFadeIn 0.4s ease-in'
        tOne.textContent = 'RANGE ROVER BY SV';
        tTwo.textContent = 'BESPOKE';
        pOne.textContent = 'We make it special, you make it unique.';
        flexCol.style.animation = 'myFadeIn 0.4s ease-in'
    })
}
firstChecked()

// End of first checked rangerover lists//
// Start of the second checked rangerover lists//


const firstEngine = document.querySelector('.firstEngine');
const secondEngine = document.querySelector('.secondEngine');
const firstRange = document.querySelector('.firstRange');
const secondRangeRover = document.querySelector('.secondRangeRover');
const hse = document.querySelector('.hse');
const secondHse = document.querySelector('.secondHse');
const se = document.querySelector('.se');
const secondSe = document.querySelector('.secondSe');
const changePortrait = document.querySelector('#changePortrait');
const newClasses = [secondEngine, secondRangeRover, secondHse]
const titleThree = document.querySelector('#titleThree');
const titleFour = document.querySelector('#titleFour');
const informationParagraph = document.querySelector('#inforMation');
const animationCol = document.querySelector('.col-flex-myTitles');



function thisFirstEngine() {
    firstRange.addEventListener('click', () => {
        firstEngine.classList.remove('secondEngine')
        se.classList.remove('secondSe');
        firstEngine.style.opacity = '0.6';
        firstRange.style.opacity = '1';
        hse.classList.remove('secondHse')
        hse.style.opacity = '0.6';
        se.style.opacity = '0.6';
        firstRange.classList.add('secondRangeRover');
        changePortrait.src = '/Fonts/gold autobiography.avif';
        changePortrait.style.animation = 'myFadeIn 0.3s ease-in'
        titleThree.textContent = 'RANGE ROVER';
        titleFour.textContent = 'AUTOBIOGRAPHY';
        informationParagraph.textContent = 'The unmistakeable expression of refinement and luxury.';
        animationCol.style.animation = 'myFadeIn 0.3s ease-in'
    })
}
thisFirstEngine()


function thisSecondEngine() {
    firstEngine.addEventListener('click', () => {
        firstRange.classList.remove('secondRangeRover');
        se.classList.remove('secondSe');
        se.style.opacity = '0.6';
        firstRange.style.opacity = '0.6';
        firstEngine.style.opacity = '1';
        firstEngine.classList.add('secondEngine');
        hse.classList.remove('secondHse')
        hse.style.opacity = '0.6';
        titleThree.textContent = 'RANGE ROVER';
        titleFour.textContent = 'SV';
        informationParagraph.textContent = 'Refined. Luxurious. Exclusive.';
        changePortrait.src = './Fonts/rangeroverhse.avif';
        changePortrait.style.animation = 'myFade 0.3s ease-in';
        animationCol.style.animation = 'myFade 0.3s ease-in'
    })
}
thisSecondEngine();

function thisThirdEngine() {
    hse.addEventListener('click', () => {
        firstRange.classList.remove('secondRangeRover');
        firstEngine.classList.remove('secondEngine');
        se.classList.remove('secondSe');
        firstEngine.style.opacity = '0.6';
        se.style.opacity = '0.6';
        firstRange.style.opacity = '0.6';
        hse.classList.add('secondHse');
        hse.style.opacity = '1';
        titleThree.textContent = 'RANGE ROVER';
        titleFour.textContent = 'HSE';
        informationParagraph.textContent = 'Range Rover in its purest form.';
        changePortrait.src = './Fonts/rangerovergold.avif';
        changePortrait.style.animation = 'fadeIn 0.3s ease-in';
        animationCol.style.animation = 'fadeIn 0.3s ease-in'
    })
}
thisThirdEngine();

function thisFourthEngine() {
    se.addEventListener('click', () => {
        firstRange.classList.remove('secondRangerRover');
        firstEngine.classList.remove('secondEngine');
        hse.classList.remove('secondHse');
        se.classList.add('secondSe');
        firstRange.style.opacity = '0.6';
        firstEngine.style.opacity = '0.6';
        hse.style.opacity = '0.6';
        se.style.opacity = '1';
        titleThree.textContent = 'RANGE ROVER';
        titleFour.textContent = 'SE';
        informationParagraph.textContent = 'Range Rover in its purest form.';
        changePortrait.src = './Fonts/selandrover.avif';
        changePortrait.style.animation = 'myFadeIn 0.3s ease-in';
        animationCol.style.animation = 'myFadeIn 0.3s ease-in'
    })
}
thisFourthEngine()

function myFunction(imgs) {
    let expandImg = document.getElementById("expandedImg");
    let imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}