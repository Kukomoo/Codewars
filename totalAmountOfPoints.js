/* Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/
function points(games) {
  let x = []
  let y = []
  let totalPoints = 0 // total points counter for x
  for(let i = 0; i < games.length; i++){
    x.push(Number(games[i][0])); //to grab x score
    y.push(Number(games[i][2])); // to grab y score
  }
  for(let z = 0; z < x.length; z++){
    if(x[z] > y[z]){
        totalPoints += 3 //win
      } else if (y[z] === x[z]){
        totalPoints += 1 //tie
      }
    }
  return totalPoints
  }
  
