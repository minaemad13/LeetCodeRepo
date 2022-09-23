/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   var  stack=[]
   if (s.length == 1){
       return false
   }
    if(s[0]== ")" ||s[0]== "]" || s[0]== "}"){return false}
    for (let i of s){
        if (i=="(" || i=="[" || i=="{"){
           stack.push(i) 
        }
        
        else if(i==")"&& stack.length != 0 && stack.at(-1) == '(' ){
              stack.pop() 
        }
        else if(i=="]"&& stack.length != 0 && stack.at(-1) == '[' ){
              stack.pop() 
        }
        else if(i=="}" && stack.length != 0 && stack.at(-1) == '{' ){
              stack.pop() 
        }
        else{
            return false
        }
        
    }
    if (stack.length){
        return false
    }
    return true
};