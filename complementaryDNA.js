 /* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */

function DNAStrand(dna){
  //your code here
  let arr = dna.split('')
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'A'){
      arr[i] = 'T'
    }else if(arr[i] === 'T'){
      arr[i] = 'A'
    }if (arr[i] === 'G'){
      arr[i] = 'C'
    }else if(arr[i] === 'C'){
      arr[i] = 'G'
    }
  }
  return arr.join('')
}
