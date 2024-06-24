const toggleBtn = document.getElementsByClassName('navbar-toggle');
toggleBtn[0].addEventListener('click', function () {
    document.body.classList.toggle('open')
});

const navLink = document.querySelectorAll('a.nav-link')
function navigateById() {
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click',function () {
            document.body.classList.remove('open')
        })
    }
}
navigateById()
$('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '3rem',
                slidesToShow: 1,
                prevArrow: `<svg class="slid-icon prev" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.615 7.9829C14.615 7.40213 14.2239 7 13.6206 7C13.3859 7 13.0954 7.11174 12.9054 7.3016L6.33521 13.7462C6.11174 13.9583 6 14.2264 6 14.4944C6 14.7737 6.11174 15.0305 6.33521 15.2427L12.9054 21.6873C13.0954 21.8771 13.3859 22 13.6206 22C14.2239 22 14.615 21.5867 14.615 21.0171C14.615 20.7267 14.5145 20.5033 14.3469 20.3246L11.1176 17.1861L9.00081 15.3786L11.6204 15.4885L24.0055 15.4885C24.5548 15.4885 25 15.0434 25 14.4944C25 13.9454 24.5548 13.5004 24.0055 13.5004L11.6204 13.5004L9.00094 13.6186L11.1176 11.8027L14.3469 8.66421C14.5145 8.48545 14.615 8.27329 14.615 7.9829Z" fill="black" fill-opacity="0.6"/>
                    </svg>`,
                nextArrow: `<svg class="slid-icon next" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.385 7.9829C15.385 7.40213 15.7761 7 16.3794 7C16.6141 7 16.9046 7.11174 17.0946 7.3016L23.6648 13.7462C23.8883 13.9583 24 14.2264 24 14.4944C24 14.7737 23.8883 15.0305 23.6648 15.2427L17.0946 21.6873C16.9046 21.8771 16.6141 22 16.3794 22C15.7761 22 15.385 21.5867 15.385 21.0171C15.385 20.7267 15.4855 20.5033 15.6531 20.3246L18.8824 17.1861L20.9992 15.3786L18.3796 15.4885L5.99448 15.4885C5.44525 15.4885 5 15.0434 5 14.4944C5 13.9454 5.44525 13.5004 5.99448 13.5004L18.3796 13.5004L20.9991 13.6186L18.8824 11.8027L15.6531 8.66421C15.4855 8.48545 15.385 8.27329 15.385 7.9829Z" fill="black" fill-opacity="0.6"/>
</svg>`
            }
        }
    ]
});


function modalSlider() {
    $('.image-slider').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: `<div class="slid-icon prev"><svg class="" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.615 7.9829C14.615 7.40213 14.2239 7 13.6206 7C13.3859 7 13.0954 7.11174 12.9054 7.3016L6.33521 13.7462C6.11174 13.9583 6 14.2264 6 14.4944C6 14.7737 6.11174 15.0305 6.33521 15.2427L12.9054 21.6873C13.0954 21.8771 13.3859 22 13.6206 22C14.2239 22 14.615 21.5867 14.615 21.0171C14.615 20.7267 14.5145 20.5033 14.3469 20.3246L11.1176 17.1861L9.00081 15.3786L11.6204 15.4885L24.0055 15.4885C24.5548 15.4885 25 15.0434 25 14.4944C25 13.9454 24.5548 13.5004 24.0055 13.5004L11.6204 13.5004L9.00094 13.6186L11.1176 11.8027L14.3469 8.66421C14.5145 8.48545 14.615 8.27329 14.615 7.9829Z" fill="black" fill-opacity="0.6"/>
                    </svg></div>`,
        nextArrow: `<div class="slid-icon next"><svg class="" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.385 7.9829C15.385 7.40213 15.7761 7 16.3794 7C16.6141 7 16.9046 7.11174 17.0946 7.3016L23.6648 13.7462C23.8883 13.9583 24 14.2264 24 14.4944C24 14.7737 23.8883 15.0305 23.6648 15.2427L17.0946 21.6873C16.9046 21.8771 16.6141 22 16.3794 22C15.7761 22 15.385 21.5867 15.385 21.0171C15.385 20.7267 15.4855 20.5033 15.6531 20.3246L18.8824 17.1861L20.9992 15.3786L18.3796 15.4885L5.99448 15.4885C5.44525 15.4885 5 15.0434 5 14.4944C5 13.9454 5.44525 13.5004 5.99448 13.5004L18.3796 13.5004L20.9991 13.6186L18.8824 11.8027L15.6531 8.66421C15.4855 8.48545 15.385 8.27329 15.385 7.9829Z" fill="black" fill-opacity="0.6"/>
</svg></div>`
    });
}

// modal

const modalToggle = document.getElementsByClassName('projects-item');
const modalData = [
    {
        id: 1,
        bgColor: '#102C40',
        logo: 'images/resent-projects/BigBro-modal.svg',
        images: ['images/image-2.jpg']
    },
    {
        id: 2,
        bgColor: '#0D0A06',
        logo: 'images/resent-projects/BigBro-modal.svg',
        images: ['images/image-2.jpg', 'images/image-1.jpg']
    },
    {
        id: 3,
        bgColor: '#172673',
        logo: 'images/resent-projects/shotbet-modal.svg',
        images: ['images/image-1.jpg']
    }
]

for (let i = 0; i < modalToggle.length; i++) {
    console.log(modalToggle[i]);
    modalToggle[i].addEventListener('click', function () {
        const id = this.getAttribute('index');
        modalData.filter(item => {
            if (item.id === +id) {
                document.body.classList.add('open-modal');
                modalInit(item)
            }
        })
    })
}


function modalInit(data) {
    const modalHeader = `<div class="modal-header">
                <figure class="modal-logo"><img src="${data.logo}" alt=""></figure>
                <button type="button" class="modal-close">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 11.6666L4.83341 4L3.50009 5.33333L11.1667 13L3.5 20.6667L4.83333 22L12.5 14.3333L20.1667 22L21.5 20.6667L13.8333 13L21.4999 5.33334L20.1666 4L12.5 11.6666Z" fill="white"/>
                        </svg>
                </button></div>`;

    let images = '';
    for (let i = 0; i < data.images.length; i++) {
        images += `<div class="slider-in">
                       <img src="${data.images[i]}" alt=""></div>`
    }

    const modalBody = `<div class="image-slider">${images}</div>`;
    document.body.style.setProperty('--bg-color', data.bgColor);

    const modalIn = `<div class="modal-init">${modalHeader} ${modalBody}</div>`;

    document.getElementsByClassName('modal')[0].innerHTML = modalIn;
    modalSlider();
    modalClose()
}

function modalClose() {
    const close = document.getElementsByClassName('modal-close')[0];
    close.addEventListener('click', function () {
        document.body.classList.remove('open-modal');
        document.body.style = null;
    })
}
