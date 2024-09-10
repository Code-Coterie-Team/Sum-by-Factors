function sumOfDivided(lst) {
    let maxNum = Math.max(...lst);
    console.log(maxNum)
    let ans = [];
    for (let i = 2; i <= maxNum; i++){
        let numberToAdd = 0;
        for (let j = 0; j < lst.length; j++){
            if (isPrime(i) && lst[j] % i == 0){
                numberToAdd += lst[j];
            }
        }
        if(isPrime(i)){
            ans.push([i, numberToAdd]);
        }
    }
    return ans;
}

function isPrime(num) { 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            return false; 
        } 
    } 
    return num > 1; 
} 

console.log(sumOfDivided([12, 15]))

