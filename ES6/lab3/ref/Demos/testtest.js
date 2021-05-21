/*var xhr = new XMLHttpRequest();
xhr.open("GET","std.json");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            var dataObj = JSON.parse(xhr.responseText)
            console.log(dataObj)
        }
        else{
            console.error('error')
        }
    }
}
xhr.send('')*//*
var myPromise = new Promise(function(success,failure){
    var xhr = new XMLHttpRequest();
xhr.open("GET","std.json");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            //var dataObj = JSON.parse(xhr.responseText)
            //console.log(dataObj)
            success(xhr.responseText)
        }
        else{
            console.error('error')
            failure("Error")
        }
    }
}
xhr.send('')
});

myPromise.then(function(data){
    var result = JSON.parse(data)
    console.log(result)
})

myPromise.catch(function(data){
    console.error(data)
})

/*var promise1 = new Promise(function(success,failure){
    setTimeout(function(){
        success("Hellllllllllllllllo")
    },2000);
});

var promise2 = new Promise(function(success,failure){
    setTimeout(function(){
        failure("Hellllllllllllllllo2")
    },5000);
});*/

//promise1.then(console.log).catch(console.error);
//promise2.then(console.log).catch(console.error);
//Promise.race([promise1,promise2]).then(console.log).catch(console.error)

/*console={
    log(){

    }
}*/

async function AsyncFun(){
    var promise1 =await new Promise(function(success,failure){
        setTimeout(function(){
            success("Hellllllllllllllllo")
        },2000);
    });
    console.log(promise1)
    var promise2 =await new Promise(function(success,failure){
        setTimeout(function(){
            success("Hellllllllllllllllo2")
        },5000);
    });
    
    console.log(promise1)
    console.log(promise2)
    //await promise1;
    //await promise2;
   
}













