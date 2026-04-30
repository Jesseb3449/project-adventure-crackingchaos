import {story, playerName} from "/story.js";
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const sceneImg = document.getElementById("scene");
const currentText = document.getElementById("current-text");
const characterButton = document.getElementById("character-select");
const gameButton = document.getElementById("game-shortcut");
const startButton = document.getElementById("start-Btn");
const maleButton = document.getElementById("male");
const femaleButton = document.getElementById("female");
const mainMenu = document.getElementById("menu-Screen");
const genderScreen = document.getElementById("gender-Screen");
const maleSelect = document.getElementById("character-Select-male");
const femaleSelect = document.getElementById("character-Select-female");
const gameScreen = document.getElementById("game-Screen");
let position = ["menu-Screen",];
let gender = false;
let character = "";
const gameStats = { fame: 0, wealth: 0, heat: 0};
const choices = [choice1, choice2, choice3];

function playerNameUpdate(){
    playerName = character;
    return playerName;
}

function goTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screen).classList.add('active');
    if(position.at(-1) === screen){return;}
    else{
    findPos(screen);
    };
}

function findPos(now){
    position.push(now);
    console.log(position);
    return position;
}

document.getElementById('back').addEventListener("click", backPage => {
    if(position.at(-1) === "menu-Screen"){
        return;
    }else {
        position.pop();
        console.log(position);
        goTo(position.at(-1));
        return position;
    };
})

startButton.addEventListener("click", () =>{
    goTo("gender-Screen");
})

maleButton.addEventListener("click", () =>{
    goTo("character-Select-male");
    gender = true;
    return gender;
})

femaleButton.addEventListener("click", () =>{
    goTo("character-Select-female");
})

document.querySelectorAll(".characters").forEach(btn => {
    btn.addEventListener("click", (starter) =>{
        const selectedCharacter = starter.currentTarget.id;
        console.log("Selected", selectedCharacter);
        goTo("game-Screen");
        character = selectedCharacter;
        playerNameUpdate();
        console.log(character);
        characterCheck();
        return character;
})})

document.getElementById("male-slect").addEventListener("click", () =>{
    goTo("character-Select-female");
    console.log("test-path");
})

document.getElementById("male-slect1").addEventListener("click", () =>{
    goTo("game-Screen");
    console.log("test-path");
})

function characterCheck(){
    if(gender = male){
        switch (character.toLowerCase()){
            case "jesse":
                choice1.textContent = story.jessieStart.choice.at(0);
                choice2.textContent = story.jessieStart.choice.at(1);
                choice3.textContent = story.jessieStart.choice.at(2);
            break;

            case "rei":
                
            break;

            case "jesus":
                
            break;
        }
    }
}