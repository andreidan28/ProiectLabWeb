let searchBtn = document.getElementById('searchBtn');
let searchInput = document.getElementById('searchInput');
searchBtn.addEventListener('click', function() {
    let searchValue = searchInput.value;
    console.log(searchValue);
    let url = 'https://restcountries.com/v3.1/name/${searchValue}?fullText=true';
    console.log(url);
}); 