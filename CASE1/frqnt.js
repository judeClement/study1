arr = [22,54,78,52,43,22,54,98,22]; 
  
arr.sort((a, b) => a - b); 

let count = 1, 
    max = 0, 
    element; 
  
for (let i = 1; i < arr.length; ++i) { 
    if (arr[i] === arr[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        element = arr[i]; 
    } 
} 
console.log('Most frequent element is -' +element);