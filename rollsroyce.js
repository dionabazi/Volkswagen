 const video = document.querySelector('#myVideo')

 let video1 = false;

 video.addEventListener('click', () => {
     if (!video1) {
         video.pause()
     } else {
         video.play();
     }
     video1 = !video1
 })