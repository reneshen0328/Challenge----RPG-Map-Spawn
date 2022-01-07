const Character = require("./character")
const Player = require("./player")
const Monster = require("./monster")

class Map {
    constructor(){
        this.map = [];
        this.collision = false;
    }

    // Generating a 4X4 array Map
    generateMap(){
        // METHOD 1:
        // for (let i = 0; i < 4; i++){
        //     this.map[i]=new Array();
        //     for(let j = 0; j < 4; j++){
        //         this.map[i][j]=0;
        //     }
        //   };

        // METHOD 2:
        this.map = Array(4).fill().map(()=>Array(4).fill(0))
        // console.log(this.map)
    }

    
    spawnPlayerMonster(player,monster){
        // Generating 1 player
        const randomMapRow = this.map[Math.floor(Math.random()*4)];
        if(!this.map.includes(player)){
                randomMapRow[Math.floor(Math.random()*4)]=player;
        };
        console.log(this.map)

        // Generate 6 monsters onto the map created
        let monsterCount = 0;
        while(monsterCount<6){
            let random=Math.floor(Math.random() * 4);
            let random2=Math.floor(Math.random() * 4);

            if(this.map[random][random2] !== monster){
                monsterCount++
            }

            //Updating the collision status to true or false based on player and moster's position
            if(this.map[random][random2] == player){
                //Triggers if the player meets a moster
                this.collision=true;
            }

            this.map[random][random2]=monster;
        }

        console.log("The map:",this.map);
        return this.map;
    };
}

module.exports = Map ;