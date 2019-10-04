'use strict';

var findRandomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var roundRandomInteger = function (min, max, rounding) {
  return Math.floor(findRandomInteger(min, max) / rounding) * rounding;
};

var shuffle = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var swap = array[j];
    array[j] = array[i];
    array[i] = swap;
  }
  return array;
};

var createArraySerialIntegerUrl = function (number) {
  var array = [];
  for (var i = 0; i < number; i++) {
    array.push('img/avatars/user' + (i < 9 ? '0' : '') + (i + 1) + '.png');
  }
  return array;
};

var concatenateItemArray = function (array) {
  var string = '' + array[0];
  if (array.length > 1) {
    for (var i = 1; i < array.length; i++) {
      string = string + ' ' + array[i];
    }
  }
  return string;
};

var findRandomItemArray = function (array) {
  return array[findRandomInteger(0, array.length - 1)];
};

var findRandomSliceShuffleArray = function (array) {
  return shuffle(array).slice(findRandomInteger(0, array.length - 1));
};
