import '../component/meal-list.js';
import '../component/search-bar.js';
import '../component/header-app.js';
import '../component/footer.js';

import DataSource from '../data/data-source.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const mealListElement = document.querySelector("meal-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataSource.searchMeal(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       mealListElement.meals = results;
   };
 
   const fallbackResult = message => {
       mealListElement.renderError(message);
   };
 
   searchElement.clickEvent = onButtonSearchClicked;
    
};
 
export default main;
