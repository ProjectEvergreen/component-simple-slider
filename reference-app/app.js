import { LitElement, html } from 'lit-element';
import '../src/index.js';
import css from './app.css';

class ReferenceApp extends LitElement {

  static get properties() {
    return {
      content: {
        type: Array,
        attrName: 'content'
      }
    };
  }

  constructor() {
    super();

    this.content = [
      'Slide 1',
      'Slide 2',
      'Slide 3'
    ];
  }

  generateSlotTemplate(item, index) {
    return html`<div .slot="slide${index + 1}"><h3>${item}</h3></div>`;
  }

  render() {
    return html`
      <style>
        ${ css }
      </style>

      <div class="reference-app">
        <h2>Simple Slider Reference App</h2>
        
        <x-simple-slider .slots=${this.content.length}>
          ${ this.content.map(this.generateSlotTemplate) }
        </x-simple-slider>
      </div>
    `;
  }

}

customElements.define('ref-app', ReferenceApp);