const Character = require("./character")

class Player extends Character{
    constructor(name,HP,attacks,conscious=true){
    super(name,HP,attacks);
    this.conscious=conscious;
    }
}

module.exports = Player