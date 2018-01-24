let Pokemon = require ("../js/nick_pokemon.js").pokemon;
describe("Pokemon",function(){
    let pikachu, squirtle;

    beforeEach(function(){
        pikachu = new Pokemon("Pikachu","Electric",100, 15, 50, false);
        squirtle = new Pokemon("Squirtle","Water",150, 20, 30, false);
    });

    afterEach(function(){
        delete Pokemon.all;
    });
    it("should be defined",function(){
        expect(Pokemon).toBeDefined();
    });

    describe(".name",function(){
        it("should be defined as the 1st parameter supplied during construction",function(){
            expect(pikachu.name).toBe("Pikachu");
        });
        
        it("should throw an error if wrong data type used",function(){
            expect(()=>new Pokemon(5,"water",100, 15, 50, false)).toThrow();
        });
    });
    describe(".type",function(){
        it("should be defined as the 2nd parameter supplied during construction",function(){
            expect(pikachu.type).toBe("Electric");
        });
        
        it("should throw an error if wrong data type used",function(){
            expect(()=>new Pokemon("Squirtle",5,100, 15, 50, false)).toThrow();
        });
    });
    describe(".hp",function(){
        it("should be defined as the 3rd parameter supplied during construction",function(){
            expect(pikachu.hp).toBe(100);
        });
        
        it("should throw an error if wrong data type used",function(){
            expect(()=>new Pokemon("Squirtle","water","100", 15, 50, false)).toThrow();
        });
    });
    describe(".def",function(){
        it("should be defined as the 4th parameter supplied during construction",function(){
            expect(pikachu.def).toBe(15);
        });
        
        it("should throw an error if wrong data type used",function(){
            expect(()=>new Pokemon("Squirtle","water",100, "15", 50, false)).toThrow();
        });
    });
    describe(".atk",function(){
        it("should be defined as the 5th parameter supplied during construction",function(){
            expect(pikachu.atk).toBe(50);
        });
        
        it("should throw an error if wrong data type used",function(){
            expect(()=>new Pokemon("Squirtle","water",100, 15, "50", false)).toThrow();
        });
    });
    describe(".legend",function(){
        it("should be defined as the 6th parameter supplied during construction",function(){
            expect(pikachu.legend).toBeFalsy();
        });
        
        it("should throw an error if wrong data type used",function(){
            expect(()=>new Pokemon("Squirtle","water",100, 15, 50, 5)).toThrow();
        });
    });

    describe(".attack()",function(){
        it("should reduce the input Pokemon object's hp by the current Pokemon's .atk minus the target Pokemon's .def",function(){
            pikachu.attack(squirtle)
            expect(squirtle.hp).toBe(120);
        });
        
        it("should throw an error if input parameter is not a Pokemon object",function(){
            expect(()=>pikachu.attack(5)).toThrow();
        });
    });
    describe(".aliveCheck()",function(){
        it("should return true when Pokemon has .hp over 0",function(){
            expect(()=>pikachu.aliveCheck()).toBeTruthy();
        });
        it("should return false when Pokemon has .hp of 0",function(){
            pikachu.hp = 0;
            expect(pikachu.aliveCheck()).toBeFalsy();
        });
    });
    describe("Pokemon.all",function(){
        it("should return an array",function(){
            expect(Array.isArray(Pokemon.all)).toBeTruthy();
        });
        
        it("should return an array of the previously instantiated Pokemon",function(){
            expect(Pokemon.all.length).toBe(2);
            expect(Pokemon.all).toContain(pikachu);
            expect(Pokemon.all).toContain(squirtle);
        });
    });
})