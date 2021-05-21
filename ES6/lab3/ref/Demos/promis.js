//asynch
//1)Ajax
//2)event
//3)timing

/*


var timer=setTimeout(function(){
    
    
    
},1000);



var xhr = new XMLHttpRequest();
xhr.open("GET", "");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
        if (xhr.status == 200) {
            var dataObj = JSON.parse(xhr.responseText);
        }
}
xhr.send('');










new Promise(function(success,failure){
//
    //
    //
    if(true)
        success("successed")
        else
            failure("failed")
    
    
}).then(function(data){
    console.log(data);
    return new Promise();
}).then(function(){
    
    return new Promise()
}).catch(function(data){
    console.log(data);
}).finally(
function(){
    
    
});



*/

/*var myPromise= new Promise(function (abc,xyz){
    

var xhr = new XMLHttpRequest();
xhr.open("GET", "stdibrahim.json");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4)
        if (xhr.status == 200) {
          //  var dataObj = JSON.parse(xhr.responseText);
            
            abc(xhr.responseText);
        }
    else xyz();
}
xhr.send('');
    
});




myPromise.then(function(data){
    
    
    var result= JSON.parse(data);
    console.log(result);
    
    
}).catch(()=>{console.log("err")});
*/


/*function fun(){

    
    var promise1= new Promise((s,f)=>{
    
    setTimeout(function(){
        s("promise1")
        
    },5000);
    
});

var promise2= new Promise(function(s,f){
    
    setTimeout(()=>{
        s("promise2")
        //f("promise2")
        
    },1000);
    
});
    
    promise1.then(console.log)
    promise2.then(console.log)

    
}

console.log(
    fun()
)

function s(val){
    console.log("success",val)
}*/

async function funAsync(){
    
    var promise1=  new Promise((s,f)=>{
    
    setTimeout(function(){
        s("promise1")
        
    },2000);
    
});

var promise2=   new Promise(function(s,f){
    
    setTimeout(()=>{
        s("promise2")
        //f("promise2")
        
    },1000);
    
});
    
    //promise1.then(console.log)
//    promise2.then(console.log)

    
    console.log(promise1);
    console.log(promise2);
    
    
    await promise1
    await promise2
}



function s(val){
    console.log("success",val)
}

/*var promise1= new Promise((s,f)=>{
    
    setTimeout(function(){
        f("promise1")
        
    },5000);
    
});

var promise2= new Promise(function(s,f){
    
    setTimeout(()=>{
        s("promise2")
        //f("promise2")
        
    },1000);
    
});//.then(function(){}).catch(function(){});



//promise1.then(console.log).catch()
//promise2.then((data)=>{console.log(data)}).catch()


Promise.all([promise1,promise2,p3,p4,p5]).then(console.log).catch(alert)
*/

/*console={
    
    log(){
        
        
    }
}*/

console.log
( funAsync())
    
    
    
    
    








