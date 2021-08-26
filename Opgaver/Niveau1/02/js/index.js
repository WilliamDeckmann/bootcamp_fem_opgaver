document.addEventListener("DOMContentLoaded", () => {

    // Argument variables
    const argumentA = 4;
    const argumentB = 3;

    // Divide a with b
    function beregnForhold(a, b) {

        // Return the result
        return(a / b);
    };

    // Divide a with b & and prevent 0
    function beregnForhold2(a, b) {

        // Check if either a is equal to 0
        if(a == 0) {

            // Return nothing
            return(null);
        }else{
            
            // Check if either b is equal to 0
            if(b == 0) {
    
                // Return nothing
                return(null);
            }else{
                
                //Return the result
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