const MealForm = ({meal}) => {

    return ( 
        <> 
            <h2>Meal Options</h2>
            <form>
                
                <hr/>
                <div className="search_bar">
                    <input id="search_input"
                    type="text"
                    name="name"
                    placeholder="Search for a meal.."
                    value={meal.strMeal} /> 
                    {/* not sure about the above */}
                    <button>Enter</button>
                 </div>   
                    
                

                
            </form>
        </>
     );
}
 
export default MealForm;