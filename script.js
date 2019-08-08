var cup1 = document.getElementById("cup1");
var cup2 = document.getElementById("cup2");
var cup3 = document.getElementById("cup3");
var message = document.getElementById("message");

var firstSelectedCup = null;

cup1.addEventListener("click", select);
cup2.addEventListener("click", select);
cup3.addEventListener("click", select);

function select() {
    if (firstSelectedCup == null) {
        // select cup
        this.classList.add("selected");
        firstSelectedCup = this;
    }
    else {
        if (firstSelectedCup != this) {
            // get contents of both cups
            var firstSelectedCupContents = firstSelectedCup.firstElementChild.className;
            var secondSelectedCupContents = this.firstElementChild.className;

            if (firstSelectedCupContents != "empty") {
                // empty the first selected cup
                firstSelectedCup.firstElementChild.className = "empty";

                // determine what should be in the second selected cup
                if (secondSelectedCupContents == "empty") {
                    // second selected cup will have whatever was in first selected cup
                    this.firstElementChild.className = firstSelectedCupContents;

                    if (isSolved()) {
                        // show message and disable cup selection
                        message.innerHTML = "Good job!";
                        cup1.removeEventListener("click", select);
                        cup2.removeEventListener("click", select);
                        cup3.removeEventListener("click", select);
                    }
                }
                else {
                    // second selected cup will have mixed juice
                    this.firstElementChild.className = "mixed";
                }
            }
        }

        // start over
        firstSelectedCup.classList.remove("selected");
        firstSelectedCup = null;
    }
}

function isSolved() {
    // get contents of cup 1 and cup 2
    var cup1Contents = cup1.firstElementChild.className;
    var cup2Contents = cup2.firstElementChild.className;

    // check if cup 1 has grape juice and cup 2 has orange juice
    return cup1Contents == "grape" && cup2Contents == "orange";
}
