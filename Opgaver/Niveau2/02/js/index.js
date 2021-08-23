document.addEventListener("DOMContentLoaded", () => {

    // Object array
    var produktArray = [
    
        { // Item: 1
            navn: "Burger 1",
            pris: "65kr",
            billede: "./img/burger1.jpg",
            tilbud: false,
        },

        { // Item: 2
            navn: "Burger 2",
            pris: "75kr",
            billede: "./img/burger2.jpg",
            tilbud: true,
        },

        { // Item: 3
            navn: "Burger 3",
            pris: "55kr",
            billede: "./img/burger3.jpg",
            tilbud: false,
        },
    ];



    // Produkt counter
    function produktCounter(parent) {

        // Decrease button
        let buttonContainer = document.createElement("section");
        buttonContainer.className = "Button-container";
        parent.appendChild(buttonContainer);

        // Decrease button
        let decreaseButton = document.createElement("button");
        decreaseButton.className = "Button-container__decrease-button";
        decreaseButton.textContent = "-";
        buttonContainer.appendChild(decreaseButton);

        // Produkt counter
        let produktCounter = document.createElement("h3");
        produktCounter.className = "Button-container__counter";
        buttonContainer.appendChild(produktCounter);

        // Increase button
        let increaseButton = document.createElement("button");
        increaseButton.className = "Button-container__increase-button";
        increaseButton.textContent = "+";
        buttonContainer.appendChild(increaseButton);
    
        // Counter restrictions
        let produktCount = 0;
        let maximumCount = 100;
        let minimumCount = 0;




        // Display produkt count
	    function displayProduktCount() {produktCounter.textContent = produktCount;};

        displayProduktCount();

        // Calculate max & min count
        function CalculateCount(direction) {

            // Hvis direction matcher: increase button
            if(direction === "Increase" && produktCount < maximumCount) {

                produktCount++;
                displayProduktCount();
            };
            
            // Hvis direction matcher: decrease button
            if(direction === "Decrease" && produktCount > minimumCount) {

                produktCount--;
                displayProduktCount();
            };
        };

        // Increase text count
        increaseButton.addEventListener("click", () => {
        
            CalculateCount("Increase");
        });

        // Decrease text count
        decreaseButton.addEventListener("click", () => {

            CalculateCount("Decrease");
        });
    };

    

    // Generer produkter
    function displayProdukter() {

        // Indsæt produkt data
        for(let i = 0; i < produktArray.length; i++) {

            // Container
            let produktContainer = document.querySelector(".Produkt-container");

            // Article
            let produktArticle = document.createElement("article");
            produktArticle.className = "Produkt-container__article";
            produktContainer.appendChild(produktArticle);
            
            // Navn
            let produktNavn = document.createElement("h1");
            produktNavn.className = "Produkt-container__navn";
            produktNavn.textContent = produktArray[i].navn;
            produktArticle.appendChild(produktNavn);
            
            // Price
            let produktPris = document.createElement("h2");
            produktPris.className = "Produkt-container__pris";
            produktPris.textContent = produktArray[i].pris;
            produktArticle.appendChild(produktPris);

            // Billede
            let produktBillede = document.createElement("img");
            produktBillede.className = "Produkt-container__billede";
            produktBillede.src = produktArray[i].billede;
            produktArticle.appendChild(produktBillede);

            // Counter
            produktCounter(produktArticle);
            
            // Tilbud
            if(produktArray[i].tilbud == true) {
                produktPris.classList.add("Produkt-container__pris_theme_bleg-groen");
                produktPris.textContent += " -15%"
            };
        };
    };

    // Initiator
    displayProdukter();
});