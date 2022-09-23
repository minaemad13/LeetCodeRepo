/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    
    for(let i =digits.length-1 ;i>=0 ; i-- ){
        
        if(digits[i]===9 && i>0){
            digits[i]=0
        }
        else if (digits[i]===9 && i===0){
            digits[i]=0
            digits.unshift(1)
        }
        else{
             digits[i]= digits[i]+1
            break;
        }
        
        
        
    }
    return digits
};