// Cluedo

// Kartentypen

let suspectsArray = [

    {   
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepeneur", 
        age: 45,
        description: "He has a lot of connections.",
        img: "/assets/img/cluedo_Charaktere_0003_jacobGreen.png",
        color: "green"
    },

    {

        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist", 
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy.",
        img: "/assets/img/cluedo_Charaktere_0004_doctorOrchid.png",
        color: "white"
    },

    {

        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer", 
        age: 22,
        description: "Billionaire video game designer.",
        img: "/assets/img/cluedo_Charaktere_0005_victorPlum.png",
        color: "purple"
    }, 

    {

        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress", 
        age: 21,
        description: "She is an A-list movie star with a dark past.",
        img: "/assets/img/cluedo_Charaktere_0001_kasandraScarlet.png",
        color: "red"
    },

    {

        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité", 
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity.",
        img: "/assets/img/cluedo_Charaktere_0002_eleanorPeacock.png",
        color: "blue"
    }, 

    {

        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player", 
        age: 62,
        description: "He is a former football player who tries to get by on his former glory.",
        img: "/assets/img/cluedo_Charaktere_0000_jackMustard.png",
        color: "yellow"
    }, 
]

let weaponsArray = [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}
]

let roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"},
]

// let randomSus2 = Math.floor(Math.random() * suspectsArray.length)
// let weapon = Math.floor(Math.random() * weaponsArray.length)
// let room = Math.floor(Math.random() * roomsArray.length)
// console.log(suspectsArray[randomSus2].firstName, suspectsArray[randomSus2].lastName);


// ------------------
function selectRandom(someArray) {
   return Math.floor(Math.random() * someArray.length)    
}

function pickMystery() {
    // let killerImg = document.getElementById("killerImg")
    let result = document.getElementById("result")
    let randomSus = suspectsArray[selectRandom(suspectsArray)]
    let randomWeapon = weaponsArray[selectRandom(weaponsArray)]
    let randomRoom = roomsArray[selectRandom(roomsArray)]
    // console.log(`${randomSus.firstName} ${randomSus.lastName}`);
    // console.log(randomWeapon.name);
    // console.log(randomRoom.name);
    let mystery = [randomSus, randomWeapon, randomRoom]
    result.innerHTML = [`${mystery[0].firstName} ${mystery[0].lastName} killed Mr. Boddy with a ${mystery[1].name} in the ${mystery[2].name}`];
    document.getElementById("killerImg").src = `${randomSus.img}`
}



