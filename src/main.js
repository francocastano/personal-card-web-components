import { UserCard, CollapsableSection } from "./components/index.js"

const template = document.createElement('template')
template.innerHTML = `
    <h1>Business Cards</h1>

    <h2>Random Man</h2>
    <user-card gender="male"></user-card>
    
    <h2>Random Woman</h2>
    <user-card gender="female"></user-card>
    
    <h2>Fixed</h2>
    <user-card 
        name="Jane Doe"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
        email="janedeo@gmail.com"
        phone="333-333-3333"
    ></user-card>
`;

export class App extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('x-app', App);
window.customElements.define('user-card', UserCard);
window.customElements.define('collapsable-section', CollapsableSection);
