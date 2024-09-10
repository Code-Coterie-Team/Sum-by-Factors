function sumOfDivided(lst) {
    if (lst.length === 0) return [];
    
    let primeFactors = new Map();
    
    for (let num of lst) {
        let absNum = Math.abs(num);
        let factor = 2;
        
        while (factor * factor <= absNum) {
            if (absNum % factor === 0) {
                if (!primeFactors.has(factor)) {
                    primeFactors.set(factor, 0);
                }
                primeFactors.set(factor, primeFactors.get(factor) + num);
                while (absNum % factor === 0) {
                    absNum /= factor;
                }
            }
            factor++;
        }
        
        if (absNum > 1) {
            if (!primeFactors.has(absNum)) {
                primeFactors.set(absNum, 0);
            }
            primeFactors.set(absNum, primeFactors.get(absNum) + num);
        }
    }
    
    return Array.from(primeFactors)
                .sort((a, b) => a[0] - b[0]);
}