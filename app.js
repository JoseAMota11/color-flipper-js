const btn = document.querySelector("#btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
  let rgbColor = colorRGBGenerator()
  document.querySelector(".container").style.backgroundColor = rgbColor
  color.textContent = rgbColor
})

function colorRGBGenerator() {
  let rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
  return rgb
}

function randomNumber() {
  const { random, floor } = Math
  let randomNumber = floor(random() * 255)
  return randomNumber
}

window.addEventListener("DOMContentLoaded", () => {
  let rgbColor = colorRGBGenerator()
  document.querySelector(".container").style.backgroundColor = rgbColor
  color.textContent = rgbColor
})