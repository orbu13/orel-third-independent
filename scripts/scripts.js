let form = document.getElementById("numberForm")

form.addEventListener("submit", e => {
  e.preventDefault()//prevent refresh

  // getting value of input
  let inputValue = document.getElementById("numberInput").value
  // get hold of output div
  let outputDiv = document.getElementById("output")
  let result = []

  // looping through to inputvalue and pushing as string to numbers
  for (let i = 0; i <= inputValue; i++) {
    let num = `${i}`
    if (num.includes("3")) {
      result.push("Won't you be my neighbor?!")
    }
    else if (num.includes("2")) {
      result.push("Boop!")
    }
    else if (num.includes("1")) {
      result.push("Beep!")
    }
    else {
      result.push(num)
    }
  }

  outputDiv.innerHTML = result.join(", ")
})