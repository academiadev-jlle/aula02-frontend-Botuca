function repeat(value, execution){
  for (let iterator = 1; iterator <= value; iterator ++){
    execution(iterator);
  }
}

repeat(5, console.log); // 1, 2, 3, 4, 5

let soma = 0;
repeat(2, (x) => soma += x);
console.log("Soma = " + soma); // 3