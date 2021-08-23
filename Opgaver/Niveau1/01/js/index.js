document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const buttonElement = document.querySelector("#my-button");

    buttonElement.addEventListener("click", () => {

        buttonElement.classList.toggle("my-button__color_red");
    });
});