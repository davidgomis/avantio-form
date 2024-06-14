class ResultComponent extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = `
      <style>
        .container {
          padding: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          max-width: 600px;
          margin: 16px auto;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .section {
          margin-bottom: 16px;
        }
        .section-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .field {
          margin-bottom: 8px;
        }
        .field-label {
          font-weight: bold;
        }
        img {
          max-width: 100px;
          max-height: 100px;
          margin: 5px;
        }
      </style>
    `;

    const accommodationName = this.getAttribute("accommodation-name") || "";
    const accommodationAddress =
      this.getAttribute("accommodation-address") || "";
    const accommodationDescription =
      this.getAttribute("accommodation-description") || "";
    const accommodationType = this.getAttribute("accommodation-type") || "";
    const ownerName = this.getAttribute("owner-name") || "";
    const ownerEmail = this.getAttribute("owner-email") || "";
    const ownerPhone = this.getAttribute("owner-phone") || "";

    const template = `
      <div class="container">
        <div class="title">Summary</div>
        <div class="section">
          <div class="section-title">Accommodation Information</div>
          <div class="field"><span class="field-label">Name:</span> ${accommodationName}</div>
          <div class="field"><span class="field-label">Address:</span> ${accommodationAddress}</div>
          <div class="field"><span class="field-label">Description:</span> ${accommodationDescription}</div>
          <div class="field"><span class="field-label">Type:</span> ${accommodationType}</div>
        </div>
        <div class="section">
          <div class="section-title">Owner Information</div>
          <div class="field"><span class="field-label">Name:</span> ${ownerName}</div>
          <div class="field"><span class="field-label">Email:</span> ${ownerEmail}</div>
          <div class="field"><span class="field-label">Phone:</span> ${ownerPhone}</div>
        </div>
      </div>
    `;

    this.shadow.innerHTML = `${style}${template}`;
  }

  static get observedAttributes() {
    return [
      "accommodation-name",
      "accommodation-address",
      "accommodation-description",
      "accommodation-type",
      "owner-name",
      "owner-email",
      "owner-phone",
    ];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("result-component", ResultComponent);
