import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //


/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
unction task1(){
    if (fifaData["Year"] == 2014) then {
        if (fifaData["Stage"] === "Final"){
            console.log(fifaData["Home Team Name"])
            console.log(fifaData["Away Team Goals"])
            console.log(fifaData["Away Team Name"])
            console.log(fifaData["Home Team Goals"])
            return console.log(fifaData["Win Conditions"])
        }
 //  }
//}
task1();

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(fifaData[828]["Home Team Name"])
console.log(fifaData[828]["Away Team Goals"])
console.log(fifaData[828]["Away Team Name"])
console.log(fifaData[828]["Home Team Goals"])
console.log(fifaData[828]["Win conditions"])


/*
let filter = {
    "Year": 2014,
    "Stage": "Final",
    "Home Team Name": null,
    "Away Team Goals": null,
    "Home Team Name": null,
    "Away Team Goals": null,
};
let arr = [];
let fifaData = fifaData.filter(function (item) {
    for (var key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
            return false;
    }
    return arr.push[filter];
});

console.log(filter)






const filterLargeStates = fifaData.filter((stage, year, HT, AT, Name, Goals, Winner) => {

    let a = fifaData["Home Team Name"]
    let b = fifaData["Away Team Name"]
    let c = fifaData["Home Team Goals"]
    let d = fifaData["Away Team Goals"]
    let e = fifaData["Win conditions"]
    return stage.year.HT.name,
   
        };

/*

const d = []
    const c = []
   for(let i = 0; i < fifaData.length; i++){
        if (fifaData[i].Year === 2014){
            d.push(fifaData[i])
        }
    }
    for(let i = 0; i < fifaData.length; i++){
        if (d[i]["Stage"] === "Final" && (d[i]["Stage"] === "Final")){
            d.push(fifaData[i])
        }
    }
}
function mapandfilter(){
    const T1 = [];
    let task1 = {};
    for(let i = 0; i < fifaData.length; i++) {
    if(fifaData[i].year === 2014) {
  //  task1.Stage = fifaData[i].Stage
   // task1["Home Team Name"] = fifaData[i]["Home Team Name"];
   // task1["Away Team Name"] = fifaData[i]["Away Team Name"];
   // task1["Home Team Goals"] = fifaData[i]["Home Team Goals"];
   // task1["Win conditions"]  = fifaData[i]["Win conditions"]
    
            T1.push(task1);
        }
    }
    console.log(T1)
    return T1;

}
for(let i = 0; i < fifaData.length; i++) {
if(fifaData[i].year === 2014) {console.log(fifaData[i]);}
}


 Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */



function getFinals(data) {
    const finalsData = fifaData.filter((Stage) => {
        return Stage === "Final";
      });
      return finalsData;
    }
console.log(getFinals(fifaData));
   


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {

    /* code here */

};

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
