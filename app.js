const btn = document.querySelector("#btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = colorRGBGenerator()
  color.textContent = colorRGBGenerator()
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
  document.querySelector(".container").style.backgroundColor = colorRGBGenerator()
  color.textContent = colorRGBGenerator()
})