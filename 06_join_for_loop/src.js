/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {
  
  joinWithFor: function(list) {
    // your code here
    return list.join('');
  },
 
  joinWithForAndIndex: function(array) {
    var newArray = [];

    for(var i=0; i < array.length; i++){
      newArray.push(array[i]);
      newArray.push((i));
       }  
       return newArray.join("")
  },

 
  joinWithoutOddCharacters: function(array){
    
    var newArray = [];
  
    for (var i=0; i<array.length; i+=2){
   
          newArray.push(array[i])   
    }
    return newArray.join('')
  },
  
 
    joinWithForAndToken: function(array, token){
      var newArray = [];
      for(var i=0; i<array.length; i++)
        newArray.push(array[i])
      return newArray.join(token);
    },
 
  joinWithForAndAlternatingTokens: function(array, token1, token2){
    var newArray = [];
    var output = [];
      for (var i=0; i<array.length; i++){
      newArray.push(array[i])
      }
         newArray.join(token1)
    
      for(var j=0; j<newArray.length; j++){
        if(newArray[i]%4==0){newArray[i].replace(token2)
        }
       } 
   output.push(newArray)
   return output
  }
 
}
