document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const buttonElement = document.querySelector("#my-button");

    // Toggle color on button click
    function toggleColor() {

        // Listen for button click
        buttonElement.addEventListener("click", () => {
    
            // Toggle button class
            buttonElement.classList.toggle("my-button__color_red");
        });
    };

    // Initiator
    toggleColor();
});