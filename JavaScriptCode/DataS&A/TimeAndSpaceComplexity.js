// Dry-run on array [3, 1, 4, 1, 5, 9]
// Traverse and print an array


let arr = [3, 1, 4, 1, 5, 9];
let min = Infinity;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min ){
        min = arr[i];
    }
    
}

console.log(min)

//Sum of all element
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);