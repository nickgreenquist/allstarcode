class Pokemon {
  constructor(name, type, hp, def, atk, legend) {
    //check if name exists and valid
    if(name) {
      if(typeof(name) === 'string') {
        this.name = name;
      } else {
        throw new TypeError("Name must be string");
      }
    }

    //check if type exists and valid
    if(type) {
      if(typeof(type) === 'string') {
        this.type = type;
      } else {
        throw new TypeError("Type must be string");
      }
    }

    //check if hp exists and valid
    if(hp) {
      if(typeof(hp) === 'number') {
        this.hp = hp;
      } else {
        throw new TypeError("HP must be number");
      }
    }

    //check if def exists and valid
    if(def) {
      if(typeof(def) === 'number') {
        this.def = def;
      } else {
        throw new TypeError("DEF must be number");
      }
    }

    //check if atk exists and valid
    if(atk) {
      if(typeof(atk) === 'number') {
        this.atk = atk;
      } else {
        throw new TypeError("ATK must be number");
      }
    }

    //check if legend exists and valid
    if(legend) {
      if(typeof(legend) === 'boolean') {
        this.legend = legend;
      } else {
        throw new TypeError("Legend must be boolean");
      }
    }

    //add this instance to class array
    if(Pokemon.all) {
      Pokemon.all.push(this);
    }
    else {
      Pokemon.all = [this];
    }
  }

  attack(target) {
    //enforce target to be of type Pokemon
    if(target instanceof Pokemon) {
      target.hp = target.hp - (this.atk - target.def);
    }
    else {
      throw new TypeError("Target is not a Pokemon!");
    }
  }

  aliveCheck() {
    return (this.hp > 0);
  }
}

// exporting
module.exports={
  pokemon:Pokemon
}