import React from "react";
function MealImage(props) {
    const {imgSource} = props;
    const {alterMsg} = props;
    return (
        <>
            <img src={imgSource} alt={alterMsg}/>
        </>
    );
}

export default React.memo(MealImage);