function forLoop(array) {
for (var i = 0; i < 25; i++){
  if (i === 1){
  array.push("I am 1 strange loop.");
  }
    else {
    array.push(`I am ${i} strange loops.`)}
<<<<<<< HEAD
    
}
return array
=======
    return array
}
>>>>>>> 3f94c3d3edeb558e3616066d9606e9af7f02b343
}


function whileLoop(n) {
  
  while (n > 0){
    console.log(n--);
  }
  if (n === 0) {
    return "done"
  } 
}

function doWhileLoop(array){
  var i = 0
  function incrementVariable() {
  i = i + 1;
}
do {
  var newArray = array.pop
}while (array.length > 0 && incrementVariable())
return newArray
  
}
