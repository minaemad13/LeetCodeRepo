/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    map={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    sum =0
    for (let i=s.length-1 ; i>=0;i--){
        
        
        if (s[i] == 'V' &&i != 0 && s[i - 1] == 'I'){
                sum += 4
                i -= 1}
            else if (s[i] == 'X' && i != 0 && s[i - 1] == 'I'){
                sum += 9
                i -= 1}
            else if (s[i] == 'L' && i != 0 && s[i - 1] == 'X'){
                sum += 40
                i -= 1}
            else if (s[i]  == 'C' && i != 0 && s[i - 1] == 'X'){
                sum += 90
                i -= 1}
            else if (s[i] == 'D' && i != 0 && s[i - 1] == 'C'){
                sum += 400
                i -= 1}
            else if (s[i] == 'M' && i != 0 && s[i - 1] == 'C'){
                sum += 900
                i -= 1}
            else{
                sum += map[s[i]]
                
            }
        
    }
    return sum
    
};