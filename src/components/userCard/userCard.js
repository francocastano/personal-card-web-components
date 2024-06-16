import styleText from "./userCard.css?raw"
import htmlTemplate from "./userCard.html?raw"

import { RandomUserService } from "../../services/index.js";
import { validate } from "../../validations/validations.js";
import { User } from "./models.js";

const template = document.createElement('template')
template.innerHTML = `
    <style>
        ${styleText}
    </style>
    ${htmlTemplate}
`;

export class UserCard extends HTMLElement {
    static observedAttributes = ["name", "email", "phone", "avatar", "gender"];

    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));

        this.visible = true;
        this.randomUserService = new RandomUserService()
        this.setAttributes();
    }

    async setAttributes() {
        const gender = this.getAttribute('gender')

        const randomUser = await this.randomUserService.get(gender)
        const user = User.fromRandomUser(randomUser)

        this.name.innerText = this.getAttribute('name') || user.name

        const email = this.getAttribute('email') || user.email
        this.email.href = email
        this.email.innerHTML = email

        const phone = this.getAttribute('phone') || user.phone
        this.phone.href = phone
        this.phone.innerHTML = phone

        this.avatar.src = this.getAttribute('avatar') || user.avatar;
    }


    /**
     * @returns {HTMLImageElement}
     */
    get avatar() {
        const avatar = this.shadow.querySelector('img');
        return validate(avatar);
    }

    /**
     * @returns {HTMLAnchorElement}
     */
    get phone() {
        let phone = this.shadow.getElementById('phone');
        phone = validate(phone);

        if (!(phone instanceof HTMLAnchorElement)) {
            throw new Error("Email must be an anchor tag")
        }

        return phone
    }

    /**
     * @returns {HTMLAnchorElement}
     */
    get email() {
        let email = this.shadow.getElementById('email');
        email = validate(email);

        if (!(email instanceof HTMLAnchorElement)) {
            throw new Error("Email must be an anchor tag")
        }

        return email
    }


    /**
     * @returns {HTMLHeadingElement}
     */
    get name() {
        let name = this.shadow.querySelector('h3');
        return validate(name);
    }
}