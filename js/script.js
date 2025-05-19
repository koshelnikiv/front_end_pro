/*
За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current

Також потрібно додати кнопку оновлення данних.
*/

async function fetchWeather() {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=dnipro&appid=5a107c1e7ce1deaaed1186767ed4ec01&units=metric&lang=ua';
  const weatherDiv = document.getElementById('weather');
  weatherDiv.innerHTML = 'Оновлення...';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Помилка завантаження');
    const data = await response.json();

    const cityName = data.name;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const windSpeed = data.wind.speed;

    // Дата
    const now = new Date();
    const day = now.toLocaleDateString('uk-UA', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    const timeString = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

    weatherDiv.innerHTML = `
          <div class="top-bar">
            <div>${day}</div>
            <div>📅 ${cityName}</div>
          </div>

          <div class="main">
            <div>
              <div class="clock">
                <span id="hours">${now.getHours().toString().padStart(2, '0')}</span>:
                <span id="minutes">${now.getMinutes().toString().padStart(2, '0')}</span>
              </div>
              <div class="details">
                Вологість: ${humidity}%<br>
                Тиск: ${pressure} hPa<br>
                Вітер: ${windSpeed} м/с
              </div>
            </div>

            <div class="weather-info">
              <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon">
              <div class="temperature">${temp}°C</div>
              <div>Відчувається як: ${feelsLike}°C</div>
              <div class="description">${description}</div>
            </div>
          </div>

          <div class="bottom-bar">
            <div id="datetime">Оновлено: ${timeString}</div>
            <button class="refresh-btn" onclick="fetchWeather()">🔄</button>
          </div>
        `;
  } catch (err) {
    document.getElementById('weather').innerHTML = 'Не вдалося завантажити погоду.';
  }
}

// Живе оновлення годинника
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const hSpan = document.getElementById('hours');
  const mSpan = document.getElementById('minutes');
  if (hSpan && mSpan) {
    hSpan.textContent = hours;
    mSpan.textContent = minutes;
  }
}

fetchWeather();
setInterval(updateClock, 1000);