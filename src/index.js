class HelloComponent extends HTMLElement {

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'closed' });
    this.root.innerHTML = this.template();
  }

  template() {
    return `
      <h3>???!<h3>
    `;
  }

}

customElements.define('eve-hello', HelloComponent);

export default HelloComponent;