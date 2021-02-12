import { LitElement, html, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

class TextField extends LitElement {
    constructor (text) {
        super ()
        this._text 
        //где-то здесь фокусы с локальным хранилищем, например: 
        //const itemString = localStorage.getItem(text);
        //const item = itemString ? JSON.parse(itemString) : {x: 0, y: 0, w: 100, h: 100};
        //а где-то ниже мы закодируем эти координаты в строку
        
        //потом идет взаимодействие с SurfaceElement - относительно него мы задаем координаты самого элемента
        // 
    }


 
    render() {
        return html`<div>sos</div>`
    }

    static get styles() {
        return css `
        div {
            background-color: white;
            position: absolute;
            height: 100px;
            weight: 100px;
        }`
    }
        

}

customElements.define('text-field', TextField);

window.onload = function() {
    const textField = new TextField();
    document.body.append(textField);
};

// class SampleElement extends LitElement {
//     render() {
//         return html``;
//     }
// }
//customElements.define('sample-element', SampleElement);

// window.onload = function() {
//     const element = new SampleElement();
//     document.body.append(element);
// };

// static get styles() {
//     return css `
//     button {
//         display: inline;
//         width: 250px;
//         background-color: white ;
//         color: black;
//         margin: 30px;
//         border: none;
//         font-size: 16px;
//         font-weight: 700;
//         text-transform: uppercase;
//         padding: 16px 20px;
//         letter-spacing: 0.04em;
//         transition: all 0.15s ease;
//         cursor: pointer;
//         }
//     button:hover {
//         box-shadow: -5px -5px 0px  white;
//         background:  #ffa500;
//         transform: translateY(3px) translateX(3px);
//         }
//     `
// }