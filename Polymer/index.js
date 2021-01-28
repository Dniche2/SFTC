// const createSlide = Document.getElementById('createSlide')
// createSlide.addEventListener( "click" , () => alert('Спасибо!'))

// import {LitElement, html, css} from 'https://unpkg.com/lit-element?module';
  
      
// function randomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// class TextView extends LitElement {
//     constructor() {
//         super();
//         this._counter = 0;
//         this.randomText();
//         setInterval(this.randomText.bind(this), randomInt(0, 1000));
//     }

//     randomText() {
//         this._counter++;
//         this.text = `Hello, world ${this._counter}!`;
//     }

//     static get properties() {
//         return {
//             text: {attribute: false},
//         };
//     }

//     render(){
//         return html`${this.text}`;
//     }
// }
// customElements.define('text-view', TextView);


// class SurfaceContext extends LitElement {
//     constructor(view) {
//         super();

//         this.view = view;
//         this.x = randomInt(0, 1200);
//         this.y = randomInt(0, 590);
//         this.z = 0;

//         document.addEventListener('mousemove', this.mouseSync.bind(this));
//         document.addEventListener('mouseup', this.mouseDetach.bind(this));
//     }
    
//     static get properties() {
//         return {
//             x: {attribute: false},
//             y: {attribute: false},
//             z: {attribute: false},
//             view: {attribute: false},
//             attached: {attribute: false},
//         };
//     }

//     static get styles() {
//         return css`
//             :host {
//                 position: absolute;
//                 display: inline-block;
//             }

//             .dragger {
//                 position: absolute;
//                 bottom: -20px;
//                 right: -20px;
//                 width: 16px;
//                 height: 16px;
//                 background-color: red;
//             }`;
//     }

//     render() {
//         this.style.left = `${this.x}px`;
//         this.style.top = `${this.y}px`;
//         this.style.zIndex = `${this.z}`;
//         this.style.userSelect = this.attached ? 'none' : undefined;
//         return html`
//                 ${this.view}
//                 <div class="dragger" @mousedown="${this.mouseAttach}">
//                 </div>`;
//     }

//     dragstart(event) {
//         event.dataTransfer.setData('spatik', 'some');
//     }

//     mouseSync(event) {
//         if (!this.attached) {
//             return;
//         }

//         this.x = event.clientX + this.attached.x;
//         this.y = event.clientY + this.attached.y;
//     }

//     mouseAttach(event) {
//         const rect = this.getBoundingClientRect();
//         this.attached = {x: rect.x - event.clientX, y: rect.y - event.clientY};
//     }

//     mouseDetach(event) {
//         this.attached = false;
//     }   
// }
// customElements.define('surface-context', SurfaceContext);


// class SurfaceView extends LitElement {
//     constructor() {
//         super();
//         this.views = [];
//     }

//     static get properties() {
//         return {
//             views: {attribute: false},
//         }
//     }
    
//     static get styles() {
//         return css`
//             :host {
//                 display: block;
//                 position: absolute;
//                 left: 0px;
//                 top: 0px;
//                 right: 0px;
//                 bottom: 0px;
//             }`;
//     }

//     attach(view) {
//         const context = new SurfaceContext(view);
//         this.views = [...this.views, context];
//     }

//     render() {
//         return html`${this.views.map(view => html`${view}`)}`;
//     }
// }
// customElements.define('surface-view', SurfaceView);


// window.onload = function() {
//     const surface = new SurfaceView();
//     document.body.appendChild(surface);

//     for (let i = 0; i < 5; i++) {
//         const text = new TextView();
//         surface.attach(text);
//     }	
// }