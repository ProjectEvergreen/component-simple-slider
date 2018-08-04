import { LitElement, html } from '@polymer/lit-element';

class GreetingComponent extends LitElement {
  
  static get properties() {
    return {
      name: {
        type: String,
        attrName: 'name'
      }
    };
  }

  _render(props) {
    return html`
      <style>
        :host .name {
          color: green;
        }
      </style>
      
      <h1 class="greeting">Hello <span class="name">${props.name}</span>!</h1>
    `;
  }
}

customElements.define('x-greeting', GreetingComponent);