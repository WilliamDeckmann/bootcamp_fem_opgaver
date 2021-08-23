document.addEventListener("DOMContentLoaded", () => {

    // Hide specific elements via class
    function skjulElementViaCssSelector(cssSelector, cssSelector2) {

        skjulElement(cssSelector, cssSelector2);
    };

    // Initiator
    skjulElementViaCssSelector(Element_number_2, Element_number_4);

    // Check to see if element is null
    function skjulElement(element, element2) {

        if(element != null) {
            element.style.display = "none";
        }

        if(element2 != null) {
            element2.style.display = "none";
        }
    };
});