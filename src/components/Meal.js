import { useState } from "react";
import Footer from "./Footer";

const Meal = ({meal}) => {
    const [show, setShow] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const [showMeasurements, setShowMeasurements] = useState(false);


    return ( 
        <div class="meal">
            <hr />
            <h2> How about... <i>{meal.strMeal}?</i> </h2>
            <section id="random_image">
                {meal ? <img src={meal.strMealThumb} alt="Picture of meal" /> : <p> Loading meal</p>}
            </section>

            <section className="meal_info">
            <ul>
                <li>Category: {meal.strCategory}</li>
                <li>Origin: {meal.strArea}</li>
                <li>Watch a tutorial here: <a href="url">{meal.strYoutube}</a></li>
                <li>Preview Ingredients:</li>
                    <ul>
                        <li>{meal.strIngredient1}</li>
                        <li>{meal.strIngredient2}</li>
                        <li>{meal.strIngredient3}</li>
                        <li>{meal.strIngredient4}</li>
                        <li>{meal.strIngredient5}</li>
                     </ul>   
            
                        <li> <button onClick={() => setShowIngredients(!showIngredients)}>View More Details..</button>
                {showIngredients ? <ul> <i>Full Ingredients List & Measurements: </i> 
                 {meal.strMeasure1} {meal.strIngredient1}. {meal.strMeasure2} {meal.strIngredient2}. {meal.strMeasure3} {meal.strIngredient3}. {meal.strMeasure4} {meal.strIngredient4}. {meal.strMeasure5} {meal.strIngredient5}. {meal.strMeasure6} {meal.strIngredient6}. {meal.strMeasure7} {meal.strIngredient7}. {meal.strMeasure8} {meal.strIngredient8}. {meal.strMeasure9} {meal.strIngredient9}. {meal.strMeasure10} {meal.strIngredient10}. {meal.strMeasure11} {meal.strIngredient11}. {meal.strMeasure12} {meal.strIngredient12}. {meal.strMeasure13} {meal.strIngredient13}. {meal.strMeasure14} {meal.strIngredient14}. {meal.strMeasure15} {meal.strIngredient15}. {meal.strMeasure16} {meal.strIngredient16}. {meal.strMeasure17} {meal.strIngredient17}. {meal.strMeasure18} {meal.strIngredient18}. {meal.strMeasure19} {meal.strIngredient19}. {meal.strMeasure20} {meal.strIngredient20}. 
                 </ul> : null}

                 {/* <button onClick={() => setShowMeasurements(!showMeasurements)}>View Measurement List</button>
                {showMeasurements ? <ul> <i>Measurement List:</i>         {meal.strMeasure10} {meal.strMeasure11} {meal.strMeasure12} {meal.strMeasure13} {meal.strMeasure14} {meal.strMeasure15} {meal.strMeasure16} {meal.strMeasure17} {meal.strMeasure18} {meal.strMeasure19} {meal.strMeasure20} </ul> : null} 
                 */}
                 </li>

            

                    
            </ul>
                <p>More details about how to cook our delicious <i>{meal.strMeal}</i> below:</p>
                
                <button onClick={() => setShow(!show)}>View Instructions...</button>
                {show ? <p> <i>Instructions:</i> {meal.strInstructions}</p> : null}
            </section>
            <hr/>
         
        </div>
     );
}
 
export default Meal;