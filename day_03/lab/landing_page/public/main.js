const plans = document.querySelector(".plans");
const { CONNECTION_STRING } = process.env

const enlargeImg = (img) => {
    img.style.width = "160%";
    img.style.height = "auto";
    setTimeout(4000);
}

plans.addEventListener('click', () => {
    img.style.width = "160%";
    img.style.height = "auto";
})