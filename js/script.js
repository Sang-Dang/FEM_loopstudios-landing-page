const body = document.querySelector("body");
const title = document.getElementById("main-title");
const hamburger = document.querySelector("#hamburger");
const mainNav = document.querySelector("body > header > nav");


const configureTitle = () => {
    const titleContent = title.innerHTML.trim();
    let words = titleContent.split(" ");
    title.innerHTML = "";
    words.forEach((word) => {
        const div = document.createElement("div");
        div.innerHTML = word;
        title.appendChild(div);
    });
}
configureTitle();

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle("active");
})