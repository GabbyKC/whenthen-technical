const navModal = document.getElementById("navModal");
const navOpen = document.getElementById("navButton");
const navClose = document.getElementsByClassName("header__modal__close")[0];
// When the user clicks the button, open the modal
navOpen.onclick = function () {
    navModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
navClose.onclick = function () {
    navModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === navModal) {
        navModal.style.display = "none";
    }
}

// Hero section
const futureButton = document.getElementById("futureButton");
const heroImage = document.getElementById("heroImage")
const heroOverlay = document.getElementById("heroOverlay")

futureButton.onclick = function () {
    heroOverlay.classList.remove('animate__fadeOut');
    heroImage.classList.remove("blur-out");
    heroImage.classList.add("blur");
    heroOverlay.style.visibility = "visible";
    heroOverlay.classList.add('animate__fadeIn');
}

heroOverlay.onclick = function () {
    heroOverlay.classList.add('animate__fadeOut');
    heroImage.classList.add("blur-out");
    heroOverlay.style.visibility = "hidden";
    heroImage.classList.remove("blur");
    heroOverlay.classList.remove('animate__fadeIn');
}

// Carousel - Slick
$('.first-section__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: false,
                    speed: 100
                }
            }
        ]
    }
);