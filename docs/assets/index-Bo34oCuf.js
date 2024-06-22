var P=Object.defineProperty;var w=n=>{throw TypeError(n)};var B=(n,e,t)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var c=(n,e,t)=>B(n,typeof e!="symbol"?e+"":e,t),g=(n,e,t)=>e.has(n)||w("Cannot "+t);var l=(n,e,t)=>(g(n,e,"read from private field"),t?t.call(n):e.get(n)),v=(n,e,t)=>e.has(n)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),E=(n,e,t,s)=>(g(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t);import{createSlice as O,configureStore as V}from"https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@2.2.5/+esm";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const j="",I=`<div><slot name="content"></slot></div>\r
<custom-button></custom-button>`;function d(n){if(!n)throw new Error("Value is not valid");return n}const y=document.createElement("template");y.innerHTML=`
    <style>
        ${j}
    </style>
    ${I}
`;class L extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(y.content.cloneNode(!0)),this.visible=!0,this.showLabel=this.getAttribute("show-label")||"Show",this.hideLabel=this.getAttribute("hide-label")||"Hide"}get button(){let e=this.shadow.querySelector("custom-button");return d(e)}get content(){let e=this.shadow.querySelector("div");return d(e)}toggleVisibility(){this.visible=!this.visible,this.content.style.visibility=this.visible?"visible":"hidden",this.button.innerText=this.visible?this.hideLabel:this.showLabel}connectedCallback(){this.button.setAttribute("text",this.visible?this.hideLabel:this.showLabel),this.button.addEventListener("click",()=>this.toggleVisibility())}disconnectedCallback(){this.button.removeEventListener("click",()=>this.toggleVisibility())}}c(L,"observedAttributes",["show-label","hide-label"]);const F=`@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");\r
\r
:host {\r
    background: var(--background-color);\r
    width: 500px;\r
    display: grid;\r
    grid-template-columns: 1fr 2fr;\r
    grid-gap: 0 1em;\r
    margin-bottom: 15px;\r
    border: var(--accent-color) 5px solid;\r
    border-left: 0;\r
    border-radius: 230px;\r
}\r
\r
img {\r
    border-radius: 250px;\r
    width: 100%;\r
}\r
\r
a:-webkit-any-link {\r
    text-decoration: none;\r
    color: var(--dark-font-color);\r
    font-style: normal;\r
}\r
\r
#email {\r
    text-decoration: underline;\r
}\r
\r
i {\r
    color: var(--accent-color);\r
    margin-right: 0.5rem;\r
}\r
`,D=`<img/>\r
<section>\r
    <h3></h3>\r
    <collapsable-section show-label="Show Info" hide-label="Hide Info">\r
        <address slot="content">\r
            <p><i class="fa-solid fa-envelope"></i></i><a id="email"></p>\r
            <p><i class="fa-solid fa-phone"></i><a id="phone"></p>\r
        </address>\r
    </collapsable-section>\r
    <custom-button text="Save"></custom-button>\r
</section>`,_="https://randomuser.me/api/";class z{async get(e){if(e&&!["male","female"].includes(e))throw new Error("Gender must be either 'male' or 'female'");const t=e?`?gender=${e}`:"";return(await(await fetch(`${_}${t}`)).json()).results[0]}}class u{constructor(e,t,s,r,o,i){this.firstName=e,this.lastName=t,this.email=s,this.phone=r,this.gender=o,this.avatar=i}get name(){return`${this.firstName} ${this.lastName}`}static fromRandomUser(e){return new u(e.name.first,e.name.last,e.email,e.phone,e.gender,e.picture.large)}}const G={selectedUser:null},S=O({initialState:G,name:"users",reducers:{updateUserAction(n,e){return{...n,selectedUser:e.payload}},resetUserAction(n,e){return{...n,selectedUser:null}}}}),{updateUserAction:W,resetUserAction:J}=S.actions,{reducer:K,name:Q}=S,h=V({reducer:{[Q]:K}}),x=document.createElement("template");x.innerHTML=`
    <div>Placeholder</div>
    <custom-button text="Reset State"></custom-button>
`;class A extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(x.content.cloneNode(!0))}get stateSlice(){return this.getAttribute("state-slice")}get stateVariable(){return this.getAttribute("state-variable")}connectedCallback(){h.subscribe(this.updateContent.bind(this));const e=this.shadow.querySelector("custom-button");e&&e.addEventListener("click",()=>{h.dispatch(J())})}updateContent(){const e=this.shadow.querySelector("div");!e||!this.stateSlice||!this.stateVariable||(e.innerHTML=h.getState()[this.stateSlice][this.stateVariable])}}c(A,"observedAttributes",["state-slice","state-variable"]);const T=document.createElement("template");T.innerHTML=`
    <style>
        ${F}
    </style>
    ${D}
`;var a;class $ extends HTMLElement{constructor(){super();v(this,a,null);this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(T.content.cloneNode(!0)),this.randomUserService=new z}connectedCallback(){this.setAttributes(),this.configureSaveButton()}configureSaveButton(){const t=this.shadow.querySelector("custom-button");if(t){if(this.hasAttribute("omit-save")){t.style.display="none";return}t.addEventListener("click",()=>{if(!l(this,a))throw new Error("No user has been defined");const s=`
                <user-card 
                    first-name=${l(this,a).firstName}
                    last-name=${l(this,a).lastName}
                    avatar=${l(this,a).avatar}
                    email=${l(this,a).email}
                    phone=${l(this,a).phone}
                    omit-save
                ></user-card>`;h.dispatch(W(s))})}}async setAttributes(){const t=this.getAttribute("gender");if(t&&!["male","female"].includes(t))throw new Error("Gender must be either 'male' or 'female'");const s=await this.randomUserService.get(t),r=u.fromRandomUser(s),o=this.getAttribute("first-name")||r.firstName,i=this.getAttribute("last-name")||r.lastName,q=o&&i?`${o} ${i}`:r.name;this.name.innerText=q;const m=this.getAttribute("phone")||r.phone;this.phone.href=m,this.phone.innerHTML=m;const p=this.getAttribute("email")||r.email;this.email.href=p,this.email.innerHTML=p;const f=this.getAttribute("avatar")||r.avatar;this.avatar.src=f,E(this,a,new u(o,i,p,m,t,f))}get avatar(){const t=this.shadow.querySelector("img");return d(t)}get phone(){let t=this.shadow.getElementById("phone");if(t=d(t),!(t instanceof HTMLAnchorElement))throw new Error("Email must be an anchor tag");return t}get email(){let t=this.shadow.getElementById("email");if(t=d(t),!(t instanceof HTMLAnchorElement))throw new Error("Email must be an anchor tag");return t}get name(){let t=this.shadow.querySelector("h3");return d(t)}}a=new WeakMap,c($,"observedAttributes",["first-name","last-name","email","phone","avatar","gender","omit-save"]);const X=`button {\r
    cursor: pointer;\r
    background: var(--accent-color);\r
    color: var(--light-font-color);\r
    border: 0;\r
    border-radius: 5px;\r
    padding: 5px 10px;\r
    font-weight: bold;\r
}\r
`,Y="<button></button>",M=document.createElement("template");M.innerHTML=`
    <style>
        ${X}
    </style>
    ${Y}
`;class C extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(M.content.cloneNode(!0))}attributeChangedCallback(e,t,s){switch(e){case"text":this.button.innerHTML=s;break}}connectedCallback(){const e=this.getAttribute("text");e&&(this.button.innerHTML=e)}get button(){let e=this.shadow.querySelector("button");return d(e)}}c(C,"observedAttributes",["text"]);const b="/",H=[{name:"Home",path:"/",element:`
            <h2>Random Man</h2>
            <user-card gender="male"></user-card>
        `},{name:"Man",path:"man",element:`
            <h2>Random Man</h2>
            <user-card gender="male"></user-card>
        `},{name:"Woman",path:"woman",element:`
            <h2>Random Woman</h2>
            <user-card gender="female"></user-card>
        `},{name:"Fixed",path:"fixed",element:`
            <h2>Fixed</h2>
            <user-card 
                first-name="Jane"
                last-name="Doe"
                avatar="https://randomuser.me/api/portraits/women/1.jpg"
                email="janedeo@gmail.com"
                phone="333-333-3333"
            ></user-card>
        `}];class Z{constructor(){c(this,"routerProvider",null)}initialize(){this.go(window.location.hash),window.addEventListener("popstate",this.processEvent.bind(this))}go(e,t=!1){t&&history.pushState({route:e},"",e);const s=e.toLowerCase().split("#").pop()||b,r=H.find(i=>i.path.toLowerCase()==s),o=r?r.element:"Oops, 404!";this.renderTemplate(o)}processEvent(e){if(!e.state){this.go(b);return}this.go(e.state.route)}processLink(e){e.preventDefault();const s=e.target.getAttribute("href")||b;this.go(s,!0)}registerElement(e){e.addEventListener("click",this.processLink.bind(this))}renderTemplate(e){if(!this.routerProvider)throw new Error("No router provided has been defined");this.routerProvider.innerHTML=e}}const k=new Z,N=document.createElement("template");N.innerHTML=`
    <a></a>
`;class U extends HTMLElement{constructor(){super(),this.router=k,this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(N.content.cloneNode(!0))}connectedCallback(){const e=this.getAttribute("href");if(!e)throw new Error("Link must have href attribute");const t=this.shadow.querySelector("a");if(!t)throw new Error("Link Template must contain an anchor tag");t.href=e,t.innerText=this.getAttribute("text")||e,this.router.registerElement(this)}}c(U,"observedAttributes",["href","text"]);class ee extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.router=k}connectedCallback(){const e=document.createElement("template");for(let s of H){const r=document.createElement("router-link");r.setAttribute("href",`#${s.path}`),r.setAttribute("text",s.name),e.content.appendChild(r)}const t=document.createElement("main");e.content.appendChild(t),this.shadow.appendChild(e.content.cloneNode(!0)),this.router.routerProvider=this.shadow.querySelector("main"),this.router.initialize()}}const R=document.createElement("template");R.innerHTML=`
    <h1>Business Cards</h1>
    <router-provider></router-provider>
    <mutable-container state-slice="users" state-variable="selectedUser"></mutable-container>
`;class te extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(R.content.cloneNode(!0))}}window.customElements.define("app-main",te);window.customElements.define("mutable-container",A);window.customElements.define("router-link",U);window.customElements.define("router-provider",ee);window.customElements.define("user-card",$);window.customElements.define("collapsable-section",L);window.customElements.define("custom-button",C);
