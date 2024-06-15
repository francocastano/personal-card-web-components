import { validate } from "../../validations/validations.js";

const template = document.createElement('template')
template.innerHTML = `
    <style>
        @import "src/components/collapsableSection/collapsableSection.css";
    </style>
    <div><slot name="content"></slot></div>
    <button></button>
`;

export class CollapsableSection extends HTMLElement {
    static observedAttributes = ["show-label", "hide-label"];

    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));

        this.visible = true;
        this.showLabel = this.getAttribute('show-label') || "Show";
        this.hideLabel = this.getAttribute('hide-label') || "Hide";
        this.button.innerText = this.visible ? this.hideLabel : this.showLabel;
    }

    /**
     * @returns {HTMLButtonElement }
     */
    get button() {
        let button = this.shadow.querySelector('button');
        return validate(button);
    }

    /**
     * @returns {HTMLDivElement}
     */
    get content() {
        let content = this.shadow.querySelector('div');
        return validate(content);
    }

    toggleVisibility() {
        this.visible = !this.visible;
        this.content.style.display = this.visible ? "block" : "none";
        this.button.innerText = this.visible ? this.hideLabel : this.showLabel;
    }

    connectedCallback() {
        this.button.addEventListener('click', () => this.toggleVisibility());
    }

    disconnectedCallback() {
        this.button.removeEventListener("click", () => this.toggleVisibility());
    }
}
