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
    <div>
      <h3></h3>
      <div class="info">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.visible = true;

        this.attachShadow({ mode: 'open' })

        if (!this.shadowRoot) {
            throw new Error("Shadow Dom not initialized")
        }

        this.shadowRoot.appendChild(template.content.cloneNode(true))

        let title = this.shadowRoot.querySelector('h3')

        if (!title) {
            throw new Error("Title is not present")
        }

        title.innerText = this.getAttribute('name') || ""

        const avatar = this.shadowRoot.querySelector('img')

        if (!avatar) {
            throw new Error("No img is present in the template")
        }

        let avatarAttribute = this.getAttribute('avatar')
        if (!avatarAttribute) {
            const gender = this.getAttribute('gender')
            if (!gender) {
                throw new Error("If no avatar is specified, gender must be defined")
            }
            avatarAttribute = `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 100)}.jpg`
        }
        avatar.src = avatarAttribute
        const info = this.shadowRoot.querySelector('.info')

        if (!info || !(info instanceof HTMLElement)) {
            throw new Error("No element with class info is present in the template")
        }
        this.info = info

        const toggleInfo = this.shadowRoot.querySelector('#toggle-info')

        if (!toggleInfo || !(toggleInfo instanceof HTMLElement)) {
            throw new Error("No element with class toggleBtn is present in the template")
        }
        this.toggleInfo = toggleInfo

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
