//1
function countToTen(){
for (i = 1; i <= 10; i++) {console.log (i)}
}

//2
function countFromOne(num){
for (i = 1; i <= num; i++) {console.log (i)}
}

//3
function countEveryEven(num){
for (let i = 1; i <= num; i++){
if (i % 2 === 0) {console.log (i);}
  }

}

//4
function countEveryOdd(num){
for (let i = 1; i <= num; i++) {
if (i %2 != 0) {console.log (i);}
}
}
  
//5
function countEvens(arr){
let i = 0; // the iterator
let x = []; // a variable whose valuable is an empty array
for (i = 0; i < arr.length; i++) { //iterating through the array)
    
if (arr[i] % 2 === 0) { // if statement to check if the remainder of each element (iteration)
                        //in the array is 0 after being divided by 2 (checks if even number)
x = arr[i]; // the variable is given the values of the user submitted array with the iterator
console.log (x); // the variable is console logged
}
}
}

countToTen();
countFromOne(5);
countEveryEven(10);
countEveryOdd(10);
countEvens([3, 5, 8, 12])

