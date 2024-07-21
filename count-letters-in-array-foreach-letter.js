let letter = ['a','b','a','b','c','a'];

let count = {};

letter.forEach(item =>{
	if(count[item]){
  	count[item]++;
  }else{
  	count[item] = 1;
  }
})
console.log(count);