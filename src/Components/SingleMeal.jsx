import React from "react";
import RenderList from "./RenderList";

function SingleMeal(props) {
    const {checkSingleMeal} = props;
    const {currentMealData} = props;
    return (
        <>
            {(checkSingleMeal && currentMealData) ? (
                <>
                    <div className='single-meal'>
                        <h1>{currentMealData["strMeal"]}</h1>
                        <img src={currentMealData["strMealThumb"]} alt={currentMealData["strMeal"]} />

                        <div className='single-meal-info'>
                            <p>{currentMealData["strCategory"]}</p>
                            <p>{currentMealData["strArea"]}</p>
                        </div>

                        <div className='main'>
                            <p>{currentMealData["strInstructions"]}</p>
                            <h2>Ingredients</h2>
                            <ul>
                                <li>
                                    <RenderList currentMeal={currentMealData} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default React.memo(SingleMeal);