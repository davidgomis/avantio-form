class ResultComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      p {
        color: blue;
        font-size: 20px;
      }
    `;
    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a test paragraph inside result-component.";

    this.shadowRoot?.append(style, paragraph);
  }
}

customElements.define("result-component", ResultComponent);
