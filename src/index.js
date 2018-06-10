class HelloComponent extends HTMLElement {

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'closed' });
    this.root.innerHTML = this.template();
  }

  template() {
    return `
      <h3>Hello World!<h3>
    `;
  }

}

customElements.define('eve-hello', HelloComponent);