import MealList from "./MealList";

const MealForm = ({meal, fetchMealSearch}) => {

   
    return ( 
        <> 
            <h2>Meal Options</h2>
            <form id = "filterMealForm">
            
            <hr/>
                <div className="search_bar">
                    <input id="search_input"
                        type="text"
                        name="meal.strMeal"
                        placeholder="Search for a meal.."
                        value={meal.strMeal} /> 
                    {/* not sure about the above */}
                    <button type="submit">Enter</button>
                 </div>   

            </form>
        </>
     );
}
 
export default MealForm;