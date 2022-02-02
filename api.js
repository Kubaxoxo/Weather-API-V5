let weather = {
    apiKey: "e1d50c293c354b6908f5bbf580356b08",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&lang=pl&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity, pressure } = data.main;
      const { speed, deg } = data.wind;
      const { visibility } = data;
      const { all } = data.clouds;
      document.querySelector(".time-zone").innerText = name;
      document.querySelector(".description").innerText = description;
      document.querySelector(".w-icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".temp").innerText = "Dzień: " + temp + "°C";
      document.querySelector(".humidity").innerText =
      "Wilgotność: " + humidity + "%";
      document.querySelector(".wind").innerText =
      "Prędkość wiatru: " + speed + " km/h";
      document.querySelector(".wind-deg").innerText = "Kierunek wiatru: " + deg + "°";
      document.querySelector(".clouds").innerText = "Ilość chmur: " + all;
      document.querySelector(".pressure").innerText =
      "Ciśnienie: " + pressure + " hPa";
      document.querySelector(".visibility").innerText =
      "Widoczność: " + visibility + " m";
    },
  };
  
  weather.fetchWeather("Skawina");

  function zegarek()
  {
      var data = new Date();
      var godzina = data.getHours();
      var minuta = data.getMinutes();
      var sekunda = data.getSeconds();
      var dzien = data.getDate();
      var dzienN = data.getDay();
      var miesiac = data.getMonth();
      var rok = data.getFullYear();
     
      if (minuta < 10) minuta = "0" + minuta;
      if (sekunda < 10) sekunda = "0" + sekunda;
     
      var dni = new Array("Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");
      var miesiace = new Array("Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia");
     
      var pokazDate = dni[dzienN] + ', ' + dzien + ' ' + miesiace[miesiac] + ' ' + rok;
      document.getElementById("date").innerHTML = pokazDate;
      var pokazGodzine = godzina + ':' + minuta + ':' + sekunda;
      document.getElementById("time").innerHTML = pokazGodzine;
      setTimeout(zegarek, 1000);            
  }        