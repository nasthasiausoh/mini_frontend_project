import { useEffect, useState } from "react";
import MealForm from "../components/MealForm";
import MealList from "../components/MealList";



const MealContainer = ({meal}) => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState("");
    const [mealToUpdate, setMealToUpdate] = useState(null);

const fetchRandomMeal = useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((response) => setMeals(response.meals))
        .catch((err) => setError(err.message));
    }, []);


    // Display and error to the user if we cannot fetch meals:
    

    
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
            
            <MealForm key={meals.id} meal={meals} />
            <MealList meals={meals}/>
            { (error !== "") && <p> Error! {error}</p>}

        </div>

    );
}
 
export default MealContainer;