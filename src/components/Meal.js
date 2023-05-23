import { useState } from "react";
import Footer from "./Footer";

const Meal = ({meal}) => {


    return ( 
        <div class="meal">
            <hr />
            <h2> How about... <i>{meal.strMeal}</i>? </h2>
            <section id="random_image">
                {meal ? <img src={meal.strMealThumb} alt="Picture of meal" /> : <p> Loading meal</p>}
            </section>
            <ul>
                <li>Category: {meal.strCategory}</li>
                <li>Origin: {meal.strArea}</li>
                <li>Watch a tutorial here: {meal.strYoutube}</li>
                <li>Ingredient List:</li>
                    <ul>
                        <li>{meal.strIngredient1}</li>
                        <li>{meal.strIngredient2}</li>
                        <li>{meal.strIngredient3}</li>
                        <li>{meal.strIngredient4}</li>
                    </ul>
            </ul>
                <p>More details about how to cook our delicious <i>{meal.strMeal}</i> below:</p>
                <button>Show More...</button>
            <p>Instructions: {meal.strInstructions}</p> 
            <hr/>
            <Footer/>
        </div>
     );
}
 
export default Meal;