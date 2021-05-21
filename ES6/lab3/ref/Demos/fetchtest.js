function fetchJson(){
    fetch('std.json')
    .then(validateResponse)
    .then(readResponseAsJson)
    .then(logResult)
    .catch(logError);
}

function validateResponse(response){
    if(!response.ok){
        throw Error(response.statusText)
    }
    return response
}

function readResponseAsJson(response){
    //console.log(response.json())
    return response.json();
}

function logResult(data){
    console.log(data)
}

function logError(data){
    console.log(data)
}
