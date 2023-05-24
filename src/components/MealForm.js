import MealList from "./MealList";

const MealForm = ({meal, fetchMealSearch}) => {

   

    // let global_apiData;
    // let mealsList = document.getElementById("mealsList");
    // let filetMealForm = document.querySelector("#filterMealForm")

    // async function getMealInfo() {
    //     const apiData = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
    //     const apiDataJSON = await apiData.json();
    //     return apiDataJSON;
    // }

    // async function setUp() {
    //     // console.log("Hi everyone");
    //     global_apiData = await getMealInfo();

    //     mealsList.innerHTML = "";

    //     global_apiData.map(meal => {
    //         createNewMealElement(meal);
    //     })

    // }
    // setUp();

    // function createNewMealElement(single_meal) {
    //     const newListItem = document.createElement("li");
    //     const mealName = single_meal.meal.strMeal;
    //     newListItem.innerText = `${mealName}`
    //     mealsList.appendChild(newListItem);
    // }

    // function handleFilterFormSubmit(event) {
    //     event.preventDefault();
    //     const inputValue = event.target[0].value;
    //     filterMeals(inputValue)
    // }

    // filetMealForm.addEventListener("submit", handleFilterFormSubmit)


    // function filterMeals(filterCriteria) {
    //     const filteredMeals = global_apiData.filter(meal => {
    //         const noCase = meal.meal.strMeal.toLowerCase();
    //         return noCase.includes(filterCriteria.toLowerCase())
    //     })

    //     mealsList.innerHTML = "";

    //     filteredMeals.map(meal => {
    //         createNewMealElement(meal);
    //     })
    // }




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