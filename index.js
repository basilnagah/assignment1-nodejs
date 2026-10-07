// Q1) 1. Convert the string "123" to a number and add 7. (0.5 Grade) 

// let int = '123'
// let convertedInt = Number(123)+7
// console.log(convertedInt);


// Q2) 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade) 

// let int = 0

// if(!int){
//     console.log('invalid');
// }

// Q3) 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade) 

// for(let i=0 ; i<=10 ; i++ ){
//     if(i%2==0){
//         continue
//     }else{
//         console.log(i); 
//     }
// }


// Q4) 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade) 

// let testArray = [1, 2, 3, 4, 5] 

// let  evenArray = testArray.filter((int)=>{
//     return int%2==0
// })

// console.log(evenArray);



// Q5)  5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade) 

// let firstArray = [1,2,3]
// let secondArray = [4,5,6]
// let mergedArray = [...firstArray,...secondArray]
// console.log(mergedArray);


// Q6) 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade) 

// let day = 2
// switch (day) {
//     case 1:
//         console.log('sunday');
//         break;
//     case 2:
//         console.log('monday');
//         break;
//     case 3:
//         console.log('tuesday');
//         break;
//     case 4:
//         console.log('wednesday');
//         break;
//     case 5:
//         console.log('thursday');
//         break;
//     case 6:
//         console.log('friday');
//         break;
//     case 7:
//         console.log('saturday');
//         break;
//     default:
//     console.log('choose number from 1 to 7 y ahbl');
    
//         break;
// }


// Q7) 7. Create an array of strings and return their lengths using map method (0.5 Grade) 

// let stringsArray = ["a", "ab", "abc"] 

// stringsArray.map((a)=>{
//     console.log(a.length);
    
// })


// Q8) 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade) 

// let int = 15

// if(int%3==0&& int%5==0){
//     console.log('Divisible by both'); 
// }


// Q9) 9. Write a function using arrow syntax to return the square of a number (0.5 Grade) 

// let squareFn = (int)=>{
//     return int*int
// }

// console.log(squareFn(5));


// Q10) 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade) 

// const person = {name: 'John', age: 25} 

// function personFn (){
//     const {name,age} = person
//     return `${name} is ${age} years old`
// }
// console.log(personFn());


// Q11)  11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade) 


// function sumFn(...array){    
//     let sum=0
//     for(let i=0 ; i<array.length; i++){
//         sum=sum+array[i]
//     }  
    
//     console.log(sum);
    
// }

// sumFn(3,4,5,6)

// Q12) 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade) 


// function promiseFn(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove('Success')
//         }, 3000);
//     })
// }

// promiseFn().then((msg)=>{
//     console.log(msg);
    
// })


// Q13) 13. Write a function to find the largest number in an array. (0.5 Grade) 
 
// let array = [1, 3, 7, 2, 4] 

// function largestNumber(){

//     let largest=array[0]

//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>largest){
//             largest=array[i]
//         }        
//     }

//     console.log(largest);
    
// }

// largestNumber()

// Q14) 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade) 

// let person = {name:'basil', age:30}

// function arrayFn(){
//     let result = Object.keys(person);
//     console.log(result);
    
// }

// arrayFn()

// Q15) 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade) 
// let str =  "The quick brown fox" 

// function splitter(){
//     let result = str.split(' ')
//     console.log(result);
    
// }

// splitter()

