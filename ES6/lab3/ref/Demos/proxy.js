var target = {
    x: 10,
    y: 20
}


var handler = {

    get(target,prop){
        
        if(target.hasOwnProperty(prop))
            return target[prop]
        else
            throw "ay7aga";
        
        
    },
    
    
    set(target, prop, vlaue) {

        if (vlaue < 30 && vlaue > 10)
            target[prop] = vlaue;

        else {
            throw "invalid"
            //console.log("invalid range");}
        }
        
        
    }

    


}


var myProxy = new Proxy(target, handler);

myProxy.x = 30 //invalid

myProxy.
