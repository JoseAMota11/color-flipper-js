const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.querySelector("#btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
  let hexColor = colorHexGenerator()
  document.querySelector(".container").style.backgroundColor = hexColor
  color.textContent = hexColor
})

function colorHexGenerator() {
  let hex = "#"
  for (let i = 0; i < 6; i++) {
    hex += hexColors[randomNumber()]
  }
  return hex
}

function randomNumber() {
  const { random, floor } = Math
  let randomNumber = floor(random() * hexColors.length)
  return randomNumber
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").style.backgroundColor = colorHexGenerator()
  color.textContent = colorHexGenerator()
})