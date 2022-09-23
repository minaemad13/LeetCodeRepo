/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   var res= nums.indexOf(target, 0);
    if(res !== -1){
        return res
    }
    else{
        nums.push(target)
        res = nums.sort((a, b) => a - b).indexOf(target, 0);
        return res
    }

};