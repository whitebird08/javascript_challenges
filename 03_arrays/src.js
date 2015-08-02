module.exports = {

  first: function(array) {
    return(array[0]);
  },

  last: function(array){
    return(array.slice(-1)[0]);
  },

  empty: function(array){
 if (array.length > 0 )return false;
   else return true;
  },

  first_n: function(array, n){
  return array.slice(0,n);
  },

  last_n: function(array, n){
    if (n > array.length) return array;
    return array.slice(n-1);
  },

  drop: function(array, n){
      return array.splice(n)
  },

  union: function(array1, array2){
    var newArray =[];
    return newArray.concat(array1, array2);
  },

  intersection: function(array1, array2){
    var output = [];
    for(a=0; a<array1.length; a++){
      for(b=0; b<array2.length; b++){
        if (array1[a] === array2[b]){
          output.push(array1[a])
          }
      }
      
    }  
    return output;
  }




}
