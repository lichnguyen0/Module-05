function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let sum: number = 0;
for (let i = 0; i < 10; i++) {
    let fib: number = fibonacci(i);
    console.log(fib);
    sum += fib;
}
console.log("Tong cac so Fibonacci " + sum);