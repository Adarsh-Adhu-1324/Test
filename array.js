
arr = []
//adding
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(3);

console.log(arr);


//removing
console.log(arr.pop(2));

console.log(arr.length, 'The array len')

//shift 
console.log(arr);
console.log(arr.shift());
console.log(arr);

for(let i=0; i <arr.length; i++){
    console.log('===',arr[i])
};


