// input Color for PROMPT


let i = ["one", "two", "three"];

function myArray(array){
  for (let i = 0; i < array.length; i++) {
    console.log(array[0]);
  }
}

myArray(i);

function colorArray(array) {
  array.push("blue", "red", "white", "green", "yellow");
  console.log(array);
  const colorInput = prompt();

  for (let i = 0; i < array.length; i++) {
    if (colorInput === array[i]) {
      console.log("yeah you got it");
      break;
    }
  }
}

colorArray([ "purple", "brown" ]);

function numberArray(array) {
  let sum = 0;

  for ( let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);

  if ( sum % 2 === 0) {
    console.log("Numbers are even");
  }
  else if ( sum % 2 === 1) {
    console.log("Numbers are odd");
  }
}

numberArray([1, 2, 4]);

function iterateArray(array, number) {
  for ( let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      console.log(array[i]);
    }
  }
}

iterateArray([2,5,7], 6);


function oneArray(array) {
  let average = 0;
  let newArray = [];
  for ( let i = 0; i < array.length; i++) {
    average += (array[i]);
  }
  average = average / array.length;

  for ( let j = 0; j < array.length; j++) {
      if (array[j] < average) {
        newArray.push(array[j]);
    }
    }

  console.log(average);
  console.log(newArray);
}

oneArray([2,4,9]);



function noValue(array, number) {
    if (number >= array.length){
      console.log("no value here");
    } else {
      console.log(array[number]);
    }
}
noValue([1,2,4], 2)




function arrayOfNums(array) {

  let mostFrequent = 1;
  let match = 0;
  let item;
  for(let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++){
      if( array[i] == array[j])
        match++;
      if (mostFrequent < match) {
        mostFrequent = match;
        item = array[i];
      }
    }
    match =0;
  }
  console.log(item + " " + mostFrequent + "number of times");
}

arrayOfNums([3,5,9,5]);


function doubleArray(array1, array2){
  let array = [] ;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if(array1[i] == array2[j]) {
        array.push(array1[i]);
      }
    }
  }
  console.log(array);
}

doubleArray(["steve", "gimli", "alice"], ["sarah", "gimli", "sir patrick"]);
