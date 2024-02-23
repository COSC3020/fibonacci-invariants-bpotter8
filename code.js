function fib(n){

    let fibArr = [];

    fibArr[0] = 0;

    if(n === 0){
        return fibArr;
    }

    fibArr[1] = 1;

    if(n === 1){
        return fibArr;
    }
    
    for(let i = 2; i <= n; i++){
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }

    return fibArr;
}
