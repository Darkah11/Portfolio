const exploreBtn = document.querySelector(".explore-btn");
const nav = document.querySelector("nav");
const heroText = document.querySelector(".hero-text");
const close = document.querySelector(".close-nav")
const navLink = document.querySelectorAll(".nav-link")

exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.add("active");
    if (nav.classList == "active") {
        heroText.style.display = 'none'
    }
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.remove('active')
    heroText.style.display = 'block'
})
navLink.forEach((link) => (
    link.addEventListener('click', () => {
        nav.classList.remove('active')
        heroText.style.display = 'block';
    })
))

let btnDownload = document.querySelector('.resume');
let img = document.querySelector('.resume-img');


// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}