const imgs = [
    "images/Gob3.jpg",
    "images/jollof rice and chicken.jpg",
    "images/yam and palava sauce.jpg"
]

function renderImages(imageArray) {
    const container = document.getElementById("container")
    let htmlContent = "";

for (let i = 0; i < imageArray.length; i++) {
    htmlContent += `<img 
    
                        src="${imageArray[i]}" 
                        alt="Delicious dish" 
                        class="team-img">  
            
                    `
   }
   container.innerHTML = htmlContent
}
console.log(renderImages(imgs))



/*
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)

}   else {
    console.log(`The winner is  ${opponent}! ${player} lost the game`)
}



let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
/*
function logOut(arr) {
    for(i = 0; i < myCourses.length; i++) {
        console.log(myCourses[i])
    }
}

logOut()
*/
// OR
/*
function logOut(arr) {
    for(i = 0; i < myCourses.length; i++) {
        console.log(arr[i]) 
    }
}

logOut(myCourses)


//Save a value to localStorage
console.log(localStorage.setItem("myLeads", "www.abel.gh"))
// Delete your code and refresh the page
/*del*/ //console.log(localStorage.setItem("myLeads", "www.abel.gh"))
// Fetch your value from localtorage and log it out
// console.log(localStorage.getItem("myLeads"))

/*
const butEl = document.querySelector("#but-el")

let data = [    
    {
        player: "Jane",
        score: 52
    },
    {   
        player: "Mark",
        score: 41
    }
]

butEl.addEventListener("click", function(){
    console.log(data[0].score)
})
*/
/*
function generateSentence(desc, arr) {
    for(i = 0; i < arr.length; i++) {
        return (`The ${arr.length} ${desc} are ${arr}`)
    }
}
console.log(generateSentence("largest countries", ["china", " India", " USA"]))
*/
/*
arr = ["China", "India", "USA"]
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for(i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        }  else {
            baseString += arr[i] + " ,"
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)
*/

