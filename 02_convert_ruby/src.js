/*
  In each of these examples some Ruby code is provided inline. Your job is to translate
  the Ruby code into JavaScript. Individual line comments (//) indicate where code should
  be placed.
*/

module.exports = {
  /*
    def return_array
      [1,2,3,4]
    end
  */

  returnArray: function() {
  
    return [1,2,3,4]
  
  },

  /*
    def divide(numerator, denominator)
      numerator / denominator
    end
  */

  divide: function(x,y){
    return(x / y);
  },

  /*
    def add(a,b)
      a + b
    end
  */

  add: function(x,y){
    return(x + y);
  },

  /*
    def power(base, exponent)
      base ** exponent
    end
  */

    power: function(x,y){
      return Math.pow(x,y);
    },

  /*
    def concatenate(string_1, string_2)
      string_1 + string_2
    end
  */

  concatenate: function (string1, string2){
   return (string1 + string2);

  },

    sub: function (string, a, b){
      if (string.indexOf(a) >= 0){
        var begin = string.indexOf(a)
        var end = begin + a.length
        return string.slice(0, begin) + b + string.slice(end, string.length)
      
      }

    }

   

}
  


