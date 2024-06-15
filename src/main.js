import { UserCard, CollapsableSection } from "./components/index.js"

const template = document.createElement('template')
template.innerHTML = `
    <h1>Business Cards</h1>

    <user-card name="John Doe" gender="men">
        <p slot="email">johndoe@gmail.com</p>
        <p slot="phone">555-555-5555</p>
    </user-card>

    <user-card name="Jane Doe" avatar="https://randomuser.me/api/portraits/women/1.jpg">
        <p slot="email">janedeo@gmail.com</p>
        <p slot="phone">333-333-3333</p>
    </user-card>
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
