document.addEventListener("DOMContentLoaded", () => {

    // Argument variables
    const argumentA = 4;
    const argumentB = 3;

    // Divide a with b
    function beregnForhold(a, b) {

        return(a / b);
    };

    // Divide a with b & and prevent 0
    function beregnForhold2(a, b) {

        // Check if either a or b is equal to 0
        if(a == 0) {

            return(null);
        }else{
            
            if(b == 0) {
    
                return(null);
            }else{
                
                return(a / b);
            };
        };

    };

    // Function variable
    const returnerForhold = beregnForhold(argumentA, argumentB);
    const returnerForhold2 = beregnForhold2(argumentA, argumentB);

    // Display result
    console.log(returnerForhold);
    console.log(returnerForhold2);
});