import '../src/index.js';
import css from './app.css';

class ReferenceApp extends HTMLElement {

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'closed' });
    this.root.innerHTML = this.template();
  }

  template() {
    return `
      <style>
        ${css}
      </style>

      <div class="reference-app">
        <h2>Simple Slider Reference App</h2>
        
        <eve-hello></eve-hello>
      </div>
    `;
  }

}

customElements.define('ref-app', ReferenceApp);