document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const buttonElement = document.querySelector("#my-button");

    // Toggle color on button click
    function toggleColor() {

        buttonElement.addEventListener("click", () => {
    
            buttonElement.classList.toggle("my-button__color_red");
        });
    };

    // Initiator
    toggleColor();
});