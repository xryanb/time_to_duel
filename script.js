class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}


class Unit extends Card {
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power=power;
        this.resilience=resilience;
    }

    attack(target){
        target.resilience -= this.power;
        console.log(`${this.name} attacked ${target.name}'s ,resilience was lowered to ${target.resilience}!`);
        return this;
    }
}


class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }

    play( target ) {
            if( target instanceof Unit ) {
            console.log(`${this.name}  to ${target.name}, ${this.stat} adjusted by ${this.magnitude}`)
                target[this.stat] += this.magnitude;
            } else {
                console.log( "Target must be a unit!" );
            }
        }
        
}

const redBeltNinja= new Unit('Red Belt Ninja',3,3,4);
const blackBeltNinja=new Unit('Black Belt Ninja',4,5,4);
const hardAlgorithm= new Effect(' Hard Algorithm',2,"increase target's resilience by 3",'resilience', 3);
const unhandlePromise= new Effect(' Unhandled Promise Rejection',1,"reduce target's resilience by 2",'resilience', -2);
const pairProgramming= new Effect(' Pair Programming',3,"increase target's power by 2",'power', 2);


hardAlgorithm.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);