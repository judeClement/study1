
function sumofsq(array)
{
    let num=0;
    for (let i = 0; i < array.length; i++) {
        num+= Math.pow(array[i],2);      
    }
    return num;
}
let smsq=[2,8,3,5,10];
const result =sumofsq(smsq);
console.log(result);