import React from "react";

function RenderList(props) {
    const {currentMeal} = props;
    const ingredients = [];
    const measures = [];
    const combined = [];

    for (let property in currentMeal) {
        if (property.startsWith("strIngredient")) {
            if (currentMeal[property] !== "" && currentMeal[property] !== null) {
                ingredients.push(currentMeal[property]);
            }
        }

        if (property.startsWith("strMeasure")) {
            if (currentMeal[property] !== "" && currentMeal[property] !== null) {
                measures.push(currentMeal[property]);
            }
        }
    }
    
    for (let k=0; k < ingredients.length; k++) {
        combined.push(ingredients[k] + " - " + measures[k]);
    }
    
    return (
        <>
            {combined.map((current) => {
                return <li>{current}</li>
            })}
        </>
    );
}

export default React.memo(RenderList);