class Footer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        :host {
            background-color: #35A29F;
            padding: 30px 7%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        .credit {
            text-align: center;
        }
        
        h3 {
            margin-top: 18px;
            font-size: 22px;
            color:#FFFFFF;
        }
        
        </style>
        <div class="credit">
            <h3>Belajar Fundamental Front-End Web Development &copy; Aria Bintang, 2023</h3>
        </div>

        `;
    }
}

customElements.define('foot-bar', Footer);