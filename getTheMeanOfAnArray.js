 function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor((marks.reduce((a, e) => a += e )) / marks.length )
}

