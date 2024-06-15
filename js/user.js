import { validate } from "./utils.js";

const RANDOM_USER_BASE_URL = "https://randomuser.me/api/";

const template = document.createElement('template')
template.innerHTML = `
    <style>
        :host {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }

        img {
            width: 100%;
        }
    </style>
    <img/>
    <section>
        <h3></h3>
        <collapsable-section show-label="Show Info" hide-label="Hide Info">
            <div slot="content"><slot name="email"/></div>
            <div slot="content"><slot name="phone"/></div>
        </collapsable-section>
    </section>
`;

export class UserCard extends HTMLElement {
    static observedAttributes = ["name", "avatar", "gender"];

    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));

        this.visible = true;
        this.setAttributes();
    }

    setAttributes(){
        this.name.innerText = this.getAttribute('name') || "";
        this.avatar.src = this.getAttribute('avatar') || this.generateRandomAvatarUrl();
    }

    /**
     * @returns {string}
     */
    generateRandomAvatarUrl() {
        const randomId = Math.floor(Math.random() * 100);
        return `${RANDOM_USER_BASE_URL}/portraits/${this.gender}/${randomId}.jpg`;
    }

    /**
     * @returns {HTMLImageElement}
     */
    get avatar() {
        const avatar = this.shadow.querySelector('img');
        return validate(avatar);
    }

    /**
     * @returns {string}
     */
    get gender() {
        let gender = this.getAttribute('gender');
        return validate(gender);
    }

    /**
     * @returns {HTMLHeadingElement}
     */
    get name() {
        let name = this.shadow.querySelector('h3');
        return validate(name);
    }
}