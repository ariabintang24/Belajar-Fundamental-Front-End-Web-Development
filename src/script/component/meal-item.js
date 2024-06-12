class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   color: #FFFFFF;
                   flex-grow: 1;
                   background: linear-gradient(to bottom, #35A29F, #64CCC5);
                   display: block;
                   margin-bottom: 10px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .img {
                   width: 100%;
                   border-radius: 15px;
                   max-height: 320px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .meal-info {
                   padding: 25px;
               }

                h2
                {
                    font-size: 30px;
                    text-align: center;
                    margin-bottom: 16px;
                    margin-top : 10px;
                }

                h3
                {
                    font-size: 22px;
                    margin-bottom: 8px;
                    text-align: left;
                }

                .row
                {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .row .long-copy
                {
                    margin-top: 22px;
                    margin-bottom : 22px;
                    text-align : justify;
                }

                @media only screen and (max-width: 1100px) 
                {
                    h2
                    {
                        font-size: 140%;
                    }

                    h3
                    {
                        font-size: 100%;
                    }

                    .row .long-copy
                    {
                        font-size: 18px;
                    }
                }

                @media only screen and (max-width: 950px) 
                {
                    h2
                    {
                        font-size: 130%;
                    }

                    h3
                    {
                        font-size: 90%;
                    }

                    .row .long-copy
                    {
                        font-size: 17px;
                    }
                }

                @media only screen and (max-width: 800px) 
                {
                    h2
                    {
                        font-size: 120%;
                    }

                    h3
                    {
                        font-size: 80%;
                    }

                    .row .long-copy
                    {
                        font-size: 16px;
                    }
                }

                @media only screen and (max-width: 650px) 
                {
                    h2
                    {
                        font-size: 110%;
                    }
                }

                @media only screen and (max-width: 450px) 
                {
                    h2
                    {
                        font-size: 90%;
                    }

                    h3
                    {
                        font-size: 70%;
                    }

                    .row .long-copy
                    {
                        font-size: 15px;
                    }
                }

                @media only screen and (max-width: 390px) 
                {
                    h2
                    {
                        font-size: 90%;
                    }

                    h3
                    {
                        font-size: 60%;
                    }

                    .row .long-copy
                    {
                        font-size: 14px;
                    }
                }
            
                @media only screen and (max-width: 351px) 
                {
                    .row .long-copy
                    {
                        font-size: 13px;
                    }
                }


           </style>
           <div class="meal-info">
               <img class="img" src="${this._meal.strMealThumb}" alt="Meal Image">
               <h2>${this._meal.strMeal}</h2>
               <h3>Country: ${this._meal.strArea} </h3>
               <h3>Category: ${this._meal.strCategory}</h3>
               <div class="row">
                    <p class="long-copy"><strong><span>Steps:<span></strong><br> ${this._meal.strInstructions}</p>
               </div>
           </div>`;
    }
}

customElements.define("meal-item", MealItem);