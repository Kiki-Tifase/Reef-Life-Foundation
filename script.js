
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.popup-menu').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.popup-menu').style.display = 'none';
});

function togglePopup() {
    var popup = document.getElementById("popup-menu");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

function toggleDonatePopup() {
    var popupDonate = document.getElementById("popup-menu-donate");
    popupDonate.style.display = (popupDonate.style.display === "block") ? "none" : "block";
}

function closeDonatePopup() {
    var popupDonate = document.getElementById("popup-menu-donate");
    popupDonate.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const popupMenuDonate = document.getElementById("popup-menu-donate");
    const hasPopupBeenShown = localStorage.getItem("popupShown");

    // Check if the popup has been shown before
    if (!hasPopupBeenShown) {
        // Show the popup and set the flag in local storage
        popupMenuDonate.style.display = "block";
        localStorage.setItem("popupShown", "true");
    }
});

function closeDonatePopup() {
    const popupMenuDonate = document.getElementById("popup-menu-donate");
    popupMenuDonate.style.display = "none";
}


function toggleLeftMenu() {
    var leftMenu = document.getElementById("left-menu");
    leftMenu.classList.toggle("show");
}
//slideshow

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slides img");
    let slideIndex = 0;
    let intervalId = setInterval(showNextSlide, 5000);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
        console.log('Next Slide', slideIndex); // Debugging
    }

    function showPrevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
        console.log('Prev Slide', slideIndex); // Debugging
    }

    document.querySelector(".next").addEventListener("click", () => {
        clearInterval(intervalId);
        showNextSlide();
        intervalId = setInterval(showNextSlide, 5000);
        console.log('Next button clicked'); // Debugging
    });

    document.querySelector(".prev").addEventListener("click", () => {
        clearInterval(intervalId);
        showPrevSlide();
        intervalId = setInterval(showNextSlide, 5000);
        console.log('Prev button clicked'); // Debugging
    });

    // Show the first slide initially
    showSlide(slideIndex);
});
