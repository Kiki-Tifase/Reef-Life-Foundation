document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides .slide");
    let slideIndex = 0;
    let intervalId;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function showPreviousSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    function startSlideShow() {
        intervalId = setInterval(showNextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideShow() {
        clearInterval(intervalId);
    }

    // Show the first slide initially
    showSlide(slideIndex);

    // Start slideshow
    startSlideShow();

    // Add event listeners for next and previous buttons
    document.querySelector(".next").addEventListener("click", function () {
        stopSlideShow();
        showNextSlide();
        startSlideShow(); // Restart slideshow after manual navigation
    });

    document.querySelector(".prev").addEventListener("click", function () {
        stopSlideShow();
        showPreviousSlide();
        startSlideShow(); // Restart slideshow after manual navigation
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Initialize corals saved counter
    let coralsSaved = 0;
    const coralsSavedElement = document.getElementById("coralsSaved");

    // Update corals saved statistic every 30 minutes
    setInterval(function () {
        coralsSaved++;
        coralsSavedElement.textContent = `${coralsSaved} Corals Saved`;
    }, 5000); // 30 minutes in milliseconds
});

const questions = [
    {
        text: "Elkhorn coral is named for its resemblance to the branches of an antler.",
        image: "elk.jpg", // Replace with actual image URL or path
        answer: true
    },
    {
        text: "Hurricane Irma had no significant impact on coral reefs in the Caribbean.",
        image: "irma.jpg", // Replace with actual image URL or path
        answer: false
    },
    {
        text: "Staghorn coral is known for its resilience to diseases and environmental changes.",
        image: "stag.jpg", // Replace with actual image URL or path
        answer: false
    },
    {
        text: "Brain coral gets its name from its grooved, brain-like appearance.",
        image: "brain.jpg", // Replace with actual image URL or path
        answer: true
    },
    {
        text: "Increased sedimentation from heavy rainfall can trigger coral bleaching.",
        image: "bleachh.jpg", // Replace with actual image URL or path
        answer: true
    },
    {
        text: "Intellireefs use natural coral fragments to create artificial reefs.",
        image: "frag.jpg", // Replace with actual image URL or path
        answer: false
    },
    {
        text: "IntelliReefs' artificial structures are designed to withstand harsh ocean conditions.",
        image: "intelli.jpg", // Replace with actual image URL or path
        answer: true
    },
    {
        text: "Melody Brenner is the founder of the Reef Life Foundation.",
        image: "melodyb (1).webp", // Replace with actual image URL or path
        answer: true
    },
    {
        text: "Biodiversity conservation is one of the key benefits provided by Intellireefs.",
        image: "reef.jpg", // Replace with actual image URL or path
        answer: true
    },
    {
        text: "Coral reefs have no significant impact on the marine ecosystem.",
        image: "eco.jpg", // Replace with actual image URL or path
        answer: false
    }
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.text;
    document.getElementById("question-image").src = question.image;
    document.getElementById("feedback").textContent = "";
}

function answerQuestion(answer) {
    const question = questions[currentQuestionIndex];
    if (answer === question.answer) {
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Wrong!";
    }
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
}

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