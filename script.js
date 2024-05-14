let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('searchInput');
searchBtn.addEventListener('click', function() {
    let searchValue = searchInput.value;
    console.log(searchValue);
    let url = `https://restcountries.com/v3.1/name/${searchValue}?fullText=true`;
    console.log(url);
    fetch(url)  
    .then((response) => response.json())
    .then ((data) => {
        console.log(data[0])
        result.innerHTML = `<img src = "${data[0].flags.png}" class="flag-img">`;
    });
});