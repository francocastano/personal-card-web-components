var b=Object.defineProperty;var f=(n,e,s)=>e in n?b(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var l=(n,e,s)=>f(n,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const g=`button {\r
    cursor: pointer;\r
    background: var(--accent-color);\r
    color: var(--light-font-color);\r
    border: 0;\r
    border-radius: 5px;\r
    padding: 5px 10px;\r
    font-weight: bold;\r
}\r
`,w=`<div><slot name="content"></slot></div>\r
<button></button>`;function o(n){if(!n)throw new Error("Value is not valid");return n}const h=document.createElement("template");h.innerHTML=`
    <style>
        ${g}
    </style>
    ${w}
`;class d extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(h.content.cloneNode(!0)),this.visible=!0,this.showLabel=this.getAttribute("show-label")||"Show",this.hideLabel=this.getAttribute("hide-label")||"Hide",this.button.innerText=this.visible?this.hideLabel:this.showLabel}get button(){let e=this.shadow.querySelector("button");return o(e)}get content(){let e=this.shadow.querySelector("div");return o(e)}toggleVisibility(){this.visible=!this.visible,this.content.style.visibility=this.visible?"visible":"hidden",this.button.innerText=this.visible?this.hideLabel:this.showLabel}connectedCallback(){this.button.addEventListener("click",()=>this.toggleVisibility())}disconnectedCallback(){this.button.removeEventListener("click",()=>this.toggleVisibility())}}l(d,"observedAttributes",["show-label","hide-label"]);const v=`@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");\r
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
}`,y=`<img/>\r
<section>\r
    <h3></h3>\r
    <collapsable-section show-label="Show Info" hide-label="Hide Info">\r
        <address slot="content">\r
            <p><i class="fa-solid fa-envelope"></i></i><a id="email"></p>\r
            <p><i class="fa-solid fa-phone"></i><a id="phone"></p>\r
        </address>\r
    </collapsable-section>\r
</section>`,E="https://randomuser.me/api/";class L{async get(e){if(e&&!["male","female"].includes(e))throw new Error("Gender must be either 'male' or 'female'");const s=e?`?gender=${e}`:"";return(await(await fetch(`${E}${s}`)).json()).results[0]}}class c{constructor(e,s,i,t,r,a){this.firstName=e,this.lastName=s,this.email=i,this.phone=t,this.gender=r,this.avatar=a}get name(){return`${this.firstName} ${this.lastName}`}static fromRandomUser(e){return new c(e.name.first,e.name.last,e.email,e.phone,e.gender,e.picture.large)}}const m=document.createElement("template");m.innerHTML=`
    <style>
        ${v}
    </style>
    ${y}
`;class u extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(m.content.cloneNode(!0)),this.visible=!0,this.randomUserService=new L,this.setAttributes()}async setAttributes(){const e=this.getAttribute("gender"),s=await this.randomUserService.get(e),i=c.fromRandomUser(s);this.name.innerText=this.getAttribute("name")||i.name;const t=this.getAttribute("email")||i.email;this.email.href=t,this.email.innerHTML=t;const r=this.getAttribute("phone")||i.phone;this.phone.href=r,this.phone.innerHTML=r,this.avatar.src=this.getAttribute("avatar")||i.avatar}get avatar(){const e=this.shadow.querySelector("img");return o(e)}get phone(){let e=this.shadow.getElementById("phone");if(e=o(e),!(e instanceof HTMLAnchorElement))throw new Error("Email must be an anchor tag");return e}get email(){let e=this.shadow.getElementById("email");if(e=o(e),!(e instanceof HTMLAnchorElement))throw new Error("Email must be an anchor tag");return e}get name(){let e=this.shadow.querySelector("h3");return o(e)}}l(u,"observedAttributes",["name","email","phone","avatar","gender"]);const p=document.createElement("template");p.innerHTML=`
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
`;class x extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(p.content.cloneNode(!0))}}window.customElements.define("x-app",x);window.customElements.define("user-card",u);window.customElements.define("collapsable-section",d);
