const Character = require("./character")

class Monster extends Character{
    constructor(name,HP,attacks,conscious=false){
        super(name,HP,attacks);
        this.conscious=conscious;
        }
}

module.exports = Monster