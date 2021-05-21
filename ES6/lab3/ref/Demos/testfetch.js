function fetchJSON(){
    fetch('sttd.json')
    .then(validateResponse)
    .then(readResponse)
    .then(logResult)
    .catch(logError)
}

function validateResponse(response){
    if(!response.ok)
        throw Error(response.statusText);
    return response;
}

function readResponse(response){
    return response.json()
}

function logResult(data){
    console.log(data)
}

function logError(data){
    console.error(data)
}