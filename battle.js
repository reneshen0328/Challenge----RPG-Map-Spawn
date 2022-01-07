const Player = require("./player")
const Monster = require("./monster")
const Map = require("./map")

//Create instances
const testMap = new Map();
const testPlayer = new Player("P",100,{
    "Punch":20
});
const testMonster= new Monster("M",50,{
    "Whip":10
});

//Create battle function 
function battle(map,player,monster){
    let playerHP = player.HP;
    let monsterHP = monster.HP;

    if(map.collision){
        playerHP -= monster.attacks.Whip;
        monsterHP -= player.attacks.Punch;
        console.log("Player hp:",playerHP,"Monster hp:",monsterHP)

    while((playerHP>0) && (monsterHP > 0)){
        console.log("Please attack the monster again!");
        playerHP -= monster.attacks.Whip;
        monsterHP -= player.attacks.Punch;

        if((playerHP>0) && (monsterHP <= 0)){
            console.log("The player has won")
            console.log("Player hp:",playerHP,"Monster hp:",monsterHP)
        }
        if(playerHP<0){
            console.log("GAME OVER!")
            console.log("Player hp:",playerHP,"Monster hp:",monsterHP)
        }
    }
        
    }else{
        console.log("Player has not meet any monster!")
    }
    
}

//Generate a map with a player and 6 monsters
testMap.generateMap();
testMap.spawnPlayerMonster(testPlayer.name,testMonster.name);

battle(testMap,testPlayer,testMonster)