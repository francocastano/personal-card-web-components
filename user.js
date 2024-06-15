const template = document.createElement('template')
template.innerHTML = `
  <style>
  .user-card {
		font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
	}

	.user-card img {
		width: 100%;
	}

	.user-card button {
		cursor: pointer;
		background: darkorchid;
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}
  </style>
<div class="user-card">
    <img />
    <article>
        <h3></h3>
        <section class="info">
            <div><slot name="email" /></div>
            <div><slot name="phone" /></div>
        </section>
        <button id="toggle-info">Hide Info</button>
    </article>
</div>
`;

class UserCard extends HTMLElement {

    static observedAttributes = ["name", "avatar", "gender"];

    /**
     * @template T
     * @param {(T | null | undefined)} value 
     * @returns {T}
     */
    validate(value) {
        if (!value) {
            throw new Error("Value is not valid");
        }
        return value
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));

        this.visible = true;
        this.cardTitle = this.getAttribute('name')
        this.avatar = this.getAttribute('avatar')
    }

    /**
     * @returns {HTMLImageElement}
     */
    get avatar() {
        const avatar = this.shadow.querySelector('img');
        return this.validate(avatar)
    }

    /**
     * @param {(string | null)} value
     */
    set avatar(value) {
        if (!value) {
            value = `https://randomuser.me/api/portraits/${this.gender}/${Math.floor(Math.random() * 100)}.jpg`
        }
        this.avatar.src = value
    }

    /**
     * @returns {string}
     */
    get gender() {
        let gender = this.getAttribute('gender');
        return this.validate(gender);
    }

    /**
     * @returns {HTMLElement  }
     */
    get info() {
        let info = this.shadow.querySelector('section');
        return this.validate(info);
    }

    /**
     * @returns {HTMLButtonElement }
     */
    get toggleInfo() {
        let toggleInfo = this.shadow.querySelector('button');
        return this.validate(toggleInfo);
    }

    /**
     * @returns {HTMLHeadingElement}
     */
    get cardTitle() {
        let title = this.shadow.querySelector('h3');
        return this.validate(title);
    }

    /**
     * @param {(string | null)} value
     */
    set cardTitle(value) {
        this.cardTitle.innerText = value || ""
    }

    toggleVisibility() {
        this.visible = !this.visible;
        this.info.style.display = this.visible ? "block" : "none";
        this.toggleInfo.innerText = this.visible ? 'Hide Info' : "Show Info";
    }

    connectedCallback() {
        this.toggleInfo.addEventListener('click', () => this.toggleVisibility());
    }

    disconnectedCallback() {
        this.toggleInfo.removeEventListener("click", () => this.toggleVisibility());
    }
}

window.customElements.define('user-card', UserCard)
