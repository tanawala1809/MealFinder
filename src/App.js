import React from 'react';
import { useEffect, useRef, useState } from 'react';

import HeaderText from './Components/HeaderText';
import SingleMeal from './Components/SingleMeal';
import ShowMeals from './Components/ShowMeals';

import './App.css';


function App() {
    const [keyword, setKeyword] = useState("");
    const [initial, setInitial] = useState(false);
    const [meals, setMeals] = useState([]);
    const [result, setResult] = useState({});
    const [checkSingleMeal, setCheckSingleMeal] = useState(false);
    const [currentMealData, setCurrentMealData] = useState({});
    const [isRandom, setIsRandom] = useState(false);
    const userInput = useRef("");

    function getMeal() {
        userInput.current.focus();
        if (userInput.current.value) {
            setKeyword(userInput.current.value);
            userInput.current.value = "";
            if (!initial) {
                setInitial(true);
            }
        } else {
            alert("Please enter a search term");
            setInitial(false);
            setCheckSingleMeal(false);
            setMeals([]);
            setCurrentMealData({});   
        }
    }

    function getRandomMeal() {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((response) => {
            return response.json();
        }).then((response) => {
            setResult(response);
            setMeals(response["meals"]);
            setCurrentMealData(response["meals"][0]);
            setCheckSingleMeal(true);
            setInitial(false);
            setIsRandom(true);
        }).catch((err) => {
            console.log(err);
        });
    }

    function setCurrentMeal(data) {
        setCheckSingleMeal(true);
        setCurrentMealData(data);
    }

    useEffect(() => {
        if (initial) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`).then((response) => {
                return response.json();
            }).then((response) => {
                setResult(response);
                setMeals(response["meals"]);
                setCheckSingleMeal(false);
                setIsRandom(false);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [keyword]);

    return (
        <>
            <div className='container'>
                <h1>Meal Finder</h1>
                <div className='flex'>
                    <input style={{ width: "300px" }} placeholder="Search for meals or keywords" ref={userInput} />
                    <button className='search-btn' type='submit' onClick={getMeal}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button className='random-btn' onClick={getRandomMeal}>
                        <i class="fa-solid fa-shuffle"></i>
                    </button>
                </div>

                {(meals) ? (
                    <>
                        <HeaderText keyword={keyword} initial={initial} />
                    </>
                ): (
                    <>
                        <p style={{textAlign:"center"}}>There are no search results. Try again!</p>
                    </>
                )}

                <div className='meals'>
                    <ShowMeals meals={meals} isRandom={isRandom} setCurrentMeal={setCurrentMeal}/>
                </div>

                <div>
                    <SingleMeal checkSingleMeal={checkSingleMeal} currentMealData={currentMealData}/>
                </div>
            </div>
        </>
    );
}

export default React.memo(App);