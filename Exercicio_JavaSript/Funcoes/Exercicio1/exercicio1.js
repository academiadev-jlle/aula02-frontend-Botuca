function menor(...numbers){
  let menorNum = numbers[0];

  numbers.forEach(number =>{
    if(number < menorNum){
      menorNum = number;
    }
  });

  return menorNum;
}

let anwser = console.log('array: [0,2,4,-1,5,10,50]. Menor: ' + menor(0, 2, 4, -1, 5, 10, 50));
anwser = console.log('array: [4, 5, 1, 3]. Menor: ' + menor(4, 5, 1, 3));

