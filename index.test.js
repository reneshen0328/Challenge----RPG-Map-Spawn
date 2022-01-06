const Character = require("./character")
const Player = require("./player")
const Monster = require("./monster")
const Map = require("./map")

describe("The player and monster is child of character",()=>{
    const testPlayer = new Player("Rene",100,20)
    const testMonster = new Monster("kb",100,20,false)

    test("is instance of",()=>{
        expect(testPlayer instanceof Character).toBeTruthy()
        expect(testMonster instanceof Character).toBeTruthy()
    })
})

describe("The charactor is player or monster",() => {
    const testPlayer = new Player("Rene",100,20)
    const testMonster = new Monster("kb",100,20,false) //Can overwrite the default conscious state here

    test('if charactor class matches conscious state', () => {
        expect(testPlayer.conscious).toBe(true);
        expect(testMonster.conscious).toBe(false);
    })
})