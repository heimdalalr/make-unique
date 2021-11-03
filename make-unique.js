function makeUnique(str){
    let result ='';
    new Set(str).forEach(char => result += char);
    return result;
}

console.log(makeUnique('helloworld'));