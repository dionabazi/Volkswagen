fetch('api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data[1].image);

        let currentProduct = null
        let productData = data;

        function productElement(productID) {
            const product = productData.find((product) => product.id === parseInt(productID));
            if (product) {
                const firstImage = document.querySelector(`#carPhoto[data-product-id="${productID}"]`);
                const firstImageClass = document.querySelector(`.carPhotoClass[data-product-id="${productID}"]`);
                const modalPhoto = document.querySelector(`#modalPhoto[data-product-id="${productID}"]`)
                if (firstImageClass) {
                    firstImageClass.src = product.image
                } else {

                }
                if (firstImage) {
                    firstImage.src = product.image

                }
                if (modalPhoto) {
                    modalPhoto.src = product.image;
                }
                const carTitle = document.querySelector(`#carTitle[data-product-id="${productID}"]`);
                const carYear = document.querySelector(`#carYear[data-product-id="${productID}"]`);
                const carKm = document.querySelector(`#carKilometers[data-product-id="${productID}"]`);
                const carSold = document.querySelector(`#carSold[data-product-id="${productID}"]`);
                const contentTitle = document.querySelector(`.contentTitle[data-product-id="${productID}"]`)
                const myTitle = document.querySelector(`.myTitle[data-product-id="${productID}"]`);
                const button = document.querySelector(`#isThisSold[data-product-id="${productID}"]`);
                if (carTitle) {
                    carTitle.textContent = product.car
                }
                if (carYear) {
                    carYear.textContent = product.year
                }
                if (carKm) {
                    carKm.textContent = product.km + " km"
                }
                if (carSold) {
                    carSold.textContent = "SOLD";
                }
                if (contentTitle) {
                    contentTitle.textContent = product.info
                    console.log(contentTitle)
                }
                if (myTitle) {
                    myTitle.textContent = product.car
                }
                if (button) {
                    button.textContent = product.isSold
                }

            }
        }
        const productIDs = productData.map((product) => product.id);

        productIDs.forEach(productElement)

        function quickView(productID) {
            const modal = document.querySelector('#myModal');
            const modalContent = document.querySelector('.modal-content');
            const rows = document.querySelector('.rows');
            const colLeft = document.querySelector('.colLeft');
            const colRight = document.querySelector('.colRight');
            const img = document.querySelector('#modalPhoto');
            const content = document.querySelector('.contentTitle')
            const quickViewButton = document.querySelectorAll('#myBtn');



        }




        function displayModal() {
            const modal = document.getElementById("myModal");

            const btn = document.querySelectorAll("#myBtn");
            btn.forEach((e) => {
                e.addEventListener('click', function() {
                    modal.style.display = 'block';

                    modal.addEventListener('click', (event) => {
                        if (event.target === modal) {
                            modal.style.display = 'none';
                        }
                    })
                })


            })

            const span = document.getElementsByClassName("close");
            span.onclick = function() {
                modal.style.display = "none";
            }

        }
        displayModal();

    }).catch((error) => {
        console.log(error, 'error while fetching my own api')
    })





// btn.onclick = function() {
//     modal.style.display = "block";

//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             modal.style.display = "none";
//         }
//     })

// }

let lazy = document.querySelector('#removeHeader');
const lazy1 = document.querySelector('.lazy-load');

window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 50) {
        lazy.classList.add('visible');
    } else {
        lazy.classList.remove('visible');
    }
});