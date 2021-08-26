document.addEventListener("DOMContentLoaded", () => {

    // Hide specific elements via class
    function skjulElementViaCssSelector(cssSelector) {

        // Set display mode to none
        cssSelector.style.display = "none";
    };

    // Initiator
    skjulElementViaCssSelector(Element_number_3);
});