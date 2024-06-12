class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 1000px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 15px;
           display: flex;
           position: sticky;
           top: 10px;
           right: 20px;
           background-color: #000000;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           font-size: 18px;
           border-radius: 15px;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: none;
       }
      
       .search-container >  input::placeholder {
           color: #000000;
           font-weight: bold;
           font-size: 18px;
       }
      
       .search-container > button {
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 17px;
           background-color: #35A29F;
           color: white;
           border: 0;
           border-radius: 15px;
           font-weight: bold;
           font-size: 18px;
       }

       .search-container > button:hover {
        background-color: #176B87; 
        }

        h2
        {
            color: #000000;
            font-size: 35px;
            text-align: center;
            margin-bottom: 20px;
        }

        .row
        {
            max-width: 1000px;
            margin: 0 auto;
        }

        .row .long-copy
        {
            margin-bottom : 30px;
            text-align : center;
        }

        @media screen and (max-width: 1000px){
           h2
           {
                font-size: 140%;
           }

            .row .long-copy
            {
               font-size: 18px;
            }

            .search-container > button 
            {
                font-size: 13px;
            }
       }

        @media screen and (max-width: 700px)
        {
           h2
           {
                font-size: 130%;
           }

            .row .long-copy
            {
               font-size: 17px;
            }

            .search-container > button 
            {
                font-size: 12px;
            }
        }
    
        @media screen and (max-width: 580px)
        {
            h2
            {
                font-size: 120%;
            }
        }

       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
               text-align : center;
           }
      
           .search-container > button {
               width: 100%;
           }
       }

        @media screen and (max-width: 400px){
           h2
            {
                font-size: 100%;
            }
       }

         @media screen and (max-width: 360px){
           .search-container >  input::placeholder {
               font-size: 13px;
           }
       }
       </style>
        <div class= "row">           
                <h2>What meal do you want to look for?</h2>
        </div>
        <div id="search-container" class="search-container">
            <input placeholder="Type the meal..." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);