//1.Create an algorithm that displays n number of digits of the fibonacci series,
// e.g.: input fibo(5), output "0,1,1,2,3".
//Extra if you can do it with recursion

const fibonacci = (n) => {
    if( n == 1 || n == 0 ) {
        console.log(n);
    }

    let result = 0;
    let before = 0;
    let after = 1;

    for( let i=1 ; i<n ; i++ ) {
        result = before + after;
        before = after;
        after = result;
        console.log(result);
    }
}

fibonacci(8);