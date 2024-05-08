window.onload = function() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countriesList = document.getElementById('countries');
            data.forEach(country => {
                const li = document.createElement('li');
                li.className = 'country-item';

                const flagContainer = document.createElement('div');
                flagContainer.className = 'flag-container';

                const img = document.createElement('img');
                img.className = 'flag-img';
                img.src = country.flags.png; // Assuming the API provides flag URLs
                img.alt = `Flag of ${country.name.common}`;
                
                flagContainer.appendChild(img);
                
                const countryName = document.createElement('p');
                countryName.className = 'country-name';
                countryName.textContent = `${country.name.common}`;
                flagContainer.appendChild(countryName);
                
                const countryCapital = document.createElement('p');
                countryCapital.className = 'country-capital';
                countryCapital.textContent = `Capital: ${country.capital ? country.capital[0] : 'N/A'}`;
                flagContainer.appendChild(countryCapital);
                
                li.appendChild(flagContainer);
                countriesList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            alert('Error fetching country data.');
        });
};
