import React from "react";
import Meal from "./Meal";

function ShowMeals(props) {
    const {meals} = props;
    const {isRandom} = props;
    const {setCurrentMeal} = props;
    return (
        <>
            {(meals && (!isRandom)) ? (
                <>
                    {meals.map((currentMeal) => {
                        return (
                            <Meal currentMeal={currentMeal} onClick={setCurrentMeal} />
                        );
                    })}
                </>
            ) : (
                <>
                </>
            )}
        </>
    );
}
// https://www.youtube.com/watch?v=A6mD1TCEb40
export default React.memo(ShowMeals);