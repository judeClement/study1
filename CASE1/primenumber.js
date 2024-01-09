let arr=[19,20,36,80,88];
if (arr[0]<=1) 
   {
    console.log('1 is neither prime nor composite OR not possible')
    }
 else if (arr[0]%2== 0 || arr[0]%3 ==0 )
{
    console.log(+arr[0]+'is a not prime number')
}else
{
    console.log(+arr[0]+'is a prime number')
}