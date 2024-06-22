import { resetUserAction } from "../slices/users.js";
import { store } from "../store.js";

const template = document.createElement('template')
template.innerHTML = `
    <div>Placeholder</div>
    <custom-button text="Reset State"></custom-button>
`;

export class MutableContainer extends HTMLElement {
    static observedAttributes = ["state-slice", "state-variable"];


    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));
    }

    /**
     * @returns {(string|null)}
     */
    get stateSlice(){
        return this.getAttribute("state-slice");
    }

    /**
     * @returns {(string|null)}
     */
    get stateVariable(){
        return this.getAttribute("state-variable");
    }
    
    connectedCallback(){
        store.subscribe(this.updateContent.bind(this));
        const resetButton = this.shadow.querySelector("custom-button")
        if (!resetButton){
            return;
        }
        resetButton.addEventListener("click", () => {
            store.dispatch(resetUserAction());
        });
    }

    updateContent(){
        const container = this.shadow.querySelector("div")
        
        if (!container || !this.stateSlice || !this.stateVariable){
            return;
        }

        container.innerHTML = store.getState()[this.stateSlice][this.stateVariable];
    }
}