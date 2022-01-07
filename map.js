const Character = require("./character")
const Player = require("./player")
const Monster = require("./monster")

class Map {
    constructor(){
        this.map = [];
        this.collision = false;
        // this.randomPlayer = "p";
        // this.randomMonster = "M";
    }

    // Generating a 4X4 array
    generateMap(){
        for (let i = 0; i < 4; i++){
            this.map[i]=new Array();
            for(let j = 0; j < 4; j++){
                this.map[i][j]=0;
            }
          };
    }

    //Generating 1 player and 6 monsters onto the map created
    spawnPlayerMonster(player,monster){
        let monsterCount = 0;
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(this.map[i][j] == monster){
                monsterCount++;
                };
            };
            if(monsterCount>=6){
                return this.map;
            }else{
                this.map[Math.floor(Math.random() * 4)][Math.floor(Math.random()*4)]=monster;
            };
            this.map[Math.floor(Math.random() * 4)][Math.floor(Math.random()*4)]=monster;
    };

        const randomMapRow = this.map[Math.floor(Math.random()*4)];
        if(!this.map.includes(player)){
                randomMapRow[Math.floor(Math.random()*4)]=player;
            };

        console.log("The map:",this.map);
        return this.map;
    };

    //Updating the collision status to true or false based on player and moster's position
    updateCollision(map){
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(map[i][j] == this.randomMonster == this.randomPlayer){
                this.collision=true;
                };
            };
        };
        console.log("Collision status:",this.collision)
    }
}

module.exports = Map