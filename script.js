const cities = ["Белгород", "Краснодар", "Казань", "Москва", "Санкт-Петербург"];
const temperatures = [];

const label = document.querySelector(".temp__label");
const input = document.querySelector(".temp__degree");
const button = document.querySelector(".temp__button");
const list = document.querySelector(".temp__list");

//работающий код через промт

function requestTemperature(city) {
  const temperature = parseFloat(
    prompt(`Введите температуру в городе ${city}:`)
  );
  return isNaN(temperature) ? requestTemperature(city) : temperature;
}

for (city of cities) {
  const temperature = requestTemperature(city);
  temperatures.push(temperature);
}

for (let i = 0; i < cities.length; i++) {
  const listItem = document.createElement("div");
  listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
  list.appendChild(listItem);
}

const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);

const maxT = document.createElement("p");
maxT.textContent = `Максимальная температура: ${maxTemp}°C`;
list.appendChild(maxT);

const minT = document.createElement("p");
minT.textContent = `Минимальная температура: ${minTemp}°C`;
list.appendChild(minT);

//попытки сделать все через инпут

// label.textContent = `Введите температуру для города: ${cities[0]}`;
// let currentIndex = 0;

// button.addEventListener("click", function () {
//   const temp = input.value;
//   temperatures.push(temp);
//   currentIndex++;
//   if (currentIndex < cities.length) {
//     label.textContent = `Введите температуру для города: ${cities[currentIndex]}`;
//     input.value = "";
//   } else {
//     for (let i = 0; i < cities.length; i++) {
//       const listItem = document.createElement("div");
//       listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
//       list.appendChild(listItem);
//     }

//     const maxTemp = Math.max(...temperatures);
//     const minTemp = Math.min(...temperatures);

//     const maxT = document.createElement("p");
//     maxT.textContent = `Максимальная температура: ${maxTemp}°C`;
//     list.appendChild(maxT);

//     const minT = document.createElement("p");
//     minT.textContent = `Минимальная температура: ${minTemp}°C`;
//     list.appendChild(minT);
//   }
// });
