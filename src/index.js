import { LitElement, html, css, customElement } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

class TextField extends LitElement {
    constructor() {
        super() 
    }


    render() {
        return html `<textarea style=${styleMap(styles)}>let it snow</textarea>`
    }
}

customElements.define('text-field', TextField)

class MyButton extends LitElement {
    constructor (onClick) {
        super ()
        this.addEventListener('click', onClick);
    }
    render() {
        return html `<button class="createSlide"></button>`
    }

    static get styles() {
        return css `
        :host {
            display: block;
        }
        button {
            width: 250px;
            background-color: white ;
            color: black;
            margin: 30px;
            border: none;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 16px 20px;
            letter-spacing: 0.04em;
            transition: all 0.15s ease;
            cursor: pointer;
            }
          button:hover {
            box-shadow: -5px -5px 0px  white;
            background:  #ffa500;
            transform: translateY(3px) translateX(3px);
            }`        
    } 
    
    click (event) {        
        console.log ('dr.Stone');
    }

}

customElements.define('my-button', MyButton)

class SmartImage extends LitElement {
    constructor(name, imageUrl) {
        super();
        this._name = name;
        const itemString = localStorage.getItem(name);
        const item = itemString ? JSON.parse(itemString) : {imageUrl: imageUrl};
        this.imageUrl = item.imageUrl;
        document.addEventListener('mouseup', this.mouseUp.bind(this));
        document.addEventListener('mousemove', this.mouseMove.bind(this));
        this.addEventListener('mousedown', this.mouseDown.bind(this));
        this.bx = 0;
        this.by = 0;

    }

    saveMouseOrigin(event) {
        const rect = this.getBoundingClientRect();
        this.mouseOrigin = {
            clientX: event.clientX,
            clientY: event.clientY,
            x: event.clientX - rect.x, 
            y: event.clientY - rect.y,
        };
    }

    mouseMove(event) {
        if (this.attached) {
            this.bx = event.clientX - this.mouseOrigin.x;
            this.by = event.clientY - this.mouseOrigin.y;
        }
    }

    mouseUp(event) {
        this.attached = false;
    }


    mouseDown(event) {
        this.attached = true;
        this.saveMouseOrigin(event);
    }

    static get properties() {
		return {
            text: {attribute: false},
            imageUrl: {attribute: false},
            attached: {attribute: false},
            mouseOrigin: {attribute: false},
            bx: {attribute: false},
            by: {attribute: false},
		};
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
            position: absolute;
            
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;

            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        input {
            position: absolute;
            bottom: -24px;
            width: 70%;

            padding: 0;
            margin: 0;
            outline: 0;
        }`
    }

    onChange() {
        const el = this.shadowRoot.getElementById('url-input');
        this.imageUrl = el.value;
    }


    render() {
        localStorage.setItem(this._name, JSON.stringify({
            imageUrl: this.imageUrl,
        }))

        this.style.backgroundPositionX = `${this.bx}px`;
        this.style.backgroundPositionY = `${this.by}px`;

        this.style.backgroundImage = `url("${this.imageUrl}")`;
        return html`<input id="url-input" class="url" @change="${this.onChange}"/>`;
    }
}
customElements.define('smart-image', SmartImage);

class SurfaceElement extends LitElement {
    constructor(name, view) {
        super();
        this.view = view;

        this._name = name;

        const itemString = localStorage.getItem(name);
        const item = itemString ? JSON.parse(itemString) : {x: 0, y: 0, w: 100, h: 100};

        this.x = item.x;
        this.y = item.y;
        this.w = item.w;
        this.h = item.h;

        document.addEventListener('mousemove', this.mouseMove.bind(this));
        document.addEventListener('mouseup', this.mouseUp.bind(this));
    }

    static get properties() {
		return {
            x: {attribute: false},
            y: {attribute: false}, 
            w: {attribute: false},
            h: {attribute: false},
            view: {attribute: false},
            mouseOrigin: {attribute: false},
            attached: {attribute: false},
            resizing: {attribute: false},
		};
    }
    
    static get styles() {
        return css`
            :host {
                display: block;
                position: absolute;
                background-color: white;
            }
            .resizer {
                position: absolute;
                background-color: red;
                bottom: -20px;
                right: -20px;
                width: 16px;
                height: 16px;
            }
            .dragger {
                position: absolute;
                background-color: blue;
                top: -20px;
                right: -20px;
                width: 16px;
                height: 16px;
            }`
    }

    mouseUp(event) {
        this.attached = false;
        this.resizing = false;
    }

    mouseMove(event) {
        if (this.attached) {
            this.x = event.clientX - this.mouseOrigin.x;
            this.y = event.clientY - this.mouseOrigin.y;
        }
        if (this.resizing) {
            this.w = (event.clientX - this.mouseOrigin.clientX) + this.mouseOrigin.w;
            this.h = (event.clientY - this.mouseOrigin.clientY) + this.mouseOrigin.h;
        }
    }

    saveMouseOrigin(event) {
        const rect = this.getBoundingClientRect();
        this.mouseOrigin = {
            clientX: event.clientX,
            clientY: event.clientY,
            x: event.clientX - rect.x, 
            y: event.clientY - rect.y,
            w: this.w,
            h: this.h,
        };
    }

    draggerMouseDown(event) {
        this.saveMouseOrigin(event);
        this.attached = true;
    }

    resizerMouseDown(event) {
        this.saveMouseOrigin(event);
        this.resizing = true;
    }

    render() {
        localStorage.setItem(this._name, JSON.stringify({
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
        }))

        this.style.left = `${this.x}px`;
        this.style.top = `${this.y}px`;
        this.style.width = `${this.w}px`;
        this.style.height = `${this.h}px`;
        return html`${this.view}
            <div class="dragger" @mousedown=${this.draggerMouseDown}></div>
            <div class="resizer" @mousedown=${this.resizerMouseDown}></div>`;
    }
}
customElements.define('surface-element', SurfaceElement);

class Surface extends LitElement {
    constructor() {
        super();
        this.views = [];
    }

    static get properties() {
		return {
			views: {attribute: false},
		};
    }
    
    static get styles() {
        return css`
            :host {
                position: absolute;
                background-color: #ffa500;
                top: 260px;
                left: 400px;
                width: 50vw;
                height: 70vh;
            }`
    }


    appendView(view) {
        this.views = this.views.concat(view);
    }

    render() {
        return html`${this.views.map(e => html`${e}`)}`
    }
}

customElements.define('super-surface', Surface);


window.onload = function() {
    const image = new SmartImage('dog-image', 'https://storage.googleapis.com/livrezon-hot/files/users_uploads/vNeF4ZXrTpaBAZ89OnKFUA.jpeg');
    const myButton = new MyButton (event => surface.appendView(new SurfaceElement('dog-image', image)));
    const element = new SurfaceElement('my-button', myButton)
    const element2 = new SurfaceElement('dog-image', image)
    const surface = new Surface();
    surface.appendView(element);
    surface.appendView(element2);
    document.body.appendChild(surface);    
}
