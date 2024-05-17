let submitBtn = document.getElementById("submitBtn");
window.onload = function () {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((data) => {
      let country = generateFlag(data);
      displayFlag(country);
      submitBtn.addEventListener("click", function () {
        let countryInput = document.getElementById("countryInput").value;
        checkAnswer(country, countryInput);
      });
    });
};

function generateFlag(data){
  let randomCountry = data[Math.floor(Math.random() * data.length)];
  console.log(randomCountry);
  return randomCountry;
}

function displayFlag(randomCountry){
  let flag = document.getElementById("flag");
  flag.innerHTML = `<img src = "${randomCountry.flags.png}" class="flag-img">`;
}

function checkAnswer(country,countryInput){
  let result = document.getElementById("result");
  if (countryInput === country.name.common) {
    result.innerHTML = "Correct!";
  } else {
    result.innerHTML =
      "Incorrect! Tara este " + country.name.common + "!";
  }
}