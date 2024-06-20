function GetData(callback){
    // AJAX request to fetch the data
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET","https://jsonplaceholder.typicode.com/posts"); // config settings
    xmlHttpReq.onreadystatechange = function(){ // triggers when ready state changes
        if(xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200){
            callback(null, JSON.parse(xmlHttpReq.responseText));
        }else if(xmlHttpReq.readyState == 4 && xmlHttpReq.status != 200){
            callback("Something went wrong " + xmlHttpReq.status, null);
        }
    }
    xmlHttpReq.send();
}