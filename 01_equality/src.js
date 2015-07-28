module.exports = {
  sameLength: function(string1, string2) {
    return (string1.length === string2.length);  
  },

firstGreater: function(string1, string2){
  return (string1 > string2 );
},
firstGreaterThanOrEqualTo: function(string1, string2){
return ( string1 >= string2 );
},

firstLengthGreater: function(string1, string2){
  return (string1.length > string2.length);
},

secondGreater: function(string1, string2){
  return(string1 < string2);
}

}
