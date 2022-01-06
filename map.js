const Character = require("./character")
const Player = require("./player")
const Monster = require("./monster")

class Map {
    constructor(){
        this.map = [];
    }

    generateMap(){
        // 1 array must have 4 values 
        for (let i = 0; i < 4; i++){
            this.map[i]=new Array();
            for(let j = 0; j < 4; j++){
                this.map[i][j];
            }
          };
        console.log(this.map)
        
        // the whole map must have 4 arrays 
        // the values(row and column) must be [p],[m],or 0
    }
}

const testMap = new Map()
testMap.generateMap();

//TESTING if the code works before implementing into the actual code
function exampleMap(){
    let testMap = [];
    let randomNumber = Math.floor(Math.random()*4);
    const randomPlayer = "p";
    const randomMonster = "M";
    

    for (let i = 0; i < 4; i++){
        testMap[i]=new Array();
        for(let j = 0; j < 4; j++){
            testMap[i][j]=0;
        }
      };

      const randomMapRow = testMap[randomNumber];

      console.log("TESTING THE MAP:",testMap)
      console.log("TESTING THE random row:",randomMapRow)
}

exampleMap();

module.exports = Map