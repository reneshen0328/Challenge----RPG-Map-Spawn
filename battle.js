const Character = require("./character")
const Player = require("./player")
const Monster = require("./monster")
const Map = require("./map")


//Create instances
const testMap = new Map();
const testPlayer = new Player(["P"],100,40);
const testMonster= new Monster(["M"],50,20);

//Create battle function 
function battle(){
    let testPlayerHP = testPlayer.HP - testMonster.attacks;
    let testMonsterHP = testMonster.HP - testPlayer.attacks;

    if((testPlayerHP>0) && (testMonsterHP <= 0)){
        console.log("The player has won")
    }if((testPlayerHP>0) && (testMonsterHP > 0)){
        console.log("Please attack the monster again!");
    }if(testPlayerHP<0){
        console.log("GAME OVER!")
    }
}

//Generate a map with a player and 6 monsters
testMap.generateMap();
const wholeMap = testMap.spawnPlayerMonster(testPlayer.name,testMonster.name);
const collisionStatus = testMap.updateCollision(wholeMap);

//Battle if the player meets a moster
if(collisionStatus){
    battle();
}