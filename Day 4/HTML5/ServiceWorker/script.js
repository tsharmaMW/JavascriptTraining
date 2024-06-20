if(navigator.serviceWorker){
    window.addEventListener("load",()=>{
        this.navigator.serviceWorker
        .register("serviceworker.js")
        .then(()=>console.log("Service worker: registered!"))
        .catch(()=>console.log("Service worker: Registration failed!"))
    })
}