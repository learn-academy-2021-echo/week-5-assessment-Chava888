// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest





// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"

//Pseudo Code:
/*
-Input a string, the output changes specific characters  'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
-Perform a split() to convert string to an array and store in a stringArray variable
-Perform a .map on the stringArray to change specific characterts
-Perform a join() to change the stringArray to a string again.
-Output a string with the converted characters
-In addition, need to do a red-green-refactor methodolgy, secretCodeWord1,secretCodeWord2,secretCodeWord3
*/

//First Step: Perform Red

// describe("codedMessage", () => {

//     it("Takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {

//         expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     })
// })

// Received an error =>  ReferenceError: codedMessage is not defined


//Second Step: Make the test pass for secretCodeWord1, secretCodeWord2 and secretCodeWord3

// describe("codedMessage", () => {

//     it("Takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {

//         expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
//         expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
//         expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
//     })
// })


// b) Create the function that makes the test pass.
// -Perform a split() to convert string to an array and store in a stringArray variable
// -Perform a .map on the stringArray to change specific characterts
// -Perform a join() to change the stringArray to a string again.
// -Output a string with the converted characters

// const codedMessage = (string) => {
//     let stringArray = string.split("")
//     let code = stringArray.map((value, index, array) => {
//         if(value.toLowerCase() === 'a'){
//             return 4
//         }
//         else if(value.toLowerCase() === 'e'){
//             return 3
//         }
//         else if(value.toLowerCase() ==='i'){
//             return 1
//         }
//         else if(value.toLowerCase() === 'o'){
//             return 0
//         }
//         else{
//             return value
//         }
//     })

//     return code.join("")
        
// }

//Third Step: Refactor
/*
Reformat by having a codekeys object and only one terinary operator to check for key value pairs. Furthermore, changed the return in .map for a implicit arrow function.
*/

const codedMessage = (string) => {
    let codeKeys ={a:"4", e:"3", i:"1", o:"0"} 
    return string.split("").map(value => codeKeys[value.toLowerCase()] ? codeKeys[value.toLowerCase()] : value).join("")     
}



describe("codedMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"

    it("Takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {

        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
    })
})



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]



//Pseudo Code:
/*
-Input an array and a single letter(two arguments), the output is an array containing only elements of the argument array that has the particular letter
-Perform a .filter() to filter out the elements containing the string letter input
-Use .includes() to check for the string letter in the .filter function.
-In addition, need to do a red-green-refactor methodolgy, arrayOfWords1 & arrayOfWords2
*/

//First Step: Perform Red

// describe("filterWords", () => {

//     it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {

//         expect(filterWords(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
//     })
// })

// Received an error =>  ReferenceError: filterWords is not defined


//Second Step: Make the test pass for arrayOfWords1 & arrayOfWords2

// describe("filterWords", () => {

//     const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
//     const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
//     const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
//     const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

//     it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {

//         expect(filterWords(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"]);
//         expect(filterWords(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
//     })
// })



// b) Create the function that makes the test pass.
// -Input an array and a single letter(two arguments), the output is an array containing only elements of the argument array that has the particular letter
// -Perform a .filter() to filter out the elements containing the string letter input
// -Use .includes() to check for the string letter in the .filter function.

// const filterWords = (arrayOfWords, letter) => {
//     newArray = arrayOfWords.filter(value => {

//         return  value.includes(letter) || value.includes(letter.toUpperCase())
//     })
//     return newArray
// }


//Third Step: Refactor
/*
Reformat by having implicit arrow functions 
*/
const filterWords = (arrayOfWords, letter) => arrayOfWords.filter(value => value.includes(letter.toLowerCase()) || value.includes(letter.toUpperCase()))




describe("filterWords", () => {

    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {

        expect(filterWords(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"]);
        expect(filterWords(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
    })
})





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false


//Pseudo Code:
/*
-Input an array, function checks for a unique element that repeats twice and another unique element that repeats three times, outputs a boolean true or false.
-Perform a .reducer to check and track number of times a value is repeated
-Use Object.values to convert the object from reduce to an array
-Check if the output array contains a 2 && 3. if statements
-In addition, need to do a red-green-refactor methodolgy, hand1, hand2, and hand3.
*/

// // First Step: Perform Red

// describe("fullHouse", () => {
    
//     it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {

//         expect(fullHouse(hand1)).toEqual(true)
//     })
// })

// Received an error =>  ReferenceError: fullHouse is not defined

//Second Step: Make the test pass for hand1, hand2, hand3.
// describe("fullHouse", () => {

//     const hand1 = [5, 5, 5, 3, 3]
//     // Expected output: true
//     const hand2 = [5, 5, 3, 3, 4]
//     // Expected output: false
//     const hand3 = [5, 5, 5, 5, 4]
//     // Expected output: false

//     it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {

//         expect(fullHouse(hand1)).toEqual(true)
//         expect(fullHouse(hand2)).toEqual(false);
//         expect(fullHouse(hand3)).toEqual(false);
//     })
// })





// b) Create the function that makes the test pass.
// -Input an array, function checks for a unique element that repeats twice and another unique element that repeats three times, outputs a boolean true or false.
// -Perform a .reducer to check and track number of times a value is repeated
// -Use Object.values to convert the object values from reduce to an array
// -Check if the output array contains a 2 && 3. if statements

// const fullHouse = (hand) => {

//     let tracker = hand.reduce((uniqueValues,currentValue)=>{
        
//         if(uniqueValues[currentValue]){
//             uniqueValues[currentValue] = uniqueValues[currentValue] + 1
//         }
//         else{
//             uniqueValues[currentValue] = 1
//         }
//         return uniqueValues
//     },{})

//    
//     if(Object.values(tracker).includes(2) && Object.values(tracker).includes(3)){
//         return true
//     }
//     else{
//         return false
//     }
// }



//Third Step: Refactor
/*
Reformat by having terinary operators
*/

const fullHouse = (hand) => {

    let tracker = hand.reduce((uniqueValues, currentValue) => {
        uniqueValues[currentValue] ? uniqueValues[currentValue] = uniqueValues[currentValue] + 1 : uniqueValues[currentValue] = 1;
        return uniqueValues
    },{})

    return (Object.values(tracker).includes(2) && Object.values(tracker).includes(3)) ? true : false
    
}



describe("fullHouse", () => {

    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false

    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {

        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false);
        expect(fullHouse(hand3)).toEqual(false);
    })
})