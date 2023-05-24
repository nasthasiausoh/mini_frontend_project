import { useEffect, useState } from "react";
import MealForm from "../components/MealForm";
import MealList from "../components/MealList";



const MealContainer = ({meal}) => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState("");
    const [mealSearch, setMealSearch] = useState([]);


    const fetchSearchMeal = async () => {
        const responseMealSearch = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealSearch)
        const jsonDataMealSearch = await responseMealSearch.json();
        setMeals(jsonDataMealSearch.meals)
    }
    useEffect(() => {
        fetchSearchMeal();
    }, [])



    const fetchRandomMeal = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        const jsonData = await response.json();
        setMeals(jsonData.meals);
    }

    useEffect(() => {
        fetchRandomMeal();
    }, [])


    
    return (  
        <div className="meal_container">
            <header>
                <div className="header_tag">
                    <h1>Meal Finder</h1>
                    <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-recipe-foodies-flaticons-lineal-color-flat-icons.png" alt="external-recipe-foodies-flaticons-lineal-color-flat-icons"/>
              </div>
              <hr/>

                <nav className="nav">
                    <a href="#">Latest Recipes</a>
                    <a href="#">Easy Dinners</a>
                    <a href="#">Work Lunches</a>
                    <a href="#">Slow Cooker Recipes</a>
                    <a href="#">Desserts</a>
                </nav>
            </header>

            <section className="meal_search">
                <h2>Browse Meals</h2>
                <div className="search_input_bar"> 
                    <input 
                        type="text" 
                        value={mealSearch} 
                        placeholder="Search for a meal.."
                        onChange={(e) => setMealSearch(e.target.value)} />
                    <button onClick={fetchSearchMeal}>Search</button>
                </div>
            </section>
            
            {/* <MealForm 
            key={meals.id}
            meal={meals} 
            fetchSearchMeal={fetchSearchMeal} /> */}

            <MealList meals={meals} fetchRandomMeal={fetchRandomMeal}/>
            { (error !== "") && <p> Error! {error}</p>}

        </div>

    );
}
 
export default MealContainer;