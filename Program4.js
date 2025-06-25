function countDivisors(input){
    let divisors = [1,2,3,4,5,6,7,8,9];
    let result = new Map();
    for(let i=0;i<divisors.length;i++){
        for(let j=0;j<input.length;j++){
            if(input[j]%divisors[i]==0){
                result.set(divisors[i],(result.get(divisors[i])||0)+1)
            }
        }
    }
    return Object.fromEntries(result);
}

console.log(countDivisors([1,2,8,9,12,46,76,82,15,20,30]))