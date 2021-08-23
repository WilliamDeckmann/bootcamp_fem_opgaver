document.addEventListener("DOMContentLoaded", () => {

    // Argument variables
    const argumentA = 4;
    const argumentB = 3;

    // Divide a with b
    function beregnForhold(a, b) {

        return(a / b);
    };

    // Function variable
    const returnerForhold = beregnForhold(argumentA, argumentB);

    // Display result
    console.log(returnerForhold);
});