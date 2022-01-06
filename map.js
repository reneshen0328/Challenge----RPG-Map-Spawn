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

function exampleMap(){
    let testMap = [];
    for (let i = 0; i < 4; i++){
        testMap[i]=new Array();
        for(let j = 0; j < 4; j++){
            testMap[i][j];
        }
      };
      console.log(testMap)
}

const testingMap = exampleMap();
// console.log(testingMap)

module.exports = Map