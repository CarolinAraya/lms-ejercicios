const arr = [1,2,3,4,5,6,7,8,9];

const reverse = (array) => {

  var invert = [];

  for (var i = array.length -1; i >= 0; i--) {

    invert.push(array[i]);

  }
  console.log(invert);
  return invert;
};

reverse(arr);