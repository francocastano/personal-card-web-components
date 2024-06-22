import styleText from "./button.css?raw"
import htmlTemplate from "./button.html?raw"

import { validate } from "../../validations/validations.js";

const template = document.createElement('template')
template.innerHTML = `
    <style>
        ${styleText}
    </style>
    ${htmlTemplate}
`;

export class Button extends HTMLElement {
    static observedAttributes = ["text"];

    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));
    }

    /**
     * @param {string} name
     * @param {string} _
     * @param {string} newValue
     */
    attributeChangedCallback(name, _, newValue) {
        switch (name) {
            case "text":
                this.button.innerHTML = newValue
                break;
        }
    }

    connectedCallback(){
        const text = this.getAttribute("text")
        if (!text){
            return;
        }
        this.button.innerHTML = text
    }

    /**
     * @returns {Element}
     */
    get button() {
        let button = this.shadow.querySelector('button');
        return validate(button);
    }
}
