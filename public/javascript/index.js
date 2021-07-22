const modal = document.getElementById("navModal");
const btn = document.getElementById("navButton");
const span = document.getElementsByClassName("header__modal__close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Hero section
const futureButton = document.getElementById("futureButton");
const heroImage = document.getElementById("heroImage")
const heroOverlay = document.getElementById("heroOverlay")

futureButton.onclick = function () {
    heroOverlay.classList.remove('animate__fadeOut');
    heroOverlay.style.visibility = "visible";
    heroImage.classList.remove("blur-out");
    heroImage.classList.add("blur");
    heroOverlay.classList.add('animate__fadeIn');
}

heroOverlay.onclick = function () {
    heroImage.classList.remove("blur");
    heroImage.classList.add("blur-out");
    heroOverlay.classList.remove('animate__fadeIn');
    heroOverlay.classList.add('animate__fadeOut');
    heroOverlay.style.visibility = "hidden";
}