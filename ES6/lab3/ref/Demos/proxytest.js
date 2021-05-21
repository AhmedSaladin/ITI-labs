var target={
    x:10,
    y:20
}


var handler={
    set(target,prop,val){
        if(val<30 && val>10){
            target[prop] = val
        }
        else
        throw 'invalid value'
    },
    get(target,prop){
        if(target.hasOwnProperty(prop))
            return target[prop]
        else
            throw 'Not Exist'
    }
}


var myproxy = new Proxy(target,handler)


//target.x=30