document.body.onload = function () {pageLoad()}; //On load effect
johnsonButton.addEventListener("mouseover", hideButton); //Removes the other candidate button
textRemove.addEventListener("mousemove", hideButton); //Removes the other candidate button
window.addEventListener("contextmenu", (e) => {e.preventDefault()}); //Disables context menu
presidentImg.addEventListener("click", hideButton); //Plays a sound on click and removes the image
nixonButton.addEventListener("click", voteNixon)

function pageLoad(){ //Activates on load
    document.getElementById("textRemove").style.top = "-100px"
}
function voteNixon(){ //Creates movable button
    this.style.display = "none";
    let temp = document.createElement("p")
    temp.setAttribute("id", "postButton")
    mainArea.appendChild(temp)
}
function hideButton(){ //Hides whatever is clicked or hovered
    this.style.display = "none";
}

mainArea.onclick = function (event) {
    let screenCoords = this.getBoundingClientRect();

    let buttonCoords = {
        top: event.clientY - screenCoords.top - mainArea.clientTop - postButton.clientHeight / 2 - 10,
        left: event.clientX - screenCoords.left - mainArea.clientLeft - postButton.clientWidth / 2 - 10,
    }

    postButton.style.left = (300 + Number(buttonCoords.left)) + "px"
    postButton.style.top = (100 + Number(buttonCoords.top)) + "px"
}