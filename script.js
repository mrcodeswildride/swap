let cup1 = document.getElementById(`cup1`)
let cup2 = document.getElementById(`cup2`)
let cup3 = document.getElementById(`cup3`)
let messageParagraph = document.getElementById(`messageParagraph`)

let selectedCup

cup1.addEventListener(`click`, clickCup)
cup2.addEventListener(`click`, clickCup)
cup3.addEventListener(`click`, clickCup)

function clickCup() {
  if (selectedCup == null) {
    // select cup
    selectedCup = this
    selectedCup.classList.add(`selected`)
  }
  else {
    if (selectedCup != this) {
      // get contents of selected cups
      let firstCupContents = selectedCup.firstElementChild.className
      let secondCupContents = this.firstElementChild.className

      if (firstCupContents != `empty`) {
        // empty first cup
        selectedCup.firstElementChild.className = `empty`

        // determine what should be in second cup
        if (secondCupContents == `empty`) {
          // second cup will have whatever was in first cup
          this.firstElementChild.className = firstCupContents

          // check if user solved illustration
          checkSolved()
        }
        else {
          // second cup will have mixed juice
          this.firstElementChild.className = `mixed`
        }
      }
    }

    // start over
    selectedCup.classList.remove(`selected`)
    selectedCup = null
  }
}

function checkSolved() {
  // get contents of cup 1 and cup 2
  let cup1Contents = cup1.firstElementChild.className
  let cup2Contents = cup2.firstElementChild.className

  // check if cup 1 has grape juice and cup 2 has orange juice
  if (cup1Contents == `grape` && cup2Contents == `orange`) {
    // show message
    messageParagraph.innerHTML = `Good job!`

    // disable cup selection
    cup1.removeEventListener(`click`, clickCup)
    cup2.removeEventListener(`click`, clickCup)
    cup3.removeEventListener(`click`, clickCup)
  }
}