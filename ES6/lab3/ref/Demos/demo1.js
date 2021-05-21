/*var x="age"
var sym=Symbol();
var sym2=Symbol();

var obj={
    name:"ali",
    [Symbol.for("abc")]:10,
    age:9,
    [sym]:"symbol prop"
}


obj[x]=10;
obj["age"]
obj.age

obj[sym]

obj[Symbol.for("abc")]
*/
////////////////
 var firstName=Symbol();
export var abeerName=Symbol();

var person=class {
    constructor(nm,age){
        this.nm=nm;
        this.age=age;
        var fun=function(){}
        
        this.abc=function(){
            fun()
        }
        
    }
     toString(){
         return `person info:${this.nm} age ${this.age}`;
         
     }
    
    static get propparent(){
 return  "static propparent"    
}
    
}

  export class user extends person{
    _prop1=10;

    constructor(p2=1,p3=2,n,a){
        super(n,a)
        
        //person.call(this,n,a)
        this[firstName]="ali";
        this[abeerName]="abeer";
        
        this.prop2=p2
        this.prop3=p3
        this.prop4=50
        
        var lastNm="abc";
        
        this.getLastNm=function(){
            return lastNm;
        }
        
        
    }

get _prop4(){ return this.prop4}
set _prop4(val){  this.prop4=val}
    
static fun(){
    return "this is static method";
}


static get prop(){
 return  "static prop"    
}

toString(){
    
    return super.toString()+"this is toString impl";
}
    
}


user.prototype.add=function(){}

var me= new user()
me._prop1
me.prop2
me.prop3

me.prop4
me.firstName;

////////////////////////////////////////////////

























