import { LitElement, html } from '@polymer/lit-element';

class SimpleSliderComponent extends LitElement {
  
  constructor() {
    super();
   
    this.slots = 0;
    this.activeIndex = 0;
  }

  static get properties() {
    return {
      activeIndex: {
        type: Number,
        attrName: 'activeIndex'
      },
      slots: {
        type: Number,
        attrName: 'slots'
      }
    };
  }

  generateCarouselContent() {
    return new Array(this.slots).fill(null).map((item, index) => {
      const isActiveSlot = index === this.activeIndex ? 'active-slot' : 'slot';

      return html`
        <div class$="${isActiveSlot}"><slot name$="slide${index + 1}"></slot></div>
      `;
    });
  }

  generateCarouselNavigation() {
    return new Array(this.slots).fill(null).map((item, index) => {
      const isActiveSlot = index === this.activeIndex ? 'active-slot' : 'slot';

      return html`
        <li class$="${isActiveSlot}" onclick=${() => this.setActiveIndex(index) }>o</li>
      `;
    });
  }

  setActiveIndex(index) {
    this.activeIndex = index;
  }

  // TODO should use props
  _render() {
    return html`
      <style>
        :host {
          display: block;
          border: #1d337a solid 3px;
          border-radius: 10px;
          padding: 20px;
          min-height: 475px;
          width: 100%;
          text-align: center;
        }

        :host ul {
          padding: 0;
        }

        :host li {
          cursor: pointer;
          list-style: none;
          display: inline-block;
          padding: 10px;
          color: #020202;
          font-size: 1.5em;
        }

        :host li.active-slot {
          color: #168c37;
        }

        :host li:hover {
          color: #168c37;
          font-weight: bold;
          transition: all 250ms ease;
        }
        
        :host div.slot {
          display: none;
        }

        :host div.active-slot {
          display: block;
          transition: all 3s ease;
        }
      </style>
      
      <div class="x-simple-slider">
         ${ this.generateCarouselContent() }
         <ul>
           ${ this.generateCarouselNavigation() }
         </ul>
       </div>
    `;
  }
}

customElements.define('x-simple-slider', SimpleSliderComponent);