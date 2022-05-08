import React, { useState } from "react";
import MealImage from "./MealImage";
import MealString from "./MealString";

function Meal(props) {
    const {currentMeal} = props;
    const [checkClicked, setCheckClicked] = useState(false);

    function currentMealData(mealData) {
        props.onClick(mealData);
    }

    return (
        <div className='meal' onClick={() => {
            {currentMealData(currentMeal)};
        }}>
            <MealImage imgSource ={currentMeal["strMealThumb"]}/>
            <MealString strMeal={currentMeal["strMeal"]}/>
        </div>
    );
}

export default React.memo(Meal);