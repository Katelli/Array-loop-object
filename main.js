let joinedList = document.querySelector("#users")

function createNewUser() {
    let inputName = document.querySelector("#name")
    let joinedName = inputName.value
    let liElement = document.createElement("li")
    let liNumber = joinedList.querySelectorAll("ul li").length;

    if (liNumber < 6 ) {
        liElement.innerHTML = `
            <div id="user ${liNumber+1}">
                <p> ${joinedName}</p>
                <button>Log out</button>
            </div>
        `
        joinedList.append(liElement)
        console.log(liNumber+1)
        inputName.value = ""
    } else {
        alert("Maximum number reached")
        inputName.value = ""
    }

    let player1 = {
        id: 1,
        playerScore: 0,
        body: "Let's play!",
        favorited: false
    }

    let player2 = {
        id: 2,
        playerScore: 0,
        body: "Let's play!",
        favorited: false
    }

    let player3 = {
        id: 3,
        playerScore: 0,
        body: "Let's play!",
        favorited: false
    }

    let player4 = {
        id: 4,
        playerScore: 0,
        body: "Let's play!",
        favorited: false
    }

    let player5 = {
        id: 5,
        playerScore: 0,
        body: "Let's play!",
        favorited: false
    }

    let player6 = {
        id: 6,
        playerScore: 0,
        body: "Let's play!",
        favorited: false
    }

    let players = [player1, player2, player3, player4, player5, player6]

    for (let i = 5; i < players.length; i++ ) {
        createPlayerCard(players[i])
    }
    
    function createPlayerCard(playerInfo) {
            let wrapper = document.createElement("li")
            wrapper.innerHTML = `
             <div class="playerCard${liNumber+1} flex flex-col align-it-center fg-quaternary">
                <h2>${joinedName}</h2>
                <div class="icon"></div>
                <p> Score: ${playerInfo.playerScore}</p> 
                <p>${playerInfo.body}</p> 
             </div>
            `
    
        let playerList = document.querySelector("#players")
        playerList.append(wrapper)
    }
}

let addUserButton = document.querySelector("#join")
addUserButton.addEventListener("click", createNewUser)

function DarkFunction() {
    let element = document.body;
    let icon = document.getElementById("icon");
    let mode = document.getElementById("mode");
    element.classList.toggle("dark-mode");
    icon.classList.toggle("icon-dark");
    if (mode.textContent === "Dark Mode") {
        mode.textContent = "Light Mode";
      } else {
        mode.textContent = "Dark Mode";
      }
}

let ButtonDark = document.querySelector("#mode")
ButtonDark.addEventListener("click", DarkFunction)
