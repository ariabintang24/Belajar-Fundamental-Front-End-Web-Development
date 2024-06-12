import background from "../../styles/img/back-ground.jpg";

class AppHeader extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
     
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
                         <style>
                         :host {
                            flex-wrap: wrap;
                            display: flex;
                            padding: 0 7% 16px;
                            height: calc(100vmin);
                            background-image: url("${background}");
                            background-size: cover;
                            flex-direction: column;
                            justify-content: center;
                            align-items: flex-end;
                        }
   
                         .hero-text-box
                        {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            text-align: center;
                            align-items: center;
                            justify-content: center;
                            color: #FFFFFF;
                            font-size: 20px;
                        }

                        .btn
                        {
                            display: inline-block;
                            padding: 10px 30px;
                            font-weight: 300;
                            text-decoration: none;
                            border-radius: 15px;
                        }

                        .btn-full
                        {
                            background-color: #35A29F;
                            color: #FFFFFF;
                            margin-right: 15px;
                        }


                        .btn:hover
                        {
                            background-color: #176B87;
                        }

 
                         @media only screen and (max-width: 1200px) 
                         {
                             .hero-text-box 
                             {
                                 width: 100%;
                                 padding: 0 2%;
                                 margin-left : 25px;
                             }
 
                             h1
                             {
                                 font-size: 35px;
                             }
 
                             a
                             {
                                 font-size: 18px;
                             }
 
                         }
 
                         @media only screen and (max-width: 970px) 
                         {
 
                             h1
                             {
                                 font-size: 32px;
                             }
 
                             a
                             {
                                 font-size: 17px;
                             }
 
                         }
 
                         @media only screen and (max-width: 780px) 
                         {
                             .hero-text-box 
                             {
                                 width: 90%;
                                 padding: 0 2%;
                                 margin-left : 15px;
                             }
 
                             h1
                             {
                                 font-size: 29px;
                             }
 
                         }
 
                         @media only screen and (max-width: 730px) 
                         {
                             .hero-text-box 
                             {
                                 width: 90%;
                                 padding: 0 2%;
                                 margin-left : 12px;
                             }
 
                             h1
                             {
                                 font-size: 28px;
                             }
 
                             a
                             {
                                 font-size: 16px;
                             }
 
                         }
 
                         @media only screen and (max-width: 615px) 
                         {
                             .hero-text-box 
                             {
                                 width: 90%;
                                 padding: 0 2%;
                                 margin-left : 12px;
                             }
 
                             h1
                             {
                                 font-size: 25px;
                             }
 
                             a
                             {
                                 font-size: 15px;
                             }
 
                         }
 
                         @media only screen and (max-width: 552px) 
                         {
                             .hero-text-box 
                             {
                                 width: 85%;
                                 padding: 0 2%;
                                 margin-left : 12px;
                             }
 
                             h1
                             {
                                 font-size: 23px;
                             }
 
                         }
 
                         @media only screen and (max-width: 430px) 
                         {
                             .hero-text-box 
                             {
                                 width: 90%;
                                 padding: 0 2%;
                                 margin-left : 10px;
                             }
 
                             h1
                             {
                                 font-size: 21px;
                             }
 
                             a
                             {
                                 font-size: 14px;
                             }
 
                         }
 
                         @media only screen and (max-width: 350px) 
                         {
                             .hero-text-box 
                             {
                                 width: 80%;
                                 padding: 0 2%;
                                 margin-left : 9px;
                             }
 
                             h1
                             {
                                 font-size: 20px;
                             }
 
                             a
                             {
                                 font-size: 13px;
                             }
 
                         }
                         </style>
         
                         <div class="hero-text-box">
                             <h1>Recipe for Happiness <br> Find happiness through perfect cooking</h1>
                             <a class="btn btn-full" href="#searching">Let's Go!
                         </div>`;
    }
 }
  
 customElements.define("header-app", AppHeader);
 