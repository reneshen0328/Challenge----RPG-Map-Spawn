const Character = require("./character")
const Player = require("./player")
const Monster = require("./monster")

class Map {
    constructor(){
        this.map = [];
        this.collision = false;
    }

    // Generating a 4X4 array
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

    //Generating 1 player and 6 monsters onto the map created
    spawnPlayerMonster(player,monster){
        let monsterCount = 0;
        for(let i=0;i<4;i++){
            this.map[Math.floor(Math.random() * 4)][Math.floor(Math.random()*4)]=monster;
            monsterCount++;
            if(monsterCount>=6){
                console.log("Stop adding monster!");
            }else{
                this.map[Math.floor(Math.random() * 4)][Math.floor(Math.random()*4)]=monster;
                monsterCount++;
            };
        };

        const randomMapRow = this.map[Math.floor(Math.random()*4)];
        if(!this.map.includes(player)){
                randomMapRow[Math.floor(Math.random()*4)]=player;
        };

        console.log("The map:",this.map);
        return this.map;
    };

    //Updating the collision status to true or false based on player and moster's position
    updateCollision(map,player,monster){
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if((map[i][j] == player) && (map[i][j] == monster)){
                this.collision=true;
                };
                console.log("i:",i,"j:",j)
            };
        };
        console.log("Collision status:",this.collision)
    }
}

module.exports = Map