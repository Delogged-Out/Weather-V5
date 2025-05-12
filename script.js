async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // ← Replace this
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("weatherResult").classList.remove("hidden");
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `${data.main.temp} °C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    alert("Error: " + error.message);
    document.getElementById("weatherResult").classList.add("hidden");
  }
}
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "YOUR_API_KEY"; // ← Replace this

  if (city.toLowerCase() === "lorem ipsum") {
    activateSecretMode();
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("weatherResult").classList.remove("hidden");
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `${data.main.temp} °C`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    alert("Error: " + error.message);
    document.getElementById("weatherResult").classList.add("hidden");
  }
}

function activateSecretMode() {
  window.open("encryptor.html", "_blank");
}
