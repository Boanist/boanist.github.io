const API_KEY = "2c2161288d4d53a6f8deef071b4feb48";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector("#weather div:nth-child(1)");
      const weather = document.querySelector("#weather div:nth-child(2)");
      const temp = document.querySelector("#weather div:nth-child(3)");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    })
  );
  console.log(lat, lng);
};

const onGeoError = () => {
  alert("위치 조회에 실패했슷ㅂ니다. 날씨 정보를 불러올 수 없습니다.");
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
