import React from "react";
function MealString(props) {
    const {strMeal} = props;
    return (
        <>
            <div className="meal-info">
                <h3>{strMeal}</h3>
            </div>
        </>
    );
}

export default React.memo(MealString);