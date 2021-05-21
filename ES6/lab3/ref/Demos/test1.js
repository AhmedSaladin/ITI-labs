var firstName = Symbol();
class person{
    #add = "private";
     _abc=10;
    constructor(p2,p1){
        this._personName = p2;
        this._personAge = p1;
        this[firstName] = "testCase";
    }

    get PersonName(){
        return this._personName        
    }

    set PersonName(val){
        this._personName = val;
    }

    static fun(){
        return 'abc'
    }

    static get staticProp(){
        return `this is static prop`;
    }
    displayInfo(){
        return `this is ${this._personName} and this is ${this.#add}`;
    }
    /*toString(){
        return `this is ${this._personName} and age ${this._personAge}`;
    }*/
}

person.prototype.displaypro = function(){
    //return `this is ${this._personName} and this is ${this.#add}`;
}
person.prototype.toString=function(){
    return `this is ${this._personName} and age ${this._personAge}`;
}


///Inheritance 
 export default class user extends person{
    p1=10;
    constructor(p2=1,p1=2,n,a){
        super(n,a)
        this[firstName]="Mona"
    }
}


