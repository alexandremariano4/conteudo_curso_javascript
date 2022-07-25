function parimpar(n){
    if (n%2==0){
        return 'par'
    }
    else{
        return 'impar'
    }
}

function soma(n1=1,n2=0){
    return n1+n2
}


var a = parimpar(12)
console.log(a);
console.log(`Soma entre 2 e 5 = ${soma(n1=0)}`)

var fun = soma(3,5)
console.log(fun);

