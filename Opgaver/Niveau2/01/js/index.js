document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    var button = document.querySelectorAll(".button");

    // Remove active class
    function removeButtonClass() {

        // Remove class from inactive buttons
        for(let i = 0; i < button.length; i++) {
    
            button[i].classList.remove("Button__background-color_light-green");
        };
    };

    // Target button
    function targetButton() {

        // Check for target button
        if(event.target.className == "button") {
    
            event.target.classList.toggle("Button__background-color_light-green");
        };
    };

    // Buttons event listener
    document.querySelector("#buttons").addEventListener("click", () => {

        // Initiators
        removeButtonClass();
        targetButton();
    });
});