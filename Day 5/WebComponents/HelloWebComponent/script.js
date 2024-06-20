class HelloWebComponent extends HTMLElement {
    constructor() {
        super();
        console.log("Hello world from web component!");
    }
}

customElements.define("hello-world",HelloWebComponent)