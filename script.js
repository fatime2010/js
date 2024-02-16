const url = 'https://restcountries.com/v3.1/all';
fetch(url)
    .then(response => response.json())
    .then(data => {
        const cardWrapper = document.querySelector('.card-wrapper');
        const countries = data;

        countries.forEach((country) => {
            const card = document.createElement('div')
            card.className = "card";
            card.innerHTML =   `
            <div class="card-img">
                <h1>${country.flag}</h1>
            </div>
            <div class="card-name">
                <h2>${country.name.common}</h2>
            </div>
            <div class="card-population">
                <h2>${country.population}</h2>
            </div>
            <div class="card-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, odit cum. Consequatur enim quo libero!</p>
            </div>
            
            `
            cardWrapper.appendChild(card);
        })
        
        
    })

    .catch( error => {
        console.log(error);
    })
    document.getElementById('showButton').addEventListener('click', function() {
        let hiddenText = document.getElementById('hiddenText');
        if (hiddenText.style.display === 'none') {
            hiddenText.style.display = 'block';
        } else {
            hiddenText.style.display = 'none';
        }
    });