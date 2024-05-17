let submitBtn = document.getElementById("submitBtn");
window.onload = function () {
  let url = `https://restcountries.com/v3.1/all`;
  let flag = document.getElementById("flag");
  let result = document.getElementById("result");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let randomCountry = data[Math.floor(Math.random() * data.length)];
      console.log(randomCountry);
      flag.innerHTML = `<img src = "${randomCountry.flags.png}" class="flag-img">`;
      submitBtn.addEventListener("click", function () {
        let countryInput = document.getElementById("countryInput").value;
        if (countryInput === randomCountry.name.common) {
          result.innerHTML = "Correct!";
        } else {
          result.innerHTML =
            "Incorrect! Tara este " + randomCountry.name.common + "!";
        }
      });
    });
};
