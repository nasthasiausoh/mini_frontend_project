import { useState } from "react";
import Meal from "./Meal";

const MealList = ({meals, fetchRandomMeal}) => {

    const [showGenerator, setShowGenerator] = useState(false);
    

    const mealComponents = meals.map((meal) => {
            return ( 
                <>
                    <Meal key={meals.id} meal={meal}/> 
                </>
             );
        });
   
        return (
            <>
            <section id="section_generator">
            <hr/>

            <h2>Random Meal Generator</h2>
                <div className="meal_list">
                <p>Can't decide? Let us do the recipe hunting for you!</p>
                    <div className="random_meal_search">
                        <button onClick={fetchRandomMeal}>Choose A Random Meal</button>  
                    </div>
                
                </div> 
                </section>
                    {mealComponents}
                <hr/>
            </>
        )
       
    }
 
export default MealList;

