document.addEventListener("DOMContentLoaded", () => {

    // Hide specific elements via class
    function skjulElementViaCssSelector(cssSelector) {

        skjulElement(cssSelector);
    };

    // Initiator
    skjulElementViaCssSelector(Element_number_3);

    // Check to see if element is null
    function skjulElement(element) {

        if(element != null) {
            element.style.display = "none";
        }
    };
});