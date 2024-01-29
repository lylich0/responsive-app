const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    body.classList.toggle("active");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

let previousTab = null
function OpenTab(element, id) {
    if (previousTab !== null) {
        previousTab.style.color = 'black';
        previousTab.style.borderBottom = '1px solid #0000000D';
    }
    element.style.color = 'green';
    element.style.borderBottom = '1px solid green';

    let allTabContents = document.querySelectorAll('.tab-content');
    allTabContents.forEach(function (tabContent) {
        tabContent.classList.remove('active');
    });

    let selectedTabContent = document.querySelector("#tab-content-" + id);
    selectedTabContent.classList.add('active');

    previousTab = element;
}

let defaultTabButton = document.querySelector('.tab-link');
OpenTab(defaultTabButton, 1);

let size = window.matchMedia("(min-width: 744px)");

let currentIndex = 0;
let allSlides = document.querySelectorAll('.slide');

function showSlide(index) {
    allSlides.forEach((slide) => {
        slide.style.display = 'none';
    });

    let currentSlide = allSlides[index];

    if (size.matches) {
        allSlides.forEach((element) => {
            element.remove();
        })

        let order = [index % allSlides.length, (index + 1) % allSlides.length, (index + 2) % allSlides.length];

        order.forEach((orderIndex, i) => {
            let currentSlide = allSlides[orderIndex];
            currentSlide.style.display = 'flex';

            document.getElementById('all-slides').appendChild(currentSlide);
        });
    }
    else {
        currentSlide.style.display = 'flex';
    }
}

function goToPreviousSlide() {
    currentIndex = (currentIndex + 1) % allSlides.length;
    showSlide(currentIndex);
}

function goToNextSlide() {
    currentIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
    showSlide(currentIndex);
}