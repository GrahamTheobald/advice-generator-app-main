const button = document.querySelector(".dice")
const number = document.querySelector(".number")
const advice = document.querySelector(".advice")

button.addEventListener("click", render)
render()

async function render() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    number.textContent = data.slip.id
    advice.textContent = `"${data.slip.advice}"`
}