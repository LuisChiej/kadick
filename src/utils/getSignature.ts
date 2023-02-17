const getPresentDay = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = Math.abs(now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

/**
 * 
 * @param m Number of days
 * 
 * @returns nth primenumber
 */
const sieveOfEratosthenes = (m: number): number => {
    const n = 2473;

    let prime = Array.from({ length: n+1 }, (_, i) => true);
    const allPrimes = [];
 
    for (let p = 2; p * p <= n; p++) {
        // If prime[p] is not changed, then it is a prime
        if (prime[p] == true) {
            // Update all multiples of p
            for (let i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }
 
    // Print all prime numbers
    for (let i = 2; i <= n; i++) {
        if (prime[i] == true) {
            allPrimes.push(i);
        }
    }

    return allPrimes[m - 1];
}


const getSignature = (): number => {
    const day = getPresentDay();
    return sieveOfEratosthenes(day) + day;
}

export default getSignature;