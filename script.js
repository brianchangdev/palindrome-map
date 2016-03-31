//No loops
//Must use .map() method


function palindromeMap(str){
    
    var stringToArray = str.split(' ');
    // first turn user inputed string into array of words
    
    var mapTheArray  = stringToArray.map(function(elmnt) {
      var reverseTheWords = elmnt.split('').reverse().join('');
    // reverse the chars in stringToArray using .map
    
	   return reverseTheWords === elmnt;
    
	  // go through each word in array, check to see if reversed words matches the first paramater or 'elmnt' of the function

        
    })
    return mapTheArray;
}

console.log(palindromeMap("stash and pop on this level"));
