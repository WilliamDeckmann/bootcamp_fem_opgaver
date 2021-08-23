document.addEventListener("DOMContentLoaded", () => {

    // Hide specific elements via class
    function skjulElementViaCssSelector(cssSelector) {

        cssSelector.style.display = "none";
    };

    // Initiator
    skjulElementViaCssSelector(Element_number_3);
});