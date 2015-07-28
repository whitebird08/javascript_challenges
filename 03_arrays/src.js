module.exports = {

  first: function(array) {
    return(array[0]);
  },

  last: function(array){
    return(array[-1]);
  },

  empty: function(){
    return ([]); 
  },

  first_n: function(array, n){
    return(array.indexOf(n));
  }

}
