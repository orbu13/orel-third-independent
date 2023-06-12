let form = document.getElementById("numberForm")

form.addEventListener("submit", e => {
  e.preventDefault() //prevent refresh

  let inputValue = document.getElementById("numberInput").value

  let outputDive.innerHTML = beepBoop(inputValue)

})

function beepBoop(inputValue) {
  let result = []

  for (let i = 0; i <= inputValue; i++) {
    let num = i + ""

    if (num.includes("1")) {
      result.push("Won't you be my neighbor?!")
    }
    else if (num.includes("2")) {
      result.push("Boop!")
    }
    else if (num.includes("3")) {
      result.push("Beep!")
    }