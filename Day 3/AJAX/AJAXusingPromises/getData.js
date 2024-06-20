function GetData(){
    return new Promise(function(resolve,reject){
        let xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET","https://jsonplaceholder.typicode.com/posts"); // config settings
        xmlHttpReq.onreadystatechange = function(){ // triggers when ready state changes
            if(xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200){
                resolve(JSON.parse(xmlHttpReq.responseText));
            }else if(xmlHttpReq.readyState == 4 && xmlHttpReq.status != 200){
                reject("Something went wrong " + xmlHttpReq.status);
            }
        }
        xmlHttpReq.send();
    });
}