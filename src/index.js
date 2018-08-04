import { LitElement, html } from '@polymer/lit-element';

class HelloComponent extends LitElement {

  _render() {
    return html`
      <h3 class="heading">Hello World!<h3>
    `;
  }

}

customElements.define('x-hello', HelloComponent);