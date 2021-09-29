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
function countEvens(arraynum){
let arr = [];
for (let i = 1; i <=arraynum[i]; i++) {
if (i %2 === 0) {arr.push(i); console.log (arr);
}
}
} // Still working on bonus problem #5

countToTen();
countFromOne(5);
countEveryEven(10);
countEveryOdd(10);
countEvens([10, 6, 7])

