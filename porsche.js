let vid = document.querySelector('.impVideo')
const btn = document.querySelector('#playVid');
let myFalse = false;
let docTitle = document.title;

window.addEventListener('blur', () => {
    document.title = 'Wanna Buy Porsche Or Leave?'
})
window.addEventListener('focus', () => {
    document.title = docTitle
})

function test() {
    btn.addEventListener('click', function() {
        if (!myFalse) {
            vid.pause()
            btn.innerHTML = '<i class="fa-solid fa-pause "></i>'
            btn.style.display = 'block'
            btn.style.visiblity = 'visible'
            btn.style.opacity = '1'
        } else {
            vid.play()
            btn.innerHTML = '<i class="fa-solid fa-play"></i>'

        }

        myFalse = !myFalse
    })
}
test()

let thisBtn = document.querySelector('.mutevideo');


let mybtn = false;

function practice() {
    thisBtn.addEventListener('click', function() {
        if (!mybtn) {
            vid.muted = false;
            thisBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        } else {
            vid.muted = true;
            thisBtn.innerHTML = '<i class="fa-solid fa-volume-xmark "></i>';
        }
        mybtn = !mybtn;
    })
}

practice();

const hamburgerMenu = document.querySelector('#hamburger-menu');

function burger() {
    hamburgerMenu.addEventListener('click', function() {
        if (!mybtn) {
            thisBtn.style.display = 'none'
        } else {
            thisBtn.style.display = 'block';
        }
        mybtn = !mybtn
    })
}
burger()