let countEL = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment () {
    //count = count + 1
      count +=   1
    countEL.textContent = count
}


function save () {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    console.log(count)
    countEL.textContent = 0
    count = 0
}









