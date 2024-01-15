 fetch('api.json')
     .then(response => response.json())
     .then(data => {
         console.log(data)
         console.log(data[1].image);




     }).catch((error) => {
         console.log(error, 'error while fetching my own api')
     })




 const video = document.getElementById('video')

 let video2 = false;



 video.addEventListener('click', () => {
     if (!video2) {
         video.play()
     } else {
         video.pause();
     }
     video2 = !video2
 })

 const rotate = document.querySelector('#rotate')
 const backlight = document.querySelector('#backlight');
 backlight.style.display = 'none';
 rotate.style.display = 'block';


 let rotate2 = false;

 rotate.addEventListener('click', () => {
     if (!rotate2) {
         rotate.style.transform = 'scaleX(-1)'
     } else {
         rotate.style.transform = 'scaleX(1)';
         backlight.style.display = 'none';
         rotate.style.display = 'block';
     }


     rotate2 = !rotate2
 })

 document.addEventListener('DOMContentLoaded', function() {
     const requestButton = document.querySelector('#requestButton');
     const blogger = document.querySelector('.blogger');
     blogger.style.display = 'none';
     requestButton.addEventListener('click', toggleModal);

     function toggleModal() {





         if (blogger.style.display === 'block' || blogger.style.display === '') {
             blogger.style.display = 'none';
             blogger.style.animation = 'fadeOut 0.3s ease-in'
             const burger = document.querySelector('#hamburger-menu');
             burger.style.display = 'block'
         } else {
             blogger.style.display = 'block';

             blogger.style.animation = 'fadeIn 0.2s ease-in';
             const burger = document.querySelector('#hamburger-menu');
             burger.style.display = 'none'
         }
     }
     blogger.addEventListener('click', (event) => {
         if (event.target === blogger) {
             blogger.style.display = 'none';

             blogger.style.animation = 'fadeOut 0.3s ease-in'
             const burger = document.querySelector('#hamburger-menu');
             burger.style.display = 'block'
         } else {
             blogger.style.display = 'block';

             blogger.style.animation = 'fadeIn 0.2s ease-in';
             const burger = document.querySelector('#hamburger-menu');
             burger.style.display = 'none'
         }
     });
 });

 document.addEventListener('DOMContentLoaded', function() {
     const readButton = document.querySelector('#readMoreButton');
     const paragraph = document.querySelector('#paragraphId');

     readButton.addEventListener('click', toggleParagraphVisibility);

     function toggleParagraphVisibility() {


         if (paragraph.style.visibility === 'visible') {
             paragraph.style.visibility = 'hidden';
             readButton.textContent = 'READ MORE';
         } else {
             const text = 'AUDI AG is a German company that produces cars under the Audi , brand. It is part of the Volkswagen Group. The name Audi is based on a Latin translation of the surname of the founder August Horch, itself the German word for “listen!"Audi is headquartered in Ingolstadt, Germany.';
             paragraph.textContent = text
             paragraph.style.visibility = 'visible';
             paragraph.style.animation = 'fadeNi 0.4s ease-in'
             readButton.textContent = 'INFO BELOW';
         }
     }
 });







 document.addEventListener('DOMContentLoaded', function() {
     const readMore = document.querySelector('#readMore');
     const paragraph = document.querySelector('#paraGraph');

     readMore.addEventListener('click', toggleParagraphVisibility);

     function toggleParagraphVisibility() {



         if (paragraph.style.visibility === 'visible') {
             paragraph.style.visibility = 'hidden';

             readMore.textContent = 'Read More';
         } else {
             const text = 'Ambient LED Interior Lighting Plus Package: The plus package allows for customisation of up to 30 colours. Drivers can also change the intensity and which areas of the cabin are illuminated.';
             paragraph.textContent = text
             paragraph.style.animation = 'fadeNi 0.4s ease-in';

             paragraph.style.visibility = 'visible';
             readMore.textContent = 'Info Below';
         }
     }

 });






 document.addEventListener('DOMContentLoaded', function() {
     const inforMations = document.querySelector('#inforMations');
     const paragraph = document.querySelector('#informaTion');

     inforMations.addEventListener('click', toggleParagraphVisibility);

     function toggleParagraphVisibility() {



         if (paragraph.style.visibility === 'visible') {
             paragraph.style.visibility = 'hidden';
             inforMations.textContent = 'Read More';
         } else {
             const text = 'Dynamic turn signals, which illuminate sequentially to indicate the direction the vehicle is turning, lets the driver indicate the desired turn direction to other drivers with greater confidence.';
             paragraph.textContent = text
             paragraph.style.animation = 'fadeNi 0.4s ease-in';

             paragraph.style.visibility = 'visible';
             inforMations.textContent = 'Info Below';
         }
     }

 });



 document.addEventListener('DOMContentLoaded', function() {
     const moreInformation = document.querySelector('#moreInformation');
     const paragraph = document.querySelector('#textContents');

     moreInformation.addEventListener('click', toggleParagraphVisibility);

     function toggleParagraphVisibility() {



         if (paragraph.style.visibility === 'visible') {
             paragraph.style.visibility = 'hidden';
             paragraph.style.animation = 'fadeOut 0.4s ease-in';
             moreInformation.textContent = 'Read More';
         } else {
             const text = 'HD matrix LED headlamps for selected top models integrate laser modules to double the range of the high beam. The dynamic laser high beams automatically turn on at 70 km/h and dims when the camera recognizes other vehicles in its range.';
             paragraph.textContent = text
             paragraph.style.animation = 'fadeNi 0.4s ease-in';

             paragraph.style.visibility = 'visible';
             moreInformation.textContent = 'Info Below';
         }
     }

 });




 function myFunction() {
     var x = document.getElementById("myInput");
     if (x.type === "password") {
         x.type = "text";
     } else {
         x.type = "password";
     }
 }

 function lockPassword() {
     const lockFirst = document.querySelector('#lock-icon');
     const passwordFirst = document.querySelector('#psw-input');
     const lockSecond = document.querySelector('#lock-icon-confirm');
     const passwordSecond = document.querySelector('#psw-input-confirm');

     passwordFirst.type = lockFirst.focus ? 'text' : 'password';


 }
 const lockFirst = document.querySelector('#lock-icon');
 lockFirst.addEventListener('click', lockPassword)



 let lazy = document.querySelector('#removeHeader');
 const lazy1 = document.querySelector('.lazy-load');

 window.addEventListener('scroll', function() {
     if (document.documentElement.scrollTop > 50) {
         lazy.classList.add('visible');
     } else {
         lazy.classList.remove('visible');
     }
 });