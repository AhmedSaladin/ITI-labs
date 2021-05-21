var firstName = Symbol();
class person{
     _addr="123";//naming convinision
     #add="123";//private Member
     constructor(pname = "Ali",page = 3){
         var test = "dsfsd";
         this._personName = pname;
         this._peronAge = page;
         this[firstName] = "test Symbol";
         this.getTest=function(){
             return test;
         }
     }    

     get PersonName(){
         return this._personName;
     }

     set PersonName(val){
         this._personName = val;
     }

     static fun(){
         return 'abc'
     }
     
     static get staticProp(){
         return 'this is a static proparty'
     }

     displayInfo(){
         return `this is ${this._personName} and age ${this._peronAge} and ${this.#add}`
     }

     toString(){
        return `this is ${this._personName} and age ${this._peronAge} and ${person.staticProp}`

     }

}

//Member function
person.prototype.displayData=function(){
    //return `this is ${this._personName} and age ${this._peronAge} and ${this.#add}`
}

//class function
person.display=function(){
    return 'hello'
}


export default class user extends person{
    p1 = 10;
    constructor(p2=1,p3=4,name,age){
        super(name,age);
        //person.call(this,name,age)
       // console.log(this.#add);
    }
}




/*var Test = class{

}*/









