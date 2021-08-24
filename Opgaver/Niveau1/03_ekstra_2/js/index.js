document.addEventListener("DOMContentLoaded", () => {

    // Element variables
    const class_1 = document.querySelectorAll(".class_1");



    // Hide specific elements via class
    function skjulElementViaCssSelector(cssSelector) {

        skjulElement(cssSelector);
    };

    // Initiator
    skjulElementViaCssSelector(class_1);

    // Check to see if element is null
    function skjulElement(element) {

        // For each element with a specific class
        for(let i = 0; i < element.length; i++) {
    
            if(element != null) {
                element[i].style.display = "none";
            }
        };

    };
});