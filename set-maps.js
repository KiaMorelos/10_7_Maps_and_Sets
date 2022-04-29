//1
[1,2,3,4]

//2
"ref" // spreads, takes out duplicates and then joins back together
//3
0: Array(3) [ 1, 2, 3 ] → true

1: Array(3) [ 1, 2, 3 ] → false


// hasDuplicate

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => {
const checkMe = new Set(arr)
return arr.length !== checkMe.size
}

// vowelCount

// Write a function called vowelCount which accepts a string and returns a map where the keys are letters and the values are the count of the vowels in the string.
const vowels = (letter) => "aeiou".includes(letter) //return true or flase

const vowelCount = (string) => {
    let lowerCased = string.toLowerCase()
    let mapVowels = new Map()
    for(letter of lowerCased){
        if(vowels(letter)){ //if true, check if the map has the letter key already
            if(mapVowels.has(letter)){
                mapVowels.set(letter, mapVowels.get(letter)+1)//set and get letter key, add 1 to it
            } else {
                mapVowels.set(letter, 1)//the letter key doesnt exist yet. set the key, and the value to 1
            }
        }
    }
    return mapVowels

}

//vowelCount("hello")