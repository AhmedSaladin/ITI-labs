/*var xhr = new XMLHttpRequest();
xhr.open("GET","std.json")
xhr.onreadystatechange =function(){
    if(xhr.readyState ==4){
        if(xhr.status == 200){
            var dataObj = JSON.parse(xhr.response);
            console.log(dataObj)
            xhr = new XMLHttpRequest();
            xhr.open("GET","std.json")
            xhr.onreadystatechange =function(){
                if(xhr.readyState ==4){
                    if(xhr.status == 200){

                    }
                }
            }
            xhr.send('')
        }
        else{
            console.error("Invalid")
        }
    }
}
xhr.send('')*/

/*var myPromise = new Promise(function(success,failure){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","sttd.json")
    xhr.onreadystatechange =function(){
        if(xhr.readyState ==4){
            if(xhr.status == 200){
                success(xhr.response);            
            }
            else{
                failure("Error")
            }
        }
    }
    xhr.send('')
})

myPromise.then(function(data){
    var result = JSON.parse(data);
    console.log(result)
    ///
    //
    //
})
myPromise.catch(console.error)
myPromise.then().then().then().catch()
*/

var promise1=new Promise(function(success,failure){

    setTimeout(function(){
        //console.log("Success");
        failure("Success1")
    },5000)
})

var promise2 = new Promise(function(success,failure){
    setTimeout(function(){
        success("success2")
        //console.log("Success");
    },2000)
})


/*console{
    log(data){

    }
}*/
//console.log(data)

//Promise.race([promise1,promise2]).then(console.log).catch(console.error)
//promise1.then(console.log()).catch(console.error)
//promise2.then(console.log).catch(console.error)



async function AsynFun(){
    var promise1= await new Promise(function(success,failure){

        setTimeout(function(){
            //console.log("Success");
            success("Success1")
        },2000)
    })
    console.log("aya7aga")
    //fun(promise1)
    var promise2 =await new Promise(function(success,failure){
        setTimeout(function(){
            success("success2")
            //console.log("Success");
        },2000)
    })

    console.log(promise1)
    console.log(promise2)


}















