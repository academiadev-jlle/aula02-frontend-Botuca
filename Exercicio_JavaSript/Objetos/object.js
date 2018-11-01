let obj1 = { "nome": {"primeiro-nome": "Pedro", "ultimo-nome": "Silva"} };
let obj2 = { "nome": {"primeiro-nome": "Pedro", "ultimo-nome": "Silva"} };

console.log("Sem deepEqual " + (obj1 === obj2)); // false!
console.log("Com deepEqual: " + deepEqual(obj1, obj2)); // true!

function deepEqual(obj1, obj2) {
	for (let item in obj1) {
    if (obj1.hasOwnProperty(item) !== obj2.hasOwnProperty(item)){
      return false;
    }
		switch (typeof (obj1[item])) {
      case 'object':
        //console.log(typeof (obj1[item]));
        if (!deepEqual(obj1[item], obj2[item])) {
          return false;
        }
				break;
      default:
        //console.log(typeof (obj1[item]));
				if (obj1[item] != obj2[item]){
          return false;
        } 
		}
	}
  //caso o obj2 tenha itens extras
  for (let item in obj2) {
		if (typeof (obj1[item]) == 'undefined'){
      return false;
    } 
  }
	return true;
}